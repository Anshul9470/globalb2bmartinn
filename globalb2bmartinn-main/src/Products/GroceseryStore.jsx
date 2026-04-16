import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    name: "Bageswari",
    email: "bageswariranganathan@gmail.com",
    mobileNumber: "8220489369",
    companyName: "ABK Global Impex Pvt Ltd",
    productOrService: "Grocery",
    imgSrc: "/assets/grocery.jpeg", // Ensure the correct image path
    altText: "Grocery - ABK Global Impex Pvt Ltd",
    mainProducts: "Groceries, Organic Groceries, Food Products",
    years: "1 YRS",
    location: "Tamil Nadu, India",
    tooltipText: "34, Industrial Area, Chennai, Tamil Nadu, India",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "150",
    responseRate: "90%",
  },
  {
    _id: "z3a4b5c6d7e8f9g0h1i2j3k4", // Random unique ID
    name: "Bimal Agarwal",
    email: "bimalagarwal006@gmail.com",
    mobileNumber: "9040030306",
    companyName: "Om Exim Traders",
    productOrService: "Food Products",
    imgSrc: "/assets/food7.jpeg", // Example image path
    mainProducts: "Packaged Foods, Snacks, Beverages, Dry Goods",
    altText: "Food Products - Om Exim Traders",
    years: "1 YRS",
    location: "Kolkata, India",
    tooltipText: "88 Food Avenue, Kolkata, India",
    rating: "4.4",
    ratingPercent: "89%",
    ratingsCount: "52",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    name: "Menkar Foods",
    email: "menkarfoods@gmail.com",
    password: "12345678",
    mobileNumber: "9284836338",
    companyName: "Menkar Foods",
    productOrService: "Foods",
    imgSrc: "/assets/food1.jpeg",
    mainProducts: "Processed Foods, Snacks, Packaged Foods",
    altText: "Menkar Foods - Processed Foods",
    years: "1 YRS",
    location: "Maharashtra, India",
    tooltipText: "Menkar Foods, Maharashtra",
    rating: "4.6",
    ratingPercent: "90%",
    ratingsCount: "110",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    name: "CX",
    email: "RIDDHIFOODPRODUCTS23@gmail.com",
    password: "cx12345678",
    mobileNumber: "6354190432",
    companyName: "RIDDHI FOOD PRODUCTS",
    productOrService: "RIDDHI FOOD PRODUCTS",
    imgSrc: "/assets/snack2.jpeg",
    mainProducts: "Snacks, Packaged Foods, Namkeen",
    altText: "RIDDHI FOOD PRODUCTS - Snacks and Namkeen",
    years: "1 YRS",
    location: "Ahmedabad, Gujarat, India",
    tooltipText: "RIDDHI FOOD PRODUCTS, Ahmedabad",
    rating: "4.7",
    ratingPercent: "93%",
    ratingsCount: "125",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
  {
    _id: "shree-nagaammal-food-products-coimbatore",
    name: "G Nagamanikandan",
    email: "snfp2007mani@gmail.com",
    password: "9087424344",
    mobileNumber: "9087424344",
    companyName: "shree Nagaammal food products",
    productOrService: "noodles",
    imgSrc: "/assets/noodle1.jpg",
    mainProducts: "noodles",
    altText: "shree Nagaammal food products - Noodles",
    years: "1 YRS",
    location: "Coimbatore, Tamil Nadu, India",
    tooltipText: "shree Nagaammal food products, Noodles, Coimbatore",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "40",
    responseRate: "89%",
    whatsappConfirmed: true,
  },
  {
    _id: "zishan-company-moradabad",
    name: "Zishan",
    email: "zishan@gmail.com",
    password: "12345678",
    mobileNumber: "6397612318",
    companyName: "Zishan Company",
    productOrService: "Handicrafts",
    imgSrc: "/assets/general1.jpg",
    mainProducts: "General Store",
    altText: "Zishan Company - Handicrafts",
    years: "1 YRS",
    location: "Moradabad, India",
    tooltipText: "Zishan Company, Handicrafts, Moradabad",
    rating: "4.3",
    ratingPercent: "86%",
    ratingsCount: "28",
    responseRate: "78%",
    whatsappConfirmed: true,
  },
  {
    name: "Dhiren Joshi",
    email: "dhirenfoods@gmail.com",
    password: "dhiren joshi",
    mobileNumber: "9909227595",
    companyName: "Dhiren Foods",
    productOrService: "Food Products",
    imgSrc: "/assets/food3.jpeg",
    mainProducts: "Snacks, Spices, Grains",
    altText: "Dhiren Joshi - Dhiren Foods",
    years: "1 YRS",
    location: "Bhuj, Gujrat, India",
    tooltipText: "Dhiren Joshi, Bhuj",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "105",
    responseRate: "92%",
    whatsappConfirmed: true,
  },
  {
    _id: "vishnukumar-emdi-hyderabad-telangana",
    name: "Vishnukumar Emdi",
    email: "abc@gmail.com",
    password: "Vishnukumar Emdi",
    mobileNumber: "9494949937",
    companyName: "Millets Foods",
    statename: "Telangana",
    cityname: "Hyderabad",
    productOrService: "Healthy Fitness Millets Foods",
    imgSrc: "/assets/food9.jpg",
    mainProducts: "Healthy Fitness Millets Foods",
    altText: "Millets Foods - Healthy Fitness Millets Supplier in Hyderabad",
    years: "1 YRS",
    location: "Hyderabad, Telangana",
    tooltipText: "Millets Foods, Hyderabad - Healthy Fitness Millets Supplier",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "250",
    responseRate: "89%",
    whatsappConfirmed: true,
  },
  {
    _id: "nikunj-surat",
    name: "Nikunj",
    email: "nikunj@gmail.com",
    password: "12345678",
    mobileNumber: "7980717542",
    companyName: "Nikunj",
    statename: "",
    cityname: "Surat",
    productOrService: "Food Beverage",
    imgSrc: "/assets/food-berverage.jpg",
    mainProducts: "Food and Beverage Solutions",
    altText: "Nikunj - Quality Food and Beverage Supplier in Surat",
    years: "1 YRS",
    location: "Surat, Gujarat, India",
    tooltipText: "Nikunj - Your Trusted Food and Beverage Supplier",
    rating: "4.8",
    ratingPercent: "94%",
    ratingsCount: "150",
    responseRate: "90%",
    whatsappConfirmed: false,
  },

  // Additional classified items can be added here
];

