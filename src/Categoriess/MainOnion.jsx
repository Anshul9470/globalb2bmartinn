// import React from 'react';
// import './main-cat.css';
// import { Link } from 'react-router-dom';

// const classifiedData = [
//     {
//         imgSrc: "/assets/yellowonion.jpeg",
//         altText: "Fresh Red Onion, Specialty : No Artificial Flavour - Shree Narayan Kishan Kendra",
//         years: "1 YRS",
//         title: "Shree Narayan Kishan Kendra",
//         location: "Jaipur, Rajasthan, India",
//         tooltipText: "Dehara, Mahar Kalan, Via-samod, Chomu, -303806, Jaipur, Rajasthan, India",
//         rating: "3.9",
//         ratingPercent: "78%",
//         ratingsCount: "20",
//         trustCertificateUrl: "#",
//         responseRate: "54%"
//     },
//     {
//         "name": "Mr. Sandesh Durgawale",
//         "email": "sandeshdurgawale@gmail.com",
//         "password": "Sandesh@123",
//         "mobileNumber": "7499228062",
//         "companyName": "Sandesh Durgawale",
//         "productOrService": "Onion Seeds",
//         "imgSrc": "/assets/spices2.jpg",  // Provide the correct image path
//         "altText": "Onion Seeds - Sandesh Durgawale",
//         "mainProducts": "High-Quality Onion Seeds, Agricultural Products",
//         "years": "1 YRS",
//         "location": "Nagpur, India",
//         "tooltipText": "789 Seed Lane, Agricultural Park, Nagpur, India",
//         "rating": "4.7",
//         "ratingPercent": "94%",
//         "ratingsCount": "85",
//         "responseRate": "88%"
//     }

// {
//     imgSrc: "/assets/freshonion.jpeg",
//     altText: "Fresh Red Onion, Specialty : No Artificial Flavour - Shree Narayan Kishan Kendra",
//     years: "2 YRS",
//     title: "Shree Narayan Kishan Kendra",
//     location: "Jaipur, Rajasthan, India",
//     tooltipText: "Dehara, Mahar Kalan, Via-samod, Chomu, -303806, Jaipur, Rajasthan, India",
//     rating: "3.9",
//     ratingPercent: "78%",
//     ratingsCount: "20",
//     trustCertificateUrl: "#",
//     responseRate: "54%"
// },
// {
//     imgSrc: "/assets/whiteonion.jpeg",
//     altText: "Fresh Red Onion, Specialty : No Artificial Flavour - Shree Narayan Kishan Kendra",
//     years: "2 YRS",
//     title: "Shree Narayan Kishan Kendra",
//     location: "Jaipur, Rajasthan, India",
//     tooltipText: "Dehara, Mahar Kalan, Via-samod, Chomu, -303806, Jaipur, Rajasthan, India",
//     rating: "3.9",
//     ratingPercent: "78%",
//     ratingsCount: "20",
//     trustCertificateUrl: "#",
//     responseRate: "54%"
// },
// {
//     imgSrc: "/assets/freshonion.jpeg",
//     altText: "Fresh Red Onion, Specialty : No Artificial Flavour - Shree Narayan Kishan Kendra",
//     years: "2 YRS",
//     title: "Shree Narayan Kishan Kendra",
//     location: "Jaipur, Rajasthan, India",
//     tooltipText: "Dehara, Mahar Kalan, Via-samod, Chomu, -303806, Jaipur, Rajasthan, India",
//     rating: "3.9",
//     ratingPercent: "78%",
//     ratingsCount: "20",

//     responseRate: "54%"
// },

// ];

// const MainRice = () => {
//     return (
//         <div className="main-box">
//             <aside>
//                 <div className="flt-box-wrap">
//                     <div className="flt-box mb-0 flt-head">Filters By</div>
//                     <div className="flt-box bdrt-0">
//                         <p className="flt-title">
//                             Related Categories

