import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    name: "Mahir Sanitation Company",
    email: "",
    mobileNumber: "",
    companyName: "Mahir Sanitation Company",
    productOrService: "Bathroom Toilet Paper Holder Bathroom Grab Bar",
    imgSrc: "/assets/mahir2.webp",
    mainProducts: "Bathroom Accessories,",
    altText: "Mahir Sanitation Company - Bathroom Accessories",
    years: "1 YRS",
    location: "Gali Number 3, Modi Nagar, Ghaziabad",
    tooltipText: "Mahir Sanitation Company, Ghaziabad",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "30",
    responseRate: "90%",
    path: "/mahir-sanitation",
  },

  {
    _id: "667426da14fe92087aaec7aa",
    name: "Bath Plus",
    email: "abc@gmail.com",
    mobileNumber: "9601400050",
    companyName: "Bath Plus",
    productOrService: "bathware",
    imgSrc: "/assets/tap7.jpeg", // You need to provide the correct image path
    mainProducts: "Faucets, Sinks, Bathtubs",
    altText: "Bathware - Bath Plus",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "789 Bathware Street, Andheri West, Mumbai, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "120",
    responseRate: "97%",
  },
  {
    name: "Prashant",
    email: "dj@gmail.com",
    mobileNumber: "9313835047",
    companyName: "La Optionz",
    productOrService: "Bathware",
    imgSrc: "/assets/tap8.jpeg", // You need to provide the correct image path
    mainProducts: "Faucets, Sinks, Bathtubs",
    altText: "Bathware - La Optionz",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "789 Bathware Street, Andheri West, Mumbai, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "120",
    responseRate: "97%",
  },
  {
    name: "Marvel",
    email: "djbravo@gmail.com",
    mobileNumber: "9825774011",
    companyName: "Marvel Enterprise",
    productOrService: "Bathware",
    imgSrc: "/assets/tap9.jpeg", // You need to provide the correct image path
    mainProducts: "Faucets, Sinks, Bathtubs",
    altText: "Bathware - Marvel Enterprise",
    years: "1 YRS",
    location: "Jaipur, India",
    tooltipText: " Jaipur, India",
    rating: "4.7",
    ratingPercent: "95%",
    ratingsCount: "100",
    responseRate: "98%",
  },
  {
    _id: "s567890123abcdef456789", // Random unique ID
    name: "Ravi",
    email: "ravyaenterprises@gmail.com",
    mobileNumber: "8980151425",
    companyName: "Ravya Enterprises",
    productOrService: "Bathroom Accessories",
    imgSrc: "/assets/bathware2.jpeg", // Example image path
    mainProducts: "Bathroom Accessories, Faucets, Shower Heads",
    altText: "Bathroom Accessories - Ravya Enterprises",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "Shop 22, Home Essentials Market, Delhi, India",
    rating: "4.2",
    ratingPercent: "84%",
    ratingsCount: "38",
    responseRate: "88%",
    whatsappConfirmed: true,
  },

  {
    name: "Mehul Gori",
    email: "go4fusion@gmail.com",
    mobileNumber: "8866028619",
    companyName: "FUSION GLASS CONCEPT",
    productOrService: "Bath Fitting Products",
    imgSrc: "/assets/bath6.jpg",
    altText: "Bath Fitting Products - FUSION GLASS CONCEPT",
    mainProducts: "Shower Enclosures, Glass Partitions, Bath Accessories",
    years: "1 YRS",
    location: "Gujarat, India",
    tooltipText: "789 Glass Avenue, Bath City, Gujarat, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "210",
    responseRate: "90%",
  },
  {
    _id: "t234567890123abcdef0123", // Random unique ID
    name: "Himanshu",
    email: "globalindustries903@gmail.com",
    password: "himanshu@123", // Including the password as specified
    mobileNumber: "7834992372",
    companyName: "Global Industries",
    productOrService: "Bathroom Accessories Manufacturer",
    imgSrc: "/assets/bathwareass.jpeg", // Example image path
    mainProducts: "Shower Heads, Faucets, Towel Bars, Soap Dispensers",
    altText: "Bathroom Accessories - Global Industries",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "456 Industrial Area, Delhi, India",
    rating: "4.4",
    ratingPercent: "89%",
    ratingsCount: "60",
    responseRate: "92%",
    whatsappConfirmed: true,
  },
  {
    _id: "z890123456789abcdef0123", // Random unique ID
    name: "Agmeco Faucets Pvt. Ltd.",
    email: "info@agmeco.com",
    password: "agmeco@123", // Including the password as specified
    mobileNumber: "8470012000",
    companyName: "Agmeco Faucets Pvt. Ltd.",
    productOrService: "Bathroom Accessories Manufacturer",
    imgSrc: "/assets/bathroom1.jpg", // Example image path
    mainProducts: "Faucets, Shower Heads, Towel Bars, Soap Dispensers",
    altText: "Bathroom Accessories - Agmeco Faucets Pvt. Ltd.",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "123 Faucet Street, Delhi, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "70",
    responseRate: "94%",
    whatsappConfirmed: true,
  },
  {
    _id: "f456789012345abcdef0123", // Random unique ID
    name: "Mayur",
    email: "mayurdudat2424@gmail.com",
    mobileNumber: "8048957584",
    companyName: "Khodal Plast",
    productOrService: "Bathroom Accessories & Tap Manufacturer",
    imgSrc: "/assets/bathware1.jpeg", // Example image path
    mainProducts: "Bathroom Accessories, Taps, Showers",
    altText: "Bathroom Accessories & Tap Manufacturer - Khodal Plast",
    years: "1 YRS",
    location: "Rajkot, India",
    tooltipText: "789 Plastic Avenue, Rajkot, India",
    rating: "4.6",
    ratingPercent: "93%",
    ratingsCount: "85",
    responseRate: "96%",
    whatsappConfirmed: true,
  },
  {
    _id: "f456789012345abcdef0123", // Random unique ID
    name: "Mayur",
    email: "mayurdudat2424@gmail.com",
    mobileNumber: "8048957584",
    companyName: "Khodal Plast",
    productOrService: "Bathroom Accessories & Tap Manufacturer",
    imgSrc: "/assets/bathtap.jpeg", // Example image path
    mainProducts: "Bathroom Accessories, Taps, Showers",
    altText: "Bathroom Accessories & Tap Manufacturer - Khodal Plast",
    years: "1 YRS",
    location: "Rajkot, India",
    tooltipText: "789 Plastic Avenue, Rajkot, India",
    rating: "4.6",
    ratingPercent: "93%",
    ratingsCount: "85",
    responseRate: "96%",
    whatsappConfirmed: true,
  },
  {
    _id: "g567890123456abcdef0123", // Random unique ID
    name: "Rakesh Patel",
    email: "rakeshpatel3627@gmail.com",
    mobileNumber: "7984373513",
    companyName: "Umiya Polymers",
    productOrService: "Faucets Manufacturer",
    imgSrc: "/assets/tap10.jpeg", // Example image path
    mainProducts: "Faucets, Taps, Plumbing Fixtures",
    altText: "Faucets Manufacturer - Umiya Polymers",
    years: "1 YRS",
    location: "Ahmedabad, India",
    tooltipText: "123 Industrial Zone, Ahmedabad, India",
    rating: "4.7",
    ratingPercent: "95%",
    ratingsCount: "90",
    responseRate: "97%",
    whatsappConfirmed: true,
  },
  {
    _id: "k901234567890abcdef0123", // Random unique ID
    name: "Mr. Shree",
    email: "shreepolymers122@gmail.com",
    mobileNumber: "9998009666",
    companyName: "SHREE POLYMERS",
    productOrService: "Taps Manufacturer",
    imgSrc: "/assets/bath9.jpeg", // Example image path
    mainProducts: "Taps, Faucets, Plumbing Fixtures",
    altText: "Taps Manufacturer - SHREE POLYMERS",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "456 Industrial Park, Delhi, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "60",
    responseRate: "92%",
    whatsappConfirmed: true,
  },
  {
    _id: "l012345678901abcdef0123", // Random unique ID
    name: "Sudhanshu J Shah",
    email: "Sudhanshu@GMAIL.COM",
    mobileNumber: "9879034843",
    companyName: "SHUBHAM POLYMERS",
    productOrService: "Masterbatches Manufacture",
    imgSrc: "/assets/tap11.jpeg", // Example image path
    mainProducts:
      "Plastic Masterbatches, Color Masterbatches, Additive Masterbatches",
    altText: "Masterbatches Manufacture - SHUBHAM POLYMERS",
    years: "1 YRS",
    location: "Gujarat, India",
    tooltipText: "789 Polymer Street, Gujarat, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "75",
    responseRate: "94%",
    whatsappConfirmed: true,
  },
  {
    _id: "s890123456abcdef789012", // Random unique ID
    name: "Dilip",
    email: "Yamunapolytech@gmail.com",
    mobileNumber: "9638165251",
    companyName: "Yamuna Polytech",
    productOrService: "PVS Water Taps, Bib Cocks",
    imgSrc: "/assets/taps.jpeg", // Example image path
    mainProducts: "PVS Water Taps, Bib Cocks, Plumbing Fixtures",
    altText: "PVS Water Taps & Bib Cocks - Yamuna Polytech",
    years: "1 YRS",
    location: "Gurgaon, India",
    tooltipText: "Unit 8, Plumbing Supplies Market, Gurgaon, India",
    rating: "4.3",
    ratingPercent: "86%",
    ratingsCount: "47",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "s345678901abcdef234581", // Random unique ID
    name: "Digpalsinh Jadeja",
    email: "ashapurabrassimpex@gmail.com",
    password: "Digpalsinh Jadeja",
    mobileNumber: "7071571111",
    companyName: "Ashapura Brass Impex",
    productOrService: "Bathfitting",
    imgSrc: "/assets/bathwarefittings1.jpeg", // Example image path
    mainProducts: "Bathfitting, Brass Fixtures",
    altText: "Bathfitting - Ashapura Brass Impex",
    years: "1 YRS",
    location: "Rajkot, India",
    tooltipText: "Plot 15, Brass Market, Rajkot, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "58",
    responseRate: "85%",
    whatsappConfirmed: false,
  },
  {
    _id: "s345678901abcdef234592", // Random unique ID
    name: "Rumit Patel",
    email: "rilut06@gmail.com",
    password: "Rumit patel",
    mobileNumber: "9909850320",
    companyName: "Rilut",
    productOrService: "Bathroom Accessories",
    imgSrc: "/assets/bathroom2.jpeg", // Example image path
    mainProducts: "Bathroom Accessories, Faucets",
    altText: "Bathroom Accessories - Rilut",
    years: "1 YRS",
    location: "Ahmedabad, India",
    tooltipText: "Showroom 15, Bathroom Street, Ahmedabad, India",
    rating: "4.4",
    ratingPercent: "89%",
    ratingsCount: "45",
    responseRate: "82%",
    whatsappConfirmed: true,
  },
  {
    _id: "d1234567890ef012347",
    name: "JATIN",
    email: "alankarenterprise.brand@gmail.com",
    password: "JATINJATIN",
    mobileNumber: "8460777077",
    companyName: "ALANKAR ENTERPRISES (RAJKOT)*",
    productOrService: "Bathroom Accessories & Hardware",
    imgSrc: "/assets/bathroom3.jpeg",
    mainProducts: "Taps, Showers, Bathroom Fittings",
    altText: "Bathroom Accessories & Hardware - ALANKAR ENTERPRISES (RAJKOT)*",
    years: "1 YRS",
    location: "Rajkot, India",
    tooltipText: "Sector 8, Industrial Area, Rajkot, India",
    rating: "4.9",
    ratingPercent: "98%",
    ratingsCount: "80",
    responseRate: "95%",
    whatsappConfirmed: true,
  },
  {
    _id: "f2345678901g234567",
    name: "Vishal",
    email: "vishalenterprises@gmail.com",
    password: "vishalvishal",
    mobileNumber: "9625638734",
    companyName: "Vishal Enterprises",
    productOrService: "Brass Bathroom Accessories",
    imgSrc: "/assets/brassbath.jpeg",
    mainProducts: "Brass Faucets, Brass Taps, Brass Shower Heads",
    altText: "Brass Bathroom Accessories - Vishal Enterprises",
    years: "1 YRS",
    location: "Jaipur, Rajasthan, India",
    tooltipText: "Sadar Bazar, Jaipur, Rajasthan, India",
    rating: "4.2",
    ratingPercent: "84%",
    ratingsCount: "45",
    responseRate: "78%",
    whatsappConfirmed: true,
  },
  {
    _id: "a7890123456b789012",
    name: "Mehul",
    email: "fablefaucets4662555@gmail.com",
    password: "mehul 1234",
    mobileNumber: "9925345633",
    companyName: "Fable Faucets",
    productOrService: "Faucets",
    imgSrc: "/assets/fauset.jpeg",
    mainProducts: "Faucets, Taps, Water Accessories",
    altText: "Faucets - Fable Faucets",
    years: "1 YRS",
    location: "Surat, Gujarat, India",
    tooltipText: "Gopi Textile Market, Surat, Gujarat, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "75",
    responseRate: "85%",
    whatsappConfirmed: false,
  },
  {
    _id: "a1234567890wxyz5700",
    name: "Nitin Kaushal",
    email: "abc@gmail.com",
    password: "nitin@123",
    mobileNumber: "9111535353",
    companyName: "Addiction Bath Fittings",
    productOrService: "Bath Fittings",
    imgSrc: "/assets/tap12.jpeg", // Placeholder for image path
    mainProducts: "Bath Fittings, Taps, Showers, Bathroom Accessories",
    altText: "Bath Fittings - Addiction Bath Fittings",
    years: "1 YRS", // Placeholder for years of experience
    location: "India", // Placeholder for location
    tooltipText: "Addiction Bath Fittings, India",
    rating: "4.2", // Placeholder for rating
    ratingPercent: "84%", // Placeholder for rating percentage
    ratingsCount: "75", // Placeholder for ratings count
    responseRate: "85%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "an-cp-bath-fitting-new-delhi",
    name: "Sonu Sharma",
    email: "Ancpbathfitting@gmail.com",
    password: "sonu sharma",
    mobileNumber: "8743019127",
    companyName: "An CP Bath Fitting",
    productOrService: "Sanitaryware",
    imgSrc: "/assets/bathware3.jpg",
    mainProducts: "Sanitaryware Products",
    altText: "An CP Bath Fitting - Sanitaryware",
    years: "1 YRS",
    location: "New Delhi, India",
    tooltipText: "An CP Bath Fitting, Sanitaryware, New Delhi",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "45",
    responseRate: "92%",
    whatsappConfirmed: true,
  },
  {
    _id: "shubh-clay-art-thangarh",
    name: "Amit Dedhiya",
    email: "abc@gmail.com",
    password: "amit@123",
    mobileNumber: "9638936831",
    companyName: "Shubh Clay Art",
    productOrService: "Sanitary Ware",
    imgSrc: "/assets/bathware9.jpg", // Placeholder image path
    mainProducts: "Sanitary Ware",
    altText: "Shubh Clay Art - Sanitary Ware",
    years: "1 YRS", // Random value
    location: "Thangarh, Gujrat, India",
    tooltipText: "Shubh Clay Art, Sanitary Ware, Thangarh",
    rating: "4.6", // Random value
    ratingPercent: "94%", // Random value
    ratingsCount: "40", // Random value
    responseRate: "88%", // Random value
    whatsappConfirmed: true,
  },
  {
    _id: "lampard-rajkot",
    name: "Kaushik Bhalani",
    email: "lampard@gmail.com",
    password: "kaushik bhalani",
    mobileNumber: "9375507007",
    companyName: "Lampard",
    productOrService: "Bathroom Accessories",
    imgSrc: "/assets/bathroom5.jpg",
    mainProducts: "Bathroom Accessories",
    altText: "Lampard - Bathroom Accessories",
    years: "1 YRS",
    location: "Rajkot, Gujarat, India",
    tooltipText: "Lampard, Bathroom Accessories, Rajkot",
    rating: "4.5",
    ratingPercent: "91%",
    ratingsCount: "19",
    responseRate: "89%",
    whatsappConfirmed: true,
  },
  {
    _id: "ravinder-singh-panipat-haryana",
    name: "Ravinder Singh",
    email: "RavinderSingh123@gmail.com",
    password: "Ravinder Singh",
    mobileNumber: "9896043052",
    companyName: "SEHRAWAT EXPORTS",
    statename: "Haryana",
    cityname: "Panipat",
    productOrService: "Bath Mats",
    imgSrc: "/assets/bathmats.jpg",
    mainProducts: "Bath Mats",
    altText: "SEHRAWAT EXPORTS - Panipat",
    years: "1 YRS",
    location: "Panipat, Haryana",
    tooltipText: "SEHRAWAT EXPORTS, Panipat",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "176",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    name: "Rohit",
    email: "hastienterprise@gmail.com",
    password: "rohitrohit",
    mobileNumber: "8849807438",
    companyName: "Hasti Enterprises",
    productOrService: "Bathroom Accessories",
    imgSrc: "/assets/Bathroom6.jpg",
    mainProducts: "Showers, Faucets, Mirrors",
    altText: "Rohit - Hasti Enterprises",
    years: "1 YRS",
    location: "Ahmedabad, Gujarat, India",
    tooltipText: "Rohit, Ahmedabad",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "87",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
];

