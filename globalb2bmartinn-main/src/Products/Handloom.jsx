import React from 'react';
import { Link } from 'react-router-dom';
import './common.css';

const classifiedData = [
    {
        name: "Abhishek",
        email: "abc@gmail.com",
        mobileNumber: "7610909141",
        companyName: "Geeta Textiles",
        productOrService: "Handloom",
        imgSrc: "/assets/handloom1.jpeg",  // Placeholder for image path
        altText: "Handloom - Geeta Textiles",
        mainProducts: "Cotton Handloom, Silk Handloom, Wool Handloom, Linen Handloom, Jute Handloom",
        years: "1 YRS",
        location: "Kolkata, West Bengal, India",
        tooltipText: "123 Handloom Street, Textile Area, Kolkata, West Bengal, India",
        rating: "4.7",
        ratingPercent: "93%",
        ratingsCount: "120",
        responseRate: "89%"
    },
    {
        "_id": "j1234567890abc5678",
        "name": "Sahil",
        "email": "abc@gmail.com",
        "password": "sahil@123",
        "mobileNumber": "9891365365",
        "companyName": "Decor Tales",
        "productOrService": "Handloom",
        "imgSrc": "/assets/handloom4.jpeg",  // Placeholder for image path
        "mainProducts": "Handloom Fabrics, Custom Handloom Products",
        "altText": "Decor Tales - Handloom",
        "years": "1 YRS",  // Placeholder for years of experience
        "location": "India",  // Placeholder for location
        "tooltipText": "Decor Tales, India",
        "rating": "4.3",  // Placeholder for rating
        "ratingPercent": "86%",  // Placeholder for rating percentage
        "ratingsCount": "50",  // Placeholder for ratings count
        "responseRate": "80%",  // Placeholder for response rate
        "whatsappConfirmed": true
    }

    // Add more items if needed
];

const Handloom = () => {
    return (
        <div className="main-box">
            <aside>
                <div className="flt-box-wrap">
                    <div className="flt-box mb-0 flt-head">Filters By</div>
                    <div className="flt-box bdrt-0">
                        <p className="flt-title">Related Categories</p>
                        <div className="flt-content">
                            <ul className="flt-list cust-scroll">
                                <li><Link to="#">Cotton Handloom</Link></li>
                                <li><Link to="#">Silk Handloom</Link></li>
                                <li><Link to="#">Wool Handloom</Link></li>
                                <li><Link to="#">Linen Handloom</Link></li>
                                <li><Link to="#">Jute Handloom</Link></li>
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
                                <li><Link to="#">West Bengal</Link></li>
                                <li><Link to="#">Maharashtra</Link></li>
                                <li><Link to="#">Gujarat</Link></li>
                                <li><Link to="#">Rajasthan</Link></li>
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
                                        <img src="/assets/handloom1.jpeg" width={55} height={55} alt="Cotton Handloom" />
                                    </figure>
                                    <p className="title">Cotton Handloom</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/handloom2.jpeg" width={55} height={55} alt="Silk Handloom" />
                                    </figure>
                                    <p className="title">Silk Handloom</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/handloom3.jpeg" width={55} height={55} alt="Wool Handloom" />
                                    </figure>
                                    <p className="title">Wool Handloom</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/handloom4.jpeg" width={55} height={55} alt="Linen Handloom" />
                                    </figure>
                                    <p className="title">Linen Handloom</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/handloom5.jpeg" width={55} height={55} alt="Jute Handloom" />
                                    </figure>
                                    <p className="title">Jute Handloom</p>
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

export default Handloom;
