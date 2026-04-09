import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    _id: "jameswang-foshan-guangdong",
    name: "James Wang",
    email: "MKT@popula-air.com",
    password: "Popula,0000",
    mobileNumber: "1367621912",
    companyName: "Popula",
    statename: "Guangdong",
    cityname: "Foshan",
    productOrService: "Air Cooler, Ventilation Fan",
    imgSrc: "/assets/chaina-cooler.webp",
    mainProducts: "Air Coolers, Ventilation Fans",
    altText: "Popula - Foshan",
    years: "1 YRS",
    location: "Foshan, Guangdong",
    tooltipText: "Popula, Foshan",
    rating: "4.8",
    ratingPercent: "95%",
    ratingsCount: "245",
    responseRate: "98%",
    whatsappConfirmed: false,
  },
  {
    _id: "667426da14fe92087aaec7aa",
    name: "Khushi Electronics.",
    email: "Khushielectronics@gmail.com",
    mobileNumber: "7061970522",
    companyName: "Khushi Electronics.",
    productOrService: "electronics goods dealer",
    imgSrc: "/assets/electric.jpeg", // You need to provide the correct image path
    mainProducts: "Smartphones, Laptops, Home Appliances",
    altText: "Electronics Goods Dealer - Khushi Electronics.",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "456 Electronics Market, Nehru Place, Delhi, India",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "150",
    responseRate: "98%",
  },
  {
    name: "Inanul",
    email: "inanul123@gmail.com",
    mobileNumber: "9007891737",
    companyName: "Inanul Enterprises",
    productOrService: "Electronic Items",
    imgSrc: "/assets/elec8.jpeg", // Provide the correct image path
    mainProducts: "Consumer Electronics, Gadgets, Accessories",
    altText: "Electronic Items - Inanul Enterprises",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "Location details not provided",
    rating: "85%",
    ratingPercent: "87%",
    ratingsCount: "30",
    responseRate: "90%",
  },
  {
    _id: "s7890123456789cdef01234", // Random unique ID
    name: "Ganesh More",
    email: "ganeshmore@gmail.com",
    mobileNumber: "9765117788",
    companyName: "SARASWATI ENTERPRISES",
    productOrService: "Electric Controls Panels",
    imgSrc: "/assets/panel.jpeg", // Example image path
    mainProducts: "Electric Control Panels, Circuit Breakers, Control Systems",
    altText: "Electric Controls Panels - SARASWATI ENTERPRISES",
    years: "1 YRS",
    location: "Pune, India",
    tooltipText: "Sector 18, Industrial Area, Pune, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "90",
    responseRate: "95%",
    whatsappConfirmed: true,
  },
  {
    _id: "s890123456789abcdef01235", // Random unique ID
    name: "Vijay Verma",
    email: "vijayverma202@gmail.com",
    mobileNumber: "8291526358",
    companyName: "S V POWER SYSTEM PRIVATE LIMITED",
    productOrService: "Electric Controls Panels Manufacture",
    imgSrc: "/assets/panel1.jpeg", // Example image path
    mainProducts: "Electric Control Panels, Circuit Breakers, Control Systems",
    altText:
      "Electric Controls Panels Manufacture - S V POWER SYSTEM PRIVATE LIMITED",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "Block C, Industrial Area, Delhi, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "85",
    responseRate: "93%",
    whatsappConfirmed: true,
  },
  {
    _id: "s1234567890abcdef012348", // Random unique ID
    name: "Piyush Gupta",
    email: "abc@gmail.com",
    password: "piyush@123",
    mobileNumber: "9805335449",
    companyName: "Liv Technology",
    productOrService: "Control Panel",
    imgSrc: "/assets/control1.jpeg", // Example image path
    mainProducts: "Control Panels, Electrical Panels, Automation Panels",
    altText: "Control Panel - Liv Technology",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "Building 5, Sector 15, Mumbai, India",
    rating: "4.4",
    ratingPercent: "88%",
    ratingsCount: "60",
    responseRate: "95%",
    whatsappConfirmed: true,
  },
  {
    _id: "yasa-geyser-agra",
    name: "sandeep yadav",
    email: "yasageyser@gmail.com",
    password: "sandeep yadav",
    mobileNumber: "7895457503",
    companyName: "Yasa Geyser",
    productOrService: "Geyser",
    imgSrc: "/assets/gyser1.jpg", // Placeholder image path
    mainProducts: "Geysers",
    altText: "Yasa Geyser - Geysers",
    years: "1 YRS", // Random value
    location: "Agra, Uttar Pradesh, India",
    tooltipText: "Yasa Geyser, Geysers, Agra",
    rating: "4.6", // Random value
    ratingPercent: "92%", // Random value
    ratingsCount: "20", // Random value
    responseRate: "88%", // Random value
    whatsappConfirmed: true,
  },

  {
    _id: "s7890123abcdef4567890", // Random unique ID
    name: "Ganesh More",
    email: "ganeshmore@gmail.com",
    mobileNumber: "9765117788",
    companyName: "SARASWATI ENTERPRISES",
    productOrService: "Electric Control Panels",
    imgSrc: "/assets/panel2.jpeg", // Example image path
    mainProducts: "Electric Control Panels, Automation Systems",
    altText: "Electric Control Panels - SARASWATI ENTERPRISES",
    years: "1 YRS",
    location: "Nashik, India",
    tooltipText: "Unit 22, Tech Park, Nashik, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "60",
    responseRate: "93%",
    whatsappConfirmed: true,
  },
  {
    _id: "w1234567890x012347",
    name: "Nitesh Kumar",
    email: "NITESHKUMAR@gmail.com",
    password: "12345678",
    mobileNumber: "9449127324",
    companyName: "Jagdamba Electrical",
    productOrService: "MCB Box",
    imgSrc: "/assets/mcb-box.jpeg",
    mainProducts: "MCB Boxes, Electrical Switchboards, Distribution Panels",
    altText: "MCB Box - Jagdamba Electrical",
    years: "1 YRS",
    location: "Bangalore, Karnataka, India",
    tooltipText: "Sector 12, Industrial Area, Bangalore, Karnataka, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "60",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "c1234567890wxyz5681",
    name: "Tilak Mishra",
    email: "tilak.mishra@tempo.net.in",
    password: "Tempo@1234#",
    mobileNumber: "8657914563",
    companyName: "Tempo Instruments Pvt Ltd",
    productOrService:
      "Electric Heating Tape, Electric Heating Cord, Lab Hot Air Oven, Lab Equipment",
    imgSrc: "/assets/electric1.jpeg", // Placeholder for image path
    mainProducts: "Electric Heating Equipment, Laboratory Equipment",
    altText: "Electric Heating Tape - Tempo Instruments Pvt Ltd",
    years: "1 YRS", // Placeholder for years of experience
    location: "India", // Placeholder for location
    tooltipText: "Tempo Instruments Pvt Ltd, India",
    rating: "4.6", // Placeholder for rating
    ratingPercent: "92%", // Placeholder for rating percentage
    ratingsCount: "78", // Placeholder for ratings count
    responseRate: "88%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "c1234567890wxyz5686",
    name: "Parmod",
    email: "parmod123@gmail.com",
    password: "parmod1234",
    mobileNumber: "9811937090",
    companyName: "Ridhi Enterprises",
    productOrService: "Electronic items",
    imgSrc: "/assets/electronic-item.jpeg", // Placeholder for image path
    mainProducts: "Consumer Electronics, Gadgets",
    altText: "Ridhi Enterprises - Electronic Items Supplier",
    years: "1 YRS", // Placeholder for years of experience
    location: "India", // Placeholder for location
    tooltipText: "Ridhi Enterprises, India",
    rating: "4.2", // Placeholder for rating
    ratingPercent: "84%", // Placeholder for rating percentage
    ratingsCount: "45", // Placeholder for ratings count
    responseRate: "80%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    name: "Sagar Somkuwar",
    email: "snowrefrigerationservice@gmail.com",
    password: "sagar somkuwar",
    mobileNumber: "9595360948",
    companyName: "Snow Refrigeration Services",
    productOrService: "Walk-in Freezer Room",
    imgSrc: "/assets/fridge1.jpeg",
    mainProducts: "Walk-in Freezer Room, Cold Storage Solutions, HVAC Systems",
    altText: "Snow Refrigeration Services - Walk-in Freezer Room",
    years: "1 YRS",
    location: "Nagpur, Maharashtra, India",
    tooltipText: "Snow Refrigeration Services, Nagpur",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "85",
    responseRate: "87%",
    whatsappConfirmed: true,
  },
  {
    _id: "larva-electric-power-aruppukottai",
    name: "G.Balachandar",
    email: "larvaelectricpower@gmail.com",
    password: "Larva_bala@2024",
    mobileNumber: "7708602687",
    companyName: "LARVA ELECTRIC POWER",
    productOrService: "Electric Utility Services",
    imgSrc: "/assets/power1.jpg",
    mainProducts: "Electric Utility Services",
    altText: "LARVA ELECTRIC POWER - Electric Utility Services",
    years: "1 YRS",
    location: "Aruppukottai, Tamilnadu, India",
    tooltipText:
      "LARVA ELECTRIC POWER, Electric Utility Services, Aruppukottai",
    rating: "4.9",
    ratingPercent: "97%",
    ratingsCount: "42",
    responseRate: "95%",
    whatsappConfirmed: true,
  },
  {
    _id: "blueberry-bakery-machine-tamil-nadu",
    name: "Abhinav",
    email: "abhinav@gmail.com",
    password: "12345678",
    mobileNumber: "8220440870",
    companyName: "Blueberry Bakery Machine",
    productOrService: "Mixer",
    imgSrc: "/assets/bakery1.jpg",
    mainProducts: "Mixers",
    altText: "Blueberry Bakery Machine - Mixer",
    years: "1 YRS",
    location: "Tamil Nadu, India",
    tooltipText: "Blueberry Bakery Machine, Mixer, Tamil Nadu",
    rating: "4.2",
    ratingPercent: "84%",
    ratingsCount: "35",
    responseRate: "80%",
    whatsappConfirmed: true,
  },
];

