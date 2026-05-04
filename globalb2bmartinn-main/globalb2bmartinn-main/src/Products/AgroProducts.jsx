import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faStar, 
  faMapMarkerAlt, 
  faCheckCircle, 
  faSearch, 
  faFilter,
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";
import "./MarketplacePremium.css";
import FullPageSkeleton from "../Components/FullPageSkeleton";

import { agroData } from "./MarketplaceData";

const apiEndpoint = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3005';

const classifiedData = agroData;

const INDIAN_STATES = [
  "Maharashtra", "Gujarat", "Uttar Pradesh", "Punjab", "Haryana", "Andhra Pradesh",
  "Tamil Nadu", "Karnataka", "West Bengal", "Bihar", "Rajasthan", "Madhya Pradesh",
  "Delhi", "Kolkata", "Mumbai", "Pune", "Nashik", "Ahmedabad", "Surat", "Jaipur"
];

const AgroProductsSupplier = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [locationQuery, setLocationQuery] = useState("");
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);
  const [activeChip, setActiveChip] = useState("All");
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const fetchAgroProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${apiEndpoint}/products/category/Agro`);
        setDbProducts(res.data);
        setFilteredData([...agroData, ...res.data]);
      } catch (err) {
        console.error("Failed to fetch agro products:", err);
        setFilteredData(agroData);
      } finally {
        setTimeout(() => setLoading(false), 2000);
      }
    };
    fetchAgroProducts();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  const handleApplyFilters = () => {
    let result = [...agroData, ...dbProducts];

    if (selectedCategories.length > 0) {
      result = result.filter(item => 
        selectedCategories.some(cat => {
            const text = [
                item.mainProducts, 
                item.productOrService, 
                item.title, 
                item.description,
                item.category
            ].filter(Boolean).join(' ').toLowerCase();
            return text.includes(cat.toLowerCase());
        })
      );
    }

    if (locationQuery) {
      const query = locationQuery.toLowerCase();
      result = result.filter(item => {
        const locText = [
            item.location, 
            item.state, 
            item.city, 
            item.seller?.statename, 
            item.seller?.cityname
        ].filter(Boolean).join(' ').toLowerCase();
        
        const compText = [
            item.companyName, 
            item.seller?.companyName, 
            item.seller?.name
        ].filter(Boolean).join(' ').toLowerCase();
        
        return locText.includes(query) || compText.includes(query);
      });
    }

    setFilteredData(result);
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setLocationQuery("");
    setFilteredData([...agroData, ...dbProducts]);
    setActiveChip("All");
  };

  const handleCategoryChip = (cat) => {
    setActiveChip(cat);
    if (cat === "All") { resetFilters(); return; }
    const result = [...agroData, ...dbProducts].filter(item => {
        const text = [
            item.mainProducts, 
            item.productOrService, 
            item.title, 
            item.description,
            item.category
        ].filter(Boolean).join(' ').toLowerCase();
        return text.includes(cat.toLowerCase());
    });
    setFilteredData(result);
  };

  const agroCategories = [
    { label: "All",        img: "/assets/agro1.avif" },
    { label: "Rice",       img: "/assets/rice1.jpeg" },
    { label: "Pulses",     img: "/assets/pulses1.jpeg" },
    { label: "Spices",     img: "/assets/agros.jpeg" },
    { label: "Vegetables", img: "/assets/agro2.jpeg" },
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
              <label className="filter-label">Agro Categories</label>
              <div className="checkbox-group">
                {["Rice", "Pulses", "Spices", "Wheat", "Vegetables"].map(cat => (
                  <label key={cat} className="checkbox-item">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes(cat)}
                      onChange={() => handleCategoryChange(cat)}
                    /> <span>{cat}</span>
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
            <div className="pro-badge">AGRO PRO</div>
            <h3>Bulk Sourcing Solutions</h3>
            <p>Connect with verified farmers and wholesale distributors across India.</p>
            <Link to="/packages" className="upgrade-link">Upgrade Now &gt;</Link>
          </div>
        </aside>

        <main className="content-area">
          <div className="category-chips-bar">
            {agroCategories.map((cat) => (
              <button
                key={cat.label}
                className={`category-chip ${activeChip === cat.label ? "chip-active" : ""}`}
                onClick={() => handleCategoryChip(cat.label)}
              >
                <div className="chip-img-ring">
                  <img src={cat.img} alt={cat.label} onError={(e) => e.target.src="/assets/agro1.avif"} />
                </div>
                <span className="chip-label">{cat.label}</span>
              </button>
            ))}
          </div>

          {filteredData.length > 0 ? (
            <div className="product-grid">
              {filteredData.map((item, index) => {
                const isDbProduct = !!item._id && !item._id.toString().includes('agro-');
                const detailLink = isDbProduct ? `/product/${item._id}` : `/category/agro/${item._id}`;
                
                return (
                  <div className="product-card" key={index}>
                    <div className="card-image-wrapper">
                      <img src={item.imgSrc || (item.images && item.images[0]) || "/assets/agro_main.png"} alt={item.companyName || item.title} className="product-img" />
                      <div className="badge-overlay">
                        <span className="verified-badge">
                          <FontAwesomeIcon icon={faCheckCircle} /> VERIFIED
                        </span>
                      </div>
                    </div>

                    <div className="card-body">
                      <h3 className="product-title">{item.mainProducts || item.title}</h3>
                      
                      <div className="supplier-section">
                        <span className="supplier-label">SUPPLIED BY</span>
                        
                        <div className="supplier-brand-row">
                          <div className="supplier-logo-placeholder">
                            {(item.companyName || item.seller?.companyName || item.seller?.name || "A").charAt(0)}
                          </div>
                          <div className="supplier-info-stack">
                            <h4 className="supplier-name">{item.companyName || item.seller?.companyName || item.seller?.name}</h4>
                            <div className="rating-box">
                              <FontAwesomeIcon icon={faStar} />
                              <span>{item.rating || (4.5 + (index % 5) * 0.1).toFixed(1)}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="supplier-meta-grid">
                          <span className="location-tag">
                            <FontAwesomeIcon icon={faMapMarkerAlt} /> {item.location || `${item.seller?.cityname || item.city || ''}, ${item.seller?.statename || item.state || ''}`}
                          </span>
                          <span className="years-badge">
                            <FontAwesomeIcon icon={faCheckCircle} /> {item.years || "1 YRS"} Experience
                          </span>
                        </div>
                      </div>

                      <div className="card-actions">
                        <Link to={detailLink} className="btn-quick-quote">View Detail <FontAwesomeIcon icon={faAngleRight} /></Link>
                        <Link to="/register-buyer" className="btn-contact">Contact</Link>
                      </div>
                    </div>
                  </div>
                );
              })}
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

export default AgroProductsSupplier;
