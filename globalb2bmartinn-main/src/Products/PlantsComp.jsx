import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    _id: "z1234567890a012347",
    name: "Rajib Mandal",
    email: "ashifanursery@gmail.com",
    password: "rajesh mandal",
    mobileNumber: "8967329194",
    companyName: "Ashifa Nursery",
    productOrService: "Plants",
    imgSrc: "/assets/plant7.jpeg",
    mainProducts: "Ornamental Plants, Fruit Plants, Indoor Plants",
    altText: "Plants - Ashifa Nursery",
    years: "1 YRS",
    location: "Kolkata, West Bengal, India",
    tooltipText: "Sector 15, Plant Market, Kolkata, West Bengal, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "65",
    responseRate: "90%",
    path: "/ashifa-nursery",
  },
  {
    name: "md thala",
    email: "mdnursery@gmail.com",
    mobileNumber: "9564995633",
    companyName: "md nursery",
    productOrService: "plant",
    imgSrc: "/assets/plants.jpg", // Provide the correct image path
    mainProducts: "Indoor Plants, Outdoor Plants, Flowering Plants, Succulents",
    altText: "Plant - md nursery",
    years: "1 YR",
    location: "delhi india",
    tooltipText: "Location details not provided",
    rating: "90%",
    ratingPercent: "98%",
    ratingsCount: "89",
    responseRate: "89%",
  },
  {
    name: "Aamir Hashmi",
    email: "Aamir123@gmail.com",
    mobileNumber: "9311174425",
    companyName: "Forever Green Nursery",
    productOrService: "Nursery",
    imgSrc: "/assets/plant6.jpeg", // Provide the correct image path
    mainProducts: "Indoor Plants, Outdoor Plants, Flowering Plants, Succulents",
    altText: "Nursery - Forever Green Nursery",
    years: "1 YR",
    location: "Mumbai, India",
    tooltipText: "Location details not provided",
    rating: "85%",
    ratingPercent: "95%",
    ratingsCount: "120",
    responseRate: "92%",
  },
  {
    name: "Mohammed Ali",
    email: "ali1234@gmail.com",
    mobileNumber: "9010060551",
    companyName: "AZ Flower",
    productOrService: "Flower",
    imgSrc: "/assets/flower.jpeg",
    altText: "Flower - AZ Flower",
    mainProducts: "Roses, Lilies, Tulips, Orchids",
    years: "1 YRS",
    location: "Ahmedabad, India",
    tooltipText: "123 Bloom Street, Floral District, Ahmedabad, India",
    rating: "4.3",
    ratingPercent: "86%",
    ratingsCount: "180",
    responseRate: "83%",
  },

  {
    _id: "d9e8f7g6h5i4j3k2l1m0n9o8", // Random unique ID
    name: "Mahendra Solnki",
    email: "mahedrasolnki1324@gmail.com",
    mobileNumber: "8155920235",
    companyName: "Krishna Private Limited",
    productOrService: "Nursery Plant",
    imgSrc: "/assets/plants1.jpeg", // Example image path
    mainProducts: "Nursery Plants, Garden Plants, Decorative Plants, Seedlings",
    altText: "Nursery Plants - Krishna Private Limited",
    years: "1 YRS",
    location: "Ahmedabad, India",
    tooltipText: "32 Green Valley, Ahmedabad, India",
    rating: "4.3",
    ratingPercent: "85%",
    ratingsCount: "40",
    responseRate: "89%",
    whatsappConfirmed: true,
  },
  {
    _id: "m3456789012n345678",
    name: "Vashaak",
    email: "SinglePatelAdenium6785@gmail.com",
    password: "vashaak123",
    mobileNumber: "9434419163",
    companyName: "Single Patel Adenium 3 Flower Colour",
    productOrService: "Nursery Plant Supplier - All India",
    imgSrc: "/assets/plant8.jpeg",
    mainProducts: "Adenium Plants, Flowering Plants, Indoor Plants",
    altText: "Nursery Plants - Single Patel Adenium 3 Flower Colour",
    years: "1 YRS",
    location: "Vadodara, Gujarat, India",
    tooltipText: "Alkapuri, Vadodara, Gujarat, India",
    rating: "4.7",
    ratingPercent: "95%",
    ratingsCount: "120",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    _id: "o5678901234p567890",
    name: "Sk",
    email: "SUNFLOWERSNURSERY6785@gmail.com",
    password: "SUNFLOWER123",
    mobileNumber: "7439169252",
    companyName: "Sun Flowers Nursery Kolkata",
    productOrService: "Nursery Plant",
    imgSrc: "/assets/nurseryplant.jpeg",
    mainProducts: "Flowering Plants, Indoor Plants, Outdoor Plants",
    altText: "Nursery Plants - Sun Flowers Nursery Kolkata",
    years: "1 YRS",
    location: "Kolkata, West Bengal, India",
    tooltipText: "Garia, Kolkata, West Bengal, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "110",
    responseRate: "89%",
    whatsappConfirmed: true,
  },
  {
    _id: "p6789012345q678901",
    name: "Mr",
    email: "MandivilaNetpot6785@gmail.com",
    password: "MandivilaNetpot123",
    mobileNumber: "9332935568",
    companyName: "Mandivila Netpot Sizes Plants",
    productOrService: "Nursery Plant",
    imgSrc: "/assets/plant9.jpeg",
    mainProducts: "Netpot Plants, Indoor Plants, Outdoor Plants",
    altText: "Nursery Plants - Mandivila Netpot Sizes Plants",
    years: "1 YRS",
    location: "Howrah, West Bengal, India",
    tooltipText: "Shibpur, Howrah, West Bengal, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "105",
    responseRate: "91%",
    whatsappConfirmed: true,
  },
  {
    _id: "q7890123456r789012",
    name: "Ravi Doddamani",
    email: "abc@gmail.com",
    password: "ravi@123",
    mobileNumber: "9448372442",
    companyName: "Doddamani Garden Centre",
    productOrService: "Plant Nursery",
    imgSrc: "/assets/plant10.jpeg",
    mainProducts: "Flowering Plants, Outdoor Plants, Indoor Plants",
    altText: "Plant Nursery - Doddamani Garden Centre",
    years: "1 YRS",
    location: "Dharwad, Karnataka, India",
    tooltipText: "Saptapur, Dharwad, Karnataka, India",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "140",
    responseRate: "92%",
    whatsappConfirmed: true,
  },

  {
    _id: "r8901234567s890123",
    name: "Virupaksh",
    email: "abc@gmail.com",
    password: "viru@123",
    mobileNumber: "9845516251",
    companyName: "Shashi Nursery",
    productOrService: "Plant Nursery",
    imgSrc: "/assets/plant11.jpeg",
    mainProducts: "Saplings, Indoor Plants, Outdoor Plants",
    altText: "Plant Nursery - Shashi Nursery",
    years: "1 YRS",
    location: "Hubli, Karnataka, India",
    tooltipText: "Vidya Nagar, Hubli, Karnataka, India",
    rating: "4.5",
    ratingPercent: "91%",
    ratingsCount: "85",
    responseRate: "88%",
    whatsappConfirmed: true,
  },

  {
    _id: "s9012345678t901234",
    name: "Vimesh",
    email: "abc@gmail.com",
    password: "vim@12344",
    mobileNumber: "9739097555",
    companyName: "Prutvi Nursery",
    productOrService: "Plant Nursery",
    imgSrc: "/assets/plant12.jpeg",
    mainProducts: "Saplings, Indoor Plants, Outdoor Plants",
    altText: "Plant Nursery - Prutvi Nursery",
    years: "1 YRS",
    location: "Mysore, Karnataka, India",
    tooltipText: "Hebbal, Mysore, Karnataka, India",
    rating: "4.6",
    ratingPercent: "93%",
    ratingsCount: "95",
    responseRate: "89%",
    whatsappConfirmed: true,
  },
  {
    _id: "v2345678901w234567",
    name: "Shekh",
    email: "snnursery@gmail.com",
    password: "shekhshekh",
    mobileNumber: "6291167375",
    companyName: "SN Nursery",
    productOrService: "Plants",
    imgSrc: "/assets/plants11.jpeg",
    mainProducts: "Saplings, Indoor Plants, Outdoor Plants",
    altText: "Plants - SN Nursery",
    years: "1 YRS",
    location: "Kolkata, West Bengal, India",
    tooltipText: "Park Street, Kolkata, West Bengal, India",
    rating: "4.7",
    ratingPercent: "93%",
    ratingsCount: "120",
    responseRate: "87%",
    whatsappConfirmed: true,
  },
  {
    _id: "a1234567890wxyz1234",
    name: "Sahid",
    email: "abc@gmail.com",
    password: "sahid@123",
    mobileNumber: "6291031831",
    companyName: "RK Nursery",
    productOrService: "Plant nursery",
    imgSrc: "/assets/plant13.jpeg", // Placeholder for image path
    mainProducts: "Plants, Seeds, Nursery Supplies",
    altText: "Plant Nursery - RK Nursery",
    years: "1 YRS", // Placeholder for years of experience
    location: "Delhi, India", // Placeholder for location
    tooltipText: "RK Nursery, Delhi, India",
    rating: "4.2", // Placeholder for rating
    ratingPercent: "84%", // Placeholder for rating percentage
    ratingsCount: "75", // Placeholder for ratings count
    responseRate: "80%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "a1234567890wxyz5679",
    name: "Karthik",
    email: "abc@gmail.com",
    password: "karthik@123",
    mobileNumber: "9980875625",
    companyName: "Karthik Farms and Nursery",
    productOrService: "Plant Nursery",
    imgSrc: "/assets/nursery1.jpeg", // Placeholder for image path
    mainProducts: "Plants, Seedlings, Gardening Supplies",
    altText: "Plant Nursery - Karthik Farms and Nursery",
    years: "1 YRS", // Placeholder for years of experience
    location: "Bangalore, India", // Placeholder for location
    tooltipText: "Karthik Farms and Nursery, Bangalore, India",
    rating: "4.3", // Placeholder for rating
    ratingPercent: "86%", // Placeholder for rating percentage
    ratingsCount: "90", // Placeholder for ratings count
    responseRate: "88%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "a1234567890def4567",
    name: "Bulbul Hussain",
    email: "abc@gmail.com",
    password: "bul@12344",
    mobileNumber: "6001957276",
    companyName: "Hussain Enterprises",
    productOrService: "Plant Nursery",
    imgSrc: "/assets/plants5.jpeg", // Placeholder for image path
    mainProducts: "Plants, Nursery Supplies, Gardening Tools",
    altText: "Hussain Enterprises - Plant Nursery",
    years: "1 YRS", // Placeholder for years of experience
    location: "India", // Placeholder for location
    tooltipText: "Hussain Enterprises, India",
    rating: "4.5", // Placeholder for rating
    ratingPercent: "90%", // Placeholder for rating percentage
    ratingsCount: "75", // Placeholder for ratings count
    responseRate: "85%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "vishram-vishram-west-bengal",
    name: "Vishram",
    email: "Vishram@gmail.com",
    password: "12345678",
    mobileNumber: "9712865242",
    companyName: "Vishram",
    productOrService: "plant",
    imgSrc: "/assets/plant19.jpg",
    mainProducts: "plant",
    altText: "Vishram - plant",
    years: "1 YRS",
    location: "West Bengal, India",
    tooltipText: "Vishram, plant, West Bengal",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "30",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "plant-nursery-up",
    name: "Sohit Kushwaha",
    email: "SohitKushwaha@gmail.com",
    password: "12345678",
    mobileNumber: "9219375160",
    companyName: "plant nursery",
    productOrService: "plant",
    imgSrc: "/assets/plant20.jpg",
    mainProducts: "Plants",
    altText: "Plant Nursery - Plants",
    years: "1 YRS",
    location: "Uttar Pradesh, UP, India",
    tooltipText: "Plant Nursery, Plant, UP",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "30",
    responseRate: "95%",
    whatsappConfirmed: true,
  },
  {
    _id: "hinal-patel-vadodra",
    name: "Hinal Patel",
    email: "hinalpatel@gmail.com",
    password: "hinal patel",
    mobileNumber: "9428878610",
    companyName: "Hinal Patel",
    productOrService: "Dragon Fruit Plant",
    imgSrc: "/assets/dragonplant.jpg", // Placeholder image path
    mainProducts: "Dragon Fruit Plant",
    altText: "Hinal Patel - Dragon Fruit Plant",
    years: "1 YRS", // Random value
    location: "Vadodra, Gujarat, India",
    tooltipText: "Hinal Patel, Dragon Fruit Plant, Vadodra",
    rating: "4.6", // Random value
    ratingPercent: "91%", // Random value
    ratingsCount: "35", // Random value
    responseRate: "85%", // Random value
    whatsappConfirmed: true,
  },
  {
    _id: "arsena-nursery-west-bengal",
    name: "Arsena Nursery",
    email: "ArsenaNursery@gmail.com",
    password: "12345678",
    mobileNumber: "9123397739",
    companyName: "Arsena Nursery",
    productOrService: "Plants",
    imgSrc: "/assets/arsena.jpg", // Placeholder image path
    mainProducts: "Plants",
    altText: "Arsena Nursery - Plants",
    years: "1 YRS", // Random value
    location: "West Bengal, India",
    tooltipText: "Arsena Nursery, Plants, West Bengal",
    rating: "4.5", // Random value
    ratingPercent: "92%", // Random value
    ratingsCount: "38", // Random value
    responseRate: "88%", // Random value
    whatsappConfirmed: true,
  },
  {
    _id: "nahar-nursery-west-bengal",
    name: "Nahar Nursery",
    email: "NaharNursery@gmail.com",
    password: "12345678",
    mobileNumber: "9832964499",
    companyName: "Nahar Nursery",
    productOrService: "Plant",
    imgSrc: "/assets/naharplant1.jpg", // Placeholder image path
    mainProducts: "Plants",
    altText: "Nahar Nursery - Plants",
    years: "1 YRS", // Random value
    location: "West Bengal, India",
    tooltipText: "Nahar Nursery, Plants, West Bengal",
    rating: "4.5", // Random value
    ratingPercent: "92%", // Random value
    ratingsCount: "25", // Random value
    responseRate: "85%", // Random value
    whatsappConfirmed: true,
  },
  {
    _id: "srk-nursery-west-bengal",
    name: "Srk Nursery",
    email: "SrkNursery@gmail.com",
    password: "12345678",
    mobileNumber: "7439785817",
    companyName: "Srk Nursery",
    productOrService: "Plant",
    imgSrc: "/assets/sknur.jpg", // Placeholder image path
    mainProducts: "Plants",
    altText: "Srk Nursery - Plants",
    years: "1 YRS", // Random value
    location: "West Bengal, India",
    tooltipText: "Srk Nursery, Plants, West Bengal",
    rating: "4.7", // Random value
    ratingPercent: "94%", // Random value
    ratingsCount: "50", // Random value
    responseRate: "85%", // Random value
    whatsappConfirmed: true,
  },
  {
    _id: "gazi-nursary-west-bengal",
    name: "sk saddam",
    email: "sksaddam@gmail.com",
    password: "12345678",
    mobileNumber: "7439889137",
    companyName: "gazi nursary",
    productOrService: "Plant",
    imgSrc: "/assets/gazi.jpg", // Placeholder image path
    mainProducts: "Plants",
    altText: "gazi nursary - Plants",
    years: "1 YRS", // Random value
    location: "West Bengal, India",
    tooltipText: "gazi nursary, Plants, West Bengal",
    rating: "4.6", // Random value
    ratingPercent: "92%", // Random value
    ratingsCount: "40", // Random value
    responseRate: "80%", // Random value
    whatsappConfirmed: true,
  },
  {
    _id: "aranav-roj-nursery-raighar",
    name: "Aranav",
    email: "aranvrose12@gmail.com",
    password: "123456789",
    mobileNumber: "8149152827",
    companyName: "Aranav रोझ Nursery",
    productOrService: "Plant",
    imgSrc: "/assets/rojnur.jpg",
    mainProducts: "Plants",
    altText: "Aranav रोझ Nursery - Plant",
    years: "1 YRS",
    location: "Raighar, Maharashtra, India",
    tooltipText: "Aranav रोझ Nursery, Plant, Raighar, Maharashtra",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "29",
    responseRate: "82%",
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const PlantComponent = () => {
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
                  <Link to="#">Indoor Plants</Link>
                </li>
                <li>
                  <Link to="#">Outdoor Plants</Link>
                </li>
                <li>
                  <Link to="#">Flowering Plants</Link>
                </li>
                <li>
                  <Link to="#">Succulents</Link>
                </li>
                <li>
                  <Link to="#">Cacti</Link>
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
                  <Link to="#">Kerala</Link>
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
                      src="/assets/plant1.jpg"
                      width={55}
                      height={55}
                      alt="Indoor Plants"
                    />
                  </figure>
                  <p className="title">Indoor Plants</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/plant2.jpg"
                      width={55}
                      height={55}
                      alt="Outdoor Plants"
                    />
                  </figure>
                  <p className="title">Outdoor Plants</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/plant3.jpg"
                      width={55}
                      height={55}
                      alt="Flowering Plants"
                    />
                  </figure>
                  <p className="title">Flowering Plants</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/plant4.jpg"
                      width={55}
                      height={55}
                      alt="Succulents"
                    />
                  </figure>
                  <p className="title">Succulents</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/plant5.jpg"
                      width={55}
                      height={55}
                      alt="Cacti"
                    />
                  </figure>
                  <p className="title">Cacti</p>
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

export default PlantComponent;
