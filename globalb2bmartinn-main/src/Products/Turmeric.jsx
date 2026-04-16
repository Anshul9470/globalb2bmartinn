import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    name: "rishab",
    email: "ambicaspicesindustries@gmail.com",
    mobileNumber: "9024690134",
    companyName: "AMBICA SPICES INDUSTRIES",
    productOrService: "SPICES",
    imgSrc: "/assets/spices.jpg",
    altText: "Spices - Ambica Spices Industries",
    mainProducts: "Turmeric, Cumin, Cardamom",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "456 Spice Market, Masala Lane, Mumbai, India",
    rating: "4.7",
    ratingPercent: "92%",
    ratingsCount: "60",
    responseRate: "85%",
  },
  {
    _id: "mangalmurti-morya-ahmednagar",
    name: "Bhagwat Nanarao Shinde",
    email: "bhagwat.shinde03@gmail.com",
    password: "Bhagwat Nanarao Shinde",
    mobileNumber: "9767851633",
    companyName: "Mangalmurti Morya Farmer's Producer Company Ltd",
    productOrService: "Turmeric Powder",
    imgSrc: "/assets/turmeric.jpg",
    mainProducts: "Turmeric Powder",
    altText: "Mangalmurti Morya - Turmeric Powder",
    years: "1 YRS",
    location: "Ahmednagar, Maharashtra, India",
    tooltipText:
      "Mangalmurti Morya Farmer's Producer Company, Turmeric Powder, Ahmednagar",
    rating: "4.6",
    ratingPercent: "91%",
    ratingsCount: "15",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
  {
    _id: "mk-overseas-pune",
    name: "Madhuri",
    email: "mkoverseas444@gmail.com",
    password: "12345678",
    mobileNumber: "8975937722",
    companyName: "MK Overseas",
    statename: "Maharashtra",
    cityname: "Pune",
    productOrService: "Turmeric",
    imgSrc: "/assets/turmeric2.jpg",
    mainProducts: "Turmeric, Organic Turmeric Powder, Raw Turmeric",
    altText: "MK Overseas - Turmeric",
    years: "1 YRS",
    location: "Pune, Maharashtra, India",
    tooltipText: "MK Overseas - Premium Turmeric Supplier",
    rating: "4.2",
    ratingPercent: "88%",
    ratingsCount: "150",
    responseRate: "97%",
    whatsappConfirmed: false,
  },
  {
    _id: "e1234567890f012347",
    name: "Jesmon A V",
    email: "Jesmon1234@gmail.com",
    password: "Jesmon@1234",
    mobileNumber: "9815764526",
    companyName: "VKV Industries",
    productOrService: "Spices",
    imgSrc: "/assets/spices7.jpeg",
    mainProducts: "Turmeric, Pepper, Cardamom",
    altText: "Spices - VKV Industries",
    years: "1 YRS",
    location: "Kochi, India",
    tooltipText: "Sector 4, Spice Market, Kochi, India",
    rating: "4.7",
    ratingPercent: "93%",
    ratingsCount: "70",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
  {
    _id: "m1234567890n012347",
    name: "DY Food Exim",
    email: "info@dyfoodexim.com",
    password: "DY FOOD EXIM",
    mobileNumber: "9979479787",
    companyName: "DY Food Exim",
    productOrService: "Spices",
    imgSrc: "/assets/spices9.jpeg",
    mainProducts: "Turmeric, Black Pepper, Cumin",
    altText: "Spices - DY Food Exim",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "Sector 4, Spice Market, Delhi, India",
    rating: "4.7",
    ratingPercent: "93%",
    ratingsCount: "70",
    responseRate: "90%",
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const TermericProducts = () => {
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
                  <Link to="#">Turmeric</Link>
                </li>
                <li>
                  <Link to="#">Red Chili</Link>
                </li>
                <li>
                  <Link to="#">Black Pepper</Link>
                </li>
                <li>
                  <Link to="#">Cumin</Link>
                </li>
                <li>
                  <Link to="#">Coriander</Link>
                </li>
                <li>
                  <Link to="#">Cardamom</Link>
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
                  <Link to="#">Tamil Nadu</Link>
                </li>
                <li>
                  <Link to="#">Karnataka</Link>
                </li>
                <li>
                  <Link to="#">Andhra Pradesh</Link>
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
                      src="/assets/spices.jpg"
                      width={55}
                      height={55}
                      alt="Turmeric"
                    />
                  </figure>
                  <p className="title">Turmeric</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/spices1.jpg"
                      width={55}
                      height={55}
                      alt="Red Chili"
                    />
                  </figure>
                  <p className="title">Red Chili</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/spices2.jpg"
                      width={55}
                      height={55}
                      alt="Black Pepper"
                    />
                  </figure>
                  <p className="title">Black Pepper</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/spices4.jpg"
                      width={55}
                      height={55}
                      alt="Cumin"
                    />
                  </figure>
                  <p className="title">Cumin</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/spices5.jpg"
                      width={55}
                      height={55}
                      alt="Coriander"
                    />
                  </figure>
                  <p className="title">Coriander</p>
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

export default TermericProducts;
