import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    name: "Reshma",
    email: "Reshma@gmail.com",
    password: "reshma@123",
    mobileNumber: "9898143767",
    companyName: "Surat Engineering Plastic",
    productOrService: "granules",
    imgSrc: "/assets/granules.jpg", // Correct image path needed
    mainProducts: "Plastic Granules, Recycled Granules, HDPE Granules, etc.",
    altText: "Granules - Surat Engineering Plastic",
    years: "1 YRS",
    location: "Surat, Gujarat, India",
    tooltipText:
      "Plot No. 67, GIDC Industrial Area, Surat - 395010, Gujarat, India",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "180",
    responseRate: "97%",
  },
  {
    name: "Sandeep Agarwal",
    email: "sandeepagarwal@gmail.com",
    mobileNumber: "9337735914",
    companyName: "Radha Krishna Polymers",
    productOrService: "Plastic Granules",
    imgSrc: "/assets/granules5.jpeg",
    altText: "Plastic Granules - Radha Krishna Polymers",
    mainProducts: "Plastic Granules, Resin Pellets, Recycled Plastics",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "123 Polymer Road, Industrial Area, Delhi, India",
    rating: "4.4",
    ratingPercent: "88%",
    ratingsCount: "280",
    responseRate: "85%",
  },
  {
    _id: "b3c4d5e6f7g8h9i012345678", // Random unique ID
    name: "Sandeep Agarwal",
    email: "sandeepagarwal@gmail.com",
    password: "sandeep agarwal", // Including the password as specified
    mobileNumber: "9937442473",
    companyName: "Radha Krishna Polymers",
    productOrService: "Granules",
    imgSrc: "/assets/granules6.jpeg", // Example image path
    mainProducts: "Plastic Granules, PVC Granules, HDPE Granules",
    altText: "Granules - Radha Krishna Polymers",
    years: "1 YRS",
    location: "Noida, India",
    tooltipText: "123 Polymer Street, Noida, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "80",
    responseRate: "95%",
  },
  {
    _id: "o789012345678abcdef0123", // Random unique ID
    name: "Shilesh Dabhi",
    email: "Shileshdabhi@gmail.com",
    password: "shilesh@123", // Including the password as specified
    mobileNumber: "9033729406",
    companyName: "Jai Plastic",
    productOrService: "HIPS, PP, Granules",
    imgSrc: "/assets/granules7.jpeg", // Example image path
    mainProducts: "HIPS Granules, PP Granules, Plastic Raw Materials",
    altText: "HIPS, PP, Granules - Jai Plastic",
    years: "1 YRS",
    location: "Gujarat, India",
    tooltipText: "456 Plastic Industry Area, Gujarat, India",
    rating: "4.3",
    ratingPercent: "88%",
    ratingsCount: "40",
    responseRate: "92%",
    whatsappConfirmed: true,
  },
  {
    // Random unique ID
    name: "Ziya UL Haq",
    email: "haqjiyaul18@gmail.com",
    password: "ziya@123", // Including the password as specified
    mobileNumber: "9555926886",
    companyName: "N K Traders",
    productOrService: "Polycarbonate Granules Manufacture",
    imgSrc: "/assets/granules8.jpeg", // Example image path
    mainProducts:
      "Polycarbonate Granules, Plastic Raw Materials, Polymer Granules",
    altText: "Polycarbonate Granules - N K Traders",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "789 Plastic Zone, Mumbai, India",
    rating: "4.6",
    ratingPercent: "91%",
    ratingsCount: "75",
    responseRate: "95%",
  },
  {
    _id: "h678901234567abcdef0123", // Random unique ID
    name: "Mahesh Randive",
    email: "mahesh@gmail.com",
    mobileNumber: "7276195060",
    companyName: "S U CHEMICALS",
    productOrService: "Granules & Powder",
    imgSrc: "/assets/granules9.jpeg", // Example image path
    mainProducts: "Chemical Granules, Chemical Powders",
    altText: "Granules & Powder - S U CHEMICALS",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "456 Chemical Street, Mumbai, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "65",
    responseRate: "92%",
    whatsappConfirmed: true,
  },
  {
    _id: "p123456789012abcdef0123", // Random unique ID
    name: "Dharmendra Jain",
    email: "Dharmendra@gmail.com",
    mobileNumber: "9724287753",
    companyName: "VARDHMAN ENTERPRISES",
    productOrService: "Dessicant Masterbatches",
    imgSrc: "/assets/granules10.jpeg", // Example image path
    mainProducts:
      "Dessicant Masterbatches, Plastic Additives, Polymer Additives",
    altText: "Dessicant Masterbatches - VARDHMAN ENTERPRISES",
    years: "1 YRS",
    location: "Ahmedabad, India",
    tooltipText: "123 Polymer Park, Ahmedabad, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "110",
    responseRate: "96%",
    whatsappConfirmed: true,
  },
  {
    _id: "s1234567890abcdef012346", // Random unique ID
    name: "Jenish Kukadiya",
    email: "Jenish@gmail.com",
    password: "Jenish@123",
    mobileNumber: "9726076706",
    companyName: "BAPASITARAM POLYMER",
    productOrService: "Granules PP Milky",
    imgSrc: "/assets/granules11.jpeg", // Example image path
    mainProducts: "Granules, PP Milky, Plastic Resins",
    altText: "Granules PP Milky - BAPASITARAM POLYMER",
    years: "1 YRS",
    location: "Ahmedabad, India",
    tooltipText: "Plot No. 45, Industrial Area, Ahmedabad, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "60",
    responseRate: "96%",
    whatsappConfirmed: true,
  },
  {
    _id: "s345678901abcdef234574", // Random unique ID
    name: "Sandeep Doshi",
    email: "sandeepdoshi@gmail.com",
    password: "sandeep@123",
    mobileNumber: "9827021049",
    companyName: "Aditya Trading Company",
    productOrService: "Granules Manufacture",
    imgSrc: "/assets/granules12.jpeg", // Example image path
    mainProducts: "Granules, Raw Materials",
    altText: "Granules Manufacture - Aditya Trading Company",
    years: "1 YRS",
    location: "Ahmedabad, India",
    tooltipText: "Factory 25, Industrial Zone, Ahmedabad, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "55",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "s345678901abcdef234575", // Random unique ID
    name: "Gokul Singh Sisodiya",
    email: "gokulsingh@gmail.com",
    password: "gokul@123",
    mobileNumber: "9340372930",
    companyName: "Dwarka Polymers",
    productOrService: "Granules Manufacture",
    imgSrc: "/assets/granules13.jpeg", // Example image path
    mainProducts: "Granules, Raw Materials",
    altText: "Granules Manufacture - Dwarka Polymers",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "Plot 7, Industrial Area, Mumbai, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "72",
    responseRate: "88%",
  },
  {
    _id: "a1234567890wxyz5690",
    name: "Anuj Chauhan",
    email: "smindustries1008@gmail.com",
    password: "anuj chauhan",
    mobileNumber: "7043875800",
    companyName: "SM INDUSTRIES",
    productOrService: "HDPE Grinder and Granules",
    imgSrc: "/assets/granules14.jpeg", // Placeholder for image path
    mainProducts: "HDPE Grinder, Granules, Plastic Recycling Equipment",
    altText: "HDPE Grinder and Granules - SM Industries",
    years: "1 YRS", // Placeholder for years of experience
    location: "India", // Placeholder for location
    tooltipText: "SM Industries, India",
    rating: "4.5", // Placeholder for rating
    ratingPercent: "90%", // Placeholder for rating percentage
    ratingsCount: "50", // Placeholder for ratings count
    responseRate: "92%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "a1234567890wxyz5696",
    name: "Vaibhav Singh",
    email: "vaibhavpolymers@gmail.com",
    password: "Vaibhav Singh",
    mobileNumber: "8112283183",
    companyName: "Vaibhav Polymers",
    productOrService: "Granules",
    imgSrc: "/assets/granules15.jpeg", // Placeholder for image path
    mainProducts: "Plastic Granules, Polymer Compounds, Recycled Granules",
    altText: "Granules - Vaibhav Polymers",
    years: "1 YRS", // Placeholder for years of experience
    location: "India", // Placeholder for location
    tooltipText: "Vaibhav Polymers, India",
    rating: "4.5", // Placeholder for rating
    ratingPercent: "90%", // Placeholder for rating percentage
    ratingsCount: "130", // Placeholder for ratings count
    responseRate: "88%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "mahesh-ojha-panipat-hariyana",
    name: "Mahesh Ojha",
    email: "MaheshOjha@gmail.com",
    password: "123456789",
    mobileNumber: "9828163128",
    companyName: "RINKU MINERALS AND CHEMICALS",
    statename: "Haryana",
    cityname: "Panipat",
    productOrService: "Granules",
    imgSrc: "/assets/granules16.jpg",
    mainProducts: "Granules",
    altText: "RINKU MINERALS AND CHEMICALS - Panipat",
    years: "1 YRS",
    location: "Panipat, Haryana",
    tooltipText: "RINKU MINERALS AND CHEMICALS, Panipat",
    rating: "4.3",
    ratingPercent: "86%",
    ratingsCount: "110",
    responseRate: "91%",
    whatsappConfirmed: true,
  },
  {
    _id: "swastik-plastic-gujarat",
    name: "Hiren Solanki",
    email: "HirenSolanki123@gmail.com",
    password: "Hiren Solanki",
    mobileNumber: "9638247904",
    companyName: "SWASTIK PLASTIC",
    statename: "Gujarat",
    cityname: "Surat",
    productOrService: "Plastic Granules",
    imgSrc: "/assets/swastick-granules.jpg",
    mainProducts: "Plastic Granules, Raw Plastic Materials, Plastic Recycling",
    altText: "SWASTIK PLASTIC - Suppliers of Plastic Granules",
    years: "1 YRS",
    location: "Surat, Gujarat, India",
    tooltipText: "SWASTIK PLASTIC - Quality Granules for Various Applications",
    rating: "4.7",
    ratingPercent: "93%",
    ratingsCount: "210",
    responseRate: "89%",
    whatsappConfirmed: false,
  },

  // Add more items if needed
];

const GranulesSuppliers = () => {
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
                  <Link to="#">Plastic Granules</Link>
                </li>
                <li>
                  <Link to="#">Recycled Granules</Link>
                </li>
                <li>
                  <Link to="#">HDPE Granules</Link>
                </li>
                <li>
                  <Link to="#">PP Granules</Link>
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
                      src="/assets/granules1.jpg"
                      width={55}
                      height={55}
                      alt="Plastic Granules"
                    />
                  </figure>
                  <p className="title">Plastic Granules</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/granules2.jpg"
                      width={55}
                      height={55}
                      alt="Recycled Granules"
                    />
                  </figure>
                  <p className="title">Recycled Granules</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/granules3.jpg"
                      width={55}
                      height={55}
                      alt="HDPE Granules"
                    />
                  </figure>
                  <p className="title">HDPE Granules</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/granules4.jpg"
                      width={55}
                      height={55}
                      alt="PP Granules"
                    />
                  </figure>
                  <p className="title">PP Granules</p>
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

export default GranulesSuppliers;
