import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './common.css';
import FullPageSkeleton from "../Components/FullPageSkeleton";
import "../Products/MarketplacePremium.css";

const apiEndpoint = 'http://localhost:5000'; // Update this if needed

const VegetableSupplier = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Fetch products specifically for Agriculture/Vegetables category
                const res = await axios.get(`${apiEndpoint}/products/category/Agriculture`);
                setProducts(res.data);
            } catch (err) {
                console.error("Failed to fetch products:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="marketplace-container">
                <FullPageSkeleton />
            </div>
        );
    }
    return (
        <div className="main-box">
            <aside>
                <div className="flt-box-wrap">
                    <div className="flt-box mb-0 flt-head">Filters By</div>
                    <div className="flt-box bdrt-0">
                        <p className="flt-title">
                            Related Categories
                        </p>
                        <div className="flt-content">
                            <ul className="flt-list cust-scroll">
                                <li><Link to="#">Fresh Vegetables</Link></li>
                                <li><Link to="#">Organic Vegetables</Link></li>
                                <li><Link to="#">Leafy Greens</Link></li>
                                <li><Link to="#">Root Vegetables</Link></li>
                                <li><Link to="#">Fruits</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flt-box">
                        <p className="flt-title">
                            By State
                        </p>
                        <div className="flt-content">
                            <div className="flt-search">
                                <input type="text" name="state_id" placeholder="Search State" id="state-search-input" />
                            </div>
                            <ul className="flt-list cust-scroll" id="state-lists">
                                <li><Link to="#">All India</Link></li>
                                <li><Link to="#">Tamil Nadu</Link></li>
                                <li><Link to="#">Karnataka</Link></li>
                                <li><Link to="#">Andhra Pradesh</Link></li>
                                <li><Link to="#">Kerala</Link></li>
                                <li><Link to="#">Maharashtra</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </aside>
            <main>
                <section className="section">
                    <p className="sect-title">Explore by Categories</p>
                    <div className="horprd expcatg" id="expcatg">
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/vegi1.jpeg" width={55} height={55} alt="Fresh Vegetables" />
                                    </figure>
                                    <p className="title">Fresh Vegetables</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/veg2.jpeg" width={55} height={55} alt="Organic Vegetables" />
                                    </figure>
                                    <p className="title">Organic Vegetables</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/veg3.jpeg" width={55} height={55} alt="Leafy Greens" />
                                    </figure>
                                    <p className="title">Leafy Greens</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/veg4.jpeg" width={55} height={55} alt="Root Vegetables" />
                                    </figure>
                                    <p className="title">Root Vegetables</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/veg5.jpeg" width={55} height={55} alt="Fruits" />
                                    </figure>
                                    <p className="title">Fruits</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
                <ul className="classfied-wrap">
                    {products.length > 0 ? products.map((item, index) => (
                        <li key={index}>
                            <div className="classified">
                                <div className="prd-info">
                                    <div className="prd-box">
                                        {item.images?.[0] ? (
                                            <img src={`${apiEndpoint}${encodeURI(item.images[0].replace(/\\/g, '/'))}`} alt={Array.isArray(item.title) ? item.title[0] : item.title} width={250} height={250} />
                                        ) : (
                                            <div style={{ width: 250, height: 250, background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>No Image</div>
                                        )}
                                    </div>
                                </div>
                                <div className="cinfo">
                                    <div className="cbox">
                                        <figure>
                                            <span className="cmp-year">{item.experience || '1 YRS'}</span>
                                        </figure>
                                        <div className="cboxr">
                                            <Link to="#" target="_blank"><h4 className="title">{item.seller?.companyName || item.seller?.name || 'Private Seller'}</h4></Link>
                                            <p className="cloc tooltip ellipsis">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi-location" viewBox="0 0 16 16">
                                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                                </svg>
                                                {item.state || item.seller?.statename || 'India'}
                                                <span className="tooltiptext">{item.country || 'India'}</span>
                                            </p>
                                            <div className="rating-wrap">
                                                <span className="rtbox">4.5</span>
                                                <span className="crate" style={{ "--_score": "90%" }} />
                                                <span className="rate-text">50+ Ratings</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="caddit">
                                        <div className="item">
                                            <h4 style={{ color: '#1e3a8a', fontWeight: '900', marginBottom: '8px' }}>{Array.isArray(item.title) ? item.title[0] : item.title}</h4>
                                            <div className="ca-box">
                                                <p><i className="l3icon resp-icon" /></p>
                                                <p><span>Response Rate</span> <b>95%</b></p>
                                            </div>
                                            <p><span>Main Category:</span> <b>{item.category}</b></p>
                                            <p><span>Price:</span> <b>₹{item.price || 'Ask'}</b> / {item.moq || 'Units'}</p>
                                        </div>
                                    </div>
                                    <div className="caction">
                                        <Link to={'/register-buyer'}>
                                            <p>Contact Supplier</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )) : (
                        <div style={{ padding: '4rem', textAlign: 'center', background: '#fff', borderRadius: '20px', border: '1px dashed #e2e8f0' }}>
                            <p style={{ color: '#64748b', fontWeight: '600' }}>No live products found in this category yet.</p>
                        </div>
                    )}
                </ul>
            </main>
        </div>
    );
}

export default VegetableSupplier;
