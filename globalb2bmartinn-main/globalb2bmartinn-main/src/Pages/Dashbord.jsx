import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGauge, faShieldHalved, faMessage, faBriefcase, faScrewdriverWrench,
    faGear, faUser, faCartPlus, faBarsProgress, faBook,
    faCircleQuestion, faLeaf, faBell, faMagnifyingGlass, faChartLine,
    faGem, faHeadset, faLayerGroup, faSignOutAlt, faCheckCircle
} from '@fortawesome/free-solid-svg-icons';

import FreeDash from './FreeDash';

import { useAuth } from '../Buyers/AuthContext';

const Dashboard = () => {
    const { userId: authUserId, setUserId, userRole, setUserRole, logout, isLoading } = useAuth();
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState('');
    const [activeSection, setActiveSection] = useState('dashboard');
    const [selectedImages, setSelectedImages] = useState([]);
    const [productTitle, setProductTitle] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productSubCategory, setProductSubCategory] = useState('');
    const [updateMessage, setUpdateMessage] = useState('');
    const [products, setProducts] = useState([]);
    const [viewedLeads, setViewedLeads] = useState([]);
    const [gstNumber, setGSTNumber] = useState('');
    const [message, setMessage] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    // Check authentication and redirect to login if not authenticated
    useEffect(() => {
        if (!isLoading) {
            if (!authUserId) {
                navigate('/login');
            } else if (userRole === 'admin') {
                navigate('/admin-dashboard');
            }
        }
    }, [isLoading, authUserId, userRole, navigate]);

    // Fetch User Data
    useEffect(() => {
        const fetchUserData = async () => {
            // Primary source: AuthContext userId (restored from localStorage)
            // Fallback: URL parameter (for backward compatibility)
            const urlUserId = new URLSearchParams(location.search).get('id');
            const targetUserId = urlUserId || authUserId;

            if (!targetUserId) {
                // No user ID found, should not happen due to above redirect
                return;
            }

            // If we have a URL ID but it's different from context, sync it
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
                if (data.user.role && data.user.role !== userRole) {
                    setUserRole(data.user.role);
                }
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
            const apiBase = process.env.REACT_APP_API_ENDPOINT || "http://localhost:3005";
            const response = await fetch(`${apiBase}/update/${userData._id}`, {
                method: 'PUT',
                body: formData,
            });
            if (response.ok) alert('Profile updated successfully');
        } catch (error) { setError(error.message); }
    };

    const handleProductSubmit = async () => {
        if (!productTitle || !productDescription) {
            return alert('Please enter both title and description');
        }

        const formData = new FormData();
        formData.append('title', productTitle);
        formData.append('description', productDescription);
        formData.append('category', productCategory || 'General');
        formData.append('subCategory', productSubCategory || 'General');
        selectedImages.forEach((image) => {
            formData.append('images', image);
        });

        try {
            const apiBase = process.env.REACT_APP_API_ENDPOINT || "http://localhost:3005";
            const response = await fetch(`${apiBase}/products/add/${userData._id}`, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                alert('Product successfully published to your premium catalog');
                setProductTitle('');
                setProductDescription('');
                setSelectedImages([]);
            } else {
                alert('Failed to publish product. Please try again.');
            }
        } catch (error) {
            console.error('Error uploading product:', error);
            alert('An error occurred. Please check your connection.');
        }
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
                            <div 
                                className="pre-item logout-item" 
                                onClick={() => {
                                    logout();
                                    navigate('/');
                                }}
                                style={{ marginTop: 'auto', color: '#ff4d4d' }}
                            >
                                <p><FontAwesomeIcon icon={faSignOutAlt} /> <span>LOGOUT</span></p>
                            </div>
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
                                <h1 style={{ fontSize: '3.5rem', letterSpacing: '-2px' }}>
                                    {activeSection === 'dashboard' ? (
                                        <>Greetings, <span className="gradient-text">{userData.name.split(' ')[0]}</span></>
                                    ) : activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
                                </h1>
                                <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>Architectural oversight of your <span style={{ fontWeight: 700, color: 'var(--primary)' }}>{userData.companyName}</span> commerce engine.</p>
                            </div>

                            {activeSection === 'dashboard' && (
                                <div className="header-actions" style={{ display: 'flex', gap: '1.2rem' }}>
                                    <button className="primary-action-btn buyers-btn" style={{
                                        padding: '1.2rem 2.2rem',
                                        borderRadius: '1.2rem',
                                        border: 'none',
                                        background: 'linear-gradient(135deg, #1976D2 0%, #1565C0 100%)',
                                        color: 'white',
                                        fontWeight: 700,
                                        fontSize: '0.9rem',
                                        letterSpacing: '0.5px',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        boxShadow: '0 10px 30px rgba(25, 118, 210, 0.3)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.8rem'
                                    }}>
                                        <FontAwesomeIcon icon={faChartLine} /> 🎯 GET BUYERS
                                    </button>
                                    <button className="primary-action-btn sellers-btn" style={{
                                        padding: '1.2rem 2.2rem',
                                        borderRadius: '1.2rem',
                                        border: 'none',
                                        background: 'linear-gradient(135deg, #F57C00 0%, #E65100 100%)',
                                        color: 'white',
                                        fontWeight: 700,
                                        fontSize: '0.9rem',
                                        letterSpacing: '0.5px',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        boxShadow: '0 10px 30px rgba(245, 124, 0, 0.3)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.8rem'
                                    }}>
                                        <FontAwesomeIcon icon={faCartPlus} /> 📊 GET SELLERS
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

                                <div className="bottom-sections" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) 1fr', gap: '2.5rem' }}>
                                    <div className="section-panel glass-panel" style={{ padding: '3rem', borderTop: 'none' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                                            <h2 style={{ margin: 0, fontSize: '1.5rem', background: 'none', WebkitTextFillColor: 'initial', color: 'var(--on-surface)' }}>Recent Acquisitions</h2>
                                            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)', cursor: 'pointer' }}>View All Hubs →</span>
                                        </div>
                                        <div className="leads-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                            {viewedLeads.length > 0 ? viewedLeads.slice(0, 4).map((lead, i) => (
                                                <div key={i} className="lead-item" style={{ 
                                                    background: 'rgba(255,255,255,0.5)', 
                                                    border: '1px solid rgba(255,255,255,0.8)',
                                                    padding: '1.5rem 2rem',
                                                    borderRadius: '20px'
                                                }}>
                                                    <div className="lead-info">
                                                        <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{lead.buyerName}</h4>
                                                        <p style={{ fontSize: '0.85rem', color: 'var(--on-surface-variant)', marginTop: '0.25rem' }}>
                                                            Verified Inquiry • {new Date(lead.dateViewed).toLocaleDateString()}
                                                        </p>
                                                    </div>
                                                    <span className="lead-badge" style={{ 
                                                        background: 'linear-gradient(135deg, var(--light-green-dark) 0%, var(--accent-green) 100%)',
                                                        boxShadow: '0 4px 12px rgba(34, 197, 94, 0.2)'
                                                    }}>SECURED</span>
                                                </div>
                                            )) : (
                                                <div style={{ textAlign: 'center', padding: '4rem 2rem', background: 'rgba(0,0,0,0.02)', borderRadius: '24px' }}>
                                                    <FontAwesomeIcon icon={faLeaf} style={{ fontSize: '3rem', color: '#cbd5e1', marginBottom: '1rem' }} />
                                                    <p style={{ color: '#94a3b8', fontWeight: 500 }}>No recent activity detected.</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="sidebar-panels" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                        <div className="section-panel glass-panel" style={{ padding: '2.5rem', background: 'linear-gradient(135deg, var(--light-blue) 0%, #fff 100%)', borderTop: 'none', position: 'relative', overflow: 'hidden' }}>
                                            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', background: 'var(--light-blue-dark)', opacity: 0.05, borderRadius: '50%' }}></div>
                                            <h2 style={{ fontSize: '1.25rem', color: 'var(--light-blue-dark)', background: 'none', WebkitTextFillColor: 'initial', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                                <FontAwesomeIcon icon={faHeadset} /> Expert Call
                                            </h2>
                                            <p style={{ fontSize: '0.95rem', color: 'var(--on-surface-variant)', lineHeight: 1.6, marginTop: '1rem' }}>
                                                Get personalized <span style={{ fontWeight: 700, color: 'var(--on-surface)' }}>B2B advice</span> from our top-tier specialists.
                                            </p>
                                            <button className="insight-btn" style={{ 
                                                width: '100%', 
                                                marginTop: '1.5rem', 
                                                background: 'linear-gradient(135deg, var(--light-blue-dark) 0%, var(--accent-blue) 100%)', 
                                                boxShadow: '0 8px 25px rgba(59, 130, 246, 0.25)',
                                                borderRadius: '16px'
                                            }}>Book Concierge Call</button>
                                        </div>

                                        <div className="section-panel glass-panel" style={{ padding: '2.5rem', background: 'linear-gradient(135deg, var(--light-orange) 0%, #fff 100%)', borderTop: 'none' }}>
                                            <h2 style={{ fontSize: '1.25rem', color: 'var(--light-orange-dark)', background: 'none', WebkitTextFillColor: 'initial', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                                <FontAwesomeIcon icon={faChartLine} /> Growth Hub
                                            </h2>
                                            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                                <div style={{ padding: '1.25rem', background: '#fff', borderRadius: '16px', border: '1px solid rgba(249, 115, 22, 0.1)', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                                        <p style={{ fontSize: '0.85rem', color: 'var(--on-surface-variant)', fontWeight: 600, margin: 0 }}>Profile Power</p>
                                                        <p style={{ fontSize: '0.85rem', color: 'var(--light-blue-dark)', fontWeight: 800, margin: 0 }}>85%</p>
                                                    </div>
                                                    <div style={{ height: '8px', background: '#f1f5f9', borderRadius: '10px', overflow: 'hidden' }}>
                                                        <div style={{ width: '85%', height: '100%', background: 'linear-gradient(90deg, var(--light-blue-dark), var(--accent-blue))', borderRadius: '10px' }}></div>
                                                    </div>
                                                </div>
                                                <div style={{ padding: '1.25rem', background: '#fff', borderRadius: '16px', border: '1px solid rgba(34, 197, 94, 0.1)', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                                        <p style={{ fontSize: '0.85rem', color: 'var(--on-surface-variant)', fontWeight: 600, margin: 0 }}>Response Speed</p>
                                                        <p style={{ fontSize: '0.85rem', color: 'var(--light-green-dark)', fontWeight: 800, margin: 0 }}>High</p>
                                                    </div>
                                                    <div style={{ height: '8px', background: '#f1f5f9', borderRadius: '10px', overflow: 'hidden' }}>
                                                        <div style={{ width: '92%', height: '100%', background: 'linear-gradient(90deg, var(--light-green-dark), var(--accent-green))', borderRadius: '10px' }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* EDIT PROFILE */}
                        {activeSection === 'profileEdit' && (
                            <section className="section-panel glass-panel" style={{ maxWidth: '1000px', margin: '0 auto', borderTop: 'none' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                                    <h2 style={{ background: 'none', WebkitTextFillColor: 'initial', color: 'var(--on-surface)' }}>👤 Merchant Identity</h2>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--on-surface-variant)', fontWeight: 600 }}>Manage your professional presence on the GlobalB2B Network</p>
                                </div>

                                <div className="profile-form-grid" style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: '2.5rem 2rem'
                                }}>
                                    <div className="user-info-field">
                                        <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: 700, fontSize: '0.8rem', color: 'var(--light-blue-dark)', textTransform: 'uppercase', letterSpacing: '1px' }}>📝 Full Name</label>
                                        <input className="dash-input" style={{ width: '100%', border: '1px solid rgba(59, 130, 246, 0.1)' }} name="name" value={userData.name} onChange={handleInputChange} />
                                    </div>

                                    <div className="user-info-field">
                                        <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: 700, fontSize: '0.8rem', color: 'var(--light-orange-dark)', textTransform: 'uppercase', letterSpacing: '1px' }}>✉️ Operational Email</label>
                                        <input className="dash-input" style={{ width: '100%', border: '1px solid rgba(249, 115, 22, 0.1)' }} name="email" value={userData.email} onChange={handleInputChange} />
                                    </div>

                                    <div className="user-info-field">
                                        <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: 700, fontSize: '0.8rem', color: 'var(--light-green-dark)', textTransform: 'uppercase', letterSpacing: '1px' }}>📞 Contact Number</label>
                                        <input className="dash-input" style={{ width: '100%', border: '1px solid rgba(34, 197, 94, 0.1)' }} name="mobileNumber" value={userData.mobileNumber} onChange={handleInputChange} />
                                    </div>

                                    <div className="user-info-field">
                                        <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: 700, fontSize: '0.8rem', color: 'var(--light-blue-dark)', textTransform: 'uppercase', letterSpacing: '1px' }}>🏢 Company Entity</label>
                                        <input className="dash-input" style={{ width: '100%', border: '1px solid rgba(59, 130, 246, 0.1)' }} name="companyName" value={userData.companyName} onChange={handleInputChange} />
                                    </div>

                                    <div className="user-info-field" style={{ gridColumn: 'span 2' }}>
                                        <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: 700, fontSize: '0.8rem', color: 'var(--light-orange-dark)', textTransform: 'uppercase', letterSpacing: '1px' }}>📦 Product/Service Segment</label>
                                        <input className="dash-input" style={{ width: '100%', border: '1px solid rgba(249, 115, 22, 0.1)' }} name="productOrService" value={userData.productOrService} onChange={handleInputChange} />
                                    </div>
                                </div>

                                <div style={{ marginTop: '4rem', display: 'flex', gap: '1.5rem' }}>
                                    <button className="update-btn" onClick={handleUpdateUser} style={{ 
                                        background: 'linear-gradient(135deg, var(--light-green-dark) 0%, var(--accent-green) 100%)', 
                                        boxShadow: '0 10px 25px rgba(34, 197, 94, 0.3)',
                                        padding: '1.2rem 3rem',
                                        borderRadius: '16px'
                                    }}>
                                        ✓ Synchronize Profile
                                    </button>
                                </div>
                            </section>
                        )}

                        {/* ADD PRODUCT */}
                        {activeSection === 'catalogProduct' && (
                            <section className="section-panel glass-panel" style={{ maxWidth: '1000px', margin: '0 auto', borderTop: 'none', background: 'linear-gradient(135deg, var(--light-orange) 0%, #fff 100%)' }}>
                                <div style={{ marginBottom: '3rem' }}>
                                    <h2 style={{ color: 'var(--light-orange-dark)', background: 'none', WebkitTextFillColor: 'initial' }}>📦 Inventory Expansion</h2>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--on-surface-variant)', fontWeight: 600 }}>Add premium products to your high-visibility catalog</p>
                                </div>

                                <div className="product-form" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                    <div className="user-info-field">
                                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', fontWeight: 700, fontSize: '0.8rem', color: 'var(--light-orange-dark)', textTransform: 'uppercase' }}>
                                            📝 Product Title <FontAwesomeIcon icon={faGem} style={{ fontSize: '0.7rem' }} />
                                        </label>
                                        <input
                                            className="dash-input"
                                            style={{ width: '100%', border: '1px solid rgba(249, 115, 22, 0.1)' }}
                                            placeholder="Ex: High-Grade Industrial Valve..."
                                            value={productTitle}
                                            onChange={(e) => setProductTitle(e.target.value)}
                                        />
                                    </div>

                                    <div className="user-info-field">
                                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', fontWeight: 700, fontSize: '0.8rem', color: 'var(--light-green-dark)', textTransform: 'uppercase' }}>
                                            📋 Detailed Specification <FontAwesomeIcon icon={faLayerGroup} style={{ fontSize: '0.7rem' }} />
                                        </label>
                                        <textarea
                                            className="dash-input"
                                            style={{ width: '100%', height: '180px', resize: 'none', border: '1px solid rgba(34, 197, 94, 0.1)' }}
                                            placeholder="Enter technical specifications, materials, and features..."
                                            value={productDescription}
                                            onChange={(e) => setProductDescription(e.target.value)}
                                        />
                                    </div>

                                    <div className="image-upload-section" style={{ marginTop: '2rem', padding: '3rem', background: 'rgba(255,255,255,0.6)', borderRadius: '2rem', border: '2px dashed var(--light-blue-dark)' }}>
                                        <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--on-surface)' }}>Premium Product Imagery</h3>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--on-surface-variant)', marginBottom: '2rem' }}>Showcase your products with high-resolution images.</p>

                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                            <input
                                                type="file"
                                                id="premium-images"
                                                accept="image/*"
                                                style={{ display: 'none' }}
                                                onChange={(e) => {
                                                    const files = Array.from(e.target.files);
                                                    setSelectedImages(files);
                                                }}
                                                onClick={(e) => e.target.value = null}
                                            />
                                            <label htmlFor="premium-images" className="insight-btn" style={{ 
                                                width: 'fit-content', 
                                                cursor: 'pointer', 
                                                display: 'flex', 
                                                alignItems: 'center', 
                                                gap: '1rem', 
                                                padding: '1.2rem 3rem',
                                                background: 'linear-gradient(135deg, var(--light-blue-dark) 0%, var(--accent-blue) 100%)',
                                                borderRadius: '16px'
                                            }}>
                                                <FontAwesomeIcon icon={faCartPlus} /> Select Product Photo
                                            </label>
                                            {selectedImages.length > 0 && (
                                                <div style={{ 
                                                    background: 'rgba(34, 197, 94, 0.1)', 
                                                    padding: '1rem 2rem', 
                                                    borderRadius: '1rem',
                                                    color: 'var(--light-green-dark)',
                                                    fontWeight: 700,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '10px'
                                                }}>
                                                    <FontAwesomeIcon icon={faCheckCircle} /> Image Ready for Upload
                                                </div>
                                            )}
                                        </div>

                                        {/* Premium Preview Grid */}
                                        <div className="preview-grid" style={{
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                                            gap: '1.5rem',
                                            marginTop: '3rem'
                                        }}>
                                            {selectedImages.map((file, idx) => (
                                                <div key={idx} style={{ position: 'relative', aspectRatio: '1', borderRadius: '1.5rem', overflow: 'hidden', background: '#fff', boxShadow: '0 8px 20px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.05)' }}>
                                                    <img
                                                        src={URL.createObjectURL(file)}
                                                        alt="preview"
                                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                    />
                                                    <div
                                                        onClick={() => setSelectedImages(selectedImages.filter((_, i) => i !== idx))}
                                                        style={{ position: 'absolute', top: '10px', right: '10px', background: 'var(--light-blue-dark)', color: 'white', width: '28px', height: '28px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 800 }}>
                                                        ✕
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div style={{ marginTop: '3rem' }}>
                                        <button className="update-btn" style={{ 
                                            padding: '1.5rem 4rem', 
                                            fontSize: '1.1rem',
                                            background: 'linear-gradient(135deg, var(--light-green-dark) 0%, var(--accent-green) 100%)',
                                            borderRadius: '20px'
                                        }} onClick={handleProductSubmit}>
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
                                        <div key={i} className="lead-item" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                                            <div style={{ width: '80px', height: '80px', borderRadius: '1rem', overflow: 'hidden', flexShrink: 0 }}>
                                                {p.images && p.images.length > 0 ? (
                                                    <img 
                                                        src={`${process.env.REACT_APP_API_ENDPOINT || "http://localhost:3005"}${encodeURI(p.images[0])}`} 
                                                        alt={p.title} 
                                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                                    />
                                                ) : (
                                                    <div style={{ width: '100%', height: '100%', background: 'var(--surface-container)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                        <FontAwesomeIcon icon={faCartPlus} style={{ color: 'var(--on-surface-variant)' }} />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="lead-info" style={{ flex: 1 }}>
                                                <h4 style={{ margin: 0 }}>{p.title}</h4>
                                                <p style={{ fontSize: '0.85rem', margin: '0.5rem 0' }}>{p.description.substring(0, 150)}...</p>
                                                {p.images && p.images.length > 1 && (
                                                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)' }}>+{p.images.length - 1} More Images</span>
                                                )}
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
