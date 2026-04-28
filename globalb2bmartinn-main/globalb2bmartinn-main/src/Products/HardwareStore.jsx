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
    name: "Shashikant",
    companyName: "Polyana PVC Pipes",
    productOrService: "PVC Pipes & Profiles",
    imgSrc: "/assets/pvc6.jpeg",
    mainProducts: "PVC Pipes, Plastic Profiles, Fittings, Hardware",
    years: "1 YRS",
    location: "Pune, Maharashtra",
    rating: "4.6",
  },
  {
    name: "Malik Sultan",
    companyName: "Sultan Fastners",
    productOrService: "Fasteners & Bolts",
    imgSrc: "/assets/fas5.jpeg",
    mainProducts: "Bolts, Nuts, Screws, Industrial Fasteners",
    years: "1 YRS",
    location: "Delhi, India",
    rating: "4.8",
  },
  {
    name: "Jas",
    companyName: "Ravi Fasteners",
    productOrService: "Critical Fasteners",
    imgSrc: "/assets/fas2.jpeg",
    mainProducts: "High-Strength Bolts, Aerospace Fasteners, specialized Hardware",
    years: "1 YRS",
    location: "Chennai, Tamil Nadu",
    rating: "4.9",
  },
  {
    name: "Deepak",
    companyName: "Asha Pure Hardware",
    productOrService: "Construction Hardware",
    imgSrc: "/assets/hw3.jpg",
    mainProducts: "Nails, Screws, Tools, Construction Supplies",
    years: "1 YRS",
    location: "Ahmedabad, Gujarat",
    rating: "4.5",
  },
  {
    name: "Sunal Seth",
    companyName: "Hardware Tools Information",
    productOrService: "Tools & Hardware",
    imgSrc: "/assets/harware1.jpeg",
    mainProducts: "Hardware Tools, Hand Tools, Power Tools",
    years: "1 YRS",
    location: "Rajkot, Gujarat",
    rating: "4.7",
  },
  {
    name: "Jay Patel",
    companyName: "STIBA PIPE & FITTINGS",
    productOrService: "Plumbing Hardware",
    imgSrc: "/assets/pvcpipe.jpeg",
    mainProducts: "PVC Pipes, Bibcocks, Showers, Plumbing Hardware",
    years: "1 YRS",
    location: "Vadodara, Gujarat",
    rating: "4.9",
  },
];

const INDIAN_STATES = [
  "Gujarat", "Maharashtra", "Tamil Nadu", "Delhi", "Uttar Pradesh", "Rajasthan",
  "Karnataka", "Punjab", "Haryana", "West Bengal"
];

const HardwareStore = () => {
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

  const hardwareCategories = [
    { label: "All",       img: "/assets/harware1.jpeg" },
    { label: "Fasteners", img: "/assets/fas1.jpeg" },
    { label: "Tools",     img: "/assets/hw3.jpg" },
    { label: "Plumbing",  img: "/assets/pvcpipe.jpeg" },
    { label: "Safety",    img: "/assets/hw3.jpg" },
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
              <label className="filter-label">Hardware Category</label>
              <div className="checkbox-group">
                {["Fasteners", "Tools", "Plumbing", "Nails", "Screws", "Safety"].map(type => (
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
              <label className="filter-label">Supplier State</label>
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
            <div className="pro-badge">TOOL MASTER</div>
            <h3>Industrial Hardware Hub</h3>
            <p>Direct from Rajkot & Ahmedabad. Bulk supply of high-grade fasteners and tools.</p>
            <Link to="/packages" className="upgrade-link">Contact Hub &gt;</Link>
          </div>
        </aside>

        <main className="content-area">
          <div className="category-chips-bar">
            {hardwareCategories.map((cat) => (
              <button
                key={cat.label}
                className={`category-chip ${activeChip === cat.label ? "chip-active" : ""}`}
                onClick={() => handleCategoryChip(cat.label)}
              >
                <div className="chip-img-ring">
                  <img src={cat.img} alt={cat.label} onError={(e) => e.target.src="/assets/harware1.jpeg"} />
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
                        <FontAwesomeIcon icon={faCheckCircle} /> VERIFIED HUB
                      </span>
                    </div>
                  </div>

                  <div className="card-body">
                    <p className="product-desc">{item.mainProducts}</p>
                    <div className="supplier-info">
                      <h4 className="supplier-name">{item.companyName}</h4>
                      <div className="supplier-meta">
                        <div className="rating-stars">
                          <FontAwesomeIcon icon={faStar} />
                          <span>{item.rating}</span>
                        </div>
                        <span className="separator">•</span>
                        <span className="years-exp">{item.location}</span>
                      </div>
                    </div>
                    <div className="card-actions">
                      <Link to="/register-buyer" className="btn-primary">Order Bulk</Link>
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

export default HardwareStore;
