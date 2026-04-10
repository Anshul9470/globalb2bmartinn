import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const tshirtData = [
  {
    _id: "prateek-tyagi-talhata-ritika-enterprise",
    name: "Prateek Tyagi Talhata",
    email: "tyagiprateek9917@gmail.com",
    password: "Prateek9917!",
    mobileNumber: "9917580770",
    companyName: "Ritika Enterprise",
    statename: "Uttar Pradesh",
    cityname: "Talhata",
    productOrService: "T-Shirts, Shirts, All Kinds of Garments Manufacturing",
    imgSrc: "/assets/t-shirt10.jpg",
    mainProducts: "Garments Manufacturing",
    altText: "Ritika Enterprise - Garments Manufacturing in Talhata",
    years: "1 YRS",
    location: "Talhata, Uttar Pradesh",
    tooltipText:
      "Ritika Enterprise - T-Shirts, Shirts, and Garments Manufacturer in Talhata",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "320",
    responseRate: "93%",
    whatsappConfirmed: true,
  },
  {
    _id: "neelkanth-export-and-import-ahmedabad",
    name: "Rajkumar Kalia",
    email: "neelkanthexportandimport@gmail.com",
    password: "dham@12345",
    mobileNumber: "9974465536",
    companyName: "NEELKANTH EXPORT AND IMPORT",
    productOrService: "All Kind of T-shirt Manufacturer",
    imgSrc: "/assets/neelkanth.jpg", // Placeholder image path
    mainProducts: "T-shirts",
    altText: "NEELKANTH EXPORT AND IMPORT - All Kind of T-shirt Manufacturer",
    years: "1 YRS", // Random value
    location: "Ahmedabad, Gujarat, India",
    tooltipText: "NEELKANTH EXPORT AND IMPORT, T-shirts, Ahmedabad",
    rating: "4.6", // Random value
    ratingPercent: "92%", // Random value
    ratingsCount: "40", // Random value
    responseRate: "88%", // Random value
    whatsappConfirmed: true,
  },
  {
    _id: "pujan-vnkr-gujarat",
    name: "Pujan Vnkr",
    email: "pujanvnkr@gmail.com",
    password: "12345678",
    mobileNumber: "9313642136",
    companyName: "Pujan Vnkr",
    statename: "",
    cityname: "Gujarat",
    productOrService: "T-shirt",
    imgSrc: "/assets/tshirt10.jpg",
    mainProducts: "T-shirt",
    altText: "Pujan Vnkr - Gujarat",
    years: "1 YRS",
    location: "Gujarat",
    tooltipText: "Pujan Vnkr, Gujarat",
    rating: "4.2",
    ratingPercent: "85%",
    ratingsCount: "45",
    responseRate: "88%",
    whatsappConfirmed: false,
  },

  {
    name: "Rodinliana",
    email: "Rodinliana@gmail.com",
    mobileNumber: "8787521346",
    companyName: "Vakul",
    productOrService: "T-shirts Manufacture",
    imgSrc: "/assets/tshirt1.jpeg",
    altText: "T-shirts Manufacture - Vakul",
    mainProducts: "T-shirts, Polo Shirts, Hoodies, Casual Wear",
    years: "1 YRS",
    location: "Bengaluru, India",
    tooltipText: "456 Apparel Avenue, Fashion District, Bengaluru, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "350",
    responseRate: "89%",
  },
  {
    name: "Vivek Jitenderbhai Jivani",
    email: "viviek@gmail.com",
    mobileNumber: "9313706005",
    companyName: "JB Overseas",
    productOrService: "Designer Tshirts",
    imgSrc: "/assets/gr8.jpeg",
    altText: "Designer Tshirts - JB Overseas",
    mainProducts: "Designer Tshirts, Casual Wear, Polo Shirts",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "123 Fashion Street, Trend Hub, Mumbai, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "450",
    responseRate: "92%",
  },
  {
    _id: "u7894561230abc5678",
    name: "Sanmedha",
    email: "sanmedha@gmail.com",
    password: "8375000867",
    mobileNumber: "8669084312",
    companyName: "Usha Garments",
    productOrService: "T-Shirts",
    imgSrc: "/assets/tshirt3.jpeg",
    mainProducts: "T-Shirts, Casual Wear, Garments",
    altText: "Usha Garments - T-Shirts",
    years: "1 YRS",
    location: "Solapur, Maharashtra, India",
    tooltipText: "Usha Garments, Solapur",
    rating: "4.5",
    ratingPercent: "89%",
    ratingsCount: "110",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "u8904561230abc5678",
    name: "Shahab Alam",
    email: "shahabalam@gmail.com",
    password: "8375000867",
    mobileNumber: "9990895759",
    companyName: "Corporation T-Shirt Manufacturing",
    productOrService: "T-Shirts",
    imgSrc: "/assets/tshirt4.jpeg",
    mainProducts: "T-Shirts, Casual Wear, Apparel",
    altText: "Corporation T-Shirt Manufacturing - T-Shirts",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "Corporation T-Shirt Manufacturing, Delhi",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "150",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
  {
    _id: "vastonline-opc-pvt-ltd-chennai",
    name: "Vasudevan V",
    email: "vasudevanrsi@gmail.com",
    password: "8939077432",
    mobileNumber: "8939077432",
    companyName: "Vastonline OPC Pvt Ltd",
    productOrService: "T-shirts",
    imgSrc: "/assets/tshirt5.jpg",
    mainProducts: "T-shirts",
    altText: "Vastonline OPC Pvt Ltd - T-shirts",
    years: "1 YRS",
    location: "Chennai, Tamil Nadu, India",
    tooltipText: "Vastonline OPC Pvt Ltd, T-shirts, Chennai",
    rating: "4.0",
    ratingPercent: "80%",
    ratingsCount: "30",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    _id: "shri-sairam-tex-tirupur",
    name: "Perumal C",
    email: "shrisairam96@gmail.com",
    password: "8807048548",
    mobileNumber: "8807048548",
    companyName: "SHRI SAIRAM TEX",
    productOrService: "Clothings and Apparel T shirt Trackpant",
    imgSrc: "/assets/tshirt6.jpg",
    mainProducts: "T shirt, Trackpant",
    altText: "SHRI SAIRAM TEX - Clothings and Apparel",
    years: "1 YRS",
    location: "Tirupur, Tamil Nadu, India",
    tooltipText: "SHRI SAIRAM TEX, Clothings and Apparel, Tirupur",
    rating: "4.4",
    ratingPercent: "88%",
    ratingsCount: "35",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "shiva-enterprises-pune",
    name: "Dharnjay",
    email: "dharnjay12@gmail.com",
    password: "123456789",
    mobileNumber: "9330672442",
    companyName: "Shiva Enterprises",
    productOrService: "T-shirt Printing",
    imgSrc: "/assets/t-shit.jpg",
    mainProducts: "T-shirt Printing",
    altText: "Shiva Enterprises - T-shirt Printing",
    years: "1 YRS",
    location: "Mumbai, Pune, India",
    tooltipText: "Shiva Enterprises, T-shirt Printing, Mumbai, Pune",
    rating: "4.4",
    ratingPercent: "88%",
    ratingsCount: "41",
    responseRate: "79%",
    whatsappConfirmed: true,
  },
  {
    _id: "raja-tirupur-tamilnadu",
    name: "Raja",
    email: "9786413575@gmail.com",
    password: "9786413575",
    mobileNumber: "9786413575",
    companyName: "Product Name T Shirt",
    statename: "Tamilnadu",
    cityname: "Tirupur",
    productOrService: "Tshirt",
    imgSrc: "/assets/t-shirt8.jpg",
    mainProducts: "T-shirts",
    altText: "Product Name T Shirt - Tirupur",
    years: "1 YRS",
    location: "Tirupur, Tamilnadu",
    tooltipText: "Product Name T Shirt, Tirupur",
    rating: "4.0",
    ratingPercent: "80%",
    ratingsCount: "110",
    responseRate: "85%",
    whatsappConfirmed: true,
  },

  // Additional data can be added if needed.
];

const TShirts = () => {
  return (
    <div className="main-box">
      <aside>
        <div className="flt-box-wrap">
          <div className="flt-box mb-0 flt-head">Filters By</div>
          <div className="flt-box bdrt-0">
            <p className="flt-title">T-shirt Categories</p>
            <div className="flt-content">
              <ul className="flt-list cust-scroll">
                <li>
                  <Link to="#">T-shirts</Link>
                </li>
                <li>
                  <Link to="#">Polo Shirts</Link>
                </li>
                <li>
                  <Link to="#">Hoodies</Link>
                </li>
                <li>
                  <Link to="#">Casual Wear</Link>
                </li>
                <li>
                  <Link to="#">Sportswear</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flt-box">
            <p className="flt-title">By Location</p>
            <div className="flt-content">
              <div className="flt-search">
                <input
                  type="text"
                  name="location_id"
                  placeholder="Search Location"
                  id="location-search-input"
                />
              </div>
              <ul className="flt-list cust-scroll" id="location-lists">
                <li>
                  <Link to="#">All India</Link>
                </li>
                <li>
                  <Link to="#">Bengaluru</Link>
                </li>
                <li>
                  <Link to="#">Mumbai</Link>
                </li>
                <li>
                  <Link to="#">Delhi</Link>
                </li>
                <li>
                  <Link to="#">Chennai</Link>
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
                      src="/assets/tshirt2.jpeg"
                      width={55}
                      height={55}
                      alt="T-shirts"
                    />
                  </figure>
                  <p className="title">T-shirts</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/tshirt1.jpeg"
                      width={55}
                      height={55}
                      alt="Polo Shirts"
                    />
                  </figure>
                  <p className="title">Polo Shirts</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/hoddies1.jpeg"
                      width={55}
                      height={55}
                      alt="Hoodies"
                    />
                  </figure>
                  <p className="title">Hoodies</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/casual ware.jpeg"
                      width={55}
                      height={55}
                      alt="Casual Wear"
                    />
                  </figure>
                  <p className="title">Casual Wear</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/sport1.jpeg"
                      width={55}
                      height={55}
                      alt="Sportswear"
                    />
                  </figure>
                  <p className="title">Sportswear</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <ul className="classfied-wrap">
          {tshirtData.map((item, index) => (
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

export default TShirts;
