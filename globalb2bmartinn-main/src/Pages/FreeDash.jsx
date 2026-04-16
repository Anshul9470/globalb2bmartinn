import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faGauge, faShieldHalved, faUser, faCartPlus, faBarsProgress, 
    faBook, faCircleQuestion, faLeaf, faBell, faGem, faChartLine, 
    faLayerGroup, faArrowCircleUp, faHeadset, faMagnifyingGlass,
    faXmark, faBolt, faBuilding, faVial, faBoxOpen, faCar
} from '@fortawesome/free-solid-svg-icons';
import './Dashboard.css';

const FreeDash = () => {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState('');
    const [activeSection, setActiveSection] = useState('dashboard');
    const [selectedImages, setSelectedImages] = useState([]);
    const [productTitle, setProductTitle] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [updateMessage, setUpdateMessage] = useState('');
    const [viewedLeads, setViewedLeads] = useState([]);
    const [gstNumber, setGSTNumber] = useState('');
    const [message, setMessage] = useState('');
    const [products, setProducts] = useState([]);
    
    // New Search & Suggestion States
    const [searchTerm, setSearchTerm] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);

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

    useEffect(() => {
        const fetchUserData = async () => {
            const userId = new URLSearchParams(location.search).get('id');
            if (!userId) return;
            try {
                const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/login?id=${userId}`);
                if (!response.ok) throw new Error('User not found');
                const data = await response.json();
                setUserData(data.user);
            } catch (error) {
                setError(error.message);
            }
        };
        fetchUserData();
    }, [location.search]);

    useEffect(() => {
        if (activeSection === 'viewleads' && userData) {
            const fetchLeads = async () => {
                const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/viewedLeads/${userData._id}`);
                if (response.ok) {
                    const data = await response.json();
                    setViewedLeads(data.viewedLeads);
                }
            };
            fetchLeads();
        }
    }, [activeSection, userData]);

    useEffect(() => {
        if (activeSection === 'manageProducts' && userData) {
            const fetchProducts = async () => {
                const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/products/${userData._id}`);
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

    const handleUpdateUser = async () => {
        const formData = new FormData();
        Object.keys(userData).forEach(key => formData.append(key, userData[key]));
        try {
            const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/update/${userData._id}`, {
                method: 'PUT',
                body: formData,
            });
            if (response.ok) alert('Profile synchronized');
        } catch (error) { console.error(error); }
    };

    const handleUpdateGST = async () => {
        if (!gstNumber) return alert('Please enter a valid GSTIN');
        try {
            const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/update-gst/${userData._id}`, {
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

    if (!userData) return <div className="dashboard-container" style={{justifyContent: 'center', alignItems: 'center'}}>Syncing with GlobalB2B Network...</div>;

    return (
        <div className="Premium-container">
            {/* Unified Architectural Sidebar */}
            <aside className="premium-sidebar">
                <div className="sidebar-logo">
                    <FontAwesomeIcon icon={faGem} />
                    <span>GlobalB2B</span>
                </div>
                
                <nav className="pre-side" style={{flex: 1}}>
                    {[
                        { id: 'dashboard', icon: faGauge, label: 'Dashboard' },
                        { id: 'profileEdit', icon: faUser, label: 'Company Profile' },
                        { id: 'catalogProduct', icon: faCartPlus, label: 'Add Products' },
                        { id: 'viewleads', icon: faLeaf, label: 'Verified Buyers' },
                        { id: 'manageProducts', icon: faBarsProgress, label: 'Manage Gallery' },
                        { id: 'addgst', icon: faBook, label: 'Add GST' },
                        { id: 'needHelp', icon: faCircleQuestion, label: 'Need Help' }
                    ].map(item => (
                        <div key={item.id} 
                             className={`pre-item ${activeSection === item.id ? 'active' : ''}`} 
                             onClick={() => setActiveSection(item.id)}>
                            <p><FontAwesomeIcon icon={item.icon} /> <span>{item.label}</span></p>
                        </div>
                    ))}
                </nav>

                <div className="sidebar-footer">
                    <div className="user-avatar">{userData.name.charAt(0)}</div>
                    <div className="user-info-sm">
                        <p style={{fontWeight: 700, fontSize: '0.85rem', margin: 0}}>{userData.name}</p>
                        <p style={{fontSize: '0.75rem', color: 'var(--on-surface-variant)', margin: 0}}>{userData.plan || 'Free'} Plan</p>
                    </div>
                </div>
            </aside>

            {/* Premium Content Canvas */}
            <main className="premium-content">
                <header className="dashboard-header" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem'}}>
                    <div className="header-greeting">
                        <h1>{activeSection === 'dashboard' ? `Welcome, ${userData.name.split(' ')[0]}` : activeSection}</h1>
                        <p>{userData.plan || 'Free'} Merchant Workspace</p>
                    </div>

                    {activeSection === 'dashboard' && (
                        <div className="search-portal-wrapper">
                            <div className="search-portal">
                                <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: 'var(--on-surface-variant)'}} />
                                <input 
                                    className="search-input-main" 
                                    placeholder="Search 10 Crore+ Products..." 
                                    value={searchTerm}
                                    onFocus={() => setShowSuggestions(true)}
                                    onChange={(e) => {
                                        setSearchTerm(e.target.value);
                                        setShowSuggestions(true);
                                    }}
                                />
                                {searchTerm && (
                                    <FontAwesomeIcon 
                                        icon={faXmark} 
                                        style={{cursor: 'pointer', color: 'var(--on-surface-variant)'}} 
                                        onClick={() => setSearchTerm('')} 
                                    />
                                )}
                            </div>

                            {showSuggestions && searchTerm && (
                                <div className="suggestions-dropdown" onMouseLeave={() => setShowSuggestions(false)}>
                                    {filteredSuggestions.map((item, idx) => (
                                        <div key={idx} className="suggestion-item" onClick={() => {
                                            setSearchTerm(item.title);
                                            setShowSuggestions(false);
                                        }}>
                                            <div className="suggestion-icon">
                                                <FontAwesomeIcon icon={item.icon} />
                                            </div>
                                            <div className="suggestion-content">
                                                <span className="s-title">{item.title}</span>
                                                <span className="s-category">{item.category}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {activeSection === 'dashboard' && (
                        <div className="header-actions" style={{display: 'flex', gap: '1.2rem'}}>
                            <button className="primary-action-btn buyers-btn" style={{
                                padding: '1.2rem 2.2rem',
                                borderRadius: '1.2rem',
                                border: 'none',
                                background: 'linear-gradient(135deg, #1A237E 0%, #3949AB 100%)',
                                color: 'white',
                                fontWeight: 700,
                                fontSize: '0.9rem',
                                letterSpacing: '0.5px',
                                cursor: 'pointer',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                boxShadow: '0 8px 20px rgba(26, 35, 126, 0.25)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.8rem'
                            }}>
                                <FontAwesomeIcon icon={faChartLine} /> GET BUYERS
                            </button>
                            <button className="primary-action-btn sellers-btn" style={{
                                padding: '1.2rem 2.2rem',
                                borderRadius: '1.2rem',
                                border: '1.5px solid var(--primary)',
                                background: 'rgba(var(--primary-rgb), 0.05)',
                                color: 'var(--primary)',
                                fontWeight: 700,
                                fontSize: '0.9rem',
                                letterSpacing: '0.5px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.8rem'
                            }}>
                                <FontAwesomeIcon icon={faCartPlus} /> GET SELLERS
                            </button>
                        </div>
                    )}
                </header>

                {activeSection === 'dashboard' && (
                    <section className="dashboard-view">
                        <div className="content-grid">
                            <div className="stat-card">
                                <div className="stat-info">
                                    <p className="label">Merchant ID</p>
                                    <h3 className="value" style={{fontSize: '1.2rem'}}>{userData._id.substring(0, 8).toUpperCase()}</h3>
                                </div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-info">
                                    <p className="label">Visibility</p>
                                    <h3 className="value" style={{fontSize: '1.5rem'}}>{(userData.plan || 'Free').toUpperCase()}</h3>
                                </div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-info">
                                    <p className="label">Verification</p>
                                    <h3 className="value" style={{fontSize: '1.5rem', color: '#9f403d'}}>PENDING</h3>
                                </div>
                            </div>
                        </div>



                        <div className="bottom-sections" style={{display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 1fr', gap: '2rem'}}>
                            <div className="section-panel">
                                <h2><FontAwesomeIcon icon={faUser} /> Personal Details</h2>
                                <div className="user-info-list" style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                                    <div style={{padding: '1rem', background: 'var(--surface-container-low)', borderRadius: '1rem'}}>
                                        <p style={{fontSize: '0.8rem', color: 'var(--on-surface-variant)', margin: 0}}>Full Name</p>
                                        <p style={{margin: 0, fontWeight: 700}}>{userData.name}</p>
                                    </div>
                                    <div style={{padding: '1rem', background: 'var(--surface-container-low)', borderRadius: '1rem'}}>
                                        <p style={{fontSize: '0.8rem', color: 'var(--on-surface-variant)', margin: 0}}>Operational Email</p>
                                        <p style={{margin: 0, fontWeight: 700}}>{userData.email}</p>
                                    </div>
                                    <div style={{padding: '1rem', background: 'var(--surface-container-low)', borderRadius: '1rem'}}>
                                        <p style={{fontSize: '0.8rem', color: 'var(--on-surface-variant)', margin: 0}}>Contact Number</p>
                                        <p style={{margin: 0, fontWeight: 700}}>{userData.mobileNumber}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="section-panel">
                                <h2><FontAwesomeIcon icon={faShieldHalved} /> Business Identity</h2>
                                <div className="user-info-list" style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                                    <div style={{padding: '1rem', background: 'var(--surface-container-low)', borderRadius: '1rem'}}>
                                        <p style={{fontSize: '0.8rem', color: 'var(--on-surface-variant)', margin: 0}}>Company Entity</p>
                                        <p style={{margin: 0, fontWeight: 700}}>{userData.companyName}</p>
                                    </div>
                                    <div style={{padding: '1rem', background: 'var(--surface-container-low)', borderRadius: '1rem'}}>
                                        <p style={{fontSize: '0.8rem', color: 'var(--on-surface-variant)', margin: 0}}>GSTIN Verification</p>
                                        <p style={{margin: 0, fontWeight: 700}}>{userData.gstNumber || 'Not Provided'}</p>
                                    </div>
                                    <div style={{padding: '1rem', background: 'var(--surface-container-low)', borderRadius: '1rem'}}>
                                        <p style={{fontSize: '0.8rem', color: 'var(--on-surface-variant)', margin: 0}}>Primary Category</p>
                                        <p style={{margin: 0, fontWeight: 700}}>{userData.productOrService}</p>
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
                        <div style={{marginBottom: '3rem'}}>
                            <h2 style={{color: 'var(--on-surface)', marginBottom: '0.5rem'}}>Add Product Details</h2>
                            <p style={{fontSize: '0.85rem', color: 'var(--on-surface-variant)'}}>Introduce your latest inventory to the GlobalB2B marketplace</p>
                        </div>

                        <div className="product-form" style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
                            <div className="user-info-field">
                                <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', fontWeight: 600}}>
                                    Product Title <FontAwesomeIcon icon={faGem} style={{fontSize: '0.7rem', color: 'var(--primary)'}} />
                                </label>
                                <input 
                                    className="dash-input" 
                                    style={{width: '100%'}} 
                                    placeholder="Enter precision product name..." 
                                    value={productTitle} 
                                    onChange={(e) => setProductTitle(e.target.value)} 
                                />
                            </div>

                            <div className="user-info-field">
                                <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', fontWeight: 600}}>
                                    Product Description <FontAwesomeIcon icon={faLayerGroup} style={{fontSize: '0.7rem', color: 'var(--primary)'}} />
                                </label>
                                <textarea 
                                    className="dash-input" 
                                    style={{width: '100%', height: '150px', resize: 'none'}} 
                                    placeholder="Describe technical specifications and key features..." 
                                    value={productDescription} 
                                    onChange={(e) => setProductDescription(e.target.value)} 
                                />
                            </div>

                            <div className="image-upload-section" style={{marginTop: '2rem', padding: '2.5rem', background: 'var(--surface-container-low)', borderRadius: '1.5rem', border: '2px dashed var(--surface-container)'}}>
                                <h3 style={{fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem'}}>Add Product Imagery</h3>
                                <p style={{fontSize: '0.85rem', color: 'var(--on-surface-variant)', marginBottom: '1.5rem'}}>You can select up to 200 high-fidelity images for your catalog.</p>
                                
                                <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                                    <input 
                                        type="file" 
                                        id="product-images" 
                                        multiple 
                                        accept="image/*" 
                                        style={{display: 'none'}} 
                                        onChange={(e) => {
                                            const files = Array.from(e.target.files);
                                            setSelectedImages(prev => [...prev, ...files]);
                                        }}
                                    />
                                    <label htmlFor="product-images" className="insight-btn" style={{width: 'fit-content', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                                        <FontAwesomeIcon icon={faCartPlus} /> Choose Files
                                    </label>
                                    <small style={{color: 'var(--on-surface-variant)'}}>Maximum 200 images • Optimized for 1080p</small>
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

                            <div style={{marginTop: '2rem'}}>
                                <button className="update-btn" onClick={() => alert('Inventory synced with network')}>
                                    Publish to Catalog
                                </button>
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
                    <section className="section-panel">
                        <h2>Verified Buyers</h2>
                        <div className="leads-list">
                            {viewedLeads.length > 0 ? viewedLeads.map((lead, i) => (
                                <div key={i} className="lead-item">
                                    <div className="lead-info">
                                        <h4>{lead.buyerName}</h4>
                                        <p>{lead.mobileNo}</p>
                                    </div>
                                    <span className="lead-badge">VIEWED</span>
                                </div>
                            )) : (
                                <div style={{textAlign: 'center', padding: '4rem 0'}}>
                                    <p>No Premium Leads UNLOCKED yet.</p>
                                    <Link to="/packages" style={{color: 'var(--primary)', fontWeight: 700}}>Upgrade to View Buyers</Link>
                                </div>
                            )}
                        </div>
                    </section>
                )}

                {activeSection === 'manageProducts' && (
                    <section className="section-panel">
                        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '2rem'}}>
                            <h2>Manage Catalog Gallery</h2>
                            <button className="update-btn" style={{fontSize: '0.8rem', padding: '0.8rem 1.5rem'}} onClick={() => setActiveSection('catalogProduct')}>
                                + Add New
                            </button>
                        </div>
                        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem'}}>
                            {products.length > 0 ? products.map((prod, i) => (
                                <div key={i} className="stat-card" style={{padding: '1.5rem'}}>
                                    <img src={`${process.env.REACT_APP_API_ENDPOINT}/uploads/${prod.images[0]}`} alt={prod.title} style={{width: '100%', height: '150px', objectFit: 'cover', borderRadius: '0.75rem', marginBottom: '1rem'}} />
                                    <h4 style={{fontSize: '1rem', marginBottom: '0.5rem'}}>{prod.title}</h4>
                                    <p style={{fontSize: '0.8rem', color: 'var(--on-surface-variant)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'}}>{prod.description}</p>
                                </div>
                            )) : (
                                <p style={{gridColumn: 'span 3', textAlign: 'center', color: 'var(--on-surface-variant)', padding: '2rem'}}>No products published yet.</p>
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
        </div>
    );
};

export default FreeDash;
