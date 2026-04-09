import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    _id: "manoj-kale-kolhapur-maharashtra",
    name: "Manoj Kale",
    email: "Manojkale@gmail.com",
    password: "Manoj Kale",
    mobileNumber: "8010782588",
    companyName: "Manoj Kale Enterprises",
    statename: "Maharashtra",
    cityname: "Kolhapur",
    productOrService: "Clothings",
    imgSrc: "/assets/cloth-manoj.jpg",
    mainProducts: "Clothings",
    altText: "Manoj Kale Enterprises - Kolhapur",
    years: "1 YRS",
    location: "Kolhapur, Maharashtra",
    tooltipText: "Manoj Kale Enterprises, Kolhapur",
    rating: "4.0",
    ratingPercent: "80%",
    ratingsCount: "80",
    responseRate: "85%",
    whatsappConfirmed: true,
  },

  {
    name: "Tanya",
    email: "smfashion@gmail.com",
    mobileNumber: "9993660510",
    companyName: "S M Fashions",
    productOrService: "Clothing",
    imgSrc: "/assets/clothing.jpg", // Provide the correct image path
    altText: "Clothing - S M Fashions",
    mainProducts: "Women's Clothing, Men's Clothing, Kids' Clothing",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "78 Fashion Street, Central Market, Delhi, India",
    rating: "4.2",
    ratingPercent: "84%",
    ratingsCount: "60",
    responseRate: "89%",
  },

  {
    _id: "clothes-manufacture-kolkata",
    name: "Nafis",
    email: "nafis@gmail.com",
    password: "12345678",
    mobileNumber: "9051572823",
    companyName: "Clothes Manufacture",
    productOrService: "Clothes",
    imgSrc: "/assets/cloth1.jpg",
    mainProducts: "Clothes",
    altText: "Clothes Manufacture - Kolkata",
    years: "1 YRS",
    location: "Kolkata, India",
    tooltipText: "Clothes Manufacture, Kolkata, Clothes",
    rating: "4.2",
    ratingPercent: "84%",
    ratingsCount: "15",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "nisha-viddhi-pimpri-maharashtra",
    name: "Nisha Viddhi",
    email: "Nishaviddhi@gmail.com",
    password: "Nisha Viddhi",
    mobileNumber: "9822099942",
    companyName: "Nisha Viddhi Enterprises",
    statename: "Maharashtra",
    cityname: "Pimpri",
    productOrService: "clothes",
    imgSrc: "/assets/clothes8.jpg",
    mainProducts: "clothes",
    altText: "Nisha Viddhi Enterprises - Pimpri",
    years: "1 YRS",
    location: "Pimpri, Maharashtra",
    tooltipText: "Nisha Viddhi Enterprises, Pimpri",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "200",
    responseRate: "93%",
    whatsappConfirmed: true,
  },
  {
    name: "Lothika Bose",
    email: "LothikaBose@gmail.com",
    password: "12345678",
    mobileNumber: "9168443425",
    companyName: "Lothika Bose",
    productOrService: "Clothes",
    imgSrc: "/assets/clothes9.jpg",
    mainProducts: "Casual Wear, Traditional Outfits, Modern Apparel",
    altText: "Lothika Bose - Clothing Supplier",
    years: "1 YRS",
    location: "Pune, Maharashtra, India",
    tooltipText: "Lothika Bose, Pune",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "75",
    responseRate: "88%",
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const Clothing = () => {
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
                  <Link to="#">Women's Clothing</Link>
                </li>
                <li>
                  <Link to="#">Men's Clothing</Link>
                </li>
                <li>
                  <Link to="#">Kids' Clothing</Link>
                </li>
                <li>
                  <Link to="#">Ethnic Wear</Link>
                </li>
                <li>
                  <Link to="#">Western Wear</Link>
                </li>
                <li>
                  <Link to="#">Active Wear</Link>
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
                  <Link to="#">Delhi</Link>
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
                      src="/assets/clothing.jpg"
                      width={55}
                      height={55}
                      alt="Women's Clothing"
                    />
                  </figure>
                  <p className="title">Women's Clothing</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/clothing2.jpg"
                      width={55}
                      height={55}
                      alt="Men's Clothing"
                    />
                  </figure>
                  <p className="title">Men's Clothing</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/clothing3.jpg"
                      width={55}
                      height={55}
                      alt="Kids' Clothing"
                    />
                  </figure>
                  <p className="title">Kids' Clothing</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/clothing4.jpg"
                      width={55}
                      height={55}
                      alt="Ethnic Wear"
                    />
                  </figure>
                  <p className="title">Ethnic Wear</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/clothing5.jpg"
                      width={55}
                      height={55}
                      alt="Western Wear"
                    />
                  </figure>
                  <p className="title">Western Wear</p>
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

export default Clothing;
