import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../Buyers/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChartPie,
    faUserTie,
    faHandshake,
    faSignOutAlt,
    faTrashAlt,
    faMapMarkerAlt,
    faEnvelope,
    faPhoneAlt,
    faSearch,
    faBoxOpen,
    faBuilding,
    faCrown,
    faCheckCircle,
    faChartLine,
    faCalendarDay,
    faEye,
    faTimes,
    faGlobe,
    faIdCard,
    faClock,
    faChartBar,
    faCalendarAlt,
    faFileAlt,
    faStar,
    faShieldHalved,
    faShareAlt,
    faCheckSquare,
    faSquare,
    faUsers,
    faSpinner,
    faHistory,
    faXmark,
    faLayerGroup
} from '@fortawesome/free-solid-svg-icons';
import { CATEGORIES, SUB_CATEGORIES } from '../services/categoryData';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LineChart,
    Line,
    PieChart,
    Pie,
    Cell,
    AreaChart,
    Area
} from 'recharts';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {
    ComposableMap,
    Geographies,
    Geography,
} from "react-simple-maps";

import './Dashboard.css';

const INDIA_TOPO_JSON = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-states.json";

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [stats, setStats] = useState({
        totalSellers: 0,
        totalBuyers: 0,
        totalProducts: 0,
        todaySellers: 0,
        todayBuyers: 0,
        breakdown: { premium: 0, advanced: 0, standard: 0, free: 0 }
    });
    const [analysisData, setAnalysisData] = useState([]);
    const [stateDistribution, setStateDistribution] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [recentActivity, setRecentActivity] = useState({ sellers: [], buyers: [] });
    const [allBuyers, setAllBuyers] = useState([]);
    const [pendingBuyers, setPendingBuyers] = useState([]);
    const [allSellers, setAllSellers] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedItem, setSelectedItem] = useState(null);
    const [editingProduct, setEditingProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [deliberateLoading, setDeliberateLoading] = useState(true);
    const { userId, userRole, setUserId, setUserRole } = useAuth();
    const navigate = useNavigate();

    // Sharing States
    const [selectedLeads, setSelectedLeads] = useState([]);
    const [shareSearchQuery, setShareSearchQuery] = useState('');
    const [isFetchingBuyers, setIsFetchingBuyers] = useState(false);
    const [historyDateFilter, setHistoryDateFilter] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedSubCategory, setSelectedSubCategory] = useState('All');
    const [selectedHistoryUser, setSelectedHistoryUser] = useState(null);
    const [isSharing, setIsSharing] = useState(false);
    const [shareMessage, setShareMessage] = useState('');
    const [selectedTargetUser, setSelectedTargetUser] = useState(null);

    const palette = {
        navy: '#1e3a8a',
        lightBlue: '#3b82f6',
        orange: '#f97316',
        bg: '#f8fafc',
        cardBg: '#ffffff',
        text: '#1e293b',
        subText: '#64748b',
        danger: '#ef4444',
        success: '#10b981',
        premium: '#f59e0b',
        advanced: '#3b82f6',
        crown: '#f59e0b'
    };

    const planConfig = {
        'Free': { color: '#94a3b8', bg: '#f1f5f9', icon: faUserTie },
        'Standard': { color: '#3b82f6', bg: '#eff6ff', icon: faCheckCircle },
        'Advanced': { color: '#a855f7', bg: '#f5f3ff', icon: faChartLine },
        'Premium': { color: '#f59e0b', bg: '#fffbeb', icon: faCrown }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setDeliberateLoading(false);
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!userId || userRole !== 'admin') {
            navigate('/admin-login');
            return;
        }

        const fetchData = async () => {
            try {
                const apiEndpoint = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3005';
                const [statsRes, buyersRes, sellersRes, analysisRes, productsRes, pendingBuyersRes] = await Promise.all([
                    axios.get(`${apiEndpoint}/admin/stats`),
                    axios.get(`${apiEndpoint}/buyers`),
                    axios.get(`${apiEndpoint}/by-role/seller`),
                    axios.get(`${apiEndpoint}/admin/analysis`),
                    axios.get(`${apiEndpoint}/all-products`),
                    axios.get(`${apiEndpoint}/admin/pending-buyers`)
                ]);

                setStats(statsRes.data.stats);
                setRecentActivity(statsRes.data.recentActivity || { sellers: [], buyers: [] });
                setAllBuyers(buyersRes.data.buyers || []);
                setPendingBuyers(pendingBuyersRes.data.buyers || []);
                setAllSellers(sellersRes.data.users || []);
                setAnalysisData(analysisRes.data.analysis || []);
                setStateDistribution(analysisRes.data.stateDistribution || []);
                setAllProducts(productsRes.data || []);
                setLoading(false);
            } catch (err) {
                console.error("Failed to fetch admin data", err);
                setLoading(false);
            }
        };

        fetchData();
    }, [userId, userRole, navigate]);

    const handleLogout = () => {
        if (window.confirm('Are you sure you want to logout?')) {
            setUserId(null);
            setUserRole(null);
            navigate('/admin-login');
        }
    };

    const handlePlanChange = async (sellerId, newPlan) => {
        try {
            const apiEndpoint = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3005';
            await axios.put(`${apiEndpoint}/update-plan`, { userId: sellerId, plan: newPlan });
            setAllSellers(allSellers.map(s => s._id === sellerId ? { ...s, plan: newPlan } : s));
            const statsRes = await axios.get(`${apiEndpoint}/admin/stats`);
            setStats(statsRes.data.stats);
        } catch (err) {
            alert('Failed to update plan');
        }
    };

    const handleDeleteBuyer = async (id) => {
        if (window.confirm('Permanently delete this buyer lead?')) {
            try {
                const apiEndpoint = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3005';
                await axios.delete(`${apiEndpoint}/delete-buyer/${id}`);
                setAllBuyers(allBuyers.filter(b => b._id !== id));
                const statsRes = await axios.get(`${apiEndpoint}/admin/stats`);
                setStats(statsRes.data.stats);
            } catch (err) {
                alert('Deletion failed');
            }
        }
    };

    const handleDeleteSeller = async (id) => {
        if (window.confirm('Permanently delete this seller account?')) {
            try {
                const apiEndpoint = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3005';
                await axios.delete(`${apiEndpoint}/delete-user/${id}`);
                setAllSellers(allSellers.filter(s => s._id !== id));
                const statsRes = await axios.get(`${apiEndpoint}/admin/stats`);
                setStats(statsRes.data.stats);
            } catch (err) {
                alert('Deletion failed');
            }
        }
    };

    const handleApproveBuyer = async (id) => {
        try {
            const apiEndpoint = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3005';
            await axios.put(`${apiEndpoint}/admin/approve-buyer/${id}`);
            const approvedBuyer = pendingBuyers.find(b => b._id === id);
            setAllBuyers([...allBuyers, { ...approvedBuyer, approved: true }]);
            setPendingBuyers(pendingBuyers.filter(b => b._id !== id));
            alert('Buyer approved successfully! Now live on marketplace.');
        } catch (err) {
            alert('Approval failed');
        }
    };

    const handleUpdateProduct = async (e) => {
        e.preventDefault();
        try {
            const apiEndpoint = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3005';
            await axios.put(`${apiEndpoint}/products/update/${editingProduct.userId}/${editingProduct._id}`, {
                title: Array.isArray(editingProduct.title) ? editingProduct.title[0] : editingProduct.title,
                description: Array.isArray(editingProduct.description) ? editingProduct.description[0] : editingProduct.description,
                price: editingProduct.price,
                moq: editingProduct.moq,
                category: editingProduct.category,
                subCategory: editingProduct.subCategory,
                country: editingProduct.country,
                state: editingProduct.state,
                experience: editingProduct.experience
            });
            setAllProducts(allProducts.map(p => p._id === editingProduct._id ? editingProduct : p));
            setEditingProduct(null);
            alert('Product updated successfully');
        } catch (err) {
            alert('Failed to update product');
        }
    };

    const handleDeleteProduct = async (uId, pId) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            try {
                const apiEndpoint = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3005';
                await axios.delete(`${apiEndpoint}/delete-product/${uId}/${pId}`);
                setAllProducts(allProducts.filter(p => p._id !== pId));
                const statsRes = await axios.get(`${apiEndpoint}/admin/stats`);
                setStats(statsRes.data.stats);
            } catch (err) {
                alert('Deletion failed');
            }
        }
    };

    const handleTogglePublish = async (uId, pId, currentStatus) => {
        try {
            const apiEndpoint = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3005';
            await axios.put(`${apiEndpoint}/products/publish/${uId}/${pId}`, { isPublished: !currentStatus });
            setAllProducts(allProducts.map(p => p._id === pId ? { ...p, isPublished: !currentStatus } : p));
        } catch (err) {
            alert('Status update failed');
        }
    };

    const handleShareLeads = async () => {
        if (selectedLeads.length === 0) return alert('Pehle leads select karo bhai!');
        if (!selectedTargetUser) return alert('Pehle supplier select karo bhai!');

        setIsSharing(true);
        try {
            const apiEndpoint = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3005';
            const leadsToShare = allBuyers
                .filter(b => selectedLeads.includes(b._id))
                .map(b => ({
                    buyerName: b.name,
                    mobileNo: b.mobileNumber,
                    email: b.email,
                    productOrService: b.productOrService,
                    city: b.city
                }));

            await axios.post(`${apiEndpoint}/share-leads`, {
                targetUserId: selectedTargetUser._id,
                leads: leadsToShare
            });

            setShareMessage(`✅ Shared with ${selectedTargetUser.companyName || selectedTargetUser.name}!`);
            setSelectedLeads([]);
            setSelectedTargetUser(null);
            setTimeout(() => setShareMessage(''), 3000);
        } catch (err) {
            console.error("Sharing failed", err);
            const errMsg = err.response?.data?.error || err.message || 'Unknown error';
            alert(`Sharing failed: ${errMsg}`);
        } finally {
            setIsSharing(false);
        }
    };

    const toggleLeadSelection = (id) => {
        setSelectedLeads(prev =>
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
    };
    const filteredBuyers = allBuyers.filter(b =>
        String(b.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        String(b.productOrService || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        String(b.city || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        String(b.mobileNumber || '').toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sellersWithPendingProducts = new Set(allProducts.filter(p => !p.isPublished).map(p => p.userId));

    const filteredSellers = allSellers.filter(s =>
        String(s.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        String(s.companyName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        String(s.mobileNumber || '').toLowerCase().includes(searchTerm.toLowerCase())
    ).sort((a, b) => {
        const aHas = sellersWithPendingProducts.has(a._id);
        const bHas = sellersWithPendingProducts.has(b._id);
        if (aHas && !bHas) return -1;
        if (!aHas && bHas) return 1;
        return 0;
    });

    const filteredProducts = allProducts.filter(p => {
        const matchesSearch = String(p.title || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
            String(p.seller?.name || '').toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
        const matchesSubCategory = selectedSubCategory === 'All' || p.subCategory === selectedSubCategory;
        return matchesSearch && matchesCategory && matchesSubCategory;
    });
    const uniqueCategoriesInProducts = ['All', ...new Set(allProducts.map(p => p.category).filter(Boolean))];
    const uniqueSubCategoriesInProducts = ['All', ...new Set(allProducts.filter(p => selectedCategory === 'All' || p.category === selectedCategory).map(p => p.subCategory).filter(Boolean))];

    const selectedMonthStr = selectedDate.toLocaleString('default', { month: 'short', year: 'numeric' });
    const selectedMonthData = analysisData.find(d => d.month === selectedMonthStr) || { free: 0, standard: 0, advanced: 0, premium: 0, buyers: 0 };

    if (loading || deliberateLoading) return (
        <div className="animated-grey-bg" style={{ padding: '2rem', display: 'flex', minHeight: '100vh', background: '#f8fafc' }}>
            {/* Sidebar Skeleton */}
            <aside style={{ width: '300px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="skeleton-box" style={{ width: '80%', height: '40px', marginBottom: '2rem', background: '#e2e8f0', borderRadius: '8px' }}></div>
                {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className="skeleton-box" style={{ width: '100%', height: '50px', borderRadius: '12px', background: '#e2e8f0' }}></div>
                ))}
            </aside>

            {/* Main Content Skeleton */}
            <main style={{ flex: 1, padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                    <div className="skeleton-box" style={{ width: '300px', height: '50px', background: '#e2e8f0', borderRadius: '8px' }}></div>
                    <div className="skeleton-box" style={{ width: '200px', height: '50px', borderRadius: '100px', background: '#e2e8f0' }}></div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', marginBottom: '3rem' }}>
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="skeleton-box" style={{ height: '180px', borderRadius: '24px', background: '#e2e8f0' }}></div>
                    ))}
                </div>
                <div className="skeleton-box" style={{ width: '100%', height: '600px', borderRadius: '2.5rem', background: '#e2e8f0' }}></div>
            </main>
        </div>
    );

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: palette.bg, fontFamily: "'Inter', sans-serif" }}>

            <aside style={{ width: '280px', background: palette.navy, color: '#fff', padding: '2.5rem 1.5rem', display: 'flex', flexDirection: 'column', position: 'fixed', height: '100vh', zIndex: 1000 }}>
                <div style={{ marginBottom: '3rem', cursor: 'pointer' }} onClick={() => navigate('/')}>
                    <h1 style={{ margin: 0, fontSize: '1.4rem', fontWeight: '900', color: palette.crown }}>GLOBAL ADMIN</h1>
                </div>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                    {[
                        { id: 'overview', label: 'Overview', icon: faChartPie },
                        { id: 'analysis', label: 'Data Analysis', icon: faChartBar },
                        { id: 'categories', label: 'Categories', icon: faLayerGroup },
                        { id: 'buyers', label: 'Buyers', icon: faHandshake, badge: pendingBuyers.length > 0 },
                        { id: 'sellers', label: 'Sellers', icon: faUserTie },
                        { id: 'products', label: 'Products', icon: faBoxOpen, badge: allProducts.some(p => !p.isPublished) }
                    ].map(tab => (
                        <button key={tab.id} onClick={() => { setActiveTab(tab.id); setSearchTerm(''); }} style={{
                            padding: '0.8rem 1.2rem',
                            borderRadius: '12px',
                            border: 'none',
                            background: activeTab === tab.id ? 'rgba(255,255,255,0.1)' : 'transparent',
                            color: activeTab === tab.id ? '#fff' : 'rgba(255,255,255,0.5)',
                            fontWeight: '600',
                            textAlign: 'left',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                            position: 'relative'
                        }}>
                            <FontAwesomeIcon icon={tab.icon} style={{ color: activeTab === tab.id ? palette.orange : 'inherit' }} />
                            {tab.label}
                            {tab.badge && (
                                <span style={{
                                    background: '#ef4444',
                                    color: '#fff',
                                    fontSize: '0.55rem',
                                    padding: '2px 6px',
                                    borderRadius: '6px',
                                    position: 'absolute',
                                    right: '10px',
                                    animation: 'pulse 2s infinite'
                                }}>NEW</span>
                            )}
                        </button>
                    ))}
                </nav>
                <button onClick={handleLogout} style={{ padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'transparent', color: '#ff4d4d', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                    <FontAwesomeIcon icon={faSignOutAlt} /> LOGOUT
                </button>
            </aside>

            <main style={{ flex: 1, marginLeft: '280px', padding: '1.5rem 3rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h2 style={{ fontSize: '1.75rem', fontWeight: '800', color: palette.navy, margin: 0 }}>{activeTab.toUpperCase()}</h2>
                    {activeTab !== 'overview' && (
                        <div style={{ width: '400px', position: 'relative' }}>
                            <FontAwesomeIcon icon={faSearch} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: palette.subText }} />
                            <input type="text" placeholder={`Search ${activeTab}...`} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{ width: '100%', padding: '0.8rem 1rem 0.8rem 3rem', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none' }} />
                        </div>
                    )}
                </div>

                {activeTab === 'overview' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {/* Top Stats Cards */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
                            {[
                                { label: 'TOTAL SELLERS', value: stats.totalSellers, trend: `+${stats.todaySellers} today`, color: palette.navy, icon: faUserTie },
                                { label: 'TOTAL BUYERS', value: stats.totalBuyers, trend: `+${stats.todayBuyers} today`, color: palette.orange, icon: faHandshake },
                                { label: 'TOTAL PRODUCTS', value: stats.totalProducts, trend: 'All categories', color: palette.success, icon: faBoxOpen },
                                { label: 'PREMIUM USERS', value: stats.breakdown?.premium || 0, trend: 'High Priority', color: palette.crown, icon: faCrown }
                            ].map((card, i) => (
                                <div key={i} style={{ background: '#fff', padding: '1.5rem', borderRadius: '25px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', border: '1px solid #f1f5f9' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                        <div style={{ background: `${card.color}11`, color: card.color, width: '45px', height: '45px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <FontAwesomeIcon icon={card.icon} />
                                        </div>
                                        <div style={{ fontSize: '0.7rem', color: palette.success, fontWeight: 'bold', background: '#ecfdf5', padding: '4px 8px', borderRadius: '8px' }}>{card.trend}</div>
                                    </div>
                                    <div style={{ color: palette.subText, fontSize: '0.7rem', fontWeight: '800', letterSpacing: '0.5px' }}>{card.label}</div>
                                    <div style={{ fontSize: '1.8rem', fontWeight: '900', color: palette.navy, marginTop: '5px' }}>{card.value.toLocaleString()}</div>
                                </div>
                            ))}
                        </div>

                        {/* Middle Section: Charts & Activity */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2rem' }}>
                            {/* Membership Pie Chart */}
                            <div style={{ background: '#fff', padding: '2rem', borderRadius: '30px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', position: 'relative' }}>
                                <h3 style={{ margin: '0 0 1.5rem 0', color: palette.navy, fontSize: '1.1rem', fontWeight: 800 }}>Membership Distribution</h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                                    <div style={{ height: '300px', width: '250px', position: 'relative' }}>
                                        <ResponsiveContainer width="100%" height="100%">
                                            <PieChart>
                                                <Pie
                                                    data={[
                                                        { name: 'Free', value: stats.breakdown?.free || 0 },
                                                        { name: 'Standard', value: stats.breakdown?.standard || 0 },
                                                        { name: 'Advanced', value: stats.breakdown?.advanced || 0 },
                                                        { name: 'Premium', value: stats.breakdown?.premium || 0 }
                                                    ]}
                                                    cx="50%"
                                                    cy="50%"
                                                    innerRadius={70}
                                                    outerRadius={100}
                                                    paddingAngle={5}
                                                    dataKey="value"
                                                    animationBegin={0}
                                                    animationDuration={1500}
                                                >
                                                    <Cell fill="#94a3b8" />
                                                    <Cell fill="#3b82f6" />
                                                    <Cell fill="#a855f7" />
                                                    <Cell fill="#f59e0b" />
                                                </Pie>
                                                <Tooltip
                                                    contentStyle={{ borderRadius: '15px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                                                    formatter={(value) => [`${value} Sellers`, 'Count']}
                                                />
                                            </PieChart>
                                        </ResponsiveContainer>
                                        <div style={{
                                            position: 'absolute',
                                            top: '55%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            textAlign: 'center',
                                            pointerEvents: 'none'
                                        }}>
                                            <div style={{ fontSize: '2rem', fontWeight: 900, color: palette.navy }}>{stats.totalSellers}</div>
                                            <div style={{ fontSize: '0.6rem', color: palette.subText, fontWeight: 800, textTransform: 'uppercase' }}>Total Sellers</div>
                                        </div>
                                    </div>

                                    {/* Stats List on the right */}
                                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                        {[
                                            { name: 'Free Plan', value: stats.breakdown?.free || 0, color: '#94a3b8', icon: faUserTie },
                                            { name: 'Standard Plan', value: stats.breakdown?.standard || 0, color: '#3b82f6', icon: faCheckCircle },
                                            { name: 'Advanced Plan', value: stats.breakdown?.advanced || 0, color: '#a855f7', icon: faChartLine },
                                            { name: 'Premium Plan', value: stats.breakdown?.premium || 0, color: '#f59e0b', icon: faCrown }
                                        ].map((p, idx) => (
                                            <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 20px', background: '#f8fafc', borderRadius: '15px', border: `1.5px solid ${p.color}11` }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                    <div style={{ color: p.color, fontSize: '0.9rem' }}><FontAwesomeIcon icon={p.icon} /></div>
                                                    <span style={{ fontSize: '0.85rem', fontWeight: '800', color: palette.navy }}>{p.name}</span>
                                                </div>
                                                <span style={{ fontSize: '1rem', fontWeight: '900', color: p.color }}>{p.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Recent Activity Feed */}
                            <div style={{ background: '#fff', padding: '2rem', borderRadius: '30px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ margin: '0 0 1.5rem 0', color: palette.navy, fontSize: '1.1rem' }}>Recent Registration Activity</h3>
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem', overflowY: 'auto', maxHeight: '300px' }}>
                                    {[...(recentActivity.sellers || []), ...(recentActivity.buyers || [])]
                                        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                                        .slice(0, 5)
                                        .map((item, idx) => (
                                            <div key={idx} style={{ display: 'flex', gap: '15px', alignItems: 'center', padding: '10px', borderRadius: '15px', background: '#f8fafc' }}>
                                                <div style={{ background: item.role === 'seller' ? palette.navy : palette.orange, color: '#fff', width: '35px', height: '35px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem' }}>
                                                    <FontAwesomeIcon icon={item.role === 'seller' ? faUserTie : faHandshake} />
                                                </div>
                                                <div style={{ flex: 1 }}>
                                                    <div style={{ fontSize: '0.85rem', fontWeight: 'bold', color: palette.navy }}>{item.name}</div>
                                                    <div style={{ fontSize: '0.7rem', color: palette.subText }}>Joined as {item.role || 'Buyer'}</div>
                                                </div>
                                                <div style={{ fontSize: '0.65rem', color: palette.subText }}>{new Date(item.createdAt).toLocaleDateString()}</div>
                                            </div>
                                        ))}
                                    {(!(recentActivity.sellers?.length) && !(recentActivity.buyers?.length)) && (
                                        <div style={{ textAlign: 'center', color: palette.subText, padding: '2rem' }}>No recent activity to show.</div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Bottom Section: Trend Chart */}
                        <div style={{ background: '#fff', padding: '2rem', borderRadius: '30px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                            <h3 style={{ margin: '0 0 1.5rem 0', color: palette.navy, fontSize: '1.1rem' }}>Registration Growth (Monthly)</h3>
                            <div style={{ height: '300px' }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={analysisData}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: palette.subText }} />
                                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: palette.subText }} />
                                        <Tooltip contentStyle={{ borderRadius: '15px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
                                        <Legend />
                                        <Line type="monotone" dataKey="sellers" stroke={palette.navy} strokeWidth={3} dot={{ r: 4, fill: palette.navy }} activeDot={{ r: 6 }} />
                                        <Line type="monotone" dataKey="buyers" stroke={palette.orange} strokeWidth={3} dot={{ r: 4, fill: palette.orange }} activeDot={{ r: 6 }} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'analysis' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {/* Growth Trends Section */}
                        <div style={{ background: '#fff', padding: '2.5rem', borderRadius: '35px', boxShadow: '0 10px 40px rgba(0,0,0,0.03)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                                <div>
                                    <h3 style={{ margin: 0, color: palette.navy }}>User Growth Analytics</h3>
                                    <p style={{ margin: '5px 0 0 0', color: palette.subText, fontSize: '0.9rem' }}>Comparing registration velocity between Buyers and Sellers.</p>
                                </div>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <div style={{ width: '12px', height: '12px', borderRadius: '3px', background: palette.navy }}></div>
                                        <span style={{ fontSize: '0.8rem', fontWeight: '700', color: palette.navy }}>Sellers</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <div style={{ width: '12px', height: '12px', borderRadius: '3px', background: palette.orange }}></div>
                                        <span style={{ fontSize: '0.8rem', fontWeight: '700', color: palette.orange }}>Buyers</span>
                                    </div>
                                </div>
                            </div>

                            <div style={{ height: '400px' }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={analysisData}>
                                        <defs>
                                            <linearGradient id="colorSellers" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor={palette.navy} stopOpacity={0.1} />
                                                <stop offset="95%" stopColor={palette.navy} stopOpacity={0} />
                                            </linearGradient>
                                            <linearGradient id="colorBuyers" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor={palette.orange} stopOpacity={0.1} />
                                                <stop offset="95%" stopColor={palette.orange} stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: palette.subText }} />
                                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: palette.subText }} />
                                        <Tooltip contentStyle={{ borderRadius: '15px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
                                        <Area type="monotone" dataKey="sellers" stroke={palette.navy} strokeWidth={3} fillOpacity={1} fill="url(#colorSellers)" />
                                        <Area type="monotone" dataKey="buyers" stroke={palette.orange} strokeWidth={3} fillOpacity={1} fill="url(#colorBuyers)" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Geographic & Distribution Section */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2rem' }}>
                            <div style={{ background: '#fff', padding: '2.5rem', borderRadius: '35px', boxShadow: '0 10px 40px rgba(0,0,0,0.03)' }}>
                                <h3 style={{ margin: '0 0 0.5rem 0', color: palette.navy }}>Regional Market Reach</h3>
                                <p style={{ color: palette.subText, marginBottom: '2rem', fontSize: '0.9rem' }}>State-wise density of verified business entities.</p>

                                <div style={{ height: '400px', background: '#f8fafc', borderRadius: '25px', padding: '1rem', border: '1px solid #f1f5f9', position: 'relative' }}>
                                    <ResponsiveContainer width="100%" height="100%">
                                        <ComposableMap projection="geoMercator" projectionConfig={{ scale: 800, center: [80, 22] }}>
                                            <Geographies geography={INDIA_TOPO_JSON}>
                                                {({ geographies }) =>
                                                    geographies.map((geo) => {
                                                        const stateData = stateDistribution.find(s =>
                                                            String(s.state || '').toLowerCase() === String(geo.properties.name || '').toLowerCase()
                                                        );
                                                        return (
                                                            <Geography
                                                                key={geo.rsmKey}
                                                                geography={geo}
                                                                fill={stateData ? (stateData.count > 100 ? palette.navy : palette.lightBlue) : "#e2e8f0"}
                                                                stroke="#fff"
                                                                strokeWidth={0.5}
                                                                style={{
                                                                    default: { outline: "none" },
                                                                    hover: { fill: palette.orange, outline: "none", cursor: 'pointer' },
                                                                    pressed: { outline: "none" },
                                                                }}
                                                            />
                                                        );
                                                    })
                                                }
                                            </Geographies>
                                        </ComposableMap>
                                    </ResponsiveContainer>
                                    <div style={{ position: 'absolute', bottom: '20px', left: '20px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.7rem' }}>
                                            <div style={{ width: '10px', height: '10px', background: palette.navy, borderRadius: '2px' }}></div> High Density
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.7rem' }}>
                                            <div style={{ width: '10px', height: '10px', background: palette.lightBlue, borderRadius: '2px' }}></div> Medium Density
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.7rem' }}>
                                            <div style={{ width: '10px', height: '10px', background: '#e2e8f0', borderRadius: '2px' }}></div> Low/No Data
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ background: '#fff', padding: '2.5rem', borderRadius: '35px', boxShadow: '0 10px 40px rgba(0,0,0,0.03)' }}>
                                <h3 style={{ margin: '0 0 1.5rem 0', color: palette.navy, fontSize: '1.1rem' }}>Top State Performance</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    {stateDistribution.sort((a, b) => b.count - a.count).slice(0, 7).map((st, i) => (
                                        <div key={i}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                                <span style={{ fontSize: '0.9rem', fontWeight: '800', color: palette.navy }}>{st.state}</span>
                                                <span style={{ fontSize: '0.9rem', fontWeight: '900', color: palette.orange }}>{st.count} Entities</span>
                                            </div>
                                            <div style={{ height: '10px', background: '#f1f5f9', borderRadius: '5px', overflow: 'hidden' }}>
                                                <div
                                                    style={{
                                                        width: `${stateDistribution[0]?.count ? (st.count / stateDistribution[0].count) * 100 : 0}%`,
                                                        height: '100%',
                                                        background: `linear-gradient(90deg, ${palette.lightBlue}, ${palette.navy})`,
                                                        borderRadius: '5px'
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                    {stateDistribution.length === 0 && (
                                        <div style={{ textAlign: 'center', color: palette.subText, padding: '2rem' }}>No state distribution data available.</div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Conversion & Membership Section */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                            <div style={{ background: `linear-gradient(135deg, ${palette.navy}, #1e40af)`, padding: '2rem', borderRadius: '30px', color: '#fff' }}>
                                <h4 style={{ margin: 0, fontSize: '0.8rem', opacity: 0.8 }}>AVG. SELLER GROWTH</h4>
                                <div style={{ fontSize: '2.2rem', fontWeight: '900', margin: '10px 0' }}>+24.5%</div>
                                <div style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.1)', padding: '5px 10px', borderRadius: '10px', display: 'inline-block' }}>Vs last quarter</div>
                            </div>
                            <div style={{ background: `linear-gradient(135deg, ${palette.orange}, #c2410c)`, padding: '2rem', borderRadius: '30px', color: '#fff' }}>
                                <h4 style={{ margin: 0, fontSize: '0.8rem', opacity: 0.8 }}>AVG. BUYER GROWTH</h4>
                                <div style={{ fontSize: '2.2rem', fontWeight: '900', margin: '10px 0' }}>+18.2%</div>
                                <div style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.1)', padding: '5px 10px', borderRadius: '10px', display: 'inline-block' }}>New inquiries monthly</div>
                            </div>
                            <div style={{ background: `linear-gradient(135deg, ${palette.success}, #065f46)`, padding: '2rem', borderRadius: '30px', color: '#fff' }}>
                                <h4 style={{ margin: 0, fontSize: '0.8rem', opacity: 0.8 }}>LEAD CONVERSION</h4>
                                <div style={{ fontSize: '2.2rem', fontWeight: '900', margin: '10px 0' }}>68%</div>
                                <div style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.1)', padding: '5px 10px', borderRadius: '10px', display: 'inline-block' }}>Shared vs Viewed</div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'categories' && (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
                        {CATEGORIES.map(cat => {
                            const catProducts = allProducts.filter(p => String(p.category || '').toUpperCase() === cat.toUpperCase());
                            const subs = SUB_CATEGORIES[cat] || [];
                            return (
                                <div key={cat} style={{ background: '#fff', padding: '2rem', borderRadius: '30px', boxShadow: '0 10px 40px rgba(0,0,0,0.03)', border: '1px solid #f1f5f9' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                                        <div style={{ background: palette.navy + '11', color: palette.navy, width: '50px', height: '50px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                                            <FontAwesomeIcon icon={faLayerGroup} />
                                        </div>
                                        <div style={{ background: catProducts.length > 0 ? '#fffbeb' : '#f1f5f9', color: catProducts.length > 0 ? '#ff8000' : palette.subText, padding: '5px 12px', borderRadius: '10px', fontSize: '0.7rem', fontWeight: '900' }}>
                                            {catProducts.length} PRODUCTS
                                        </div>
                                    </div>
                                    <h3 style={{ margin: '0 0 10px 0', color: palette.navy, fontSize: '1.1rem' }}>{cat}</h3>
                                    <div style={{ fontSize: '0.8rem', color: palette.subText, marginBottom: '1.5rem' }}>
                                        {subs.length} Official sub-categories
                                    </div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                        {subs.slice(0, 3).map(s => (
                                            <span key={s} style={{ background: '#f8fafc', color: palette.navy, padding: '4px 10px', borderRadius: '8px', fontSize: '0.65rem', fontWeight: '700', border: '1px solid #e2e8f0' }}>{s}</span>
                                        ))}
                                        {subs.length > 3 && <span style={{ color: palette.lightBlue, fontSize: '0.7rem', fontWeight: 'bold' }}>+{subs.length - 3} more</span>}
                                    </div>
                                    <button
                                        onClick={() => { setSelectedCategory(cat); setActiveTab('products'); }}
                                        style={{ width: '100%', marginTop: '2rem', padding: '12px', background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: '15px', color: palette.navy, fontWeight: '800', cursor: 'pointer', transition: 'all 0.2s' }}
                                    >
                                        VIEW ALL PRODUCTS
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                )}
                {activeTab === 'buyers' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {/* Pending Buyers Section */}
                        {pendingBuyers.length > 0 && (
                            <div style={{ background: '#fff7ed', padding: '2rem', borderRadius: '30px', border: '2px dashed #fb923c' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.5rem' }}>
                                    <div style={{ background: '#fb923c', color: '#fff', width: '45px', height: '45px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <FontAwesomeIcon icon={faClock} />
                                    </div>
                                    <div>
                                        <h3 style={{ margin: 0, color: '#9a3412' }}>Approval Queue ({pendingBuyers.length})</h3>
                                        <p style={{ margin: 0, fontSize: '0.8rem', color: '#c2410c' }}>New requirements waiting for your verification.</p>
                                    </div>
                                </div>
                                <div style={{ display: 'grid', gap: '1rem' }}>
                                    {pendingBuyers.map(buyer => (
                                        <div key={buyer._id} style={{ background: '#fff', padding: '1.2rem', borderRadius: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 4px 12px rgba(251,146,60,0.1)' }}>
                                            <div>
                                                <div style={{ fontWeight: '800', color: palette.navy }}>{buyer.name} <span style={{ fontWeight: '400', color: palette.subText, fontSize: '0.8rem' }}>({buyer.mobileNumber})</span></div>
                                                <div style={{ fontSize: '0.9rem', color: palette.orange, fontWeight: '700' }}>Seeking: {buyer.productOrService}</div>
                                                <div style={{ fontSize: '0.7rem', color: palette.subText }}>Location: {buyer.city || buyer.statename || 'India'} | Posted: {new Date(buyer.createdAt).toLocaleString()}</div>
                                            </div>
                                            <div style={{ display: 'flex', gap: '10px' }}>
                                                <button
                                                    onClick={() => handleApproveBuyer(buyer._id)}
                                                    style={{ background: palette.success, color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '12px', fontWeight: '800', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
                                                >
                                                    <FontAwesomeIcon icon={faCheckCircle} /> APPROVE
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteBuyer(buyer._id)}
                                                    style={{ background: '#fef2f2', color: palette.danger, border: 'none', width: '42px', height: '42px', borderRadius: '12px', cursor: 'pointer' }}
                                                >
                                                    <FontAwesomeIcon icon={faTrashAlt} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div style={{ display: 'flex', gap: '2rem' }}>
                            <div style={{ flex: 1.5, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                    <h3 style={{ margin: 0, color: palette.navy }}>Verified Buyer Pool</h3>
                                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                        <button
                                            onClick={() => setSelectedLeads(filteredBuyers.map(b => b._id))}
                                            style={{ background: '#f1f5f9', border: 'none', padding: '5px 12px', borderRadius: '8px', fontSize: '0.7rem', fontWeight: '800', cursor: 'pointer', color: palette.navy }}
                                        >
                                            SELECT ALL
                                        </button>
                                        <button
                                            onClick={() => setSelectedLeads([])}
                                            style={{ background: '#fef2f2', border: 'none', padding: '5px 12px', borderRadius: '8px', fontSize: '0.7rem', fontWeight: '800', cursor: 'pointer', color: palette.danger }}
                                        >
                                            DESELECT
                                        </button>
                                        {selectedLeads.length > 0 && (
                                            <div style={{ background: palette.orange, color: '#fff', padding: '5px 15px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                                                {selectedLeads.length} Selected
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {filteredBuyers.map(item => (
                                    <div
                                        key={item._id}
                                        onClick={() => toggleLeadSelection(item._id)}
                                        style={{
                                            background: '#fff',
                                            padding: '1.2rem 2rem',
                                            borderRadius: '20px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '1.5rem',
                                            boxShadow: selectedLeads.includes(item._id) ? `0 0 0 2px ${palette.orange}` : '0 2px 10px rgba(0,0,0,0.01)',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s'
                                        }}
                                    >
                                        <FontAwesomeIcon
                                            icon={selectedLeads.includes(item._id) ? faCheckSquare : faSquare}
                                            style={{ color: selectedLeads.includes(item._id) ? palette.orange : '#e2e8f0', fontSize: '1.2rem' }}
                                        />
                                        <div style={{ width: '200px' }}>
                                            <div style={{ fontWeight: '800', fontSize: '1.1rem', color: palette.navy }}>{item.name}</div>
                                            <div style={{ fontSize: '0.7rem', color: palette.lightBlue, fontWeight: '700' }}>{item.productOrService}</div>
                                        </div>
                                        <div style={{ flex: 1, color: palette.subText, fontSize: '0.85rem' }}>
                                            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: palette.orange }} /> {item.city}
                                        </div>
                                        <div style={{ flex: 1, color: palette.subText, fontSize: '0.85rem' }}>
                                            <div>{item.email}</div>
                                            <div style={{ fontWeight: '700', color: palette.navy }}>{item.mobileNumber}</div>
                                        </div>
                                        <div style={{ display: 'flex', gap: '10px' }} onClick={e => e.stopPropagation()}>
                                            <button onClick={() => setSelectedItem(item)} style={{ background: palette.bg, border: 'none', width: '38px', height: '38px', borderRadius: '10px', cursor: 'pointer', color: palette.navy }}>
                                                <FontAwesomeIcon icon={faEye} />
                                            </button>
                                            <button onClick={() => handleDeleteBuyer(item._id)} style={{ background: '#fef2f2', border: 'none', width: '38px', height: '38px', borderRadius: '10px', cursor: 'pointer', color: palette.danger }}>
                                                <FontAwesomeIcon icon={faTrashAlt} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div style={{ flex: 1, background: '#fff', padding: '2rem', borderRadius: '30px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', height: 'fit-content', position: 'sticky', top: '2rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.5rem' }}>
                                    <div style={{ background: `linear-gradient(135deg, ${palette.lightBlue}, ${palette.navy})`, color: '#fff', width: '50px', height: '50px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <FontAwesomeIcon icon={faShareAlt} />
                                    </div>
                                    <h3 style={{ margin: 0, color: palette.navy }}>Distribution Hub</h3>
                                </div>

                                <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
                                    <FontAwesomeIcon icon={faSearch} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: palette.subText, opacity: 0.5 }} />
                                    <input
                                        type="text"
                                        placeholder="Search Supplier..."
                                        value={shareSearchQuery}
                                        onChange={(e) => setShareSearchQuery(e.target.value)}
                                        style={{ width: '100%', padding: '12px 12px 12px 45px', borderRadius: '15px', border: '1.5px solid #f1f5f9', background: '#f8fafc', outline: 'none' }}
                                    />
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '400px', overflowY: 'auto', paddingRight: '5px' }}>
                                    {allSellers
                                        .filter(u => u && u.role !== 'admin' && (String(u.name || '').toLowerCase().includes(shareSearchQuery.toLowerCase()) || String(u.companyName || '').toLowerCase().includes(shareSearchQuery.toLowerCase())))
                                        .map(user => (
                                            <div
                                                key={user._id}
                                                onClick={() => setSelectedTargetUser(user)}
                                                style={{
                                                    padding: '15px',
                                                    background: selectedTargetUser?._id === user._id ? palette.navy + '11' : '#f8fafc',
                                                    borderRadius: '15px',
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    border: selectedTargetUser?._id === user._id ? `2px solid ${palette.navy}` : '2px solid transparent',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                <div>
                                                    <div style={{ fontWeight: 'bold', color: palette.navy, fontSize: '0.9rem' }}>{user.companyName || user.name}</div>
                                                    <div style={{ fontSize: '0.75rem', color: palette.subText }}>{user.name} • {user.plan}</div>
                                                </div>
                                                <div style={{ display: 'flex', gap: '5px' }}>
                                                    <button
                                                        onClick={(e) => { e.stopPropagation(); setSelectedHistoryUser(user); }}
                                                        title="View Share History"
                                                        style={{ background: '#f0f9ff', border: 'none', width: '32px', height: '32px', borderRadius: '8px', cursor: 'pointer', color: palette.lightBlue }}
                                                    >
                                                        <FontAwesomeIcon icon={faHistory} />
                                                    </button>
                                                    {selectedTargetUser?._id === user._id && (
                                                        <div style={{ color: palette.navy, alignSelf: 'center', marginLeft: '5px' }}>
                                                            <FontAwesomeIcon icon={faCheckCircle} />
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                </div>

                                {/* SHARE HISTORY MODAL */}
                                {selectedHistoryUser && (
                                    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(5px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000, padding: '20px' }}>
                                        <div style={{ background: '#fff', width: '100%', maxWidth: '600px', maxHeight: '80vh', borderRadius: '30px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                                            <div style={{ padding: '1.5rem', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <h3 style={{ margin: 0, color: palette.navy }}>Share History: {selectedHistoryUser.companyName || selectedHistoryUser.name}</h3>
                                                <button onClick={() => setSelectedHistoryUser(null)} style={{ background: '#fef2f2', border: 'none', width: '36px', height: '36px', borderRadius: '50%', cursor: 'pointer', color: palette.danger }}>
                                                    <FontAwesomeIcon icon={faXmark} />
                                                </button>
                                            </div>

                                            <div style={{ padding: '1rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                <div style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Filter Date:</div>
                                                <input type="date" value={historyDateFilter} onChange={(e) => setHistoryDateFilter(e.target.value)} style={{ padding: '5px 10px', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                                                {historyDateFilter && <button onClick={() => setHistoryDateFilter('')} style={{ fontSize: '0.7rem', background: palette.navy, color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}>Clear</button>}
                                            </div>

                                            <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem' }}>
                                                {selectedHistoryUser.viewedLeads && selectedHistoryUser.viewedLeads.filter(l => {
                                                    if (!historyDateFilter) return true;
                                                    const d = new Date(l.dateViewed || l.viewedAt).toISOString().split('T')[0];
                                                    return d === historyDateFilter;
                                                }).length > 0 ? (
                                                    <div style={{ display: 'grid', gap: '10px' }}>
                                                        {selectedHistoryUser.viewedLeads
                                                            .filter(l => {
                                                                if (!historyDateFilter) return true;
                                                                const d = new Date(l.dateViewed || l.viewedAt).toISOString().split('T')[0];
                                                                return d === historyDateFilter;
                                                            })
                                                            .map((lead, idx) => (
                                                                <div key={idx} style={{ padding: '1rem', background: '#f8fafc', borderRadius: '15px', display: 'flex', justifyContent: 'space-between' }}>
                                                                    <div>
                                                                        <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{lead.buyerName}</div>
                                                                        <div style={{ fontSize: '0.75rem', color: palette.subText }}>{lead.mobileNo}</div>
                                                                    </div>
                                                                    <div style={{ textAlign: 'right' }}>
                                                                        <div style={{ fontSize: '0.65rem', color: palette.orange, fontWeight: 'bold' }}>Shared On</div>
                                                                        <div style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>{new Date(lead.dateViewed || lead.viewedAt).toLocaleDateString('en-IN')}</div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                    </div>
                                                ) : (
                                                    <div style={{ textAlign: 'center', padding: '2rem', color: palette.subText }}>No history found.</div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <button
                                    disabled={isSharing || selectedLeads.length === 0 || !selectedTargetUser}
                                    onClick={handleShareLeads}
                                    style={{
                                        width: '100%',
                                        marginTop: '1.5rem',
                                        padding: '1rem',
                                        background: (isSharing || selectedLeads.length === 0 || !selectedTargetUser) ? '#e2e8f0' : palette.orange,
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '15px',
                                        fontSize: '1rem',
                                        fontWeight: '900',
                                        cursor: (isSharing || selectedLeads.length === 0 || !selectedTargetUser) ? 'not-allowed' : 'pointer',
                                        boxShadow: (selectedLeads.length > 0 && selectedTargetUser) ? `0 10px 20px ${palette.orange}33` : 'none',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px'
                                    }}
                                >
                                    {isSharing ? <FontAwesomeIcon icon={faSpinner} spin /> : `Share ${selectedLeads.length} Leads Now`}
                                </button>

                                {selectedLeads.length === 0 && (
                                    <div style={{ marginTop: '1rem', textAlign: 'center', color: palette.orange, fontSize: '0.8rem', fontWeight: 'bold' }}>
                                        Pehle Buyers select karo bhai!
                                    </div>
                                )}

                                {selectedLeads.length > 0 && !selectedTargetUser && (
                                    <div style={{ marginTop: '1rem', textAlign: 'center', color: palette.navy, fontSize: '0.8rem', fontWeight: 'bold' }}>
                                        Ab niche se Supplier select karo!
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'sellers' && (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        {filteredSellers.map(item => {
                            const config = planConfig[item.plan || 'Free'];
                            return (
                                <div key={item._id} style={{ background: '#fff', borderRadius: '25px', padding: '1.8rem', boxShadow: '0 5px 20px rgba(0,0,0,0.02)', position: 'relative', border: `1px solid ${item.plan === 'Premium' ? palette.crown + '33' : 'transparent'}` }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
                                        <div style={{ background: config.bg, color: config.color, padding: '5px 12px', borderRadius: '10px', fontSize: '0.7rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                            <FontAwesomeIcon icon={config.icon} /> {item.plan?.toUpperCase()}
                                            <span style={{ opacity: 0.7, fontSize: '0.6rem', marginLeft: '5px' }}>
                                                ({item.plan === 'Free' ? 'No' :
                                                    item.plan === 'Standard' ? '25' :
                                                        item.plan === 'Advanced' ? '50' :
                                                            item.plan === 'Premium' ? '75' : '0'} Leads/Mo)
                                            </span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            {sellersWithPendingProducts.has(item._id) && (
                                                <div style={{ background: '#ef4444', color: '#fff', padding: '5px 12px', borderRadius: '10px', fontSize: '0.65rem', fontWeight: '900', display: 'flex', alignItems: 'center', gap: '5px', animation: 'pulse 2s infinite' }}>
                                                    <FontAwesomeIcon icon={faBoxOpen} /> PENDING REVIEW
                                                </div>
                                            )}
                                            <button onClick={() => navigate('/admin/seller/' + item._id + '/profile')} style={{ background: '#f8fafc', border: 'none', width: '32px', height: '32px', borderRadius: '8px', cursor: 'pointer', color: palette.subText }}>
                                                <FontAwesomeIcon icon={faEye} />
                                            </button>
                                            <button onClick={() => handleDeleteSeller(item._id)} style={{ background: '#fef2f2', border: 'none', width: '32px', height: '32px', borderRadius: '8px', cursor: 'pointer', color: palette.danger }}>
                                                <FontAwesomeIcon icon={faTrashAlt} />
                                            </button>
                                        </div>
                                    </div>
                                    <h4 style={{ margin: '0 0 5px 0', fontSize: '1.2rem', color: palette.navy }}>{item.name}</h4>
                                    <div style={{ fontSize: '0.85rem', color: palette.subText, marginBottom: '1rem' }}>{item.companyName}</div>

                                    <div style={{ paddingTop: '1.2rem', marginTop: '1rem', borderTop: '1px solid #f1f5f9' }}>
                                        <div style={{ fontSize: '0.65rem', fontWeight: '900', color: palette.subText, marginBottom: '8px', letterSpacing: '0.5px' }}>UPGRADE ACCOUNT TIER</div>
                                        <select
                                            value={item.plan || 'Free'}
                                            onChange={(e) => handlePlanChange(item._id, e.target.value)}
                                            style={{
                                                width: '100%',
                                                padding: '0.7rem',
                                                borderRadius: '12px',
                                                border: `1.5px solid ${config.color}22`,
                                                background: config.bg,
                                                fontSize: '0.85rem',
                                                fontWeight: '800',
                                                color: config.color,
                                                cursor: 'pointer',
                                                outline: 'none',
                                                transition: 'all 0.2s ease'
                                            }}
                                        >
                                            {['Free', 'Standard', 'Advanced', 'Premium'].map(p => <option key={p} value={p}>{p} Membership</option>)}
                                        </select>
                                    </div>
                                    <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div style={{ fontSize: '0.85rem', color: palette.subText, display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: palette.orange }} /> {item.cityname || 'N/A'}
                                        </div>
                                        <div style={{ fontSize: '0.75rem', fontWeight: '700', color: palette.navy }}>
                                            <FontAwesomeIcon icon={faBoxOpen} style={{ marginRight: '5px', color: palette.lightBlue }} />
                                            Active
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {activeTab === 'products' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {/* Category Filter Bar */}
                        <div style={{ background: '#fff', padding: '1.5rem 2rem', borderRadius: '25px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', display: 'flex', gap: '2rem', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <div style={{ fontSize: '0.7rem', fontWeight: '900', color: palette.navy }}>FILTER BY CATEGORY:</div>
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => { setSelectedCategory(e.target.value); setSelectedSubCategory('All'); }}
                                    style={{ padding: '8px 15px', borderRadius: '10px', border: '1.5px solid #f1f5f9', background: '#f8fafc', fontWeight: '700', color: palette.navy, outline: 'none' }}
                                >
                                    {uniqueCategoriesInProducts.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                                </select>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <div style={{ fontSize: '0.7rem', fontWeight: '900', color: palette.navy }}>SUB-CATEGORY:</div>
                                <select
                                    value={selectedSubCategory}
                                    onChange={(e) => setSelectedSubCategory(e.target.value)}
                                    style={{ padding: '8px 15px', borderRadius: '10px', border: '1.5px solid #f1f5f9', background: '#f8fafc', fontWeight: '700', color: palette.navy, outline: 'none' }}
                                >
                                    {uniqueSubCategoriesInProducts.map(sub => <option key={sub} value={sub}>{sub}</option>)}
                                </select>
                            </div>
                            <div style={{ marginLeft: 'auto', fontSize: '0.8rem', fontWeight: 'bold', color: palette.subText }}>
                                Showing {filteredProducts.length} Products
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {filteredProducts.map(product => (
                                <div key={product._id} style={{
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
                                                src={`${process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3005'}${encodeURI(product.images[0])}`}
                                                alt={product.title}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            />
                                        ) : (
                                            <div style={{ width: '100%', height: '100%', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <FontAwesomeIcon icon={faBoxOpen} style={{ fontSize: '3rem', color: '#e2e8f0' }} />
                                            </div>
                                        )}
                                        <div style={{ position: 'absolute', top: '15px', left: '15px' }}>
                                            <div style={{ background: palette.success, color: '#fff', padding: '6px 15px', borderRadius: '10px', fontSize: '0.65rem', fontWeight: '900', display: 'flex', alignItems: 'center', gap: '6px', boxShadow: '0 5px 15px rgba(16,185,129,0.3)' }}>
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
                                            {Array.isArray(product.title) ? product.title[0] : product.title}
                                        </h4>

                                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                                            <div style={{ color: '#f59e0b', fontSize: '0.9rem', display: 'flex', gap: '2px' }}>
                                                {[1, 2, 3, 4, 5].map(i => <FontAwesomeIcon key={i} icon={faStar} />)}
                                            </div>
                                            <span style={{ fontSize: '0.85rem', color: palette.subText, fontWeight: '600' }}>(150+ Reviews)</span>
                                            <div style={{ background: '#fffbeb', color: '#ff8000', padding: '4px 12px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                <FontAwesomeIcon icon={faShieldHalved} /> {product.experience || '1 YRS'} EXP.
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <div style={{ background: '#f1f5f9', color: palette.navy, padding: '8px 18px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                <FontAwesomeIcon icon={faBoxOpen} style={{ color: palette.orange }} />
                                                Bulk Supply Available Worldwide
                                            </div>
                                        </div>
                                    </div>

                                    {/* RIGHT: ACTIONS & SELLER INFO */}
                                    <div style={{ width: '280px', padding: '1.8rem 2rem', background: '#fafbfc', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                        <div>
                                            <div style={{ fontSize: '0.7rem', fontWeight: '900', color: palette.subText, marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <FontAwesomeIcon icon={faBuilding} style={{ color: palette.lightBlue }} /> {product.seller?.companyName || 'Private Company'}
                                            </div>
                                            <div style={{ color: palette.success, fontSize: '0.8rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <FontAwesomeIcon icon={faCheckCircle} /> Live Listing
                                            </div>
                                        </div>

                                        <div style={{ marginTop: 'auto' }}>
                                            <div style={{ color: product.isPublished ? palette.success : palette.orange, fontSize: '0.8rem', fontWeight: '900', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '15px' }}>
                                                <FontAwesomeIcon icon={faCheckCircle} /> {product.isPublished ? 'Published & Live' : 'Pending Approval'}
                                            </div>

                                            <div style={{ display: 'flex', gap: '8px' }}>
                                                <button
                                                    onClick={() => handleTogglePublish(product.userId, product._id, product.isPublished)}
                                                    style={{ flex: 1, padding: '0.8rem', borderRadius: '12px', border: 'none', background: product.isPublished ? '#f1f5f9' : palette.navy, color: product.isPublished ? palette.navy : '#fff', fontWeight: '800', fontSize: '0.75rem', cursor: 'pointer' }}
                                                >
                                                    {product.isPublished ? 'UNPUBLISH' : 'PUBLISH'}
                                                </button>
                                                <button
                                                    onClick={() => setEditingProduct(product)}
                                                    style={{ width: '42px', borderRadius: '12px', border: '1.5px solid #e2e8f0', background: '#fff', color: palette.navy, cursor: 'pointer' }}
                                                >
                                                    <FontAwesomeIcon icon={faFileAlt} />
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteProduct(product.userId, product._id)}
                                                    style={{ width: '42px', borderRadius: '12px', border: '1.5px solid #fef2f2', background: '#fff', color: palette.danger, cursor: 'pointer' }}
                                                >
                                                    <FontAwesomeIcon icon={faTrashAlt} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'catalog' && (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
                        {allSellers.filter(s => s.images && s.images.length > 0).map(seller => (
                            <div key={seller._id} style={{ background: '#fff', padding: '2.2rem', borderRadius: '35px', boxShadow: '0 10px 40px rgba(0,0,0,0.02)', border: '1px solid #f1f5f9', position: 'relative', overflow: 'hidden' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '2rem' }}>
                                    <div style={{ width: '55px', height: '55px', borderRadius: '18px', background: palette.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: palette.navy, fontWeight: '900', fontSize: '1.2rem' }}>
                                        {seller.name?.[0]}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontWeight: '900', fontSize: '1.1rem', color: palette.navy, marginBottom: '4px' }}>{seller.companyName || seller.name}</div>
                                        <div style={{ fontSize: '0.8rem', color: palette.subText, display: 'flex', alignItems: 'center', gap: '6px' }}>
                                            <FontAwesomeIcon icon={faFileAlt} style={{ color: palette.orange }} /> {seller.images.length} Documents
                                        </div>
                                    </div>
                                    <div style={{ background: planConfig[seller.plan || 'Free'].bg, color: planConfig[seller.plan || 'Free'].color, padding: '5px 12px', borderRadius: '12px', fontSize: '0.65rem', fontWeight: '900', border: `1px solid ${planConfig[seller.plan || 'Free'].color}22` }}>
                                        {seller.plan?.toUpperCase() || 'FREE'}
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                    {seller.images.slice(0, 2).map((img, idx) => (
                                        <div key={idx} style={{ height: '140px', borderRadius: '20px', overflow: 'hidden', background: '#f8fafc', border: '1px solid #f1f5f9' }}>
                                            <img
                                                src={`${process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3005'}${encodeURI(img.replace(/\\/g, '/'))}`}
                                                alt="catalog-preview"
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            />
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={() => navigate(`/admin/seller/${seller._id}`)}
                                    style={{
                                        width: '100%',
                                        marginTop: '2rem',
                                        padding: '1rem',
                                        borderRadius: '15px',
                                        border: 'none',
                                        background: palette.navy,
                                        color: '#fff',
                                        fontWeight: '800',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '12px',
                                        transition: 'transform 0.2s ease',
                                        boxShadow: '0 4px 15px rgba(30,58,138,0.1)'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                >
                                    <FontAwesomeIcon icon={faEye} /> VIEW FULL PORTFOLIO
                                </button>
                            </div>
                        ))}
                        {allSellers.filter(s => s.images && s.images.length > 0).length === 0 && (
                            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '6rem', background: '#fff', borderRadius: '40px', border: '2px dashed #e2e8f0' }}>
                                <FontAwesomeIcon icon={faIdCard} style={{ fontSize: '4rem', color: '#e2e8f0', marginBottom: '2rem' }} />
                                <h3 style={{ color: palette.navy, marginBottom: '10px' }}>No Catalogs Found</h3>
                                <p style={{ color: palette.subText }}>Sellers who upload documents or images will appear here.</p>
                            </div>
                        )}
                    </div>
                )}
            </main>

            <DetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />
            {editingProduct && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2100, backdropFilter: 'blur(10px)' }}>
                    <div style={{ background: '#fff', width: '95%', maxWidth: '800px', maxHeight: '90vh', borderRadius: '35px', padding: '2.5rem', boxShadow: '0 30px 80px rgba(0,0,0,0.3)', position: 'relative', overflowY: 'auto' }}>
                        <button onClick={() => setEditingProduct(null)} style={{ position: 'absolute', right: '25px', top: '25px', background: '#f8fafc', border: 'none', width: '36px', height: '36px', borderRadius: '50%', cursor: 'pointer', color: palette.subText, zIndex: 10 }}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>

                        <h3 style={{ color: palette.navy, fontSize: '1.8rem', fontWeight: '900', marginBottom: '2rem' }}>Edit Product Record</h3>

                        <form onSubmit={handleUpdateProduct}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                <div style={{ gridColumn: 'span 2' }}>
                                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '900', color: palette.navy, marginBottom: '8px' }}>PRODUCT NAME</label>
                                    <input
                                        type="text"
                                        value={editingProduct.title || ''}
                                        onChange={(e) => setEditingProduct({ ...editingProduct, title: e.target.value })}
                                        style={{ width: '100%', padding: '1rem', borderRadius: '15px', border: '1.5px solid #e2e8f0', outline: 'none' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '900', color: palette.navy, marginBottom: '8px' }}>CATEGORY</label>
                                    <select
                                        value={editingProduct.category || ''}
                                        onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value, subCategory: 'General' })}
                                        style={{ width: '100%', padding: '1rem', borderRadius: '15px', border: '1.5px solid #e2e8f0', outline: 'none', background: '#fff' }}
                                    >
                                        <option value="">Select Category</option>
                                        {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '900', color: palette.navy, marginBottom: '8px' }}>SUB CATEGORY</label>
                                    <select
                                        value={editingProduct.subCategory || ''}
                                        onChange={(e) => setEditingProduct({ ...editingProduct, subCategory: e.target.value })}
                                        style={{ width: '100%', padding: '1rem', borderRadius: '15px', border: '1.5px solid #e2e8f0', outline: 'none', background: '#fff' }}
                                    >
                                        <option value="">Select Sub Category</option>
                                        {(SUB_CATEGORIES[editingProduct.category] || ['General']).map(sub => <option key={sub} value={sub}>{sub}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '900', color: palette.navy, marginBottom: '8px' }}>PRICE</label>
                                    <input
                                        type="text"
                                        value={editingProduct.price || ''}
                                        onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
                                        style={{ width: '100%', padding: '1rem', borderRadius: '15px', border: '1.5px solid #e2e8f0', outline: 'none' }}
                                    />
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <button type="submit" style={{ flex: 1, padding: '1.1rem', background: palette.navy, color: '#fff', border: 'none', borderRadius: '15px', fontWeight: '900', cursor: 'pointer' }}>UPDATE MASTER RECORD</button>
                                <button type="button" onClick={() => setEditingProduct(null)} style={{ flex: 0.5, padding: '1.1rem', background: '#f1f5f9', color: palette.navy, border: 'none', borderRadius: '15px', fontWeight: '800', cursor: 'pointer' }}>CANCEL</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

const DetailModal = ({ item, onClose }) => {
    const palette = { navy: '#1e3a8a', lightBlue: '#3b82f6', orange: '#f97316', bg: '#f8fafc', text: '#1e293b', subText: '#64748b' };
    const planConfig = {
        'Free': { color: '#94a3b8', bg: '#f1f5f9', icon: faUserTie },
        'Standard': { color: '#3b82f6', bg: '#eff6ff', icon: faCheckCircle },
        'Advanced': { color: '#a855f7', bg: '#f5f3ff', icon: faChartLine },
        'Premium': { color: '#f59e0b', bg: '#fffbeb', icon: faCrown }
    };
    if (!item) return null;
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000, backdropFilter: 'blur(5px)' }}>
            <div style={{ background: '#fff', width: '90%', maxWidth: '700px', borderRadius: '30px', padding: '2.5rem', position: 'relative', boxShadow: '0 20px 60px rgba(0,0,0,0.2)', maxHeight: '90vh', overflowY: 'auto' }}>
                <button onClick={onClose} style={{ position: 'absolute', right: '25px', top: '25px', background: '#f8fafc', border: 'none', width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer', color: palette.subText }}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '2rem' }}>
                    <div style={{ background: palette.navy, color: '#fff', width: '60px', height: '60px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                        <FontAwesomeIcon icon={item.companyName ? faBuilding : faHandshake} />
                    </div>
                    <div>
                        <h2 style={{ margin: 0, color: palette.navy }}>{item.name}</h2>
                        <p style={{ margin: 0, color: palette.subText }}>{item.companyName || 'Buyer Inquiry'}</p>
                    </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    <div>
                        <label style={{ fontSize: '0.75rem', fontWeight: '800', color: palette.lightBlue }}>CONTACT INFO</label>
                        <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <div style={{ fontSize: '0.95rem' }}><FontAwesomeIcon icon={faEnvelope} style={{ width: '25px', opacity: 0.5 }} /> {item.email}</div>
                            <div style={{ fontSize: '1.05rem', fontWeight: '700' }}><FontAwesomeIcon icon={faPhoneAlt} style={{ width: '25px', opacity: 0.5 }} /> {item.mobileNumber}</div>
                        </div>
                    </div>
                    <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '20px' }}>
                        <label style={{ fontSize: '0.75rem', fontWeight: '900', color: palette.navy }}>STATUS</label>
                        <div style={{ marginTop: '12px', fontWeight: 'bold' }}>{item.plan || 'Free'} Member</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
