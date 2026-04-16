import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    _id: "blue-diamond-consultants-accra",
    name: "Steve Dombas",
    email: "info.wcvservice@gmail.com",
    password: "austineAUSTINE@123",
    mobileNumber: "9192266403",
    companyName: "Blue Diamond Consultants",
    productOrService: "Pharmaceutical Drug",
    imgSrc: "/assets/blue1.jpg",
    mainProducts: "Pharmaceutical Drugs",
    altText: "Blue Diamond Consultants - Pharmaceutical Drug",
    years: "1 YRS",
    location: "Accra, Ghana",
    tooltipText: "Blue Diamond Consultants, Pharmaceutical Drug, Accra, Ghana",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "50",
    responseRate: "87%",
    whatsappConfirmed: true,
  },
  {
    name: "Hafizur Rahman Talukdar",
    email: "talukdar@gmail.com",
    mobileNumber: "9101824396",
    companyName: "Talukdar Store",
    productOrService: "Medicines supplier wholesaler",
    imgSrc: "/assets/medicines.jpg", // Provide the correct image path
    altText: "Medicines - Talukdar Store",
    mainProducts: "Pharmaceuticals, OTC Medicines, Medical Supplies",
    years: "1 YRS",
    location: "Assam, India",
    tooltipText: "123 Medicine Street, Healthcare District, Assam, India",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "85",
    responseRate: "90%",
  },
  {
    name: "V.P Viji",
    email: "abinamhealthcare@gmail.com",
    password: "Abinam@Globalmart",
    mobileNumber: "9677652752",
    companyName: "Abinam Healthcare Private Limited",
    productOrService: "Healthcare Products",
    imgSrc: "/assets/abhinam.png",
    mainProducts: "Healthcare Products, Medical Supplies, Wellness Products",
    altText: "Abinam Healthcare Private Limited - Healthcare Products",
    years: "1 YRS",
    location: "Tiruppur, Tamil Nadu, India",
    tooltipText: "Abinam Healthcare Private Limited, Tiruppur",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "75",
    responseRate: "89%",
    whatsappConfirmed: true,
  },

  {
    name: "Deepka",
    email: "deepka123@gmail.com",
    mobileNumber: "9960122020",
    companyName: "Pharma City",
    productOrService: "Pharma",
    imgSrc: "/assets/medi1.jpeg",
    altText: "Pharma - Pharma City",
    mainProducts: "Medicines, Pharmaceuticals, Health Supplements",
    years: "1 YRS",
    location: "Hyderabad, India",
    tooltipText: "456 Pharma Avenue, Health District, Hyderabad, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "310",
    responseRate: "88%",
  },
  {
    name: "Rashid",
    email: "rashid@gmail.com",
    mobileNumber: "7022180626",
    companyName: "Star Safety Products",
    productOrService: "Safety Products Manufacture",
    imgSrc: "/assets/safe1.jpeg",
    altText: "Safety Products Manufacture - Star Safety Products",
    mainProducts:
      "Safety Helmets, Work Gloves, Protective Eyewear, Safety Vests",
    years: "1 YRS",
    location: "Bangalore, India",
    tooltipText: "456 Safety Lane, Industrial Area, Bangalore, India",
    rating: "4.4",
    ratingPercent: "88%",
    ratingsCount: "250",
    responseRate: "85%",
  },
  {
    name: "Vitish",
    email: "vitish@gmail.com",
    password: "vitish@123",
    mobileNumber: "8085116659",
    companyName: "Swastik Safety Point",
    productOrService: "Safety Products Traders",
    imgSrc: "/assets/safe2.jpeg", // Correct image path needed
    mainProducts:
      "Safety Helmets, Safety Gloves, Safety Shoes, Reflective Vests, Fire Extinguishers",
    altText: "Safety Products - Swastik Safety Point",
    years: "1 YRS",
    location: "Pune, Maharashtra, 411001, India",
    tooltipText: "234, Safety Street, Pune - 411001, Maharashtra, India",
    rating: "4.7",
    ratingPercent: "93%",
    ratingsCount: "140",
    responseRate: "96%",
  },
  {
    name: "Ishwar",
    email: "ishwar@gmail.com",
    password: "ishwar@123",
    mobileNumber: "9310000110",
    companyName: "MR TRADING",
    productOrService: "Road Safety Products",
    imgSrc: "/assets/roadsa.jpeg", // Correct image path needed
    mainProducts:
      "Traffic Cones, Safety Barriers, Road Studs, Reflective Tapes, Speed Bumps",
    altText: "Road Safety Products - MR TRADING",
    years: "1 YRS",
    location: "Delhi, India, 110001",
    tooltipText: "789, Safety Market, Delhi - 110001, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "120",
    responseRate: "95%",
  },

  {
    name: "Malay Poddar",
    email: "malay@gmail.com",
    mobileNumber: "8961133314",
    companyName: "Podder Industries",
    productOrService: "Industrial Gloves Manufacture",
    imgSrc: "/assets/glove.jpeg",
    altText: "Industrial Gloves Manufacture - Podder Industries",
    mainProducts:
      "Industrial Gloves, Work Gloves, Safety Gloves, Protective Gear",
    years: "1 YRS",
    location: "Kolkata, India",
    tooltipText: "789 Industry Road, Manufacturing Zone, Kolkata, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "310",
    responseRate: "88%",
  },
  {
    _id: "s3t4u5v6w7x8y9z0a1b2c3d4", // Random unique ID
    name: "Abhishek",
    email: "retractor.surgi@gmail.com",
    mobileNumber: "9878968087",
    companyName: "Retractor Surgi",
    productOrService: "Surgical Instruments",
    imgSrc: "/assets/surgical1.jpeg", // Example image path
    mainProducts:
      "Surgical Retractors, Scalpels, Forceps, Medical Tools, Hospital Equipment",
    altText: "Surgical Instruments - Retractor Surgi",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "22 Medical Lane, Mumbai, India",
    rating: "4.8",
    ratingPercent: "95%",
    ratingsCount: "85",
    responseRate: "97%",
    whatsappConfirmed: true,
  },
  {
    _id: "x1y2z3a4b5c6d7e8f9g0h1i2", // Random unique ID
    name: "Syed Sajid Nawaz Razvi",
    email: "syedqisn@yahoo.co.in",
    mobileNumber: "7972444631",
    companyName: "Optimal Surgicals",
    productOrService: "Surgicals and Medical Equipment",
    imgSrc: "/assets/surgecal.jpeg", // Example image path
    mainProducts:
      "Surgical Instruments, Medical Devices, Hospital Equipment, Sterilization Tools",
    altText: "Surgical and Medical Equipment - Optimal Surgicals",
    years: "1 YRS",
    location: "Hyderabad, India",
    tooltipText: "22 Medical Avenue, Hyderabad, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "72",
    responseRate: "95%",
    whatsappConfirmed: true,
  },
  {
    _id: "fexilion-technologies-chennai",
    name: "Atheeque K",
    email: "ahmedathik@gmail.com",
    password: "9599618201",
    mobileNumber: "9599618201",
    companyName: "Fexilion Technologies",
    productOrService: "Pharma",
    imgSrc: "/assets/pharma1.jpg",
    mainProducts: "Pharma",
    altText: "Fexilion Technologies - Pharma",
    years: "1 YRS",
    location: "Chennai, Tamil Nadu, India",
    tooltipText: "Fexilion Technologies, Pharma, Chennai",
    rating: "4.2",
    ratingPercent: "87%",
    ratingsCount: "25",
    responseRate: "92%",
    whatsappConfirmed: true,
  },
  {
    _id: "ms-gayatri-chennai-tamilnadu",
    name: "Ms. Gayatri",
    email: "gayatrijayasree@gmail.com",
    password: "9787684463",
    mobileNumber: "9787684463",
    companyName: "KLEEM OVERSEAS PRIVATE LIMITED",
    statename: "Tamil Nadu",
    cityname: "Chennai",
    productOrService: "Medical Products, Herbal Products, Animal Feed",
    imgSrc: "/assets/kleem1.jpg",
    mainProducts: "Medical Products, Herbal Products, Animal Feed",
    altText: "KLEEM OVERSEAS PRIVATE LIMITED - Chennai",
    years: "1 YRS",
    location: "Chennai, Tamil Nadu",
    tooltipText: "KLEEM OVERSEAS PRIVATE LIMITED, Chennai",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "180",
    responseRate: "94%",
    whatsappConfirmed: true,
  },
  {
    name: "Amol A Mane",
    email: "AmolMane@gmail.com",
    password: "12345678",
    mobileNumber: "9769654555",
    companyName: "Amol A Mane",
    productOrService: "Ophthalmic Instruments",
    imgSrc: "/assets/optha.jpg",
    mainProducts: "Surgical Instruments, Eye Testing Equipment, Optical Tools",
    altText: "Amol A Mane - Ophthalmic Instruments Supplier",
    years: "1 YRS",
    location: "Mumbai, Maharashtra, India",
    tooltipText: "Amol A Mane, Mumbai",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "85",
    responseRate: "92%",
    whatsappConfirmed: true,
  },
  {
    _id: "unichem-industrial-corporation-private-limited-lucknow-uttar-pradesh",
    name: "UNICHEM INDUSTRIAL CORPORATION PRIVATE LIMITED",
    email: "abc@gmail.com",
    password: "UNICHEM INDUSTRIAL CORPORATION PRIVATE LIMITED",
    mobileNumber: "9910054265",
    companyName: "UNICHEM INDUSTRIAL CORPORATION PRIVATE LIMITED",
    statename: "Uttar Pradesh",
    cityname: "Lucknow",
    productOrService: "Pharma",
    imgSrc: "/assets/pharma9.jpg",
    mainProducts: "Pharma",
    altText:
      "UNICHEM INDUSTRIAL CORPORATION PRIVATE LIMITED - Pharma Supplier in Lucknow",
    years: "1 YRS",
    location: "Lucknow, Uttar Pradesh",
    tooltipText:
      "UNICHEM INDUSTRIAL CORPORATION PRIVATE LIMITED, Lucknow - Pharma Supplier",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "320",
    responseRate: "94%",
    whatsappConfirmed: true,
  },
  {
    _id: "rajesh-kumar-bareilly",
    name: "Rajesh Kumar",
    email: "RajeshKumar123@gmail.com",
    password: "Rajesh Kumar",
    mobileNumber: "8126762166",
    companyName: "NutriWorld",
    statename: "Uttar Pradesh",
    cityname: "Bareilly",
    productOrService: "Medicine",
    imgSrc: "/assets/medicine3.jpg",
    mainProducts:
      "Pharmaceutical Products, Nutritional Supplements, Healthcare Solutions",
    altText: "NutriWorld - Trusted Medicine Supplier in Bareilly",
    years: "1 YRS",
    location: "Bareilly, Uttar Pradesh, India",
    tooltipText: "NutriWorld - Reliable Medicine and Healthcare Provider",
    rating: "4.8",
    ratingPercent: "94%",
    ratingsCount: "220",
    responseRate: "90%",
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const MedicineStore = () => {
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
                  <Link to="#">Pharmaceuticals</Link>
                </li>
                <li>
                  <Link to="#">OTC Medicines</Link>
                </li>
                <li>
                  <Link to="#">Medical Supplies</Link>
                </li>
                <li>
                  <Link to="#">Surgical Equipment</Link>
                </li>
                <li>
                  <Link to="#">Herbal Medicines</Link>
                </li>
                <li>
                  <Link to="#">Health Supplements</Link>
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
                  <Link to="#">Assam</Link>
                </li>
                <li>
                  <Link to="#">West Bengal</Link>
                </li>
                <li>
                  <Link to="#">Maharashtra</Link>
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
                      src="/assets/med1.jpg"
                      width={55}
                      height={55}
                      alt="Pharmaceuticals"
                    />
                  </figure>
                  <p className="title">Pharmaceuticals</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/med2.jpg"
                      width={55}
                      height={55}
                      alt="OTC Medicines"
                    />
                  </figure>
                  <p className="title">OTC Medicines</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/med3.jpg"
                      width={55}
                      height={55}
                      alt="Medical Supplies"
                    />
                  </figure>
                  <p className="title">Medical Supplies</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/med4.jpg"
                      width={55}
                      height={55}
                      alt="Surgical Equipment"
                    />
                  </figure>
                  <p className="title">Surgical Equipment</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/med5.jpg"
                      width={55}
                      height={55}
                      alt="Herbal Medicines"
                    />
                  </figure>
                  <p className="title">Herbal Medicines</p>
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

export default MedicineStore;
