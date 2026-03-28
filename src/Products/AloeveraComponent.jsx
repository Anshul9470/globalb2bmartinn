import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const aloeVeraData = [
  {
    _id: "pooja-agri-products-surat",
    name: "Pooja Agri Products",
    email: "shlokshrivastav2008@gmail.com",
    password: "password123",
    mobileNumber: "+91 87808 71332",
    contactPerson: "Shalok Shrivastav",
    companyName: "Pooja Agri Products",
    productOrService: "Aloe Vera Gels",
    imgSrc: "/assets/agp2.webp",
    mainProducts: "Aloe Vera Gels",
    altText: "Pooja Agri Products - Aloe Vera Gels",
    years: "1 YRS",
    location: " Surat-395004, Gujarat, India",
    tooltipText: "Pooja Agri Products - Aloe Vera Gels, Surat",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "78",
    responseRate: "98%",
    path: "/pooja-agri-products",
  },
  {
    name: "Umar Mukthar",
    email: "8300164982@gmail.com",
    password: "8300164982",
    mobileNumber: "8300164982",
    companyName: "Computer and Laptop Accessories",
    productOrService: "Aloe Vera",
    imgSrc: "/assets/Aloecera.jpg",
    mainProducts: "Aloe Vera, Herbal Products",
    altText: "Umar Mukthar - Aloe Vera",
    years: "1 YRS",
    location: "Sivaganga, Tamil Nadu, India",
    tooltipText: "Umar Mukthar, Sivaganga",
    rating: "4.3",
    ratingPercent: "86%",
    ratingsCount: "65",
    responseRate: "92%",
    whatsappConfirmed: true,
  },

  {
    _id: "b1234567890mohammad-ali-khan",
    name: "Mohammad",
    email: "mohammad@gmail.com",
    password: "mohammadaloe",
    mobileNumber: "9812345678",
    companyName: "Mohammad Ali Khan",
    productOrService: "Aloe Vera Gel, Herbal Oils, Natural Soaps",
    imgSrc: "/assets/alo.jpg",
    mainProducts: "Aloe Vera Gel, Herbal Oils, Natural Soaps",
    altText: "Mohammad Ali Khan - Aloe Vera Gel, Herbal Oils, Natural Soaps",
    years: "1 YRS",
    location: "Jaipur, Rajasthan, India",
    tooltipText: "Mohammad Ali Khan, Jaipur, Rajasthan",
    rating: "4.8",
    ratingPercent: "92%",
    ratingsCount: "120",
    responseRate: "90%",
  },

  // Add more items if needed
];

const AloeVeraComponent = () => {
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
                  <Link to="#">Aloe Vera Gel</Link>
                </li>
                <li>
                  <Link to="#">Herbal Oils</Link>
                </li>
                <li>
                  <Link to="#">Natural Soaps</Link>
                </li>
                <li>
                  <Link to="#">Organic Creams</Link>
                </li>
                <li>
                  <Link to="#">Skin Care Products</Link>
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
                  <Link to="#">Rajasthan</Link>
                </li>
                <li>
                  <Link to="#">Madhya Pradesh</Link>
                </li>
                <li>
                  <Link to="#">Uttar Pradesh</Link>
                </li>
                <li>
                  <Link to="#">Gujarat</Link>
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
                      src="/assets/agp2.webp"
                      width={55}
                      height={55}
                      alt="Aloe Vera Gel"
                    />
                  </figure>
                  <p className="title">Aloe Vera Gel</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/herbaloil.jpg"
                      width={55}
                      height={55}
                      alt="Herbal Oils"
                    />
                  </figure>
                  <p className="title">Herbal Oils</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/soap1.jpg"
                      width={55}
                      height={55}
                      alt="Natural Soaps"
                    />
                  </figure>
                  <p className="title">Natural Soaps</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/cream.jpg"
                      width={55}
                      height={55}
                      alt="Organic Creams"
                    />
                  </figure>
                  <p className="title">Organic Creams</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/skincare.jpg"
                      width={55}
                      height={55}
                      alt="Skin Care Products"
                    />
                  </figure>
                  <p className="title">Skin Care Products</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <ul className="classfied-wrap">
          {aloeVeraData.map((item, index) => (
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

export default AloeVeraComponent;
