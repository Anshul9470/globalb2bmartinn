import React from 'react';
import { Link } from 'react-router-dom';
import './common.css';

const classifiedData = [
    {
        name: "Ram",
        email: "abc@gmail.com",
        password: "ram@12345",
        mobileNumber: "9875245621",
        companyName: "HR Gems and Jewels",
        productOrService: "gemstones",
        imgSrc: "/assets/gemstones.jpg", // Correct image path needed
        mainProducts: "Precious Gemstones, Semi-Precious Gemstones, Natural Gemstones, etc.",
        altText: "Gemstones - HR Gems and Jewels",
        years: "1 YRS",
        location: "Jaipur, Rajasthan, India",
        tooltipText: "123, Johari Bazaar, Jaipur - 302003, Rajasthan, India",
        rating: "4.7",
        ratingPercent: "94%",
        ratingsCount: "300",
        responseRate: "95%"
    },
    // Add more items if needed
];

const GemstonesSuppliers = () => {
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
                                <li><Link to="#">Precious Gemstones</Link></li>
                                <li><Link to="#">Semi-Precious Gemstones</Link></li>
                                <li><Link to="#">Natural Gemstones</Link></li>
                                <li><Link to="#">Synthetic Gemstones</Link></li>
                                {/* Add more categories as needed */}
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
                                <li><Link to="#">Rajasthan</Link></li>
                                <li><Link to="#">Gujarat</Link></li>
                                <li><Link to="#">Maharashtra</Link></li>
                                <li><Link to="#">Karnataka</Link></li>
                                <li><Link to="#">Tamil Nadu</Link></li>
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
                                        <img src="/assets/gemstones1.jpg" width={55} height={55} alt="Precious Gemstones" />
                                    </figure>
                                    <p className="title">Precious Gemstones</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/gemstones2.jpg" width={55} height={55} alt="Semi-Precious Gemstones" />
                                    </figure>
                                    <p className="title">Semi-Precious Gemstones</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/gemstones3.jpg" width={55} height={55} alt="Natural Gemstones" />
                                    </figure>
                                    <p className="title">Natural Gemstones</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/gemstones4.jpg" width={55} height={55} alt="Synthetic Gemstones" />
                                    </figure>
                                    <p className="title">Synthetic Gemstones</p>
                                </div>
                            </Link>
                        </div>
                        {/* Add more categories as needed */}
                    </div>
                </section>
                <ul className="classfied-wrap">
                    {classifiedData.map((item, index) => (
                        <li key={index}>
                            <div className="classified">
                                <div className="prd-info">
                                    <div className="prd-box">
                                        <img src={item.imgSrc} alt={item.altText} width={250} height={250} />
                                    </div>
                                </div>
                                <div className="cinfo">
                                    <div className="cbox">
                                        <figure>
                                            <span className="cmp-year">{item.years}</span>
                                        </figure>
                                        <div className="cboxr">
                                            <Link to="#" target="_blank"><h4 className="title">{item.companyName}</h4></Link>
                                            <p className="cloc tooltip ellipsis">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi-location" viewBox="0 0 16 16">
                                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                                </svg>
                                                {item.location}
                                                <span className="tooltiptext">{item.tooltipText}</span>
                                            </p>
                                            <div className="rating-wrap">
                                                <span className="rtbox">{item.rating}</span>
                                                <span className="crate" style={{ "--_score": item.ratingPercent }} />
                                                <span className="rate-text">{item.ratingsCount} Ratings</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="caddit">
                                        <div className="item">
                                            <div className="ca-box">
                                                <p><i className="l3icon resp-icon" /></p>
                                                <p><span>Response Rate</span> <b>{item.responseRate}</b></p>
                                            </div>
                                            <p><span>Main Products</span> <b>{item.mainProducts}</b></p>
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
                    ))}
                </ul>
            </main>
        </div>
    );
}

export default GemstonesSuppliers;
