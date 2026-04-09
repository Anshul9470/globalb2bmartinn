import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedDataLocks = [
  {
    _id: "esco-locks-aligarh",
    name: "Abdul Haleem",
    email: "AbdulHaleem@gmail.com",
    password: "12345678",
    mobileNumber: "7302633654",
    companyName: "ESCO LOCKS",
    productOrService: "Locks",
    imgSrc: "/assets/lock1.jpg",
    mainProducts: "Locks",
    altText: "ESCO LOCKS - Manufacturer of Locks",
    years: "3 YRS",
    location: "Aligarh, Uttar Pradesh, India",
    tooltipText: "ESCO LOCKS, Locks Manufacturer, Aligarh",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "58",
    responseRate: "91%",
    whatsappConfirmed: true,
  },
  {
    _id: "arpit-gupta-rajkot",
    name: "Arpit Gupta",
    email: "ArpitGupta123@gamil.com",
    password: "Arpit Gupta123",
    mobileNumber: "8979939579",
    companyName: "Arpit Enterprise",
    statename: "Gujarat",
    cityname: "Rajkot",
    productOrService: "Door Lock",
    imgSrc: "/assets/loack2.jpg",
    mainProducts: "Premium Door Locks, Security Locks, Modern Door Hardware",
    altText: "Arpit Enterprise - Trusted Door Lock Supplier in Rajkot",
    years: "1 YRS",
    location: "Rajkot, Gujarat, India",
    tooltipText: "Arpit Enterprise - Reliable Door Lock Manufacturer",
    rating: "4.6",
    ratingPercent: "91%",
    ratingsCount: "140",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
];

const LockComponent = () => {
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
                  <Link to="#">Padlocks</Link>
                </li>
                <li>
                  <Link to="#">Digital Locks</Link>
                </li>
                <li>
                  <Link to="#">Deadbolt Locks</Link>
                </li>
                <li>
                  <Link to="#">Door Locks</Link>
                </li>
                <li>
                  <Link to="#">Combination Locks</Link>
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
                  <Link to="#">Gujarat</Link>
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
                      src="/assets/lock1.jpg"
                      width={55}
                      height={55}
                      alt="Padlocks"
                    />
                  </figure>
                  <p className="title">Padlocks</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/lock2.jpg"
                      width={55}
                      height={55}
                      alt="Digital Locks"
                    />
                  </figure>
                  <p className="title">Digital Locks</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/lock3.jpg"
                      width={55}
                      height={55}
                      alt="Deadbolt Locks"
                    />
                  </figure>
                  <p className="title">Deadbolt Locks</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/lock4.jpg"
                      width={55}
                      height={55}
                      alt="Door Locks"
                    />
                  </figure>
                  <p className="title">Door Locks</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/lock5.jpg"
                      width={55}
                      height={55}
                      alt="Combination Locks"
                    />
                  </figure>
                  <p className="title">Combination Locks</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <ul className="classfied-wrap">
          {classifiedDataLocks.map((item, index) => (
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
                      <p>
                        <span>Main Products</span> <b>{item.mainProducts}</b>
                      </p>
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

export default LockComponent;
