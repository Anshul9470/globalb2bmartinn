import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    name: "Mr. Milind Vithoba Suryawanshi",
    email: "tnavyaniepl2023@gmail.com",
    mobileNumber: "9623009571",
    companyName: "TRIRATNANAVYAN INTERNATIONAL EXIM PRIVATE LIMITED",
    productOrService: "Garlic Supplier",
    imgSrc: "/assets/garlic1.jpeg", // Example image path, adjust as necessary
    altText: "Garlic - TRIRATNANAVYAN",
    mainProducts: "Garlic, Fresh Vegetables, Agricultural Products",
    years: "1 YRS",
    location: "Nashik, Maharashtra", // Update with actual location if available
    tooltipText: "Nashik, India",
    rating: "4.2",
    ratingPercent: "85%",
    ratingsCount: "75",
    responseRate: "90%",
    catalogLink: "/triratnanavyan-international-exim-private-limited", // Path for redirection
  },
  {
    _id: "inyas-khan-golden-garlic-vellore",
    name: "Inyas Khan",
    email: "khan@gmail.com",
    password: "8015519126",
    mobileNumber: "8015519126",
    companyName: "Golden Garlic",
    productOrService: "Garlic",
    imgSrc: "/assets/garlic2.jpg",
    mainProducts: "Garlic",
    altText: "Golden Garlic - Garlic",
    years: "1 YRS",
    location: "Vellore, Tamil Nadu, India",
    tooltipText: "Golden Garlic, Garlic, Vellore",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "30",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "swad-foods-agro-products-maharashtra",
    name: "Atul Pawar",
    email: "swadfoodsagroproducts@gmail.com",
    password: "Atul Pawar",
    mobileNumber: "9325373999",
    companyName: "Swad Foods Agro Products",
    productOrService: "Onion and Garlic Powder",
    imgSrc: "/assets/garlic3.jpg",
    mainProducts: "Onion and Garlic Powder",
    altText: "Swad Foods Agro Products - Onion and Garlic Powder",
    years: "1 YRS",
    location: "Pune, Maharashtra, India",
    tooltipText: "Swad Foods Agro Products, Onion and Garlic Powder, Pune",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "30",
    responseRate: "85%",
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const GarlicSupplierStore = () => {
  return (
    <div className="main-box">
      {/* Aside section for filters */}
      <aside>
        <div className="flt-box-wrap">
          <div className="flt-box mb-0 flt-head">Filters By</div>
          <div className="flt-box bdrt-0">
            <p className="flt-title">Related Categories</p>
            <div className="flt-content">
              <ul className="flt-list cust-scroll">
                <li>
                  <Link to="#">Garlic</Link>
                </li>
                <li>
                  <Link to="#">Fresh Vegetables</Link>
                </li>
                <li>
                  <Link to="#">Agricultural Products</Link>
                </li>
              </ul>
            </div>
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
                <Link to="#">Karnataka</Link>
              </li>
              <li>
                <Link to="#">Madhya Pradesh</Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      {/* Main section for classified listings */}
      <main>
        <section className="section">
          <p className="sect-title">Explore by Categories</p>

          <div className="horprd expcatg" id="expcatg">
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/garlic1.jpeg"
                      width={55}
                      height={55}
                      alt="Garlic"
                    />
                  </figure>
                  <p className="title">Garlic</p>
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
                      <Link to={item.catalogLink} target="_blank">
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

export default GarlicSupplierStore;
