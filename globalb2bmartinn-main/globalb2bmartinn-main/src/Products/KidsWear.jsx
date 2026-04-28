import React from 'react';
import { Link } from 'react-router-dom';
import './common.css';

const classifiedData = [


    {
        "name": "Mr. Sarwan",
        "email": "sarwan@gmail.com",
        "password": "sarwan@123",
        "mobileNumber": "8820154190",
        "companyName": "Sarik Garments",
        "productOrService": "Kids Garments",
        "imgSrc": "/assets/kids.jpg",  // Provide the correct image path
        "altText": "Kids Garments - Sarik Garments",
        "mainProducts": "Children's Clothing, Babywear, Kids Accessories",
        "years": "1 YRS",
        "location": "Nagpur, India",
        "tooltipText": "789 Kids Garments Lane, Industrial Park, Nagpur, India",
        "rating": "4.7",
        "ratingPercent": "94%",
        "ratingsCount": "85",
        "responseRate": "88%"
    }
    ,

    {
        "name": "ujjwal pandey",
        "email": "ujjwalpandey123@gmail.com",
        "mobileNumber": "6206033473",
        "companyName": "pandey garment",
        "productOrService": "Garment Manufacturers",
        "imgSrc": "/assets/gr3.jpeg",
        "mainProducts": "Formal garments, Casual garments, Designer garments, etc.",
        "altText": "Garment Manufacturers - Pandey Garment",
        "years": "1 YRS",
        "location": "Mumbai, Maharashtra, India",
        "tooltipText": "456, Bandra West, Mumbai - 400050, Maharashtra, India",
        "rating": "4.9",
        "ratingPercent": "98%",
        "ratingsCount": "250",
        "responseRate": "99%"
    },
  

































];

const Kidwear = () => {
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
                                <li><Link to="#">Men's Wear</Link></li>
                                <li><Link to="#">Women's Wear</Link></li>
                                <li><Link to="#">Kids' Wear</Link></li>
                                <li><Link to="#">Ethnic Wear</Link></li>
                                <li><Link to="#">Formal Wear</Link></li>
                                <li><Link to="#">Casual Wear</Link></li>
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
                                <li><Link to="#">Delhi</Link></li>
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
                                        <img src="/assets/gr1.jpeg" width={55} height={55} alt="Men's Wear" />
                                    </figure>
                                    <p className="title">Men's Wear</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/gr2.jpeg" width={55} height={55} alt="Women's Wear" />
                                    </figure>
                                    <p className="title">Women's Wear</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/gr3.jpeg" width={55} height={55} alt="Kids' Wear" />
                                    </figure>
                                    <p className="title">Kids' Wear</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/gr5.jpeg" width={55} height={55} alt="Ethnic Wear" />
                                    </figure>
                                    <p className="title">Ethnic Wear</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/formal.jpg" width={55} height={55} alt="Formal Wear" />
                                    </figure>
                                    <p className="title">Formal Wear</p>
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

export default Kidwear;
