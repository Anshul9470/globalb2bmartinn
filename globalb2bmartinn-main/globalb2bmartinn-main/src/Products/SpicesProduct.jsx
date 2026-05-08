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
import { spicesData } from "./MarketplaceData";

const ProductCard = ({ item, index, apiEndpoint }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const description = item.description || "";
  const hasLongDesc = description.length > 60;

  // Catalog Logic
  const sellerObj = item.userId && typeof item.userId === 'object' ? item.userId : (item.seller || item);
  const hasCatalog = item.isCatalogActive || sellerObj?.isCatalogActive || (sellerObj?.featuredProductIds?.length > 0) || item.hasCatalog;
  const catalogId = item.catalogId || sellerObj?._id || (item.userId?._id || item.userId) || item._id;

  const CardContent = (
    <>
      <div className="card-image-wrapper">
        <img 
          src={item.imgSrc || (item.images && item.images.length > 0 ? (item.images[0].startsWith('http') ? item.images[0] : `${apiEndpoint}${item.images[0]}`) : "/assets/spices11.jpeg")} 
          alt={item.companyName || item.title} 
          className="product-img" 
          onError={(e) => e.target.src="/assets/spices11.jpeg"}
        />
        <div className="badge-overlay">
          <span className="verified-badge">
            <FontAwesomeIcon icon={faCheckCircle} /> VERIFIED QUALITY
          </span>
        </div>
        <span className="card-category-tag">{item.productOrService || item.category}</span>
        
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
        <h3 className="product-title">{item.mainProducts || item.title}</h3>
        
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

        {description && (
          <div className="desc-container">
            <p className={`product-desc ${isExpanded ? 'expanded' : ''}`}>
              {description}
            </p>
            {hasLongDesc && (
              <button className="view-more-btn" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsExpanded(!isExpanded); }}>
                {isExpanded ? "View Less" : "View More"}
                <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
              </button>
            )}
          </div>
        )}
        {!description && (
           <p style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '12px' }}>
              Premium quality product from verified wholesale supplier.
           </p>
        )}

        <div className="supplier-section">
          <span className="supplier-label">SUPPLIED BY</span>
          
          <div className="supplier-brand-row">
            <div className="supplier-logo-placeholder">
              {(item.companyName || item.seller?.companyName || "S").charAt(0)}
            </div>
            <div className="supplier-info-stack">
              <h4 className="supplier-name">{item.companyName || item.seller?.companyName || "Verified Seller"}</h4>
              <div className="rating-box">
                <FontAwesomeIcon icon={faStar} />
                <span>{item.rating || "4.5"}</span>
              </div>
            </div>
          </div>
          
          <div className="supplier-meta-grid">
            <span className="location-tag">
              <FontAwesomeIcon icon={faMapMarkerAlt} /> {item.location || item.seller?.cityname || "India"}
            </span>
            <span className="years-badge">
              <FontAwesomeIcon icon={faCheckCircle} /> {item.years || item.seller?.experience || "1 YRS"} Experience
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
};

const apiEndpoint = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3005';
const classifiedData = spicesData;

const INDIAN_STATES = [
  "Maharashtra", "Kerala", "Tamil Nadu", "Telangana", "Andhra Pradesh", "Gujarat",
  "Rajasthan", "Delhi", "Uttar Pradesh", "West Bengal", "Punjab", "Haryana", "Karnataka", "Bihar"
];

