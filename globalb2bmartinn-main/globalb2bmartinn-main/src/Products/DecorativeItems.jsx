import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faStar, 
  faMapMarkerAlt, 
  faCheckCircle, 
  faSearch, 
  faFilter
} from "@fortawesome/free-solid-svg-icons";
import "./MarketplacePremium.css";

const apiEndpoint = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3005';

const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Delhi", "Jammu & Kashmir", "Ladakh", "Chandigarh", "Puducherry",
  "Firozabad", "Moradabad", "Pune", "Gurugram", "Agra", "Mumbai", "Jaipur", "Surat"
];

const decorativeData = [
  {
    name: "Harshit Gupta",
    companyName: "Jai Shree Krishna Decoration Company",
    productOrService: "Glass Products & Decor Items",
    imgSrc: "/assets/kris5.webp",
    mainProducts: "Decorative Glass Items, Home Decor, Glass Art",
    years: "1 YRS",
    location: "Firozabad, Uttar Pradesh, India",
    rating: 4.8,
    ratingsCount: 120,
    responseRate: "90%",
    verified: true
  },
  {
    name: "mm-overseas",
    companyName: "mm-overseas",
    productOrService: "Decorative Items, Glass Decorative items",
    imgSrc: "/assets/mm2.webp",
    mainProducts: "Decorative Items",
    years: "1 YRS",
    location: "Moradabad, Uttar Pradesh, India",
    rating: 4.0,
    ratingsCount: 50,
    responseRate: "85%",
    verified: true
  },
  {
    name: "Wall Mantra",
    companyName: "Wall Mantra",
    productOrService: "Decorative Items",
    imgSrc: "/assets/decors.jpg",
    mainProducts: "Decorative Mirrors, Wall Arts, Photo Frames, etc.",
    years: "1 YRS",
    location: "Delhi, India",
    rating: 4.5,
    ratingsCount: 75,
    responseRate: "92%",
    verified: true
  },
  {
    name: "Shikha Dhingra",
    companyName: "Adikala Home Décor & Craft Store",
    productOrService: "Handicraft",
    imgSrc: "/assets/decor6.jpeg",
    mainProducts: "Handcrafted Décor, Custom Crafts, Artistic Home Accessories",
    years: "1 YRS",
    location: "Delhi, India",
    rating: 4.4,
    ratingsCount: 30,
    responseRate: "80%",
    verified: true
  },
  {
    name: "Dharamveer Singh",
    companyName: "M K Bharty Marvel Handicraft",
    productOrService: "Decorative Items",
    imgSrc: "/assets/decor5.jpg",
    mainProducts: "Decorative Mirrors, Wall Arts, Photo Frames, etc.",
    years: "1 YRS",
    location: "Delhi, India",
    rating: 4.5,
    ratingsCount: 75,
    responseRate: "92%",
    verified: true
  },
  {
    name: "Parveen",
    companyName: "JR Crafts India",
    productOrService: "Marble Decorative Items",
    imgSrc: "/assets/marble3.jpeg",
    mainProducts: "Marble Statues, Marble Vases, Marble Decor Pieces",
    years: "1 YRS",
    location: "Delhi, India",
    rating: 4.5,
    ratingsCount: 75,
    responseRate: "92%",
    verified: true
  },
  {
    name: "Lalita Sharma",
    companyName: "Value Plus International",
    productOrService: "Decor",
    imgSrc: "/assets/decor7.jpeg",
    mainProducts: "Home Decor, Office Decor, Custom Design Pieces",
    years: "1 YRS",
    location: "Gurugram, Delhi, India",
    rating: 4.6,
    ratingsCount: 85,
    responseRate: "88%",
    verified: true
  }
];

