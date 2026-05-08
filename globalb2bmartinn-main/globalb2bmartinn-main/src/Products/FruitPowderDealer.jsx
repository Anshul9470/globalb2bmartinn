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
import FullPageSkeleton from "../Components/FullPageSkeleton";

const apiEndpoint = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3005';

const classifiedData = [
  {
    name: "Shubham Machake",
    companyName: "VDS Global Exim",
    productOrService: "Fruit Powder Exporter",
    imgSrc: "/assets/axim1.jpeg",
    mainProducts: "Mango Powder, Banana Powder, Strawberry Powder",
    description: "Premium quality spray-dried fruit powders. 100% natural and export grade.",
    years: "5 YRS",
    location: "Mumbai, India",
    rating: "4.7",
    hasCatalog: false
  },
  {
    name: "Praveen Kumar",
    companyName: "Earth's Nature",
    productOrService: "Natural Powders",
    imgSrc: "/assets/bana2.jpg",
    mainProducts: "Dehydrated Fruit Powders, Apple Powder, Papaya Powder",
    description: "Specializing in organic dehydrated powders for the food and beverage industry.",
    years: "8 YRS",
    location: "Coimbatore, Tamil Nadu",
    rating: "4.6",
    hasCatalog: false
  },
  {
    name: "Mehta Exports",
    companyName: "Mehta Food Ingredients",
    productOrService: "Food Additives",
    imgSrc: "/assets/tomato-powder.jpg",
    mainProducts: "Tomato Powder, Beetroot Powder, Carrot Powder",
    description: "Leading manufacturer of spray-dried vegetable and fruit powders.",
    years: "12 YRS",
    location: "Ahmedabad, Gujarat",
    rating: "4.8",
    hasCatalog: false
  },
  {
    name: "Aman Deep",
    companyName: "Global Spice & Herb",
    productOrService: "Fruit & Spice Powders",
    imgSrc: "/assets/fruit-powder-mix.jpg",
    mainProducts: "Lemon Powder, Orange Peel Powder, Pomegranate Powder",
    description: "High potency fruit powders for nutraceutical and cosmetic applications.",
    years: "3 YRS",
    location: "Delhi, India",
    rating: "4.5",
    hasCatalog: false
  }
];

const INDIAN_STATES = [
  "Maharashtra", "Gujarat", "Tamil Nadu", "Karnataka", "Kerala", "Andhra Pradesh",
  "Delhi", "Uttar Pradesh", "West Bengal", "Madhya Pradesh", "Rajasthan", "Punjab"
];

const FruitPowderDealer = () => {
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
        setLoading(true);
        const res = await axios.get(`${apiEndpoint}/products/category/Fruit Powder`);
        setDbProducts(res.data);
        setFilteredData([...classifiedData, ...res.data]);
      } catch (err) {
        console.error("Failed to fetch fruit powder products:", err);
        setFilteredData(classifiedData);
      } finally {
        setTimeout(() => setLoading(false), 1500);
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

  const powderCategories = [
    { label: "All",        img: "/assets/fruit-powder-mix.jpg" },
    { label: "Mango",      img: "/assets/axim1.jpeg" },
    { label: "Banana",     img: "/assets/bana1.jpg" },
    { label: "Tomato",     img: "/assets/tomato-powder.jpg" },
    { label: "Organic",    img: "/assets/bana2.jpg" },
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
              <label className="filter-label">Powder Types</label>
              <div className="checkbox-group">
                {["Mango", "Banana", "Tomato", "Organic", "Spray Dried", "Dehydrated"].map(type => (
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
            <div className="pro-badge">PRO SOURCE</div>
            <h3>Premium Fruit Powders</h3>
            <p>Connect with manufacturers of spray-dried and vacuum-dried fruit powders.</p>
            <Link to="/packages" className="upgrade-link">Upgrade Now &gt;</Link>
          </div>
        </aside>

        <main className="content-area">
          <div className="category-chips-bar">
            {powderCategories.map((cat) => (
              <button
                key={cat.label}
                className={`category-chip ${activeChip === cat.label ? "chip-active" : ""}`}
                onClick={() => handleCategoryChip(cat.label)}
              >
                <div className="chip-img-ring">
                  <img src={cat.img} alt={cat.label} onError={(e) => e.target.src="/assets/fruit-powder-mix.jpg"} />
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
                const companyName = item.companyName || sellerObj.companyName || sellerObj.name || "Verified Supplier";
                const title = Array.isArray(item.title) ? item.title[0] : (item.mainProducts || item.productOrService);

                const CardContent = (
                  <>
                    <div className="card-image-wrapper">
                      <img 
                        src={item.images?.[0] ? `${apiEndpoint}${encodeURI(item.images[0].replace(/\\/g, '/'))}` : (item.imgSrc || "/assets/fruit-powder-mix.jpg")} 
                        alt={companyName} 
                        className="product-img" 
                        onError={(e) => e.target.src="/assets/fruit-powder-mix.jpg"}
                      />
                      <div className="badge-overlay">
                        <span className="verified-badge">
                          <FontAwesomeIcon icon={faCheckCircle} /> VERIFIED SUPPLIER
                        </span>
                      </div>
                      <span className="card-category-tag">{item.productOrService || item.category || "Fruit Powder"}</span>
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
                      <h3 className="product-title">{title}</h3>
                      
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
                        {item.description || "Premium quality fruit powder from verified wholesale suppliers."}
                      </p>

                      <div className="supplier-section">
                        <span className="supplier-label">SUPPLIED BY</span>
                        
                        <div className="supplier-brand-row">
                          <div className="supplier-logo-placeholder">
                            {companyName.charAt(0)}
                          </div>
                          <div className="supplier-info-stack">
                            <h4 className="supplier-name">{companyName}</h4>
                            <div className="rating-box">
                              <FontAwesomeIcon icon={faStar} />
                              <span>{item.rating || "4.5"}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="supplier-meta-grid">
                          <span className="location-tag">
                            <FontAwesomeIcon icon={faMapMarkerAlt} /> {item.location || item.state || "India"}
                          </span>
                          <span className="years-badge">
                            <FontAwesomeIcon icon={faCheckCircle} /> {item.years || "1 YRS"} Experience
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
              <p>Try adjusting your filters or location to find more powder suppliers.</p>
              <button className="btn-primary" onClick={resetFilters}>Clear All Filters</button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default FruitPowderDealer;
