import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    _id: "hk-carpet-ahmedabad",
    name: "Hasan Khan",
    email: "abc@gmail.com",
    password: "hasan@123",
    mobileNumber: "9559833025",
    companyName: "HK Carpet",
    productOrService: "Rubber Carpets",
    imgSrc: "/assets/hkcarpet.webp", // Placeholder image path
    mainProducts: "Rubber Carpets",
    altText: "HK Carpet - Rubber Carpets",
    years: "1 YRS", // Random value
    location: "Ahmedabad, Gujarat, India",
    tooltipText: "HK Carpet, Rubber Carpets, Ahmedabad",
    rating: "4.6", // Random value
    ratingPercent: "93%", // Random value
    ratingsCount: "45", // Random value
    responseRate: "85%", // Random value
    whatsappConfirmed: true,
  },

  {
    _id: "667bb8e29644befaa9547ffa", // Replace with actual ID if applicable
    name: "Sabit Rugs",
    email: "bjlsf@fg.com",
    mobileNumber: "6392730412",
    companyName: "Sabit Rugs",
    productOrService: "Rugs Manufacturer",
    imgSrc: "/assets/rug5.jpeg", // Provide correct image path
    mainProducts: "Area Rugs, Carpet Tiles, Custom Rugs",
    altText: "Rugs - Sabit Rugs",
    years: "1 YRS",
    location: "Delhi India", // Update with actual location
    tooltipText: "123 Rugs Manufacturing Lane, City, Country", // Provide tooltip text
    rating: "4.8", // Rating out of 5
    ratingPercent: "96%", // Rating percentage
    ratingsCount: "200", // Number of ratings
    responseRate: "98%",
  },
  {
    name: "Shahzab",
    email: "abc@gmail.com",
    mobileNumber: "8303357385",
    companyName: "Bhadohi Carpet House",
    productOrService: "Rugs Manufacturer",
    imgSrc: "/assets/rug6.jpg", // Provide correct image path
    mainProducts: "Area Rugs, Carpets, Custom Rug Designs",
    altText: "Rugs - Bhadohi Carpet House",
    years: "1, YRS",
    location: "Bhadohi, Uttar Pradesh, India", // Update with actual location
    tooltipText: "123 Rugs Lane, Bhadohi, Uttar Pradesh, India", // Provide tooltip text
    rating: "4.5", // Rating out of 5
    ratingPercent: "90%", // Rating percentage
    ratingsCount: "150", // Number of ratings
    responseRate: "95%", // Response rate percentage
  },
  {
    name: "Yusuf",
    email: "abc@gmail.com",
    mobileNumber: "9007197876",
    companyName: "The Rug Concept",
    productOrService: "Rugs Manufacturer",
    imgSrc: "/assets/rug7.jpeg", // Provide correct image path
    mainProducts: "Area Rugs, Designer Carpets, Custom Rug Designs",
    altText: "Rugs - The Rug Concept",
    years: "1 YRS",
    location: "Jaipur, Rajasthan, India", // Update with actual location
    tooltipText: "456 Rug Avenue, Jaipur, Rajasthan, India", // Provide tooltip text
    rating: "4.7", // Rating out of 5
    ratingPercent: "94%", // Rating percentage
    ratingsCount: "120", // Number of ratings
    responseRate: "97%", // Response rate percentage
  },

  {
    name: "Shahabuddin Ansari",
    email: "abc@gmail.com",
    password: "sh@12345",
    mobileNumber: "9170315929",
    companyName: "Ruhaan Enterprises",
    productOrService: "Rugs Manufacturer",
    imgSrc: "/assets/rug9.jpeg",
    mainProducts: "Handmade Rugs, Custom Rug Designs",
    altText: "Rugs - Shahabuddin Ansari",
    years: "1 YRS",
    location: "New Delhi, India",
    tooltipText: "789 Rugs Lane, New Delhi, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "80",
    responseRate: "95%",
  },
  {
    _id: "i1234567890j012347",
    name: "Shamshad",
    email: "abc@gmail.com",
    password: "sham@123",
    mobileNumber: "8858784673",
    companyName: "Izaam Rugs",
    productOrService: "Rugs Manufacturer",
    imgSrc: "/assets/rug10.jpeg",
    mainProducts: "Handmade Rugs, Wool Rugs, Carpet Rugs",
    altText: "Rugs Manufacturer - Izaam Rugs",
    years: "1 YRS",
    location: "Bhadohi, Uttar Pradesh, India",
    tooltipText: "Sector 10, Carpet Zone, Bhadohi, Uttar Pradesh, India",
    rating: "4.8",
    ratingPercent: "95%",
    ratingsCount: "70",
    responseRate: "91%",
    whatsappConfirmed: true,
  },
  {
    _id: "a1234567890wxyz5694",
    name: "HITESH",
    email: "navkarforge23@gmail.com",
    password: "navkarforge6433",
    mobileNumber: "9969259019",
    companyName: "NAVKAR FORGE INDUSTRIES",
    productOrService: "Manufacturing and Stockist of Fittings and Flanges",
    imgSrc: "/assets/carpet1.jpeg", // Placeholder for image path
    mainProducts: "Fittings, Flanges, Industrial Components",
    altText: "Industrial Fittings and Flanges - NAVKAR FORGE INDUSTRIES",
    years: "1 YRS", // Placeholder for years of experience
    location: "India", // Placeholder for location
    tooltipText: "NAVKAR FORGE INDUSTRIES, India",
    rating: "4.7", // Placeholder for rating
    ratingPercent: "94%", // Placeholder for rating percentage
    ratingsCount: "180", // Placeholder for ratings count
    responseRate: "93%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "a1234567890abc5695",
    name: "Chanderkant",
    email: "chanderkant@gmail.com",
    password: "12345678",
    mobileNumber: "9823022789",
    companyName: "Shamali Polymats",
    productOrService: "Mats",
    imgSrc: "/assets/rug12.jpeg", // Placeholder for image path
    mainProducts: "Polymer Mats, Floor Mats",
    altText: "Shamali Polymats - Mats Manufacturer",
    years: "1 YRS", // Placeholder for years of experience
    location: "India", // Placeholder for location
    tooltipText: "Shamali Polymats, India",
    rating: "4.6", // Placeholder for rating
    ratingPercent: "90%", // Placeholder for rating percentage
    ratingsCount: "95", // Placeholder for ratings count
    responseRate: "85%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "shivam-industries-sonipat",
    name: "Mahiender",
    email: "mahiender12@gmail.com",
    password: "123456789",
    mobileNumber: "9717577401",
    companyName: "SHIVAM INDUSTRIES",
    productOrService: "Mat",
    imgSrc: "/assets/rugs2.jpg",
    mainProducts: "Mat",
    altText: "SHIVAM INDUSTRIES - Mat",
    years: "1 YRS",
    location: "Sonipat, Hariyana, India",
    tooltipText: "SHIVAM INDUSTRIES, Mat, Sonipat",
    rating: "4.7",
    ratingPercent: "95%",
    ratingsCount: "25",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
  {
    _id: "jai-balaji-industries-bahadurgarh",
    name: "Ravi",
    email: "JaiBalajIIndustries@gmail.com",
    password: "123456789",
    mobileNumber: "8383086198",
    companyName: "Jai Balaji Industries",
    productOrService: "Cow Mat",
    imgSrc: "/assets/matcow1.jpg",
    mainProducts: "Cow Mat",
    altText: "Jai Balaji Industries - Cow Mat",
    years: "1 YRS",
    location: "Bahadurgarh, Delhi, India",
    tooltipText: "Jai Balaji Industries, Cow Mat, Bahadurgarh",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "30",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "vikaschandragupta-bhadohi-uttarpradesh",
    name: "Vikas Chandra Gupta",
    email: "VikasChandraGupta@gmail.com",
    password: "123456789",
    mobileNumber: "7565012091",
    companyName: "Shlok Carpet",
    statename: "Uttar Pradesh",
    cityname: "Bhadohi",
    productOrService: "Mat",
    imgSrc: "/assets/carpet3.jpg",
    mainProducts: "Mat",
    altText: "Shlok Carpet - Bhadohi",
    years: "1 YRS",
    location: "Bhadohi, Uttar Pradesh",
    tooltipText: "Shlok Carpet, Bhadohi",
    rating: "4.5",
    ratingPercent: "92%",
    ratingsCount: "150",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
  {
    _id: "gauravsharma-delhi-delhi",
    name: "Gaurav Sharma",
    email: "reachus.aie@gmail.com",
    password: "123456789",
    mobileNumber: "8618463348",
    companyName: "Advantage India Enterprises",
    statename: "Delhi",
    cityname: "Delhi",
    productOrService: "A Grade Makhana, Mat",
    imgSrc: "/assets/mat4.jpg",
    mainProducts: "A Grade Makhana, Mat",
    altText: "Advantage India Enterprises - Delhi",
    years: "1 YRS",
    location: "Delhi, Delhi",
    tooltipText: "Advantage India Enterprises, Delhi",
    rating: "4.6",
    ratingPercent: "91%",
    ratingsCount: "178",
    responseRate: "94%",
    whatsappConfirmed: true,
  },
  {
    _id: "shamshaad-badhoi",
    name: "Shamshaad",
    email: "Shamshaad@gmail.com",
    password: "12345678",
    mobileNumber: "8858784673",
    companyName: "Shamshaad Carpets",
    statename: "Uttar Pradesh",
    cityname: "Badhoi",
    productOrService: "Carpets",
    imgSrc: "/assets/carpet4.jpg",
    mainProducts: "Handcrafted Carpets, Modern Rugs",
    altText: "Shamshaad - High-Quality Carpet Supplier in Badhoi",
    years: "1 YRS",
    location: "Badhoi, Uttar Pradesh, India",
    tooltipText: "Shamshaad - Premium Carpets for Your Home and Office",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "320",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "shamshaad-badhoi",
    name: "Shamshaad",
    email: "Shamshaad@gmail.com",
    password: "12345678",
    mobileNumber: "8858784673",
    companyName: "Shamshaad Carpets",
    statename: "Uttar Pradesh",
    cityname: "Badhoi",
    productOrService: "Carpets",
    imgSrc: "/assets/rugs4.jpg",
    mainProducts: "Handmade Carpets, Modern Rugs",
    altText: "Shamshaad - Expert Carpet Supplier in Badhoi",
    years: "1 YRS",
    location: "Badhoi, Uttar Pradesh, India",
    tooltipText: "Shamshaad - Trusted Supplier for Premium Carpets",
    rating: "4.7",
    ratingPercent: "93%",
    ratingsCount: "220",
    responseRate: "86%",
    whatsappConfirmed: false,
  },
];

const RugsManufacturer = () => {
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
                  <Link to="#">Area Rugs</Link>
                </li>
                <li>
                  <Link to="#">Carpet Tiles</Link>
                </li>
                <li>
                  <Link to="#">Custom Rugs</Link>
                </li>
                <li>
                  <Link to="#">Handmade Rugs</Link>
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
                  <Link to="#">Mumbai</Link>
                </li>
                <li>
                  <Link to="#">Punjab</Link>
                </li>
                <li>
                  <Link to="#">Haryana</Link>
                </li>
                <li>
                  <Link to="#">Gujarat</Link>
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
                      src="/assets/rug1.webp"
                      width={55}
                      height={55}
                      alt="Area Rugs"
                    />
                  </figure>
                  <p className="title">Area Rugs</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/rug2.jpg"
                      width={55}
                      height={55}
                      alt="Carpet Tiles"
                    />
                  </figure>
                  <p className="title">Carpet Tiles</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/rug3.webp"
                      width={55}
                      height={55}
                      alt="Custom Rugs"
                    />
                  </figure>
                  <p className="title">Custom Rugs</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/rug4.webp"
                      width={55}
                      height={55}
                      alt="Handmade Rugs"
                    />
                  </figure>
                  <p className="title">Handmade Rugs</p>
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
                        <span>Main Products:</span> <b>{item.mainProducts}</b>
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

export default RugsManufacturer;
