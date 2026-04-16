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
    faCalendarAlt
} from '@fortawesome/free-solid-svg-icons';
import { 
    BarChart, 
    Bar, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend, 
    ResponsiveContainer,
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
    const [allSellers, setAllSellers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedItem, setSelectedItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const { userId, userRole, setUserId, setUserRole } = useAuth();
    const navigate = useNavigate();

    const palette = {
        navy: '#1e3a8a',
        lightBlue: '#38bdf8',
        orange: '#f97316',
        bg: '#f1f5f9',
        cardBg: '#ffffff',
        text: '#1e293b',
        subText: '#64748b',
        danger: '#ef4444',
        success: '#10b981',
        premium: '#8b5cf6',
        crown: '#fbbf24'
    };

    const planConfig = {
        'Free': { color: '#94a3b8', bg: '#f1f5f9', icon: faUserTie },
        'Standard': { color: '#3b82f6', bg: '#eff6ff', icon: faCheckCircle },
        'Advanced': { color: '#a855f7', bg: '#f5f3ff', icon: faChartLine },
        'Premium': { color: '#f59e0b', bg: '#fffbeb', icon: faCrown }
    };

    useEffect(() => {
        if (!userId || userRole !== 'admin') {
            navigate('/admin-login');
            return;
        }

        const fetchData = async () => {
            try {
                const [statsRes, buyersRes, sellersRes, analysisRes] = await Promise.all([
                    axios.get('http://localhost:3005/admin/stats'),
                    axios.get('http://localhost:3005/buyers'),
                    axios.get('http://localhost:3005/by-role/seller'),
                    axios.get('http://localhost:3005/admin/analysis')
                ]);

                setStats(statsRes.data.stats);
                setRecentActivity(statsRes.data.recentActivity || { sellers: [], buyers: [] });
                setAllBuyers(buyersRes.data.buyers || []);
                setAllSellers(sellersRes.data.users || []);
                setAnalysisData(analysisRes.data.analysis || []);
                setStateDistribution(analysisRes.data.stateDistribution || []);
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
            await axios.put('http://localhost:3005/update-plan', { userId: sellerId, plan: newPlan });
            setAllSellers(allSellers.map(s => s._id === sellerId ? { ...s, plan: newPlan } : s));
            const statsRes = await axios.get('http://localhost:3005/admin/stats');
            setStats(statsRes.data.stats);
        } catch (err) {
            alert('Failed to update plan');
        }
    };

    const handleDeleteBuyer = async (id) => {
        if (window.confirm('Permanently delete this buyer lead?')) {
            try {
                await axios.delete(`http://localhost:3005/delete-buyer/${id}`);
                setAllBuyers(allBuyers.filter(b => b._id !== id));
                const statsRes = await axios.get('http://localhost:3005/admin/stats');
                setStats(statsRes.data.stats);
            } catch (err) {
                alert('Deletion failed');
            }
        }
    };

    const handleDeleteSeller = async (id) => {
        if (window.confirm('Permanently delete this seller account?')) {
            try {
                await axios.delete(`http://localhost:3005/delete-user/${id}`);
                setAllSellers(allSellers.filter(s => s._id !== id));
                const statsRes = await axios.get('http://localhost:3005/admin/stats');
                setStats(statsRes.data.stats);
            } catch (err) {
                alert('Deletion failed');
            }
        }
    };

    const filteredBuyers = allBuyers.filter(b => 
        b.name?.toLowerCase().includes(searchTerm.toLowerCase()) || 
        b.productOrService?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.city?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredSellers = allSellers.filter(s => 
        s.name?.toLowerCase().includes(searchTerm.toLowerCase()) || 
        s.companyName?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const selectedMonthStr = selectedDate.toLocaleString('default', { month: 'short', year: 'numeric' });
    const selectedMonthData = analysisData.find(d => d.month === selectedMonthStr) || { free: 0, standard: 0, advanced: 0, premium: 0, buyers: 0 };

    if (loading) return (
        <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', background: palette.bg }}>
            <div style={{ color: palette.navy, fontSize: '1.2rem', fontWeight: 'bold' }}>Constructing Dashboard...</div>
        </div>
    );

    const DetailModal = ({ item, onClose }) => {
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
                                <div style={{ fontSize: '0.95rem', color: palette.text }}><FontAwesomeIcon icon={faEnvelope} style={{ width: '25px', opacity: 0.5 }} /> {item.email}</div>
                                <div style={{ fontSize: '1.05rem', fontWeight: '700', color: palette.navy }}><FontAwesomeIcon icon={faPhoneAlt} style={{ width: '25px', opacity: 0.5 }} /> {item.mobileNumber}</div>
                            </div>
                        </div>
                        <div>
                            <label style={{ fontSize: '0.75rem', fontWeight: '800', color: palette.orange }}>LOCATION DETAILS</label>
                            <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <div style={{ fontSize: '0.95rem' }}><FontAwesomeIcon icon={faGlobe} style={{ width: '25px', opacity: 0.5 }} /> {item.city || item.cityname || 'Not Specified'}</div>
                                <div style={{ fontSize: '0.95rem', color: palette.subText }}><FontAwesomeIcon icon={faMapMarkerAlt} style={{ width: '25px', opacity: 0.5 }} /> {item.statename || 'Global Region'}</div>
                            </div>
                        </div>

                        {/* MEMBERSHIP & BUSINESS SECTION */}
                        <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
                            <label style={{ fontSize: '0.75rem', fontWeight: '900', color: palette.navy, letterSpacing: '0.5px' }}>MEMBERSHIP STATUS</label>
                            <div style={{ marginTop: '12px' }}>
                                {item.plan ? (
                                    <div style={{ background: planConfig[item.plan]?.bg || '#fff', color: planConfig[item.plan]?.color || palette.navy, padding: '8px 15px', borderRadius: '12px', fontSize: '1rem', fontWeight: '900', display: 'inline-flex', alignItems: 'center', gap: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                        <FontAwesomeIcon icon={planConfig[item.plan]?.icon || faCheckCircle} />
                                        {item.plan.toUpperCase()} MEMBERSHIP
                                    </div>
                                ) : (
                                    <div style={{ background: '#fff', color: palette.lightBlue, padding: '8px 15px', borderRadius: '12px', fontSize: '1rem', fontWeight: '900', display: 'inline-flex', alignItems: 'center', gap: '10px', border: `1px solid ${palette.lightBlue}22` }}>
                                        <FontAwesomeIcon icon={faHandshake} />
                                        BUYER INQUIRY
                                    </div>
                                )}
                            </div>
                        </div>

                        <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
                            <label style={{ fontSize: '0.75rem', fontWeight: '900', color: '#6366f1', letterSpacing: '0.5px' }}>VERIFICATION DATA</label>
                            <div style={{ marginTop: '12px' }}>
                                {item.gstNumber ? (
                                    <div style={{ fontSize: '1rem', fontWeight: '700', color: '#4338ca' }}>
                                        <FontAwesomeIcon icon={faIdCard} style={{ marginRight: '10px' }} />
                                        GST: {item.gstNumber}
                                    </div>
                                ) : (
                                    <div style={{ color: palette.subText, fontSize: '0.9rem', fontStyle: 'italic' }}>No Tax ID / GST provided</div>
                                )}
                            </div>
                        </div>

                        <div style={{ gridColumn: 'span 2' }}>
                            <label style={{ fontSize: '0.75rem', fontWeight: '800', color: palette.navy }}>BUSINESS CATEGORY & DESCRIPTION</label>
                            <div style={{ marginTop: '12px', padding: '20px', background: '#f1f5f9', borderRadius: '20px', fontSize: '0.95rem', lineHeight: '1.7', color: palette.text }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', color: palette.navy, fontWeight: '800' }}>
                                    <FontAwesomeIcon icon={faBoxOpen} style={{ color: palette.lightBlue }} />
                                    Categorized: {item.productOrService}
                                </div>
                                <div style={{ opacity: 0.8 }}>
                                    {item.productDescription || 'Currently, no detailed business description or requirement specification has been provided by the user for this account.'}
                                </div>
                            </div>
                        </div>

                        <div style={{ gridColumn: 'span 2', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', borderTop: '1px solid #f1f5f9', paddingTop: '1.5rem' }}>
                            <div style={{ fontSize: '0.85rem', color: palette.subText, fontWeight: '600' }}>
                                <FontAwesomeIcon icon={faClock} style={{ marginRight: '10px' }} />
                                Joined on: {item.createdAt ? new Date(item.createdAt).toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' }) : 'Legacy Portfolio Record'}
                            </div>
                            <div style={{ fontSize: '0.75rem', background: palette.bg, padding: '5px 12px', borderRadius: '20px', color: palette.subText }}>
                                Record ID: {item._id}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

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
                        { id: 'buyers', label: 'Buyers', icon: faHandshake },
                        { id: 'sellers', label: 'Sellers', icon: faUserTie }
                    ].map(tab => (
                        <button key={tab.id} onClick={() => { setActiveTab(tab.id); setSearchTerm(''); }} style={{ padding: '0.8rem 1.2rem', borderRadius: '12px', border: 'none', background: activeTab === tab.id ? 'rgba(255,255,255,0.1)' : 'transparent', color: activeTab === tab.id ? '#fff' : 'rgba(255,255,255,0.5)', fontWeight: '600', textAlign: 'left', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <FontAwesomeIcon icon={tab.icon} style={{ color: activeTab === tab.id ? palette.orange : 'inherit' }} /> {tab.label}
                        </button>
                    ))}
                </nav>
                <button onClick={handleLogout} style={{ padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'transparent', color: '#ff4d4d', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                    <FontAwesomeIcon icon={faSignOutAlt} /> LOGOUT
                </button>
            </aside>

            <main style={{ flex: 1, marginLeft: '280px', padding: '3rem 4rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: '800', color: palette.navy, margin: 0 }}>{activeTab.toUpperCase()}</h2>
                    {activeTab !== 'overview' && (
                        <div style={{ width: '400px', position: 'relative' }}>
                            <FontAwesomeIcon icon={faSearch} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: palette.subText }} />
                            <input type="text" placeholder={`Search ${activeTab}...`} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{ width: '100%', padding: '0.8rem 1rem 0.8rem 3rem', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none' }} />
                        </div>
                    )}
                </div>

                {activeTab === 'overview' && (
                    <div>
                        {/* TODAY'S PERFORMANCE (Priority) */}
                        <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem' }}>
                            <div style={{ flex: 1, background: `linear-gradient(135deg, ${palette.navy} 0%, #1e40af 100%)`, color: '#fff', padding: '2rem', borderRadius: '25px', boxShadow: '0 10px 30px rgba(30,58,138,0.2)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <div style={{ fontSize: '0.9rem', opacity: 0.8, fontWeight: '600' }}>TODAY'S NEW BUYERS</div>
                                        <div style={{ fontSize: '3rem', fontWeight: '900' }}>+{stats.todayBuyers}</div>
                                    </div>
                                    <div style={{ background: 'rgba(255,255,255,0.1)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                                        <FontAwesomeIcon icon={faCalendarDay} />
                                    </div>
                                </div>
                            </div>
                            <div style={{ flex: 1, background: `linear-gradient(135deg, ${palette.orange} 0%, #ea580c 100%)`, color: '#fff', padding: '2rem', borderRadius: '25px', boxShadow: '0 10px 30px rgba(249,115,22,0.2)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <div style={{ fontSize: '0.9rem', opacity: 0.8, fontWeight: '600' }}>TODAY'S NEW SELLERS</div>
                                        <div style={{ fontSize: '3rem', fontWeight: '900' }}>+{stats.todaySellers}</div>
                                    </div>
                                    <div style={{ background: 'rgba(255,255,255,0.1)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                                        <FontAwesomeIcon icon={faChartLine} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* TOTAL STATS SECTION */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem', marginBottom: '3rem' }}>
                            <div style={{ background: '#fff', padding: '2rem', borderRadius: '25px', boxShadow: '0 5px 20px rgba(0,0,0,0.02)', textAlign: 'center' }}>
                                <div style={{ color: palette.subText, fontSize: '0.8rem', fontWeight: '800' }}>TOTAL DATABASE</div>
                                <div style={{ fontSize: '2.2rem', fontWeight: '900', color: palette.navy }}>{stats.totalSellers + stats.totalBuyers}</div>
                            </div>
                            <div style={{ background: '#fff', padding: '2rem', borderRadius: '25px', boxShadow: '0 5px 20px rgba(0,0,0,0.02)', textAlign: 'center' }}>
                                <div style={{ color: palette.subText, fontSize: '0.8rem', fontWeight: '800' }}>TOTAL PRODUCTS</div>
                                <div style={{ fontSize: '2.2rem', fontWeight: '900', color: palette.success }}>{stats.totalProducts}</div>
                            </div>
                            <div style={{ background: '#fff', padding: '2rem', borderRadius: '25px', boxShadow: '0 5px 20px rgba(0,0,0,0.02)', textAlign: 'center' }}>
                                <div style={{ color: palette.subText, fontSize: '0.8rem', fontWeight: '800' }}>TOTAL SELLERS</div>
                                <div style={{ fontSize: '2.2rem', fontWeight: '900', color: palette.orange }}>{stats.totalSellers}</div>
                            </div>
                        </div>

                        {/* MEMBERSHIP BREAKDOWN */}
                        <div style={{ background: '#fff', padding: '2.5rem', borderRadius: '30px', boxShadow: '0 5px 25px rgba(0,0,0,0.03)', marginBottom: '3rem' }}>
                            <h3 style={{ margin: '0 0 2rem 0', color: palette.navy, fontSize: '1.2rem', fontWeight: '800' }}>Subscription Tier Analysis</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
                                {['Premium', 'Advanced', 'Standard', 'Free'].map((tier, idx) => {
                                    const config = planConfig[tier];
                                    const count = stats.breakdown[tier.toLowerCase()] || 0;
                                    return (
                                        <div key={idx} style={{ textAlign: 'center', background: config.bg, padding: '1.5rem', borderRadius: '20px' }}>
                                            <FontAwesomeIcon icon={config.icon} style={{ color: config.color, fontSize: '1.2rem', marginBottom: '10px' }} />
                                            <div style={{ fontSize: '0.75rem', fontWeight: '800', color: config.color }}>{tier.toUpperCase()}</div>
                                            <div style={{ fontSize: '1.8rem', fontWeight: '900', color: palette.navy }}>{count}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* RECENT ACTIVITY LISTS */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div style={{ background: '#fff', padding: '2rem', borderRadius: '25px', boxShadow: '0 5px 20px rgba(0,0,0,0.02)' }}>
                                <h3 style={{ margin: '0 0 1.5rem 0', fontSize: '1.1rem', color: palette.navy }}>Recent Real-time Sellers</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {recentActivity.sellers.slice(0, 3).map(s => (
                                        <div key={s._id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: '#f8fafc', borderRadius: '12px' }}>
                                            <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>{s.name}</div>
                                            <div style={{ fontSize: '0.7rem', background: palette.navy + '11', color: palette.navy, padding: '3px 8px', borderRadius: '6px' }}>{s.plan}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div style={{ background: '#fff', padding: '2rem', borderRadius: '25px', boxShadow: '0 5px 20px rgba(0,0,0,0.02)' }}>
                                <h3 style={{ margin: '0 0 1.5rem 0', fontSize: '1.1rem', color: palette.navy }}>Recent Real-time Buyers</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {recentActivity.buyers.slice(0, 3).map(b => (
                                        <div key={b._id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: '#f8fafc', borderRadius: '12px' }}>
                                            <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>{b.name}</div>
                                            <div style={{ fontSize: '0.75rem', color: palette.subText }}>{b.city}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'analysis' && (
                    <div style={{ animation: 'fadeIn 0.5s ease', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        
                        {/* TOTAL DISTRIBUTION SUMMARY */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
                            {['Free', 'Standard', 'Advanced', 'Premium'].map(tier => (
                                <div key={tier} style={{ background: '#fff', padding: '1.5rem', borderRadius: '25px', boxShadow: '0 5px 20px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', borderBottom: `4px solid ${planConfig[tier]?.bg || '#eee'}` }}>
                                    <span style={{ fontSize: '0.8rem', fontWeight: '700', color: palette.subText, textTransform: 'uppercase' }}>{tier} Members</span>
                                    <h2 style={{ margin: 0, color: palette.navy, fontSize: '1.8rem' }}>{stats.breakdown[tier.toLowerCase()] || 0}</h2>
                                    <div style={{ fontSize: '0.7rem', color: planConfig[tier]?.color, fontWeight: '900', background: planConfig[tier]?.bg + '22', padding: '4px 10px', borderRadius: '8px' }}>
                                        TOTAL ACTIVE
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {/* TOP ROW: MAP & CALENDAR */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2rem' }}>
                            <div style={{ background: '#fff', padding: '2.5rem', borderRadius: '30px', boxShadow: '0 10px 40px rgba(0,0,0,0.03)', position: 'relative' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                                    <div>
                                        <h3 style={{ margin: 0, color: palette.navy, fontSize: '1.3rem', fontWeight: '900' }}>Market Density Map</h3>
                                        <p style={{ margin: '5px 0 0 0', fontSize: '0.8rem', color: palette.subText }}>State-wise Seller & Buyer Distribution</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '10px 15px', background: '#f8fafc', borderRadius: '15px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: palette.navy }}></div>
                                            <span style={{ fontSize: '0.7rem', fontWeight: '700' }}>SELLERS</span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: palette.orange }}></div>
                                            <span style={{ fontSize: '0.7rem', fontWeight: '700' }}>BUYERS</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div style={{ height: '500px', background: '#fdfdfd', borderRadius: '20px', position: 'relative' }}>
                                    <ResponsiveContainer width="100%" height="100%">
                                        <ComposableMap
                                            projection="geoMercator"
                                            projectionConfig={{
                                                scale: 800,
                                                center: [82, 22]
                                            }}
                                            style={{ width: "100%", height: "100%" }}
                                        >
                                            <Geographies geography={INDIA_TOPO_JSON}>
                                                {({ geographies }) =>
                                                    geographies.map((geo) => {
                                                        const stateName = geo.properties.NAME_1?.toLowerCase();
                                                        const stateData = stateDistribution.find(s => s.state === stateName);
                                                        const sellerCount = stateData ? stateData.sellers : 0;
                                                        
                                                        return (
                                                            <Geography
                                                                key={geo.rsmKey}
                                                                geography={geo}
                                                                fill={sellerCount > 0 ? `rgba(30, 58, 138, ${Math.min(0.2 + (sellerCount/20), 1)})` : "#f1f5f9"}
                                                                stroke="#cbd5e1"
                                                                strokeWidth={0.5}
                                                                style={{
                                                                    default: { outline: "none" },
                                                                    hover: { fill: palette.orange, outline: "none", cursor: 'pointer' },
                                                                    pressed: { outline: "none" }
                                                                }}
                                                            />
                                                        );
                                                    })
                                                }
                                            </Geographies>
                                        </ComposableMap>
                                    </ResponsiveContainer>
                                    
                                    {/* Stats overlay */}
                                    <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: 'rgba(255,255,255,0.9)', padding: '15px', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', backdropFilter: 'blur(10px)', border: '1px solid #e2e8f0', maxWidth: '200px' }}>
                                        <div style={{ fontSize: '0.7rem', fontWeight: '900', color: palette.navy, marginBottom: '10px' }}>TOP STATES</div>
                                        {stateDistribution.sort((a,b) => b.sellers - a.sellers).slice(0, 3).map((st, i) => (
                                            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '5px' }}>
                                                <span style={{ fontWeight: '600', textTransform: 'capitalize' }}>{st.state}</span>
                                                <span style={{ color: palette.navy, fontWeight: '800' }}>{st.sellers}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div style={{ background: '#fff', padding: '2.5rem', borderRadius: '30px', boxShadow: '0 10px 40px rgba(0,0,0,0.03)' }}>
                                    <h3 style={{ margin: '0 0 1.5rem 0', color: palette.navy, fontSize: '1.1rem', fontWeight: '900' }}>Filter by Period</h3>
                                    <div style={{ background: '#f8fafc', padding: '15px', borderRadius: '25px', border: '1px solid #e2e8f0' }}>
                                        <Calendar 
                                            onChange={setSelectedDate} 
                                            value={selectedDate}
                                            view="month"
                                            maxDetail="year"
                                            className="custom-admin-calendar"
                                        />
                                        <div style={{ marginTop: '20px', padding: '15px', background: palette.navy, color: '#fff', borderRadius: '20px', textAlign: 'center' }}>
                                            <div style={{ fontSize: '0.7rem', opacity: 0.8, fontWeight: '700' }}>DATA FOR</div>
                                            <div style={{ fontSize: '1.2rem', fontWeight: '900' }}>{selectedMonthStr.toUpperCase()}</div>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ background: '#fff', padding: '2rem', borderRadius: '30px', boxShadow: '0 10px 40px rgba(0,0,0,0.03)', flex: 1 }}>
                                    <label style={{ fontSize: '0.7rem', fontWeight: '900', color: palette.navy, letterSpacing: '1px' }}>MONTHLY SNAPSHOT</label>
                                    <div style={{ marginTop: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                        <div style={{ background: '#f8fafc', padding: '15px', borderRadius: '20px' }}>
                                            <div style={{ fontSize: '0.65rem', color: palette.subText, fontWeight: '800' }}>NEW SELLERS</div>
                                            <div style={{ fontSize: '1.5rem', fontWeight: '900', color: palette.navy }}>{selectedMonthData.free + selectedMonthData.standard + selectedMonthData.advanced + selectedMonthData.premium}</div>
                                        </div>
                                        <div style={{ background: palette.orange + '11', padding: '15px', borderRadius: '20px' }}>
                                            <div style={{ fontSize: '0.65rem', color: palette.orange, fontWeight: '800' }}>NEW BUYERS</div>
                                            <div style={{ fontSize: '1.5rem', fontWeight: '900', color: palette.orange }}>{selectedMonthData.buyers}</div>
                                        </div>
                                        <div style={{ background: palette.premium + '11', padding: '15px', borderRadius: '20px', gridColumn: 'span 2' }}>
                                            <div style={{ fontSize: '0.65rem', color: palette.premium, fontWeight: '800' }}>PREMIUM RATIO</div>
                                            <div style={{ fontSize: '1.2rem', fontWeight: '900', color: palette.navy }}>
                                                {Math.round((selectedMonthData.premium / (selectedMonthData.free + selectedMonthData.standard + selectedMonthData.advanced + selectedMonthData.premium || 1)) * 100)}% Conversion
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* TREND CHARTS */}
                        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
                            <div style={{ background: '#fff', padding: '2.5rem', borderRadius: '30px', boxShadow: '0 10px 40px rgba(0,0,0,0.03)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                                    <h3 style={{ margin: 0, color: palette.navy, fontSize: '1.2rem', fontWeight: '800' }}>Registration Trends</h3>
                                    <div style={{ fontSize: '0.8rem', color: palette.subText, display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <FontAwesomeIcon icon={faCalendarAlt} /> MONTHLY VISUALIZATION
                                    </div>
                                </div>
                                <div style={{ height: '350px', width: '100%' }}>
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={analysisData}>
                                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: palette.subText }} dy={10} />
                                            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: palette.subText }} />
                                            <Tooltip 
                                                cursor={{ fill: '#f8fafc' }}
                                                contentStyle={{ borderRadius: '15px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', padding: '15px' }}
                                            />
                                            <Legend verticalAlign="top" height={36} iconType="circle" />
                                            <Bar dataKey="free" name="Free" fill="#94a3b8" radius={[5, 5, 0, 0]} />
                                            <Bar dataKey="standard" name="Standard" fill="#3b82f6" radius={[5, 5, 0, 0]} />
                                            <Bar dataKey="advanced" name="Advanced" fill="#a855f7" radius={[5, 5, 0, 0]} />
                                            <Bar dataKey="premium" name="Premium" fill="#f59e0b" radius={[5, 5, 0, 0]} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            <div style={{ background: `linear-gradient(135deg, ${palette.orange} 0%, #ea580c 100%)`, color: '#fff', padding: '2.5rem', borderRadius: '30px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ fontSize: '0.9rem', fontWeight: '800', opacity: 0.9 }}>TOWARDS PREMIUM TARGET</div>
                                <div style={{ fontSize: '3rem', fontWeight: '900' }}>78%</div>
                                <div style={{ background: 'rgba(255,255,255,0.2)', height: '10px', borderRadius: '5px', overflow: 'hidden' }}>
                                    <div style={{ width: '78%', height: '100%', background: '#fff' }}></div>
                                </div>
                                <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.8 }}>Current conversion rate from free to paid tiers across the entire platform.</p>
                            </div>
                        </div>

                    </div>
                )}

                {activeTab === 'buyers' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {filteredBuyers.map(item => (
                            <div key={item._id} style={{ background: '#fff', padding: '1.2rem 2rem', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '2rem', boxShadow: '0 2px 10px rgba(0,0,0,0.01)' }}>
                                <div style={{ width: '220px' }}>
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
                                <div style={{ display: 'flex', gap: '10px' }}>
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
                                        </div>
                                        <div style={{ display: 'flex', gap: '8px' }}>
                                            <button onClick={() => setSelectedItem(item)} style={{ background: '#f8fafc', border: 'none', width: '32px', height: '32px', borderRadius: '8px', cursor: 'pointer', color: palette.subText }}>
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
            </main>

            <DetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        </div>
    );
};

export default AdminDashboard;
