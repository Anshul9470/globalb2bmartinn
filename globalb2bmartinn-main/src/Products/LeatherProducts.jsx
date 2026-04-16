import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    _id: "667bb8e29644befaa9547ffa", // Replace with actual ID if applicable
    name: "Nida Tanners",
    email: "NIDATANNERS@GMAIL.COM",
    mobileNumber: "9140794593",
    companyName: "Nida Tanners",
    productOrService: "Leather Products Manufacturer",
    imgSrc: "/assets/leature6.jpeg", // Provide correct image path
    mainProducts: "Leather Bags, Wallets, Jackets",
    altText: "Leather Products - Nida Tanners",
    years: "1 YRS",
    location: "Mumbai", // Update with actual location
    tooltipText: "123 Leather Manufacturing Lane, City, Country", // Provide tooltip text
    rating: "4.9", // Rating out of 5
    ratingPercent: "98%", // Rating percentage
    ratingsCount: "250", // Number of ratings
    responseRate: "99%", // Response rate percentage
  },
  {
    name: "Shahrukh",
    email: "shahrukh@gmail.com",
    mobileNumber: "7808775238",
    companyName: "Leather On Demand",
    productOrService: "Leather Products Manufacture",
    imgSrc: "/assets/leature1.jpeg",
    altText: "Leather Products Manufacture - Leather On Demand",
    mainProducts: "Leather Bags, Wallets, Jackets, Belts",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "789 Leather Lane, Fashion District, Mumbai, India",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "420",
    responseRate: "92%",
  },
  {
    name: "Shubham",
    email: "info@winnernippon.com",
    mobileNumber: "7807799938",
    companyName: "Winner Nippon",
    productOrService: "Leather Raw Material Manufacture",
    imgSrc: "/assets/leature8.jpeg",
    altText: "Leather Raw Material Manufacture - Winner Nippon",
    mainProducts: "Raw Leather, Leather Hides, Leather Pelts",
    years: "5 YRS",
    location: "Chennai, India",
    tooltipText: "456 Leather Lane, Manufacturing Hub, Chennai, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "330",
    responseRate: "88%",
  },

  {
    name: "Sultan",
    email: "sultan@gmail.com",
    mobileNumber: "8299880013",
    companyName: "Eagle Exports",
    productOrService: "Leather Products & Raw Material",
    imgSrc: "/assets/leature7.jpeg",
    altText: "Leather Products & Raw Material - Eagle Exports",
    mainProducts: "Leather Goods, Raw Leather, Hides, Leather Accessories",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "123 Export Street, Industrial Zone, Delhi, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "370",
    responseRate: "90%",
  },
  {
    name: "Mohd Ahmad",
    email: "joyainternational@gmail.com",
    mobileNumber: "8115862424",
    companyName: "Joya International",
    productOrService: "Leather Products Manufacture",
    imgSrc: "/assets/leature9.jpeg",
    altText: "Leather Products Manufacture - Joya International",
    mainProducts: "Leather Bags, Wallets, Belts, Jackets",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "789 Leather Avenue, Fashion District, Delhi, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "350",
    responseRate: "89%",
  },
  {
    name: "Mohd Anas",
    email: "mohdanas@gmail.com",
    mobileNumber: "8583091202",
    companyName: "Protective Leather",
    productOrService: "Hand Gloves & PPE Manufacturer",
    imgSrc: "/assets/leather3.webp",
    altText: "Hand Gloves & PPE Manufacturer - Protective Leather",
    mainProducts: "Safety Gloves, Protective Gear, PPE Kits, Workwear",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "123 Safety Road, Industrial Zone, Mumbai, India",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "320",
    responseRate: "92%",
  },
  {
    _id: "7c8e4b2f9d6e3a001f9b2c7d", // Random unique ID
    name: "Srinivasa",
    email: "srinivasagencies81@gmail.com",
    password: "Srinivasa", // Including the password as specified
    mobileNumber: "9346984301",
    companyName: "Srinivasa Agencies",
    productOrService: "Non-Woven Bag Machine",
    imgSrc: "/assets/bag6.jpeg", // Example image path
    mainProducts: "Non-Woven Bag Machines, Printing Machines, Cutting Machines",
    altText: "Non-Woven Bag Machine - Srinivasa Agencies",
    years: "1 YRS",
    location: "Hyderabad, India",
    tooltipText: "789 Machinery Lane, Hyderabad, India",
    rating: "4.4",
    ratingPercent: "89%",
    ratingsCount: "75",
    responseRate: "98%",
    whatsappConfirmed: true,
  },
  {
    _id: "d2e3f4g5h6i789012345678", // Random unique ID
    name: "Ganesh Rane",
    email: "GaneshRane@gmail.com",
    password: "ganesh@123", // Including the password as specified
    mobileNumber: "9892108088",
    companyName: "New India Global Enterprises",
    productOrService: "Leather Products Manufacturing",
    imgSrc: "/assets/leather4.jpeg", // Example image path
    mainProducts: "Leather Bags, Belts, Wallets, Shoes",
    altText: "Leather Products - New India Global Enterprises",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "123 Leather Street, Mumbai, India",
    rating: "4.8",
    ratingPercent: "97%",
    ratingsCount: "150",
    responseRate: "99%",
    whatsappConfirmed: true,
  },
  {
    name: "Amol Ketkar",
    email: "AmolKetkar@gmail.com",
    password: "12345678",
    mobileNumber: "8421218766",
    companyName: "Amol Ketkar",
    productOrService: "Leather",
    imgSrc: "/assets/lather.jpg",
    mainProducts: "Leather Bags, Wallets, Accessories",
    altText: "Amol Ketkar - Leather Products",
    years: "1 YRS",
    location: "Pune, Maharashtra, India",
    tooltipText: "Amol Ketkar, Pune",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "80",
    responseRate: "86%",
    whatsappConfirmed: true,
  },
];

const LeatherProductsManufacturer = () => {
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
                  <Link to="#">Leather Bags</Link>
                </li>
                <li>
                  <Link to="#">Wallets</Link>
                </li>
                <li>
                  <Link to="#">Jackets</Link>
                </li>
                <li>
                  <Link to="#">Belts</Link>
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
                  <Link to="#">State 1</Link>
                </li>
                <li>
                  <Link to="#">State 2</Link>
                </li>
                <li>
                  <Link to="#">State 3</Link>
                </li>
                <li>
                  <Link to="#">State 4</Link>
                </li>
                <li>
                  <Link to="#">State 5</Link>
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
                      src="/assets/leature2.jpeg"
                      width={55}
                      height={55}
                      alt="Leather Bags"
                    />
                  </figure>
                  <p className="title">Leather Bags</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/leature3.jpeg"
                      width={55}
                      height={55}
                      alt="Wallets"
                    />
                  </figure>
                  <p className="title">Wallets</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/leature4.jpeg"
                      width={55}
                      height={55}
                      alt="Leather Jackets"
                    />
                  </figure>
                  <p className="title">Leather Jackets</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/leather2.jpeg"
                      width={55}
                      height={55}
                      alt="Leather Belts"
                    />
                  </figure>
                  <p className="title">Leather Belts</p>
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

export default LeatherProductsManufacturer;
