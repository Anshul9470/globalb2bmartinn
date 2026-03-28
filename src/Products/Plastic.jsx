import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    _id: "b9c0d1e2f345678901234567", // Random unique ID
    name: "Malav",
    email: "dhirenPlastic@gmail.com",
    password: "Malav@123", // Including the password as specified
    mobileNumber: "9227244594",
    companyName: "Dhiren Plastic Industries",
    productOrService: "Plastic Bottle Manufacturi",
    imgSrc: "/assets/plastic8.jpeg", // Example image path
    mainProducts: "Plastic Bottles, Containers, Jars, Custom Plastic Packaging",
    altText: "Plastic Bottles - Dhiren Plastic Industries",
    years: "1 YRS",
    location: "Surat, India",
    tooltipText: "456 Plastic Avenue, Surat, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "65",
    responseRate: "96%",
    whatsappConfirmed: true,
  },
  {
    _id: "a1234567890wxyz5687",
    name: "Rajasthan Plastic Syndicate",
    email: "chauhanatul800@gmail.com",
    mobileNumber: "+91 97249 38773",
    companyName: "Rajasthan Plastic Syndicate",
    productOrService: "Plastic Products",
    imgSrc: "/assets/plastic-rack.jpg",
    mainProducts: "Plastic Bottles, Plastic Containers",
    altText: "Plastic Products - Rajasthan Plastic Syndicate",
    years: "1 YRS", // Placeholder for years of experience
    location: " Rakhial, Ahmedabad, Pincode 380023",
    tooltipText: "Rajasthan Plastic Syndicate, Ahmedabad, India",
    rating: "4.2", // Placeholder for rating
    ratingPercent: "84%", // Placeholder for rating percentage
    ratingsCount: "50", // Placeholder for ratings count
    responseRate: "90%", // Placeholder for response rate
    whatsappConfirmed: false, // Placeholder for WhatsApp confirmation
  },

  {
    name: "Mr. Ravi",
    email: "Ravi112@gmail.com",
    password: "raviravi",
    mobileNumber: "9974128117",
    companyName: "Advance Poly Pack",
    productOrService: "Packing Items",
    imgSrc: "/assets/plastic-bag.jpg", // Provide the correct image path
    altText: "Packing Items - Advance Poly Pack",
    mainProducts: "Plastic Bags, Bubble Wrap, Packaging Tapes",
    years: "1 YRS",
    location: "Nagpur, India",
    tooltipText: "789 Packaging Lane, Industrial Park, Nagpur, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "85",
    responseRate: "88%",
  },
  {
    name: "Mr. Ravi C. Savla",
    email: "jayplastic93@gmail.com",
    password: "ravi@123",
    mobileNumber: "9892333548",
    companyName: "JAY PLASTICS",
    productOrService: "HDPE plastic barrel supplier",
    imgSrc: "/assets/barel2.jpeg",
    altText: "HDPE plastic barrel supplier - JAY PLASTICS",
    mainProducts: "HDPE Plastic Barrels, Industrial Containers",
    years: "1 YRS",
    location: "Mumbai, Maharashtra, India",
    tooltipText: "789 Industrial Estate, Mumbai, Maharashtra, India",
    rating: "4.6",
    ratingPercent: "94%",
    ratingsCount: "280",
    responseRate: "90%",
  },
  {
    _id: "b9c0d1e2f345678901234567", // Random unique ID
    name: "Malav",
    email: "dhirenPlastic@gmail.com",
    password: "Malav@123", // Including the password as specified
    mobileNumber: "9227244594",
    companyName: "Dhiren Plastic Industries",
    productOrService: "Plastic Bottle Manufacturing",
    imgSrc: "/assets/plastic7.jpeg", // Example image path
    mainProducts: "Plastic Bottles, Containers, Jars, Custom Plastic Packaging",
    altText: "Plastic Bottles - Dhiren Plastic Industries",
    years: "1 YRS",
    location: "Surat, India",
    tooltipText: "456 Plastic Avenue, Surat, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "65",
    responseRate: "96%",
    whatsappConfirmed: true,
  },
  {
    _id: "a1b2c3d4e567890123456789", // Random unique ID
    name: "Nikhil Raj Yadav",
    email: "rajindustires.2218@gmail.com",
    mobileNumber: "9079560851",
    companyName: "Balaji Industries",
    productOrService: "Plastic Bottle Manufacturer",
    imgSrc: "/assets/waterBottle.jpeg", // Example image path
    mainProducts: "Plastic Bottles, Containers, Jars, Custom Plastic Packaging",
    altText: "Plastic Bottles - Balaji Industries",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "789 Plastic Road, Mumbai, India",
    rating: "4.4",
    ratingPercent: "88%",
    ratingsCount: "58",
    responseRate: "92%",
    whatsappConfirmed: true,
  },
  {
    _id: "d4579836725e678912",
    name: "Akshat",
    email: "abc@gmail.com",
    password: "aksh@123",
    mobileNumber: "9831712862",
    companyName: "Fibrotech FRP",
    productOrService: "FRP Products",
    imgSrc: "/assets/frp.jpeg",
    mainProducts: "FRP Sheets, FRP Doors, FRP Gratings",
    altText: "FRP Products - Fibrotech FRP",
    years: "1 YRS",
    location: "Pune, Maharashtra, India",
    tooltipText: "Bhosari, Pune, Maharashtra, India",
    rating: "4.6",
    ratingPercent: "93%",
    ratingsCount: "85",
    responseRate: "89%",
    whatsappConfirmed: true,
  },
  {
    name: "Deepak kumar",
    email: "crownfurniture@gmail.com",
    mobileNumber: "7004983101",
    companyName: "crown furniture",
    productOrService: "Plastic items",
    imgSrc: "/assets/plastic5.webp", // You need to provide the correct image path
    altText: "Plastic items - crown furniture",
    mainProducts: "Plastic Table, Plastic Chair,Plastic Storage",
    years: "1 YRS",
    location: "Jaipur, Rajasthan, India",
    tooltipText:
      "Dehara, Mahar Kalan, Via-samod, Chomu, -303806, Jaipur, Rajasthan, India",
    rating: "4.2",
    bussinessType: "Main Prodcts, Manufacturer",
    ratingPercent: "84%",
    ratingsCount: "30",
    responseRate: "90%",
  },
  {
    name: "Rajesh",
    email: "rajesh@gmail.com",
    mobileNumber: "9648916980",
    companyName: "Sharma Enterprises",
    productOrService: "Plastic Product",
    imgSrc: "/assets/plastic2.jpg", // You need to provide the correct image path
    altText: "Plastic Product - Sharma Enterprises",
    mainProducts: "Plastic Table, Plastic Chair, Plastic Storage",
    years: "1 YRS",
    location: "Jaipur, Rajasthan, India",
    tooltipText:
      "Dehara, Mahar Kalan, Via-samod, Chomu, -303806, Jaipur, Rajasthan, India",
    rating: "4.2",
    bussinessType: "Main Products, Manufacturer",
    ratingPercent: "84%",
    ratingsCount: "30",
    responseRate: "90%",
  },
  {
    name: "Sanjay Sarma",
    email: "sanjay@gmail.com",
    mobileNumber: "8297274501",
    companyName: "Sanjay Sarma Plastic Items Manufacturer",
    productOrService: "Plastic Items",
    imgSrc: "/assets/plastic3.jpg", // You need to provide the correct image path
    mainProducts: "Plastic Tables, Plastic Chairs, Plastic Storage",
    altText: "Plastic Items - Sanjay Sarma Plastic Items Manufacturer",
    years: "1 YRS",
    location: "Gurgaon",
    tooltipText: "Address Here",
    rating: "Rating Here",
    ratingPercent: "90%",
    ratingsCount: "50",
    responseRate: "95%",
  },
  {
    name: "Darsh",
    email: "darsh@gmail.com",
    mobileNumber: "9586746253",
    companyName: "Prachi Pet",
    productOrService: "Plastic Products",
    imgSrc: "/assets/plastic6.jpg", // Provide correct image path
    mainProducts: "Plastic Bottles, Plastic Containers, PET Products",
    altText: "Plastic Products - Prachi Pet",
    years: "1 YRS",
    location: "Bhatinda",
    tooltipText: "Address Here",
    rating: "Rating Here",
    ratingPercent: "98%",
    ratingsCount: "50",
    responseRate: "95%",
  },
  {
    name: "Plasto Tech Containers",
    email: "plastotechcontainer@gmail.com",
    password: "plasto@123",
    mobileNumber: "9408058804",
    companyName: "Plasto Tech Containers",
    productOrService: "Plastic Container Manufacturer",
    imgSrc: "/assets/plastic2.jpg",
    altText: "Plastic Container Manufacturer - Plasto Tech Containers",
    mainProducts: "Food Containers, Storage Bins, Industrial Packaging",
    years: "1 YRS",
    location: "Pune, Maharashtra, India",
    tooltipText: "456 Plastic Avenue, Pune, Maharashtra, India",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "150",
    responseRate: "98%",
  },
  {
    name: "PATHOZYME PLAST",
    email: "PATHOZYME123@gmail.com",
    password: "PATHOZYME123@",
    mobileNumber: "9503831414",
    companyName: "PATHOZYME PLAST",
    productOrService: "HDPE plastic barrel supplier",
    imgSrc: "/assets/barel1.jpeg",
    altText: "HDPE plastic barrel supplier - PATHOZYME PLAST",
    mainProducts: "HDPE Plastic Barrels, Industrial Containers",
    years: "1 YRS",
    location: "Mumbai, Maharashtra, India",
    tooltipText: "123 Industrial Estate, Mumbai, Maharashtra, India",
    rating: "4.5",
    ratingPercent: "92%",
    ratingsCount: "180",
    responseRate: "88%",
  },
  {
    name: "Mr. Manoj Jain",
    email: "jainmanojparakh@gmail.com",
    password: "manoj@123",
    mobileNumber: "8657088657",
    companyName: "MAA PADMAWATI ENTERPRISES",
    productOrService: "HDPE plastic barrel supplier",
    imgSrc: "/assets/barel3.jpeg",
    altText: "HDPE plastic barrel supplier - MAA PADMAWATI ENTERPRISES",
    mainProducts: "HDPE Plastic Barrels, Storage Containers",
    years: "1 YRS",
    location: "Jaipur, Rajasthan, India",
    tooltipText: "567 Industrial Zone, Jaipur, Rajasthan, India",
    rating: "4.9",
    ratingPercent: "98%",
    ratingsCount: "400",
    responseRate: "96%",
  },
  {
    name: "MD Kaleem",
    email: "startraders123@gmail.com",
    password: "kaleem@123",
    mobileNumber: "9030038502",
    companyName: "STAR TRADERS",
    productOrService: "HDPE barrels supplier",
    imgSrc: "/assets/barel4.jpeg",
    altText: "HDPE barrels supplier - STAR TRADERS",
    mainProducts: "HDPE Barrels, Plastic Containers",
    years: "1 YRS",
    location: "Hyderabad, Telangana, India",
    tooltipText: "789 Industrial Area, Hyderabad, Telangana, India",
    rating: "4.7",
    ratingPercent: "95%",
    ratingsCount: "320",
    responseRate: "92%",
  },

  {
    name: "Akash",
    email: "akash123@gmail.com",
    mobileNumber: "7300585743",
    companyName: "Yug Plastic",
    productOrService: "Plastic",
    imgSrc: "/assets/plastic2.jpg", // You need to provide the correct image path
    mainProducts:
      "Plastic containers, Plastic bottles, Plastic furniture, etc.",
    altText: "Plastic - Yug Plastic",
    years: "1 YRS",
    location: "Ahmedabad, Gujarat, India",
    tooltipText:
      "25, GIDC Industrial Estate, Ahmedabad - 380024, Gujarat, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "220",
    responseRate: "94%",
  },
  {
    name: "Mukesh Kumar",
    email: "mukesh@gmail.com",
    mobileNumber: "8824165896",
    companyName: "Plastic Company",
    productOrService: "Plastic Items",
    imgSrc: "/assets/plastic1.jpg", // You need to provide the correct image path
    mainProducts: "Plastic utensils, Plastic containers, Plastic toys, etc.",
    altText: "Plastic Items - Plastic Company",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "35, Nehru Place, New Delhi - 110019, Delhi, India",
    rating: "4.6",
    ratingPercent: "93%",
    ratingsCount: "150",
    responseRate: "97%",
    whatsappConfirmed: true,
  },
  {
    _id: "a8b9c0d1e2f3456789012345", // Random unique ID
    name: "Parikaram",
    email: "parikaram@gmail.com",
    password: "parikaram@123", // Including the password as specified
    mobileNumber: "9879947430",
    companyName: "Parth Polymers",
    productOrService:
      "HDPE & PET | Chemical | Pharmaceutical | Pesticides Plastic Bottle Manufacturing",
    imgSrc: "/assets/plastic7.jpeg", // Example image path
    mainProducts:
      "HDPE Bottles, PET Bottles, Chemical Containers, Pharmaceutical Bottles, Pesticide Bottles",
    altText: "Plastic Bottles - Parth Polymers",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "123 Polymer Lane, Mumbai, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "90",
    responseRate: "94%",
  },
  {
    _id: "s345678901abcdef234584", // Random unique ID
    name: "M.P Rathod",
    email: "mprathod770584@gmail.com",
    password: "rathod@123",
    mobileNumber: "9825880584",
    companyName: "Parkash Plastic Moulder",
    productOrService: "Plastic Moulder Works",
    imgSrc: "/assets/plasticmodules.jpeg", // Example image path
    mainProducts: "Plastic Moulding, Custom Moulded Parts",
    altText: "Plastic Moulder Works - Parkash Plastic Moulder",
    years: "1 YRS",
    location: "Surat, India",
    tooltipText: "Unit 5, Industrial Estate, Surat, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "62",
    responseRate: "84%",
    whatsappConfirmed: true,
  },
  {
    name: "Ganesh Jain",
    email: "Ganesh123@GMAIL.COM",
    password: "Ganesh123",
    mobileNumber: "9867173448",
    companyName: "Pacific Plastics",
    productOrService: "Plastic Products",
    imgSrc: "/assets/plastic10.jpg",
    mainProducts: "Plastic Products",
    altText: "Pacific Plastics - Plastic Products",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "Pacific Plastics, Mumbai",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "75",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "ekta-plastic-ahemdabad",
    name: "govindbhai",
    email: "govindbhai@gmail.com",
    password: "ekta plastic",
    mobileNumber: "9426829430",
    companyName: "Ekta Plastic",
    productOrService: "Sink Coupling, Taps",
    imgSrc: "/assets/ekta1.jpg", // Placeholder image path
    mainProducts: "Sink Couplings, Taps",
    altText: "Ekta Plastic - Sink Couplings, Taps",
    years: "1 YRS", // Random value
    location: "Ahemdabad, Gujrat, India",
    tooltipText: "Ekta Plastic, Sink Couplings, Taps, Ahemdabad",
    rating: "4.7", // Random value
    ratingPercent: "94%", // Random value
    ratingsCount: "25", // Random value
    responseRate: "91%", // Random value
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const MainPlastic = () => {
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
                  <a href="#">Plastic Chairs</a>
                </li>
                <li>
                  <a href="#">Plastic Tables</a>
                </li>
                <li>
                  <a href="#">Plastic Storage</a>
                </li>
                <li>
                  <a href="#">Plastic Containers</a>
                </li>
                <li>
                  <a href="#">Plastic Furniture</a>
                </li>
                <li>
                  <a href="#">Plastic Utensils</a>
                </li>
                <li>
                  <a href="#">Plastic Crates</a>
                </li>
                <li>
                  <a href="#">Plastic Bins</a>
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
                  <a href="#">All India</a>
                </li>
                <li>
                  <a href="#">Maharashtra</a>
                </li>
                <li>
                  <a href="#">Tamil Nadu</a>
                </li>
                <li>
                  <a href="#">Gujarat</a>
                </li>
                <li>
                  <a href="#">Madhya Pradesh</a>
                </li>
                <li>
                  <a href="#">Uttar Pradesh</a>
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
              <a href="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/plastic1.jpg"
                      width={55}
                      height={55}
                      alt="Plastic Chairs"
                    />
                  </figure>
                  <p className="title">Plastic Chairs</p>
                </div>
              </a>
            </div>
            <div className="item">
              <a href="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/plastic2.jpg"
                      width={55}
                      height={55}
                      alt="Plastic Tables"
                    />
                  </figure>
                  <p className="title">Plastic Tables</p>
                </div>
              </a>
            </div>
            <div className="item">
              <a href="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/plastic3.jpg"
                      width={55}
                      height={55}
                      alt="Plastic Storage"
                    />
                  </figure>
                  <p className="title">Plastic Storage</p>
                </div>
              </a>
            </div>
            <div className="item">
              <a href="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/plastic4.jpg"
                      width={55}
                      height={55}
                      alt="Plastic Containers"
                    />
                  </figure>
                  <p className="title">Plastic Containers</p>
                </div>
              </a>
            </div>
            <div className="item">
              <a href="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/plastic6.jpg"
                      width={55}
                      height={55}
                      alt="Plastic Furniture"
                    />
                  </figure>
                  <p className="title">Plastic Furniture</p>
                </div>
              </a>
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
                      <a href="#" target="_blank">
                        <h4 className="title">{item.companyName}</h4>
                      </a>
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

export default MainPlastic;
