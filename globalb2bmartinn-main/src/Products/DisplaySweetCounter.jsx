import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    _id: "3456abcd7890efgh",
    name: "Mohd Amir",
    email: "abc@gmail.com",
    mobileNumber: "6307611440",
    companyName: "Divine Manufacturer",
    productOrService: "Display & Sweet Counters",
    imgSrc: "/assets/display1.jpeg", // Update with the actual image path
    mainProducts: "Display Counters, Sweet Counters",
    altText: "Display & Sweet Counters - Divine Manufacturer",
    years: "1 YRS",
    location: "Kanpur, Uttar Pradesh, India",
    tooltipText: "Kanpur, Uttar Pradesh, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "80",
    responseRate: "80%",
    path: "/divine-manufacturer",
  },
  {
    name: "Bhavesh",
    email: "abc@gmail.com",
    password: "bhav@123",
    mobileNumber: "9574976226",
    companyName: "Dharmi Equipments",
    productOrService: "Sweet and Display Counter",
    imgSrc: "/assets/display2.jpeg",
    mainProducts: "Sweet Counters, Display Counters, Refrigeration Equipment",
    altText: "Dharmi Equipments - Sweet and Display Counter",
    years: "1 YRS",
    location: "Rajkot, Gujarat, India",
    tooltipText: "Dharmi Equipments, Rajkot",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "55",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
];

const DisplaySweetCounterProvider = () => {
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
                  <Link to="#">Display Counters</Link>
                </li>
                <li>
                  <Link to="#">Sweet Counters</Link>
                </li>
                <li>
                  <Link to="#">Retail Fixtures</Link>
                </li>
                <li>
                  <Link to="#">Shop Fittings</Link>
                </li>
                <li>
                  <Link to="#">Showcase Stands</Link>
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
                  <Link to="#">Karnataka</Link>
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
                      src="/assets/display1.jpeg"
                      width={55}
                      height={55}
                      alt="Display Counter"
                    />
                  </figure>
                  <p className="title">Display Counters</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/display2.jpeg"
                      width={55}
                      height={55}
                      alt="Sweet Counter"
                    />
                  </figure>
                  <p className="title">Sweet Counters</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/display3.jpeg"
                      width={55}
                      height={55}
                      alt="Retail Fixtures"
                    />
                  </figure>
                  <p className="title">Retail Fixtures</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/display4.jpeg"
                      width={55}
                      height={55}
                      alt="Shop Fittings"
                    />
                  </figure>
                  <p className="title">Shop Fittings</p>
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

export default DisplaySweetCounterProvider;
