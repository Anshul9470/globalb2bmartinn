import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    name: "mayank sharma",
    email: "abc@gmail.com",
    password: "mayank@123",
    mobileNumber: "9109172104",
    companyName: "shree ganesh foot wear",
    productOrService: "men footwear",
    imgSrc: "/assets/footwear1.jpeg", // Provide the correct image path
    altText: "Men Footwear - Shree Ganesh Foot Wear",
    mainProducts: "Men Footwear, shoes, men sandals etc.",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "456 Footwear Street, Mumbai, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "150",
    responseRate: "85%",
  },
  {
    name: "Aashish",
    email: "abc@gmail.com",
    password: "aashish@123",
    mobileNumber: "8218100030",
    companyName: "Hari Trading Company",
    productOrService: "Footwear",
    imgSrc: "/assets/footwear3.jpeg", // Provide the correct image path
    mainProducts: "Casual Shoes, Formal Shoes, Sandals, Boots",
    altText: "Footwear - Hari Trading Company",
    years: "1 YR",
    location: "Mumbai, India",
    tooltipText: "Location details not provided",
    rating: "81%",
    ratingPercent: "92%",
    ratingsCount: "100",
    responseRate: "87%",
  },
  {
    name: "Vinod Tyagi",
    email: "abc@gmail.com",
    password: "vinod@123",
    mobileNumber: "9358431238",
    companyName: "Tyagi Enterprises",
    productOrService: "Footwear",
    imgSrc: "/assets/footwear2.jpeg", // Provide the correct image path
    mainProducts: "Casual Shoes, Formal Shoes, Sports Shoes, Sandals",
    altText: "Footwear - Tyagi Enterprises",
    years: "1 YR",
    location: "Delhi, India",
    tooltipText: "Location details not provided",
    rating: "77%",
    ratingPercent: "88%",
    ratingsCount: "60",
    responseRate: "83%",
  },
  {
    name: "Macro",
    email: "abc@gmail.com",
    mobileNumber: "9870652011",
    companyName: "MACRO FOOTWEAR",
    productOrService: "Footwear Manufacturer",
    imgSrc: "/assets/footwear7.jpeg", // Provide the correct image path
    mainProducts: "Casual Shoes, Formal Shoes, Sports Footwear",
    altText: "Footwear Manufacturer - MACRO FOOTWEAR",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "Location details not provided",
    rating: "77%",
    ratingPercent: "82%",
    ratingsCount: "45",
    responseRate: "79%",
  },
  {
    name: "Elan",
    email: "abc@gmail.com",
    mobileNumber: "7303835859",
    companyName: "Elan Shoes",
    productOrService: "Footwear Manufacturer",
    imgSrc: "/assets/footwear8.jpeg", // Provide the correct image path
    mainProducts: "Casual Shoes, Formal Shoes, Sports Footwear",
    altText: "Footwear Manufacturer - Elan Shoes",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "Location details not provided",
    rating: "75%",
    ratingPercent: "80%",
    ratingsCount: "40",
    responseRate: "78%",
  },
  {
    name: "Vijay",
    email: "abc@gmail.com",
    mobileNumber: "8369521697",
    companyName: "Vijay Footwear",
    productOrService: "Footwear Manufacturer",
    imgSrc: "/assets/footwear3.jpeg", // Provide the correct image path
    mainProducts: "Casual Shoes, Formal Shoes, Sports Footwear",
    altText: "Footwear Manufacturer - Vijay Footwear",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "Location details not provided",
    rating: "77%",
    ratingPercent: "82%",
    ratingsCount: "35",
    responseRate: "79%",
  },
  {
    name: "Ahjaz",
    email: "abc@gmail.com",
    mobileNumber: "8369015093",
    companyName: "Sydwoq Footwear",
    productOrService: "Footwear Manufacturer",
    imgSrc: "/assets/footwear4.jpeg", // Provide the correct image path
    mainProducts: "Men's Shoes, Women's Shoes, Athletic Footwear",
    altText: "Footwear Manufacturer - Sydwoq Footwear",
    years: "1 YRS",
    location: "Bangalore, India",
    tooltipText: "Location details not provided",
    rating: "74%",
    ratingPercent: "78%",
    ratingsCount: "38",
    responseRate: "76%",
  },
  {
    name: "Javed",
    email: "abc@gmail.com",
    mobileNumber: "9769307802",
    companyName: "Softo Footwear",
    productOrService: "Footwear Manufacturer",
    imgSrc: "/assets/footwear9.jpeg", // Provide the correct image path
    mainProducts: "Casual Shoes, Formal Shoes, Sports Footwear",
    altText: "Footwear Manufacturer - Softo Footwear",
    years: "1 YRS",
    location: "Hyderabad, India",
    tooltipText: "Location details not provided",
    rating: "72%",
    ratingPercent: "76%",
    ratingsCount: "25",
    responseRate: "70%",
  },
  {
    _id: "d1234567890wxyz5688",
    name: "Love Didlani",
    email: "punjabijutti@gmail.com",
    password: "8375000867",
    mobileNumber: "9888112004",
    companyName: "Punjabi Jutti in Punjab",
    productOrService: "Footwear",
    imgSrc: "/assets/foot10.jpeg", // Placeholder for image path
    mainProducts: "Punjabi Jutti, Traditional Footwear",
    altText: "Punjabi Jutti in Punjab - Traditional Footwear",
    years: "1 YRS", // Placeholder for years of experience
    location: "Punjab, India", // Placeholder for location
    tooltipText: "Punjabi Jutti in Punjab, Punjab, India",
    rating: "4.7", // Placeholder for rating
    ratingPercent: "93%", // Placeholder for rating percentage
    ratingsCount: "100", // Placeholder for ratings count
    responseRate: "90%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "shree-shyam-footwears-ludhiana",
    name: "Piyush Kotadiya",
    email: "PiyushKotadiya@gmail.com",
    password: "12345678",
    mobileNumber: "9878175384",
    companyName: "Shree Shyam Footwear's",
    productOrService: "Footwear",
    imgSrc: "/assets/shyamfot.jpg",
    mainProducts: "Footwear",
    altText: "Shree Shyam Footwear's - Footwear",
    years: "1 YRS",
    location: "Ludhiana, India",
    tooltipText: "Shree Shyam Footwear's, Footwear, Ludhiana",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "32",
    responseRate: "80%",
    whatsappConfirmed: true,
  },
  {
    _id: "bharat-rohtak-haryana",
    name: "Bharat",
    email: "bharat123@gmail.com",
    password: "bharat@1234",
    mobileNumber: "9485657579",
    companyName: "Shubhindia Enterprises",
    statename: "Haryana",
    cityname: "Rohtak",
    productOrService: "Foot Ware",
    imgSrc: "/assets/footwear10.jpg",
    mainProducts: "Footwear",
    altText: "Shubhindia Enterprises - Rohtak",
    years: "1 YRS",
    location: "Rohtak, Haryana",
    tooltipText: "Shubhindia Enterprises, Rohtak",
    rating: "4.7",
    ratingPercent: "92%",
    ratingsCount: "250",
    responseRate: "95%",
    whatsappConfirmed: true,
  },
  {
    _id: "ashwanigupta-agra-uttarpradesh",
    name: "Ashwani Gupta",
    email: "udayshoes@gmail.com",
    password: "Ashwani Gupta",
    mobileNumber: "9927551555",
    companyName: "Uday Shoes",
    statename: "Uttar Pradesh",
    cityname: "Agra",
    productOrService: "Footwear",
    imgSrc: "/assets/udayshoes.jpg",
    mainProducts: "Footwear",
    altText: "Uday Shoes - Agra",
    years: "1 YRS",
    location: "Agra, Uttar Pradesh",
    tooltipText: "Uday Shoes, Agra",
    rating: "4.5",
    ratingPercent: "92%",
    ratingsCount: "150",
    responseRate: "95%",
    whatsappConfirmed: true,
  },
  {
    _id: "n-r-riyaz-ahmed-tirpura-tamil-nadu",
    name: "~N R Riyaz Ahmed",
    email: "NRRiyazAhmed123@gmail.com",
    password: "~N R Riyaz Ahmed",
    mobileNumber: "9994424150",
    companyName: "Baba International",
    statename: "Tamil Nadu",
    cityname: "Tirpura",
    productOrService: "Shoes",
    imgSrc: "/assets/shoes2.jpg",
    mainProducts: "Shoes",
    altText: "Baba International - Tirpura",
    years: "1 YRS",
    location: "Tirpura, Tamil Nadu",
    tooltipText: "Baba International, Tirpura",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "180",
    responseRate: "94%",
    whatsappConfirmed: true,
  },
  {
    name: "Alok",
    email: "alok@gmail.com",
    password: "12345678",
    mobileNumber: "8946922964",
    companyName: "Tirupur Fashionfactory",
    productOrService: "Shoes",
    imgSrc: "/assets/Shoes3.jpg",
    mainProducts: "Casual Shoes, Sports Shoes, Formal Shoes",
    altText: "Alok - Tirupur Fashionfactory",
    years: "1 YRS",
    location: "Tirupur, Tamil Nadu, India",
    tooltipText: "Alok, Tirupur",
    rating: "4.3",
    ratingPercent: "86%",
    ratingsCount: "75",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "ashok-inderlok",
    name: "Ashok",
    email: "ashok123@gmali.com",
    password: "ashok1234",
    mobileNumber: "9999799324",
    companyName: "Vrindavan Traders",
    statename: "Delhi",
    cityname: "Inderlok",
    productOrService: "Shoes",
    imgSrc: "/assets/shoes10.jpg",
    mainProducts: "Casual Shoes, Formal Shoes, Sports Shoes",
    altText: "Vrindavan Traders - Trusted Shoe Supplier in Inderlok",
    years: "1 YRS",
    location: "Inderlok, Delhi, India",
    tooltipText: "Vrindavan Traders - Reliable Shoe Manufacturer",
    rating: "4.6",
    ratingPercent: "91%",
    ratingsCount: "150",
    responseRate: "85%",
    whatsappConfirmed: false,
  },

  // Add more items if needed
];

