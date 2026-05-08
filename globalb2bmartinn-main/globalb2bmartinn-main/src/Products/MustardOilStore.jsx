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

const apiEndpoint = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3005';

const classifiedData = [
  {
    name: "Krishan Singh",
    companyName: "Krishan Singh Oils",
    productOrService: "Mustard Oil",
    imgSrc: "/assets/oils.jpeg",
    mainProducts: "Pure Mustard Oil, Cold Pressed Mustard Oil",
    years: "1 YRS",
    location: "Delhi, India",
    rating: "4.2",
  },
  {
    name: "Dhamani Enterprises",
    companyName: "Dhamani Enterprises",
    productOrService: "Edible Oils",
    imgSrc: "/assets/oil7.jpeg",
    mainProducts: "Edible Oils, Industrial Oils, Specialty Oils",
    years: "1 YRS",
    location: "Mumbai, India",
    rating: "4.2",
  },
  {
    name: "Ibrahim Shaikh",
    companyName: "Western Info Tech",
    productOrService: "Coconut Oil",
    imgSrc: "/assets/coco-oil.jpg",
    mainProducts: "Coconut Oil, Cashew",
    years: "1 YRS",
    location: "Kudal, Maharashtra",
    rating: "4.3",
  },
  {
    name: "SHREE HIRALAL",
    companyName: "HIRALAL TEL UDHYOG",
    productOrService: "Cooking Oil",
    imgSrc: "/assets/oils2.jpeg",
    mainProducts: "Cooking Oil, Edible Oil",
    years: "1 YRS",
    location: "Rajasthan, India",
    rating: "4.5",
  },
  {
    name: "Manish",
    companyName: "Kanakdhara Enterprises",
    productOrService: "Organic Oils",
    imgSrc: "/assets/oil4.jpeg",
    mainProducts: "Edible Oils, Cooking Oils, Essential Oils",
    years: "1 YRS",
    location: "Pune, India",
    rating: "4.4",
  },
  {
    name: "Pravin",
    companyName: "G.PRAVIN EXPORT",
    productOrService: "Grocery & Oil",
    imgSrc: "/assets/oil3.jpeg",
    mainProducts: "Grocery, Cooking Oil, Spices",
    years: "1 YRS",
    location: "Surat, Gujarat, India",
    rating: "4.5",
  },
];

const INDIAN_STATES = [
  "Maharashtra", "Gujarat", "Uttar Pradesh", "Punjab", "Haryana", "Andhra Pradesh",
  "Tamil Nadu", "Karnataka", "West Bengal", "Bihar", "Rajasthan", "Madhya Pradesh",
  "Delhi", "Kolkata", "Mumbai", "Pune", "Nashik", "Ahmedabad", "Surat", "Jaipur"
];

const MustardOilStore = () => {
  const [selectedCats, setSelectedCats] = useState([]);
  const [locationQuery, setLocationQuery] = useState("");
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [sortBy, setSortBy] = useState("Most Relevant");
  const [filteredData, setFilteredData] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeChip, setActiveChip] = useState("All");

  useEffect(() => {
    const fetchOilProducts = async () => {
      try {
        const res = await axios.get(`${apiEndpoint}/products/category/Mustard Oil`);
        setDbProducts(res.data);
        setFilteredData([...classifiedData, ...res.data]);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch oil products:", err);
        setFilteredData(classifiedData);
        setLoading(false);
      }
    };
    fetchOilProducts();
  }, []);

  const handleCatChange = (cat) => {
    setSelectedCats(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const handleApplyFilters = () => {
    let combined = [...classifiedData, ...dbProducts];
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

    if (sortBy === "Highest Rated") {
      result.sort((a, b) => (b.rating || 4.5) - (a.rating || 4.5));
    }

    setFilteredData(result);
  };

  const resetFilters = () => {
    setSelectedCats([]);
    setLocationQuery("");
    setFilteredData([...classifiedData, ...dbProducts]);
    setActiveChip("All");
  };

  const handleCategoryChip = (cat) => {
    setActiveChip(cat);
    if (cat === "All") { resetFilters(); return; }
    const combined = [...classifiedData, ...dbProducts];
    const result = combined.filter(item => {
        const productStr = (item.mainProducts || item.title || '').toLowerCase();
        const serviceStr = (item.productOrService || item.category || '').toLowerCase();
        return productStr.includes(cat.toLowerCase()) || serviceStr.includes(cat.toLowerCase());
    });
    setFilteredData(result);
  };

  const oilCategories = [
    { label: "All",           img: "/assets/mus1.jpeg" },
    { label: "Mustard Oil",   img: "/assets/oils.jpeg" },
    { label: "Coconut Oil",   img: "/assets/coco-oil.jpg" },
    { label: "Cooking Oil",   img: "/assets/oils2.jpeg" },
    { label: "Cold Pressed",  img: "/assets/oil5.jpeg" },
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
              <label className="filter-label">Oil Categories</label>
              <div className="checkbox-group">
                {["Mustard", "Coconut", "Edible", "Cooking", "Organic"].map(type => (
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
            <h3>Bulk Edible Oils</h3>
            <p>Connect with wholesale suppliers of certified pure mustard and cooking oils.</p>
            <Link to="/packages" className="upgrade-link">Upgrade Now &gt;</Link>
          </div>
        </aside>

        <main className="content-area">
          <div className="category-chips-bar">
            {oilCategories.map((cat) => (
              <button
                key={cat.label}
                className={`category-chip ${activeChip === cat.label ? "chip-active" : ""}`}
                onClick={() => handleCategoryChip(cat.label)}
              >
                <div className="chip-img-ring">
                  <img src={cat.img} alt={cat.label} onError={(e) => e.target.src="/assets/mus1.jpeg"} />
                </div>
                <span className="chip-label">{cat.label}</span>
              </button>
            ))}
          </div>

          {loading ? (
            <div className="loading-state">Loading premium products...</div>
          ) : filteredData.length > 0 ? (
            <div className="product-grid">
              {filteredData.map((item, index) => {
                const sellerObj = item.userId && typeof item.userId === 'object' ? item.userId : (item.seller || {});
                const hasCatalog = item.isCatalogActive || sellerObj.isCatalogActive || (sellerObj.featuredProductIds?.length > 0) || item.hasCatalog;
                const catalogId = item.catalogId || sellerObj._id || (item.userId?._id || item.userId) || item._id;

                const CardContent = (
                  <>
                    <div className="card-image-wrapper">
                      <img 
                          src={item.images?.[0] ? `${apiEndpoint}${encodeURI(item.images[0].replace(/\\/g, '/'))}` : item.imgSrc} 
                          alt={item.title || item.companyName} 
                          className="product-img" 
                          onError={(e) => { if(!item.imgSrc) e.target.src="/assets/oils.jpeg" }}
                      />
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
                      <span className="card-category-tag">{item.productOrService || item.category || 'Mustard Oil'}</span>
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
                          {Array.isArray(item.description) ? item.description[0] : (item.description || 'Pure and refined quality oils from verified wholesale suppliers.')}
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
                              <span>{item.rating || "4.5"}</span>
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
              <p>Try adjusting your filters or location to find more oil suppliers.</p>
              <button className="btn-primary" onClick={resetFilters}>Clear All Filters</button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default MustardOilStore;
