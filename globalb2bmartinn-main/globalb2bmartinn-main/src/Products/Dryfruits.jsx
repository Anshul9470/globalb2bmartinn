import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faStar, 
  faMapMarkerAlt, 
  faCheckCircle, 
  faSearch, 
  faFilter
} from "@fortawesome/free-solid-svg-icons";
import "./MarketplacePremium.css";

const classifiedData = [
  {
    name: "Adil Qadri",
    companyName: "LIDDER ENTERPRISES",
    productOrService: "Dry Fruits Manufacturer",
    imgSrc: "/assets/dryfruits.jpeg",
    mainProducts: "Almonds, Walnuts, Cashews, Pistachios",
    years: "1 YRS",
    location: "Srinagar, Jammu & Kashmir",
    rating: "4.8",
  },
  {
    name: "Varad Ramesh Higmire",
    companyName: "Varad Sales Corporation",
    productOrService: "Brown Raisins",
    imgSrc: "/assets/brownraisins1.jpeg",
    mainProducts: "Brown Raisins, Premium Dry Fruits",
    years: "1 YRS",
    location: "Nashik, Maharashtra",
    rating: "4.3",
  },
  {
    name: "Raj Gupta",
    companyName: "Shyam Enterprises",
    productOrService: "Groundnut Specialist",
    imgSrc: "/assets/peanut.jpeg",
    mainProducts: "Groundnut, Peanuts, Nut Kernels",
    years: "1 YRS",
    location: "Rajkot, Gujarat",
    rating: "4.6",
  },
  {
    name: "Tuka Ram More",
    companyName: "Honeybijapur Raisins",
    productOrService: "Raisins Supplier",
    imgSrc: "/assets/groundnut.jpeg",
    mainProducts: "Groundnut, Raisins, Dry Fruits",
    years: "1 YRS",
    location: "Bijapur, Karnataka",
    rating: "4.6",
  },
  {
    name: "Akash Kandula",
    companyName: "Akash Enterprise",
    productOrService: "Nut Wholesaler",
    imgSrc: "/assets/dry5.jpeg",
    mainProducts: "Almonds, Cashews, Pistachios, Raisins, Dates",
    years: "1 YRS",
    location: "Hyderabad, Telangana",
    rating: "4.6",
  },
  {
    name: "Sanjay",
    companyName: "Ashirwad Agro Products",
    productOrService: "Cashew Processor",
    imgSrc: "/assets/cashew.jpeg",
    mainProducts: "Cashew Nuts, Premium Dried Fruits",
    years: "1 YRS",
    location: "Mumbai, Maharashtra",
    rating: "4.2",
  },
  {
    name: "Mr. Selva Kumar Sakthivel",
    companyName: "SSR Cashews",
    productOrService: "Cashew Exporter",
    imgSrc: "/assets/cashew4.jpg",
    mainProducts: "High-Quality Cashew Nuts, W320, W240, Pathai Cashews",
    years: "1 YRS",
    location: "Cuddalore, Tamil Nadu",
    rating: "4.9",
  },
];

const INDIAN_STATES = [
  "Jammu & Kashmir", "Maharashtra", "Gujarat", "Karnataka", "Telangana", "Tamil Nadu",
  "Rajasthan", "Delhi", "Punjab", "West Bengal"
];

