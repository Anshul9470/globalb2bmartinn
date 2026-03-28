import React from 'react';
import { Link } from 'react-router-dom';
import './common.css';

const classifiedData = [
    {
        _id: "91068xyz124ahm",
        name: "AK Travels",
        email: "pathanarif124@gmail.com",
        mobileNumber: "+91 9106858900",
        companyName: "AK Travels",
        productOrService: "Luxury Limousine Rentals",
        address: "Satellite, Ahmedabad – 380015 (Near Chai Wai Shivranjini), Gujarat",
        services: [
            "Rent For Night Parties",
            "Rent For Weddings",
            "Rent For Airport Transfers",
            "And More"
        ],
        imgSrc: "/assets/carr1.jpg", // Update with the actual image path
        mainProducts: "Luxury Limousine Rentals",
        altText: "Luxury Limousine Rentals - AK Travels",
        years: "1 YRS",
        location: "Ahmedabad, Gujarat, India",
        tooltipText: "Ahmedabad, Gujarat",
        rating: "4.8",
        ratingPercent: "96%",
        ratingsCount: "45",
        responseRate: "90%"
    },
];

const AKTravels = () => {
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
                                <li><Link to="#">Luxury Rentals</Link></li>
                                <li><Link to="#">Event Rentals</Link></li>
                                <li><Link to="#">Wedding Rentals</Link></li>
                                <li><Link to="#">Airport Transfers</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flt-box">
                        <p className="flt-title">
                            By Location
                        </p>
                        <div className="flt-content">
                            <div className="flt-search">
                                <input type="text" name="state_id" placeholder="Search Location" id="location-search-input" />
                            </div>
                            <ul className="flt-list cust-scroll" id="location-lists">
                                <li><Link to="#">All India</Link></li>
                                <li><Link to="#">Gujarat</Link></li>
                                <li><Link to="#">Maharashtra</Link></li>
                                <li><Link to="#">Delhi NCR</Link></li>
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
                                        <img src="/assets/carr1.jpg" width={55} height={55} alt="Limousine Rentals" />
                                    </figure>
                                    <p className="title">Luxury Limousine Rentals</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/carr2.jpg" width={55} height={55} alt="Wedding Rentals" />
                                    </figure>
                                    <p className="title">Wedding Rentals</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/carr3.jpg" width={55} height={55} alt="Airport Transfers" />
                                    </figure>
                                    <p className="title">Airport Transfers</p>
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
                                            <div className="ca-box">
                                                <p><i className="l3icon resp-icon" /></p>
                                                <p><span>Response Rate</span> <b>{item.responseRate}</b></p>
                                            </div>
                                            <p><span>Main Products:</span> <b>{item.mainProducts}</b></p>
                                        </div>
                                        <p><b>Services Offered:</b></p>
                                        <ul className="service-list">
                                            {item.services.map((service, idx) => (
                                                <li key={idx}>{service}</li>
                                            ))}
                                        </ul>
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

export default AKTravels;
