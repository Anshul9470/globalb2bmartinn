import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    _id: "adhvik-singh-jaipur-rajasthan",
    name: "Adhvik Singh",
    email: "venushnhc@gmail.com",
    password: "RYOT9A24kk3211@VH#$",
    mobileNumber: "7877926538",
    companyName: "Venus Herbal and Healthcare",
    statename: "Rajasthan",
    cityname: "Jaipur",
    productOrService:
      "Since 1890, we are working to Promote Health, Beauty & Wellness",
    imgSrc: "/assets/herbal-beauty.jpg",
    mainProducts: "Health, Beauty & Wellness Products",
    altText: "Venus Herbal and Healthcare - Jaipur",
    years: "1 YRS",
    location: "Jaipur, Rajasthan",
    tooltipText: "Venus Herbal and Healthcare, Jaipur",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "320",
    responseRate: "92%",
    whatsappConfirmed: true,
  },
  {
    name: "neha",
    email: "neha1234@gmail.com",
    password: "neha12345",
    mobileNumber: "8800705292",
    companyName: "Trnatva Beauty",
    productOrService: "Skincare, Haircare and Plant Based Make",
    imgSrc: "/assets/beauty1.jpeg", // Provide the correct image path
    altText: "Skincare Products - Trnatva Beauty",
    mainProducts: "Skincare, Haircare, Plant Based Makeup",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "123 Beauty Lane, New Delhi, India",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "120",
    responseRate: "90%",
  },
  {
    name: "Jay",
    email: "jay123@gmail.com",
    password: "jay12345",
    mobileNumber: "9773843100",
    companyName: "Milap Cosmetics",
    productOrService: "Cosmetics",
    imgSrc: "/assets/beauty7.jpeg", // Provide the correct image path
    mainProducts: "Lipsticks, Eyeliners, Foundation, Makeup Brushes",
    altText: "Cosmetics - Milap Cosmetics",
    years: "1 YR",
    location: "Delhi, India",
    tooltipText: "Location details not provided",
    rating: "88%",
    ratingPercent: "96%",
    ratingsCount: "150",
    responseRate: "95%",
  },
  {
    name: "Dhiraj",
    email: "Dhiraj123@gmail.com",
    password: "Dhiraj123",
    mobileNumber: "9911555691",
    companyName: "Pink Root",
    productOrService: "Cosmetic & Skincare",
    imgSrc: "/assets/beauty8.jpeg", // Provide the correct image path
    mainProducts: "Face Creams, Moisturizers, Serums, Face Masks",
    altText: "Cosmetic & Skincare - Pink Root",
    years: "1 YR",
    location: "Mumbai, India",
    tooltipText: "Location details not provided",
    rating: "86%",
    ratingPercent: "97%",
    ratingsCount: "180",
    responseRate: "94%",
  },
  {
    _id: "s345678901abcdef234571", // Random unique ID
    name: "Mahesh Patel",
    email: "maheshpatel@gmail.com",
    password: "mahesh@123",
    mobileNumber: "9725165308",
    companyName: "Ranchi Enterprise",
    productOrService: "Coating Powder & Aerosol Spray",
    imgSrc: "/assets/spary.jpg", // Example image path
    mainProducts: "Coating Powders, Aerosol Sprays",
    altText: "Coating Powder & Aerosol Spray - Ranchi Enterprise",
    years: "1 YRS",
    location: "Ranchi, India",
    tooltipText: "Unit 8, Industrial Estate, Ranchi, India",
    rating: "4.3",
    ratingPercent: "86%",
    ratingsCount: "34",
    responseRate: "80%",
    whatsappConfirmed: true,
  },

  {
    name: "Manoj",
    email: "manoj123@gmail.com",
    password: "manoj123",
    mobileNumber: "9711977631",
    companyName: "Skin Secrets",
    productOrService: "Cosmetic",
    imgSrc: "/assets/beauty9.jpeg", // Provide the correct image path
    mainProducts: "Skincare Products, Makeup, Beauty Tools",
    altText: "Cosmetic - Skin Secrets",
    years: "1 YR",
    location: "Delhi, India",
    tooltipText: "Location details not provided",
    rating: "87%",
    ratingPercent: "95%",
    ratingsCount: "160",
    responseRate: "93%",
  },
  {
    name: "Sandeep",
    email: "sandeep123@gmail.com",
    password: "sandeep123",
    mobileNumber: "8826956926",
    companyName: "RICH’N’PURE PROFESSIONALS",
    productOrService: "Cosmetic",
    imgSrc: "/assets/beauty3.jpeg", // Provide the correct image path
    mainProducts: "Skincare, Haircare, Beauty Products",
    altText: "Cosmetic - RICH’N’PURE PROFESSIONALS",
    years: "1 YR",
    location: "Delhi, India",
    tooltipText: "Location details not provided",
    rating: "82%",
    ratingPercent: "93%",
    ratingsCount: "110",
    responseRate: "88%",
  },
  {
    name: "Rohit Goyal",
    email: "Rohit123@gmail.com",
    password: "Rohit123",
    mobileNumber: "7669006909",
    companyName: "PALMIST HEALTHCARE Pvt. Ltd.",
    productOrService: "Cosmetic",
    imgSrc: "/assets/beauty2.jpeg", // Provide the correct image path
    mainProducts: "Skincare Products, Haircare Products, Beauty Supplements",
    altText: "Cosmetic - PALMIST HEALTHCARE Pvt. Ltd.",
    years: "1 YR",
    location: "Delhi, India",
    tooltipText: "Location details not provided",
    rating: "78%",
    ratingPercent: "89%",
    ratingsCount: "70",
    responseRate: "84%",
  },
  {
    name: "Aditi",
    email: "Aditi123@gmail.com",
    password: "Aditi123",
    mobileNumber: "9899283963",
    companyName: "Aditi Cosmetics",
    productOrService: "Cosmetic Manufacturer",
    imgSrc: "/assets/beauty10.jpeg", // Provide the correct image path
    mainProducts: "Skincare, Makeup, Haircare",
    altText: "Cosmetic Manufacturer - Aditi Cosmetics",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "Location details not provided",
    rating: "88%",
    ratingPercent: "90%",
    ratingsCount: "120",
    responseRate: "89%",
  },
  {
    name: "Jhankar",
    email: "abc@gmail.com",
    mobileNumber: "8112298427",
    companyName: "Jhankar Bangles",
    productOrService: "Bangles",
    imgSrc: "/assets/bangle1.jpeg",
    altText: "Bangles - Jhankar Bangles",
    mainProducts:
      "Gold Bangles, Silver Bangles, Custom Bangles, Traditional Bangles",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "789 Jewelry Street, Fashion District, Mumbai, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "270",
    responseRate: "90%",
  },

  {
    name: "Sudheer",
    email: "sudheer123@gmail.com",
    mobileNumber: "7530966614",
    companyName: "Florish Professional Pvt. Ltd.",
    productOrService: "Cosmetic Manufacturer",
    imgSrc: "/assets/cosma.jpeg", // Provide the correct image path
    mainProducts: "Skincare Products, Makeup, Haircare Products",
    altText: "Cosmetic Manufacturer - Florish Professional Pvt. Ltd.",
    years: "1 YRS",
    location: "Bangalore, India",
    tooltipText: "Location details not provided",
    rating: "82%",
    ratingPercent: "87%",
    ratingsCount: "55",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    name: "Aditi",
    email: "Aditi123@gmail.com",
    mobileNumber: "9899283963",
    companyName: "Aditi Cosmetics",
    productOrService: "Cosmetic Manufacturer",
    imgSrc: "/assets/beauty11.jpeg", // Provide the correct image path
    mainProducts: "Skincare Products, Makeup, Haircare Products",
    altText: "Cosmetic Manufacturer - Aditi Cosmetics",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "Location details not provided",
    rating: "88%",
    ratingPercent: "92%",
    ratingsCount: "110",
    responseRate: "89%",
  },
  {
    name: "Sudheer",
    email: "sudheer123@gmail.com",
    mobileNumber: "7530966614",
    companyName: "Florish Profesional Pvt. Ltd.",
    productOrService: "Cosmetic Manufacturer",
    imgSrc: "/assets/cosma1.jpeg", // Provide the correct image path
    mainProducts: "Skincare Products, Makeup, Haircare Products",
    altText: "Cosmetic Manufacturer - Florish Profesional Pvt. Ltd.",
    years: "1 YRS",
    location: "Hyderabad, India",
    tooltipText: "Location details not provided",
    rating: "80%",
    ratingPercent: "85%",
    ratingsCount: "50",
    responseRate: "82%",
  },
  {
    name: "Amit",
    email: "amit123@gmail.com",
    mobileNumber: "9810443032",
    companyName: "Natural Aroma",
    productOrService: "Cosmetic Manufacturer",
    imgSrc: "/assets/beauty12.jpeg", // Provide the correct image path
    mainProducts: "Skincare Products, Essential Oils, Body Care",
    altText: "Cosmetic Manufacturer - Natural Aroma",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "Location details not provided",
    rating: "78%",
    ratingPercent: "84%",
    ratingsCount: "55",
    responseRate: "81%",
  },
  {
    name: "Hari Om",
    email: "Hariom123@gmail.com",
    mobileNumber: "8570851605",
    companyName: "Captain Biotech - Ayurvedic & Herbal Products",
    productOrService: "Cosmetic Manufacturer",
    imgSrc: "/assets/beauty13.jpeg", // Provide the correct image path
    mainProducts: "Herbal Skincare, Ayurvedic Cosmetics, Natural Remedies",
    altText:
      "Cosmetic Manufacturer - Captain Biotech - Ayurvedic & Herbal Products",
    years: "1 YRS",
    location: "Bangalore, India",
    tooltipText: "Location details not provided",
    rating: "80%",
    ratingPercent: "85%",
    ratingsCount: "50",
    responseRate: "82%",
  },
  {
    _id: "p1234567890q012347",
    name: "Nayyer",
    email: "nayyerbangles@gmail.com",
    password: "nayyerbangle",
    mobileNumber: "9314928824",
    companyName: "Nayyer Bangle Manufacturer",
    productOrService: "Bangles",
    imgSrc: "/assets/bangles1.jpeg",
    mainProducts: "Gold Bangles, Silver Bangles, Traditional Bangles",
    altText: "Bangles - Nayyer Bangle Manufacturer",
    years: "1 YRS",
    location: "Mumbai, Maharashtra, India",
    tooltipText: "Sector 9, Jewelry Market, Mumbai, Maharashtra, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "60",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
  {
    _id: "a1234567890wxyz5679",
    name: "Subhash Rashkar",
    email: "subhashrashkar12@gmail.com",
    password: "subhash rashkar",
    mobileNumber: "7385244927",
    companyName: "Perfume Phafcially",
    productOrService: "Perfume",
    imgSrc: "/assets/perfume.jpeg",
    mainProducts: "Fragrances, Perfume Oils, Essential Oils",
    altText: "Perfume Products - Perfume Phafcially",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "Perfume Phafcially, Mumbai, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "120",
    responseRate: "92%",
    whatsappConfirmed: true,
  },
  {
    _id: "dsf-kannauj-oil-production",
    name: "Anand Kumar Shrivastava",
    email: "abc@gmail.com",
    password: "anand@123",
    mobileNumber: "9140924863",
    companyName: "DSF Kannauj Oil Production",
    productOrService: "Ittar",
    imgSrc: "/assets/ittar.jpg",
    mainProducts: "Ittar (Fragrance Oil)",
    altText: "DSF Kannauj Oil Production - Ittar",
    years: "1 YRS",
    location: "Kannauj, Uttar Pradesh, India",
    tooltipText: "DSF Kannauj Oil Production, Ittar, Kannauj, UP",
    rating: "4.7",
    ratingPercent: "93%",
    ratingsCount: "50",
    responseRate: "81%",
    whatsappConfirmed: true,
  },
  {
    _id: "ayush-jain-delhi",
    name: "Ayush Jain",
    email: "AyushJain@gmail.com",
    password: "12345678",
    mobileNumber: "9404160600",
    companyName: "Ayush Jain",
    statename: "",
    cityname: "Delhi",
    productOrService: "Cosmetics",
    imgSrc: "/assets/cosmetic6.jpg",
    mainProducts: "Cosmetics",
    altText: "Ayush Jain - Delhi",
    years: "1 YRS",
    location: "Delhi",
    tooltipText: "Ayush Jain, Delhi",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "150",
    responseRate: "92%",
    whatsappConfirmed: false,
  },
  {
    name: "Devarajan",
    email: "7598133213@gmail.com",
    password: "7598133213",
    mobileNumber: "7598133213",
    companyName: "Perfume Phenyl",
    productOrService: "Perfume Phenyl",
    imgSrc: "/assets/perfume1.jpg",
    mainProducts: "Perfume Phenyl, Air Fresheners, Cleaning Products",
    altText: "Perfume Phenyl - Air Fresheners",
    years: "1 YRS",
    location: "Chennai, Tamil Nadu, India",
    tooltipText: "Perfume Phenyl, Chennai",
    rating: "4.4",
    ratingPercent: "88%",
    ratingsCount: "60",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    name: "Sandy",
    email: "SebounnCosmetics@gmail.com",
    password: "12345678",
    mobileNumber: "9527432450",
    companyName: "Sebounn Cosmetics",
    productOrService: "Skin Care",
    imgSrc: "/assets/skincare1.jpg",
    mainProducts: "Face Creams, Moisturizers, Serums",
    altText: "Sebounn Cosmetics - Skin Care",
    years: "1 YRS",
    location: "Pune, Maharashtra, India",
    tooltipText: "Sebounn Cosmetics, Pune",
    rating: "4.3",
    ratingPercent: "86%",
    ratingsCount: "120",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    name: "Sandy",
    email: "Sebounncosmetics@gmail.com",
    password: "SandySandy",
    mobileNumber: "9527432450",
    companyName: "Sebounn Cosmetics",
    productOrService: "Cosmetics",
    imgSrc: "/assets/cosmetics3.jpg",
    mainProducts: "Skincare, Makeup, Beauty Products",
    altText: "Sandy - Sebounn Cosmetics",
    years: "1 YRS",
    location: "Pune, Maharashtra, India",
    tooltipText: "Sandy, Pune",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "78",
    responseRate: "89%",
    whatsappConfirmed: true,
  },
  {
    _id: "lavistahealthcare-vadodra",
    name: "Ashok Kumar Lakhlani",
    email: "lavistahealthcare@gmail.com",
    password: "Ashok Kumar Lakhlani",
    mobileNumber: "8320259525",
    companyName: "lavistahealthcare",
    statename: "Gujarat",
    cityname: "Vadodara",
    productOrService: "Beauty and Cosmetics",
    imgSrc: "/assets/beauty14.jpg",
    mainProducts: "Beauty Products, Cosmetics, Skin Care, Hair Care",
    altText: "lavistahealthcare - Beauty and Cosmetics",
    years: "1 YRS",
    location: "Vadodara, Gujarat, India",
    tooltipText: "Lavista Healthcare - High-quality Beauty & Cosmetic Products",
    rating: "4.0",
    ratingPercent: "85%",
    ratingsCount: "120",
    responseRate: "95%",
    whatsappConfirmed: false,
  },

  // Add more items if needed
];

