import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    name: "Mrs. Sachi Goyal",
    email: "candleamoda@gmail.com",
    password: "Mrs. Sachi Goyal",
    mobileNumber: "9319775090",
    companyName: "amodacandles",
    productOrService: "Candles",
    imgSrc: "/assets/candles1.jpeg", // Provide the correct image path
    altText: "Candles - Amoda Candles",
    mainProducts: "Decorative Candles, Scented Candles, Floating Candles",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "123 Candle Street, Delhi, India",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "120",
    responseRate: "90%",
  },
  {
    name: "Virani",
    email: "Viraniradiant@gmail.com",
    mobileNumber: "9601987387",
    companyName: "Virani Radiant",
    productOrService: "LED Candles",
    imgSrc: "/assets/candles11.jpeg", // Provide the correct image path
    mainProducts: "LED Candles, Decorative Lighting, Battery-Operated Lights",
    altText: "LED Candles - Virani Radiant",
    years: "3 YRS",
    location: "Ahmedabad, India",
    tooltipText: "Location details not provided",
    rating: "76%",
    ratingPercent: "81%",
    ratingsCount: "42",
    responseRate: "77%",
  },

  {
    name: "Mr. R K Gupta",
    email: "KANACREATIONS@GMAIL.COM",
    password: "Mr. R K Gupta",
    mobileNumber: "9910088965",
    companyName: "KANACREATIONS",
    productOrService: "Candles",
    imgSrc: "/assets/candles3.jpeg", // Provide the correct image path
    mainProducts: "Decorative Candles, Scented Candles, Tea Light Candles",
    altText: "Candles - KANACREATIONS",
    years: "1 YR",
    location: "Delhi, India",
    tooltipText: "Location details not provided",
    rating: "85%",
    ratingPercent: "96%",
    ratingsCount: "140",
    responseRate: "91%",
  },
  {
    name: "Kuldip Patel",
    email: "krp@gmail.com",
    mobileNumber: "8866319180",
    companyName: "KRP",
    productOrService: "Candles",
    imgSrc: "/assets/candles2.jpeg", // Provide the correct image path
    mainProducts: "Scented Candles, Decorative Candles, Aromatherapy Candles",
    altText: "Candles - KRP",
    years: "1 YRS",
    location: "Gujarat, India",
    tooltipText: "Location details not provided",
    rating: "70%",
    ratingPercent: "75%",
    ratingsCount: "28",
    responseRate: "72%",
  },
  {
    name: "Ms. Apeksha Jain",
    email: "DakshCandleArts@gmail.com",
    mobileNumber: "8296262230",
    companyName: "Daksh CandleArts",
    productOrService: "Candles",
    imgSrc: "/assets/candles12.jpeg", // Provide the correct image path
    mainProducts: "Scented Candles, Decorative Candles, Luxury Candles",
    altText: "Candles - Daksh CandleArts",
    years: "4 YRS",
    location: "Delhi, India",
    tooltipText: "Location details not provided",
    rating: "78%",
    ratingPercent: "82%",
    ratingsCount: "50",
    responseRate: "80%",
  },

  {
    name: "Mr. Parvinder Singh",
    email: "Positiveangle14@gmail.com",
    password: "Mr. Parvinder Singh",
    mobileNumber: "9810488785",
    companyName: "POSITIVE ANGLE",
    productOrService: "Candles",
    imgSrc: "/assets/candles2.jpeg", // Provide the correct image path
    mainProducts: "Decorative Candles, Aromatic Candles, Pillar Candles",
    altText: "Candles - POSITIVE ANGLE",
    years: "1 YR",
    location: "Delhi, India",
    tooltipText: "Location details not provided",
    rating: "84%",
    ratingPercent: "95%",
    ratingsCount: "130",
    responseRate: "90%",
  },
  {
    name: "Ms. Namrata",
    email: "Singhnamrata2716@gmail.com",
    mobileNumber: "7065928082",
    companyName: "Hand Crafted Chinhaari",
    productOrService: "Candles",
    imgSrc: "/assets/candles7.jpeg", // Provide the correct image path
    mainProducts: "Scented Candles, Decorative Candles, Personalized Candles",
    altText: "Candles Manufacturer - Hand Crafted Chinhaari",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "Location details not provided",
    rating: "80%",
    ratingPercent: "85%",
    ratingsCount: "45",
    responseRate: "87%",
    whatsappConfirmed: true,
  },
  {
    name: "Ms. Namrata",
    email: "Singhnamrata2716@gmail.com",
    mobileNumber: "7065928082",
    companyName: "Hand Crafted Chinhaari",
    productOrService: "Candles",
    imgSrc: "/assets/candles8.jpeg", // Provide the correct image path
    mainProducts: "Scented Candles, Decorative Candles, Personalized Candles",
    altText: "Candles Manufacturer - Hand Crafted Chinhaari",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "Location details not provided",
    rating: "80%",
    ratingPercent: "85%",
    ratingsCount: "45",
    responseRate: "87%",
  },
  {
    name: "Ms. Kanika Gupta",
    email: "careworth@gmail.com",
    mobileNumber: "9903006130",
    companyName: "Care Worth India Pvt. Ltd",
    productOrService: "Candles",
    imgSrc: "/assets/candles9.jpeg", // Provide the correct image path
    mainProducts: "Scented Candles, Decorative Candles, Aromatherapy Candles",
    altText: "Candles Manufacturer - Care Worth India Pvt. Ltd",
    years: "3 YRS",
    location: "Mumbai, India",
    tooltipText: "Location details not provided",
    rating: "82%",
    ratingPercent: "88%",
    ratingsCount: "60",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    name: "Mr. Purohit",
    email: "Purohit@gmail.com",
    mobileNumber: "7600229153",
    companyName: "R.B. Tapes Private Limited",
    productOrService: "Birthday Musical Candles",
    imgSrc: "/assets/candles10.jpeg", // Provide the correct image path
    mainProducts: "Musical Candles, Birthday Accessories, Party Supplies",
    altText: "Birthday Musical Candles - R.B. Tapes Private Limited",
    years: "2 YRS",
    location: "Surat, India",
    tooltipText: "Location details not provided",
    rating: "72%",
    ratingPercent: "77%",
    ratingsCount: "30",
    responseRate: "75%",
  },
  {
    name: "Ms. Kanika Gupta",
    email: "careworth@gmail.com",
    mobileNumber: "9903006130",
    companyName: "Care Worth India Pvt. Ltd",
    productOrService: "Candles",
    imgSrc: "/assets/candles2.jpeg", // Provide the correct image path
    mainProducts: "Scented Candles, Decorative Candles, Aromatherapy Candles",
    altText: "Candles Manufacturer - Care Worth India Pvt. Ltd",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "Location details not provided",
    rating: "82%",
    ratingPercent: "88%",
    ratingsCount: "60",
    responseRate: "85%",
  },
  {
    _id: "k6789012345abcd6789",
    name: "Saksham",
    email: "SAKSHAM123@GMAIL.COM",
    password: "SAKSHAM123",
    mobileNumber: "9773789091",
    companyName: "DSK Decor",
    productOrService: "Candle",
    imgSrc: "/assets/candles10.jpeg",
    mainProducts: "Scented Candles, Decorative Candles, Soy Candles",
    altText: "DSK Decor - Candle Collection",
    years: "1 YRS",
    location: "India",
    tooltipText: "DSK Decor, India",
    rating: "4.4",
    ratingPercent: "88%",
    ratingsCount: "40",
    responseRate: "82%",
    whatsappConfirmed: true,
  },
  {
    _id: "k7890123456efgh7890",
    name: "Dey",
    email: "DEY123@GMAIL.COM",
    password: "DEY12345",
    mobileNumber: "9830363006",
    companyName: "Dey's Product",
    productOrService: "Candle",
    imgSrc: "/assets/candles2.jpeg",
    mainProducts: "Scented Candles, Aromatherapy Candles, Decorative Candles",
    altText: "Dey's Product - Candle Collection",
    years: "1 YRS",
    location: "India",
    tooltipText: "Dey's Product, India",
    rating: "4.3",
    ratingPercent: "86%",
    ratingsCount: "35",
    responseRate: "78%",
    whatsappConfirmed: true,
  },
  {
    _id: "k3456789012yzab7890",
    name: "Sagar",
    email: "SAGAR123@GMAIL.COM",
    password: "SAGAR123",
    mobileNumber: "9874621322",
    companyName: "Sen Candle Company",
    productOrService: "Candle",
    imgSrc: "/assets/candles3.jpeg",
    mainProducts: "Scented Candles, Decorative Candles, Wax Candles",
    altText: "Sen Candle Company - Candle Collection",
    years: "1 YRS",
    location: "India",
    tooltipText: "Sen Candle Company, India",
    rating: "4.4",
    ratingPercent: "88%",
    ratingsCount: "36",
    responseRate: "80%",
    whatsappConfirmed: true,
  },
  {
    name: "Rayappan",
    email: "9865535413@gmail.com",
    password: "9865535413",
    mobileNumber: "9865535413",
    companyName: "Rayappan Treader",
    productOrService: "Candle",
    imgSrc: "/assets/candle11.jpg",
    mainProducts: "Scented Candles, Decorative Candles, LED Candles",
    altText: "Rayappan Treader - Candle Products",
    years: "1 YRS",
    location: "Cuddalore, Tamil Nadu, India",
    tooltipText: "Rayappan Treader, Cuddalore",
    rating: "4.2",
    ratingPercent: "84%",
    ratingsCount: "75",
    responseRate: "87%",
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const CandleDealers = () => {
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
                  <Link to="#">Decorative Candles</Link>
                </li>
                <li>
                  <Link to="#">Scented Candles</Link>
                </li>
                <li>
                  <Link to="#">Floating Candles</Link>
                </li>
                <li>
                  <Link to="#">Tea Light Candles</Link>
                </li>
                <li>
                  <Link to="#">Pillar Candles</Link>
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
                  <Link to="#">Uttar Pradesh</Link>
                </li>
                <li>
                  <Link to="#">Gujarat</Link>
                </li>
                <li>
                  <Link to="#">Rajasthan</Link>
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
                      src="/assets/candles2.jpeg"
                      width={55}
                      height={55}
                      alt="Decorative Candles"
                    />
                  </figure>
                  <p className="title">Decorative Candles</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/candles3.jpeg"
                      width={55}
                      height={55}
                      alt="Scented Candles"
                    />
                  </figure>
                  <p className="title">Scented Candles</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/candles4.jpeg"
                      width={55}
                      height={55}
                      alt="Floating Candles"
                    />
                  </figure>
                  <p className="title">Floating Candles</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/candles5.jpeg"
                      width={55}
                      height={55}
                      alt="Tea Light Candles"
                    />
                  </figure>
                  <p className="title">Tea Light Candles</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/candles6.jpeg"
                      width={55}
                      height={55}
                      alt="Pillar Candles"
                    />
                  </figure>
                  <p className="title">Pillar Candles</p>
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

export default CandleDealers;
