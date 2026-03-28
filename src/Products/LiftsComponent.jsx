import React from 'react';
import { Link } from 'react-router-dom';
import './common.css';

const classifiedData = [
    {
        name: "Abhitech Lift Co.",
        email: "abhitechliftindia@gmail.com",
        mobileNumber: "8368177375, 9219259404",
        companyName: "Abhitech Lift Co.",
        productOrService: "Installer of All Types of Elevators/Lifts",
        imgSrc: "/assets/plift.jpeg",  // Provide the correct image path
        altText: "Elevators - Abhitech Lift Co.",
        mainProducts: "Passenger Lifts, Freight Elevators, Home Lifts, Escalators",
        years: "1 YRS",
        location: "Ghaziabad, India",
        tooltipText: "Bhupendra Puri, Ambedkar Park, Gali No. 3 Modinagar, Ghaziabad 201204",
        rating: "4.9",
        ratingPercent: "98%",
        ratingsCount: "150",
        responseRate: "97%",
        path: "/abhitech-lift"
    },
    {
        "_id": "h1234567890abc5678",
        "name": "Cx",
        "email": "EscalatorLLP1542@gmail.com",
        "password": "FebrolElevato123",
        "mobileNumber": "9999885117",
        "companyName": "Febrol Elevator & Escalator LLP",
        "productOrService": "Elevators & Escalators",
        "imgSrc": "/assets/lift2.jpeg",  // Placeholder for image path
        "mainProducts": "Elevators, Escalators, Lift Systems",
        "altText": "Febrol Elevator & Escalator LLP - Elevators & Escalators",
        "years": "1 YRS",  // Placeholder for years of experience
        "location": "India",  // Placeholder for location
        "tooltipText": "Febrol Elevator & Escalator LLP, India",
        "rating": "4.7",  // Placeholder for rating
        "ratingPercent": "94%",  // Placeholder for rating percentage
        "ratingsCount": "65",  // Placeholder for ratings count
        "responseRate": "90%",  // Placeholder for response rate
        "whatsappConfirmed": false
    }

    // Add more items if needed
];

const LiftComponents = () => {
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
                                <li><Link to="#">Passenger Lifts</Link></li>
                                <li><Link to="#">Freight Elevators</Link></li>
                                <li><Link to="#">Home Lifts</Link></li>
                                <li><Link to="#">Escalators</Link></li>
                                <li><Link to="#">Dumbwaiters</Link></li>
                                <li><Link to="#">Hospital Elevators</Link></li>
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
                                <li><Link to="#">Uttar Pradesh</Link></li>
                                <li><Link to="#">Maharashtra</Link></li>
                                <li><Link to="#">Gujarat</Link></li>
                                <li><Link to="#">Delhi</Link></li>
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
                                        <img src="/assets/plift.jpeg" width={55} height={55} alt="Passenger Lifts" />
                                    </figure>
                                    <p className="title">Passenger Lifts</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/lift2.jpeg" width={55} height={55} alt="Freight Elevators" />
                                    </figure>
                                    <p className="title">Freight Elevators</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/lift3.jpeg" width={55} height={55} alt="Home Lifts" />
                                    </figure>
                                    <p className="title">Home Lifts</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/lift4.jpeg" width={55} height={55} alt="Escalators" />
                                    </figure>
                                    <p className="title">Escalators</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/lift5.jpeg" width={55} height={55} alt="Dumbwaiters" />
                                    </figure>
                                    <p className="title">Dumbwaiters</p>
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
                                            <Link to={item.path}><h4 className="title">{item.companyName}</h4></Link>
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

export default LiftComponents;