//                         </p>
//                         <div className="flt-content">
//                             <ul className="flt-list cust-scroll">
//                                 <li><a href="#">Fresh Onion</a></li>
//                                 <li><a href="#">Fresh White Onion</a></li>
//                                 <li><a href="#">Red Onion</a></li>
//                                 <li><a href="#">Red Onion Flakes</a></li>
//                                 <li><a href="#">Red Big Onion</a></li>
//                                 <li><a href="#">Dehydrated Onion</a></li>
//                                 <li><a href="#">White Onion</a></li>
//                                 <li><a href="#">Onion Flakes</a></li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="flt-box">
//                         <p className="flt-title">
//                             By State

//                         </p>
//                         <div className="flt-content">
//                             <div className="flt-search">
//                                 <input type="text" name="state_id" placeholder="Search State" id="state-search-input" />

//                             </div>
//                             <ul className="flt-list cust-scroll" id="state-lists">
//                                 <li><a href="#">All India</a></li>
//                                 <li><a href="#">Maharashtra</a></li>
//                                 <li><a href="#">Tamil Nadu</a></li>
//                                 <li><a href="#">Gujarat</a></li>
//                                 <li><a href="#">Madhya Pradesh</a></li>
//                                 <li><a href="#">Uttar Pradesh</a></li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </aside>
//             <main>
//                 <section className="section">
//                     <p className="sect-title">Explore by Categories</p>
//                     <div className="horprd expcatg" id="expcatg">
//                         <div className="item">
//                             <a href="#">
//                                 <div className="horprd-box">
//                                     <figure>
//                                         <img src="/assets/onion1.jpeg" width={55} height={55} alt="Dehydrated Onion" />
//                                     </figure>
//                                     <p className="title">Dehydrated Onion</p>
//                                 </div>
//                             </a>
//                         </div>
//                         <div className="item">
//                             <a href="#">
//                                 <div className="horprd-box">
//                                     <figure>
//                                         <img src="/assets/onion2.jpeg" width={55} height={55} alt="Red Onion" />
//                                     </figure>
//                                     <p className="title">Red Onion</p>
//                                 </div>
//                             </a>
//                         </div>
//                         <div className="item">
//                             <a href="#">
//                                 <div className="horprd-box">
//                                     <figure>
//                                         <img src="/assets/whiteonion.jpeg" width={55} height={55} alt="White Onion" />
//                                     </figure>
//                                     <p className="title">White Onion</p>
//                                 </div>
//                             </a>
//                         </div>
//                         <div className="item">
//                             <a href="#">
//                                 <div className="horprd-box">
//                                     <figure>
//                                         <img src="/assets/freshonion.jpeg" width={55} height={55} alt="Fresh Onion" />
//                                     </figure>
//                                     <p className="title">Fresh Onion</p>
//                                 </div>
//                             </a>
//                         </div>
//                         <div className="item">
//                             <a href="#">
//                                 <div className="horprd-box">
//                                     <figure>
//                                         <img src="/assets/freshonion.jpeg" width={55} height={55} alt="Fresh Red Onion" />
//                                     </figure>
//                                     <p className="title">Fresh Red Onion</p>
//                                 </div>
//                             </a>
//                         </div>
//                         <div className="item">
//                             <a href="#">
//                                 <div className="horprd-box">
//                                     <figure>
//                                         <img src="/assets/yellowonion.jpeg" width={55} height={55} alt="Yellow Onion" />
//                                     </figure>
//                                     <p className="title">Yellow Onion</p>
//                                 </div>
//                             </a>
//                         </div>
//                         <div className="item">
//                             <a href="#">
//                                 <div className="horprd-box">
//                                     <figure>
//                                         <img src="/assets/whiteonion.jpeg" width={55} height={55} alt="Fresh White Onion" />
//                                     </figure>
//                                     <p className="title">Fresh White Onion</p>
//                                 </div>
//                             </a>
//                         </div>
//                         <div className="item">
//                             <a href="#">
//                                 <div className="horprd-box">
//                                     <figure>
//                                         <img src="/assets/driedonion.jpeg" width={55} height={55} alt="Dried Onion" loading="lazy" />
//                                     </figure>
//                                     <p className="title">Dried Onion</p>
//                                 </div>
//                             </a>
//                         </div>

