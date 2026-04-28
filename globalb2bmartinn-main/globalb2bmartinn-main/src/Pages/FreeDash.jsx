import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faGauge, faShieldHalved, faUser, faCartPlus, faBarsProgress, 
    faBook, faCircleQuestion, faLeaf, faBell, faGem, faChartLine, 
    faLayerGroup, faArrowCircleUp, faHeadset, faMagnifyingGlass,
    faXmark, faBolt, faBuilding, faVial, faBoxOpen, faCar, faSignOutAlt,
    faStar, faCheckCircle, faPenToSquare, faTrash, faSpinner
} from '@fortawesome/free-solid-svg-icons';
import './Dashboard.css';
import './SearchResults.css';

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
    const [stateSuggestions, setStateSuggestions] = useState([]);
    const [showStateSuggestions, setShowStateSuggestions] = useState(false);

    const [viewedLeads, setViewedLeads] = useState([]);
    const [gstNumber, setGSTNumber] = useState('');
    const [message, setMessage] = useState('');
    const [products, setProducts] = useState([]);
    const [catalogs, setCatalogs] = useState([]);
    const [catalogTitle, setCatalogTitle] = useState('');
    const [catalogFiles, setCatalogFiles] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [modalProductTitle, setModalProductTitle] = useState('');
    const [modalProductPrice, setModalProductPrice] = useState('');
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
                const apiBase = process.env.REACT_APP_API_ENDPOINT || "http://localhost:3005";
                const response = await fetch(`${apiBase}/viewedLeads/${userData._id}`);
                if (response.ok) {
                    const data = await response.json();
                    setViewedLeads(data.viewedLeads);
                }
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
        <div className="Premium-container">
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
                        { id: 'manageCatalogs', icon: faBook, label: 'Manage Catalogs' },
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
                <header className="dashboard-header" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', padding: '2rem', background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)', borderRadius: '24px', boxShadow: '0 10px 40px rgba(0,0,0,0.02)', marginBottom: '2.5rem', border: '1px solid rgba(255,255,255,0.8)'}}>
                    <div className="header-greeting" style={{ flex: 1, minWidth: '300px' }}>
                        <h1 style={{ fontSize: '2rem', fontWeight: 800, margin: '0 0 0.5rem 0', background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-0.5px' }}>
                            {activeSection === 'dashboard' ? `Welcome back, ${userData.name.split(' ')[0]} 👋` : activeSection}
                        </h1>
                        <p style={{ margin: 0, fontSize: '1.05rem', color: 'var(--on-surface-variant)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <FontAwesomeIcon icon={faBuilding} style={{ color: 'var(--primary)' }} /> {userData.companyName}
                            <span style={{ margin: '0 0.5rem', color: '#cbd5e1' }}>|</span>
                            <span style={{ padding: '0.2rem 0.8rem', background: 'rgba(41,97,149,0.1)', color: 'var(--primary)', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 700 }}>{userData.plan || 'Free'} Merchant Workspace</span>
                        </p>
                    </div>

                    {activeSection === 'dashboard' && (
                        <div className="search-portal-wrapper" style={{ flex: 2, minWidth: '400px', maxWidth: '600px' }}>
                            <div className="search-portal" style={{ background: '#fff', borderRadius: '16px', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '1rem', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', border: '1px solid #e2e8f0', transition: 'all 0.3s ease' }}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: '#94a3b8', fontSize: '1.2rem'}} />
                                <input 
                                    className="search-input-main" 
                                    style={{ border: 'none', outline: 'none', width: '100%', fontSize: '1rem', padding: '0.8rem 0', color: '#334155', background: 'transparent' }}
                                    placeholder="Search 10 Crore+ Products & Suppliers..." 
                                    value={searchTerm}
                                    onFocus={(e) => { setShowSuggestions(true); e.target.parentElement.style.boxShadow = '0 8px 25px rgba(0,0,0,0.06)'; e.target.parentElement.style.borderColor = 'var(--primary)'; }}
                                    onBlur={(e) => { e.target.parentElement.style.boxShadow = '0 4px 15px rgba(0,0,0,0.03)'; e.target.parentElement.style.borderColor = '#e2e8f0'; }}
                                    onChange={(e) => {
                                        setSearchTerm(e.target.value);
                                        setShowSuggestions(true);
                                    }}
                                />
                                {searchTerm && (
                                    <FontAwesomeIcon 
                                        icon={faXmark} 
                                        style={{cursor: 'pointer', color: '#94a3b8', padding: '0.5rem'}} 
                                        onClick={() => setSearchTerm('')} 
                                    />
                                )}
                            </div>

                            {showSuggestions && searchTerm && (
                                <div className="suggestions-dropdown" onMouseLeave={() => setShowSuggestions(false)} style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: '#fff', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', border: '1px solid #f1f5f9', marginTop: '0.8rem', zIndex: 50, overflow: 'hidden' }}>
                                    {filteredSuggestions.map((item, idx) => (
                                        <div key={idx} className="suggestion-item" style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', transition: 'background 0.2s', borderBottom: '1px solid #f8fafc' }} onClick={() => {
                                            setSearchTerm(item.title);
                                            setShowSuggestions(false);
                                        }}>
                                            <div className="suggestion-icon" style={{ width: '40px', height: '40px', background: '#f8fafc', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                                                <FontAwesomeIcon icon={item.icon} />
                                            </div>
                                            <div className="suggestion-content">
                                                <span className="s-title" style={{ display: 'block', fontWeight: 600, color: '#334155', fontSize: '0.95rem' }}>{item.title}</span>
                                                <span className="s-category" style={{ display: 'block', fontSize: '0.8rem', color: '#64748b', marginTop: '0.2rem' }}>{item.category}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {activeSection === 'dashboard' && (
                        <div className="header-actions" style={{display: 'flex', gap: '1.2rem', marginLeft: 'auto'}}>
                            <button className="primary-action-btn buyers-btn" style={{
                                padding: '1rem 2rem',
                                borderRadius: '14px',
                                border: 'none',
                                background: 'linear-gradient(135deg, #1A237E 0%, #3949AB 100%)',
                                color: 'white',
                                fontWeight: 700,
                                fontSize: '0.95rem',
                                letterSpacing: '0.5px',
                                cursor: 'pointer',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                boxShadow: '0 8px 20px rgba(26, 35, 126, 0.25)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.8rem'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <FontAwesomeIcon icon={faChartLine} /> GET BUYERS
                            </button>
                            <button className="primary-action-btn sellers-btn" style={{
                                padding: '1rem 2rem',
                                borderRadius: '14px',
                                border: '2px solid var(--primary)',
                                background: 'transparent',
                                color: 'var(--primary)',
                                fontWeight: 700,
                                fontSize: '0.95rem',
                                letterSpacing: '0.5px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.8rem'
                            }}
                            onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(41,97,149,0.05)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                            onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                                <FontAwesomeIcon icon={faCartPlus} /> GET SELLERS
                            </button>
                        </div>
                    )}
                </header>

                {activeSection === 'dashboard' && (
                    <section className="dashboard-view">
                        <div className="content-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
                            <div className="stat-card" style={{ background: '#fff', borderRadius: '20px', padding: '1.8rem', display: 'flex', alignItems: 'center', gap: '1.2rem', border: '1px solid #eef2f6', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                                <div style={{ background: 'var(--surface-container)', width: '55px', height: '55px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontSize: '1.5rem' }}>
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                                <div className="stat-info">
                                    <p className="label" style={{ margin: 0, fontSize: '0.85rem', color: 'var(--on-surface-variant)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Merchant ID</p>
                                    <h3 className="value" style={{ margin: '0.2rem 0 0 0', fontSize: '1.3rem', fontWeight: 800, color: 'var(--on-surface)' }}>{userData._id.substring(0, 8).toUpperCase()}</h3>
                                </div>
                            </div>
                            
                            <div className="stat-card" style={{ background: '#fff', borderRadius: '20px', padding: '1.8rem', display: 'flex', alignItems: 'center', gap: '1.2rem', border: '1px solid #eef2f6', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                                <div style={{ background: 'var(--primary-container)', width: '55px', height: '55px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--on-primary-container)', fontSize: '1.5rem' }}>
                                    <FontAwesomeIcon icon={faGem} />
                                </div>
                                <div className="stat-info">
                                    <p className="label" style={{ margin: 0, fontSize: '0.85rem', color: 'var(--on-surface-variant)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Visibility Plan</p>
                                    <h3 className="value" style={{ margin: '0.2rem 0 0 0', fontSize: '1.3rem', fontWeight: 800, color: 'var(--on-surface)' }}>{(userData.plan || 'Free').toUpperCase()}</h3>
                                </div>
                            </div>
                            
                            <div className="stat-card" style={{ background: '#fff', borderRadius: '20px', padding: '1.8rem', display: 'flex', alignItems: 'center', gap: '1.2rem', border: '1px solid #eef2f6', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                                <div style={{ background: '#ffebee', width: '55px', height: '55px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d32f2f', fontSize: '1.5rem' }}>
                                    <FontAwesomeIcon icon={faShieldHalved} />
                                </div>
                                <div className="stat-info">
                                    <p className="label" style={{ margin: 0, fontSize: '0.85rem', color: 'var(--on-surface-variant)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Verification</p>
                                    <h3 className="value" style={{ margin: '0.2rem 0 0 0', fontSize: '1.3rem', fontWeight: 800, color: '#d32f2f' }}>PENDING</h3>
                                </div>
                            </div>
                        </div>

                        <div className="bottom-sections" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', alignItems: 'start' }}>
                            <div className="section-panel glass-panel" style={{ padding: '2.5rem', borderTop: 'none' }}>
                                <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--on-surface)', marginBottom: '1.8rem', display: 'flex', alignItems: 'center', gap: '0.8rem', background: 'none', WebkitTextFillColor: 'initial' }}>
                                    <div style={{ width: '10px', height: '10px', borderRadius: '4px', background: 'var(--light-blue-dark)', boxShadow: '0 0 10px rgba(59, 130, 246, 0.4)' }}></div>
                                    Personal Details
                                </h2>
                                <div className="user-info-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.5fr', padding: '1.25rem 1.5rem', background: 'rgba(59, 130, 246, 0.04)', borderRadius: '16px', alignItems: 'center', border: '1px solid rgba(59, 130, 246, 0.05)' }}>
                                        <p style={{ fontSize: '0.8rem', color: 'var(--on-surface-variant)', margin: 0, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Full Name</p>
                                        <p style={{ margin: 0, fontWeight: 700, color: 'var(--on-surface)', fontSize: '1.05rem' }}>{userData.name}</p>
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.5fr', padding: '1.25rem 1.5rem', background: 'rgba(59, 130, 246, 0.04)', borderRadius: '16px', alignItems: 'center', border: '1px solid rgba(59, 130, 246, 0.05)' }}>
                                        <p style={{ fontSize: '0.8rem', color: 'var(--on-surface-variant)', margin: 0, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Email</p>
                                        <p style={{ margin: 0, fontWeight: 700, color: 'var(--on-surface)', fontSize: '1.05rem', wordBreak: 'break-all' }}>{userData.email}</p>
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.5fr', padding: '1.25rem 1.5rem', background: 'rgba(59, 130, 246, 0.04)', borderRadius: '16px', alignItems: 'center', border: '1px solid rgba(59, 130, 246, 0.05)' }}>
                                        <p style={{ fontSize: '0.8rem', color: 'var(--on-surface-variant)', margin: 0, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Phone</p>
                                        <p style={{ margin: 0, fontWeight: 700, color: 'var(--on-surface)', fontSize: '1.05rem' }}>{userData.mobileNumber}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="section-panel glass-panel" style={{ padding: '2.5rem', borderTop: 'none' }}>
                                <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--on-surface)', marginBottom: '1.8rem', display: 'flex', alignItems: 'center', gap: '0.8rem', background: 'none', WebkitTextFillColor: 'initial' }}>
                                    <div style={{ width: '10px', height: '10px', borderRadius: '4px', background: 'var(--light-orange-dark)', boxShadow: '0 0 10px rgba(249, 115, 22, 0.4)' }}></div>
                                    Business Identity
                                </h2>
                                <div className="user-info-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.5fr', padding: '1.25rem 1.5rem', background: 'rgba(249, 115, 22, 0.04)', borderRadius: '16px', alignItems: 'center', border: '1px solid rgba(249, 115, 22, 0.05)' }}>
                                        <p style={{ fontSize: '0.8rem', color: 'var(--on-surface-variant)', margin: 0, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Company</p>
                                        <p style={{ margin: 0, fontWeight: 700, color: 'var(--on-surface)', fontSize: '1.05rem' }}>{userData.companyName}</p>
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.5fr', padding: '1.25rem 1.5rem', background: 'rgba(249, 115, 22, 0.04)', borderRadius: '16px', alignItems: 'center', border: '1px solid rgba(249, 115, 22, 0.05)' }}>
                                        <p style={{ fontSize: '0.8rem', color: 'var(--on-surface-variant)', margin: 0, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>GSTIN</p>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            {userData.gstNumber && <FontAwesomeIcon icon={faCheckCircle} style={{color: 'var(--light-green-dark)'}} />}
                                            <p style={{ margin: 0, fontWeight: 700, color: userData.gstNumber ? 'var(--on-surface)' : 'var(--light-orange-dark)', fontSize: '1.05rem' }}>
                                                {userData.gstNumber || 'Pending Verification'}
                                            </p>
                                        </div>
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.5fr', padding: '1.25rem 1.5rem', background: 'rgba(34, 197, 94, 0.04)', borderRadius: '16px', alignItems: 'center', border: '1px solid rgba(34, 197, 94, 0.05)' }}>
                                        <p style={{ fontSize: '0.8rem', color: 'var(--on-surface-variant)', margin: 0, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Category</p>
                                        <p style={{ margin: 0, fontWeight: 700, color: 'var(--light-green-dark)', fontSize: '1.05rem' }}>{userData.productOrService}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {activeSection === 'profileEdit' && (
                    <section className="section-panel" style={{maxWidth: '1000px', margin: '0 auto'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem'}}>
                            <h2>Company Identity</h2>
                            <p style={{fontSize: '0.85rem', color: 'var(--on-surface-variant)'}}>Manage your professional presence on GlobalB2B</p>
                        </div>
                        
                        <div className="profile-form-grid" style={{
                            display: 'grid', 
                            gridTemplateColumns: '1fr 1fr', 
                            gap: '2.5rem 2rem'
                        }}>
                            <div className="user-info-field">
                                <label style={{display: 'block', marginBottom: '0.75rem', fontWeight: 600, fontSize: '0.9rem'}}>Full Name</label>
                                <input className="dash-input" style={{width: '100%'}} name="name" value={userData.name} onChange={(e) => setUserData({...userData, name: e.target.value})} />
                            </div>
                            
                            <div className="user-info-field">
                                <label style={{display: 'block', marginBottom: '0.75rem', fontWeight: 600, fontSize: '0.9rem'}}>Operational Email</label>
                                <input className="dash-input" style={{width: '100%'}} name="email" value={userData.email} onChange={(e) => setUserData({...userData, email: e.target.value})} />
                            </div>

                            <div className="user-info-field">
                                <label style={{display: 'block', marginBottom: '0.75rem', fontWeight: 600, fontSize: '0.9rem'}}>Mobile Number</label>
                                <input className="dash-input" style={{width: '100%'}} name="mobileNumber" value={userData.mobileNumber} onChange={(e) => setUserData({...userData, mobileNumber: e.target.value})} />
                            </div>

                            <div className="user-info-field">
                                <label style={{display: 'block', marginBottom: '0.75rem', fontWeight: 600, fontSize: '0.9rem'}}>Company Name</label>
                                <input className="dash-input" style={{width: '100%'}} name="companyName" value={userData.companyName} onChange={(e) => setUserData({...userData, companyName: e.target.value})} />
                            </div>

                            <div className="user-info-field" style={{gridColumn: 'span 2'}}>
                                <label style={{display: 'block', marginBottom: '0.75rem', fontWeight: 600, fontSize: '0.9rem'}}>Product/Service Segment</label>
                                <input className="dash-input" style={{width: '100%'}} name="productOrService" value={userData.productOrService} onChange={(e) => setUserData({...userData, productOrService: e.target.value})} />
                            </div>
                        </div>

                        <div style={{marginTop: '4rem', display: 'flex', gap: '1rem'}}>
                            <button className="update-btn" onClick={handleUpdateUser} style={{background: 'linear-gradient(135deg, #27ae60 0%, #219150 100%)', boxShadow: '0 10px 20px rgba(39, 174, 96, 0.2)'}}>
                                Update Profile
                            </button>
                        </div>
                    </section>
                )}

                {activeSection === 'catalogProduct' && (
                    <section className="section-panel" style={{maxWidth: '1000px', margin: '0 auto'}}>
                        <div style={{marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
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

                        <div className="product-form" style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
                            <div className="user-info-field">
                                <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', fontWeight: 600}}>
                                    Product Title <FontAwesomeIcon icon={faGem} style={{fontSize: '0.7rem', color: 'var(--primary)'}} />
                                </label>
                                <input 
                                    className="dash-input" 
                                    style={{width: '100%', borderRadius: '0.75rem', padding: '15px 20px', fontSize: '1rem'}} 
                                    placeholder="Enter Product Name..." 
                                    value={productTitle} 
                                    onChange={(e) => setProductTitle(e.target.value)} 
                                />
                            </div>

                            <div className="user-info-field" style={{position: 'relative'}}>
                                <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', fontWeight: 600}}>
                                    Product Category <FontAwesomeIcon icon={faLayerGroup} style={{fontSize: '0.7rem', color: 'var(--primary)'}} />
                                </label>
                                <input 
                                    className="dash-input" 
                                    style={{width: '100%', borderRadius: '0.75rem', padding: '15px 20px', fontSize: '1rem'}} 
                                    placeholder="e.g. RICE, PULSES, MACHINERY..." 
                                    value={productCategory} 
                                    onChange={(e) => handleCategoryChange(e.target.value)}
                                    onFocus={() => handleCategoryChange(productCategory)}
                                    onBlur={() => setTimeout(() => setShowCategorySuggestions(false), 200)}
                                    autoComplete="off"
                                />
                                {showCategorySuggestions && categorySuggestions.length > 0 && (
                                    <div className="suggestions-dropdown" style={{
                                        position: 'absolute',
                                        top: '100%',
                                        left: 0,
                                        right: 0,
                                        background: 'rgba(255, 255, 255, 0.95)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(0,0,0,0.1)',
                                        borderRadius: '0.75rem',
                                        zIndex: 1001,
                                        marginTop: '8px',
                                        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                                        maxHeight: '250px',
                                        overflowY: 'auto'
                                    }}>
                                        {categorySuggestions.map((s, i) => (
                                            <div 
                                                key={i} 
                                                onMouseDown={() => handleCategorySelect(s)}
                                                style={{
                                                    padding: '12px 20px',
                                                    fontSize: '0.95rem',
                                                    cursor: 'pointer',
                                                    borderBottom: i === categorySuggestions.length - 1 ? 'none' : '1px solid rgba(0,0,0,0.05)',
                                                    transition: 'all 0.2s',
                                                    fontWeight: 500
                                                }}
                                                onMouseEnter={(e) => e.target.style.background = 'rgba(0,123,255, 0.05)'}
                                                onMouseLeave={(e) => e.target.style.background = 'transparent'}
                                            >
                                                {s}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="user-info-field" style={{position: 'relative', opacity: productCategory ? 1 : 0.5, transition: 'opacity 0.3s'}}>
                                <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', fontWeight: 600}}>
                                    Product Sub-Category <FontAwesomeIcon icon={faLayerGroup} style={{fontSize: '0.7rem', color: 'var(--primary)'}} />
                                </label>
                                <input 
                                    className="dash-input" 
                                    style={{width: '100%', borderRadius: '0.75rem', padding: '15px 20px', fontSize: '1rem'}} 
                                    placeholder={productCategory ? "Select or type sub-category..." : "Please select Category first"} 
                                    value={productSubCategory} 
                                    onChange={(e) => handleSubCategoryChange(e.target.value)}
                                    onFocus={() => productCategory && handleSubCategoryChange(productSubCategory)}
                                    onBlur={() => setTimeout(() => setShowSubCategorySuggestions(false), 200)}
                                    disabled={!productCategory}
                                    autoComplete="off"
                                />
                                {showSubCategorySuggestions && subCategorySuggestions.length > 0 && (
                                    <div className="suggestions-dropdown" style={{
                                        position: 'absolute',
                                        top: '100%',
                                        left: 0,
                                        right: 0,
                                        background: 'rgba(255, 255, 255, 0.95)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(0,0,0,0.1)',
                                        borderRadius: '0.75rem',
                                        zIndex: 1000,
                                        marginTop: '8px',
                                        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                                        maxHeight: '250px',
                                        overflowY: 'auto'
                                    }}>
                                        {subCategorySuggestions.map((s, i) => (
                                            <div 
                                                key={i} 
                                                onMouseDown={() => handleSubCategorySelect(s)}
                                                style={{
                                                    padding: '12px 20px',
                                                    fontSize: '0.95rem',
                                                    cursor: 'pointer',
                                                    borderBottom: i === subCategorySuggestions.length - 1 ? 'none' : '1px solid rgba(0,0,0,0.05)',
                                                    transition: 'all 0.2s',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '10px',
                                                    fontWeight: 500
                                                }}
                                                onMouseEnter={(e) => e.target.style.background = 'rgba(0,123,255, 0.05)'}
                                                onMouseLeave={(e) => e.target.style.background = 'transparent'}
                                            >
                                                <i className="fa fa-search" style={{fontSize: '12px', color: '#94a3b8'}}></i>
                                                {s}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="user-info-field">
                                <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', fontWeight: 600}}>
                                    Country <FontAwesomeIcon icon={faShieldHalved} style={{fontSize: '0.7rem', color: 'var(--primary)'}} />
                                </label>
                                <select 
                                    className="dash-input" 
                                    style={{width: '100%', borderRadius: '0.75rem', padding: '15px 20px', fontSize: '1rem'}} 
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

                            {productCountry === 'India' && (
                                <div className="user-info-field" style={{position: 'relative'}}>
                                    <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', fontWeight: 600}}>
                                        State <FontAwesomeIcon icon={faShieldHalved} style={{fontSize: '0.7rem', color: 'var(--primary)'}} />
                                    </label>
                                    <input 
                                        className="dash-input" 
                                        style={{width: '100%', borderRadius: '0.75rem', padding: '15px 20px', fontSize: '1rem'}} 
                                        placeholder="Type or select state..." 
                                        value={productState} 
                                        onChange={(e) => handleStateChange(e.target.value)}
                                        onFocus={() => handleStateChange(productState)}
                                        onBlur={() => setTimeout(() => setShowStateSuggestions(false), 200)}
                                        autoComplete="off"
                                    />
                                    {showStateSuggestions && stateSuggestions.length > 0 && (
                                        <div className="suggestions-dropdown" style={{
                                            position: 'absolute',
                                            top: '100%',
                                            left: 0,
                                            right: 0,
                                            background: 'rgba(255, 255, 255, 0.95)',
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(0,0,0,0.1)',
                                            borderRadius: '0.75rem',
                                            zIndex: 1000,
                                            marginTop: '8px',
                                            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                                            maxHeight: '250px',
                                            overflowY: 'auto'
                                        }}>
                                            {stateSuggestions.map((s, i) => (
                                                <div 
                                                    key={i} 
                                                    onMouseDown={() => handleStateSelect(s)}
                                                    style={{
                                                        padding: '12px 20px',
                                                        fontSize: '0.95rem',
                                                        cursor: 'pointer',
                                                        borderBottom: i === stateSuggestions.length - 1 ? 'none' : '1px solid rgba(0,0,0,0.05)',
                                                        transition: 'all 0.2s',
                                                        fontWeight: 500
                                                    }}
                                                    onMouseEnter={(e) => e.target.style.background = 'rgba(0,123,255, 0.05)'}
                                                    onMouseLeave={(e) => e.target.style.background = 'transparent'}
                                                >
                                                    {s}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}

                            {productCountry !== 'India' && (
                                <div className="user-info-field">
                                    <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', fontWeight: 600}}>
                                        Province/State (Optional) <FontAwesomeIcon icon={faShieldHalved} style={{fontSize: '0.7rem', color: 'var(--primary)'}} />
                                    </label>
                                    <input 
                                        className="dash-input" 
                                        style={{width: '100%', borderRadius: '0.75rem', padding: '15px 20px', fontSize: '1rem'}} 
                                        placeholder="Enter province or state name..." 
                                        value={productState} 
                                        onChange={(e) => setProductState(e.target.value)}
                                    />
                                </div>
                            )}

                            <div className="user-info-field">
                                <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', fontWeight: 600}}>
                                    Business Experience (Years) <FontAwesomeIcon icon={faChartLine} style={{fontSize: '0.7rem', color: 'var(--primary)'}} />
                                </label>
                                <input 
                                    className="dash-input" 
                                    style={{width: '100%', borderRadius: '0.75rem', padding: '15px 20px', fontSize: '1rem'}} 
                                    placeholder="e.g. 5 Years, 10+ Years..." 
                                    value={productExperience} 
                                    onChange={(e) => setProductExperience(e.target.value)}
                                />
                            </div>


                            <div className="image-upload-section" style={{marginTop: '2rem', padding: '2.5rem', background: 'var(--surface-container-low)', borderRadius: '1.5rem', border: '2px dashed var(--surface-container)'}}>
                                <h3 style={{fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem'}}>Add Product Imagery</h3>
                                <p style={{fontSize: '0.85rem', color: 'var(--on-surface-variant)', marginBottom: '1.5rem'}}>You can select up to 200 high-fidelity images for your catalog.</p>
                                
                                <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                                    <input 
                                        type="file" 
                                        id="product-images" 
                                        hidden 
                                        onChange={(e) => {
                                            const files = Array.from(e.target.files);
                                            setSelectedImages(files); // Replace instead of append
                                        }}
                                        onClick={(e) => e.target.value = null}
                                    />
                                    <label htmlFor="product-images" className="insight-btn" style={{width: 'fit-content', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                                        <FontAwesomeIcon icon={faCartPlus} /> Select Product Photo
                                    </label>
                                    <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                                        <small style={{color: 'var(--on-surface-variant)'}}>Single Image Upload • Optimized for 1080p</small>
                                        {selectedImages.length > 0 && (
                                            <span style={{
                                                background: 'var(--primary-container)', 
                                                color: 'var(--on-primary-container)',
                                                padding: '4px 12px',
                                                borderRadius: '20px',
                                                fontSize: '0.8rem',
                                                fontWeight: 700
                                            }}>
                                                Image Ready
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Preview Section */}
                                <div className="preview-grid" style={{
                                    display: 'grid', 
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', 
                                    gap: '1.5rem', 
                                    marginTop: '2rem'
                                }}>
                                    {selectedImages.map((file, idx) => (
                                        <div key={idx} style={{position: 'relative', aspectRatio: '1', borderRadius: '1rem', overflow: 'hidden', background: 'var(--surface-container)'}}>
                                            <img 
                                                src={URL.createObjectURL(file)} 
                                                alt="preview" 
                                                style={{width: '100%', height: '100%', objectFit: 'cover'} } 
                                            />
                                            <div 
                                                onClick={() => setSelectedImages(selectedImages.filter((_, i) => i !== idx))}
                                                style={{position: 'absolute', top: '5px', right: '5px', background: 'rgba(0,0,0,0.5)', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '0.7rem'}}>
                                                ✕
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="catalog-upload-section" style={{marginTop: '2rem', padding: '2.5rem', background: '#f0f4ff', borderRadius: '1.5rem', border: '2px solid #e0e7ff'}}>
                                <h3 style={{fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: '#1e3a8a'}}>Company Catalog (Optional)</h3>
                                <p style={{fontSize: '0.85rem', color: '#64748b', marginBottom: '1.5rem'}}>Upload your business catalog or brochure (PDF or Images).</p>
                                
                                <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                                    <div className="user-info-field">
                                        <input 
                                            className="dash-input" 
                                            style={{width: '100%', background: '#fff'}} 
                                            placeholder="Catalog Name (e.g. Summer Collection 2024)" 
                                            value={catalogTitle}
                                            onChange={(e) => setCatalogTitle(e.target.value)}
                                        />
                                    </div>
                                    
                                    <input 
                                        type="file" 
                                        id="catalog-files" 
                                        multiple 
                                        accept="image/*,application/pdf" 
                                        style={{display: 'none'}} 
                                        onChange={(e) => {
                                            const files = Array.from(e.target.files);
                                            setCatalogFiles(prev => [...prev, ...files]);
                                        }}
                                        onClick={(e) => e.target.value = null}
                                    />
                                    <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                                        <label htmlFor="catalog-files" className="insight-btn" style={{width: 'fit-content', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.75rem', background: '#1e3a8a'}}>
                                            <FontAwesomeIcon icon={faBook} /> Select Catalog Files
                                        </label>
                                        <button 
                                            className="update-btn" 
                                            style={{fontSize: '0.85rem', padding: '0.8rem 1.5rem', background: '#10b981'}}
                                            onClick={handleCatalogUpload}
                                            disabled={catalogFiles.length === 0}
                                        >
                                            Upload Catalog
                                        </button>
                                    </div>
                                    
                                    {catalogFiles.length > 0 && (
                                        <div style={{background: '#fff', padding: '1rem', borderRadius: '12px', border: '1px solid #e2e8f0'}}>
                                            <p style={{fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem'}}>Selected Files:</p>
                                            <ul style={{margin: 0, paddingLeft: '1.2rem', fontSize: '0.8rem', color: '#64748b'}}>
                                                {catalogFiles.map((f, i) => (
                                                    <li key={i}>{f.name}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div style={{marginTop: '2rem', position: 'relative', zIndex: 1000}}>
                                <button 
                                    type="button"
                                    className="update-btn" 
                                    style={{width: '100%', padding: '1.5rem', fontSize: '1.1rem', background: '#003366'}}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        handleProductSubmit();
                                    }}
                                >
                                    Publish to Supplier
                                </button>
                            </div>
                        </div>

                        {/* Real-time Product List Below Form */}
                        <div style={{marginTop: '5rem', borderTop: '2px solid #e2e8f0', paddingTop: '3rem'}}>
                            <h2 style={{fontSize: '2rem', fontWeight: 800, color: '#1e3a8a', marginBottom: '3rem', textAlign: 'center'}}>Your Published Products</h2>
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
                                            background: '#10b981',
                                            color: 'white',
                                            padding: '4px 12px',
                                            borderRadius: '50px',
                                            fontSize: '0.7rem',
                                            fontWeight: 800,
                                            boxShadow: '0 2px 8px rgba(16, 185, 129, 0.3)'
                                        }}>
                                            <FontAwesomeIcon icon={faCheckCircle} style={{marginRight: '5px'}} />
                                            VERIFIED
                                        </div>
                                    </div>

                                    {/* Column 2: Product Info */}
                                    <div style={{
                                        flex: 1,
                                        padding: '1.5rem 2rem',
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
                                        <div style={{display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '1.2rem'}}>
                                            <div style={{display: 'flex', alignItems: 'center', gap: '0.4rem'}}>
                                                <div style={{color: '#fbbf24', fontSize: '0.8rem'}}>
                                                    {[...Array(5)].map((_, idx) => <FontAwesomeIcon key={idx} icon={faStar} />)}
                                                </div>
                                                <span style={{fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600}}>(150+ Reviews)</span>
                                            </div>
                                            <div style={{display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#059669', fontWeight: 700}}>
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
                                    </div>

                                    {/* Column 3: Status & Actions */}
                                    <div style={{
                                        width: '220px',
                                        minWidth: '220px',
                                        padding: '1.5rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        background: '#fafcfd'
                                    }}>
                                        <div style={{marginBottom: 'auto'}}>
                                            <div style={{display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#475569', fontSize: '0.8rem', marginBottom: '0.6rem'}}>
                                                <FontAwesomeIcon icon={faBuilding} style={{color: '#94a3b8'}} />
                                                <span style={{fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{userData?.companyName || 'Verified Supplier'}</span>
                                            </div>
                                            <div style={{display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#10b981', fontSize: '0.8rem', fontWeight: 700}}>
                                                <FontAwesomeIcon icon={faCheckCircle} />
                                                <span>Live Listing</span>
                                            </div>
                                        </div>
                                        <div style={{display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#10b981', fontSize: '0.8rem', fontWeight: 700, marginTop: '1rem'}}>
                                            <FontAwesomeIcon icon={faCheckCircle} />
                                            <span>Published & Live</span>
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
                                        <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '4rem' }}><FontAwesomeIcon icon={faSpinner} spin size="2x" /></div>
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
                                <div style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
                                    <div>
                                        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, margin: 0, background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>My Verified Leads</h2>
                                        <p style={{ color: '#64748b', fontSize: '1.1rem', marginTop: '0.5rem' }}>Premium leads specifically curated and shared with you by Admin.</p>
                                    </div>
                                    <div style={{ background: '#fff', padding: '1rem', borderRadius: '1.5rem', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '1rem', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                                        <div style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: 600 }}>Filter by Date:</div>
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
                                    {viewedLeads.filter(lead => {
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
                                        <div key={i} style={{ padding: '2rem', background: '#fff', borderRadius: '2rem', border: '2px solid #f1f5f9', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', transition: 'transform 0.2s', cursor: 'default' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '1.5rem' }}>
                                                <div style={{ width: '50px', height: '50px', borderRadius: '15px', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981', fontWeight: 800, fontSize: '1.2rem' }}>{lead.buyerName?.charAt(0)}</div>
                                                <div>
                                                    <h4 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800 }}>{lead.buyerName}</h4>
                                                    <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem' }}><FontAwesomeIcon icon={faHeadset} /> {lead.mobileNo}</p>
                                                </div>
                                            </div>
                                            <div style={{ background: '#f0fdf4', padding: '1rem', borderRadius: '1rem', border: '1px solid #dcfce7', color: '#166534', fontWeight: 500 }}>
                                                {lead.email && <div style={{ fontSize: '0.85rem', marginBottom: '0.5rem' }}>Email: {lead.email}</div>}
                                                <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 800, marginBottom: '0.3rem' }}>Sourcing Request</div>
                                                {lead.productName || lead.productOrService || 'Direct Business Opportunity'}
                                            </div>
                                            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <span style={{ fontSize: '0.75rem', padding: '6px 12px', background: '#dcfce7', color: '#166534', borderRadius: '8px', fontWeight: 800 }}>SHARED BY ADMIN</span>
                                                <span style={{ color: '#94a3b8', fontSize: '0.8rem', fontWeight: 600 }}>
                                                    {new Date(lead.dateViewed || lead.viewedAt || lead.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
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
                    <section className="section-panel" style={{maxWidth: '800px', margin: '4rem auto', borderRadius: '3rem'}}>
                        <div style={{textAlign: 'center', marginBottom: '4rem'}}>
                            <h2 style={{fontSize: '2.5rem', marginBottom: '0.5rem'}}>Concierge Support</h2>
                            <p style={{fontSize: '1rem', color: 'var(--on-surface-variant)'}}>Direct access to GlobalB2B Merchant Success Desk</p>
                        </div>

                        <div className="content-grid" style={{gap: '2rem'}}>
                            <div className="stat-card" style={{padding: '2.5rem', textAlign: 'center', background: 'var(--surface-container-low)'}}>
                                <FontAwesomeIcon icon={faHeadset} style={{fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '1.5rem'}} />
                                <h4 style={{margin: '0 0 0.5rem 0', fontSize: '1.2rem'}}>Customer Care</h4>
                                <p style={{fontSize: '1.4rem', fontWeight: 800, color: 'var(--on-surface)'}}>011-41029790</p>
                                <p style={{fontSize: '0.85rem', color: 'var(--on-surface-variant)'}}>Available for immediate queries</p>
                            </div>

                            <div className="stat-card" style={{padding: '2.5rem', textAlign: 'center', background: 'var(--surface-container-low)'}}>
                                <FontAwesomeIcon icon={faBell} style={{fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '1.5rem'}} />
                                <h4 style={{margin: '0 0 0.5rem 0', fontSize: '1.2rem'}}>Executive Response</h4>
                                <p style={{fontSize: '1.2rem', fontWeight: 700, color: 'var(--on-surface)'}}>feedback@globalb2bmart.com</p>
                                <p style={{fontSize: '0.85rem', color: 'var(--on-surface-variant)'}}>Estimated Response: 2-4 Hours</p>
                            </div>
                        </div>

                        <div className="section-panel" style={{marginTop: '3rem', padding: '3rem', textAlign: 'center', background: 'linear-gradient(135deg, var(--surface-container) 0%, var(--surface-container-lowest) 100%)', border: '1px solid var(--surface-container-high)', borderRadius: '2rem'}}>
                            <h3 style={{marginBottom: '1rem'}}>Share Your Feedback</h3>
                            <p style={{fontSize: '0.9rem', color: 'var(--on-surface-variant)', marginBottom: '2rem'}}>Your editorial insight helps us craft a better marketplace experience.</p>
                            <button className="insight-btn" style={{padding: '1rem 3rem'}}>Compose Feedback</button>
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
                                <div style={{flex: 1}}>
                                    <label style={{display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.6rem'}}>Price (Optional)</label>
                                    <input 
                                        type="text" 
                                        value={modalProductPrice} 
                                        onChange={(e) => setModalProductPrice(e.target.value)}
                                        style={{width: '100%', padding: '1rem', borderRadius: '1rem', border: '2px solid #e2e8f0', fontSize: '1rem', fontWeight: 600}}
                                    />
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
