import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    name: "Sikandar Shah",
    email: "ss123@gmail.com",
    password: "Sikandar@123",
    mobileNumber: "8623803787",
    companyName: "APEX AIRTECH SYSTEMS",
    productOrService: "Furniture",
    imgSrc: "/assets/furniture1.jpeg", // Provide the correct image path
    altText: "Furniture - APEX AIRTECH SYSTEMS",
    mainProducts: "Office Furniture, Home Furniture, Custom Furniture",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "456 Furniture Street, Mumbai, India",
    rating: "4.9",
    ratingPercent: "98%",
    ratingsCount: "150",
    responseRate: "95%",
  },
  {
    name: "Hardik Makker",
    email: "hardik@gmail.com",
    password: "hardik@123",
    mobileNumber: "8076388677",
    companyName: "Hardik Meditech",
    productOrService: "Furniture",
    imgSrc: "/assets/furniture3.jpeg", // Provide the correct image path
    mainProducts: "Office Furniture, Home Furniture, Custom Furniture",
    altText: "Furniture - Hardik Meditech",
    years: "1 YR",
    location: "Mumbai, India",
    tooltipText: "Location details not provided",
    rating: "83%",
    ratingPercent: "94%",
    ratingsCount: "120",
    responseRate: "89%",
  },
  {
    name: "Rajesh",
    email: "rajesh11@gmail.com",
    password: "rajesh@123",
    mobileNumber: "8800304014",
    companyName: "SAFEX INC",
    productOrService: "Furniture",
    imgSrc: "/assets/furniture5.jpeg", // Provide the correct image path
    mainProducts: "Office Furniture, Home Furniture, Outdoor Furniture",
    altText: "Furniture - SAFEX INC",
    years: "1 YR",
    location: "Delhi, India",
    tooltipText: "Location details not provided",
    rating: "80%",
    ratingPercent: "91%",
    ratingsCount: "90",
    responseRate: "86%",
  },
  {
    name: "Pandian Prembabu",
    email: "pandian@gmail.com",
    password: "pandian@123",
    mobileNumber: "9047020026",
    companyName: "VMA Industry",
    productOrService: "Furniture",
    imgSrc: "/assets/furniture2.jpeg", // Provide the correct image path
    mainProducts: "Wooden Furniture, Steel Furniture, Office Furniture",
    altText: "Furniture - VMA Industry",
    years: "1 YR",
    location: "Chennai, India",
    tooltipText: "Location details not provided",
    rating: "79%",
    ratingPercent: "90%",
    ratingsCount: "80",
    responseRate: "85%",
  },
  {
    name: "Rahul",
    email: "rahul@gmail.com",
    password: "rahul@123",
    mobileNumber: "9999270673",
    companyName: "THE OLDMAN ARTS INTERNATIONAL",
    productOrService: "Furniture",
    imgSrc: "/assets/furniture7.jpeg", // Provide the correct image path
    mainProducts: "Antique Furniture, Modern Furniture, Custom Furniture",
    altText: "Furniture Manufacturer - THE OLDMAN ARTS INTERNATIONAL",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "Location details not provided",
    rating: "85%",
    ratingPercent: "92%",
    ratingsCount: "100",
    responseRate: "88%",
  },

  {
    name: "Mohidul Hossain",
    email: "mohidul@gmail.com",
    mobileNumber: "7602779960",
    companyName: "HOSSAIN FURNITURE & INTERIOR DECORATION",
    productOrService: "Furniture",
    imgSrc: "/assets/furniture3.jpeg", // Provide the correct image path
    mainProducts: "Living Room Furniture, Bedroom Furniture, Office Furniture",
    altText: "Furniture Manufacturer - HOSSAIN FURNITURE & INTERIOR DECORATION",
    years: "1 YRS",
    location: "Kolkata, India",
    tooltipText: "Location details not provided",
    rating: "78%",
    ratingPercent: "84%",
    ratingsCount: "55",
    responseRate: "80%",
  },
  {
    name: "Rahul",
    email: "rahul@gmail.com",
    mobileNumber: "9999270673",
    companyName: "THE OLDMAN ARTS INTERNATIONAL",
    productOrService: "Furniture",
    imgSrc: "/assets/furniture4.jpeg", // Provide the correct image path
    mainProducts: "Living Room Furniture, Bedroom Furniture, Office Furniture",
    altText: "Furniture Manufacturer - THE OLDMAN ARTS INTERNATIONAL",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "Location details not provided",
    rating: "76%",
    ratingPercent: "82%",
    ratingsCount: "48",
    responseRate: "79%",
  },
  {
    name: "Mohidul Hossain",
    email: "mohidul@gmail.com",
    mobileNumber: "7602779960",
    companyName: "HOSSAIN FURNITURE & INTERIOR DECORATION",
    productOrService: "Furniture",
    imgSrc: "/assets/furniture5.jpeg", // Provide the correct image path
    mainProducts: "Living Room Furniture, Bedroom Furniture, Office Furniture",
    altText: "Furniture Manufacturer - HOSSAIN FURNITURE & INTERIOR DECORATION",
    years: "1 YRS",
    location: "Kolkata, India",
    tooltipText: "Location details not provided",
    rating: "77%",
    ratingPercent: "83%",
    ratingsCount: "53",
    responseRate: "80%",
  },
  {
    name: "Yash Gupta",
    email: "YashGupta@gmail.com",
    mobileNumber: "7081395088",
    companyName: "Jaiswal Furniture",
    productOrService: "Furniture Manufacturer",
    imgSrc: "/assets/furniture1.jpeg", // Provide the correct image path
    mainProducts: "Wooden Furniture, Custom Furniture, Office Furniture",
    altText: "Furniture Manufacturer - Jaiswal Furniture",
    years: "1 YRS",
    location: "Kanpur, India",
    tooltipText: "Location details not provided",
    rating: "82%",
    ratingPercent: "87%",
    ratingsCount: "55",
    responseRate: "80%",
  },
  {
    name: "Vishal",
    email: "vishal@gmail.com",
    mobileNumber: "8750473855",
    companyName: "Home Decor Inc",
    productOrService: "Furniture & Crafts",
    imgSrc: "/assets/furniture8.jpeg", // Provide the correct image path
    mainProducts: "Home Furniture, Decorative Crafts, Custom Interiors",
    altText: "Furniture & Crafts - Home Decor Inc",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "Location details not provided",
    rating: "80%",
    ratingPercent: "85%",
    ratingsCount: "45",
    responseRate: "83%",
  },
  {
    name: "Abdul Hasan",
    email: "abdul123@gmail.com",
    mobileNumber: "9897383666",
    companyName: "MH Handicraft's",
    productOrService: "Furniture Manufacturer",
    imgSrc: "/assets/furniture2.jpeg", // Provide the correct image path
    mainProducts: "Wooden Furniture, Custom Crafts, Home Decor",
    altText: "Furniture Manufacturer - MH Handicraft's",
    years: "1 YRS",
    location: "Jaipur, India",
    tooltipText: "Location details not provided",
    rating: "85%",
    ratingPercent: "88%",
    ratingsCount: "55",
    responseRate: "82%",
  },
  {
    name: "Gansyam Agarwal",
    email: "agarwal123@gmail.com",
    mobileNumber: "9425850043",
    companyName: "Varsha Fabrication",
    productOrService: "Furniture",
    imgSrc: "/assets/furniture9.jpeg", // Provide the correct image path
    mainProducts: "Custom Furniture, Office Furniture, Home Furnishings",
    altText: "Furniture - Varsha Fabrication",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "Location details not provided",
    rating: "80%",
    ratingPercent: "82%",
    ratingsCount: "25",
    responseRate: "88%",
  },
  {
    _id: "s5678901234fghij5678",
    name: "Bharat bhai",
    email: "info@lingaindia.com",
    password: "Bharat bhai",
    mobileNumber: "9727679727",
    companyName: "SRI SRI MODULAR FURNITURE (AHMEDABAD)",
    productOrService: "Furniture",
    imgSrc: "/assets/furniture10.jpeg",
    mainProducts: "Modular Furniture, Office Furniture, Home Furniture",
    altText: "Furniture - SRI SRI MODULAR FURNITURE (AHMEDABAD)",
    years: "1 YRS",
    location: "Ahmedabad, Gujarat, India",
    tooltipText: "SRI SRI MODULAR FURNITURE, Ahmedabad, Gujarat, India",
    rating: "4.8",
    ratingPercent: "95%",
    ratingsCount: "320",
    responseRate: "91%",
    whatsappConfirmed: true,
  },
  {
    _id: "a1234567890wxyz1234",
    name: "Azam Ashraf",
    email: "royalenterprises@gmail.com",
    password: "Azam Ashraf",
    mobileNumber: "7994097488",
    companyName: "Royal Enterprises",
    productOrService: "Wooden Pillar",
    imgSrc: "/assets/wood-piller.jpeg",
    mainProducts: "Wooden Pillars, Wooden Furniture, Custom Woodwork",
    altText: "Wooden Pillars - Royal Enterprises",
    years: "1 YRS",
    location: "Moradabad, India",
    tooltipText: "Royal Enterprises, Moradabad, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "120",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "a1234567890wxyz5805",
    name: "Mr. Om",
    email: "dhp.mumbai@gmail.com",
    password: "om@12345",
    mobileNumber: "9172829917",
    companyName: "Om Woods",
    productOrService: "Chair Manufacturer",
    imgSrc: "/assets/chair.jpeg", // Placeholder for image path
    mainProducts: "Wooden Chairs, Office Chairs, Designer Chairs",
    altText: "Chairs - Om Woods",
    years: "1 YRS", // Placeholder for years of experience
    location: "Mumbai, India", // Placeholder for location
    tooltipText: "Om Woods, Mumbai, India",
    rating: "4.7", // Placeholder for rating
    ratingPercent: "92%", // Placeholder for rating percentage
    ratingsCount: "180", // Placeholder for ratings count
    responseRate: "85%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "a1234567890wxyz5806",
    name: "Aman Sharma",
    email: "furniturewarehouse423@gmail.com",
    password: "aman@123",
    mobileNumber: "8286333388",
    companyName: "Furniture Warehouse",
    productOrService: "Furniture Manufacturer",
    imgSrc: "/assets/furniture13.jpeg", // Placeholder for image path
    mainProducts: "Home Furniture, Office Furniture, Custom Furniture",
    altText: "Furniture - Furniture Warehouse",
    years: "1 YRS", // Placeholder for years of experience
    location: "New Delhi, India", // Placeholder for location
    tooltipText: "Furniture Warehouse, New Delhi, India",
    rating: "4.6", // Placeholder for rating
    ratingPercent: "89%", // Placeholder for rating percentage
    ratingsCount: "120", // Placeholder for ratings count
    responseRate: "88%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "a1234567890wxyz5907",
    name: "MD. Shahid",
    email: "shahid@76.gmail.com",
    password: "shahid@123",
    mobileNumber: "9594194072",
    companyName: "Lucky Enterprises",
    productOrService: "Office chair manufacturer",
    imgSrc: "/assets/chair2.jpeg", // Placeholder for image path
    mainProducts: "Office Chairs, Ergonomic Chairs, Executive Chairs",
    altText: "Office Chairs - Lucky Enterprises",
    years: "1 YRS", // Placeholder for years of experience
    location: "Mumbai, India", // Placeholder for location
    tooltipText: "Lucky Enterprises, Mumbai, India",
    rating: "4.5", // Placeholder for rating
    ratingPercent: "90%", // Placeholder for rating percentage
    ratingsCount: "120", // Placeholder for ratings count
    responseRate: "85%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "b1234567890wxyz5680",
    name: "Anoop",
    email: "zionIndustries@gmail.com",
    password: "anoop@7503",
    mobileNumber: "9499895040",
    companyName: "Zion Industries",
    productOrService: "Furniture manufacturer",
    imgSrc: "/assets/furniture11.jpeg", // Placeholder for image path
    mainProducts: "Furniture Manufacturing, Custom Furniture, Wood Products",
    altText: "Furniture Manufacturer - Zion Industries",
    years: "1 YRS", // Placeholder for years of experience
    location: "India", // Placeholder for location
    tooltipText: "Zion Industries, India",
    rating: "4.5", // Placeholder for rating
    ratingPercent: "90%", // Placeholder for rating percentage
    ratingsCount: "65", // Placeholder for ratings count
    responseRate: "85%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "c1234567890wxyz5682",
    name: "Mr. Ashok",
    email: "bhagwatifurniture84@gmail.com",
    password: "ashok@750",
    mobileNumber: "9723109126",
    companyName: "Bhagwati Furniture",
    productOrService: "Furniture manufacturer",
    imgSrc: "/assets/furniture14.jpeg", // Placeholder for image path
    mainProducts: "Wooden Furniture, Custom Furniture",
    altText: "Bhagwati Furniture - Furniture Manufacturer",
    years: "1 YRS", // Placeholder for years of experience
    location: "India", // Placeholder for location
    tooltipText: "Bhagwati Furniture, India",
    rating: "4.5", // Placeholder for rating
    ratingPercent: "89%", // Placeholder for rating percentage
    ratingsCount: "65", // Placeholder for ratings count
    responseRate: "90%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "c1234567890wxyz5683",
    name: "Dharmik Patel",
    email: "argofurnitures@gmail.com",
    password: "dharmik@123",
    mobileNumber: "9904302513",
    companyName: "ARGO FURNITURE",
    productOrService: "Furniture manufacturer",
    imgSrc: "/assets/furniture15.jpeg", // Placeholder for image path
    mainProducts: "Office Furniture, Home Furniture",
    altText: "ARGO FURNITURE - Furniture Manufacturer",
    years: "1 YRS", // Placeholder for years of experience
    location: "India", // Placeholder for location
    tooltipText: "ARGO FURNITURE, India",
    rating: "4.7", // Placeholder for rating
    ratingPercent: "92%", // Placeholder for rating percentage
    ratingsCount: "78", // Placeholder for ratings count
    responseRate: "88%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "c1234567890wxyz5684",
    name: "Hardik Shah",
    email: "hardik92shah@gmail.com",
    password: "hardik@456",
    mobileNumber: "9898780399",
    companyName: "Mahavir Furniture & Interior",
    productOrService: "Furniture manufacturer",
    imgSrc: "/assets/furniture16.jpeg", // Placeholder for image path
    mainProducts: "Home Furniture, Office Furniture",
    altText: "Mahavir Furniture & Interior - Furniture Manufacturer",
    years: "1 YRS", // Placeholder for years of experience
    location: "India", // Placeholder for location
    tooltipText: "Mahavir Furniture & Interior, India",
    rating: "4.6", // Placeholder for rating
    ratingPercent: "90%", // Placeholder for rating percentage
    ratingsCount: "85", // Placeholder for ratings count
    responseRate: "87%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "k8901234567ijkl8901",
    name: "Srivastav",
    email: "srivastav@gmail.com",
    password: "thesisfurniture",
    mobileNumber: "9311381865",
    companyName: "Thesis",
    productOrService: "Furniture",
    imgSrc: "/assets/furniture1.jpeg",
    mainProducts: "Sofas, Tables, Chairs, Custom Furniture",
    altText: "Thesis - Furniture Collection",
    years: "1 YRS",
    location: "India",
    tooltipText: "Thesis, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "42",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "b1234567890xyz5682",
    name: "Ravi Sharma",
    email: "sharmafurniture115@mail.com",
    password: "7398195196",
    mobileNumber: "7398195196",
    companyName: "Sharma Furniture",
    productOrService: "Furniture and Visiting Chair",
    imgSrc: "/assets/shop1.jpeg",
    mainProducts: "Furniture, Visiting Chairs, Office Chairs",
    altText: "Sharma Furniture - Furniture and Visiting Chairs",
    years: "1 YRS",
    location: "Lucknow, Uttar Pradesh, India",
    tooltipText: "Sharma Furniture, Lucknow",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "110",
    responseRate: "89%",
    whatsappConfirmed: true,
  },
  {
    _id: "kgn-enterprises-aligarh",
    name: "yusuf ali",
    email: "kgnenterprises@gmail.com",
    password: "yusuf ali",
    mobileNumber: "8791883121",
    companyName: "kgn enterprises",
    productOrService: "furniture hardware",
    imgSrc: "/assets/furniture17.jpg",
    mainProducts: "Furniture Hardware",
    altText: "KGN Enterprises - Furniture Hardware",
    years: "1 YRS",
    location: "Aligarh, Uttar Pradesh, India",
    tooltipText: "KGN Enterprises, Furniture Hardware, Aligarh",
    rating: "4.2",
    ratingPercent: "85%",
    ratingsCount: "20",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    _id: "rohit-mumbai-maharashtra",
    name: "Rohit",
    email: "rohit123@gmail.com",
    password: "rohit1234567",
    mobileNumber: "8077829961",
    companyName: "Single Door Wooden Cupboard",
    statename: "Maharashtra",
    cityname: "Mumbai",
    productOrService: "Furniture",
    imgSrc: "/assets/furniture18.jpg",
    mainProducts: "Furniture",
    altText: "Single Door Wooden Cupboard - Mumbai",
    years: "1 YRS",
    location: "Mumbai, Maharashtra",
    tooltipText: "Single Door Wooden Cupboard, Mumbai",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "152",
    responseRate: "92%",
    whatsappConfirmed: true,
  },
  {
    _id: "jay-mumbai-maharashtra",
    name: "Jay",
    email: "jay123@gmail.com",
    password: "jay12345678",
    mobileNumber: "8898290361",
    companyName: "Royal Chair",
    statename: "Maharashtra",
    cityname: "Mumbai",
    productOrService: "Chair",
    imgSrc: "/assets/royal-chair.jpg",
    mainProducts: "Chair",
    altText: "Royal Chair - Mumbai",
    years: "1 YRS",
    location: "Mumbai, Maharashtra",
    tooltipText: "Royal Chair, Mumbai",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "110",
    responseRate: "94%",
    whatsappConfirmed: true,
  },
  {
    _id: "mohd-zaki-saharanpur-furniture",
    name: "Mohd. Zaki",
    email: "MohdZaki123@gamil.com",
    password: "Mohd. Zaki",
    mobileNumber: "8126644163",
    companyName: "HANDICRAFTS GOODS",
    statename: "Saharanpur",
    cityname: "Farman Masjid",
    productOrService: "Furniture",
    imgSrc: "/assets/handi-fur.jpg",
    mainProducts: "Furniture and Handicrafts",
    altText: "HANDICRAFTS GOODS - Furniture Supplier in Saharanpur",
    years: "1 YRS",
    location: "Farman Masjid, Saharanpur",
    tooltipText: "HANDICRAFTS GOODS - Quality Furniture Provider",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "190",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    _id: "rakesh-saini-rajasthan-furniture",
    name: "Rakesh Saini",
    email: "RakeshSaini123@gamil.com",
    password: "Rakesh Saini",
    mobileNumber: "7357719387",
    companyName: "SHRI HARI GIRI JI INDUSTRIES",
    statename: "Rajasthan",
    cityname: "Jodhpur",
    productOrService: "Furniture",
    imgSrc: "/assets/shri-hari-giri-furniture.jpg",
    mainProducts: "Furniture",
    altText: "SHRI HARI GIRI JI INDUSTRIES - Furniture Manufacturer in Jodhpur",
    years: "1 YRS",
    location: "Jodhpur, Rajasthan",
    tooltipText: "SHRI HARI GIRI JI INDUSTRIES - Quality Furniture",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "250",
    responseRate: "91%",
    whatsappConfirmed: true,
  },
  {
    _id: "himanshu-rohini",
    name: "Himanshu",
    email: "himanshu123@gmail.com",
    password: "himanshu123",
    mobileNumber: "7827911425",
    companyName: "Cloth Stand Manufacturer",
    statename: "Delhi",
    cityname: "Rohini",
    productOrService: "Stand",
    imgSrc: "/assets/stand.jpg",
    mainProducts: "Cloth Stands, Drying Racks, Portable Stands",
    altText: "Cloth Stand Manufacturer - Premium Quality Stands in Rohini",
    years: "1 YRS",
    location: "Rohini, Delhi, India",
    tooltipText:
      "Cloth Stand Manufacturer - Reliable and Durable Stand Solutions",
    rating: "4.6",
    ratingPercent: "91%",
    ratingsCount: "140",
    responseRate: "85%",
    whatsappConfirmed: false,
  },

  // Add more items if needed
];

