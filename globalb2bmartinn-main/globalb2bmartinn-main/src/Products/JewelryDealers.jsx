import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faStar, 
  faMapMarkerAlt, 
  faCheckCircle, 
  faSearch, 
  faFilter,
  faChevronDown,
  faChevronUp,
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";
import "./MarketplacePremium.css";
import axios from "axios";
import { jewelryData as staticJewelryData } from "./MarketplaceData";

const ProductCard = ({ item, index, apiEndpoint }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const description = item.description || "";
  const hasLongDesc = description.length > 60;
  
  const sellerObj = item.userId && typeof item.userId === 'object' ? item.userId : (item.seller || {});
  const hasCatalog = item.isCatalogActive || sellerObj.isCatalogActive || (sellerObj.featuredProductIds?.length > 0) || item.hasCatalog;
  const catalogId = item.catalogId || sellerObj._id || (item.userId?._id || item.userId) || item._id;

  const cardContent = (
    <>
      <div className="card-image-wrapper">
        <img 
          src={item.images?.[0] 
            ? (item.images[0].startsWith('http') ? item.images[0] : `${apiEndpoint}${item.images[0].startsWith('/') ? '' : '/'}${item.images[0]}`) 
            : (item.imgSrc || "/assets/premium_jewelry.png")} 
          alt={item.companyName || item.title} 
          className="product-img" 
          onError={(e) => e.target.src="/assets/premium_jewelry.png"}
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
        <span className="card-category-tag">{item.productOrService || item.category || "Jewellery"}</span>
      </div>

      <div className="card-body">
        <h3 className="product-title">{item.title || item.mainProducts}</h3>
        
        {(description || item.productOrService) && (
          <div className="desc-container">
            <p className={`product-desc ${isExpanded ? 'expanded' : ''}`}>
              {description || item.productOrService}
            </p>
            {hasLongDesc && (
              <button className="view-more-btn" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsExpanded(!isExpanded); }}>
                {isExpanded ? "View Less" : "View More"}
                <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
              </button>
            )}
          </div>
        )}

        <div className="supplier-section">
          <span className="supplier-label">SUPPLIED BY</span>
          
          <div className="supplier-brand-row">
            <div className="supplier-logo-placeholder">
              {(item.companyName || sellerObj.companyName || sellerObj.name || "S").charAt(0)}
            </div>
            <div className="supplier-info-stack">
              <h4 className="supplier-name">{item.companyName || sellerObj.companyName || sellerObj.name || "Verified Seller"}</h4>
              <div className="rating-box">
                <FontAwesomeIcon icon={faStar} />
                <span>{item.rating || "4.5"}</span>
              </div>
            </div>
          </div>
          
          <div className="supplier-meta-grid">
            <span className="location-tag">
              <FontAwesomeIcon icon={faMapMarkerAlt} /> {item.location || sellerObj.cityname || "India"}
            </span>
            <span className="years-badge">
              <FontAwesomeIcon icon={faCheckCircle} /> {item.years || "1 YRS"} Experience
            </span>
          </div>
        </div>

        <div className="card-actions">
          <Link to="/register-buyer" className="btn-quick-quote" onClick={(e) => e.stopPropagation()}>Quick Quote</Link>
          <Link to="/register-buyer" className="btn-contact" onClick={(e) => e.stopPropagation()}>Contact</Link>
        </div>
      </div>
    </>
  );

  if (hasCatalog) {
    return (
      <Link to={`/catalog/${catalogId}`} className="product-card" style={{ textDecoration: 'none', color: 'inherit' }}>
        {cardContent}
      </Link>
    );
  }

  return (
    <div className="product-card">
      {cardContent}
    </div>
  );
};

const INDIAN_STATES = [
  "Maharashtra", "Gujarat", "Uttar Pradesh", "Punjab", "Haryana", "Andhra Pradesh",
  "Tamil Nadu", "Karnataka", "West Bengal", "Bihar", "Rajasthan", "Madhya Pradesh",
  "Delhi", "Kolkata", "Mumbai", "Pune", "Nashik", "Ahmedabad", "Surat", "Jaipur"
];

const apiEndpoint = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3005';

const JewelryDealers = () => {
  const [selectedCats, setSelectedCats] = useState([]);
  const [locationQuery, setLocationQuery] = useState("");
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [sortBy, setSortBy] = useState("Most Relevant");
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchContext, setSearchContext] = useState("Premium Jewellery");
  const [activeChip, setActiveChip] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${apiEndpoint}/products/category/Jewellery`);
        const dbProducts = res.data || [];
        
        const combined = [...staticJewelryData, ...dbProducts];
        setAllData(combined);
        setFilteredData(combined);
      } catch (err) {
        console.error("Failed to fetch jewelry data:", err);
        setAllData(staticJewelryData);
        setFilteredData(staticJewelryData);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleCatChange = (cat) => {
    setSelectedCats(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const handleApplyFilters = () => {
    let result = [...allData];

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
    setFilteredData(allData);
    setSearchContext("Premium Jewellery");
    setActiveChip("All");
  };

  const handleCategoryChip = (cat) => {
    setActiveChip(cat);
    if (cat === "All") { resetFilters(); return; }
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
    setSearchContext(cat + " Jewelry");
  };

  const jewelryCategories = [
    { label: "All",        img: "/assets/jewelry-all.jpeg" }, // Using placeholders if actual path unknown, but usually they are in assets
    { label: "Necklaces",  img: "/assets/necklaces.jpeg" },
    { label: "Earrings",   img: "/assets/earrings.jpeg" },
    { label: "Rings",      img: "/assets/rings.jpeg" },
    { label: "Gold",       img: "/assets/gold-jewelry.jpeg" },
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
              <label className="filter-label">Jewelry Types</label>
              <div className="checkbox-group">
                {["Necklaces", "Earrings", "Rings", "Gold", "Artificial"].map(type => (
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
            <h3>Exquisite Diamond Collections</h3>
            <p>Get featured in top searches and reach premium global buyers.</p>
            <Link to="/packages" className="upgrade-link">Upgrade Now &gt;</Link>
          </div>
        </aside>

        <main className="content-area">
          <div className="category-chips-bar">
            {jewelryCategories.map((cat) => (
              <button
                key={cat.label}
                className={`category-chip ${activeChip === cat.label ? "chip-active" : ""}`}
                onClick={() => handleCategoryChip(cat.label)}
              >
                <div className="chip-img-ring">
                  <img src={cat.img} alt={cat.label} onError={(e) => e.target.src="/assets/jewelry-all.jpeg"} />
                </div>
                <span className="chip-label">{cat.label}</span>
              </button>
            ))}
          </div>

          {loading ? (
            <div className="loading-container">
              <div className="loader"></div>
              <p>Fetching 154+ Genuine Jewelry Sellers...</p>
            </div>
          ) : filteredData.length > 0 ? (
            <div className="product-grid">
              {filteredData.map((item, index) => (
                <ProductCard key={index} item={item} index={index} apiEndpoint={apiEndpoint} />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <FontAwesomeIcon icon={faSearch} size="3x" />
              <h3>No results found</h3>
              <p>Try adjusting your filters or location to find more jewelry suppliers.</p>
              <button className="btn-primary" onClick={resetFilters}>Clear All Filters</button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default JewelryDealers;
