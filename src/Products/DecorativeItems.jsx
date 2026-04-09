import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    _id: "b1234567890abc5678",
    name: "Harshit Gupta",
    email: "hrstgupta1997@gmail.com",
    password: "harshit@1234",
    mobileNumber: "+91 7417 918 221",
    companyName: "Jai Shree Krishna Decoration Company",
    productOrService: "Glass Products & Decor Items",
    imgSrc: "/assets/kris5.webp", // Placeholder for image path
    mainProducts: "Decorative Glass Items, Home Decor, Glass Art",
    altText: "Jai Shree Krishna Decoration Company - Glass Products",
    years: "1 YRS", // Placeholder for years of experience
    location: "Firozabad, Uttar Pradesh, India", // Placeholder for location
    tooltipText: "Jai Shree Krishna Decoration Company, Firozabad",
    rating: "4.8", // Placeholder for rating
    ratingPercent: "96%", // Placeholder for rating percentage
    ratingsCount: "120", // Placeholder for ratings count
    responseRate: "90%", // Placeholder for response rate
    path: "/new-jai-shree-krishna-glass-decorators",
  },
  {
    name: "mm-overseas",
    email: "",
    mobileNumber: "",
    companyName: "mm-overseas",
    productOrService: "Decorative Items, Glass Decorative items",
    imgSrc: "/assets/mm2.webp",
    mainProducts: "Decorative Items",
    altText: "mm-overseas - Decorative Items",
    years: "1 YRS",
    location: "Moradabad, Uttar Pradesh, India",
    tooltipText: "mm-overseas, Moradabad",
    rating: "4.0",
    ratingPercent: "80%",
    ratingsCount: "50",
    responseRate: "85%",
    path: "/mm-overseas",
  },

  {
    name: "Wall Mantra",
    email: "support@wallmantra.com",
    mobileNumber: "7011847342",
    companyName: "Wall Mantra",
    productOrService: "Decorative Items",
    imgSrc: "/assets/decors.jpg", // You need to provide the correct image path
    mainProducts: "Decorative Mirrors, Wall Arts, Photo Frames, etc.",
    altText: "Decorative Items - Wall Mantra",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "123 Decor Street, Near Market, Delhi, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "75",
    responseRate: "92%",
  },
  {
    name: "Shikha Dhingra",
    email: "abc@gmail.com",
    mobileNumber: "9711004442",
    companyName: "Adikala Home Décor & Craft Store",
    productOrService: "Handicraft",
    imgSrc: "/assets/decor6.jpeg", // Provide the correct image path
    mainProducts: "Handcrafted Décor, Custom Crafts, Artistic Home Accessories",
    altText: "Handicraft - Adikala Home Décor & Craft Store",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "Location details not provided",
    rating: "85%",
    ratingPercent: "88%",
    ratingsCount: "30",
    responseRate: "80%",
  },

  {
    name: "Dharamveer Singh",
    email: "dharamveersingh@gmail.com",
    mobileNumber: "9690028658",
    companyName: "M K Bharty Marvel Handicraft",
    productOrService: "Decorative Items",
    imgSrc: "/assets/decor5.jpg", // You need to provide the correct image path
    mainProducts: "Decorative Mirrors, Wall Arts, Photo Frames, etc.",
    altText: "Decorative Items - M K Bharty Marvel Handicraft",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "123 Decor Street, Near Market, Delhi, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "75",
    responseRate: "92%",
  },
  {
    name: "Parveen",
    email: "parveen@gmail.com",
    mobileNumber: "9779635125",
    companyName: "JR Crafts India",
    productOrService: "Marble Decorative Items",
    imgSrc: "/assets/marble3.jpeg", // You need to provide the correct image path
    mainProducts: "Marble Statues, Marble Vases, Marble Decor Pieces",
    altText: "Marble Decorative Items - JR Crafts India",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "123 Decor Street, Near Market, Delhi, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "75",
    responseRate: "92%",
  },
  {
    _id: "e1234567890abc5678",
    name: "Lalita Sharma",
    email: "Lalita123@gmail.com",
    password: "Lalita1234",
    mobileNumber: "8920449089",
    companyName: "Value Plus International",
    productOrService: "Decor",
    imgSrc: "/assets/decor7.jpeg",
    mainProducts: "Home Decor, Office Decor, Custom Design Pieces",
    altText: "Value Plus International - Decor",
    years: "1 YRS",
    location: "Gurugram, Delhi, India",
    tooltipText: "Value Plus International, Gurugram",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "85",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
  {
    _id: "np-enterprises-pune",
    name: "Nitin",
    email: "npatil4141@gmail.com",
    password: "nitinnitin",
    mobileNumber: "7798854138",
    companyName: "Np Enterprises",
    productOrService: "Decorative Item",
    imgSrc: "/assets/decorative1.jpg",
    mainProducts: "Decorative Item",
    altText: "Np Enterprises - Decorative Item",
    years: "1 YRS",
    location: "Pune, Maharashtra, India",
    tooltipText: "Np Enterprises, Decorative Item, Pune",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "20",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    name: "Harshit",
    email: "harshit@gmail.com",
    password: "12345678",
    mobileNumber: "7417343221",
    companyName: "Jai Shri Krishna Glass Decorators",
    productOrService: "Glass",
    imgSrc: "/assets/glassitem1.jpg",
    mainProducts: "Glass, Glass Decor Products",
    altText: "Jai Shri Krishna Glass Decorators - Glass",
    years: "1 YRS",
    location: "UP, India",
    tooltipText: "Jai Shri Krishna Glass Decorators, UP",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "40",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    name: "Silambarasan",
    email: "8610812075@gmail.com",
    password: "8610812075",
    mobileNumber: "8610812075",
    companyName: "Ik Enterprise",
    productOrService: "Clay Handicraft, Honey, Nuts",
    imgSrc: "/assets/clay6.jpg",
    mainProducts: "Clay Handicrafts, Honey, Nuts",
    altText: "Ik Enterprise - Clay Handicraft, Honey, Nuts",
    years: "1 YRS",
    location: "Tiruvallur, Tamil Nadu, India",
    tooltipText: "Ik Enterprise, Tamil Nadu",
    rating: "4.2",
    ratingPercent: "84%",
    ratingsCount: "60",
    responseRate: "90%",
    whatsappConfirmed: false,
  },
  {
    _id: "tharanvelu-mura-decors-private-limited-erode",
    name: "tharanvelu",
    email: "tharanvelu@gmail.com",
    password: "9655488311",
    mobileNumber: "9655488311",
    companyName: "MURA DECORS PRIVATE LIMITED",
    productOrService: "Home and office Decoration material manufacturer",
    imgSrc: "/assets/deco10.jpg",
    mainProducts: "Home and office Decoration material",
    altText:
      "MURA DECORS PRIVATE LIMITED - Home and office Decoration material manufacturer",
    years: "1 YRS",
    location: "Erode, Tamil Nadu, India",
    tooltipText:
      "MURA DECORS PRIVATE LIMITED, Home and office Decoration material manufacturer, Erode",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "30",
    responseRate: "85%",
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const DecorativeItems = () => {
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
                  <Link to="#">Wall Art</Link>
                </li>
                <li>
                  <Link to="#">Decorative Mirrors</Link>
                </li>
                <li>
                  <Link to="#">Photo Frames</Link>
                </li>
                <li>
                  <Link to="#">Table Decor</Link>
                </li>
                <li>
                  <Link to="#">Lamps & Lighting</Link>
                </li>
                <li>
                  <Link to="#">Vases</Link>
                </li>
                <li>
                  <Link to="#">Clocks</Link>
                </li>
                <li>
                  <Link to="#">Decorative Items</Link>
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
                  <Link to="#">Gujarat</Link>
                </li>
                <li>
                  <Link to="#">Madhya Pradesh</Link>
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
          <p className="sect-title">Explore by Categories</p>
          <div className="horprd expcatg" id="expcatg">
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/deco1.jpg"
                      width={55}
                      height={55}
                      alt="Wall Art"
                    />
                  </figure>
                  <p className="title">Wall Art</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/decor2.webp"
                      width={55}
                      height={55}
                      alt="Decorative Mirrors"
                    />
                  </figure>
                  <p className="title">Decorative Mirrors</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/decor3.jpg"
                      width={55}
                      height={55}
                      alt="Photo Frames"
                    />
                  </figure>
                  <p className="title">Photo Frames</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/decor3.webp"
                      width={55}
                      height={55}
                      alt="Table Decor"
                    />
                  </figure>
                  <p className="title">Table Decor</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/decor5.jpg"
                      width={55}
                      height={55}
                      alt="Lamps & Lighting"
                    />
                  </figure>
                  <p className="title">Lamps & Lighting</p>
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

export default DecorativeItems;
