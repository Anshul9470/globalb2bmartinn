import React from 'react';
import { Link } from 'react-router-dom';
import './common.css';

const classifiedData = [
    {
        _id: "6789ijkl1234mnop",
        name: "Aniket Pawar",
        email: "AniketPawar@gmail.com",
        mobileNumber: "9653254331",
        companyName: "ANM BROTHERS AND CO",
        productOrService: "Ghee",
        imgSrc: "/assets/ghee.jpeg", // Update with the actual image path
        mainProducts: "Ghee",
        altText: "Ghee - ANM Brothers and Co",
        years: "1 YRS",
        location: "Maharashtra, India",
        tooltipText: "Maharashtra, India",
        rating: "4.5",
        ratingPercent: "90%",
        ratingsCount: "30",
        responseRate: "85%"
    },
    {
        "_id": "john-traders-tiruvallur",
        "name": "P. Joseph Franics",
        "email": "lion196703@yahoo.com",
        "password": "9994859511",
        "mobileNumber": "9994859511",
        "companyName": "John Traders",
        "productOrService": "Cow Ghee",
        "imgSrc": "/assets/ghee7.jpg",
        "mainProducts": "Cow Ghee",
        "altText": "John Traders - Cow Ghee",
        "years": "1 YRS",
        "location": "Tiruvallur, Tamil Nadu, India",
        "tooltipText": "John Traders, Cow Ghee, Tiruvallur",
        "rating": "4.2",
        "ratingPercent": "84%",
        "ratingsCount": "45",
        "responseRate": "87%",
        "whatsappConfirmed": true
    },
    {
        "_id": "shree-mahalakshmi-products",
        "name": "Vighanesh Ojha",
        "email": "shreemahalakshmiproducts1@gmail.com",
        "mobileNumber": "9818526177",
        "companyName": "Shree Mahalakshmi Products",
        "productOrService": "Ghee",
        "imgSrc": "/assets/ghee.webp",
        "mainProducts": "Ghee",
        "altText": "Shree Mahalakshmi Products - Ghee",
        "years": "1 YRS",
        "location": "Mumbai, Maharashtra, India",
        "tooltipText": "Shree Mahalakshmi Products, Ghee, Mumbai",
        "rating": "4.7",
        "ratingPercent": "95%",
        "ratingsCount": "30",
        "responseRate": "98%",
        "whatsappConfirmed": true
    }
    
    
];

const GheeProvider = () => {
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
                                <li><Link to="#">Ghee</Link></li>
                                <li><Link to="#">Dairy Products</Link></li>
                                <li><Link to="#">Milk Products</Link></li>
                                <li><Link to="#">Organic Foods</Link></li>
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
                                <li><Link to="#">Punjab</Link></li>
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
                                        <img src="/assets/ghee1.jpeg" width={55} height={55} alt="Ghee" />
                                    </figure>
                                    <p className="title">Ghee</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/ghee2.jpeg" width={55} height={55} alt="Dairy Products" />
                                    </figure>
                                    <p className="title">Dairy Products</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/ghee3.jpeg" width={55} height={55} alt="Milk Products" />
                                    </figure>
                                    <p className="title">Milk Products</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/ghee4.jpeg" width={55} height={55} alt="Organic Foods" />
                                    </figure>
                                    <p className="title">Organic Foods</p>
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

export default GheeProvider;
