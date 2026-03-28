import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    _id: "k90123456789abcdef01234",
    name: "Abhinav",
    email: "srisatymev@gmail.com",
    password: "Abhinav@9",
    mobileNumber: "8506927533",
    companyName: "Satnarain Food Products",
    productOrService: "Food Products",
    imgSrc: "/assets/food1.jpeg",
    mainProducts: "Snacks, Packaged Foods, Beverages, Spices",
    altText: "Food Products - Satnarain Food Products",
    years: "1 YRS",
    location: "Jaipur, India",
    tooltipText: "321 Food Park, Jaipur, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "110",
    responseRate: "95%",
  },
  {
    _id: "k123456789abcdef0123", // Random unique ID
    name: "Abhinav",
    email: "srisatymev@gmail.com",
    password: "Abhinav@9", // Including the password as specified
    mobileNumber: "8506927533",
    companyName: "Satnarain Food Products",
    productOrService: "Food Products",
    imgSrc: "/assets/foo2.jpeg", // Example image path
    mainProducts: "Packaged Snacks, Canned Goods, Instant Meals",
    altText: "Food Products - Satnarain Food Products",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "123 Market Street, Delhi, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "85",
    responseRate: "95%",
    whatsappConfirmed: true,
  },
  {
    name: "Murari Snacks",
    email: "murarisnacks@gmail.com",
    password: "12345678",
    mobileNumber: "9824846224",
    companyName: "Murari Snacks",
    productOrService: "Namkin",
    imgSrc: "/assets/snacks1.jpeg",
    mainProducts: "Namkin, Snacks, Savories",
    altText: "Murari Snacks - Namkin",
    years: "1 YRS",
    location: "Maharashtra, India",
    tooltipText: "Murari Snacks, Maharashtra",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "60",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    name: "Rajesh Jhaveri",
    email: "abc@gmail.com",
    password: "rajesh@123",
    mobileNumber: "9825040326",
    companyName: "Jhaveri Organic Farms",
    productOrService: "Organic Food Grains, Cereals, Pulses",
    imgSrc: "/assets/food8.jpg",
    mainProducts: "Organic Food Grains, Cereals, Pulses",
    altText: "Jhaveri Organic Farms - Organic Food Grains",
    years: "1 YRS",
    location: "Vadodara, Gujarat, India",
    tooltipText: "Jhaveri Organic Farms, Organic Food Grains, Vadodara",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "25",
    responseRate: "92%",
    whatsappConfirmed: false,
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
    name: "Dhiren Joshi",
    email: "dhirenfoods@gmail.com",
    password: "dhiren joshi",
    mobileNumber: "9909227595",
    companyName: "Dhiren Foods",
    productOrService: "Food Products",
    imgSrc: "/assets/food2.jpeg",
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
    _id: "south-indian-snacks-items-coimbatore",
    name: "Jebastin",
    email: "7418907170@gmail.com",
    password: "7418907170",
    mobileNumber: "7418907170",
    companyName: "South Indian Snacks Items",
    statename: "Tamil Nadu",
    cityname: "Coimbatore",
    productOrService: "Snacks Items",
    imgSrc: "/assets/snacks2.jpg",
    mainProducts: "Traditional South Indian Snacks, Sweets, Savory Items",
    altText:
      "South Indian Snacks Items - Authentic South Indian Snacks Manufacturer",
    years: "1 YRS",
    location: "Coimbatore, Tamil Nadu, India",
    tooltipText: "South Indian Snacks Items - Taste of Tradition",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "180",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
];

const FoodProductsStore = () => {
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
                  <Link to="#">Snacks</Link>
                </li>
                <li>
                  <Link to="#">Packaged Foods</Link>
                </li>
                <li>
                  <Link to="#">Beverages</Link>
                </li>
                <li>
                  <Link to="#">Spices</Link>
                </li>
                <li>
                  <Link to="#">Condiments</Link>
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
                  <Link to="#">Rajasthan</Link>
                </li>
                <li>
                  <Link to="#">Maharashtra</Link>
                </li>
                <li>
                  <Link to="#">Uttar Pradesh</Link>
                </li>
                <li>
                  <Link to="#">Gujarat</Link>
                </li>
                <li>
                  <Link to="#">Punjab</Link>
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
                      src="/assets/food1.jpeg"
                      width={55}
                      height={55}
                      alt="Snacks"
                    />
                  </figure>
                  <p className="title">Snacks</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/food2.jpeg"
                      width={55}
                      height={55}
                      alt="Packaged Foods"
                    />
                  </figure>
                  <p className="title">Packaged Foods</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/food3.jpeg"
                      width={55}
                      height={55}
                      alt="Beverages"
                    />
                  </figure>
                  <p className="title">Beverages</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/food4.jpeg"
                      width={55}
                      height={55}
                      alt="Spices"
                    />
                  </figure>
                  <p className="title">Spices</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/food5.jpeg"
                      width={55}
                      height={55}
                      alt="Condiments"
                    />
                  </figure>
                  <p className="title">Condiments</p>
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

export default FoodProductsStore;
