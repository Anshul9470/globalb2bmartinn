import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    _id: "sarah-huang-quanzhou-fujian",
    name: "Sarah Huang",
    email: "webmaster@vedardsecurity.com",
    password: "Huang314159!",
    mobileNumber: "8050996636",
    companyName: "Vedard Foreign Trade Co., Ltd.",
    statename: "Fujian",
    cityname: "Quanzhou",
    productOrService:
      "Security Systems, Burglar Alarm, Fire Alarm Detectors, Sound Light Alarm",
    imgSrc: "/assets/alarm.webp",
    mainProducts: "Security Systems",
    altText: "Vedard Foreign Trade - Security Systems and Alarms in Quanzhou",
    years: "1 YRS",
    location: "Quanzhou, Fujian",
    tooltipText:
      "Vedard Foreign Trade Co., Ltd., Quanzhou - Security Systems and Alarms",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "245",
    responseRate: "95%",
    whatsappConfirmed: true,
  },
];

const AlarmProducts = () => {
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
                  <Link to="#">Smartphones</Link>
                </li>
                <li>
                  <Link to="#">Laptops</Link>
                </li>
                <li>
                  <Link to="#">Tablets</Link>
                </li>
                <li>
                  <Link to="#">Home Appliances</Link>
                </li>
                <li>
                  <Link to="#">Gaming Consoles</Link>
                </li>
                <li>
                  <Link to="#">Camera Equipment</Link>
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
                  <Link to="#">Delhi</Link>
                </li>
                <li>
                  <Link to="#">Karnataka</Link>
                </li>
                <li>
                  <Link to="#">Gujarat</Link>
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
                      src="/assets/alarm.webp"
                      width={55}
                      height={55}
                      alt="Smartphones"
                    />
                  </figure>
                  <p className="title">Alarm</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/elec6.jpeg"
                      width={55}
                      height={55}
                      alt="Laptops"
                    />
                  </figure>
                  <p className="title">Laptops</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/elec3.jpeg"
                      width={55}
                      height={55}
                      alt="Tablets"
                    />
                  </figure>
                  <p className="title">Tablets</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/elec7.jpeg"
                      width={55}
                      height={55}
                      alt="Home Appliances"
                    />
                  </figure>
                  <p className="title">Home Appliances</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/elec5.jpeg"
                      width={55}
                      height={55}
                      alt="Gaming Consoles"
                    />
                  </figure>
                  <p className="title">Gaming Consoles</p>
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

export default AlarmProducts;
