import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faStar, 
  faMapMarkerAlt, 
  faCheckCircle, 
  faSearch, 
  faFilter
} from "@fortawesome/free-solid-svg-icons";
import "./MarketplacePremium.css";
import { undergarmentData } from "./MarketplaceData";

const apiEndpoint = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3005';

const Undergarments = () => {
  const [selectedCats, setSelectedCats] = useState([]);
  const [locationQuery, setLocationQuery] = useState("");
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeChip, setActiveChip] = useState("All");

  const INDIAN_STATES = [
    "Maharashtra", "Delhi", "Tamil Nadu", "Karnataka", "West Bengal", "Gujarat", "Punjab", "Haryana"
  ];

  useEffect(() => {
    const fetchUndergarments = async () => {
      try {
        const res = await axios.get(`${apiEndpoint}/products/category/Undergarments`);
        setDbProducts(res.data);
        setFilteredData([...undergarmentData, ...res.data]);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch undergarments:", err);
        setFilteredData(undergarmentData);
        setLoading(false);
      }
    };
    fetchUndergarments();
  }, []);

  const handleCatChange = (cat) => {
    setSelectedCats(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const handleApplyFilters = () => {
    let combined = [...undergarmentData, ...dbProducts];
    let result = combined;

    if (selectedCats.length > 0) {
      result = result.filter(item => {
        const productStr = (item.mainProducts || item.title || '').toLowerCase();
        const serviceStr = (item.productOrService || item.category || '').toLowerCase();
        return selectedCats.some(c => 
          productStr.includes(c.toLowerCase()) || serviceStr.includes(c.toLowerCase())
        );
      });
    }

    if (locationQuery) {
      const query = locationQuery.toLowerCase();
      result = result.filter(item => 
        (item.location || item.state || '').toLowerCase().includes(query) ||
        (item.companyName || (item.seller?.companyName) || '').toLowerCase().includes(query)
      );
    }

    setFilteredData(result);
  };

  const resetFilters = () => {
    setSelectedCats([]);
    setLocationQuery("");
    setFilteredData([...undergarmentData, ...dbProducts]);
    setActiveChip("All");
  };

  const handleCategoryChip = (cat) => {
    setActiveChip(cat);
    if (cat === "All") { resetFilters(); return; }
    const combined = [...undergarmentData, ...dbProducts];
    const result = combined.filter(item => {
        const productStr = (item.mainProducts || item.title || '').toLowerCase();
        const serviceStr = (item.productOrService || item.category || '').toLowerCase();
        return productStr.includes(cat.toLowerCase()) || serviceStr.includes(cat.toLowerCase());
    });
    setFilteredData(result);
  };

  const hosieryCategories = [
    { label: "All",      img: "/assets/undergr.jpg" },
    { label: "Men",      img: "/assets/under2.jpeg" },
    { label: "Women",    img: "/assets/under1.jpeg" },
    { label: "Socks",    img: "/assets/socks.jpeg" },
    { label: "Thermal",  img: "/assets/thermal.jpeg" },
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
              <label className="filter-label">Hosiery Type</label>
              <div className="checkbox-group">
                {["Underwear", "Socks", "Tights", "Thermal", "Sleepwear"].map(type => (
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
                  placeholder="Search city/state..." 
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
            <div className="pro-badge">COMFORT PRO</div>
            <h3>Bulk Hosiery Sourcing</h3>
            <p>Export quality innerwear and socks at factory prices. Direct from top hubs.</p>
            <Link to="/packages" className="upgrade-link">Contact Hub &gt;</Link>
          </div>
        </aside>

        <main className="content-area">
          <div className="category-chips-bar">
            {hosieryCategories.map((cat) => (
              <button
                key={cat.label}
                className={`category-chip ${activeChip === cat.label ? "chip-active" : ""}`}
                onClick={() => handleCategoryChip(cat.label)}
              >
                <div className="chip-img-ring">
                  <img src={cat.img} alt={cat.label} onError={(e) => e.target.src="/assets/undergr.jpg"} />
                </div>
                <span className="chip-label">{cat.label}</span>
              </button>
            ))}
          </div>

          {loading ? (
            <div className="loading-state">Loading premium products...</div>
          ) : filteredData.length > 0 ? (
            <div className="product-grid">
              {filteredData.map((item, index) => (
                <div className="product-card" key={index}>
                  <div className="card-image-wrapper">
                    <img 
                        src={item.images?.[0] ? `${apiEndpoint}${encodeURI(item.images[0].replace(/\\/g, '/'))}` : item.imgSrc} 
                        alt={item.title || item.companyName} 
                        className="product-img" 
                        onError={(e) => { if(!item.imgSrc) e.target.src="/assets/undergr.jpg" }}
                    />
                    <div className="badge-overlay">
                      <span className="verified-badge">
                        <FontAwesomeIcon icon={faCheckCircle} /> VERIFIED SELLER
                      </span>
                    </div>
                    <span className="card-category-tag">{item.productOrService || item.category || 'Undergarments'}</span>
                  </div>

                  <div className="card-body">
                    <h3 className="product-title">{item.title || item.mainProducts}</h3>
                    
                    {/* Price Badge */}
                    {item.price && item.price !== 'Ask for Price' && (
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        background: 'rgba(30, 58, 138, 0.06)',
                        color: '#1e3a8a',
                        fontWeight: 800,
                        fontSize: '0.9rem',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        marginBottom: '10px'
                      }}>
                        ₹ {item.price} / {item.unit || 'kg'}
                      </div>
                    )}

                    {/* Description Snippet */}
                    <p style={{
                        fontSize: '0.8rem',
                        color: '#64748b',
                        lineHeight: '1.4',
                        marginBottom: '12px',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}>
                        {Array.isArray(item.description) ? item.description[0] : (item.description || 'Export quality comfortable innerwear from verified manufacturers.')}
                    </p>

                    <div className="supplier-section">
                      <span className="supplier-label">SUPPLIED BY</span>
                      
                      <div className="supplier-brand-row">
                        <div className="supplier-logo-placeholder">
                          {(item.seller?.companyName || item.companyName || 'S').charAt(0)}
                        </div>
                        <div className="supplier-info-stack">
                          <h4 className="supplier-name">{item.seller?.companyName || item.companyName}</h4>
                          <div className="rating-box">
                            <FontAwesomeIcon icon={faStar} />
                            <span>{item.rating || "4.8"}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="supplier-meta-grid">
                        <span className="location-tag">
                          <FontAwesomeIcon icon={faMapMarkerAlt} /> {item.location || item.state || 'India'}
                        </span>
                        <span className="years-badge">
                          <FontAwesomeIcon icon={faCheckCircle} /> {item.years || item.experience || "1 YRS"} Experience
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

export default Undergarments;
