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

const apiEndpoint = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3005';
const classifiedData = [
  {
    name: "Aqsa",
    companyName: "Artful Endeavor",
    productOrService: "Handicraft",
    imgSrc: "/assets/handicraft10.jpg",
    mainProducts: "Traditional Brass & Metal Handicrafts",
    years: "5 YRS",
    location: "Moradabad, UP, India",
    rating: "4.5",
  },
  {
    name: "4 Ever Handicraft",
    companyName: "4 Ever Handicraft",
    productOrService: "Decor Items",
    imgSrc: "/assets/hands.jpg",
    mainProducts: "Handmade Crafts, Decor Items, Art Pieces",
    years: "1 YRS",
    location: "Delhi, India",
    rating: "4.7",
  },
  {
    name: "Manzar",
    companyName: "Unique Collection",
    productOrService: "Custom Crafts",
    imgSrc: "/assets/hand2.jpg",
    mainProducts: "Exclusive Handcrafted Items, Custom Collections",
    years: "1 YRS",
    location: "Delhi, India",
    rating: "4.5",
  },
  {
    name: "Saleem",
    companyName: "Saleem Handicraft",
    productOrService: "Traditional Art",
    imgSrc: "/assets/hand5.jpeg",
    mainProducts: "Traditional Artifacts, Decorative Items",
    years: "1 YRS",
    location: "Jaipur, India",
    rating: "4.5",
  },
  {
    name: "Naved",
    companyName: "Naved Saqlani Handicrafts",
    productOrService: "Wooden & Metal Art",
    imgSrc: "/assets/hand1.jpg",
    mainProducts: "Wooden carvings, Metal sculptures, Ceramics",
    years: "2 YRS",
    location: "Jaipur, Rajasthan",
    rating: "4.9",
  },
  {
    name: "Pankaj",
    companyName: "Sonu Handicrafts",
    productOrService: "Artisanal Crafts",
    imgSrc: "/assets/hand6.jpeg",
    mainProducts: "Artisanal Crafts, Traditional Artifacts",
    years: "1 YRS",
    location: "Jodhpur, India",
    rating: "4.5",
  },
  {
    name: "Mohammad Monis",
    companyName: "M.M Traders Moradabad",
    productOrService: "Brass Handicrafts",
    imgSrc: "/assets/handi.jpeg",
    mainProducts: "Brass Handicrafts, Wooden Carvings",
    years: "1 YRS",
    location: "Moradabad, UP, India",
    rating: "4.5",
  },
  {
    name: "Abdul Wajid",
    companyName: "Sarkar Sahab Handicraft",
    productOrService: "Wooden Artifacts",
    imgSrc: "/assets/handi1.jpeg",
    mainProducts: "Handicrafts, Wooden Artifacts",
    years: "1 YRS",
    location: "Moradabad, UP, India",
    rating: "4.8",
  },
];

const INDIAN_STATES = [
  "Maharashtra", "Gujarat", "Uttar Pradesh", "Punjab", "Haryana", "Andhra Pradesh",
  "Tamil Nadu", "Karnataka", "West Bengal", "Bihar", "Rajasthan", "Madhya Pradesh",
  "Delhi", "Kolkata", "Mumbai", "Pune", "Nashik", "Ahmedabad", "Surat", "Jaipur"
];

const Handicraft = () => {
  const navigate = useNavigate();
  const [selectedCats, setSelectedCats] = useState([]);
  const [locationQuery, setLocationQuery] = useState("");
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [sortBy, setSortBy] = useState("Most Relevant");
  const [filteredData, setFilteredData] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);
  const [activeChip, setActiveChip] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${apiEndpoint}/products/category/Handicraft`);
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
        const compText = [
          item.companyName, 
          item.seller?.companyName, 
          item.seller?.name
        ].filter(Boolean).join(' ').toLowerCase();
        return locText.includes(query) || compText.includes(query);
      });
    }

    if (sortBy === "Highest Rated") {
      result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
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

  const craftCategories = [
    { label: "All",           img: "/assets/hand.avif" },
    { label: "Brass",         img: "/assets/handi.jpeg" },
    { label: "Wooden",        img: "/assets/hand1.jpg" },
    { label: "Decor",         img: "/assets/hand2.jpg" },
    { label: "Traditional",   img: "/assets/hand3.jpeg" },
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
              <label className="filter-label">Craft Categories</label>
              <div className="checkbox-group">
                {["Brass", "Wooden", "Decor", "Traditional", "Metal"].map(type => (
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
            <h3>Artisan Direct</h3>
            <p>Export premium Indian handicrafts globally. Connect with verified artisan clusters.</p>
            <Link to="/packages" className="upgrade-link">Upgrade Now &gt;</Link>
          </div>
        </aside>

        <main className="content-area">
          <div className="category-chips-bar">
            {craftCategories.map((cat) => (
              <button
                key={cat.label}
                className={`category-chip ${activeChip === cat.label ? "chip-active" : ""}`}
                onClick={() => handleCategoryChip(cat.label)}
              >
                <div className="chip-img-ring">
                  <img src={cat.img} alt={cat.label} onError={(e) => e.target.src="/assets/hand.avif"} />
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
                const companyName = item.companyName || item.seller?.companyName || item.seller?.name || "Verified Supplier";
                const title = Array.isArray(item.title) ? item.title[0] : (item.mainProducts || item.productOrService);

                const CardContent = (
                  <>
                    <div className="card-image-wrapper">
                      <img 
                        src={item.images?.[0] ? `${apiEndpoint}${encodeURI(item.images[0].replace(/\\/g, '/'))}` : (item.imgSrc || "/assets/hand.avif")} 
                        alt={companyName} 
                        className="product-img" 
                        onError={(e) => e.target.src="/assets/hand.avif"}
                      />
                      <div className="badge-overlay">
                        <span className="verified-badge">
                          <FontAwesomeIcon icon={faCheckCircle} /> VERIFIED SUPPLIER
                        </span>
                      </div>
                      <span className="card-category-tag">{item.productOrService || item.category || "Handicraft"}</span>
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
                            <FontAwesomeIcon icon={faCheckCircle} /> {item.years || item.experience || "1 YRS"} Experience
                          </span>
                        </div>
                      </div>

                      <div className="card-actions">
                        <button className="btn-quick-quote" onClick={(e) => { e.preventDefault(); e.stopPropagation(); navigate('/register-buyer'); }}>Quick Quote</button>
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
              <p>Try adjusting your filters or location to find more craft suppliers.</p>
              <button className="btn-primary" onClick={resetFilters}>Clear All Filters</button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Handicraft;
