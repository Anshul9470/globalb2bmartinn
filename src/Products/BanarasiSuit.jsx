import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const banarasiSuitData = {
  name: "Javed Ansari",
  email: "JavedAnsari@gmail.com",
  password: "12345678",
  mobileNumber: "6387941255",
  companyName: "Banarasi Suit Collection",
  statename: "",
  cityname: "India",
  productOrService: "Saree & Suits",
  imgSrc: "/assets/suits.jpeg", // Placeholder image, replace with actual image path
  altText: "Banarasi Suit Collection - Saree",
  years: "1 YRS",
  location: "India",
  rating: "4.8",
  ratingPercent: "96%",
  ratingsCount: "55",
  responseRate: "85%",
};

const BanarasiSuitCollectionComponent = () => {
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
                  <Link to="#">Sarees</Link>
                </li>
                <li>
                  <Link to="#">Banarasi Suits</Link>
                </li>
                <li>
                  <Link to="#">Traditional Wear</Link>
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
                  <Link to="#">Uttar Pradesh</Link>
                </li>
                <li>
                  <Link to="#">Maharashtra</Link>
                </li>
                <li>
                  <Link to="#">West Bengal</Link>
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
                      src="/assets/saree.jpeg"
                      width={55}
                      height={55}
                      alt="Saree Category"
                    />
                  </figure>
                  <p className="title">Sarees</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/suits.jpg"
                      width={55}
                      height={55}
                      alt="Suits Category"
                    />
                  </figure>
                  <p className="title">Suits</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <ul className="classfied-wrap">
          <li>
            <div className="classified">
              <div className="prd-info">
                <div className="prd-box">
                  <img
                    src={banarasiSuitData.imgSrc}
                    alt={banarasiSuitData.altText}
                    width={250}
                    height={250}
                  />
                </div>
              </div>
              <div className="cinfo">
                <div className="cbox">
                  <figure>
                    <span className="cmp-year">{banarasiSuitData.years}</span>
                  </figure>
                  <div className="cboxr">
                    <Link to="#" target="_blank">
                      <h4 className="title">{banarasiSuitData.companyName}</h4>
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
                      {banarasiSuitData.location}
                      <span className="tooltiptext">
                        {banarasiSuitData.cityname}, India
                      </span>
                    </p>
                    <div className="rating-wrap">
                      <span className="rtbox">{banarasiSuitData.rating}</span>
                      <span
                        className="crate"
                        style={{ "--_score": banarasiSuitData.ratingPercent }}
                      />
                      <span className="rate-text">
                        {banarasiSuitData.ratingsCount} Ratings
                      </span>
                    </div>
                  </div>
                </div>
                <div className="caddit">
                  <div className="item">
                    <div className="ca-box">
                      <p>
                        <i className="l3icon resp-icon" />
                      </p>
                      <p>
                        <span>Response Rate</span>{" "}
                        <b>{banarasiSuitData.responseRate}</b>
                      </p>
                    </div>
                    <p>
                      <span>Main Products</span>{" "}
                      <b>{banarasiSuitData.productOrService}</b>
                    </p>
                  </div>
                </div>
                <div className="caction">
                  <Link to="/register-buyer">
                    <p>Contact Supplier</p>
                  </Link>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default BanarasiSuitCollectionComponent;
