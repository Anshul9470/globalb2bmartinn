import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    name: "Rakesh Singh",
    email: "AaravInternational.jal@gmail.com",
    mobileNumber: "6268284606",
    companyName: "PURVANSH ELECTRICAL TRADING AND TRAINING",
    productOrService: "Solar Panels",
    imgSrc: "/assets/panels6.jpeg", // Placeholder for image path
    altText: "Solar Panels - PURVANSH ELECTRICAL TRADING AND TRAINING",
    mainProducts:
      "Monocrystalline Panels, Polycrystalline Panels, Thin-Film Panels, Bifacial Panels, Flexible Panels",
    years: "1 YRS",
    location: "Jalgaon, Maharashtra, India",
    tooltipText:
      "456 Solar Street, Electrical Area, Jalgaon, Maharashtra, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "50",
    responseRate: "85%",
  },
  {
    _id: "baranidharan-eagle-vision-security-and-power-solutions-villupuram",
    name: "BARANIDHARAN",
    email: "murugansundaram425@gmail.com",
    password: "8015437958",
    mobileNumber: "8015437958",
    companyName: "Eagle vision secutity and power solutions",
    productOrService:
      "Solar energy, CCTV, GPS Tracker, Billing software sale and installation",
    imgSrc: "/assets/panel7.jpg",
    mainProducts: "Solar energy, CCTV, GPS Tracker, Billing software",
    altText:
      "Eagle vision security and power solutions - Solar energy, CCTV, GPS Tracker",
    years: "1 YRS",
    location: "Villupuram, Tamil Nadu, India",
    tooltipText:
      "Eagle vision security and power solutions, Solar energy, CCTV, GPS Tracker, Villupuram",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "30",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "paulraj-chandy-engineering-pvt-ltd-chennai",
    name: "Paulraj",
    email: "paulraj26.march@gmail.com",
    password: "9884778878",
    mobileNumber: "9884778878",
    companyName: "Chandy Engineering Pvt Ltd",
    productOrService:
      "Boiler Insulation Service, Thermal Insulation Services for Industries",
    imgSrc: "/assets/boiler1.jpg",
    mainProducts: "Boiler Insulation, Thermal Insulation",
    altText:
      "Chandy Engineering Pvt Ltd - Boiler Insulation, Thermal Insulation",
    years: "1 YRS",
    location: "Chennai, Tamil Nadu, India",
    tooltipText:
      "Chandy Engineering Pvt Ltd, Boiler Insulation, Thermal Insulation, Chennai",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "30",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "appadurai-eagle-vision-security-and-power-solutions-cuddalore",
    name: "Appadurai",
    email: "murugansundaram425@gmail.com",
    password: "8015437958",
    mobileNumber: "8015437958",
    companyName: "Eagle Vision Security and Power Solutions",
    productOrService: "Solar energy",
    imgSrc: "/assets/solarpanel2.jpg",
    mainProducts: "Solar energy",
    altText: "Eagle Vision Security and Power Solutions - Solar energy",
    years: "1 YRS",
    location: "Cuddalore, Tamil Nadu, India",
    tooltipText:
      "Eagle Vision Security and Power Solutions, Solar energy, Cuddalore",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "30",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "baranidharan-eagle-vision-security-and-power-solutions-villupuram",
    name: "BARANIDHARAN",
    email: "murugansundaram425@gmail.com",
    password: "8015437958",
    mobileNumber: "8015437958",
    companyName: "Eagle Vision Security and Power Solutions",
    productOrService: "Solar energy",
    imgSrc: "/assets/solarpanel3.jpg",
    mainProducts: "Solar energy",
    altText: "Eagle Vision Security and Power Solutions - Solar energy",
    years: "1 YRS",
    location: "Villupuram, Tamil Nadu, India",
    tooltipText:
      "Eagle Vision Security and Power Solutions, Solar energy, Villupuram",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "30",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    name: "Venkatesh",
    email: "abc@gmail.com",
    password: "venk1234",
    mobileNumber: "9819148112",
    companyName: "Solar",
    productOrService: "Solar Panel",
    imgSrc: "/assets/solarpanel8.jpg",
    mainProducts: "Solar Panels, Renewable Energy Solutions, Solar Equipment",
    altText: "Solar - Solar Panels and Equipment",
    years: "1 YRS",
    location: "Kharghar, Maharashtra, India",
    tooltipText: "Solar, Kharghar",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "95",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
  {
    _id: "yogesh-kapse-maharastra",
    name: "Yogesh Kapse",
    email: "YogeshKapse@gmail.com",
    password: "12345678",
    mobileNumber: "9307690821",
    companyName: "Yogesh Kapse",
    statename: "",
    cityname: "Maharashtra",
    productOrService: "Solar",
    imgSrc: "/assets/solar-panel3.jpg",
    mainProducts: "Solar Panels, Solar Energy Solutions, Solar Equipment",
    altText: "Yogesh Kapse - Reliable Solar Energy Provider in Maharashtra",
    years: "1 YRS",
    location: "Maharashtra, India",
    tooltipText: "Yogesh Kapse - Trusted Solar Energy Solutions",
    rating: "4.7",
    ratingPercent: "93%",
    ratingsCount: "160",
    responseRate: "88%",
    whatsappConfirmed: false,
  },

  // Add more items if needed
];

const SolarPanels = () => {
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
                  <Link to="#">Monocrystalline Panels</Link>
                </li>
                <li>
                  <Link to="#">Polycrystalline Panels</Link>
                </li>
                <li>
                  <Link to="#">Thin-Film Panels</Link>
                </li>
                <li>
                  <Link to="#">Bifacial Panels</Link>
                </li>
                <li>
                  <Link to="#">Flexible Panels</Link>
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
                  <Link to="#">Gujarat</Link>
                </li>
                <li>
                  <Link to="#">Rajasthan</Link>
                </li>
                <li>
                  <Link to="#">Karnataka</Link>
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
                      src="/assets/panels1.jpeg"
                      width={55}
                      height={55}
                      alt="Monocrystalline Panels"
                    />
                  </figure>
                  <p className="title">Monocrystalline Panels</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/panels2.jpeg"
                      width={55}
                      height={55}
                      alt="Polycrystalline Panels"
                    />
                  </figure>
                  <p className="title">Polycrystalline Panels</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/panels3.jpeg"
                      width={55}
                      height={55}
                      alt="Thin-Film Panels"
                    />
                  </figure>
                  <p className="title">Thin-Film Panels</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/panels4.jpeg"
                      width={55}
                      height={55}
                      alt="Bifacial Panels"
                    />
                  </figure>
                  <p className="title">Bifacial Panels</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/panels5.jpeg"
                      width={55}
                      height={55}
                      alt="Flexible Panels"
                    />
                  </figure>
                  <p className="title">Flexible Panels</p>
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

export default SolarPanels;
