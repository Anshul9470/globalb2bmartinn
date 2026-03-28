import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    name: "Arpit",
    email: "arpit@gmail.com",
    mobileNumber: "8954167256",
    companyName: "Shivani Industries",
    productOrService: "Pooja Articles",
    imgSrc: "/assets/poos.jpg", // You need to provide the correct image path
    altText: "Pooja Articles - Shivani Industries",
    mainProducts: "Diya Lamps, Incense Sticks, Pooja Thalis, etc.",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "123 Temple Road, Near Market, Delhi, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "50",
    responseRate: "95%",
  },
  {
    name: "Akansha Dave",
    email: "akanshadev@gmail.com",
    mobileNumber: "9638560952",
    companyName: "Crodniks",
    productOrService: "Pooja Articles",
    imgSrc: "/assets/poo1.webp", // You need to provide the correct image path
    mainProducts: "Idols, Pooja thalis, Incense sticks, etc.",
    altText: "Pooja Articles - Crodniks",
    years: "1 YRS",
    location: "Ahmedabad, Gujarat, India",
    tooltipText: "456, SG Highway, Ahmedabad - 380054, Gujarat, India",
    rating: "4.7",
    ratingPercent: "96%",
    ratingsCount: "220",
    responseRate: "98%",
  },
  {
    _id: "o1234567890p012347",
    name: "Bikesh",
    email: "BIKESHAGARBATTICOMPANY123@gmail.com",
    password: "BIKESH BIKESH",
    mobileNumber: "7759886485",
    companyName: "Bikesh Agarbatti Company",
    productOrService: "Agarbatti",
    imgSrc: "/assets/agarbati1.jpeg",
    mainProducts: "Incense Sticks, Fragrant Agarbatti, Masala Agarbatti",
    altText: "Agarbatti - Bikesh Agarbatti Company",
    years: "1 YRS",
    location: "Indore, Madhya Pradesh, India",
    tooltipText: "Sector 6, Agarbatti Market, Indore, Madhya Pradesh, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "50",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "i9016481279j123467",
    name: "Ashok",
    email: "ashok123@gmail.com",
    password: "ashok1234",
    mobileNumber: "9971568506",
    companyName: "Shree Balaji Dhoop Traders",
    productOrService: "Dhoop",
    imgSrc: "/assets/dhoop.jpeg",
    mainProducts: "Dhoop Sticks, Incense Cones, Aromatic Powders",
    altText: "Dhoop - Shree Balaji Dhoop Traders",
    years: "1 YRS",
    location: "Kanpur, Uttar Pradesh, India",
    tooltipText: "Panki, Kanpur, Uttar Pradesh, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "100",
    responseRate: "91%",
    whatsappConfirmed: true,
  },
  {
    _id: "gnanavel-ppa-agency-puducherry",
    name: "gnanavel",
    email: "gnanavel@gmail.com",
    password: "9003644400",
    mobileNumber: "9003644400",
    companyName: "PPA Agency",
    productOrService: "cup sambrani",
    imgSrc: "/assets/cuppujja.jpg",
    mainProducts: "cup sambrani",
    altText: "PPA Agency - cup sambrani",
    years: "1 YRS",
    location: "Puducherry, Tamil Nadu, India",
    tooltipText: "PPA Agency, cup sambrani, Puducherry",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "30",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "nagarajan-gurusamy-aasaan-brand-dindigul",
    name: "nagarajan gurusamy",
    email: "nagarajangurusamy@gmail.com",
    password: "9994697119",
    mobileNumber: "9994697119",
    companyName: "Aasaan Brand",
    productOrService: "cup sambrani",
    imgSrc: "/assets/dhoop1.jpg",
    mainProducts: "cup sambrani",
    altText: "Aasaan Brand - cup sambrani",
    years: "1 YRS",
    location: "Dindigul, Tamil Nadu, India",
    tooltipText: "Aasaan Brand, cup sambrani, Dindigul",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "30",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "deepak-kumar-kapidoj-rajasthan",
    name: "Deepak Kumar",
    email: "Deepakkumar@gmail.com",
    password: "Deepak Kumar",
    mobileNumber: "7891308509",
    companyName: "kapidoj",
    statename: "Rajasthan",
    cityname: "Jaipur",
    productOrService: "incense dhoop cone",
    imgSrc: "/assets/dhoop9.jpg",
    mainProducts: "Incense Dhoop Cone",
    altText: "kapidoj - Incense Dhoop Cone",
    years: "1 YRS",
    location: "Jaipur, Rajasthan",
    tooltipText: "kapidoj - Incense Dhoop Cone Manufacturer",
    rating: "4.0",
    ratingPercent: "85%",
    ratingsCount: "150",
    responseRate: "92%",
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const PoojaArticles = () => {
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
                  <Link to="#">Incense Sticks</Link>
                </li>
                <li>
                  <Link to="#">Diya & Lamps</Link>
                </li>
                <li>
                  <Link to="#">Pooja Thalis</Link>
                </li>
                <li>
                  <Link to="#">God Idols</Link>
                </li>
                <li>
                  <Link to="#">Pooja Bells</Link>
                </li>
                <li>
                  <Link to="#">Pooja Kalash</Link>
                </li>
                <li>
                  <Link to="#">Chowkis</Link>
                </li>
                <li>
                  <Link to="#">Pooja Articles</Link>
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
                      src="/assets/poo1.webp"
                      width={55}
                      height={55}
                      alt="Incense Sticks"
                    />
                  </figure>
                  <p className="title">Incense Sticks</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/poo2.webp"
                      width={55}
                      height={55}
                      alt="Diya & Lamps"
                    />
                  </figure>
                  <p className="title">Diya & Lamps</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/poo3.webp"
                      width={55}
                      height={55}
                      alt="Pooja Thalis"
                    />
                  </figure>
                  <p className="title">Pooja Thalis</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/poo4.jpg"
                      width={55}
                      height={55}
                      alt="God Idols"
                    />
                  </figure>
                  <p className="title">God Idols</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/poo5.jpg"
                      width={55}
                      height={55}
                      alt="Pooja Bells"
                    />
                  </figure>
                  <p className="title">Pooja Bells</p>
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

export default PoojaArticles;
