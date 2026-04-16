import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    name: "Ruban Sri",
    email: "gbrostirupur@gmail.com",
    password: "6385555199",
    mobileNumber: "6385555199",
    companyName: "Ruban Export and Import",
    productOrService: "Terracotta",
    imgSrc: "/assets/terracotta1.jpg",
    mainProducts: "Terracotta Pots, Vases, Decorative Items",
    altText: "Ruban Export and Import - Terracotta",
    years: "1 YRS",
    location: "Pondicherry, Puducherry, India",
    tooltipText: "Ruban Export and Import, Pondicherry",
    rating: "4.3",
    ratingPercent: "86%",
    ratingsCount: "95",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    name: "Ruban Sri",
    email: "6385555199@gmail.com",
    password: "6385555199",
    mobileNumber: "6385555199",
    companyName: "Ruban Export and Import",
    productOrService: "Terracotta",
    imgSrc: "/assets/terracotta2.jpg",
    mainProducts: "Terracotta Pots, Vases, Decorative Items",
    altText: "Ruban Export and Import - Terracotta",
    years: "1 YRS",
    location: "Pondicherry, Puducherry, India",
    tooltipText: "Ruban Export and Import, Pondicherry",
    rating: "4.3",
    ratingPercent: "86%",
    ratingsCount: "95",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "akash-kumar-uttar-pradesh-pottery",
    name: "Mr. Akash Kumar",
    email: "Akkhi6398@gmail.com",
    password: "7217591248",
    mobileNumber: "7217591248",
    companyName: "POTTERY WALE",
    statename: "Uttar Pradesh",
    cityname: "Bulandshahr",
    productOrService:
      "Terracotta, Clay Frypans, Clay Water Bottles, Clay Tea Cups, Clay",
    imgSrc: "/assets/terracotta3.jpg",
    mainProducts: "Terracotta, Clay Frypans, Clay Water Bottles, Clay Tea Cups",
    altText: "POTTERY WALE - Handmade Clay Products",
    years: "1 YRS",
    location: "Bulandshahr, Uttar Pradesh",
    tooltipText: "POTTERY WALE - Traditional Terracotta and Clay Products",
    rating: "4.2",
    ratingPercent: "85%",
    ratingsCount: "150",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    _id: "rajesh-sivadasan-kerala-durocap-roofing",
    name: "Mr. Rajesh Sivadasan",
    email: "durocaproofings@gmail.com",
    password: "8593852225",
    mobileNumber: "8593852225",
    companyName: "DUROCAP ROOFING INDIA PVT. LTD",
    statename: "Kerala",
    cityname: "Kollam",
    productOrService: "Terracotta Clay Jali",
    imgSrc: "/assets/terracota8.jpg",
    mainProducts: "Terracotta Clay Jali",
    altText: "DUROCAP ROOFING - Terracotta Clay Jali",
    years: "1 YRS",
    location: "Kollam, Kerala",
    tooltipText: "DUROCAP ROOFING - Terracotta Clay Products for Roofing",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "200",
    responseRate: "95%",
    whatsappConfirmed: true,
  },
  {
    _id: "naveen-jaiswal-uttar-pradesh-km-mercantile",
    name: "Mr. Naveen Jaiswal",
    email: "kmmercantile@gmail.com",
    password: "9415211275",
    mobileNumber: "9415211275",
    companyName: "KM MERCANTILE PVT. LTD.",
    statename: "Uttar Pradesh",
    cityname: "Gorakhpur",
    productOrService:
      "Terracotta Kitchen Products, Terracotta Home Decor Products",
    imgSrc: "/assets/terracota9.jpg",
    mainProducts: "Terracotta Kitchen and Home Decor Products",
    altText: "KM MERCANTILE - Terracotta Kitchen and Home Decor",
    years: "1 YRS",
    location: "Gorakhpur, Uttar Pradesh",
    tooltipText: "KM MERCANTILE - Terracotta Kitchen and Home Decor Products",
    rating: "4.2",
    ratingPercent: "85%",
    ratingsCount: "150",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    _id: "suraj-baba-terracotta-uttar-pradesh",
    name: "Mr. Suraj",
    email: "amitk8401@gmail.com",
    password: "7300910419",
    mobileNumber: "7300910419",
    companyName: "BABA TERRACOTTA",
    statename: "Uttar Pradesh",
    cityname: "Bulandshahr",
    productOrService:
      "Terracotta, Clay Kullad, Clay Trays, Other Clay Products",
    imgSrc: "/assets/kullad.jpg",
    mainProducts: "Terracotta Kullad, Clay Trays, Other Clay Products",
    altText: "BABA TERRACOTTA - Clay Products",
    years: "1 YRS",
    location: "Bulandshahr, Uttar Pradesh",
    tooltipText: "BABA TERRACOTTA - Terracotta and Clay Products",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "200",
    responseRate: "95%",
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const TerracotaComponent = () => {
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
                  <Link to="#">Apples</Link>
                </li>
                <li>
                  <Link to="#">Oranges</Link>
                </li>
                <li>
                  <Link to="#">Bananas</Link>
                </li>
                <li>
                  <Link to="#">Grapes</Link>
                </li>
                <li>
                  <Link to="#">Mangoes</Link>
                </li>
                <li>
                  <Link to="#">Berries</Link>
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
                      src="/assets/terracotta1.jpg"
                      width={55}
                      height={55}
                      alt="Terracotta"
                    />
                  </figure>
                  <p className="title">Terracotta</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/pots.jpg"
                      width={55}
                      height={55}
                      alt="Pots"
                    />
                  </figure>
                  <p className="title">Pots</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/soil.jpg"
                      width={55}
                      height={55}
                      alt="Plant Soil"
                    />
                  </figure>
                  <p className="title">Plant Soil</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/composet.jpg"
                      width={55}
                      height={55}
                      alt="Compost Soil"
                    />
                  </figure>
                  <p className="title">Compost Soil</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/garden-soil.jpg"
                      width={55}
                      height={55}
                      alt="Garden Soil"
                    />
                  </figure>
                  <p className="title">Garden Soil</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/peat.jpg"
                      width={55}
                      height={55}
                      alt="Peat Moss"
                    />
                  </figure>
                  <p className="title">Peat Moss</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/soil.jpg"
                      width={55}
                      height={55}
                      alt="Sand Soil"
                    />
                  </figure>
                  <p className="title">Sand Soil</p>
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

export default TerracotaComponent;
