import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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

import { wheatData } from "./MarketplaceData";

const apiEndpoint = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3005';
const classifiedData = wheatData;

const INDIAN_STATES = [
  "Punjab", "Haryana", "Uttar Pradesh", "Madhya Pradesh", "Rajasthan", "Bihar", "Gujarat", "Maharashtra"
];

const WheatSupplier = () => {
  const navigate = useNavigate();
  const [selectedCats, setSelectedCats] = useState([]);
  const [locationQuery, setLocationQuery] = useState("");
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);
  const [activeChip, setActiveChip] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${apiEndpoint}/products/category/Wheat`);
        setDbProducts(res.data);
        setFilteredData([...classifiedData, ...res.data]);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setFilteredData(classifiedData);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleCatChange = (cat) => {
    setSelectedCats(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const handleApplyFilters = () => {
    let result = [...classifiedData, ...dbProducts];

    if (selectedCats.length > 0) {
      result = result.filter(item => {
        const text = [
          item.mainProducts, 
          item.productOrService,
          Array.isArray(item.title) ? item.title[0] : item.title
        ].filter(Boolean).join(' ').toLowerCase();
        return selectedCats.some(c => text.includes(c.toLowerCase()));
      });
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
        return locText.includes(query);
      });
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
    
    const allData = [...classifiedData, ...dbProducts];
    const result = allData.filter(item => {
      const text = [
        item.mainProducts, 
        item.productOrService,
        Array.isArray(item.title) ? item.title[0] : item.title,
        item.category
      ].filter(Boolean).join(' ').toLowerCase();
      return text.includes(cat.toLowerCase());
    });
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
              {filteredData.map((item, index) => {
                const sellerObj = item.userId && typeof item.userId === 'object' ? item.userId : item.seller;
                const hasCatalog = item.isCatalogActive || sellerObj?.isCatalogActive || (sellerObj?.featuredProductIds?.length > 0) || item.hasCatalog;
                const catalogId = item.catalogId || sellerObj?._id || (item.userId?._id || item.userId) || item._id;
                const companyName = item.companyName || item.seller?.companyName || item.seller?.name || "Verified Mill";
                const title = Array.isArray(item.title) ? item.title[0] : (item.title || item.mainProducts);

                const CardContent = (
                  <>
                    <div className="card-image-wrapper">
                      <img 
                        src={item.images?.[0] ? `${apiEndpoint}${encodeURI(item.images[0].replace(/\\/g, '/'))}` : (item.imgSrc || "/assets/whe5.avif")} 
                        alt={companyName} 
                        className="product-img" 
                        onError={(e) => e.target.src="/assets/whe5.avif"} 
                      />
                      <div className="badge-overlay">
                        <span className="verified-badge">
                          <FontAwesomeIcon icon={faCheckCircle} /> VERIFIED MILL
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
                      <div className="card-title-row">
                        <h3 className="product-title">{title}</h3>
                      </div>

                      <p className="product-desc">
                        {Array.isArray(item.description) ? item.description[0] : (item.description || "High quality wheat and grain products sourced directly from verified mills.")}
                      </p>

                      <div className="supplier-section">
                        <span className="supplier-label">SUPPLIER</span>
                        <div className="supplier-name-row">
                          <h4 className="supplier-name">{companyName}</h4>
                          <div className="rating-box">
                            <FontAwesomeIcon icon={faStar} />
                            <span>{item.rating || 5.0}</span>
                          </div>
                        </div>
                        <span className="experience-text">{item.location || item.state || "India"}</span>
                      </div>

                      <div className="card-actions">
                        <button className="btn-quick-quote" onClick={(e) => { e.preventDefault(); e.stopPropagation(); navigate('/register-buyer'); }}>Order Bulk</button>
                        <button className="btn-contact" onClick={(e) => { e.preventDefault(); e.stopPropagation(); navigate('/register-buyer'); }}>Contact</button>
                      </div>
                    </div>
                  </>
                );

                if (hasCatalog && catalogId) {
                  return (
                    <Link to={`/catalog/${catalogId}`} className="product-card" key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
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
              <button className="btn-primary" onClick={resetFilters}>Clear Filters</button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default WheatSupplier;
