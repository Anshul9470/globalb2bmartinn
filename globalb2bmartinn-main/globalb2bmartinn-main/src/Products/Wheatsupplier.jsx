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
import FullPageSkeleton from "../Components/FullPageSkeleton";

import { wheatData } from "./MarketplaceData";

const classifiedData = wheatData;

const INDIAN_STATES = [
  "Punjab", "Haryana", "Uttar Pradesh", "Madhya Pradesh", "Rajasthan", "Bihar", "Gujarat", "Maharashtra"
];

const WheatSupplier = () => {
  const [selectedCats, setSelectedCats] = useState([]);
  const [locationQuery, setLocationQuery] = useState("");
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredData, setFilteredData] = useState(classifiedData);
  const [activeChip, setActiveChip] = useState("All");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulated loading for premium feel
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

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

  const wheatCategories = [
    { label: "All",      img: "/assets/whe5.avif" },
    { label: "Flour",    img: "/assets/whe2.jpg" },
    { label: "Grain",    img: "/assets/whe5.avif" },
    { label: "Organic",  img: "/assets/whe6.jpeg" },
    { label: "Bran",     img: "/assets/whe3.jpg" },
  ];

  if (loading) {
    return (
      <div className="marketplace-container">
        <FullPageSkeleton />
      </div>
    );
  }

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
              <label className="filter-label">Wheat Category</label>
              <div className="checkbox-group">
                {["Flour", "Grain", "Organic", "Bran", "Semolina"].map(type => (
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
            <div className="pro-badge">GRAIN MASTER</div>
            <h3>Bulk Wheat Sourcing</h3>
            <p>Direct from mandi & verified mills. High gluten and organic variants available.</p>
            <Link to="/packages" className="upgrade-link">Contact Hub &gt;</Link>
          </div>
        </aside>

        <main className="content-area">
          <div className="category-chips-bar">
            {wheatCategories.map((cat) => (
              <button
                key={cat.label}
                className={`category-chip ${activeChip === cat.label ? "chip-active" : ""}`}
                onClick={() => handleCategoryChip(cat.label)}
              >
                <div className="chip-img-ring">
                  <img src={cat.img} alt={cat.label} onError={(e) => e.target.src="/assets/whe5.avif"} />
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
                    <img src={item.imgSrc} alt={item.companyName} className="product-img" onError={(e) => e.target.src="/assets/whe5.avif"} />
                    <div className="badge-overlay">
                      <span className="verified-badge">
                        <FontAwesomeIcon icon={faCheckCircle} /> VERIFIED MILL
                      </span>
                    </div>
                  </div>

                  <div className="card-body">
                    <div className="card-title-row">
                      <h3 className="product-title">{item.mainProducts}</h3>
                    </div>

                    <p className="product-desc">
                      High quality wheat and grain products sourced directly from verified mills.
                    </p>

                    <div className="supplier-section">
                      <span className="supplier-label">SUPPLIER</span>
                      <div className="supplier-name-row">
                        <h4 className="supplier-name">{item.companyName}</h4>
                        <div className="rating-box">
                          <FontAwesomeIcon icon={faStar} />
                          <span>{item.rating || 5.0}</span>
                        </div>
                      </div>
                      <span className="experience-text">{item.location}</span>
                    </div>

                    <div className="card-actions">
                      <Link to="/register-buyer" className="btn-quick-quote">Order Bulk</Link>
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

export default WheatSupplier;
