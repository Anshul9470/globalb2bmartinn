import React from 'react';
import { Link } from 'react-router-dom';
import './common.css';

const classifiedData = [
    {
        _id: "667bb8e29644befaa9547ffa",
        name: "Jayantipur Flour Mill",
        email: "bhartidikshant@gmail.com",
        mobileNumber: "9939990369",
        companyName: "Jayantipur Flour Mill",
        productOrService: "wheat",
        imgSrc: "/assets/whe1.jpg",  // You need to provide the correct image path
        mainProducts: "Wheat Flour, Wheat Bran, Wheat Semolina",
        altText: "Flour Mill - Jayantipur Flour Mill",
        years: "1 YRS",
        location: "Bihar, India",
        tooltipText: "789 Flour Mill Road, Jayantipur, Bihar, India",
        rating: "4.7",
        ratingPercent: "94%",
        ratingsCount: "120",
        responseRate: "96%"
    },
    {
        name: "Mr. M. Anand Babu",
        email: "anandbabu.mateti@gmail.com",
        mobileNumber: "8125632153",
        companyName: "JAGADEES AGENCIES",
        productOrService: "Flour Mill",
        imgSrc: "/assets/flour1.jpeg",  // Provide the correct image path
        altText: "Flour Mill - JAGADEES AGENCIES",
        mainProducts: "Wheat Flour, Rice Flour, Corn Flour, Multigrain Flour",
        years: "1 YRS",
        location: "Hyderabad, India",
        tooltipText: "1234, Industrial Area, Hyderabad 500001",
        rating: "4.7",
        ratingPercent: "94%",
        ratingsCount: "180",
        responseRate: "99%"
    },
    {
        "_id": "s1234567890t012347",
        "name": "Tushar Patel",
        "email": "tusharp808@gmail.com",
        "password": "tusharp808",
        "mobileNumber": "9998685168",
        "companyName": "Amar Industries",
        "productOrService": "Flour Mill",
        "imgSrc": "/assets/flour6.jpeg",
        "mainProducts": "Wheat Flour Mills, Corn Flour Mills, Multi-Functional Flour Mills",
        "altText": "Flour Mill - Amar Industries",
        "years": "1 YRS",
        "location": "Surat, Gujarat, India",
        "tooltipText": "Sector 10, Industrial Area, Surat, Gujarat, India",
        "rating": "4.5",
        "ratingPercent": "90%",
        "ratingsCount": "55",
        "responseRate": "85%",
        "whatsappConfirmed": true
    },
    {
        "_id": "t1234567890u012347",
        "name": "Jaiswal Flour Mill",
        "email": "JAISWALFLOURMILL@gmail.com",
        "password": "JAISWAL FLOUR MILL",
        "mobileNumber": "9827798092",
        "companyName": "Jaiswal Flour Mill",
        "productOrService": "Flour Mill",
        "imgSrc": "/assets/flour7.jpeg",
        "mainProducts": "Wheat Flour Mills, Rice Flour Mills, Multi-Functional Flour Mills",
        "altText": "Flour Mill - Jaiswal Flour Mill",
        "years": "1 YRS",
        "location": "Indore, Madhya Pradesh, India",
        "tooltipText": "Sector 5, Flour Market, Indore, Madhya Pradesh, India",
        "rating": "4.7",
        "ratingPercent": "93%",
        "ratingsCount": "70",
        "responseRate": "88%",
        "whatsappConfirmed": true
    },
    {
        "_id": "u1234567890v012347",
        "name": "S.D. Bhosle",
        "email": "S.D.Bhosles@gmail.com",
        "password": "S.D.Bhosle's",
        "mobileNumber": "7304747777",
        "companyName": "Om Namah Shivay Flour Mill",
        "productOrService": "Flour Mill",
        "imgSrc": "/assets/flour8.jpeg",
        "mainProducts": "Wheat Flour Mills, Corn Flour Mills, Multi-Functional Flour Mills",
        "altText": "Flour Mill - Om Namah Shivay Flour Mill",
        "years": "1 YRS",
        "location": "Pune, Maharashtra, India",
        "tooltipText": "Sector 3, Flour Market, Pune, Maharashtra, India",
        "rating": "4.4",
        "ratingPercent": "88%",
        "ratingsCount": "40",
        "responseRate": "80%",
        "whatsappConfirmed": true
    },
    {
        "_id": "v1234567890w012347",
        "name": "Himanshu",
        "email": "hfmbhopal@yahoo.com",
        "password": "himanshu",
        "mobileNumber": "7554012200",
        "companyName": "Himanshu Flour Mills",
        "productOrService": "Flour Mill",
        "imgSrc": "/assets/flour9.jpeg",
        "mainProducts": "Wheat Flour Mills, Rice Flour Mills, Multi-Functional Flour Mills",
        "altText": "Flour Mill - Himanshu Flour Mills",
        "years": "1 YRS",
        "location": "Bhopal, Madhya Pradesh, India",
        "tooltipText": "Sector 4, Flour Market, Bhopal, Madhya Pradesh, India",
        "rating": "4.3",
        "ratingPercent": "86%",
        "ratingsCount": "35",
        "responseRate": "78%",
        "whatsappConfirmed": true
    }



];

const WheatSupplier = () => {
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
                                <li><Link to="#">Wheat Flour</Link></li>
                                <li><Link to="#">Wheat Bran</Link></li>
                                <li><Link to="#">Wheat Semolina</Link></li>
                                <li><Link to="#">Whole Wheat</Link></li>
                                <li><Link to="#">Organic Wheat</Link></li>
                                <li><Link to="#">Gluten-Free Wheat</Link></li>
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
                                <li><Link to="#">Uttar Pradesh</Link></li>
                                <li><Link to="#">Punjab</Link></li>
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
                                        <img src="/assets/whe2.jpg" width={55} height={55} alt="Wheat Flour" />
                                    </figure>
                                    <p className="title">Wheat Flour</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/whe3.jpg" width={55} height={55} alt="Wheat Bran" />
                                    </figure>
                                    <p className="title">Wheat Bran</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/whe4.jpg" width={55} height={55} alt="Wheat Semolina" />
                                    </figure>
                                    <p className="title">Wheat Semolina</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/whe5.avif" width={55} height={55} alt="Whole Wheat" />
                                    </figure>
                                    <p className="title">Whole Wheat</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/whe6.jpeg" width={55} height={55} alt="Organic Wheat" />
                                    </figure>
                                    <p className="title">Organic Wheat</p>
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

export default WheatSupplier;
