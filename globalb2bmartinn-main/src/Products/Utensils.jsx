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
    _id: "siyaram-enterprises-jaipur",
    name: "Bharat",
    email: "bharatsinghk641@gmail.com",
    password: "भरतभरतभरत",
    mobileNumber: "8905948717",
    companyName: "Siyaram Enterprises",
    productOrService: "Kitchenware Insulated Water",
    imgSrc: "/assets/siyasteel1.jpg",
    mainProducts: "Kitchenware Insulated Water",
    altText: "Siyaram Enterprises - Kitchenware Insulated Water",
    years: "1 YRS",
    location: "Jaipur, Rajasthan, India",
    tooltipText: "Siyaram Enterprises, Kitchenware Insulated Water, Jaipur",
    rating: "4.3",
    ratingPercent: "89%",
    ratingsCount: "25",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    _id: "innomax-steels-industries-gujrat",
    name: "ganesh jaiswal",
    email: "ganeshjaiswal@gmail.com",
    password: "12345678",
    mobileNumber: "7011521511",
    companyName: "innomax Steels industries",
    productOrService: "steel",
    imgSrc: "/assets/utensils1.jpg",
    mainProducts: "steel",
    altText: "innomax Steels industries - Steel Products",
    years: "1 YRS",
    location: "Gujrat, India",
    tooltipText: "innomax Steels industries, Steel, Gujrat",
    rating: "4.3",
    ratingPercent: "86%",
    ratingsCount: "20",
    responseRate: "80%",
    whatsappConfirmed: true,
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
    _id: "aaryan-upadhyay-gurugram-haryana",
    name: "Aaryan Upadhyay",
    email: "Aaryanupadhyay123@gmail.com",
    password: "Aaryan upadhyay",
    mobileNumber: "9721375806",
    companyName: "Sheesha Glassware",
    statename: "Haryana",
    cityname: "Gurugram",
    productOrService: "Glass",
    imgSrc: "/assets/glass2.jpg",
    mainProducts: "Glassware",
    altText: "Sheesha Glassware - Gurugram",
    years: "1 YRS",
    location: "Gurugram, Haryana",
    tooltipText: "Sheesha Glassware, Gurugram",
    rating: "4.3",
    ratingPercent: "86%",
    ratingsCount: "98",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
  {
    _id: "adiyan-ansari-moradabad-uttar-pradesh",
    name: "Adiyan Ansari",
    email: "abc@gmail.com",
    password: "Adiyan Ansari",
    mobileNumber: "9027258695",
    companyName: "MA Internationals",
    statename: "Uttar Pradesh",
    cityname: "Moradabad",
    productOrService: "Steel Utensils",
    imgSrc: "/assets/stee1.jpg",
    mainProducts: "Steel Utensils",
    altText: "MA Internationals - Moradabad",
    years: "1 YRS",
    location: "Moradabad, Uttar Pradesh",
    tooltipText: "MA Internationals, Moradabad",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "87",
    responseRate: "93%",
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const Utensils = () => {
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

export default Utensils;