const ElectronicsGoods = () => {
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
                  <Link to="#">Smartphones</Link>
                </li>
                <li>
                  <Link to="#">Laptops</Link>
                </li>
                <li>
                  <Link to="#">Tablets</Link>
                </li>
                <li>
                  <Link to="#">Home Appliances</Link>
                </li>
                <li>
                  <Link to="#">Gaming Consoles</Link>
                </li>
                <li>
                  <Link to="#">Camera Equipment</Link>
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
                      src="/assets/elc1.avif"
                      width={55}
                      height={55}
                      alt="Smartphones"
                    />
                  </figure>
                  <p className="title">Smartphones</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/elec6.jpeg"
                      width={55}
                      height={55}
                      alt="Laptops"
                    />
                  </figure>
                  <p className="title">Laptops</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/elec3.jpeg"
                      width={55}
                      height={55}
                      alt="Tablets"
                    />
                  </figure>
                  <p className="title">Tablets</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/elec7.jpeg"
                      width={55}
                      height={55}
                      alt="Home Appliances"
                    />
                  </figure>
                  <p className="title">Home Appliances</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/elec5.jpeg"
                      width={55}
                      height={55}
                      alt="Gaming Consoles"
                    />
                  </figure>
                  <p className="title">Gaming Consoles</p>
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

export default ElectronicsGoods;