const SpicesProduct = () => {
  const [selectedCats, setSelectedCats] = useState([]);
  const [locationQuery, setLocationQuery] = useState("");
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [dbProducts, setDbProducts] = useState([]);
  const [dbSellers, setDbSellers] = useState([]);
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [activeChip, setActiveChip] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch products in Spices category
        const prodRes = await axios.get(`${apiEndpoint}/products/category/Spices`);
        
        // Fetch users who are Spices sellers
        const userRes = await axios.get(`${apiEndpoint}/by-category/Spices`);
        
        const dbSellersData = userRes.data || [];
        const dbProds = prodRes.data || [];

        // Convert sellers to product-like format for the grid
        const spiceAssets = [
          "/assets/spices.jpg", 
          "/assets/spices1.jpg", 
          "/assets/spices2.jpg", 
          "/assets/spices11.jpeg", 
          "/assets/cardomn.jpg",
          "/assets/agros.jpeg",
          "/assets/agro_main.png",
          "/assets/pulses1.jpeg",
          "/assets/pulses_mix.jpg",
          "/assets/baramati_agro.png",
          "/assets/darideep_agro.png",
          "/assets/soham_agro.png",
          "/assets/jaydev_agro.png",
          "/assets/tanushka_agro.png"
        ];
        
        const mappedSellers = dbSellersData.map((s, idx) => {
          const isVenus = (s.companyName || "").toLowerCase().includes("venus");
          return {
            _id: s._id || `seller-${idx}`,
            companyName: s.companyName || "Quality Spices Hub",
            name: s.name,
            location: `${s.cityname || s.city || 'India'}, ${s.statename || s.state || ''}`,
            productOrService: s.productOrService || "Spices Dealer",
            mainProducts: s.productOrService || "Premium Masala & Spices",
            imgSrc: isVenus ? "/assets/herbal1.png" : ((s.images && s.images.length > 0) ? s.images[0] : spiceAssets[idx % spiceAssets.length]),
            description: s.productDescription || s.productOrService || "Wholesale supplier of premium quality spices and culinary herbs. Verified quality and bulk export ready.",
            rating: (4.4 + (idx % 7) * 0.1).toFixed(1),
            years: (2 + (idx % 12)).toString() + " YRS",
            isUserCard: true
          };
        });

        const combined = [...spicesData, ...mappedSellers, ...dbProds];
        setAllData(combined);
        setFilteredData(combined);
      } catch (err) {
        console.error("Failed to fetch spices data:", err);
        setAllData(spicesData);
        setFilteredData(spicesData);
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
      result = result.filter(item => 
        selectedCats.some(c => {
          const text = [
            item.mainProducts,
            item.productOrService,
            item.title,
            item.description,
            item.category,
            item.subCategory
          ].filter(Boolean).join(' ').toLowerCase();
          return text.includes(c.toLowerCase());
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
    setSelectedCats([]);
    setLocationQuery("");
    setFilteredData(allData);
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
        item.description,
        item.category,
        item.subCategory
      ].filter(Boolean).join(' ').toLowerCase();
      return text.includes(cat.toLowerCase());
    });
    setFilteredData(result);
  };

  const spiceCategories = [
    { label: "All",        img: "/assets/spices11.jpeg" },
    { label: "Turmeric",   img: "/assets/spices.jpg" },
    { label: "Chili",      img: "/assets/spices1.jpg" },
    { label: "Cardamom",   img: "/assets/cardomn.jpg" },
    { label: "Pepper",     img: "/assets/spices2.jpg" },
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
              <label className="filter-label">Spice Type</label>
              <div className="checkbox-group">
                {["Turmeric", "Chili", "Cardamom", "Pepper", "Cumin", "Ginger"].map(type => (
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
              <label className="filter-label">Origin / State</label>
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
            <div className="pro-badge">SPICE KING</div>
            <h3>Kerala Aroma</h3>
            <p>Direct from Idukki farms. Premium grade green cardamom and black pepper for bulk orders.</p>
            <Link to="/packages" className="upgrade-link">Get Free Samples &gt;</Link>
          </div>
        </aside>

        <main className="content-area">
          <div className="category-chips-bar">
            {spiceCategories.map((cat) => (
              <button
                key={cat.label}
                className={`category-chip ${activeChip === cat.label ? "chip-active" : ""}`}
                onClick={() => handleCategoryChip(cat.label)}
              >
                <div className="chip-img-ring">
                  <img src={cat.img} alt={cat.label} onError={(e) => e.target.src="/assets/spices11.jpeg"} />
                </div>
                <span className="chip-label">{cat.label}</span>
              </button>
            ))}
          </div>

          {loading ? (
            <div className="loading-container">
              <div className="loader"></div>
              <p>Fetching 232+ Spice Sellers...</p>
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
              <button className="btn-primary" onClick={resetFilters}>Clear Filters</button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default SpicesProduct;
