import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    name: "Rahul",
    email: "rahul123@gmail.com",
    mobileNumber: "8303519240",
    companyName: "Rahul Enterprises",
    productOrService: "Scrap",
    imgSrc: "/assets/scrs.jpg", // Provide the correct image path
    altText: "Scrap - Rahul Enterprises",
    mainProducts: "Metal Scrap, Plastic Scrap, Electronic Scrap",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "456 Scrap Lane, Industrial Area, Delhi, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "60",
    responseRate: "85%",
  },
  {
    name: "Mr. Mahesh Panday",
    email: "MaheshPanday@gmal.com",
    password: "mahesh@123",
    mobileNumber: "7059230225",
    companyName: "SHREE SHIV SHAKTI TRADING CO",
    productOrService: "Iron Scrap Trader",
    imgSrc: "/assets/iron-scrap.jpg", // Provide the correct image path
    altText: "Iron Scrap Trader - SHREE SHIV SHAKTI TRADING CO",
    mainProducts: "Iron Scrap, Metal Recycling, Scrap Trading",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "789 Scrap Lane, Industrial Park, Delhi, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "85",
    responseRate: "88%",
  },
  {
    name: "Sunjeeb Gangwar",
    email: "sunjeebgangwar@gmail.com",
    password: "sunjeeb@123",
    mobileNumber: "9536809716",
    companyName: "Ramcharan Enterprises",
    productOrService: "Iron Scrap",
    imgSrc: "/assets/ironsc.jpg", // Provide the correct image path
    altText: "Iron Scrap - Ramcharan Enterprises",
    mainProducts: "Iron Scrap, Metal Recycling, Scrap Trading",
    years: "1 YRS",
    location: "Lucknow, India",
    tooltipText: "789 Scrap Lane, Industrial Park, Lucknow, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "85",
    responseRate: "88%",
  },
  {
    name: "Rajesh",
    email: "rajesh@gmail.com",
    password: "rajesh@123",
    mobileNumber: "8839230113",
    companyName: "Matrix Solution",
    productOrService: "Scrap",
    imgSrc: "/assets/scr8.jpg", // Provide the correct image path
    altText: "Scrap - Matrix Solution",
    mainProducts: "Metal Scrap, Recycling Solutions",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "789 Scrap Lane, Industrial Park, Mumbai, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "85",
    responseRate: "88%",
  },
  {
    name: "Rajaul Haq",
    email: "rajaulhaq@gmail.com",
    mobileNumber: "9860458215",
    companyName: "Rajaul Scrap Trader",
    productOrService: "Scrap Traders",
    imgSrc: "/assets/scr1.jpg",
    altText: "Scrap Traders - Rajaul Scrap Trader",
    mainProducts: "Metal Scraps, Plastic Scraps, Paper Scraps",
    years: "1 YRS",
    location: "Bihar, India",
    tooltipText: "456 Scrap Lane, Recycling City, Bihar, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "380",
    responseRate: "91%",
  },
  {
    name: "Mohd Saifuddin",
    email: "sk047932@gmail.com",
    mobileNumber: "9027284481",
    companyName: "Saifuddin Enterprise",
    productOrService: "Iron & Paper Scrap",
    imgSrc: "/assets/scr6.jpeg", // Provide the correct image path
    altText: "Iron & Paper Scrap - Saifuddin Enterprise",
    mainProducts: "Iron Scrap, Steel Scrap, Paper Scrap, Cardboard Scrap",
    years: "1 YRS",
    location: "Hyderabad, Telangana, India",
    tooltipText: "678 Scrap Yard, Industrial Zone, Hyderabad, Telangana, India",
    rating: "4.6",
    ratingPercent: "93%",
    ratingsCount: "200",
    responseRate: "90%",
  },
  {
    name: "Vipin Kumar",
    email: "VIPINKUMAR@GMAIL.COM",
    mobileNumber: "9650750191",
    companyName: "Jai Baba Metal and Products",
    productOrService: "All kinds of Industrial Scrap",
    imgSrc: "/assets/scr9.jpeg", // Provide the correct image path
    altText: "Industrial Scrap - Jai Baba Metal and Products",
    mainProducts: "Iron Scrap, Steel Scrap, Copper Scrap, Aluminum Scrap",
    years: "1 YRS",
    location: "Ludhiana, Punjab, India",
    tooltipText: "234 Industrial Area, Scrap Market, Ludhiana, Punjab, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "180",
    responseRate: "91%",
  },
  {
    name: "Vijay",
    email: "vijay@gmail.com",
    mobileNumber: "9212013075",
    companyName: "PR Plastic",
    productOrService: "Plastic Scrap Traders",
    imgSrc: "/assets/scr11.jpeg", // Provide the correct image path
    mainProducts: "Plastic Scraps, Recycled Plastics, Plastic Waste",
    altText: "Plastic Scrap Traders - PR Plastic",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "Location details not provided",
    rating: "78%",
    ratingPercent: "80%",
    ratingsCount: "25",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
  {
    name: "Parhalad",
    email: "Marcosrecycling@gmail.com",
    mobileNumber: "8368032860",
    companyName: "Marcos Recycling Pvt Ltd",
    productOrService: "Scrap",
    imgSrc: "/assets/scr12.jpeg",
    altText: "Scrap - Marcos Recycling Pvt Ltd",
    mainProducts: "Metal Scrap, Plastic Scrap, Electronic Waste",
    years: "1 YRS",
    location: "Chennai, India",
    tooltipText: "234 Recycle Road, Eco Industrial Zone, Chennai, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "320",
    responseRate: "88%",
  },
  {
    name: "Sharad Dubay",
    email: "sharaddubay@gmail.com",
    mobileNumber: "8169183084",
    companyName: "Gauri Computer",
    productOrService: "Scrap",
    imgSrc: "/assets/scr3.jpg",
    altText: "Scrap - Gauri Computer",
    mainProducts: "Computer Scrap, Electronic Waste, Metal Scrap",
    years: "1 YRS",
    location: "Lucknow, India",
    tooltipText: "123 Recycle Lane, Green Zone, Lucknow, India",
    rating: "4.3",
    ratingPercent: "86%",
    ratingsCount: "250",
    responseRate: "87%",
  },
  {
    _id: "a1b2c3d4e5f6789012345678", // Random unique ID
    name: "Parvesh Bhai",
    email: "parveshbhai@gmail.com",
    password: "parvesh bhai", // Including the password as specified
    mobileNumber: "7011825098",
    companyName: "Gopi Metalic",
    productOrService: "Metal Scrap",
    imgSrc: "/assets/metal2.jpeg", // Example image path
    mainProducts: "Metal Scrap, Iron Scrap, Aluminum Scrap, Copper Scrap",
    altText: "Metal Scrap - Gopi Metalic",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "789 Scrap Market, Delhi, India",
    rating: "4.3",
    ratingPercent: "88%",
    ratingsCount: "50",
    responseRate: "92%",
    whatsappConfirmed: true,
  },
  {
    _id: "scrap-trading-noida",
    name: "Scrap Trading",
    email: "Scraptrading@gmail.com",
    password: "12345678",
    mobileNumber: "8368032860",
    companyName: "Scrap Trading",
    productOrService: "Aluminum",
    imgSrc: "/assets/scrap1.jpg",
    mainProducts: "Aluminum",
    altText: "Scrap Trading - Aluminum",
    years: "1 YRS",
    location: "Noida, India",
    tooltipText: "Scrap Trading, Aluminum, Noida",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "20",
    responseRate: "88%",
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const Scrap = () => {
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
                  <Link to="#">Metal Scrap</Link>
                </li>
                <li>
                  <Link to="#">Plastic Scrap</Link>
                </li>
                <li>
                  <Link to="#">Electronic Scrap</Link>
                </li>
                <li>
                  <Link to="#">Paper Scrap</Link>
                </li>
                <li>
                  <Link to="#">Rubber Scrap</Link>
                </li>
                <li>
                  <Link to="#">Glass Scrap</Link>
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
                      src="/assets/scr1.jpg"
                      width={55}
                      height={55}
                      alt="Metal Scrap"
                    />
                  </figure>
                  <p className="title">Metal Scrap</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/scr2.jpg"
                      width={55}
                      height={55}
                      alt="Plastic Scrap"
                    />
                  </figure>
                  <p className="title">Plastic Scrap</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/scr3.jpg"
                      width={55}
                      height={55}
                      alt="Electronic Scrap"
                    />
                  </figure>
                  <p className="title">Electronic Scrap</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/scr4.jpg"
                      width={55}
                      height={55}
                      alt="Paper Scrap"
                    />
                  </figure>
                  <p className="title">Paper Scrap</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/scr5.jpg"
                      width={55}
                      height={55}
                      alt="Rubber Scrap"
                    />
                  </figure>
                  <p className="title">Rubber Scrap</p>
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

export default Scrap;
