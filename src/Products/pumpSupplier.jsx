import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const pumpData = [
  {
    _id: "emp-pumps-west-bengal",
    name: "emp pumps",
    email: "emppumps@gmail.com",
    password: "12345678",
    mobileNumber: "8670778797",
    companyName: "emp pumps",
    productOrService: "Pumps",
    imgSrc: "/assets/emp1.jpg", // Placeholder image path
    mainProducts: "Pumps",
    altText: "emp pumps - Pumps",
    years: "1 YRS", // Random value
    location: "West Bengal, India",
    tooltipText: "emp pumps, Pumps, West Bengal",
    rating: "4.6", // Random value
    ratingPercent: "93%", // Random value
    ratingsCount: "42", // Random value
    responseRate: "87%", // Random value
    whatsappConfirmed: true,
  },

  {
    name: "Mr. Rishit",
    email: "rishit@gmail.com",
    mobileNumber: "8000644892",
    companyName: "RIYON PUMP",
    productOrService: "Submersible Pump",
    imgSrc: "/assets/Submersible.jpg",
    altText: "Submersible Pump - RIYON PUMP",
    mainProducts: "Submersible Pumps, Water Handling Solutions",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "789 Pump Lane, Industrial Park, Nagpur, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "85",
    responseRate: "88%",
  },
  {
    name: "Kurnal Patel",
    email: "kunal@gmail.com",
    mobileNumber: "9979921219",
    companyName: "Silver Fasteners",
    productOrService: "Fasteners Manufacturing",
    imgSrc: "/assets/fas1.jpeg", // Provide the correct image path
    altText: "Fasteners - Silver Fasteners",
    mainProducts: "Bolts, Nuts, Screws, Washers",
    years: "1 YRS",
    location: "Ahmedabad, Gujarat, India",
    tooltipText:
      "567 Fasteners Lane, Industrial Park, Ahmedabad, Gujarat, India",
    rating: "4.8",
    ratingPercent: "97%",
    ratingsCount: "150",
    responseRate: "95%",
    whatsappConfirmed: true,
  },
  {
    name: "Mr. Parvin Patel",
    email: "parvinpatel@gmail.com",
    password: "parvin@123",
    mobileNumber: "9913107474",
    companyName: "Kalindi Pumps",
    productOrService: "Submersible Pump",
    imgSrc: "/assets/bore.jpg", // Provide the correct image path
    altText: "Submersible Pump - Kalindi Pumps",
    mainProducts: "Submersible Pumps, Water Pumps, Borewell Pumps",
    years: "1 YRS",
    location: "Ahmedabad, India",
    tooltipText: "789 Pump Lane, Industrial Park, Ahmedabad, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "85",
    responseRate: "88%",
  },

  {
    _id: "o123456789012abcdef0123", // Random unique ID
    name: "Mr. Anish Chauhan",
    email: "maxiflojayhydraulic@gmail.com",
    mobileNumber: "7505538048",
    companyName: "MAXIFLO JAY HYDRAULIC PRIVATE LIMITED",
    productOrService: "Hydraulic Pump Wholesaler",
    imgSrc: "/assets/pump.jpeg", // Example image path
    mainProducts: "Hydraulic Pumps, Hydraulic Valves, Hydraulic Systems",
    altText:
      "Hydraulic Pump Wholesaler - MAXIFLO JAY HYDRAULIC PRIVATE LIMITED",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "789 Hydraulic Street, Mumbai, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "78",
    responseRate: "95%",
    whatsappConfirmed: true,
  },
  {
    _id: "h123456789012abcdef0123", // Random unique ID
    name: "Mohd Afzal Imam",
    email: "hydotechhydraulics@gmail.com",
    mobileNumber: "9999695464",
    companyName: "HYDOTECH HYDRAULICS ENTERPRISES",
    productOrService: "Hydraulic Pump Wholesaler",
    imgSrc: "/assets/pump1.jpeg", // Example image path
    mainProducts: "Hydraulic Pumps, Hydraulic Valves, Hydraulic Cylinders",
    altText: "Hydraulic Pump Wholesaler - HYDOTECH HYDRAULICS ENTERPRISES",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "456 Industrial Road, Delhi, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "85",
    responseRate: "95%",
    whatsappConfirmed: true,
  },
  {
    _id: "s234567890123abcdef0123", // Random unique ID
    name: "SACHIN",
    email: "sales@hydraulicvanepump.com",
    mobileNumber: "9821423821",
    companyName: "S. M. Shah & Company",
    productOrService: "Hydraulic Pump Wholesaler",
    imgSrc: "/assets/pump2.jpeg", // Example image path
    mainProducts:
      "Hydraulic Vane Pumps, Hydraulic Gear Pumps, Hydraulic Motors",
    altText: "Hydraulic Pump Wholesaler - S. M. Shah & Company",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "789 Hydraulic Lane, Mumbai, India",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "150",
    responseRate: "98%",
    whatsappConfirmed: true,
  },
  {
    _id: "a1234567890wxyz5683",
    name: "Rafi Md",
    email: "rafimd@gmail.com",
    password: "12345678",
    mobileNumber: "9666555558",
    companyName: "Universal Hydraulics",
    productOrService: "Hydraulics",
    imgSrc: "/assets/pump9.jpeg", // Placeholder for image path
    mainProducts: "Hydraulic Pumps, Cylinders, Valves, Hoses",
    altText: "Hydraulics - Universal Hydraulics",
    years: "1 YRS", // Placeholder for years of experience
    location: "Hyderabad, India", // Placeholder for location
    tooltipText: "Universal Hydraulics, Hyderabad, India",
    rating: "4.5", // Placeholder for rating
    ratingPercent: "90%", // Placeholder for rating percentage
    ratingsCount: "120", // Placeholder for ratings count
    responseRate: "92%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "meghana-maharashtra-pumps",
    name: "Meghana",
    email: "everestanalyticals@gmail.com",
    password: "MeghanaMeghana",
    mobileNumber: "9833997351",
    companyName: "everestanalyticals",
    statename: "Maharashtra",
    cityname: "Thane",
    productOrService: "Pumps",
    imgSrc: "/assets/pump10.jpg",
    mainProducts: "Pumps",
    altText: "everestanalyticals - Pumps Manufacturer in Thane",
    years: "1 YRS",
    location: "Thane, Maharashtra",
    tooltipText: "everestanalyticals - Quality Pumps",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "120",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "raxit-gamara-rajkot",
    name: "Raxit Gamara",
    email: "Raxitgamara@gmail.com",
    password: "Raxit Gamara",
    mobileNumber: "7600150090",
    companyName: "Trishakti Engineering",
    statename: "Gujarat",
    cityname: "Rajkot",
    productOrService: "Tractor Trolley Hydraulic Pump",
    imgSrc: "/assets/hydolic-pump.jpg",
    mainProducts: "Hydraulic Pumps, Tractor Accessories",
    altText: "Raxit Gamara - Leading Supplier of Hydraulic Pumps in Rajkot",
    years: "1 YRS",
    location: "Rajkot, Gujarat, India",
    tooltipText: "Raxit Gamara - Trusted Supplier for Tractor Hydraulic Pumps",
    rating: "4.8",
    ratingPercent: "93%",
    ratingsCount: "230",
    responseRate: "89%",
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const Pumpsupplier = () => {
  return (
    <div className="main-box">
      <aside>
        <div className="flt-box-wrap">
          <div className="flt-box mb-0 flt-head">Filters By</div>
          <div className="flt-box bdrt-0">
            <p className="flt-title">Pump Categories</p>
            <div className="flt-content">
              <ul className="flt-list cust-scroll">
                <li>
                  <Link to="#">Submersible Pumps</Link>
                </li>
                <li>
                  <Link to="#">Centrifugal Pumps</Link>
                </li>
                <li>
                  <Link to="#">Peristaltic Pumps</Link>
                </li>
                <li>
                  <Link to="#">Gear Pumps</Link>
                </li>
                <li>
                  <Link to="#">Diaphragm Pumps</Link>
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
                  <Link to="#">Bangalore</Link>
                </li>
                <li>
                  <Link to="#">Chennai</Link>
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
                      src="/assets/Submersible.jpg"
                      width={55}
                      height={55}
                      alt="Submersible Pumps"
                    />
                  </figure>
                  <p className="title">Submersible Pumps</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/centripump.jpeg"
                      width={55}
                      height={55}
                      alt="Centrifugal Pumps"
                    />
                  </figure>
                  <p className="title">Centrifugal Pumps</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/pelispump.jpeg"
                      width={55}
                      height={55}
                      alt="Peristaltic Pumps"
                    />
                  </figure>
                  <p className="title">Peristaltic Pumps</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/gearpump.jpeg"
                      width={55}
                      height={55}
                      alt="Gear Pumps"
                    />
                  </figure>
                  <p className="title">Gear Pumps</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/pumpdia.jpeg"
                      width={55}
                      height={55}
                      alt="Diaphragm Pumps"
                    />
                  </figure>
                  <p className="title">Diaphragm Pumps</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <ul className="classfied-wrap">
          {pumpData.map((item, index) => (
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

export default Pumpsupplier;
