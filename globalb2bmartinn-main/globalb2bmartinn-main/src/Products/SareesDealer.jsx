import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
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
import { sareesData } from "./MarketplaceData";

const apiEndpoint = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3005';

const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Delhi", "Jammu & Kashmir", "Ladakh", "Chandigarh", "Puducherry",
  "Surat", "Mumbai", "Varanasi", "Kolkata", "Jaipur", "Lucknow",
  "Ahmedabad", "Coimbatore", "Hyderabad", "Chennai", "Bengaluru",
  "Kanchipuram", "Banaras", "Dharmavaram", "Murshidabad", "Bhagalpur"
];

const Sarees = () => {
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [moqFilter, setMoqFilter] = useState("Any Quantity");
  const [locationQuery, setLocationQuery] = useState("");
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [sortBy, setSortBy] = useState("Most Relevant");
  const [filteredData, setFilteredData] = useState(sareesData);
  const [searchContext, setSearchContext] = useState("Premium Sarees");
  const [activeChip, setActiveChip] = useState("All");
  const [dbProducts, setDbProducts] = useState([]);

  useEffect(() => {
    const fetchSareeProducts = async () => {
      try {
        const res = await axios.get(`${apiEndpoint}/products/category/Sarees`);
        setDbProducts(res.data);
        setFilteredData([...sareesData, ...res.data]);
      } catch (err) {
        console.error("Failed to fetch saree products:", err);
        setFilteredData(sareesData);
      }
    };
    fetchSareeProducts();
  }, []);

  const handleMaterialChange = (material) => {
    setSelectedMaterials(prev => 
      prev.includes(material) 
        ? prev.filter(m => m !== material) 
        : [...prev, material]
    );
  };

  const handleApplyFilters = () => {
    let result = [...sareesData, ...dbProducts];

    // Filter by Materials
    if (selectedMaterials.length > 0) {
      result = result.filter(item => 
        selectedMaterials.some(m => {
          const text = [
            item.mainProducts, 
            item.productOrService, 
            Array.isArray(item.title) ? item.title[0] : item.title, 
            Array.isArray(item.description) ? item.description[0] : item.description,
            item.category,
            item.subCategory
          ].filter(Boolean).join(' ').toLowerCase();
          return text.includes(m.toLowerCase());
        })
      );
    }

    // Filter by Location
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

    // Filter by MOQ
    if (moqFilter !== "Any Quantity") {
      const minMoq = parseInt(moqFilter);
      result = result.filter(item => {
          const itemMoq = parseInt(item.moq) || 0;
          return itemMoq >= minMoq || itemMoq === 0; // Assume 0 means any quantity if not specified
      });
    }

    // Sort Results
    if (sortBy === "Highest Rated") {
      result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (sortBy === "Newest") {
      result.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
    }

    setFilteredData(result);
    
    // Update context text
    let context = "Premium Sarees";
    if (selectedMaterials.length > 0) context = selectedMaterials.join(", ") + " Sarees";
    if (locationQuery) context += ` in ${locationQuery}`;
    setSearchContext(context);
  };

  const resetFilters = () => {
    setSelectedMaterials([]);
    setMoqFilter("Any Quantity");
    setLocationQuery("");
    setFilteredData([...sareesData, ...dbProducts]);
    setSearchContext("Premium Sarees");
    setActiveChip("All");
  };

  const handleCategoryChip = (cat) => {
    setActiveChip(cat);
    if (cat === "All") { resetFilters(); return; }
    
    const allData = [...sareesData, ...dbProducts];
    const result = allData.filter(item => {
      const searchableText = [
        item.mainProducts, 
        item.productOrService, 
        Array.isArray(item.title) ? item.title[0] : item.title, 
        item.category
      ].filter(Boolean).join(' ').toLowerCase();
      
      return searchableText.includes(cat.toLowerCase());
    });
    
    setFilteredData(result);
    setSearchContext(cat + " Sarees");
  };

  const sareeCategories = [
    { label: "All",      img: "/assets/premium_saree.png" },
    { label: "Silk",     img: "/assets/cat_silk.png" },
    { label: "Banarasi", img: "/assets/cat_banarasi.png" },
    { label: "Cotton",   img: "/assets/cat_cotton.png" },
    { label: "Handloom", img: "/assets/cat_handloom.png" },
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
              <label className="filter-label">Material Type</label>
              <div className="checkbox-group">
                {["Silk", "Cotton", "Linen", "Synthetic Blend"].map(material => (
                  <label key={material} className="checkbox-item">
                    <input 
                      type="checkbox" 
                      checked={selectedMaterials.includes(material)}
                      onChange={() => handleMaterialChange(material)}
                    /> <span>{material}</span>
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
            <h3>Scale Your Textile Business</h3>
            <p>Get featured in top searches and reach premium global buyers.</p>
            <Link to="/packages" className="upgrade-link">Upgrade Now &gt;</Link>
          </div>
        </aside>

        <main className="content-area">

          {/* ── Category Image Strip ── */}
          <div className="category-chips-bar">
            {sareeCategories.map((cat) => (
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

          {filteredData.length > 0 ? (
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
                          margin: '8px 0'
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
                        {Array.isArray(item.description) ? item.description[0] : (item.description || 'Premium quality product from verified textile manufacturers.')}
                      </p>
                      
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
                              <span>{item.rating || 5.0}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="supplier-meta-grid">
                          <span className="location-tag">
                            <FontAwesomeIcon icon={faMapMarkerAlt} /> {item.location || "India"}
                          </span>
                          <span className="years-badge">
                            <FontAwesomeIcon icon={faCheckCircle} /> {item.experience || item.years || '1+'} Experience
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

export default Sarees;
