import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    _id: "667bb8e29644befaa9547ffa",
    name: "Copper Dealers",
    email: "amit@gmail.com",
    mobileNumber: "9756789036",
    companyName: "Copper Dealers",
    productOrService: "Copper",
    imgSrc: "/assets/coppers.jpeg", // You need to provide the correct image path
    mainProducts: "Copper Pipes, Copper Wires, Copper Sheets",
    altText: "Copper Products - Copper Dealers",
    years: "3 YRS",
    location: "New Delhi, India",
    tooltipText: "456 Copper Market, Karol Bagh, New Delhi, India",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "150",
    responseRate: "98%",
  },
  {
    _id: "k8901234567lmno1234",
    name: "Amit",
    email: "jagdishenterprises@gmail.com",
    password: "jagdishenterprises",
    mobileNumber: "9536583909",
    companyName: "Jagdish Enterprises",
    productOrService: "Copper Water Bottle",
    imgSrc: "/assets/copper-bottle.jpeg",
    mainProducts: "Copper Water Bottles, Copper Jugs, Copper Tumblers",
    altText: "Jagdish Enterprises - Copper Water Bottle Collection",
    years: "1 YRS",
    location: "India",
    tooltipText: "Jagdish Enterprises, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "50",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "k1234567890pqrs5678",
    name: "sameer",
    email: "redcopper@gmail.com",
    password: "redcopper",
    mobileNumber: "7060785188",
    companyName: "Red Copper",
    productOrService: "Copper Water Bottle",
    imgSrc: "/assets/copper bottle2.jpeg",
    mainProducts: "Copper Water Bottles, Copper Mugs, Copper Flasks",
    altText: "Red Copper - Copper Water Bottle Collection",
    years: "1 YRS",
    location: "India",
    tooltipText: "Red Copper, India",
    rating: "4.4",
    ratingPercent: "88%",
    ratingsCount: "48",
    responseRate: "82%",
    whatsappConfirmed: true,
  },
  {
    _id: "sagar-trading-company-kolkata",
    name: "Sagar",
    email: "sagar@gmail.com",
    password: "12345678",
    mobileNumber: "7450012537",
    companyName: "Sagar Trading Company",
    productOrService: "Cooper",
    imgSrc: "/assets/copper9.jpg",
    mainProducts: "Cooper",
    altText: "Sagar Trading Company - Kolkata",
    years: "1 YRS",
    location: "Kolkata, India",
    tooltipText: "Sagar Trading Company, Kolkata, Cooper",
    rating: "4.4",
    ratingPercent: "88%",
    ratingsCount: "12",
    responseRate: "82%",
    whatsappConfirmed: true,
  },
  {
    _id: "rohit-pune-copper-handicraft",
    name: "Rohit",
    email: "rohitkumarprajapati@outlook.com",
    password: "12345678",
    mobileNumber: "9999385959",
    companyName: "Neelam Exim",
    statename: "",
    cityname: "Pune",
    productOrService: "Copper Handicraft",
    imgSrc: "/assets/copper11.jpg",
    mainProducts: "Copper Handicraft",
    altText: "Neelam Exim - Copper Handicraft Supplier in Pune",
    years: "1 YRS",
    location: "Pune",
    tooltipText: "Neelam Exim - Premium Copper Handicraft",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "178",
    responseRate: "87%",
    whatsappConfirmed: true,
  },
];

const CopperSupplier = () => {
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
                  <Link to="#">Copper Pipes</Link>
                </li>
                <li>
                  <Link to="#">Copper Wires</Link>
                </li>
                <li>
                  <Link to="#">Copper Sheets</Link>
                </li>
                <li>
                  <Link to="#">Copper Coils</Link>
                </li>
                <li>
                  <Link to="#">Copper Bars</Link>
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
                  <Link to="#">Gujarat</Link>
                </li>
                <li>
                  <Link to="#">Uttar Pradesh</Link>
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
                      src="/assets/copper.jpeg"
                      width={55}
                      height={55}
                      alt="Copper Pipes"
                    />
                  </figure>
                  <p className="title">Copper Pipes</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/copper2.jpeg"
                      width={55}
                      height={55}
                      alt="Copper Wires"
                    />
                  </figure>
                  <p className="title">Copper Wires</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/copper3.jpeg"
                      width={55}
                      height={55}
                      alt="Copper Sheets"
                    />
                  </figure>
                  <p className="title">Copper Sheets</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/copper5.jpeg"
                      width={55}
                      height={55}
                      alt="Copper Coils"
                    />
                  </figure>
                  <p className="title">Copper Coils</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/copper5.jpeg"
                      width={55}
                      height={55}
                      alt="Copper Bars"
                    />
                  </figure>
                  <p className="title">Copper Bars</p>
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

export default CopperSupplier;
