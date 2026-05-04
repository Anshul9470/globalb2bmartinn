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
  "Jaipur", "Agra", "Chennai", "Mumbai", "Varanasi", "Bangalore", "Kolkata"
];

const artsData = [
  {
    name: "Sweta",
    companyName: "Sweta Statue Arts",
    productOrService: "Statue Manufacturer",
    imgSrc: "/assets/statue3.jpg",
    mainProducts: "Statues, Marble Sculptures",
    years: "1 YRS",
    location: "Andhra Pradesh, India",
    rating: 4.3,
    ratingsCount: 78,
    responseRate: "85%",
    verified: true
  },
  {
    name: "Prem",
    companyName: "Prem Arts",
    productOrService: "Arts",
    imgSrc: "/assets/arts.jpg",
    mainProducts: "Paintings, Sculputres, Drawings, Prints, Photography",
    years: "1 YRS",
    location: "Delhi, India",
    rating: 4.5,
    ratingsCount: 50,
    responseRate: "95%",
    verified: true
  },
  {
    name: "Mr. Hemant Kumar",
    companyName: "BAJRANG STONE & ART'S",
    productOrService: "Statue Manufacturer",
    imgSrc: "/assets/statues.jpeg",
    mainProducts: "Marble Statues, Stone Sculptures, Religious Statues",
    years: "1 YRS",
    location: "Jaipur, Rajasthan, India",
    rating: 4.6,
    ratingsCount: 50,
    responseRate: "82%",
    verified: true
  },
  {
    name: "Mr. Goutam Sharma",
    companyName: "RADHA RANI MOORTI ART",
    productOrService: "Statue Manufacturer",
    imgSrc: "/assets/sta3.jpeg",
    mainProducts: "Marble Statues, Stone Sculptures, Religious Idols",
    years: "1 YRS",
    location: "Jaipur, India",
    rating: 4.5,
    ratingsCount: 50,
    responseRate: "85%",
    verified: true
  },
  {
    name: "Mr. Devendra Kumar",
    companyName: "S INDIA INDUSTRIES",
    productOrService: "Statue Manufacturer",
    imgSrc: "/assets/sta5.jpeg",
    mainProducts: "Marble Statues, Stone Sculptures, Religious Idols",
    years: "1 YRS",
    location: "Jaipur, India",
    rating: 4.4,
    ratingsCount: 70,
    responseRate: "84%",
    verified: true
  },
  {
    name: "Mr. Manoj Kumar Yadav",
    companyName: "DHRAMA GOODS EXPORTS PVT LTD",
    productOrService: "Statue Manufacturer",
    imgSrc: "/assets/scr10.jpeg",
    mainProducts: "Marble Statues, Stone Sculptures, Decorative Idols",
    years: "7 YRS",
    location: "Delhi, India",
    rating: 4.8,
    ratingsCount: 60,
    responseRate: "85%",
    verified: true
  },
  {
    name: "Mr. Manish Prajapati",
    companyName: "M/S GAYATRI HANDICRAFT",
    productOrService: "Statue Manufacturer",
    imgSrc: "/assets/statue1.jpeg",
    mainProducts: "Marble Statues, Stone Sculptures, Decorative Idols",
    years: "5 YRS",
    location: "Agra, India",
    rating: 4.2,
    ratingsCount: 45,
    responseRate: "78%",
    verified: true
  }
];

const Arts = () => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [locationQuery, setLocationQuery] = useState("");
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredData, setFilteredData] = useState(artsData);
  const [searchContext, setSearchContext] = useState("Premium Arts & Sculptures Suppliers");
  const [activeChip, setActiveChip] = useState("All");
  const [dbProducts, setDbProducts] = useState([]);

  useEffect(() => {
    const fetchArtsProducts = async () => {
      try {
        const res = await axios.get(`${apiEndpoint}/products/category/Arts`);
        setDbProducts(res.data);
        setFilteredData([...artsData, ...res.data]);
      } catch (err) {
        console.error("Failed to fetch arts products:", err);
        setFilteredData(artsData);
      }
    };
    fetchArtsProducts();
  }, []);

  const handleTypeChange = (type) => {
    setSelectedTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type) 
        : [...prev, type]
    );
  };

  const handleApplyFilters = () => {
    let result = [...artsData, ...dbProducts];

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
    setSearchContext(selectedTypes.length > 0 ? selectedTypes.join(", ") + " Suppliers" : "Premium Arts & Sculptures Suppliers");
  };

  const resetFilters = () => {
    setSelectedTypes([]);
    setLocationQuery("");
    setFilteredData([...artsData, ...dbProducts]);
    setSearchContext("Premium Arts & Sculptures Suppliers");
    setActiveChip("All");
  };

  const handleCategoryChip = (cat) => {
    setActiveChip(cat);
    if (cat === "All") { resetFilters(); return; }
    
    const allData = [...artsData, ...dbProducts];
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
    setSearchContext(cat + " Artworks");
  };

  const categories = [
    { label: "All",        img: "/assets/arts.jpg" },
    { label: "Paintings",  img: "/assets/art1.jpg" },
    { label: "Sculptures", img: "/assets/art2.jpg" },
    { label: "Statues",    img: "/assets/statues.jpeg" },
    { label: "Drawings",   img: "/assets/art3.jpg" },
    { label: "Prints",     img: "/assets/art4.jpeg" },
  ];

  return (
    <div className="marketplace-container">
      <Helmet>
        <title>Premium Arts & Sculptures Suppliers | Global B2B Mart</title>
        <meta name="description" content="Connect with top arts and sculpture suppliers. Find paintings, marble statues, and stone sculptures from verified manufacturers. Premium B2B artistic marketplace." />
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
              <label className="filter-label">Art Type</label>
              <div className="checkbox-group">
                {["Paintings", "Sculptures", "Statues", "Drawings", "Prints"].map(type => (
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
                  <img src={cat.img} alt={cat.label} onError={(e) => e.target.src="/assets/arts.jpg"} />
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
                      src={item.imgSrc || (item.images?.[0] ? `${apiEndpoint}${item.images[0].replace(/\\/g, '/')}` : "/assets/arts.jpg")} 
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
                          {(item.companyName || item.seller?.companyName || "A").charAt(0)}
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

export default Arts;
