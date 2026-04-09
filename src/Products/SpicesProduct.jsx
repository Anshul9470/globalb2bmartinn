import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    _id: "gehans-kitchen-pune",
    name: "Ghina Ji",
    email: "gkspicekart@gmail.com",
    password: "12345678",
    mobileNumber: "+91 97656 08088",
    companyName: "Gehan's Kitchen",
    productOrService: "Spices",
    imgSrc: "/assets/ginger-img.jpg",
    mainProducts: "Spices",
    altText: "Gehan's Kitchen - Spices",
    years: "1 YRS",
    location: "Pune, India",
    tooltipText: "Gehan's Kitchen, Spices, Pune",
    rating: "4.7",
    ratingPercent: "93%",
    ratingsCount: "45",
    responseRate: "85%",
    path: "/gehena-kitchen",
  },

  {
    name: "Mr. Amit",
    email: "abc@gmail.com",
    password: "amit@123",
    mobileNumber: "9962433456",
    companyName: "Aroma Spice Industries",
    productOrService: "Spices",
    imgSrc: "/assets/spi.jpg", // Provide the correct image path
    altText: "Spices - Aroma Spice Industries",
    mainProducts: "Turmeric, Cardamom, Cinnamon",
    years: "1 YRS",
    location: "Nagpur, India",
    tooltipText: "789 Spice Lane, Industrial Park, Nagpur, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "85",
    responseRate: "94%",
  },
  {
    _id: "u7v8w9x0y1z2a3b4c5d6e7f8", // Random unique ID
    name: "Akash Kandula",
    email: "bagyesh123456789@gmail.com",
    mobileNumber: "8919156078",
    companyName: "Akash Enterprise",
    productOrService: "Spices",
    imgSrc: "/assets/spices11.jpeg", // Example image path
    mainProducts: "Whole Spices, Ground Spices, Spice Blends, Organic Spices",
    altText: "Spices - Akash Enterprise",
    years: "1 YRS",
    location: "Hyderabad, India",
    tooltipText: "12 Spice Lane, Hyderabad, India",
    rating: "4.5",
    ratingPercent: "91%",
    ratingsCount: "55",
    responseRate: "92%",
    whatsappConfirmed: true,
  },
  {
    name: "Surya Parkash",
    email: "9789499491@gmail.com",
    password: "9789499491",
    mobileNumber: "9789499491",
    companyName: "Amutham Masala",
    productOrService: "Spices",
    imgSrc: "/assets/sspices14.jpg",
    mainProducts: "Spices, Masalas, Organic Spices",
    altText: "Amutham Masala - Spices",
    years: "1 YRS",
    location: "Coimbatore, Tamil Nadu, India",
    tooltipText: "Amutham Masala, Coimbatore",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "85",
    responseRate: "88%",
    whatsappConfirmed: true,
  },

  {
    name: "Mr. Rishab",
    email: "ambicaspicesindustries@gmail.com",
    password: "rishab1234",
    mobileNumber: "9024690134",
    companyName: "AMBICA SPICES INDUSTRIES",
    productOrService: "SPICES",
    imgSrc: "/assets/spices4.jpg", // Provide the correct image path
    altText: "Spices - AMBICA SPICES INDUSTRIES",
    mainProducts: "Turmeric, Red Chili, Black Pepper",
    years: "1 YRS",
    location: "Nagpur, India",
    tooltipText: "789 Spice Lane, Agro Industrial Park, Nagpur, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "85",
    responseRate: "88%",
  },
  {
    name: "Janardhan Walavalkar",
    email: "info@walavalkarmasale.com",
    mobileNumber: "9004144001",
    companyName: "Walavalkar Masale",
    productOrService: "Spices",
    imgSrc: "/assets/spices6.jpeg", // Provide the correct image path
    mainProducts: "Turmeric Powder, Chilli Powder, Garam Masala, Cumin Seeds",
    altText: "Spices - Walavalkar Masale",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "Location details not provided",
    rating: "85%",
    ratingPercent: "90%",
    ratingsCount: "50",
    responseRate: "88%",
  },

  {
    name: "Mr. Aditya Sonpawle",
    email: "foodspvtltdd@gmail.com",
    password: "aditya@123",
    mobileNumber: "7218897080",
    companyName: "AAUDUMBAR AGRO PVT LTD",
    productOrService: "Spices & food product",
    imgSrc: "/assets/spices2.jpg", // Provide the correct image path
    altText: "Spices - AAUDUMBAR AGRO PVT LTD",
    mainProducts: "Turmeric, Red Chili, Black Pepper",
    years: "1 YRS",
    location: "Nagpur, India",
    tooltipText: "789 Spice Lane, Agro Industrial Park, Nagpur, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "85",
    responseRate: "88%",
  },
  {
    name: "rishab",
    email: "ambicaspicesindustries@gmail.com",
    mobileNumber: "9024690134",
    companyName: "AMBICA SPICES INDUSTRIES",
    productOrService: "SPICES",
    imgSrc: "/assets/spices.jpg",
    altText: "Spices - Ambica Spices Industries",
    mainProducts: "Turmeric, Cumin, Cardamom",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "456 Spice Market, Masala Lane, Mumbai, India",
    rating: "4.7",
    ratingPercent: "92%",
    ratingsCount: "60",
    responseRate: "85%",
  },
  {
    _id: "e1234567890f012347",
    name: "Jesmon A V",
    email: "Jesmon1234@gmail.com",
    password: "Jesmon@1234",
    mobileNumber: "9815764526",
    companyName: "VKV Industries",
    productOrService: "Spices",
    imgSrc: "/assets/spices7.jpeg",
    mainProducts: "Turmeric, Pepper, Cardamom",
    altText: "Spices - VKV Industries",
    years: "1 YRS",
    location: "Kochi, India",
    tooltipText: "Sector 4, Spice Market, Kochi, India",
    rating: "4.7",
    ratingPercent: "93%",
    ratingsCount: "70",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
  {
    _id: "m1234567890n012347",
    name: "DY Food Exim",
    email: "info@dyfoodexim.com",
    password: "DY FOOD EXIM",
    mobileNumber: "9979479787",
    companyName: "DY Food Exim",
    productOrService: "Spices",
    imgSrc: "/assets/spices9.jpeg",
    mainProducts: "Turmeric, Black Pepper, Cumin",
    altText: "Spices - DY Food Exim",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "Sector 4, Spice Market, Delhi, India",
    rating: "4.7",
    ratingPercent: "93%",
    ratingsCount: "70",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    _id: "z8y7x6w5v4u3t2s1r0q9p8o7", // Random unique ID
    name: "K Arjun Raj",
    email: "Arjun1234@gamil.com",
    mobileNumber: "9995907083",
    companyName: "Cardamom Manufacture",
    productOrService: "Cardamom",
    imgSrc: "/assets/cardomn.jpg", // Example image path
    mainProducts:
      "Green Cardamom, Black Cardamom, Ground Cardamom, Cardamom Pods",
    altText: "Cardamom - Cardamom Manufacture",
    years: "1 YRS",
    location: "Kerala, India",
    tooltipText: "456 Spice Lane, Kerala, India",
    rating: "4.7",
    ratingPercent: "93%",
    ratingsCount: "85",
    responseRate: "97%",
    whatsappConfirmed: true,
  },
  {
    _id: "a1234567890wxyz5678",
    name: "Anil Bisee",
    email: "abc@gmail.com",
    password: "anil@123",
    mobileNumber: "8827722786",
    companyName: "AB International",
    productOrService: "Spices",
    imgSrc: "/assets/spices10.jpeg", // Placeholder for image path
    mainProducts: "Spices, Herbs, Seasonings",
    altText: "Spices - AB International",
    years: "1 YRS", // Placeholder for years of experience
    location: "Mumbai, India", // Placeholder for location
    tooltipText: "AB International, Mumbai, India",
    rating: "4.5", // Placeholder for rating
    ratingPercent: "90%", // Placeholder for rating percentage
    ratingsCount: "120", // Placeholder for ratings count
    responseRate: "85%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    name: "Sushil Kumar",
    email: "abc@gmail.com",
    password: "sushil@123",
    mobileNumber: "8975550777",
    companyName: "Som Agencies",
    productOrService: "Spices",
    imgSrc: "/assets/spices12.jpg",
    mainProducts: "Spices",
    altText: "Som Agencies - Spices",
    years: "1 YRS",
    location: "Dhulia, Maharashtra, India",
    tooltipText: "Som Agencies, Spices, Dhulia",
    rating: "4.2",
    ratingPercent: "84%",
    ratingsCount: "30",
    responseRate: "87%",
    whatsappConfirmed: false,
  },
  {
    _id: "66fe73ab5ece709722c7c75c",
    name: "Krm Aajif",
    email: "kmohamedasif1984786@gmail.com",
    password: "8072022398",
    mobileNumber: "8072022398",
    companyName: "Jazar marketing",
    productOrService: "Elaichi",
    imgSrc: "/assets/elechi.jpg",
    mainProducts: "Elaichi",
    altText: "Jazar marketing - Elaichi",
    years: "1 YRS",
    location: "Trichirappalli, Tamil Nadu, India",
    tooltipText: "Jazar marketing, Elaichi, Trichirappalli",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "30",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "surya-amutham-masala-coimbatore",
    name: "surya",
    email: "surya@gmail.com",
    password: "9789499491",
    mobileNumber: "9789499491",
    companyName: "Amutham Masala",
    productOrService: "spice and masala powders",
    imgSrc: "/assets/masala1.jpg",
    mainProducts: "spice and masala powders",
    altText: "Amutham Masala - spice and masala powders",
    years: "1 YRS",
    location: "Coimbatore, Tamil Nadu, India",
    tooltipText: "Amutham Masala, spice and masala powders, Coimbatore",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "30",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "mohan-mrm-trading-madura",
    name: "MOHAN",
    email: "8946008717@gmail.com",
    password: "8946008717",
    mobileNumber: "8946008717",
    companyName: "MRM TRADING",
    productOrService: "Spices",
    imgSrc: "/assets/spices13.jpg",
    mainProducts: "Spices",
    altText: "MRM TRADING - Spices",
    years: "1 YRS",
    location: "Madura, Tamil Nadu, India",
    tooltipText: "MRM TRADING, Spices, Madura",
    rating: "4.7",
    ratingPercent: "95%",
    ratingsCount: "45",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    _id: "prince-spices-khagaria",
    name: "Babban Singh",
    email: "BabbanSingh123@gmail.com",
    password: "Babban Singh",
    mobileNumber: "6201198448",
    companyName: "PRINCE SPICES",
    statename: "Bihar",
    cityname: "Khagaria, Bihar",
    productOrService: "Spices",
    imgSrc: "/assets/prince-spices.jpg",
    mainProducts: "Ground Spices, Whole Spices, Spice Blends",
    altText: "PRINCE SPICES - Spices Manufacturer",
    years: "1 YRS",
    location: "Khagaria, Bihar, India",
    tooltipText: "PRINCE SPICES - Authentic Spice Producer",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "200",
    responseRate: "92%",
    whatsappConfirmed: true,
  },
  {
    _id: "sandeep-delhi",
    name: "Sandeep",
    email: "sandeep@gmail.com",
    password: "12345678",
    mobileNumber: "9311758847",
    companyName: "Sandeep Spices",
    statename: "Delhi",
    cityname: "Delhi",
    productOrService: "Spices",
    imgSrc: "/assets/spices15.jpg",
    mainProducts: "Premium Spices, Herbal Seasonings",
    altText: "Sandeep - Quality Spice Supplier in Delhi",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "Sandeep - Your Trusted Supplier of Fresh Spices",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "210",
    responseRate: "88%",
    whatsappConfirmed: true,
  },

  {
    _id: "sandeep-delhi",
    name: "Sandeep",
    email: "sandeep@gmail.com",
    password: "12345678",
    mobileNumber: "9311758847",
    companyName: "Sandeep",
    statename: "Delhi",
    cityname: "Delhi",
    productOrService: "Spices",
    imgSrc: "/assets/sices20.jpg",
    mainProducts: "High-Quality Spices, Seasoning Blends",
    altText: "Sandeep - Premium Spice Supplier in Delhi",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "Sandeep - Trusted Spices Supplier",
    rating: "4.5",
    ratingPercent: "91%",
    ratingsCount: "180",
    responseRate: "87%",
    whatsappConfirmed: true,
  },
  // Add more items if needed
];

