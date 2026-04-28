import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    name: "Rajesh Dharaviya",
    email: "mahadeventerprises@gmail.com",
    mobileNumber: "7285852080",
    companyName: "Mahadev Enterprises",
    productOrService: "SS Door Handle",
    imgSrc: "/assets/door1.jpeg", // Replace with the correct image path
    altText: "SS Door Handle - Mahadev Enterprises",
    mainProducts:
      "Stainless Steel Door Handles, Custom Door Handles, Industrial Door Handles",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "123 Door Handle Street, Industrial Area, Mumbai, India",
    rating: "4.7",
    ratingPercent: "95%",
    ratingsCount: "200",
    responseRate: "90%",
  },
  {
    _id: "s345678901abcdef234573", // Random unique ID
    name: "Mr. Rajat Singhal",
    email: "rajat1391997@gmail.com",
    password: "rajat@123",
    mobileNumber: "8266911820",
    companyName: "Jay Durga Enterprises",
    productOrService: "Door Handles Manufacturer",
    imgSrc: "/assets/door6.jpeg", // Example image path
    mainProducts: "Door Handles, Hardware Accessories",
    altText: "Door Handles Manufacturer - Jay Durga Enterprises",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "Unit 15, Industrial Area, Delhi, India",
    rating: "4.4",
    ratingPercent: "88%",
    ratingsCount: "40",
    responseRate: "87%",
    whatsappConfirmed: true,
  },
  {
    _id: "k0987654321tuvw3456",
    name: "Shridhar Indukande",
    email: "mahaveer739@gmail.com",
    password: "shridhar@123",
    mobileNumber: "8421631757",
    companyName: "Mahaveer Glass And Aluminium Works",
    productOrService: "Aluminium Door Manufacturer",
    imgSrc: "/assets/almunius-door1.jpeg",
    mainProducts: "Aluminium Doors, Glass Partitions, Window Frames",
    altText: "Mahaveer Glass And Aluminium Works - Aluminium Door Manufacturer",
    years: "1 YRS",
    location: "India",
    tooltipText: "Mahaveer Glass And Aluminium Works, India",
    rating: "4.3",
    ratingPercent: "86%",
    ratingsCount: "42",
    responseRate: "79%",
    whatsappConfirmed: true,
  },
  {
    _id: "k5678901234xyza7890",
    name: "Tukaram Sabale",
    email: "ssfabricators.industri@gmail.com",
    password: "tukaram@123",
    mobileNumber: "8087967735",
    companyName: "SS Fabricators",
    productOrService: "Aluminium Door Manufacturer",
    imgSrc: "/assets/almunium1.jpeg",
    mainProducts: "Aluminium Doors, Glass Partitions, Window Frames",
    altText: "SS Fabricators - Aluminium Door Manufacturer",
    years: "1 YRS",
    location: "India",
    tooltipText: "SS Fabricators, India",
    rating: "4.1",
    ratingPercent: "82%",
    ratingsCount: "38",
    responseRate: "76%",
    whatsappConfirmed: true,
  },
  {
    _id: "k4567890123uvwx5678",
    name: "Sohail",
    email: "sohail123@gmail.com",
    password: "sohail1234",
    mobileNumber: "9975900244",
    companyName: "Door Locks and Trading",
    productOrService: "Locks",
    imgSrc: "/assets/door-lock1.jpeg",
    mainProducts: "Door Locks, Padlocks, Security Locks",
    altText: "Door Locks and Trading - Locks",
    years: "1 YRS",
    location: "India",
    tooltipText: "Door Locks and Trading, India",
    rating: "4.1",
    ratingPercent: "82%",
    ratingsCount: "36",
    responseRate: "78%",
    whatsappConfirmed: true,
  },
  {
    _id: "k5678901234yzab6789",
    name: "Arman",
    email: "arman123@gmail.com",
    password: "arman1234",
    mobileNumber: "7234899145",
    companyName: "Indian Door Enterprises",
    productOrService: "Doors",
    imgSrc: "/assets/door7.jpeg",
    mainProducts: "Interior Doors, Exterior Doors, Custom Doors",
    altText: "Indian Door Enterprises - Doors",
    years: "1 YRS",
    location: "India",
    tooltipText: "Indian Door Enterprises, India",
    rating: "4.0",
    ratingPercent: "80%",
    ratingsCount: "32",
    responseRate: "75%",
    whatsappConfirmed: true,
  },
  {
    _id: "vineet-kumar-varshney-maa-kamakhya-hardware-aligarh",
    name: "Vineet Kumar Varshney",
    email: "abc@gmail.com",
    password: "vineet@123",
    mobileNumber: "9319287221",
    companyName: "Maa Kamakhya Hardware",
    productOrService: "Door Handles",
    imgSrc: "/assets/door8.jpg",
    mainProducts: "Door Handles",
    altText: "Maa Kamakhya Hardware - Door Handles",
    years: "1 YRS",
    location: "Aligarh, UP, India",
    tooltipText: "Maa Kamakhya Hardware, Door Handles, Aligarh",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "30",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "umesh-kg-industries-rajkot",
    name: "Umesh",
    email: "abc@gmail.com",
    password: "umesh@123",
    mobileNumber: "8758335803",
    companyName: "KG Industries",
    productOrService: "door handles",
    imgSrc: "/assets/door14.jpg",
    mainProducts: "Door Handles",
    altText: "KG Industries - Door Handles",
    years: "1 YRS",
    location: "Rajkot, Gujrat, India",
    tooltipText: "KG Industries, Door Handles, Rajkot",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "30",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "virani-enterprises-jamnagar",
    name: "Jayesh Virani",
    email: "Jayeshvirani@gmail.com",
    password: "Jayesh Virani",
    mobileNumber: "8000240622",
    companyName: "Virani Enterprises",
    productOrService: "Door Hardware",
    imgSrc: "/assets/door9.jpg",
    mainProducts: "Door Hardware",
    altText: "Virani Enterprises - Door Hardware",
    years: "1 YRS",
    location: "Jamnagar, Gujarat, India",
    tooltipText: "Virani Enterprises, Door Hardware, Jamnagar",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "30",
    responseRate: "95%",
    whatsappConfirmed: true,
  },
  {
    _id: "ri-vasim-kota",
    name: "RI Vasim",
    email: "RIVasim123@gmail.com",
    password: "RI Vasim1234",
    mobileNumber: "8290954445",
    companyName: "Royal Industries",
    statename: "Rajasthan",
    cityname: "Kota",
    productOrService: "Door",
    imgSrc: "/assets/door10.jpg",
    mainProducts: "High-Quality Doors, Wooden Doors, Metal Doors",
    altText: "Royal Industries - Premium Door Supplier in Kota",
    years: "1 YRS",
    location: "Kota, Rajasthan, India",
    tooltipText: "Royal Industries - Trusted Door Manufacturer",
    rating: "4.7",
    ratingPercent: "92%",
    ratingsCount: "180",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
];

