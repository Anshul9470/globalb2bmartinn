import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    _id: "ajantashoes-kolkata",
    name: "Anugya Singh",
    email: "anugyasingh@ajantashoes.com",
    password: "Anugya Singh",
    mobileNumber: "7828660580",
    companyName: "Ajanta Shoes",
    statename: "West Bengal",
    cityname: "Kolkata",
    productOrService: "Gifting Items, Handbags, Shoes, Accessories, Wallets",
    imgSrc: "/assets/ajantagift1.jpg",
    mainProducts: "Gifting Items, Handbags, Shoes, Accessories, Wallets",
    altText:
      "Ajanta Shoes - Gifting Items, Handbags, Shoes, Accessories, Wallets",
    years: "1 YRS",
    location: "Kolkata, West Bengal",
    tooltipText:
      "Ajanta Shoes - Gifting Items, Handbags, Accessories, Wallets, Kolkata",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "150",
    responseRate: "92%",
    whatsappConfirmed: true,
  },
  {
    _id: "h6i7890123456789abcdef01",
    name: "Inzamam Ali",
    email: "inzamam123@gmail.com",
    password: "inzamam 123",
    mobileNumber: "9029992220",
    companyName: "Manufacture Trophy Corporate Gifts",
    productOrService: "Corporate Gifts",
    imgSrc: "/assets/gift6.jpeg",
    mainProducts: "Trophies, Awards, Plaques, Customized Gifts",
    altText: "Corporate Gifts - Manufacture Trophy Corporate Gifts",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "456 Gift Avenue, Delhi, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "95",
    responseRate: "94%",
  },
  {
    _id: "start-your-clothing-assam",
    name: "Bishal Bhattarai",
    email: "BishalBhattarai@gmail.com",
    password: "12345678",
    mobileNumber: "9707719731",
    companyName: "Start Your Clothing",
    productOrService: "Trophy",
    imgSrc: "/assets/trophy1.jpg",
    mainProducts: "Trophies",
    altText: "Start Your Clothing - Trophy",
    years: "1 YRS",
    location: "Assam, India",
    tooltipText: "Start Your Clothing, Trophy, Assam",
    rating: "4.3",
    ratingPercent: "86%",
    ratingsCount: "28",
    responseRate: "80%",
    whatsappConfirmed: true,
  },
];

const CorporateGiftsStore = () => {
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
                  <Link to="#">Trophies</Link>
                </li>
                <li>
                  <Link to="#">Awards</Link>
                </li>
                <li>
                  <Link to="#">Plaques</Link>
                </li>
                <li>
                  <Link to="#">Customized Gifts</Link>
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
                {/* Add more states if needed */}
              </ul>
            </div>
          </div>
        </div>
      </aside>
      <main>
        <ul className="classfied-wrap">
          <section className="section">
            <p className="sect-title">Explore by Categories</p>
            <div className="horprd expcatg" id="expcatg">
              <div className="item">
                <Link to="#">
                  <div className="horprd-box">
                    <figure>
                      <img
                        src="/assets/gift1.jpeg"
                        width={55}
                        height={55}
                        alt="Trophies"
                      />
                    </figure>
                    <p className="title">Trophies</p>
                  </div>
                </Link>
              </div>
              <div className="item">
                <Link to="#">
                  <div className="horprd-box">
                    <figure>
                      <img
                        src="/assets/gift2.jpeg"
                        width={55}
                        height={55}
                        alt="Awards"
                      />
                    </figure>
                    <p className="title">Awards</p>
                  </div>
                </Link>
              </div>
              <div className="item">
                <Link to="#">
                  <div className="horprd-box">
                    <figure>
                      <img
                        src="/assets/gift3.jpeg"
                        width={55}
                        height={55}
                        alt="Plaques"
                      />
                    </figure>
                    <p className="title">Plaques</p>
                  </div>
                </Link>
              </div>
              <div className="item">
                <Link to="#">
                  <div className="horprd-box">
                    <figure>
                      <img
                        src="/assets/gift4.jpeg"
                        width={55}
                        height={55}
                        alt="Customized Gifts"
                      />
                    </figure>
                    <p className="title">Customized Gifts</p>
                  </div>
                </Link>
              </div>
              <div className="item">
                <Link to="#">
                  <div className="horprd-box">
                    <figure>
                      <img
                        src="/assets/gift5.jpeg"
                        width={55}
                        height={55}
                        alt="Corporate Gifts"
                      />
                    </figure>
                    <p className="title">Corporate Gifts</p>
                  </div>
                </Link>
              </div>
            </div>
          </section>

          {classifiedData.map((item) => (
            <li key={item._id}>
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

export default CorporateGiftsStore;
