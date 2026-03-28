import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const poultryFarmData = [
  {
    name: "Deepak Chauhan",
    email: "abc@gmail.com",
    mobileNumber: "9767686900",
    companyName: "Supreme Farm",
    productOrService: "Poultry Farm",
    imgSrc: "/assets/chi4.jpg", // Example image path, adjust as necessary
    altText: "Poultry Farm - Supreme Farm",
    mainProducts: "Chicken, Eggs, Poultry Feed",
    years: "1 YRS",
    location: "Punjab, India", // Update with actual location if available
    tooltipText: "789 Poultry Lane, Farm City, Punjab, India",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "450",
    responseRate: "92%",
  },
  {
    name: "Vivek Makkar",
    email: "abc@gmail.com",
    mobileNumber: "9594099310",
    companyName: "Mauli Agro Farm",
    productOrService: "Poultry Farm",
    imgSrc: "/assets/chi5.jpg",
    altText: "Poultry Farm - Mauli Agro Farm",
    mainProducts: "Chicken, Eggs, Poultry Feed",
    years: "1 YRS",
    location: "Maharashtra, India",
    tooltipText: "123 Agro Lane, Farm City, Maharashtra, India",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "450",
    responseRate: "92%",
  },
  {
    _id: "al-shifa-food-products-chennai",
    name: "Shahul Hameed",
    email: "alshifafoodproducts2023@gmail.com",
    password: "9442857620",
    mobileNumber: "9442857620",
    companyName: "Al-Shifa Food Products",
    productOrService: "Quail Eggs & Country Chicken Eggs",
    imgSrc: "/assets/egg1.jpg",
    mainProducts: "Quail Eggs & Country Chicken Eggs",
    altText: "Al-Shifa Food Products - Quail Eggs & Country Chicken Eggs",
    years: "1 YRS",
    location: "Chennai, Tamil Nadu, India",
    tooltipText:
      "Al-Shifa Food Products, Quail Eggs & Country Chicken Eggs, Chennai",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "35",
    responseRate: "87%",
    whatsappConfirmed: true,
  },
  {
    _id: "elzhadai-international-tuticorin",
    name: "Sam Victor Amburose.S",
    email: "samvrose1975@gmail.com",
    password: "8144439900",
    mobileNumber: "8144439900",
    companyName: "Elzhadai International",
    productOrService: "Fish Dry fish",
    imgSrc: "/assets/fish1.jpg",
    mainProducts: "Fish Dry fish",
    altText: "Elzhadai International - Fish Dry fish",
    years: "1 YRS",
    location: "Tuticorin, Tamil Nadu, India",
    tooltipText: "Elzhadai International, Fish Dry fish, Tuticorin",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "35",
    responseRate: "87%",
    whatsappConfirmed: true,
  },
  {
    _id: "vyankatesh-agro-satara",
    name: "Deepak",
    email: "deepak@gmail.com",
    password: "12345678",
    mobileNumber: "9604474079",
    companyName: "Vyankatesh Agro",
    productOrService: "Desi Chick",
    imgSrc: "/assets/desi-chik.jpg", // Placeholder image path
    mainProducts: "Desi Chick",
    altText: "Vyankatesh Agro - Desi Chick",
    years: "1 YRS", // Random value
    location: "Satara, Maharashtra, India",
    tooltipText: "Vyankatesh Agro, Desi Chick, Satara",
    rating: "4.5", // Random value
    ratingPercent: "90%", // Random value
    ratingsCount: "28", // Random value
    responseRate: "85%", // Random value
    whatsappConfirmed: true,
  },
  {
    _id: "juned-virani-veraval-gujarat",
    name: "Juned Virani",
    email: "Junedvirani@gmail.com",
    password: "Juned Virani",
    mobileNumber: "8200899943",
    companyName: "Juned Virani enterprises",
    statename: "Gujrat",
    cityname: "Veraval",
    productOrService: "Jawla Fish",
    imgSrc: "/assets/fish2.jpg",
    mainProducts: "Jawla Fish",
    altText: "Juned Virani Enterprises - Veraval",
    years: "1 YRS",
    location: "Veraval, Gujarat",
    tooltipText: "Juned Virani Enterprises, Veraval",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "60",
    responseRate: "95%",
    whatsappConfirmed: true,
  },
  {
    _id: "meer-ali-lucknow-uttar-pradesh",
    name: "Meer Ali",
    email: "meerali@gmail.com",
    password: "Meer ali",
    mobileNumber: "6386838214",
    companyName: "Meer Chikan Wale",
    statename: "Uttar Pradesh",
    cityname: "Lucknow",
    productOrService: "Lucknowi Chikankari Handicrafts",
    imgSrc: "/assets/Chicken4.jpg",
    mainProducts: "Lucknowi Chikankari Handicrafts",
    altText: "Meer Chikan Wale - Lucknowi Chikankari Handicrafts in Lucknow",
    years: "1 YRS",
    location: "Lucknow, Uttar Pradesh",
    tooltipText: "Meer Chikan Wale, Lucknow - Lucknowi Chikankari Handicrafts",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "300",
    responseRate: "93%",
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const PoultryFarmStore = () => {
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
                  <Link to="#">Chicken</Link>
                </li>
                <li>
                  <Link to="#">Eggs</Link>
                </li>
                <li>
                  <Link to="#">Poultry Feed</Link>
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
                <Link to="#">Punjab</Link>
              </li>
              <li>
                <Link to="#">Haryana</Link>
              </li>
              <li>
                <Link to="#">Uttar Pradesh</Link>
              </li>
              <li>
                <Link to="#">Maharashtra</Link>
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
                      src="/assets/chi1.jpg"
                      width={55}
                      height={55}
                      alt="Chicken"
                    />
                  </figure>
                  <p className="title">Chicken</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/chi2.jpg"
                      width={55}
                      height={55}
                      alt="Eggs"
                    />
                  </figure>
                  <p className="title">Eggs</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/chi3.jpg"
                      width={55}
                      height={55}
                      alt="Poultry Feed"
                    />
                  </figure>
                  <p className="title">Poultry Feed</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        {/* Classified listings */}
        <ul className="classfied-wrap">
          {poultryFarmData.map((item, index) => (
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

export default PoultryFarmStore;
