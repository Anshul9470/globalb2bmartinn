import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    name: "Puneet Agrawal",
    email: "lncjaipur@yahoo.in",
    mobileNumber: "9829090760",
    companyName: "LAXMINARAIN AND COMPANY",
    productOrService: "Manufacturer of Yellow Maize",
    imgSrc: "/assets/mai1.jpg", // Example image path, adjust as necessary
    altText: "Yellow Maize - LAXMINARAIN AND COMPANY",
    mainProducts: "Yellow Maize, Corn Flour, Animal Feed, Corn Starch",
    years: "1 YRS",
    location: "Jaipur, India", // Update with actual location if available
    tooltipText: "123 Maize Lane, Cornfield District, Jaipur, India",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "150",
    responseRate: "98%",
  },
  {
    _id: "rajiveer-pinheiro-chennai",
    name: "Mr. Rajiveer Pinheiro",
    email: "artp@thomaseximp.com",
    password: "9840104708",
    mobileNumber: "9840104708",
    companyName: "Thomas International",
    statename: "Tamil Nadu",
    cityname: "Chennai",
    productOrService:
      "Maize / Corn Processing Machine, Peanut / Groundnut Processing Machine",
    imgSrc: "/assets/yellowmaize.jpg",
    mainProducts: "Corn Processing Machines, Groundnut Processing Machines",
    altText: "Thomas International - Processing Machinery Supplier in Chennai",
    years: "1 YRS",
    location: "Chennai, Tamil Nadu, India",
    tooltipText: "Thomas International - Expert in Processing Machinery",
    rating: "4.9",
    ratingPercent: "95%",
    ratingsCount: "300",
    responseRate: "90%",
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const YellowMaizeManufacturerStore = () => {
  return (
    <div className="main-box">
      {/* Aside section for filters */}
      <aside>
        <div className="flt-box-wrap">
          <div className="flt-box mb-0 flt-head">Filters By</div>
          <div className="flt-box bdrt-0">
            <p className="flt-title">Related Categories</p>
            <div className="flt-content">
              <ul className="flt-list cust-scroll">
                <li>
                  <Link to="#">Yellow Maize</Link>
                </li>
                <li>
                  <Link to="#">Corn Flour</Link>
                </li>
                <li>
                  <Link to="#">Animal Feed</Link>
                </li>
                <li>
                  <Link to="#">Corn Starch</Link>
                </li>
              </ul>
            </div>
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
                <Link to="#">Tamil Nadu</Link>
              </li>
              <li>
                <Link to="#">Karnataka</Link>
              </li>
              <li>
                <Link to="#">Rajasthan</Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      {/* Main section for classified listings */}
      <main>
        <section className="section">
          <p className="sect-title">Explore by Categories</p>
          {/* Categories section */}
          <div className="horprd expcatg" id="expcatg">
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/mai2.jpg"
                      width={55}
                      height={55}
                      alt="Yellow Maize"
                    />
                  </figure>
                  <p className="title">Yellow Maize</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/mai3.jpg"
                      width={55}
                      height={55}
                      alt="Corn Flour"
                    />
                  </figure>
                  <p className="title">Corn Flour</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/mai4.jpg"
                      width={55}
                      height={55}
                      alt="Animal Feed"
                    />
                  </figure>
                  <p className="title">Animal Feed</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/mai5.jpg"
                      width={55}
                      height={55}
                      alt="Corn Starch"
                    />
                  </figure>
                  <p className="title">Corn Starch</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        {/* Classified listings */}
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

export default YellowMaizeManufacturerStore;
