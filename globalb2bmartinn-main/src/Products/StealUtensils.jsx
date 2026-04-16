import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    _id: "a1234567890wxyz5688",
    name: "New Era Appliances",
    email: "default@example.com", // Email is not provided; use a placeholder or leave out
    password: "defaultPassword", // Password is not provided; use a placeholder or leave out
    mobileNumber: "defaultNumber", // Mobile number is not provided; use a placeholder or leave out
    companyName: "New Era Appliances",
    productOrService: "Kitchen Ware",
    imgSrc: "/assets/footerimgnew.png", // Placeholder image path
    mainProducts: "Kitchen Appliances, Cookware, Utensils",
    altText: "Kitchen Ware - New Era Appliances",
    years: "1 YRS", // Placeholder for years of experience
    location: " Opp Falcon Pump, Vavdi, Rajkot – 360004",
    tooltipText: "New Era Appliances, Rajkot, India",
    rating: "4.0", // Placeholder for rating
    ratingPercent: "95%", // Placeholder for rating percentage
    ratingsCount: "30", // Placeholder for ratings count
    responseRate: "95%", // Placeholder for response rate
    whatsappConfirmed: false, // Placeholder for WhatsApp confirmation
    path: "/new-era-appliances",
  },

  {
    name: "Mr. Chandan Patel",
    email: "chandanpatel@gmail.com",
    password: "chandan patel",
    mobileNumber: "8200334408",
    companyName: "Brinda Impex",
    productOrService: "Kitchenware",
    imgSrc: "/assets/cooker.jpg", // Provide the correct image path
    altText: "Kitchenware - Brinda Impex",
    mainProducts: "Cookware, Utensils, Cutlery",
    years: "1 YRS",
    location: "Nagpur, India",
    tooltipText: "789 Kitchenware Lane, Industrial Park, Nagpur, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "85",
    responseRate: "88%",
  },
  {
    name: "Mr. Sahid Luhar",
    email: "blacksmith@gmail.com",
    password: "sahid@123",
    mobileNumber: "9624018168",
    companyName: "Blacksmith Metal Crafts",
    productOrService: "Iron Steel Products",
    imgSrc: "/assets/iron-steel.jpg", // Provide the correct image path
    altText: "Iron Steel Products - Blacksmith Metal Crafts",
    mainProducts: "Metal Sculptures, Iron Furniture, Steel Decor",
    years: "1 YRS",
    location: "Nagpur, India",
    tooltipText: "789 Metal Crafts Lane, Industrial Park, Nagpur, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "85",
    responseRate: "88%",
  },
  {
    name: "Mr. Gulab Rajput Surana",
    email: "sidhhivinayakmetal@gmail.com",
    password: "Gulab Rajput Surana",
    mobileNumber: "9320134718",
    companyName: "Sidhhi Vinayak Metal",
    productOrService: "Utensils",
    imgSrc: "/assets/uten1.jpg", // Provide the correct image path
    altText: "Utensils - Sidhhi Vinayak Metal",
    mainProducts: "Kitchen Utensils, Cookware, Tableware",
    years: "1 YRS",
    location: "Chennai, India",
    tooltipText: "789 Utensils Lane, Industrial Park, Nagpur, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "85",
    responseRate: "88%",
  },
  {
    name: "Danish Malik",
    email: "masumanenvirohpr@gmail.com",
    password: "Danish@123",
    mobileNumber: "9259552670",
    companyName: "Masuman Enviro Engineering Company",
    productOrService: "Steel Tank Manufacturer",
    imgSrc: "/assets/silvertank.jpeg", // Correct image path needed
    mainProducts:
      "Industrial Steel Tanks, Storage Tanks, Water Tanks, Custom Tanks, Pressure Vessels",
    altText: "Steel Tank Manufacturer - Masuman Enviro Engineering Company",
    years: "1 YRS",
    location: "Mumbai, Maharashtra, 400092, India",
    tooltipText: "456, Industrial Area, Mumbai - 400092, Maharashtra, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "180",
    responseRate: "97%",
  },

  {
    name: "Chetan Jain",
    email: "mamtasteel@gmail.com",
    mobileNumber: "9867077337",
    companyName: "Mamta Steel Center",
    productOrService: "Utensils",
    imgSrc: "/assets/stes.webp", // You need to provide the correct image path
    mainProducts: "steel Bowls, steel Plates, steel pots steel sppons, etc.",
    altText: "Utensils - Mamta Steel Center",
    years: "1 YRS",
    location: "Mumbai, Maharashtra, India",
    tooltipText: "123, Dadar West, Mumbai - 400028, Maharashtra, India",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "150",
    responseRate: "98%",
  },
  {
    name: "Mr. Shaikh Jubairahmed Gulam",
    email: "info@exportpalletizationsolution.com",
    password: "Mr. Shaikh Jubairahmed Gulam",
    mobileNumber: "9979496895",
    companyName: "EXPORT PALLETIZATION SPECIALITIES & SOLUTION",
    productOrService: "Wooden Pallets",
    imgSrc: "/assets/plate.jpg", // Provide the correct image path
    altText: "Wooden Pallets - EXPORT PALLETIZATION SPECIALITIES & SOLUTION",
    mainProducts:
      "Wooden Pallets, Export Palletization Solutions, Packaging Materials",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "789 Pallet Lane, Industrial Park, Mumbai, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "85",
    responseRate: "90%",
  },
  {
    name: "Fortune",
    email: "fortune@gmail.com",
    mobileNumber: "9876543210",
    companyName: "Fortune Steelworks",
    productOrService: "Steel Racks",
    imgSrc: "/assets/ste4.webp", // You need to provide the correct image path
    mainProducts: "Steel Shelving, Storage Racks, Industrial Shelving Units",
    altText: "Steel Racks - Fortune Steelworks",
    years: "1 YRS",
    location: "Bangalore, Karnataka, India",
    tooltipText: "789 Industrial Zone, Bangalore - 560001, Karnataka, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "120",
    responseRate: "97%",
  },
  {
    name: "Sumit",
    email: "farah@globalb2bmart.com",
    mobileNumber: "8873655865",
    companyName: "M/s Steel and Cement",
    productOrService: "Steel and Cement",
    imgSrc: "/assets/ste1.webp", // You need to provide the correct image path
    mainProducts: "Steel rods, Cement blocks, Steel sheets, etc.",
    altText: "Steel and Cement - M/s Steel and Cement",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "456, Connaught Place, New Delhi - 110001, Delhi, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "200",
    responseRate: "97%",
  },
  {
    _id: "f7g8h9i0123456789abcdef0", // Random unique ID
    name: "Chetan Jain Jain",
    email: "mamtasteel@gmail.com",
    password: "Chetan Jain Jain", // Including the password as specified
    mobileNumber: "9867077337",
    companyName: "Mamta Steel Center",
    productOrService: "Utensils",
    imgSrc: "/assets/uten2.jpeg", // Example image path
    mainProducts: "Steel Utensils, Cookware, Kitchen Accessories",
    altText: "Utensils - Mamta Steel Center",
    years: "1 YRS",
    location: "Indore, India",
    tooltipText: "456 Steel Road, Indore, India",
    rating: "4.7",
    ratingPercent: "93%",
    ratingsCount: "120",
    responseRate: "96%",
  },
  {
    _id: "s345678901abcdef234577", // Random unique ID
    name: "Prince",
    email: "princeenterpriseshubli@gmail.com",
    password: "prince@123",
    mobileNumber: "9590888855",
    companyName: "Prince Enterprises",
    productOrService: "Paper Plate Raw Material",
    imgSrc: "/assets/paperplate1.jpeg", // Example image path
    mainProducts: "Paper Plate Raw Material, Disposable Items",
    altText: "Paper Plate Raw Material - Prince Enterprises",
    years: "1 YRS",
    location: "Hubli, India",
    tooltipText: "Plot 9, Industrial Area, Hubli, India",
    rating: "4.2",
    ratingPercent: "84%",
    ratingsCount: "36",
    responseRate: "78%",
    whatsappConfirmed: false,
  },

  {
    _id: "r012345678901abcdef0123", // Random unique ID
    name: "Dev Raj Choudhary",
    email: "abc@gmail.com",
    password: "dev@12345", // Including the password as specified
    mobileNumber: "9811078078",
    companyName: "Dev Stainless Steel Private Limited",
    productOrService: "SS Pipes",
    imgSrc: "/assets/stainsteel.jpeg", // Example image path
    mainProducts: "Stainless Steel Pipes, SS Tubes, Pipe Fittings",
    altText: "SS Pipes - Dev Stainless Steel Private Limited",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "456 Stainless Steel Lane, Delhi, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "90",
    responseRate: "96%",
    whatsappConfirmed: true,
  },
  {
    _id: "w567890123456abcdef0123", // Random unique ID
    name: "Praveen Shah",
    email: "abc@gmail.com",
    password: "shah@123", // Including the password as specified
    mobileNumber: "9820234934",
    companyName: "STEELCO METAL AND ALLOYS",
    productOrService: "Steel Pipes",
    imgSrc: "/assets/steel.jpeg", // Example image path
    mainProducts: "Steel Pipes, Alloy Pipes, Seamless Pipes, Welded Pipes",
    altText: "Steel Pipes - STEELCO METAL AND ALLOYS",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "456 Steel Street, Mumbai, India",
    rating: "4.6",
    ratingPercent: "93%",
    ratingsCount: "85",
    responseRate: "95%",
    whatsappConfirmed: true,
  },
  {
    _id: "m123456789012abcdef0123", // Random unique ID
    name: "Abdul Rahim",
    email: "AbdulRahim12@gmail.com",
    mobileNumber: "9914533363",
    companyName: "Abdul Rahim Wood Works",
    productOrService: "Modular Kitchen",
    imgSrc: "/assets/modular.jpeg", // Example image path
    mainProducts: "Modular Kitchens, Custom Cabinets, Kitchen Accessories",
    altText: "Modular Kitchen - Abdul Rahim Wood Works",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "123 Woodwork Avenue, Delhi, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "85",
    responseRate: "96%",
    whatsappConfirmed: true,
  },
  {
    _id: "s345678901abcdef234586", // Random unique ID
    name: "Yogesh Bhesaniya",
    email: "yogeshbhensaniya@gmail.com",
    password: "yogesh@123",
    mobileNumber: "9879012812",
    companyName: "Amar Steel Traders",
    productOrService: "Steel Round SS Bars",
    imgSrc: "/assets/steelbars1.jpeg", // Example image path
    mainProducts: "Steel Round SS Bars, Steel Products",
    altText: "Steel Round SS Bars - Amar Steel Traders",
    years: "1 YRS",
    location: "Ahmedabad, India",
    tooltipText: "Plot 8, Steel Market, Ahmedabad, India",
    rating: "4.4",
    ratingPercent: "88%",
    ratingsCount: "52",
    responseRate: "82%",
    whatsappConfirmed: true,
  },
  {
    _id: "s345678901abcdef234589", // Random unique ID
    name: "Abishek Jaiswal",
    email: "saintexindustries24@gmail.com",
    password: "ABISHEK JAISWAL",
    mobileNumber: "9870582850",
    companyName: "Saintex Kitchen Sink",
    productOrService: "Kitchen Sink",
    imgSrc: "/assets/sink.jpeg", // Example image path
    mainProducts: "Kitchen Sinks, Stainless Steel Sinks",
    altText: "Kitchen Sink - Saintex Kitchen Sink",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "Factory 12, Industrial Area, Delhi, India",
    rating: "4.7",
    ratingPercent: "93%",
    ratingsCount: "65",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
  {
    _id: "l8902345678m890125",
    name: "UNIQUE STEEL TECH",
    email: "uniquesteeltechrajkot@gmail.com",
    password: "UNIQUE STEEL TECH",
    mobileNumber: "9662157189",
    companyName: "UNIQUE STEEL TECH",
    productOrService: "SS Bathroom Accessories",
    imgSrc: "/assets/bathroom4.jpeg",
    mainProducts:
      "Stainless Steel Bathroom Fittings, SS Towel Rods, SS Soap Dishes",
    altText: "SS Bathroom Accessories - UNIQUE STEEL TECH",
    years: "1 YRS",
    location: "Rajkot, Gujarat, India",
    tooltipText: "UNIQUE STEEL TECH, Metoda GIDC, Rajkot, Gujarat, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "185",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
  {
    _id: "k5678901234ghijk6789",
    name: "GURPREET",
    email: "harmanindustry@gmail.com",
    password: "harmanindustry",
    mobileNumber: "7340885573",
    companyName: "Harman Industry",
    productOrService: "Steel Fabricator",
    imgSrc: "/assets/fabricator1.jpeg",
    mainProducts: "Steel Fabrication, Metal Structures, Custom Steel Work",
    altText: "Harman Industry - Steel Fabrication Services",
    years: "1 YRS",
    location: "India",
    tooltipText: "Harman Industry, India",
    rating: "4.2",
    ratingPercent: "84%",
    ratingsCount: "45",
    responseRate: "77%",
    whatsappConfirmed: true,
  },
  {
    _id: "m9n8o7p6q5r4s3t2u1v0w1x2", // Random unique ID
    name: "Suresh",
    email: "SURESH123@gmail.com",
    mobileNumber: "8286828587",
    companyName: "Cook Easy Hotel and Kitchen Equipments",
    productOrService: "Kitchen Equipments",
    imgSrc: "/assets/kitchen1.jpeg", // Example image path
    mainProducts:
      "Commercial Kitchen Equipments, Hotel Supplies, Cooking Appliances, Catering Equipments",
    altText: "Kitchen Equipments - Cook Easy Hotel and Kitchen Equipments",
    years: "1 YRS",
    location: "Chennai, India",
    tooltipText: "78 Kitchen Street, Chennai, India",
    rating: "4.8",
    ratingPercent: "94%",
    ratingsCount: "80",
    responseRate: "96%",
    whatsappConfirmed: true,
  },
  {
    _id: "p3q4r5s6t7u8v9w0x1y2z3a4", // Random unique ID
    name: "Mansi Kumari",
    email: "MANSIKUMARI123@gmail.com",
    mobileNumber: "8851500530",
    companyName: "Mittiware India",
    productOrService: "Kitchen Equipment",
    imgSrc: "/assets/kitchen2.jpeg", // Example image path
    mainProducts:
      "Clay Kitchen Equipment, Cookware, Utensils, Eco-friendly Kitchenware",
    altText: "Kitchen Equipment - Mittiware India",
    years: "1 YRS",
    location: "Jaipur, India",
    tooltipText: "25 Earthenware Lane, Jaipur, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "72",
    responseRate: "95%",
    whatsappConfirmed: true,
  },
  {
    _id: "q1r2s3t4u5v6w7x8y9z0a1b2", // Random unique ID
    name: "Sufiyan Malik",
    email: "SUFIYANMALIK123@GMAIL.COM",
    mobileNumber: "8920218185",
    companyName: "Dollar Equipments",
    productOrService: "Kitchen Equipments",
    imgSrc: "/assets/kitchen3.jpeg", // Example image path
    mainProducts:
      "Commercial Kitchen Equipments, Cooking Appliances, Industrial Kitchenware, Hotel Supplies",
    altText: "Kitchen Equipments - Dollar Equipments",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "45 Equipment Lane, Mumbai, India",
    rating: "4.7",
    ratingPercent: "93%",
    ratingsCount: "68",
    responseRate: "94%",
    whatsappConfirmed: true,
  },
  {
    _id: "ridhhi-sidhhi-fashion-rajkot",
    name: "Rajesh",
    email: "riddhisiddhifashion009@gmail.com",
    password: "rajeshrajesh",
    mobileNumber: "8000470380",
    companyName: "Ridhhi Sidhhi Fashion",
    productOrService: "Kitchenware",
    imgSrc: "/assets/kitchenware1.jpg",
    mainProducts: "Kitchenware",
    altText: "Ridhhi Sidhhi Fashion - Kitchenware",
    years: "1 YRS",
    location: "Rajkot, Gujarat, India",
    tooltipText: "Ridhhi Sidhhi Fashion, Kitchenware, Rajkot",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "25",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "saintex-kitchen-sink-delhi",
    name: "ABISHEK JAISWAL",
    email: "ABISHEKJAISWAL@gmail.com",
    password: "12345678",
    mobileNumber: "9870582850",
    companyName: "Saintex Kitchen Sink",
    productOrService: "kitchen",
    imgSrc: "/assets/kitchen5.jpg",
    mainProducts: "Kitchen Sink",
    altText: "Saintex Kitchen Sink - Kitchen Products",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "Saintex Kitchen Sink, Kitchen Products, Delhi",
    rating: "4.4",
    ratingPercent: "88%",
    ratingsCount: "25",
    responseRate: "93%",
    whatsappConfirmed: true,
  },
  {
    _id: "ambika-industries-gujrat",
    name: "Lucky Kumbhar",
    email: "LuckyKumbhar@gmail.com",
    password: "12345678",
    mobileNumber: "7698216625",
    companyName: "Ambika Industries",
    productOrService: "Steel",
    imgSrc: "/assets/steel4.jpg",
    mainProducts: "Steel Products",
    altText: "Ambika Industries - Steel",
    years: "1 YRS",
    location: "Gujrat, India",
    tooltipText: "Ambika Industries, Steel, Gujrat",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "42",
    responseRate: "85%",
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const SteelUtensils = () => {
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
                  <Link to="#">Steel Plates</Link>
                </li>
                <li>
                  <Link to="#">Steel Bowls</Link>
                </li>
                <li>
                  <Link to="#">Steel Spoons</Link>
                </li>
                <li>
                  <Link to="#">Steel Glasses</Link>
                </li>
                <li>
                  <Link to="#">Steel Pots</Link>
                </li>
                <li>
                  <Link to="#">Steel Cookware</Link>
                </li>
                <li>
                  <Link to="#">Steel Containers</Link>
                </li>
                <li>
                  <Link to="#">Steel Utensils</Link>
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
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/ste1.webp"
                      width={55}
                      height={55}
                      alt="Steel Plates"
                    />
                  </figure>
                  <p className="title">Steel Plates</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/ste2.png"
                      width={55}
                      height={55}
                      alt="Steel Bowls"
                    />
                  </figure>
                  <p className="title">Steel Bowls</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/ste3.jpg"
                      width={55}
                      height={55}
                      alt="Steel Spoons"
                    />
                  </figure>
                  <p className="title">Steel Spoons</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/ste4.jpg"
                      width={55}
                      height={55}
                      alt="Steel Glasses"
                    />
                  </figure>
                  <p className="title">Steel Glasses</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/ste4.webp"
                      width={55}
                      height={55}
                      alt="Steel Pots"
                    />
                  </figure>
                  <p className="title">Steel Pots</p>
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
                    {/* <div className="item">
                                            <div className="ca-box modal-btn" data-modal="motc" data-src={item.trustCertificateUrl}>
                                                <p><i className="l3icon motc-icon" /></p>
                                            </div>
                                        </div> */}
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

export default SteelUtensils;
