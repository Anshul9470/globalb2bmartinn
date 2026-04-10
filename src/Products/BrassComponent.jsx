import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    name: "Mr. Shailesh Patel",
    email: "shailesh.patel@khushbrassindustries.com",
    mobileNumber: "XXXXXXXXXX",
    companyName: "Khushbu Brass Industries",
    statename: "Gujarat",
    cityname: "Jamnagar",
    productOrService: "Brass Sanitary and Electrical Fitting Components",
    imgSrc: "/assets/khusboobrass.jpg",
    mainProducts: "Brass Sanitary Fittings, Brass Electrical Components",
    altText: "Khushbu Brass Industries - Brass Components Manufacturer",
    years: "1 YRS",
    location: "Jamnagar, Gujarat, India",
    tooltipText: "Khushbu Brass Industries, Jamnagar",
    rating: "4.7",
    ratingPercent: "95%",
    ratingsCount: "200",
    responseRate: "90%",
  },

  {
    _id: "arshit-brass-products-jamnagar",
    name: "Yash Vadodariya",
    email: "info@abpbrass.com",
    password: "Yash@2613",
    mobileNumber: "8401652105",
    companyName: "Arshit Brass Products",
    productOrService: "Brass Precision Components Manufacturer",
    imgSrc: "/assets/brass13.webp",
    mainProducts: "Brass Precision Components",
    altText: "Arshit Brass Products - Brass Precision Components",
    years: "1 YRS",
    location: "Jamnagar, Gujarat, India",
    tooltipText: "Arshit Brass Products, Brass Precision Components, Jamnagar",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "45",
    responseRate: "92%",
    whatsappConfirmed: true,
  },
  {
    name: "Abhay Yadav",
    email: "jaiambeenterprises@gmail.com",
    mobileNumber: "8178234914",
    companyName: "jai ambe enterprises",
    productOrService: "Brass components",
    imgSrc: "/assets/brs1.jpg", // Provide the correct image path
    altText: "Brass components - jai ambe enterprises",
    mainProducts: "Brass Fittings, Brass Fasteners, Brass Turned Parts",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "789 Brass Avenue, Industrial Area, Delhi, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "60",
    responseRate: "95%",
  },
  {
    name: "Rajesh Chauhan",
    email: "chamundabrass@gmail.com",
    password: "Rajesh Chauhan",
    mobileNumber: "8320824679",
    companyName: "Chamunda Brass",
    productOrService: "Brass Items",
    imgSrc: "/assets/brs2.jpg",
    altText: "Brass Items - Rajesh Chauhan",
    mainProducts: "Brass Utensils, Brass Decor, Brass Statues",
    years: "1 YRS",
    location: "Ahmedabad, Gujarat, India",
    tooltipText: "789 Brass Road, Ahmedabad, Gujarat, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "100",
    responseRate: "95%",
  },
  {
    name: "Mr.Amee",
    email: "ameemetals@gmail.com",
    password: "amee@1234",
    mobileNumber: "8048976345",
    companyName: "Amee Metals Private Limited.",
    productOrService: "brass items manufacturer",
    imgSrc: "/assets/brasses.jpeg",
    altText: "Brass Items - Mr.Amee",
    mainProducts: "Brass Utensils, Brass Decor, Brass Statues",
    years: "1 YRS",
    location: "Jaipur, Rajasthan, India",
    tooltipText: "789 Brass Road, Ahmedabad, Gujarat, India",
    rating: "4.5",
    ratingPercent: "95%",
    ratingsCount: "100",
    responseRate: "98%",
    whatsappConfirmed: false,
  },
  {
    _id: "s456789012abcdef345678", // Random unique ID
    name: "Mr. Hiren Patel",
    email: "hirenpatel@gmail.com",
    mobileNumber: "9428127744",
    companyName: "Jay Vijay Brass Industries",
    productOrService: "Brass Components",
    imgSrc: "/assets/brass1.jpeg", // Example image path
    mainProducts: "Brass Components, Fittings, Custom Brass Parts",
    altText: "Brass Components - Jay Vijay Brass Industries",
    years: "1 YRS",
    location: "Rajkot, India",
    tooltipText: "Factory No. 8, Industrial Area, Rajkot, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "52",
    responseRate: "92%",
    whatsappConfirmed: true,
  },
  {
    _id: "s789012345abcdef678901", // Random unique ID
    name: "Vrushit",
    email: "vrushitind@gmail.com",
    mobileNumber: "8285431111",
    companyName: "Vrushit Brass Industries",
    productOrService: "Brass Sanitaryware",
    imgSrc: "/assets/brass2.jpeg", // Example image path
    mainProducts: "Brass Sanitaryware, Faucets, Bathroom Fixtures",
    altText: "Brass Sanitaryware - Vrushit Brass Industries",
    years: "1 YRS",
    location: "Jamnagar, India",
    tooltipText: "Factory 23, Metal Works Complex, Jamnagar, India",
    rating: "4.4",
    ratingPercent: "88%",
    ratingsCount: "41",
    responseRate: "87%",
    whatsappConfirmed: true,
  },
  {
    _id: "f1234567890g012347",
    name: "Patel Chirag",
    email: "sales@krvbrass.com",
    password: "Patel Chirag",
    mobileNumber: "8000642193",
    companyName: "KRVBrass International",
    productOrService: "Brass Components",
    imgSrc: "/assets/brass3.jpeg",
    mainProducts: "Brass Fittings, Brass Fasteners, Brass Connectors",
    altText: "Brass Components - KRVBrass International",
    years: "1 YRS",
    location: "Jamnagar, India",
    tooltipText: "Sector 9, Brass Market, Jamnagar, India",
    rating: "4.8",
    ratingPercent: "94%",
    ratingsCount: "85",
    responseRate: "92%",
    whatsappConfirmed: true,
  },
  {
    _id: "n1234567890o012347",
    name: "Bharat",
    email: "abc@gmail.com",
    password: "bharat@123",
    mobileNumber: "9687760886",
    companyName: "Bharani Brass Industries",
    productOrService: "Brass Fittings",
    imgSrc: "/assets/brass4.jpeg",
    mainProducts: "Brass Valves, Brass Connectors, Brass Couplings",
    altText: "Brass Fittings - Bharani Brass Industries",
    years: "1 YRS",
    location: "Jamnagar, Gujarat, India",
    tooltipText: "Sector 12, Brass Market, Jamnagar, Gujarat, India",
    rating: "4.8",
    ratingPercent: "95%",
    ratingsCount: "80",
    responseRate: "92%",
    whatsappConfirmed: true,
  },
  {
    _id: "e5692047834f789023",
    name: "Vishal",
    email: "vishalbrassproducts@gmail.com",
    password: "vishalbrassproducts",
    mobileNumber: "6354098021",
    companyName: "Vishal Brass Products",
    productOrService: "Brass Products",
    imgSrc: "/assets/brass5.jpeg",
    mainProducts: "Brass Fittings, Brass Components, Brass Hardware",
    altText: "Brass Products - Vishal Brass Products",
    years: "1 YRS",
    location: "Jamnagar, Gujarat, India",
    tooltipText: "GIDC Phase 3, Jamnagar, Gujarat, India",
    rating: "4.7",
    ratingPercent: "95%",
    ratingsCount: "110",
    responseRate: "91%",
    whatsappConfirmed: true,
  },
  {
    _id: "v1234567890redberry",
    name: "Kapil",
    email: "kapil@gmail.com",
    password: "12345678",
    mobileNumber: "9624455607",
    companyName: "Red Berry Hardware",
    productOrService: "Brass Hardware",
    imgSrc: "/assets/brass9.jpeg",
    mainProducts: "Brass Fittings, Brass Hardware, Brass Components",
    altText: "Red Berry Hardware - Brass Products",
    years: "1 YRS",
    location: "Gujrat, India",
    tooltipText: "Red Berry Hardware, Gujrat",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "85",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
  {
    _id: "mahadev-enterprises-gujarat",
    name: "Rajesh Dharaviya",
    email: "rajeshdharaviya@gmail.com",
    password: "12345678",
    mobileNumber: "7285852080",
    companyName: "Mahadev Enterprises",
    productOrService: "Brass",
    imgSrc: "/assets/brass11.jpg",
    mainProducts: "Brass Products",
    altText: "Mahadev Enterprises - Brass",
    years: "1 YRS",
    location: "Gujarat, India",
    tooltipText: "Mahadev Enterprises, Brass Products, Gujarat",
    rating: "4.3",
    ratingPercent: "85%",
    ratingsCount: "30",
    responseRate: "90%",
  },
  {
    _id: "raavee-enterprise-gujarat",
    name: "Sagar Vasoya",
    email: "SagarVasoya@gmail.com",
    password: "12345678",
    mobileNumber: "8140075907",
    companyName: "Raavee Enterprise",
    productOrService: "Brass",
    imgSrc: "/assets/brass12.jpg",
    mainProducts: "Brass Products",
    altText: "Raavee Enterprise - Brass",
    years: "1 YRS",
    location: "Gujarat, India",
    tooltipText: "Raavee Enterprise, Brass Products, Gujarat",
    rating: "4.2",
    ratingPercent: "84%",
    ratingsCount: "25",
    responseRate: "88%",
    whatsappConfirmed: false,
  },

  {
    _id: "raj-sanghavi-maruti-brass-products-jamnagar",
    name: "Raj Sanghavi",
    email: "abc@gmail.com",
    password: "raj@12345",
    mobileNumber: "7046404697",
    companyName: "Maruti Brass Products",
    productOrService: "Brass Fittings",
    imgSrc: "/assets/brass14.jpg",
    mainProducts: "Brass Fittings",
    altText: "Maruti Brass Products - Brass Fittings",
    years: "1 YRS",
    location: "Jamnagar, Gujarat, India",
    tooltipText: "Maruti Brass Products, Brass Fittings, Jamnagar",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "30",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "vraj-brass-industries-jamnagar",
    name: "Vimal Rabadiya",
    email: "abc@gmail.com",
    password: "vimal@123",
    mobileNumber: "9426566926",
    companyName: "Vraj Brass Industries",
    productOrService: "brass fittings",
    imgSrc: "/assets/brass17.jpg",
    mainProducts: "Brass Fittings",
    altText: "Vraj Brass Industries - Brass Fittings",
    years: "1 YRS",
    location: "Jamnagar, Gujarat, India",
    tooltipText: "Vraj Brass Industries, Brass Fittings, Jamnagar",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "40",
    responseRate: "95%",
    whatsappConfirmed: true,
  },
  {
    _id: "marvel-metal-impex-jamnagar",
    name: "Ashok Parsana",
    email: "marvelmetalimpex@gmail.com",
    password: "ashok parsana",
    mobileNumber: "8141558317",
    companyName: "Marvel Metal Impex",
    productOrService: "Brass Components",
    imgSrc: "/assets/copper10.jpg",
    mainProducts: "Brass Components",
    altText: "Marvel Metal Impex - Brass Components",
    years: "1 YRS",
    location: "Jamnagar, Gujarat, India",
    tooltipText: "Marvel Metal Impex, Brass Components, Jamnagar",
    rating: "4.7",
    ratingPercent: "93%",
    ratingsCount: "28",
    responseRate: "87%",
    whatsappConfirmed: true,
  },
  {
    _id: "bharani-brass-industries-gujrat",
    name: "Bharat",
    email: "Bharat@gmail.com",
    password: "12345678",
    mobileNumber: "9687760886",
    companyName: "Bharani Brass Industries",
    productOrService: "Brass",
    imgSrc: "/assets/brass20.jpg",
    mainProducts: "Brass Products",
    altText: "Bharani Brass Industries - Brass",
    years: "1 YRS",
    location: "Gujrat, India",
    tooltipText: "Bharani Brass Industries, Brass, Gujrat",
    rating: "4.4",
    ratingPercent: "88%",
    ratingsCount: "40",
    responseRate: "83%",
    whatsappConfirmed: true,
  },
  {
    _id: "mohhamadmonis-moradabad",
    name: "MohhaMad MOnis",
    email: "MohhaMadMOnis@gmail.com",
    password: "MohhaMad MOnis",
    mobileNumber: "7533957446",
    companyName: "M.M Traders",
    statename: "Uttar Pradesh",
    cityname: "Moradabad",
    productOrService: "Brass",
    imgSrc: "/assets/brass15.jpg",
    mainProducts: "Brass",
    altText: "M.M Traders - Moradabad",
    years: "1 YRS",
    location: "Moradabad, Uttar Pradesh",
    tooltipText: "M.M Traders, Moradabad",
    rating: "4.4",
    ratingPercent: "88%",
    ratingsCount: "130",
    responseRate: "87%",
    whatsappConfirmed: true,
  },
  {
    name: "Mayur Soni",
    email: "abc@gmail.com",
    password: "mayur@123",
    mobileNumber: "6355602620",
    companyName: "Shrinivas Industries",
    productOrService: "Brass Fittings",
    imgSrc: "/assets/brass16.jpg",
    mainProducts: "Brass Fittings, Brass Hardware, Industrial Fittings",
    altText: "Shrinivas Industries - Brass Fittings",
    years: "1 YRS",
    location: "Jamnagar, Gujarat, India",
    tooltipText: "Shrinivas Industries, Jamnagar",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "140",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    name: "Krishan",
    email: "abc@gmail.com",
    password: "krish123",
    mobileNumber: "9410236566",
    companyName: "Metal Magic Handicrafts",
    productOrService: "Brass Handicraft",
    imgSrc: "/assets/brass19.jpg",
    mainProducts: "Brass Handicrafts, Decorative Items, Antique Pieces",
    altText: "Metal Magic Handicrafts - Brass Artifacts",
    years: "1 YRS",
    location: "Moradabad, Uttar Pradesh, India",
    tooltipText: "Metal Magic Handicrafts, Moradabad",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "120",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    name: "Paresh",
    email: "abc@gmail.com",
    password: "pare1234",
    mobileNumber: "9429977822",
    companyName: "Dehli Hardwares",
    statename: "Gujarat",
    cityname: "Jamnagar",
    productOrService: "Brass Fittings",
    imgSrc: "/assets/brass87.jpg",
    mainProducts: "Brass Pipes, Brass Nuts, Brass Fasteners",
    altText: "Dehli Hardwares - Brass Fittings Supplier",
    years: "1 YRS",
    location: "Jamnagar, Gujarat, India",
    tooltipText: "Dehli Hardwares, Jamnagar",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "120",
    responseRate: "92%",
    whatsappConfirmed: true,
  },
  {
    name: "Paresh",
    email: "abc@gmail.com",
    password: "pare1234",
    mobileNumber: "9429977822",
    companyName: "Dehli Hardwares",
    statename: "Gujarat",
    cityname: "Jamnagar",
    productOrService: "Brass Fittings",
    imgSrc: "/assets/brass22.jpg",
    mainProducts: "Brass Pipes, Brass Nuts, Brass Fasteners",
    altText: "Dehli Hardwares - Brass Fittings Supplier",
    years: "1 YRS",
    location: "Jamnagar, Gujarat, India",
    tooltipText: "Dehli Hardwares, Jamnagar",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "120",
    responseRate: "92%",
    whatsappConfirmed: true,
  },
  {
    name: "Prakash",
    email: "abc@gmail.com",
    password: "prak1234",
    mobileNumber: "8530193038",
    companyName: "UV Poly Plast",
    statename: "Gujarat",
    cityname: "Jamnagar",
    productOrService: "Brass Fittings",
    imgSrc: "/assets/brs5.jpg",
    mainProducts: "Brass Pipes, Brass Nuts, Brass Fasteners",
    altText: "UV Poly Plast - Brass Fittings Supplier",
    years: "1 YRS",
    location: "Jamnagar, Gujarat, India",
    tooltipText: "UV Poly Plast, Jamnagar",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "100",
    responseRate: "85%",
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const BrassComponents = () => {
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
                  <Link to="#">Brass Fittings</Link>
                </li>
                <li>
                  <Link to="#">Brass Fasteners</Link>
                </li>
                <li>
                  <Link to="#">Brass Turned Parts</Link>
                </li>
                <li>
                  <Link to="#">Brass Valves</Link>
                </li>
                <li>
                  <Link to="#">Brass Electrical Components</Link>
                </li>
                <li>
                  <Link to="#">Brass Precision Parts</Link>
                </li>
                <li>
                  <Link to="#">Brass Inserts</Link>
                </li>
                <li>
                  <Link to="#">Brass Forging Parts</Link>
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
                  <Link to="#">Punjab</Link>
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
                      src="/assets/brs3.jpg"
                      width={55}
                      height={55}
                      alt="Brass Fittings"
                    />
                  </figure>
                  <p className="title">Brass Fittings</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/brs4.jpg"
                      width={55}
                      height={55}
                      alt="Brass Fasteners"
                    />
                  </figure>
                  <p className="title">Brass Fasteners</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/brs5.jpg"
                      width={55}
                      height={55}
                      alt="Brass Turned Parts"
                    />
                  </figure>
                  <p className="title">Brass Turned Parts</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/brs7.jpg"
                      width={55}
                      height={55}
                      alt="Brass Valves"
                    />
                  </figure>
                  <p className="title">Brass Valves</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/brs7.jpg"
                      width={55}
                      height={55}
                      alt="Brass Electrical Components"
                    />
                  </figure>
                  <p className="title">Brass Electrical Components</p>
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

export default BrassComponents;
