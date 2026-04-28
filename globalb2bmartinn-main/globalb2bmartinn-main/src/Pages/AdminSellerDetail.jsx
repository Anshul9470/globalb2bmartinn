import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faArrowLeft, faUser, faBox, faFileAlt, 
    faPhone, faEnvelope, faMapMarkerAlt, faBriefcase,
    faCrown, faDownload, faImage, faExclamationTriangle,
    faTrashAlt, faEdit, faTimes, faCheckCircle, faStar, faShieldHalved, faBuilding,
    faCartPlus, faLayerGroup, faGem, faChartLine
} from '@fortawesome/free-solid-svg-icons';
import './Dashboard.css';

import { CATEGORIES, SUB_CATEGORIES, getCategorySuggestions, getSubCategorySuggestions } from '../services/categoryData';
import { COUNTRIES, getStateSuggestions, INDIAN_STATES } from '../services/locationData';

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
    const [stateSuggestions, setStateSuggestions] = useState([]);
    const [showStateSuggestions, setShowStateSuggestions] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

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
                category: editingProduct.category,
                subCategory: editingProduct.subCategory,
                country: editingProduct.country,
                state: editingProduct.state,
                city: editingProduct.city,
                experience: editingProduct.experience
            });
            setProducts(products.map(p => p._id === editingProduct._id ? editingProduct : p));
            setEditingProduct(null);
            alert('Product updated successfully');
        } catch (err) {
            alert('Update failed');
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
                                    placeholder="e.g. 100 Units"
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
                                                <div style={{ background: '#ecfdf5', color: '#059669', padding: '4px 12px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '6px' }}>
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
                    <div className="catalog-section">
                        <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem', color: palette.navy, fontWeight: '800', display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <FontAwesomeIcon icon={faFileAlt} /> BUSINESS CATALOG & DOCUMENTS
                        </h3>
                        <div className="glass-card" style={{ padding: '3rem', background: palette.cardBg, borderRadius: '30px', border: '1px solid #e2e8f0', boxShadow: '0 5px 20px rgba(0,0,0,0.02)' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
                                {seller.images && seller.images.length > 0 ? (
                                    seller.images.map((img, idx) => (
                                        <div key={idx} className="catalog-card" style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', border: '1px solid #f1f5f9' }}>
                                            <img 
                                                src={`${apiEndpoint}${encodeURI(img.replace(/\\/g, '/'))}`} 
                                                alt={`Document ${idx}`} 
                                                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                                            />
                                            <a 
                                                href={`${apiEndpoint}${encodeURI(img.replace(/\\/g, '/'))}`} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                style={{ 
                                                    position: 'absolute', 
                                                    inset: 0, 
                                                    background: 'rgba(30,58,138,0.4)', 
                                                    display: 'flex', 
                                                    alignItems: 'center', 
                                                    justifyContent: 'center', 
                                                    opacity: 0, 
                                                    transition: '0.3s',
                                                    color: '#fff',
                                                    fontSize: '1.8rem'
                                                }}
                                                onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                                                onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
                                            >
                                                <FontAwesomeIcon icon={faDownload} />
                                            </a>
                                        </div>
                                    ))
                                ) : (
                                    <div style={{ gridColumn: '1 / -1', color: palette.subText, textAlign: 'center', padding: '2rem' }}>
                                        No catalog documents uploaded.
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* New Catalogs Collection */}
                        <div style={{ marginTop: '3rem' }}>
                            <h4 style={{ marginBottom: '1.5rem', color: palette.lightBlue, fontWeight: '800' }}>PUBLISHED CATALOGS ({catalogs.length})</h4>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                                {catalogs.length > 0 ? (
                                    catalogs.map((cat, idx) => (
                                        <div key={idx} className="glass-card" style={{ padding: '1.5rem', background: palette.cardBg, borderRadius: '25px', border: '1px solid #e2e8f0' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                                <h5 style={{ margin: 0, fontSize: '1.1rem', color: palette.navy }}>{cat.title}</h5>
                                                <button 
                                                    onClick={async () => {
                                                        if(window.confirm('Delete this catalog document?')) {
                                                            await axios.delete(`${apiEndpoint}/catalog/delete/${cat._id}`);
                                                            setCatalogs(catalogs.filter(c => c._id !== cat._id));
                                                        }
                                                    }}
                                                    style={{ background: 'none', border: 'none', color: palette.danger, cursor: 'pointer' }}
                                                >
                                                    <FontAwesomeIcon icon={faTrashAlt} />
                                                </button>
                                            </div>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                                {cat.files.map((file, fIdx) => (
                                                    <a 
                                                        key={fIdx}
                                                        href={`${apiEndpoint}${encodeURI(file)}`} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        style={{ 
                                                            width: '60px', 
                                                            height: '60px', 
                                                            borderRadius: '8px', 
                                                            overflow: 'hidden', 
                                                            border: '1px solid #e2e8f0',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            fontSize: '0.7rem',
                                                            background: '#f8fafc',
                                                            textDecoration: 'none',
                                                            color: palette.subText
                                                        }}
                                                    >
                                                        {file.endsWith('.pdf') ? 'PDF' : <img src={`${apiEndpoint}${encodeURI(file)}`} style={{width: '100%', height: '100%', objectFit: 'cover'}} />}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p style={{ color: palette.subText }}>No advanced catalogs published.</p>
                                )}
                            </div>
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
