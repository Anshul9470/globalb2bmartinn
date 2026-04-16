import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    name: "Feroz",
    email: "feroz123@gmail.com",
    mobileNumber: "9949503989",
    companyName: "Gana Jute Bags",
    productOrService: "Jute Bags",
    imgSrc: "/assets/juts.jpg", // Provide the correct image path
    altText: "Jute Bags - Gana Jute Bags",
    mainProducts: "Jute Bags, Eco-friendly Bags",
    years: "1 YRS",
    location: "Hyderabad, Telangana, India",
    tooltipText: "789 Eco Street, Industrial Area, Hyderabad, Telangana, India",
    rating: "4.2",
    ratingPercent: "84%",
    ratingsCount: "50",
    responseRate: "90%",
  },
  {
    _id: "jute-gunny-bag-ambala",
    name: "Rahul",
    email: "rahul@gmail.com",
    password: "12345678",
    mobileNumber: "8126083433",
    companyName: "Jute Gunny Bag",
    productOrService: "Jute Bag",
    imgSrc: "/assets/jute1.jpg",
    mainProducts: "Jute Bags",
    altText: "Jute Gunny Bag - Jute Bag",
    years: "1 YRS",
    location: "Ambala, India",
    tooltipText: "Jute Gunny Bag, Jute Bag, Ambala",
    rating: "4.4",
    ratingPercent: "88%",
    ratingsCount: "37",
    responseRate: "82%",
    whatsappConfirmed: true,
  },
  {
    _id: "ashadrahman-santravidasnagar-uttarpradesh",
    name: "Ashad Rahman",
    email: "AshadRahman123@gamil.com",
    password: "Ashad Rahman",
    mobileNumber: "9792953634",
    companyName: "RAHMAN CREATION",
    statename: "Uttar Pradesh",
    cityname: "Sant Ravidas Nagar",
    productOrService: "Jute Rugs",
    imgSrc: "/assets/rugs3.jpg",
    mainProducts: "Jute Rugs",
    altText: "RAHMAN CREATION - Sant Ravidas Nagar",
    years: "1 YRS",
    location: "Sant Ravidas Nagar, Uttar Pradesh",
    tooltipText: "RAHMAN CREATION, Sant Ravidas Nagar",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "178",
    responseRate: "89%",
    whatsappConfirmed: true,
  },
  {
    _id: "shahabuddin-pokhara-uttarpradesh",
    name: "Shahabuddin",
    email: "Shahabuddin123@gamil.com",
    password: "RUHAAN ENTERPRISES",
    mobileNumber: "9170315929",
    companyName: "RUHAAN ENTERPRISES",
    statename: "Uttar Pradesh",
    cityname: "Pokhara",
    productOrService: "Jute Rugs",
    imgSrc: "/assets/jutebag.jpg",
    mainProducts: "Jute Rugs",
    altText: "RUHAAN ENTERPRISES - Pokhara",
    years: "1 YRS",
    location: "Pokhara, Uttar Pradesh",
    tooltipText: "RUHAAN ENTERPRISES, Pokhara",
    rating: "4.4",
    ratingPercent: "88%",
    ratingsCount: "143",
    responseRate: "85%",
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const JuteBags = () => {
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
                  <Link to="#">Eco-friendly Bags</Link>
                </li>
                <li>
                  <Link to="#">Jute Bags</Link>
                </li>
                <li>
                  <Link to="#">Reusable Bags</Link>
                </li>
                <li>
                  <Link to="#">Shopping Bags</Link>
                </li>
                <li>
                  <Link to="#">Tote Bags</Link>
                </li>
                <li>
                  <Link to="#">Promotional Bags</Link>
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
                  <Link to="#">Telangana</Link>
                </li>
                <li>
                  <Link to="#">Andhra Pradesh</Link>
                </li>
                <li>
                  <Link to="#">Tamil Nadu</Link>
                </li>
                <li>
                  <Link to="#">Karnataka</Link>
                </li>
                <li>
                  <Link to="#">Maharashtra</Link>
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
                      src="/assets/jut.jpg"
                      width={55}
                      height={55}
                      alt="Eco-friendly Bags"
                    />
                  </figure>
                  <p className="title">Eco-friendly Bags</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/jut1.jpg"
                      width={55}
                      height={55}
                      alt="Jute Bags"
                    />
                  </figure>
                  <p className="title">Jute Bags</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/jut2.jpg"
                      width={55}
                      height={55}
                      alt="Reusable Bags"
                    />
                  </figure>
                  <p className="title">Reusable Bags</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/jut3.jpg"
                      width={55}
                      height={55}
                      alt="Shopping Bags"
                    />
                  </figure>
                  <p className="title">Shopping Bags</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/jut4.jpg"
                      width={55}
                      height={55}
                      alt="Tote Bags"
                    />
                  </figure>
                  <p className="title">Tote Bags</p>
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

export default JuteBags;
