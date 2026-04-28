import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    _id: "889bb9d25677afcbaa1287aa",
    name: "Karthik Swamy",
    email: "jdkarthik@gmail.com",
    mobileNumber: "9003544154",
    companyName: "Ghe",
    productOrService: "Dairy Products",
    imgSrc: "/assets/dairy1.jpeg", // You need to provide the correct image path
    mainProducts: "Milk, Cheese, Butter, Ghee",
    altText: "Dairy Products - Ghe",
    years: "1 YRS",
    location: "Chengalpattu, Tamil Nadu, India",
    tooltipText: "123 Dairy Market, Chengalpattu, Tamil Nadu, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "150",
    responseRate: "94%",
  },
  {
    _id: "anbazhagan-anbu-apg-export-imports-kallakurichi",
    name: "Anbazhagan Anbu",
    email: "eanbuece@gmail.com",
    password: "9962625957",
    mobileNumber: "9962625957",
    companyName: "Apg export&imports",
    productOrService: "Milk powder ghee panneer",
    imgSrc: "/assets/dairy6.jpg",
    mainProducts: "Milk powder ghee panneer",
    altText: "Apg export&imports - Milk powder ghee panneer",
    years: "1 YRS",
    location: "Kallakurichi, Tamil Nadu, India",
    tooltipText: "Apg export&imports, Milk powder ghee panneer, Kallakurichi",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "30",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "aslam-khan-mahoba-pgrow",
    name: "Aslam Khan",
    email: "Aslamkhan@gmail.com",
    password: "12345678",
    mobileNumber: "9565025543",
    companyName: "Aslam Khan",
    statename: "Uttar Pradesh",
    cityname: "Mahoba",
    productOrService: "Pgrow",
    imgSrc: "/assets/pgrow.jpg",
    mainProducts: "Pgrow",
    altText: "Aslam Khan - Pgrow Supplier in Mahoba",
    years: "1 YRS",
    location: "Mahoba, Uttar Pradesh",
    tooltipText: "Aslam Khan - Reliable Pgrow Products Supplier",
    rating: "4.3",
    ratingPercent: "86%",
    ratingsCount: "145",
    responseRate: "89%",
    whatsappConfirmed: true,
  },
];

const DairyProductsSupplier = () => {
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
                  <Link to="#">Milk</Link>
                </li>
                <li>
                  <Link to="#">Cheese</Link>
                </li>
                <li>
                  <Link to="#">Butter</Link>
                </li>
                <li>
                  <Link to="#">Ghee</Link>
                </li>
                <li>
                  <Link to="#">Yogurt</Link>
                </li>
                <li>
                  <Link to="#">Cream</Link>
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
                  <Link to="#">Tamil Nadu</Link>
                </li>
                <li>
                  <Link to="#">Karnataka</Link>
                </li>
                <li>
                  <Link to="#">Andhra Pradesh</Link>
                </li>
                <li>
                  <Link to="#">Kerala</Link>
                </li>
                <li>
                  <Link to="#">Maharashtra</Link>
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
                      src="/assets/dairy1.jpeg"
                      width={55}
                      height={55}
                      alt="Milk"
                    />
                  </figure>
                  <p className="title">Milk</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/dairy2.jpeg"
                      width={55}
                      height={55}
                      alt="Cheese"
                    />
                  </figure>
                  <p className="title">Cheese</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/dairy3.jpeg"
                      width={55}
                      height={55}
                      alt="Butter"
                    />
                  </figure>
                  <p className="title">Butter</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/dairy4.jpeg"
                      width={55}
                      height={55}
                      alt="Ghee"
                    />
                  </figure>
                  <p className="title">Ghee</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/dairy5.jpeg"
                      width={55}
                      height={55}
                      alt="Yogurt"
                    />
                  </figure>
                  <p className="title">Yogurt</p>
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

export default DairyProductsSupplier;
