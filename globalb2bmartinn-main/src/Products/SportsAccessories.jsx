import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    name: "Vikas",
    email: "vikastraders@gmail.com",
    mobileNumber: "9915184368",
    companyName: "Vikas Sports",
    productOrService: "SPORTS ACCESSORIES",
    imgSrc: "/assets/spos.jpg", // You need to provide the correct image path
    altText: "Sports Accessories -Traders",
    mainProducts: "Sports Shoes, Sports Bag, Sports Wear, etc",
    years: "1 YRS",
    location: "Arya Nagar, Suraj Kund Road Meerut, Uttar Pradesh India",
    tooltipText: "456 Sports Avenue, Near Stadium, Mumbai, Maharashtra, India",
    rating: "4.0",
    ratingPercent: "98%",
    ratingsCount: "90",
    responseRate: "88%",
    path: "/vikas-sports",
  },
  {
    name: "Aj Traders",
    email: "Ajtraders@gmail.com",
    mobileNumber: "9915184368",
    companyName: "Aj Traders",
    productOrService: "SPORTS ACCESSORIES",
    imgSrc: "/assets/spo6.jpeg", // You need to provide the correct image path
    altText: "Sports Accessories - Aj Traders",
    mainProducts: "Sports Shoes, Sports Bag, Sports Wear, etc",
    years: "1 YRS",
    location: "Mumbai, Maharashtra, India",
    tooltipText: "456 Sports Avenue, Near Stadium, Mumbai, Maharashtra, India",
    rating: "4.0",
    ratingPercent: "80%",
    ratingsCount: "50",
    responseRate: "88%",
  },
  {
    name: "Vipin",
    email: "vipin@gmail.com",
    password: "vipin@123",
    mobileNumber: "9897730738",
    companyName: "Vijendra",
    productOrService: "Sports Items",
    imgSrc: "/assets/spo2.webp",
    altText: "Sports Items - Vipin",
    mainProducts: "Sports Jerseys, Sports Equipment, Athletic Wear",
    years: "1 YRS",
    location: "Bangalore, Karnataka, India",
    tooltipText: "123 Sports Street, Bangalore, Karnataka, India",
    rating: "4.2",
    ratingPercent: "84%",
    ratingsCount: "70",
    responseRate: "92%",
  },
  {
    _id: "e3f4g5h6i7890123456789ab", // Random unique ID
    name: "Sougat Satpathy",
    email: "sougat123@gmail.com",
    password: "sougat123", // Including the password as specified
    mobileNumber: "7584009815",
    companyName: "BR Sports",
    productOrService: "Sports Equipment",
    imgSrc: "/assets/sport2.jpeg", // Example image path
    mainProducts: "Sports Gear, Fitness Equipment, Sportswear, Accessories",
    altText: "Sports Equipment - BR Sports",
    years: "1 YRS",
    location: "Kolkata, India",
    tooltipText: "456 Sports Avenue, Kolkata, India",
    rating: "4.5",
    ratingPercent: "91%",
    ratingsCount: "75",
    responseRate: "94%",
    whatsappConfirmed: true,
  },
  {
    _id: "m567890123456abcdef0123", // Random unique ID
    name: "Shaikh Rose",
    email: "Rosesports@gmail.com",
    password: "Shaikh Rose", // Including the password as specified
    mobileNumber: "8676893278",
    companyName: "Rose Sports",
    productOrService: "Sports Accessories",
    imgSrc: "/assets/Sport3.jpeg", // Example image path
    mainProducts: "Sports Shoes, Athletic Wear, Sports Equipment",
    altText: "Sports Accessories - Rose Sports",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "789 Sports Complex, Mumbai, India",
    rating: "4.8",
    ratingPercent: "95%",
    ratingsCount: "110",
    responseRate: "98%",
    whatsappConfirmed: true,
  },
  {
    _id: "x4567890123y456789",
    name: "Mr. Gaurav",
    email: "sportsmeerut31@gmail.com",
    password: "gaurav@123",
    mobileNumber: "6395291207",
    companyName: "Sports Meerut",
    productOrService: "Sports Equipment Supplier",
    imgSrc: "/assets/sport4.jpeg",
    mainProducts: "Sports Equipment, Fitness Gear, Training Aids",
    altText: "Sports Equipment Supplier - Sports Meerut",
    years: "1 YRS",
    location: "Meerut, Uttar Pradesh, India",
    tooltipText: "Brahmpur, Meerut, Uttar Pradesh, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "110",
    responseRate: "91%",
    whatsappConfirmed: true,
  },
  {
    _id: "j7890123456k789012",
    name: "Rajkumar",
    email: "yadaventerprises@gmail.com",
    password: "rajkumar@4321",
    mobileNumber: "8360710738",
    companyName: "Yadav Enterprises",
    productOrService: "Sports Equipment Supplier & Manufacturer",
    imgSrc: "/assets/sports1.jpeg",
    mainProducts: "Cricket Bats, Footballs, Badminton Rackets",
    altText: "Sports Equipment - Yadav Enterprises",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "Yadav Enterprises, Sector 10, Industrial Area, Delhi, India",
    rating: "4.7",
    ratingPercent: "92%",
    ratingsCount: "150",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "j7890123456k789013",
    name: "Arjun Mahajan",
    email: "siisporting@hotmail.com",
    password: "arjun@123",
    mobileNumber: "9814922977",
    companyName: "South Indian Industries",
    productOrService: "Sports Equipment Manufacturer",
    imgSrc: "/assets/sports2.jpeg",
    mainProducts: "Cricket Bats, Tennis Rackets, Hockey Sticks",
    altText: "Sports Equipment - South Indian Industries",
    years: "1 YRS",
    location: "Chennai, India",
    tooltipText: "South Indian Industries, Industrial Estate, Chennai, India",
    rating: "4.8",
    ratingPercent: "95%",
    ratingsCount: "180",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
  {
    _id: "a1234567890wxyz5684",
    name: "Jatin",
    email: "jatinbrother@gmail.com",
    password: "jatin@098",
    mobileNumber: "9463471201",
    companyName: "Jatin Brothers",
    productOrService: "Sports Equipment Supplier & Manufacturer",
    imgSrc: "/assets/sports3.jpeg",
    mainProducts: "Sports Equipment, Sports Gear, Fitness Accessories",
    altText: "Sports Equipment - Jatin Brothers",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "Jatin Brothers, Delhi, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "85",
    responseRate: "88%",
    whatsappConfirmed: true,
  },

  {
    _id: "a1234567890wxyz5691",
    name: "Vishal",
    email: "vishalsportshouse157@gmail.com",
    password: "vishal@4321",
    mobileNumber: "9528576306",
    companyName: "VISHAL SPORTS HOUSE",
    productOrService: "Sports Equipment Supplier & Manufacturer",
    imgSrc: "/assets/sports4.jpeg", // Placeholder for image path
    mainProducts: "Sports Equipment, Cricket Bats, Badminton Rackets",
    altText: "Sports Equipment - VISHAL SPORTS HOUSE",
    years: "1 YRS", // Placeholder for years of experience
    location: "India", // Placeholder for location
    tooltipText: "VISHAL SPORTS HOUSE, India",
    rating: "4.6", // Placeholder for rating
    ratingPercent: "92%", // Placeholder for rating percentage
    ratingsCount: "120", // Placeholder for ratings count
    responseRate: "93%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "d1234567890wxyz5687",
    name: "Rahul",
    email: "pcmsportsenterprises@gmail.com",
    password: "8375000867",
    mobileNumber: "9517850783",
    companyName: "PCM Sports Enterprises",
    productOrService: "Sports Shoes, Football, Leather",
    imgSrc: "/assets/football1.jpeg", // Placeholder for image path
    mainProducts: "Sports Shoes, Football Gear, Leather Goods",
    altText: "PCM Sports Enterprises - Sports Shoes and Football Gear",
    years: "1 YRS", // Placeholder for years of experience
    location: "India", // Placeholder for location
    tooltipText: "PCM Sports Enterprises, India",
    rating: "4.5", // Placeholder for rating
    ratingPercent: "90%", // Placeholder for rating percentage
    ratingsCount: "120", // Placeholder for ratings count
    responseRate: "85%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "k8901234567ghijk5678",
    name: "Akash",
    email: "AsSportsCompany155@gmail.com",
    password: "akash123",
    mobileNumber: "6396014001",
    companyName: "AsSportsCompany",
    productOrService: "Sports Equipment",
    imgSrc: "/assets/sports5.jpeg",
    mainProducts: "Sports Equipment, Fitness Gear, Outdoor Sports Accessories",
    altText: "AsSportsCompany - Sports Equipment and Gear",
    years: "1 YRS",
    location: "India",
    tooltipText: "AsSportsCompany, India",
    rating: "4.4",
    ratingPercent: "88%",
    ratingsCount: "47",
    responseRate: "81%",
    whatsappConfirmed: true,
  },
  {
    _id: "k2345678901mnop2345",
    name: "Ashish",
    email: "VellaSporting454@gmail.com",
    password: "ashish 123",
    mobileNumber: "7830007788",
    companyName: "Vella Sporting Co. (VELSPO)",
    productOrService: "Sports Equipment",
    imgSrc: "/assets/sports6.jpeg",
    mainProducts: "Sports Equipment, Athletic Gear, Fitness Accessories",
    altText: "Vella Sporting Co. (VELSPO) - Sports Equipment",
    years: "1 YRS",
    location: "India",
    tooltipText: "Vella Sporting Co. (VELSPO), India",
    rating: "4.3",
    ratingPercent: "86%",
    ratingsCount: "44",
    responseRate: "79%",
    whatsappConfirmed: true,
  },
  {
    _id: "f7g8h9i0j1k2l3m4n5o6p7q8", // Random unique ID
    name: "Himanshu",
    email: "himanshu123@gmail.com",
    mobileNumber: "7534945560",
    companyName: "Ravan Meerut",
    productOrService: "Sports",
    imgSrc: "/assets/spo2.webp", // Example image path
    mainProducts:
      "Sports Equipment, Fitness Gear, Athletic Apparel, Sporting Goods",
    altText: "Sports Equipment - Ravan Meerut",
    years: "1 YRS",
    location: "Meerut, India",
    tooltipText: "101 Sports Avenue, Meerut, India",
    rating: "4.6",
    ratingPercent: "91%",
    ratingsCount: "65",
    responseRate: "93%",
    whatsappConfirmed: true,
  },
  {
    _id: "arnav-trading-company-merath",
    name: "Shyam Sunder Lohia",
    email: "arnavtradingcompany2019@gmail.com",
    password: "Shyam Sunder Lohia",
    mobileNumber: "9897901912",
    companyName: "arnav trading company",
    productOrService: "sports goods",
    imgSrc: "/assets/sports7.jpg",
    mainProducts: "sports goods",
    altText: "arnav trading company - Sports Goods",
    years: "1 YRS",
    location: "Merath, Uttar Pradesh, India",
    tooltipText: "arnav trading company, Sports Goods, Merath",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "40",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    _id: "ads-players-ludhiana",
    name: "Talwinder Kaur",
    email: "talwinderkaur@gmail.com",
    password: "talwinderkaurads",
    mobileNumber: "9560120150",
    companyName: "ADS Players",
    productOrService: "Sports Wear",
    imgSrc: "/assets/sportswear.jpg",
    mainProducts: "Sports Wear",
    altText: "ADS Players - Sports Wear",
    years: "1 YRS",
    location: "Ludhiana, Punjab, India",
    tooltipText: "ADS Players, Sports Wear, Ludhiana",
    rating: "4.0",
    ratingPercent: "80%",
    ratingsCount: "25",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    _id: "akash-sports-uttar-pradesh",
    name: "akash",
    email: "akash@gmail.com",
    password: "12345678",
    mobileNumber: "7300585743",
    companyName: "akash",
    statename: "Uttar Pradesh",
    cityname: "Uttar Pradesh",
    productOrService: "sports",
    imgSrc: "/assets/sports8.jpg",
    mainProducts: "Sports Equipment",
    altText: "akash - Sports Equipment",
    years: "1 YRS",
    location: "Uttar Pradesh, India",
    tooltipText: "akash - Sports Equipment Manufacturer",
    rating: "4.3",
    ratingPercent: "87%",
    ratingsCount: "120",
    responseRate: "90%",
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const SportsAccessories = () => {
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
                  <Link to="#">Gym Equipment</Link>
                </li>
                <li>
                  <Link to="#">Fitness Accessories</Link>
                </li>
                <li>
                  <Link to="#">Sports Shoes</Link>
                </li>
                <li>
                  <Link to="#">Sportswear</Link>
                </li>
                <li>
                  <Link to="#">Sports Bags</Link>
                </li>
                <li>
                  <Link to="#">Outdoor Sports</Link>
                </li>
                <li>
                  <Link to="#">Water Sports</Link>
                </li>
                <li>
                  <Link to="#">Team Sports</Link>
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
                  <Link to="#">Maharashtra</Link>
                </li>
                <li>
                  <Link to="#">Tamil Nadu</Link>
                </li>
                <li>
                  <Link to="#">Karnataka</Link>
                </li>
                <li>
                  <Link to="#">Gujarat</Link>
                </li>
                <li>
                  <Link to="#">Punjab</Link>
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
                      src="/assets/spo1.webp"
                      width={55}
                      height={55}
                      alt="Gym Equipment"
                    />
                  </figure>
                  <p className="title">Gym Equipment</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/spo2.webp"
                      width={55}
                      height={55}
                      alt="Fitness Accessories"
                    />
                  </figure>
                  <p className="title">Fitness Accessories</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/spo3.webp"
                      width={55}
                      height={55}
                      alt="Sports Shoes"
                    />
                  </figure>
                  <p className="title">Sports Shoes</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/spo4.jpg"
                      width={55}
                      height={55}
                      alt="Sportswear"
                    />
                  </figure>
                  <p className="title">Sportswear</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/spo5.jpg"
                      width={55}
                      height={55}
                      alt="Sports Bags"
                    />
                  </figure>
                  <p className="title">Sports Bags</p>
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
                      <Link to={item.path}>
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

export default SportsAccessories;
