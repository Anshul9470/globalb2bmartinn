import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    _id: "b1234567890shambu",
    name: "Shambu",
    email: "shambu@gmail.com",
    password: "9566094836",
    mobileNumber: "9566094836",
    companyName: "Kerala Brahmin's Foods and Products",
    productOrService: "PICKLES",
    imgSrc: "/assets/pickle1.jpg", // Make sure to add a relevant image
    mainProducts: "Mixed Pickles, Mango Pickles, Lime Pickles",
    altText: "Kerala Brahmin's Foods and Products - PICKLES",
    years: "1 YRS",
    location: "Chennai, Tamil Nadu, India",
    tooltipText: "Kerala Brahmin's Foods and Products, Chennai, Tamil Nadu",
    rating: "4.8",
    ratingPercent: "95%",
    ratingsCount: "120",
    responseRate: "90%",
    whatsappConfirmed: true,
  },

  {
    _id: "selvaraj-kanmark-pickles-madurai",
    name: "Selvaraj",
    email: "selvaraj@gmail.com",
    password: "9150206781",
    mobileNumber: "9150206781",
    companyName: "KANMARK PICKLES",
    productOrService: "PICKLES",
    imgSrc: "/assets/pickle5.jpg",
    mainProducts: "PICKLES",
    altText: "KANMARK PICKLES - PICKLES",
    years: "1 YRS",
    location: "Madurai, Tamil Nadu, India",
    tooltipText: "KANMARK PICKLES, PICKLES, Madurai",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "30",
    responseRate: "85%",
    whatsappConfirmed: true,
  },

  {
    _id: "babu-guru-pickles-tirunelveli",
    name: "Babu",
    email: "babu@gmail.com",
    password: "9443001784",
    mobileNumber: "9443001784",
    companyName: "Guru Pickles",
    productOrService: "PICKLES",
    imgSrc: "/assets/pickle6.jpg",
    mainProducts: "PICKLES",
    altText: "Guru Pickles - PICKLES",
    years: "1 YRS",
    location: "Tirunelveli, Tamil Nadu, India",
    tooltipText: "Guru Pickles, PICKLES, Tirunelveli",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "30",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "rajesh-sanjay-pickles-coimbatore",
    name: "Rajesh",
    email: "Rajesh@gmail.com",
    password: "7904323422",
    mobileNumber: "7904323422",
    companyName: "Sanjay Pickles",
    productOrService: "PICKLES",
    imgSrc: "/assets/pickle7.jpg",
    mainProducts: "PICKLES",
    altText: "Sanjay Pickles - PICKLES",
    years: "1 YRS",
    location: "Coimbatore, Tamil Nadu, India",
    tooltipText: "Sanjay Pickles, PICKLES, Coimbatore",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "30",
    responseRate: "85%",
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const PickleComponent = () => {
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
                  <Link to="#">Mango Pickles</Link>
                </li>
                <li>
                  <Link to="#">Mixed Pickles</Link>
                </li>
                <li>
                  <Link to="#">Chili Pickles</Link>
                </li>
                <li>
                  <Link to="#">Lime Pickles</Link>
                </li>
                <li>
                  <Link to="#">Garlic Pickles</Link>
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
                  <Link to="#">Gujarat</Link>
                </li>
                <li>
                  <Link to="#">Maharashtra</Link>
                </li>
                <li>
                  <Link to="#">Karnataka</Link>
                </li>
                <li>
                  <Link to="#">Punjab</Link>
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
                      src="/assets/pickle1.jpg"
                      width={55}
                      height={55}
                      alt="Pickles"
                    />
                  </figure>
                  <p className="title">Pickles</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/pickle1.jpg"
                      width={55}
                      height={55}
                      alt="Pickles"
                    />
                  </figure>
                  <p className="title">Lime Pickles</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/pickle3.jpg"
                      width={55}
                      height={55}
                      alt="Pickles"
                    />
                  </figure>
                  <p className="title">Chilli Pickles</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/pickle4.jpg"
                      width={55}
                      height={55}
                      alt="Pickles"
                    />
                  </figure>
                  <p className="title">Mango pickles</p>
                </div>
              </Link>
            </div>
            {/* Add more categories if needed */}
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

export default PickleComponent;