const SpicesFoodProducts = () => {
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
                  <Link to="#">Turmeric</Link>
                </li>
                <li>
                  <Link to="#">Red Chili</Link>
                </li>
                <li>
                  <Link to="#">Black Pepper</Link>
                </li>
                <li>
                  <Link to="#">Cumin</Link>
                </li>
                <li>
                  <Link to="#">Coriander</Link>
                </li>
                <li>
                  <Link to="#">Cardamom</Link>
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
                  <Link to="#">Tamil Nadu</Link>
                </li>
                <li>
                  <Link to="#">Karnataka</Link>
                </li>
                <li>
                  <Link to="#">Andhra Pradesh</Link>
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
                      src="/assets/spices.jpg"
                      width={55}
                      height={55}
                      alt="Turmeric"
                    />
                  </figure>
                  <p className="title">Turmeric</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/spices1.jpg"
                      width={55}
                      height={55}
                      alt="Red Chili"
                    />
                  </figure>
                  <p className="title">Red Chili</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/spices2.jpg"
                      width={55}
                      height={55}
                      alt="Black Pepper"
                    />
                  </figure>
                  <p className="title">Black Pepper</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/spices4.jpg"
                      width={55}
                      height={55}
                      alt="Cumin"
                    />
                  </figure>
                  <p className="title">Cumin</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/spices5.jpg"
                      width={55}
                      height={55}
                      alt="Coriander"
                    />
                  </figure>
                  <p className="title">Coriander</p>
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
                      <Link to={item.path}>
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

export default SpicesFoodProducts;
