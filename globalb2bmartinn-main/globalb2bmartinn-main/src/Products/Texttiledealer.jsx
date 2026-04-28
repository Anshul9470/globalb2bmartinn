import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    _id: "667426da14fe92087aaec7aa",
    name: "shyam ji textile",
    email: "shyamjitextile@gmail.com",
    mobileNumber: "6376524346",
    companyName: "shyam ji textile",
    productOrService: "bed sheet dealer",
    imgSrc: "/assets/pils.webp", // You need to provide the correct image path
    mainProducts: "Bed Sheets, Pillow Covers, Home Furnishings",
    altText: "Bed Sheet Dealer - shyam ji textile",
    years: "1 YRS",
    location: "Surat, India",
    tooltipText: "789 Textile Market, Ring Road, Surat, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "200",
    responseRate: "97%",
  },
  {
    name: "shiv shakti loomtex",
    email: "shivshaktiloomtex@gmail.com",
    mobileNumber: "8950895895",
    companyName: "shiv shakti loomtex",
    productOrService: "bedsheet dealer",
    imgSrc: "/assets/pil.webp", // Ensure to provide the correct image path
    mainProducts: "Bed Sheets, Pillow Covers, Home Furnishings",
    altText: "Bed Sheet Dealer - shiv shakti loomtex",
    years: "1 YRS",
    location: "Ahmedabad, India",
    tooltipText: "123 Textile Market, CG Road, Ahmedabad, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "150",
    responseRate: "95%",
  },
  {
    name: "Mr. Ankit Garg",
    email: "hari.textile94@gmail.com",
    password: "Mr. Ankit Garg",
    mobileNumber: "9142000049",
    companyName: "Hari Textile",
    productOrService: "Bed Sheet",
    imgSrc: "/assets/bed1.jpg", // Provide the correct image path
    altText: "Bed Sheet - Hari Textile",
    mainProducts: "Bed Sheets, Home Textiles",
    years: "1 YRS",
    location: "Jaipur, India",
    tooltipText: "789 Textile Lane, Industrial Park, Jaipur, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "85",
    responseRate: "88%",
  },
  {
    name: "Hamza",
    email: "abc@gmail.com",
    mobileNumber: "7007087501",
    companyName: "Rugs Villa",
    productOrService: "Rugs Manufacturer",
    imgSrc: "/assets/bed3.jpeg", // Provide the correct image path
    mainProducts: "Wool Rugs, Silk Rugs, Cotton Rugs, Hand-knotted Rugs",
    altText: "Rugs Manufacturer - Rugs Villa",
    years: "1 YRS",
    location: "Agra, India",
    tooltipText: "Location details not provided",
    rating: "90%",
    ratingPercent: "92%",
    ratingsCount: "45",
    responseRate: "85%",
  },

  {
    name: "HARISH BAJAJ",
    email: "Ketostics@gmail.com",
    password: "HARISH BAJAJ",
    mobileNumber: "9254106501",
    companyName: "Ketostics",
    productOrService: "Bed Sheet",
    imgSrc: "/assets/bed2.jpg", // Provide the correct image path
    altText: "Bed Sheet - Ketostics",
    mainProducts: "Bed Sheets, Home Textiles",
    years: "1 YRS",
    location: "Unknown Location, India", // Update with actual location
    tooltipText: "789 Textile Lane, Industrial Park, Unknown Location, India", // Update with actual location
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "85",
    responseRate: "88%",
  },

  {
    name: "Dheeraj",
    email: "abc@gmail.com",
    mobileNumber: "7568555904",
    companyName: "Jaipur Prime",
    productOrService: "Bedsheet Manufacturer",
    imgSrc: "/assets/pil.webp", // You need to provide the correct image path
    mainProducts: "Cotton bedsheets, Silk bedsheets, Printed bedsheets, etc.",
    altText: "Bedsheet Manufacturer - Jaipur Prime",
    years: "1  yrs",
    location: "Jaipur, Rajasthan, India",
    tooltipText: "456, MI Road, Jaipur - 302001, Rajasthan, India",
    rating: "4.8",
    ratingPercent: "97%",
    ratingsCount: "200",
    responseRate: "98%",
  },
  {
    name: "Shubham Aggarwal",
    email: "abc@gmail.com",
    mobileNumber: "8233192075",
    companyName: "Sabya Collection",
    productOrService: "Bedsheet Manufacturer",
    imgSrc: "/assets/pil2.avif",
    mainProducts: "Cotton bedsheets, Silk bedsheets, Printed bedsheets, etc.",
    altText: "Bedsheet Manufacturer - Sabya Collection",
    years: "1  yrs",
    location: "Jaipur, Rajasthan, India",
    tooltipText: "456, MI Road, Jaipur - 302001, Rajasthan, India",
    rating: "4.8",
    ratingPercent: "97%",
    ratingsCount: "200",
    responseRate: "98%",
  },
  {
    name: "Jaipur Hastkar",
    email: "abc@gmail.com",
    mobileNumber: "8766066036",
    companyName: "Jaipur Hastkar",
    productOrService: "Bedsheet Manufacturer",
    imgSrc: "/assets/bedsheet1.jpeg",
    mainProducts: "Cotton bedsheets, Silk bedsheets, Printed bedsheets, etc.",
    altText: "Bedsheet Manufacturer - Jaipur Hastkar",
    years: "1  yrs",
    location: "Jaipur, Rajasthan, India",
    tooltipText: "456, MI Road, Jaipur - 302001, Rajasthan, India",
    rating: "4.8",
    ratingPercent: "97%",
    ratingsCount: "200",
    responseRate: "98%",
  },
  {
    name: "Atul",
    email: "abc@gmail.com",
    mobileNumber: "7060361689",
    companyName: "Sunita Enterprises",
    productOrService: "Bedsheet Manufacturer",
    imgSrc: "/assets/bedsheet2.jpeg",
    mainProducts: "Cotton bedsheets, Silk bedsheets, Printed bedsheets, etc.",
    altText: "Bedsheet Manufacturer - Sunita Enterprises",
    years: "1  yrs",
    location: "Jaipur, Rajasthan, India",
    tooltipText: "456, MI Road, Jaipur - 302001, Rajasthan, India",
    rating: "4.8",
    ratingPercent: "97%",
    ratingsCount: "200",
    responseRate: "98%",
  },
  {
    _id: "s345678901abcdef234572", // Random unique ID
    name: "Ayush Kapoor",
    email: "ayushkapoor@gmail.com",
    password: "ayush@123",
    mobileNumber: "8926100143",
    companyName: "Satya Sai Handloom",
    productOrService: "Bedsheets",
    imgSrc: "/assets/bedsheet3.jpeg", // Example image path
    mainProducts: "Bedsheets, Handloom Fabrics",
    altText: "Bedsheets - Satya Sai Handloom",
    years: "1 YRS",
    location: "Jaipur, India",
    tooltipText: "Shop 20, Handloom Market, Jaipur, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "50",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "f6783158946g890134",
    name: "Sanjay",
    email: "sanjay1234@gmail.com",
    password: "sanjay1234",
    mobileNumber: "9372457081",
    companyName: "Nakoda Textiles Mills",
    productOrService: "Textiles",
    imgSrc: "/assets/testile.jpeg",
    mainProducts: "Cotton Fabrics, Polyester Fabrics, Printed Textiles",
    altText: "Textiles - Nakoda Textiles Mills",
    years: "1 YRS",
    location: "Surat, Gujarat, India",
    tooltipText: "Ring Road, Surat, Gujarat, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "95",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    _id: "a1234567890wxyz5807",
    name: "Ram",
    email: "vinodcarpet@gmail.com",
    password: "vinodcarpet",
    mobileNumber: "9991000004",
    companyName: "VINOD CARPET INDUSTRIES",
    productOrService: "Carpet",
    imgSrc: "/assets/carpet2.jpeg", // Placeholder for image path
    mainProducts: "Handwoven Carpets, Rugs, Custom Carpets",
    altText: "Carpets - VINOD CARPET INDUSTRIES",
    years: "1 YRS", // Placeholder for years of experience
    location: "Bhadohi, India", // Placeholder for location
    tooltipText: "VINOD CARPET INDUSTRIES, Bhadohi, India",
    rating: "4.7", // Placeholder for rating
    ratingPercent: "92%", // Placeholder for rating percentage
    ratingsCount: "200", // Placeholder for ratings count
    responseRate: "90%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "e2345678901abc3456",
    name: "Rakesh Khandelwal",
    email: "anokhitextile@gmail.com",
    password: "8375000867",
    mobileNumber: "9829062755",
    companyName: "Anokhi Textile",
    productOrService: "Bedsheet",
    imgSrc: "/assets/bedsheet4.jpeg", // Placeholder for image path
    mainProducts: "Bedsheets, Home Linen, Textile Products",
    altText: "Anokhi Textile - Bedsheet Manufacturer",
    years: "1 YRS", // Placeholder for years of experience
    location: "Jaipur, Rajasthan, India", // Placeholder for location
    tooltipText: "Anokhi Textile, Jaipur",
    rating: "4.7", // Placeholder for rating
    ratingPercent: "94%", // Placeholder for rating percentage
    ratingsCount: "85", // Placeholder for ratings count
    responseRate: "88%", // Placeholder for response rate
    whatsappConfirmed: true,
  },

  {
    _id: "p-matheshwaran-sri-mano-tex-salem",
    name: "P. Matheshwaran",
    email: "srimanofashion.sf@gmail.com",
    password: "9994655742",
    mobileNumber: "9994655742",
    companyName: "SRI MANO TEX",
    productOrService: "textile manufacturing",
    imgSrc: "/assets/textile1.jpg",
    mainProducts: "textile manufacturing",
    altText: "SRI MANO TEX - textile manufacturing",
    years: "1 YRS",
    location: "Salem, Tamil Nadu, India",
    tooltipText: "SRI MANO TEX, textile manufacturing, Salem",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "30",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "anita-textile-surat",
    name: "Balram Prsad",
    email: "anitatextile@gmail.com",
    password: "Balram Prsad",
    mobileNumber: "8690930918",
    companyName: "anita textile",
    productOrService: "textile, fabric",
    imgSrc: "/assets/textile2.jpg",
    mainProducts: "Textiles and Fabrics",
    altText: "Anita Textile - Textiles and Fabrics",
    years: "1 YRS",
    location: "Surat, Gujarat, India",
    tooltipText: "Anita Textile, Textiles and Fabrics, Surat",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "30",
    responseRate: "95%",
    whatsappConfirmed: true,
  },
  {
    _id: "mr-suresh-karur-tamilnadu",
    name: "Mr. Suresh",
    email: "info@joyfabs.in",
    password: "9843530429",
    mobileNumber: "9843530429",
    companyName: "JOY FABS",
    statename: "Tamilnadu",
    cityname: "Karur",
    productOrService: "Kitchen Linen, Bed Linen, Table Linen, Bath Linen, Bags",
    imgSrc: "/assets/joy-bed.jpg",
    mainProducts: "Kitchen Linen, Bed Linen, Table Linen, Bath Linen, Bags",
    altText: "JOY FABS - Karur",
    years: "1 YRS",
    location: "Karur, Tamilnadu",
    tooltipText: "JOY FABS, Karur",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "120",
    responseRate: "92%",
    whatsappConfirmed: true,
  },
  {
    name: "Manoj Kumar",
    email: "ManojKumar123@gamil.com",
    password: "Manoj Kumar",
    mobileNumber: "7015949116",
    companyName: "AMBAY ENTERPRISES",
    productOrService: "Bed Sheets",
    imgSrc: "/assets/bedsheet5.jpg",
    mainProducts: "Bed Sheets, Blankets, Quilts",
    altText: "AMBAY ENTERPRISES - Bed Sheets",
    years: "1 YRS",
    location: "Panipat, Haryana, India",
    tooltipText: "AMBAY ENTERPRISES, Panipat",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "75",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    name: "Rehman",
    email: "Rehman123@gmail.com",
    password: "GROW ENTERPRISES",
    mobileNumber: "7417793205",
    companyName: "GROW ENTERPRISES",
    productOrService: "Bed Sheets and Garments",
    imgSrc: "/assets/bedsheet6.jpg",
    mainProducts: "Bed Sheets, Garments, Pillow Covers",
    altText: "GROW ENTERPRISES - Bed Sheets and Garments",
    years: "1 YRS",
    location: "Saharanpur, Uttar Pradesh, India",
    tooltipText: "GROW ENTERPRISES, Saharanpur",
    rating: "4.4",
    ratingPercent: "88%",
    ratingsCount: "65",
    responseRate: "82%",
    whatsappConfirmed: true,
  },
];

