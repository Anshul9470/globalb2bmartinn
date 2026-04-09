import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    name: "Mr. Hemant Nandkumar Mone",
    email: "hemantm55@gmail.com",
    password: "Mr. Hemant Nandkumar Mone",
    mobileNumber: "9960063603",
    companyName: "SHRI SADGURU DATTARAJ PRIVATE LIMITED",
    productOrService: "Non-Woven Bags",
    imgSrc: "/assets/shp.jpg", // Provide the correct image path
    altText:
      "Non-Woven Bags - SHRI SADGURU DATTARAJ ENTERPRISES (OPC) PRIVATE LIMITED",
    mainProducts: "Eco-friendly Non-Woven Bags, Shopping Bags, Carry Bags ",
    years: "1 YRS",
    location: "delhi, India",
    tooltipText: "789 Non-Woven Bags Lane, Industrial Park, Nagpur, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "85",
    responseRate: "88%",
  },
  {
    _id: "667bb8e29644befaa9547ffa",
    name: "Anshul Gupta",
    email: "Krishnabagandbelts@gmail.com",
    mobileNumber: "9719315096",
    companyName: "Krishnabagandbelts enterprices",
    productOrService: "Bags & Belts",
    imgSrc: "/assets/bags.jpeg", // You need to provide the correct image path
    mainProducts:
      "Handbags, Belts, Travel Bags,Shopping Bags, Carry Bags,non woven carry bags and paper bags",
    altText: "Bags & Belts - Anshul Gupta",
    years: "1 YRS",
    location: "New Delhi, India",
    tooltipText: "456 Bags & Belts Market, Lajpat Nagar, New Delhi, India",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "150",
    responseRate: "98%",
  },
  {
    name: "Nikhil Bansal",
    email: "guptaplastics29@gmail.com",
    password: "nikhil bansal",
    mobileNumber: "8558875761",
    companyName: " Gupta Plastics",
    productOrService: "Non Woven Bag",
    imgSrc: "/assets/wooven-bag.jpeg", // Provide the correct image path
    altText: "Non Woven Bag - Gupta Plastics",
    mainProducts:
      "Non Woven Bags, Packaging Solutions,Shopping Bags, non woven carry bags and paper bags",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "789 Plastic Lane, Industrial Park, Delhi, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "85",
    responseRate: "88%",
  },
  {
    _id: "s1234567890abcdef012347", // Random unique ID
    name: "PARTH PATEL",
    email: "PARTHPATEL@GMAIL.COM",
    password: "parth@123",
    mobileNumber: "7984211241",
    companyName: "HD ENTERPRISE",
    productOrService: "HDPE Bags",
    imgSrc: "/assets/bag7.jpeg", // Example image path
    mainProducts: "HDPE Bags, Poly Bags, Plastic Bags",
    altText: "HDPE Bags - HD ENTERPRISE",
    years: "1 YRS",
    location: "Surat, India",
    tooltipText: "Sector 7, Industrial Zone, Surat, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "50",
    responseRate: "93%",
    whatsappConfirmed: true,
  },
  {
    _id: "x1234567890y012347",
    name: "Abhay Jain",
    email: "ABHAYJAIN@gmail.com",
    password: "12345678",
    mobileNumber: "8076086547",
    companyName: "Veer and Company",
    productOrService: "Carry Bag",
    imgSrc: "/assets/carry-bags.jpeg",
    mainProducts:
      "Paper Carry Bags, Plastic Carry Bags, Eco-Friendly Carry Bags",
    altText: "Carry Bag - Veer and Company",
    years: "1 YRS",
    location: "Indore, Madhya Pradesh, India",
    tooltipText: "Sector 10, Industrial Area, Indore, Madhya Pradesh, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "55",
    responseRate: "89%",
    whatsappConfirmed: true,
  },
  {
    _id: "d1234567890e012347",
    name: "Vijay",
    email: "mudraagricare@gmail.com",
    password: "vijay vijay",
    mobileNumber: "9601510083",
    companyName: "Mudra Agricare",
    productOrService: "Green Mesh Bag",
    imgSrc: "/assets/green-bag.jpeg",
    mainProducts: "Green Mesh Bags, Agricultural Bags, Packaging Bags",
    altText: "Green Mesh Bag - Mudra Agricare",
    years: "1 YRS",
    location: "Ahmedabad, Gujarat, India",
    tooltipText: "Sector 12, Industrial Area, Ahmedabad, Gujarat, India",
    rating: "4.3",
    ratingPercent: "86%",
    ratingsCount: "55",
    responseRate: "82%",
    whatsappConfirmed: true,
  },
  {
    _id: "a1234567890wxyz5684",
    name: "Arman",
    email: "arman123@gmail.com",
    password: "arman1234",
    mobileNumber: "8003981735",
    companyName: "Sujangarh Tarpaulin Trader",
    productOrService: "Bags",
    imgSrc: "/assets/bag19.jpeg", // Placeholder for image path
    mainProducts: "Tarpaulins, Bags, Covers",
    altText: "Bags - Sujangarh Tarpaulin Trader",
    years: "1 YRS", // Placeholder for years of experience
    location: "Sujangarh, India", // Placeholder for location
    tooltipText: "Sujangarh Tarpaulin Trader, Sujangarh, India",
    rating: "4.2", // Placeholder for rating
    ratingPercent: "84%", // Placeholder for rating percentage
    ratingsCount: "80", // Placeholder for ratings count
    responseRate: "88%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "a1234567890wxyz5687",
    name: "Soubhag Jain",
    email: "Soubhag123@gmail.com",
    password: "Soubhag1234",
    mobileNumber: "9902737345",
    companyName: "De bags",
    productOrService: "bags",
    imgSrc: "/assets/bag9.jpeg", // Placeholder for image path
    mainProducts: "Fashion Bags, Travel Bags, Custom Bags",
    altText: "Bags - De bags",
    years: "1 YRS", // Placeholder for years of experience
    location: "India", // Placeholder for location
    tooltipText: "De bags, India",
    rating: "4.5", // Placeholder for rating
    ratingPercent: "90%", // Placeholder for rating percentage
    ratingsCount: "50", // Placeholder for ratings count
    responseRate: "85%", // Placeholder for response rate
    whatsappConfirmed: false,
  },
  {
    _id: "a1234567890abc5697",
    name: "RAJA KHAN",
    email: "Hammercoal1324@GMAIL.COM",
    password: "RAJA1234",
    mobileNumber: "7877625202",
    companyName: "Hammercoal",
    productOrService: "Hand bags",
    imgSrc: "/assets/bag11.jpeg", // Placeholder for image path
    mainProducts: "Hand Bags, Leather Goods",
    altText: "Hammercoal - Hand Bags Manufacturer",
    years: "1 YRS", // Placeholder for years of experience
    location: "India", // Placeholder for location
    tooltipText: "Hammercoal, India",
    rating: "4.5", // Placeholder for rating
    ratingPercent: "90%", // Placeholder for ra,ting percentage
    ratingsCount: "85", // Placeholder for ratings count
    responseRate: "85%", // Placeholder for response rate
    whatsappConfirmed: true,
  },

  {
    _id: "a1234567890abc5699",
    name: "Reegal",
    email: "reegalleatherbag@gmail.com",
    password: "8375000867",
    mobileNumber: "8583902452",
    companyName: "Reegal Leather Bag",
    productOrService: "Handbag",
    imgSrc: "/assets/handbag1.jpeg", // Placeholder for image path
    mainProducts: "Leather Handbags, Wallets, Accessories",
    altText: "Reegal Leather Bag - Handbag Manufacturer",
    years: "5 YRS", // Placeholder for years of experience
    location: "India", // Placeholder for location
    tooltipText: "Reegal Leather Bag, India",
    rating: "4.5", // Placeholder for rating
    ratingPercent: "92%", // Placeholder for rating percentage
    ratingsCount: "120", // Placeholder for ratings count
    responseRate: "85%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "k9012345678mnop2345",
    name: "Birendra Pandit",
    email: "anubagcenter@gmail.co",
    password: "pandit@123",
    mobileNumber: "9004041300",
    companyName: "Anu Bag Center",
    productOrService: "School Bags Manufacturer",
    imgSrc: "/assets/bags2.jpeg",
    mainProducts: "School Bags, Backpacks, Custom Bags",
    altText: "Anu Bag Center - School Bags Collection",
    years: "1 YRS",
    location: "India",
    tooltipText: "Anu Bag Center, India",
    rating: "4.4",
    ratingPercent: "88%",
    ratingsCount: "38",
    responseRate: "81%",
    whatsappConfirmed: true,
  },
  {
    _id: "k0123456789qrst5678",
    name: "Iqbal",
    email: "iqbalbags@gmail.com",
    password: "iqbal@123",
    mobileNumber: "9967263620",
    companyName: "I S B Bags",
    productOrService: "School Bags Manufacturer",
    imgSrc: "/assets/bags4.jpeg",
    mainProducts: "School Bags, Backpacks, Custom Bags",
    altText: "I S B Bags - School Bags Collection",
    years: "1 YRS",
    location: "India",
    tooltipText: "I S B Bags, India",
    rating: "4.3",
    ratingPercent: "86%",
    ratingsCount: "34",
    responseRate: "79%",
    whatsappConfirmed: true,
  },
  {
    _id: "k2345678901uvwx6789",
    name: "Prasenjit Dhara",
    email: "abc@gmail.com",
    password: "prsd@1234",
    mobileNumber: "8697946554",
    companyName: "Filos International",
    productOrService: "Jute Bags",
    imgSrc: "/assets/bags5.jpeg",
    mainProducts: "Jute Bags, Eco-Friendly Bags, Custom Jute Bags",
    altText: "Filos International - Jute Bags Collection",
    years: "1 YRS",
    location: "India",
    tooltipText: "Filos International, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "40",
    responseRate: "83%",
    whatsappConfirmed: true,
  },
  {
    _id: "e4f5g6h7i8j9k0l1m2n3o4p5", // Random unique ID
    name: "Md Maaz",
    email: "etherzokh264@gmail.com",
    mobileNumber: "8792740579",
    companyName: "Leather Zokh Company",
    productOrService: "Leather Products",
    imgSrc: "/assets/bag10.jpeg", // Example image path
    mainProducts:
      "Leather Bags, Leather Wallets, Leather Belts, Custom Leather Goods",
    altText: "Leather Products - Leather Zokh Company",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "89 Leather Street, Mumbai, India",
    rating: "4.2",
    ratingPercent: "85%",
    ratingsCount: "45",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
  {
    _id: "b1234567890handicraft-leather",
    name: "Mozib Rahman",
    email: "mozibrahman@gma.com",
    password: "8375000867",
    mobileNumber: "9818382319",
    companyName: "Handicraft Leather",
    productOrService: "Bags",
    imgSrc: "/assets/bags8.jpeg",
    mainProducts: "Leather Bags, Handicrafts",
    altText: "Handicraft Leather - Bags",
    years: "1 YRS",
    location: "Delhi, Delhi, India",
    tooltipText: "Handicraft Leather, Delhi",
    rating: "4.2",
    ratingPercent: "84%",
    ratingsCount: "45",
    responseRate: "78%",
    whatsappConfirmed: true,
  },
  {
    name: "Shivaji",
    email: "shivajitalekar2862@gmail.com",
    password: "shivajishivaji",
    mobileNumber: "9604789233",
    companyName: "Radhey Industries",
    productOrService: "Plastic Bag",
    imgSrc: "/assets/bag12.jpeg",
    mainProducts: "Plastic Bags, Packaging Materials",
    altText: "Radhey Industries - Plastic Bags",
    years: "1 YRS",
    location: "Pune, Maharashtra, India",
    tooltipText: "Radhey Industries, Pune",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "95",
    responseRate: "89%",
    whatsappConfirmed: true,
  },

  {
    _id: "sakthi-sm-gunny-store-namakkal",
    name: "sakthi",
    email: "sakthi@gmail.com",
    password: "9788881640",
    mobileNumber: "9788881640",
    companyName: "Sm Gunny Store",
    productOrService: "gunny bags",
    imgSrc: "/assets/gunny-bag.jpg",
    mainProducts: "gunny bags",
    altText: "Sm Gunny Store - gunny bags",
    years: "1 YRS",
    location: "Namakkal, Tamil Nadu, India",
    tooltipText: "Sm Gunny Store, gunny bags, Namakkal",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "30",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "de-bags-karnataka",
    name: "Soubhag Jain",
    email: "SoubhagJain@gmail.com",
    password: "12345678",
    mobileNumber: "9902737345",
    companyName: "De Bags",
    productOrService: "Bags",
    imgSrc: "/assets/da-bag1.jpg",
    mainProducts: "Bags",
    altText: "De Bags - Bags",
    years: "1 YRS",
    location: "Karnataka, India",
    tooltipText: "De Bags, Bags, Karnataka",
    rating: "4.5",
    ratingPercent: "91%",
    ratingsCount: "25",
    responseRate: "83%",
    whatsappConfirmed: true,
  },
  {
    _id: "yathaash-valsad-gujarat",
    name: "Yathaash",
    email: "Yathaash@gmail.com",
    password: "12345678",
    mobileNumber: "9510006556",
    companyName: "Yathaash",
    statename: "Gujarat",
    cityname: "Valsad",
    productOrService: "Bags",
    imgSrc: "/assets/Bag91.jpg",
    mainProducts: "Bags",
    altText: "Yathaash - Bags Supplier in Valsad",
    years: "1 YRS",
    location: "Valsad, Gujarat",
    tooltipText: "Yathaash, Valsad - Bags Supplier",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "102",
    responseRate: "93%",
    whatsappConfirmed: true,
  },
  {
    _id: "bharat-cover-center-surat",
    name: "Nadim Shaikh",
    email: "NadimShaikh123@gmail.com",
    password: "Nadim Shaikh",
    mobileNumber: "7048115773",
    companyName: "BHARAT COVER CENTER",
    statename: "Gujarat",
    cityname: "Surat",
    productOrService: "PVC Bag",
    imgSrc: "/assets/bag14.jpg",
    mainProducts: "PVC Bags, Customized Bags, Packaging Bags",
    altText: "BHARAT COVER CENTER - PVC Bag Manufacturer",
    years: "1 YRS",
    location: "Surat, Gujarat, India",
    tooltipText: "BHARAT COVER CENTER - Quality PVC Bags",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "178",
    responseRate: "93%",
    whatsappConfirmed: true,
  },
];

const BagsAndBeltsSupplier = () => {
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
                  <Link to="#">Handbags</Link>
                </li>
                <li>
                  <Link to="#">Belts</Link>
                </li>
                <li>
                  <Link to="#">Travel Bags</Link>
                </li>
                <li>
                  <Link to="#">Backpacks</Link>
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
                  <Link to="#">Delhi</Link>
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
                      src="/assets/bag1.jpeg"
                      width={55}
                      height={55}
                      alt="Handbags"
                    />
                  </figure>
                  <p className="title">Handbags</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/bag2.jpeg"
                      width={55}
                      height={55}
                      alt="Belts"
                    />
                  </figure>
                  <p className="title">Belts</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/bag3.jpeg"
                      width={55}
                      height={55}
                      alt="Travel Bags"
                    />
                  </figure>
                  <p className="title">Travel Bags</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/bag4.jpeg"
                      width={55}
                      height={55}
                      alt="Backpacks"
                    />
                  </figure>
                  <p className="title">Backpacks</p>
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

export default BagsAndBeltsSupplier;
