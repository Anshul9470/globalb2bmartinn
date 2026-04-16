import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    name: "Iqbal",
    email: "abc@gmail.com",
    mobileNumber: "9829497469",
    companyName: "Iqbal",
    productOrService: "Kesar Mango and Tender Coconut",
    imgSrc: "/assets/mango2.jpg",
    mainProducts: "Kesar Mangoes, Tender Coconut, Fresh Fruits",
    altText: "Iqbal - Kesar Mango and Tender Coconut",
    years: "1 YRS",
    location: "Gujarat, India",
    statename: "Gujarat",
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
    imgSrc: "/assets/fruits.jpeg",
    altText: "Fruits - Mahalaxmi Fruit Supplier",
    mainProducts: "Apples, Oranges, Bananas, Grapes",
    years: "1 YRS",
    location: "Gujarat, India",
    statename: "Gujarat",
    tooltipText: "Bhuj, Kutch, Gujarat, India",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "200",
    responseRate: "99%",
  },
  {
    name: "KGF",
    email: "kgf@gmail.com",
    mobileNumber: "9510841827",
    companyName: "KGF Vegetable and Fruits",
    productOrService: "Fruits and Vegetables",
    imgSrc: "/assets/fruit2.jpeg",
    mainProducts: "Fresh Vegetables, Organic Fruits, Seasonal Produce",
    altText: "Fruits and Vegetables - KGF Vegetable and Fruits",
    years: "1 YRS",
    location: "Bangalore, Karnataka, India",
    statename: "Karnataka",
    tooltipText: "Sector 9, Wholesale Market, Bangalore, Karnataka, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "60",
    responseRate: "87%",
    whatsappConfirmed: true,
  },
  {
    name: "Himesh",
    email: "himesherrr1324@gmail.com",
    mobileNumber: "6367556906",
    companyName: "The Veg Mart",
    productOrService: "Fruits and Vegetables",
    imgSrc: "/assets/fruit3.jpeg",
    mainProducts: "Fresh Fruits, Organic Vegetables, Seasonal Produce, Herbs",
    altText: "Fruits and Vegetables - The Veg Mart",
    years: "1 YRS",
    location: "Bangalore, India",
    statename: "Karnataka",
    tooltipText: "123 Green Market, Bangalore, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "72",
    responseRate: "95%",
    whatsappConfirmed: true,
  },
  {
    name: "Javed",
    email: "javed123@gmail.com",
    mobileNumber: "8944898563",
    companyName: "Fruits Plant Nursery",
    productOrService: "Fruits Plant Nursery",
    imgSrc: "/assets/fruit4.jpeg",
    mainProducts: "Fruit Plants, Saplings, Grafted Plants",
    altText: "Fruits Plant Nursery",
    years: "1 YRS",
    location: "Lucknow, Uttar Pradesh, India",
    statename: "Uttar Pradesh",
    tooltipText: "Gomti Nagar, Lucknow, Uttar Pradesh, India",
    rating: "4.5",
    ratingPercent: "91%",
    ratingsCount: "75",
    responseRate: "87%",
    whatsappConfirmed: true,
  },
  {
    name: "Muhammed Ismail",
    email: "muhammedismail@gmail.com",
    mobileNumber: "8078561095",
    companyName: "Muhammed Ismail",
    productOrService: "Fruit Pulp",
    imgSrc: "/assets/pulp1.jpeg",
    mainProducts: "Mango Pulp, Guava Pulp, Papaya Pulp, Mixed Fruit Pulp",
    altText: "Fruit Pulp - Muhammed Ismail",
    years: "1 YRS",
    location: "Kerala, India",
    statename: "Kerala",
    tooltipText: "15 Fruit Lane, Kerala, India",
    rating: "4.4",
    ratingPercent: "89%",
    ratingsCount: "50",
    responseRate: "91%",
    whatsappConfirmed: true,
  },
  {
    name: "Ahammed Thottungal",
    email: "hiqagro@gmail.com",
    mobileNumber: "9846818133",
    companyName: "Hiq",
    productOrService: "Frozen Fruit Blend",
    imgSrc: "/assets/fruit5.jpeg",
    mainProducts: "Frozen Mixed Berries, Tropical Fruit Blends, Frozen Smoothie Mixes",
    altText: "Frozen Fruit Blend - Hiq",
    years: "1 YRS",
    location: "Kozhikode, India",
    statename: "Kerala",
    tooltipText: "88 Fruit Cold Storage, Kozhikode, India",
    rating: "4.7",
    ratingPercent: "93%",
    ratingsCount: "68",
    responseRate: "94%",
    whatsappConfirmed: true,
  },
  {
    name: "Rizwan",
    email: "rizwan@gmail.com",
    mobileNumber: "9622544284",
    companyName: "Jahangir Ahmad Bhat",
    productOrService: "Apples",
    imgSrc: "/assets/apple2.jpeg",
    mainProducts: "Apple, Kashmiri Curtains, Abaaya",
    altText: "Jahangir Ahmad Bhat - Apple",
    years: "1 YRS",
    location: "Baramula, Jammu and Kashmir, India",
    statename: "Jammu and Kashmir",
    tooltipText: "Jahangir Ahmad Bhat, Baramula, Jammu and Kashmir",
    rating: "4.6",
    ratingPercent: "90%",
    ratingsCount: "78",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    name: "Tippu",
    email: "abc@gmail.com",
    mobileNumber: "8050995856",
    companyName: "Tippu",
    productOrService: "Raw Coconut",
    imgSrc: "/assets/cocout1.jpg",
    mainProducts: "Raw Coconut",
    altText: "Tippu - Raw Coconut Supplier",
    years: "1 YRS",
    location: "Banglore, Karnataka",
    statename: "Karnataka",
    tooltipText: "Tippu, Banglore - Raw Coconut Supplier",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "65",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    name: "Ishwar Bongane",
    email: "ishwarbangone@gmail.com",
    mobileNumber: "9393199696",
    companyName: "Rajmudra",
    productOrService: "Banana",
    imgSrc: "/assets/banana1.jpeg",
    mainProducts: "Banana",
    altText: "Rajmudra - Banana",
    years: "1 YRS",
    location: "Indapur dist Pune, Maharashtra, India",
    statename: "Maharashtra",
    tooltipText: "Rajmudra, Indapur dist Pune, Maharashtra",
    rating: "4.7",
    ratingPercent: "92%",
    ratingsCount: "85",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
  {
    name: "Arun",
    email: "newbeginglobaltraders@gmail.com",
    mobileNumber: "9443607613",
    companyName: "New Beginning Global Traders",
    productOrService: "Fruits",
    imgSrc: "/assets/fruit6.jpg",
    mainProducts: "Fruits",
    altText: "New Beginning Global Traders - Fruits",
    years: "1 YRS",
    location: "Nagercoil, Tamilnadu, India",
    statename: "Tamil Nadu",
    tooltipText: "New Beginning Global Traders, Fruits, Nagercoil",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "30",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    name: "Ranjithkumar S",
    email: "karthiranjith3118@gmail.com",
    mobileNumber: "9698949593",
    companyName: "Ranjith import and export Pvt.Ltd",
    productOrService: "Coconut",
    imgSrc: "/assets/cocnut1.jpg",
    mainProducts: "Coconut",
    altText: "Ranjith import and export Pvt.Ltd - Coconut",
    years: "1 YRS",
    location: "Pollachi, Tamil Nadu, India",
    statename: "Tamil Nadu",
    tooltipText: "Ranjith import and export Pvt.Ltd, Coconut, Pollachi",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "30",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    name: "Hinal Patel",
    email: "hinalpatel@gmail.com",
    mobileNumber: "9428878610",
    companyName: "Hinal Patel",
    productOrService: "Dragon Fruit Plant",
    imgSrc: "/assets/dragonplant.jpg",
    mainProducts: "Dragon Fruit Plant",
    altText: "Hinal Patel - Dragon Fruit Plant",
    years: "1 YRS",
    location: "Vadodra, Gujarat, India",
    statename: "Gujarat",
    tooltipText: "Hinal Patel, Dragon Fruit Plant, Vadodra",
    rating: "4.6",
    ratingPercent: "91%",
    ratingsCount: "35",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
];

// All unique states from the data
const allStates = ["All India", "Gujarat", "Maharashtra", "Karnataka", "Kerala", "Uttar Pradesh", "Tamil Nadu", "Jammu and Kashmir"];

// Category filter keywords
const categories = [
  { label: "Apples", keyword: "apple" },
  { label: "Oranges", keyword: "orange" },
  { label: "Bananas", keyword: "banana" },
  { label: "Mangoes", keyword: "mango" },
  { label: "Coconut", keyword: "coconut" },
  { label: "Fruits", keyword: "fruit" },
];

const FruitComponents = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedState, setSelectedState] = useState("All India");
  const [stateSearch, setStateSearch] = useState("");

  // Filter suppliers based on selected category and state
  const filteredData = useMemo(() => {
    return classifiedData.filter((item) => {
      const matchesCategory = selectedCategory
        ? item.productOrService.toLowerCase().includes(selectedCategory) ||
          item.mainProducts.toLowerCase().includes(selectedCategory)
        : true;

      const matchesState =
        selectedState === "All India"
          ? true
          : item.statename?.toLowerCase() === selectedState.toLowerCase() ||
            item.location?.toLowerCase().includes(selectedState.toLowerCase());

      return matchesCategory && matchesState;
    });
  }, [selectedCategory, selectedState]);

  // States filtered by search input
  const filteredStates = allStates.filter((s) =>
    s.toLowerCase().includes(stateSearch.toLowerCase())
  );

  const handleCategoryClick = (keyword) => {
    setSelectedCategory(selectedCategory === keyword ? null : keyword);
  };

  const handleStateClick = (state) => {
    setSelectedState(state);
  };

  const handleReset = () => {
    setSelectedCategory(null);
    setSelectedState("All India");
    setStateSearch("");
  };

  return (
    <div className="main-box">
      <aside>
        <div className="flt-box-wrap">
          <div className="flt-box mb-0 flt-head">Filters By</div>

          {/* Category Filter */}
          <div className="flt-box bdrt-0">
            <p className="flt-title">Related Categories</p>
            <div className="flt-content">
              <ul className="flt-list cust-scroll">
                {categories.map((cat) => (
                  <li key={cat.keyword}>
                    <Link
                      to="#"
                      onClick={(e) => { e.preventDefault(); handleCategoryClick(cat.keyword); }}
                      style={{
                        color: selectedCategory === cat.keyword ? "#007bff" : "",
                        fontWeight: selectedCategory === cat.keyword ? "700" : "400",
                      }}
                    >
                      {cat.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* State Filter */}
          <div className="flt-box">
            <p className="flt-title">By State</p>
            <div className="flt-content">
              <div className="flt-search">
                <input
                  type="text"
                  name="state_id"
                  placeholder="Search State"
                  id="state-search-input"
                  value={stateSearch}
                  onChange={(e) => setStateSearch(e.target.value)}
                />
              </div>
              <ul className="flt-list cust-scroll" id="state-lists">
                {filteredStates.map((state) => (
                  <li key={state}>
                    <Link
                      to="#"
                      onClick={(e) => { e.preventDefault(); handleStateClick(state); }}
                      style={{
                        color: selectedState === state ? "#007bff" : "",
                        fontWeight: selectedState === state ? "700" : "400",
                      }}
                    >
                      {state}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Reset Filter Button */}
          {(selectedCategory || selectedState !== "All India") && (
            <div className="flt-box" style={{ borderTop: "1px solid #eee", paddingTop: "10px" }}>
              <button
                onClick={handleReset}
                style={{
                  width: "100%",
                  padding: "8px",
                  background: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: "600",
                }}
              >
                ✕ Reset Filters
              </button>
            </div>
          )}
        </div>
      </aside>

      <main>
        <section className="section">
          <p className="sect-title">Explore by Categories</p>
          <div className="horprd expcatg" id="expcatg">
            {categories.map((cat) => (
              <div
                className="item"
                key={cat.keyword}
                onClick={() => handleCategoryClick(cat.keyword)}
                style={{ cursor: "pointer" }}
              >
                <div
                  className="horprd-box"
                  style={{
                    border: selectedCategory === cat.keyword ? "2px solid #007bff" : "",
                    borderRadius: "8px",
                  }}
                >
                  <figure>
                    <img
                      src={`/assets/${cat.keyword === "apple" ? "apple1.jpeg" : cat.keyword === "orange" ? "oranges.jpeg" : cat.keyword === "banana" ? "banana.jpeg" : cat.keyword === "mango" ? "mango.jpeg" : cat.keyword === "coconut" ? "cocout1.jpg" : "fruits.jpeg"}`}
                      width={55}
                      height={55}
                      alt={cat.label}
                    />
                  </figure>
                  <p className="title">{cat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Active Filter Info */}
          {(selectedCategory || selectedState !== "All India") && (
            <div style={{ padding: "8px 0", fontSize: "13px", color: "#555" }}>
              Showing {filteredData.length} result(s)
              {selectedCategory && <span style={{ marginLeft: "8px", background: "#e8f0fe", color: "#007bff", padding: "2px 8px", borderRadius: "12px" }}>{selectedCategory}</span>}
              {selectedState !== "All India" && <span style={{ marginLeft: "6px", background: "#e8f0fe", color: "#007bff", padding: "2px 8px", borderRadius: "12px" }}>{selectedState}</span>}
            </div>
          )}
        </section>

        <ul className="classfied-wrap">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <li key={index}>
                <div className="classified">
                  <div className="prd-info">
                    <div className="prd-box">
                      <img src={item.imgSrc} alt={item.altText} width={250} height={250} />
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
                          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi-location" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                          </svg>
                          {item.location}
                          <span className="tooltiptext">{item.tooltipText}</span>
                        </p>
                        <div className="rating-wrap">
                          <span className="rtbox">{item.rating}</span>
                          <span className="crate" style={{ "--_score": item.ratingPercent }} />
                          <span className="rate-text">{item.ratingsCount} Ratings</span>
                        </div>
                      </div>
                    </div>
                    <div className="caddit">
                      <div className="item">
                        <div className="ca-box">
                          <p><i className="l3icon resp-icon" /></p>
                          <p><span>Response Rate</span> <b>{item.responseRate}</b></p>
                        </div>
                        <p><span>Main Products</span> <b>{item.mainProducts}</b></p>
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
            ))
          ) : (
            <li style={{ padding: "40px", textAlign: "center", color: "#888", fontSize: "15px" }}>
              No suppliers found for the selected filters.
              <br />
              <button onClick={handleReset} style={{ marginTop: "12px", padding: "8px 20px", background: "#007bff", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                Clear Filters
              </button>
            </li>
          )}
        </ul>
      </main>
    </div>
  );
};

export default FruitComponents;
