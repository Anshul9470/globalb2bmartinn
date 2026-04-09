import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    _id: "artful-endeavor-uttar-pradesh",
    name: "Aqsa",
    email: "abc@gmail.com",
    password: "aqsa@123",
    mobileNumber: "8218268629",
    companyName: "Artful Endeavor",
    productOrService: "Handicraft",
    imgSrc: "/assets/handicraft10.jpg",
    mainProducts: "Handicraft",
    altText: "Artful Endeavor - Uttar Pradesh",
    years: "5 YRS",
    location: "Moradabad, Uttar Pradesh",
    tooltipText: "Artful Endeavor, Moradabad, Uttar Pradesh",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "12",
    responseRate: "85%",
    whatsappConfirmed: true,
  },

  {
    _id: "667426da14fe92087aaec7aa",
    name: "4 Ever Handicraft",
    email: "4everhandicraft@gmail.com",
    mobileNumber: "9313566236",
    companyName: "4 Ever Handicraft",
    productOrService: "handicraft items",
    imgSrc: "/assets/hands.jpg", // You need to provide the correct image path
    mainProducts: "Handmade Crafts, Decor Items, Art Pieces",
    altText: "Handicraft Items - 4 Ever Handicraft",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "456 Handicraft Lane, Chandni Chowk, Delhi, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "150",
    responseRate: "98%",
  },
  {
    name: "Manzar",
    email: "manzar123@gmail.com",
    mobileNumber: "8294166655",
    companyName: "Unique Collection",
    productOrService: "Unique Collection",
    imgSrc: "/assets/hand2.jpg", // Provide the correct image path
    altText: "Unique Collection - Unique Collection",
    mainProducts: "Exclusive Products, Handcrafted Items, Custom Collections",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "123 Unique Street, Craft Area, Delhi, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "60",
    responseRate: "85%",
  },
  {
    name: "Saleem",
    email: "saleem123@gmail.com",
    mobileNumber: "9358831295",
    companyName: "Saleem Handicraft",
    productOrService: "Handicraft",
    imgSrc: "/assets/hand5.jpeg",
    altText: "Handicraft - Saleem Handicraft",
    mainProducts: "Handmade Crafts, Decorative Items, Traditional Artifacts",
    years: "1 YRS",
    location: "Jaipur, India",
    tooltipText: "234 Craft Lane, Artisan District, Jaipur, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "275",
    responseRate: "87%",
  },
  {
    name: "Naved",
    email: "Naved123@gmail.com",
    mobileNumber: "9837134784",
    companyName: "M/S Naved Saqlani Handicrafts",
    productOrService: "Handicrafts",
    imgSrc: "/assets/hand1.jpg", // You need to provide the correct image path
    mainProducts:
      "Wooden carvings, Metal sculptures, Hand-painted ceramics, etc.",
    altText: "Handicrafts - M/S Naved Saqlani Handicrafts",
    years: "2 YRS",
    location: "Jaipur, Rajasthan, India",
    tooltipText: "789, Johari Bazaar, Jaipur - 302003, Rajasthan, India",
    rating: "4.9",
    ratingPercent: "98%",
    ratingsCount: "250",
    responseRate: "99%",
  },
  {
    name: "Pankaj",
    email: "abc@gmail.com",
    mobileNumber: "9413526928",
    companyName: "Sonu Handicrafts",
    productOrService: "Handicraft",
    imgSrc: "/assets/hand6.jpeg",
    altText: "Handicraft - Sonu Handicrafts",
    mainProducts: "Handmade Crafts, Decorative Items, Traditional Artifacts",
    years: "1 YRS",
    location: "Jodhpur, India",
    tooltipText: "456 Craft Lane, Artisan Hub, Jodhpur, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "210",
    responseRate: "88%",
  },
  {
    _id: "j0123456789k012345",
    name: "Mohammad Monis",
    email: "Monis123@gmail.com",
    password: "monis1234",
    mobileNumber: "7533957446",
    companyName: "M.M Traders Moradabad",
    productOrService: "Handicrafts",
    imgSrc: "/assets/handi.jpeg",
    mainProducts: "Brass Handicrafts, Wooden Carvings, Decorative Items",
    altText: "Handicrafts - M.M Traders Moradabad",
    years: "1 YRS",
    location: "Moradabad, Uttar Pradesh, India",
    tooltipText: "Ganj, Moradabad, Uttar Pradesh, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "80",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
  {
    _id: "u1234567890v123456",
    name: "Abdul Wajid",
    email: "abdulwajid5201@gmail.com",
    password: "abdulwajid",
    mobileNumber: "8484961358",
    companyName: "Sarkar Sahab Handicraft",
    productOrService: "Handicraft",
    imgSrc: "/assets/handi1.jpeg",
    mainProducts: "Handicrafts, Wooden Artifacts, Decorative Items",
    altText: "Handicrafts - Sarkar Sahab Handicraft",
    years: "1 YRS",
    location: "Moradabad, Uttar Pradesh, India",
    tooltipText: "Katghar, Moradabad, Uttar Pradesh, India",
    rating: "4.8",
    ratingPercent: "95%",
    ratingsCount: "150",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    _id: "d1234567890wxyz5690",
    name: "Vijay Singh",
    email: "vijaysingh245205@gmail.com",
    password: "vijaysingh@123",
    mobileNumber: "8791497189",
    companyName: "V.S. Handicrafts",
    productOrService: "Handicraft Manufacturer",
    imgSrc: "/assets/handi2.jpeg", // Placeholder for image path
    mainProducts: "Handmade Products, Artisanal Crafts",
    altText: "V.S. Handicrafts - Handicraft Manufacturer",
    years: "1 YRS", // Placeholder for years of experience
    location: "India", // Placeholder for location
    tooltipText: "V.S. Handicrafts, India",
    rating: "4.8", // Placeholder for rating
    ratingPercent: "95%", // Placeholder for rating percentage
    ratingsCount: "150", // Placeholder for ratings count
    responseRate: "92%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "d1234567890wxyz5691",
    name: "Praveen Kumawat",
    email: "ppraveenkumawat@gmail.com",
    password: "praveen@123",
    mobileNumber: "8890737003",
    companyName: "Hardik Handicrafts",
    productOrService: "Handicraft Manufacturer",
    imgSrc: "/assets/handi3.jpeg", // Placeholder for image path
    mainProducts: "Artisanal Handicrafts, Handmade Items",
    altText: "Hardik Handicrafts - Handicraft Manufacturer",
    years: "1 YRS", // Placeholder for years of experience
    location: "India", // Placeholder for location
    tooltipText: "Hardik Handicrafts, India",
    rating: "4.6", // Placeholder for rating
    ratingPercent: "90%", // Placeholder for rating percentage
    ratingsCount: "120", // Placeholder for ratings count
    responseRate: "88%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "rajputana-handicrafts-rajasthan",
    name: "Rahul",
    email: "abc@gmail.com",
    password: "rahul@123",
    mobileNumber: "8459687842",
    companyName: "Rajputana Handicrafts",
    productOrService: "Weapon Handicraft",
    imgSrc: "/assets/handicraft11.jpg",
    mainProducts: "Weapon Handicraft",
    altText: "Rajputana Handicrafts - Rajasthan",
    years: "1 YRS",
    location: "Chittorgarh, Rajasthan",
    tooltipText: "Rajputana Handicrafts, Chittorgarh, Rajasthan",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "25",
    responseRate: "90%",
    whatsappConfirmed: true,
  },

  {
    _id: "a1234567890abc5678",
    name: "Dinesh Mistry",
    email: "dinesh567@gmail.com",
    password: "dinesh@123",
    mobileNumber: "9825574454",
    companyName: "Shree Vishwakarma Handicrafts",
    productOrService: "Handicraft Manufacturer",
    imgSrc: "/assets/handi4.jpeg", // Placeholder for image path
    mainProducts: "Handicrafts, Artifacts, Traditional Crafts",
    altText: "Shree Vishwakarma Handicrafts - Handicraft Manufacturer",
    years: "1 YRS", // Placeholder for years of experience
    location: "India", // Placeholder for location
    tooltipText: "Shree Vishwakarma Handicrafts, India",
    rating: "4.7", // Placeholder for rating
    ratingPercent: "94%", // Placeholder for rating percentage
    ratingsCount: "150", // Placeholder for ratings count
    responseRate: "90%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "c1234567890xyz5683",
    name: "M D Ashrafi",
    email: "mohddanishashrafi@gmail.com",
    password: "9627879286",
    mobileNumber: "9627879286",
    companyName: "Artique Craft",
    productOrService: "Handicrafts",
    imgSrc: "/assets/handi5.jpeg",
    mainProducts: "Handcrafted Items, Traditional Art, Home Decor",
    altText: "Artique Craft - Handicrafts",
    years: "1 YRS",
    location: "Moradabad, Uttar Pradesh, India",
    tooltipText: "Artique Craft, Moradabad",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "85",
    responseRate: "87%",
    whatsappConfirmed: true,
  },
  {
    name: "Mahesh Wavhal",
    email: "maheshwavhal14@gmail.com",
    password: "Mahesh Wavhal",
    mobileNumber: "9762748503",
    companyName: "mycreationsshop",
    productOrService: "Handicraft",
    imgSrc: "/assets/handi6.jpeg",
    mainProducts: "Handicraft Items, Decorative Pieces, Artifacts",
    altText: "mycreationsshop - Handicraft",
    years: "1 YRS",
    location: "Ahmednagar, Maharashtra, India",
    tooltipText: "mycreationsshop, Ahmednagar",
    rating: "4.2",
    ratingPercent: "85%",
    ratingsCount: "40",
    responseRate: "92%",
    whatsappConfirmed: true,
  },
  {
    _id: "royal-services-jaipur",
    name: "Prajjwal Singh Shekhawat",
    email: "PrajjwalSinghShekhawat@gmail.com",
    password: "12345678",
    mobileNumber: "7073224889",
    companyName: "Royal Services",
    productOrService: "Handicraft",
    imgSrc: "/assets/handi7.jpg",
    mainProducts: "Handicrafts",
    altText: "Royal Services - Handicraft",
    years: "1 YRS",
    location: "Jaipur, Rajasthan, India",
    tooltipText: "Royal Services, Handicrafts, Jaipur",
    rating: "4.3",
    ratingPercent: "86%",
    ratingsCount: "30",
    responseRate: "90%",
    whatsappConfirmed: false,
  },
  {
    _id: "arman-handicraft-meerut",
    name: "Khalid Khan",
    email: "KhalidKhan@gmail.com",
    password: "12345678",
    mobileNumber: "7310731834",
    companyName: "Arman Handicraft",
    productOrService: "Handicraft",
    imgSrc: "/assets/handi8.jpg",
    mainProducts: "Handicraft Items",
    altText: "Arman Handicraft - Handicraft",
    years: "1 YRS",
    location: "Meerut, India",
    tooltipText: "Arman Handicraft, Handicraft, Meerut",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "33",
    responseRate: "83%",
    whatsappConfirmed: true,
  },
  {
    _id: "craftiles-by-jaipur-dharohar-rajasthan-jaipur",
    name: "Craftiles by Jaipur Dharohar",
    email: "govindi.handicrafts@gmail.com",
    password: "Glob@9929",
    mobileNumber: "9929399190",
    companyName: "Craftiles by Jaipur Dharohar",
    statename: "Rajasthan",
    cityname: "Jaipur",
    productOrService: "Handicrafts for Home Decor",
    imgSrc: "/assets/handicraft12.jpg",
    mainProducts: "Handicrafts for Home Decor",
    altText: "Craftiles by Jaipur Dharohar - Jaipur",
    years: "1 YRS",
    location: "Jaipur, Rajasthan",
    tooltipText: "Craftiles by Jaipur Dharohar, Jaipur",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "176",
    responseRate: "97%",
    whatsappConfirmed: true,
  },
];

