import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    name: "Abhishek Jain",
    email: "sales@craftertapes.com",
    mobileNumber: "+91 9997919960",
    companyName: "Crafter Tape",
    address:
      "C-09 Khasra No. 2013/2, Runkata, Agra, Agra, Uttar Pradesh, 282007",
    productOrService: "Tapes",
    imgSrc: "/assets/craft5.webp",
    mainProducts: "Adhesive Tapes, Specialty Tapes",
    altText: "Crafter Tape - Adhesive Tapes",
    years: "1 YRS",
    location: "Agra, Uttar Pradesh, India",
    tooltipText: "Crafter Tape, Agra",
    rating: "4.2",
    ratingPercent: "84%",
    ratingsCount: "40",
    responseRate: "90%",
    path: "/crafter-tapes",
  },
  {
    _id: "krishna-packaging-bhiwadi",
    name: "Krishna Packaging",
    email: "krishanapackaging15@gmail.com",
    password: "KrishnaPackaging123", // Random password
    mobileNumber: "+91 80580 66550",
    companyName: "Krishna Packaging",
    productOrService: "Packaging Solutions",
    imgSrc: "/assets/pack2.jpg",
    mainProducts: "Packaging Solutions",
    altText: "Krishna Packaging - Packaging Solutions",
    years: "1 YRS", // Random value
    location: "Bhiwadi, Rajasthan, India",
    tooltipText: "Krishna Packaging, Packaging Solutions, Bhiwadi",
    rating: "4.7", // Random value
    ratingPercent: "94%", // Random value
    ratingsCount: "25", // Random value
    responseRate: "92%", // Random value
    path: "/krishna-packing",
  },

  {
    name: "Tashin Kukad",
    email: "tashinkukad@gmail.com",
    mobileNumber: "9737633674",
    companyName: "Rozee Technist",
    productOrService: "Packing Clips",
    imgSrc: "/assets/clips.jpg", // Correct image path needed
    mainProducts:
      "Metal packing clips, Plastic packing clips, Sealing clips, etc.",
    altText: "Packing Clips - Rozee Technist",
    years: "1 YRS",
    location: "Mumbai, Maharashtra, India",
    tooltipText: "789, Andheri East, Mumbai - 400059, Maharashtra, India",
    rating: "4.5",
    ratingPercent: "92%",
    ratingsCount: "180",
    responseRate: "95%",
  },
  {
    _id: "e6f7g8h9i0123456789abcde", // Random unique ID
    name: "Bhavin",
    email: "bhavin12@gmail.com",
    password: "bhavin @123456", // Including the password as specified
    mobileNumber: "7030308549",
    companyName: "The Bubble",
    productOrService: "Packing Material",
    imgSrc: "/assets/packi.jpeg", // Example image path
    mainProducts:
      "Bubble Wrap, Packing Peanuts, Stretch Film, Corrugated Boxes",
    altText: "Packing Material - The Bubble",
    years: "1 YRS",
    location: "Bengaluru, India",
    tooltipText: "123 Packing Street, Bengaluru, India",
    rating: "4.2",
    ratingPercent: "85%",
    ratingsCount: "35",
    responseRate: "88%",
  },
  {
    _id: "j890123456789abcdef0123", // Random unique ID
    name: "Anil Patel",
    email: "anilpatel@gmail.com",
    mobileNumber: "9099100332",
    companyName: "Neo Polyplast",
    productOrService: "Automatic Box Strapping Roll",
    imgSrc: "/assets/strap.jpeg", // Example image path
    mainProducts: "Automatic Box Strapping Rolls, Packaging Materials",
    altText: "Automatic Box Strapping Roll - Neo Polyplast",
    years: "1 YRS",
    location: "Surat, India",
    tooltipText: "123 Packaging Lane, Surat, India",
    rating: "4.4",
    ratingPercent: "88%",
    ratingsCount: "55",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    _id: "s456789012345cdef01234", // Random unique ID
    name: "MR.SHASHANK SHINDE",
    email: "shashank8050@gmail.com",
    mobileNumber: "8554050088",
    companyName: "SAARTH INDUSTRIES",
    productOrService: "Corrugated Box Wholesaler",
    imgSrc: "/assets/box1.jpeg", // Example image path
    mainProducts: "Corrugated Boxes, Packaging Materials, Carton Boxes",
    altText: "Corrugated Box Wholesaler - SAARTH INDUSTRIES",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "Plot No. 5, Industrial Area, Mumbai, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "85",
    responseRate: "93%",
    whatsappConfirmed: true,
  },
  {
    _id: "s4567890abcdef123456789", // Random unique ID
    name: "MR. SHASHANK SHINDE",
    email: "shashank8050@gmail.com",
    mobileNumber: "8554050088",
    companyName: "SAARTH INDUSTRIES",
    productOrService: "Corrugated Box Wholesaler",
    imgSrc: "/assets/box2.jpeg", // Example image path
    mainProducts: "Corrugated Boxes, Packaging Materials",
    altText: "Corrugated Boxes - SAARTH INDUSTRIES",
    years: "1 YRS",
    location: "Pune, India",
    tooltipText: "Warehouse No. 12, Industrial Estate, Pune, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "55",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    _id: "u1234567890abc5678",
    name: "Yogita",
    email: "Unicraftenterprises@gmail.com",
    password: "yogita@123",
    mobileNumber: "9969073479",
    companyName: "Unicraft",
    productOrService: "Corrugated Box Manufacturer",
    imgSrc: "/assets/corbox1.jpeg",
    mainProducts: "Corrugated Boxes, Packaging Boxes, Cartons",
    altText: "Unicraft - Corrugated Box Manufacturer",
    years: "1 YRS",
    location: "Mumbai, Maharashtra, India",
    tooltipText: "Unicraft, Mumbai",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "80",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "u1234567890def5678",
    name: "Sadik",
    email: "info@packagingcraft.com",
    password: "sadik@1234",
    mobileNumber: "8080801061",
    companyName: "SIMNANAI PACKAGING",
    productOrService: "Corrugated Box Manufacturer",
    imgSrc: "/assets/box3.jpeg",
    mainProducts: "Corrugated Boxes, Packaging Materials, Cartons",
    altText: "SIMNANAI PACKAGING - Corrugated Box Manufacturer",
    years: "1 YRS",
    location: "Mumbai, Maharashtra, India",
    tooltipText: "SIMNANAI PACKAGING, Mumbai",
    rating: "4.7",
    ratingPercent: "92%",
    ratingsCount: "150",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
  {
    _id: "a1234567890radhepackaging",
    name: "Ashish Roy",
    email: "radhepackaging@gmail.com",
    password: "ashish@123",
    mobileNumber: "9586725324",
    companyName: "Radhe Packaging",
    productOrService: "Corrugated Box Manufacturer",
    imgSrc: "/assets/box5.jpeg",
    mainProducts: "Corrugated Boxes, Packaging Solutions, Custom Packaging",
    altText: "Radhe Packaging - Corrugated Boxes",
    years: "1 YRS",
    location: "Rajkot, Gujarat, India",
    tooltipText: "Radhe Packaging, Rajkot",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "80",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
  {
    _id: "b1234567890sspackaging",
    name: "Ravi",
    email: "sspackaging@gmail.com",
    password: "ravi@123456",
    mobileNumber: "9156387479",
    companyName: "SS Packaging",
    productOrService: "Corrugated Box Manufacturer",
    imgSrc: "/assets/box6.jpeg",
    mainProducts:
      "Corrugated Boxes, Packaging Materials, Custom Packaging Solutions",
    altText: "SS Packaging - Corrugated Boxes",
    years: "1 YRS",
    location: "Pune, Maharashtra, India",
    tooltipText: "SS Packaging, Pune",
    rating: "4.4",
    ratingPercent: "88%",
    ratingsCount: "65",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    _id: "b1234567890aditya-packagings",
    name: "Vishal Nirman",
    email: "nirmanvishal2@gmail.com",
    password: "vishal@123",
    mobileNumber: "9899201925",
    companyName: "Aditya Packagings",
    productOrService: "Corrugated Box Manufacturer",
    imgSrc: "/assets/box4.jpeg",
    mainProducts: "Corrugated Boxes, Packaging Solutions, Custom Packaging",
    altText: "Aditya Packagings - Corrugated Boxes",
    years: "1 YRS",
    location: "Gurugram, Haryana, India",
    tooltipText: "Aditya Packagings, Gurugram",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "80",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "mr-enterprise-gujrat",
    name: "Mustakim",
    email: "mustakim@gmail.com",
    password: "12345678",
    mobileNumber: "9512579544",
    companyName: "M R Enterprise",
    productOrService: "Tape",
    imgSrc: "/assets/packing-tape1.jpg",
    mainProducts: "Tape",
    altText: "M R Enterprise - Tape",
    years: "1 YRS",
    location: "Gujrat, India",
    tooltipText: "M R Enterprise, Tape, Gujrat",
    rating: "4.5",
    ratingPercent: "92%",
    ratingsCount: "32",
    responseRate: "80%",
    whatsappConfirmed: true,
  },
  {
    _id: "cpack-world-delhi",
    name: "Cpack",
    email: "cpackworld12@gmail.com",
    password: "123456789",
    mobileNumber: "9891050732",
    companyName: "Cpack World",
    productOrService: "Packing",
    imgSrc: "/assets/packing-material1.jpg",
    mainProducts: "Packing Materials",
    altText: "Cpack World - Packing",
    years: "1 YRS",
    location: "Nangloi, Delhi, India",
    tooltipText: "Cpack World, Packing, Nangloi, Delhi",
    rating: "4.2",
    ratingPercent: "84%",
    ratingsCount: "50",
    responseRate: "75%",
    whatsappConfirmed: true,
  },
  {
    _id: "jay-tirupati-tape-noida",
    name: "Chnader Bhan",
    email: "chnaderbhan@gmail.com",
    password: "12345678",
    mobileNumber: "9818789265",
    companyName: "Jay Tirupati Tape",
    productOrService: "Tape",
    imgSrc: "/assets/tape9.jpg",
    mainProducts: "Tapes",
    altText: "Jay Tirupati Tape - Tape",
    years: "1 YRS",
    location: "Noida, India",
    tooltipText: "Jay Tirupati Tape, Tape, Noida",
    rating: "4.4",
    ratingPercent: "88%",
    ratingsCount: "40",
    responseRate: "81%",
    whatsappConfirmed: true,
  },
  {
    _id: "rahul-sharma-tape",
    name: "Rahul Sharma",
    email: "RahulSharma@gmail.com",
    password: "12345678",
    mobileNumber: "9509397500",
    companyName: "Lakshya Trading Company",
    statename: "",
    cityname: "Tape",
    productOrService: "Jaipur",
    imgSrc: "/assets/tape10.jpg",
    mainProducts: "Jaipur",
    altText: "Lakshya Trading Company - Tape",
    years: "1 YRS",
    location: "Tape",
    tooltipText: "Lakshya Trading Company, Tape",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "200",
    responseRate: "94%",
    whatsappConfirmed: true,
  },
  {
    _id: "ram-ashish-delhi",
    name: "Ram Ashish",
    email: "RKENTERPRISES@gmail.com",
    password: "123456789",
    mobileNumber: "8470906191",
    companyName: "RK ENTERPRISES",
    statename: "Delhi",
    cityname: "Delhi",
    productOrService: "Reflective Tape Safety Jacket",
    imgSrc: "/assets/reflective-tape.jpg",
    mainProducts: "Reflective Tape Safety Jacket",
    altText: "RK ENTERPRISES - Delhi",
    years: "1 YRS",
    location: "Delhi, Delhi",
    tooltipText: "RK ENTERPRISES, Delhi",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "180",
    responseRate: "95%",
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const PackingClipsComponent = () => {
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
                  <Link to="#">Metal Packing Clips</Link>
                </li>
                <li>
                  <Link to="#">Plastic Packing Clips</Link>
                </li>
                <li>
                  <Link to="#">Sealing Clips</Link>
                </li>
                {/* Add more categories as needed */}
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
            {/* Example categories */}
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/clip1.jpg"
                      width={55}
                      height={55}
                      alt="Metal Packing Clips"
                    />
                  </figure>
                  <p className="title">Metal Packing Clips</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/clip2.jpg"
                      width={55}
                      height={55}
                      alt="Plastic Packing Clips"
                    />
                  </figure>
                  <p className="title">Plastic Packing Clips</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/clip3.jpg"
                      width={55}
                      height={55}
                      alt="Sealing Clips"
                    />
                  </figure>
                  <p className="title">Sealing Clips</p>
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
                    <Link to={"/contact-supplier"}>
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

export default PackingClipsComponent;
