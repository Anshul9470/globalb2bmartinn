import React from 'react';
import { Link } from 'react-router-dom';
import './common.css';

const classifiedData = [
    {
        _id: "667426da14fe92087aaec7aa",
        name: "Eiva Valves",
        email: "farah@globalb2bmart.com",
        mobileNumber: "9978603136",
        companyName: "Eiva Valves",
        productOrService: "valve",
        imgSrc: "/assets/vals.jpg",  // You need to provide the correct image path
        mainProducts: "Gate Valves, Ball Valves, Check Valves",
        altText: "Valve - Eiva Valves",
        years: "1 YRS",
        location: "Mumbai, India",
        tooltipText: "456 Valve Street, Lower Parel, Mumbai, India",
        rating: "4.8",
        ratingPercent: "96%",
        ratingsCount: "150",
        responseRate: "98%"
    }
];

const ValveSupplier = () => {
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
                                <li><Link to="#">Gate Valves</Link></li>
                                <li><Link to="#">Ball Valves</Link></li>
                                <li><Link to="#">Check Valves</Link></li>
                                <li><Link to="#">Butterfly Valves</Link></li>
                                <li><Link to="#">Pressure Relief Valves</Link></li>
                                <li><Link to="#">Control Valves</Link></li>
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
                                <li><Link to="#">Maharashtra</Link></li>
                                <li><Link to="#">Delhi</Link></li>
                                <li><Link to="#">Karnataka</Link></li>
                                <li><Link to="#">Gujarat</Link></li>
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
                                        <img src="/assets/val1.jpg" width={55} height={55} alt="Gate Valves" />
                                    </figure>
                                    <p className="title">Gate Valves</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/val2.jpg" width={55} height={55} alt="Ball Valves" />
                                    </figure>
                                    <p className="title">Ball Valves</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/val3.webp" width={55} height={55} alt="Check Valves" />
                                    </figure>
                                    <p className="title">Check Valves</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/val4.jpg" width={55} height={55} alt="Butterfly Valves" />
                                    </figure>
                                    <p className="title">Butterfly Valves</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/val4.jpg" width={55} height={55} alt="Pressure Relief Valves" />
                                    </figure>
                                    <p className="title">Pressure Relief Valves</p>
                                </div>
                            </Link>
                        </div>
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
                                            <p><span>Main Products:</span> <b>{item.mainProducts}</b></p>
                                        </div>
                                    </div>
                                    <div className="caction">
                                        <Link to={'/register-buyer'} >
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

export default ValveSupplier;