const HandicraftItems = () => {
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
                  <Link to="#">Handmade Crafts</Link>
                </li>
                <li>
                  <Link to="#">Decor Items</Link>
                </li>
                <li>
                  <Link to="#">Art Pieces</Link>
                </li>
                <li>
                  <Link to="#">Traditional Art</Link>
                </li>
                <li>
                  <Link to="#">Ethnic Crafts</Link>
                </li>
                <li>
                  <Link to="#">Home Decor</Link>
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
                  <Link to="#">Delhi</Link>
                </li>
                <li>
                  <Link to="#">Karnataka</Link>
                </li>
                <li>
                  <Link to="#">Gujarat</Link>
                </li>
                <li>
                  <Link to="#">Tamil Nadu</Link>
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
                      src="/assets/hand.avif"
                      width={55}
                      height={55}
                      alt="Handmade Crafts"
                    />
                  </figure>
                  <p className="title">Handmade Crafts</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/hand1.jpg"
                      width={55}
                      height={55}
                      alt="Decor Items"
                    />
                  </figure>
                  <p className="title">Decor Items</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/hand2.jpg"
                      width={55}
                      height={55}
                      alt="Art Pieces"
                    />
                  </figure>
                  <p className="title">Art Pieces</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/hand3.jpeg"
                      width={55}
                      height={55}
                      alt="Traditional Art"
                    />
                  </figure>
                  <p className="title">Traditional Art</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/hand4.jpg"
                      width={55}
                      height={55}
                      alt="Ethnic Crafts"
                    />
                  </figure>
                  <p className="title">Ethnic Crafts</p>
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

export default HandicraftItems;
