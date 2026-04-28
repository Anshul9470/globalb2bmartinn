import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faStar, 
  faMapMarkerAlt, 
  faCheckCircle, 
  faSearch, 
  faFilter
} from "@fortawesome/free-solid-svg-icons";
import "./MarketplacePremium.css";

const classifiedData = [
  {
    name: "Shashikant",
    companyName: "Polyana PVC Pipes",
    productOrService: "PVC Pipes & Profiles",
    imgSrc: "/assets/pvc6.jpeg",
    mainProducts: "PVC Pipes, Plastic Profiles, Fittings",
    years: "1 YRS",
    location: "Pune, Maharashtra, India",
    rating: "4.6",
  },
  {
    name: "Ocean Vidya",
    companyName: "Ocean Vidya Pipe Udyog",
    productOrService: "Pipes & Fittings",
    imgSrc: "/assets/pipe3.jpg",
    mainProducts: "Pipes, Fittings, Plumbing Solutions",
    years: "1 YRS",
    location: "Varanasi, India",
    rating: "4.7",
  },
  {
    name: "Mitesh Gandhi",
    companyName: "Miloni International",
    productOrService: "Industrial Pipes",
    imgSrc: "/assets/fitting.jpeg",
    mainProducts: "PVC Pipes, HDPE Pipes, Pipe Fittings, Valves",
    years: "1 YRS",
    location: "Mumbai, India",
    rating: "4.6",
  },
  {
    name: "Praveen Shah",
    companyName: "STEELCO METAL AND ALLOYS",
    productOrService: "Steel Pipes",
    imgSrc: "/assets/steelpipe.jpeg",
    mainProducts: "Steel Pipes, Alloy Pipes, Seamless Pipes",
    years: "1 YRS",
    location: "Mumbai, India",
    rating: "4.6",
  },
  {
    name: "Arif Khan Pathan",
    companyName: "HI-TECH POLYPLAST",
    productOrService: "HDPE Pipe",
    imgSrc: "/assets/hdpepipe.jpeg",
    mainProducts: "HDPE Pipes, Pipe Fittings, Industrial Pipes",
    years: "1 YRS",
    location: "Nagpur, India",
    rating: "4.6",
  },
  {
    name: "Atul",
    companyName: "VISHWAS SALES CORP",
    productOrService: "Pipes & Fittings",
    imgSrc: "/assets/pipe7.jpeg",
    mainProducts: "Pipes, Fittings, Plumbing Supplies",
    years: "1 YRS",
    location: "Ahmedabad, India",
    rating: "4.6",
  },
  {
    name: "Mr. Mustafa Halai",
    companyName: "M.S HALAI",
    productOrService: "Garden Pipes",
    imgSrc: "/assets/pipe1.jpg",
    mainProducts: "Garden Hoses, Water Pipes, Irrigation Tubes",
    years: "1 YRS",
    location: "Nagpur, India",
    rating: "4.7",
  },
  {
    name: "Jay Patel",
    companyName: "STIBA PIPE & FITTINGS",
    productOrService: "UPVC & PVC Pipes",
    imgSrc: "/assets/pvcpipe.jpeg",
    mainProducts: "PVC Pipes, UPVC Pipes, Bibcocks, Showers",
    years: "1 YRS",
    location: "Vadodara, Gujarat, India",
    rating: "4.9",
  },
];

const INDIAN_STATES = [
  "Maharashtra", "Gujarat", "Uttar Pradesh", "Punjab", "Haryana", "Andhra Pradesh",
  "Tamil Nadu", "Karnataka", "West Bengal", "Bihar", "Rajasthan", "Madhya Pradesh",
  "Delhi", "Kolkata", "Mumbai", "Pune", "Nashik", "Ahmedabad", "Surat", "Jaipur"
];

