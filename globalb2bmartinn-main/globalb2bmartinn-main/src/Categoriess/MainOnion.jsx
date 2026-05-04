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
import "../Products/MarketplacePremium.css";
import FullPageSkeleton from "../Components/FullPageSkeleton";

const apiEndpoint = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3005';

const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Delhi", "Jammu & Kashmir", "Ladakh", "Chandigarh", "Puducherry",
  "Nashik", "Indore", "Pune", "Nagpur", "Ahmedabad", "Surat", "Rajkot", "Bhavnagar"
];

const onionData = [
  {
    name: "Mr. Sandesh Durgawale",
    companyName: "Sandesh Durgawale",
    productOrService: "Onion Seeds",
    imgSrc: "/assets/yellowonion.jpeg",
    mainProducts: "High-Quality Onion Seeds, Agricultural Products",
    years: "1 YRS",
    location: "Nagpur, India",
    rating: 4.7,
    ratingsCount: 85,
    responseRate: "88%",
    verified: true
  },
  {
    name: "Babubhai",
    companyName: "Kishan Exim",
    productOrService: "Onion Powder",
    imgSrc: "/assets/onionpowder.jpeg",
    mainProducts: "Onion Powder, Dehydrated Onions, Garlic Powder",
    years: "1 YRS",
    location: "Gujarat, India",
    rating: 4.4,
    ratingsCount: 65,
    responseRate: "93%",
    verified: true
  },
  {
    name: "Sarvesh Rajput",
    companyName: "Sarvesh Agro",
    productOrService: "Onion Seeds",
    imgSrc: "/assets/onion3.jpeg",
    mainProducts: "Onion Seeds, Agricultural Seeds, Fertilizers",
    years: "1 YRS",
    location: "Uttar Pradesh, India",
    rating: 4.3,
    ratingsCount: 60,
    responseRate: "83%",
    verified: true
  },
  {
    name: "Sanjay Dhakane",
    companyName: "Shani Jyot Agro",
    productOrService: "Onion",
    imgSrc: "/assets/onion4.jpg",
    mainProducts: "Onions, Agricultural Products",
    years: "1 YRS",
    location: "Maharashtra, India",
    rating: 4.2,
    ratingsCount: 60,
    responseRate: "78%",
    verified: false
  },
  {
    name: "Bapu Gaikwad",
    companyName: "Wamantara Farmer Producer",
    productOrService: "Maize, Onion",
    imgSrc: "/assets/onion6.jpg",
    mainProducts: "Maize, Onion",
    years: "1 YRS",
    location: "Yeola, Maharashtra, India",
    rating: 4.7,
    ratingsCount: 32,
    responseRate: "90%",
    verified: true
  },
  {
    name: "Ebrahim Sayyad",
    companyName: "Brother Enterprises",
    productOrService: "Onion",
    imgSrc: "/assets/onion12.jpg",
    mainProducts: "Fresh Onions, Export Quality Onions",
    years: "1 YRS",
    location: "Pune, Maharashtra, India",
    rating: 4.5,
    ratingsCount: 120,
    responseRate: "85%",
    verified: true
  }
];

const OnionDealers = () => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [locationQuery, setLocationQuery] = useState("");
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredData, setFilteredData] = useState(onionData);
  const [searchContext, setSearchContext] = useState("Premium Onion Seeds & Products");
  const [activeChip, setActiveChip] = useState("All");
  const [dbProducts, setDbProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOnionProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${apiEndpoint}/products/category/Onion`);
        setDbProducts(res.data);
        setFilteredData([...onionData, ...res.data]);
      } catch (err) {
        console.error("Failed to fetch onion products:", err);
        setFilteredData(onionData);
      } finally {
        setTimeout(() => setLoading(false), 2000);
      }
    };
    fetchOnionProducts();
  }, []);

  const handleTypeChange = (type) => {
    setSelectedTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type) 
        : [...prev, type]
    );
  };

  const handleApplyFilters = () => {
    let result = [...onionData, ...dbProducts];

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
    setSearchContext(selectedTypes.length > 0 ? selectedTypes.join(", ") + " Onion Products" : "Premium Onion Seeds & Products");
  };

  const resetFilters = () => {
    setSelectedTypes([]);
    setLocationQuery("");
    setFilteredData([...onionData, ...dbProducts]);
    setSearchContext("Premium Onion Seeds & Products");
    setActiveChip("All");
  };

  const handleCategoryChip = (cat) => {
    setActiveChip(cat);
    if (cat === "All") { resetFilters(); return; }
    
    const allData = [...onionData, ...dbProducts];
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
    setSearchContext(cat + " Products");
  };

  const categories = [
    { label: "All",      img: "/assets/yellowonion.jpeg" },
    { label: "Seeds",    img: "/assets/yellowonion.jpeg" },
    { label: "Powder",   img: "/assets/onionpowder.jpeg" },
    { label: "Dehydrated", img: "/assets/onion1.jpeg" },
    { label: "Fresh",    img: "/assets/freshonion.jpeg" },
  ];

  if (loading) {
    return (
      <div className="marketplace-container">
        <FullPageSkeleton />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="marketplace-container">
        <Helmet>
          <title>Premium Onion Seeds & Products - Global B2B Mart</title>
        </Helmet>
        <FullPageSkeleton />
      </div>
    );
  }

  return (
    <div className="marketplace-container">
      <Helmet>
        <title>Contact the Best Suppliers of Onion Seeds & Dehydrated Onions</title>
        <meta name="description" content="Connect with top suppliers of onion seeds, onion powder, dehydrated onions, white onion, and red onion. Premium B2B portal for agricultural products." />
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
                {["Onion Seeds", "Onion Powder", "Dehydrated", "Fresh Onion"].map(type => (
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
                  <img src={cat.img} alt={cat.label} />
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
                      src={item.imgSrc || (item.images?.[0] ? `${apiEndpoint}${item.images[0].replace(/\\/g, '/')}` : "/assets/yellowonion.jpeg")} 
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
                          {(item.companyName || item.seller?.companyName || "O").charAt(0)}
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

export default OnionDealers;
