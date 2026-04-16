import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    name: "Om Enterprises",
    email: "",
    mobileNumber: "",
    companyName: "Om Enterprises",
    address:
      "Shop No.6 Panvel Highway Road, Near Mankhurd Railway Station, Mankhurd (W.) Mumbai-400043",
    productOrService: "Paint, Luxury Paint Matt, Royale Matt Paint",
    imgSrc: "/assets/oe2.webp",
    mainProducts: "Paints, Luxury Paints",
    altText: "Om Enterprises - Paint",
    years: "1 YRS",
    location: "Mumbai, Maharashtra, India",
    tooltipText: "Om Enterprises, Mumbai",
    rating: "4.0",
    ratingPercent: "80%",
    ratingsCount: "30",
    responseRate: "85%",
    path: "/Om-Enterprises-Painting-Service",
  },
  {
    name: "Ashok",
    email: "abc@gmail.com",
    password: "ashok@123",
    mobileNumber: "9256949191",
    companyName: "RAJYOG PAINTS PVT.LTD.",
    productOrService: "Paint Manufacturer",
    imgSrc: "/assets/paint1.jpeg", // Provide the correct image path
    altText: "Paint Manufacturer - RAJYOG PAINTS PVT.LTD.",
    mainProducts: "Emulsion Paints, Oil-Based Paints, Primers",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "789 Paint Street, Art Park, Delhi, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "150",
    responseRate: "92%",
  },
  {
    _id: "satinder-singh-pune",
    name: "Satinder Singh",
    email: "SatinderSingh@gmail.com",
    password: "12345678",
    mobileNumber: "9619274784",
    companyName: "Satinder Singh",
    statename: "Maharashtra",
    cityname: "Pune",
    productOrService: "Holi Colors",
    imgSrc: "/assets/holi-colour.jpg",
    mainProducts: "Holi Colors",
    altText: "Satinder Singh - Holi Colors",
    years: "1 YRS",
    location: "Pune, Maharashtra, India",
    tooltipText: "Satinder Singh - Holi Colors Manufacturer",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "230",
    responseRate: "91%",
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const Paints = () => {
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
                  <Link to="#">Emulsion Paints</Link>
                </li>
                <li>
                  <Link to="#">Oil-Based Paints</Link>
                </li>
                <li>
                  <Link to="#">Primers</Link>
                </li>
                <li>
                  <Link to="#">Interior Paints</Link>
                </li>
                <li>
                  <Link to="#">Exterior Paints</Link>
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
                  <Link to="#">Karnataka</Link>
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
                      src="/assets/paint2.jpeg"
                      width={55}
                      height={55}
                      alt="Emulsion Paints"
                    />
                  </figure>
                  <p className="title">Emulsion Paints</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/paint3.jpeg"
                      width={55}
                      height={55}
                      alt="Oil-Based Paints"
                    />
                  </figure>
                  <p className="title">Oil-Based Paints</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/paint4.jpeg"
                      width={55}
                      height={55}
                      alt="Primers"
                    />
                  </figure>
                  <p className="title">Primers</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/paint5.jpeg"
                      width={55}
                      height={55}
                      alt="Interior Paints"
                    />
                  </figure>
                  <p className="title">Interior Paints</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/paint6.jpeg"
                      width={55}
                      height={55}
                      alt="Exterior Paints"
                    />
                  </figure>
                  <p className="title">Exterior Paints</p>
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

export default Paints;
