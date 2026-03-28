import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const undergarmentData = [
  {
    name: "Mr. Mohit",
    email: "MOHIT@GMAIL.COM",
    password: "mohit@123",
    mobileNumber: "7447403552",
    companyName: "Swan Textiles",
    productOrService: "Hosiery Garments",
    imgSrc: "/assets/undergr.jpg", // Provide the correct image path
    altText: "Hosiery Garments - Swan Textiles",
    mainProducts: "Underwear, Socks, Tights",
    years: "1 YRS",
    location: "Nagpur, India",
    tooltipText: "789 Hosiery Lane, Industrial Park, Nagpur, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "85",
    responseRate: "88%",
  },
  {
    _id: "f3456789012def4567",
    name: "Manish",
    email: "abc@gmail.com",
    password: "Manish@123",
    mobileNumber: "9422550535",
    companyName: "Manish Trading Co.",
    productOrService: "Ladies Undergarments",
    imgSrc: "/assets/under1.jpeg", // Placeholder for image path
    mainProducts: "Bras, Panties, Lingerie",
    altText: "Manish Trading Co. - Ladies Undergarments",
    years: "1 YRS", // Placeholder for years of experience
    location: "Mumbai, Maharashtra, India", // Placeholder for location
    tooltipText: "Manish Trading Co., Mumbai",
    rating: "4.6", // Placeholder for rating
    ratingPercent: "92%", // Placeholder for rating percentage
    ratingsCount: "130", // Placeholder for ratings count
    responseRate: "87%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "ladies-readymade-garments-nagercoil",
    name: "Arthar",
    email: "9500076811@gmail.com",
    password: "9500076811",
    mobileNumber: "9500076811",
    companyName: "Ladies Readymade Garments",
    statename: "Tamil Nadu",
    cityname: "Nagercoil",
    productOrService: "Ladies Readymade Garments",
    imgSrc: "/assets/ladies-undergarment.jpg",
    mainProducts: "Designer Dresses, Kurtis, Tops, Ethnic Wear",
    altText: "Ladies Readymade Garments - Trendy and Quality Women's Clothing",
    years: "1 YRS",
    location: "Nagercoil, Tamil Nadu, India",
    tooltipText:
      "Ladies Readymade Garments - Fashionable & Affordable Clothing",
    rating: "4.7",
    ratingPercent: "93%",
    ratingsCount: "220",
    responseRate: "88%",
    whatsappConfirmed: true,
  },

  // Additional data can be added if needed.
];

const Undergarments = () => {
  return (
    <div className="main-box">
      <aside>
        <div className="flt-box-wrap">
          <div className="flt-box mb-0 flt-head">Filters By</div>
          <div className="flt-box bdrt-0">
            <p className="flt-title">Hosiery Categories</p>
            <div className="flt-content">
              <ul className="flt-list cust-scroll">
                <li>
                  <Link to="#">Underwear</Link>
                </li>
                <li>
                  <Link to="#">Socks</Link>
                </li>
                <li>
                  <Link to="#">Tights</Link>
                </li>
                <li>
                  <Link to="#">Thermal Wear</Link>
                </li>
                <li>
                  <Link to="#">Sleepwear</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flt-box">
            <p className="flt-title">By Location</p>
            <div className="flt-content">
              <div className="flt-search">
                <input
                  type="text"
                  name="location_id"
                  placeholder="Search Location"
                  id="location-search-input"
                />
              </div>
              <ul className="flt-list cust-scroll" id="location-lists">
                <li>
                  <Link to="#">All India</Link>
                </li>
                <li>
                  <Link to="#">Nagpur</Link>
                </li>
                <li>
                  <Link to="#">Mumbai</Link>
                </li>
                <li>
                  <Link to="#">Delhi</Link>
                </li>
                <li>
                  <Link to="#">Bengaluru</Link>
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
                      src="/assets/under2.jpeg"
                      width={55}
                      height={55}
                      alt="Underwear"
                    />
                  </figure>
                  <p className="title">Underwear</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/socks.jpeg"
                      width={55}
                      height={55}
                      alt="Socks"
                    />
                  </figure>
                  <p className="title">Socks</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/under3.jpeg"
                      width={55}
                      height={55}
                      alt="Tights"
                    />
                  </figure>
                  <p className="title">Tights</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/thermal.jpeg"
                      width={55}
                      height={55}
                      alt="Thermal Wear"
                    />
                  </figure>
                  <p className="title">Thermal Wear</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/sleep1.jpeg"
                      width={55}
                      height={55}
                      alt="Sleepwear"
                    />
                  </figure>
                  <p className="title">Sleepwear</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <ul className="classfied-wrap">
          {undergarmentData.map((item, index) => (
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

export default Undergarments;
