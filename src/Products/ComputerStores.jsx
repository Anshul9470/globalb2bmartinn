import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    name: "Heersh",
    email: "heersh123@gmail.com",
    password: "heersh123",
    mobileNumber: "7022799690",
    companyName: "Computer Accessories",
    productOrService: "Computer Accessories",
    imgSrc: "/assets/comp6.jpeg", // Provide the correct image path
    altText: "Computer Accessories - Heersh",
    mainProducts: "Keyboards, Mice, Monitors",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "123 Computer Lane, Tech Park, Mumbai, India",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "120",
    responseRate: "90%",
  },
  {
    name: "Moksh",
    email: "moksh1234@gmail.com",
    mobileNumber: "7026388889",
    companyName: "Heera Collections",
    productOrService: "Laptop Accessories and Computer",
    imgSrc: "/assets/computer1.jpeg",
    altText: "Laptop Accessories and Computer - Heera Collections",
    mainProducts: "Laptop Accessories, Computer Peripherals, Cables, Adapters",
    years: "1 YRS",
    location: "Pune, India",
    tooltipText: "567 Tech Street, Electronics Hub, Pune, India",
    rating: "4.4",
    ratingPercent: "88%",
    ratingsCount: "290",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    name: "Umar Mukthar",
    email: "abc@gmail.com",
    password: "umar1234",
    mobileNumber: "8300164982",
    companyName: "SM Computer",
    productOrService: "Computer Accessories",
    imgSrc: "/assets/computer2.jpg",
    mainProducts: "Computer Accessories, Peripherals, Laptops",
    altText: "SM Computer - Computer Accessories",
    years: "1 YRS",
    location: "Ilayangudi, Tamil Nadu, India",
    tooltipText: "SM Computer, Ilayangudi",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "102",
    responseRate: "85%",
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const ComputerStore = () => {
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
                  <Link to="#">Keyboards</Link>
                </li>
                <li>
                  <Link to="#">Mice</Link>
                </li>
                <li>
                  <Link to="#">Monitors</Link>
                </li>
                <li>
                  <Link to="#">Printers</Link>
                </li>
                <li>
                  <Link to="#">USB Devices</Link>
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
                  <Link to="#">Karnataka</Link>
                </li>
                <li>
                  <Link to="#">Tamil Nadu</Link>
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
                      src="/assets/comp2.jpeg"
                      width={55}
                      height={55}
                      alt="Keyboards"
                    />
                  </figure>
                  <p className="title">Keyboards</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/comp3.jpeg"
                      width={55}
                      height={55}
                      alt="Mice"
                    />
                  </figure>
                  <p className="title">Mouse</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/comp1.jpeg"
                      width={55}
                      height={55}
                      alt="Monitors"
                    />
                  </figure>
                  <p className="title">Monitors</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/comp4.jpeg"
                      width={55}
                      height={55}
                      alt="Printers"
                    />
                  </figure>
                  <p className="title">Printers</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/comp5.jpeg"
                      width={55}
                      height={55}
                      alt="USB Devices"
                    />
                  </figure>
                  <p className="title">USB Devices</p>
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

export default ComputerStore;
