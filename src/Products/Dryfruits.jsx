import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    name: "Adil Qadri",
    email: "lidersaffron1@gmail.com",
    mobileNumber: "9622511016",
    companyName: "LIDDER ENTERPRISES",
    productOrService: "Dry fruits manufacturers",
    imgSrc: "/assets/dryfruits.jpeg", // Example image path, adjust as necessary
    altText: "Dry Fruits - LIDDER ENTERPRISES",
    mainProducts: "Almonds, Walnuts, Cashews, Pistachios",
    years: "1 YRS",
    location: "Srinagar, India", // Update with actual location if available
    tooltipText: "123 Dry Fruit Lane, Nut Zone, Srinagar, India",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "150",
    responseRate: "95%",
  },
  {
    _id: "s345678901abcdef234576", // Random unique ID
    name: "Varad Ramesh Higmire",
    email: "varadrh7751@gmail.com",
    password: "varad@123",
    mobileNumber: "7276897751",
    companyName: "Varad Sales Corporation",
    productOrService: "Brown Raisins",
    imgSrc: "/assets/brownraisins1.jpeg", // Example image path
    mainProducts: "Brown Raisins, Dry Fruits",
    altText: "Brown Raisins - Varad Sales Corporation",
    years: "1 YRS",
    location: "Nashik, India",
    tooltipText: "Shop 12, Dry Fruit Market, Nashik, India",
    rating: "4.3",
    ratingPercent: "86%",
    ratingsCount: "48",
    responseRate: "80%",
    whatsappConfirmed: false,
  },
  {
    _id: "k1234567890l123456",
    name: "Raj Gupta",
    email: "rajgupta123@gmail.com",
    password: "raj12345",
    mobileNumber: "8953704339",
    companyName: "Shyam Enterprises",
    productOrService: "Groundnut",
    imgSrc: "/assets/peanut.jpeg",
    mainProducts: "Groundnut, Peanuts, Nut Kernels",
    altText: "Groundnut - Shyam Enterprises",
    years: "1 YRS",
    location: "Rajkot, Gujarat, India",
    tooltipText: "Bhaktinagar, Rajkot, Gujarat, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "90",
    responseRate: "89%",
    whatsappConfirmed: true,
  },
  {
    _id: "l2345678901m234567",
    name: "Tuka Ram More",
    email: "tukaram123@gmail.com",
    password: "tuka12345",
    mobileNumber: "7219278323",
    companyName: "Honeybijapur Raisins",
    productOrService: "Groundnut",
    imgSrc: "/assets/groundnut.jpeg",
    mainProducts: "Groundnut, Raisins, Dry Fruits",
    altText: "Groundnut - Honeybijapur Raisins",
    years: "1 YRS",
    location: "Bijapur, Karnataka, India",
    tooltipText: "Market Road, Bijapur, Karnataka, India",
    rating: "4.6",
    ratingPercent: "93%",
    ratingsCount: "85",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
  {
    _id: "n4567890123o456789",
    name: "Bhautik Patel",
    email: "bhautik123@gmail.com",
    password: "bhautik12345",
    mobileNumber: "7863022901",
    companyName: "TGS IMPEX",
    productOrService: "Groundnut",
    imgSrc: "/assets/grondnut.jpeg",
    mainProducts: "Groundnut, Peanuts, Nut Kernels",
    altText: "Groundnut - TGS IMPEX",
    years: "1 YRS",
    location: "Ahmedabad, Gujarat, India",
    tooltipText: "Vastral, Ahmedabad, Gujarat, India",
    rating: "4.5",
    ratingPercent: "91%",
    ratingsCount: "70",
    responseRate: "87%",
    whatsappConfirmed: true,
  },
  {
    _id: "z1y2x3w4v5u6t7s8r9q0p1o2", // Random unique ID
    name: "Akash Kandula",
    email: "bagyesh123456789@gmail.com",
    mobileNumber: "8919156078",
    companyName: "Akash Enterprise",
    productOrService: "Dry Fruits",
    imgSrc: "/assets/dry5.jpeg", // Example image path
    mainProducts: "Almonds, Cashews, Pistachios, Raisins, Dates",
    altText: "Dry Fruits - Akash Enterprise",
    years: "1 YRS",
    location: "Hyderabad, India",
    tooltipText: "12 Dry Fruit Lane, Hyderabad, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "60",
    responseRate: "93%",
    whatsappConfirmed: true,
  },
  {
    name: "Shonan Pagare",
    email: "ShonanPagare@gmail.com",
    password: "12345678",
    mobileNumber: "9773816972",
    companyName: "Shree Varad Vinayak Traders",
    productOrService: "Raisins",
    imgSrc: "/assets/resin1.jpeg",
    mainProducts: "Raisins, Dried Fruits",
    altText: "Shree Varad Vinayak Traders - Raisins",
    years: "1 YRS",
    location: "Pune, Maharashtra, India",
    tooltipText: "Shree Varad Vinayak Traders, Pune",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "80",
    responseRate: "85%",
    whatsappConfirmed: false,
  },
  {
    name: "Sanjay",
    email: "bamnev22@gmail.com",
    password: "sanjay1234",
    mobileNumber: "8692946644",
    companyName: "Ashirwad Agro Products",
    productOrService: "Cashew",
    imgSrc: "/assets/cashew.jpeg",
    mainProducts: "Cashew Nuts, Dried Fruits",
    altText: "Ashirwad Agro Products - Cashew",
    years: "1 YRS",
    location: "Pune, Mumbai, India",
    tooltipText: "Ashirwad Agro Products, Pune",
    rating: "4.2",
    ratingPercent: "85%",
    ratingsCount: "50",
    responseRate: "80%",
    whatsappConfirmed: false,
  },
  {
    _id: "ridhhimaan-trading-pune",
    name: "Tanaji Jadhav",
    email: "tanajijadhav36@gmail.com",
    password: "Tanaji Jadhav",
    mobileNumber: "9096350203",
    companyName: "Ridhhimaan Trading",
    productOrService: "Raisins",
    imgSrc: "/assets/raisins.jpg",
    mainProducts: "Raisins",
    altText: "Ridhhimaan Trading - Raisins",
    years: "1 YRS",
    location: "Pune, Maharashtra, India",
    tooltipText: "Ridhhimaan Trading, Raisins, Pune",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "15",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
  {
    _id: "appadurai-dhanvika-cashews-cuddalore",
    name: "Appadurai",
    email: "appusudha2014@gmail.com",
    password: "7200836184",
    mobileNumber: "7200836184",
    companyName: "Dhanvika Cashews",
    productOrService: "Cashews",
    imgSrc: "/assets/cashew1.jpg",
    mainProducts: "Cashews",
    altText: "Dhanvika Cashews - Cashews",
    years: "1 YRS",
    location: "Cuddalore, Tamil Nadu, India",
    tooltipText: "Dhanvika Cashews, Cashews, Cuddalore",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "30",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "singatavel-a-om-srvanabava-exporters-chennai",
    name: "singatavel.A",
    email: "singara1976@gmail.com",
    password: "8838026735",
    mobileNumber: "8838026735",
    companyName: "om srvanabava exporters",
    productOrService: "peanut",
    imgSrc: "/assets/peanut1.jpg",
    mainProducts: "peanut",
    altText: "om srvanabava exporters - peanut",
    years: "1 YRS",
    location: "Chennai, Tamil Nadu, India",
    tooltipText: "om srvanabava exporters, peanut, Chennai",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "30",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "sanidhya-international-west-bengal",
    name: "Kirtan Ranpara",
    email: "KirtanRanpara@gmail.com",
    password: "12345678",
    mobileNumber: "6351178383",
    companyName: "Sanidhya International",
    productOrService: "Dry Fruits",
    imgSrc: "/assets/dry6.jpg",
    mainProducts: "Dry Fruits",
    altText: "Sanidhya International - Dry Fruits",
    years: "1 YRS",
    location: "West Bengal, India",
    tooltipText: "Sanidhya International, Dry Fruits, West Bengal",
    rating: "4.6",
    ratingPercent: "93%",
    ratingsCount: "28",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "sanjay-mumbai",
    name: "Sanjay",
    email: "sanjay@gmail.com",
    password: "12345678",
    mobileNumber: "8692946644",
    companyName: "Cashew Marketing",
    statename: "",
    cityname: "Mumbai",
    productOrService: "Cashew",
    imgSrc: "/assets/cashew2.jpg",
    mainProducts: "Cashew",
    altText: "Cashew Marketing - Mumbai",
    years: "1 YRS",
    location: "Mumbai",
    tooltipText: "Cashew Marketing, Mumbai",
    rating: "4.2",
    ratingPercent: "84%",
    ratingsCount: "150",
    responseRate: "91%",
    whatsappConfirmed: true,
  },
  {
    _id: "jayabalan-deivasigamani-cuddalore",
    name: "Mr. Jayabalan Deivasigamani",
    email: "sricashews23@gmail.com",
    password: "9787434142",
    mobileNumber: "9787434142",
    companyName: "Sri Cashews",
    statename: "Tamil Nadu",
    cityname: "Cuddalore",
    productOrService: "Cashew Nut",
    imgSrc: "/assets/cashew3.jpg",
    mainProducts: "Premium Cashew Nuts, Processed Cashew Kernels",
    altText: "Sri Cashews - Supplier of Premium Cashew Nuts in Cuddalore",
    years: "1 YRS",
    location: "Cuddalore, Tamil Nadu, India",
    tooltipText: "Sri Cashews - Reliable Supplier of Cashew Nuts",
    rating: "4.8",
    ratingPercent: "94%",
    ratingsCount: "250",
    responseRate: "89%",
    whatsappConfirmed: true,
  },
  {
    _id: "selva-kumar-sakthivel-cuddalore",
    name: "Mr. Selva Kumar Sakthivel",
    email: "ramkumar1692007@gmail.com",
    password: "9789395518",
    mobileNumber: "9789395518",
    companyName: "SSR Cashews",
    statename: "Tamil Nadu",
    cityname: "Cuddalore",
    productOrService:
      "Cashew Nuts, W320 Cashew Nuts, W240 Cashew Nuts, Pathai Cashew Nuts",
    imgSrc: "/assets/cashew4.jpg",
    mainProducts: "High-Quality Cashew Nuts, W320, W240, Pathai Cashews",
    altText: "SSR Cashews - Leading Cashew Nuts Supplier in Cuddalore",
    years: "1 YRS",
    location: "Cuddalore, Tamil Nadu, India",
    tooltipText: "SSR Cashews - Premium Cashew Nuts Supplier",
    rating: "4.9",
    ratingPercent: "96%",
    ratingsCount: "320",
    responseRate: "91%",
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const DryFruitsManufacturerStore = () => {
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
                  <Link to="#">Almonds</Link>
                </li>
                <li>
                  <Link to="#">Walnuts</Link>
                </li>
                <li>
                  <Link to="#">Cashews</Link>
                </li>
                <li>
                  <Link to="#">Pistachios</Link>
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
                <Link to="#">Tamil Nadu</Link>
              </li>
              <li>
                <Link to="#">Karnataka</Link>
              </li>
              <li>
                <Link to="#">Rajasthan</Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      {/* Main section for classified listings */}
      <main>
        <section className="section">
          <p className="sect-title">Explore by Categories</p>
          {/* Categories section */}
          <div className="horprd expcatg" id="expcatg">
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/dry1.jpg"
                      width={55}
                      height={55}
                      alt="Almonds"
                    />
                  </figure>
                  <p className="title">Almonds</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/dry2.jpg"
                      width={55}
                      height={55}
                      alt="Walnuts"
                    />
                  </figure>
                  <p className="title">Walnuts</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/dry3.jpg"
                      width={55}
                      height={55}
                      alt="Cashews"
                    />
                  </figure>
                  <p className="title">Cashews</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/dry4.jpg"
                      width={55}
                      height={55}
                      alt="Pistachios"
                    />
                  </figure>
                  <p className="title">Pistachios</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        {/* Classified listings */}
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

export default DryFruitsManufacturerStore;
