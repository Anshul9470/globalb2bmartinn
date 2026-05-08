import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faGauge, faShieldHalved, faUser, faCartPlus, faBarsProgress, 
    faBook, faCircleQuestion, faLeaf, faBell, faGem, faChartLine, 
    faLayerGroup, faArrowCircleUp, faHeadset, faMagnifyingGlass,
    faXmark, faBolt, faBuilding, faVial, faBoxOpen, faCar, faSignOutAlt,
    faStar, faCheckCircle, faPenToSquare, faTrash, faSpinner,
    faBox, faEnvelope, faPhone, faLocationDot
} from '@fortawesome/free-solid-svg-icons';
import './Dashboard.css';
import './SearchResults.css';
import TRADE_VISUALIZATION from '../assets/trade_visualization.png';
import DASHBOARD_HERO from '../assets/dashboard_hero.png';
import SUPPORT_ILLUSTRATION from '../assets/support_illustration.png';

import { useAuth } from '../Buyers/AuthContext';
import { CATEGORIES, SUB_CATEGORIES, getCategorySuggestions, getSubCategorySuggestions } from '../services/categoryData';
import { COUNTRIES, getStateSuggestions } from '../services/locationData';

const FreeDash = () => {
    const { userId: authUserId, setUserId, logout, isLoading } = useAuth();
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState('');
    const [activeSection, setActiveSection] = useState('dashboard');
    const [selectedImages, setSelectedImages] = useState([]);
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
    const [productExperience, setProductExperience] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productUnit, setProductUnit] = useState('kg');
    const [stateSuggestions, setStateSuggestions] = useState([]);
    const [showStateSuggestions, setShowStateSuggestions] = useState(false);

    const [viewedLeads, setViewedLeads] = useState([]);
    const [gstNumber, setGSTNumber] = useState('');
    const [message, setMessage] = useState('');
    const [leadLoading, setLeadLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [catalogs, setCatalogs] = useState([]);
    const [catalogTitle, setCatalogTitle] = useState('');
    const [catalogFiles, setCatalogFiles] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [modalProductTitle, setModalProductTitle] = useState('');
    const [modalProductPrice, setModalProductPrice] = useState('');
    const [modalProductUnit, setModalProductUnit] = useState('kg');
    const [modalProductMOQ, setModalProductMOQ] = useState('');
    const [modalProductDescription, setModalProductDescription] = useState('');
    
    // New Search & Suggestion States
    const [searchTerm, setSearchTerm] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    
    // Lead Sharing States
    const [allBuyers, setAllBuyers] = useState([]);
    const [selectedLeads, setSelectedLeads] = useState([]);
    const [targetUserSearch, setTargetUserSearch] = useState('');
    const [targetUserSuggestions, setTargetUserSuggestions] = useState([]);
    const [selectedTargetUser, setSelectedTargetUser] = useState(null);
    const [isSharing, setIsSharing] = useState(false);
    const [buyerSearchTerm, setBuyerSearchTerm] = useState('');
    const [isFetchingBuyers, setIsFetchingBuyers] = useState(false);

    // Dropdown state
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);
    const [leadDateFilter, setLeadDateFilter] = useState('');
    const [leadMonthFilter, setLeadMonthFilter] = useState('');
    const [leadYearFilter, setLeadYearFilter] = useState(new Date().getFullYear().toString());

    const masterProductList = [
        { title: 'CNC Machines', category: 'Machinery', icon: faGauge },
        { title: 'Injection Molding', category: 'Machinery', icon: faBarsProgress },
        { title: 'Solar Panels', category: 'Energy', icon: faGem },
        { title: 'Industrial Transformers', category: 'Electrical', icon: faBolt },
        { title: 'Basmati Rice', category: 'Food', icon: faBook },
        { title: 'Surgical Masks', category: 'Medical', icon: faShieldHalved },
        { title: 'TMT Bars', category: 'Construction', icon: faBuilding },
        { title: 'Cotton Fabrics', category: 'Textiles', icon: faLayerGroup },
        { title: 'Organic Spices', category: 'Agriculture', icon: faLeaf },
        { title: 'Industrial Chemicals', category: 'Chemicals', icon: faVial },
        { title: 'Corrugated Boxes', category: 'Packaging', icon: faBoxOpen },
        { title: 'Engine Components', category: 'Automotive', icon: faCar },
        { title: 'Packing Machines', category: 'Machinery', icon: faBoxOpen },
        { title: 'Generators', category: 'Power', icon: faBolt },
        { title: 'Electric Motors', category: 'Electrical', icon: faBolt },
        { title: 'Office Furniture', category: 'Furniture', icon: faUser },
    ];

    const industryList = [
        { name: 'Industrial Machinery', icon: faGauge },
        { name: 'Solar & Energy', icon: faGem },
        { name: 'Medical & Health', icon: faShieldHalved },
        { name: 'Textiles & Fashion', icon: faLayerGroup },
        { name: 'Food & Spices', icon: faBook },
        { name: 'Construction', icon: faBuilding },
        { name: 'Electronics', icon: faBolt },
        { name: 'Chemicals', icon: faVial },
        { name: 'Packaging', icon: faBoxOpen },
        { name: 'Automotive', icon: faCar }
    ];

    const filteredSuggestions = masterProductList.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 8);

    const location = useLocation();
    const navigate = useNavigate();

    // Check authentication and redirect to login if not authenticated
    useEffect(() => {
        if (!isLoading && !authUserId) {
            navigate('/login');
        }
    }, [isLoading, authUserId, navigate]);

    useEffect(() => {
        const fetchUserData = async () => {
            // Primary source: AuthContext userId (restored from localStorage)
            // Fallback: URL parameter (for backward compatibility)
            const urlUserId = new URLSearchParams(location.search).get('id');
            const targetUserId = urlUserId || authUserId;

            if (!targetUserId) return;

            // Sync URL ID to context if needed
            if (urlUserId && urlUserId !== authUserId) {
                setUserId(urlUserId);
            }

            try {
                const apiBase = process.env.REACT_APP_API_ENDPOINT || "http://localhost:3005";
                const response = await fetch(`${apiBase}/login?id=${targetUserId}`);
                if (response.status === 404 || response.status === 401) {
                    setUserId(null);
                    navigate('/login');
                    return;
                }
                if (!response.ok) throw new Error('Server connection error. Please try again.');
                
                const data = await response.json();
                setUserData(data.user);
                setError(''); 
            } catch (error) {
                console.error("Fetch User Data Error:", error);
                setError(error.message);
            }
        };

        // Only fetch if we have an authUserId and are not in loading state
        if (!isLoading && authUserId) {
            fetchUserData();
        }
    }, [authUserId, isLoading, setUserId, navigate]);

    useEffect(() => {
        if (activeSection === 'viewleads' && userData) {
            const fetchLeads = async () => {
                setLeadLoading(true);
                try {
                    const apiBase = process.env.REACT_APP_API_ENDPOINT || "http://localhost:3005";
                    const response = await fetch(`${apiBase}/viewedLeads/${userData._id}`);
                    if (response.ok) {
                        const data = await response.json();
                        setViewedLeads(data.viewedLeads);
                    }
                } catch (e) { console.error(e); }
                finally { setLeadLoading(false); }
            };
            fetchLeads();
        }
    }, [activeSection, userData]);

    useEffect(() => {
        if ((activeSection === 'manageProducts' || activeSection === 'catalogProduct') && userData) {
            const fetchProducts = async () => {
                const apiBase = process.env.REACT_APP_API_ENDPOINT || "http://localhost:3005";
                const response = await fetch(`${apiBase}/products/${userData._id}`);
                if (response.ok) {
                    const data = await response.json();
                    if (data && data.products) {
                        setProducts(data.products);
                    } else {
                        setProducts([]);
                    }
                }
            };
            fetchProducts();
        }
    }, [activeSection, userData]);

    useEffect(() => {
        if (activeSection === 'manageCatalogs' && userData) {
            const fetchCatalogs = async () => {
                const apiBase = process.env.REACT_APP_API_ENDPOINT || "http://localhost:3005";
                const response = await fetch(`${apiBase}/catalog/${userData._id}`);
                if (response.ok) {
                    const data = await response.json();
                    setCatalogs(data.catalogs || []);
                }
            };
            fetchCatalogs();
        }
    }, [activeSection, userData]);

    // Fetch All Buyers for Sharing (Lead Distribution)
    useEffect(() => {
        if (activeSection === 'viewleads' && userData) {
            const fetchAllBuyers = async () => {
                setIsFetchingBuyers(true);
                try {
                    const apiBase = process.env.REACT_APP_API_ENDPOINT || "http://localhost:3005";
                    const res = await fetch(`${apiBase}/buyers`);
                    if (res.ok) {
                        const data = await res.json();
                        setAllBuyers(data.buyers || []);
                    }
                } catch (e) { console.error(e); }
                finally { setIsFetchingBuyers(false); }
            };
            fetchAllBuyers();
        }
    }, [activeSection, userData]);

    // Search for Target Users (Suppliers)
    useEffect(() => {
        if (targetUserSearch.length > 1) {
            const searchTargets = async () => {
                try {
                    const apiBase = process.env.REACT_APP_API_ENDPOINT || "http://localhost:3005";
                    // Using existing by-role/seller endpoint and filtering
                    const res = await fetch(`${apiBase}/by-role/seller`);
                    if (res.ok) {
                        const data = await res.json();
                        const sellers = data.users || [];
                        const filtered = sellers.filter(u => 
                            u.name.toLowerCase().includes(targetUserSearch.toLowerCase()) || 
                            u.companyName.toLowerCase().includes(targetUserSearch.toLowerCase())
                        );
                        setTargetUserSuggestions(filtered.slice(0, 10));
                    }
                } catch (e) { console.error(e); }
            };
            searchTargets();
        } else {
            setTargetUserSuggestions([]);
        }
    }, [targetUserSearch]);

    const handleShareLeads = async () => {
        if (!selectedTargetUser || selectedLeads.length === 0) {
            alert("Please select a target user and at least one buyer.");
            return;
        }

        setIsSharing(true);
        try {
            const apiBase = process.env.REACT_APP_API_ENDPOINT || "http://localhost:3005";
            const response = await fetch(`${apiBase}/share-leads`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    targetUserId: selectedTargetUser._id,
                    leads: selectedLeads.map(id => {
                        const b = allBuyers.find(buyer => buyer._id === id);
                        return {
                            buyerName: b.buyerName,
                            mobileNo: b.mobileNo,
                            email: b.email || 'N/A',
                            viewedAt: new Date()
                        };
                    })
                })
            });

            if (response.ok) {
                alert(`Successfully shared ${selectedLeads.length} leads with ${selectedTargetUser.companyName}!`);
                setSelectedLeads([]);
                setSelectedTargetUser(null);
                setTargetUserSearch('');
            } else {
                alert("Failed to share leads.");
            }
        } catch (e) {
            console.error(e);
            alert("Error sharing leads.");
        } finally {
            setIsSharing(false);
        }
    };

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
        // Pre-populate sub-category suggestions for the selected category
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

    const handleEditStart = (prod) => {
        setEditingProduct(prod);
        setModalProductTitle(prod.title);
        setModalProductDescription(prod.description || '');
        setModalProductPrice(prod.price || 'Ask for Price');
        setModalProductUnit(prod.unit || 'kg');
        setModalProductMOQ(prod.moq || 'Negotiable');
        setIsEditModalOpen(true);
    };

    const handleModalSave = async () => {
        if (!userData || !userData._id || !editingProduct) return;
        
        try {
            const apiBase = process.env.REACT_APP_API_ENDPOINT || "http://localhost:3005";
            const formData = new FormData();
            formData.append('title', modalProductTitle);
            formData.append('description', modalProductDescription);
            formData.append('price', modalProductPrice);
            formData.append('unit', modalProductUnit);
            formData.append('moq', modalProductMOQ);
            
            const res = await fetch(`${apiBase}/products/update/${userData._id}/${editingProduct._id}`, {
                method: 'PUT',
                body: formData
            });

            if (res.ok) {
                const updatedData = await res.json();
                // Find the updated product in the list and refresh
                const updatedList = products.map(p => {
                    if (p._id === editingProduct._id) {
                        return { 
                            ...p, 
                            title: modalProductTitle, 
                            description: modalProductDescription,
                            price: modalProductPrice,
                            unit: modalProductUnit,
                            moq: modalProductMOQ
                        };
                    }
                    return p;
                });
                setProducts(updatedList);
                setIsEditModalOpen(false);
                setEditingProduct(null);
                alert('Product Updated Successfully!');
            } else {
                alert('Failed to update product');
            }
        } catch (err) {
            console.error(err);
            alert('Error updating product');
        }
    };

    const handleProductSubmit = async () => {
        console.log("Publish button clicked");
        if (!userData || !userData._id) {
            console.error("User data missing");
            return alert('User session expired. Please login again.');
        }

        if (!productTitle || selectedImages.length === 0) {
            return alert('Please provide Title and at least one image.');
        }

        const formData = new FormData();
        formData.append('title', productTitle);
        formData.append('description', productDescription);
        formData.append('category', productCategory || 'General');
        formData.append('subCategory', productSubCategory || 'General');
        formData.append('country', productCountry);
        formData.append('state', productState);
        formData.append('experience', productExperience);
        formData.append('price', productPrice || 'Ask for Price');
        formData.append('unit', productUnit);
        selectedImages.forEach((image) => {
            formData.append('images', image);
        });

        console.log("Sending product data for user:", userData._id);

        try {
            const apiBase = process.env.REACT_APP_API_ENDPOINT || "http://localhost:3005";
            let url = `${apiBase}/products/add/${userData._id}`;
            let method = 'POST';

            if (editingProduct) {
                url = `${apiBase}/products/update/${userData._id}/${editingProduct._id}`;
                method = 'PUT';
            }

            const response = await fetch(url, {
                method: method,
                body: formData,
            });

            console.log("Server response status:", response.status);

            if (response.ok) {
                alert(editingProduct ? 'Product updated successfully' : 'Product successfully published to Supplier Profile');
                setEditingProduct(null);
                setProductTitle('');
                setProductDescription('');
                setProductCategory('');
                setProductSubCategory('');
                setProductCountry('India');
                setProductState('');
                setProductExperience('');
                setProductPrice('');
                setProductUnit('kg');
                setSelectedImages([]);
                
                // Refresh list
                const prodResponse = await fetch(`${apiBase}/products/${userData._id}`);
                if (prodResponse.ok) {
                    const prodData = await prodResponse.json();
                    setProducts(prodData.products || []);
                }
            } else {
                const errData = await response.json();
                console.error("Upload failed:", errData);
                alert(`Upload failed: ${errData.message}`);
            }
        } catch (error) {
            console.error("Connection error:", error);
            alert('An error occurred during upload. Check console for details.');
        }
    };

    const handleUpdateUser = async () => {
        const formData = new FormData();
        Object.keys(userData).forEach(key => formData.append(key, userData[key]));
        try {
            const apiBase = process.env.REACT_APP_API_ENDPOINT || "http://localhost:3005";
            const response = await fetch(`${apiBase}/update/${userData._id}`, {
                method: 'PUT',
                body: formData,
            });
            if (response.ok) alert('Profile synchronized');
        } catch (error) { console.error(error); }
    };

    const handleUpdateGST = async () => {
        if (!gstNumber) return alert('Please enter a valid GSTIN');
        try {
            const apiBase = process.env.REACT_APP_API_ENDPOINT || "http://localhost:3005";
            const response = await fetch(`${apiBase}/update-gst/${userData._id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ gstNumber }),
            });
            if (response.ok) {
                setUserData({ ...userData, gstNumber });
                alert('Legal Identity Verified & Updated');
            }
        } catch (error) { console.error(error); }
    };


    const handleCatalogUpload = async () => {
        if (!catalogTitle) return alert('Please enter a title for your catalog');
        const formData = new FormData();
        formData.append('title', catalogTitle);
        catalogFiles.forEach((file) => formData.append('files', file));

        try {
            const apiBase = process.env.REACT_APP_API_ENDPOINT || "http://localhost:3005";
            const response = await fetch(`${apiBase}/catalog/add/${userData._id}`, {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                alert('Catalog uploaded successfully');
                setCatalogFiles([]);
                setCatalogTitle('');
            }
        } catch (error) { console.error(error); }
    };

    if (!userData) return <div className="dashboard-container" style={{justifyContent: 'center', alignItems: 'center'}}>Syncing with GlobalB2B Network...</div>;

    return (
        <div className="animated-grey-bg">

            {/* Unified Architectural Sidebar */}
            <aside className="premium-sidebar" style={{ 
                background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)', 
                color: '#fff', 
                borderRight: '1px solid rgba(255,255,255,0.05)',
                boxShadow: '4px 0 24px rgba(0,0,0,0.05)',
                padding: '2rem 1.2rem',
                overflowY: 'auto',
                overflowX: 'hidden'
            }}>
                {/* Custom scrollbar hide */}
                <style>{`
                    .premium-sidebar::-webkit-scrollbar { width: 4px; }
                    .premium-sidebar::-webkit-scrollbar-track { background: transparent; }
                    .premium-sidebar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
                    .premium-sidebar::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }
                `}</style>

                <div className="sidebar-logo" style={{ marginBottom: '2.5rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '1rem', paddingLeft: '0.8rem', flexShrink: 0 }}>
                    <div style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', width: '38px', height: '38px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)' }}>
                        <FontAwesomeIcon icon={faGem} style={{ fontSize: '1.2rem', color: '#fff' }} />
                    </div>
                    <span style={{ fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-0.5px' }}>GlobalB2B</span>
                </div>
                
                <nav className="pre-side" style={{flex: 1, display: 'flex', flexDirection: 'column', gap: '0.3rem'}}>
                    
                    {/* --- MAIN Section Label --- */}
                    <div style={{ padding: '0.5rem 1rem', fontSize: '0.7rem', fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '0.3rem' }}>
                        Main
                    </div>
                    {[
                        { id: 'dashboard', icon: faGauge, label: 'Dashboard' },
                        { id: 'profileEdit', icon: faUser, label: 'Company Profile' },
                    ].map(item => (
                        <div key={item.id} 
                             onClick={() => setActiveSection(item.id)}
                             style={{
                                 padding: '0.8rem 1.2rem',
                                 borderRadius: '10px',
                                 cursor: 'pointer',
                                 transition: 'all 0.25s ease',
                                 background: activeSection === item.id ? 'linear-gradient(90deg, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0) 100%)' : 'transparent',
                                 borderLeft: activeSection === item.id ? '3px solid #3b82f6' : '3px solid transparent',
                                 color: activeSection === item.id ? '#fff' : '#94a3b8'
                             }}
                             onMouseOver={(e) => { if (activeSection !== item.id) { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}}
                             onMouseOut={(e) => { if (activeSection !== item.id) { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.background = 'transparent'; }}}
                        >
                            <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: activeSection === item.id ? 700 : 500, fontSize: '0.95rem' }}>
                                <FontAwesomeIcon icon={item.icon} style={{ color: activeSection === item.id ? '#3b82f6' : '#64748b', fontSize: '1rem', width: '18px' }} /> 
                                <span>{item.label}</span>
                            </p>
                        </div>
                    ))}

                    {/* --- BUSINESS Section Label --- */}
                    <div style={{ padding: '0.8rem 1rem 0.5rem', fontSize: '0.7rem', fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '1.5px', marginTop: '0.5rem' }}>
                        Business
                    </div>
                    {[
                        { id: 'catalogProduct', icon: faCartPlus, label: 'Add Products' },
                        { id: 'viewleads', icon: faLeaf, label: 'Verified Buyers' },
                        { id: 'addgst', icon: faBook, label: 'Add GST' },
                    ].map(item => (
                        <div key={item.id} 
                             onClick={() => setActiveSection(item.id)}
                             style={{
                                 padding: '0.8rem 1.2rem',
                                 borderRadius: '10px',
                                 cursor: 'pointer',
                                 transition: 'all 0.25s ease',
                                 background: activeSection === item.id ? 'linear-gradient(90deg, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0) 100%)' : 'transparent',
                                 borderLeft: activeSection === item.id ? '3px solid #3b82f6' : '3px solid transparent',
                                 color: activeSection === item.id ? '#fff' : '#94a3b8'
                             }}
                             onMouseOver={(e) => { if (activeSection !== item.id) { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}}
                             onMouseOut={(e) => { if (activeSection !== item.id) { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.background = 'transparent'; }}}
                        >
                            <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: activeSection === item.id ? 700 : 500, fontSize: '0.95rem' }}>
                                <FontAwesomeIcon icon={item.icon} style={{ color: activeSection === item.id ? '#3b82f6' : '#64748b', fontSize: '1rem', width: '18px' }} /> 
                                <span>{item.label}</span>
                            </p>
                        </div>
                    ))}

                    {/* --- SUPPORT Section Label --- */}
                    <div style={{ padding: '0.8rem 1rem 0.5rem', fontSize: '0.7rem', fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '1.5px', marginTop: '0.5rem' }}>
                        Support
                    </div>
                    {[
                        { id: 'needHelp', icon: faCircleQuestion, label: 'Need Help' },
                    ].map(item => (
                        <div key={item.id} 
                             onClick={() => setActiveSection(item.id)}
                             style={{
                                 padding: '0.8rem 1.2rem',
                                 borderRadius: '10px',
                                 cursor: 'pointer',
                                 transition: 'all 0.25s ease',
                                 background: activeSection === item.id ? 'linear-gradient(90deg, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0) 100%)' : 'transparent',
                                 borderLeft: activeSection === item.id ? '3px solid #3b82f6' : '3px solid transparent',
                                 color: activeSection === item.id ? '#fff' : '#94a3b8'
                             }}
                             onMouseOver={(e) => { if (activeSection !== item.id) { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}}
                             onMouseOut={(e) => { if (activeSection !== item.id) { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.background = 'transparent'; }}}
                        >
                            <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: activeSection === item.id ? 700 : 500, fontSize: '0.95rem' }}>
                                <FontAwesomeIcon icon={item.icon} style={{ color: activeSection === item.id ? '#3b82f6' : '#64748b', fontSize: '1rem', width: '18px' }} /> 
                                <span>{item.label}</span>
                            </p>
                        </div>
                    ))}

                    {/* --- LOGOUT --- */}
                    <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '0.8rem' }}>
                        <div 
                            onClick={() => { logout(); navigate('/'); }}
                            style={{ padding: '0.8rem 1.2rem', borderRadius: '10px', cursor: 'pointer', transition: 'all 0.25s ease', color: '#ef4444' }}
                            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(239,68,68,0.1)'}
                            onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                        >
                            <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 600, fontSize: '0.95rem' }}>
                                <FontAwesomeIcon icon={faSignOutAlt} style={{ width: '18px' }} /> 
                                <span>Logout</span>
                            </p>
                        </div>
                    </div>
                </nav>

                {/* Profile Dropdown Footer */}
                <div 
                    className="sidebar-footer" 
                    onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                    style={{ position: 'relative', marginTop: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '14px', padding: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.8rem', border: '1px solid rgba(255,255,255,0.08)', cursor: 'pointer', transition: 'all 0.3s ease', flexShrink: 0 }}
                    onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
                    onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                >
                    <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '1rem', flexShrink: 0 }}>
                        {userData.name.charAt(0).toUpperCase()}
                    </div>
                    <div style={{ overflow: 'hidden', flex: 1 }}>
                        <p style={{ fontWeight: 700, fontSize: '0.85rem', margin: 0, color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{userData.name}</p>
                        <p style={{ fontSize: '0.7rem', color: '#94a3b8', margin: '0.15rem 0 0 0', fontWeight: 500 }}>{userData.plan || 'Free'} Plan</p>
                    </div>
                    <FontAwesomeIcon icon={faLayerGroup} style={{ color: '#475569', fontSize: '0.7rem' }} />

                    {showProfileDropdown && (
                        <div style={{ position: 'absolute', bottom: '110%', left: 0, right: 0, background: '#1e293b', borderRadius: '14px', padding: '0.4rem', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 -10px 40px rgba(0,0,0,0.25)', zIndex: 100 }}>
                            <div 
                                onClick={(e) => { e.stopPropagation(); setActiveSection('profileEdit'); setShowProfileDropdown(false); }}
                                style={{ padding: '0.7rem 1rem', display: 'flex', alignItems: 'center', gap: '0.7rem', color: '#fff', fontSize: '0.85rem', fontWeight: 500, borderRadius: '10px', transition: 'all 0.2s', cursor: 'pointer' }}
                                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                                onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                            >
                                <FontAwesomeIcon icon={faUser} style={{ color: '#3b82f6', width: '14px' }} /> Company Profile
                            </div>
                            <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', margin: '0.2rem 0' }}></div>
                            <div 
                                onClick={(e) => { e.stopPropagation(); setActiveSection('addgst'); setShowProfileDropdown(false); }}
                                style={{ padding: '0.7rem 1rem', display: 'flex', alignItems: 'center', gap: '0.7rem', color: '#fff', fontSize: '0.85rem', fontWeight: 500, borderRadius: '10px', transition: 'all 0.2s', cursor: 'pointer' }}
                                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                                onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                            >
                                <FontAwesomeIcon icon={faShieldHalved} style={{ color: '#10b981', width: '14px' }} /> GST Settings
                            </div>
                            <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', margin: '0.2rem 0' }}></div>
                            <div 
                                onClick={(e) => { e.stopPropagation(); logout(); navigate('/'); }}
                                style={{ padding: '0.7rem 1rem', display: 'flex', alignItems: 'center', gap: '0.7rem', color: '#ef4444', fontSize: '0.85rem', fontWeight: 600, borderRadius: '10px', transition: 'all 0.2s', cursor: 'pointer' }}
                                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(239,68,68,0.1)'}
                                onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                            >
                                <FontAwesomeIcon icon={faSignOutAlt} style={{ width: '14px' }} /> Secure Logout
                            </div>
                        </div>
                    )}
                </div>
            </aside>

            {/* Premium Content Canvas */}
            <main className="premium-content">

                {activeSection === 'dashboard' && (
                    <section className="dashboard-view">
                        {/* PREMIUM HERO SECTION */}
                        <div className="animate-up" style={{ 
                            background: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(${DASHBOARD_HERO})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            padding: '4rem 3rem',
                            borderRadius: '2.5rem',
                            marginBottom: '2rem',
                            color: 'white',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
                        }}>
                            <div style={{ position: 'relative', zIndex: 2 }}>
                                <h1 style={{ fontSize: '3.2rem', fontWeight: 950, margin: 0, letterSpacing: '-2px' }}>
                                    Dashboard <span style={{ fontSize: '1.5rem', verticalAlign: 'middle', margin: '0 1rem', opacity: 0.3 }}>|</span> 
                                    <span style={{ color: '#3b82f6' }}>{userData.companyName}</span>
                                </h1>
                                <p style={{ fontSize: '1.2rem', opacity: 0.8, fontWeight: 600, marginTop: '1rem' }}>
                                    Welcome, {userData.name}. Your global trade command center is now active.
                                </p>
                            </div>
                        </div>

                        <div className="content-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                            <div className="stat-card" style={{ background: '#fff', borderRadius: '16px', padding: '1.2rem', display: 'flex', alignItems: 'center', gap: '1rem', border: '1px solid #eef2f6', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                                <div className="stat-icon" style={{ background: '#f1f5f9', width: '45px', height: '45px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6', fontSize: '1.2rem' }}>
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                                <div className="stat-info">
                                    <p className="label" style={{ margin: 0, fontSize: '0.75rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Merchant ID</p>
                                    <h3 className="value" style={{ margin: '0.1rem 0 0 0', fontSize: '1.1rem', fontWeight: 800, color: '#1e293b' }}>{userData._id.substring(0, 8).toUpperCase()}</h3>
                                </div>
                            </div>
                            
                            <div className="stat-card" style={{ background: '#fff', borderRadius: '16px', padding: '1.2rem', display: 'flex', alignItems: 'center', gap: '1rem', border: '1px solid #eef2f6', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                                <div className="stat-icon" style={{ background: '#dbeafe', width: '45px', height: '45px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1e40af', fontSize: '1.2rem' }}>
                                    <FontAwesomeIcon icon={faGem} />
                                </div>
                                <div className="stat-info">
                                    <p className="label" style={{ margin: 0, fontSize: '0.75rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Visibility Plan</p>
                                    <h3 className="value" style={{ margin: '0.1rem 0 0 0', fontSize: '1.1rem', fontWeight: 800, color: '#1e293b' }}>{(userData.plan || 'Free').toUpperCase()}</h3>
                                </div>
                            </div>
                            
                            <div className="stat-card" style={{ background: '#fff', borderRadius: '16px', padding: '1.2rem', display: 'flex', alignItems: 'center', gap: '1rem', border: '1px solid #eef2f6', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                                <div className="stat-icon" style={{ background: '#ffebee', width: '45px', height: '45px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d32f2f', fontSize: '1.2rem' }}>
                                    <FontAwesomeIcon icon={faShieldHalved} />
                                </div>
                                <div className="stat-info">
                                    <p className="label" style={{ margin: 0, fontSize: '0.75rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Verification</p>
                                    <h3 className="value" style={{ margin: '0.1rem 0 0 0', fontSize: '1.1rem', fontWeight: 800, color: '#d32f2f' }}>PENDING</h3>
                                </div>
                            </div>
                        </div>

                        <div className="bottom-sections" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
                            <div className="section-panel" style={{ padding: '1.5rem', background: '#fff', borderRadius: '20px', border: '1px solid #f1f5f9' }}>
                                <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1e293b', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                    <div style={{ width: '6px', height: '18px', borderRadius: '2px', background: '#3b82f6' }}></div>
                                    Personal Details
                                </h2>
                                <div className="user-info-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 2.5fr', padding: '0.8rem 1.2rem', background: '#f8fafc', borderRadius: '12px', alignItems: 'center', border: '1px solid #f1f5f9' }}>
                                        <p style={{ fontSize: '0.75rem', color: '#64748b', margin: 0, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Full Name</p>
                                        <p style={{ margin: 0, fontWeight: 700, color: '#1e293b', fontSize: '0.95rem' }}>{userData.name}</p>
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 2.5fr', padding: '0.8rem 1.2rem', background: '#f8fafc', borderRadius: '12px', alignItems: 'center', border: '1px solid #f1f5f9' }}>
                                        <p style={{ fontSize: '0.75rem', color: '#64748b', margin: 0, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Email</p>
                                        <p style={{ margin: 0, fontWeight: 700, color: '#1e293b', fontSize: '0.95rem', wordBreak: 'break-all' }}>{userData.email}</p>
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 2.5fr', padding: '0.8rem 1.2rem', background: '#f8fafc', borderRadius: '12px', alignItems: 'center', border: '1px solid #f1f5f9' }}>
                                        <p style={{ fontSize: '0.75rem', color: '#64748b', margin: 0, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Phone</p>
                                        <p style={{ margin: 0, fontWeight: 700, color: '#1e293b', fontSize: '0.95rem' }}>{userData.mobileNumber}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="section-panel" style={{ padding: '1.5rem', background: '#fff', borderRadius: '20px', border: '1px solid #f1f5f9' }}>
                                <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1e293b', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                    <div style={{ width: '6px', height: '18px', borderRadius: '2px', background: '#f97316' }}></div>
                                    Business Identity
                                </h2>
                                <div className="user-info-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 2.5fr', padding: '0.8rem 1.2rem', background: '#fffaf5', borderRadius: '12px', alignItems: 'center', border: '1px solid #fff2e6' }}>
                                        <p style={{ fontSize: '0.75rem', color: '#9a3412', margin: 0, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Company</p>
                                        <p style={{ margin: 0, fontWeight: 700, color: '#1e293b', fontSize: '0.95rem' }}>{userData.companyName}</p>
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 2.5fr', padding: '0.8rem 1.2rem', background: '#fffaf5', borderRadius: '12px', alignItems: 'center', border: '1px solid #fff2e6' }}>
                                        <p style={{ fontSize: '0.75rem', color: '#9a3412', margin: 0, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>GSTIN</p>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                            {userData.gstNumber && <FontAwesomeIcon icon={faCheckCircle} style={{color: '#16a34a', fontSize: '0.85rem'}} />}
                                            <p style={{ margin: 0, fontWeight: 700, color: userData.gstNumber ? '#1e293b' : '#ea580c', fontSize: '0.95rem' }}>
                                                {userData.gstNumber || 'Verification Pending'}
                                            </p>
                                        </div>
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 2.5fr', padding: '0.8rem 1.2rem', background: '#f0fdf4', borderRadius: '12px', alignItems: 'center', border: '1px solid #dcfce7' }}>
                                        <p style={{ fontSize: '0.75rem', color: '#166534', margin: 0, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Category</p>
                                        <p style={{ margin: 0, fontWeight: 700, color: '#16a34a', fontSize: '0.95rem' }}>{userData.productOrService}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
                {activeSection === 'profileEdit' && (
                    <div style={{maxWidth: '800px', margin: '0 auto', padding: '0 1rem'}}>
                        <div className="section-panel" style={{
                            background: '#fff', 
                            padding: '2.5rem', 
                            borderRadius: '24px', 
                            border: '1px solid #f1f5f9',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.02)'
                        }}>
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid #f8fafc', paddingBottom: '1rem'}}>
                                <div>
                                    <h2 style={{fontSize: '1.2rem', fontWeight: 800, color: '#1e293b', margin: 0}}>Company Identity</h2>
                                    <p style={{fontSize: '0.85rem', color: '#64748b', marginTop: '0.2rem'}}>Update your professional profile information</p>
                                </div>
                            </div>
                            
                            <div className="profile-form-grid" style={{
                                display: 'grid', 
                                gridTemplateColumns: '1fr 1fr', 
                                gap: '1.5rem 2rem'
                            }}>
                                <div className="user-info-field">
                                    <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem', fontWeight: 600, fontSize: '0.8rem', color: '#475569'}}>
                                        <FontAwesomeIcon icon={faUser} style={{fontSize: '0.7rem', color: '#3b82f6'}} /> Full Name
                                    </label>
                                    <input className="dash-input" style={{width: '100%', padding: '0.8rem 1rem', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '0.9rem'}} name="name" value={userData.name} onChange={(e) => setUserData({...userData, name: e.target.value})} />
                                </div>
                                
                                <div className="user-info-field">
                                    <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem', fontWeight: 600, fontSize: '0.8rem', color: '#475569'}}>
                                        <FontAwesomeIcon icon={faBuilding} style={{fontSize: '0.7rem', color: '#3b82f6'}} /> Email
                                    </label>
                                    <input className="dash-input" style={{width: '100%', padding: '0.8rem 1rem', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '0.9rem'}} name="email" value={userData.email} onChange={(e) => setUserData({...userData, email: e.target.value})} />
                                </div>
    
                                <div className="user-info-field">
                                    <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem', fontWeight: 600, fontSize: '0.8rem', color: '#475569'}}>
                                        <FontAwesomeIcon icon={faUser} style={{fontSize: '0.7rem', color: '#3b82f6'}} /> Mobile Number
                                    </label>
                                    <input className="dash-input" style={{width: '100%', padding: '0.8rem 1rem', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '0.9rem'}} name="mobileNumber" value={userData.mobileNumber} onChange={(e) => setUserData({...userData, mobileNumber: e.target.value})} />
                                </div>
    
                                <div className="user-info-field">
                                    <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem', fontWeight: 600, fontSize: '0.8rem', color: '#475569'}}>
                                        <FontAwesomeIcon icon={faBuilding} style={{fontSize: '0.7rem', color: '#3b82f6'}} /> Company Name
                                    </label>
                                    <input className="dash-input" style={{width: '100%', padding: '0.8rem 1rem', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '0.9rem'}} name="companyName" value={userData.companyName} onChange={(e) => setUserData({...userData, companyName: e.target.value})} />
                                </div>
    
                                <div className="user-info-field" style={{gridColumn: 'span 2'}}>
                                    <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem', fontWeight: 600, fontSize: '0.8rem', color: '#475569'}}>
                                        <FontAwesomeIcon icon={faGem} style={{fontSize: '0.7rem', color: '#3b82f6'}} /> Product/Service Segment
                                    </label>
                                    <input className="dash-input" style={{width: '100%', padding: '0.8rem 1rem', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '0.9rem'}} name="productOrService" value={userData.productOrService} onChange={(e) => setUserData({...userData, productOrService: e.target.value})} />
                                </div>
                            </div>
    
                            <div style={{marginTop: '2.5rem', display: 'flex', justifyContent: 'center'}}>
                                <button className="update-btn" onClick={handleUpdateUser} style={{background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', boxShadow: '0 10px 25px rgba(15, 23, 42, 0.15)', padding: '0.9rem 3rem', borderRadius: '14px', fontWeight: 700, fontSize: '0.95rem', color: '#fff', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease'}}>
                                    Update Identity
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                {activeSection === 'catalogProduct' && (
                    <section className="section-panel" style={{maxWidth: '1000px', margin: '0 auto'}}>
                        <div style={{marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <div>
                                <h2 style={{color: 'var(--on-surface)', marginBottom: '0.5rem'}}>{editingProduct ? 'Update Product Details' : 'Add Product Details'}</h2>
                                <p style={{fontSize: '0.85rem', color: 'var(--on-surface-variant)'}}>{editingProduct ? `Refining: ${editingProduct.title}` : 'Introduce your latest inventory to the GlobalB2B marketplace'}</p>
                            </div>
                            {editingProduct && (
                                <button 
                                    className="update-btn" 
                                    style={{background: '#f1f5f9', color: '#64748b', fontSize: '0.8rem', padding: '0.6rem 1.2rem'}}
                                    onClick={() => {
                                        setEditingProduct(null);
                                        setProductTitle('');
                                        setProductDescription('');
                                        setProductCategory('');
                                        setProductSubCategory('');
                                        setProductCountry('India');
                                        setProductState('');
                                        setProductExperience('');
                                        setSelectedImages([]);
                                    }}
                                >
                                    Cancel Edit
                                </button>
                            )}
                        </div>

                            <div className="product-form" style={{display: 'flex', flexDirection: 'column', gap: '0.2rem'}}>
                                {/* Group 1: Primary Details */}
                                <div style={{background: '#fcfcfd', padding: '0.4rem', borderRadius: '12px', border: '1px solid #f1f5f9'}}>
                                    <div style={{display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem'}}>
                                        <div style={{width: '20px', height: '20px', borderRadius: '4px', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6'}}>
                                            <FontAwesomeIcon icon={faGem} style={{fontSize: '0.9rem'}} />
                                        </div>
                                        <h3 style={{fontSize: '0.85rem', fontWeight: 800, color: '#1e293b', margin: 0}}>Product Essentials</h3>
                                    </div>
                                    
                                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem'}}>
                                        <div className="user-info-field" style={{gridColumn: 'span 2'}}>
                                            <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.8rem', color: '#64748b'}}>Product Title</label>
                                            <input 
                                                className="dash-input" 
                                                style={{width: '100%', borderRadius: '10px', padding: '0.5rem 0.75rem', fontSize: '0.85rem', border: '1px solid #e2e8f0', background: '#fff'}} 
                                                placeholder="Enter Product Name..." 
                                                value={productTitle} 
                                                onChange={(e) => setProductTitle(e.target.value)} 
                                            />
                                        </div>

                                        <div className="user-info-field" style={{position: 'relative'}}>
                                            <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.8rem', color: '#64748b'}}>Category</label>
                                            <input 
                                                className="dash-input" 
                                                style={{width: '100%', borderRadius: '10px', padding: '0.5rem 0.75rem', fontSize: '0.85rem', border: '1px solid #e2e8f0', background: '#fff'}} 
                                                placeholder="e.g. Machinery" 
                                                value={productCategory} 
                                                onChange={(e) => handleCategoryChange(e.target.value)}
                                                onFocus={() => handleCategoryChange(productCategory)}
                                                onBlur={() => setTimeout(() => setShowCategorySuggestions(false), 200)}
                                                autoComplete="off"
                                            />
                                            {showCategorySuggestions && categorySuggestions.length > 0 && (
                                                <div className="suggestions-dropdown" style={{position: 'absolute', top: '100%', left: 0, right: 0, background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', zIndex: 1001, marginTop: '5px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', maxHeight: '200px', overflowY: 'auto'}}>
                                                    {categorySuggestions.map((s, i) => (
                                                        <div key={i} onMouseDown={() => handleCategorySelect(s)} style={{padding: '10px 15px', fontSize: '0.85rem', cursor: 'pointer', borderBottom: i === categorySuggestions.length - 1 ? 'none' : '1px solid #f8fafc'}} onMouseEnter={(e) => e.target.style.background = '#f8fafc'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>{s}</div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        <div className="user-info-field" style={{position: 'relative'}}>
                                            <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.8rem', color: '#64748b'}}>Sub-Category</label>
                                            <input 
                                                className="dash-input" 
                                                style={{width: '100%', borderRadius: '12px', padding: '0.75rem 1rem', fontSize: '0.9rem', border: '1px solid #e2e8f0', background: productCategory ? '#fff' : '#f8fafc'}} 
                                                placeholder={productCategory ? "Select type..." : "Select category first"} 
                                                value={productSubCategory} 
                                                onChange={(e) => handleSubCategoryChange(e.target.value)}
                                                onFocus={() => productCategory && handleSubCategoryChange(productSubCategory)}
                                                onBlur={() => setTimeout(() => setShowSubCategorySuggestions(false), 200)}
                                                disabled={!productCategory}
                                                autoComplete="off"
                                            />
                                            {showSubCategorySuggestions && subCategorySuggestions.length > 0 && (
                                                <div className="suggestions-dropdown" style={{position: 'absolute', top: '100%', left: 0, right: 0, background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', zIndex: 1000, marginTop: '5px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', maxHeight: '200px', overflowY: 'auto'}}>
                                                    {subCategorySuggestions.map((s, i) => (
                                                        <div key={i} onMouseDown={() => handleSubCategorySelect(s)} style={{padding: '10px 15px', fontSize: '0.85rem', cursor: 'pointer', borderBottom: i === subCategorySuggestions.length - 1 ? 'none' : '1px solid #f8fafc'}} onMouseEnter={(e) => e.target.style.background = '#f8fafc'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>{s}</div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Description Field */}
                                        <div className="user-info-field" style={{gridColumn: 'span 2', marginTop: '0.4rem'}}>
                                            <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.8rem', color: '#64748b'}}>Description <span style={{fontWeight: 400, color: '#94a3b8'}}>(Optional)</span></label>
                                            <textarea
                                                className="dash-input"
                                                style={{width: '100%', borderRadius: '10px', padding: '0.5rem 0.75rem', fontSize: '0.85rem', border: '1px solid #e2e8f0', background: '#fff', minHeight: '80px', resize: 'vertical', fontFamily: 'inherit', boxSizing: 'border-box'}}
                                                placeholder="Describe your product — quality, features, usage, etc."
                                                value={productDescription}
                                                onChange={(e) => setProductDescription(e.target.value)}
                                            />
                                        </div>

                                        {/* Price Field */}
                                        <div className="user-info-field" style={{marginTop: '0.4rem', gridColumn: 'span 2'}}>
                                            <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.8rem', color: '#64748b'}}>Price & Unit <span style={{fontWeight: 400, color: '#94a3b8'}}>(Optional)</span></label>
                                            <div style={{display: 'flex', gap: '0.5rem'}}>
                                                <input
                                                    className="dash-input"
                                                    style={{flex: 2, borderRadius: '10px', padding: '0.5rem 0.75rem', fontSize: '0.85rem', border: '1px solid #e2e8f0', background: '#fff'}}
                                                    placeholder="Price (e.g. 500)"
                                                    value={productPrice}
                                                    onChange={(e) => setProductPrice(e.target.value)}
                                                />
                                                <select
                                                    className="dash-input"
                                                    style={{flex: 1, borderRadius: '10px', padding: '0.5rem 0.75rem', fontSize: '0.85rem', border: '1px solid #e2e8f0', background: '#fff', cursor: 'pointer'}}
                                                    value={productUnit}
                                                    onChange={(e) => setProductUnit(e.target.value)}
                                                >
                                                    <option value="kg">kg</option>
                                                    <option value="pcs">pcs</option>
                                                    <option value="dozen">dozen</option>
                                                    <option value="meter">meter</option>
                                                    <option value="ton">ton</option>
                                                    <option value="liter">liter</option>
                                                    <option value="container">container</option>
                                                </select>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                {/* Group 2: Business & Logistics */}
                                <div style={{background: '#fcfcfd', padding: '0.4rem', borderRadius: '12px', border: '1px solid #f1f5f9'}}>
                                    <div style={{display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem'}}>
                                        <div style={{width: '20px', height: '20px', borderRadius: '4px', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981'}}>
                                            <FontAwesomeIcon icon={faShieldHalved} style={{fontSize: '0.9rem'}} />
                                        </div>
                                        <h3 style={{fontSize: '1rem', fontWeight: 800, color: '#1e293b', margin: 0}}>Business Logistics</h3>
                                    </div>

                                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.2rem'}}>
                                        <div className="user-info-field">
                                            <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.8rem', color: '#64748b'}}>Origin Country</label>
                                            <select 
                                                className="dash-input" 
                                                style={{width: '100%', borderRadius: '10px', padding: '0.5rem 0.75rem', fontSize: '0.85rem', border: '1px solid #e2e8f0', background: '#fff'}} 
                                                value={productCountry} 
                                                onChange={(e) => {
                                                    setProductCountry(e.target.value);
                                                    if (e.target.value !== 'India') setProductState('');
                                                }}
                                            >
                                                {COUNTRIES.map((c, i) => (
                                                    <option key={i} value={c}>{c}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="user-info-field" style={{position: 'relative'}}>
                                            <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.8rem', color: '#64748b'}}>State/Province</label>
                                            <input 
                                                className="dash-input" 
                                                style={{width: '100%', borderRadius: '10px', padding: '0.5rem 0.75rem', fontSize: '0.85rem', border: '1px solid #e2e8f0', background: '#fff'}} 
                                                placeholder="e.g. Haryana" 
                                                value={productState} 
                                                onChange={(e) => productCountry === 'India' ? handleStateChange(e.target.value) : setProductState(e.target.value)}
                                                onFocus={() => productCountry === 'India' && handleStateChange(productState)}
                                                onBlur={() => setTimeout(() => setShowStateSuggestions(false), 200)}
                                                autoComplete="off"
                                            />
                                            {showStateSuggestions && stateSuggestions.length > 0 && (
                                                <div className="suggestions-dropdown" style={{position: 'absolute', top: '100%', left: 0, right: 0, background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', zIndex: 1000, marginTop: '5px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', maxHeight: '200px', overflowY: 'auto'}}>
                                                    {stateSuggestions.map((s, i) => (
                                                        <div key={i} onMouseDown={() => handleStateSelect(s)} style={{padding: '10px 15px', fontSize: '0.85rem', cursor: 'pointer', borderBottom: i === stateSuggestions.length - 1 ? 'none' : '1px solid #f8fafc'}} onMouseEnter={(e) => e.target.style.background = '#f8fafc'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>{s}</div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        <div className="user-info-field">
                                            <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.8rem', color: '#64748b'}}>Experience (Yrs)</label>
                                            <input 
                                                className="dash-input" 
                                                style={{width: '100%', borderRadius: '10px', padding: '0.5rem 0.75rem', fontSize: '0.85rem', border: '1px solid #e2e8f0', background: '#fff'}} 
                                                placeholder="e.g. 5+" 
                                                value={productExperience} 
                                                onChange={(e) => setProductExperience(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Group 3: Assets & Media */}
                                <div style={{background: '#fcfcfd', padding: '0.4rem', borderRadius: '12px', border: '1px solid #f1f5f9'}}>
                                    <div style={{display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem'}}>
                                        <div style={{width: '20px', height: '20px', borderRadius: '4px', background: 'rgba(249, 115, 22, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f97316'}}>
                                            <FontAwesomeIcon icon={faCartPlus} style={{fontSize: '0.9rem'}} />
                                        </div>
                                        <h3 style={{fontSize: '1rem', fontWeight: 800, color: '#1e293b', margin: 0}}>Imagery & Assets</h3>
                                    </div>

                                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem'}}>
                                        <div className="image-upload-area" style={{padding: '0.6rem', background: '#fff', borderRadius: '16px', border: '2px dashed #e2e8f0', textAlign: 'center'}}>
                                            <input type="file" id="product-images" hidden onChange={(e) => setSelectedImages(Array.from(e.target.files))} onClick={(e) => e.target.value = null} />
                                            <label htmlFor="product-images" style={{cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem'}}>
                                                <div style={{width: '40px', height: '40px', borderRadius: '50%', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6'}}>
                                                    <FontAwesomeIcon icon={faCartPlus} />
                                                </div>
                                                <span style={{fontSize: '0.85rem', fontWeight: 700, color: '#1e293b'}}>Select Product Photo</span>
                                                <span style={{fontSize: '0.7rem', color: '#94a3b8'}}>PNG, JPG up to 5MB</span>
                                            </label>
                                            {selectedImages.length > 0 && (
                                                <div style={{marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center'}}>
                                                    {selectedImages.map((file, idx) => (
                                                        <div key={idx} style={{width: '50px', height: '50px', borderRadius: '8px', overflow: 'hidden', position: 'relative', border: '1px solid #e2e8f0'}}>
                                                            <img src={URL.createObjectURL(file)} alt="" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>


                                <div style={{marginTop: '0.5rem', display: 'flex', justifyContent: 'flex-end'}}>
                                    <button 
                                        type="button"
                                        className="update-btn" 
                                        style={{
                                            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', 
                                            padding: '1rem 4rem', 
                                            fontSize: '1rem', 
                                            fontWeight: 800,
                                            borderRadius: '16px',
                                            boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
                                            color: '#fff',
                                            border: 'none',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            handleProductSubmit();
                                        }}
                                    >
                                        {editingProduct ? 'Save Product Changes' : 'Publish Product to GlobalB2B'}
                                    </button>
                                </div>
                            </div>

                        {/* Real-time Product List Below Form */}
                        <div style={{marginTop: '1.5rem', borderTop: '2px solid #e2e8f0', paddingTop: '1.5rem'}}>
                            <h2 style={{fontSize: '1.4rem', fontWeight: 800, color: '#1e3a8a', marginBottom: '1.2rem', textAlign: 'center'}}>Your Published Products</h2>
                            <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
                                {products.length > 0 ? products.map((prod, i) => (
                                <div key={i} style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    background: '#fff',
                                    borderRadius: '1.5rem',
                                    overflow: 'hidden',
                                    border: '1px solid #e2e8f0',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                    minHeight: '200px',
                                    width: '100%',
                                    position: 'relative'
                                }}>
                                    {/* Column 1: Image Section */}
                                    <div style={{
                                        width: '240px',
                                        minWidth: '240px',
                                        position: 'relative',
                                        background: '#f8fafc'
                                    }}>
                                        <img 
                                            src={`${process.env.REACT_APP_API_ENDPOINT || "http://localhost:3005"}${encodeURI(prod.images[0])}`} 
                                            alt={prod.title} 
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}} 
                                        />
                                        <div style={{
                                            position: 'absolute',
                                            top: '1rem',
                                            left: '1rem',
                                            background: prod.isPublished ? '#10b981' : '#f59e0b',
                                            color: 'white',
                                            padding: '4px 12px',
                                            borderRadius: '50px',
                                            fontSize: '0.7rem',
                                            fontWeight: 800,
                                            boxShadow: prod.isPublished ? '0 2px 8px rgba(16, 185, 129, 0.3)' : '0 2px 8px rgba(245, 158, 11, 0.3)'
                                        }}>
                                            <FontAwesomeIcon icon={prod.isPublished ? faCheckCircle : faSpinner} spin={!prod.isPublished} style={{marginRight: '5px'}} />
                                            {prod.isPublished ? 'VERIFIED' : 'PENDING'}
                                        </div>
                                    </div>

                                    {/* Column 2: Product Info */}
                                    <div style={{
                                        flex: 1,
                                        padding: '1rem 1.5rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        borderRight: '1px solid #f1f5f9',
                                        minWidth: 0 /* Important for flex child text wrapping */
                                    }}>
                                        <div style={{
                                            fontSize: '0.75rem',
                                            fontWeight: 800,
                                            color: '#64748b',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px',
                                            marginBottom: '0.4rem'
                                        }}>
                                            {prod.category} {prod.subCategory ? ` > ${prod.subCategory}` : ''}
                                        </div>
                                        <h3 style={{
                                            fontSize: '1.4rem',
                                            fontWeight: 900,
                                            color: '#0f172a',
                                            marginBottom: '0.8rem',
                                            lineHeight: '1.2',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap'
                                        }}>
                                            {prod.title}
                                        </h3>
                                        <div style={{display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '0.6rem'}}>
                                            <div style={{display: 'flex', alignItems: 'center', gap: '0.4rem'}}>
                                                <div style={{color: '#fbbf24', fontSize: '0.8rem'}}>
                                                    {[...Array(5)].map((_, idx) => <FontAwesomeIcon key={idx} icon={faStar} />)}
                                                </div>
                                                <span style={{fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600}}>(150+ Reviews)</span>
                                            </div>
                                            <div style={{display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#ff8000', fontWeight: 700}}>
                                                <FontAwesomeIcon icon={faShieldHalved} />
                                                <span>{prod.experience || '3+'} YRS EXP.</span>
                                            </div>
                                        </div>
                                        <div style={{
                                            background: '#f8fafc',
                                            padding: '0.6rem 1rem',
                                            borderRadius: '0.75rem',
                                            fontSize: '0.8rem',
                                            color: '#475569',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.6rem',
                                            width: 'fit-content'
                                        }}>
                                            <FontAwesomeIcon icon={faBoxOpen} style={{color: '#1e3a8a'}} />
                                            <span>Bulk Supply Available Worldwide</span>
                                        </div>

                                        {/* Price Badge */}
                                        {prod.price && prod.price !== 'Ask for Price' && (
                                            <div style={{
                                                marginTop: '0.6rem',
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '0.4rem',
                                                background: 'rgba(30, 58, 138, 0.06)',
                                                color: '#1e3a8a',
                                                fontWeight: 800,
                                                fontSize: '0.95rem',
                                                padding: '0.4rem 0.9rem',
                                                borderRadius: '0.6rem'
                                            }}>
                                                ₹ {prod.price} / {prod.unit || 'kg'}
                                            </div>
                                        )}

                                        {/* Description Snippet */}
                                        {prod.description && (
                                            <div style={{
                                                marginTop: '0.6rem',
                                                fontSize: '0.8rem',
                                                color: '#64748b',
                                                lineHeight: '1.5',
                                                overflow: 'hidden',
                                                display: '-webkit-box',
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: 'vertical',
                                                textOverflow: 'ellipsis'
                                            }}>
                                                {prod.description}
                                            </div>
                                        )}
                                    </div>

                                    {/* Column 3: Status & Actions */}
                                    <div style={{
                                        width: '220px',
                                        minWidth: '220px',
                                        padding: '1rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        background: '#fafcfd'
                                    }}>
                                            <div style={{marginBottom: 'auto'}}>
                                                <div style={{display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#475569', fontSize: '0.8rem', marginBottom: '0.6rem'}}>
                                                    <FontAwesomeIcon icon={faBuilding} style={{color: '#94a3b8'}} />
                                                    <span style={{fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{userData?.companyName || 'Verified Supplier'}</span>
                                                </div>
                                                <div style={{
                                                    display: 'flex', 
                                                    alignItems: 'center', 
                                                    gap: '0.6rem', 
                                                    color: prod.isPublished ? '#10b981' : '#f59e0b', 
                                                    fontSize: '0.8rem', 
                                                    fontWeight: 700
                                                }}>
                                                    <FontAwesomeIcon icon={prod.isPublished ? faCheckCircle : faBarsProgress} />
                                                    <span>{prod.isPublished ? 'Live Listing' : 'Verification Pending'}</span>
                                                </div>
                                            </div>
                                            <div style={{
                                                display: 'flex', 
                                                alignItems: 'center', 
                                                gap: '0.6rem', 
                                                color: prod.isPublished ? '#10b981' : '#f59e0b', 
                                                fontSize: '0.75rem', 
                                                fontWeight: 700, 
                                                marginTop: '1rem',
                                                lineHeight: '1.4'
                                            }}>
                                                <FontAwesomeIcon icon={prod.isPublished ? faCheckCircle : faSpinner} spin={!prod.isPublished} />
                                                <span>
                                                    {prod.isPublished ? 'Published & Live' : 'Wait 2 to 3 working days for Admin approval'}
                                                </span>
                                            </div>
                                    </div>
                                </div>
                                )) : (
                                    <div style={{textAlign: 'center', padding: '3rem', background: '#f8fafc', borderRadius: '1.5rem', width: '100%'}}>
                                        <p style={{color: '#94a3b8', fontWeight: 600}}>No products published yet. Add your first product above!</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                )}

                {activeSection === 'addgst' && (
                    <section className="section-panel" style={{maxWidth: '600px', margin: '4rem auto', textAlign: 'center'}}>
                        <div style={{marginBottom: '3rem'}}>
                            <h2 style={{fontSize: '2rem', marginBottom: '0.5rem'}}>Legal Identity</h2>
                            <p style={{fontSize: '0.9rem', color: 'var(--on-surface-variant)'}}>Synchronize your GST credentials for global compliance</p>
                        </div>
                        
                        <div className="user-info-field" style={{textAlign: 'left'}}>
                            <label style={{display: 'block', marginBottom: '0.75rem', fontWeight: 600, fontSize: '0.9rem'}}>Current GST Number</label>
                            <p style={{background: 'var(--surface-container-low)', padding: '1rem', borderRadius: '0.75rem', fontWeight: 700, color: 'var(--primary)'}}>
                                {userData.gstNumber || 'Not Registered'}
                            </p>
                        </div>

                        <div className="user-info-field" style={{textAlign: 'left', marginTop: '2rem'}}>
                            <label style={{display: 'block', marginBottom: '0.75rem', fontWeight: 600, fontSize: '0.9rem'}}>New GST Identification Number</label>
                            <input 
                                className="dash-input" 
                                style={{width: '100%'}} 
                                placeholder="Enter 15-digit GSTIN..." 
                                value={gstNumber} 
                                onChange={(e) => setGSTNumber(e.target.value)} 
                            />
                        </div>

                        <button 
                            className="update-btn" 
                            style={{marginTop: '3rem', width: '100%', background: 'linear-gradient(135deg, #27ae60 0%, #219150 100%)'}} 
                            onClick={handleUpdateGST}>
                            Update Legal Credentials
                        </button>
                    </section>
                )}

                {activeSection === 'viewleads' && (
                    <section className="section-panel" style={{ padding: '2rem' }}>
                        {userData.role === 'admin' ? (
                            /* --- ADMIN VIEW: LEAD DISTRIBUTION HUB --- */
                            <>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1.5rem' }}>
                                    <div>
                                        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, margin: 0, background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Lead Distribution Hub</h2>
                                        <p style={{ color: '#64748b', fontSize: '1.1rem', marginTop: '0.5rem' }}>Admin Control: Distribute global leads to specific suppliers.</p>
                                    </div>
                                    
                                    {selectedLeads.length > 0 && (
                                        <div style={{ 
                                            display: 'flex', 
                                            gap: '1rem', 
                                            alignItems: 'center', 
                                            background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', 
                                            padding: '1.2rem 2rem', 
                                            borderRadius: '1.5rem', 
                                            border: '1px solid #bae6fd',
                                            boxShadow: '0 10px 25px rgba(14, 165, 233, 0.1)'
                                        }}>
                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <span style={{ fontWeight: 800, color: '#0369a1', fontSize: '1.1rem' }}>{selectedLeads.length} Selected</span>
                                            </div>
                                            <div style={{ position: 'relative' }}>
                                                <input 
                                                    type="text" 
                                                    placeholder="Search Supplier..." 
                                                    value={targetUserSearch}
                                                    onChange={(e) => setTargetUserSearch(e.target.value)}
                                                    style={{ padding: '0.8rem 1.2rem', borderRadius: '1rem', border: '2px solid #0ea5e9', width: '250px' }}
                                                />
                                                {targetUserSuggestions.length > 0 && (
                                                    <div style={{ position: 'absolute', top: '110%', left: 0, right: 0, background: '#fff', border: '1px solid #e2e8f0', borderRadius: '1.2rem', boxShadow: '0 15px 35px rgba(0,0,0,0.15)', zIndex: 1000, maxHeight: '200px', overflowY: 'auto' }}>
                                                        {targetUserSuggestions.map(user => (
                                                            <div key={user._id} onClick={() => { setSelectedTargetUser(user); setTargetUserSuggestions([]); setTargetUserSearch(user.companyName); }} style={{ padding: '12px 16px', cursor: 'pointer' }}>
                                                                <div style={{ fontWeight: 800, fontSize: '0.9rem' }}>{user.companyName}</div>
                                                                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{user.name}</div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                            <button onClick={handleShareLeads} disabled={isSharing || !selectedTargetUser} style={{ background: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)', color: '#fff', border: 'none', padding: '1rem 1.5rem', borderRadius: '1rem', fontWeight: 800, cursor: 'pointer', opacity: (isSharing || !selectedTargetUser) ? 0.6 : 1 }}>
                                                <FontAwesomeIcon icon={isSharing ? faSpinner : faArrowCircleUp} spin={isSharing} /> SHARE
                                            </button>
                                        </div>
                                    )}
                                </div>

                                <div style={{ marginBottom: '2.5rem', display: 'flex', gap: '1.2rem' }}>
                                    <div style={{ flex: 1, position: 'relative' }}>
                                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                                        <input 
                                            type="text" 
                                            placeholder="Search Global Buyers..." 
                                            value={buyerSearchTerm}
                                            onChange={(e) => setBuyerSearchTerm(e.target.value)}
                                            style={{ width: '100%', padding: '1.2rem 4rem', borderRadius: '1.5rem', border: '2px solid #e2e8f0' }}
                                        />
                                    </div>
                                    <button onClick={() => setSelectedLeads(allBuyers.map(b => b._id))} style={{ background: '#f1f5f9', border: 'none', padding: '0 1.5rem', borderRadius: '1.2rem', fontWeight: 700 }}>Select All</button>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
                                    {isFetchingBuyers ? (
                                        [1, 2, 3, 4, 5, 6].map(i => (
                                            <div key={i} className="glass-panel" style={{ padding: '2rem', borderRadius: '1.5rem', minHeight: '200px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                                <div className="skeleton-box" style={{ width: '150px', height: '20px' }}></div>
                                                <div className="skeleton-box" style={{ width: '100px', height: '14px' }}></div>
                                                <div className="skeleton-box" style={{ width: '100%', height: '45px', borderRadius: '1rem', marginTop: 'auto' }}></div>
                                            </div>
                                        ))
                                    ) : allBuyers.filter(b => b.buyerName?.toLowerCase().includes(buyerSearchTerm.toLowerCase())).map((lead, i) => (
                                        <div key={i} onClick={() => selectedLeads.includes(lead._id) ? setSelectedLeads(selectedLeads.filter(id => id !== lead._id)) : setSelectedLeads([...selectedLeads, lead._id])}
                                            style={{ padding: '1.5rem', background: selectedLeads.includes(lead._id) ? '#f0f9ff' : '#fff', borderRadius: '1.5rem', border: selectedLeads.includes(lead._id) ? '2.5px solid #0ea5e9' : '2px solid #f1f5f9', cursor: 'pointer', position: 'relative' }}>
                                            <div style={{ position: 'absolute', top: '1rem', right: '1rem', width: '20px', height: '20px', borderRadius: '5px', border: '2px solid #e2e8f0', background: selectedLeads.includes(lead._id) ? '#0ea5e9' : 'transparent' }}></div>
                                            <h4 style={{ margin: 0, fontSize: '1.2rem' }}>{lead.buyerName}</h4>
                                            <p style={{ margin: '0.5rem 0', color: '#64748b' }}>{lead.mobileNo}</p>
                                            <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '1rem', fontSize: '0.9rem' }}>{lead.productName || 'General Sourcing Lead'}</div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            /* --- CLIENT/SUPPLIER VIEW: SHARED LEADS --- */
                             <>
                                <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '0.6rem' }}>
                                    <div>
                                        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0, background: 'linear-gradient(135deg, #ffcc33 0%, #ff8000 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>My Verified Leads</h2>
                                        <p style={{ color: '#64748b', fontSize: '0.9rem', marginTop: '0.2rem' }}>Premium leads shared with you by Admin.</p>
                                    </div>
                                    <div style={{ background: '#fff', padding: '0.5rem 0.8rem', borderRadius: '10px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '0.6rem', boxShadow: '0 2px 10px rgba(0,0,0,0.01)' }}>
                                        <div style={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 600 }}>Filter by Date:</div>
                                        <input 
                                            type="date" 
                                            value={leadDateFilter}
                                            onChange={(e) => setLeadDateFilter(e.target.value)}
                                            style={{ 
                                                border: '1px solid #e2e8f0', 
                                                padding: '0.6rem 1rem', 
                                                borderRadius: '10px', 
                                                outline: 'none',
                                                color: '#1e293b',
                                                fontWeight: 600,
                                                cursor: 'pointer'
                                            }} 
                                        />
                                        {leadDateFilter && (
                                            <button 
                                                onClick={() => setLeadDateFilter('')}
                                                style={{ background: '#f1f5f9', border: 'none', padding: '0.6rem 1rem', borderRadius: '10px', color: '#64748b', fontWeight: 700, cursor: 'pointer' }}
                                            >
                                                Clear
                                            </button>
                                        )}
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
                                    {leadLoading ? (
                                        [1, 2, 3, 4].map(i => (
                                            <div key={i} className="glass-panel" style={{ padding: '1.5rem', borderRadius: '1.2rem', minHeight: '180px', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                                    <div className="skeleton-box" style={{ width: '40px', height: '40px', borderRadius: '10px' }}></div>
                                                    <div>
                                                        <div className="skeleton-box" style={{ width: '100px', height: '14px', marginBottom: '5px' }}></div>
                                                        <div className="skeleton-box" style={{ width: '60px', height: '10px' }}></div>
                                                    </div>
                                                </div>
                                                <div className="skeleton-box" style={{ width: '100%', height: '60px', borderRadius: '0.75rem' }}></div>
                                            </div>
                                        ))
                                    ) : viewedLeads.filter(lead => {
                                        if (!leadDateFilter) return true;
                                        const leadDate = new Date(lead.dateViewed || lead.viewedAt || lead.createdAt).toISOString().split('T')[0];
                                        return leadDate === leadDateFilter;
                                    }).length > 0 ? viewedLeads
                                        .filter(lead => {
                                            if (!leadDateFilter) return true;
                                            const leadDate = new Date(lead.dateViewed || lead.viewedAt || lead.createdAt).toISOString().split('T')[0];
                                            return leadDate === leadDateFilter;
                                        })
                                        .map((lead, i) => (
                                        <div key={i} style={{ 
                                            padding: '1.5rem', 
                                            background: '#fff', 
                                            borderRadius: '1.5rem', 
                                            border: '1px solid #f1f5f9', 
                                            boxShadow: '0 4px 15px rgba(0,0,0,0.02)', 
                                            display: 'flex', 
                                            flexDirection: 'column', 
                                            gap: '1rem' 
                                        }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                <div style={{ 
                                                    width: '50px', 
                                                    height: '50px', 
                                                    borderRadius: '12px', 
                                                    background: '#f1f5f9', 
                                                    display: 'flex', 
                                                    alignItems: 'center', 
                                                    justifyContent: 'center', 
                                                    color: '#10b981', 
                                                    fontWeight: 900, 
                                                    fontSize: '1.2rem' 
                                                }}>
                                                    {lead.buyerName?.charAt(0)}
                                                </div>
                                                <div>
                                                    <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 800, color: '#0f172a' }}>{lead.buyerName}</h4>
                                                    <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>
                                                        <FontAwesomeIcon icon={faPhone} style={{ marginRight: '6px' }} />
                                                        {lead.mobileNo}
                                                    </div>
                                                </div>
                                            </div>

                                            <div style={{ background: '#f8fafc', padding: '1.2rem', borderRadius: '1.2rem', border: '1px solid #f1f5f9' }}>
                                                <div style={{ marginBottom: '0.8rem' }}>
                                                    <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', fontWeight: 800, color: '#94a3b8', marginBottom: '4px', letterSpacing: '0.5px' }}>Requirement</div>
                                                    <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#1e3a8a' }}>
                                                        {lead.productName || lead.productOrService || 'Direct Inquiry'}
                                                    </div>
                                                </div>

                                                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', borderTop: '1px solid #e2e8f0', paddingTop: '0.8rem' }}>
                                                    <div>
                                                        <div style={{ fontSize: '0.6rem', textTransform: 'uppercase', fontWeight: 800, color: '#94a3b8', marginBottom: '2px' }}>Quantity</div>
                                                        <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#10b981' }}>
                                                            {lead.quantity ? `${lead.quantity} ${lead.unit || 'Units'}` : 'Bulk'}
                                                        </div>
                                                    </div>
                                                    <div style={{ textAlign: 'right' }}>
                                                        <div style={{ fontSize: '0.6rem', textTransform: 'uppercase', fontWeight: 800, color: '#94a3b8', marginBottom: '2px' }}>Location</div>
                                                        <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#64748b' }}>
                                                            {lead.city || lead.statename ? `${lead.city || ''}${lead.city && lead.statename ? ', ' : ''}${lead.statename || ''}` : lead.country || 'India'}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.7rem', color: '#10b981', fontWeight: 800, background: '#ecfdf5', padding: '4px 10px', borderRadius: '6px' }}>
                                                    <FontAwesomeIcon icon={faCheckCircle} />
                                                    <span>VERIFIED LEAD</span>
                                                </div>
                                                <span style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: 600 }}>
                                                    {new Date(lead.dateViewed || lead.viewedAt || lead.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                                                </span>
                                            </div>
                                        </div>
                                    )) : (
                                        <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '6rem', background: '#f8fafc', borderRadius: '2.5rem', border: '2px dashed #e2e8f0' }}>
                                            <FontAwesomeIcon icon={faLeaf} size="3x" style={{ color: '#cbd5e1', marginBottom: '1.5rem' }} />
                                            <p style={{ color: '#94a3b8', fontSize: '1.2rem', fontWeight: 600 }}>
                                                {leadDateFilter ? `No Leads shared on ${new Date(leadDateFilter).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}` : 'No Leads shared yet. Admin will distribute relevant leads to your dashboard soon.'}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </>
                        )}
                    </section>
                )}



                {activeSection === 'manageCatalogs' && (
                    <section className="section-panel">
                        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '2rem'}}>
                            <h2>Manage Business Catalogs</h2>
                            <button className="update-btn" style={{fontSize: '0.8rem', padding: '0.8rem 1.5rem'}} onClick={() => setActiveSection('catalogProduct')}>
                                + Add New Catalog
                            </button>
                        </div>
                        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem'}}>
                            {catalogs.length > 0 ? catalogs.map((cat, i) => (
                                <div key={i} className="stat-card" style={{padding: '1.5rem', background: '#fff', border: '1px solid #e2e8f0'}}>
                                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem'}}>
                                        <div style={{background: '#f0f4ff', color: '#1e3a8a', padding: '10px', borderRadius: '10px'}}>
                                            <FontAwesomeIcon icon={faBook} size="lg" />
                                        </div>
                                        <button 
                                            onClick={async () => {
                                                if(window.confirm('Delete this catalog?')) {
                                                    const apiBase = process.env.REACT_APP_API_ENDPOINT || "http://localhost:3005";
                                                    const res = await fetch(`${apiBase}/catalog/delete/${cat._id}`, { method: 'DELETE' });
                                                    if(res.ok) setCatalogs(catalogs.filter(c => c._id !== cat._id));
                                                }
                                            }}
                                            style={{background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer'}}
                                        >
                                            <FontAwesomeIcon icon={faXmark} />
                                        </button>
                                    </div>
                                    <h4 style={{fontSize: '1.1rem', marginBottom: '0.5rem', color: '#1e3a8a'}}>{cat.title}</h4>
                                    <p style={{fontSize: '0.85rem', color: '#64748b', marginBottom: '1rem'}}>{cat.files?.length || 0} Files attached</p>
                                    <div style={{display: 'flex', flexWrap: 'wrap', gap: '5px'}}>
                                        {cat.files?.map((file, idx) => (
                                            <div key={idx} style={{width: '40px', height: '40px', background: '#f8fafc', borderRadius: '5px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem'}}>
                                                {file.endsWith('.pdf') ? 'PDF' : 'IMG'}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )) : (
                                <div style={{gridColumn: 'span 3', textAlign: 'center', padding: '4rem'}}>
                                    <p style={{color: '#64748b'}}>No catalogs found. Start by uploading one in the "Add Products" section.</p>
                                </div>
                            )}
                        </div>
                    </section>
                )}

                {activeSection === 'needHelp' && (
                    <section className="section-panel" style={{ maxWidth: '1000px', margin: '4rem auto', border: 'none', background: 'transparent', boxShadow: 'none' }}>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <div style={{ marginBottom: '2rem' }}>
                                <img src={SUPPORT_ILLUSTRATION} alt="Support" style={{ width: '300px', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.05))' }} />
                            </div>
                            <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1rem', letterSpacing: '-1px', color: '#0f172a' }}>Merchant Success Desk</h2>
                            <p style={{ fontSize: '1.1rem', color: '#64748b', fontWeight: 600, maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>Your dedicated GlobalB2B concierge team is available to help you scale your business.</p>
                        </div>

                        <div className="content-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                            <div className="stat-card" style={{ padding: '2.5rem 1.5rem', textAlign: 'center', background: 'white', borderRadius: '1.5rem', border: '1px solid #f1f5f9', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
                                <div style={{ width: '70px', height: '70px', background: '#eff6ff', color: '#3b82f6', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '1.8rem' }}>
                                    <FontAwesomeIcon icon={faBell} />
                                </div>
                                <h4 style={{ margin: '0 0 0.8rem 0', fontSize: '1.3rem', fontWeight: 800, color: '#0f172a' }}>Executive Hub</h4>
                                <p style={{ fontSize: '1rem', fontWeight: 800, color: '#3b82f6', wordBreak: 'break-all' }}>feedback@globalb2bmart.com</p>
                                <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '1.2rem', fontWeight: 600 }}>Response: &lt; 2 Hours</p>
                            </div>

                            <div className="stat-card" style={{ padding: '2.5rem 1.5rem', textAlign: 'center', background: 'white', borderRadius: '1.5rem', border: '1px solid #f1f5f9', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
                                <div style={{ width: '70px', height: '70px', background: '#fff7ed', color: '#f97316', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '1.8rem' }}>
                                    <FontAwesomeIcon icon={faHeadset} />
                                </div>
                                <h4 style={{ margin: '0 0 0.8rem 0', fontSize: '1.3rem', fontWeight: 800, color: '#0f172a' }}>Global Hotline</h4>
                                <p style={{ fontSize: '1.4rem', fontWeight: 950, color: '#f97316' }}>011-41029790</p>
                                <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '1.2rem', fontWeight: 600 }}>24/7 Support</p>
                            </div>

                            <div className="stat-card" style={{ padding: '2.5rem 1.5rem', textAlign: 'center', background: 'white', borderRadius: '1.5rem', border: '1px solid #f1f5f9', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
                                <div style={{ width: '70px', height: '70px', background: '#f0fdf4', color: '#22c55e', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '1.8rem' }}>
                                    <FontAwesomeIcon icon={faShieldHalved} />
                                </div>
                                <h4 style={{ margin: '0 0 0.8rem 0', fontSize: '1.3rem', fontWeight: 800, color: '#0f172a' }}>Verified Safety</h4>
                                <p style={{ fontSize: '1rem', fontWeight: 800, color: '#22c55e', wordBreak: 'break-all' }}>safety@globalb2b.com</p>
                                <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '1.2rem', fontWeight: 600 }}>Security Desk</p>
                            </div>
                        </div>
                    </section>
                )}
            </main>

            {/* Edit Product Modal */}
            {isEditModalOpen && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(15, 23, 42, 0.7)',
                    backdropFilter: 'blur(8px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 9999,
                    padding: '1.5rem'
                }}>
                    <div style={{
                        background: '#fff',
                        width: '100%',
                        maxWidth: '600px',
                        borderRadius: '2rem',
                        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
                        padding: '2.5rem',
                        position: 'relative'
                    }}>
                        <button 
                            onClick={() => setIsEditModalOpen(false)}
                            style={{
                                position: 'absolute',
                                top: '1.5rem',
                                right: '1.5rem',
                                background: '#f1f5f9',
                                border: 'none',
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                color: '#64748b'
                            }}
                        >
                            <FontAwesomeIcon icon={faXmark} />
                        </button>

                        <h2 style={{fontSize: '1.8rem', fontWeight: 900, color: '#1e3a8a', marginBottom: '2rem'}}>Edit Product</h2>

                        <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                            <div>
                                <label style={{display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.6rem'}}>Product Name</label>
                                <input 
                                    type="text" 
                                    value={modalProductTitle} 
                                    onChange={(e) => setModalProductTitle(e.target.value)}
                                    style={{width: '100%', padding: '1rem', borderRadius: '1rem', border: '2px solid #e2e8f0', fontSize: '1rem', fontWeight: 600}}
                                />
                            </div>

                            <div style={{display: 'flex', gap: '1.5rem'}}>
                                <div style={{flex: 2}}>
                                    <label style={{display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.6rem'}}>Price (Optional)</label>
                                    <input 
                                        type="text" 
                                        value={modalProductPrice} 
                                        onChange={(e) => setModalProductPrice(e.target.value)}
                                        style={{width: '100%', padding: '1rem', borderRadius: '1rem', border: '2px solid #e2e8f0', fontSize: '1rem', fontWeight: 600}}
                                    />
                                </div>
                                <div style={{flex: 1}}>
                                    <label style={{display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.6rem'}}>Unit</label>
                                    <select 
                                        value={modalProductUnit} 
                                        onChange={(e) => setModalProductUnit(e.target.value)}
                                        style={{width: '100%', padding: '1rem', borderRadius: '1rem', border: '2px solid #e2e8f0', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', background: '#fff'}}
                                    >
                                        <option value="kg">kg</option>
                                        <option value="pcs">pcs</option>
                                        <option value="dozen">dozen</option>
                                        <option value="meter">meter</option>
                                        <option value="ton">ton</option>
                                        <option value="liter">liter</option>
                                        <option value="container">container</option>
                                    </select>
                                </div>
                                <div style={{flex: 1}}>
                                    <label style={{display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.6rem'}}>MOQ</label>
                                    <input 
                                        type="text" 
                                        value={modalProductMOQ} 
                                        onChange={(e) => setModalProductMOQ(e.target.value)}
                                        style={{width: '100%', padding: '1rem', borderRadius: '1rem', border: '2px solid #e2e8f0', fontSize: '1rem', fontWeight: 600}}
                                    />
                                </div>
                            </div>

                            <div>
                                <label style={{display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.6rem'}}>Description</label>
                                <textarea 
                                    rows="4" 
                                    value={modalProductDescription} 
                                    onChange={(e) => setModalProductDescription(e.target.value)}
                                    style={{width: '100%', padding: '1rem', borderRadius: '1rem', border: '2px solid #e2e8f0', fontSize: '1rem', fontWeight: 600, resize: 'none'}}
                                />
                            </div>

                            <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
                                <button 
                                    onClick={handleModalSave}
                                    style={{
                                        flex: 2,
                                        padding: '1.2rem',
                                        borderRadius: '1rem',
                                        background: '#1e3a8a',
                                        color: '#fff',
                                        fontWeight: 800,
                                        border: 'none',
                                        cursor: 'pointer',
                                        boxShadow: '0 10px 15px -3px rgba(30, 58, 138, 0.3)'
                                    }}
                                >
                                    SAVE CHANGES
                                </button>
                                <button 
                                    onClick={() => setIsEditModalOpen(false)}
                                    style={{
                                        flex: 1,
                                        padding: '1.2rem',
                                        borderRadius: '1rem',
                                        background: '#f1f5f9',
                                        color: '#64748b',
                                        fontWeight: 800,
                                        border: 'none',
                                        cursor: 'pointer'
                                    }}
                                >
                                    CANCEL
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FreeDash;
