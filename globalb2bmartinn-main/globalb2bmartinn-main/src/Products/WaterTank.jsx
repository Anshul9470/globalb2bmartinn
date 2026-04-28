import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    _id: "h1234567890i012347",
    name: "Sunrise Polymers",
    email: "rajarampolymers@gmail.com",
    password: "Sunrise@123",
    mobileNumber: "8310252548",
    alternateNumbers: ["8105567812", "6360429167"],
    companyName: "Sunrise Polymers",
    productOrService: "Water Tanks",
    imgSrc: "/assets/watertank1.jpeg",
    mainProducts:
      "Plastic Water Tanks, Industrial Water Tanks, Custom Water Tanks",
    altText: "Water Tanks - Sunrise Polymers",
    years: "1 YRS",
    location: "Bangalore, Karnataka, India",
    tooltipText: "Sector 12, Industrial Zone, Bangalore, India",
    rating: "4.7",
    ratingPercent: "93%",
    ratingsCount: "55",
    responseRate: "89%",
    path: "/sunrise-tank",
  },

  {
    name: "M/s Shree Jee water Tower Industries.",
    email: "kingpure89@gmail.com",
    mobileNumber: "9810039943",
    companyName: "King Pure",
    productOrService: "SS Water Tank",
    imgSrc: "/assets/tank6.jpeg", // Provide the correct image path
    altText: "SS Water Tank - King Pure",
    mainProducts:
      "Stainless Steel Water Tanks, Industrial Water Tanks, Custom Water Tanks",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "45 Water Tank Street, Industrial Area, Delhi, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "150",
    responseRate: "92%",
  },
  {
    name: "Vishan",
    email: "Vishan123@gmail.com",
    password: "Vishan123",
    mobileNumber: "9377870664",
    companyName: "Ascent Water Purification System",
    productOrService: "Water Purification System",
    imgSrc: "/assets/water1.jpeg", // Provide the correct image path
    altText: "Water Purification System - Ascent Water Purification System",
    mainProducts: "RO Systems, UV Purifiers, Water Softeners",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "123 Water Lane, Industrial Park, Mumbai, India",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "150",
    responseRate: "90%",
  },
  {
    _id: "n678901234567abcdef0123", // Random unique ID
    name: "K. Saraiah",
    email: "Karthikeyawater@gmail.com",
    password: "K.Saraiah", // Including the password as specified
    mobileNumber: "8790336558",
    companyName: "Karthikeya Water",
    productOrService: "Waterproofing Services",
    imgSrc: "/assets/waterproof.jpeg", // Example image path
    mainProducts:
      "Basement Waterproofing, Roof Waterproofing, Wall Waterproofing",
    altText: "Waterproofing Services - Karthikeya Water",
    years: "1 YRS",
    location: "Hyderabad, India",
    tooltipText: "321 Waterproofing Street, Hyderabad, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "65",
    responseRate: "94%",
    whatsappConfirmed: true,
  },
  {
    _id: "s9876543210fedcba098765", // Random unique ID
    name: "Mohd Afzal Imam",
    email: "hydotechhydraulics@gmail.com",
    mobileNumber: "9999695464",
    companyName: "HYDOTECH HYDRAULICS ENTERPRISES",
    productOrService: "Hydraulic Pump Wholesaler",
    imgSrc: "/assets/hydrolic.jpeg", // Example image path
    mainProducts: "Hydraulic Pumps, Valves, Cylinders",
    altText: "Hydraulic Pumps - HYDOTECH HYDRAULICS ENTERPRISES",
    years: "1 YRS",
    location: "Hyderabad, India",
    tooltipText: "Plot No. 5, Industrial Estate, Hyderabad, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "50",
    responseRate: "95%",
    whatsappConfirmed: true,
  },
  {
    _id: "sabcdef1234567890fedcba", // Random unique ID
    name: "SACHIN",
    email: "sales@hydraulicvanepump.com",
    mobileNumber: "9821423821",
    companyName: "S. M. Shah & Company",
    productOrService: "Hydraulic Pump Wholesaler",
    imgSrc: "/assets/hydrolic1.jpeg", // Example image path
    mainProducts: "Hydraulic Pumps, Valves, Accessories",
    altText: "Hydraulic Pumps - S. M. Shah & Company",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "Sector 7, Industrial Area, Mumbai, India",
    rating: "4.3",
    ratingPercent: "86%",
    ratingsCount: "40",
    responseRate: "89%",
    whatsappConfirmed: true,
  },
  {
    _id: "c3498762345d456789",
    name: "Akshata",
    email: "abc@gmail.com",
    password: "aksh@123",
    mobileNumber: "8050273595",
    companyName: "Oswal Hitech Private Ltd",
    productOrService: "Watertank Manufacturer",
    imgSrc: "/assets/watertank2.jpeg",
    mainProducts: "Watertanks, Plastic Containers, Storage Solutions",
    altText: "Watertanks - Oswal Hitech Private Ltd",
    years: "1 YRS",
    location: "Mumbai, Maharashtra, India",
    tooltipText: "Andheri East, Mumbai, Maharashtra, India",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "120",
    responseRate: "92%",
    whatsappConfirmed: true,
  },
  {
    _id: "shreesoft-ahemdabad",
    name: "Manish",
    email: "shreejicom123@gmail.com",
    password: "manishmanish",
    mobileNumber: "9377257857",
    companyName: "Shreesoft",
    productOrService: "Water Tank Cover",
    imgSrc: "/assets/watertank3.jpg",
    mainProducts: "Water Tank Cover",
    altText: "Shreesoft - Water Tank Cover",
    years: "1 YRS",
    location: "Ahemdabad, Gujarat, India",
    tooltipText: "Shreesoft, Water Tank Cover, Ahemdabad",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "27",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
  {
    name: "Dinesh Mali",
    email: "abc@gmail.com",
    password: "dinesh@123",
    mobileNumber: "9715904611",
    companyName: "MAHADEV PIPE COMPANY",
    productOrService: "Watertank Manufacturer",
    imgSrc: "/assets/watertank4.jpg",
    mainProducts: "Water Tanks, Pipes, Plumbing Supplies",
    altText: "MAHADEV PIPE COMPANY - Watertank Manufacturer",
    years: "1 YRS",
    location: "Jodhpur, Rajasthan, India",
    tooltipText: "MAHADEV PIPE COMPANY, Jodhpur",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "95",
    responseRate: "88%",
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const WaterTank = () => {
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
                  <Link to="#">Industrial Water Tanks</Link>
                </li>
                <li>
                  <Link to="#">Custom Water Tanks</Link>
                </li>
                <li>
                  <Link to="#">Stainless Steel Tanks</Link>
                </li>
                <li>
                  <Link to="#">Plastic Water Tanks</Link>
                </li>
                <li>
                  <Link to="#">Fiberglass Water Tanks</Link>
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
                      src="/assets/tank1.jpeg"
                      width={55}
                      height={55}
                      alt="Industrial Water Tanks"
                    />
                  </figure>
                  <p className="title">Industrial Water Tanks</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/tank2.jpeg"
                      width={55}
                      height={55}
                      alt="Custom Water Tanks"
                    />
                  </figure>
                  <p className="title">Custom Water Tanks</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/tank3.jpeg"
                      width={55}
                      height={55}
                      alt="Stainless Steel Tanks"
                    />
                  </figure>
                  <p className="title">Stainless Steel Tanks</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/tank4.jpeg"
                      width={55}
                      height={55}
                      alt="Plastic Water Tanks"
                    />
                  </figure>
                  <p className="title">Plastic Water Tanks</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/tank5.jpeg"
                      width={55}
                      height={55}
                      alt="Fiberglass Water Tanks"
                    />
                  </figure>
                  <p className="title">Fiberglass Water Tanks</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/water1.jpeg"
                      width={55}
                      height={55}
                      alt="RO Systems"
                    />
                  </figure>
                  <p className="title">RO Systems</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/water2.jpeg"
                      width={55}
                      height={55}
                      alt="UV Purifiers"
                    />
                  </figure>
                  <p className="title">UV Purifiers</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/water3.jpeg"
                      width={55}
                      height={55}
                      alt="Water Softeners"
                    />
                  </figure>
                  <p className="title">Water Softeners</p>
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

export default WaterTank;
