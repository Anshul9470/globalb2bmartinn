import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faStar, 
  faMapMarkerAlt, 
  faCheckCircle, 
  faSearch, 
  faCommentDots,
  faAngleRight,
  faFilter
} from "@fortawesome/free-solid-svg-icons";
import "./MarketplacePremium.css";
import { riceData } from "./MarketplaceData";

const apiEndpoint = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3005'; // Updated to 3005 to match backend

const INDIAN_STATES = [
  "Punjab", "Haryana", "Andhra Pradesh", "Telangana", "Uttar Pradesh", "West Bengal",
  "Bihar", "Gujarat", "Maharashtra", "Karnataka", "Tamil Nadu", "Kerala", "Rajasthan",
  "Madhya Pradesh", "Delhi", "Kolkata", "Mumbai", "Hyderabad", "Bangalore", "Noida"
];

const RiceDealers = () => {
  const [selectedVarieties, setSelectedVarieties] = useState([]);
  const [moqFilter, setMoqFilter] = useState("Any Quantity");
  const [locationQuery, setLocationQuery] = useState("");
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [sortBy, setSortBy] = useState("Most Relevant");
  const [filteredData, setFilteredData] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchContext, setSearchContext] = useState("Premium Indian Rice");
  const [activeChip, setActiveChip] = useState("All");

  useEffect(() => {
    const fetchRiceProducts = async () => {
      try {
        const res = await axios.get(`${apiEndpoint}/products/category/Rice`);
        setDbProducts(res.data);
        setFilteredData([...riceData, ...res.data]); // combine static and dynamic
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch rice products:", err);
        setFilteredData(riceData); // fallback to static
        setLoading(false);
      }
    };
    fetchRiceProducts();
  }, []);

  const handleVarietyChange = (variety) => {
    setSelectedVarieties(prev => 
      prev.includes(variety) 
        ? prev.filter(v => v !== variety) 
        : [...prev, variety]
    );
  };

  const handleApplyFilters = () => {
    let result = [...riceData, ...dbProducts];

    if (selectedVarieties.length > 0) {
      result = result.filter(item => 
        selectedVarieties.some(v => {
          const text = [
            item.mainProducts, 
            item.productOrService, 
            Array.isArray(item.title) ? item.title[0] : item.title, 
            Array.isArray(item.description) ? item.description[0] : item.description,
            item.category,
            item.subCategory
          ].filter(Boolean).join(' ').toLowerCase();
          return text.includes(v.toLowerCase());
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

    if (moqFilter !== "Any Quantity") {
      const minMoq = parseInt(moqFilter);
      result = result.filter(item => {
          const itemMoq = parseInt(item.moq) || 0;
          return itemMoq >= minMoq || itemMoq === 0; // Assume 0 means any quantity if not specified
      });
    }

    if (sortBy === "Highest Rated") {
      result.sort((a, b) => b.rating - a.rating);
    }

    setFilteredData(result);
    
    let context = "Premium Rice";
    if (selectedVarieties.length > 0) context = selectedVarieties.join(", ") + " Rice";
    if (locationQuery) context += ` in ${locationQuery}`;
    setSearchContext(context);
  };

  const resetFilters = () => {
    setSelectedVarieties([]);
    setMoqFilter("Any Quantity");
    setLocationQuery("");
    setFilteredData([...riceData, ...dbProducts]);
    setSearchContext("Premium Indian Rice");
    setActiveChip("All");
  };

  const handleCategoryChip = (cat) => {
    setActiveChip(cat);
    if (cat === "All") { resetFilters(); return; }
    
    // Combine both static and dynamic data before filtering
    const allData = [...riceData, ...dbProducts];
    const result = allData.filter(item => {
      // Dynamic products use title/description/category, static uses mainProducts/productOrService
      const searchableText = [
        item.mainProducts, 
        item.productOrService, 
        Array.isArray(item.title) ? item.title[0] : item.title, 
        item.category
      ].filter(Boolean).join(' ').toLowerCase();
      
      return searchableText.includes(cat.toLowerCase());
    });
    
    setFilteredData(result);
    setSearchContext(cat + " Rice");
  };

  const riceCategories = [
    { label: "All",           img: "/assets/premium_rice.png" },
    { label: "Basmati",       img: "/assets/rice_brown.png" },
    { label: "Sona Masoori",  img: "/assets/patel-rice1.jpg" },
    { label: "Matta Rice",    img: "/assets/sila-rice.jpg" },
    { label: "Long Grain",    img: "/assets/rice9.jpg" },
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

          {loading ? (
            <div className="filter-group-container">
              <div className="filter-group">
                <div className="skeleton-box" style={{ width: '40%', height: '12px', marginBottom: '15px' }}></div>
                <div className="checkbox-group">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="checkbox-item">
                      <div className="skeleton-box" style={{ width: '16px', height: '16px', borderRadius: '4px' }}></div>
                      <div className="skeleton-box" style={{ width: '60%', height: '14px' }}></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="filter-group">
                <div className="skeleton-box" style={{ width: '50%', height: '12px', marginBottom: '15px' }}></div>
                <div className="skeleton-box" style={{ width: '100%', height: '45px', borderRadius: '10px' }}></div>
              </div>
              <div className="skeleton-box" style={{ width: '100%', height: '45px', borderRadius: '10px', marginTop: '10px' }}></div>
            </div>
          ) : (
            <div className="filter-group-container">
              <div className="filter-group">
                <label className="filter-label">Rice Variety</label>
                <div className="checkbox-group">
                  {["Basmati", "Sona Masoori", "Brown Rice", "Long Grain", "Matta Rice"].map(variety => (
                    <label key={variety} className="checkbox-item">
                      <input 
                        type="checkbox" 
                        checked={selectedVarieties.includes(variety)}
                        onChange={() => handleVarietyChange(variety)}
                      /> <span>{variety}</span>
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
          )}

          {loading ? (
            <div className="skeleton-box" style={{ width: '100%', height: '180px', borderRadius: '16px', marginTop: '30px' }}></div>
          ) : (
            <div className="pro-ad-card">
              <div className="pro-badge">PRO MEMBER AD</div>
              <h3>Export Your Rice Globally</h3>
              <p>Connect with international buyers looking for premium Indian grains.</p>
              <Link to="/packages" className="upgrade-link">Upgrade Now &gt;</Link>
            </div>
          )}
        </aside>

        <main className="content-area">
          {loading ? (
            <div className="category-chips-bar">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="category-chip" style={{ opacity: 0.8 }}>
                  <div className="skeleton-box" style={{ width: '64px', height: '64px', borderRadius: '50%' }}></div>
                  <div className="skeleton-box" style={{ width: '40px', height: '12px', marginTop: '10px' }}></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="category-chips-bar">
              {riceCategories.map((cat) => (
                <button
                  key={cat.label}
                  className={`category-chip ${activeChip === cat.label ? "chip-active" : ""}`}
                  onClick={() => handleCategoryChip(cat.label)}
                >
                  <div className="chip-img-ring">
                    <img src={cat.img} alt={cat.label} />
                  </div>
                  <span className="chip-label">{cat.label}</span>
                </button>
              ))}
            </div>
          )}

          {loading ? (
            <div className="product-grid">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="product-card" style={{ opacity: 0.6 }}>
                  <div className="card-image-wrapper">
                    <div className="skeleton-box" style={{ width: '100%', height: '100%' }}></div>
                  </div>
                  <div className="card-body">
                    <div className="skeleton-box" style={{ width: '80%', height: '24px', marginBottom: '12px' }}></div>
                    <div className="supplier-section">
                      <div className="skeleton-box" style={{ width: '40%', height: '10px', marginBottom: '12px' }}></div>
                      <div className="supplier-brand-row">
                        <div className="skeleton-box" style={{ width: '44px', height: '44px', borderRadius: '10px' }}></div>
                        <div style={{ flex: 1 }}>
                          <div className="skeleton-box" style={{ width: '60%', height: '16px', marginBottom: '4px' }}></div>
                          <div className="skeleton-box" style={{ width: '30%', height: '12px' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="card-actions">
                      <div className="skeleton-box" style={{ flex: 1, height: '45px', borderRadius: '8px' }}></div>
                      <div className="skeleton-box" style={{ flex: 1, height: '45px', borderRadius: '8px' }}></div>
                    </div>
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

                const CardContent = (
                  <>
                    <div className="card-image-wrapper">
                      {item.images?.[0] ? (
                        <img src={`${apiEndpoint}${encodeURI(item.images[0].replace(/\\/g, '/'))}`} alt={Array.isArray(item.title) ? item.title[0] : item.title} className="product-img" />
                      ) : item.imgSrc ? (
                        <img src={item.imgSrc} alt={item.companyName} className="product-img" />
                      ) : (
                        <div style={{ width: '100%', height: '100%', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>No Image</div>
                      )}
                      <div className="badge-overlay">
                        <span className="verified-badge">
                          <FontAwesomeIcon icon={faCheckCircle} /> VERIFIED SUPPLIER
                        </span>
                      </div>
                      {hasCatalog && (
                        <div className="catalog-badge-overlay" style={{
                          position: 'absolute',
                          bottom: '10px',
                          left: '10px',
                          background: 'rgba(21, 21, 125, 0.9)',
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
                      <h3 className="product-title">{Array.isArray(item.title) ? item.title[0] : item.title || item.mainProducts}</h3>
                      
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
                      {(item.description || item.images) && (
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
                          {Array.isArray(item.description) ? item.description[0] : (item.description || 'Premium quality product from verified supplier.')}
                        </p>
                      )}

                      <div className="supplier-section">
                        <span className="supplier-label">SUPPLIED BY</span>
                        
                        <div className="supplier-brand-row">
                          <div className="supplier-logo-placeholder">
                            {(item.seller?.companyName || item.seller?.name || item.companyName || "S").charAt(0)}
                          </div>
                          <div className="supplier-info-stack">
                            <h4 className="supplier-name">{item.seller?.companyName || item.seller?.name || item.companyName}</h4>
                            <div className="rating-box">
                              <FontAwesomeIcon icon={faStar} />
                              <span>{item.rating || '4.5'}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="supplier-meta-grid">
                          <span className="location-tag">
                            <FontAwesomeIcon icon={faMapMarkerAlt} /> {item.location || "India"}
                          </span>
                          <span className="years-badge">
                            <FontAwesomeIcon icon={faCheckCircle} /> {item.experience || item.years || '1 YRS'} Experience
                          </span>
                        </div>
                      </div>

                      <div className="card-actions">
                        <button className="btn-quick-quote" onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.location.href='/register-buyer'; }}>Quick Quote</button>
                        <button className="btn-contact" onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.location.href='/register-buyer'; }}>Contact</button>
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
                      style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
                    >
                      {CardContent}
                    </Link>
                  );
                }

                return (
                  <div className="product-card" key={index}>
                    {CardContent}
                  </div>
                );
              })}

            </div>
          ) : (
            <div className="no-results">
              <FontAwesomeIcon icon={faSearch} size="3x" />
              <h3>No results found</h3>
              <p>Try adjusting your filters or location to find more suppliers.</p>
              <button className="btn-primary" onClick={resetFilters}>Clear All Filters</button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default RiceDealers;
