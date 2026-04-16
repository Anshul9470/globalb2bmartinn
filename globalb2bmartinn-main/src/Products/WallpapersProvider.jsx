import React from 'react';
import { Link } from 'react-router-dom';
import './common.css';

const classifiedData = [
    {
        _id: "990ddf8c88e8a0e0a36d39f9",
        name: "NIKHIL",
        email: "NIKHIL123@gmail.com",
        mobileNumber: "7733932449",
        companyName: "Wallpaperzone",
        productOrService: "Wallpapers",
        imgSrc: "/assets/wall4.jpeg",  // You need to provide the correct image path
        mainProducts: "Home Wallpapers, Decorative Wallpapers, Office Wallpapers",
        altText: "Wallpapers - Wallpaperzone",
        years: "1 YRS",
        location: "Jaipur, Rajasthan, India",
        tooltipText: "45 Wallpaper Street, Jaipur, Rajasthan, India",
        rating: "4.7",
        ratingPercent: "94%",
        ratingsCount: "100",
        responseRate: "95%"
    },
    {
        "_id": "b1234567890jk-wallpaper-studio",
        "name": "Jitender",
        "email": "JITENDER123@gmail.com",
        "password": "JITENDER123",
        "mobileNumber": "9667806105",
        "companyName": "J K Wallpaper Studio",
        "productOrService": "Wallpaper",
        "imgSrc": "/assets/wall7.jpeg",
        "mainProducts": "Wallpapers, Wall Coverings, Interior Design Solutions",
        "altText": "J K Wallpaper Studio - Wallpaper",
        "years": "1 YRS",
        "location": "Jaipur, Rajasthan, India",
        "tooltipText": "J K Wallpaper Studio, Jaipur",
        "rating": "4.7",
        "ratingPercent": "94%",
        "ratingsCount": "58",
        "responseRate": "88%",
        "whatsappConfirmed": true
    }

];

const WallpapersProviders = () => {
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
                                <li><Link to="#">Home Wallpapers</Link></li>
                                <li><Link to="#">Decorative Wallpapers</Link></li>
                                <li><Link to="#">Office Wallpapers</Link></li>
                                <li><Link to="#">3D Wallpapers</Link></li>
                                <li><Link to="#">Textured Wallpapers</Link></li>
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
                                <li><Link to="#">Rajasthan</Link></li>
                                <li><Link to="#">Maharashtra</Link></li>
                                <li><Link to="#">Delhi</Link></li>
                                <li><Link to="#">Karnataka</Link></li>
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
                                        <img src="/assets/wall1.jpeg" width={55} height={55} alt="Home Wallpapers" />
                                    </figure>
                                    <p className="title">Home Wallpapers</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/wall2.jpeg" width={55} height={55} alt="Decorative Wallpapers" />
                                    </figure>
                                    <p className="title">Decorative Wallpapers</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/wall3.jpeg" width={55} height={55} alt="Office Wallpapers" />
                                    </figure>
                                    <p className="title">Office Wallpapers</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/wall4.jpeg" width={55} height={55} alt="3D Wallpapers" />
                                    </figure>
                                    <p className="title">3D Wallpapers</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/wall5.jpeg" width={55} height={55} alt="Textured Wallpapers" />
                                    </figure>
                                    <p className="title">Textured Wallpapers</p>
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

export default WallpapersProviders;
