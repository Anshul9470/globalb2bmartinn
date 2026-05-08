import React, { useState, useEffect } from "react";
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

import { cncData } from "./MarketplaceData";

const apiEndpoint = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3005';

const INDIAN_STATES = [
  "Maharashtra", "Punjab", "Gujarat", "Tamil Nadu", "Haryana", "Karnataka", "Delhi"
];

const CncMachinesSupplier = () => {
  const [selectedCats, setSelectedCats] = useState([]);
  const [locationQuery, setLocationQuery] = useState("");
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeChip, setActiveChip] = useState("All");

  useEffect(() => {
    const fetchCncProducts = async () => {
      try {
        const res = await axios.get(`${apiEndpoint}/products/category/CNC Machines`);
        setDbProducts(res.data);
        setFilteredData([...cncData, ...res.data]);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch CNC products:", err);
        setFilteredData(cncData);
        setLoading(false);
      }
    };
    fetchCncProducts();
  }, []);

  const handleCatChange = (cat) => {
    setSelectedCats(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const handleApplyFilters = () => {
    let result = [...cncData, ...dbProducts];

    if (selectedCats.length > 0) {
      result = result.filter(item => {
        const text = [
          item.mainProducts, 
          item.productOrService, 
          item.title
        ].filter(Boolean).join(' ').toLowerCase();
        return selectedCats.some(c => text.includes(c.toLowerCase()));
      });
    }

    if (locationQuery) {
      const query = locationQuery.toLowerCase();
      result = result.filter(item => {
        const locText = [
          item.location, 
          item.city, 
          item.state,
          item.seller?.cityname,
          item.seller?.statename
        ].filter(Boolean).join(' ').toLowerCase();
        return locText.includes(query);
      });
    }

    setFilteredData(result);
  };

  const resetFilters = () => {
    setSelectedCats([]);
    setLocationQuery("");
    setFilteredData([...cncData, ...dbProducts]);
    setActiveChip("All");
  };

  const handleCategoryChip = (cat) => {
    setActiveChip(cat);
    if (cat === "All") { resetFilters(); return; }
    
    const allData = [...cncData, ...dbProducts];
    const result = allData.filter(item => {
      const text = [
        item.mainProducts, 
        item.productOrService, 
        item.title,
        item.category
      ].filter(Boolean).join(' ').toLowerCase();
      return text.includes(cat.toLowerCase());
    });
    setFilteredData(result);
  };

  const cncCategories = [
    { label: "All",        img: "/assets/cnc_premium.png" },
    { label: "VMC",        img: "/assets/indus5.webp" },
    { label: "Lathe",      img: "/assets/indus1.jpg" },
    { label: "Router",     img: "/assets/indus2.jpg" },
    { label: "Milling",    img: "/assets/machine1.jpg" },
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
              <label className="filter-label">Machine Type</label>
              <div className="checkbox-group">
                {["VMC", "Lathe", "Router", "Milling", "Plasma", "Laser"].map(type => (
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
              <label className="filter-label">Manufacturing Hub</label>
              <div className="search-input-wrapper" style={{ position: "relative" }}>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Search city/state..." 
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
            <div className="pro-badge">CNC PRO</div>
            <h3>Industrial Precision</h3>
            <p>Get high-precision CNC machines directly from verified manufacturers at best prices.</p>
            <Link to="/packages" className="upgrade-link">View Hub &gt;</Link>
          </div>
        </aside>

        <main className="content-area">
          <div className="category-chips-bar">
            {cncCategories.map((cat) => (
              <button
                key={cat.label}
                className={`category-chip ${activeChip === cat.label ? "chip-active" : ""}`}
                onClick={() => handleCategoryChip(cat.label)}
              >
                <div className="chip-img-ring">
                  <img src={cat.img} alt={cat.label} onError={(e) => e.target.src="/assets/indus5.webp"} />
                </div>
                <span className="chip-label">{cat.label}</span>
              </button>
            ))}
          </div>

          {loading ? (
             <div className="product-grid">
               {[1, 2, 3, 4, 5, 6].map(i => (
                 <div key={i} className="product-card skeleton-card" style={{ opacity: 0.6 }}>
                    <div className="card-image-wrapper" style={{ height: '200px', background: '#eee' }}></div>
                    <div className="card-body">
                      <div style={{ height: '20px', background: '#eee', marginBottom: '10px' }}></div>
                      <div style={{ height: '15px', background: '#eee', width: '60%' }}></div>
                    </div>
                 </div>
               ))}
             </div>
          ) : filteredData.length > 0 ? (
            <div className="product-grid">
              {filteredData.map((item, index) => {
                const sellerObj = item.userId && typeof item.userId === 'object' ? item.userId : (item.seller || {});
                const hasCatalog = item.isCatalogActive || sellerObj.isCatalogActive || (sellerObj.featuredProductIds?.length > 0) || item.hasCatalog;
                const catalogId = item.catalogId || sellerObj._id || (item.userId?._id || item.userId) || item._id;

                const cardContent = (
                  <>
                    <div className="card-image-wrapper">
                      {item.images?.[0] ? (
                        <img src={item.images[0].startsWith('http') ? item.images[0] : `${apiEndpoint}${item.images[0].startsWith('/') ? '' : '/'}${item.images[0]}`} alt={item.title} className="product-img" />
                      ) : (
                        <img src={item.imgSrc} alt={item.companyName} className="product-img" />
                      )}
                      <div className="badge-overlay">
                        <span className="verified-badge">
                          <FontAwesomeIcon icon={faCheckCircle} /> VERIFIED SELLER
                        </span>
                      </div>
                      {hasCatalog && (
                        <div className="catalog-badge-overlay" style={{
                          position: 'absolute',
                          bottom: '10px',
                          left: '10px',
                          background: 'rgba(255, 140, 0, 0.9)',
                          color: '#fff',
                          fontSize: '10px',
                          fontWeight: '800',
                          padding: '4px 10px',
                          borderRadius: '4px',
                          letterSpacing: '1px',
                          zIndex: 2,
                          boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                        }}>
                          <FontAwesomeIcon icon={faAngleRight} style={{ marginRight: '5px' }} /> VIEW CATALOG
                        </div>
                      )}
                    </div>

                    <div className="card-body">
                      <h3 className="product-title">{item.title || item.mainProducts}</h3>
                      <div className="supplier-info">
                        <h4 className="supplier-name">{item.companyName || sellerObj.companyName || sellerObj.name}</h4>
                        <div className="supplier-meta">
                          <div className="rating-stars">
                            <FontAwesomeIcon icon={faStar} />
                            <span>{item.rating || '4.5'}</span>
                          </div>
                          <span className="separator">•</span>
                          <span className="years-exp">{item.location || item.city || 'India'}</span>
                        </div>
                      </div>
                      <div className="card-actions">
                        <Link to="/register-buyer" className="btn-primary" onClick={(e) => e.stopPropagation()}>Get Quote</Link>
                      </div>
                    </div>
                  </>
                );

                if (hasCatalog) {
                  return (
                    <Link 
                      to={`/catalog/${catalogId}`} 
                      className="product-card" 
                      key={index}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      {cardContent}
                    </Link>
                  );
                }

                return (
                  <div className="product-card" key={index}>
                    {cardContent}
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

export default CncMachinesSupplier;
