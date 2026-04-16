import React from 'react';
import { Link } from 'react-router-dom';
import './common.css';

const classifiedData = [
    {
        "name": "M Taufeeq Ahmed",
        "email": "ysenterprises@gmail.com",
        "password": "M Taufeeq Ahmed",
        "mobileNumber": "6309028166",
        "companyName": "Y S Enterprises",
        "productOrService": "Rectangular Panel Light",
        "imgSrc": "/assets/light1.jpeg",  // Provide the correct image path
        "altText": "Rectangular Panel Light - Y S Enterprises",
        "mainProducts": "Panel Lights, LED Tubelights, Flood Lights",
        "years": "1 YRS",
        "location": "Hyderabad, India",
        "tooltipText": "456 Light Lane, Tech Park, Hyderabad, India",
        "rating": "4.5",
        "ratingPercent": "90%",
        "ratingsCount": "80",
        "responseRate": "85%"
    },
    {
        "_id": "a1234567890wxyz5678",
        "name": "Rajesh Kumar",
        "email": "rajeshkumar1661@gmail.com",
        "password": "Rajesh Kumar",
        "mobileNumber": "9312361350",
        "companyName": "Rajesh Bulb",
        "productOrService": "Bulb",
        "imgSrc": "/assets/bulb1.jpeg",
        "mainProducts": "LED Bulbs, CFL Bulbs, Halogen Bulbs",
        "altText": "Bulb Products - Rajesh Bulb",
        "years": "1 YRS",
        "location": "Delhi, India",
        "tooltipText": "Rajesh Bulb, Delhi, India",
        "rating": "4.2",
        "ratingPercent": "84%",
        "ratingsCount": "85",
        "responseRate": "90%",
        "whatsappConfirmed": true
    },
    {
        _id: "y2z3a4b5c6d7e8f9g0h1i2j3",  // Random unique ID
        name: "Uday Limbani",
        email: "udaylimbaniuvl@gmail.com",
        mobileNumber: "9638964988",
        companyName: "Amiraj Metalcraft",
        productOrService: "Connectors",
        imgSrc: "/assets/connector1.jpeg",  // Example image path
        mainProducts: "Metal Connectors, Electrical Connectors, Hydraulic Connectors, Custom Connectors",
        altText: "Connectors - Amiraj Metalcraft",
        years: "1 YRS",
        location: "Vadodara, India",
        tooltipText: "50 Metalcraft Street, Vadodara, India",
        rating: "4.5",
        ratingPercent: "91%",
        ratingsCount: "58",
        responseRate: "93%",
        whatsappConfirmed: true
    }


    // Add more items if needed
];

const Tubelights = () => {
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
                                <li><Link to="#">Panel Lights</Link></li>
                                <li><Link to="#">LED Tubelights</Link></li>
                                <li><Link to="#">Flood Lights</Link></li>
                                <li><Link to="#">Ceiling Lights</Link></li>
                                <li><Link to="#">Smart Lights</Link></li>
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
                                <li><Link to="#">Telangana</Link></li>
                                <li><Link to="#">Maharashtra</Link></li>
                                <li><Link to="#">Gujarat</Link></li>
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
                                        <img src="/assets/light2.jpeg" width={55} height={55} alt="Panel Lights" />
                                    </figure>
                                    <p className="title">Panel Lights</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/light3.jpeg" width={55} height={55} alt="LED Tubelights" />
                                    </figure>
                                    <p className="title">LED Tubelights</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/light4.jpeg" width={55} height={55} alt="Flood Lights" />
                                    </figure>
                                    <p className="title">Flood Lights</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/light5.jpeg" width={55} height={55} alt="Ceiling Lights" />
                                    </figure>
                                    <p className="title">Ceiling Lights</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/light6.jpeg" width={55} height={55} alt="Smart Lights" />
                                    </figure>
                                    <p className="title">Smart Lights</p>
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

export default Tubelights;
