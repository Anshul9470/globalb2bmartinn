import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    _id: "sweta-andrapradesh",
    name: "Sweta",
    email: "sweta@gmail.com",
    password: "12345678",
    mobileNumber: "9985770691",
    companyName: "Sweta",
    statename: "Andhra Pradesh",
    cityname: "Andhra Pradesh",
    productOrService: "Statue",
    imgSrc: "/assets/statue3.jpg",
    mainProducts: "Statues",
    altText: "Sweta - Andhra Pradesh",
    years: "1 YRS",
    location: "Andhra Pradesh",
    tooltipText: "Sweta, Andhra Pradesh",
    rating: "4.3",
    ratingPercent: "86%",
    ratingsCount: "78",
    responseRate: "85%",
    whatsappConfirmed: true,
  },

  {
    name: "Prem",
    email: "PremArts1234@gmail.com",
    mobileNumber: "9763254634",
    companyName: "Prem Arts",
    productOrService: "Arts",
    imgSrc: "/assets/arts.jpg", // You need to provide the correct image path
    altText: "Arts - Prem Arts",
    mainProducts: "Paintings, Sculputres, Drawings, Prints, Photography",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "456 Arts Avenue, Creative Colony, Delhi, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "50",
    responseRate: "95%",
  },
  {
    name: "Vaibhav Baranwal",
    email: "Vaibhav1124@gmail.com",
    mobileNumber: "9839140178",
    companyName: "Bhadohi Arts weave",
    productOrService: "Rugs Manufacturer",
    imgSrc: "/assets/art2.jpg", // You need to provide the correct image path
    altText: "Rugs Manufacturer - Bhadohi Arts weave",
    years: "1 YRS",
    location: "Guragaon, Haryana",
    tooltipText: "Address Here",
    rating: "8.8",
    mainProducts: "Paintings, Sculputres, Drawings, Prints, Photography",
    ratingPercent: "98%",
    ratingsCount: "55",
    responseRate: "90%",
  },
  {
    name: "Mr. Hemant Kumar",
    email: "hk72609@gmail.com",
    password: "kumar@123",
    mobileNumber: "9758197207",
    companyName: "BAJRANG STONE & ART'S",
    productOrService: "Statue Manufacturer",
    imgSrc: "/assets/statues.jpeg", // Provide the correct image path
    mainProducts: "Marble Statues, Stone Sculptures, Religious Statues",
    altText: "Statue Manufacturer - BAJRANG STONE & ART'S",
    years: "1 YR",
    location: "Jaipur, India",
    tooltipText: "Location details not provided",
    rating: "76%",
    ratingPercent: "87%",
    ratingsCount: "50",
    responseRate: "82%",
  },
  {
    name: "Mr. Pradeep Kumar Sharma",
    email: "devmoortiemporium@gmail.com",
    password: "pradeep123",
    mobileNumber: "9785302512",
    companyName: "DEV MOORTI EMPORIUM",
    productOrService: "Statue Manufacturer",
    imgSrc: "/assets/sta1.jpeg", // Provide the correct image path
    mainProducts: "Marble Statues, Stone Sculptures, Religious Idols",
    altText: "Statue Manufacturer - DEV MOORTI EMPORIUM",
    years: "1 YR",
    location: "Jaipur, India",
    tooltipText: "Location details not provided",
    rating: "75%",
    ratingPercent: "86%",
    ratingsCount: "40",
    responseRate: "81%",
  },
  {
    name: "Mr. Pradeep Kumar Sharma",
    email: "devmoortiemporium@gmail.com",
    password: "pradeep123",
    mobileNumber: "9785302512",
    companyName: "DEV MOORTI EMPORIUM",
    productOrService: "Statue Manufacturer",
    imgSrc: "/assets/sta2.jpeg", // Provide the correct image path
    mainProducts: "Marble Statues, Stone Sculptures, Religious Idols",
    altText: "Statue Manufacturer - DEV MOORTI EMPORIUM",
    years: "1 YR",
    location: "Jaipur, India",
    tooltipText: "Location details not provided",
    rating: "75%",
    ratingPercent: "86%",
    ratingsCount: "40",
    responseRate: "81%",
  },
  {
    name: "Mr. Goutam Sharma",
    email: "radharanimoortiart@gmail.com",
    password: "sharma123",
    mobileNumber: "9166026512",
    companyName: "RADHA RANI MOORTI ART",
    productOrService: "Statue Manufacturer",
    imgSrc: "/assets/sta3.jpeg", // Provide the correct image path
    mainProducts: "Marble Statues, Stone Sculptures, Religious Idols",
    altText: "Statue Manufacturer - RADHA RANI MOORTI ART",
    years: "1 YRS",
    location: "Jaipur, India",
    tooltipText: "Location details not provided",
    rating: "80%",
    ratingPercent: "90%",
    ratingsCount: "50",
    responseRate: "85%",
  },
  {
    name: "Mr. Devendra Kumar",
    email: "sindiaindustry@gmail.com",
    mobileNumber: "9520646336",
    companyName: "S INDIA INDUSTRIES",
    productOrService: "Statue Manufacturer",
    imgSrc: "/assets/sta5.jpeg", // Provide the correct image path
    mainProducts: "Marble Statues, Stone Sculptures, Religious Idols",
    altText: "Statue Manufacturer - S INDIA INDUSTRIES",
    years: "1 YRS",
    location: "Jaipur, India",
    tooltipText: "Location details not provided",
    rating: "82%",
    ratingPercent: "88%",
    ratingsCount: "70",
    responseRate: "84%",
  },
  {
    name: "Mr. Mukesh Kumar Saini",
    email: "vamjaipur@gmail.com",
    password: "mukesh123",
    mobileNumber: "7976820877",
    companyName: "VINAYAK ART & MARBLE",
    productOrService: "Statue Manufacturer",
    imgSrc: "/assets/sta4.jpeg", // Provide the correct image path
    mainProducts: "Marble Statues, Stone Sculptures, Religious Idols",
    altText: "Statue Manufacturer - VINAYAK ART & MARBLE",
    years: "1 YRS",
    location: "Jaipur, India",
    tooltipText: "Location details not provided",
    rating: "78%",
    ratingPercent: "85%",
    ratingsCount: "60",
    responseRate: "82%",
  },
  {
    name: "Ms. Revathi",
    email: "sales@anmoroverseas.com",
    mobileNumber: "8695444506",
    companyName: "ANMOR OVERSEAS VENTURE PRIVATE LIMITED",
    productOrService: "Statue Manufacturer",
    imgSrc: "/assets/sta3.jpeg", // Provide the correct image path
    mainProducts: "Marble Statues, Bronze Sculptures, Custom Statues",
    altText: "Statue Manufacturer - ANMOR OVERSEAS VENTURE PRIVATE LIMITED",
    years: "1 YRS",
    location: "Chennai, India",
    tooltipText: "Location details not provided",
    rating: "85%",
    ratingPercent: "90%",
    ratingsCount: "75",
    responseRate: "88%",
  },
  {
    name: "Mr. Pankaj Sharma",
    email: "pksharma1078@gmail.com",
    mobileNumber: "9909909121",
    companyName: "ASHA MURTI BHANDAR",
    productOrService: "Statue Manufacturer",
    imgSrc: "/assets/sta6.jpeg", // Provide the correct image path
    mainProducts: "Marble Statues, Stone Sculptures, Religious Idols",
    altText: "Statue Manufacturer - ASHA MURTI BHANDAR",
    years: "1 YRS",
    location: "Jaipur, India",
    tooltipText: "Location details not provided",
    rating: "80%",
    ratingPercent: "86%",
    ratingsCount: "50",
    responseRate: "83%",
  },
  {
    name: "Mr. Vishal Sharma",
    email: "vspandit7159@gmail.com",
    mobileNumber: "7976394002",
    companyName: "SHIVANI MURTI KALA KENDRA",
    productOrService: "Statue Manufacturer",
    imgSrc: "/assets/art8.jpeg", // Provide the correct image path
    mainProducts: "Marble Statues, Stone Sculptures, Religious Idols",
    altText: "Statue Manufacturer - SHIVANI MURTI KALA KENDRA",
    years: "1 YRS",
    location: "Agra, India",
    tooltipText: "Location details not provided",
    rating: "79%",
    ratingPercent: "84%",
    ratingsCount: "62",
    responseRate: "81%",
  },
  {
    name: "Mr. Mukesh Kumar Saini",
    email: "vamjaipur@gmail.com",
    mobileNumber: "7976820877",
    companyName: "VINAYAK ART & MARBLE",
    productOrService: "Statue Manufacturer",
    imgSrc: "/assets/sta7.jpeg", // Provide the correct image path
    mainProducts: "Marble Statues, Stone Sculptures, Custom Idols",
    altText: "Statue Manufacturer - VINAYAK ART & MARBLE",
    years: "1 YRS",
    location: "Jaipur, India",
    tooltipText: "Location details not provided",
    rating: "83%",
    ratingPercent: "88%",
    ratingsCount: "65",
    responseRate: "87%",
  },
  {
    name: "Mr. Subhash Dhankar",
    email: "info@sudhan-india.co.in",
    mobileNumber: "9416544371",
    companyName: "SUDHAN INDIA LIGHTING PVT. LTD.",
    productOrService: "Statue Manufacturer",
    imgSrc: "/assets/sta8.jpeg", // Provide the correct image path
    mainProducts: "Marble Statues, Stone Sculptures, Religious Idols",
    altText: "Statue Manufacturer - SUDHAN INDIA LIGHTING PVT. LTD.",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "Location details not provided",
    rating: "85%",
    ratingPercent: "90%",
    ratingsCount: "70",
    responseRate: "88%",
  },
  {
    name: "Ms. Revathi",
    email: "sales@anmoroverseas.com",
    mobileNumber: "8695444506",
    companyName: "ANMOR OVERSEAS VENTURE PRIVATE LIMITED",
    productOrService: "Statue Manufacturer",
    imgSrc: "/assets/sta9.jpeg", // Provide the correct image path
    mainProducts: "Marble Statues, Bronze Sculptures, Custom Statues",
    altText: "Statue Manufacturer - ANMOR OVERSEAS VENTURE PRIVATE LIMITED",
    years: "1 YRS",
    location: "Chennai, India",
    tooltipText: "Location details not provided",
    rating: "85%",
    ratingPercent: "90%",
    ratingsCount: "75",
    responseRate: "88%",
  },
  {
    name: "Mr. Vishal Sharma",
    email: "vspandit7159@gmail.com",
    mobileNumber: "7976394002",
    companyName: "SHIVANI MURTI KALA KENDRA",
    productOrService: "Statue Manufacturer",
    imgSrc: "/assets/sta11.jpeg", // Provide the correct image path
    mainProducts: "Marble Statues, Stone Sculptures, Religious Idols",
    altText: "Statue Manufacturer - SHIVANI MURTI KALA KENDRA",
    years: "1 YRS",
    location: "Jaipur, India",
    tooltipText: "Location details not provided",
    rating: "80%",
    ratingPercent: "85%",
    ratingsCount: "60",
    responseRate: "83%",
  },
  {
    name: "Mr. Manoj Kumar Yadav",
    email: "dhramagepl@gmail.com",
    mobileNumber: "9646108921",
    companyName: "DHRAMA GOODS EXPORTS PVT LTD",
    productOrService: "Statue Manufacturer",
    imgSrc: "/assets/scr10.jpeg", // Provide the correct image path
    mainProducts: "Marble Statues, Stone Sculptures, Decorative Idols",
    altText: "Statue Manufacturer - DHRAMA GOODS EXPORTS PVT LTD",
    years: "7 YRS",
    location: "Delhi, India",
    tooltipText: "Location details not provided",
    rating: "90%",
    ratingPercent: "92%",
    ratingsCount: "60",
    responseRate: "85%",
  },
  {
    name: "Mr. Manish Prajapati",
    email: "Gayatrihandicraft9@gmail.com",
    mobileNumber: "6397597020",
    companyName: "M/S GAYATRI HANDICRAFT",
    productOrService: "Statue Manufacturer",
    imgSrc: "/assets/statue1.jpeg", // Provide the correct image path
    mainProducts: "Marble Statues, Stone Sculptures, Decorative Idols",
    altText: "Statue Manufacturer - M/S GAYATRI HANDICRAFT",
    years: "5 YRS",
    location: "Agra, India",
    tooltipText: "Location details not provided",
    rating: "80%",
    ratingPercent: "85%",
    ratingsCount: "45",
    responseRate: "78%",
  },

  {
    name: "Mr. Pankaj Sharma",
    email: "pksharma1078@gmail.com",
    mobileNumber: "9909909121",
    companyName: "ASHA MURTI BHANDAR",
    productOrService: "Statue Manufacturer",
    imgSrc: "/assets/sta10.jpeg", // Provide the correct image path
    mainProducts: "Marble Statues, Stone Sculptures, Religious Idols",
    altText: "Statue Manufacturer - ASHA MURTI BHANDAR",
    years: "1 YRS",
    location: "Varanasi, India",
    tooltipText: "Location details not provided",
    rating: "78%",
    ratingPercent: "83%",
    ratingsCount: "52",
    responseRate: "80%",
  },
  {
    _id: "f4g5h6i7890123456789abcd", // Random unique ID
    name: "SHameem",
    email: "SHameem123@gmail.com",
    password: "SHameem123", // Including the password as specified
    mobileNumber: "9096668366",
    companyName: "SHameem Mart Gallery",
    productOrService: "Mart Gallery",
    imgSrc: "/assets/gallary.jpeg", // Example image path
    mainProducts: "Groceries, Household Items, Apparel, Gifts",
    altText: "Mart Gallery - SHameem Mart Gallery",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "789 Market Street, Delhi, India",
    rating: "4.2",
    ratingPercent: "88%",
    ratingsCount: "50",
    responseRate: "90%",
  },
  {
    _id: "vijay-arts-maharashtra",
    name: "vijay",
    email: "vijayarts@gmail.com",
    password: "12345678",
    mobileNumber: "8983000939",
    companyName: "vijay arts",
    statename: "Maharashtra",
    cityname: "Maharashtra",
    productOrService: "bords",
    imgSrc: "/assets/vijay-arts.jpg",
    mainProducts: "Boards",
    altText: "vijay arts - Boards",
    years: "1 YRS",
    location: "Maharashtra, India",
    tooltipText: "vijay arts - Board Manufacturer",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "150",
    responseRate: "92%",
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const Arts = () => {
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
                  <Link to="#">Paintings</Link>
                </li>
                <li>
                  <Link to="#">Sculptures</Link>
                </li>
                <li>
                  <Link to="#">Drawings</Link>
                </li>
                <li>
                  <Link to="#">Prints</Link>
                </li>
                <li>
                  <Link to="#">Photography</Link>
                </li>
                <li>
                  <Link to="#">Crafts</Link>
                </li>
                <li>
                  <Link to="#">Mixed Media</Link>
                </li>
                <li>
                  <Link to="#">Digital Art</Link>
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
                  <Link to="#">Tamil Nadu</Link>
                </li>
                <li>
                  <Link to="#">West Bengal</Link>
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
                      src="/assets/art1.jpg"
                      width={55}
                      height={55}
                      alt="Paintings"
                    />
                  </figure>
                  <p className="title">Paintings</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/art2.jpg"
                      width={55}
                      height={55}
                      alt="Sculptures"
                    />
                  </figure>
                  <p className="title">Sculptures</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/art3.jpg"
                      width={55}
                      height={55}
                      alt="Drawings"
                    />
                  </figure>
                  <p className="title">Drawings</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/art4.jpeg"
                      width={55}
                      height={55}
                      alt="Prints"
                    />
                  </figure>
                  <p className="title">Prints</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/art5.webp"
                      width={55}
                      height={55}
                      alt="Photography"
                    />
                  </figure>
                  <p className="title">Photography</p>
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

export default Arts;
