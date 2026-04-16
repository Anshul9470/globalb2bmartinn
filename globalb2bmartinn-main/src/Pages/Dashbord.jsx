import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGauge, faShieldHalved, faMessage, faBriefcase, faScrewdriverWrench,
    faGear, faUser, faCartPlus, faBarsProgress, faBook,
    faCircleQuestion, faLeaf, faBell, faMagnifyingGlass, faChartLine,
    faGem, faHeadset, faLayerGroup, faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

import FreeDash from './FreeDash';

const Dashboard = () => {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState('');
    const [activeSection, setActiveSection] = useState('dashboard');
    const [selectedImages, setSelectedImages] = useState([]);
    const [productTitle, setProductTitle] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [updateMessage, setUpdateMessage] = useState('');
    const [products, setProducts] = useState([]);
    const [viewedLeads, setViewedLeads] = useState([]);
    const [gstNumber, setGSTNumber] = useState('');
    const [message, setMessage] = useState('');

    const location = useLocation();

    // Fetch User Data
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

    // Fetch Viewed Leads
    useEffect(() => {
        const fetchViewedLeads = async () => {
            if (activeSection === 'viewleads' && userData) {
                try {
                    const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/viewedLeads/${userData._id}`);
                    if (response.ok) {
                        const data = await response.json();
                        setViewedLeads(data.viewedLeads);
                    }
                } catch (error) { console.error(error); }
            }
        };
        fetchViewedLeads();
    }, [activeSection, userData]);

    // Fetch Products
    useEffect(() => {
        if (activeSection === 'manageProducts' && userData) {
            const fetchProducts = async () => {
                try {
                    const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/products/${userData._id}`);
                    if (response.ok) {
                        const data = await response.json();
                        if (data && data.products) {
                            setProducts(data.products);
                        } else {
                            setProducts([]);
                        }
                    }
                } catch (error) { console.error(error); }
            };
            fetchProducts();
        }
    }, [activeSection, userData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleUpdateUser = async () => {
        const formData = new FormData();
        Object.keys(userData).forEach(key => formData.append(key, userData[key]));
        try {
            const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/update/${userData._id}`, {
                method: 'PUT',
                body: formData,
            });
            if (response.ok) alert('Profile updated successfully');
        } catch (error) { setError(error.message); }
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
                alert('Premium Legal Identity Verified & Updated');
            }
        } catch (error) { setError(error.message); }
    };

    if (error) {
        return (
            <div className="dashboard-container" style={{ justifyContent: 'center', alignItems: 'center' }}>
                <h1 style={{ color: '#9f403d' }}>{error}</h1>
                <Link to="/login" style={{ marginTop: '20px', color: '#296195' }}>Return to Secure Login</Link>
            </div>
        );
    }

    if (!userData) {
        return <div className="dashboard-container" style={{ justifyContent: 'center', alignItems: 'center' }}>Loading Premium Workspace...</div>;
    }

    return (
        <div className="dashboard-container">
            {userData.plan === 'Premium' ? (
                <div className="Premium-container">
                    {/* Architectural Sidebar */}
                    <aside className="premium-sidebar">
                        <div className="sidebar-logo">
                            <FontAwesomeIcon icon={faGem} />
                            <span>GlobalB2B</span>
                        </div>

                        <nav className="pre-side">
                            {[
                                { id: 'dashboard', icon: faGauge, label: 'Dashboard' },
                                { id: 'profileEdit', icon: faUser, label: 'Properties' },
                                { id: 'catalogProduct', icon: faCartPlus, label: 'Inventory' },
                                { id: 'manageProducts', icon: faBarsProgress, label: 'Catalog' },
                                { id: 'viewleads', icon: faLeaf, label: 'Lead Hub' },
                                { id: 'addgst', icon: faBook, label: 'Legal' },
                                { id: 'needHelp', icon: faCircleQuestion, label: 'Concierge' }
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
                                <p style={{ fontWeight: 700, fontSize: '0.85rem', margin: 0 }}>{userData.name}</p>
                                <p style={{ fontSize: '0.75rem', color: 'var(--on-surface-variant)', margin: 0 }}>Premium Merchant</p>
                            </div>
                        </div>
                    </aside>

                    {/* Precision Content Area */}
                    <main className="premium-content">
                        <header className="dashboard-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                            <div className="header-greeting">
                                <h1>{activeSection === 'dashboard' ? `Greetings, ${userData.name.split(' ')[0]}` : activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</h1>
                                <p>Architectural oversight of your B2B commerce engine.</p>
                            </div>

                            {activeSection === 'dashboard' && (
                                <div className="header-actions" style={{ display: 'flex', gap: '1.2rem' }}>
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

                        {/* DASHBOARD VIEW */}
                        {activeSection === 'dashboard' && (
                            <section className="dashboard-view">
                                <div className="content-grid">
                                    <div className="stat-card">
                                        <div className="stat-info">
                                            <p className="label">Lead Velocity</p>
                                            <h3 className="value">124</h3>
                                        </div>
                                    </div>
                                    <div className="stat-card">
                                        <div className="stat-info">
                                            <p className="label">Active Catalog</p>
                                            <h3 className="value">{products.length || '24'}</h3>
                                        </div>
                                    </div>
                                    <div className="stat-card">
                                        <div className="stat-info">
                                            <p className="label">Account Status</p>
                                            <h3 className="value" style={{ fontSize: '1.5rem' }}>VERIFIED</h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="bottom-sections" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) 1fr', gap: '2rem' }}>
                                    <div className="section-panel">
                                        <h2>Recent Acquisitions</h2>
                                        <div className="leads-list">
                                            {viewedLeads.length > 0 ? viewedLeads.slice(0, 4).map((lead, i) => (
                                                <div key={i} className="lead-item">
                                                    <div className="lead-info">
                                                        <h4>{lead.buyerName}</h4>
                                                        <p style={{ fontSize: '0.85rem', color: 'var(--on-surface-variant)' }}>Verified Inquiry • {new Date(lead.dateViewed).toLocaleDateString()}</p>
                                                    </div>
                                                    <span className="lead-badge">SECURED</span>
                                                </div>
                                            )) : <p>No recent activity detected.</p>}
                                        </div>
                                    </div>

                                    <div className="sidebar-panels" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                        <div className="section-panel" style={{ padding: '2rem' }}>
                                            <h2 style={{ fontSize: '1.25rem' }}>Consultation</h2>
                                            <p style={{ fontSize: '0.9rem', color: 'var(--on-surface-variant)', lineHeight: 1.6 }}>Need specialized B2B advice? Our experts are available for an editorial review of your catalog.</p>
                                            <button className="insight-btn" style={{ width: '100%', marginTop: '1rem' }}>Book Expert</button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* EDIT PROFILE */}
                        {activeSection === 'profileEdit' && (
                            <section className="section-panel" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                                    <h2>Merchant Identity</h2>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--on-surface-variant)' }}>Manage your premium presence on the GlobalB2B Network</p>
                                </div>

                                <div className="profile-form-grid" style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: '2.5rem 2rem'
                                }}>
                                    <div className="user-info-field">
                                        <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: 600, fontSize: '0.9rem' }}>Full Name</label>
                                        <input className="dash-input" style={{ width: '100%' }} name="name" value={userData.name} onChange={handleInputChange} />
                                    </div>

                                    <div className="user-info-field">
                                        <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: 600, fontSize: '0.9rem' }}>Operational Email</label>
                                        <input className="dash-input" style={{ width: '100%' }} name="email" value={userData.email} onChange={handleInputChange} />
                                    </div>

                                    <div className="user-info-field">
                                        <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: 600, fontSize: '0.9rem' }}>Contact Number</label>
                                        <input className="dash-input" style={{ width: '100%' }} name="mobileNumber" value={userData.mobileNumber} onChange={handleInputChange} />
                                    </div>

                                    <div className="user-info-field">
                                        <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: 600, fontSize: '0.9rem' }}>Company Entity</label>
                                        <input className="dash-input" style={{ width: '100%' }} name="companyName" value={userData.companyName} onChange={handleInputChange} />
                                    </div>

                                    <div className="user-info-field" style={{ gridColumn: 'span 2' }}>
                                        <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: 600, fontSize: '0.9rem' }}>Product/Service Segment</label>
                                        <input className="dash-input" style={{ width: '100%' }} name="productOrService" value={userData.productOrService} onChange={handleInputChange} />
                                    </div>
                                </div>

                                <div style={{ marginTop: '4rem', display: 'flex', gap: '1.5rem' }}>
                                    <button className="update-btn" onClick={handleUpdateUser} style={{ background: 'linear-gradient(135deg, #27ae60 0%, #219150 100%)', boxShadow: '0 10px 20px rgba(39, 174, 96, 0.2)' }}>
                                        Synchronize Profile
                                    </button>
                                </div>
                            </section>
                        )}

                        {/* ADD PRODUCT */}
                        {activeSection === 'catalogProduct' && (
                            <section className="section-panel" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                                <div style={{ marginBottom: '3rem' }}>
                                    <h2 style={{ color: 'var(--on-surface)', marginBottom: '0.5rem' }}>Inventory Expansion</h2>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--on-surface-variant)' }}>Add premium products to your high-visibility catalog</p>
                                </div>

                                <div className="product-form" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                    <div className="user-info-field">
                                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', fontWeight: 600 }}>
                                            Product Title <FontAwesomeIcon icon={faGem} style={{ fontSize: '0.7rem', color: 'var(--primary)' }} />
                                        </label>
                                        <input
                                            className="dash-input"
                                            style={{ width: '100%' }}
                                            placeholder="Ex: High-Grade Industrial Valve..."
                                            value={productTitle}
                                            onChange={(e) => setProductTitle(e.target.value)}
                                        />
                                    </div>

                                    <div className="user-info-field">
                                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', fontWeight: 600 }}>
                                            Detailed Specification <FontAwesomeIcon icon={faLayerGroup} style={{ fontSize: '0.7rem', color: 'var(--primary)' }} />
                                        </label>
                                        <textarea
                                            className="dash-input"
                                            style={{ width: '100%', height: '180px', resize: 'none' }}
                                            placeholder="Enter technical specifications, materials, and features..."
                                            value={productDescription}
                                            onChange={(e) => setProductDescription(e.target.value)}
                                        />
                                    </div>

                                    <div className="image-upload-section" style={{ marginTop: '2rem', padding: '3rem', background: 'var(--surface-container-low)', borderRadius: '2rem', border: '2px dashed var(--primary-container)' }}>
                                        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Premium Product Imagery</h3>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--on-surface-variant)', marginBottom: '2rem' }}>Showcase your products with up to 200 high-resolution images.</p>

                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                            <input
                                                type="file"
                                                id="premium-images"
                                                multiple
                                                accept="image/*"
                                                style={{ display: 'none' }}
                                                onChange={(e) => {
                                                    const files = Array.from(e.target.files);
                                                    setSelectedImages(prev => [...prev, ...files]);
                                                }}
                                            />
                                            <label htmlFor="premium-images" className="insight-btn" style={{ width: 'fit-content', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem 3rem' }}>
                                                <FontAwesomeIcon icon={faCartPlus} /> Select High-Res Assets
                                            </label>
                                        </div>

                                        {/* Premium Preview Grid */}
                                        <div className="preview-grid" style={{
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                                            gap: '1.5rem',
                                            marginTop: '3rem'
                                        }}>
                                            {selectedImages.map((file, idx) => (
                                                <div key={idx} style={{ position: 'relative', aspectRatio: '1', borderRadius: '1.5rem', overflow: 'hidden', background: 'var(--surface-container)', boxShadow: '0 8px 20px rgba(0,0,0,0.05)' }}>
                                                    <img
                                                        src={URL.createObjectURL(file)}
                                                        alt="preview"
                                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                    />
                                                    <div
                                                        onClick={() => setSelectedImages(selectedImages.filter((_, i) => i !== idx))}
                                                        style={{ position: 'absolute', top: '10px', right: '10px', background: 'var(--primary)', color: 'white', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 800 }}>
                                                        ✕
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div style={{ marginTop: '3rem' }}>
                                        <button className="update-btn" style={{ padding: '1.5rem 4rem', fontSize: '1.1rem' }} onClick={() => alert('Premium Asset Synced')}>
                                            Publish to Live Catalog
                                        </button>
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* MANAGE PRODUCTS */}
                        {activeSection === 'manageProducts' && (
                            <section className="section-panel">
                                <h2>Active Catalog Items</h2>
                                <div className="leads-list">
                                    {products.map((p, i) => (
                                        <div key={i} className="lead-item">
                                            <div className="lead-info">
                                                <h4>{p.title[0]}</h4>
                                                <p style={{ fontSize: '0.85rem' }}>{p.description[0].substring(0, 150)}...</p>
                                            </div>
                                            <FontAwesomeIcon icon={faSignOutAlt} style={{ color: 'var(--primary)', cursor: 'pointer' }} />
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* LEGAL / GST */}
                        {activeSection === 'addgst' && (
                            <section className="section-panel" style={{ maxWidth: '600px', margin: '4rem auto', textAlign: 'center' }}>
                                <div style={{ marginBottom: '3rem' }}>
                                    <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Legal Identity</h2>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--on-surface-variant)' }}>Synchronize your premium GST credentials for global compliance</p>
                                </div>

                                <div className="user-info-field" style={{ textAlign: 'left' }}>
                                    <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: 600, fontSize: '0.9rem' }}>Current GST Number</label>
                                    <p style={{ background: 'var(--surface-container-low)', padding: '1rem', borderRadius: '0.75rem', fontWeight: 700, color: 'var(--primary)' }}>
                                        {userData.gstNumber || 'Not Registered'}
                                    </p>
                                </div>

                                <div className="user-info-field" style={{ textAlign: 'left', marginTop: '2rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: 600, fontSize: '0.9rem' }}>New GST Identification Number</label>
                                    <input
                                        className="dash-input"
                                        style={{ width: '100%' }}
                                        placeholder="Enter 15-digit GSTIN..."
                                        value={gstNumber}
                                        onChange={(e) => setGSTNumber(e.target.value)}
                                    />
                                </div>

                                <button
                                    className="update-btn"
                                    style={{ marginTop: '3rem', width: '100%', background: 'linear-gradient(135deg, #27ae60 0%, #219150 100%)' }}
                                    onClick={handleUpdateGST}>
                                    Update Legal Credentials
                                </button>
                            </section>
                        )}

                        {/* CUSTOMER SUPPORT */}
                        {activeSection === 'needHelp' && (
                            <section className="section-panel" style={{ maxWidth: '800px', margin: '4rem auto' }}>
                                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                                    <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Concierge Support</h2>
                                    <p style={{ fontSize: '1rem', color: 'var(--on-surface-variant)' }}>Direct access to GlobalB2B Premium Merchant Success Desk</p>
                                </div>

                                <div className="content-grid" style={{ gap: '2rem' }}>
                                    <div className="stat-card" style={{ padding: '2.5rem', textAlign: 'center', background: 'var(--surface-container-low)' }}>
                                        <FontAwesomeIcon icon={faHeadset} style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '1.5rem' }} />
                                        <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>Customer Care</h4>
                                        <p style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--on-surface)' }}>011-41029790</p>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--on-surface-variant)' }}>Priority VIP Line available 24/7</p>
                                    </div>

                                    <div className="stat-card" style={{ padding: '2.5rem', textAlign: 'center', background: 'var(--surface-container-low)' }}>
                                        <FontAwesomeIcon icon={faBell} style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '1.5rem' }} />
                                        <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>Executive Response</h4>
                                        <p style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--on-surface)' }}>feedback@globalb2bmart.com</p>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--on-surface-variant)' }}>Premium Response Goal: &lt; 2 Hours</p>
                                    </div>
                                </div>

                                <div className="section-panel" style={{ marginTop: '3rem', padding: '3rem', textAlign: 'center', background: 'linear-gradient(135deg, var(--surface-container) 0%, var(--surface-container-lowest) 100%)', border: '1px solid var(--primary-container)' }}>
                                    <h3 style={{ marginBottom: '1rem' }}>Share Your Feedback</h3>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--on-surface-variant)', marginBottom: '2rem' }}>Your editorial insight helps us craft a better marketplace experience.</p>
                                    <button className="update-btn" style={{ padding: '1.2rem 4rem', width: 'auto' }}>Compose Feedback</button>
                                </div>
                            </section>
                        )}
                    </main>
                </div>
            ) : (
                <FreeDash />
            )}
        </div>
    );
};

export default Dashboard;
