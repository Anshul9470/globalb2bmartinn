import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const riceDealersData = [
  {
    _id: "portovo-exim-llp-kolkata",
    name: "Aranya Mandal",
    email: "AranyaMandal@gmail.com",
    password: "123456789",
    mobileNumber: "9937477878",
    companyName: "PORTOVO EXIM LLP",
    statename: "West Bengal",
    cityname: "Kolkata",
    productOrService: "Rice",
    imgSrc: "/assets/rice8.jpg",
    mainProducts: "Rice",
    altText: "PORTOVO EXIM LLP - Kolkata, West Bengal",
    years: "1 YRS",
    location: "Kolkata, West Bengal",
    tooltipText: "PORTOVO EXIM LLP, Kolkata",
    rating: "4.2",
    ratingPercent: "84%",
    ratingsCount: "80",
    responseRate: "91%",
    whatsappConfirmed: true,
  },
  {
    _id: "patel-trading-company-indore",
    name: "Sachin Kumar Patel",
    email: "SachinKumarPatel@gmail.com",
    password: "123456789",
    mobileNumber: "7409081681",
    companyName: "PATEL TRADING COMPANY",
    statename: "Madhya Pradesh",
    cityname: "Indore",
    productOrService: "Rice",
    imgSrc: "/assets/patel-rice1.jpg",
    mainProducts: "Rice",
    altText: "PATEL TRADING COMPANY - Indore, Madhya Pradesh",
    years: "1 YRS",
    location: "Indore, Madhya Pradesh",
    tooltipText: "PATEL TRADING COMPANY, Indore",
    rating: "4.1",
    ratingPercent: "82%",
    ratingsCount: "67",
    responseRate: "89%",
    whatsappConfirmed: true,
  },
  {
    _id: "indian-store-noida",
    name: "Vicky",
    email: "INDIANSTORE@gmail.com",
    password: "123456789",
    mobileNumber: "8432712160",
    companyName: "INDIAN STORE",
    statename: "Delhi",
    cityname: "Noida",
    productOrService: "Rice",
    imgSrc: "/assets/rice9.jpg",
    mainProducts: "Rice",
    altText: "INDIAN STORE - Noida",
    years: "1 YRS",
    location: "Noida, Delhi",
    tooltipText: "INDIAN STORE, Noida",
    rating: "4.3",
    ratingPercent: "86%",
    ratingsCount: "75",
    responseRate: "91%",
    whatsappConfirmed: true,
  },
  {
    _id: "sila-con-mix-kerala",
    name: "Rajeev",
    email: "SilaConMix@gmail.com",
    password: "123456789",
    mobileNumber: "8589898222",
    companyName: "Sila Con Mix",
    statename: "Kerala",
    cityname: "Cherukunnam",
    productOrService: "Rice",
    imgSrc: "/assets/sila-rice.jpg",
    mainProducts: "Rice",
    altText: "Sila Con Mix - Kerala",
    years: "1 YRS",
    location: "Cherukunnam, Kerala",
    tooltipText: "Sila Con Mix, Kerala",
    rating: "4.1",
    ratingPercent: "82%",
    ratingsCount: "65",
    responseRate: "90%",
  },
  {
    name: "Salim Mohammed",
    email: "abc@gmail.com",
    password: "salim123",
    mobileNumber: "9358448864",
    companyName: "Rice Supplier",
    productOrService: "Rice",
    imgSrc: "/assets/rice20.jpg",
    mainProducts: "Rice, Rice Grains, Organic Rice",
    altText: "Rice Supplier - Premium Rice Products",
    years: "1 YRS",
    location: "Kuchaman City, Rajasthan, India",
    tooltipText: "Rice Supplier, Kuchaman City",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "120",
    responseRate: "90%",
    whatsappConfirmed: true,
  },

  {
    name: "Geetanjali",
    email: "Geetanjali@gmail.com",
    mobileNumber: "7032855846",
    companyName: "Modi Care",
    productOrService: "Rice Dealer",
    imgSrc: "/assets/rice1.jpeg", // Provide the correct image path
    altText: "Rice Dealer - Modi Care",
    mainProducts: "Basmati Rice, Sona Masoori Rice, Brown Rice, etc.",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "789, Chandni Chowk, Delhi - 110006, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "180",
    responseRate: "96%",
  },
  {
    _id: "j1234567890k012347",
    name: "Ashok Gangadhar Shinde",
    email: "ashok765@gmail.com",
    password: "ashok@123",
    mobileNumber: "9049860144",
    companyName: "Kaveri Gul V Sheti Utpadane",
    productOrService: "Rice & Agro Product Exporter",
    imgSrc: "/assets/rice3.jpeg",
    mainProducts: "Basmati Rice, Organic Rice, Agro Products",
    altText: "Rice & Agro Product Exporter - Kaveri Gul V Sheti Utpadane",
    years: "1 YRS",
    location: "Nashik, Maharashtra, India",
    tooltipText: "Sector 5, Agricultural Zone, Nashik, Maharashtra, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "60",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    _id: "priyanshi-group-of-companies-gujarat",
    name: "Ranjan",
    email: "ranjan@gmail.com",
    password: "12345678",
    mobileNumber: "7667359829",
    companyName: "Priyanshi Group of Companies",
    productOrService: "Rice",
    imgSrc: "/assets/rice7.jpg",
    mainProducts: "Rice",
    altText: "Priyanshi Group of Companies - Rice",
    years: "1 YRS",
    location: "Gujarat, India",
    tooltipText: "Priyanshi Group of Companies, Rice, Gujarat",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "20",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    name: "Manish Goyal",
    email: "Manishgoyal@gmail.com",
    password: "12345678",
    mobileNumber: "9825800004",
    companyName: "Manish Goyal",
    productOrService: "Rice",
    imgSrc: "/assets/rice.jpeg",
    mainProducts: "Basmati Rice, Non-Basmati Rice, Organic Rice",
    altText: "Manish Goyal - Rice Supplier",
    years: "1 YRS",
    location: "Mundra, Gujarat, India",
    tooltipText: "Manish Goyal, Mundra",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "120",
    responseRate: "88%",
    whatsappConfirmed: true,
  },

  // Additional rice dealers can be added here.
];

