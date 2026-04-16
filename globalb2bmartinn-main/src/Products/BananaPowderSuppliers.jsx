import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    _id: "vds-global-exim",
    name: "Shubham Machake",
    email: "vdsglobalexim@gmail.com",
    mobileNumber: "7249173273",
    companyName: "VDS Global Exim",
    productOrService: "Exporter of Alphonso Mango Pulp and Banana Powder",
    description:
      "Alphonso Mango Pulp is made from the finest Alphonso mangoes, known for their rich, golden-yellow color and smooth, velvety texture. Renowned for its naturally sweet flavor and tropical aroma, this pulp is ideal for use in smoothies. Premium Banana Powder by VDS Global Exim is made from high-quality, organically grown bananas sourced from India, renowned for its rich agricultural heritage.",
    imgSrc: "/assets/axim1.jpeg", // Placeholder image path
    mainProducts: "Alphonso Mango Pulp, Banana Powder",
    altText: "VDS Global Exim - Alphonso Mango Pulp, Banana Powder",
    years: "1 YRS", // Random value
    location: "India",
    tooltipText: "VDS Global Exim, Alphonso Mango Pulp, Banana Powder",
    rating: "4.7", // Random value
    ratingPercent: "94%", // Random value
    ratingsCount: "40", // Random value
    responseRate: "88%", // Random value
    whatsappConfirmed: true,
  },
  {
    name: "rushabh",
    email: "abc@gmail.com",
    password: "rushabh@123",
    mobileNumber: "9773179038",
    companyName: "kashi enterprise",
    productOrService: "banana powder",
    imgSrc: "/assets/bana1.jpg", // Correct image path needed
    mainProducts:
      "Organic Banana Powder, Natural Banana Powder, Instant Banana Powder, etc.",
    altText: "Banana Powder Suppliers - Kashi Enterprise",
    years: "1 YRS",
    location: "Gujrat India",
    tooltipText: "Gujrat India",
    rating: "78%",
    ratingPercent: "89%",
    ratingsCount: "90%",
    responseRate: "95%",
  },
  {
    name: "Tejas shinde",
    email: "abc@gmail.com",
    password: "tejas@123",
    mobileNumber: "8329952988",
    companyName: "Trishula Global Shipping",
    productOrService: "banana powder",
    imgSrc: "/assets/bnp.jpg", // Correct image path needed
    mainProducts:
      "Organic Banana Powder, Natural Banana Powder, Instant Banana Powder, etc.",
    altText: "Banana Powder Suppliers - Trishula Global Shipping",
    years: "1 YRS",
    location: "Chennai India",
    tooltipText: "Chennai India",
    rating: "88%",
    ratingPercent: "89%",
    ratingsCount: "90%",
    responseRate: "95%",
  },
  // {
  //     "name": "Tejas shinde",
  //     "email": "abc@gmail.com",
  //     "password": "tejas@123",
  //     "mobileNumber": "8329952988",
  //     "companyName": "",
  //     "productOrService": "banana powder",
  //     "imgSrc": "/assets/bnp.jpg", // Correct image path needed
  //     "mainProducts": "Organic Banana Powder, Natural Banana Powder, Instant Banana Powder, etc.",
  //     "altText": "Banana Powder Suppliers - Trishula Global Shipping",
  //     "years": "1 YRS",
  //     "location": "Chennai India",
  //     "tooltipText": "Chennai India",
  //     "rating": "88%",
  //     "ratingPercent": "89%",
  //     "ratingsCount": "90%",
  //     "responseRate": "95%"
  // },
  {
    name: "Praveen Kumar",
    email: "abc@gmail.com",
    password: "praveen@123",
    mobileNumber: "7056700315",
    companyName: "Earth's Nature",
    productOrService: "fruits and vegetable powder",
    imgSrc: "/assets/bana2.jpg", // Correct image path needed
    mainProducts:
      "Organic Banana Powder, Natural Banana Powder, Instant Banana Powder, etc.",
    altText: "Fruits and Vegetable Powder Suppliers - Earth's Nature",
    years: "1 YRS",
    location: "Chennai India",
    tooltipText: "Chennai India",
    rating: "88%",
    ratingPercent: "89%",
    ratingsCount: "90%",
    responseRate: "95%",
  },

  // Add more items if needed
];

const BananaPowderSuppliers = () => {
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
                  <Link to="#">Organic Banana Powder</Link>
                </li>
                <li>
                  <Link to="#">Natural Banana Powder</Link>
                </li>
                <li>
                  <Link to="#">Instant Banana Powder</Link>
                </li>
                {/* Add more categories as needed */}
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
                  <Link to="#">Delhi</Link>
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
                      src="/assets/bana3.jpg"
                      width={55}
                      height={55}
                      alt="Banana Powder Category"
                    />
                  </figure>
                  <p className="title">Banana Powder Category</p>
                </div>
              </Link>
            </div>
            {/* Add more categories as needed */}
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

export default BananaPowderSuppliers;
