import React from 'react';
import { Link } from 'react-router-dom';
import './common.css';

const zipperClassifiedData = [
    {
        _id: "667426da14fe92087aaec7bb",
        name: "Zishan Alam",
        email: "ZishanAlam@gmail.com",
        mobileNumber: "8360223908",
        companyName: "Faizan Zippers",
        productOrService: "zipper",
        imgSrc: "/assets/zipper5.jpeg",  // Provide the correct image path for zippers
        mainProducts: "Zippers, Sliders, Zipper Chains, Accessories",
        altText: "Zippers - Faizan Zippers",
        years: "1 YRS",
        location: "Delhi, India",
        tooltipText: "Manufacturing Unit, Delhi, India",
        rating: "4.7",
        ratingPercent: "94%",
        ratingsCount: "250",
        responseRate: "95%"
    },
    {
        _id: "f5g6h7i8j9k0l1m2n3o4p5q6",  // Random unique ID
        name: "Akarshan",
        email: "akarshan@gmail.com",
        mobileNumber: "8437045090",
        companyName: "Uniclo Fittings",
        productOrService: "Zippers",
        imgSrc: "/assets/zipper6.jpeg",  // Example image path
        mainProducts: "Metal Zippers, Plastic Zippers, Waterproof Zippers, Custom Zippers",
        altText: "Zippers - Uniclo Fittings",
        years: "1 YRS",
        location: "Ludhiana, Punjab, India",
        tooltipText: "123 Fittings Road, Ludhiana, Punjab, India",
        rating: "4.4",
        ratingPercent: "89%",
        ratingsCount: "52",
        responseRate: "90%",
        whatsappConfirmed: true
    },
    {
        "_id": "u1234567890mkzipper",
        "name": "Mk Zipper",
        "email": "MkZipper@gmail.com",
        "password": "12345678",
        "mobileNumber": "8506904676",
        "companyName": "Mk Zipper",
        "productOrService": "Zipper",
        "imgSrc": "/assets/zipper7.jpeg",
        "mainProducts": "Zippers, Metal Zippers, Nylon Zippers",
        "altText": "Mk Zipper - Zippers Manufacturer",
        "years": " YRS",
        "location": "Delhi, India",
        "tooltipText": "Mk Zipper, Delhi",
        "rating": "4.4",
        "ratingPercent": "89%",
        "ratingsCount": "98",
        "responseRate": "85%",
        "whatsappConfirmed": true
    },
    {
        "_id": "u1234567890shivaji",
        "name": "Shivaji Lining",
        "email": "shivajilining@gmail.com",
        "password": "12345678",
        "mobileNumber": "7410937206",
        "companyName": "Shivaji Lining",
        "productOrService": "Zipper",
        "imgSrc": "/assets/zipper8.jpeg",
        "mainProducts": "Zippers, Metal Zippers, Nylon Zippers",
        "altText": "Shivaji Lining - Zippers Manufacturer",
        "years": "1 YRS",
        "location": "Jaipur, India",
        "tooltipText": "Shivaji Lining, Jaipur",
        "rating": "4.3",
        "ratingPercent": "86%",
        "ratingsCount": "72",
        "responseRate": "80%",
        "whatsappConfirmed": true
    },
    {
        "_id": "s1234567890alszipper",
        "name": "Samsed",
        "email": "samsed@gmail.com",
        "password": "12345678",
        "mobileNumber": "8419909616",
        "companyName": "ALS Zipper",
        "productOrService": "Zipper",
        "imgSrc": "/assets/zipper9.jpeg",
        "mainProducts": "Zippers, Zipper Pulls, Zipper Components",
        "altText": "ALS Zipper - Zipper Products",
        "years": "1 YRS",
        "location": "Mumbai, India",
        "tooltipText": "ALS Zipper, Mumbai",
        "rating": "4.3",
        "ratingPercent": "86%",
        "ratingsCount": "65",
        "responseRate": "90%",
        "whatsappConfirmed": false
    }




    // Add more zipper-related businesses if needed
];

const ZipperDealers = () => {
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
                                <li><Link to="#">Zippers</Link></li>
                                <li><Link to="#">Sliders</Link></li>
                                <li><Link to="#">Zipper Chains</Link></li>
                                <li><Link to="#">Zipper Accessories</Link></li>
                                <li><Link to="#">Invisible Zippers</Link></li>
                                <li><Link to="#">Custom Zippers</Link></li>
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
                                        <img src="/assets/zipper1.jpeg" width={55} height={55} alt="Zippers" />
                                    </figure>
                                    <p className="title">Zippers</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/zipper2.jpeg" width={55} height={55} alt="Sliders" />
                                    </figure>
                                    <p className="title">Sliders</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/zipper3.jpeg" width={55} height={55} alt="Zipper Chains" />
                                    </figure>
                                    <p className="title">Zipper Chains</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/zipper4.jpeg" width={55} height={55} alt="Zipper Accessories" />
                                    </figure>
                                    <p className="title">Zipper Accessories</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/zipper5.jpeg" width={55} height={55} alt="Invisible Zippers" />
                                    </figure>
                                    <p className="title">Invisible Zippers</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
                <ul className="classfied-wrap">
                    {zipperClassifiedData.map((item, index) => (
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
                                            <Link to="#"><h4 className="title">{item.companyName}</h4></Link>
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

export default ZipperDealers;
