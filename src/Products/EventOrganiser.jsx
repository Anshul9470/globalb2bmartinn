import React from 'react';
import { Link } from 'react-router-dom';
import './common.css';

const eventPlannerData = [
    {
        "_id": "b9876543210wxyz1234",
        "name": "Gulsher Alam",
        "email": "gulsherAlam786@gmail.com",
        "password": "Gulsher Alam",
        "mobileNumber": "7091061469",
        "companyName": "A One Fiber Mart",
        "productOrService": "Wedding Stage",
        "imgSrc": "/assets/wedding1.jpeg",
        "mainProducts": "Wedding Stages, Backdrop Decorations, Stage Furniture",
        "altText": "Wedding Stage - A One Fiber Mart",
        "years": "1 YRS",
        "location": "Mumbai, India",
        "tooltipText": "A One Fiber Mart, Mumbai, India",
        "rating": "4.8",
        "ratingPercent": "96%",
        "ratingsCount": "120",
        "responseRate": "95%",
        "whatsappConfirmed": true
    }
    // Add more items if needed
];

const EventPlanner = () => {
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
                                <li><Link to="#">Wedding Decorations</Link></li>
                                <li><Link to="#">Event Planners</Link></li>
                                <li><Link to="#">Banquet Halls</Link></li>
                                <li><Link to="#">Stage Rentals</Link></li>
                                <li><Link to="#">Lighting Services</Link></li>
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
                                <li><Link to="#">Uttar Pradesh</Link></li>
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
                                        <img src="/assets/event1.jpeg" width={55} height={55} alt="Wedding Decorations" />
                                    </figure>
                                    <p className="title">Wedding Decorations</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/event2.jpeg" width={55} height={55} alt="Event Planners" />
                                    </figure>
                                    <p className="title">Event Planners</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/event3.jpeg" width={55} height={55} alt="Banquet Halls" />
                                    </figure>
                                    <p className="title">Banquet Halls</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/event4.jpeg" width={55} height={55} alt="Stage Rentals" />
                                    </figure>
                                    <p className="title">Stage Rentals</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/lighting service.jpeg" width={55} height={55} alt="Lighting Services" />
                                    </figure>
                                    <p className="title">Lighting Services</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
                <ul className="classfied-wrap">
                    {eventPlannerData.map((item, index) => (
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

export default EventPlanner;