const FootwearDealers = () => {
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
                  <Link to="#">Men's Sandals</Link>
                </li>
                <li>
                  <Link to="#">Men's Shoes</Link>
                </li>
                <li>
                  <Link to="#">Women's Sandals</Link>
                </li>
                <li>
                  <Link to="#">Women's Shoes</Link>
                </li>
                <li>
                  <Link to="#">Unisex Footwear</Link>
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
                  <Link to="#">Karnataka</Link>
                </li>
                <li>
                  <Link to="#">Tamil Nadu</Link>
                </li>
                <li>
                  <Link to="#">West Bengal</Link>
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
                      src="/assets/footwear2.jpeg"
                      width={55}
                      height={55}
                      alt="Men's Sandals"
                    />
                  </figure>
                  <p className="title">Men's Sandals</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/footwear3.jpeg"
                      width={55}
                      height={55}
                      alt="Men's Shoes"
                    />
                  </figure>
                  <p className="title">Men's Shoes</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/footwear5.jpeg"
                      width={55}
                      height={55}
                      alt="Women's Sandals"
                    />
                  </figure>
                  <p className="title">Women's Sandals</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/footwear4.jpeg"
                      width={55}
                      height={55}
                      alt="Women's Shoes"
                    />
                  </figure>
                  <p className="title">Women's Shoes</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/footwear6.jpeg"
                      width={55}
                      height={55}
                      alt="Unisex Footwear"
                    />
                  </figure>
                  <p className="title">Unisex Footwear</p>
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

export default FootwearDealers;
