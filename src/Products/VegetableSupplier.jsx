import React from 'react';
import { Link } from 'react-router-dom';
import './common.css';

const classifiedData = [
    {
        _id: "667bb8e29644befaa9547fff",
        name: "Salima",
        email: "alnoortraders1786@gmail.com",
        mobileNumber: "9489289786",
        companyName: "Al Noor Traders",
        productOrService: "Vegetables",
        imgSrc: "/assets/vegetable.jpeg",  // You need to provide the correct image path
        mainProducts: "Fresh Vegetables, Organic Vegetables, Leafy Greens",
        altText: "Vegetables - Al Noor Traders",
        years: "1 YRS",
        location: "Hosur, Tamil Nadu, India",
        tooltipText: "123 Green Street, Hosur, Tamil Nadu, India",
        rating: "4.9",
        ratingPercent: "98%",
        ratingsCount: "180",
        responseRate: "95%"
    },
    {
        "name": "Sanjay Pawar",
        "email": "abc@gmail.com",
        "password": "sanjay@123",
        "mobileNumber": "7030955561",
        "companyName": "Ashwin Internationals",
        "productOrService": "Dehydrated Vegetables and Extracts",
        "imgSrc": "/assets/vegitable2.jpg",
        "mainProducts": "Dehydrated Vegetables, Extracts",
        "altText": "Ashwin Internationals - Dehydrated Vegetables and Extracts",
        "years": "1 YRS",
        "location": "Jalgaon, Maharashtra, India",
        "tooltipText": "Ashwin Internationals, Jalgaon",
        "rating": "4.2",
        "ratingPercent": "85%",
        "ratingsCount": "30",
        "responseRate": "88%",
        "whatsappConfirmed": true
    },
    {
        "_id": "lakshmi-sri-enterprises-tamilnadu",
        "name": "Prema Manikandan",
        "email": "manicivil41@gmail.com",
        "password": "9965690100",
        "mobileNumber": "9965690100",
        "companyName": "Lakshmi Sri Enterprises",
        "productOrService": "Mushrooms",
        "imgSrc": "/assets/mushroom1.jpg",
        "mainProducts": "Mushrooms",
        "altText": "Lakshmi Sri Enterprises - Mushrooms",
        "years": "1 YRS",
        "location": "Kallidaikurichi, Tamil Nadu, India",
        "tooltipText": "Lakshmi Sri Enterprises, Mushrooms, Tamil Nadu",
        "rating": "4.3",
        "ratingPercent": "85%",
        "ratingsCount": "15",
        "responseRate": "90%",
       
    }
    
    
];

const VegetableSupplier = () => {
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
                                <li><Link to="#">Fresh Vegetables</Link></li>
                                <li><Link to="#">Organic Vegetables</Link></li>
                                <li><Link to="#">Leafy Greens</Link></li>
                                <li><Link to="#">Root Vegetables</Link></li>
                                <li><Link to="#">Fruits</Link></li>
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
                                <li><Link to="#">Tamil Nadu</Link></li>
                                <li><Link to="#">Karnataka</Link></li>
                                <li><Link to="#">Andhra Pradesh</Link></li>
                                <li><Link to="#">Kerala</Link></li>
                                <li><Link to="#">Maharashtra</Link></li>
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
                                        <img src="/assets/vegi1.jpeg" width={55} height={55} alt="Fresh Vegetables" />
                                    </figure>
                                    <p className="title">Fresh Vegetables</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/veg2.jpeg" width={55} height={55} alt="Organic Vegetables" />
                                    </figure>
                                    <p className="title">Organic Vegetables</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/veg3.jpeg" width={55} height={55} alt="Leafy Greens" />
                                    </figure>
                                    <p className="title">Leafy Greens</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/veg4.jpeg" width={55} height={55} alt="Root Vegetables" />
                                    </figure>
                                    <p className="title">Root Vegetables</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/veg5.jpeg" width={55} height={55} alt="Fruits" />
                                    </figure>
                                    <p className="title">Fruits</p>
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

export default VegetableSupplier;
