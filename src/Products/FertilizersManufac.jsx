import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const agricultureFertilizersData = [
  {
    name: "Alok Alok",
    email: "Bkagricultural@gmail.com",
    mobileNumber: "9140498214",
    companyName: "Bkagricultural",
    productOrService: "Humic Agriculture Bio Fertilizers",
    imgSrc: "/assets/fer4.jpg", // Example image path, adjust as necessary
    altText: "Humic Agriculture Bio Fertilizers - Bkagricultural",
    mainProducts: "Humic Acid, Bio Fertilizers, Organic Plant Growth Promoters",
    years: "1 YRS",
    location: "Delhi, India", // Update with actual location if available
    tooltipText: "123 Organic Street, Bio Farm City, Delhi, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "300",
    responseRate: "87%",
  },
  {
    name: "Arun Kumar Kansal",
    email: "AMBIKABIOCHEM@GMAIL.COM",
    mobileNumber: "9636055259",
    companyName: "AMBIKA BIOCHEM",
    productOrService: "Fertilizer and Agri Products",
    imgSrc: "/assets/fer5.jpg",
    altText: "Fertilizer and Agri Products - AMBIKA BIOCHEM",
    mainProducts: "Organic Fertilizers, Agricultural Chemicals, Crop Nutrients",
    years: "1 YRS",
    location: "Uttarakhand, India",
    tooltipText: "123 Agri Lane, Farm City, Uttarakhand, India",
    rating: "4.9",
    ratingPercent: "98%",
    ratingsCount: "500",
    responseRate: "95%",
  },
  {
    _id: "e345678901234abcdef0123", // Random unique ID
    name: "MANOJ KUMAR",
    email: "MANOJKUMAR@GMAIL.COM",
    mobileNumber: "9400351275",
    companyName: "Mohanjali Herbal Trading Private Limited",
    productOrService: "Bio Organic Manure",
    imgSrc: "/assets/manuer.jpeg", // Example image path
    mainProducts:
      "Bio Organic Manure, Organic Fertilizers, Natural Soil Enhancers",
    altText: "Bio Organic Manure - Mohanjali Herbal Trading Private Limited",
    years: "1 YRS",
    location: "Pune, India",
    tooltipText: "456 Eco Avenue, Pune, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "80",
    responseRate: "95%",
    whatsappConfirmed: true,
  },
  {
    name: "Govind Matkar",
    email: "GovindMatkar@gmail.com",
    password: "12345678",
    mobileNumber: "9545759272",
    companyName: "Pallavi Enterprise/varmicompost fertilizer and varmibed",
    productOrService: "Fertilizer",
    imgSrc: "/assets/fer1.jpg",
    mainProducts: "Vermicompost Fertilizer, Vermibed, Organic Manure",
    altText: "Pallavi Enterprise - Vermicompost Fertilizer",
    years: "1 YRS",
    location: "Maharashtra, India",
    tooltipText: "Pallavi Enterprise, Maharashtra",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "70",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    name: "Sharad Bhange",
    email: "abc@gmail.com",
    password: "sharad@123",
    mobileNumber: "9890852351",
    companyName: "Balkrushna Biotech Pvt Ltd",
    productOrService: "Jivamrut Slurry",
    imgSrc: "/assets/slurry1.jpeg",
    mainProducts: "Jivamrut Slurry, Organic Fertilizers, Plant Nutrients",
    altText: "Balkrushna Biotech Pvt Ltd - Jivamrut Slurry",
    years: "1 YRS",
    location: "Newasa, Maharashtra, India",
    tooltipText: "Balkrushna Biotech Pvt Ltd, Newasa",
    rating: "4.7",
    ratingPercent: "92%",
    ratingsCount: "78",
    responseRate: "85%",
    whatsappConfirmed: false,
  },
  {
    _id: "samruddhi-agro-solapur",
    name: "Ramzan Sheikh",
    email: "abc@gmail.com",
    password: "ramzan@123",
    mobileNumber: "7219332578",
    companyName: "Samruddhi Agro",
    productOrService: "Chemical Fertilizers",
    imgSrc: "/assets/ferti.jpg",
    mainProducts: "Chemical Fertilizers",
    altText: "Samruddhi Agro - Chemical Fertilizers",
    years: "1 YRS",
    location: "Solapur, Maharashtra, India",
    tooltipText: "Samruddhi Agro, Chemical Fertilizers, Solapur",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "35",
    responseRate: "89%",
    whatsappConfirmed: true,
  },
  {
    _id: "sri-thai-bio-organic-centre-coimbatore",
    name: "Nandha Kumar",
    email: "srithaiorganicscentre@gmail.com",
    password: "8940964540",
    mobileNumber: "8940964540",
    companyName: "Sri Thai Bio-Organic Centre",
    statename: "Tamil Nadu",
    cityname: "Coimbatore",
    productOrService: "Bio Fertilizer",
    imgSrc: "/assets/bio-organic.jpg",
    mainProducts: "Bio Fertilizers, Organic Manures, Soil Enhancers",
    altText: "Sri Thai Bio-Organic Centre - Bio Fertilizer Manufacturer",
    years: "1 YRS",
    location: "Coimbatore, Tamil Nadu, India",
    tooltipText:
      "Sri Thai Bio-Organic Centre - Sustainable Agriculture Solutions",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "250",
    responseRate: "95%",
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const HumicFertilizersStore = () => {
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
                  <Link to="#">Humic Acid</Link>
                </li>
                <li>
                  <Link to="#">Bio Fertilizers</Link>
                </li>
                <li>
                  <Link to="#">Organic Plant Growth Promoters</Link>
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
                      src="/assets/fer1.jpg"
                      width={55}
                      height={55}
                      alt="Humic Acid"
                    />
                  </figure>
                  <p className="title">Humic Acid</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/fer2.jpg"
                      width={55}
                      height={55}
                      alt="Bio Fertilizers"
                    />
                  </figure>
                  <p className="title">Bio Fertilizers</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/fer3.jpg"
                      width={55}
                      height={55}
                      alt="Organic Plant Growth Promoters"
                    />
                  </figure>
                  <p className="title">Organic Plant Growth Promoters</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        {/* Classified listings */}
        <ul className="classfied-wrap">
          {agricultureFertilizersData.map((item, index) => (
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

export default HumicFertilizersStore;
