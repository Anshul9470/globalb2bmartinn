import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    name: "DVNN Kishore",
    email: "Kishoredronam@gmail.com",
    mobileNumber: "9666325374",
    companyName: "VIJAYA INDUSTRIES",
    productOrService: "Manufacturer of Wire Mesh",
    imgSrc: "/assets/meshs.jpg", // Example image path, adjust as necessary
    altText: "Wire Mesh - VIJAYA INDUSTRIES",
    mainProducts:
      "Stainless Steel Wire Mesh, Welded Wire Mesh, Galvanized Wire Mesh, Hexagonal Wire Mesh",
    years: "1 YRS",
    location: "Hyderabad, India", // Update with actual location if available
    tooltipText: "456 Industrial Area, Mesh Zone, Hyderabad, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "200",
    responseRate: "97%",
  },
  {
    _id: "ace-wire-mesh-maharashtra",
    name: "SHUBHAM",
    email: "SHUBHAM123@GMAIL.COM",
    password: "SHUBHAM123",
    mobileNumber: "9082206554",
    companyName: "Ace Wire Mesh & Co.",
    productOrService: "Wire Mesh Products", // Assumed product or service based on the name
    imgSrc: "/assets/ace-wire.jpg", // Placeholder image path
    mainProducts: "Wire Mesh",
    altText: "Ace Wire Mesh & Co. - Wire Mesh Products",
    years: "1 YRS", // Random value
    location: "Maharashtra, India",
    tooltipText: "Ace Wire Mesh & Co., Wire Mesh Products, Maharashtra",
    rating: "4.6", // Random value
    ratingPercent: "92%", // Random value
    ratingsCount: "28", // Random value
    responseRate: "85%", // Random value
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const WireMeshManufacturerStore = () => {
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
                  <Link to="#">Stainless Steel Wire Mesh</Link>
                </li>
                <li>
                  <Link to="#">Welded Wire Mesh</Link>
                </li>
                <li>
                  <Link to="#">Galvanized Wire Mesh</Link>
                </li>
                <li>
                  <Link to="#">Hexagonal Wire Mesh</Link>
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
                      src="/assets/mesh1.jpg"
                      width={55}
                      height={55}
                      alt="Stainless Steel Wire Mesh"
                    />
                  </figure>
                  <p className="title">Stainless Steel Wire Mesh</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/mesh2.jpg"
                      width={55}
                      height={55}
                      alt="Welded Wire Mesh"
                    />
                  </figure>
                  <p className="title">Welded Wire Mesh</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/mesh3.jpg"
                      width={55}
                      height={55}
                      alt="Galvanized Wire Mesh"
                    />
                  </figure>
                  <p className="title">Galvanized Wire Mesh</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/mesh4.jpg"
                      width={55}
                      height={55}
                      alt="Hexagonal Wire Mesh"
                    />
                  </figure>
                  <p className="title">Hexagonal Wire Mesh</p>
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

export default WireMeshManufacturerStore;
