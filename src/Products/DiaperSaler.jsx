import React from 'react';
import { Link } from 'react-router-dom';
import './common.css';

const classifiedData = [
    {
        name: "Jaishree",
        email: "jaishree@gmail.com",
        mobileNumber: "9687493007",
        companyName: "Krishna Diaper & Pad",
        productOrService: "Adult Diaper",
        imgSrc: "/assets/diaper.jpeg",  // Provide the correct image path
        altText: "Adult Diaper - Krishna Diaper & Pad",
        mainProducts: "Adult Diapers, Baby Diapers, Sanitary Pads",
        years: "1 YRS",
        location: "Delhi, India",
        tooltipText: "123 Diaper Street, Healthcare Area, Delhi, India",
        rating: "4.7",
        ratingPercent: "95%",
        ratingsCount: "65",
        responseRate: "92%"
    },
    {
        "_id": "m4567890123abc8901",
        "name": "Meenakshi",
        "email": "meenakshi@gmail.com",
        "password": "12345678",
        "mobileNumber": "9904403273",
        "companyName": "SPCare",
        "productOrService": "Adult Diaper",
        "imgSrc": "/assets/diaper4.jpeg",  // Placeholder for image path
        "mainProducts": "Adult Diapers, Incontinence Products, Elderly Care Items",
        "altText": "SPCare - Adult Diaper",
        "years": "1 YRS",  // Placeholder for years of experience
        "location": "Ahmedabad, Gujarat, India",  // Placeholder for location
        "tooltipText": "SPCare, Ahmedabad",
        "rating": "4.4",  // Placeholder for rating
        "ratingPercent": "88%",  // Placeholder for rating percentage
        "ratingsCount": "60",  // Placeholder for ratings count
        "responseRate": "82%",  // Placeholder for response rate
        "whatsappConfirmed": true
    },
    {
        "_id": "s1234567890def5678",
        "name": "Sufiyan Sayyed",
        "email": "sufiyansayyed@gmail.com",
        "password": "12345678",
        "mobileNumber": "7021297180",
        "companyName": "Diapers Point - Best Diaper Shop in Nashik",
        "productOrService": "Diapers",
        "imgSrc": "/assets/diaper5.jpeg",  // Placeholder for image path
        "mainProducts": "Disposable Diapers, Cloth Diapers, Baby Wipes",
        "altText": "Diapers Point - Best Diaper Shop in Nashik",
        "years": "1 YRS",  // Placeholder for years of experience
        "location": "Nashik, Maharashtra, India",  // Placeholder for location
        "tooltipText": "Diapers Point, Nashik",
        "rating": "4.7",  // Placeholder for rating
        "ratingPercent": "94%",  // Placeholder for rating percentage
        "ratingsCount": "68",  // Placeholder for ratings count
        "responseRate": "85%",  // Placeholder for response rate
        "whatsappConfirmed": true
    },
    {
        "_id": "e1234567890def5678",
        "name": "Easeplus Healthcare Private Limited",
        "email": "Easeplus@gmail.com",
        "password": "12345678",
        "mobileNumber": "9755526602",
        "companyName": "Easeplus Healthcare Private Limited",
        "productOrService": "Diapers",
        "imgSrc": "/assets/diaper6.jpeg",  // Placeholder for image path
        "mainProducts": "Disposable Diapers, Baby Wipes, Healthcare Products",
        "altText": "Easeplus Healthcare Private Limited - Diapers",
        "years": "1 YRS",  // Placeholder for years of experience
        "location": "India",  // Placeholder for location
        "tooltipText": "Easeplus Healthcare Private Limited, India",
        "rating": "4.6",  // Placeholder for rating
        "ratingPercent": "92%",  // Placeholder for rating percentage
        "ratingsCount": "85",  // Placeholder for ratings count
        "responseRate": "88%",  // Placeholder for response rate
        "whatsappConfirmed": true
    },
    {
        "_id": "f1234567890abc5678",
        "name": "Neha",
        "email": "neha201@gmail.com",
        "password": "12345678",
        "mobileNumber": "9081788828",
        "companyName": "Rotech Healthcare",
        "productOrService": "Diapers",
        "imgSrc": "/assets/diaper7.jpeg",  // Placeholder for image path
        "mainProducts": "Disposable Diapers, Baby Wipes, Healthcare Products",
        "altText": "Rotech Healthcare - Diapers",
        "years": "1 YRS",  // Placeholder for years of experience
        "location": "India",  // Placeholder for location
        "tooltipText": "Rotech Healthcare, India",
        "rating": "4.3",  // Placeholder for rating
        "ratingPercent": "86%",  // Placeholder for rating percentage
        "ratingsCount": "65",  // Placeholder for ratings count
        "responseRate": "82%",  // Placeholder for response rate
        "whatsappConfirmed": true
    }




    // Additional items can be added here if needed
];

const DiaperSeller = () => {
    return (
        <div className="main-box">
            <aside>
                <div className="flt-box-wrap">
                    <div className="flt-box mb-0 flt-head">Filters By</div>
                    <div className="flt-box bdrt-0">
                        <p className="flt-title">Related Categories</p>
                        <div className="flt-content">
                            <ul className="flt-list cust-scroll">
                                <li><Link to="#">Adult Diapers</Link></li>
                                <li><Link to="#">Baby Diapers</Link></li>
                                <li><Link to="#">Sanitary Pads</Link></li>
                                <li><Link to="#">Incontinence Products</Link></li>
                                <li><Link to="#">Wet Wipes</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flt-box">
                        <p className="flt-title">By State</p>
                        <div className="flt-content">
                            <div className="flt-search">
                                <input type="text" name="state_id" placeholder="Search State" id="state-search-input" />
                            </div>
                            <ul className="flt-list cust-scroll" id="state-lists">
                                <li><Link to="#">All India</Link></li>
                                <li><Link to="#">Delhi</Link></li>
                                <li><Link to="#">Maharashtra</Link></li>
                                <li><Link to="#">Gujarat</Link></li>
                                <li><Link to="#">Rajasthan</Link></li>
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
                                        <img src="/assets/diaper1.jpeg" width={55} height={55} alt="Adult Diapers" />
                                    </figure>
                                    <p className="title">Adult Diapers</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/diaper2.jpeg" width={55} height={55} alt="Baby Diapers" />
                                    </figure>
                                    <p className="title">Baby Diapers</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/diaper3.jpeg" width={55} height={55} alt="Sanitary Pads" />
                                    </figure>
                                    <p className="title">Sanitary Pads</p>
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

export default DiaperSeller;
