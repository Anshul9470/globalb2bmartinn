import React from 'react';
import { Link } from 'react-router-dom';
import './common.css';

const classifiedData = [
    
    {
        "name": "Sumit",
        "email": "farah@globalb2bmart.com",
        "mobileNumber": "8873655865",
        "companyName": "M/s Steel and Cement",
        "productOrService": "Steel and Cement",
        "imgSrc": "/assets/ste1.webp",  // You need to provide the correct image path
        "mainProducts": "Steel rods, Cement blocks, Steel sheets, etc.",
        "altText": "Steel and Cement - M/s Steel and Cement",
        "years": "1 YRS",
        "location": "Delhi, India",
        "tooltipText": "456, Connaught Place, New Delhi - 110001, Delhi, India",
        "rating": "4.7",
        "ratingPercent": "94%",
        "ratingsCount": "200",
        "responseRate": "97%"
    },
    {
        "name": "Danish Malik",
        "email": "masumanenvirohpr@gmail.com",
        "password": "Danish@123",
        "mobileNumber": "9259552670",
        "companyName": "Masuman Enviro Engineering Company",
        "productOrService": "Steel Tank Manufacturer",
        "imgSrc": "/assets/silvertank.jpeg", // Correct image path needed
        "mainProducts": "Industrial Steel Tanks, Storage Tanks, Water Tanks, Custom Tanks, Pressure Vessels",
        "altText": "Steel Tank Manufacturer - Masuman Enviro Engineering Company",
        "years": "1 YRS",
        "location": "Mumbai, Maharashtra, 400092, India",
        "tooltipText": "456, Industrial Area, Mumbai - 400092, Maharashtra, India",
        "rating": "4.6",
        "ratingPercent": "92%",
        "ratingsCount": "180",
        "responseRate": "97%"
    },
    {
        name: "Chetan Jain",
        email: "mamtasteel@gmail.com",
        mobileNumber: "9867077337",
        companyName: "Mamta Steel Center",
        productOrService: "Utensils",
        imgSrc: "/assets/stes.webp",  // You need to provide the correct image path
        mainProducts: 'steel Bowls, steel Plates, steel pots steel sppons, etc.',
        altText: "Utensils - Mamta Steel Center",
        years: "1 YRS",
        location: "Mumbai, Maharashtra, India",
        tooltipText: "123, Dadar West, Mumbai - 400028, Maharashtra, India",
        rating: "4.8",
        ratingPercent: "96%",
        ratingsCount: "150",
        responseRate: "98%"
    },
    {
        "_id": "s345678901abcdef234577", // Random unique ID
        "name": "Prince",
        "email": "princeenterpriseshubli@gmail.com",
        "password": "prince@123",
        "mobileNumber": "9590888855",
        "companyName": "Prince Enterprises",
        "productOrService": "Paper Plate Raw Material",
        "imgSrc": "/assets/paperplate1.jpeg",  // Example image path
        "mainProducts": "Paper Plate Raw Material, Disposable Items",
        "altText": "Paper Plate Raw Material - Prince Enterprises",
        "years": "1 YRS",
        "location": "Hubli, India",
        "tooltipText": "Plot 9, Industrial Area, Hubli, India",
        "rating": "4.2",
        "ratingPercent": "84%",
        "ratingsCount": "36",
        "responseRate": "78%",
        "whatsappConfirmed": false
    },



    // Add more items if needed
];

const Plates = () => {
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
                                <li><Link to="#">Steel Plates</Link></li>
                                <li><Link to="#">Steel Bowls</Link></li>
                                <li><Link to="#">Steel Spoons</Link></li>
                                <li><Link to="#">Steel Glasses</Link></li>
                                <li><Link to="#">Steel Pots</Link></li>
                                <li><Link to="#">Steel Cookware</Link></li>
                                <li><Link to="#">Steel Containers</Link></li>
                                <li><Link to="#">Steel Utensils</Link></li>
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
                                <li><Link to="#">Tamil Nadu</Link></li>
                                <li><Link to="#">Karnataka</Link></li>
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
                                        <img src="/assets/ste1.webp" width={55} height={55} alt="Steel Plates" />
                                    </figure>
                                    <p className="title">Steel Plates</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/ste2.png" width={55} height={55} alt="Steel Bowls" />
                                    </figure>
                                    <p className="title">Steel Bowls</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/ste3.jpg" width={55} height={55} alt="Steel Spoons" />
                                    </figure>
                                    <p className="title">Steel Spoons</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/ste4.jpg" width={55} height={55} alt="Steel Glasses" />
                                    </figure>
                                    <p className="title">Steel Glasses</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/ste4.webp" width={55} height={55} alt="Steel Pots" />
                                    </figure>
                                    <p className="title">Steel Pots</p>
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
                                        {/* <div className="item">
                                            <div className="ca-box modal-btn" data-modal="motc" data-src={item.trustCertificateUrl}>
                                                <p><i className="l3icon motc-icon" /></p>
                                            </div>
                                        </div> */}
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

export default Plates;
