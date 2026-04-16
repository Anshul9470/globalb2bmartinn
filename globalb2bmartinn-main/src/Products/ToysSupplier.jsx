import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const toyData = [
  {
    name: "Vikas",
    email: "vikastraders@gmail.com",
    mobileNumber: "9915184368",
    companyName: "Vikas Sports",
    productOrService: "SPORTS ACCESSORIES",
    imgSrc: "/assets/spos.jpg", // You need to provide the correct image path
    altText: "Sports Accessories -Traders",
    mainProducts: "Sports Shoes, Sports Bag, Sports Wear, etc",
    years: "1 YRS",
    location: "Arya Nagar, Suraj Kund Road Meerut, Uttar Pradesh India",
    tooltipText: "456 Sports Avenue, Near Stadium, Mumbai, Maharashtra, India",
    rating: "4.0",
    ratingPercent: "98%",
    ratingsCount: "90",
    responseRate: "88%",
  },
  {
    name: "munesh kumar",
    email: "muneshkumar12@gmail.com",
    mobileNumber: "9756906735",
    companyName: "P.K sports",
    productOrService: "Bat",
    imgSrc: "/assets/toy4.jpeg",
    altText: "Bat - P.K sports",
    mainProducts: "Cricket Bats, Sports Equipment, Accessories",
    years: "1 YRS",
    location: "Unknown",
    tooltipText: "123 Sports Lane, Sports City, Anytown, India",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "450",
    responseRate: "90%",
  },
  {
    name: "Vishal Kumar",
    email: "vishalkumar@gmail.com",
    mobileNumber: "9756436745",
    companyName: "V.K Toys",
    productOrService: "Toys",
    imgSrc: "/assets/toy1.jpeg",
    altText: "Toys - V.K Toys",
    mainProducts: "Action Figures, Dolls, Educational Toys",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "456 Toys Street, Toyland, Delhi, India",
    rating: "4.9",
    ratingPercent: "98%",
    ratingsCount: "600",
    responseRate: "92%",
  },
  {
    name: "uday sharam",
    email: "udaysharam12@gmail.com",
    password: "uday sharam1234",
    mobileNumber: "9045752154",
    companyName: "SRM Sports",
    productOrService: "Bats",
    imgSrc: "/assets/toy5.jpeg",
    altText: "Bats - SRM Sports",
    mainProducts: "Cricket Bats, Baseball Bats",
    years: "1 YRS",
    location: "Chennai, Tamil Nadu, India",
    tooltipText: "123 Stadium Road, Sports Complex, Chennai, Tamil Nadu, India",
    rating: "4.7",
    ratingPercent: "95%",
    ratingsCount: "250",
    responseRate: "91%",
  },
  {
    name: "vikas",
    email: "vikassports12@gmail.com",
    password: "vikas sports 1234",
    mobileNumber: "7534949773",
    companyName: "Vikas Sports",
    productOrService: "Bats",
    imgSrc: "/assets/toy6.jpeg",
    altText: "Bats - Vikas Sports",
    mainProducts: "Cricket Bats, Softball Bats",
    years: "1YRS",
    location: "Delhi, India",
    tooltipText: "456 Stadium Avenue, Sports Zone, Delhi, India",
    rating: "4.9",
    ratingPercent: "98%",
    ratingsCount: "300",
    responseRate: "94%",
  },
  {
    name: "shadab",
    email: "shadabcricketsport12@gmail.com",
    password: "shadab cricket sport 1234",
    mobileNumber: "7668257015",
    companyName: "Shadab Cricket Sport",
    productOrService: "Bats",
    imgSrc: "/assets/toy7.jpeg",
    altText: "Bats - Shadab Cricket Sport",
    mainProducts: "Cricket Bats",
    years: "1 YRS",
    location: "Lucknow, Uttar Pradesh, India",
    tooltipText:
      "789 Cricket Ground Road, Sports Arena, Lucknow, Uttar Pradesh, India",
    rating: "4.6",
    ratingPercent: "93%",
    ratingsCount: "220",
    responseRate: "90%",
  },
  {
    name: "govind sharma",
    email: "vanssports12@gmail.com",
    password: "govind sharma 1234",
    mobileNumber: "9870595352",
    companyName: "Vans Sports",
    productOrService: "Bat Stickers",
    imgSrc: "/assets/toy8.jpeg",
    altText: "Bat Stickers - Vans Sports",
    mainProducts: "Custom Bat Stickers",
    years: "1 YR",
    location: "Jaipur, Rajasthan, India",
    tooltipText: "567 Stadium Lane, Bat Sticker Zone, Jaipur, Rajasthan, India",
    rating: "4.4",
    ratingPercent: "90%",
    ratingsCount: "180",
    responseRate: "87%",
  },
  {
    name: "KARAN",
    email: "AaravInternational.jal@gmail.com",
    password: "KARAN 1234",
    mobileNumber: "9888679022",
    companyName: "Aarav International",
    productOrService: "Bats",
    imgSrc: "/assets/toy9.jpeg",
    altText: "Bats - Aarav International",
    mainProducts: "Cricket Bats, Baseball Bats",
    years: "1 YRS",
    location: "Jalandhar, Punjab, India",
    tooltipText: "678 Sports Avenue, Jalandhar, Punjab, India",
    rating: "4.7",
    ratingPercent: "95%",
    ratingsCount: "250",
    responseRate: "91%",
  },
  {
    _id: "t0123456789u012345",
    name: "Faraz Alam",
    email: "dariwalsports12@gmail.com",
    password: "faraz@123",
    mobileNumber: "9897264796",
    companyName: "Dariwal Sports",
    productOrService: "Cricket Bat Manufacturer",
    imgSrc: "/assets/bat1.jpeg",
    mainProducts: "Cricket Bats, Sports Equipment",
    altText: "Cricket Bat Manufacturer - Dariwal Sports",
    years: "1 YRS",
    location: "Meerut, Uttar Pradesh, India",
    tooltipText: "Suraj Kund, Meerut, Uttar Pradesh, India",
    rating: "4.9",
    ratingPercent: "97%",
    ratingsCount: "200",
    responseRate: "94%",
    whatsappConfirmed: true,
  },
  {
    _id: "w3456789012x345678",
    name: "Mr. Dubal",
    email: "Jk.sports2016@gmail.com",
    password: "dubal@123",
    mobileNumber: "8279958841",
    companyName: "Mansha Sports",
    productOrService: "Shuttlecock Manufacturer",
    imgSrc: "/assets/shuttlecock.jpeg",
    mainProducts: "Shuttlecocks, Sports Equipment",
    altText: "Shuttlecock Manufacturer - Mansha Sports",
    years: "1 YRS",
    location: "Jalandhar, Punjab, India",
    tooltipText: "Kangniwal, Jalandhar, Punjab, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "85",
    responseRate: "89%",
    whatsappConfirmed: true,
  },
  {
    _id: "y5678901234z567890",
    name: "MD. Danish",
    email: "newtodaysports@gmail.com",
    password: "danish123@4",
    mobileNumber: "9760132047",
    companyName: "Today Sports",
    productOrService: "Cricket Bat Manufacturer",
    imgSrc: "/assets/bat7.jpeg",
    mainProducts: "Cricket Bats, Sports Equipment, Protective Gear",
    altText: "Cricket Bat Manufacturer - Today Sports",
    years: "1 YRS",
    location: "Aurangabad, Maharashtra, India",
    tooltipText: "Cidco, Aurangabad, Maharashtra, India",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "130",
    responseRate: "93%",
    whatsappConfirmed: true,
  },
  {
    _id: "rolex-sports-meerut",
    name: "Pervesh",
    email: "pervesh@gmail.com",
    password: "123456789",
    mobileNumber: "9557100409",
    companyName: "Rolex Sports",
    productOrService: "Bat",
    imgSrc: "/assets/bat2.jpg",
    mainProducts: "Sports Equipment - Bat",
    altText: "Rolex Sports - Bat",
    years: "1 YRS",
    location: "Meerut, India",
    tooltipText: "Rolex Sports, Bat, Meerut",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "35",
    responseRate: "77%",
    whatsappConfirmed: true,
  },
  {
    _id: "sp-cricket-sports-meerut",
    name: "Nisha",
    email: "nisha@gmail.com",
    password: "12345678",
    mobileNumber: "8979447671",
    companyName: "SP Cricket Sports",
    productOrService: "Bats",
    imgSrc: "/assets/cricket-bat1.jpg",
    mainProducts: "Cricket Bats",
    altText: "SP Cricket Sports - Bats",
    years: "1 YRS",
    location: "Meerut, India",
    tooltipText: "SP Cricket Sports, Bats, Meerut",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "40",
    responseRate: "84%",
    whatsappConfirmed: true,
  },

  // Add more toy items here if needed
];

