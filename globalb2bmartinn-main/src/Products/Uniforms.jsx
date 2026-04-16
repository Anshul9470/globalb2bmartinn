import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    _id: "cleef-empire-delhi",
    name: "Cleef Empire",
    email: "contact@cleefempire.com",
    password: "password123",
    mobileNumber: "9876543210",
    companyName: "Cleef Empire",
    productOrService: "Uniforms (All Kinds)",
    imgSrc: "/assets/uniform2.jpg",
    mainProducts: "Uniforms, School Uniforms, Hotel Uniforms etc",
    altText: "Cleef Empire - Uniforms",
    years: "1 YRS",
    location: " Crescent School-Maujpur, Delhi, 110053, India",
    tooltipText: "Cleef Empire, Uniforms, Delhi",
    rating: "4.8",
    ratingPercent: "95%",
    ratingsCount: "50",
    responseRate: "90%",
    path: "/cleef-empire",
  },
  {
    _id: "readymade-garment-and-uniform-ahmedabad",
    name: "Readymade Garment and Uniform",
    email: "zaahid@gmail.com",
    password: "9898010246",
    mobileNumber: "9898010246",
    companyName: "Readymade Garment and Uniform",
    statename: "Gujarat",
    cityname: "Ahmedabad",
    productOrService: "Readymade Garments, Uniforms",
    imgSrc: "/assets/cle3.jpg",
    mainProducts: "Readymade Garments, Uniforms",
    altText: "Readymade Garment and Uniform - Ahmedabad",
    years: "1 YRS",
    location: "Ahmedabad, Gujarat",
    tooltipText: "Readymade Garment and Uniform, Ahmedabad",
    rating: "4.2",
    ratingPercent: "84%",
    ratingsCount: "95",
    responseRate: "85%",
  },
];

const UniformDealer = () => {
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
                  <Link to="#">Men's Wear</Link>
                </li>
                <li>
                  <Link to="#">Women's Wear</Link>
                </li>
                <li>
                  <Link to="#">Kids' Wear</Link>
                </li>
                <li>
                  <Link to="#">Ethnic Wear</Link>
                </li>
                <li>
                  <Link to="#">Formal Wear</Link>
                </li>
                <li>
                  <Link to="#">Casual Wear</Link>
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
                  <Link to="#">Delhi</Link>
                </li>
                <li>
                  <Link to="#">Tamil Nadu</Link>
                </li>
                <li>
                  <Link to="#">Uttar Pradesh</Link>
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
                      src="/assets/cle1.jpg"
                      width={55}
                      height={55}
                      alt="Men's Wear"
                    />
                  </figure>
                  <p className="title">Hotel Unniform</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/cle2.jpg"
                      width={55}
                      height={55}
                      alt="Women's Wear"
                    />
                  </figure>
                  <p className="title">Industrial Uniforms</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/cle3.jpg"
                      width={55}
                      height={55}
                      alt="Kids' Wear"
                    />
                  </figure>
                  <p className="title">Cleaning Wear</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/gr5.jpeg"
                      width={55}
                      height={55}
                      alt="Ethnic Wear"
                    />
                  </figure>
                  <p className="title">Corporate Uniform</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/formal.jpg"
                      width={55}
                      height={55}
                      alt="Formal Wear"
                    />
                  </figure>
                  <p className="title">Formal Wear</p>
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

export default UniformDealer;
