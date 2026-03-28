import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    _id: "samyak-jain-panipat-hariyana",
    name: "Samyak Jain",
    email: "GUNVEEROVERSEAS@gmail.com",
    password: "123456789",
    mobileNumber: "9050406451",
    companyName: "Gunveer Overseas",
    productOrService: "Cushions",
    imgSrc: "/assets/cusion.jpg",
    mainProducts: "Cushions",
    altText: "Gunveer Overseas - Panipat",
    years: "1 YRS",
    location: "Panipat, Hariyana",
    tooltipText: "Gunveer Overseas, Panipat",
    rating: "4.8",
    ratingPercent: "95%",
    ratingsCount: "150",
    responseRate: "97%",
    whatsappConfirmed: true,
  },
  {
    _id: "shivam-sharma-bihar-bihar",
    name: "Shivam Sharma",
    email: "AMAZINGPRINTANDDESIGN@gmail.com",
    password: "123456789",
    mobileNumber: "7858971527",
    companyName: "AMAZING PRINT AND DESIGN",
    statename: "Bihar",
    cityname: "Bihar",
    productOrService: "Sublimation Anniversary Pillow",
    imgSrc: "/assets/cushion.jpg",
    mainProducts: "Sublimation Anniversary Pillow",
    altText: "AMAZING PRINT AND DESIGN - Bihar",
    years: "1 YRS",
    location: "Bihar, Bihar",
    tooltipText: "AMAZING PRINT AND DESIGN, Bihar",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "150",
    responseRate: "91%",
    whatsappConfirmed: true,
  },
];

const CusionComponent = () => {
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
                  <Link to="#">Home Decor</Link>
                </li>
                <li>
                  <Link to="#">Textile Products</Link>
                </li>
                <li>
                  <Link to="#">Living Room Items</Link>
                </li>
                <li>
                  <Link to="#">Soft Furnishings</Link>
                </li>
                <li>
                  <Link to="#">Decorative Cushions</Link>
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
                      src="/assets/homed.jpg"
                      width={55}
                      height={55}
                      alt="Home Decor"
                    />
                  </figure>
                  <p className="title">Home Decor</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/textile.jpg"
                      width={55}
                      height={55}
                      alt="Textile Products"
                    />
                  </figure>
                  <p className="title">Textile Products</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/livingrooom.jpg"
                      width={55}
                      height={55}
                      alt="Living Room Items"
                    />
                  </figure>
                  <p className="title">Living Room Items</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/soft.jpg"
                      width={55}
                      height={55}
                      alt="Soft Furnishings"
                    />
                  </figure>
                  <p className="title">Soft Furnishings</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/cusion.jpg"
                      width={55}
                      height={55}
                      alt="Decorative Cushions"
                    />
                  </figure>
                  <p className="title">Decorative Cushions</p>
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

export default CusionComponent;
