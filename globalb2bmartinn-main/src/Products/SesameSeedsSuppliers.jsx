import React from 'react';
import { Link } from 'react-router-dom';
import './common.css';

const classifiedData = [
    {
        name: "Nishant Aggarwal",
        email: "Nishant@gmail.com",
        password: "Nishant@123",
        mobileNumber: "9739866709",
        companyName: "Shyam Trading & Manufacture Pvt Limited",
        productOrService: "Sesame Seeds",
        imgSrc: "/assets/sesame-seeds.jpg", // Correct image path needed
        categories: [
            {
                name: "Natural Sesame Seeds",
                imgSrc: "/assets/sesame-seeds1.jpg", // Correct image path needed
                altText: "Natural Sesame Seeds",
                description: "Natural sesame seeds are widely used in culinary applications and are known for their rich nutty flavor."
            },
            {
                name: "Hulled Sesame Seeds",
                imgSrc: "/assets/sesame-seeds2.jpg", // Correct image path needed
                altText: "Hulled Sesame Seeds",
                description: "Hulled sesame seeds have the outer husk removed, making them more visually appealing for certain food preparations."
            },
            {
                name: "Black Sesame Seeds",
                imgSrc: "/assets/sesame-seeds3.jpg", // Correct image path needed
                altText: "Black Sesame Seeds",
                description: "Black sesame seeds have a stronger, more earthy flavor compared to white sesame seeds and are used in various cuisines."
            },
            {
                name: "Roasted Sesame Seeds",
                imgSrc: "/assets/sesame-seeds4.jpg", // Correct image path needed
                altText: "Roasted Sesame Seeds",
                description: "Roasted sesame seeds have a toasted flavor and are often used as a topping or seasoning in dishes."
            }
        ],
        altText: "Sesame Seeds - Shyam Trading & Manufacture Pvt Limited",
        years: "1 YRS",
        location: "Surat, Gujarat, India",
        tooltipText: "Plot No. 67, GIDC Industrial Area, Surat - 395010, Gujarat, India",
        rating: "4.8",
        ratingPercent: "96%",
        ratingsCount: "180",
        responseRate: "97%"
    }
];

const SesameSeedsSuppliers = () => {
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
                                {classifiedData[0].categories.map((category, index) => (
                                    <li key={index}><Link to="#">{category.name}</Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* Additional filters can be added here */}
                </div>
            </aside>
            <main>
                <section className="section">
                    <p className="sect-title">Explore by Categories</p>
                    <div className="horprd expcatg" id="expcatg">
                        {classifiedData[0].categories.map((category, index) => (
                            <div className="item" key={index}>
                                <Link to="#">
                                    <div className="horprd-box">
                                        <figure>
                                            <img src={category.imgSrc} width={55} height={55} alt={category.altText} />
                                        </figure>
                                        <p className="title">{category.name}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
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

export default SesameSeedsSuppliers;
