import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    name: "Mr. Azhar Khan",
    email: "azhar.khan@celebriapremium.com",
    mobileNumber: "+91 84110 97430",
    companyName: "Celebria",
    productOrService: "Coffee and Chocolate Premix",
    imgSrc: "/assets/celebria2.webp", // Placeholder image path
    altText: "Coffee and Chocolate Premix - Celebria",
    mainProducts: "Instant Coffee Premix, Rich Chocolate Premix",
    years: "1 YRS",
    location: " Phursungi – 412308, Pune",
    tooltipText:
      "Near Royal Enfield Store, Above Aglowmed, Harpale Wasti, Phursungi – 412308, Pune",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "120",
    responseRate: "85%",
    path: "/celebria",
  },

  {
    name: "Jayanta Madhab",
    email: "Jayanta123@gmail.com",
    mobileNumber: "8471806497",
    companyName: "Join MD at Pragjyotish Tea",
    productOrService: "Tea",
    imgSrc: "/assets/tea1.jpeg", // Replace with the correct image path
    altText: "Tea - Join MD at Pragjyotish Tea",
    mainProducts: "Black Tea, Green Tea, Herbal Tea, Assam Tea",
    years: "1 YRS",
    location: "Guwahati, India",
    tooltipText: "789 Tea Estate Road, Guwahati, Assam, India",
    rating: "4.6",
    ratingPercent: "88%",
    ratingsCount: "180",
    responseRate: "85%",
  },
  {
    _id: "a1234567890b012347",
    name: "Mohammed Aafaq",
    email: "mohammed.aafaq@gmail.com",
    password: "afaqmd3005",
    mobileNumber: "9035273477",
    companyName: "MDSuhan Exports",
    productOrService: "Tea, Coffee, Peanut",
    imgSrc: "/assets/tea-coffee.jpeg",
    mainProducts: "Tea, Coffee, Peanuts, Dry Fruits",
    altText: "Tea, Coffee, Peanuts - MDSuhan Exports",
    years: "1 YRS",
    location: "Chennai, Tamil Nadu, India",
    tooltipText: "Sector 5, Industrial Park, Chennai, Tamil Nadu, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "55",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
  {
    _id: "b2395874358c123457",
    name: "Amiz",
    email: "Amiz1234@gmail.com",
    password: "amiz1234",
    mobileNumber: "9830860271",
    companyName: "SK Latifuddin",
    productOrService: "Tea",
    imgSrc: "/assets/tea6.jpeg",
    mainProducts: "Tea, Herbal Tea, Green Tea",
    altText: "Tea - SK Latifuddin",
    years: "1 YRS",
    location: "Kolkata, West Bengal, India",
    tooltipText: "Salt Lake City, Kolkata, West Bengal, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "65",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "b1234567890celebria-mahila-laghu-udyog",
    name: "Azhar",
    email: "azhar@gmail.com",
    password: "12345678",
    mobileNumber: "9922774415",
    companyName: "Celebria Mahila Laghu Udyog",
    productOrService: "Tea",
    imgSrc: "/assets/tea3.jpeg",
    mainProducts: "Tea, Herbal Infusions, Spices",
    altText: "Celebria Mahila Laghu Udyog - Tea",
    years: "1 YRS",
    location: "Mumbai, Maharashtra, India",
    tooltipText: "Celebria Mahila Laghu Udyog, Mumbai",
    rating: "4.5",
    ratingPercent: "92%",
    ratingsCount: "85",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
  {
    _id: "rosaline-shaji-kottayam-kerala",
    name: "Rosaline Shaji",
    email: "Rosalineshaji@gmail.com",
    password: "Rosaline Shaji",
    mobileNumber: "9400183641",
    companyName: "Rosaline Shaji Enterprises",
    statename: "Kerala",
    cityname: "Kottayam",
    productOrService: "Tea",
    imgSrc: "/assets/tea7.jpg",
    mainProducts: "Tea",
    altText: "Rosaline Shaji Enterprises - Kottayam",
    years: "1 YRS",
    location: "Kottayam, Kerala",
    tooltipText: "Rosaline Shaji Enterprises, Kottayam",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "180",
    responseRate: "92%",
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const TeaSupplierComp = () => {
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
                  <Link to="#">Black Tea</Link>
                </li>
                <li>
                  <Link to="#">Green Tea</Link>
                </li>
                <li>
                  <Link to="#">Herbal Tea</Link>
                </li>
                <li>
                  <Link to="#">Assam Tea</Link>
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
                  <Link to="#">Assam</Link>
                </li>
                <li>
                  <Link to="#">West Bengal</Link>
                </li>
                <li>
                  <Link to="#">Kerala</Link>
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
                      src="/assets/tea1.jpeg"
                      width={55}
                      height={55}
                      alt="Black Tea"
                    />
                  </figure>
                  <p className="title">Black Tea</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/tea2.jpeg"
                      width={55}
                      height={55}
                      alt="Green Tea"
                    />
                  </figure>
                  <p className="title">Green Tea</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/tea3.jpeg"
                      width={55}
                      height={55}
                      alt="Herbal Tea"
                    />
                  </figure>
                  <p className="title">Herbal Tea</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/tea4.jpeg"
                      width={55}
                      height={55}
                      alt="Assam Tea"
                    />
                  </figure>
                  <p className="title">Assam Tea</p>
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
                      <p className="prds">
                        <span className="label">Product/Service:</span>{" "}
                        {item.productOrService}
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
                    </div>
                    <div className="item">
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

export default TeaSupplierComp;
