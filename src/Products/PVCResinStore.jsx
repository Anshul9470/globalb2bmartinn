import React from 'react';
import { Link } from 'react-router-dom';
import './common.css';

const classifiedData = [
    {
        "name": "Nancy An",
        "email": "info@langruichem.cn",
        "password": "Langrui1209",
        "mobileNumber": "3934636771",
        "companyName": "Henan Langrui Chemical Co., Ltd.",
        "productOrService": "We are manufacturer of 2-furaldehyde",
        "imgSrc": "/assets/henan chemical1.jpg",
        "mainProducts": "2-furaldehyde, Chemical Solutions",
        "altText": "Henan Langrui Chemical - 2-furaldehyde",
        "years": "1 YRS",
        "location": "Henan, China",
        "tooltipText": "Henan Langrui Chemical, Henan",
        "rating": "4.5",
        "ratingPercent": "90%",
        "ratingsCount": "120",
        "responseRate": "92%",
        "whatsappConfirmed": true
    },
    
    {
        "name": "Mr. Mayank",
        "email": "mayank@gmail.com",
        "password": "mayank@123",
        "mobileNumber": "9080546930",
        "companyName": "VIBRANT COLORTECH PRIVATE LIMITED",
        "productOrService": "Masterbatches",
        "imgSrc": "/assets/Masterbatches.jpg",  // Provide the correct image path
        "altText": "Masterbatches - VIBRANT COLORTECH PRIVATE LIMITED",
        "mainProducts": "Color Masterbatches, Additive Masterbatches, Polymer Compounds",
        "years": "1 YRS",
        "location": "Nagpur, India",
        "tooltipText": "789 Masterbatch Lane, Industrial Park, Nagpur, India",
        "rating": "4.7",
        "ratingPercent": "94%",
        "ratingsCount": "85",
        "responseRate": "88%"
    },
    {
        "name": "Ms. Priya",
        "email": "priyaindustries@gmail.com",
        "password": "priya@123",
        "mobileNumber": "9442298765",
        "companyName": "Priya Industries",
        "productOrService": "PVC Products",
        "imgSrc": "/assets/pvc-pipe.jpg",
        "altText": "PVC Products - Priya Industries",
        "mainProducts": "PVC Pipes, PVC Doors, PVC Profiles",
        "years": "1 YRS",
        "location": "Chennai, India",
        "tooltipText": "123 PVC Street, Industrial Area, Chennai, India",
        "rating": "4.8",
        "ratingPercent": "96%",
        "ratingsCount": "75",
        "responseRate": "90%"
    },

    {
        name: "Aakash",
        email: "aakash123@gmail.com",
        mobileNumber: "7838494965",
        companyName: "Manglam Plast",
        productOrService: "PVC Resin and all related chemicals",
        imgSrc: "/assets/pvc5.jpg",  // Provide the correct image path
        altText: "PVC Resin - Manglam Plast",
        mainProducts: "PVC Resin, Plasticizers, Stabilizers",
        years: "1 YRS",
        location: "Delhi, India",
        tooltipText: "789 PVC Street, Polymer District, Delhi, India",
        rating: "4.5",
        ratingPercent: "90%",
        ratingsCount: "75",
        responseRate: "88%"
    },
    {
        "name": "Ambul Akbar",
        "email": "ambul123@gmail.com",
        "mobileNumber": "7219292265",
        "companyName": "Plaza Chemical",
        "productOrService": "Chemical",
        "imgSrc": "/assets/chemical1.jpeg",  // Provide the correct image path
        "mainProducts": "Industrial Chemicals, Laboratory Chemicals",
        "altText": "Chemical - Plaza Chemical",
        "years": "1 YRS",
        "location": "Delhi, India",
        "tooltipText": "Location details not provided",
        "rating": "85%",
        "ratingPercent": "87%",
        "ratingsCount": "30",
        "responseRate": "90%"
    },
    {
        "_id": "b1234567890chems-logitech-private-limited",
        "name": "Pratik",
        "email": "info@chemslogitech.com",
        "password": "Chems@1402",
        "mobileNumber": "9272129992",
        "companyName": "CHEMS LOGITECH PRIVATE LIMITED",
        "productOrService": "Industrial Chemicals",
        "imgSrc": "/assets/chemical2.jpeg",
        "mainProducts": "Industrial Chemicals, Chemical Solutions, Chemical Supplies",
        "altText": "CHEMS LOGITECH PRIVATE LIMITED - Industrial Chemicals",
        "years": "1 YRS",
        "location": "Pune, Maharashtra, India",
        "tooltipText": "CHEMS LOGITECH PRIVATE LIMITED, Pune, Maharashtra",
        "rating": "4.9",
        "ratingPercent": "97%",
        "ratingsCount": "120",
        "responseRate": "92%",
        "whatsappConfirmed": true
    },
    {
        "name": "Vishit Patel",
        "email": "VishitPatel@gmail.com",
        "password": "12345678",
        "mobileNumber": "9998745599",
        "companyName": "Canopy Enterprise",
        "productOrService": "Chemical",
        "imgSrc": "/assets/chemical4.jpeg",
        "mainProducts": "Chemicals, Industrial Solutions",
        "altText": "Canopy Enterprise - Chemical",
        "years": "1 YRS",
        "location": "Gujarat, India",
        "tooltipText": "Canopy Enterprise, Gujarat",
        "rating": "4.0",
        "ratingPercent": "80%",
        "ratingsCount": "50",
        "responseRate": "88%",
        "whatsappConfirmed": false
    },
    {
        "name": "Narendra Sarode",
        "email": "abc@gmail.com",
        "password": "sarode@123",
        "mobileNumber": "9420161155",
        "companyName": "Jai Swaminarayan Multichem",
        "productOrService": "Chemicals",
        "imgSrc": "/assets/chemical3.jpg",
        "mainProducts": "Chemicals",
        "altText": "Jai Swaminarayan Multichem - Chemicals",
        "years": "1 YRS",
        "location": "Rajkot, Gujarat, India",
        "tooltipText": "Jai Swaminarayan Multichem, Rajkot",
        "rating": "4.5",
        "ratingPercent": "90%",
        "ratingsCount": "25",
        "responseRate": "92%",
        "whatsappConfirmed": true
    },
   
    
   

    // Add more items if needed
];