//                     </div>

//                 </section>
//                 <ul className="classfied-wrap">
//                     {classifiedData.map((item, index) => (
//                         <li key={index}>
//                             <div className="classified">
//                                 <div className="prd-info">
//                                     <div className="prd-box">
//                                         <img src={item.imgSrc} alt={item.altText} width={250} height={250} />
//                                     </div>
//                                 </div>
//                                 <div className="cinfo">
//                                     <div className="cbox">
//                                         <figure>
//                                             <span className="cmp-year">{item.years}</span>
//                                         </figure>
//                                         <div className="cboxr">
//                                             <a href="#" target="_blank"><h4 className="title">{item.title}</h4></a>
//                                             <p className="cloc tooltip ellipsis">
//                                                 <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi-location" viewBox="0 0 16 16">
//                                                     <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
//                                                 </svg>
//                                                 {item.location}
//                                                 <span className="tooltiptext">{item.tooltipText}</span>
//                                             </p>
//                                             <div className="rating-wrap">
//                                                 <span className="rtbox">{item.rating}</span>
//                                                 <span className="crate" style={{ "--_score": item.ratingPercent }} />
//                                                 <span className="rate-text">{item.ratingsCount} Ratings</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="caddit">
//                                         <div className="item">
//                                             <div className="ca-box modal-btn" data-modal="motc" data-src={item.trustCertificateUrl}>
//                                                 <p><i className="l3icon motc-icon" /></p>
//                                                 {/* <p>Member of Trust Certificate</p> */}
//                                             </div>
//                                         </div>
//                                         <div className="item">
//                                             <div className="ca-box">
//                                                 <p><i className="l3icon resp-icon" /></p>
//                                                 <p><span>Response Rate</span> <b>{item.responseRate}</b></p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="caction">
//                                         {/* <a href="">
//                                             <p>Contact Supplier</p>
//                                         </a> */}
//                                         <Link to={'/'}><p>Contact Supplier</p></Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             </main>
//         </div>
//     );
// }

// export default MainRice;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './main-cat.css';
// <head>
//     <title>contact the best suppliers of onion seeds & dehydrated onions</title>
//     <meta name="description"
//         content="connect with the best suppliers of onion seeds,onion powder,dehydrated onions,white onion,red onion with globalb2bmart. we are the best b2b portal in india" />
// </head>
// const classifiedData = [
//     {
//         "name": "Mr. Sandesh Durgawale",
//         "email": "sandeshdurgawale@gmail.com",
//         "password": "Sandesh@123",
//         "mobileNumber": "7499228062",
//         "companyName": "Sandesh Durgawale",
//         "productOrService": "Onion Seeds",
//         "imgSrc": "/assets/yellowonion.jpeg",
//         "altText": "Onion Seeds - Sandesh Durgawale",
//         "mainProducts": "High-Quality Onion Seeds, Agricultural Products",
//         "years": "1 YRS",
//         "location": "Nagpur, India",
//         "tooltipText": "789 Seed Lane, Agricultural Park, Nagpur, India",
//         "rating": "4.7",
//         "ratingPercent": "94%",
//         "ratingsCount": "85",
//         "responseRate": "88%"
//     },
//     {
//         "_id": "a901234567890abcdef0123", // Random unique ID
//         "name": "Babubhai",
//         "email": "babubhai@gmail.com",
//         "password": "babubhai", // Including the password as specified
//         "mobileNumber": "9925096366",
//         "companyName": "Kishan Exim",
//         "productOrService": "Onion Powder",
//         "imgSrc": "/assets/onionpowder.jpeg",  // Example image path
//         "mainProducts": "Onion Powder, Dehydrated Onions, Garlic Powder",
//         "altText": "Onion Powder - Kishan Exim",
//         "years": "1 YRS",
//         "location": "Gujarat, India",
//         "tooltipText": "123 Agro Street, Gujarat, India",
//         "rating": "4.4",
//         "ratingPercent": "89%",
//         "ratingsCount": "65",
//         "responseRate": "93%",

