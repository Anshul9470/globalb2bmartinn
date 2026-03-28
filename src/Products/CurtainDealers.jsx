import React from 'react';
import { Link } from 'react-router-dom';
import './common.css';

const curtainClassifiedData = [
    {
        "_id": "b1234567890sitaram-enterprise",
        "name": "Sitaram Enterprise",
        "email": "sitaramenterprise@gmail.com",
        "password": "sitaram@123",
        "mobileNumber": "9876543210",
        "companyName": "Sitaram Enterprise",
        "productOrService": "Cabinet Handle, Door Handle",
        "imgSrc": "/assets/curt1.jpeg",
        "mainProducts": "Cabinet Handle, Door Handle, Hardware Accessories",
        "altText": "Sitaram Enterprise - Cabinet and Door Handles",
        "years": "1 YRS",
        "location": "Vrundavan Society, Rajkot, Gujarat, India",
        "tooltipText": "Sitaram Enterprise, Rajkot",
        "rating": "4.5",
        "ratingPercent": "90%",
        "ratingsCount": "65",
        "responseRate": "85%",
        "whatsappConfirmed": true,
        "path": "/sitaram-enterprise"

    },

    {
        _id: "667426da14fe92087aaec7bb",
        name: "vikramjeet",
        email: "vikramjeet@gmail.com",
        mobileNumber: "9815678903",
        companyName: "hk steel industries",
        productOrService: "curtain brackets",
        imgSrc: "/assets/curt3.jpeg",  // Provide the correct image path for curtain brackets
        mainProducts: "Curtain Brackets, Curtain Rods, Curtain Accessories",
        altText: "Curtain Brackets - hk steel industries",
        years: "1 YRS",
        location: "Delhi, India",
        tooltipText: "Industrial Area, Delhi, India",
        rating: "4.8",
        ratingPercent: "96%",
        ratingsCount: "320",
        responseRate: "98%",
        path: "/shoolini-saffron-pvt-ltd"
    },
    {
        _id: "v1w2x3y4z5a6b7c8d9e0f1g2",  // Random unique ID
        name: "Gulfamsaifi",
        email: "gulfamsaifi@gmail.com",
        mobileNumber: "8445507995",
        companyName: "Wooden Curtain Bracket",
        productOrService: "Curtain Bracket",
        imgSrc: "/assets/curt1.jpeg",  // Example image path
        mainProducts: "Wooden Curtain Brackets, Curtain Rods",
        altText: "Curtain Brackets - Wooden Curtain Bracket",
        years: "1 YRS",
        location: "Moradabad, India",
        tooltipText: "56 Bracket Street, Moradabad, India",
        rating: "4.5",
        ratingPercent: "91%",
        ratingsCount: "60",
        responseRate: "93%",
        whatsappConfirmed: true
    },
    {
        "_id": "b1234567890hk-steel-industries",
        "name": "Vikram",
        "email": "vikram@gmail.com",
        "password": "12345678",
        "mobileNumber": "9815678903",
        "companyName": "HK Steel Industries",
        "productOrService": "Curtain Bracket",
        "imgSrc": "/assets/curtains1.jpeg",
        "mainProducts": "Curtain Brackets, Curtain Rods, Steel Hardware",
        "altText": "HK Steel Industries - Curtain Bracket",
        "years": "1 YRS",
        "location": "Punjab, India",
        "tooltipText": "HK Steel Industries, Punjab",
        "rating": "4.6",
        "ratingPercent": "93%",
        "ratingsCount": "75",
        "responseRate": "85%",
        "whatsappConfirmed": true
    },
    {
        "name": "Wahim",
        "email": "wahim@gmail.com",
        "password": "12345678",
        "mobileNumber": "9867188821",
        "companyName": "Novelty Furnishings Bandra",
        "productOrService": "Curtain",
        "imgSrc": "/assets/curtain2.jpeg",
        "mainProducts": "Curtains, Draperies, Blinds",
        "altText": "Novelty Furnishings Bandra - Curtain",
        "years": "1 YRS",
        "location": "Gujarat, India",
        "tooltipText": "Novelty Furnishings Bandra, Gujarat",
        "rating": "4.2",
        "ratingPercent": "85%",
        "ratingsCount": "75",
        "responseRate": "92%",
        "whatsappConfirmed": false
    }



    // Add more curtain-related businesses if needed
];

const CurtainDealers = () => {
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
                                <li><Link to="#">Curtain Brackets</Link></li>
                                <li><Link to="#">Curtain Rods</Link></li>
                                <li><Link to="#">Curtain Accessories</Link></li>
                                <li><Link to="#">Curtains</Link></li>
                                <li><Link to="#">Window Blinds</Link></li>
                                <li><Link to="#">Curtain Fabrics</Link></li>
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
                                <li><Link to="#">Delhi</Link></li>
                                <li><Link to="#">Maharashtra</Link></li>
                                <li><Link to="#">Gujarat</Link></li>
                                <li><Link to="#">Tamil Nadu</Link></li>
                                <li><Link to="#">Uttar Pradesh</Link></li>
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
                                        <img src="/assets/curt1.jpeg" width={55} height={55} alt="Curtain Brackets" />
                                    </figure>
                                    <p className="title">Curtain Brackets</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/curt2.jpeg" width={55} height={55} alt="Curtain Rods" />
                                    </figure>
                                    <p className="title">Curtain Rods</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/curt3.jpeg" width={55} height={55} alt="Curtain Accessories" />
                                    </figure>
                                    <p className="title">Curtain Accessories</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/curt4.jpeg" width={55} height={55} alt="Curtains" />
                                    </figure>
                                    <p className="title">Curtains</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/curt5.jpeg" width={55} height={55} alt="Window Blinds" />
                                    </figure>
                                    <p className="title">Window Blinds</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
                <ul className="classfied-wrap">
                    {curtainClassifiedData.map((item, index) => (
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
                                            <Link to={item.path} ><h4 className="title">{item.companyName}</h4></Link>
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

export default CurtainDealers;
