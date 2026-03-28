import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    _id: "f1234567890friendzire-fashions",
    name: "Mohit Chopra",
    email: "MohitChopra@gmail.com",
    password: "123456789",
    mobileNumber: "7477707333",
    companyName: "FRIENDZIRE FASHIONS",
    productOrService: "Necklace, Fashion Accessories",
    imgSrc: "/assets/necklase1.jpg",
    mainProducts: "Necklace, Fashion Accessories",
    altText: "FRIENDZIRE FASHIONS - Necklace, Fashion Accessories",
    years: "1 YRS",
    location: "Panipat, Haryana, India",
    tooltipText: "FRIENDZIRE FASHIONS, Panipat, Haryana",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "75",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "jain-casting-delhi",
    name: "Brij Bhushan Jain",
    email: "BrijBhushanJain@gmail.com",
    password: "123456789",
    mobileNumber: "9312241275",
    companyName: "JAIN CASTING",
    statename: "Delhi",
    cityname: "Delhi",
    productOrService: "Necklaces",
    imgSrc: "/assets/nexklase.jpg",
    mainProducts: "Necklaces, Jewelry",
    altText: "JAIN CASTING - Delhi",
    years: "1 YRS",
    location: "Delhi, Delhi",
    tooltipText: "JAIN CASTING, Delhi",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "120",
    responseRate: "92%",
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const NecklaseComponent = () => {
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
                  <Link to="#">Necklace</Link>
                </li>
                <li>
                  <Link to="#">Fashion Accessories</Link>
                </li>
                <li>
                  <Link to="#">Jewelry Sets</Link>
                </li>
                <li>
                  <Link to="#">Bracelets</Link>
                </li>
                <li>
                  <Link to="#">Earrings</Link>
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
                  <Link to="#">Haryana</Link>
                </li>
                <li>
                  <Link to="#">Delhi</Link>
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
                      src="/assets/necklase1.jpg"
                      width={55}
                      height={55}
                      alt="Necklace"
                    />
                  </figure>
                  <p className="title">Necklace</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/safsion.jpg"
                      width={55}
                      height={55}
                      alt="Fashion Accessories"
                    />
                  </figure>
                  <p className="title">Fashion Accessories</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/jwl.jpg"
                      width={55}
                      height={55}
                      alt="Jewelry Sets"
                    />
                  </figure>
                  <p className="title">Jewelry Sets</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/bracelet.jpg"
                      width={55}
                      height={55}
                      alt="Bracelets"
                    />
                  </figure>
                  <p className="title">Bracelets</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/earrings.jpg"
                      width={55}
                      height={55}
                      alt="Earrings"
                    />
                  </figure>
                  <p className="title">Earrings</p>
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

export default NecklaseComponent;