//     }

// ];

// const MainRice = () => {
//     return (
//         <div className="main-box">
//             <aside>
//                 <div className="flt-box-wrap">
//                     <div className="flt-box mb-0 flt-head">Filters By</div>
//                     <div className="flt-box bdrt-0">
//                         <p className="flt-title">
//                             Related Categories
//                         </p>
//                         <div className="flt-content">
//                             <ul className="flt-list cust-scroll">
//                                 <li><Link to="#">Onion Seeds</Link></li>
//                                 <li><Link to="#">Vegetable Seeds</Link></li>
//                                 <li><Link to="#">Agricultural Products</Link></li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="flt-box">
//                         <p className="flt-title">
//                             By State
//                         </p>
//                         <div className="flt-content">
//                             <div className="flt-search">
//                                 <input type="text" name="state_id" placeholder="Search State" id="state-search-input" />
//                             </div>
//                             <ul className="flt-list cust-scroll" id="state-lists">
//                                 <li><Link to="#">All India</Link></li>
//                                 <li><Link to="#">Maharashtra</Link></li>
//                                 <li><Link to="#">Gujarat</Link></li>
//                                 <li><Link to="#">Tamil Nadu</Link></li>
//                                 <li><Link to="#">Karnataka</Link></li>
//                                 <li><Link to="#">Rajasthan</Link></li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </aside>
//             <main>
//                 <section className="section">
//                     <p className="sect-title">Explore by Categories</p>
//                     <div className="horprd expcatg" id="expcatg">

//                         {/* Add more categories related to Onion Seeds */}
//                         <div className="item">
//                             <Link to="#">
//                                 <div className="horprd-box">
//                                     <figure>
//                                         <img src="/assets/freshonion.jpeg" width={55} height={55} alt="Fresh Onion" />
//                                     </figure>
//                                     <p className="title">Fresh Onion</p>
//                                 </div>
//                             </Link>
//                         </div>
//                         {/* Add more categories related to Onion Seeds */}
//                         <div className="item">
//                             <Link to="#">
//                                 <div className="horprd-box">
//                                     <figure>
//                                         <img src="/assets/whiteonion.jpeg" width={55} height={55} alt="White Onion" />
//                                     </figure>
//                                     <p className="title">White Onion</p>                                 </div>
//                             </Link>
//                         </div>
//                         {/* Add more categories related to Onion Seeds */}
//                         <div className="item">
//                             <Link to="#">
//                                 <div className="horprd-box">
//                                     <figure>                                         <img src="/assets/onion1.jpeg" width={55} height={55} alt="Dehydrated Onion" />
//                                     </figure>
//                                     <p className="title">Dehydrated Onion</p>
//                                 </div>
//                             </Link>
//                         </div>
//                         <div className="item">
//                             <Link to="#">
//                                 <div className="horprd-box">
//                                     <figure>
//                                         <img src="/assets/onion2.jpeg" width={55} height={55} alt="Red Onion" />
//                                     </figure>
//                                     <p className="title">Red Onion</p>
//                                 </div>
//                             </Link>
//                         </div>
//                         {/* Add more categories as needed */}
//                     </div>

