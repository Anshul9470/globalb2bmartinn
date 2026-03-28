import React from 'react';
import { Link } from 'react-router-dom';
import './common.css';

const classifiedData = [
    {
        _id: "66852a3b9f2cecbc7cc113e7",
        name: "Mr. Mahesh Patil",
        email: "contact@rsvcommerce.com",
        password: "mahesh@123",
        mobileNumber: "9112220152",
        companyName: "Radiant Star Ventures Commerce Pvt. Ltd.",
        productOrService: "pulses dealer",
        imgSrc: "/assets/puls.jpeg",  // Provide the correct image path
        altText: "Pulses - Radiant Star Ventures",
        mainProducts: "Lentils, Chickpeas, Beans",
        years: "1 YRS",
        location: "Mumbai, India",
        tooltipText: "123 Pulses Lane, Agribusiness Park, Mumbai, India",
        rating: "4.8",
        ratingPercent: "96%",
        ratingsCount: "120",
        responseRate: "90%"
    },
    {
        "name": "Chetan",
        "email": "abc@gmail.com",
        "mobileNumber": "8208040966",
        "companyName": "Slotan Solutions",
        "productOrService": "Grains Processing Plant Manufacturer",
        "imgSrc": "/assets/grains.jpeg",
        "altText": "Grains Processing Plant Manufacturer - Slotan Solutions",
        "mainProducts": "Grain Mills, Processing Equipment, Packaging Machines, Cleaning Systems",
        "years": "1 YRS",
        "location": "Delhi, India",
        "tooltipText": "456 Industrial Park, Machinery Lane, Delhi, India",
        "rating": "4.8",
        "ratingPercent": "96%",
        "ratingsCount": "400",
        "responseRate": "93%"
    },
    {
        _id: "unique_id_for_sandip", // Replace with actual unique ID if needed
        name: "Sandip Madhukar",
        email: "abc@gmail.com",
        password: "SANDIP@123", // Including the password as specified
        mobileNumber: "8788625273",
        companyName: "Sharayu Enterprises",
        productOrService: "Grains processing plant",
        imgSrc: "/assets/gain.jpeg",  // You need to provide the correct image path
        mainProducts: "Rice, Wheat, Pulses, Spices",
        altText: "Grains Processing Plant - Sharayu Enterprises",
        years: "1 YRS",
        location: "Mumbai, India",
        tooltipText: "123 Grain Market, Dadar, Mumbai, India",
        rating: "4.7",
        ratingPercent: "95%",
        ratingsCount: "120",
        responseRate: "97%"
    }
    ,
    {
        _id: "unique_id_for_manoj", // Replace with actual unique ID if needed
        name: "MANOJ",
        email: "abc@gmail.com",
        password: "MANOJ@123", // Including the password as specified
        mobileNumber: "8482960079",
        companyName: "Bharat Process Equipment",
        productOrService: "Grains processing plant",
        imgSrc: "/assets/grain1.jpeg",  // You need to provide the correct image path
        mainProducts: "Rice, Wheat, Pulses, Spices",
        altText: "Grains Processing Plant - Bharat Process Equipment",
        years: "1 YRS",
        location: "Rajasthan, India",
        tooltipText: "456 Equipment Market, Dadar, Mumbai, India",
        rating: "4.7",
        ratingPercent: "95%",
        ratingsCount: "120",
        responseRate: "97%"
    },
    {
        "_id": "b1234567890c012347",
        "name": "Mohammed Aafaq",
        "email": "mohammed.aafaq@gmail.com",
        "password": "afaqmd3005",
        "mobileNumber": "9035273477",
        "companyName": "MDSuhan Exports",
        "productOrService": "Peanut",
        "imgSrc": "/assets/peanut.jpeg",
        "mainProducts": "Raw Peanuts, Roasted Peanuts, Peanut Butter",
        "altText": "Peanut - MDSuhan Exports",
        "years": "1 YRS",
        "location": "Chennai, Tamil Nadu, India",
        "tooltipText": "Sector 7, Agricultural Market, Chennai, Tamil Nadu, India",
        "rating": "4.6",
        "ratingPercent": "92%",
        "ratingsCount": "48",
        "responseRate": "85%",
        "whatsappConfirmed": true
    },

    {
        _id: "unique_id_for_rakesh", // Replace with actual unique ID if needed
        name: "Rakesh Sharma",
        email: "abc@gmail.com",
        password: "rakesh@123", // Including the password as specified
        mobileNumber: "8806441969",
        companyName: "Vishwakarma Engineering Works",
        productOrService: "Grains processing plant",
        imgSrc: "/assets/grain2.jpeg",  // You need to provide the correct image path
        mainProducts: "Rice, Wheat, Pulses, Spices",
        altText: "Grains Processing Plant - Vishwakarma Engineering Works",
        years: "1 YRS",
        location: "Uttar pradesh, India",
        tooltipText: "789 Engineering Market, Dadar, Mumbai, India",
        rating: "4.7",
        ratingPercent: "95%",
        ratingsCount: "120",
        responseRate: "97%"
    },
    {
        _id: "unique_id_for_mufaddal", // Replace with actual unique ID if needed
        name: "Mufaddal Kanchwala",
        email: "abc@gmail.com",
        password: "mufa@123", // Including the password as specified
        mobileNumber: "7721818776",
        companyName: "ALPHA PIPING SYSTEM PVT.LTD.",
        productOrService: "Grains processing plant",
        imgSrc: "/assets/grain4.jpeg",  // You need to provide the correct image path
        mainProducts: "Rice, Wheat, Pulses, Spices",
        altText: "Grains Processing Plant - ALPHA PIPING SYSTEM PVT.LTD.",
        years: "1 YRS",
        location: "Haryana, India",
        tooltipText: "789 Piping Market, Dadar, Mumbai, India",
        rating: "4.7",
        ratingPercent: "95%",
        ratingsCount: "120",
        responseRate: "97%"
    },
    {
        "_id": "712-trading-akola",
        "name": "Rahul",
        "email": "rahulthombare9667@gmail.com",
        "password": "rahulrahul",
        "mobileNumber": "9309525859",
        "companyName": "7/12 Trading Company",
        "productOrService": "Soyabean",
        "imgSrc": "/assets/soyabean.jpg",
        "mainProducts": "Soyabean",
        "altText": "7/12 Trading Company - Soyabean",
        "years": "1 YRS",
        "location": "Akola, Maharashtra, India",
        "tooltipText": "7/12 Trading Company, Soyabean, Akola",
        "rating": "4.5",
        "ratingPercent": "90%",
        "ratingsCount": "20",
        "responseRate": "85%",
        "whatsappConfirmed": true
    },
    {
        "name": "Rajesh Jhaveri",
        "email": "abc@gmail.com",
        "password": "rajesh@123",
        "mobileNumber": "9825040326",
        "companyName": "Jhaveri Organic Farms",
        "productOrService": "Pulses",
        "imgSrc": "/assets/pulses2.jpg",
        "mainProducts": "Pulses",
        "altText": "Jhaveri Organic Farms - Pulses",
        "years": "1 YRS",
        "location": "Vadodara, Gujarat, India",
        "tooltipText": "Jhaveri Organic Farms, Pulses, Vadodara",
        "rating": "4.5",
        "ratingPercent": "90%",
        "ratingsCount": "25",
        "responseRate": "92%",
        "whatsappConfirmed": false
    }
    
    





    // Add more items if needed
];

const PulsesDealer = () => {
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
                                <li><Link to="#">Lentils</Link></li>
                                <li><Link to="#">Chickpeas</Link></li>
                                <li><Link to="#">Beans</Link></li>
                                <li><Link to="#">Peas</Link></li>
                                <li><Link to="#">Grains</Link></li>
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
                                <li><Link to="#">Punjab</Link></li>
                                <li><Link to="#">Uttar Pradesh</Link></li>
                                <li><Link to="#">Karnataka</Link></li>
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
                                        <img src="/assets/pul1.jpeg" width={55} height={55} alt="Lentils" />
                                    </figure>
                                    <p className="title">Lentils</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/pul2.jpeg" width={55} height={55} alt="Chickpeas" />
                                    </figure>
                                    <p className="title">Chickpeas</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/pul3.jpeg" width={55} height={55} alt="Beans" />
                                    </figure>
                                    <p className="title">Beans</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/pul4.jpeg" width={55} height={55} alt="Peas" />
                                    </figure>
                                    <p className="title">Peas</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/pul5.jpeg" width={55} height={55} alt="Grains" />
                                    </figure>
                                    <p className="title">Grains</p>
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

export default PulsesDealer;
