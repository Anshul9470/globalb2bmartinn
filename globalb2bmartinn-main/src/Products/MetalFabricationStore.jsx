import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    name: "C. Sharankumar",
    email: "abc@gmail.com",
    mobileNumber: "9985361214",
    companyName: "Shidha Technologies",
    productOrService: "Metal Fabrication",
    imgSrc: "/assets/metal1.jpg", // Example image path, adjust as necessary
    altText: "Metal Fabrication - Shidha Technologies",
    mainProducts:
      "Metal Sheets, Metal Parts, Industrial Metal Fabrication, Custom Metal Work",
    years: "1 YRS",
    location: "Pune, Maharashtra", // Update with actual location if available
    tooltipText: "Pune, India",
    rating: "4.7",
    ratingPercent: "92%",
    ratingsCount: "110",
    responseRate: "98%",
    catalogLink: "/shidha-technologies", // Path for redirection
  },
  {
    _id: "b1234567890wxyz5689",
    name: "Siddharth Jain",
    email: "abc@gmail.com",
    password: "SIDH@123",
    mobileNumber: "7021727926",
    companyName: "Neminox Steel & Engineering Co.",
    productOrService: "Metal Fabrication",
    imgSrc: "/assets/metal3.jpeg", // Placeholder for image path
    mainProducts: "Metal Fabrication, Steel Products, Engineering Solutions",
    altText: "Metal Fabrication - Neminox Steel & Engineering Co.",
    years: "1 YRS", // Placeholder for years of experience
    location: "India", // Placeholder for location
    tooltipText: "Neminox Steel & Engineering Co., India",
    rating: "4.7", // Placeholder for rating
    ratingPercent: "94%", // Placeholder for rating percentage
    ratingsCount: "75", // Placeholder for ratings count
    responseRate: "88%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    name: "Parvin Rajput",
    email: "Parvin123@GMAIL.COM",
    password: "Parvin123",
    mobileNumber: "7506898845",
    companyName: "JAGDAMBA METAL",
    productOrService: "Metal Products",
    imgSrc: "/assets/metal4.jpg",
    mainProducts: "Metal Products",
    altText: "JAGDAMBA METAL - Metal Products",
    years: "1 YRS",
    location: "Ahmedabad, India",
    tooltipText: "JAGDAMBA METAL, Ahmedabad",
    rating: "4.3",
    ratingPercent: "86%",
    ratingsCount: "40",
    responseRate: "89%",
    whatsappConfirmed: false,
  },
  {
    _id: "da-vinci-ahemdabad",
    name: "Meet",
    email: "munnamahicle@gmail.com",
    password: "MeetMeet",
    mobileNumber: "7023816029",
    companyName: "Da Vinci",
    productOrService: "Metal Product",
    imgSrc: "/assets/metal6.jpg",
    mainProducts: "Metal Product",
    altText: "Da Vinci - Metal Product",
    years: "1 YRS",
    location: "Ahemdabad, Gujrat, India",
    tooltipText: "Da Vinci, Metal Product, Ahemdabad",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "30",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
  {
    _id: "kaife-ts-steel-fabrication-work-noida",
    name: "Kaife",
    email: "TSSteelFabricationWork12@gmail.com",
    password: "12345678",
    mobileNumber: "7982073924",
    companyName: "TS Steel Fabrication Work",
    productOrService: "Fabrication",
    imgSrc: "/assets/steelfab.jpg",
    mainProducts: "Steel Fabrication",
    altText: "TS Steel Fabrication Work - Fabrication",
    years: "1 YRS",
    location: "Noida, Delhi, India",
    tooltipText: "TS Steel Fabrication Work, Fabrication, Noida",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "30",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "kaife-ts-steel-fabrication-work-noida",
    name: "Kaife",
    email: "TSSteelFabricationWork12@gmail.com",
    password: "12345678",
    mobileNumber: "7982073924",
    companyName: "TS Steel Fabrication Work",
    productOrService: "Fabrication",
    imgSrc: "/assets/steelfab1.jpg",
    mainProducts: "Steel Fabrication",
    altText: "TS Steel Fabrication Work - Fabrication",
    years: "1 YRS",
    location: "Noida, Delhi, India",
    tooltipText: "TS Steel Fabrication Work, Fabrication, Noida",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "30",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "mr-rl-muthuveeran-chettiar-chennai-tamilnadu",
    name: "Mr. RL Muthuveeran Chettiar",
    email: "chettiar888@gmail.com",
    password: "9884060999",
    mobileNumber: "9884060999",
    companyName: "KING METALS AND ALLOYS MADRAS LTD",
    statename: "Tamil Nadu",
    cityname: "Chennai",
    productOrService:
      "Construction Materials, Minerals, Metals, Food Items, Industrial",
    imgSrc: "/assets/metal7.jpg",
    mainProducts:
      "Construction Materials, Minerals, Metals, Food Items, Industrial",
    altText: "KING METALS AND ALLOYS MADRAS LTD - Chennai",
    years: "1 YRS",
    location: "Chennai, Tamil Nadu",
    tooltipText: "KING METALS AND ALLOYS MADRAS LTD, Chennai",
    rating: "4.8",
    ratingPercent: "95%",
    ratingsCount: "250",
    responseRate: "97%",
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const MetalFabricationStore = () => {
  return (
    <div className="main-box">
      {/* Aside section for filters */}
      <aside>
        <div className="flt-box-wrap">
          <div className="flt-box mb-0 flt-head">Filters By</div>
          <div className="flt-box bdrt-0">
            <p className="flt-title">Related Categories</p>
            <div className="flt-content">
              <ul className="flt-list cust-scroll">
                <li>
                  <Link to="#">Metal Sheets</Link>
                </li>
                <li>
                  <Link to="#">Metal Parts</Link>
                </li>
                <li>
                  <Link to="#">Industrial Metal Fabrication</Link>
                </li>
                <li>
                  <Link to="#">Custom Metal Work</Link>
                </li>
              </ul>
            </div>
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
                <Link to="#">Karnataka</Link>
              </li>
              <li>
                <Link to="#">Tamil Nadu</Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      {/* Main section for classified listings */}
      <main>
        <section className="section">
          <p className="sect-title">Explore by Categories</p>

          <div className="horprd expcatg" id="expcatg">
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/me1.jpeg"
                      width={55}
                      height={55}
                      alt="Metal Sheets"
                    />
                  </figure>
                  <p className="title">Metal Sheets</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/me2.jpeg"
                      width={55}
                      height={55}
                      alt="Metal Parts"
                    />
                  </figure>
                  <p className="title">Metal Parts</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/me3.jpeg"
                      width={55}
                      height={55}
                      alt="Industrial Metal Fabrication"
                    />
                  </figure>
                  <p className="title">Industrial Metal Fabrication</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/me4.jpeg"
                      width={55}
                      height={55}
                      alt="Custom Metal Work"
                    />
                  </figure>
                  <p className="title">Custom Metal Work</p>
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
                      <Link to={item.catalogLink} target="_blank">
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

export default MetalFabricationStore;
