import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faArrowLeft, faUser, faBox, faFileAlt, 
    faPhone, faEnvelope, faMapMarkerAlt, faBriefcase,
    faCrown, faDownload, faImage, faExclamationTriangle,
    faTrashAlt, faEdit, faTimes, faCheckCircle, faStar, faShieldHalved, faBuilding,
    faCartPlus, faLayerGroup, faGem, faChartLine, faShieldVirus
} from '@fortawesome/free-solid-svg-icons';
import './Dashboard.css';

import { CATEGORIES, SUB_CATEGORIES, getCategorySuggestions, getSubCategorySuggestions } from '../services/categoryData';
import { COUNTRIES, getStateSuggestions, INDIAN_STATES } from '../services/locationData';
import DynamicSellerCatalog from '../Catalog/DynamicSellerCatalog';


const AdminSellerDetail = () => {
    const { id, tab } = useParams();
    const navigate = useNavigate();
    const currentTab = tab || 'profile'; // Default to profile
    const [seller, setSeller] = useState(null);
    const [products, setProducts] = useState([]);
    const [cardCategories, setCardCategories] = useState({}); // To track dropdown selection per card
    const [catalogs, setCatalogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [editingProduct, setEditingProduct] = useState(null);
    
    // Add Product Form States
    const [showAddModal, setShowAddModal] = useState(false);
    const [productTitle, setProductTitle] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productSubCategory, setProductSubCategory] = useState('');
    const [categorySuggestions, setCategorySuggestions] = useState([]);
    const [showCategorySuggestions, setShowCategorySuggestions] = useState(false);
    const [subCategorySuggestions, setSubCategorySuggestions] = useState([]);
    const [showSubCategorySuggestions, setShowSubCategorySuggestions] = useState(false);
    const [productCountry, setProductCountry] = useState('India');
    const [productState, setProductState] = useState('');
    const [productCity, setProductCity] = useState('');
    const [productExperience, setProductExperience] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productMoq, setProductMoq] = useState('');
    const [productSpecs, setProductSpecs] = useState([]); // [{key, value}]
    const [stateSuggestions, setStateSuggestions] = useState([]);
    const [showStateSuggestions, setShowStateSuggestions] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Catalog Configuration States
    const [catSubtitle, setCatSubtitle] = useState('');
    const [catAbout, setCatAbout] = useState('');
    const [catHeroTitle, setCatHeroTitle] = useState('');
    const [catHeroDesc, setCatHeroDesc] = useState('');
    const [catHeroImage, setCatHeroImage] = useState(null); // File object
    const [sellerLogo, setSellerLogo] = useState(null); // File object
    const [catVerification, setCatVerification] = useState('Verified');
    const [catYears, setCatYears] = useState('');
    const [catResponseRate, setCatResponseRate] = useState('');
    const [catResponseTime, setCatResponseTime] = useState('');
    const [catCerts, setCatCerts] = useState([]);
    const [catFeaturedIds, setCatFeaturedIds] = useState([]);
    const [catAboutImage, setCatAboutImage] = useState(null); // New state for About Section Image
    const [isUpdatingCatalog, setIsUpdatingCatalog] = useState(false);
    const [catalogConfigTab, setCatalogConfigTab] = useState('general');
    const [catalogRefreshKey, setCatalogRefreshKey] = useState(0);

    // Product Advanced States (for Add)
    const [productStock, setProductStock] = useState('In Stock');
    const [productTiered, setProductTiered] = useState([]);
    const [productFeatures, setProductFeatures] = useState([]);

    // Form Handlers
    const handleCategoryChange = (val) => {
        setProductCategory(val);
        setProductSubCategory('');
        const suggestions = getCategorySuggestions(val);
        setCategorySuggestions(suggestions);
        setShowCategorySuggestions(true);
    };

    const handleCategorySelect = (cat) => {
        setProductCategory(cat);
        setProductSubCategory('');
        setShowCategorySuggestions(false);
        const subList = SUB_CATEGORIES[cat.toUpperCase()] || [];
        setSubCategorySuggestions(subList.slice(0, 10));
    };

    const handleSubCategoryChange = (val) => {
        setProductSubCategory(val);
        const suggestions = getSubCategorySuggestions(productCategory, val);
        setSubCategorySuggestions(suggestions);
        setShowSubCategorySuggestions(true);
    };

    const handleSubCategorySelect = (sub) => {
        setProductSubCategory(sub);
        setShowSubCategorySuggestions(false);
    };

    const handleStateChange = (val) => {
        setProductState(val);
        const suggestions = getStateSuggestions(val);
        setStateSuggestions(suggestions);
        setShowStateSuggestions(true);
    };

    const handleStateSelect = (st) => {
        setProductState(st);
        setShowStateSuggestions(false);
    };

    const handleAddSpec = (isEdit = false) => {
        if (isEdit) {
            const newSpecs = [...(editingProduct.specifications || []), { key: '', value: '' }];
            setEditingProduct({ ...editingProduct, specifications: newSpecs });
        } else {
            setProductSpecs([...productSpecs, { key: '', value: '' }]);
        }
    };

    const handleRemoveSpec = (index, isEdit = false) => {
        if (isEdit) {
            const newSpecs = (editingProduct.specifications || []).filter((_, i) => i !== index);
            setEditingProduct({ ...editingProduct, specifications: newSpecs });
        } else {
            setProductSpecs(productSpecs.filter((_, i) => i !== index));
        }
    };

    const handleUpdateSpec = (index, field, value, isEdit = false) => {
        if (isEdit) {
            const newSpecs = [...(editingProduct.specifications || [])];
            newSpecs[index][field] = value;
            setEditingProduct({ ...editingProduct, specifications: newSpecs });
        } else {
            const newSpecs = [...productSpecs];
            newSpecs[index][field] = value;
            setProductSpecs(newSpecs);
        }
    };

    const handleAddTier = (isEdit = false) => {
        if (isEdit) {
            const newTiers = [...(editingProduct.tieredPricing || []), { range: '', price: '' }];
            setEditingProduct({ ...editingProduct, tieredPricing: newTiers });
        } else {
            setProductTiered([...productTiered, { range: '', price: '' }]);
        }
    };

    const handleRemoveTier = (index, isEdit = false) => {
        if (isEdit) {
            const newTiers = (editingProduct.tieredPricing || []).filter((_, i) => i !== index);
            setEditingProduct({ ...editingProduct, tieredPricing: newTiers });
        } else {
            setProductTiered(productTiered.filter((_, i) => i !== index));
        }
    };

    const handleUpdateTier = (index, field, value, isEdit = false) => {
        if (isEdit) {
            const newTiers = [...(editingProduct.tieredPricing || [])];
            newTiers[index][field] = value;
            setEditingProduct({ ...editingProduct, tieredPricing: newTiers });
        } else {
            const newTiers = [...productTiered];
            newTiers[index][field] = value;
            setProductTiered(newTiers);
        }
    };

    const handleAddFeature = (isEdit = false) => {
        if (isEdit) {
            const newFeats = [...(editingProduct.keyFeatures || []), ''];
            setEditingProduct({ ...editingProduct, keyFeatures: newFeats });
        } else {
            setProductFeatures([...productFeatures, '']);
        }
    };

    const handleRemoveFeature = (index, isEdit = false) => {
        if (isEdit) {
            const newFeats = (editingProduct.keyFeatures || []).filter((_, i) => i !== index);
            setEditingProduct({ ...editingProduct, keyFeatures: newFeats });
        } else {
            setProductFeatures(productFeatures.filter((_, i) => i !== index));
        }
    };

    const handleUpdateFeature = (index, value, isEdit = false) => {
        if (isEdit) {
            const newFeats = [...(editingProduct.keyFeatures || [])];
            newFeats[index] = value;
            setEditingProduct({ ...editingProduct, keyFeatures: newFeats });
        } else {
            const newFeats = [...productFeatures];
            newFeats[index] = value;
            setProductFeatures(newFeats);
        }
    };

    const handleProductSubmit = async (isPublished = false) => {
        if (!productTitle || selectedImages.length === 0) {
            return alert('Please provide Title and at least one image.');
        }

        setIsSubmitting(true);
        const formData = new FormData();
        formData.append('title', String(productTitle).trim());
        formData.append('description', String(productDescription).trim());
        formData.append('category', productCategory || 'General');
        formData.append('subCategory', productSubCategory || 'General');
        formData.append('country', productCountry);
        formData.append('state', productState);
        formData.append('city', productCity);
        formData.append('experience', productExperience);
        formData.append('price', productPrice);
        formData.append('moq', productMoq);
        formData.append('specifications', JSON.stringify(productSpecs));
        formData.append('tieredPricing', JSON.stringify(productTiered));
        formData.append('stockStatus', productStock);
        formData.append('keyFeatures', JSON.stringify(productFeatures));
        formData.append('isPublished', isPublished);
        
        selectedImages.forEach((image) => {
            formData.append('images', image);
        });

        try {
            const response = await axios.post(`${apiEndpoint}/products/add/${id}`, formData);
            if (response.status === 200 || response.status === 201) {
                alert('Product successfully added for this seller!');
                // Reset form
                setProductTitle('');
                setProductDescription('');
                setProductCategory('');
                setProductSubCategory('');
                setProductCountry('India');
                setProductState('');
                setProductCity('');
                setProductExperience('');
                setSelectedImages([]);
                setShowAddModal(false);
                
                // Refresh list
                const prodRes = await axios.get(`${apiEndpoint}/products/${id}`);
                setProducts(prodRes.data?.products || []);
            }
        } catch (error) {
            console.error("Upload failed:", error);
            alert(`Upload failed: ${error.response?.data?.message || error.message}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    const apiEndpoint = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3005';

    const palette = {
        navy: '#1e3a8a',
        lightBlue: '#3b82f6',
        orange: '#f97316',
        bg: '#f8fafc',
        cardBg: '#ffffff',
        text: '#1e293b',
        subText: '#64748b',
        premium: '#f59e0b',
        advanced: '#3b82f6',
        danger: '#ef4444'
    };

    const getImgUrl = (path) => {
        if (!path) return null;
        let actualPath = path;
        while (Array.isArray(actualPath) && actualPath.length > 0) actualPath = actualPath[0];
        if (!actualPath || typeof actualPath !== 'string') return null;
        if (actualPath.startsWith('http')) return actualPath;
        return `${apiEndpoint}${actualPath.startsWith('/') ? '' : '/'}${actualPath.replace(/\\/g, '/')}`;
    };

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                setLoading(true);
                setError('');
                
                let userData = null;
                
                // Try fetching as a Seller (User collection)
                try {
                    const userRes = await axios.get(`${apiEndpoint}/login?id=${id}`);
                    if (userRes.data.user) {
                        userData = userRes.data.user;
                    }
                } catch (e) {
                    console.log('Not a seller, trying buyer...');
                }

                // If not found in users, try fetching as a Buyer
                if (!userData) {
                    try {
                        const buyerRes = await axios.get(`${apiEndpoint}/buyer/${id}`);
                        if (buyerRes.data.buyer) {
                            userData = { ...buyerRes.data.buyer, role: 'buyer' };
                        }
                    } catch (e) {
                        console.log('Not a buyer either');
                    }
                }

                if (userData) {
                    setSeller(userData);
                    setCatSubtitle(userData.catalogSubtitle || '');
                    setCatAbout(userData.aboutUs || '');
                    setCatHeroTitle(userData.catalogHeroTitle || '');
                    setCatHeroDesc(userData.catalogHeroDescription || '');
                    // Centralized contact info - no longer editable
                    setCatVerification(userData.verificationStatus || 'Verified');
                    setCatYears(userData.yearsInBusiness || '');
                    setCatResponseRate(userData.responseRate || '');
                    setCatResponseTime(userData.responseTime || '');
                    setCatCerts(userData.certifications || []);
                    setCatFeaturedIds(userData.featuredProductIds || []);
                    setCatAboutImage(userData.aboutUsImage || null);
                    // Only fetch products/catalogs for sellers
                    if (userData.role === 'seller') {
                        const prodRes = await axios.get(`${apiEndpoint}/products/${id}`);
                        setProducts(prodRes.data?.products || []);

                        const catRes = await axios.get(`${apiEndpoint}/catalog/${id}`);
                        setCatalogs(catRes.data?.catalogs || []);
                    }
                } else {
                    setError('User details not found in database.');
                }

                setLoading(false);
            } catch (err) {
                console.error('Error fetching details:', err);
                setError(`Failed to load details: ${err.message}`);
                setLoading(false);
            }
        };

        fetchDetails();
    }, [id, apiEndpoint]);

    const handleDeleteProduct = async (pId) => {
        if (window.confirm('Delete this product permanently?')) {
            try {
                await axios.delete(`${apiEndpoint}/delete-product/${id}/${pId}`);
                setProducts(products.filter(p => p._id !== pId));
            } catch (err) {
                alert('Deletion failed');
            }
        }
    };

    const handleTogglePublish = async (pId, currentStatus, categoryStr = null) => {
        try {
            const payload = { isPublished: !currentStatus };
            if (categoryStr) {
                payload.category = categoryStr;
            }
            await axios.put(`${apiEndpoint}/products/publish/${id}/${pId}`, payload);
            setProducts(products.map(prod => prod._id === pId ? { ...prod, isPublished: !currentStatus, category: categoryStr || prod.category } : prod));
            if (!currentStatus) {
                const targetProduct = products.find(prod => prod._id === pId);
                alert(`Product published to ${categoryStr || (targetProduct && targetProduct.category) || 'General'} page`);
            }
        } catch (err) {
            alert('Failed to update status');
        }
    };

    const handleUpdateProduct = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${apiEndpoint}/products/update/${id}/${editingProduct._id}`, {
                title: Array.isArray(editingProduct.title) ? editingProduct.title[0] : editingProduct.title,
                description: Array.isArray(editingProduct.description) ? editingProduct.description[0] : editingProduct.description,
                price: editingProduct.price,
                moq: editingProduct.moq,
                unit: editingProduct.unit,
                specifications: editingProduct.specifications,
                tieredPricing: editingProduct.tieredPricing,
                keyFeatures: editingProduct.keyFeatures,
                stockStatus: editingProduct.stockStatus || 'In Stock',
                category: editingProduct.category,
                subCategory: editingProduct.subCategory,
                country: editingProduct.country,
                state: editingProduct.state,
                city: editingProduct.city,
                isPublished: editingProduct.isPublished,
                experience: editingProduct.experience
            });
            setProducts(products.map(p => p._id === editingProduct._id ? editingProduct : p));
            setCatalogRefreshKey(prev => prev + 1);
            setEditingProduct(null);
            alert('Product updated successfully');
        } catch (err) {
            alert('Update failed');
        }
    };

    const handleCatalogUpdate = async () => {
        setIsUpdatingCatalog(true);
        const formData = new FormData();
        formData.append('isCatalogActive', 'true');
        formData.append('catalogSubtitle', catSubtitle);
        formData.append('aboutUs', catAbout);
        formData.append('catalogHeroTitle', catHeroTitle);
        formData.append('catalogHeroDescription', catHeroDesc);
        // removed contact overrides
        formData.append('verificationStatus', catVerification);
        formData.append('yearsInBusiness', catYears);
        formData.append('responseRate', catResponseRate);
        formData.append('responseTime', catResponseTime);
        formData.append('certifications', JSON.stringify(catCerts));
        formData.append('featuredProductIds', JSON.stringify(catFeaturedIds));
        
        if (catHeroImage) formData.append('heroImage', catHeroImage);
        if (catAboutImage && typeof catAboutImage !== 'string') formData.append('aboutImage', catAboutImage);
        if (sellerLogo) formData.append('sellerLogo', sellerLogo);

        try {
            const response = await axios.put(`${apiEndpoint}/update/${id}`, formData);
            if (response.status === 200) {
                setSeller(response.data.user);
                setCatalogRefreshKey(prev => prev + 1);
                alert('Catalog Configuration Updated Successfully!');
            }
        } catch (error) {
            console.error("Catalog update failed:", error);
            alert('Failed to update catalog settings');
        } finally {
            setIsUpdatingCatalog(false);
        }
    };

    const AddProductModal = ({ onClose }) => {
        const [isPublishedForm, setIsPublishedForm] = useState(false);

        return (
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3000, backdropFilter: 'blur(10px)' }}>
                <div style={{ background: '#fff', width: '95%', maxWidth: '900px', maxHeight: '90vh', borderRadius: '35px', padding: '2.5rem', boxShadow: '0 30px 80px rgba(0,0,0,0.3)', position: 'relative', overflowY: 'auto' }}>
                    <button onClick={onClose} style={{ position: 'absolute', right: '25px', top: '25px', background: '#f8fafc', border: 'none', width: '36px', height: '36px', borderRadius: '50%', cursor: 'pointer', color: palette.subText, zIndex: 10 }}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                    
                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ color: palette.navy, fontSize: '1.8rem', fontWeight: '900', marginBottom: '0.5rem' }}>Add Product Details</h3>
                        <p style={{ color: palette.subText, fontSize: '0.9rem' }}>Introduce new inventory for this seller to the marketplace</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                        <div style={{ gridColumn: 'span 2' }}>
                            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '900', color: palette.navy, marginBottom: '8px', textTransform: 'uppercase' }}>PRODUCT TITLE</label>
                            <input 
                                type="text" 
                                className="dash-input"
                                value={productTitle} 
                                onChange={(e) => setProductTitle(e.target.value)}
                                placeholder="Enter Product Name..."
                                style={{ width: '100%', padding: '1rem', borderRadius: '15px', border: '1.5px solid #e2e8f0', outline: 'none' }}
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '900', color: palette.navy, marginBottom: '8px', textTransform: 'uppercase' }}>TARGET PAGE (CATEGORY)</label>
                            <select 
                                value={productCategory} 
                                onChange={(e) => {
                                    setProductCategory(e.target.value);
                                    setProductSubCategory('');
                                    const subList = SUB_CATEGORIES[e.target.value.toUpperCase()] || [];
                                    setSubCategorySuggestions(subList.slice(0, 10));
                                }}
                                style={{ width: '100%', padding: '1rem', borderRadius: '15px', border: '1.5px solid #e2e8f0', outline: 'none', background: '#fff', fontSize: '0.9rem', fontWeight: '700' }}
                            >
                                <option value="">Select Target Page...</option>
                                <option value="Rice">Rice Supplier</option>
                                <option value="Sarees">Saree Supplier</option>
                                <option value="Spices">Spices Dealer</option>
                                <option value="Agriculture">Vegetable Supplier</option>
                                <option value="Textiles">Textiles & Garments</option>
                                <option value="Industrial">Industrial Machinery</option>
                                <option value="Electronics">Electronics & Electrical</option>
                                <option value="Chemicals">Chemicals & Allied</option>
                                <option value="Food">Food & Beverages</option>
                                <option value="Construction">Construction & Real Estate</option>
                                <option value="Packaging">Packaging & Paper</option>
                                <option value="Medical">Medical & Healthcare</option>
                                <option value="Home">Home Decor & Furniture</option>
                                <option value="Beauty">Perfumes and Skin Care</option>
                                <option value="CNC Machines">CNC Machines</option>
                                <option value="Mustard Oil">Mustard Oil</option>
                                <option value="Fruits">Fruits Supplier</option>
                                <option value="Fruit Powder">Fruit Powder Supplier</option>
                                <option value="Jewellery">Jewellery Dealer</option>
                                <option value="Dresses">Dresses & Garments</option>
                                <option value="Dry Fruits">Dry Fruits Dealer</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div style={{ position: 'relative', opacity: productCategory ? 1 : 0.5 }}>
                            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '900', color: palette.navy, marginBottom: '8px', textTransform: 'uppercase' }}>SUB-CATEGORY</label>
                            <input 
                                type="text" 
                                className="dash-input"
                                value={productSubCategory} 
                                onChange={(e) => handleSubCategoryChange(e.target.value)}
                                onFocus={() => productCategory && handleSubCategoryChange(productSubCategory)}
                                onBlur={() => setTimeout(() => setShowSubCategorySuggestions(false), 200)}
                                disabled={!productCategory}
                                placeholder={productCategory ? "Select or type sub-category..." : "Select Category first"}
                                style={{ width: '100%', padding: '1rem', borderRadius: '15px', border: '1.5px solid #e2e8f0', outline: 'none' }}
                                autoComplete="off"
                            />
                            {showSubCategorySuggestions && subCategorySuggestions.length > 0 && (
                                <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', zIndex: 10, maxHeight: '200px', overflowY: 'auto' }}>
                                    {subCategorySuggestions.map((s, i) => (
                                        <div key={i} onMouseDown={() => handleSubCategorySelect(s)} style={{ padding: '12px 20px', cursor: 'pointer', borderBottom: '1px solid #f1f5f9' }} onMouseEnter={(e) => e.target.style.background = '#f8fafc'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>{s}</div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div>
                            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '900', color: palette.navy, marginBottom: '8px', textTransform: 'uppercase' }}>COUNTRY</label>
                            <select 
                                value={productCountry} 
                                onChange={(e) => {
                                    setProductCountry(e.target.value);
                                    if (e.target.value !== 'India') setProductState('');
                                }}
                                style={{ width: '100%', padding: '1rem', borderRadius: '15px', border: '1.5px solid #e2e8f0', outline: 'none', background: '#fff' }}
                            >
                                {COUNTRIES.map((c, i) => <option key={i} value={c}>{c}</option>)}
                            </select>
                        </div>

                        <div style={{ position: 'relative' }}>
                            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '900', color: palette.navy, marginBottom: '8px', textTransform: 'uppercase' }}>STATE / PROVINCE</label>
                            {productCountry === 'India' ? (
                                <select 
                                    value={productState} 
                                    onChange={(e) => setProductState(e.target.value)}
                                    style={{ width: '100%', padding: '1rem', borderRadius: '15px', border: '1.5px solid #e2e8f0', outline: 'none', background: '#fff' }}
                                >
                                    <option value="">Select State</option>
                                    {INDIAN_STATES.map((s, i) => <option key={i} value={s}>{s}</option>)}
                                </select>
                            ) : (
                                <input 
                                    type="text" 
                                    value={productState} 
                                    onChange={(e) => setProductState(e.target.value)}
                                    placeholder="Enter province or state..."
                                    style={{ width: '100%', padding: '1rem', borderRadius: '15px', border: '1.5px solid #e2e8f0', outline: 'none' }}
                                />
                            )}
                        </div>
                        
                        <div>
                            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '900', color: palette.navy, marginBottom: '8px', textTransform: 'uppercase' }}>CITY (OPTIONAL)</label>
                            <input 
                                type="text" 
                                value={productCity} 
                                onChange={(e) => setProductCity(e.target.value)}
                                placeholder="Enter city name..."
                                style={{ width: '100%', padding: '1rem', borderRadius: '15px', border: '1.5px solid #e2e8f0', outline: 'none' }}
                            />
                        </div>

                        <div style={{ gridColumn: 'span 2' }}>
                            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '900', color: palette.navy, marginBottom: '8px', textTransform: 'uppercase' }}>BUSINESS EXPERIENCE</label>
                            <input 
                                type="text" 
                                value={productExperience} 
                                onChange={(e) => setProductExperience(e.target.value)}
                                placeholder="e.g. 5 Years, 10+ Years..."
                                style={{ width: '100%', padding: '1rem', borderRadius: '15px', border: '1.5px solid #e2e8f0', outline: 'none' }}
                            />
                        </div>

                        <div style={{ gridColumn: 'span 2' }}>
                            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '900', color: palette.navy, marginBottom: '8px', textTransform: 'uppercase' }}>DESCRIPTION</label>
                            <textarea 
                                value={productDescription} 
                                onChange={(e) => setProductDescription(e.target.value)}
                                placeholder="Detail product specifications..."
                                style={{ width: '100%', padding: '1rem', borderRadius: '15px', border: '1.5px solid #e2e8f0', outline: 'none', minHeight: '100px', resize: 'vertical' }}
                            />
                        </div>

                        <div style={{ gridColumn: 'span 1' }}>
                            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '900', color: palette.navy, marginBottom: '8px', textTransform: 'uppercase' }}>PRICE (₹)</label>
                            <input type="text" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} placeholder="e.g. 500" style={{ width: '100%', padding: '1rem', borderRadius: '15px', border: '1.5px solid #e2e8f0' }} />
                        </div>
                        <div style={{ gridColumn: 'span 1' }}>
                            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '900', color: palette.navy, marginBottom: '8px', textTransform: 'uppercase' }}>MOQ</label>
                            <input type="text" value={productMoq} onChange={(e) => setProductMoq(e.target.value)} placeholder="e.g. 100 Units" style={{ width: '100%', padding: '1rem', borderRadius: '15px', border: '1.5px solid #e2e8f0' }} />
                        </div>

                        <div style={{ gridColumn: 'span 2', padding: '1.5rem', background: '#f8fafc', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <h4 style={{ fontSize: '0.9rem', fontWeight: '900', color: palette.navy, margin: 0 }}>TIERED PRICING STRUCTURE</h4>
                                <button type="button" onClick={() => handleAddTier(false)} style={{ padding: '0.5rem 1rem', background: palette.teal || '#00f5ff', color: palette.navy, border: 'none', borderRadius: '8px', fontSize: '0.75rem', fontWeight: '800', cursor: 'pointer' }}>+ ADD TIER</button>
                            </div>
                            <div style={{ display: 'grid', gap: '0.8rem' }}>
                                {productTiered.map((tier, idx) => (
                                    <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                        <input type="text" value={tier.range} onChange={(e) => handleUpdateTier(idx, 'range', e.target.value, false)} placeholder="e.g. 100-500 Units" style={{ flex: 1, padding: '0.6rem', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                                        <input type="text" value={tier.price} onChange={(e) => handleUpdateTier(idx, 'price', e.target.value, false)} placeholder="e.g. $45" style={{ flex: 1, padding: '0.6rem', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                                        <button type="button" onClick={() => handleRemoveTier(idx, false)} style={{ background: '#fee2e2', color: '#ef4444', border: 'none', width: '30px', height: '30px', borderRadius: '5px', cursor: 'pointer' }}>✕</button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div style={{ gridColumn: 'span 2', padding: '1.5rem', background: '#f8fafc', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <h4 style={{ fontSize: '0.9rem', fontWeight: '900', color: palette.navy, margin: 0 }}>KEY PRODUCT FEATURES</h4>
                                <button type="button" onClick={() => handleAddFeature(false)} style={{ padding: '0.5rem 1rem', background: palette.navy, color: '#fff', border: 'none', borderRadius: '8px', fontSize: '0.75rem', fontWeight: '800', cursor: 'pointer' }}>+ ADD FEATURE</button>
                            </div>
                            <div style={{ display: 'grid', gap: '0.8rem' }}>
                                {productFeatures.map((feat, idx) => (
                                    <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                        <input type="text" value={feat} onChange={(e) => handleUpdateFeature(idx, e.target.value, false)} placeholder="e.g. High precision industrial grade" style={{ flex: 1, padding: '0.6rem', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                                        <button type="button" onClick={() => handleRemoveFeature(idx, false)} style={{ background: '#fee2e2', color: '#ef4444', border: 'none', width: '30px', height: '30px', borderRadius: '5px', cursor: 'pointer' }}>✕</button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '900', color: palette.navy, marginBottom: '8px', textTransform: 'uppercase' }}>STOCK STATUS</label>
                            <select 
                                value={productStock} 
                                onChange={(e) => setProductStock(e.target.value)}
                                style={{ width: '100%', padding: '1rem', borderRadius: '15px', border: '1.5px solid #e2e8f0', outline: 'none', background: '#fff' }}
                            >
                                <option value="In Stock">In Stock</option>
                                <option value="Out of Stock">Out of Stock</option>
                                <option value="Contact for Availability">Contact for Availability</option>
                            </select>
                        </div>

                        <div style={{ gridColumn: 'span 1', padding: '1.5rem', background: '#f8fafc', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <h4 style={{ fontSize: '0.9rem', fontWeight: '900', color: palette.navy, margin: 0 }}>TECHNICAL SPECIFICATIONS</h4>
                                <button type="button" onClick={() => handleAddSpec(false)} style={{ padding: '0.5rem 1rem', background: palette.lightBlue, color: '#fff', border: 'none', borderRadius: '8px', fontSize: '0.75rem', fontWeight: '800', cursor: 'pointer' }}>+ ADD SPEC</button>
                            </div>
                            <div style={{ display: 'grid', gap: '0.8rem' }}>
                                {productSpecs.map((spec, idx) => (
                                    <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                        <input type="text" value={spec.key} onChange={(e) => handleUpdateSpec(idx, 'key', e.target.value, false)} placeholder="e.g. Voltage" style={{ flex: 1, padding: '0.6rem', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                                        <input type="text" value={spec.value} onChange={(e) => handleUpdateSpec(idx, 'value', e.target.value, false)} placeholder="e.g. 220V" style={{ flex: 1, padding: '0.6rem', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                                        <button type="button" onClick={() => handleRemoveSpec(idx, false)} style={{ background: '#fee2e2', color: '#ef4444', border: 'none', width: '30px', height: '30px', borderRadius: '5px', cursor: 'pointer' }}>✕</button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div style={{ gridColumn: 'span 2', display: 'flex', alignItems: 'center', gap: '15px', padding: '1rem', background: '#f0f9ff', borderRadius: '15px', border: '1px solid #bae6fd' }}>
                            <input 
                                type="checkbox" 
                                id="publish-directly" 
                                checked={isPublishedForm} 
                                onChange={(e) => setIsPublishedForm(e.target.checked)}
                                style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                            />
                            <label htmlFor="publish-directly" style={{ fontSize: '0.9rem', fontWeight: '800', color: '#0369a1', cursor: 'pointer' }}>
                                PUBLISH DIRECTLY TO MARKETPLACE
                            </label>
                            {!productCategory && isPublishedForm && (
                                <span style={{ color: palette.danger, fontSize: '0.75rem', fontWeight: '900' }}>
                                    (REQUIRES TARGET PAGE)
                                </span>
                            )}
                        </div>
                    </div>

                    <div style={{ padding: '2rem', background: '#f8fafc', borderRadius: '20px', border: '2px dashed #e2e8f0', marginBottom: '2rem' }}>
                        <h4 style={{ fontSize: '0.9rem', fontWeight: '800', color: palette.navy, marginBottom: '1rem' }}>PRODUCT IMAGES</h4>
                        <input 
                            type="file" 
                            id="admin-product-images" 
                            hidden 
                            multiple
                            onChange={(e) => setSelectedImages(Array.from(e.target.files))}
                        />
                        <label htmlFor="admin-product-images" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '0.8rem 1.5rem', background: palette.navy, color: '#fff', borderRadius: '12px', cursor: 'pointer', fontWeight: '700', fontSize: '0.85rem' }}>
                            <FontAwesomeIcon icon={faImage} /> SELECT PHOTOS
                        </label>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1.5rem' }}>
                            {selectedImages.map((file, idx) => (
                                <div key={idx} style={{ width: '80px', height: '80px', borderRadius: '10px', overflow: 'hidden', position: 'relative' }}>
                                    <img src={URL.createObjectURL(file)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="preview" />
                                    <button onClick={() => setSelectedImages(selectedImages.filter((_, i) => i !== idx))} style={{ position: 'absolute', top: '2px', right: '2px', background: 'rgba(0,0,0,0.5)', color: '#fff', border: 'none', borderRadius: '50%', width: '18px', height: '18px', cursor: 'pointer', fontSize: '10px' }}>✕</button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1.2rem' }}>
                        <button 
                            onClick={() => handleProductSubmit(isPublishedForm)}
                            disabled={isSubmitting || (isPublishedForm && !productCategory)}
                            style={{ 
                                flex: 1.5, 
                                padding: '1.1rem', 
                                background: (isPublishedForm && !productCategory) ? '#cbd5e1' : palette.navy, 
                                color: '#fff', 
                                border: 'none', 
                                borderRadius: '15px', 
                                fontWeight: '900', 
                                fontSize: '1rem', 
                                cursor: (isPublishedForm && !productCategory) ? 'not-allowed' : 'pointer', 
                                textTransform: 'uppercase', 
                                opacity: isSubmitting ? 0.7 : 1 
                            }}
                        >
                            {isSubmitting ? 'UPLOADING...' : (isPublishedForm ? 'PUBLISH PRODUCT' : 'SAVE AS DRAFT')}
                        </button>
                        <button 
                            onClick={onClose} 
                            style={{ flex: 1, padding: '1.1rem', background: '#f1f5f9', color: palette.navy, border: 'none', borderRadius: '15px', fontWeight: '800', fontSize: '0.9rem', cursor: 'pointer', textTransform: 'uppercase' }}
                        >
                            CANCEL
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    const EditProductModal = ({ product, onClose, onSave }) => {
        if (!product) return null;
        return (
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3000, backdropFilter: 'blur(10px)' }}>
                <div style={{ background: '#fff', width: '95%', maxWidth: '800px', maxHeight: '90vh', borderRadius: '35px', padding: '2.5rem', boxShadow: '0 30px 80px rgba(0,0,0,0.3)', position: 'relative', overflowY: 'auto' }}>
                    <button onClick={onClose} style={{ position: 'absolute', right: '25px', top: '25px', background: '#f8fafc', border: 'none', width: '36px', height: '36px', borderRadius: '50%', cursor: 'pointer', color: palette.subText, zIndex: 10 }}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                    
                    <h3 style={{ color: palette.navy, fontSize: '1.8rem', fontWeight: '900', marginBottom: '2rem' }}>Edit Product Master Record</h3>
                    
                    <form onSubmit={onSave}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                            <div style={{ gridColumn: 'span 2' }}>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '900', color: palette.navy, marginBottom: '8px', textTransform: 'uppercase' }}>PRODUCT NAME</label>
                                <input 
                                    type="text" 
                                    value={Array.isArray(editingProduct.title) ? editingProduct.title[0] : editingProduct.title || ''} 
                                    onChange={(e) => setEditingProduct({...editingProduct, title: e.target.value})}
                                    placeholder="Enter product title..."
                                    style={{ width: '100%', padding: '1rem', borderRadius: '15px', border: '1.5px solid #e2e8f0', outline: 'none', fontSize: '0.95rem' }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '900', color: palette.navy, marginBottom: '8px', textTransform: 'uppercase' }}>CATEGORY</label>
                                <select 
                                    value={editingProduct.category || ''} 
                                    onChange={(e) => setEditingProduct({...editingProduct, category: e.target.value})}
                                    style={{ width: '100%', padding: '1rem', borderRadius: '15px', border: '1.5px solid #e2e8f0', outline: 'none', background: '#fff' }}
                                >
                                    <option value="">Select Category</option>
                                    <option value="Rice">Rice</option>
                                    <option value="Sarees">Saree Supplier</option>
                                    <option value="Spices">Spices Dealer</option>
                                    <option value="Agriculture">Agriculture</option>
                                    <option value="Textiles">Textiles & Garments</option>
                                    <option value="Industrial">Industrial Machinery</option>
                                    <option value="Electronics">Electronics & Electrical</option>
                                    <option value="Chemicals">Chemicals & Allied</option>
                                    <option value="Food">Food & Beverages</option>
                                    <option value="Construction">Construction & Real Estate</option>
                                    <option value="Packaging">Packaging & Paper</option>
                                    <option value="Medical">Medical & Healthcare</option>
                                    <option value="Home">Home Decor & Furniture</option>
                                    <option value="Beauty">Perfumes and Skin Care</option>
                                    <option value="CNC Machines">CNC Machines</option>
                                    <option value="Mustard Oil">Mustard Oil</option>
                                    <option value="Fruits">Fruits Supplier</option>
                                    <option value="Jewellery">Jewellery Dealer</option>
                                    <option value="Dresses">Dresses & Garments</option>
                                    <option value="Dry Fruits">Dry Fruits Dealer</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '900', color: palette.navy, marginBottom: '8px', textTransform: 'uppercase' }}>SUB-CATEGORY</label>
                                <input 
                                    type="text" 
                                    value={editingProduct.subCategory || ''} 
                                    onChange={(e) => setEditingProduct({...editingProduct, subCategory: e.target.value})}
                                    style={{ width: '100%', padding: '1rem', borderRadius: '15px', border: '1.5px solid #e2e8f0', outline: 'none' }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '900', color: palette.navy, marginBottom: '8px', textTransform: 'uppercase' }}>PRICE</label>
                                <input 
                                    type="text" 
                                    value={editingProduct.price || ''} 
                                    onChange={(e) => setEditingProduct({...editingProduct, price: e.target.value})}
                                    placeholder="e.g. 500"
                                    style={{ width: '100%', padding: '1rem', borderRadius: '15px', border: '1.5px solid #e2e8f0', outline: 'none' }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '900', color: palette.navy, marginBottom: '8px', textTransform: 'uppercase' }}>MOQ</label>
                                <input 
                                    type="text" 
                                    value={editingProduct.moq || ''} 
                                    onChange={(e) => setEditingProduct({...editingProduct, moq: e.target.value})}
                                    placeholder="e.g. 100"
                                    style={{ width: '100%', padding: '1rem', borderRadius: '15px', border: '1.5px solid #e2e8f0', outline: 'none' }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '900', color: palette.navy, marginBottom: '8px', textTransform: 'uppercase' }}>UNIT</label>
                                <input 
                                    type="text" 
                                    value={editingProduct.unit || ''} 
                                    onChange={(e) => setEditingProduct({...editingProduct, unit: e.target.value})}
                                    placeholder="e.g. PCS, KG"
                                    style={{ width: '100%', padding: '1rem', borderRadius: '15px', border: '1.5px solid #e2e8f0', outline: 'none' }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '900', color: palette.navy, marginBottom: '8px', textTransform: 'uppercase' }}>COUNTRY</label>
                                <input 
                                    type="text" 
                                    value={editingProduct.country || ''} 
                                    onChange={(e) => setEditingProduct({...editingProduct, country: e.target.value})}
                                    style={{ width: '100%', padding: '1rem', borderRadius: '15px', border: '1.5px solid #e2e8f0', outline: 'none' }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '900', color: palette.navy, marginBottom: '8px', textTransform: 'uppercase' }}>STATE / PROVINCE</label>
                                {editingProduct.country === 'India' ? (
                                    <select 
                                        value={editingProduct.state || ''} 
                                        onChange={(e) => setEditingProduct({...editingProduct, state: e.target.value})}
                                        style={{ width: '100%', padding: '1rem', borderRadius: '15px', border: '1.5px solid #e2e8f0', outline: 'none', background: '#fff' }}
                                    >
                                        <option value="">Select State</option>
                                        {INDIAN_STATES.map((s, i) => <option key={i} value={s}>{s}</option>)}
                                    </select>
                                ) : (
                                    <input 
                                        type="text" 
                                        value={editingProduct.state || ''} 
                                        onChange={(e) => setEditingProduct({...editingProduct, state: e.target.value})}
                                        style={{ width: '100%', padding: '1rem', borderRadius: '15px', border: '1.5px solid #e2e8f0', outline: 'none' }}
                                    />
                                )}
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '900', color: palette.navy, marginBottom: '8px', textTransform: 'uppercase' }}>CITY (OPTIONAL)</label>
                                <input 
                                    type="text" 
                                    value={editingProduct.city || ''} 
                                    onChange={(e) => setEditingProduct({...editingProduct, city: e.target.value})}
                                    style={{ width: '100%', padding: '1rem', borderRadius: '15px', border: '1.5px solid #e2e8f0', outline: 'none' }}
                                />
                            </div>

                            <div style={{ gridColumn: 'span 2' }}>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '900', color: palette.navy, marginBottom: '8px', textTransform: 'uppercase' }}>EXPERIENCE (YEARS)</label>
                                <input 
                                    type="text" 
                                    value={editingProduct.experience || ''} 
                                    onChange={(e) => setEditingProduct({...editingProduct, experience: e.target.value})}
                                    placeholder="e.g. 5 Years"
                                    style={{ width: '100%', padding: '1rem', borderRadius: '15px', border: '1.5px solid #e2e8f0', outline: 'none' }}
                                />
                            </div>

                            <div style={{ gridColumn: 'span 2', padding: '1.5rem', background: '#f8fafc', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                    <h4 style={{ fontSize: '0.9rem', fontWeight: '900', color: palette.navy, margin: 0 }}>TIERED PRICING STRUCTURE</h4>
                                    <button type="button" onClick={() => handleAddTier(true)} style={{ padding: '0.5rem 1rem', background: palette.teal || '#00f5ff', color: palette.navy, border: 'none', borderRadius: '8px', fontSize: '0.75rem', fontWeight: '800', cursor: 'pointer' }}>+ ADD TIER</button>
                                </div>
                                <div style={{ display: 'grid', gap: '0.8rem' }}>
                                    {(editingProduct.tieredPricing || []).map((tier, idx) => (
                                        <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                            <input type="text" value={tier.range} onChange={(e) => handleUpdateTier(idx, 'range', e.target.value, true)} placeholder="e.g. 100-500 Units" style={{ flex: 1, padding: '0.6rem', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                                            <input type="text" value={tier.price} onChange={(e) => handleUpdateTier(idx, 'price', e.target.value, true)} placeholder="e.g. $45" style={{ flex: 1, padding: '0.6rem', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                                            <button type="button" onClick={() => handleRemoveTier(idx, true)} style={{ background: '#fee2e2', color: '#ef4444', border: 'none', width: '30px', height: '30px', borderRadius: '5px', cursor: 'pointer' }}>✕</button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div style={{ gridColumn: 'span 2', padding: '1.5rem', background: '#f8fafc', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                    <h4 style={{ fontSize: '0.9rem', fontWeight: '900', color: palette.navy, margin: 0 }}>KEY PRODUCT FEATURES</h4>
                                    <button type="button" onClick={() => handleAddFeature(true)} style={{ padding: '0.5rem 1rem', background: palette.navy, color: '#fff', border: 'none', borderRadius: '8px', fontSize: '0.75rem', fontWeight: '800', cursor: 'pointer' }}>+ ADD FEATURE</button>
                                </div>
                                <div style={{ display: 'grid', gap: '0.8rem' }}>
                                    {(editingProduct.keyFeatures || []).map((feat, idx) => (
                                        <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                            <input type="text" value={feat} onChange={(e) => handleUpdateFeature(idx, e.target.value, true)} placeholder="e.g. High precision industrial grade" style={{ flex: 1, padding: '0.6rem', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                                            <button type="button" onClick={() => handleRemoveFeature(idx, true)} style={{ background: '#fee2e2', color: '#ef4444', border: 'none', width: '30px', height: '30px', borderRadius: '5px', cursor: 'pointer' }}>✕</button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '900', color: palette.navy, marginBottom: '8px', textTransform: 'uppercase' }}>STOCK STATUS</label>
                                <select 
                                    value={editingProduct.stockStatus || 'In Stock'} 
                                    onChange={(e) => setEditingProduct({...editingProduct, stockStatus: e.target.value})}
                                    style={{ width: '100%', padding: '1rem', borderRadius: '15px', border: '1.5px solid #e2e8f0', outline: 'none', background: '#fff' }}
                                >
                                    <option value="In Stock">In Stock</option>
                                    <option value="Out of Stock">Out of Stock</option>
                                    <option value="Contact for Availability">Contact for Availability</option>
                                </select>
                            </div>

                            <div style={{ gridColumn: 'span 1', padding: '1.5rem', background: '#f8fafc', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                    <h4 style={{ fontSize: '0.9rem', fontWeight: '900', color: palette.navy, margin: 0 }}>TECHNICAL SPECIFICATIONS</h4>
                                    <button type="button" onClick={() => handleAddSpec(true)} style={{ padding: '0.5rem 1rem', background: palette.lightBlue, color: '#fff', border: 'none', borderRadius: '8px', fontSize: '0.75rem', fontWeight: '800', cursor: 'pointer' }}>+ ADD SPEC</button>
                                </div>
                                <div style={{ display: 'grid', gap: '0.8rem' }}>
                                    {(editingProduct.specifications || []).map((spec, idx) => (
                                        <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                            <input type="text" value={spec.key} onChange={(e) => handleUpdateSpec(idx, 'key', e.target.value, true)} placeholder="e.g. Power" style={{ flex: 1, padding: '0.6rem', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                                            <input type="text" value={spec.value} onChange={(e) => handleUpdateSpec(idx, 'value', e.target.value, true)} placeholder="e.g. 5kW" style={{ flex: 1, padding: '0.6rem', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                                            <button type="button" onClick={() => handleRemoveSpec(idx, true)} style={{ background: '#fee2e2', color: '#ef4444', border: 'none', width: '30px', height: '30px', borderRadius: '5px', cursor: 'pointer' }}>✕</button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div style={{ marginBottom: '2.5rem' }}>
                            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '900', color: palette.navy, marginBottom: '8px', textTransform: 'uppercase' }}>DESCRIPTION</label>
                            <textarea 
                                value={Array.isArray(editingProduct.description) ? editingProduct.description[0] : editingProduct.description || ''} 
                                onChange={(e) => setEditingProduct({...editingProduct, description: e.target.value})}
                                placeholder="Detail product specifications..."
                                style={{ width: '100%', padding: '1rem', borderRadius: '15px', border: '1.5px solid #e2e8f0', outline: 'none', minHeight: '120px', fontSize: '0.95rem', resize: 'vertical' }}
                            />
                        </div>

                        <div style={{ display: 'flex', gap: '1.2rem', position: 'sticky', bottom: 0, background: '#fff', padding: '1rem 0', borderTop: '1px solid #f1f5f9' }}>
                            <button 
                                type="submit" 
                                style={{ 
                                    flex: 1.5, 
                                    padding: '1.1rem', 
                                    background: palette.navy, 
                                    color: '#fff', 
                                    border: 'none', 
                                    borderRadius: '15px', 
                                    fontWeight: '900', 
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    boxShadow: '0 10px 20px rgba(30,58,138,0.2)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}
                            >
                                SAVE CHANGES
                            </button>
                            <button 
                                type="button" 
                                onClick={onClose} 
                                style={{ 
                                    flex: 1, 
                                    padding: '1.1rem', 
                                    background: '#f1f5f9', 
                                    color: palette.navy, 
                                    border: 'none', 
                                    borderRadius: '15px', 
                                    fontWeight: '800', 
                                    fontSize: '0.9rem',
                                    cursor: 'pointer',
                                    textTransform: 'uppercase'
                                }}
                            >
                                CANCEL
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    };

    if (loading) return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', background: palette.bg, color: palette.navy }}>
            <div className="loader"></div>
            <p style={{ marginTop: '1rem', fontWeight: '700' }}>Loading user data...</p>
        </div>
    );

    if (error) return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', background: palette.bg, color: palette.navy, textAlign: 'center', padding: '2rem' }}>
            <FontAwesomeIcon icon={faExclamationTriangle} size="3x" style={{ color: '#ef4444', marginBottom: '1.5rem' }} />
            <h2 style={{ color: '#ef4444' }}>Error</h2>
            <p style={{ color: palette.subText, maxWidth: '400px' }}>{error}</p>
            <button 
                onClick={() => navigate('/admin-dashboard')}
                style={{ marginTop: '2rem', padding: '0.8rem 2rem', borderRadius: '10px', background: palette.lightBlue, border: 'none', color: '#fff', cursor: 'pointer', fontWeight: 'bold' }}
            >
                Back to Dashboard
            </button>
        </div>
    );

    if (!seller) return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: palette.bg, color: palette.navy }}>
            <p>User not found</p>
        </div>
    );

    return (
        <div className="admin-detail-container" style={{ padding: '2rem', minHeight: '100vh', background: palette.bg, color: palette.text }}>
            {editingProduct && <EditProductModal product={editingProduct} onClose={() => setEditingProduct(null)} onSave={handleUpdateProduct} />}
            {showAddModal && <AddProductModal onClose={() => setShowAddModal(false)} />}
            
            {/* Header */}
            <div className="detail-header" style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                <button 
                    onClick={() => navigate('/admin-dashboard')} 
                    style={{ background: '#fff', border: '1px solid #e2e8f0', color: palette.navy, width: '45px', height: '45px', borderRadius: '50%', cursor: 'pointer', marginRight: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <div>
                    <h1 style={{ fontSize: '1.8rem', margin: 0, color: palette.navy, fontWeight: '800' }}>{seller.name}</h1>
                    <p style={{ color: palette.subText, margin: 0, fontWeight: '600' }}>{seller.role?.toUpperCase()} | {seller.companyName || 'Individual'}</p>
                </div>
                <div style={{ marginLeft: 'auto' }}>
                    <span className={`status-badge ${seller.plan?.toLowerCase() || 'free'}`} style={{ 
                        padding: '0.6rem 1.2rem', 
                        borderRadius: '20px', 
                        fontSize: '0.8rem', 
                        fontWeight: '900',
                        background: seller.plan === 'Premium' ? palette.premium : (seller.plan === 'Advanced' ? palette.advanced : '#f1f5f9'),
                        color: seller.plan === 'Premium' || seller.plan === 'Advanced' ? '#fff' : palette.subText
                    }}>
                        {seller.plan || 'Free'} Member
                    </span>
                </div>
            </div>

            {/* Route Tabs */}
            <div className="detail-tabs" style={{ display: 'flex', gap: '0.5rem', borderBottom: '1px solid #e2e8f0', marginBottom: '2rem' }}>
                {[
                    { id: 'profile', label: 'Profile', icon: faUser },
                    { id: 'products', label: `Products (${products.length})`, icon: faBox },
                    { id: 'catalog', label: 'Catalog', icon: faFileAlt }
                ].map(item => (
                    <button 
                        key={item.id}
                        onClick={() => navigate(`/admin/seller/${id}/${item.id}`)}
                        style={{ 
                            background: 'none', 
                            border: 'none', 
                            color: currentTab === item.id ? palette.lightBlue : palette.subText, 
                            padding: '1rem 2rem', 
                            cursor: 'pointer', 
                            borderBottom: currentTab === item.id ? `3px solid ${palette.lightBlue}` : 'none', 
                            fontWeight: '800',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            transition: 'all 0.2s',
                            fontSize: '0.9rem'
                        }}
                    >
                        <FontAwesomeIcon icon={item.icon} /> {item.label.toUpperCase()}
                    </button>
                ))}
            </div>

            {/* Content Sections */}
            <div className="detail-sections" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                
                {/* Profile Section */}
                {currentTab === 'profile' && (
                <div className="profile-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                    <div className="glass-card" style={{ padding: '2.5rem', background: palette.cardBg, borderRadius: '25px', border: '1px solid #e2e8f0', boxShadow: '0 5px 20px rgba(0,0,0,0.02)' }}>
                        <h3 style={{ marginBottom: '1.8rem', fontSize: '1.2rem', color: palette.lightBlue, fontWeight: '800' }}>
                            <FontAwesomeIcon icon={faUser} style={{ marginRight: '12px' }} /> USER INFORMATION
                        </h3>
                        <div className="info-item" style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', color: palette.subText, fontSize: '0.75rem', fontWeight: '800', marginBottom: '5px' }}>FULL NAME</label>
                            <span style={{ fontSize: '1.1rem', fontWeight: '600' }}>{seller.name}</span>
                        </div>
                        <div className="info-item" style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', color: palette.subText, fontSize: '0.75rem', fontWeight: '800', marginBottom: '5px' }}>EMAIL ADDRESS</label>
                            <span><FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '8px', color: palette.lightBlue }} /> {seller.email}</span>
                        </div>
                        <div className="info-item" style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', color: palette.subText, fontSize: '0.75rem', fontWeight: '800', marginBottom: '5px' }}>PHONE NUMBER</label>
                            <span><FontAwesomeIcon icon={faPhone} style={{ marginRight: '8px', color: palette.lightBlue }} /> {seller.mobileNumber}</span>
                        </div>
                    </div>

                    <div className="glass-card" style={{ padding: '2.5rem', background: palette.cardBg, borderRadius: '25px', border: '1px solid #e2e8f0', boxShadow: '0 5px 20px rgba(0,0,0,0.02)' }}>
                        <h3 style={{ marginBottom: '1.8rem', fontSize: '1.2rem', color: palette.orange, fontWeight: '800' }}>
                            <FontAwesomeIcon icon={faBriefcase} style={{ marginRight: '12px' }} /> BUSINESS PROFILE
                        </h3>
                        <div className="info-item" style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', color: palette.subText, fontSize: '0.75rem', fontWeight: '800', marginBottom: '5px' }}>{seller.role === 'buyer' ? 'INTERESTED IN' : 'COMPANY NAME'}</label>
                            <span style={{ fontSize: '1.1rem', fontWeight: '600' }}>{seller.companyName || seller.productOrService || 'N/A'}</span>
                        </div>
                        <div className="info-item" style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', color: palette.subText, fontSize: '0.75rem', fontWeight: '800', marginBottom: '5px' }}>REQUIREMENTS / PRODUCTS</label>
                            <span>{seller.productOrService || 'N/A'}</span>
                        </div>
                        {seller.role === 'seller' && (
                            <div className="info-item" style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', color: palette.subText, fontSize: '0.75rem', fontWeight: '800', marginBottom: '5px' }}>GST NUMBER</label>
                                <span style={{ color: seller.gstNumber ? palette.text : '#ef4444', fontWeight: '600' }}>{seller.gstNumber || 'Not Registered'}</span>
                            </div>
                        )}
                    </div>

                    <div className="glass-card" style={{ padding: '2.5rem', background: palette.cardBg, borderRadius: '25px', border: '1px solid #e2e8f0', boxShadow: '0 5px 20px rgba(0,0,0,0.02)' }}>
                        <h3 style={{ marginBottom: '1.8rem', fontSize: '1.2rem', color: '#10b981', fontWeight: '800' }}>
                            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '12px' }} /> LOCATION
                        </h3>
                        <div className="info-item" style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', color: palette.subText, fontSize: '0.75rem', fontWeight: '800', marginBottom: '5px' }}>CITY</label>
                            <span>{seller.cityname || seller.city || 'N/A'}</span>
                        </div>
                        <div className="info-item" style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', color: palette.subText, fontSize: '0.75rem', fontWeight: '800', marginBottom: '5px' }}>STATE / PROVINCE</label>
                            <span>{seller.statename || seller.state || 'N/A'}</span>
                        </div>
                    </div>
                </div>
                )}

                {/* Products Section */}
                {currentTab === 'products' && seller.role === 'seller' && (
                    <div className="products-section">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                            <h3 style={{ margin: 0, fontSize: '1.5rem', color: palette.navy, fontWeight: '800', display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <FontAwesomeIcon icon={faBox} /> PRODUCTS LISTED ({products.length})
                            </h3>
                            <button 
                                onClick={() => setShowAddModal(true)}
                                style={{ 
                                    padding: '0.9rem 2rem', 
                                    borderRadius: '15px', 
                                    background: palette.navy, 
                                    color: '#fff', 
                                    border: 'none', 
                                    fontWeight: '900', 
                                    fontSize: '0.85rem',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    boxShadow: '0 10px 20px rgba(30,58,138,0.15)',
                                    transition: 'all 0.3s'
                                }}
                                onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                            >
                                <FontAwesomeIcon icon={faCartPlus} /> ADD NEW PRODUCT
                            </button>
                        </div>
                        {products.length > 0 ? (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {products.map((product, idx) => (
                                    <div key={idx} style={{ 
                                        background: '#fff', 
                                        borderRadius: '30px', 
                                        overflow: 'hidden', 
                                        boxShadow: '0 10px 40px rgba(0,0,0,0.03)',
                                        border: '1px solid #f1f5f9',
                                        display: 'flex',
                                        minHeight: '220px',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        {/* LEFT: IMAGE SECTION */}
                                        <div style={{ width: '280px', position: 'relative', flexShrink: 0 }}>
                                            {product.images?.[0] ? (
                                                <img 
                                                    src={`${apiEndpoint}${encodeURI(product.images[0].replace(/\\/g, '/'))}`} 
                                                    alt={Array.isArray(product.title) ? product.title[0] : product.title} 
                                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                                />
                                            ) : (
                                                <div style={{ width: '100%', height: '100%', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <FontAwesomeIcon icon={faBox} style={{ fontSize: '3rem', color: '#e2e8f0' }} />
                                                </div>
                                            )}
                                            <div style={{ position: 'absolute', top: '15px', left: '15px' }}>
                                                <div style={{ background: '#10b981', color: '#fff', padding: '6px 15px', borderRadius: '10px', fontSize: '0.65rem', fontWeight: '900', display: 'flex', alignItems: 'center', gap: '6px', boxShadow: '0 5px 15px rgba(16,185,129,0.3)' }}>
                                                    <FontAwesomeIcon icon={faCheckCircle} /> VERIFIED
                                                </div>
                                            </div>
                                        </div>

                                        {/* CENTER: CONTENT SECTION */}
                                        <div style={{ flex: 1, padding: '1.8rem 2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRight: '1.5px solid #f8fafc' }}>
                                            <div style={{ fontSize: '0.75rem', fontWeight: '800', color: palette.lightBlue, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                                                {product.category || 'GENERAL'} <span style={{ color: '#cbd5e1', margin: '0 10px' }}>&gt;</span> {product.subCategory || 'ALL ITEMS'}
                                            </div>
                                            
                                            <h4 style={{ margin: '0 0 12px 0', fontSize: '1.5rem', color: palette.navy, fontWeight: '900' }}>
                                                {Array.isArray(product.title) ? product.title[0] : product.title || 'Untitled Product'}
                                            </h4>

                                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                                                <div style={{ color: '#f59e0b', fontSize: '0.9rem', display: 'flex', gap: '2px' }}>
                                                    {[1,2,3,4,5].map(i => <FontAwesomeIcon key={i} icon={faStar} />)}
                                                </div>
                                                <span style={{ fontSize: '0.85rem', color: palette.subText, fontWeight: '600' }}>(150+ Reviews)</span>
                                                <div style={{ background: '#fffbeb', color: '#ff8000', padding: '4px 12px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                    <FontAwesomeIcon icon={faShieldHalved} /> {product.experience || '1 YRS'} EXP.
                                                </div>
                                            </div>

                                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                <div style={{ background: '#f1f5f9', color: palette.navy, padding: '8px 18px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                    <FontAwesomeIcon icon={faBox} style={{ color: palette.orange }} />
                                                    Bulk Supply Available Worldwide
                                                </div>
                                            </div>
                                        </div>

                                        {/* RIGHT: ACTIONS & SELLER INFO */}
                                        <div style={{ width: '280px', padding: '1.8rem 2rem', background: '#fafbfc', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                            <div>
                                                <div style={{ fontSize: '0.7rem', fontWeight: '900', color: palette.subText, marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                    <FontAwesomeIcon icon={faBuilding} style={{ color: palette.lightBlue }} /> {seller.companyName || 'Private Company'}
                                                </div>
                                                <div style={{ color: '#10b981', fontSize: '0.8rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                    <FontAwesomeIcon icon={faCheckCircle} /> Live Listing
                                                </div>
                                            </div>

                                            <div style={{ marginTop: 'auto' }}>
                                                <div style={{ color: product.isPublished ? '#10b981' : palette.orange, fontSize: '0.8rem', fontWeight: '900', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '15px' }}>
                                                    <FontAwesomeIcon icon={faCheckCircle} /> {product.isPublished ? 'Published & Live' : 'Pending Approval'}
                                                </div>

                                                <div style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
                                                    {!product.isPublished && (
                                                        <select
                                                            value={cardCategories[product._id] || product.category || ''}
                                                            onChange={(e) => setCardCategories({ ...cardCategories, [product._id]: e.target.value })}
                                                            style={{ width: '100%', padding: '0.8rem', borderRadius: '12px', border: '1.5px solid #e2e8f0', outline: 'none', background: '#fff', fontSize: '0.75rem', fontWeight: '800', color: palette.navy }}
                                                        >
                                                            <option value="">Select Target Page...</option>
                                                            <option value="Rice">Rice Supplier</option>
                                                            <option value="Sarees">Saree Supplier</option>
                                                            <option value="Spices">Spices Dealer</option>
                                                            <option value="Agriculture">Vegetable Supplier</option>
                                                            <option value="Textiles">Textiles & Garments</option>
                                                            <option value="Industrial">Industrial Machinery</option>
                                                            <option value="Electronics">Electronics & Electrical</option>
                                                            <option value="Chemicals">Chemicals & Allied</option>
                                                            <option value="Food">Food & Beverages</option>
                                                            <option value="Construction">Construction & Real Estate</option>
                                                            <option value="Packaging">Packaging & Paper</option>
                                                            <option value="Medical">Medical & Healthcare</option>
                                                            <option value="Home">Home Decor & Furniture</option>
                                                            <option value="Beauty">Perfumes and Skin Care</option>
                                                            <option value="CNC Machines">CNC Machines</option>
                                                            <option value="Mustard Oil">Mustard Oil</option>
                                                            <option value="Fruits">Fruits Supplier</option>
                                                            <option value="Fruit Powder">Fruit Powder Supplier</option>
                                                            <option value="Jewellery">Jewellery Dealer</option>
                                                            <option value="Dresses">Dresses & Garments</option>
                                                            <option value="Dry Fruits">Dry Fruits Dealer</option>
                                                            <option value="Other">Other</option>
                                                        </select>
                                                    )}
                                                    
                                                    <div style={{ display: 'flex', gap: '8px' }}>
                                                        <button 
                                                            onClick={() => handleTogglePublish(product._id, product.isPublished, cardCategories[product._id] || product.category)}
                                                            disabled={!product.isPublished && !(cardCategories[product._id] || product.category)}
                                                            style={{ 
                                                                flex: 1, 
                                                                padding: '0.8rem', 
                                                                borderRadius: '12px', 
                                                                border: 'none', 
                                                                background: product.isPublished ? '#f1f5f9' : (!(cardCategories[product._id] || product.category) ? '#cbd5e1' : palette.navy), 
                                                                color: product.isPublished ? palette.navy : '#fff', 
                                                                fontWeight: '800', 
                                                                fontSize: '0.75rem', 
                                                                cursor: (!(cardCategories[product._id] || product.category) && !product.isPublished) ? 'not-allowed' : 'pointer',
                                                                transition: 'all 0.3s'
                                                            }}
                                                        >
                                                            {product.isPublished ? 'UNPUBLISH' : 'PUBLISH'}
                                                        </button>
                                                        <button 
                                                            onClick={() => setEditingProduct(product)}
                                                            style={{ width: '42px', borderRadius: '12px', border: '1.5px solid #e2e8f0', background: '#fff', color: palette.navy, cursor: 'pointer' }}
                                                        >
                                                            <FontAwesomeIcon icon={faEdit} />
                                                        </button>
                                                        <button 
                                                            onClick={() => handleDeleteProduct(product._id)}
                                                            style={{ width: '42px', borderRadius: '12px', border: '1.5px solid #fef2f2', background: '#fff', color: palette.danger, cursor: 'pointer' }}
                                                        >
                                                            <FontAwesomeIcon icon={faTrashAlt} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div style={{ textAlign: 'center', padding: '4rem', background: '#fff', borderRadius: '30px', border: '2px dashed #e2e8f0' }}>
                                <FontAwesomeIcon icon={faBox} size="3x" style={{ color: '#e2e8f0', marginBottom: '1.5rem' }} />
                                <p style={{ color: palette.subText, fontWeight: '600' }}>No products found for this seller.</p>
                            </div>
                        )}
                    </div>
                )}
                {/* Catalog Section */}
                {currentTab === 'catalog' && seller.role === 'seller' && (
                    <div className="catalog-section" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        
                        {/* Catalog Configuration Tool */}
                        <div style={{ background: '#fff', borderRadius: '30px', padding: '2.5rem', border: '1px solid #e2e8f0', boxShadow: '0 10px 40px rgba(0,0,0,0.03)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                                <div>
                                    <h3 style={{ margin: 0, fontSize: '1.5rem', color: palette.navy, fontWeight: '900' }}>
                                        <FontAwesomeIcon icon={faFileAlt} style={{ marginRight: '15px', color: palette.lightBlue }} /> CATALOG CONFIGURATION
                                    </h3>
                                    <p style={{ margin: '5px 0 0 0', color: palette.subText, fontSize: '0.85rem', fontWeight: '600' }}>Customize the premium "Institutional Curator" display for this seller</p>
                                </div>
                                <button 
                                    onClick={handleCatalogUpdate}
                                    disabled={isUpdatingCatalog}
                                    style={{ 
                                        padding: '0.9rem 2.5rem', 
                                        borderRadius: '15px', 
                                        background: palette.lightBlue, 
                                        color: '#fff', 
                                        border: 'none', 
                                        fontWeight: '900', 
                                        fontSize: '0.85rem', 
                                        cursor: 'pointer',
                                        boxShadow: '0 10px 20px rgba(59,130,246,0.2)',
                                        transition: 'all 0.3s'
                                    }}
                                >
                                    {isUpdatingCatalog ? 'SAVING...' : 'SAVE CONFIGURATION'}
                                </button>
                            </div>

                            {/* INTERNAL CATALOG CONFIG TABS */}
                            <div style={{ display: 'flex', gap: '10px', marginBottom: '2.5rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '1rem' }}>
                                {[
                                    { id: 'general', label: 'GENERAL', icon: faChartLine },
                                    { id: 'home', label: 'HOME HERO', icon: faGem },
                                    { id: 'about', label: 'ABOUT US', icon: faBuilding },
                                    { id: 'products', label: 'PRODUCTS', icon: faBox }
                                ].map(t => (
                                    <button 
                                        key={t.id}
                                        onClick={() => setCatalogConfigTab(t.id)}
                                        style={{ 
                                            padding: '0.8rem 1.2rem', 
                                            borderRadius: '12px', 
                                            background: catalogConfigTab === t.id ? palette.lightBlue : 'transparent',
                                            color: catalogConfigTab === t.id ? '#fff' : palette.subText,
                                            border: 'none',
                                            fontWeight: '800',
                                            fontSize: '0.7rem',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            transition: 'all 0.2s'
                                        }}
                                    >
                                        <FontAwesomeIcon icon={t.icon} /> {t.label}
                                    </button>
                                ))}
                            </div>

                            <div style={{ minHeight: '400px' }}>
                                {catalogConfigTab === 'general' && (
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                        <div style={{ gridColumn: 'span 2' }}>
                                            <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: '900', color: palette.navy, marginBottom: '8px' }}>CATALOG SUBTITLE</label>
                                            <input type="text" value={catSubtitle} onChange={(e) => setCatSubtitle(e.target.value)} style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1.5px solid #e2e8f0' }} />
                                        </div>
                                        <div style={{ padding: '1.2rem', background: '#f8fafc', borderRadius: '15px', border: '1px solid #e2e8f0' }}>
                                            <h4 style={{ fontSize: '0.8rem', fontWeight: '900', color: palette.navy, marginBottom: '0.8rem' }}>COMPANY LOGO</h4>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                                <div style={{ width: '60px', height: '60px', borderRadius: '12px', background: '#fff', border: '1px solid #e2e8f0', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    {sellerLogo ? (
                                                        <img src={typeof sellerLogo === 'string' ? getImgUrl(sellerLogo) : URL.createObjectURL(sellerLogo)} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                                    ) : <FontAwesomeIcon icon={faBuilding} style={{ color: '#cbd5e1' }} />}
                                                </div>
                                                <input type="file" onChange={(e) => setSellerLogo(e.target.files[0])} style={{ flex: 1, fontSize: '0.75rem' }} />
                                            </div>
                                        </div>
                                        <div style={{ padding: '1.2rem', background: '#f8fafc', borderRadius: '15px', border: '1px solid #e2e8f0' }}>
                                            <h4 style={{ fontSize: '0.8rem', fontWeight: '900', color: palette.navy, marginBottom: '0.8rem' }}>VERIFICATION</h4>
                                            <select value={catVerification} onChange={(e) => setCatVerification(e.target.value)} style={{ width: '100%', padding: '0.7rem', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                                                <option value="Verified">Verified</option>
                                                <option value="Verified Gold">Verified Gold</option>
                                                <option value="Premium Gold">Premium Gold</option>
                                            </select>
                                        </div>
                                        <div style={{ gridColumn: 'span 2', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                                            <div>
                                                <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: '900', color: palette.subText }}>YEARS</label>
                                                <input type="text" value={catYears} onChange={(e) => setCatYears(e.target.value)} style={{ width: '100%', padding: '0.7rem', borderRadius: '10px', border: '1px solid #e2e8f0' }} />
                                            </div>
                                            <div>
                                                <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: '900', color: palette.subText }}>RESPONSE %</label>
                                                <input type="text" value={catResponseRate} onChange={(e) => setCatResponseRate(e.target.value)} style={{ width: '100%', padding: '0.7rem', borderRadius: '10px', border: '1px solid #e2e8f0' }} />
                                            </div>
                                            <div>
                                                <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: '900', color: palette.subText }}>TIME</label>
                                                <input type="text" value={catResponseTime} onChange={(e) => setCatResponseTime(e.target.value)} style={{ width: '100%', padding: '0.7rem', borderRadius: '10px', border: '1px solid #e2e8f0' }} />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {catalogConfigTab === 'home' && (
                                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                                        <div style={{ padding: '1.2rem', background: '#f8fafc', borderRadius: '15px', border: '1px solid #e2e8f0' }}>
                                            <h4 style={{ fontSize: '0.8rem', fontWeight: '900', color: palette.navy, marginBottom: '0.8rem' }}>HERO IMAGE</h4>
                                            <div style={{ width: '100%', height: '120px', borderRadius: '12px', background: '#fff', border: '1px solid #e2e8f0', overflow: 'hidden', marginBottom: '1rem', position: 'relative' }}>
                                                {catHeroImage ? (
                                                    <img src={typeof catHeroImage === 'string' ? getImgUrl(catHeroImage) : URL.createObjectURL(catHeroImage)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                ) : <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#cbd5e1', fontSize: '0.8rem' }}>No Hero Image Set</div>}
                                                <input type="file" onChange={(e) => setCatHeroImage(e.target.files[0])} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }} />
                                            </div>
                                            <p style={{ fontSize: '0.65rem', color: palette.subText, margin: 0 }}>Click image to upload new banner</p>
                                        </div>
                                        <div style={{ padding: '1.2rem', background: '#f8fafc', borderRadius: '15px', border: '1px solid #e2e8f0' }}>
                                            <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: '900', color: palette.navy, marginBottom: '5px' }}>HERO TITLE</label>
                                            <input type="text" value={catHeroTitle} onChange={(e) => setCatHeroTitle(e.target.value)} style={{ width: '100%', padding: '0.7rem', borderRadius: '10px', border: '1px solid #e2e8f0', marginBottom: '1rem' }} />
                                            <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: '900', color: palette.navy, marginBottom: '5px' }}>HERO DESCRIPTION</label>
                                            <textarea value={catHeroDesc} onChange={(e) => setCatHeroDesc(e.target.value)} style={{ width: '100%', padding: '0.7rem', borderRadius: '10px', border: '1px solid #e2e8f0', minHeight: '80px' }} />
                                        </div>
                                    </div>
                                )}

                                {catalogConfigTab === 'about' && (
                                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '1.5rem' }}>
                                            <textarea 
                                                value={catAbout} 
                                                onChange={(e) => setCatAbout(e.target.value)} 
                                                placeholder="Write a professional company overview for the catalog..." 
                                                style={{ width: '100%', padding: '1.2rem', borderRadius: '15px', border: '1.5px solid #e2e8f0', minHeight: '280px', fontSize: '0.95rem', lineHeight: '1.6' }} 
                                            />
                                            <div style={{ padding: '1.5rem', background: '#f8fafc', borderRadius: '20px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                                <h4 style={{ fontSize: '0.85rem', fontWeight: '900', color: palette.navy, margin: 0 }}>ABOUT SECTION IMAGE</h4>
                                                <p style={{ fontSize: '0.7rem', color: palette.subText, margin: 0 }}>Add an image of your factory, team, or infrastructure to make the "About" section visually stunning.</p>
                                                <div style={{ flex: 1, border: '2px dashed #cbd5e1', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', background: '#fff' }}>
                                                    {catAboutImage ? (
                                                        <img 
                                                            src={typeof catAboutImage === 'string' ? getImgUrl(catAboutImage) : URL.createObjectURL(catAboutImage)} 
                                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                                        />
                                                    ) : (
                                                        <FontAwesomeIcon icon={faImage} style={{ fontSize: '2rem', color: '#cbd5e1' }} />
                                                    )}
                                                    <input 
                                                        type="file" 
                                                        onChange={(e) => setCatAboutImage(e.target.files[0])} 
                                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }} 
                                                    />
                                                </div>
                                                {seller.aboutUsImage && <button onClick={() => setCatAboutImage(null)} style={{ padding: '6px', fontSize: '0.65rem', background: '#fee2e2', color: '#ef4444', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>REMOVE IMAGE</button>}
                                            </div>
                                        </div>
                                        
                                        <div style={{ padding: '1.2rem', background: '#f8fafc', borderRadius: '15px', border: '1px solid #e2e8f0' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                                <h4 style={{ fontSize: '0.8rem', fontWeight: '900', color: palette.navy }}>CERTIFICATIONS</h4>
                                                <button onClick={() => setCatCerts([...catCerts, ''])} style={{ padding: '4px 8px', background: palette.navy, color: '#fff', border: 'none', borderRadius: '5px', fontSize: '0.6rem' }}>+ ADD</button>
                                            </div>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                                {catCerts.map((c, i) => (
                                                    <input key={i} type="text" value={c} onChange={(e) => {
                                                        const n = [...catCerts]; n[i] = e.target.value; setCatCerts(n);
                                                    }} style={{ padding: '0.5rem', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.7rem' }} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}


                                {catalogConfigTab === 'products' && (
                                    <div className="catalog-curator-view">
                                        <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '20px' }}>
                                            <div style={{ padding: '10px 15px', background: palette.navy, color: '#fff', borderRadius: '12px', fontWeight: '900', fontSize: '1.2rem' }}>02</div>
                                            <div>
                                                <h4 style={{ margin: 0, fontSize: '1.3rem', color: palette.navy, fontWeight: '900', letterSpacing: '-0.5px' }}>CURATE PRODUCT INVENTORY</h4>
                                                <p style={{ color: palette.subText, fontSize: '0.85rem', margin: '2px 0 0 0' }}>Select institutional-grade products to feature in your premium storefront.</p>
                                            </div>
                                        </div>

                                        {/* PREMIUM QUICK ADD FORM */}
                                        <div style={{ 
                                            marginBottom: '3rem', 
                                            padding: '2rem', 
                                            background: '#fff', 
                                            borderRadius: '24px', 
                                            borderLeft: `6px solid ${palette.navy}`,
                                            boxShadow: '0 10px 30px rgba(15, 23, 42, 0.05)',
                                            position: 'relative',
                                            overflow: 'hidden'
                                        }}>
                                            <div style={{ position: 'absolute', top: '-10px', right: '20px', fontSize: '80px', color: '#f1f5f9', fontWeight: '900', zIndex: 0, opacity: 0.5 }}>NEW</div>
                                            <div style={{ position: 'relative', zIndex: 1 }}>
                                                <h5 style={{ margin: '0 0 1.5rem 0', fontSize: '0.9rem', color: palette.navy, fontWeight: '900', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                                    <FontAwesomeIcon icon={faShieldVirus} style={{ marginRight: '10px', color: palette.lightBlue }} />
                                                    PRO-FAST INVENTORY ADD
                                                </h5>
                                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'flex-end' }}>
                                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '100px' }}>
                                                        <label style={{ fontSize: '11px', fontWeight: '800', color: '#94a3b8' }}>PRODUCT IMAGE</label>
                                                        <div style={{ 
                                                            width: '100px', 
                                                            height: '52px', 
                                                            background: '#f8fafc', 
                                                            border: '2px dashed #cbd5e1', 
                                                            borderRadius: '12px', 
                                                            display: 'flex', 
                                                            alignItems: 'center', 
                                                            justifyContent: 'center',
                                                            position: 'relative',
                                                            overflow: 'hidden',
                                                            cursor: 'pointer'
                                                        }}>
                                                            <FontAwesomeIcon icon={faImage} style={{ color: '#94a3b8' }} />
                                                            <input 
                                                                type="file" 
                                                                id="quickAddImage"
                                                                onChange={(e) => {
                                                                    const file = e.target.files[0];
                                                                    if(file) {
                                                                        const reader = new FileReader();
                                                                        reader.onload = (re) => {
                                                                            document.getElementById('quickPreview').src = re.target.result;
                                                                            document.getElementById('quickPreview').style.display = 'block';
                                                                        };
                                                                        reader.readAsDataURL(file);
                                                                    }
                                                                }}
                                                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }} 
                                                            />
                                                            <img id="quickPreview" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'none', pointerEvents: 'none' }} />
                                                        </div>
                                                    </div>
                                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: '1 1 200px' }}>
                                                        <label style={{ fontSize: '11px', fontWeight: '800', color: '#94a3b8' }}>PRODUCT TITLE</label>
                                                        <input type="text" id="quickAddTitle" placeholder="e.g. Industrial Steel Beam" style={{ padding: '14px', borderRadius: '12px', border: '2px solid #f1f5f9', fontSize: '14px', fontWeight: '600', background: '#f8fafc', width: '100%' }} />
                                                    </div>
                                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: '2 1 300px' }}>
                                                        <label style={{ fontSize: '11px', fontWeight: '800', color: '#94a3b8' }}>INSTITUTIONAL DESCRIPTION</label>
                                                        <input type="text" id="quickAddDesc" placeholder="Enter high-level product specifications..." style={{ padding: '14px', borderRadius: '12px', border: '2px solid #f1f5f9', fontSize: '14px', fontWeight: '600', background: '#f8fafc', width: '100%' }} />
                                                    </div>
                                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100px' }}>
                                                        <label style={{ fontSize: '11px', fontWeight: '800', color: '#94a3b8' }}>PRICE ($)</label>
                                                        <input type="number" id="quickAddPrice" placeholder="142" style={{ padding: '14px', borderRadius: '12px', border: '2px solid #f1f5f9', fontSize: '14px', fontWeight: '600', background: '#f8fafc', width: '100%' }} />
                                                    </div>
                                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100px' }}>
                                                        <label style={{ fontSize: '11px', fontWeight: '800', color: '#94a3b8' }}>MOQ</label>
                                                        <input type="number" id="quickAddMoq" placeholder="10" style={{ padding: '14px', borderRadius: '12px', border: '2px solid #f1f5f9', fontSize: '14px', fontWeight: '600', background: '#f8fafc', width: '100%' }} />
                                                    </div>
                                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100px' }}>
                                                        <label style={{ fontSize: '11px', fontWeight: '800', color: '#94a3b8' }}>UNIT</label>
                                                        <input type="text" id="quickAddUnit" placeholder="PCS" style={{ padding: '14px', borderRadius: '12px', border: '2px solid #f1f5f9', fontSize: '14px', fontWeight: '600', background: '#f8fafc', width: '100%' }} />
                                                    </div>
                                                    <button 
                                                        id="quickAddBtn"
                                                        onClick={async (e) => {
                                                            const btn = e.currentTarget;
                                                            const originalText = btn.innerText;
                                                            const t = document.getElementById('quickAddTitle').value;
                                                            const d = document.getElementById('quickAddDesc').value;
                                                            const p = document.getElementById('quickAddPrice').value;
                                                            const m = document.getElementById('quickAddMoq').value;
                                                            const u = document.getElementById('quickAddUnit').value;
                                                            const iFile = document.getElementById('quickAddImage').files[0];

                                                            if(!t || !d) {
                                                                alert('Title and Description are required');
                                                                return;
                                                            }
                                                            
                                                            btn.innerText = 'ADDING...';
                                                            btn.disabled = true;
                                                            btn.style.opacity = '0.7';

                                                            const f = new FormData(); 
                                                            f.append('title', t); 
                                                            f.append('description', d); 
                                                            f.append('price', p || 0);
                                                            f.append('moq', m || 1);
                                                            f.append('unit', u || 'Units');
                                                            f.append('category', 'Catalog Exclusive');
                                                            if(iFile) f.append('images', iFile);
                                                            
                                                            try {
                                                                const res = await fetch(`${apiEndpoint}/products/add/${id}`, { method: 'POST', body: f });
                                                                if(res.ok) {
                                                                    const pRes = await fetch(`${apiEndpoint}/products/${id}`); 
                                                                    const pD = await pRes.json(); 
                                                                    setProducts(pD.products);
                                                                    setCatFeaturedIds([...(catFeaturedIds || []), pD.products[pD.products.length-1]._id]);
                                                                    
                                                                    // Clear fields
                                                                    document.getElementById('quickAddTitle').value = ''; 
                                                                    document.getElementById('quickAddDesc').value = '';
                                                                    document.getElementById('quickAddPrice').value = '';
                                                                    document.getElementById('quickAddMoq').value = '';
                                                                    document.getElementById('quickAddUnit').value = '';
                                                                    document.getElementById('quickAddImage').value = '';
                                                                    document.getElementById('quickPreview').style.display = 'none';
                                                                }
                                                            } catch (err) {
                                                                console.error(err);
                                                            } finally {
                                                                btn.innerText = originalText;
                                                                btn.disabled = false;
                                                                btn.style.opacity = '1';
                                                            }
                                                        }} 
                                                        style={{ 
                                                            padding: '14px 30px', 
                                                            background: '#ff6b00', 
                                                            color: '#fff', 
                                                            border: 'none', 
                                                            borderRadius: '12px', 
                                                            fontWeight: '900',
                                                            fontSize: '13px',
                                                            cursor: 'pointer',
                                                            boxShadow: '0 4px 15px rgba(255, 107, 0, 0.3)',
                                                            transition: 'all 0.2s',
                                                            flexShrink: 0
                                                        }}
                                                    >CREATE & FEATURE</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                                            {products.map(p => {
                                                const isSelected = (catFeaturedIds || []).includes(p._id);
                                                return (
                                                    <div key={p._id} onClick={() => {
                                                        const c = catFeaturedIds || [];
                                                        setCatFeaturedIds(isSelected ? c.filter(x => x !== p._id) : [...c, p._id]);
                                                    }} style={{ 
                                                        padding: '1.2rem', 
                                                        borderRadius: '24px', 
                                                        border: isSelected ? `2px solid ${palette.navy}` : '2px solid #f1f5f9', 
                                                        background: isSelected ? '#f8fafc' : '#fff', 
                                                        cursor: 'pointer', 
                                                        display: 'flex', 
                                                        alignItems: 'center', 
                                                        gap: '15px',
                                                        transition: 'all 0.2s',
                                                        transform: isSelected ? 'scale(1.02)' : 'none',
                                                        boxShadow: isSelected ? '0 10px 20px rgba(0,0,0,0.05)' : 'none'
                                                    }}>
                                                        <div style={{ width: '55px', height: '55px', borderRadius: '14px', overflow: 'hidden', flexShrink: 0, border: '1px solid #f1f5f9' }}>
                                                            <img src={p.images?.[0] ? `${apiEndpoint}/${encodeURI(p.images[0].replace(/\\/g, '/'))}` : 'https://via.placeholder.com/60'} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                        </div>
                                                        <div style={{ overflow: 'hidden', flex: 1 }}>
                                                            <div style={{ fontSize: '13px', fontWeight: '900', color: palette.navy, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', textTransform: 'uppercase' }}>{Array.isArray(p.title) ? p.title[0] : p.title}</div>
                                                            <div style={{ fontSize: '11px', color: isSelected ? '#ff6b00' : '#94a3b8', fontWeight: '800', marginTop: '4px' }}>
                                                                {isSelected ? (
                                                                    <span><FontAwesomeIcon icon={faShieldVirus} style={{ marginRight: '5px' }} /> FEATURED ON STOREFRONT</span>
                                                                ) : (
                                                                    'INVENTORY ITEM - CLICK TO ADD'
                                                                )}
                                                            </div>
                                                        </div>
                                                        {isSelected && <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff6b00' }}></div>}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* LIVE PREVIEW SECTION */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '0 1rem' }}>
                            <div style={{ height: '2px', flex: 1, background: '#e2e8f0' }}></div>
                            <span style={{ fontSize: '0.7rem', fontWeight: '900', color: palette.subText, textTransform: 'uppercase', letterSpacing: '2px' }}>Live Catalog Preview</span>
                            <div style={{ height: '2px', flex: 1, background: '#e2e8f0' }}></div>
                        </div>

                        <div className="catalog-preview" style={{ background: '#fff', borderRadius: '30px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 20px 50px rgba(0,0,0,0.05)' }}>
                            <DynamicSellerCatalog sellerId={id} refreshKey={catalogRefreshKey} />
                        </div>
                    </div>
                )}

            </div>

            <style>{`
                .loader {
                    border: 4px solid rgba(255, 255, 255, 0.1);
                    border-left-color: ${palette.lightBlue};
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
                .status-badge.premium { color: #fbbf24; }
                .status-badge.advanced { color: #3b82f6; }
                .status-badge.free { color: #94a3b8; }
            `}</style>
        </div>
    );
};

export default AdminSellerDetail;