const Pipes = () => {
  const [selectedCats, setSelectedCats] = useState([]);
  const [locationQuery, setLocationQuery] = useState("");
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [sortBy, setSortBy] = useState("Most Relevant");
  const [filteredData, setFilteredData] = useState(classifiedData);
  const [activeChip, setActiveChip] = useState("All");

  const handleCatChange = (cat) => {
    setSelectedCats(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const handleApplyFilters = () => {
    let result = [...classifiedData];

    if (selectedCats.length > 0) {
      result = result.filter(item => 
        selectedCats.some(c => 
          item.mainProducts.toLowerCase().includes(c.toLowerCase()) || 
          (item.productOrService && item.productOrService.toLowerCase().includes(c.toLowerCase()))
        )
      );
    }

    if (locationQuery) {
      const query = locationQuery.toLowerCase();
      result = result.filter(item => 
        item.location.toLowerCase().includes(query) ||
        item.companyName.toLowerCase().includes(query)
      );
    }

    if (sortBy === "Highest Rated") {
      result.sort((a, b) => b.rating - a.rating);
    }

    setFilteredData(result);
  };

  const resetFilters = () => {
    setSelectedCats([]);
    setLocationQuery("");
    setFilteredData(classifiedData);
    setActiveChip("All");
  };

  const handleCategoryChip = (cat) => {
    setActiveChip(cat);
    if (cat === "All") { resetFilters(); return; }
    const result = classifiedData.filter(item =>
      item.mainProducts.toLowerCase().includes(cat.toLowerCase()) ||
      item.productOrService.toLowerCase().includes(cat.toLowerCase())
    );
    setFilteredData(result);
  };

  const pipeCategories = [
    { label: "All",        img: "/assets/pipe3.jpg" },
    { label: "PVC",        img: "/assets/pvcpipe.jpeg" },
    { label: "HDPE",       img: "/assets/hdpepipe.jpeg" },
    { label: "Steel",      img: "/assets/steelpipe.jpeg" },
    { label: "Fittings",   img: "/assets/fitting.jpeg" },
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
              <label className="filter-label">Pipe Types</label>
              <div className="checkbox-group">
                {["PVC", "UPVC", "HDPE", "Steel", "Fittings"].map(type => (
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
            <h3>Industrial Piping Solutions</h3>
            <p>Connect with manufacturers of high-pressure pipes and fittings.</p>
            <Link to="/packages" className="upgrade-link">Upgrade Now &gt;</Link>
          </div>
        </aside>

        <main className="content-area">
          <div className="category-chips-bar">
            {pipeCategories.map((cat) => (
              <button
                key={cat.label}
                className={`category-chip ${activeChip === cat.label ? "chip-active" : ""}`}
                onClick={() => handleCategoryChip(cat.label)}
              >
                <div className="chip-img-ring">
                  <img src={cat.img} alt={cat.label} onError={(e) => e.target.src="/assets/pipe3.jpg"} />
                </div>
                <span className="chip-label">{cat.label}</span>
              </button>
            ))}
          </div>

          {filteredData.length > 0 ? (
            <div className="product-grid">
              {filteredData.map((item, index) => (
                <div className="product-card" key={index}>
                  <div className="card-image-wrapper">
                    <img src={item.imgSrc} alt={item.companyName} className="product-img" />
                    <div className="badge-overlay">
                      <span className="verified-badge">
                        <FontAwesomeIcon icon={faCheckCircle} /> VERIFIED SUPPLIER
                      </span>
                    </div>
                    <span className="card-category-tag">{item.productOrService}</span>
                  </div>

                  <div className="card-body">
                    <h3 className="product-title">{item.mainProducts}</h3>
                    
                    <div className="supplier-section">
                      <span className="supplier-label">SUPPLIED BY</span>
                      
                      <div className="supplier-brand-row">
                        <div className="supplier-logo-placeholder">
                          {item.companyName.charAt(0)}
                        </div>
                        <div className="supplier-info-stack">
                          <h4 className="supplier-name">{item.companyName}</h4>
                          <div className="rating-box">
                            <FontAwesomeIcon icon={faStar} />
                            <span>{item.rating}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="supplier-meta-grid">
                        <span className="location-tag">
                          <FontAwesomeIcon icon={faMapMarkerAlt} /> {item.location}
                        </span>
                        <span className="years-badge">
                          <FontAwesomeIcon icon={faCheckCircle} /> {item.years || "1 YRS"} Experience
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
              <h3>No results found</h3>
              <p>Try adjusting your filters or location to find more pipe suppliers.</p>
              <button className="btn-primary" onClick={resetFilters}>Clear All Filters</button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Pipes;