const BeautyDealer = () => {
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
                  <Link to="#">Skincare</Link>
                </li>
                <li>
                  <Link to="#">Haircare</Link>
                </li>
                <li>
                  <Link to="#">Makeup</Link>
                </li>
                <li>
                  <Link to="#">Body Care</Link>
                </li>
                <li>
                  <Link to="#">Fragrances</Link>
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
                  <Link to="#">Delhi</Link>
                </li>
                <li>
                  <Link to="#">Maharashtra</Link>
                </li>
                <li>
                  <Link to="#">Karnataka</Link>
                </li>
                <li>
                  <Link to="#">Tamil Nadu</Link>
                </li>
                <li>
                  <Link to="#">West Bengal</Link>
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
                      src="/assets/beauty2.jpeg"
                      width={55}
                      height={55}
                      alt="Skincare"
                    />
                  </figure>
                  <p className="title">Skincare</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/beauty3.jpeg"
                      width={55}
                      height={55}
                      alt="Haircare"
                    />
                  </figure>
                  <p className="title">Haircare</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/beauty4.jpeg"
                      width={55}
                      height={55}
                      alt="Makeup"
                    />
                  </figure>
                  <p className="title">Makeup</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/beauty5.jpeg"
                      width={55}
                      height={55}
                      alt="Body Care"
                    />
                  </figure>
                  <p className="title">Body Care</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/beauty6.jpeg"
                      width={55}
                      height={55}
                      alt="Fragrances"
                    />
                  </figure>
                  <p className="title">Fragrances</p>
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

export default BeautyDealer;
