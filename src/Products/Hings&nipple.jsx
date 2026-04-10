import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    _id: "kailash-vadodra-gujarat",
    name: "Kailash",
    email: "kailsh@gmail.com",
    password: "kailash@123",
    mobileNumber: "9662622641",
    companyName: "Greatbolt Industries",
    statename: "Gujarat",
    cityname: "Vadodra",
    productOrService: "Fasteners",
    imgSrc: "/assets/fastner3.jpg",
    mainProducts: "Fasteners",
    altText: "Greatbolt Industries - Vadodra",
    years: "1 YRS",
    location: "Vadodra, Gujarat",
    tooltipText: "Greatbolt Industries, Vadodra",
    rating: "4.8",
    ratingPercent: "94%",
    ratingsCount: "320",
    responseRate: "97%",
    whatsappConfirmed: true,
  },
  {
    _id: "rushikesh-bhavar-nashik-screw",
    name: "Rushikesh Bhavar",
    email: "rushikeshbhavar@gmail.com",
    password: "rushikesh bhavar",
    mobileNumber: "8956450071",
    companyName: "Rushikesh Bhavar Enterprises",
    statename: "Maharashtra",
    cityname: "Nashik",
    productOrService: "Screw",
    imgSrc: "/assets/screw.jpg",
    mainProducts: "Screw",
    altText: "Rushikesh Bhavar Enterprises - Screw Supplier in Nashik",
    years: "1 YRS",
    location: "Nashik, Maharashtra",
    tooltipText: "Rushikesh Bhavar Enterprises - Trusted Screw Supplier",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "157",
    responseRate: "89%",
    whatsappConfirmed: true,
  },

  {
    name: "Jagtar Singh",
    email: "jagtarsingh12@gmail.com",
    mobileNumber: "8695719062",
    companyName: "Vishwakarma Enterprises",
    productOrService: "Hings and Nipple",
    imgSrc: "/assets/hins.jpg", // Provide the correct image path
    altText: "Hings and Nipple - Vishwakarma Enterprises",
    mainProducts: "Hings, Nipple, Industrial Fasteners",
    years: "1 YRS",
    location: "Ludhiana, Punjab, India",
    tooltipText: "456 Industrial Zone, Ludhiana, Punjab, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "75",
    responseRate: "89%",
  },
  {
    name: "Malik Sultan",
    email: "maliksultan@gmail.com",
    password: "malik@123",
    mobileNumber: "7622011486",
    companyName: "Sultan Fastners",
    productOrService: "fastners",
    imgSrc: "/assets/fas5.jpeg",
    altText: "fastners - Sultan Fastners",
    mainProducts: "Bolts, Nuts, Screws",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "456 Industrial Zone, Delhi, India",
    rating: "4.8",
    ratingPercent: "97%",
    ratingsCount: "350",
    responseRate: "95%",
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
    name: "Jas",
    email: "jas123@gmail.com",
    mobileNumber: "7069381223",
    companyName: "Ravi Fasteners",
    productOrService: "Critical Fasteners",
    imgSrc: "/assets/fas2.jpeg", // Provide the correct image path
    altText: "Critical Fasteners - Ravi Fasteners",
    mainProducts:
      "High-Strength Bolts, Aerospace Fasteners, Precision Screws, Specialized Nuts",
    years: "1 YRS",
    location: "Chennai, Tamil Nadu, India",
    tooltipText:
      "890 Fasteners Street, Industrial Hub, Chennai, Tamil Nadu, India",
    rating: "4.9",
    ratingPercent: "98%",
    ratingsCount: "170",
    responseRate: "96%",
  },
  {
    _id: "jiyansh-international-gujarat",
    name: "Yesh",
    email: "yesh@gmail.com",
    password: "12345678",
    mobileNumber: "9687840130",
    companyName: "Jiyansh International",
    productOrService: "Tower Bolt",
    imgSrc: "/assets/bolt1.jpg",
    mainProducts: "Tower Bolts, Hardware Products",
    altText: "Jiyansh International - Tower Bolt",
    years: "1 YRS",
    location: "Gujarat, India",
    tooltipText: "Jiyansh International, Gujarat",
    rating: "4.1",
    ratingPercent: "82%",
    ratingsCount: "45",
    responseRate: "80%",
    whatsappConfirmed: false,
  },
  {
    _id: "kaizen-industries-rajkot",
    name: "Kashyap Pandya",
    email: "kaizenindustries23@gmail.com",
    password: "Kashyap Pandya",
    mobileNumber: "9638966036",
    companyName: "Kaizen Industries",
    productOrService: "Rebar Coupler",
    imgSrc: "/assets/coupler1.jpg",
    mainProducts: "Rebar Coupler",
    altText: "Kaizen Industries - Rebar Coupler",
    years: "1 YRS",
    location: "Rajkot, Gujarat, India",
    tooltipText: "Kaizen Industries, Rebar Coupler, Rajkot",
    rating: "4.5",
    ratingPercent: "92%",
    ratingsCount: "40",
    responseRate: "95%",
    whatsappConfirmed: true,
  },
  {
    _id: "ajr-industries-bangalore",
    name: "rehman",
    email: "rehmana392@gmail.com",
    password: "rehmanrehman",
    mobileNumber: "9880499536",
    companyName: "AJR INDUSTRIES",
    productOrService: "press components",
    imgSrc: "/assets/press1.jpg",
    mainProducts: "press components",
    altText: "AJR INDUSTRIES - Press Components",
    years: "1 YRS",
    location: "Bangalore, Karnataka, India",
    tooltipText: "AJR INDUSTRIES, Press Components, Bangalore",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "25",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "ajr-industries-bangalore",
    name: "Rocking Reh",
    email: "ajrindustries@gmail.com",
    password: "Rocking Reh",
    mobileNumber: "9880499536",
    companyName: "AJR INDUSTRIES",
    productOrService: "press component",
    imgSrc: "/assets/press2.jpg",
    mainProducts: "Press Components",
    altText: "AJR INDUSTRIES - Press Components",
    years: "1 YRS",
    location: "Bangalore, Karnataka, India",
    tooltipText: "AJR INDUSTRIES, Press Components, Bangalore",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "30",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    _id: "arjun-fastner-ludhiyana",
    name: "Ashish",
    email: "ashish12@gmail.com",
    password: "123456789",
    mobileNumber: "8847324456",
    companyName: "Arjun Fastner",
    productOrService: "Tile",
    imgSrc: "/assets/fastner2.png",
    mainProducts: "Fastners",
    altText: "Arjun Fastner - Tile",
    years: "1 YRS",
    location: "Ludhiana, Punjab, India",
    tooltipText: "Arjun Fastner, Tile, Ludhiana",
    rating: "4.2",
    ratingPercent: "84%",
    ratingsCount: "33",
    responseRate: "79%",
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const HingsAndNipple = () => {
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
                  <Link to="#">Hings</Link>
                </li>
                <li>
                  <Link to="#">Nipple</Link>
                </li>
                <li>
                  <Link to="#">Fasteners</Link>
                </li>
                <li>
                  <Link to="#">Bolts</Link>
                </li>
                <li>
                  <Link to="#">Screws</Link>
                </li>
                <li>
                  <Link to="#">Washers</Link>
                </li>
                <li>
                  <Link to="#">Nuts</Link>
                </li>
                <li>
                  <Link to="#">Anchors</Link>
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
                  <Link to="#">Punjab</Link>
                </li>
                <li>
                  <Link to="#">Haryana</Link>
                </li>
                <li>
                  <Link to="#">Uttar Pradesh</Link>
                </li>
                <li>
                  <Link to="#">Maharashtra</Link>
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
                      src="/assets/hin1.jpg"
                      width={55}
                      height={55}
                      alt="Hings"
                    />
                  </figure>
                  <p className="title">Hings</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/hin2.jpg"
                      width={55}
                      height={55}
                      alt="Nipple"
                    />
                  </figure>
                  <p className="title">Nipple</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/hin3.jpg"
                      width={55}
                      height={55}
                      alt="Fasteners"
                    />
                  </figure>
                  <p className="title">Fasteners</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/hin4.jpg"
                      width={55}
                      height={55}
                      alt="Bolts"
                    />
                  </figure>
                  <p className="title">Bolts</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/hin5.jpg"
                      width={55}
                      height={55}
                      alt="Screws"
                    />
                  </figure>
                  <p className="title">Screws</p>
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

export default HingsAndNipple;
