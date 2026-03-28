import React from 'react';
import { Link } from 'react-router-dom';
import './common.css';

const classifiedData = [
    {
        name: "rehman",
        email: "farah@globalb2bmart.com",
        password: "farah1234",
        mobileNumber: "9535715600",
        companyName: "full and final",
        productOrService: "iron hammer",
        imgSrc: "/assets/hams.jpg",  // Provide the correct image path
        altText: "Iron Hammer - full and final",
        mainProducts: "Iron Hammer, Sledge Hammer, Ball Peen Hammer",
        years: "2 YRS",
        location: "Mumbai, India",
        tooltipText: "123 Hammer Street, Industrial Zone, Mumbai, India",
        rating: "4.3",
        ratingPercent: "86%",
        ratingsCount: "40",
        responseRate: "80%"
    }
    // Add more items if needed
];

const IronHammer = () => {
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
                                <li><Link to="#">Iron Hammer</Link></li>
                                <li><Link to="#">Sledge Hammer</Link></li>
                                <li><Link to="#">Ball Peen Hammer</Link></li>
                                <li><Link to="#">Claw Hammer</Link></li>
                                <li><Link to="#">Dead Blow Hammer</Link></li>
                                <li><Link to="#">Mallet</Link></li>
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
                                <li><Link to="#">Delhi</Link></li>
                                <li><Link to="#">Tamil Nadu</Link></li>
                                <li><Link to="#">Karnataka</Link></li>
                                <li><Link to="#">Gujarat</Link></li>
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
                                        <img src="/assets/ham1.jpg" width={55} height={55} alt="Iron Hammer" />
                                    </figure>
                                    <p className="title">Iron Hammer</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/ham2.jpg" width={55} height={55} alt="Sledge Hammer" />
                                    </figure>
                                    <p className="title">Sledge Hammer</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/ham3.jpg" width={55} height={55} alt="Ball Peen Hammer" />
                                    </figure>
                                    <p className="title">Ball Peen Hammer</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/ham4.jpg" width={55} height={55} alt="Claw Hammer" />
                                    </figure>
                                    <p className="title">Claw Hammer</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/ham5.jpg" width={55} height={55} alt="Dead Blow Hammer" />
                                    </figure>
                                    <p className="title">Dead Blow Hammer</p>
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

export default IronHammer;