const ToysSupplier = () => {
  return (
    <div className="main-box">
      <aside>
        {/* Filters section */}
        <div className="flt-box-wrap">
          <div className="flt-box mb-0 flt-head">Filters By</div>
          <div className="flt-box bdrt-0">
            <p className="flt-title">Related Categories</p>
            <div className="flt-content">
              <ul className="flt-list cust-scroll">
                <li>
                  <Link to="#">Action Figures</Link>
                </li>
                <li>
                  <Link to="#">Dolls</Link>
                </li>
                <li>
                  <Link to="#">Educational Toys</Link>
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
                  <Link to="#">Gujarat</Link>
                </li>
                <li>
                  <Link to="#">Tamil Nadu</Link>
                </li>
                <li>
                  <Link to="#">Karnataka</Link>
                </li>
                <li>
                  <Link to="#">Uttar Pradesh</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
      <main>
        <section className="section">
          <p className="sect-title">Explore Toy Suppliers</p>
          {/* Categories section */}
          <div className="horprd expcatg" id="expcatg">
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/toy1.jpeg"
                      width={55}
                      height={55}
                      alt="Action Figures"
                    />
                  </figure>
                  <p className="title">Action Figures</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/toy2.jpeg"
                      width={55}
                      height={55}
                      alt="Dolls"
                    />
                  </figure>
                  <p className="title">Dolls</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/toy3.jpeg"
                      width={55}
                      height={55}
                      alt="Educational Toys"
                    />
                  </figure>
                  <p className="title">Educational Toys</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        {/* Classified listings */}
        <ul className="classfied-wrap">
          {toyData.map((item, index) => (
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
                      {/* Location and ratings */}
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
                      {/* Ratings */}
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
                  {/* Additional information */}
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
                  {/* Contact action */}
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

export default ToysSupplier;
