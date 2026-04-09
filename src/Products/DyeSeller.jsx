import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    name: "Kingston Fernandez",
    email: "8939434722@gmail.com",
    password: "8939434722",
    mobileNumber: "8939434722",
    companyName: "Natural Indigo Dye",
    productOrService: "Natural Indigo Dye",
    imgSrc: "/assets/dye1.jpg",
    mainProducts: "Natural Indigo Dye, Organic Dyes, Textile Dyes",
    altText: "Natural Indigo Dye - Organic Dye Solutions",
    years: "1 YRS",
    location: "Chennai, Tamil Nadu, India",
    tooltipText: "Natural Indigo Dye, Chennai",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "75",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
  {
    name: "Ragul Ram S G",
    email: "ragulram258@gmail.com",
    password: "9345336121",
    mobileNumber: "9345336121",
    companyName: "Ragul Ram S G",
    productOrService: "Basic Dyes",
    imgSrc: "/assets/dyes1.jpg",
    mainProducts: "Basic Dyes, Textile Dyes, Industrial Dyes",
    altText: "Ragul Ram S G - Basic Dyes",
    years: "1 YRS",
    location: "Chennai, Tamil Nadu, India",
    tooltipText: "Ragul Ram S G, Chennai",
    rating: "4.4",
    ratingPercent: "88%",
    ratingsCount: "60",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
];

const DyeSellers = () => {
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
                  <Link to="#">Pudena Powder</Link>
                </li>
                <li>
                  <Link to="#">Moringa Powder</Link>
                </li>
                <li>
                  <Link to="#">Herbal Powders</Link>
                </li>
                <li>
                  <Link to="#">Tulsi Powder</Link>
                </li>
                <li>
                  <Link to="#">Amla Powder</Link>
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
                  <Link to="#">Karnataka</Link>
                </li>
                <li>
                  <Link to="#">Uttar Pradesh</Link>
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
                      src="/assets/dye1.jpg"
                      width={55}
                      height={55}
                      alt="Pudena Powder"
                    />
                  </figure>
                  <p className="title">Natural Dye</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/herbal2.jpeg"
                      width={55}
                      height={55}
                      alt="Moringa Powder"
                    />
                  </figure>
                  <p className="title">Moringa Powder</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/herbal3.jpeg"
                      width={55}
                      height={55}
                      alt="Tulsi Powder"
                    />
                  </figure>
                  <p className="title">Tulsi Powder</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/herbal4.jpeg"
                      width={55}
                      height={55}
                      alt="Amla Powder"
                    />
                  </figure>
                  <p className="title">Amla Powder</p>
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

export default DyeSellers;
