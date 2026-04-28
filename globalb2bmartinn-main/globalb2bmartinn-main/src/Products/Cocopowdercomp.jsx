import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    _id: "unidac-impex-mumbai",
    name: "Rajesh",
    email: "rajesh@gmail.com",
    password: "12345678",
    mobileNumber: "9819095465",
    companyName: "Unidac Impex",
    statename: "Maharashtra",
    cityname: "Mumbai",
    productOrService: "Cocoa Powder",
    imgSrc: "/assets/coco3.jpg",
    mainProducts: "Cocoa Powder",
    altText: "Unidac Impex - Cocoa Powder",
    years: "1 YRS",
    location: "Mumbai, Maharashtra",
    tooltipText: "Unidac Impex - Cocoa Powder, Mumbai",
    rating: "4.5",
    ratingPercent: "91%",
    ratingsCount: "120",
    responseRate: "88%",
    whatsappConfirmed: true,
  },

  {
    _id: "c1234567890coco-powder",
    name: "Maya Organics",
    email: "maya@gmail.com",
    password: "mayacoco123",
    mobileNumber: "9812345678",
    companyName: "Maya Organics",
    productOrService: "Coco Powder, Organic Cocoa, Raw Cocoa Beans",
    imgSrc: "/assets/coco1.jpg",
    mainProducts: "Coco Powder, Organic Cocoa, Raw Cocoa Beans",
    altText: "Maya Organics - Coco Powder, Organic Cocoa, Raw Cocoa Beans",
    years: "1 YRS",
    location: "Kochi, Kerala, India",
    tooltipText: "Maya Organics, Kochi, Kerala",
    rating: "4.8",
    ratingPercent: "95%",
    ratingsCount: "120",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
  // Add more items if needed
];

const CocoPowderComponent = () => {
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
                  <Link to="#">Coco Powder</Link>
                </li>
                <li>
                  <Link to="#">Organic Cocoa</Link>
                </li>
                <li>
                  <Link to="#">Raw Cocoa Beans</Link>
                </li>
                <li>
                  <Link to="#">Cocoa Butter</Link>
                </li>
                <li>
                  <Link to="#">Cocoa Paste</Link>
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
                  <Link to="#">Kerala</Link>
                </li>
                <li>
                  <Link to="#">Tamil Nadu</Link>
                </li>
                <li>
                  <Link to="#">Karnataka</Link>
                </li>
                <li>
                  <Link to="#">Maharashtra</Link>
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
                      src="/assets/coco1.jpg"
                      width={55}
                      height={55}
                      alt="Coco Powder"
                    />
                  </figure>
                  <p className="title">Coco Powder</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/organoc-coco.jpg"
                      width={55}
                      height={55}
                      alt="Organic Cocoa"
                    />
                  </figure>
                  <p className="title">Organic Cocoa</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/coco-beans.jpg"
                      width={55}
                      height={55}
                      alt="Raw Cocoa Beans"
                    />
                  </figure>
                  <p className="title">Raw Cocoa Beans</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/coco-butter1.jpg"
                      width={55}
                      height={55}
                      alt="Cocoa Butter"
                    />
                  </figure>
                  <p className="title">Cocoa Butter</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/coco-paste1.jpg"
                      width={55}
                      height={55}
                      alt="Cocoa Paste"
                    />
                  </figure>
                  <p className="title">Cocoa Paste</p>
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

export default CocoPowderComponent;
