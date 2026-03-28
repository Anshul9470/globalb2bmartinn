import React from 'react';
import { Link } from 'react-router-dom';
import './common.css';

const classifiedData = [
   
    {
        "name": "Mr. Naman Kewat",
        "email": "namankewat847@gmail.com",
        "mobileNumber": "6264363718",
        "companyName": "Narmada Shivling Stone",
        "productOrService": "Marbles Shivling Supplier",
        "imgSrc": "/assets/tile4.jpeg",
        "altText": "Marbles Shivling Supplier - Narmada Shivling Stone",
        "mainProducts": "Marble Shivlings, Stone Sculptures, Religious Artifacts",
        "years": "1 YRS",
        "location": "Bhopal, India",
        "tooltipText": "789 Heritage Street, Sacred Art District, Bhopal, India",
        "rating": "4.6",
        "ratingPercent": "92%",
        "ratingsCount": "320",
        "responseRate": "89%"
    },
    {
        "name": "Mr. Vikram",
        "email": "vikram@tadikondagranites.com",
        "mobileNumber": "9849809112",
        "companyName": "Tadikonda Exports",
        "productOrService": "Tiles and Granite Manufacturer",
        "imgSrc": "/assets/tile5.jpeg",
        "altText": "Tiles and Granite Manufacturer - Tadikonda Exports",
        "mainProducts": "Granite Tiles, Marble Tiles, Granite Slabs, Marble Slabs",
        "years": "1 YRS",
        "location": "Hyderabad, India",
        "tooltipText": "123 Stone Street, Granite City, Hyderabad, India",
        "rating": "4.7",
        "ratingPercent": "94%",
        "ratingsCount": "400",
        "responseRate": "91%"
    },
  
    {
        "_id": "s345678901abcdef234585", // Random unique ID
        "name": "Ratan Lal",
        "email": "ratan1081@gmail.com",
        "password": "ratan@123",
        "mobileNumber": "9251861981",
        "companyName": "Ram Marble and General Suppliers",
        "productOrService": "Marbles, stones and Granite Manufacturer",
        "imgSrc": "/assets/granite1.jpeg",  // Example image path
        "mainProducts": "Marbles, Precious Stones, Granite",
        "altText": "Marbles and Granite Manufacturer - Ram Marble and General Suppliers",
        "years": "1 YRS",
        "location": "Jaipur, India",
        "tooltipText": "Warehouse 12, Marble Market, Jaipur, India",
        "rating": "4.5",
        "ratingPercent": "90%",
        "ratingsCount": "48",
        "responseRate": "85%",
        "whatsappConfirmed": true
    },
   
    {
        "_id": "k1234567890l012347",
        "name": "Shimbhu Indora",
        "email": "shimbhu@gmail.com",
        "password": "shimbhu123",
        "mobileNumber": "7014222466",
        "companyName": "Raj Marble Industries",
        "productOrService": "Marble",
        "imgSrc": "/assets/marble1.jpeg",
        "mainProducts": "White Marble, Granite, Marble Slabs",
        "altText": "Marble - Raj Marble Industries",
        "years": "1 YRS",
        "location": "Makrana, Rajasthan, India",
        "tooltipText": "Sector 3, Marble Market, Makrana, Rajasthan, India",
        "rating": "4.7",
        "ratingPercent": "94%",
        "ratingsCount": "75",
        "responseRate": "88%",
        "whatsappConfirmed": true
    },
    {
        "_id": "a1234567890wxyz5803",
        "name": "Prem Chand",
        "email": "premchand@gmail.com",
        "password": "12345678",
        "mobileNumber": "9610509321",
        "companyName": "Laxmi Marble Murti",
        "productOrService": "Marble",
        "imgSrc": "/assets/marble2.jpeg",  // Placeholder for image path
        "mainProducts": "Marble Murtis, Statues, Sculptures",
        "altText": "Marble Products - Laxmi Marble Murti",
        "years": "1 YRS",  // Placeholder for years of experience
        "location": "Jaipur, India",  // Placeholder for location
        "tooltipText": "Laxmi Marble Murti, Jaipur, India",
        "rating": "4.7",  // Placeholder for rating
        "ratingPercent": "94%",  // Placeholder for rating percentage
        "ratingsCount": "80",  // Placeholder for ratings count
        "responseRate": "92%",  // Placeholder for response rate
        "whatsappConfirmed": true
    },
    {
        _id: "r5s6t7u8v9w0x1y2z3a4b5c6",  // Random unique ID
        name: "Mahesh Choudhary",
        email: "Mahesh123@gmail.com",
        mobileNumber: "8000518040",
        companyName: "Bhoomi Marble and Granite",
        productOrService: "Marble",
        imgSrc: "/assets/marble4.jpeg",  // Example image path
        mainProducts: "Marble Slabs, Granite Tiles, Custom Stonework",
        altText: "Marble and Granite - Bhoomi Marble and Granite",
        years: "1 YRS",
        location: "Udaipur, India",
        tooltipText: "25 Stone Market, Udaipur, India",
        rating: "4.7",
        ratingPercent: "93%",
        ratingsCount: "78",
        responseRate: "94%",
        whatsappConfirmed: true
    },
   


];

const MarbleSupplier = () => {
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
                                <li><Link to="#">Floor Tiles</Link></li>
                                <li><Link to="#">Wall Tiles</Link></li>
                                <li><Link to="#">Bathroom Tiles</Link></li>
                                <li><Link to="#">Ceramic Flooring</Link></li>
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
                                <li><Link to="#">Gujarat</Link></li>
                                <li><Link to="#">Maharashtra</Link></li>
                                <li><Link to="#">Rajasthan</Link></li>
                                <li><Link to="#">Uttar Pradesh</Link></li>
                                <li><Link to="#">Tamil Nadu</Link></li>
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
                                        <img src="/assets/tile.avif" width={55} height={55} alt="Floor Tiles" />
                                    </figure>
                                    <p className="title">Floor Tiles</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/tile2.jpeg" width={55} height={55} alt="Wall Tiles" />
                                    </figure>
                                    <p className="title">Wall Tiles</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/tile3.webp" width={55} height={55} alt="Bathroom Tiles" />
                                    </figure>
                                    <p className="title">Bathroom Tiles</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/tile1.jpg" width={55} height={55} alt="Ceramic Flooring" />
                                    </figure>
                                    <p className="title">Ceramic Flooring</p>
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

export default MarbleSupplier;
