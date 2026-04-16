import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    name: "Shashikant",
    email: "polyanaplasticprofile@gmail.com",
    mobileNumber: "+91 9823705852",
    companyName: "Polyana PVC Pipes and Plastic Profile",
    productOrService: "PVC Pipes and Plastic Profiles",
    imgSrc: "/assets/pvc6.jpeg",
    altText:
      "PVC Pipes and Plastic Profiles - Polyana PVC Pipes and Plastic Profile",
    mainProducts: "PVC Pipes, Plastic Profiles, Fittings",
    years: "1 YRS",
    location: "Pune, Maharashtra, India",
    tooltipText: "Gate No. 1403, Pune, Maharashtra, India - 411062",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "65",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    name: "Ocean Vidya",
    email: "abc@gmail.com",
    password: "ocean@123",
    mobileNumber: "9307715948",
    companyName: "Ocean Vidya Pipe Udyog",
    productOrService: "Pipes & Fittings",
    imgSrc: "/assets/pipe3.jpg", // Provide the correct image path
    altText: "Pipes & Fittings - Ocean Vidya Pipe Udyog",
    mainProducts: "Pipes, Fittings, Plumbing Solutions",
    years: "1 YRS",
    location: "Varanasi, India",
    tooltipText: "789 Pipe Lane, Industrial Park, Varanasi, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "85",
    responseRate: "88%",
  },

  {
    _id: "q901234567890abcdef0123", // Random unique ID
    name: "Mitesh Gandhi",
    email: "abc@gmail.com",
    password: "mitesh@123", // Including the password as specified
    mobileNumber: "9920399043",
    companyName: "Miloni International",
    productOrService: "Pipes & Fittings",
    imgSrc: "/assets/fitting.jpeg", // Example image path
    mainProducts: "PVC Pipes, HDPE Pipes, Pipe Fittings, Valves",
    altText: "Pipes & Fittings - Miloni International",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "789 Industrial Zone, Mumbai, India",
    rating: "4.6",
    ratingPercent: "91%",
    ratingsCount: "80",
    responseRate: "95%",
    whatsappConfirmed: true,
  },

  {
    _id: "y789012345678abcdef0123", // Random unique ID
    name: "Praveen Shah",
    email: "abc@gmail.com",
    password: "shah@123", // Including the password as specified
    mobileNumber: "9820234934",
    companyName: "STEELCO METAL AND ALLOYS",
    productOrService: "Steel Pipes",
    imgSrc: "/assets/steelpipe.jpeg", // Example image path
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
    _id: "i789012345678abcdef0123", // Random unique ID
    name: "Arif Khan Pathan",
    email: "arifpathan@gmail.com",
    mobileNumber: "9420903414",
    companyName: "HI-TECH POLYPLAST NAGPUR PVT. LTD.",
    productOrService: "HDPE Pipe",
    imgSrc: "/assets/hdpepipe.jpeg", // Example image path
    mainProducts: "HDPE Pipes, Pipe Fittings, Industrial Pipes",
    altText: "HDPE Pipe - HI-TECH POLYPLAST NAGPUR PVT. LTD.",
    years: "1 YRS",
    location: "Nagpur, India",
    tooltipText: "789 Plastics Complex, Nagpur, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "70",
    responseRate: "95%",
    whatsappConfirmed: true,
  },
  {
    _id: "s1234567890abcdef012345", // Random unique ID
    name: "Atul",
    email: "abc@gmail.com",
    mobileNumber: "9175672448",
    companyName: "VISHWAS SALES CORPORATION",
    productOrService: "Pipes & Fittings",
    imgSrc: "/assets/pipe7.jpeg", // Example image path
    mainProducts: "Pipes, Fittings, Plumbing Supplies",
    altText: "Pipes & Fittings - VISHWAS SALES CORPORATION",
    years: "1 YRS",
    location: "Ahmedabad, India",
    tooltipText: "Sector 9, Industrial Area, Ahmedabad, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "65",
    responseRate: "93%",
    whatsappConfirmed: true,
  },
  {
    name: "Mr. Mustafa Halai",
    email: "mshalai@gmail.com",
    password: "mustafa halai",
    mobileNumber: "9725273753",
    companyName: "M.S HALAI",
    productOrService: "Garden Pipes",
    imgSrc: "/assets/pipe1.jpg", // Provide the correct image path
    altText: "Garden Pipes - M.S HALAI",
    mainProducts: "Garden Hoses, Water Pipes, Irrigation Tubes",
    years: "1 YRS",
    location: "Nagpur, India",
    tooltipText: "789 Garden Lane, Industrial Park, Nagpur, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "85",
    responseRate: "88%",
  },

  {
    _id: "z6789012345a678901",
    name: "Jay Patel",
    email: "jaypatel@gmail.com",
    password: "Jay Patel",
    mobileNumber: "7778999203",
    companyName: "STIBA PIPE & FITTINGS",
    productOrService: "PVC Pipe, UPVC Pipe, All Bibcock & Showers",
    imgSrc: "/assets/pvcpipe.jpeg",
    mainProducts: "PVC Pipes, UPVC Pipes, Bibcocks, Showers, Fittings",
    altText: "Pipe & Fittings - STIBA PIPE & FITTINGS",
    years: "1 YRS",
    location: "Vadodara, Gujarat, India",
    tooltipText: "GIDC, Vadodara, Gujarat, India",
    rating: "4.9",
    ratingPercent: "97%",
    ratingsCount: "200",
    responseRate: "95%",
    whatsappConfirmed: true,
  },

  {
    _id: "a1234567890abc5696",
    name: "Dinesh",
    email: "dinesh@gmsil.com",
    password: "dineshpipes",
    mobileNumber: "9986365209",
    companyName: "Mysore Pipes & Tubes",
    productOrService: "GI pipes",
    imgSrc: "/assets/gipipes.jpeg", // Placeholder for image path
    mainProducts: "GI Pipes, Tubes",
    altText: "Mysore Pipes & Tubes - GI Pipes Manufacturer",
    years: "1 YRS", // Placeholder for years of experience
    location: "Mysore, India", // Placeholder for location
    tooltipText: "Mysore Pipes & Tubes, Mysore, India",
    rating: "4.7", // Placeholder for rating
    ratingPercent: "92%", // Placeholder for rating percentage
    ratingsCount: "110", // Placeholder for ratings count
    responseRate: "88%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    name: "CHETAN",
    email: "RAJISHTHANPIPE154@gmail.com",
    password: "CHETAN 1234",
    mobileNumber: "9327071674",
    companyName: "RAJISHTHAN PIPE",
    productOrService: "RAJISHTHAN PIPE",
    imgSrc: "/assets/pipe4.jpeg",
    mainProducts: "Pipes, Pipe Fittings, Industrial Supplies",
    altText: "RAJISHTHAN PIPE - Pipes",
    years: "8 YRS",
    location: "Ahmedabad, Gujarat, India",
    tooltipText: "RAJISHTHAN PIPE, Ahmedabad, Gujarat",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "95",
    responseRate: "89%",
    whatsappConfirmed: true,
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
    _id: "jaideepbhai-patel-gujarat",
    name: "Jaideepbhai Patel",
    email: "jaideepbhaipatel@gmail.com",
    password: "12345678",
    mobileNumber: "9537251979",
    companyName: "Jaideepbhai Patel",
    productOrService: "Pipe",
    imgSrc: "/assets/pipe11.jpg",
    mainProducts: "Pipes",
    altText: "Jaideepbhai Patel - Pipe",
    years: "1 YRS",
    location: "Gujarat, India",
    tooltipText: "Jaideepbhai Patel, Pipes, Gujarat",
    rating: "4.1",
    ratingPercent: "82%",
    ratingsCount: "25",
    responseRate: "88%",
    whatsappConfirmed: false,
  },
  {
    _id: "mfg-by-oms-industries-surat",
    name: "Sohail Abbasi",
    email: "sohail123@gmail.com",
    password: "Sohail1234",
    mobileNumber: "7060303308",
    companyName: "MFG BY OMs INDUSTRIES",
    productOrService: "pvc pipe",
    imgSrc: "/assets/pvcpipe1.jpg",
    mainProducts: "PVC Pipes",
    altText: "MFG BY OMs INDUSTRIES - PVC Pipe",
    years: "1 YRS",
    location: "Surat, Gujarat, India",
    tooltipText: "MFG BY OMs INDUSTRIES, PVC Pipe, Surat",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "50",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    _id: "mahaveer-wholesaler-surat",
    name: "Mahaveer",
    email: "mahaveer123@gmail.com",
    password: "mahaveer1234",
    mobileNumber: "9671955258",
    companyName: "Mahaveer Wholesaler",
    productOrService: "pvc pipe",
    imgSrc: "/assets/pvcpipe2.jpg",
    mainProducts: "PVC Pipes",
    altText: "Mahaveer Wholesaler - PVC Pipe",
    years: "1 YRS",
    location: "Surat, Gujarat, India",
    tooltipText: "Mahaveer Wholesaler, PVC Pipe, Surat",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "30",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "shree-ram-pump-and-pipe-rajkot",
    name: "Ankita",
    email: "ankita@gmail.com",
    password: "ankitaankita",
    mobileNumber: "9485594855",
    companyName: "Shree Ram Pump and Pipe",
    productOrService: "Submersible Pipes",
    imgSrc: "/assets/pipe13.jpg", // Placeholder image path
    mainProducts: "Submersible Pipes",
    altText: "Shree Ram Pump and Pipe - Submersible Pipes",
    years: "1 YRS", // Random value
    location: "Rajkot, Gujarat, India",
    tooltipText: "Shree Ram Pump and Pipe, Submersible Pipes, Rajkot",
    rating: "4.7", // Random value
    ratingPercent: "93%", // Random value
    ratingsCount: "40", // Random value
    responseRate: "88%", // Random value
    whatsappConfirmed: true,
  },
  {
    _id: "do-bhai-hdpe-pipe-factory-punjab",
    name: "Vishu Tohar",
    email: "DoBhaiHDPEPipeFactory11@gmail.com",
    password: "123456789",
    mobileNumber: "9466914580",
    companyName: "Do Bhai HDPE Pipe Factory",
    productOrService: "Manufacturer",
    imgSrc: "/assets/hdpe2.jpg", // Placeholder image path
    mainProducts: "HDPE Pipes",
    altText: "Do Bhai HDPE Pipe Factory - Manufacturer",
    years: "1 YRS", // Random value
    location: "Punjab, Punjab, India",
    tooltipText: "Do Bhai HDPE Pipe Factory, Manufacturer, Punjab",
    rating: "4.7", // Random value
    ratingPercent: "92%", // Random value
    ratingsCount: "28", // Random value
    responseRate: "88%", // Random value
    whatsappConfirmed: true,
  },
  {
    _id: "dinesh-tamil-nadu",
    name: "dinesh",
    email: "dinesh@gmail.com",
    password: "12345678",
    mobileNumber: "9715904611",
    companyName: "dinesh",
    statename: "Tamil Nadu",
    cityname: "Tamil Nadu",
    productOrService: "pipe",
    imgSrc: "/assets/dinesh-pipe.jpg",
    mainProducts: "Pipes",
    altText: "dinesh - Pipes",
    years: "1 YRS",
    location: "Tamil Nadu, India",
    tooltipText: "dinesh - Pipe Manufacturer",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "125",
    responseRate: "89%",
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const Pipes = () => {
  return (
    <div className="main-box">
      <aside>
        <div className="flt-box-wrap">
          <div className="flt-box mb-0 flt-head">Filters By</div>
          <div className="flt-box bdrt-0">
            <p className="flt-title">Pipe Categories</p>
            <div className="flt-content">
              <ul className="flt-list cust-scroll">
                <li>
                  <Link to="#">PVC Pipes</Link>
                </li>
                <li>
                  <Link to="#">CPVC Pipes</Link>
                </li>
                <li>
                  <Link to="#">UPVC Pipes</Link>
                </li>
                <li>
                  <Link to="#">HDPE Pipes</Link>
                </li>
                <li>
                  <Link to="#">Metal Pipes</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flt-box">
            <p className="flt-title">By Location</p>
            <div className="flt-content">
              <div className="flt-search">
                <input
                  type="text"
                  name="location_id"
                  placeholder="Search Location"
                  id="location-search-input"
                />
              </div>
              <ul className="flt-list cust-scroll" id="location-lists">
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
                      src="/assets/pipe8.jpeg"
                      width={55}
                      height={55}
                      alt="PVC Pipes"
                    />
                  </figure>
                  <p className="title">PVC Pipes</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/pipe9.jpeg"
                      width={55}
                      height={55}
                      alt="CPVC Pipes"
                    />
                  </figure>
                  <p className="title">CPVC Pipes</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/pipe10.jpeg"
                      width={55}
                      height={55}
                      alt="UPVC Pipes"
                    />
                  </figure>
                  <p className="title">UPVC Pipes</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/pipe12.jpeg"
                      width={55}
                      height={55}
                      alt="HDPE Pipes"
                    />
                  </figure>
                  <p className="title">HDPE Pipes</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/pipe14.jpeg"
                      width={55}
                      height={55}
                      alt="Metal Pipes"
                    />
                  </figure>
                  <p className="title">Metal Pipes</p>
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

export default Pipes;