const Groceries = () => {
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
                  <Link to="#">Groceries</Link>
                </li>
                <li>
                  <Link to="#">Organic Groceries</Link>
                </li>
                <li>
                  <Link to="#">Food Products</Link>
                </li>
                <li>
                  <Link to="#">Household Supplies</Link>
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
                  <Link to="#">Tamil Nadu</Link>
                </li>
                <li>
                  <Link to="#">Karnataka</Link>
                </li>
                <li>
                  <Link to="#">Maharashtra</Link>
                </li>
                <li>
                  <Link to="#">Kerala</Link>
                </li>
                <li>
                  <Link to="#">Andhra Pradesh</Link>
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
                      src="/assets/grocery1.jpeg"
                      width={55}
                      height={55}
                      alt="Groceries"
                    />
                  </figure>
                  <p className="title">Groceries</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/grocery2.jpeg"
                      width={55}
                      height={55}
                      alt="Organic Groceries"
                    />
                  </figure>
                  <p className="title">Organic Groceries</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/grocery3.jpeg"
                      width={55}
                      height={55}
                      alt="Food Products"
                    />
                  </figure>
                  <p className="title">Food Products</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/grocery4.jpeg"
                      width={55}
                      height={55}
                      alt="Household Supplies"
                    />
                  </figure>
                  <p className="title">Household Supplies</p>
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

export default Groceries;