//                 </section>
//                 <ul className="classfied-wrap">
//                     {classifiedData.map((item, index) => (
//                         <li key={index}>
//                             <div className="classified">
//                                 <div className="prd-info">
//                                     <div className="prd-box">
//                                         <img src={item.imgSrc} alt={item.altText} width={250} height={250} />
//                                     </div>
//                                 </div>
//                                 <div className="cinfo">
//                                     <div className="cbox">
//                                         <figure>
//                                             <span className="cmp-year">{item.years}</span>
//                                         </figure>
//                                         <div className="cboxr">
//                                             <Link to="#" target="_blank"><h4 className="title">{item.companyName}</h4></Link>
//                                             <p className="cloc tooltip ellipsis">
//                                                 <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi-location" viewBox="0 0 16 16">
//                                                     <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
//                                                 </svg>
//                                                 {item.location}
//                                                 <span className="tooltiptext">{item.tooltipText}</span>
//                                             </p>
//                                             <div className="rating-wrap">
//                                                 <span className="rtbox">{item.rating}</span>
//                                                 <span className="crate" style={{ "--_score": item.ratingPercent }} />
//                                                 <span className="rate-text">{item.ratingsCount} Ratings</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="caddit">
//                                         <div className="item">
//                                             <div className="ca-box">
//                                                 <p><i className="l3icon resp-icon" /></p>
//                                                 <p><span>Response Rate</span> <b>{item.responseRate}</b></p>
//                                             </div>
//                                             <p><span>Main Products:</span> <b>{item.mainProducts}</b></p>
//                                         </div>
//                                     </div>
//                                     <div className="caction">
//                                         <Link to={'/register-buyer'} >
//                                             <p>Contact Supplier</p>
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             </main>
//         </div>
//     );
// }

// export default MainRice;
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./main-cat.css";

const classifiedData = [
  {
    name: "Mr. Sandesh Durgawale",
    email: "sandeshdurgawale@gmail.com",
    password: "Sandesh@123",
    mobileNumber: "7499228062",
    companyName: "Sandesh Durgawale",
    productOrService: "Onion Seeds",
    imgSrc: "/assets/yellowonion.jpeg",
    altText: "Onion Seeds - Sandesh Durgawale",
    mainProducts: "High-Quality Onion Seeds, Agricultural Products",
    years: "1 YRS",
    location: "Nagpur, India",
    tooltipText: "789 Seed Lane, Agricultural Park, Nagpur, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "85",
    responseRate: "88%",
  },
  {
    _id: "a901234567890abcdef0123", // Random unique ID
    name: "Babubhai",
    email: "babubhai@gmail.com",
    password: "babubhai", // Including the password as specified
    mobileNumber: "9925096366",
    companyName: "Kishan Exim",
    productOrService: "Onion Powder",
    imgSrc: "/assets/onionpowder.jpeg", // Example image path
    mainProducts: "Onion Powder, Dehydrated Onions, Garlic Powder",
    altText: "Onion Powder - Kishan Exim",
    years: "1 YRS",
    location: "Gujarat, India",
    tooltipText: "123 Agro Street, Gujarat, India",
    rating: "4.4",
    ratingPercent: "89%",
    ratingsCount: "65",
    responseRate: "93%",
  },
  {
    _id: "f1234567890abc5678",
    name: "Sarvesh Rajput",
    email: "ramsingchungde4@gmail.com",
    password: "sarveshrajput",
    mobileNumber: "9325703002",
    companyName: "Sarvesh Agro",
    productOrService: "Onion Seeds",
    imgSrc: "/assets/onion3.jpeg",
    mainProducts: "Onion Seeds, Agricultural Seeds, Fertilizers, onions",
    altText: "Sarvesh Agro - Onion Seeds",
    years: "1 YRS",
    location: "Uttar Pradesh, India",
    tooltipText: "Sarvesh Agro, Uttar Pradesh",
    rating: "4.3",
    ratingPercent: "86%",
    ratingsCount: "60",
    responseRate: "83%",
    whatsappConfirmed: true,
  },
  {
    _id: "shani-jyot-agro-maharastra",
    name: "Sanjay Dhakane",
    email: "sanjaydhakane@gmail.com",
    password: "12345678",
    mobileNumber: "9960098708",
    companyName: "Shani Jyot Agro Farmer Producer Company Private Limited",
    productOrService: "Onion",
    imgSrc: "/assets/onion4.jpg",
    mainProducts: "Onions, Agricultural Products",
    altText: "Shani Jyot Agro - Onion",
    years: "1 YRS",
    location: "Maharashtra, India",
    tooltipText: "Shani Jyot Agro Farmer Producer Company Pvt Ltd, Maharashtra",
    rating: "4.2",
    ratingPercent: "84%",
    ratingsCount: "60",
    responseRate: "78%",
    whatsappConfirmed: false,
  },
  {
    _id: "wamantara-farmer-producer-yeola",
    name: "Bapu Gaikwad",
    email: "bapugaikwad7818@gmail.com",
    password: "Bapu Gaikwad",
    mobileNumber: "9623927818",
    companyName: "Wamantara Farmer Producer Company Ltd",
    productOrService: "Maize, Onion",
    imgSrc: "/assets/onion6.jpg",
    mainProducts: "Maize, Onion",
    altText: "Wamantara Farmer Producer - Maize, Onion",
    years: "1 YRS",
    location: "Yeola, Maharashtra, India",
    tooltipText: "Wamantara Farmer Producer, Maize, Onion, Yeola",
    rating: "4.7",
    ratingPercent: "93%",
    ratingsCount: "32",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    _id: "ebrahim-sayyad-pune",
    name: "Ebrahim Sayyad",
    email: "EbrahimSayyad123@gmail.com",
    password: "Ebrahim Sayyad",
    mobileNumber: "7056414670",
    companyName: "Brother Enterprises",
    statename: "Mumbai",
    cityname: "Pune",
    productOrService: "Onion",
    imgSrc: "/assets/onion12.jpg",
    mainProducts: "Fresh Onions, Export Quality Onions",
    altText: "Brother Enterprises - Leading Onion Supplier in Pune",
    years: "1 YRS",
    location: "Pune, Mumbai, India",
    tooltipText: "Brother Enterprises - Trusted Onion Supplier",
    rating: "4.5",
    ratingPercent: "89%",
    ratingsCount: "120",
    responseRate: "85%",
    whatsappConfirmed: false,
  },
];

