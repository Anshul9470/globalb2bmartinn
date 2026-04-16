import React from 'react';
import { Link } from 'react-router-dom';
import './common.css';

const classifiedData = [
    {
        "_id": "a1234567890wxyz5695",
        "name": "Navkar",
        "email": "navkarforge@gmail.com",
        "password": "navkarforge",
        "mobileNumber": "9969259019",
        "companyName": "Navkar Forge Industry",
        "productOrService": "Flanges",
        "imgSrc": "/assets/flanges2.webp",  // Placeholder for image path
        "mainProducts": "Flanges, Fittings, Industrial Components",
        "altText": "Flanges - Navkar Forge Industry",
        "years": "1 YRS",  // Placeholder for years of experience
        "location": "India",  // Placeholder for location
        "tooltipText": "Navkar Forge Industry, India",
        "rating": "4.6",  // Placeholder for rating
        "ratingPercent": "92%",  // Placeholder for rating percentage
        "ratingsCount": "170",  // Placeholder for ratings count
        "responseRate": "91%",  // Placeholder for response rate
        "whatsappConfirmed": true
    },
    {
        name: "Shubham Rajourh",
        email: "rajourhshubham111@gmail.com",
        mobileNumber: "8171721306",
        companyName: "Robustech alloys (INDIA) pvt ltd",
        productOrService: "bush",
        imgSrc: "/assets/alloy6.jpeg",  // Provide the correct image path
        altText: "Bush - Robustech alloys",
        mainProducts: "Bushes, Alloy Castings, Industrial Products",
        years: "1 YRS",
        location: "Pune, Maharashtra, India",
        tooltipText: "456 Alloy Road, Industrial Zone, Pune, Maharashtra, India",
        rating: "4.5",
        ratingPercent: "90%",
        ratingsCount: "120",
        responseRate: "85%"
    },
    // Add more items if needed
];

const RobustechAlloysStore = () => {
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
                                <li><Link to="#">Bushes</Link></li>
                                <li><Link to="#">Alloy Castings</Link></li>
                                <li><Link to="#">Industrial Products</Link></li>
                                <li><Link to="#">Engineering Components</Link></li>
                                <li><Link to="#">Metal Forgings</Link></li>
                                <li><Link to="#">Custom Machinery</Link></li>
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
                                <li><Link to="#">Karnataka</Link></li>
                                <li><Link to="#">Tamil Nadu</Link></li>
                                <li><Link to="#">Delhi</Link></li>
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
                                        <img src="/assets/alloy1.jpeg" width={55} height={55} alt="Bushes" />
                                    </figure>
                                    <p className="title">Bushes</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/alloy2.jpeg" width={55} height={55} alt="Alloy Castings" />
                                    </figure>
                                    <p className="title">Alloy Castings</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/alloy3.jpeg" width={55} height={55} alt="Industrial Products" />
                                    </figure>
                                    <p className="title">Industrial Products</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/alloy4.jpeg" width={55} height={55} alt="Engineering Components" />
                                    </figure>
                                    <p className="title">Engineering Components</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/alloy5.jpeg" width={55} height={55} alt="Metal Forgings" />
                                    </figure>
                                    <p className="title">Metal Forgings</p>
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

export default RobustechAlloysStore;