const TextileDealers = () => {
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
                  <Link to="#">Bed Sheets</Link>
                </li>
                <li>
                  <Link to="#">Pillow Covers</Link>
                </li>
                <li>
                  <Link to="#">Home Furnishings</Link>
                </li>
                <li>
                  <Link to="#">Curtains</Link>
                </li>
                <li>
                  <Link to="#">Blankets</Link>
                </li>
                <li>
                  <Link to="#">Quilts</Link>
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
                      src="/assets/pil.webp"
                      width={55}
                      height={55}
                      alt="Bed Sheets"
                    />
                  </figure>
                  <p className="title">Bed Sheets</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/pil1.jpg"
                      width={55}
                      height={55}
                      alt="Pillow Covers"
                    />
                  </figure>
                  <p className="title">Pillow Covers</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/pil2.avif"
                      width={55}
                      height={55}
                      alt="Home Furnishings"
                    />
                  </figure>
                  <p className="title">Home Furnishings</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/pil3.avif"
                      width={55}
                      height={55}
                      alt="Curtains"
                    />
                  </figure>
                  <p className="title">Curtains</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/pil4.jpeg"
                      width={55}
                      height={55}
                      alt="Blankets"
                    />
                  </figure>
                  <p className="title">Blankets</p>
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

export default TextileDealers;