const FurnitureDealers = () => {
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
                  <Link to="#">Office Furniture</Link>
                </li>
                <li>
                  <Link to="#">Home Furniture</Link>
                </li>
                <li>
                  <Link to="#">Custom Furniture</Link>
                </li>
                <li>
                  <Link to="#">Outdoor Furniture</Link>
                </li>
                <li>
                  <Link to="#">Kids Furniture</Link>
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
                  <Link to="#">Delhi</Link>
                </li>
                <li>
                  <Link to="#">Karnataka</Link>
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
                      src="/assets/furniture2.jpeg"
                      width={55}
                      height={55}
                      alt="Office Furniture"
                    />
                  </figure>
                  <p className="title">Office Furniture</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/furniture3.jpeg"
                      width={55}
                      height={55}
                      alt="Home Furniture"
                    />
                  </figure>
                  <p className="title">Home Furniture</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/furniture4.jpeg"
                      width={55}
                      height={55}
                      alt="Custom Furniture"
                    />
                  </figure>
                  <p className="title">Custom Furniture</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/furniture5.jpeg"
                      width={55}
                      height={55}
                      alt="Outdoor Furniture"
                    />
                  </figure>
                  <p className="title">Outdoor Furniture</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/furniture6.jpeg"
                      width={55}
                      height={55}
                      alt="Kids Furniture"
                    />
                  </figure>
                  <p className="title">Kids Furniture</p>
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

export default FurnitureDealers;
