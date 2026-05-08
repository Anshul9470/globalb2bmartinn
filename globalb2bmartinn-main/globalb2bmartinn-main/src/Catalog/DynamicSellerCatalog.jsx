

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faGaugeHigh, 
    faShieldHalved, 
    faCommentDots, 
    faClipboardCheck, 
    faTruck, 
    faUserTie, 
    faShieldVirus,
    faEye,
    faLeaf,
    faTree,
    faShieldAlt,
    faGlobe
} from '@fortawesome/free-solid-svg-icons';
import './Catalog.css';

const DynamicSellerCatalog = ({ sellerId: propSellerId, refreshKey }) => {
    const { sellerId: paramSellerId } = useParams();
    const sellerId = propSellerId || paramSellerId;
    
    const [seller, setSeller] = useState(null);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeSection, setActiveSection] = useState('home'); // home, products, about, contact
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [activeTab, setActiveTab] = useState('specs'); // specs, details, shipping, profile

    const apiEndpoint = process.env.REACT_APP_API_ENDPOINT || "http://localhost:3005";

    useEffect(() => {
        const fetchData = async () => {
            if (!sellerId) return;
            try {
                // Fetch user/seller details
                const sellerRes = await axios.get(`${apiEndpoint}/login?id=${sellerId}`);
                setSeller(sellerRes.data.user);

                // Fetch products for this seller
                const productsRes = await axios.get(`${apiEndpoint}/products/${sellerId}`);
                let productList = [];
                
                // STRICT MODE: Only show products if they are specifically selected for the Catalog
                if (sellerRes.data.user?.featuredProductIds?.length > 0) {
                    const featuredIds = sellerRes.data.user.featuredProductIds.map(id => String(id));
                    productList = (productsRes.data?.products || []).filter(p => featuredIds.includes(String(p._id)));
                } else {
                    // If no featured IDs are set, we show an empty list or a specific "Catalog Subset"
                    // This prevents the Marketplace products from automatically leaking into the Catalog
                    productList = []; 
                }

                setProducts(productList);
                
                if (productList.length > 0) {
                    setSelectedProduct(productList[0]);
                }
                
                setLoading(false);
            } catch (err) {
                console.error("Error fetching catalog data:", err);
                setLoading(false);
            }
        };
        fetchData();
    }, [sellerId, apiEndpoint, refreshKey]);

    if (loading) return <div className="catalog-loading-screen"><div className="loader-dots"></div></div>;
    if (!seller) return <div className="catalog-error">Seller not found</div>;

    // Helper to resolve image URLs
    const getImgUrl = (path) => {
        if (!path) return 'https://via.placeholder.com/400x400?text=No+Image';
        // Handle nested arrays like [["path"]]
        let actualPath = path;
        while (Array.isArray(actualPath) && actualPath.length > 0) actualPath = actualPath[0];
        
        if (!actualPath || typeof actualPath !== 'string') return 'https://via.placeholder.com/400x400?text=Invalid+Image';
        if (actualPath.startsWith('http')) return actualPath;
        
        const cleanPath = actualPath.startsWith('/') ? actualPath : `/${actualPath}`;
        return `${apiEndpoint}${cleanPath.replace(/\\/g, '/')}`;
    };

    // Helper to safely get string from potentially nested arrays
    const safeGet = (val, fallback = '') => {
        if (!val) return fallback;
        let actual = val;
        while (Array.isArray(actual)) actual = actual[0];
        return actual || fallback;
    };

    const renderProductLayout = (product) => {
        const title = safeGet(product.title, 'Product Detail');
        const description = safeGet(product.description);
        const images = Array.isArray(product.images) ? product.images.flat(5) : [product.images];

        return (
            <div className="product-detail-view fade-in">
                <div className="detail-container">
                    {/* LEFT: GALLERY AREA */}
                    <div className="detail-visuals">
                        <div className="detail-main-img">
                            <img src={getImgUrl(images[0])} alt={title} />
                        </div>
                        <div className="detail-thumbs">
                            {images.slice(0, 5).map((img, i) => (
                                <div key={i} className={`detail-thumb-box ${i === 0 ? 'active' : ''}`}>
                                    <img src={getImgUrl(img)} alt="thumb" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: CONTENT AREA */}
                    <div className="detail-content">
                        <div className="detail-badge-row">
                            <span className="premium-sku-detail">SKU: {product.sku || (product._id ? product._id.substring(18).toUpperCase() : 'IND-2944-X')}</span>
                            <span className="inst-verified-pill">Verified Institutional Supplier</span>
                        </div>
                        
                        <h1 className="detail-title">{title}</h1>
                        <p className="detail-short-desc">
                            {description?.length > 200 ? description.substring(0, 200) + '...' : description}
                        </p>

                        <div className="detail-pricing-box">
                            <div className="pricing-grid">
                                <div className="price-primary">
                                    <span className="p-label">Price Range</span>
                                    <span className="p-value">${product.price || '142.00'} - ${parseFloat(product.price || 142) + 50}.00</span>
                                </div>
                                <div className="moq-info">
                                    <span className="p-label">Min. Order (MOQ)</span>
                                    <span className="p-value">{product.moq || '10'} {product.unit || 'Units'}</span>
                                </div>
                            </div>
                        </div>

                        <div className="detail-action-grid">
                            <button className="btn-detail-inquiry" onClick={() => setActiveSection('contact')}>
                                SEND FORMAL INQUIRY <FontAwesomeIcon icon={faShieldVirus} style={{ marginLeft: '10px', opacity: 0.5 }} />
                            </button>
                            <button className="btn-detail-quote" onClick={() => alert('Product added to quote list.')}>
                                ADD TO QUOTE
                            </button>
                        </div>

                        <div className="trust-strip">
                            <div className="trust-item">
                                <FontAwesomeIcon icon={faShieldHalved} className="t-icon" />
                                <span>Trade Assurance Protected</span>
                            </div>
                            <div className="trust-item">
                                <FontAwesomeIcon icon={faTruck} className="t-icon" />
                                <span>Door-to-Door Logistics</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="detail-bottom-section">
                    <div className="detail-tabs">
                        <button className="d-tab active">PRODUCT SPECIFICATIONS</button>
                        <button className="d-tab">COMPANY OVERVIEW</button>
                        <button className="d-tab">SHIPPING & PAYMENT</button>
                    </div>
                    <div className="d-tab-content">
                        <div className="specs-layout">
                            <div className="specs-info">
                                <h3>Technical Data Sheet</h3>
                                <p>{description || 'High-grade industrial solution designed for professional environments.'}</p>
                                <div style={{ marginTop: '30px' }}>
                                    <table className="specs-table-premium">
                                        <tbody>
                                            {product.specifications?.length > 0 ? product.specifications.map((s, i) => (
                                                <tr key={i}>
                                                    <td>{s.key}</td>
                                                    <td>{s.value}</td>
                                                </tr>
                                            )) : (
                                                <>
                                                    <tr><td>Compliance</td><td>ISO 9001:2015</td></tr>
                                                    <tr><td>Material</td><td>Industrial Grade Composite</td></tr>
                                                    <tr><td>Lead Time</td><td>15-20 Business Days</td></tr>
                                                </>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="specs-sidebar">
                                <div className="seller-mini-card">
                                    <div className="s-mini-logo">
                                        {seller.sellerLogo ? <img src={getImgUrl(seller.sellerLogo)} alt="logo" /> : seller.companyName?.charAt(0)}
                                    </div>
                                    <div className="s-mini-info">
                                        <h4>{seller.companyName}</h4>
                                        <span>📍 {seller.cityname || 'Verified Supplier'}</span>
                                    </div>
                                    <button className="btn-mini-contact" onClick={() => setActiveSection('contact')}>CONTACT SUPPLIER</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const renderHome = () => (
        <div className="catalog-home-wrapper stitch-catalog-root fade-in">
            <div className="home-hero-dense" style={{ 
                backgroundImage: seller.catalogHeroImage ? `linear-gradient(rgba(0, 48, 73, 0.4), rgba(0, 48, 73, 0.6)), url(${getImgUrl(seller.catalogHeroImage)})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="hero-inner">
                    <h1 style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>{seller.catalogHeroTitle || 'Connecting Global Supply Chains'}</h1>
                    <p style={{ textShadow: '0 1px 5px rgba(0,0,0,0.5)' }}>{seller.catalogHeroDescription || `Verified Institutional Grade Products from ${seller.companyName}`}</p>
                    <div className="stats-grid-dense">
                        <div className="stat-item-dense">
                            <span className="st-num">{seller.yearsInBusiness || '10+'}</span>
                            <span className="st-label">Excellence Yrs</span>
                        </div>
                        <div className="stat-item-dense">
                            <span className="st-num">{products.length}</span>
                            <span className="st-label">Product SKU</span>
                        </div>
                        <div className="stat-item-dense">
                            <span className="st-num">{seller.responseRate || '99%'}</span>
                            <span className="st-label">Response Rate</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Section */}
            <div className="why-choose-section">
                <div className="why-choose-container">
                    <h2 className="why-choose-title">Why Choose {seller.companyName || 'GlobalB2B Mart'}?</h2>
                    <div className="why-choose-grid">
                        <div className="why-card">
                            <div className="why-icon-box blue">
                                <FontAwesomeIcon icon={faShieldVirus} />
                            </div>
                            <h3 className="why-card-title">Buyer Protection</h3>
                            <p className="why-card-text">Secured payment escrow and refund guarantees for non-compliant orders or missed deadlines.</p>
                        </div>
                        <div className="why-card">
                            <div className="why-icon-box purple">
                                <FontAwesomeIcon icon={faClipboardCheck} />
                            </div>
                            <h3 className="why-card-title">Factory Audits</h3>
                            <p className="why-card-text">On-site inspections and rigorous documentation checks for all "Premium Tier" manufacturers.</p>
                        </div>
                        <div className="why-card">
                            <div className="why-icon-box green">
                                <FontAwesomeIcon icon={faTruck} />
                            </div>
                            <h3 className="why-card-title">Global Logistics</h3>
                            <p className="why-card-text">Integrated freight forwarding, customs clearance, and door-to-door tracking for bulk orders.</p>
                        </div>
                        <div className="why-card">
                            <div className="why-icon-box navy">
                                <FontAwesomeIcon icon={faUserTie} />
                            </div>
                            <h3 className="why-card-title">Trade Consultants</h3>
                            <p className="why-card-text">Dedicated account managers to assist with sourcing, negotiation, and conflict resolution.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid-section-dense">
                <div className="catalog-grid-header">
                    <div className="grid-header-left">
                        <h2 className="grid-category-title">{seller.catalogSubtitle || 'Full Product Inventory'}</h2>
                        <p className="grid-result-count">Showing 1-{products.length} of {products.length} professional grade products</p>
                    </div>
                    <div className="grid-header-right">
                        <div className="sort-box">
                            <span>Sort by:</span>
                            <select className="sort-select">
                                <option>Newest</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="product-grid-dense">
                    {products.length > 0 ? products.map(p => (
                        <div key={p._id} className="card-premium" onClick={() => { setSelectedProduct(p); setActiveSection('product-detail'); }}>
                            <div className="premium-img-box">
                                <img src={getImgUrl(p.images)} alt={safeGet(p.title)} />
                            </div>
                            <div className="premium-card-body">
                                <div className="premium-sku">SKU: {p.sku || (p._id ? p._id.substring(18).toUpperCase() : 'IND-2944-X')}</div>
                                <h3 className="premium-title">{safeGet(p.title)}</h3>
                                <p className="premium-desc">
                                    {p.description ? (p.description.length > 90 ? p.description.substring(0, 90) + '...' : p.description) : 'High-performance grade product with professional specifications and industrial compliance...'}
                                </p>
                                <div className="premium-price-row">
                                    <span className="premium-price-val">${p.price || '142.00'}</span>
                                    <span className="premium-price-unit">/ {p.unit || 'unit'}</span>
                                </div>
                                <button className="premium-btn-quote" onClick={(e) => { e.stopPropagation(); alert('Added to inquiry list!'); }}>
                                    Add to Quote
                                </button>
                            </div>
                        </div>
                    )) : (
                        <div className="no-products-placeholder" style={{ gridColumn: '1/-1', padding: '100px 20px', textAlign: 'center', background: '#f8fafc', borderRadius: '30px', border: '2px dashed #e2e8f0' }}>
                            <h3 style={{ color: '#64748b' }}>Premium Catalog Curation in Progress</h3>
                            <p style={{ color: '#94a3b8' }}>Please select exclusive products from the Admin Panel to display them here.</p>
                        </div>
                    )}
                </div>

            </div>

            {/* Mission & Vision Section */}
            <div className="mission-vision-section">
                <div className="mission-vision-container">
                    <div className="mission-card">
                        <h3>Our Mission</h3>
                        <p>To democratize global trade by providing businesses of all sizes with the tools, security, and network necessary to scale efficiently. We believe in reducing the friction of international commerce through rigorous verification and seamless communication technology.</p>
                    </div>
                    <div className="vision-card">
                        <div className="vision-content">
                            <h3>Our Vision</h3>
                            <p>To become the world's most trusted digital infrastructure for industrial and commercial B2B transactions, where verification is the standard and transparency is absolute.</p>
                        </div>
                        <div className="vision-icon">
                            <FontAwesomeIcon icon={faEye} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

    const renderAbout = () => (
        <>
        <div className="about-section stitch-catalog-root fade-in" style={{ background: '#ffffff', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
            {/* CLEAN INSTITUTIONAL BACKGROUND */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'radial-gradient(#e2e8f0 1.2px, transparent 1.2px)', backgroundSize: '50px 50px', opacity: 0.3 }}></div>
                <div style={{ position: 'absolute', top: '20%', left: '-10%', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(21, 21, 125, 0.03) 0%, transparent 70%)', borderRadius: '50%' }}></div>
                <div style={{ position: 'absolute', bottom: '10%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(5, 150, 105, 0.03) 0%, transparent 70%)', borderRadius: '50%' }}></div>
            </div>

            <div className="product-main-container" style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <h1 style={{ fontSize: '72px', fontWeight: '900', color: '#f97316', textTransform: 'uppercase', letterSpacing: '-2px', lineHeight: 1, marginBottom: '10px' }}>
                        WELCOME TO {seller.companyName || seller.name || 'OUR COMPANY'}
                    </h1>
                    <div style={{ width: '200px', height: '4px', background: 'linear-gradient(to right, transparent, #f97316, transparent)', margin: '0 auto' }}></div>
                </div>

                <div style={{ width: '100%', marginBottom: '60px' }}>
                    <div style={{ padding: '80px 100px', background: 'rgba(248, 250, 252, 0.4)', borderRadius: '60px', border: '1px solid #e2e8f0', position: 'relative', overflow: 'hidden' }}>
                        {/* Huge Decorative Quote Marks in background */}
                        <div style={{ position: 'absolute', top: '-20px', left: '20px', fontSize: '200px', color: '#003049', opacity: 0.03, fontWeight: '900', lineHeight: 1 }}>&ldquo;</div>
                        <div style={{ position: 'absolute', bottom: '-80px', right: '20px', fontSize: '200px', color: '#003049', opacity: 0.03, fontWeight: '900', lineHeight: 1 }}>&rdquo;</div>

                        <p style={{ fontSize: '28px', lineHeight: '1.7', color: '#1e293b', fontWeight: '500', textAlign: 'center', whiteSpace: 'pre-wrap', position: 'relative', zIndex: 1 }}>
                            {seller.aboutUs || 'Leading manufacturer and exporter specializing in high-quality industrial solutions. We pride ourselves on institutional-grade manufacturing and global sourcing excellence. Our commitment to quality and innovation has made us a trusted partner in the global marketplace.'}
                        </p>
                    </div>
                </div>

                {/* INSTITUTIONAL TRUST GRID - ULTRA WIDE */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', width: '100%' }}>
                    {[
                        { icon: faShieldAlt, label: 'Quality Verification', val: 'Gold Member', color: '#ff8000' },
                        { icon: faGlobe, label: 'Global Footprint', val: '45+ Countries', color: '#003049' },
                        { icon: faClipboardCheck, label: 'Standardization', val: 'ISO Certified', color: '#ff8000' }
                    ].map((stat, i) => (
                        <div key={i} style={{ padding: '35px 20px', background: '#fff', borderRadius: '30px', border: '1px solid #f1f5f9', boxShadow: '0 15px 30px rgba(0,0,0,0.01)', textAlign: 'center' }}>
                            <div style={{ color: stat.color, fontSize: '22px', marginBottom: '15px' }}><FontAwesomeIcon icon={stat.icon} /></div>
                            <div style={{ fontSize: '11px', fontWeight: '900', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px' }}>{stat.label}</div>
                            <div style={{ fontSize: '28px', fontWeight: '900', color: '#003049' }}>{stat.val}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <style>{`
            .about-section { display: flex; align-items: center; justify-content: center; min-height: 80vh; }
        `}</style>
    </>
);

    const renderContact = () => (
        <div className="contact-section-vibrant stitch-catalog-root fade-in">
            <div className="contact-grid-lush">
                {/* LEFT COLUMN: INFO & TRUST */}
                <div className="contact-info-lush">
                    <div className="lush-title-area">
                        <h2>Scale Your Business With Global B2B Mart</h2>
                        <p>Our dedicated institutional team is ready to assist you with technical specifications, bulk pricing, and global logistics planning.</p>
                    </div>

                    <div className="info-cards-grid">
                        <div className="info-card-lush">
                            <div className="lush-icon-circle green">📧</div>
                            <label>Official Support</label>
                            <span style={{ fontSize: '13px' }}>sales@globalb2bmart.com<br/>feedback@globalb2bmart.com</span>
                        </div>
                        <div className="info-card-lush">
                            <div className="lush-icon-circle emerald">📞</div>
                            <label>Direct Hotline</label>
                            <span style={{ fontSize: '13px' }}>+91 8527116857 (Mobile)<br/>011-41029790 (Landline)</span>
                        </div>
                        <div className="info-card-lush">
                            <div className="lush-icon-circle lime">📍</div>
                            <label>Corporate Office</label>
                            <span style={{ fontSize: '12px', lineHeight: '1.4' }}>Plot No S-26, Ajay Enclave, Meenakshi Garden, Subhash Nagar, New Delhi, 110018</span>
                        </div>
                        <div className="info-card-lush">
                            <div className="lush-icon-circle green">🕒</div>
                            <label>Business Hours</label>
                            <span>Mon - Sat: 09:00 - 19:00 (IST)</span>
                        </div>
                    </div>

                    <div style={{ marginTop: '20px', padding: '30px', background: '#fffbeb', borderRadius: '24px', border: '1px dashed #ff8000' }}>
                        <h4 style={{ color: '#92400e', marginBottom: '10px' }}>Global Reach Support</h4>
                        <p style={{ fontSize: '14px', color: '#92400e', opacity: 0.8 }}>We support international shipping to over 120+ countries with full documentation and quality inspection reports (QIR) provided upon request.</p>
                    </div>
                </div>

                {/* RIGHT COLUMN: PREMIUM FORM */}
                <div className="form-container-lush">
                    <div className="lush-form">
                        <h3>Send a Formal Inquiry</h3>
                        <div className="lush-form-grid">
                            <div className="form-group-lush">
                                <label>Full Name</label>
                                <input type="text" placeholder="John Doe" />
                            </div>
                            <div className="form-group-lush">
                                <label>Company Name</label>
                                <input type="text" placeholder="Global Trade Corp" />
                            </div>
                            <div className="form-group-lush">
                                <label>Business Email</label>
                                <input type="email" placeholder="john@company.com" />
                            </div>
                            <div className="form-group-lush">
                                <label>Phone Number</label>
                                <input type="tel" placeholder="+1 234 567 890" />
                            </div>
                            <div className="form-group-lush full">
                                <label>Inquiry Type</label>
                                <select>
                                    <option>Bulk Purchase Quote</option>
                                    <option>Sample Request</option>
                                    <option>Logistics & Shipping Query</option>
                                    <option>Partnership Proposal</option>
                                </select>
                            </div>
                            <div className="form-group-lush full">
                                <label>Your Message / Requirements</label>
                                <textarea rows="4" placeholder="Please describe your requirements, including quantity and destination..."></textarea>
                            </div>
                            <div className="form-group-lush full" style={{ marginBottom: 0 }}>
                                <button className="btn-submit-lush">SUBMIT FORMAL INQUIRY</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="stitch-catalog-root">
            <header className="institutional-header">
                <div className="institutional-nav-container">
                    <div className="institutional-logo-area" onClick={() => setActiveSection('home')} style={{ cursor: 'pointer' }}>
                        <div className="institutional-logo-box">
                            {seller.sellerLogo ? (
                                <img src={getImgUrl(seller.sellerLogo)} alt="Logo" />
                            ) : (
                                seller.companyName?.charAt(0) || 'G'
                            )}
                        </div>
                        <div className="institutional-company-meta">
                            <span className="inst-company-name">{seller.companyName}</span>
                            <span className="inst-verification-tag">Institutional Member</span>
                        </div>
                    </div>
                    
                    <nav className="institutional-nav-menu">
                        <button className={activeSection === 'home' ? 'active' : ''} onClick={() => setActiveSection('home')}>
                            Home <FontAwesomeIcon icon={faGaugeHigh} className="inst-nav-icon" />
                        </button>
                        <button className={activeSection === 'products' ? 'active' : ''} onClick={() => setActiveSection('products')}>
                            Products <FontAwesomeIcon icon={faShieldHalved} className="inst-nav-icon" />
                        </button>
                        <button className={activeSection === 'about' ? 'active' : ''} onClick={() => setActiveSection('about')}>
                            About Us <FontAwesomeIcon icon={faCommentDots} className="inst-nav-icon" />
                        </button>
                        <button className={activeSection === 'contact' ? 'active' : ''} onClick={() => setActiveSection('contact')}>
                            Contact Us <FontAwesomeIcon icon={faShieldHalved} className="inst-nav-icon" />
                        </button>
                    </nav>

                    <div className="institutional-actions">
                        <button className="institutional-btn-inquiry" onClick={() => setActiveSection('contact')}>
                            SEND INQUIRY
                        </button>
                    </div>
                </div>
            </header>

            <main className="stitch-main-content" style={{ padding: '0 0 40px 0' }}>
                {activeSection === 'home' && renderHome()}
                {activeSection === 'product-detail' && renderProductLayout(selectedProduct)}
                {activeSection === 'products' && (
                    <div className="grid-section-dense">
                        <div className="catalog-grid-header">
                            <div className="grid-header-left">
                                <h2 className="grid-category-title">Full Product Inventory</h2>
                                <p className="grid-result-count">Showing 1-{products.length} of {products.length} professional grade products</p>
                            </div>
                            <div className="grid-header-right">
                                <div className="sort-box">
                                    <span>Sort by:</span>
                                    <select className="sort-select">
                                        <option>Newest</option>
                                        <option>Price: Low to High</option>
                                        <option>Price: High to Low</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="product-grid-dense">
                            {products.map(p => (
                                <div key={p._id} className="card-premium" onClick={() => { setSelectedProduct(p); setActiveSection('product-detail'); }}>
                                    <div className="premium-img-box">
                                        <img src={getImgUrl(p.images)} alt={safeGet(p.title)} />
                                    </div>
                                    <div className="premium-card-body">
                                        <div className="premium-sku">SKU: {p.sku || (p._id ? p._id.substring(18).toUpperCase() : 'IND-2944-X')}</div>
                                        <h3 className="premium-title">{safeGet(p.title)}</h3>
                                        <p className="premium-desc">
                                            {p.description ? (p.description.length > 90 ? p.description.substring(0, 90) + '...' : p.description) : 'High-performance grade product with professional specifications and industrial compliance...'}
                                        </p>
                                        <div className="premium-price-row">
                                            <span className="premium-price-val">${p.price || '142.00'}</span>
                                            <span className="premium-price-unit">/ {p.unit || 'unit'}</span>
                                        </div>
                                        <button className="premium-btn-quote" onClick={(e) => { e.stopPropagation(); alert('Added to inquiry list!'); }}>
                                            Add to Quote
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                )}
                {activeSection === 'about' && renderAbout()}
                {activeSection === 'contact' && renderContact()}
            </main>

            <footer className="stitch-footer-dense">
                <div className="footer-text">
                    © 2026 {seller.companyName}. All Rights Reserved. | Global Trade Authority Verified Supplier
                </div>
            </footer>
            <style>{`
                .stitch-catalog-root { font-family: 'Inter', sans-serif; }
                
                /* PRODUCT DETAIL VIEW */
                .product-detail-view {
                    max-width: 1400px;
                    margin: 40px auto;
                    padding: 0 40px;
                }

                .detail-container {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 60px;
                    margin-bottom: 80px;
                }

                .detail-visuals {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .detail-main-img {
                    width: 100%;
                    aspect-ratio: 1 / 1;
                    background: #f8fafc;
                    border-radius: 20px;
                    overflow: hidden;
                    border: 1px solid #f1f5f9;
                }

                .detail-main-img img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }

                .detail-thumbs {
                    display: flex;
                    gap: 15px;
                }

                .detail-thumb-box {
                    width: 80px;
                    height: 80px;
                    border-radius: 12px;
                    border: 1px solid #e2e8f0;
                    cursor: pointer;
                    overflow: hidden;
                    background: #fff;
                }

                .detail-thumb-box.active {
                    border-color: #003049;
                    border-width: 2px;
                }

                .detail-thumb-box img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .detail-content {
                    padding: 10px 0;
                }

                .detail-badge-row {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    margin-bottom: 20px;
                }

                .premium-sku-detail {
                    font-size: 13px;
                    font-weight: 700;
                    color: #94a3b8;
                    letter-spacing: 1px;
                }

                .inst-verified-pill {
                    font-size: 11px;
                    font-weight: 800;
                    color: #ff8000;
                    background: #fffbeb;
                    padding: 4px 12px;
                    border-radius: 100px;
                    text-transform: uppercase;
                }

                .detail-title {
                    font-size: 42px;
                    font-weight: 900;
                    color: #0f172a;
                    line-height: 1.1;
                    margin-bottom: 24px;
                }

                .detail-short-desc {
                    font-size: 16px;
                    line-height: 1.7;
                    color: #475569;
                    margin-bottom: 40px;
                }

                .detail-pricing-box {
                    background: #f8fafc;
                    border-radius: 24px;
                    padding: 30px;
                    border: 1px solid #f1f5f9;
                    margin-bottom: 40px;
                }

                .pricing-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 30px;
                }

                .p-label {
                    display: block;
                    font-size: 12px;
                    font-weight: 800;
                    color: #94a3b8;
                    text-transform: uppercase;
                    margin-bottom: 8px;
                }

                .p-value {
                    display: block;
                    font-size: 24px;
                    font-weight: 900;
                    color: #003049;
                }

                .detail-action-grid {
                    display: grid;
                    grid-template-columns: 1.5fr 1fr;
                    gap: 15px;
                    margin-bottom: 30px;
                }

                .btn-detail-inquiry {
                    background: #003049;
                    color: #fff;
                    border: none;
                    padding: 20px;
                    border-radius: 16px;
                    font-weight: 800;
                    font-size: 14px;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .btn-detail-quote {
                    background: #fff;
                    color: #003049;
                    border: 2px solid #003049;
                    padding: 20px;
                    border-radius: 16px;
                    font-weight: 800;
                    font-size: 14px;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .btn-detail-inquiry:hover { background: #ff8000; transform: translateY(-3px); }
                .btn-detail-quote:hover { background: #f8fafc; transform: translateY(-3px); }

                .trust-strip {
                    display: flex;
                    gap: 30px;
                    border-top: 1px solid #f1f5f9;
                    padding-top: 25px;
                }

                .trust-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 13px;
                    font-weight: 600;
                    color: #64748b;
                }

                .t-icon { color: #ff8000; }

                .detail-bottom-section {
                    margin-top: 60px;
                    border-top: 1px solid #f1f5f9;
                }

                .detail-tabs {
                    display: flex;
                    gap: 40px;
                    border-bottom: 1px solid #f1f5f9;
                    margin-bottom: 40px;
                }

                .d-tab {
                    background: none;
                    border: none;
                    padding: 25px 0;
                    font-size: 14px;
                    font-weight: 800;
                    color: #94a3b8;
                    cursor: pointer;
                    position: relative;
                }

                .d-tab.active {
                    color: #003049;
                }

                .d-tab.active::after {
                    content: '';
                    position: absolute;
                    bottom: -1px;
                    left: 0;
                    width: 100%;
                    height: 3px;
                    background: #003049;
                }

                .specs-layout {
                    display: grid;
                    grid-template-columns: 1fr 350px;
                    gap: 60px;
                }

                .specs-info h3 {
                    font-size: 24px;
                    font-weight: 900;
                    color: #1e293b;
                    margin-bottom: 15px;
                }

                .specs-table-premium {
                    width: 100%;
                    border-collapse: collapse;
                }

                .specs-table-premium td {
                    padding: 15px 0;
                    border-bottom: 1px solid #f1f5f9;
                    font-size: 14px;
                }

                .specs-table-premium td:first-child {
                    width: 200px;
                    color: #94a3b8;
                    font-weight: 700;
                    text-transform: uppercase;
                    font-size: 11px;
                }

                .specs-table-premium td:last-child {
                    color: #1e293b;
                    font-weight: 600;
                }

                .seller-mini-card {
                    background: #fff;
                    border: 1px solid #f1f5f9;
                    border-radius: 24px;
                    padding: 30px;
                    text-align: center;
                    box-shadow: 0 20px 50px rgba(15, 23, 42, 0.05);
                }

                .s-mini-logo {
                    width: 80px;
                    height: 80px;
                    background: #003049;
                    border-radius: 20px;
                    margin: 0 auto 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                    font-size: 32px;
                    font-weight: 900;
                    overflow: hidden;
                }

                .s-mini-logo img { width: 100%; height: 100%; object-fit: cover; }

                .s-mini-info h4 { font-size: 18px; font-weight: 800; color: #1e293b; margin-bottom: 5px; }
                .s-mini-info span { font-size: 13px; color: #94a3b8; font-weight: 600; display: block; margin-bottom: 25px; }

                .btn-mini-contact {
                    width: 100%;
                    padding: 15px;
                    border-radius: 12px;
                    border: none;
                    background: #f8fafc;
                    color: #003049;
                    font-weight: 800;
                    font-size: 12px;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .btn-mini-contact:hover { background: #003049; color: #fff; }
            `}</style>
        </div>
    );
};

export default DynamicSellerCatalog;
