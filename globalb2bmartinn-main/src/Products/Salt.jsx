import React from 'react';
import { Link } from 'react-router-dom';
import './common.css';

const classifiedData = [
    {
        name: "Mohommad Sikandar",
        email: "skindustry@gmail.com",
        mobileNumber: "9103753232",
        companyName: "Sk Industry",
        productOrService: "Salt",
        imgSrc: "/assets/sals.avif",  // You need to provide the correct image path
        altText: "Salt - Sk Industry",
        mainProducts: "Sea salt, Rock Salt, Iodized Salt etc.",
        years: "1 YRS",
        location: "Mumbai, Maharashtra, India",
        tooltipText: "123 Salt Street, Industrial Area, Mumbai, Maharashtra, India",
        rating: "4.3",
        ratingPercent: "86%",
        ratingsCount: "40",
        responseRate: "88%",

    },
    {
        "_id": "varnam-marketing-private-limited-erode",
        "name": "Rathnakumar",
        "email": "vmpltn@gmail.com",
        "password": "7200073377",
        "mobileNumber": "7200073377",
        "companyName": "Varnam Marketing Private Limited",
        "productOrService": "Salt and Paint",
        "imgSrc": "/assets/salt1.jpg",
        "mainProducts": "Salt and Paint",
        "altText": "Varnam Marketing Private Limited - Salt and Paint",
        "years": "1 YRS",
        "location": "Erode, Tamilnadu, India",
        "tooltipText": "Varnam Marketing Private Limited, Salt and Paint, Erode",
        "rating": "4.6",
        "ratingPercent": "93%",
        "ratingsCount": "35",
        "responseRate": "92%",
        "whatsappConfirmed": true
    }
    
    // Add more items if needed
];

const Salt = () => {
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
                                <li><Link to="#">Iodized Salt</Link></li>
                                <li><Link to="#">Rock Salt</Link></li>
                                <li><Link to="#">Sea Salt</Link></li>
                                <li><Link to="#">Himalayan Salt</Link></li>
                                <li><Link to="#">Kosher Salt</Link></li>
                                <li><Link to="#">Black Salt</Link></li>
                                <li><Link to="#">Flake Salt</Link></li>
                                <li><Link to="#">Table Salt</Link></li>
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
                                <li><Link to="#">Rajasthan</Link></li>
                                <li><Link to="#">Tamil Nadu</Link></li>
                                <li><Link to="#">Karnataka</Link></li>
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
                                        <img src="/assets/sal1.jpg" width={55} height={55} alt="Iodized Salt" />
                                    </figure>
                                    <p className="title">Iodized Salt</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/sal2.jpg" width={55} height={55} alt="Rock Salt" />
                                    </figure>
                                    <p className="title">Rock Salt</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/sal3.webp" width={55} height={55} alt="Sea Salt" />
                                    </figure>
                                    <p className="title">Sea Salt</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/sal4.jpg" width={55} height={55} alt="Himalayan Salt" />
                                    </figure>
                                    <p className="title">Himalayan Salt</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/sal5.jpg" width={55} height={55} alt="Kosher Salt" />
                                    </figure>
                                    <p className="title">Kosher Salt</p>
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
                                            <p><span>Main Produts</span> <b>{item.mainProducts}</b></p>
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

export default Salt;
