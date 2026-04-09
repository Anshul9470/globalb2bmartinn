import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    name: "Sterling Manufacturing Co",
    email: "export@sterlingmfgco.com",
    mobileNumber: "9671888088",
    companyName: "Sterling Manufacturing Co",
    productOrService: "Lab Equipment Manufacturer",
    imgSrc: "/assets/labs.jpg", // Correct image path needed
    mainProducts:
      "Laboratory glassware, Lab instruments, Lab consumables, etc.",
    altText: "Lab Equipment Manufacturer - Sterling Manufacturing Co",
    years: "1 YRS",
    location: "Mumbai, Maharashtra, India",
    tooltipText: "123, Andheri West, Mumbai - 400053, Maharashtra, India",
    rating: "4.7",
    ratingPercent: "95%",
    ratingsCount: "250",
    responseRate: "97%",
  },
  {
    _id: "d3e4f5g6h7i8j9k0l1m2n3o4", // Random unique ID
    name: "Amit",
    email: "laboratetechnocracy@gmail.com",
    mobileNumber: "9896137240",
    companyName: "Laborate Technocracy",
    productOrService: "Lab Equipment Manufacturer",
    imgSrc: "/assets/lab8.jpeg", // Example image path
    mainProducts:
      "Microscopes, Spectrophotometers, Centrifuges, Laboratory Glassware",
    altText: "Lab Equipment - Laborate Technocracy",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "56 Tech Park, Delhi, India",
    rating: "4.7",
    ratingPercent: "93%",
    ratingsCount: "82",
    responseRate: "96%",
    whatsappConfirmed: true,
  },
  {
    _id: "rinku-labels-aanad-parbat",
    name: "Rinku",
    email: "RinkuLabels12@gmail.com",
    password: "12345678",
    mobileNumber: "9350211413",
    companyName: "Rinku Labels",
    productOrService: "lebale",
    imgSrc: "/assets/lab9.jpg",
    mainProducts: "Labels",
    altText: "Rinku Labels - Labels",
    years: "1 YRS",
    location: "Aanad Parbat, Delhi, India",
    tooltipText: "Rinku Labels, Labels, Aanad Parbat",
    rating: "4.0",
    ratingPercent: "80%",
    ratingsCount: "25",
    responseRate: "90%",
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const Labequipment = () => {
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
                  <Link to="#">Laboratory Glassware</Link>
                </li>
                <li>
                  <Link to="#">Lab Instruments</Link>
                </li>
                <li>
                  <Link to="#">Lab Consumables</Link>
                </li>
                <li>
                  <Link to="#">Chemistry Lab Equipment</Link>
                </li>
                {/* Add more categories as needed */}
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
                  <Link to="#">Gujarat</Link>
                </li>
                <li>
                  <Link to="#">Tamil Nadu</Link>
                </li>
                <li>
                  <Link to="#">Karnataka</Link>
                </li>
                <li>
                  <Link to="#">Delhi</Link>
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
                      src="/assets/lab1.jpg"
                      width={55}
                      height={55}
                      alt="Laboratory Glassware"
                    />
                  </figure>
                  <p className="title">Laboratory Glassware</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/lab2.jpg"
                      width={55}
                      height={55}
                      alt="Lab Instruments"
                    />
                  </figure>
                  <p className="title">Lab Instruments</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/lab3.jpg"
                      width={55}
                      height={55}
                      alt="Lab Consumables"
                    />
                  </figure>
                  <p className="title">Lab Consumables</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/lab4.jpg"
                      width={55}
                      height={55}
                      alt="Chemistry Lab Equipment"
                    />
                  </figure>
                  <p className="title">Chemistry Lab Equipment</p>
                </div>
              </Link>
            </div>
            {/* Add more categories as needed */}
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
                        <span>Main Products</span> <b>{item.mainProducts}</b>
                      </p>
                    </div>
                  </div>
                  <div className="caction">
                    <Link to={"/contact-supplier"}>
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

export default Labequipment;