const Dryfruits = () => {
  const [selectedCats, setSelectedCats] = useState([]);
  const [locationQuery, setLocationQuery] = useState("");
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredData, setFilteredData] = useState(classifiedData);
  const [activeChip, setActiveChip] = useState("All");

  const handleCatChange = (cat) => {
    setSelectedCats(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const handleApplyFilters = () => {
    let result = [...classifiedData];

    if (selectedCats.length > 0) {
      result = result.filter(item => 
        selectedCats.some(c => 
          item.mainProducts.toLowerCase().includes(c.toLowerCase())
        )
      );
    }

    if (locationQuery) {
      const query = locationQuery.toLowerCase();
      result = result.filter(item => 
        item.location.toLowerCase().includes(query)
      );
    }

    setFilteredData(result);
  };

  const resetFilters = () => {
    setSelectedCats([]);
    setLocationQuery("");
    setFilteredData(classifiedData);
    setActiveChip("All");
  };

  const handleCategoryChip = (cat) => {
    setActiveChip(cat);
    if (cat === "All") { resetFilters(); return; }
    const result = classifiedData.filter(item =>
      item.mainProducts.toLowerCase().includes(cat.toLowerCase())
    );
    setFilteredData(result);
  };

  const dryFruitCategories = [
    { label: "All",        img: "/assets/dryfruits.jpeg" },
    { label: "Cashews",    img: "/assets/cashew.jpeg" },
    { label: "Almonds",    img: "/assets/dry1.jpg" },
    { label: "Walnuts",    img: "/assets/dry2.jpg" },
    { label: "Raisins",    img: "/assets/raisins.jpg" },
  ];

  return (
    <div className="marketplace-container">
      <div className="marketplace-layout">
        <aside className="filters-sidebar">
          <div className="sidebar-header">
            <div className="header-title">
              <FontAwesomeIcon icon={faFilter} />
              <h2>Filters</h2>
            </div>
            <button className="reset-link" onClick={resetFilters}>Reset</button>
          </div>

          <div className="filter-group-container">
            <div className="filter-group">
              <label className="filter-label">Nut Type</label>
              <div className="checkbox-group">
                {["Almond", "Cashew", "Walnut", "Pistachio", "Raisin", "Peanut"].map(type => (
                  <label key={type} className="checkbox-item">
                    <input 
                      type="checkbox" 
                      checked={selectedCats.includes(type)}
                      onChange={() => handleCatChange(type)}
                    /> <span>{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <label className="filter-label">Origin / Location</label>
              <div className="search-input-wrapper" style={{ position: "relative" }}>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Search state..." 
                  className="filter-search-input" 
                  value={locationQuery}
                  onChange={(e) => {
                    const val = e.target.value;
                    setLocationQuery(val);
                    if (val.trim().length > 0) {
                      const filtered = INDIAN_STATES.filter(s =>
                        s.toLowerCase().includes(val.toLowerCase())
                      );
                      setLocationSuggestions(filtered);
                      setShowSuggestions(true);
                    } else {
                      setShowSuggestions(false);
                    }
                  }}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                />
                {showSuggestions && locationSuggestions.length > 0 && (
                  <ul className="location-suggestions-dropdown">
                    {locationSuggestions.map((s) => (
                      <li
                        key={s}
                        className="location-suggestion-item"
                        onMouseDown={() => {
                          setLocationQuery(s);
                          setShowSuggestions(false);
                        }}
                      >
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="sugg-icon" />
                        {s}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <button className="apply-filters-btn" onClick={handleApplyFilters}>Apply Filters</button>
          </div>

          <div className="pro-ad-card">
            <div className="pro-badge">TOP SUPPLIER</div>
            <h3>Kashmir Nuts Co.</h3>
            <p>Direct from the valley. 100% organic walnuts and saffron at wholesale prices.</p>
            <Link to="/packages" className="upgrade-link">View Catalog &gt;</Link>
          </div>
        </aside>

        <main className="content-area">
          <div className="category-chips-bar">
            {dryFruitCategories.map((cat) => (
              <button
                key={cat.label}
                className={`category-chip ${activeChip === cat.label ? "chip-active" : ""}`}
                onClick={() => handleCategoryChip(cat.label)}
              >
                <div className="chip-img-ring">
                  <img src={cat.img} alt={cat.label} onError={(e) => e.target.src="/assets/dryfruits.jpeg"} />
                </div>
                <span className="chip-label">{cat.label}</span>
              </button>
            ))}
          </div>

          {filteredData.length > 0 ? (
            <div className="product-grid">
              {filteredData.map((item, index) => (
                <div className="product-card" key={index}>
                  <div className="card-image-wrapper">
                    <img src={item.imgSrc} alt={item.companyName} className="product-img" />
                    <div className="badge-overlay">
                      <span className="verified-badge">
                        <FontAwesomeIcon icon={faCheckCircle} /> VERIFIED SOURCE
                      </span>
                    </div>
                  </div>

                  <div className="card-body">
                    <h3 className="product-title">{item.mainProducts}</h3>
                    
                    <div className="supplier-section">
                      <span className="supplier-label">SUPPLIED BY</span>
                      
                      <div className="supplier-brand-row">
                        <div className="supplier-logo-placeholder">
                          {item.companyName.charAt(0)}
                        </div>
                        <div className="supplier-info-stack">
                          <h4 className="supplier-name">{item.companyName}</h4>
                          <div className="rating-box">
                            <FontAwesomeIcon icon={faStar} />
                            <span>{item.rating}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="supplier-meta-grid">
                        <span className="location-tag">
                          <FontAwesomeIcon icon={faMapMarkerAlt} /> {item.location}
                        </span>
                        <span className="years-badge">
                          <FontAwesomeIcon icon={faCheckCircle} /> {item.years || "1 YRS"} Experience
                        </span>
                      </div>
                    </div>

                    <div className="card-actions">
                      <Link to="/register-buyer" className="btn-quick-quote">Quick Quote</Link>
                      <Link to="/register-buyer" className="btn-contact">Contact</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <FontAwesomeIcon icon={faSearch} size="3x" />
              <h3>No results found</h3>
              <button className="btn-primary" onClick={resetFilters}>Clear Filters</button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dryfruits;
