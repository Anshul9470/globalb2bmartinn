import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    _id: "b9876543210harini-pet-bottles",
    name: "Ravi Kandasamy",
    email: "ravikandasamy@gmail.com",
    password: "9176407581",
    mobileNumber: "9176407581",
    companyName: "Harini Pet Bottles",
    productOrService: "Pet Bottles",
    imgSrc: "/assets/petbottle1.jpg", // Replace with actual image path
    mainProducts: "Pet Bottles",
    altText: "Harini Pet Bottles - Pet Bottles",
    years: "2 YRS",
    location: "Chennai, Tamil Nadu, India",
    tooltipText: "Harini Pet Bottles, Chennai, Tamil Nadu",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "55",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    _id: "b9c0d1e2f345678901234567", // Random unique ID
    name: "Malav",
    email: "dhirenPlastic@gmail.com",
    password: "Malav@123", // Including the password as specified
    mobileNumber: "9227244594",
    companyName: "Dhiren Plastic Industries",
    productOrService: "Plastic Bottle Manufacturi",
    imgSrc: "/assets/plastic8.jpeg", // Example image path
    mainProducts: "Plastic Bottles, Containers, Jars, Custom Plastic Packaging",
    altText: "Plastic Bottles - Dhiren Plastic Industries",
    years: "1 YRS",
    location: "Surat, India",
    tooltipText: "456 Plastic Avenue, Surat, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "65",
    responseRate: "96%",
    whatsappConfirmed: true,
  },
  {
    _id: "b9c0d1e2f345678901234567", // Random unique ID
    name: "Malav",
    email: "dhirenPlastic@gmail.com",
    password: "Malav@123", // Including the password as specified
    mobileNumber: "9227244594",
    companyName: "Dhiren Plastic Industries",
    productOrService: "Plastic Bottle Manufacturing",
    imgSrc: "/assets/plastic7.jpeg", // Example image path
    mainProducts: "Plastic Bottles, Containers, Jars, Custom Plastic Packaging",
    altText: "Plastic Bottles - Dhiren Plastic Industries",
    years: "1 YRS",
    location: "Surat, India",
    tooltipText: "456 Plastic Avenue, Surat, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "65",
    responseRate: "96%",
    whatsappConfirmed: true,
  },
  {
    _id: "a1b2c3d4e567890123456789", // Random unique ID
    name: "Nikhil Raj Yadav",
    email: "rajindustires.2218@gmail.com",
    mobileNumber: "9079560851",
    companyName: "Balaji Industries",
    productOrService: "Plastic Bottle Manufacturer",
    imgSrc: "/assets/waterBottle.jpeg", // Example image path
    mainProducts: "Plastic Bottles, Containers, Jars, Custom Plastic Packaging",
    altText: "Plastic Bottles - Balaji Industries",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "789 Plastic Road, Mumbai, India",
    rating: "4.4",
    ratingPercent: "88%",
    ratingsCount: "58",
    responseRate: "92%",
    whatsappConfirmed: true,
  },
  {
    _id: "trend-global-mandoli",
    name: "Ashutosh",
    email: "abc@gmail.com",
    password: "ashu@123",
    mobileNumber: "7217729882",
    companyName: "Trend Global",
    productOrService: "Glass and Plastic Bottles",
    imgSrc: "/assets/bottle2.jpg",
    mainProducts: "Glass and Plastic Bottles",
    altText: "Trend Global - Glass and Plastic Bottles",
    years: "1 YRS",
    location: "Mandoli, Delhi, India",
    tooltipText: "Trend Global, Glass and Plastic Bottles, Mandoli, Delhi",
    rating: "4.4",
    ratingPercent: "88%",
    ratingsCount: "30",
    responseRate: "82%",
    whatsappConfirmed: true,
  },
  {
    _id: "clay-craft-industries-khurja",
    name: "Vishal Seth",
    email: "abc@gmail.com",
    password: "viss@123",
    mobileNumber: "7500931966",
    companyName: "Clay Craft Industries",
    productOrService: "Pottery",
    imgSrc: "/assets/clay7.jpg",
    mainProducts: "Pottery",
    altText: "Clay Craft Industries - Pottery",
    years: "1 YRS",
    location: "Khurja, Uttar Pradesh, India",
    tooltipText: "Clay Craft Industries, Pottery, Khurja, Uttar Pradesh",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "40",
    responseRate: "85%",
    whatsappConfirmed: true,
  },

  // You can add more items here if needed
];

const HariniPetBottlesComponent = () => {
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
                  <Link to="#">Pet Bottles</Link>
                </li>
                <li>
                  <Link to="#">Plastic Containers</Link>
                </li>
                <li>
                  <Link to="#">Water Bottles</Link>
                </li>
                <li>
                  <Link to="#">Packaging Materials</Link>
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
                  <Link to="#">Tamil Nadu</Link>
                </li>
                <li>
                  <Link to="#">Maharashtra</Link>
                </li>
                <li>
                  <Link to="#">Karnataka</Link>
                </li>
                <li>
                  <Link to="#">Gujarat</Link>
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
                      src="/assets/petbottle1.jpg"
                      width={55}
                      height={55}
                      alt="Pet Bottles"
                    />
                  </figure>
                  <p className="title">Pet Bottles</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets//plastic4.jpg"
                      width={55}
                      height={55}
                      alt="Plastic Containers"
                    />
                  </figure>
                  <p className="title">Plastic Containers</p>
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
                        <span>Main Products</span> <b>{item.mainProducts}</b>
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

export default HariniPetBottlesComponent;
