import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    name: "Shital",
    email: "shital123@gmail.com",
    mobileNumber: "7038689726",
    companyName: "Amorra Enterprise",
    productOrService: "Detergent",
    imgSrc: "/assets/dets.jpg", // Provide the correct image path
    altText: "Detergent - Amorra Enterprise",
    mainProducts: "Liquid Detergent, Powder Detergent, Detergent Cake",
    years: "1 YRS",
    location: "Mumbai, Maharashtra, India",
    tooltipText:
      "789 Clean Street, Industrial Area, Mumbai, Maharashtra, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "60",
    responseRate: "92%",
  },
  {
    _id: "arjun-sunny-telangana",
    name: "Arjun Sunny",
    email: "arjunsunny@gmail.com",
    password: "Arjun Sunny",
    mobileNumber: "9666643347",
    companyName: "Shree Siddhi Vinayaka Enterprises",
    statename: "Telangana",
    cityname: "Telangana",
    productOrService: "Detergent Powder",
    imgSrc: "/assets/detergent6.jpg",
    mainProducts: "High-Quality Detergent Powder, Laundry Solutions",
    altText: "Arjun Sunny - Trusted Detergent Powder Supplier in Telangana",
    years: "1 YRS",
    location: "Telangana, India",
    tooltipText: "Arjun Sunny - Premium Detergent Powder Manufacturer",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "200",
    responseRate: "88%",
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const Detergent = () => {
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
                  <Link to="#">Liquid Detergent</Link>
                </li>
                <li>
                  <Link to="#">Powder Detergent</Link>
                </li>
                <li>
                  <Link to="#">Detergent Cake</Link>
                </li>
                <li>
                  <Link to="#">Eco-friendly Detergent</Link>
                </li>
                <li>
                  <Link to="#">Baby Detergent</Link>
                </li>
                <li>
                  <Link to="#">Laundry Pods</Link>
                </li>
                <li>
                  <Link to="#">Fabric Softener</Link>
                </li>
                <li>
                  <Link to="#">Bleach</Link>
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
                  <Link to="#">Tamil Nadu</Link>
                </li>
                <li>
                  <Link to="#">Uttar Pradesh</Link>
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
                      src="/assets/det1.jpg"
                      width={55}
                      height={55}
                      alt="Liquid Detergent"
                    />
                  </figure>
                  <p className="title">Liquid Detergent</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/det2.jpg"
                      width={55}
                      height={55}
                      alt="Powder Detergent"
                    />
                  </figure>
                  <p className="title">Powder Detergent</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/det3.jpg"
                      width={55}
                      height={55}
                      alt="Detergent Cake"
                    />
                  </figure>
                  <p className="title">Detergent Cake</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/det4.jpg"
                      width={55}
                      height={55}
                      alt="Eco-friendly Detergent"
                    />
                  </figure>
                  <p className="title">Eco-friendly Detergent</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/det5.jpg"
                      width={55}
                      height={55}
                      alt="Baby Detergent"
                    />
                  </figure>
                  <p className="title">Baby Detergent</p>
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

export default Detergent;
