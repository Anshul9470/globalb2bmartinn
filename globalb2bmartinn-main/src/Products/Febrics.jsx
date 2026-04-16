import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    name: "Vicky",
    email: "vicky123@gmail.com",
    mobileNumber: "7045965003",
    companyName: "Jay Dev Garments",
    productOrService: "Fabric",
    imgSrc: "/assets/fabs.jpg", // Provide the correct image path
    altText: "Fabric - Jay Dev Garments",
    mainProducts: "Cotton Fabric, Silk Fabric, Linen Fabric, Polyester Fabric",
    years: "1 YRS",
    location: "Mumbai, Maharashtra, India",
    tooltipText: "456 Fabric Street, Textile Area, Mumbai, Maharashtra, India",
    rating: "4.9",
    ratingPercent: "98%",
    ratingsCount: "80",
    responseRate: "97%",
  },
  {
    name: "Sahil Tyagi",
    email: "SahilTyagi12@gmail.com",
    mobileNumber: "8527469908",
    companyName: "Credo Exports",
    productOrService: "Fabric",
    imgSrc: "/assets/fab6.jpeg", // Provide the correct image path
    altText: "Fabric - Credo Exports",
    mainProducts: "Cotton Fabric, Silk Fabric, Linen Fabric, Polyester Fabric",
    years: "1 YRS",
    location: "New Delhi India",
    tooltipText: "456 Fabric Street, Textile Area, Mumbai, Maharashtra, India",
    rating: "4.9",
    ratingPercent: "98%",
    ratingsCount: "90",
    responseRate: "97%",
  },
  {
    name: "Derender Mehta",
    email: "derender123@gmail.com",
    mobileNumber: "8850478918",
    companyName: "Newjen Fabrics",
    productOrService: "Fabrics",
    imgSrc: "/assets/fabric1.jpeg",
    altText: "Fabrics - Newjen Fabrics",
    mainProducts:
      "Cotton Fabrics, Silk Fabrics, Linen Fabrics, Synthetic Fabrics",
    years: "1 YRS",
    location: "Surat, India",
    tooltipText: "456 Textile Street, Fabric Market, Surat, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "410",
    responseRate: "93%",
  },

  {
    name: "Tijeshwar",
    email: "tijeshwar@gmail.com",
    password: "8375000867",
    mobileNumber: "9501021426",
    companyName: "Tij Textile",
    productOrService: "Fabric",
    imgSrc: "/assets/fab41.jfif",
    mainProducts: "Fabric, Textiles, Clothing Materials",
    altText: "Tij Textile - Fabric",
    years: "1 YRS",
    location: "Ludhiana, Punjab, India",
    tooltipText: "Tij Textile, Ludhiana",
    rating: "4.7",
    ratingPercent: "92%",
    ratingsCount: "150",
    responseRate: "88%",
  },
  {
    _id: "sashtika-coirs-karur",
    name: "Ramesh",
    email: "sashtikaacoirs@gmail.com",
    password: "7868878000",
    mobileNumber: "7868878000",
    companyName: "sashtika coirs",
    productOrService: "coir",
    imgSrc: "/assets/coir1.jpg",
    mainProducts: "coir",
    altText: "sashtika coirs - Coir Products",
    years: "1 YRS",
    location: "Karur, Tamil Nadu, India",
    tooltipText: "sashtika coirs, Coir, Karur",
    rating: "4.4",
    ratingPercent: "88%",
    ratingsCount: "25",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "maruti-fabric-surat",
    name: "Shivam Prajapati",
    email: "marutifabric@gmail.com",
    password: "Shivam Prajapati",
    mobileNumber: "9621390590",
    companyName: "maruti fabric",
    productOrService: "fabric",
    imgSrc: "/assets/fabric3.jpg",
    mainProducts: "Fabric",
    altText: "maruti fabric - Fabric",
    years: "1 YRS",
    location: "Surat, Gujarat, India",
    tooltipText: "maruti fabric, Fabric, Surat",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "15",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
  {
    _id: "kalai-coco-products-salem",
    name: "Kalaiarshan",
    email: "9025973435@gmail.com",
    password: "9025973435",
    mobileNumber: "9025973435",
    companyName: "Kalai Coco Products (Group of Kamal Fibre & Coir Industries)",
    productOrService: "Coir",
    imgSrc: "/assets/coir2.jpg", // Placeholder image path
    mainProducts: "Coir",
    altText: "Kalai Coco Products - Coir",
    years: "1 YRS", // Random value
    location: "Salem, Tamil Nadu, India",
    tooltipText: "Kalai Coco Products, Coir, Salem",
    rating: "4.7", // Random value
    ratingPercent: "94%", // Random value
    ratingsCount: "34", // Random value
    responseRate: "88%", // Random value
    whatsappConfirmed: true,
  },
  {
    _id: "rehman-sonipat-uttar-pradesh",
    name: "Rehman",
    email: "GROWENTERPRISES@gmail.com",
    password: "123456789",
    mobileNumber: "7417793205",
    companyName: "GROW ENTERPRISES",
    statename: "Uttar Pradesh",
    cityname: "Sonipat",
    productOrService: "Fabric",
    imgSrc: "/assets/fabric4.jpg",
    mainProducts: "Fabric",
    altText: "GROW ENTERPRISES - Sonipat",
    years: "1 YRS",
    location: "Sonipat, Uttar Pradesh",
    tooltipText: "GROW ENTERPRISES, Sonipat",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "180",
    responseRate: "95%",
    whatsappConfirmed: true,
  },
  {
    _id: "mrkubendra-coimbatore-tamilnadu",
    name: "Mr. Kubendra",
    email: "gbrostirupur@gmail.com",
    password: "9965540455",
    mobileNumber: "9965540455",
    companyName: "KUBU & CO",
    statename: "Tamil Nadu",
    cityname: "Coimbatore",
    productOrService: "Coir Products",
    imgSrc: "/assets/coir3.jpg",
    mainProducts: "Coir Products",
    altText: "KUBU & CO - Coimbatore",
    years: "1 YRS",
    location: "Coimbatore, Tamil Nadu",
    tooltipText: "KUBU & CO, Coimbatore",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "160",
    responseRate: "89%",
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const Fabric = () => {
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
                  <Link to="#">Cotton Fabric</Link>
                </li>
                <li>
                  <Link to="#">Silk Fabric</Link>
                </li>
                <li>
                  <Link to="#">Linen Fabric</Link>
                </li>
                <li>
                  <Link to="#">Polyester Fabric</Link>
                </li>
                <li>
                  <Link to="#">Wool Fabric</Link>
                </li>
                <li>
                  <Link to="#">Rayon Fabric</Link>
                </li>
                <li>
                  <Link to="#">Denim Fabric</Link>
                </li>
                <li>
                  <Link to="#">Knitted Fabric</Link>
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
                  <Link to="#">Rajasthan</Link>
                </li>
                <li>
                  <Link to="#">Tamil Nadu</Link>
                </li>
                <li>
                  <Link to="#">Uttar Pradesh</Link>
                </li>
                <li>
                  <Link to="#">West Bengal</Link>
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
                      src="/assets/fab1.jpg"
                      width={55}
                      height={55}
                      alt="Cotton Fabric"
                    />
                  </figure>
                  <p className="title">Cotton Fabric</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/fab2.jpg"
                      width={55}
                      height={55}
                      alt="Silk Fabric"
                    />
                  </figure>
                  <p className="title">Silk Fabric</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/fab3.jpg"
                      width={55}
                      height={55}
                      alt="Linen Fabric"
                    />
                  </figure>
                  <p className="title">Linen Fabric</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/fab4.jpg"
                      width={55}
                      height={55}
                      alt="Polyester Fabric"
                    />
                  </figure>
                  <p className="title">Polyester Fabric</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/fab5.jpg"
                      width={55}
                      height={55}
                      alt="Wool Fabric"
                    />
                  </figure>
                  <p className="title">Wool Fabric</p>
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

export default Fabric;
