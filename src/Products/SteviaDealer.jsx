import React from 'react';
import { Link } from 'react-router-dom';
import './common.css';

const steviaDealerData = [
    {
        "_id": "b9876543210qwert1234",
        "name": "Daksh and Company",
        "email": "mudgal2050@gmail.com",
        "mobileNumber": "+91 9205911599",
        "companyName": "Daksh and Company",
        "productOrService": "Stevia",
        "imgSrc": "/assets/stevia.jpg", // Placeholder image
        "mainProducts": "Stevia Products, Natural Sweeteners",
        "altText": "Stevia Products - Daksh and Company",
        "years": "1 YRS",
        "location": "Gautam Budha Nagar, Uttar Pradesh, India",
        "tooltipText": "Daksh and Company, Gautam Budha Nagar, Uttar Pradesh",
        "rating": "4.5",
        "ratingPercent": "90%",
        "ratingsCount": "150",
        "responseRate": "95%",
        "whatsappConfirmed": true,
        "path": "/daksh-and-company"
    }
];

const SteviaDealer = () => {
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
                                <li><Link to="#">Stevia Leaves</Link></li>
                                <li><Link to="#">Natural Sweeteners</Link></li>
                                <li><Link to="#">Herbal Products</Link></li>
                                <li><Link to="#">Organic Farming</Link></li>
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
                                <li><Link to="#">Uttar Pradesh</Link></li>
                                <li><Link to="#">Maharashtra</Link></li>
                                <li><Link to="#">Gujarat</Link></li>
                                <li><Link to="#">Karnataka</Link></li>
                                <li><Link to="#">Tamil Nadu</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </aside>
            <main>
                <section className="section">
                    <p className="sect-title">Explore Stevia Products</p>
                    <div className="horprd expcatg" id="expcatg">
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/stevia1.jpg" width={55} height={55} alt="Stevia Leaves" />
                                    </figure>

                                    <p className="title">Stevia Leaves</p>

                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/stevia2.jpg" width={55} height={55} alt="Natural Sweeteners" />
                                    </figure>
                                    <p className="title">Natural Sweeteners</p>
                                </div>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#">
                                <div className="horprd-box">
                                    <figure>
                                        <img src="/assets/stevia3.jpg" width={55} height={55} alt="Herbal Products" />
                                    </figure>
                                    <p className="title">Herbal Products</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
                <ul className="classfied-wrap">
                    {steviaDealerData.map((item, index) => (
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

export default SteviaDealer;
