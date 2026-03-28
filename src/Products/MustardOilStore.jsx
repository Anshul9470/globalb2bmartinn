import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    name: "Krishan Singh",
    email: "krishansingh@gmail.com",
    mobileNumber: "9829014808",
    companyName: "Krishan Singh",
    productOrService: "Mustard Oil",
    imgSrc: "/assets/oils.jpeg", // Example image path, adjust as necessary
    altText: "Mustard Oil - Krishan Singh",
    mainProducts: "Mustard Oil, Pure Mustard Oil, Cold Pressed Mustard Oil",
    years: "1 YRS",
    location: "Delhi, India", // Update with actual location if available
    tooltipText: "Delhi, India",
    rating: "4.2",
    ratingPercent: "85%",
    ratingsCount: "60",
    responseRate: "90%",
    catalogLink: "/krishan-singh", // Path for redirection
  },
  {
    _id: "a1234567890wxyz5682",
    name: "Dhamani Enterprises",
    email: "dhamanieterprises@gmail.com",
    password: "12345678",
    mobileNumber: "9414057258",
    companyName: "Dhamani Enterprises",
    productOrService: "Oil",
    imgSrc: "/assets/oil7.jpeg", // Placeholder for image path
    mainProducts: "Edible Oils, Industrial Oils, Specialty Oils",
    altText: "Oil - Dhamani Enterprises",
    years: "1 YRS", // Placeholder for years of experience
    location: "Mumbai, India", // Placeholder for location
    tooltipText: "Dhamani Enterprises, Mumbai, India",
    rating: "4.2", // Placeholder for rating
    ratingPercent: "84%", // Placeholder for rating percentage
    ratingsCount: "80", // Placeholder for ratings count
    responseRate: "89%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "western-info-tech-kudal",
    name: "Ibrahim Shaikh",
    email: "westerninfotech@gmail.com",
    password: "Ibrahim Shaikh",
    mobileNumber: "8975524939",
    companyName: "Western Info Tech",
    statename: "Maharashtra",
    cityname: "Kudal",
    productOrService: "Coconut Oil, Cashew",
    imgSrc: "/assets/coco-oil.jpg",
    mainProducts: "Coconut Oil, Cashew",
    altText: "Western Info Tech - Kudal, Maharashtra",
    years: "1 YRS",
    location: "Kudal, Maharashtra",
    tooltipText: "Western Info Tech, Kudal",
    rating: "4.3",
    ratingPercent: "86%",
    ratingsCount: "95",
    responseRate: "89%",
    whatsappConfirmed: true,
  },

  {
    _id: "a1234567890wxyz5685",
    name: "SHREE HIRALAL TEL UDHYOG",
    email: "shreehiralal@gmail.com",
    password: "12345678",
    mobileNumber: "9772096096",
    companyName: "SHREE HIRALAL TEL UDHYOG",
    productOrService: "Oil",
    imgSrc: "/assets/oils2.jpeg", // Placeholder for image path
    mainProducts: "Cooking Oil, Edible Oil",
    altText: "Oil - SHREE HIRALAL TEL UDHYOG",
    years: "1 YRS", // Placeholder for years of experience
    location: "India", // Placeholder for location
    tooltipText: "SHREE HIRALAL TEL UDHYOG, India",
    rating: "4.5", // Placeholder for rating
    ratingPercent: "90%", // Placeholder for rating percentage
    ratingsCount: "120", // Placeholder for ratings count
    responseRate: "92%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "g3h4i5j6k7l8m9n0o1p2q3r4", // Random unique ID
    name: "Manish",
    email: "manish@gmail.com",
    mobileNumber: "8160586992",
    companyName: "Kanakdhara Enterprises",
    productOrService: "Oil",
    imgSrc: "/assets/oil4.jpeg", // Example image path
    mainProducts: "Edible Oils, Cooking Oils, Essential Oils, Organic Oils",
    altText: "Oil - Kanakdhara Enterprises",
    years: "1 YRS",
    location: "Pune, India",
    tooltipText: "12 Oil Avenue, Pune, India",
    rating: "4.4",
    ratingPercent: "89%",
    ratingsCount: "45",
    responseRate: "91%",
    whatsappConfirmed: true,
  },
  {
    name: "Pravin",
    email: "gpravinexport@gmail.com",
    password: "pravinpravin",
    mobileNumber: "9427568281",
    companyName: "G.PRAVIN EXPORT",
    productOrService: "Grocery, Cooking Oil",
    imgSrc: "/assets/oil3.jpeg",
    mainProducts: "Grocery, Cooking Oil, Spices",
    altText: "G.PRAVIN EXPORT - Grocery and Cooking Oil",
    years: "1 YRS",
    location: "Surat, Gujarat, India",
    tooltipText: "G.PRAVIN EXPORT, Surat",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "85",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
  {
    _id: "salima-al-noor-traders-hosur",
    name: "salima",
    email: "hari28tvl@gmail.com",
    password: "9489289786",
    mobileNumber: "9489289786",
    companyName: "Al noor traders",
    productOrService: "vegetable, edible oil",
    imgSrc: "/assets/oil10.jpg",
    mainProducts: "vegetable, edible oil",
    altText: "Al noor traders - vegetable, edible oil",
    years: "1 YRS",
    location: "Hosur, Tamil Nadu, India",
    tooltipText: "Al noor traders, vegetable, edible oil, Hosur",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "30",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "stalindurai-madhu-hosur-peppermint-oil",
    name: "Stalindurai Madhu",
    email: "StalinduraiMadhu@gmail.com",
    password: "12345678",
    mobileNumber: "8438998113",
    companyName: "Stalindurai Madhu",
    statename: "Tamil Nadu",
    cityname: "Hosur",
    productOrService: "Peppermint Oil",
    imgSrc: "/assets/peppermint-oil.jpg",
    mainProducts: "Peppermint Oil",
    altText: "Stalindurai Madhu - Peppermint Oil Supplier in Hosur",
    years: "1 YRS",
    location: "Hosur, Tamil Nadu",
    tooltipText: "Stalindurai Madhu - Quality Peppermint Oil Supplier",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "210",
    responseRate: "90%",
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const MustardOilStore = () => {
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
                  <Link to="#">Mustard Oil</Link>
                </li>
                <li>
                  <Link to="#">Edible Oils</Link>
                </li>
                <li>
                  <Link to="#">Cooking Oils</Link>
                </li>
                <li>
                  <Link to="#">Cold Pressed Oils</Link>
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
                <Link to="#">Delhi</Link>
              </li>
              <li>
                <Link to="#">Haryana</Link>
              </li>
              <li>
                <Link to="#">Punjab</Link>
              </li>
              <li>
                <Link to="#">Uttar Pradesh</Link>
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
                      src="/assets/mus1.jpeg"
                      width={55}
                      height={55}
                      alt="Mustard Oil"
                    />
                  </figure>
                  <p className="title">Mustard Oil</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/oil2.jpeg"
                      width={55}
                      height={55}
                      alt="Edible Oils"
                    />
                  </figure>
                  <p className="title">Edible Oils</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/oil3.jpeg"
                      width={55}
                      height={55}
                      alt="Cooking Oils"
                    />
                  </figure>
                  <p className="title">Cooking Oils</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/oil5.jpeg"
                      width={55}
                      height={55}
                      alt="Cold Pressed Oils"
                    />
                  </figure>
                  <p className="title">Cold Pressed Oils</p>
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

export default MustardOilStore;
