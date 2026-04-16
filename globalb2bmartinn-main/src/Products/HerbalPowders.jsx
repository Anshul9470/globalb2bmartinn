import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    _id: "9012qrst5678uvwx",
    name: "Anil Aswale",
    email: "anilaswale2531@gmail.com",
    mobileNumber: "9156562542",
    companyName: "AR M P L",
    productOrService: "Pudena Powder, Moringa Powder",
    imgSrc: "/assets/herbal2.jpeg", // Update with the actual image path
    mainProducts: "Pudena Powder, Moringa Powder, Herbal Powders",
    altText: "Pudena Powder - AR M P L",
    years: "1 YRS",
    location: "Nashik, Maharashtra, India",
    tooltipText: "Nashik, Maharashtra, India",
    rating: "4.4",
    ratingPercent: "88%",
    ratingsCount: "72",
    responseRate: "85%",
  },
  {
    _id: "adhvik-singh-jaipur-rajasthan",
    name: "Adhvik Singh",
    email: "venushnhc@gmail.com",
    password: "RYOT9A24kk3211@VH#$",
    mobileNumber: "7877926538",
    companyName: "Venus Herbal and Healthcare",
    statename: "Rajasthan",
    cityname: "Jaipur",
    productOrService:
      "Since 1890, we are working to Promote Health, Beauty & Wellness",
    imgSrc: "/assets/herbal-beauty.jpg",
    mainProducts: "Health, Beauty & Wellness Products",
    altText: "Venus Herbal and Healthcare - Jaipur",
    years: "1 YRS",
    location: "Jaipur, Rajasthan",
    tooltipText: "Venus Herbal and Healthcare, Jaipur",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "320",
    responseRate: "92%",
    whatsappConfirmed: true,
  },
  {
    name: "Koushik Chakraborty",
    email: "monadawellness@gmail.com",
    password: "Koushik Chakraborty",
    mobileNumber: "9007434762",
    companyName: "MONADA WELLNESS PVT LTD",
    productOrService: "Ayurvedic Health, Beauty, and Wellness",
    imgSrc: "/assets/ayurvedic.jpg",
    mainProducts: "Ayurvedic Supplements, Beauty Products, Wellness Kits",
    altText: "MONADA WELLNESS PVT LTD - Ayurvedic Health and Wellness",
    years: "1 YRS",
    location: "Kolkata, West Bengal, India",
    tooltipText: "MONADA WELLNESS PVT LTD, Kolkata",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "150",
    responseRate: "91%",
    whatsappConfirmed: true,
  },
  {
    name: "Amit Lolekar",
    email: "exim@needsync.com",
    password: "Needsync@1234",
    mobileNumber: "9987154568",
    companyName: "Needsync Solutions LLP",
    productOrService: "Medicinal Herbs",
    imgSrc: "/assets/herb1.jpg",
    mainProducts: "Medicinal Herbs, Herbal Extracts, Natural Remedies",
    altText: "Needsync Solutions LLP - Medicinal Herbs",
    years: "1 YRS",
    location: "Mumbai, Maharashtra, India",
    tooltipText: "Needsync Solutions LLP, Mumbai",
    rating: "4.8",
    ratingPercent: "95%",
    ratingsCount: "100",
    responseRate: "92%",
    whatsappConfirmed: true,
  },
  {
    _id: "amir-hussain-kolkata",
    name: "AMIR HUSSAIN",
    email: "AMIRHUSSAIN@gmail.com",
    password: "12345678",
    mobileNumber: "7980717542",
    companyName: "AMIR HUSSAIN",
    statename: "West Bengal",
    cityname: "Kolkata",
    productOrService: "Ayurvedic products",
    imgSrc: "/assets/ayurvedic7.jpg",
    mainProducts: "Ayurvedic Products, Natural Remedies, Herbal Supplements",
    altText: "AMIR HUSSAIN - Supplier of Ayurvedic Products in Kolkata",
    years: "1 YRS",
    location: "Kolkata, West Bengal, India",
    tooltipText: "AMIR HUSSAIN - Expert in Ayurvedic Solutions",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "210",
    responseRate: "97%",
    whatsappConfirmed: true,
  },
];

const HerbalPowderProvider = () => {
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
                  <Link to="#">Pudena Powder</Link>
                </li>
                <li>
                  <Link to="#">Moringa Powder</Link>
                </li>
                <li>
                  <Link to="#">Herbal Powders</Link>
                </li>
                <li>
                  <Link to="#">Tulsi Powder</Link>
                </li>
                <li>
                  <Link to="#">Amla Powder</Link>
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
                  <Link to="#">Karnataka</Link>
                </li>
                <li>
                  <Link to="#">Uttar Pradesh</Link>
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
                      src="/assets/herbal1.jpeg"
                      width={55}
                      height={55}
                      alt="Pudena Powder"
                    />
                  </figure>
                  <p className="title">Pudena Powder</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/herbal2.jpeg"
                      width={55}
                      height={55}
                      alt="Moringa Powder"
                    />
                  </figure>
                  <p className="title">Moringa Powder</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/herbal3.jpeg"
                      width={55}
                      height={55}
                      alt="Tulsi Powder"
                    />
                  </figure>
                  <p className="title">Tulsi Powder</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/herbal4.jpeg"
                      width={55}
                      height={55}
                      alt="Amla Powder"
                    />
                  </figure>
                  <p className="title">Amla Powder</p>
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

export default HerbalPowderProvider;