const DecorativeItems = () => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [locationQuery, setLocationQuery] = useState("");
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredData, setFilteredData] = useState(decorativeData);
  const [searchContext, setSearchContext] = useState("Premium Decorative Items Suppliers");
  const [activeChip, setActiveChip] = useState("All");
  const [dbProducts, setDbProducts] = useState([]);

  useEffect(() => {
    const fetchDecorativeProducts = async () => {
      try {
        const res = await axios.get(`${apiEndpoint}/products/category/Decorative`);
        setDbProducts(res.data);
        setFilteredData([...decorativeData, ...res.data]);
      } catch (err) {
        console.error("Failed to fetch decorative products:", err);
        setFilteredData(decorativeData);
      }
    };
    fetchDecorativeProducts();
  }, []);

  const handleTypeChange = (type) => {
    setSelectedTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type) 
        : [...prev, type]
    );
  };

  const handleApplyFilters = () => {
    let result = [...decorativeData, ...dbProducts];

    if (selectedTypes.length > 0) {
      result = result.filter(item => 
        selectedTypes.some(t => {
          const text = [
            item.mainProducts, 
            item.productOrService, 
            item.title,
            item.category
          ].filter(Boolean).join(' ').toLowerCase();
          return text.includes(t.toLowerCase());
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
        return locText.includes(query);
      });
    }

    setFilteredData(result);
    setSearchContext(selectedTypes.length > 0 ? selectedTypes.join(", ") + " Suppliers" : "Premium Decorative Items Suppliers");
  };

  const resetFilters = () => {
    setSelectedTypes([]);
    setLocationQuery("");
    setFilteredData([...decorativeData, ...dbProducts]);
    setSearchContext("Premium Decorative Items Suppliers");
    setActiveChip("All");
  };

  const handleCategoryChip = (cat) => {
    setActiveChip(cat);
    if (cat === "All") { resetFilters(); return; }
    
    const allData = [...decorativeData, ...dbProducts];
    const result = allData.filter(item => {
      const searchableText = [
        item.mainProducts, 
        item.productOrService, 
        item.title,
        item.category
      ].filter(Boolean).join(' ').toLowerCase();
      return searchableText.includes(cat.toLowerCase());
    });
    
    setFilteredData(result);
    setSearchContext(cat + " Decor");
  };

  const categories = [
    { label: "All",      img: "/assets/decors.jpg" },
    { label: "Wall Art", img: "/assets/deco1.jpg" },
    { label: "Mirrors",  img: "/assets/decor2.webp" },
    { label: "Vases",    img: "/assets/decor5.jpg" },
    { label: "Marble",   img: "/assets/marble3.jpeg" },
    { label: "Glass",    img: "/assets/kris5.webp" },
  ];

  return (
    <div className="marketplace-container">
      <Helmet>
        <title>Premium Decorative Items Suppliers & Manufacturers | Global B2B Mart</title>
        <meta name="description" content="Connect with top decorative items suppliers. Find wall art, mirrors, vases, and glass decor from verified manufacturers. Premium B2B home decor marketplace." />
      </Helmet>

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
              <label className="filter-label">Decor Category</label>
              <div className="checkbox-group">
                {["Wall Art", "Mirrors", "Photo Frames", "Vases", "Glass Art"].map(type => (
                  <label key={type} className="checkbox-item">
                    <input 
                      type="checkbox" 
                      checked={selectedTypes.includes(type)}
                      onChange={() => handleTypeChange(type)}
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
        </aside>

        <main className="content-area">
          <div className="category-chips-bar">
            {categories.map((cat) => (
              <button
                key={cat.label}
                className={`category-chip ${activeChip === cat.label ? "chip-active" : ""}`}
                onClick={() => handleCategoryChip(cat.label)}
              >
                <div className="chip-img-ring">
                  <img src={cat.img} alt={cat.label} onError={(e) => e.target.src="/assets/decors.jpg"} />
                </div>
                <span className="chip-label">{cat.label}</span>
              </button>
            ))}
          </div>

          <div className="results-info-bar">
            <h1 className="search-context-title">{searchContext}</h1>
            <p className="results-count">Showing {filteredData.length} Suppliers</p>
          </div>

          {filteredData.length > 0 ? (
            <div className="product-grid">
              {filteredData.map((item, index) => (
                <div className="product-card" key={index}>
                  <div className="card-image-wrapper">
                    <img 
                      src={item.imgSrc || (item.images?.[0] ? `${apiEndpoint}${item.images[0].replace(/\\/g, '/')}` : "/assets/decors.jpg")} 
                      alt={item.companyName || item.title} 
                      className="product-img" 
                    />
                    <div className="badge-overlay">
                      <span className="verified-badge">
                        <FontAwesomeIcon icon={faCheckCircle} /> VERIFIED SUPPLIER
                      </span>
                    </div>
                  </div>

                  <div className="card-body">
                    <h3 className="product-title">{item.productOrService || item.title || item.mainProducts}</h3>
                    
                    <div className="supplier-section">
                      <span className="supplier-label">SUPPLIED BY</span>
                      <div className="supplier-brand-row">
                        <div className="supplier-logo-placeholder">
                          {(item.companyName || item.seller?.companyName || "D").charAt(0)}
                        </div>
                        <div className="supplier-info-stack">
                          <h4 className="supplier-name">{item.companyName || item.seller?.companyName || item.name}</h4>
                          <div className="rating-box">
                            <FontAwesomeIcon icon={faStar} />
                            <span>{item.rating || 4.5}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="supplier-meta-grid">
                        <span className="location-tag">
                          <FontAwesomeIcon icon={faMapMarkerAlt} /> {item.location || "India"}
                        </span>
                        <span className="years-badge">
                          <FontAwesomeIcon icon={faCheckCircle} /> {item.years || '1+ YRS'} Experience
                        </span>
                      </div>
                    </div>

                    <div className="card-actions">
                      <Link to="/register-buyer" className="btn-quick-quote">Quick Quote</Link>
                      <Link to="/register-buyer" className="btn-contact">Contact</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <FontAwesomeIcon icon={faSearch} size="3x" />
              <h3>No suppliers found</h3>
              <p>Try adjusting your filters or location.</p>
              <button className="btn-primary" onClick={resetFilters}>Clear All Filters</button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default DecorativeItems;
