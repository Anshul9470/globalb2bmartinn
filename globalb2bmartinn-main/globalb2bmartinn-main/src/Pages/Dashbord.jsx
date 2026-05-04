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

// Import New Premium Assets
import DASHBOARD_HERO from '../assets/dashboard_hero.png';
import SUPPORT_ILLUSTRATION from '../assets/support_illustration.png';
import TRADE_VISUALIZATION from '../assets/trade_visualization.png';

const getRandomProduct = () => {
    const products = ["CNC Machine", "Solar Panel", "Leather Jacket", "Industrial Pump", "PVC Pipe", "Basmati Rice"];
    return products[Math.floor(Math.random() * products.length)];
};

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
    const [availableLeads, setAvailableLeads] = useState([]);
    const [leadSearch, setLeadSearch] = useState('');
    const [gstNumber, setGSTNumber] = useState('');
    const [message, setMessage] = useState('');
    const [leadLoading, setLeadLoading] = useState(false);
    const [deliberateLoading, setDeliberateLoading] = useState(true);

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

    // Deliberate Loading Timer (User requested 4s)
    useEffect(() => {
        const timer = setTimeout(() => {
            setDeliberateLoading(false);
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

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

    // Fetch Leads (Available & Viewed)
    useEffect(() => {
        const fetchLeads = async () => {
            if (activeSection === 'viewleads' && userData) {
                try {
                    setLeadLoading(true);
                    const apiBase = process.env.REACT_APP_API_ENDPOINT || "http://localhost:3005";
                    // Fetch all available buyers/leads
                    const availRes = await fetch(`${apiBase}/buyers`);
                    if (availRes.ok) {
                        const data = await availRes.json();
                        setAvailableLeads(data.buyers || []);
                    }

                    // Fetch already viewed leads for this user
                    const viewedRes = await fetch(`${apiBase}/viewedLeads/${userData._id}`);
                    if (viewedRes.ok) {
                        const data = await viewedRes.json();
                        setViewedLeads(data.viewedLeads || []);
                    }
                } catch (error) { console.error("Lead Fetch Error:", error); }
                finally { setLeadLoading(false); }
            }
        };
        fetchLeads();
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

    if (!userData || deliberateLoading) {
        return (
            <div className="animated-grey-bg" style={{ padding: '2rem' }}>
                {/* Sidebar Skeleton */}
                <aside style={{ width: '300px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div className="skeleton-box" style={{ width: '80%', height: '40px', marginBottom: '2rem' }}></div>
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} className="skeleton-box" style={{ width: '100%', height: '50px', borderRadius: '12px' }}></div>
                    ))}
                </aside>

                {/* Main Content Skeleton */}
                <main style={{ flex: 1, padding: '2rem' }}>
                    <div className="skeleton-box" style={{ width: '100%', height: '300px', borderRadius: '2.5rem', marginBottom: '3rem' }}></div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '3rem' }}>
                        {[1, 2, 3].map(i => (
                            <div key={i} className="skeleton-box" style={{ height: '150px', borderRadius: '24px' }}></div>
                        ))}
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
                        <div className="skeleton-box" style={{ height: '500px', borderRadius: '2.5rem' }}></div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div className="skeleton-box" style={{ height: '230px', borderRadius: '2.5rem' }}></div>
                            <div className="skeleton-box" style={{ height: '230px', borderRadius: '2.5rem' }}></div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="animated-grey-bg">
            {userData.plan === 'Premium' ? (
                <div className="Premium-container" style={{ background: 'transparent', width: '100%', display: 'flex' }}>
                    {/* Architectural Sidebar */}
                    <aside className="premium-sidebar">
                        <div className="sidebar-logo">
                            <FontAwesomeIcon icon={faGem} />
                            <span>GlobalB2B</span>
                        </div>

                        <nav className="pre-side">
                            {[
                                { id: 'dashboard', icon: faGauge, label: 'Marketplace' },
                                { id: 'profileEdit', icon: faUser, label: 'Profile' },
                                { id: 'catalogProduct', icon: faCartPlus, label: 'Add Item' },
                                { id: 'manageProducts', icon: faBarsProgress, label: 'My Catalog' },
                                { id: 'viewleads', icon: faLeaf, label: 'Lead Hub' },
                                { id: 'addgst', icon: faShieldHalved, label: 'Security' },
                                { id: 'needHelp', icon: faCircleQuestion, label: 'Support' }
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
                        <header className="dashboard-header animate-fade" style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: '1.5rem',
                            padding: '1.5rem 3rem',
                            background: `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url(${DASHBOARD_HERO})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderRadius: '2.5rem',
                            boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
                            marginBottom: '2rem',
                            border: '1px solid rgba(255,255,255,0.5)'
                        }}>
                            <div className="header-greeting animate-left">
                                <h1 style={{ fontSize: '2.5rem', letterSpacing: '-1px', margin: 0, fontWeight: 900 }}>
                                    {activeSection === 'dashboard' ? 'Dashboard' : activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
                                    <span style={{ fontSize: '1.2rem', verticalAlign: 'middle', margin: '0 1rem', opacity: 0.3, fontWeight: 300 }}>|</span>
                                    <span className="gradient-text" style={{ fontSize: '1.8rem' }}>{userData.companyName}</span>
                                </h1>
                                <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '650px', marginTop: '0.5rem', fontWeight: 600, color: '#475569' }}>
                                    Premium Merchant Hub <span style={{ color: 'var(--primary)', margin: '0 0.5rem' }}>•</span> {userData.name}
                                </p>
                            </div>

                            {activeSection === 'dashboard' && (
                                <div className="header-actions animate-up" style={{ display: 'flex', gap: '1.5rem' }}>
                                    <button className="primary-action-btn buyers-btn float" style={{
                                        padding: '1rem 2rem',
                                        borderRadius: '1.5rem',
                                        border: 'none',
                                        background: 'linear-gradient(135deg, #1976D2 0%, #1565C0 100%)',
                                        color: 'white',
                                        fontWeight: 900,
                                        fontSize: '1.1rem',
                                        cursor: 'pointer',
                                        boxShadow: '0 15px 35px rgba(25, 118, 210, 0.4)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem'
                                    }}>
                                        <FontAwesomeIcon icon={faChartLine} /> UNLOCK LEADS 🚀
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
                                    <div className="section-panel glass-panel animate-up" style={{ padding: '3rem', borderTop: 'none', background: `linear-gradient(rgba(255,255,255,0.92), rgba(255,255,255,0.92)), url(${TRADE_VISUALIZATION})`, backgroundSize: 'cover', borderRadius: '2.5rem' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                                            <h2 style={{ margin: 0, fontSize: '2rem', color: 'var(--on-surface)', fontWeight: 900, letterSpacing: '-1px' }}>Global Buyer Traffic</h2>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', fontWeight: 900, color: '#ef4444', background: 'rgba(239, 68, 68, 0.1)', padding: '0.5rem 1.5rem', borderRadius: '100px' }}>
                                                <span className="float" style={{ width: '12px', height: '12px', background: '#ef4444', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 10px #ef4444' }}></span> LIVE ANALYTICS
                                            </span>
                                        </div>
                                        <div className="leads-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                            {viewedLeads.length > 0 ? viewedLeads.slice(0, 4).map((lead, i) => (
                                                <div key={i} className="lead-item animate-left" style={{
                                                    background: 'white',
                                                    border: '1px solid #f1f5f9',
                                                    padding: '1.8rem 2.2rem',
                                                    borderRadius: '24px',
                                                    boxShadow: '0 10px 25px rgba(0,0,0,0.02)',
                                                    animationDelay: `${i * 0.1}s`
                                                }}>
                                                    <div className="lead-info">
                                                        <h4 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#0f172a' }}>{lead.buyerName}</h4>
                                                        <p style={{ fontSize: '0.95rem', color: '#64748b', marginTop: '0.5rem', fontWeight: 500 }}>
                                                            Looking for <span style={{ color: 'var(--primary)', fontWeight: 700 }}>{getRandomProduct()}</span> • Verified Hub • {new Date(lead.dateViewed).toLocaleDateString()}
                                                        </p>
                                                    </div>
                                                    <div style={{ textAlign: 'right' }}>
                                                        <span className="lead-badge" style={{
                                                            background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                                                            padding: '0.7rem 1.8rem',
                                                            borderRadius: '1rem'
                                                        }}>SECURED</span>
                                                    </div>
                                                </div>
                                            )) : (
                                                <div style={{ textAlign: 'center', padding: '6rem 2rem', background: 'rgba(255,255,255,0.6)', borderRadius: '32px', border: '3px dashed #e2e8f0' }}>
                                                    <FontAwesomeIcon icon={faBarsProgress} style={{ fontSize: '4rem', color: '#cbd5e1', marginBottom: '2rem' }} className="float" />
                                                    <h3 style={{ color: '#64748b', fontSize: '1.5rem', fontWeight: 800 }}>Establishing Secure Link...</h3>
                                                    <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>Waiting for global buyer synchronization.</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="sidebar-panels animate-up" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', animationDelay: '0.3s' }}>
                                        <div className="section-panel glass-panel float" style={{ padding: '2.5rem', background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)', color: 'white', border: 'none', position: 'relative', overflow: 'hidden', borderRadius: '2.5rem', boxShadow: '0 25px 50px rgba(37, 99, 235, 0.3)' }}>
                                            <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '180px', height: '180px', background: 'white', opacity: 0.1, borderRadius: '50%' }}></div>
                                            <h2 style={{ fontSize: '1.75rem', color: 'white', background: 'none', WebkitTextFillColor: 'initial', display: 'flex', alignItems: 'center', gap: '0.75rem', margin: 0 }}>
                                                <FontAwesomeIcon icon={faGem} /> Diamond
                                            </h2>
                                            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6, marginTop: '1.5rem', fontWeight: 500 }}>
                                                Your <span style={{ fontWeight: 900 }}>Global Visibility</span> is set to Maximum.
                                            </p>
                                            <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: 'rgba(255,255,255,0.15)', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(5px)' }}>
                                                <p style={{ fontSize: '0.9rem', margin: 0, opacity: 0.8, fontWeight: 700 }}>SUBSCRIPTION STATUS</p>
                                                <p style={{ fontSize: '1.5rem', fontWeight: 900, margin: '8px 0' }}>ACTIVE ✅</p>
                                            </div>
                                        </div>

                                        <div className="section-panel glass-panel" style={{ padding: '3rem 2rem', borderRadius: '2.5rem', background: 'white', border: '1px solid #f1f5f9' }}>
                                            <h2 style={{ fontSize: '1.5rem', color: '#0f172a', background: 'none', WebkitTextFillColor: 'initial', display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 900 }}>
                                                <FontAwesomeIcon icon={faChartLine} /> Performance
                                            </h2>
                                            <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
                                                <div className="float" style={{
                                                    width: '140px',
                                                    height: '140px',
                                                    borderRadius: '50%',
                                                    border: '12px solid #f8fafc',
                                                    borderTopColor: '#3b82f6',
                                                    borderRightColor: '#3b82f6',
                                                    margin: '0 auto',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    flexDirection: 'column',
                                                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                                                }}>
                                                    <span style={{ fontSize: '1.8rem', fontWeight: 950, color: '#1e293b' }}>94%</span>
                                                    <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#22c55e' }}>ELITE</span>
                                                </div>
                                                <p style={{ fontSize: '1rem', color: '#64748b', marginTop: '2rem', fontWeight: 600, lineHeight: 1.5 }}>
                                                    Your catalog is getting <span style={{ color: '#3b82f6' }}>top-tier visibility</span> globally.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* LEAD HUB - NEW PREMIUM SECTION */}
                        {activeSection === 'viewleads' && (
                            <section className="section-panel glass-panel animate-up" style={{ padding: '3rem', borderTop: 'none', background: 'transparent' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
                                    <div>
                                        <h2 style={{ fontSize: '3rem', fontWeight: 950, marginBottom: '0.5rem', letterSpacing: '-2px', color: '#0f172a' }}>Lead Hub Marketplace</h2>
                                        <p style={{ fontSize: '1.1rem', color: '#64748b', fontWeight: 600 }}>Real-time global trade opportunities curated for your premium catalog</p>
                                    </div>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <div className="search-bar" style={{
                                            background: 'white',
                                            padding: '0.8rem 2rem',
                                            borderRadius: '100px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '1rem',
                                            boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
                                            border: '1px solid #f1f5f9',
                                            width: '350px'
                                        }}>
                                            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#94a3b8' }} />
                                            <input
                                                type="text"
                                                placeholder="Search Country, State or Product..."
                                                style={{ border: 'none', outline: 'none', width: '100%', fontSize: '0.95rem', fontWeight: 600 }}
                                                value={leadSearch}
                                                onChange={(e) => setLeadSearch(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
                                    {leadLoading ? (
                                        [1, 2, 3, 4, 5, 6].map(i => (
                                            <div key={i} className="glass-panel" style={{ padding: '2.5rem', borderRadius: '2.5rem', minHeight: '300px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                    <div className="skeleton-box" style={{ width: '50px', height: '50px', borderRadius: '18px' }}></div>
                                                    <div>
                                                        <div className="skeleton-box" style={{ width: '120px', height: '18px', marginBottom: '8px' }}></div>
                                                        <div className="skeleton-box" style={{ width: '80px', height: '12px' }}></div>
                                                    </div>
                                                </div>
                                                <div className="skeleton-box" style={{ width: '100%', height: '80px', borderRadius: '1.5rem' }}></div>
                                                <div className="skeleton-box" style={{ width: '100%', height: '50px', borderRadius: '1.2rem', marginTop: 'auto' }}></div>
                                            </div>
                                        ))
                                    ) : (
                                        availableLeads.filter(l =>
                                            !leadSearch ||
                                            l.country?.toLowerCase().includes(leadSearch.toLowerCase()) ||
                                            l.state?.toLowerCase().includes(leadSearch.toLowerCase()) ||
                                            l.productRequirement?.toLowerCase().includes(leadSearch.toLowerCase())
                                        ).slice(0, 48).map((lead, i) => (
                                            <div key={i} className="lead-item animate-up" style={{
                                                background: 'white',
                                                padding: '2.5rem',
                                                borderRadius: '2.5rem',
                                                border: '1px solid #f1f5f9',
                                                boxShadow: '0 20px 40px rgba(0,0,0,0.02)',
                                                position: 'relative',
                                                overflow: 'hidden',
                                                animationDelay: `${i * 0.05}s`
                                            }}>
                                                <div style={{ position: 'absolute', top: '15px', right: '15px' }}>
                                                    <span style={{
                                                        background: 'rgba(59, 130, 246, 0.1)',
                                                        color: '#3b82f6',
                                                        padding: '0.5rem 1rem',
                                                        borderRadius: '100px',
                                                        fontSize: '0.7rem',
                                                        fontWeight: 900,
                                                        letterSpacing: '1px'
                                                    }}>VERIFIED</span>
                                                </div>

                                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '1.5rem' }}>
                                                    <div className="float" style={{
                                                        width: '50px',
                                                        height: '50px',
                                                        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
                                                        borderRadius: '18px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        fontSize: '1.2rem',
                                                        color: '#64748b'
                                                    }}>
                                                        <FontAwesomeIcon icon={faUser} />
                                                    </div>
                                                    <div>
                                                        <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 900, color: '#0f172a' }}>{lead.buyerName}</h4>
                                                        <p style={{ margin: 0, fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600 }}>{lead.country} • {lead.state || 'Global'}</p>
                                                    </div>
                                                </div>

                                                <div style={{ background: '#f8fafc', padding: '1.2rem', borderRadius: '1.5rem', marginBottom: '2rem' }}>
                                                    <p style={{ margin: 0, fontSize: '0.8rem', fontWeight: 800, color: '#64748b', marginBottom: '5px' }}>REQUIREMENT</p>
                                                    <p style={{ margin: 0, fontSize: '1rem', fontWeight: 700, color: '#1e293b' }}>
                                                        {lead.productRequirement || getRandomProduct()}
                                                    </p>
                                                </div>

                                                <button className="insight-btn" style={{ width: '100%', padding: '1.2rem', borderRadius: '1.2rem', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: 'white', fontWeight: 800 }}>
                                                    UNLOCK CONTACT
                                                </button>
                                            </div>
                                        ))
                                    )}
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
                            <section className="section-panel" style={{ maxWidth: '1000px', margin: '4rem auto', border: 'none', background: 'transparent', boxShadow: 'none' }}>
                                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                                    <div style={{ marginBottom: '2rem' }}>
                                        <img src={SUPPORT_ILLUSTRATION} alt="Support" style={{ width: '350px', filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.1))' }} />
                                    </div>
                                    <h2 style={{ fontSize: '3.5rem', fontWeight: 950, marginBottom: '1rem', letterSpacing: '-2px', color: '#0f172a' }}>Merchant Success Desk</h2>
                                    <p style={{ fontSize: '1.2rem', color: '#475569', fontWeight: 600, maxWidth: '700px', margin: '0 auto' }}>Your dedicated GlobalB2B concierge team is available to help you scale your business.</p>
                                </div>

                                <div className="content-grid" style={{ gap: '2rem' }}>
                                    <div className="stat-card" style={{ padding: '3rem 2rem', textAlign: 'center', background: 'white', borderRadius: '2rem', border: '1px solid #f1f5f9', boxShadow: '0 10px 25px rgba(0,0,0,0.02)' }}>
                                        <div style={{ width: '80px', height: '80px', background: '#eff6ff', color: '#3b82f6', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', fontSize: '2.2rem' }}>
                                            <FontAwesomeIcon icon={faMessage} />
                                        </div>
                                        <h4 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem', fontWeight: 900, color: '#0f172a' }}>Priority Email</h4>
                                        <p style={{ fontSize: '1.1rem', fontWeight: 800, color: '#3b82f6', wordBreak: 'break-all' }}>feedback@globalb2bmart.com</p>
                                        <p style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '1.2rem', fontWeight: 500 }}>Response Time: &lt; 2 Hours</p>
                                    </div>

                                    <div className="stat-card" style={{ padding: '3rem 2rem', textAlign: 'center', background: 'white', borderRadius: '2rem', border: '1px solid #f1f5f9', boxShadow: '0 10px 25px rgba(0,0,0,0.02)' }}>
                                        <div style={{ width: '80px', height: '80px', background: '#fff7ed', color: '#f97316', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', fontSize: '2.2rem' }}>
                                            <FontAwesomeIcon icon={faHeadset} />
                                        </div>
                                        <h4 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem', fontWeight: 900, color: '#0f172a' }}>Global Hotline</h4>
                                        <p style={{ fontSize: '1.5rem', fontWeight: 950, color: '#f97316' }}>011-41029790</p>
                                        <p style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '1.2rem', fontWeight: 500 }}>Direct Line for Merchants</p>
                                    </div>

                                    <div className="stat-card" style={{ padding: '3rem 2rem', textAlign: 'center', background: 'white', borderRadius: '2rem', border: '1px solid #f1f5f9', boxShadow: '0 10px 25px rgba(0,0,0,0.02)' }}>
                                        <div style={{ width: '80px', height: '80px', background: '#f0fdf4', color: '#22c55e', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', fontSize: '2.2rem' }}>
                                            <FontAwesomeIcon icon={faShieldHalved} />
                                        </div>
                                        <h4 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem', fontWeight: 900, color: '#0f172a' }}>Safety Desk</h4>
                                        <p style={{ fontSize: '1.1rem', fontWeight: 800, color: '#22c55e', wordBreak: 'break-all' }}>safety@globalb2b.com</p>
                                        <p style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '1.2rem', fontWeight: 500 }}>Secure Trade Verification</p>
                                    </div>
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