const RiceDealers = () => {
  return (
    <div className="main-box">
      <aside>
        <div className="flt-box-wrap">
          <div className="flt-box mb-0 flt-head">Filters By</div>
          <div className="flt-box bdrt-0">
            <p className="flt-title">Rice Varieties</p>
            <div className="flt-content">
              <ul className="flt-list cust-scroll">
                <li>
                  <Link to="#">Basmati Rice</Link>
                </li>
                <li>
                  <Link to="#">Sona Masoori Rice</Link>
                </li>
                <li>
                  <Link to="#">Jasmine Rice</Link>
                </li>
                <li>
                  <Link to="#">Brown Rice</Link>
                </li>
                <li>
                  <Link to="#">Parboiled Rice</Link>
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
                  <Link to="#">Delhi</Link>
                </li>
                <li>
                  <Link to="#">Mumbai</Link>
                </li>
                <li>
                  <Link to="#">Chennai</Link>
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
          <p className="sect-title">Explore Rice Varieties</p>
          <div className="horprd expcatg" id="expcatg">
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/rice2.jpeg"
                      width={55}
                      height={55}
                      alt="Basmati Rice"
                    />
                  </figure>
                  <p className="title">Basmati Rice</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/rice3.jpeg"
                      width={55}
                      height={55}
                      alt="Sona Masoori Rice"
                    />
                  </figure>
                  <p className="title">Sona Masoori Rice</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/rice4.jpeg"
                      width={55}
                      height={55}
                      alt="Jasmine Rice"
                    />
                  </figure>
                  <p className="title">Jasmine Rice</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/rice5.jpeg"
                      width={55}
                      height={55}
                      alt="Brown Rice"
                    />
                  </figure>
                  <p className="title">Brown Rice</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/rice1.jpeg"
                      width={55}
                      height={55}
                      alt="Parboiled Rice"
                    />
                  </figure>
                  <p className="title">Parboiled Rice</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <ul className="classfied-wrap">
          {riceDealersData.map((item, index) => (
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

export default RiceDealers;
