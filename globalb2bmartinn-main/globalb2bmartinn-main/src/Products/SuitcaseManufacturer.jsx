import React from 'react';
import { Link } from 'react-router-dom';
import './common.css';

const classifiedData = [
    {
        name: "Sunil Jindal",
        email: "jindalluggage1992@gmail.com",
        mobileNumber: "9212306346",
        companyName: "JINDAL PLASTIC INDUSTRIES",
        productOrService: "Suitcase Manufacturer",
        imgSrc: "/assets/suitcase.jpeg",  // Example image path, adjust as necessary
        altText: "Suitcase - JINDAL PLASTIC INDUSTRIES",
        mainProducts: "Hard Shell Suitcases, Soft Shell Suitcases, Travel Bags, Trolley Bags",
        years: "1 YRS",
        location: "Delhi, India",  // Update with actual location if available
        tooltipText: "Plot No. 123, Industrial Area, Delhi, India",
        rating: "4.8",
        ratingPercent: "96%",
        ratingsCount: "500",
        responseRate: "99%"
    },
    {
        "name": "Viksa",
        "email": "abc@gmail.com",
        "mobileNumber": "9899995228",
        "companyName": "Niwar Corner",
        "productOrService": "All Kind Luggages and Garments Accessories",
        "imgSrc": "/assets/suit1.jpg",
        "altText": "All Kind Luggages and Garments Accessories - Niwar Corner",
        "mainProducts": "Luggage Sets, Travel Bags, Garment Bags, Accessories",
        "years": "1 YRS",
        "location": "Uttar Pradesh, India",
        "tooltipText": "789 Accessory Lane, Style City, Uttar Pradesh, India",
        "rating": "4.6",
        "ratingPercent": "92%",
        "ratingsCount": "260",
        "responseRate": "89%"
    },
    {
        "_id": "a1234567890wxyz5688",
        "name": "Durga Singh",
        "email": "durga123@gmail.com",
        "password": "durga1234",
        "mobileNumber": "9709323480",
        "companyName": "Somo Soft Luggage",
        "productOrService": "bags",
        "imgSrc": "/assets/bags1.jpeg",  // Placeholder for image path
        "mainProducts": "Soft Luggage, Travel Bags, Carry Cases",
        "altText": "Bags - Somo Soft Luggage",
        "years": "1 YRS",  // Placeholder for years of experience
        "location": "India",  // Placeholder for location
        "tooltipText": "Somo Soft Luggage, India",
        "rating": "4.7",  // Placeholder for rating
        "ratingPercent": "94%",  // Placeholder for rating percentage
        "ratingsCount": "75",  // Placeholder for ratings count
        "responseRate": "90%",  // Placeholder for response rate
        "whatsappConfirmed": false
    }




];

const SuitcaseManufacturerStore = () => {
    return (
        <div className="main-box">
            {/* Aside section for filters */}
            <aside>
                <div className="flt-box-wrap">
                    <div className="flt-box mb-0 flt-head">Filters By</div>
                    <div className="flt-box bdrt-0">
                        <p className="flt-title">
                            Related Categories
                        </p>
                        <div className="flt-content">
                            <ul className="flt-list cust-scroll">
                                <li><Link to="#">Hard Shell Suitcases</Link></li>
                                <li><Link to="#">Soft Shell Suitcases</Link></li>
                                <li><Link to="#">Travel Bags</Link></li>
                                <li><Link to="#">Trolley Bags</Link></li>
                            </ul>
                        </div>
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
                            <li><Link to="#">Tamil Nadu</Link></li>
                            <li><Link to="#">Karnataka</Link></li>
                            <li><Link to="#">Rajasthan</Link></li>
                        </ul>
                    </div>
                </div>
            </aside>
            {/* Main section for classified listings */}
            <main>
                <section className="section">
                    <p className="sect-title">Explore by Categories</p>
                    {/* Categories section */}
                    <div className="horprd expcatg" id="expcatg">
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/suit1.jpg" width={55} height={55} alt="Hard Shell Suitcases" />
                                    </figure>
                                    <p className="title">Hard Shell Suitcases</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/suitcase2.jpg" width={55} height={55} alt="Soft Shell Suitcases" />
                                    </figure>
                                    <p className="title">Soft Shell Suitcases</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/suitcase3.jpg" width={55} height={55} alt="Travel Bags" />
                                    </figure>
                                    <p className="title">Travel Bags</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/suitcase4.jpg" width={55} height={55} alt="Trolley Bags" />
                                    </figure>
                                    <p className="title">Trolley Bags</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
                {/* Classified listings */}
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

export default SuitcaseManufacturerStore;
