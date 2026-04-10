import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    _id: "sudhir-kumar-sinha-delhi-laxmi-nagar",
    name: "Sudhir Kumar Sinha",
    email: "SudhiKumarSinha123@gmail.com",
    password: "Sudhir Kumar Sinha",
    mobileNumber: "9540174638",
    companyName: "Inovogen Biotechnology Pvt Ltd",
    statename: "Delhi",
    cityname: "Laxmi Nagar",
    productOrService: "Mobile Accessories, Food, Agro, Handicrafts",
    imgSrc: "/assets/monile.jpg",
    mainProducts: "Mobile Accessories, Food, Agro, Handicrafts",
    altText: "Inovogen Biotechnology Pvt Ltd - Laxmi Nagar",
    years: "3 YRS",
    location: "Laxmi Nagar, Delhi",
    tooltipText: "Inovogen Biotechnology Pvt Ltd, Laxmi Nagar",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "132",
    responseRate: "94%",
    whatsappConfirmed: true,
  },

  {
    name: "Edge Mobile & Accessories",
    email: "Edgemobile@gmail.com",
    mobileNumber: "7065221055",
    companyName: "Edge Mobile & Accessories",
    productOrService: "Mobile & Accessories",
    imgSrc: "/assets/mobs.jpg", // You need to provide the correct image path
    mainProducts: "Mobile phone, Charger, Cases, Headsets, Screen Guards ",
    altText: "Mobile & Accessories - Edge Mobile & Accessories",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "123, Connaught Place, New Delhi - 110001, Delhi, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "50",
    responseRate: "95%",
  },
  {
    _id: "vd-enterprise-vellore",
    name: "Manju Nathan",
    email: "manjunathanv20@gmail.com",
    password: "7667767872",
    mobileNumber: "7667767872",
    companyName: "vd enterprise",
    productOrService: "mobile accessories",
    imgSrc: "/assets/mobile1.jpg",
    mainProducts: "mobile accessories",
    altText: "vd enterprise - Mobile Accessories",
    years: "1 YRS",
    location: "Vellore, Tamil Nadu, India",
    tooltipText: "vd enterprise, Mobile Accessories, Vellore",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "30",
    responseRate: "85%",
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const HomeDecor = () => {
  return (
    <div className="main-box">
      <aside>
        <div className="flt-box-wrap">
          <div className="flt-box mb-0 flt-head">Filters By</div>
          <div className="flt-box bdrt-0">
            <p className="flt-title">Related Categories</p>
            <div className="flt-content">
              <ul className="flt-list cust-scroll">
                <li>
                  <Link to="#">Mobile Phones</Link>
                </li>
                <li>
                  <Link to="#">Mobile Cases</Link>
                </li>
                <li>
                  <Link to="#">Mobile Chargers</Link>
                </li>
                <li>
                  <Link to="#">Mobile Headsets</Link>
                </li>
                <li>
                  <Link to="#">Mobile Screen Guards</Link>
                </li>
                <li>
                  <Link to="#">Mobile Holders</Link>
                </li>
                <li>
                  <Link to="#">Power Banks</Link>
                </li>
                <li>
                  <Link to="#">Mobile Accessories</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flt-box">
            <p className="flt-title">By State</p>
            <div className="flt-content">
              <div className="flt-search">
                <input
                  type="text"
                  name="state_id"
                  placeholder="Search State"
                  id="state-search-input"
                />
              </div>
              <ul className="flt-list cust-scroll" id="state-lists">
                <li>
                  <Link to="#">All India</Link>
                </li>
                <li>
                  <Link to="#">Delhi</Link>
                </li>
                <li>
                  <Link to="#">Maharashtra</Link>
                </li>
                <li>
                  <Link to="#">Karnataka</Link>
                </li>
                <li>
                  <Link to="#">West Bengal</Link>
                </li>
                <li>
                  <Link to="#">Tamil Nadu</Link>
                </li>
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
                    <img
                      src="/assets/mob1.jpg"
                      width={55}
                      height={55}
                      alt="Mobile Phones"
                    />
                  </figure>
                  <p className="title">Mobile Phones</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/mob2.jpg"
                      width={55}
                      height={55}
                      alt="Mobile Cases"
                    />
                  </figure>
                  <p className="title">Mobile Cases</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/mob3.jpg"
                      width={55}
                      height={55}
                      alt="Mobile Chargers"
                    />
                  </figure>
                  <p className="title">Mobile Chargers</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/mob4.avif"
                      width={55}
                      height={55}
                      alt="Mobile Headsets"
                    />
                  </figure>
                  <p className="title">Mobile Headsets</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/mob4.jpg"
                      width={55}
                      height={55}
                      alt="Mobile Screen Guards"
                    />
                  </figure>
                  <p className="title">Mobile Screen Guards</p>
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
                    <img
                      src={item.imgSrc}
                      alt={item.altText}
                      width={250}
                      height={250}
                    />
                  </div>
                </div>
                <div className="cinfo">
                  <div className="cbox">
                    <figure>
                      <span className="cmp-year">{item.years}</span>
                    </figure>
                    <div className="cboxr">
                      <Link to="#" target="_blank">
                        <h4 className="title">{item.companyName}</h4>
                      </Link>
                      <p className="cloc tooltip ellipsis">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="bi-location"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        </svg>
                        {item.location}
                        <span className="tooltiptext">{item.tooltipText}</span>
                      </p>
                      <div className="rating-wrap">
                        <span className="rtbox">{item.rating}</span>
                        <span
                          className="crate"
                          style={{ "--_score": item.ratingPercent }}
                        />
                        <span className="rate-text">
                          {item.ratingsCount} Ratings
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="caddit">
                    <div className="item">
                      <div
                        className="ca-box modal-btn"
                        data-modal="motc"
                        data-src={item.trustCertificateUrl}
                      >
                        <p>
                          <i className="l3icon motc-icon" />
                        </p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="ca-box">
                        <p>
                          <i className="l3icon resp-icon" />
                        </p>
                        <p>
                          <span>Response Rate</span> <b>{item.responseRate}</b>
                        </p>
                      </div>
                      <p>
                        <span>Main Products:</span> <b>{item.mainProducts}</b>
                      </p>
                    </div>
                  </div>
                  <div className="caction">
                    <Link to={"/register-buyer"}>
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
};

export default HomeDecor;
