import React from 'react';
import { Link } from 'react-router-dom';
import './common.css';

const classifiedData = [
    {
        name: "Sonu Kapoor",
        email: "abc@gmail.com",
        mobileNumber: "9971548582",
        companyName: "Smart Ship",
        productOrService: "Freight Forwarding Services",
        imgSrc: "/assets/free1.jpeg",  // Ensure the image exists in your project
        altText: "Freight Forwarding Services - Smart Ship",
        mainServices: "Sea Freight, Air Freight, Road Freight, Customs Clearance",
        years: "1 YRS",
        location: "Mumbai, India",
        tooltipText: "Warehouse 22, Sector 3, Mumbai, India",
        rating: "4.5",
        ratingPercent: "90%",
        ratingsCount: "120",
        responseRate: "98%"
    },
    {
        "_id": "f1234567890g012347",
        "name": "Amisha",
        "email": "abc@gmail.com",
        "password": "amisha@123",
        "mobileNumber": "7202000380",
        "companyName": "Sai Samarth Logistics",
        "productOrService": "Freight Forwarding Services",
        "imgSrc": "/assets/freight.jpeg",
        "mainProducts": "Freight Forwarding, Logistics, Supply Chain Solutions",
        "altText": "Freight Forwarding Services - Sai Samarth Logistics",
        "years": "1 YRS",
        "location": "Mumbai, Maharashtra, India",
        "tooltipText": "Sector 14, Logistics Park, Mumbai, Maharashtra, India",
        "rating": "4.5",
        "ratingPercent": "90%",
        "ratingsCount": "65",
        "responseRate": "85%",
        "whatsappConfirmed": true
    }

];

const FreightForwardingComponent = () => {
    return (
        <div className="main-box">
            <aside>
                <div className="flt-box-wrap">
                    <div className="flt-box mb-0 flt-head">Filters By</div>
                    <div className="flt-box bdrt-0">
                        <p className="flt-title">
                            Related Services
                        </p>
                        <div className="flt-content">
                            <ul className="flt-list cust-scroll">
                                <li><Link to="#">Sea Freight</Link></li>
                                <li><Link to="#">Air Freight</Link></li>
                                <li><Link to="#">Road Freight</Link></li>
                                <li><Link to="#">Customs Clearance</Link></li>
                                <li><Link to="#">Warehouse Services</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flt-box">
                        <p className="flt-title">
                            By Region
                        </p>
                        <div className="flt-content">
                            <div className="flt-search">
                                <input type="text" name="region_id" placeholder="Search Region" id="region-search-input" />
                            </div>
                            <ul className="flt-list cust-scroll" id="region-lists">
                                <li><Link to="#">All India</Link></li>
                                <li><Link to="#">Maharashtra</Link></li>
                                <li><Link to="#">Gujarat</Link></li>
                                <li><Link to="#">Tamil Nadu</Link></li>
                                <li><Link to="#">Karnataka</Link></li>
                                <li><Link to="#">Delhi</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </aside>
            <main>
                <section className="section">
                    <p className="sect-title">Explore by Services</p>
                    <div className="horprd expcatg" id="expcatg">
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/free1.jpeg" width={55} height={55} alt="Sea Freight" />
                                    </figure>
                                    <p className="title">Sea Freight</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/free2.jpeg" width={55} height={55} alt="Air Freight" />
                                    </figure>
                                    <p className="title">Air Freight</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/free3.jpeg" width={55} height={55} alt="Road Freight" />
                                    </figure>
                                    <p className="title">Road Freight</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/free4.jpeg" width={55} height={55} alt="Customs Clearance" />
                                    </figure>
                                    <p className="title">Customs Clearance</p>
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
                                            <p><span>Main Services</span> <b>{item.mainServices}</b></p>
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

export default FreightForwardingComponent;
