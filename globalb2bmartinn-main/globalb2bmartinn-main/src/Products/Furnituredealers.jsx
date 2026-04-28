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
    name: "Sikandar Shah",
    companyName: "APEX AIRTECH SYSTEMS",
    productOrService: "Premium Furniture",
    imgSrc: "/assets/furniture1.jpeg",
    mainProducts: "Office Furniture, Home Furniture, Custom Furniture",
    years: "1 YRS",
    location: "Mumbai, Maharashtra",
    rating: "4.9",
  },
  {
    name: "Hardik Makker",
    companyName: "Hardik Meditech",
    productOrService: "Healthcare Furniture",
    imgSrc: "/assets/furniture3.jpeg",
    mainProducts: "Medical Furniture, Lab Tables, Custom Cabinets",
    years: "1 YRS",
    location: "Mumbai, Maharashtra",
    rating: "4.4",
  },
  {
    name: "Rajesh",
    companyName: "SAFEX INC",
    productOrService: "Office Solutions",
    imgSrc: "/assets/furniture5.jpeg",
    mainProducts: "Office Desks, Ergonomic Chairs, Outdoor Seating",
    years: "1 YRS",
    location: "Delhi, India",
    rating: "4.2",
  },
  {
    name: "Pandian Prembabu",
    companyName: "VMA Industry",
    productOrService: "Steel Furniture",
    imgSrc: "/assets/furniture2.jpeg",
    mainProducts: "Wooden Furniture, Steel Almirahs, Office Cabinets",
    years: "1 YRS",
    location: "Chennai, Tamil Nadu",
    rating: "4.3",
  },
  {
    name: "Bharat Bhai",
    companyName: "SRI SRI MODULAR FURNITURE",
    productOrService: "Modular Specialist",
    imgSrc: "/assets/furniture10.jpeg",
    mainProducts: "Modular Kitchens, Office Workstations, Wardrobes",
    years: "1 YRS",
    location: "Ahmedabad, Gujarat",
    rating: "4.8",
  },
  {
    name: "Mr. Om",
    companyName: "Om Woods",
    productOrService: "Chair Manufacturer",
    imgSrc: "/assets/chair.jpeg",
    mainProducts: "Wooden Chairs, Designer Seating, Dining Chairs",
    years: "1 YRS",
    location: "Mumbai, Maharashtra",
    rating: "4.7",
  },
  {
    name: "Rakesh Saini",
    companyName: "SHRI HARI GIRI JI INDUSTRIES",
    productOrService: "Jodhpur Furniture",
    imgSrc: "/assets/shri-hari-giri-furniture.jpg",
    mainProducts: "Handcrafted Jodhpur Furniture, Antique Finish Woodwork",
    years: "1 YRS",
    location: "Jodhpur, Rajasthan",
    rating: "4.8",
  },
];

const INDIAN_STATES = [
  "Maharashtra", "Gujarat", "Rajasthan", "Tamil Nadu", "Karnataka", "Delhi",
  "Uttar Pradesh", "West Bengal", "Madhya Pradesh", "Punjab"
];

const Furnituredealers = () => {
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
          item.mainProducts.toLowerCase().includes(c.toLowerCase()) ||
          item.productOrService.toLowerCase().includes(c.toLowerCase())
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
      item.mainProducts.toLowerCase().includes(cat.toLowerCase()) ||
      item.productOrService.toLowerCase().includes(cat.toLowerCase())
    );
    setFilteredData(result);
  };

  const furnitureCategories = [
    { label: "All",        img: "/assets/furniture1.jpeg" },
    { label: "Office",     img: "/assets/furniture2.jpeg" },
    { label: "Home",       img: "/assets/furniture3.jpeg" },
    { label: "Modular",    img: "/assets/furniture10.jpeg" },
    { label: "Chairs",     img: "/assets/chair.jpeg" },
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
              <label className="filter-label">Furniture Type</label>
              <div className="checkbox-group">
                {["Office", "Home", "Modular", "Wooden", "Steel", "Antique"].map(type => (
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
              <label className="filter-label">Supplier Location</label>
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
            <div className="pro-badge">PRO EXHIBITOR</div>
            <h3>Jodhpur Heritage</h3>
            <p>Authentic Rajasthan woodwork. Custom heritage furniture for homes and hotels globally.</p>
            <Link to="/packages" className="upgrade-link">View Gallery &gt;</Link>
          </div>
        </aside>

        <main className="content-area">
          <div className="category-chips-bar">
            {furnitureCategories.map((cat) => (
              <button
                key={cat.label}
                className={`category-chip ${activeChip === cat.label ? "chip-active" : ""}`}
                onClick={() => handleCategoryChip(cat.label)}
              >
                <div className="chip-img-ring">
                  <img src={cat.img} alt={cat.label} onError={(e) => e.target.src="/assets/furniture1.jpeg"} />
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
                        <FontAwesomeIcon icon={faCheckCircle} /> VERIFIED SUPPLIER
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

export default Furnituredealers;