const BathwareSupplier = () => {
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
                  <Link to="#">Faucets</Link>
                </li>
                <li>
                  <Link to="#">Sinks</Link>
                </li>
                <li>
                  <Link to="#">Bathtubs</Link>
                </li>
                <li>
                  <Link to="#">Toilets</Link>
                </li>
                <li>
                  <Link to="#">Shower Enclosures</Link>
                </li>
                <li>
                  <Link to="#">Bathroom Accessories</Link>
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
                  <Link to="#">Delhi</Link>
                </li>
                <li>
                  <Link to="#">Karnataka</Link>
                </li>
                <li>
                  <Link to="#">Gujarat</Link>
                </li>
                <li>
                  <Link to="#">Tamil Nadu</Link>
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
                      src="/assets/tap1.jpeg"
                      width={55}
                      height={55}
                      alt="Faucets"
                    />
                  </figure>
                  <p className="title">Faucets</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/tap2.jpeg"
                      width={55}
                      height={55}
                      alt="Sinks"
                    />
                  </figure>
                  <p className="title">Sinks</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/tap4.jpeg"
                      width={55}
                      height={55}
                      alt="Bathtubs"
                    />
                  </figure>
                  <p className="title">Bathtubs</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/tap5.jpeg"
                      width={55}
                      height={55}
                      alt="Toilets"
                    />
                  </figure>
                  <p className="title">Toilets</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/tap6.jpeg"
                      width={55}
                      height={55}
                      alt="Shower Enclosures"
                    />
                  </figure>
                  <p className="title">Shower Enclosures</p>
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

export default BathwareSupplier;
