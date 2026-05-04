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
import FullPageSkeleton from "../Components/FullPageSkeleton";

const apiEndpoint = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3005';

const INDIAN_STATES = [
  "Maharashtra", "Gujarat", "Uttar Pradesh", "Madhya Pradesh", "West Bengal",
  "Punjab", "Haryana", "Karnataka", "Bihar", "Rajasthan", "Indore", "Agra", "Mumbai"
];

const potatoData = [
  {
    name: "Ankit Patel",
    companyName: "Rudra Agro Food Tulsi Cold Storage",
    productOrService: "Potato Suppliers",
    imgSrc: "/assets/potato.jpg",
    mainProducts: "Fresh potatoes, Organic potatoes, Export quality potatoes",
    years: "1 YRS",
    location: "Mumbai, Maharashtra, India",
    rating: 4.9,
    ratingsCount: 250,
    responseRate: "99%",
    verified: true
  },
  {
    name: "Pankaj",
    companyName: "Agricultural Products",
    productOrService: "Potato",
    imgSrc: "/assets/potato6.jpeg",
    mainProducts: "Fresh Potatoes, Organic Potatoes, Premium Potatoes",
    years: "1 YRS",
    location: "Indore, Madhya Pradesh, India",
    rating: 4.4,
    ratingsCount: 45,
    responseRate: "80%",
    verified: true
  },
  {
    name: "Pawan",
    companyName: "Pawan Enterprises",
    productOrService: "Potato",
    imgSrc: "/assets/potato1.jpg",
    mainProducts: "Fresh Potatoes, Organic Potatoes, Premium Potatoes",
    years: "1 YRS",
    location: "Agra, Uttar Pradesh, India",
    rating: 4.2,
    ratingsCount: 30,
    responseRate: "75%",
    verified: true
  },
  {
    name: "Shyam",
    companyName: "Pathare Brothers Pvt Ltd",
    productOrService: "Potato",
    imgSrc: "/assets/potato7.jpeg",
    mainProducts: "Potatoes, Onions, Vegetables",
    years: "1 YRS",
    location: "Maharashtra, India",
    rating: 4.2,
    ratingsCount: 45,
    responseRate: "80%",
    verified: true
  }
];

const PotatoSuppliers = () => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [locationQuery, setLocationQuery] = useState("");
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredData, setFilteredData] = useState(potatoData);
  const [searchContext, setSearchContext] = useState("Premium Potato Suppliers");
  const [activeChip, setActiveChip] = useState("All");
  const [dbProducts, setDbProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPotatoProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${apiEndpoint}/products/category/Potato`);
        setDbProducts(res.data);
        setFilteredData([...potatoData, ...res.data]);
      } catch (err) {
        console.error("Failed to fetch potato products:", err);
        setFilteredData(potatoData);
      } finally {
        setTimeout(() => setLoading(false), 2000);
      }
    };
    fetchPotatoProducts();
  }, []);

  const handleTypeChange = (type) => {
    setSelectedTypes(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const handleApplyFilters = () => {
    let result = [...potatoData, ...dbProducts];

    if (selectedTypes.length > 0) {
      result = result.filter(item => 
        selectedTypes.some(t => {
          const text = [
            item.mainProducts, 
            item.productOrService, 
            item.title
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
    setSearchContext(selectedTypes.length > 0 ? selectedTypes.join(", ") + " Suppliers" : "Premium Potato Suppliers");
  };

  const resetFilters = () => {
    setSelectedTypes([]);
    setLocationQuery("");
    setFilteredData([...potatoData, ...dbProducts]);
    setSearchContext("Premium Potato Suppliers");
    setActiveChip("All");
  };

  const handleCategoryChip = (cat) => {
    setActiveChip(cat);
    if (cat === "All") { resetFilters(); return; }
    
    const allData = [...potatoData, ...dbProducts];
    const result = allData.filter(item => {
      const text = [
        item.mainProducts, 
        item.productOrService, 
        item.title
      ].filter(Boolean).join(' ').toLowerCase();
      return text.includes(cat.toLowerCase());
    });
    
    setFilteredData(result);
    setSearchContext(cat + " Potatoes");
  };

  const categories = [
    { label: "All",      img: "/assets/potato.jpg" },
    { label: "Fresh",    img: "/assets/potato1.jpg" },
    { label: "Organic",  img: "/assets/potato6.jpeg" },
    { label: "Storage",  img: "/assets/potato4.jpg" },
  ];

  if (loading) {
    return (
      <div className="marketplace-container">
        <Helmet>
          <title>Premium Potato Suppliers & Exporters in India</title>
        </Helmet>
        <FullPageSkeleton />
      </div>
    );
  }

  return (
    <div className="marketplace-container">
      <Helmet>
        <title>Premium Potato Suppliers & Exporters in India</title>
        <meta name="description" content="Connect with top potato suppliers, exporters, and cold storage providers. Fresh, organic, and premium potatoes for domestic and export markets." />
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
              <label className="filter-label">Product Type</label>
              <div className="checkbox-group">
                {["Fresh Potatoes", "Organic Potatoes", "Cold Storage", "Dehydrated"].map(type => (
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
              <label className="filter-label">Location</label>
              <div className="search-input-wrapper" style={{ position: "relative" }}>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Search location..." 
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
                  <img src={cat.img} alt={cat.label} onError={(e) => e.target.src="/assets/potato1.jpg"} />
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
                      src={item.imgSrc || (item.images?.[0] ? `${apiEndpoint}${item.images[0].replace(/\\/g, '/')}` : "/assets/potato1.jpg")} 
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
                          {(item.companyName || item.seller?.companyName || "P").charAt(0)}
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

export default PotatoSuppliers;
