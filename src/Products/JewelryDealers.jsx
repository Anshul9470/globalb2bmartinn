import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const jewelryData = [
  {
    name: "Mukesh",
    email: "mukesh@gmail.com",
    mobileNumber: "9967203755",
    companyName: "M.B. Artificial",
    productOrService: "Jewelry",
    imgSrc: "/assets/jwellery7.jpeg", // Provide the correct image path
    altText: "Jewelry - M.B. Artificial",
    mainProducts: "Necklaces, Earrings, Bracelets, Rings",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "123, Zaveri Bazaar, Mumbai - 400002, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "120",
    responseRate: "88%",
  },
  {
    _id: "k4567890123cdef8901",
    name: "Manya Fashion",
    email: "manyafashion@gmail.com",
    password: "8375000867",
    mobileNumber: "6377171953",
    companyName: "Manya Fashion",
    productOrService: "Jewellery",
    imgSrc: "/assets/jwellery8.jpeg",
    mainProducts: "Necklaces, Earrings, Bracelets, Custom Jewellery",
    altText: "Manya Fashion - Jewellery Collection",
    years: "1 YRS",
    location: "India",
    tooltipText: "Manya Fashion, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "45",
    responseRate: "82%",
    whatsappConfirmed: true,
  },
  {
    _id: "avneesh-ludhiana-punjab",
    name: "Avneesh",
    email: "Avneesh@gmail.com",
    password: "12345678",
    mobileNumber: "8427864260",
    companyName: "Avneesh",
    statename: "Punjab",
    cityname: "Ludhiana",
    productOrService: "Jewellery",
    imgSrc: "/assets/jellewrey.jpg",
    mainProducts: "Jewellery",
    altText: "Avneesh - Jewellery Supplier in Ludhiana",
    years: "1 YRS",
    location: "Ludhiana, Punjab",
    tooltipText: "Avneesh, Ludhiana - Jewellery Supplier",
    rating: "4.4",
    ratingPercent: "88%",
    ratingsCount: "87",
    responseRate: "89%",
    whatsappConfirmed: true,
  },
  {
    _id: "mrityunjay-arya-patna",
    name: "Mrityunjay Arya",
    email: "mrityunjayarya@gmail.com",
    password: "Mrityunjay Arya",
    mobileNumber: "9162978910",
    companyName: "PMJ Gold Pvt Ltd",
    statename: "Bihar",
    cityname: "Patna",
    productOrService: "Gold Jewellery",
    imgSrc: "/assets/gold3.jpg",
    mainProducts: "Gold Necklaces, Bangles, Rings, Earrings",
    altText: "PMJ Gold Pvt Ltd - Premium Gold Jewellery Supplier in Patna",
    years: "1 YRS",
    location: "Patna, Bihar, India",
    tooltipText: "PMJ Gold Pvt Ltd - Trusted Gold Jewellery Manufacturer",
    rating: "4.9",
    ratingPercent: "97%",
    ratingsCount: "250",
    responseRate: "92%",
    whatsappConfirmed: true,
  },

  // Additional jewelry dealers can be added here.
];

const JewelryDealers = () => {
  return (
    <div className="main-box">
      <aside>
        <div className="flt-box-wrap">
          <div className="flt-box mb-0 flt-head">Filters By</div>
          <div className="flt-box bdrt-0">
            <p className="flt-title">Jewelry Categories</p>
            <div className="flt-content">
              <ul className="flt-list cust-scroll">
                <li>
                  <Link to="#">Necklaces</Link>
                </li>
                <li>
                  <Link to="#">Earrings</Link>
                </li>
                <li>
                  <Link to="#">Bracelets</Link>
                </li>
                <li>
                  <Link to="#">Rings</Link>
                </li>
                <li>
                  <Link to="#">Anklets</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flt-box">
            <p className="flt-title">By Location</p>
            <div className="flt-content">
              <div className="flt-search">
                <input
                  type="text"
                  name="location_id"
                  placeholder="Search Location"
                  id="location-search-input"
                />
              </div>
              <ul className="flt-list cust-scroll" id="location-lists">
                <li>
                  <Link to="#">All India</Link>
                </li>
                <li>
                  <Link to="#">Mumbai</Link>
                </li>
                <li>
                  <Link to="#">Delhi</Link>
                </li>
                <li>
                  <Link to="#">Jaipur</Link>
                </li>
                <li>
                  <Link to="#">Surat</Link>
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
                      src="/assets/jwellery1.jpeg"
                      width={55}
                      height={55}
                      alt="Necklaces"
                    />
                  </figure>
                  <p className="title">Necklaces</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/jwellery2.jpeg"
                      width={55}
                      height={55}
                      alt="Earrings"
                    />
                  </figure>
                  <p className="title">Earrings</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/jwellery3.jpeg"
                      width={55}
                      height={55}
                      alt="Bracelets"
                    />
                  </figure>
                  <p className="title">Bracelets</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/jwellery4.jpeg"
                      width={55}
                      height={55}
                      alt="Rings"
                    />
                  </figure>
                  <p className="title">Rings</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/jwellery5.jpeg"
                      width={55}
                      height={55}
                      alt="Anklets"
                    />
                  </figure>
                  <p className="title">Anklets</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <ul className="classfied-wrap">
          {jewelryData.map((item, index) => (
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

export default JewelryDealers;
