import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    _id: "667bb8e29644befaa9547ffa",
    name: "Singh sports and fitness company",
    email: "singhsports@gmail.com",
    mobileNumber: "8439068353",
    companyName: "Singh sports and fitness company",
    productOrService: "Gym Equipments",
    imgSrc: "/assets/gyms.jpeg", // You need to provide the correct image path
    mainProducts: "Treadmills, Weight Training Machines, Exercise Bikes",
    altText: "Gym Equipments - Singh sports and fitness company",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "456 Fitness Plaza, Connaught Place, Delhi, India",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "150",
    responseRate: "98%",
  },
  {
    _id: "c4d5e6f7g8h9i0123456789a", // Random unique ID
    name: "Bhavin",
    email: "bhavin12@gmail.com",
    password: "bhavin 123456", // Including the password as specified
    mobileNumber: "9310337842",
    companyName: "Jai Shree Ram Rubber",
    productOrService: "Gym Mat",
    imgSrc: "/assets/gymmate.jpeg", // Example image path
    mainProducts: "Gym Mats, Rubber Flooring, Exercise Mats",
    altText: "Gym Mat - Jai Shree Ram Rubber",
    years: "1 YRS",
    location: "Gurgaon, India",
    tooltipText: "456 Rubber Street, Gurgaon, India",
    rating: "4.4",
    ratingPercent: "89%",
    ratingsCount: "60",
    responseRate: "93%",
  },

  {
    name: "P P Singh",
    email: "ppsingh12@gmail.com",
    mobileNumber: "9306290881",
    companyName: "Bhugra Interior",
    productOrService: "Gym Mats",
    imgSrc: "/assets/gym6.jpeg", // Provide the correct image path
    altText: "Gym Mats - Bhugra Interior",
    mainProducts:
      "Rubber Gym Mats, Foam Gym Mats, Interlocking Gym Mats,Exercise Mats",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "789 Fitness Avenue, Health Zone, Delhi, India",
    rating: "4.7",
    ratingPercent: "95%",
    ratingsCount: "120",
    responseRate: "92%",
  },
  {
    name: "RD Khan",
    email: "RDkhan12@gmail.com",
    mobileNumber: "9029721100",
    companyName: "Rich Décor",
    productOrService: "Gym Mats, Curtains",
    imgSrc: "/assets/gym7.jpeg", // Provide the correct image path
    altText: "Gym Mats and Curtains - Rich Décor",
    mainProducts:
      "Rubber Gym Mats, Foam Gym Mats, Interlocking Gym Mats, Decorative Curtains, Blackout Curtains, Sheer Curtains",
    years: "1 YRS",
    location: "Jaipur, Rajasthan, India",
    tooltipText:
      "123 Decor Street, Home Improvement Area, Jaipur, Rajasthan, India",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "150",
    responseRate: "94%",
  },
  {
    _id: "impulse-fitness-jaipur",
    name: "Suresh",
    email: "abc@gmail.com",
    password: "sure@123",
    mobileNumber: "6377723780",
    companyName: "Impulse Fitness",
    statename: "Rajasthan",
    cityname: "Jaipur",
    productOrService: "Fitness mats and equipments",
    imgSrc: "/assets/implse-fitness.jpg",
    mainProducts: "Fitness mats, equipments",
    altText: "Impulse Fitness - Jaipur",
    years: "1 YRS",
    location: "Jaipur, Rajasthan",
    tooltipText: "Impulse Fitness, Jaipur",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "120",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
];

const GymEquipmentsSupplier = () => {
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
                  <Link to="#">Treadmills</Link>
                </li>
                <li>
                  <Link to="#">Weight Training Machines</Link>
                </li>
                <li>
                  <Link to="#">Exercise Bikes</Link>
                </li>
                <li>
                  <Link to="#">Gym Accessories</Link>
                </li>
                <li>
                  <Link to="#">Yoga Mats</Link>
                </li>
                <li>
                  <Link to="#">Fitness Trackers</Link>
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
                  <Link to="#">Uttar Pradesh</Link>
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
                      src="/assets/gym1.jpeg"
                      width={55}
                      height={55}
                      alt="Treadmills"
                    />
                  </figure>
                  <p className="title">Treadmills</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/gym2.jpg"
                      width={55}
                      height={55}
                      alt="Weight Training Machines"
                    />
                  </figure>
                  <p className="title">Weight Training Machines</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/gym3.jpeg"
                      width={55}
                      height={55}
                      alt="Exercise Bikes"
                    />
                  </figure>
                  <p className="title">Exercise Bikes</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/gym4.jpeg"
                      width={55}
                      height={55}
                      alt="Gym Accessories"
                    />
                  </figure>
                  <p className="title">Gym Accessories</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/gym5.jpeg"
                      width={55}
                      height={55}
                      alt="Yoga Mats"
                    />
                  </figure>
                  <p className="title">Yoga Mats</p>
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

export default GymEquipmentsSupplier;
