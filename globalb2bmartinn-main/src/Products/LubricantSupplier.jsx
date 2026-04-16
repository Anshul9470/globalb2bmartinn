import React from 'react';
import { Link } from 'react-router-dom';
import './common.css';

const lubricantData = [
    {
        name: "piyush",
        email: "piyushgoyalflonexgroup@gmail.com",
        mobileNumber: "7424904301",
        companyName: "flonex lubricant",
        productOrService: "Lubricant",
        imgSrc: "/assets/lubri4.jpeg",  // Example image path, adjust as necessary
        altText: "Lubricant - Flonex Lubricant",
        mainProducts: "Engine Oils, Industrial Lubricants, Greases",
        years: "1 YRS",
        location: "Unknown",  // Update with actual location if available
        tooltipText: "123 Industrial Area, Anytown, India",
        rating: "4.7",
        ratingPercent: "95%",
        ratingsCount: "400",
        responseRate: "92%"
    },
    {
        "_id": "girje-lubricant-private-limited-gujarat",
        "name": "Laxman",
        "email": "laxman@gmail.com",
        "password": "12345678",
        "mobileNumber": "9850223612",
        "companyName": "Girje Lubricant Private Limited",
        "productOrService": "Lubricant Oil",
        "imgSrc": "/assets/lubricant2.jpg",
        "mainProducts": "Lubricant Oil",
        "altText": "Girje Lubricant Private Limited - Lubricant Oil",
        "years": "1 YRS",
        "location": "Gujarat, India",
        "tooltipText": "Girje Lubricant Private Limited, Lubricant Oil, Gujarat",
        "rating": "4.6",
        "ratingPercent": "92%",
        "ratingsCount": "25",
        "responseRate": "88%",
        "whatsappConfirmed": true
    }
    
    // Add more items if needed
];

const LubricantSupplier = () => {
    return (
        <div className="main-box">
            <aside>
                {/* Filters section */}
                <div className="flt-box-wrap">
                    <div className="flt-box mb-0 flt-head">Filters By</div>
                    <div className="flt-box bdrt-0">
                        <p className="flt-title">
                            Related Categories
                        </p>
                        <div className="flt-content">
                            <ul className="flt-list cust-scroll">
                                <li><Link to="#">Engine Oils</Link></li>
                                <li><Link to="#">Industrial Lubricants</Link></li>
                                <li><Link to="#">Greases</Link></li>
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
                                <li><Link to="#">Gujarat</Link></li>
                                <li><Link to="#">Tamil Nadu</Link></li>
                                <li><Link to="#">Karnataka</Link></li>
                                <li><Link to="#">Rajasthan</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </aside>
            <main>
                <section className="section">
                    <p className="sect-title">Explore Lubricant Suppliers</p>
                    {/* Categories section */}
                    <div className="horprd expcatg" id="expcatg">
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/lubri1.jpeg" width={55} height={55} alt="Engine Oils" />
                                    </figure>
                                    <p className="title">Engine Oils</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/lubri2.jpeg" width={55} height={55} alt="Industrial Lubricants" />
                                    </figure>
                                    <p className="title">Industrial Lubricants</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/lubr3.jpeg" width={55} height={55} alt="Greases" />
                                    </figure>
                                    <p className="title">Greases</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
                {/* Classified listings */}
                <ul className="classfied-wrap">
                    {lubricantData.map((item, index) => (
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
                                            {/* Location and ratings */}
                                            <p className="cloc tooltip ellipsis">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi-location" viewBox="0 0 16 16">
                                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                                </svg>
                                                {item.location}
                                                <span className="tooltiptext">{item.tooltipText}</span>
                                            </p>
                                            {/* Ratings */}
                                            <div className="rating-wrap">
                                                <span className="rtbox">{item.rating}</span>
                                                <span className="crate" style={{ "--_score": item.ratingPercent }} />
                                                <span className="rate-text">{item.ratingsCount} Ratings</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Additional information */}
                                    <div className="caddit">
                                        <div className="item">
                                            <div className="ca-box modal-btn" data-modal="motc" data-src={item.trustCertificateUrl}>
                                                <p><i className="l3icon motc-icon" /></p>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="ca-box">
                                                <p><i className="l3icon resp-icon" /></p>
                                                <p><span>Response Rate</span> <b>{item.responseRate}</b></p>
                                            </div>
                                            <p><span>Main Products</span> <b>{item.mainProducts}</b></p>
                                        </div>
                                    </div>
                                    {/* Contact action */}
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

export default LubricantSupplier;
