import React from 'react';
import { Link } from 'react-router-dom';
import './common.css';

const classifiedData = [
    {
        "name": "Kalptaru Tractors and Agro",
        "email": "",
        "mobileNumber": "",
        "companyName": "Kalptaru Tractors and Agro",
        "productOrService": "Tyres",
        "imgSrc": "/assets/k5.webp",
        "mainProducts": "Tyres",
        "altText": "Kalptaru Tractors and Agro - Tyres",
        "years": "1 YRS",
        "location": "PRATAPPURA M. G. ROAD, AGRA, India",
        "tooltipText": "Kalptaru Tractors and Agro, Agra",
        "rating": "4.0",
        "ratingPercent": "80%",
        "ratingsCount": "50",
        "responseRate": "85%",
        "path":'/kalptaru-tractor-agro'
    },
    
    {
        name: "ravi",
        email: "Ravi112@gmail.com",
        password: "raviravi",
        mobileNumber: "9974128117",
        companyName: "Advance Poly Pack",
        productOrService: "packing items",
        imgSrc: "/assets/car2.jpg",
        altText: "Packing Items - Advance Poly Pack",
        mainProducts: "Bubble Wrap, Stretch Film, Packing Tape",
        years: "1 YRS",
        location: "Chennai, India",
        tooltipText: "123 Packing Lane, Poly District, Chennai, India",
        rating: "4.9",
        ratingPercent: "95%",
        ratingsCount: "80",
        responseRate: "90%"
    },
    {
        _id: "g5h6i7890123456789abcdef", // Random unique ID
        name: "Aman",
        email: "aman123@gmail.com",
        password: "aman1234", // Including the password as specified
        mobileNumber: "8982823203",
        companyName: "Ambika Auto Mobile",
        productOrService: "Four-Wheeler Accessories",
        imgSrc: "/assets/car5.jpeg",  // Example image path
        mainProducts: "Car Covers, Floor Mats, Seat Covers, Car Care Products",
        altText: "Four-Wheeler Accessories - Ambika Auto Mobile",
        years: "1 YRS",
        location: "Pune, India",
        tooltipText: "123 Auto Street, Pune, India",
        rating: "4.4",
        ratingPercent: "89%",
        ratingsCount: "80",
        responseRate: "92%"
    },


    {
        name: "Ankit Sehwag",
        email: "ankitsehwag@gmail.com",
        mobileNumber: "7892665801",
        companyName: "Pihu Automotive",
        productOrService: "Car Accessories",
        imgSrc: "/assets/cars.jpg",  // Correct image path needed
        mainProducts: "Car seat covers, Car mats, Steering wheel covers, etc.",
        altText: "Car Accessories - Pihu Automotive",
        years: "1 YRS",
        location: "Delhi, India",
        tooltipText: "789, Karol Bagh, Delhi - 110005, India",
        rating: "4.6",
        ratingPercent: "95%",
        ratingsCount: "180",
        responseRate: "97%"
    },
    {
        "name": "Ramiz",
        "email": "Ramiz123@gmail.com",
        "mobileNumber": "8084479185",
        "companyName": "Noxbeat",
        "productOrService": "Car Stereo",
        "imgSrc": "/assets/car4.jpeg",  // Provide the correct image path
        "mainProducts": "Car Audio Systems, Bluetooth Car Stereos, Subwoofers, Amplifiers",
        "altText": "Car Stereo - Noxbeat",
        "years": "1 YRS",
        "location": "Delhi, India",
        "tooltipText": "Location details not provided",
        "rating": "80%",
        "ratingPercent": "85%",
        "ratingsCount": "25",
        "responseRate": "78%"
    },
    {
        "name": "Shadab Khan",
        "email": "shadab123@gmail.com",
        "mobileNumber": "8302459881",
        "companyName": "R.J. Old Iron and Old Tyre",
        "productOrService": "Tyre",
        "imgSrc": "/assets/tyres.jpeg",
        "altText": "Tyre - R.J. Old Iron and Old Tyre",
        "mainProducts": "Old Tyres, Scrap Iron, Recycled Materials",
        "years": "1 YRS",
        "location": "Kanpur, India",
        "tooltipText": "78 Industrial Area, Recycle Zone, Kanpur, India",
        "rating": "4.3",
        "ratingPercent": "86%",
        "ratingsCount": "210",
        "responseRate": "85%"
    }


    // Add more items if needed
];

const CarAccessoriesComponent = () => {
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
                                <li><Link to="#">Car Seat Covers</Link></li>
                                <li><Link to="#">Car Mats</Link></li>
                                <li><Link to="#">Steering Wheel Covers</Link></li>
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
                                <li><Link to="#">Delhi</Link></li>
                                <li><Link to="#">Maharashtra</Link></li>
                                <li><Link to="#">Uttar Pradesh</Link></li>
                                <li><Link to="#">Haryana</Link></li>
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
                        {/* Example categories */}
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/car1.jpg" width={55} height={55} alt="Car Seat Covers" />
                                    </figure>
                                    <p className="title">Car Seat Covers</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/car2.jpg" width={55} height={55} alt="Car Mats" />
                                    </figure>
                                    <p className="title">Car Mats</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/car3.jpg" width={55} height={55} alt="Steering Wheel Covers" />
                                    </figure>
                                    <p className="title">Steering Wheel Covers</p>
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

export default CarAccessoriesComponent;