const MainRice = () => {
  return (
    <div className="main-box">
      <Helmet>
        <title>
          Contact the Best Suppliers of Onion Seeds & Dehydrated Onions
        </title>
        <meta
          name="description"
          content="Connect with the best suppliers of onion seeds, onion powder, dehydrated onions, white onion, red onion with GlobalB2BMart. We are the best B2B portal in India."
        />
      </Helmet>
      <aside>
        <div className="flt-box-wrap">
          <div className="flt-box mb-0 flt-head">Filters By</div>
          <div className="flt-box bdrt-0">
            <p className="flt-title">Related Categories</p>
            <div className="flt-content">
              <ul className="flt-list cust-scroll">
                <li>
                  <Link to="#">Onion Seeds</Link>
                </li>
                <li>
                  <Link to="#">Vegetable Seeds</Link>
                </li>
                <li>
                  <Link to="#">Agricultural Products</Link>
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
                  <Link to="#">Tamil Nadu</Link>
                </li>
                <li>
                  <Link to="#">Karnataka</Link>
                </li>
                <li>
                  <Link to="#">Rajasthan</Link>
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
            {/* Add more categories related to Onion Seeds */}
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/freshonion.jpeg"
                      width={55}
                      height={55}
                      alt="Fresh Onion"
                    />
                  </figure>
                  <p className="title">Fresh Onion</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/whiteonion.jpeg"
                      width={55}
                      height={55}
                      alt="White Onion"
                    />
                  </figure>
                  <p className="title">White Onion</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/onion1.jpeg"
                      width={55}
                      height={55}
                      alt="Dehydrated Onion"
                    />
                  </figure>
                  <p className="title">Dehydrated Onion</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/onion2.jpeg"
                      width={55}
                      height={55}
                      alt="Red Onion"
                    />
                  </figure>
                  <p className="title">Red Onion</p>
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

export default MainRice;
