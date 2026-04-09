import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    name: "Bhupender",
    email: "bhupender@gmail.com",
    mobileNumber: "9910911853",
    companyName: "Ridhyansh Enterprises",
    productOrService: "Seat Covers",
    imgSrc: "/assets/covs.jpg", // You need to provide the correct image path
    altText: "Seat Covers - Ridhyansh Enterprises",
    mainProducts: "Car Seat Cover, Bike Seat Cover, Bus Seat Cover, etc",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "Plot No 5, Sector 24, Rohini, Delhi - 110085, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "45",
    responseRate: "92%",
  },
  {
    _id: "bajrang-trader-delhi",
    name: "Manish Singhal",
    email: "ManishSinghal@gmail.com",
    password: "12345678",
    mobileNumber: "9971171393",
    companyName: "bajrang trader",
    productOrService: "commode seat",
    imgSrc: "/assets/seatcover1.jpg",
    mainProducts: "Commode Seats",
    altText: "Bajrang Trader - Commode Seats",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "Bajrang Trader, Commode Seats, Delhi",
    rating: "4.2",
    ratingPercent: "84%",
    ratingsCount: "25",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    _id: "nn-industries-rj",
    name: "Soabraj Parjapat",
    email: "SoabrajParjapat@gmail.com",
    password: "12345678",
    mobileNumber: "9413219198",
    companyName: "N N Industries",
    productOrService: "Manhole Covers",
    imgSrc: "/assets/manhole-cover.jpg",
    mainProducts: "Manhole Covers",
    altText: "N N Industries - Manhole Covers",
    years: "1 YRS", // Random value
    location: "Rajasthan, India", // Assuming Rajasthan for 'rj'
    tooltipText: "N N Industries, Manhole Covers, Rajasthan",
    rating: "4.6", // Random value
    ratingPercent: "92%", // Random value
    ratingsCount: "15", // Random value
    responseRate: "85%", // Random value
    whatsappConfirmed: true,
  },
  {
    _id: "pankaj-goyal-delhi-delhi",
    name: "Pankaj Goyal",
    email: "PankajGoyal@gmail.com",
    password: "123456789",
    mobileNumber: "7011858158",
    companyName: "Goyal Product",
    statename: "Delhi",
    cityname: "Delhi",
    productOrService: "Gear Lever Boot Cover",
    imgSrc: "/assets/gear-cover.jpg",
    mainProducts: "Gear Lever Boot Cover",
    altText: "Goyal Product - Delhi",
    years: "1 YRS",
    location: "Delhi, Delhi",
    tooltipText: "Goyal Product, Delhi",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "150",
    responseRate: "92%",
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const SeatCovers = () => {
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
                  <Link to="#">Car Seat Covers</Link>
                </li>
                <li>
                  <Link to="#">Bike Seat Covers</Link>
                </li>
                <li>
                  <Link to="#">Truck Seat Covers</Link>
                </li>
                <li>
                  <Link to="#">Bus Seat Covers</Link>
                </li>
                <li>
                  <Link to="#">Van Seat Covers</Link>
                </li>
                <li>
                  <Link to="#">Custom Seat Covers</Link>
                </li>
                <li>
                  <Link to="#">Leather Seat Covers</Link>
                </li>
                <li>
                  <Link to="#">Fabric Seat Covers</Link>
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
                  <Link to="#">Haryana</Link>
                </li>
                <li>
                  <Link to="#">Uttar Pradesh</Link>
                </li>
                <li>
                  <Link to="#">Punjab</Link>
                </li>
                <li>
                  <Link to="#">Maharashtra</Link>
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
                      src="/assets/cov1.jpg"
                      width={55}
                      height={55}
                      alt="Car Seat Covers"
                    />
                  </figure>
                  <p className="title">Car Seat Covers</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/cov2.webp"
                      width={55}
                      height={55}
                      alt="Bike Seat Covers"
                    />
                  </figure>
                  <p className="title">Bike Seat Covers</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/cov3.jpg"
                      width={55}
                      height={55}
                      alt="Truck Seat Covers"
                    />
                  </figure>
                  <p className="title">Truck Seat Covers</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/cov4.jpg"
                      width={55}
                      height={55}
                      alt="Bus Seat Covers"
                    />
                  </figure>
                  <p className="title">Bus Seat Covers</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/cov5.jpg"
                      width={55}
                      height={55}
                      alt="Van Seat Covers"
                    />
                  </figure>
                  <p className="title">Van Seat Covers</p>
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

export default SeatCovers;
