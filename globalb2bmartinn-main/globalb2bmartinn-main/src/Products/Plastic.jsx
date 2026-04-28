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
    name: "Malav",
    companyName: "Dhiren Plastic Industries",
    productOrService: "Plastic Bottle Manufacturing",
    imgSrc: "/assets/plastic8.jpeg",
    mainProducts: "Plastic Bottles, Containers, Jars, Custom Plastic Packaging",
    years: "1 YRS",
    location: "Surat, India",
    rating: "4.5",
  },
  {
    name: "Rajasthan Plastic Syndicate",
    companyName: "Rajasthan Plastic Syndicate",
    productOrService: "Plastic Products",
    imgSrc: "/assets/plastic-rack.jpg",
    mainProducts: "Plastic Bottles, Plastic Containers",
    years: "1 YRS",
    location: "Ahmedabad, India",
    rating: "4.2",
  },
  {
    name: "Mr. Ravi",
    companyName: "Advance Poly Pack",
    productOrService: "Packing Items",
    imgSrc: "/assets/plastic-bag.jpg",
    mainProducts: "Plastic Bags, Bubble Wrap, Packaging Tapes",
    years: "1 YRS",
    location: "Nagpur, India",
    rating: "4.7",
  },
  {
    name: "Mr. Ravi C. Savla",
    companyName: "JAY PLASTICS",
    productOrService: "HDPE plastic barrel supplier",
    imgSrc: "/assets/barel2.jpeg",
    mainProducts: "HDPE Plastic Barrels, Industrial Containers",
    years: "1 YRS",
    location: "Mumbai, Maharashtra, India",
    rating: "4.6",
  },
  {
    name: "Nikhil Raj Yadav",
    companyName: "Balaji Industries",
    productOrService: "Plastic Bottle Manufacturer",
    imgSrc: "/assets/waterBottle.jpeg",
    mainProducts: "Plastic Bottles, Containers, Jars, Custom Plastic Packaging",
    years: "1 YRS",
    location: "Mumbai, India",
    rating: "4.4",
  },
  {
    name: "Akshat",
    companyName: "Fibrotech FRP",
    productOrService: "FRP Products",
    imgSrc: "/assets/frp.jpeg",
    mainProducts: "FRP Sheets, FRP Doors, FRP Gratings",
    years: "1 YRS",
    location: "Pune, Maharashtra, India",
    rating: "4.6",
  },
  {
    name: "Deepak kumar",
    companyName: "crown furniture",
    productOrService: "Plastic items",
    imgSrc: "/assets/plastic5.webp",
    mainProducts: "Plastic Table, Plastic Chair, Plastic Storage",
    years: "1 YRS",
    location: "Jaipur, Rajasthan, India",
    rating: "4.2",
  },
  {
    name: "Plasto Tech Containers",
    companyName: "Plasto Tech Containers",
    productOrService: "Plastic Container Manufacturer",
    imgSrc: "/assets/plastic2.jpg",
    mainProducts: "Food Containers, Storage Bins, Industrial Packaging",
    years: "1 YRS",
    location: "Pune, Maharashtra, India",
    rating: "4.8",
  },
  {
    name: "PATHOZYME PLAST",
    companyName: "PATHOZYME PLAST",
    productOrService: "HDPE plastic barrel supplier",
    imgSrc: "/assets/barel1.jpeg",
    mainProducts: "HDPE Plastic Barrels, Industrial Containers",
    years: "1 YRS",
    location: "Mumbai, Maharashtra, India",
    rating: "4.5",
  },
  {
    name: "Mr. Manoj Jain",
    companyName: "MAA PADMAWATI ENTERPRISES",
    productOrService: "HDPE plastic barrel supplier",
    imgSrc: "/assets/barel3.jpeg",
    mainProducts: "HDPE Plastic Barrels, Storage Containers",
    years: "1 YRS",
    location: "Jaipur, Rajasthan, India",
    rating: "4.9",
  },
  {
    name: "MD Kaleem",
    companyName: "STAR TRADERS",
    productOrService: "HDPE barrels supplier",
    imgSrc: "/assets/barel4.jpeg",
    mainProducts: "HDPE Barrels, Plastic Containers",
    years: "1 YRS",
    location: "Hyderabad, Telangana, India",
    rating: "4.7",
  },
  {
    name: "Akash",
    companyName: "Yug Plastic",
    productOrService: "Plastic",
    imgSrc: "/assets/plastic2.jpg",
    mainProducts: "Plastic containers, Plastic bottles, Plastic furniture",
    years: "1 YRS",
    location: "Ahmedabad, Gujarat, India",
    rating: "4.5",
  },
];

const INDIAN_STATES = [
  "Maharashtra", "Gujarat", "Uttar Pradesh", "Punjab", "Haryana", "Andhra Pradesh",
  "Tamil Nadu", "Karnataka", "West Bengal", "Bihar", "Rajasthan", "Madhya Pradesh",
  "Delhi", "Telangana", "Kerala", "Assam"
];

const Plastic = () => {
  const [selectedCats, setSelectedCats] = useState([]);
  const [locationQuery, setLocationQuery] = useState("");
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [sortBy, setSortBy] = useState("Most Relevant");
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
          (item.productOrService && item.productOrService.toLowerCase().includes(c.toLowerCase()))
        )
      );
    }

    if (locationQuery) {
      const query = locationQuery.toLowerCase();
      result = result.filter(item => 
        item.location.toLowerCase().includes(query) ||
        item.companyName.toLowerCase().includes(query)
      );
    }

    if (sortBy === "Highest Rated") {
      result.sort((a, b) => b.rating - a.rating);
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

  const plasticCategories = [
    { label: "All",        img: "/assets/plastic8.jpeg" },
    { label: "Bottles",    img: "/assets/waterBottle.jpeg" },
    { label: "Barrels",    img: "/assets/barel1.jpeg" },
    { label: "Furniture",  img: "/assets/plastic5.webp" },
    { label: "Bags",       img: "/assets/plastic-bag.jpg" },
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
              <label className="filter-label">Product Type</label>
              <div className="checkbox-group">
                {["Bottles", "Barrels", "Furniture", "Packaging", "FRP", "Containers"].map(type => (
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
                  placeholder="Search state or city..." 
                  className="filter-search-input" 
                  value={locationQuery}
                  autoComplete="off"
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
            <div className="pro-badge">PRO MEMBER AD</div>
            <h3>Eco Plastics Ltd</h3>
            <p>Leading manufacturers of recycled plastic containers and sustainable packaging solutions.</p>
            <Link to="/packages" className="upgrade-link">Upgrade Now &gt;</Link>
          </div>
        </aside>

        <main className="content-area">
          <div className="category-chips-bar">
            {plasticCategories.map((cat) => (
              <button
                key={cat.label}
                className={`category-chip ${activeChip === cat.label ? "chip-active" : ""}`}
                onClick={() => handleCategoryChip(cat.label)}
              >
                <div className="chip-img-ring">
                  <img src={cat.img} alt={cat.label} onError={(e) => e.target.src="/assets/plastic8.jpeg"} />
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
                    <img src={item.imgSrc} alt={item.companyName} className="product-img" onError={(e) => e.target.src="/assets/plastic8.jpeg"} />
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
                            <span>{item.rating || 5.0}</span>
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
              <p>Try adjusting your filters or location to find more plastic product suppliers.</p>
              <button className="btn-primary" onClick={resetFilters}>Clear All Filters</button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Plastic;