const PVCResinStore = () => {
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
                                <li><Link to="#">PVC Resin</Link></li>
                                <li><Link to="#">Plasticizers</Link></li>
                                <li><Link to="#">Stabilizers</Link></li>
                                <li><Link to="#">PVC Additives</Link></li>
                                <li><Link to="#">Polymer Compounds</Link></li>
                                <li><Link to="#">Chemical Processing Aids</Link></li>
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
                                <li><Link to="#">Delhi</Link></li>
                                <li><Link to="#">Maharashtra</Link></li>
                                <li><Link to="#">Gujarat</Link></li>
                                <li><Link to="#">Tamil Nadu</Link></li>
                                <li><Link to="#">Uttar Pradesh</Link></li>
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
                                        <img src="/assets/ch1.jpg" width={55} height={55} alt="PVC Resin" />
                                    </figure>
                                    <p className="title">PVC Resin</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/pvc3.jpg" width={55} height={55} alt="Plasticizers" />
                                    </figure>
                                    <p className="title">Plasticizers</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/pvc2.jpg" width={55} height={55} alt="Stabilizers" />
                                    </figure>
                                    <p className="title">Stabilizers</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/pvc4.jpg" width={55} height={55} alt="PVC Additives" />
                                    </figure>
                                    <p className="title">PVC Additives</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/pvc5.jpg" width={55} height={55} alt="Polymer Compounds" />
                                    </figure>
                                    <p className="title">Polymer Compounds</p>
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

export default PVCResinStore;
