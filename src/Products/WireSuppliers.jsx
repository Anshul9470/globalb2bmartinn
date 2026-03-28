import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    name: "Rohit Patel",
    email: "rohitpatel@example.com",
    password: "rohit@123",
    mobileNumber: "9123456789",
    companyName: "Azoliya Cable Tie",
    productOrService: "Various Products",
    imgSrc: "/assets/azoliya.jpg", // Correct image path needed
    mainProducts:
      "Plastic Cable Tie, Engraved Cable, Black Cable Tie, Marker Tie, Cable Clip, Wire Cable Seal",
    altText: "Various Products - Azoliya Cable Tie",
    years: "1 YRS",
    location: "Ahmedabad, Gujarat, 380061, India",
    tooltipText: "123, Industrial Estate, Ahmedabad - 380061, Gujarat, India",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "150",
    responseRate: "98%",
    path: "/azoliya-cable-tie",
  },
  {
    _id: "b1234567890wuhan-mz-electronic-co",
    name: "Hammer Zheng",
    email: "longs99@mzcableties.com",
    password: "@Abc12345",
    mobileNumber: "1324719300",
    companyName: "Wuhan MZ Electronic Co.,Ltd",
    productOrService: "Cable Ties",
    imgSrc: "/assets/cabletie1.jpeg",
    mainProducts: "Cable Ties, Electrical Accessories, Fasteners",
    altText: "Wuhan MZ Electronic Co.,Ltd - Cable Ties",
    years: "1 YRS",
    location: "Wuhan, Hubei, China",
    tooltipText: "Wuhan MZ Electronic Co., Ltd, Wuhan",
    rating: "4.8",
    ratingPercent: "95%",
    ratingsCount: "120",
    responseRate: "90%",
    whatsappConfirmed: true,
  },

  {
    name: "kaushal kaporiya",
    email: "kaushalkaporiya@gmail.com",
    password: "kaushal@123",
    mobileNumber: "9081818020",
    companyName: "Wellcab Winding Wire",
    productOrService: "Wire",
    imgSrc: "/assets/wire.jpg", // Correct image path needed
    mainProducts:
      "Copper Winding Wire, Aluminum Winding Wire, High Conductivity Wire, etc.",
    altText: "Wire - Wellcab Winding Wire",
    years: "1 YRS",
    location: "Ahmedabad, Gujarat, India",
    tooltipText:
      "Plot No. 45, GIDC Industrial Area, Ahmedabad - 380001, Gujarat, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "200",
    responseRate: "95%",
  },
  {
    _id: "v456789012345abcdef0123", // Random unique ID
    name: "Avanish Giri",
    email: "avinash123@gmail.com",
    password: "avanish@123", // Including the password as specified
    mobileNumber: "8708979998",
    companyName: "HARGOSAI HIND PRIVATE LIMITED",
    productOrService: "Cables",
    imgSrc: "/assets/cables.jpeg", // Example image path
    mainProducts:
      "Electrical Cables, Power Cables, Coaxial Cables, Fiber Optic Cables",
    altText: "Cables - HARGOSAI HIND PRIVATE LIMITED",
    years: "1 YRS",
    location: "Bangalore, India",
    tooltipText: "123 Cable Street, Bangalore, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "80",
    responseRate: "92%",
    whatsappConfirmed: true,
  },
  {
    _id: "shiv-pet-surat",
    name: "Sanjay",
    email: "sanjay@gmail.com",
    password: "sanjaysteel",
    mobileNumber: "9825618600",
    companyName: "Shiv PET",
    productOrService: "Cable Tray",
    imgSrc: "/assets/cabletray.jpg",
    mainProducts: "Cable Tray",
    altText: "Shiv PET - Cable Tray",
    years: "1 YRS",
    location: "Surat, Gujarat, India",
    tooltipText: "Shiv PET, Cable Tray, Surat",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "30",
    responseRate: "95%",
    whatsappConfirmed: true,
  },
  {
    _id: "jai-maa-kali-electricals-delhi",
    name: "Manish",
    email: "manish@gmail.com",
    password: "12345678",
    mobileNumber: "8851869834",
    companyName: "Jai Maa Kali Electricals",
    productOrService: "Cable",
    imgSrc: "/assets/cable2.jpg",
    mainProducts: "Cable",
    altText: "Jai Maa Kali Electricals - Cable",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "Jai Maa Kali Electricals, Cable, Delhi",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "30",
    responseRate: "80%",
    whatsappConfirmed: true,
  },
  {
    _id: "abhishek-jagtap-osmanabad-wire-nails-biding-wire",
    name: "Abhishek Jagtap",
    email: "AbhishekJagtap@gmail.com",
    password: "12345678",
    mobileNumber: "8080388781",
    companyName: "Abhishek Jagtap",
    statename: "Maharashtra",
    cityname: "Osmanabad",
    productOrService: "Wire Nails and Binding Wire",
    imgSrc: "/assets/wire9.jpg",
    mainProducts: "Wire Nails and Binding Wire",
    altText:
      "Abhishek Jagtap - Wire Nails and Binding Wire Supplier in Osmanabad",
    years: "1 YRS",
    location: "Osmanabad, Maharashtra",
    tooltipText:
      "Abhishek Jagtap - Trusted Supplier of Wire Nails and Binding Wire",
    rating: "4.4",
    ratingPercent: "88%",
    ratingsCount: "180",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "hargosai-hind-pvt-ltd-pune",
    name: "Avanish Giri",
    email: "AvanishGiri123@gmail.com",
    password: "Avanish Giri",
    mobileNumber: "8708979998",
    companyName: "HARGOSAI HIND PRIVATE LIMITED",
    statename: "Maharashtra",
    cityname: "Pune",
    productOrService: "Cable Ware",
    imgSrc: "/assets/cable3.jpg",
    mainProducts: "Cable Ware, Electrical Wires, Connectors",
    altText: "HARGOSAI HIND PRIVATE LIMITED - Cable Ware Supplier",
    years: "1 YRS",
    location: "Pune, Maharashtra, India",
    tooltipText:
      "HARGOSAI HIND PRIVATE LIMITED - Leading Supplier of Cable Ware",
    rating: "4.2",
    ratingPercent: "84%",
    ratingsCount: "120",
    responseRate: "95%",
    whatsappConfirmed: false,
  },
  {
    _id: "shree-laxmi-wire-rajkot",
    name: "Rishabh Shrivastav",
    email: "rishabhshrivastav@gmail.com",
    password: "rishabh shrivastav",
    mobileNumber: "9081416777",
    companyName: "Shree Laxmi Wire",
    statename: "Gujrat",
    cityname: "Rajkot",
    productOrService: "Stretching Wire",
    imgSrc: "/assets/wire10.jpg",
    mainProducts: "Stretching Wires, Galvanized Wires, Industrial Wires",
    altText: "Shree Laxmi Wire - Stretching Wire Manufacturer",
    years: "1 YRS",
    location: "Rajkot, Gujrat, India",
    tooltipText: "Shree Laxmi Wire - Trusted Wire Manufacturer",
    rating: "4.6",
    ratingPercent: "94%",
    ratingsCount: "185",
    responseRate: "93%",
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const WireSuppliers = () => {
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
                  <Link to="#">Copper Winding Wire</Link>
                </li>
                <li>
                  <Link to="#">Aluminum Winding Wire</Link>
                </li>
                <li>
                  <Link to="#">High Conductivity Wire</Link>
                </li>
                <li>
                  <Link to="#">Insulated Wire</Link>
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
                  <Link to="#">Gujarat</Link>
                </li>
                <li>
                  <Link to="#">Maharashtra</Link>
                </li>
                <li>
                  <Link to="#">Tamil Nadu</Link>
                </li>
                <li>
                  <Link to="#">Karnataka</Link>
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
                      src="/assets/wire1.jpg"
                      width={55}
                      height={55}
                      alt="Copper Winding Wire"
                    />
                  </figure>
                  <p className="title">Copper Winding Wire</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/wire2.jpg"
                      width={55}
                      height={55}
                      alt="Aluminum Winding Wire"
                    />
                  </figure>
                  <p className="title">Aluminum Winding Wire</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/wire3.jpg"
                      width={55}
                      height={55}
                      alt="High Conductivity Wire"
                    />
                  </figure>
                  <p className="title">High Conductivity Wire</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/wire4.jpg"
                      width={55}
                      height={55}
                      alt="Insulated Wire"
                    />
                  </figure>
                  <p className="title">Insulated Wire</p>
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

export default WireSuppliers;
