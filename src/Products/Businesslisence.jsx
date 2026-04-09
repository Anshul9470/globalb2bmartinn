import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    _id: "samriddh-construction-delhi",
    name: "Samriddh Construction",
    email: "Samridhaconstruction@gmail.com",
    password: "password123",
    mobileNumber: "+91 9911693718",
    contactPerson: "Mrs Shikha Ji",
    companyName: "Samriddh Construction",
    productOrService: "Legal Assistance",
    imgSrc: "/assets/samc2.jpg",
    mainProducts: "Legal Consultations, Case Evaluations",
    altText: "Samriddh Construction - Legal Assistance",
    years: "1 YRS",
    location: "Rohini Sector 22, Delhi, India",
    tooltipText: "Samriddh Construction - Legal Assistance, Delhi",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "85",
    responseRate: "92%",
    path: "/samriddh-construction",
  },

  {
    name: "Deepak",
    email: "deepak123@gmail.com",
    mobileNumber: "8308642269",
    companyName: "BUSINESS licence",
    productOrService: "BUSINESS licence",
    imgSrc: "/assets/bus1.png", // Provide the correct image path
    altText: "BUSINESS licence - BUSINESS licence",
    mainProducts: "Business Licensing Services, Compliance Consulting",
    years: "1 YRS",
    location: "Bangalore, Karnataka, India",
    tooltipText:
      "456 Business Avenue, Commercial Area, Bangalore, Karnataka, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "50",
    responseRate: "92%",
  },
  {
    _id: "business-consultancy-maharashtra",
    name: "Vijay",
    email: "vijay@gmail.com",
    password: "12345678",
    mobileNumber: "9270222831",
    companyName: "Business Consultancy",
    productOrService: "Business Consultancy",
    imgSrc: "/assets/business1.jpg",
    mainProducts: "Consulting Services, Business Solutions",
    altText: "Business Consultancy - Consulting Services",
    years: "1 YRS",
    location: "Maharashtra, India",
    tooltipText: "Business Consultancy, Maharashtra",
    rating: "4.3",
    ratingPercent: "85%",
    ratingsCount: "60",
    responseRate: "90%",
    whatsappConfirmed: false,
  },
  {
    name: "Mohd Kashish Siddiqui",
    email: "MohdKashishSiddiqui@gmail.com",
    password: "12345678",
    mobileNumber: "8755174786",
    companyName: "Mohd Kashish Siddiqui",
    productOrService: "Stamps",
    imgSrc: "/assets/stamps.jpg",
    mainProducts: "Custom Stamps, Rubber Stamps, Self-Inking Stamps",
    altText: "Mohd Kashish Siddiqui - Stamps",
    years: "1 YRS",
    location: "Haldwani, Uttarakhand, India",
    tooltipText: "Mohd Kashish Siddiqui, Haldwani",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "110",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    _id: "dev-sharma-delhi",
    name: "Dev Sharma",
    email: "devs3871@gmail.com",
    password: "Anshu@9899",
    mobileNumber: "9899397718",
    companyName: "Dev Enterprises",
    statename: "India",
    cityname: "Delhi",
    productOrService: "Trader",
    imgSrc: "/assets/dev-enterprises.jpg",
    mainProducts: "Trading Services, Wholesale Trading Solutions",
    altText: "Dev Enterprises - Leading Trader in Delhi",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "Dev Enterprises - Trusted Trading Solutions Provider",
    rating: "4.7",
    ratingPercent: "93%",
    ratingsCount: "160",
    responseRate: "87%",
    whatsappConfirmed: false,
  },

  // Add more items if needed
];

const BusinessLicense = () => {
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
                  <Link to="#">Business Licensing Services</Link>
                </li>
                <li>
                  <Link to="#">Compliance Consulting</Link>
                </li>
                <li>
                  <Link to="#">Legal Services</Link>
                </li>
                <li>
                  <Link to="#">Regulatory Compliance</Link>
                </li>
                <li>
                  <Link to="#">Startup Consultancy</Link>
                </li>
                <li>
                  <Link to="#">Corporate Governance</Link>
                </li>
                <li>
                  <Link to="#">Tax Advisory</Link>
                </li>
                <li>
                  <Link to="#">Intellectual Property Rights</Link>
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
                  <Link to="#">Karnataka</Link>
                </li>
                <li>
                  <Link to="#">Maharashtra</Link>
                </li>
                <li>
                  <Link to="#">Gujarat</Link>
                </li>
                <li>
                  <Link to="#">Delhi</Link>
                </li>
                <li>
                  <Link to="#">Tamil Nadu</Link>
                </li>
                <li>
                  <Link to="#">Rajasthan</Link>
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
                      src="/assets/bus2.jpg"
                      width={55}
                      height={55}
                      alt="Business Licensing Services"
                    />
                  </figure>
                  <p className="title">Business Licensing Services</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/bus3.jpg"
                      width={55}
                      height={55}
                      alt="Compliance Consulting"
                    />
                  </figure>
                  <p className="title">Compliance Consulting</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/bus4.jpg"
                      width={55}
                      height={55}
                      alt="Legal Services"
                    />
                  </figure>
                  <p className="title">Legal Services</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/bus1.png"
                      width={55}
                      height={55}
                      alt="Regulatory Compliance"
                    />
                  </figure>
                  <p className="title">Regulatory Compliance</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/bus2.jpg"
                      width={55}
                      height={55}
                      alt="Startup Consultancy"
                    />
                  </figure>
                  <p className="title">Startup Consultancy</p>
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

export default BusinessLicense;
