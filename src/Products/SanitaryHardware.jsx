import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    name: "Mahir Sanitation Company",
    email: "",
    mobileNumber: "",
    companyName: "Mahir Sanitation Company",
    productOrService:
      "Bathroom Toilet Paper Holder, Threads, Bathroom Grab Bar",
    imgSrc: "/assets/mahir2.webp",
    mainProducts: "Bathroom Accessories",
    altText: "Mahir Sanitation Company - Bathroom Accessories",
    years: "1 YRS",
    location: "Gali Number 3, Modi Nagar, Ghaziabad",
    tooltipText: "Mahir Sanitation Company, Ghaziabad",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "30",
    responseRate: "90%",
    path: "/mahir-sanitation",
  },

  {
    name: "Akash",
    email: "hariomindustriesindia2020@gmail.com",
    mobileNumber: "8487958995",
    companyName: "HARI OM INDUSTRIES",
    productOrService: "Sanitary Hardware",
    imgSrc: "/assets/baths.jpg", // Provide the correct image path
    mainProducts: "Bathroom fittings, Faucets, Shower heads, etc.",
    altText: "Sanitary Hardware - HARI OM INDUSTRIES",
    years: "1 YRS",
    location: "Jaipur, Rajasthan, India",
    tooltipText: "789, Mansarovar, Jaipur - 302020, Rajasthan, India",
    rating: "4.8",
    ratingPercent: "97%",
    ratingsCount: "180",
    responseRate: "98%",
  },
  {
    _id: "s901234567abcdef890123", // Random unique ID
    name: "Ashish Patel",
    email: "bhagyalaxmiproducts@gmail.com",
    mobileNumber: "9898889083",
    companyName: "Bhagyalaxmi Products",
    productOrService: "Sanitary Ware",
    imgSrc: "/assets/sani.jpeg", // Example image path
    mainProducts: "Sanitary Ware, Toilets, Wash Basins",
    altText: "Sanitary Ware - Bhagyalaxmi Products",
    years: "1 YRS",
    location: "Ahmedabad, India",
    tooltipText: "Shop 34, Sanitary Supplies Market, Ahmedabad, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "52",
    responseRate: "92%",
    whatsappConfirmed: true,
  },
  {
    _id: "s345678901abcdef234579", // Random unique ID
    name: "Deepak",
    email: "shyamsanitation09@gmail.com",
    password: "DEEPAKDEEPAK",
    mobileNumber: "8800865486",
    companyName: "Satyam Sanitation",
    productOrService: "Sanitaryware",
    imgSrc: "/assets/sanitaryware1.jpeg", // Example image path
    mainProducts: "Sanitaryware, Bathroom Fixtures",
    altText: "Sanitaryware - Satyam Sanitation",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "Shop 22, Sanitation Market, Delhi, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "65",
    responseRate: "87%",
    whatsappConfirmed: true,
  },
  {
    _id: "s345678901abcdef234582", // Random unique ID
    name: "Aamir Khan",
    email: "aamirkhan@gmail.com",
    password: "Aamir Khan",
    mobileNumber: "8860154052",
    companyName: "Mahir Sanitation",
    productOrService: "Sanitary Ware",
    imgSrc: "/assets/sanitaryware2.jpeg", // Example image path
    mainProducts: "Sanitary Ware, Bathroom Fixtures",
    altText: "Sanitary Ware - Mahir Sanitation",
    years: "1 YRS",
    location: "Kolkata, India",
    tooltipText: "Shop 11, Sanitation Hub, Kolkata, India",
    rating: "4.3",
    ratingPercent: "86%",
    ratingsCount: "42",
    responseRate: "80%",
    whatsappConfirmed: true,
  },
  {
    _id: "s345678901abcdef234583", // Random unique ID
    name: "Gagan",
    email: "prakashhardware@gmail.com",
    password: "GAGANGAGAN",
    mobileNumber: "9123422679",
    companyName: "Prakash Hardware",
    productOrService: "Sanitary Hardware",
    imgSrc: "/assets/sanitary3.jpeg", // Example image path
    mainProducts: "Sanitary Hardware, Plumbing Accessories",
    altText: "Sanitary Hardware - Prakash Hardware",
    years: "1 YRS",
    location: "Chandigarh, India",
    tooltipText: "Building 8, Hardware Market, Chandigarh, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "78",
    responseRate: "89%",
    whatsappConfirmed: true,
  },
  {
    _id: "s345678901abcdef234589", // Random unique ID
    name: "Abishek Jaiswal",
    email: "saintexindustries24@gmail.com",
    password: "ABISHEK JAISWAL",
    mobileNumber: "9870582850",
    companyName: "Saintex Kitchen Sink",
    productOrService: "Kitchen Sink",
    imgSrc: "/assets/sink.jpeg", // Example image path
    mainProducts: "Kitchen Sinks, Stainless Steel Sinks",
    altText: "Kitchen Sink - Saintex Kitchen Sink",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "Factory 12, Industrial Area, Delhi, India",
    rating: "4.7",
    ratingPercent: "93%",
    ratingsCount: "65",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
  {
    _id: "k8901234567l890124",
    name: "Sahil",
    email: "info@accuratebrassind.com",
    password: "SahilSahil",
    mobileNumber: "8980826837",
    companyName: "ACCURATE BRASS INDUSTRIES",
    productOrService: "Sanitary Brass Components",
    imgSrc: "/assets/brass10.jpeg",
    mainProducts: "Brass Taps, Brass Valves, Brass Fittings",
    altText: "Sanitary Brass Components - ACCURATE BRASS INDUSTRIES",
    years: "1 YRS",
    location: "Jamnagar, Gujarat, India",
    tooltipText:
      "Accurate Brass Industries, GIDC Phase 2, Jamnagar, Gujarat, India",
    rating: "4.7",
    ratingPercent: "93%",
    ratingsCount: "210",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    _id: "ekta-plastic-ahemdabad",
    name: "govindbhai",
    email: "govindbhai@gmail.com",
    password: "ekta plastic",
    mobileNumber: "9426829430",
    companyName: "Ekta Plastic",
    productOrService: "Sink Coupling, Taps",
    imgSrc: "/assets/sinkcoupling1.jpg",
    mainProducts: "Sink Coupling, Taps",
    altText: "Ekta Plastic - Sink Coupling, Taps",
    years: "1 YRS",
    location: "Ahemdabad, Gujrat, India",
    tooltipText: "Ekta Plastic, Sink Coupling, Taps, Ahemdabad",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "25",
    responseRate: "91%",
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const SanitaryHardware = () => {
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
                  <Link to="#">Bathroom Fittings</Link>
                </li>
                <li>
                  <Link to="#">Faucets</Link>
                </li>
                <li>
                  <Link to="#">Shower Heads</Link>
                </li>
                <li>
                  <Link to="#">Toilets</Link>
                </li>
                <li>
                  <Link to="#">Sinks</Link>
                </li>
                <li>
                  <Link to="#">Bathtubs</Link>
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
                  <Link to="#">Gujarat</Link>
                </li>
                <li>
                  <Link to="#">Maharashtra</Link>
                </li>
                <li>
                  <Link to="#">Delhi</Link>
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
                      src="/assets/bath1.jpg"
                      width={55}
                      height={55}
                      alt="Bathroom Fittings"
                    />
                  </figure>
                  <p className="title">Bathroom Fittings</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/bath2.jpg"
                      width={55}
                      height={55}
                      alt="Faucets"
                    />
                  </figure>
                  <p className="title">Faucets</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/bath3.jpg"
                      width={55}
                      height={55}
                      alt="Shower Heads"
                    />
                  </figure>
                  <p className="title">Shower Heads</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/bath4.jpg"
                      width={55}
                      height={55}
                      alt="Toilets"
                    />
                  </figure>
                  <p className="title">Toilets</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/bath5.jpg"
                      width={55}
                      height={55}
                      alt="Sinks"
                    />
                  </figure>
                  <p className="title">Sinks</p>
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

export default SanitaryHardware;
