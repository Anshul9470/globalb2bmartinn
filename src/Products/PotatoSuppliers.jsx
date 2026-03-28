import React from 'react';
import { Link } from 'react-router-dom';
import './common.css';

const classifiedData = [
    {
        name: "ankit patel",
        email: "ankitpatel123@gmail.com",
        mobileNumber: "9428555805",
        companyName: "Rudra Agro Food Tulsi Cold Storage",
        productOrService: "Potato Suppliers",
        imgSrc: "/assets/potato.jpg",  // Correct image path needed
        mainProducts: "Fresh potatoes, Organic potatoes, Export quality potatoes, etc.",
        altText: "Potato Suppliers - Rudra Agro Food Tulsi Cold Storage",
        years: "1 YRS",
        location: "Mumbai, Maharashtra, India",
        tooltipText: "456, Bandra West, Mumbai - 400050, Maharashtra, India",
        rating: "4.9",
        ratingPercent: "98%",
        ratingsCount: "250",
        responseRate: "99%"
    },
    {
        "_id": "q1234567890r012347",
        "name": "Pankaj",
        "email": "Pankaj1234@gmail.com",
        "password": "Pankaj1234",
        "mobileNumber": "7400932835",
        "companyName": "Agricultural Products",
        "productOrService": "Potato",
        "imgSrc": "/assets/potato6.jpeg",
        "mainProducts": "Fresh Potatoes, Organic Potatoes, Premium Potatoes",
        "altText": "Potatoes - Agricultural Products",
        "years": "1 YRS",
        "location": "Indore, Madhya Pradesh, India",
        "tooltipText": "Sector 8, Agricultural Market, Indore, Madhya Pradesh, India",
        "rating": "4.4",
        "ratingPercent": "88%",
        "ratingsCount": "45",
        "responseRate": "80%",
        "whatsappConfirmed": true
    },
    {
        "_id": "r1234567890s012347",
        "name": "Pawan",
        "email": "pawan1234@gmail.com",
        "password": "pawan1234",
        "mobileNumber": "8767251323",
        "companyName": "Pawan Enterprises",
        "productOrService": "Potato",
        "imgSrc": "/assets/potato1.jpg",
        "mainProducts": "Fresh Potatoes, Organic Potatoes, Premium Potatoes",
        "altText": "Potatoes - Pawan Enterprises",
        "years": "1 YRS",
        "location": "Agra, Uttar Pradesh, India",
        "tooltipText": "Sector 7, Agricultural Market, Agra, Uttar Pradesh, India",
        "rating": "4.2",
        "ratingPercent": "84%",
        "ratingsCount": "30",
        "responseRate": "75%",
        "whatsappConfirmed": true
    },
    {
        "name": "Shyam",
        "email": "shyam@gmail.com",
        "password": "12345678",
        "mobileNumber": "9766092090",
        "companyName": "Pathare Brothers Pvt Ltd",
        "productOrService": "Potato",
        "imgSrc": "/assets/potato7.jpeg",
        "mainProducts": "Potatoes, Onions, Vegetables",
        "altText": "Pathare Brothers Pvt Ltd - Potatoes",
        "years": "1 YRS",
        "location": "Maharashtra, India",
        "tooltipText": "Pathare Brothers Pvt Ltd, Maharashtra",
        "rating": "4.2",
        "ratingPercent": "85%",
        "ratingsCount": "45",
        "responseRate": "80%",
        "whatsappConfirmed": true
    }



    // Add more items if needed
];

const PotatoSuppliers = () => {
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
                                <li><Link to="#">Fresh Potatoes</Link></li>
                                <li><Link to="#">Organic Potatoes</Link></li>
                                <li><Link to="#">Export Quality Potatoes</Link></li>
                                <li><Link to="#">Potato Storage Solutions</Link></li>
                                {/* Add more categories as needed */}
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
                                <li><Link to="#">Uttar Pradesh</Link></li>
                                <li><Link to="#">Karnataka</Link></li>
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
                                        <img src="/assets/potato1.jpg" width={55} height={55} alt="Fresh Potatoes" />
                                    </figure>
                                    <p className="title">Fresh Potatoes</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/potato2.jpg" width={55} height={55} alt="Organic Potatoes" />
                                    </figure>
                                    <p className="title">Organic Potatoes</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/potato3.jpg" width={55} height={55} alt="Export Quality Potatoes" />
                                    </figure>
                                    <p className="title">Export Quality Potatoes</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/potato4.jpg" width={55} height={55} alt="Potato Storage Solutions" />
                                    </figure>
                                    <p className="title">Potato Storage Solutions</p>
                                </div>
                            </Link>
                        </div>
                        {/* Add more categories as needed */}
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

export default PotatoSuppliers;
