import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    name: "Iqbal",
    email: "abc@gmail.com",
    password: "iqbal@123",
    mobileNumber: "9829497469",
    companyName: "Iqbal",
    productOrService: "Kesar Mango and Tender Coconut",
    imgSrc: "/assets/mango2.jpg",
    mainProducts: "Kesar Mangoes, Tender Coconut, Fresh Fruits",
    altText: "Iqbal - Kesar Mango and Tender Coconut",
    years: "1 YRS",
    location: "Gujarat, India",
    tooltipText: "Iqbal, Gujarat",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "100",
    responseRate: "89%",
    whatsappConfirmed: true,
  },

  {
    name: "Vishram S Gadhvi",
    email: "mahalaxmitrader@gmail.com",
    mobileNumber: "9712865242",
    companyName: "Mahalaxmi Fruit Supplier",
    productOrService: "Fruits",
    imgSrc: "/assets/fruits.jpeg", // Provide the correct image path
    altText: "Fruits - Mahalaxmi Fruit Supplier",
    mainProducts: "Apples, Oranges, Bananas, Grapes",
    years: "1 YRS",
    location: "Gujarat, India",
    tooltipText: "Bhuj, Kutch, Gujarat, India",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "200",
    responseRate: "99%",
  },
  {
    _id: "c1234567890d012347",
    name: "KGF",
    email: "kgf@gmail.com",
    password: "kgf vegetable and fruits",
    mobileNumber: "9510841827",
    companyName: "KGF Vegetable and Fruits",
    productOrService: "Fruits and Vegetables",
    imgSrc: "/assets/fruit2.jpeg",
    mainProducts: "Fresh Vegetables, Organic Fruits, Seasonal Produce",
    altText: "Fruits and Vegetables - KGF Vegetable and Fruits",
    years: "1 YRS",
    location: "Bangalore, Karnataka, India",
    tooltipText: "Sector 9, Wholesale Market, Bangalore, Karnataka, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "60",
    responseRate: "87%",
    whatsappConfirmed: true,
  },
  {
    _id: "p1q2r3s4t5u6v7w8x9y0z1a2", // Random unique ID
    name: "Himesh",
    email: "himesherrr1324@gmail.com",
    mobileNumber: "6367556906",
    companyName: "The Veg Mart",
    productOrService: "Fruits and Vegetables",
    imgSrc: "/assets/fruit3.jpeg", // Example image path
    mainProducts: "Fresh Fruits, Organic Vegetables, Seasonal Produce, Herbs",
    altText: "Fruits and Vegetables - The Veg Mart",
    years: "1 YRS",
    location: "Bangalore, India",
    tooltipText: "123 Green Market, Bangalore, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "72",
    responseRate: "95%",
    whatsappConfirmed: true,
  },
  {
    _id: "g7894269057h901245",
    name: "Javed",
    email: "javed123@gmail.com",
    password: "javed1234",
    mobileNumber: "8944898563",
    companyName: "Fruits Plant Nursery",
    productOrService: "Fruits Plant Nursery",
    imgSrc: "/assets/fruit4.jpeg",
    mainProducts: "Fruit Plants, Saplings, Grafted Plants",
    altText: "Fruits Plant Nursery - Fruits Plant Nursery",
    years: "1 YRS",
    location: "Lucknow, Uttar Pradesh, India",
    tooltipText: "Gomti Nagar, Lucknow, Uttar Pradesh, India",
    rating: "4.5",
    ratingPercent: "91%",
    ratingsCount: "75",
    responseRate: "87%",
    whatsappConfirmed: true,
  },
  {
    _id: "t5u6v7w8x9y0z1a2b3c4d5e6", // Random unique ID
    name: "Muhammed Ismail",
    email: "www.muhammedismail26012000@gmail.com",
    mobileNumber: "8078561095",
    companyName: "Muhammed Ismail",
    productOrService: "Fruit Pulp",
    imgSrc: "/assets/pulp1.jpeg", // Example image path
    mainProducts: "Mango Pulp, Guava Pulp, Papaya Pulp, Mixed Fruit Pulp",
    altText: "Fruit Pulp - Muhammed Ismail",
    years: "1 YRS",
    location: "Kerala, India",
    tooltipText: "15 Fruit Lane, Kerala, India",
    rating: "4.4",
    ratingPercent: "89%",
    ratingsCount: "50",
    responseRate: "91%",
    whatsappConfirmed: true,
  },
  {
    _id: "v8w9x0y1z2a3b4c5d6e7f8g9", // Random unique ID
    name: "Ahammed Thottungal",
    email: "hiqagro@gmail.com",
    mobileNumber: "9846818133",
    companyName: "Hiq",
    productOrService: "Frozen Fruit Blend",
    imgSrc: "/assets/fruit5.jpeg", // Example image path
    mainProducts:
      "Frozen Mixed Berries, Tropical Fruit Blends, Frozen Smoothie Mixes, Fruit Purees",
    altText: "Frozen Fruit Blend - Hiq",
    years: "1 YRS",
    location: "Kozhikode, India",
    tooltipText: "88 Fruit Cold Storage, Kozhikode, India",
    rating: "4.7",
    ratingPercent: "93%",
    ratingsCount: "68",
    responseRate: "94%",
    whatsappConfirmed: true,
  },
  {
    _id: "b1234567890jahangir-ahmad-bhat",
    name: "Rizwan",
    email: "rizwan@gmail.com",
    password: "rizwanapple",
    mobileNumber: "9622544284",
    companyName: "Jahangir Ahmad Bhat",
    productOrService: "Apple, Kashmiri Curtains, Abaaya",
    imgSrc: "/assets/apple2.jpeg",
    mainProducts: "Apple, Kashmiri Curtains, Abaaya",
    altText: "Jahangir Ahmad Bhat - Apple, Kashmiri Curtains, Abaaya",
    years: "1 YRS",
    location: "Baramula, Jammu and Kashmir, India",
    tooltipText: "Jahangir Ahmad Bhat, Baramula, Jammu and Kashmir",
    rating: "4.6",
    ratingPercent: "90%",
    ratingsCount: "78",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "tippu-banglore-karnataka",
    name: "Tippu",
    email: "abc@gmail.com",
    password: "tippu123",
    mobileNumber: "8050995856",
    companyName: "Tippu",
    statename: "Karnataka",
    cityname: "Banglore",
    productOrService: "Raw Coconut",
    imgSrc: "/assets/cocout1.jpg",
    mainProducts: "Raw Coconut",
    altText: "Tippu - Raw Coconut Supplier in Banglore",
    years: "1 YRS",
    location: "Banglore, Karnataka",
    tooltipText: "Tippu, Banglore - Raw Coconut Supplier",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "65",
    responseRate: "90%",
    whatsappConfirmed: true,
  },

  {
    _id: "b1234567890rajmudra",
    name: "Ishwar Bongane",
    email: "ishwarbangone@gmail.com",
    password: "0987654321",
    mobileNumber: "9393199696",
    companyName: "Rajmudra",
    productOrService: "Banana",
    imgSrc: "/assets/banana1.jpeg",
    mainProducts: "Banana",
    altText: "Rajmudra - Banana",
    years: "1 YRS",
    location: "Indapur dist Pune, Maharashtra, India",
    tooltipText: "Rajmudra, Indapur dist Pune, Maharashtra",
    rating: "4.7",
    ratingPercent: "92%",
    ratingsCount: "85",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
  {
    _id: "newbeginglobaltraders-nagercoil",
    name: "Arun",
    email: "newbeginglobaltraders@gmail.com",
    password: "9443607613",
    mobileNumber: "9443607613",
    companyName: "New Beginning Global Traders",
    productOrService: "Fruits",
    imgSrc: "/assets/fruit6.jpg",
    mainProducts: "Fruits",
    altText: "New Beginning Global Traders - Fruits",
    years: "1 YRS",
    location: "Nagercoil, Tamilnadu, India",
    tooltipText: "New Beginning Global Traders, Fruits, Nagercoil",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "30",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    _id: "ranjithkumar-s-ranjith-import-and-export-pvt-ltd-pollachi",
    name: "Ranjithkumar S",
    email: "karthiranjith3118@gmail.com",
    password: "9698949593",
    mobileNumber: "9698949593",
    companyName: "Ranjith import and export Pvt.Ltd",
    productOrService: "Coconut",
    imgSrc: "/assets/cocnut1.jpg",
    mainProducts: "Coconut",
    altText: "Ranjith import and export Pvt.Ltd - Coconut",
    years: "1 YRS",
    location: "Pollachi, Tamil Nadu, India",
    tooltipText: "Ranjith import and export Pvt.Ltd, Coconut, Pollachi",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "30",
    responseRate: "85%",
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

  // Add more items if needed
];

const FruitComponents = () => {
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
                  <Link to="#">Apples</Link>
                </li>
                <li>
                  <Link to="#">Oranges</Link>
                </li>
                <li>
                  <Link to="#">Bananas</Link>
                </li>
                <li>
                  <Link to="#">Grapes</Link>
                </li>
                <li>
                  <Link to="#">Mangoes</Link>
                </li>
                <li>
                  <Link to="#">Berries</Link>
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
                  <Link to="#">Gujarat</Link>
                </li>
                <li>
                  <Link to="#">Maharashtra</Link>
                </li>
                <li>
                  <Link to="#">Karnataka</Link>
                </li>
                <li>
                  <Link to="#">Punjab</Link>
                </li>
                <li>
                  <Link to="#">Uttar Pradesh</Link>
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
                      src="/assets/apple1.jpeg"
                      width={55}
                      height={55}
                      alt="Apples"
                    />
                  </figure>
                  <p className="title">Apples</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/oranges.jpeg"
                      width={55}
                      height={55}
                      alt="Oranges"
                    />
                  </figure>
                  <p className="title">Oranges</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/banana.jpeg"
                      width={55}
                      height={55}
                      alt="Bananas"
                    />
                  </figure>
                  <p className="title">Bananas</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/grapes.jpeg"
                      width={55}
                      height={55}
                      alt="Grapes"
                    />
                  </figure>
                  <p className="title">Grapes</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/mango.jpeg"
                      width={55}
                      height={55}
                      alt="Mangoes"
                    />
                  </figure>
                  <p className="title">Mangoes</p>
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

export default FruitComponents;
