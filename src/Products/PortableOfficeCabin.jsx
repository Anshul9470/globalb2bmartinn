import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    name: "Portable Office Cabin",
    email: "PortableOfficeCabin@gmail.com",
    password: "portable123",
    mobileNumber: "9019910931",
    companyName: "Portable Office Cabin",
    productOrService: "Portable Office Cabin",
    imgSrc: "/assets/office4.jpeg", // Provide the correct image path
    altText: "Portable Office Cabin - Portable Office Cabin",
    mainProducts: "Portable Office, Modular Cabins, Site Office Cabins",
    years: "1 YRS",
    location: "Ghaziabad, India",
    tooltipText:
      "Bhupendra Puri, Ambedkar Park, Gali No. 3 Modinagar, Ghaziabad 201204",
    rating: "4.9",
    ratingPercent: "98%",
    ratingsCount: "120",
    responseRate: "98%",
  },
  {
    _id: "a1234567890wxyz5701",
    name: "Rizwan Mirza",
    email: "abc@gmail.com",
    password: "rizwan@123",
    mobileNumber: "9860181721",
    companyName: "United Enterprises",
    productOrService: "FRP Portable Containers",
    imgSrc: "/assets/portable-cabin.jpeg", // Placeholder for image path
    mainProducts:
      "FRP Portable Containers, Modular Cabins, Prefabricated Structures",
    altText: "FRP Portable Containers - United Enterprises",
    years: "1 YRS", // Placeholder for years of experience
    location: "India", // Placeholder for location
    tooltipText: "United Enterprises, India",
    rating: "4.6", // Placeholder for rating
    ratingPercent: "92%", // Placeholder for rating percentage
    ratingsCount: "120", // Placeholder for ratings count
    responseRate: "90%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "a1234567890wxyz5702",
    name: "Shiv Shankar",
    email: "abc@gmail.com",
    password: "shiv@123",
    mobileNumber: "9844209359",
    companyName: "Solar and Glass Tech",
    productOrService: "FRP Portable Containers",
    imgSrc: "/assets/portable1.jpeg", // Placeholder for image path
    mainProducts: "FRP Portable Containers, Solar Panels, Glass Structures",
    altText: "FRP Portable Containers - Solar and Glass Tech",
    years: "1 YRS", // Placeholder for years of experience
    location: "India", // Placeholder for location
    tooltipText: "Solar and Glass Tech, India",
    rating: "4.7", // Placeholder for rating
    ratingPercent: "94%", // Placeholder for rating percentage
    ratingsCount: "110", // Placeholder for ratings count
    responseRate: "92%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "pandian-hygro-desiccants-chennai",
    name: "Pandian",
    email: "pandian@hygrodesiccants.com",
    password: "7667314609",
    mobileNumber: "7667314609",
    companyName: "Hygro Desiccants",
    productOrService: "Container Desiccants",
    imgSrc: "/assets/desident.jpg",
    mainProducts: "Container Desiccants",
    altText: "Hygro Desiccants - Container Desiccants",
    years: "1 YRS",
    location: "Chennai, Tamil Nadu, India",
    tooltipText: "Hygro Desiccants, Container Desiccants, Chennai",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "30",
    responseRate: "85%",
    whatsappConfirmed: true,
  },

  // You can add more data objects here if needed
];

const PortableOfficeCabin = () => {
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
                  <Link to="#">Portable Office</Link>
                </li>
                <li>
                  <Link to="#">Modular Cabins</Link>
                </li>
                <li>
                  <Link to="#">Site Office Cabins</Link>
                </li>
                <li>
                  <Link to="#">Shipping Container Cabins</Link>
                </li>
                <li>
                  <Link to="#">Bunkhouses</Link>
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
                  <Link to="#">Uttar Pradesh</Link>
                </li>
                <li>
                  <Link to="#">Maharashtra</Link>
                </li>
                <li>
                  <Link to="#">Gujarat</Link>
                </li>
                <li>
                  <Link to="#">Delhi</Link>
                </li>
                <li>
                  <Link to="#">Tamil Nadu</Link>
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
                      src="/assets/office1.jpeg"
                      width={55}
                      height={55}
                      alt="Portable Office"
                    />
                  </figure>
                  <p className="title">Portable Office</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/office2.jpeg"
                      width={55}
                      height={55}
                      alt="Modular Cabins"
                    />
                  </figure>
                  <p className="title">Modular Cabins</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/office3.jpeg"
                      width={55}
                      height={55}
                      alt="Site Office Cabins"
                    />
                  </figure>
                  <p className="title">Site Office Cabins</p>
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

export default PortableOfficeCabin;