const DoorHandleComp = () => {
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
                  <Link to="#">Stainless Steel Door Handles</Link>
                </li>
                <li>
                  <Link to="#">Brass Door Handles</Link>
                </li>
                <li>
                  <Link to="#">Aluminium Door Handles</Link>
                </li>
                <li>
                  <Link to="#">Wooden Door Handles</Link>
                </li>
                <li>
                  <Link to="#">Chrome Door Handles</Link>
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
                  <Link to="#">Gujarat</Link>
                </li>
                <li>
                  <Link to="#">Rajasthan</Link>
                </li>
                <li>
                  <Link to="#">Tamil Nadu</Link>
                </li>
                <li>
                  <Link to="#">Karnataka</Link>
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
                      src="/assets/door1.jpeg"
                      width={55}
                      height={55}
                      alt="Stainless Steel Door Handles"
                    />
                  </figure>
                  <p className="title">Stainless Steel Door Handles</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/door2.jpeg"
                      width={55}
                      height={55}
                      alt="Brass Door Handles"
                    />
                  </figure>
                  <p className="title">Brass Door Handles</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/door3.jpeg"
                      width={55}
                      height={55}
                      alt="Aluminium Door Handles"
                    />
                  </figure>
                  <p className="title">Aluminium Door Handles</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/door4.jpeg"
                      width={55}
                      height={55}
                      alt="Wooden Door Handles"
                    />
                  </figure>
                  <p className="title">Wooden Door Handles</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/door5.jpeg"
                      width={55}
                      height={55}
                      alt="Chrome Door Handles"
                    />
                  </figure>
                  <p className="title">Chrome Door Handles</p>
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

export default DoorHandleComp;
