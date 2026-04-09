import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const broomData = {
  name: "Sahabul Islam",
  email: "SahabulIslam@gmail.com",
  password: "12345678",
  mobileNumber: "9614391692",
  companyName: "D S Broom",
  statename: "",
  cityname: "Jharkhand",
  productOrService: "Broom",
  imgSrc: "/assets/broom1.jpg", // Placeholder image, replace with actual image path
  altText: "D S Broom - Broom",
  years: "1 YRS",
  location: "Jharkhand, India",
  rating: "4.7",
  ratingPercent: "94%",
  ratingsCount: "45",
  responseRate: "90%",
};

const BroomComponent = () => {
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
                  <Link to="#">Brooms</Link>
                </li>
                <li>
                  <Link to="#">Cleaning Supplies</Link>
                </li>
                <li>
                  <Link to="#">Home Cleaning Products</Link>
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
                  <Link to="#">Jharkhand</Link>
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
                      src="/assets/broom1.jpg"
                      width={55}
                      height={55}
                      alt="Broom Category"
                    />
                  </figure>
                  <p className="title">Brooms</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/broom2.jpg"
                      width={55}
                      height={55}
                      alt="Cleaning Supplies"
                    />
                  </figure>
                  <p className="title">Cleaning Supplies</p>
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
                    src={broomData.imgSrc}
                    alt={broomData.altText}
                    width={250}
                    height={250}
                  />
                </div>
              </div>
              <div className="cinfo">
                <div className="cbox">
                  <figure>
                    <span className="cmp-year">{broomData.years}</span>
                  </figure>
                  <div className="cboxr">
                    <Link to="#" target="_blank">
                      <h4 className="title">{broomData.companyName}</h4>
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
                      {broomData.location}
                      <span className="tooltiptext">
                        {broomData.cityname}, Jharkhand
                      </span>
                    </p>
                    <div className="rating-wrap">
                      <span className="rtbox">{broomData.rating}</span>
                      <span
                        className="crate"
                        style={{ "--_score": broomData.ratingPercent }}
                      />
                      <span className="rate-text">
                        {broomData.ratingsCount} Ratings
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
                        <b>{broomData.responseRate}</b>
                      </p>
                    </div>
                    <p>
                      <span>Main Products</span>{" "}
                      <b>{broomData.productOrService}</b>
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
        </ul>
      </main>
    </div>
  );
};

export default BroomComponent;
