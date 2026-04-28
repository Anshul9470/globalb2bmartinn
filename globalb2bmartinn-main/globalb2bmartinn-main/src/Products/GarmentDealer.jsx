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
    name: "Soma Sundaram",
    companyName: "Sakthi Tex",
    productOrService: "Silk Sarees",
    imgSrc: "/assets/saree1.jpg",
    mainProducts: "Silk Sarees, Cotton Sarees, Designer Sarees",
    years: "1 YRS",
    location: "Chinnalapatti, TN, India",
    rating: "4.7",
  },
  {
    name: "Gopal K",
    companyName: "GBROS",
    productOrService: "Apparels",
    imgSrc: "/assets/gbgarment1.jpg",
    mainProducts: "Mens T-Shirts, Casual Wear, Apparels",
    years: "1 YRS",
    location: "Tirupur, TN, India",
    rating: "4.6",
  },
  {
    name: "Mandaker",
    companyName: "MC Industry",
    productOrService: "Scottish Costumes",
    imgSrc: "/assets/costume1.jpg",
    mainProducts: "Scottish costumes, Ethnic Wear",
    years: "1 YRS",
    location: "Shillong, Meghalaya",
    rating: "4.3",
  },
  {
    name: "Mr. Sarwan",
    companyName: "Sarik Garments",
    productOrService: "Kids Garments",
    imgSrc: "/assets/kids.jpg",
    mainProducts: "Children's Clothing, Babywear, Kids Accessories",
    years: "1 YRS",
    location: "Nagpur, MH, India",
    rating: "4.7",
  },
  {
    name: "Prateek Tyagi",
    companyName: "Ritika Enterprise",
    productOrService: "Garments Mfg",
    imgSrc: "/assets/t-shirt10.jpg",
    mainProducts: "T-Shirts, Shirts, Garments Manufacturing",
    years: "1 YRS",
    location: "Talhata, UP, India",
    rating: "4.7",
  },
  {
    name: "Arun Bera",
    companyName: "Rupali Bengal Textile",
    productOrService: "Ladies Saree",
    imgSrc: "/assets/saree.jpeg",
    mainProducts: "Silk Sarees, Cotton Sarees, Designer Sarees",
    years: "1 YRS",
    location: "Kolkata, WB, India",
    rating: "4.7",
  },
  {
    name: "Kanhaikumar",
    companyName: "Kanahai Garments",
    productOrService: "Mens Wear",
    imgSrc: "/assets/grs.jpeg",
    mainProducts: "Men's Wear, Women's Wear, Kids' Wear",
    years: "1 YRS",
    location: "Mumbai, MH, India",
    rating: "4.4",
  },
  {
    name: "Mr. Mohit",
    companyName: "Swan Textiles",
    productOrService: "Hosiery",
    imgSrc: "/assets/undergr.jpg",
    mainProducts: "Underwear, Socks, Tights, Hosiery",
    years: "1 YRS",
    location: "Nagpur, MH, India",
    rating: "4.7",
  },
  {
    name: "Rodinliana",
    companyName: "Vakul",
    productOrService: "T-shirts",
    imgSrc: "/assets/tshirt1.jpeg",
    mainProducts: "T-shirts, Polo Shirts, Hoodies, Casual Wear",
    years: "1 YRS",
    location: "Bengaluru, KA, India",
    rating: "4.6",
  },
  {
    name: "Naman",
    companyName: "The White Labeling",
    productOrService: "Formal Shirts",
    imgSrc: "/assets/formal.jpg",
    mainProducts: "Formal shirts, Casual shirts, Designer shirts",
    years: "1 YRS",
    location: "Mumbai, MH, India",
    rating: "4.9",
  },
  {
    name: "Nilesh Aggarwal",
    companyName: "Umang Textile",
    productOrService: "Jeans Manufacturing",
    imgSrc: "/assets/jeans1.jpeg",
    mainProducts: "Jeans, Denim Fabrics",
    years: "1 YRS",
    location: "Mumbai, MH, India",
    rating: "4.5",
  },
  {
    name: "Sonu",
    companyName: "B M Artss Silk",
    productOrService: "Silk Sarees",
    imgSrc: "/assets/saree12.jpeg",
    mainProducts: "Silk Sarees, Handloom Sarees, Designer Sarees",
    years: "6 YRS",
    location: "Varanasi, UP, India",
    rating: "4.7",
  },
];

const INDIAN_STATES = [
  "Maharashtra", "Gujarat", "Uttar Pradesh", "Punjab", "Haryana", "Andhra Pradesh",
  "Tamil Nadu", "Karnataka", "West Bengal", "Bihar", "Rajasthan", "Madhya Pradesh",
  "Delhi", "Kolkata", "Mumbai", "Pune", "Nashik", "Ahmedabad", "Surat", "Jaipur",
  "Kerala", "Assam", "Meghalaya"
];

const GarmentDealer = () => {
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

  const garmentCategories = [
    { label: "All",        img: "/assets/grs.jpeg" },
    { label: "Sarees",     img: "/assets/saree1.jpg" },
    { label: "T-Shirts",   img: "/assets/tshirt1.jpeg" },
    { label: "Shirts",     img: "/assets/formal.jpg" },
    { label: "Jeans",      img: "/assets/jeans1.jpeg" },
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
              <label className="filter-label">Garment Type</label>
              <div className="checkbox-group">
                {["Saree", "T-Shirt", "Shirt", "Kids", "Jeans", "Ethnic"].map(type => (
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
            <h3>Fashion Hub</h3>
            <p>Direct sourcing from India's biggest textile hubs: Tirupur, Surat, and Mumbai.</p>
            <Link to="/packages" className="upgrade-link">Upgrade Now &gt;</Link>
          </div>
        </aside>

        <main className="content-area">
          <div className="category-chips-bar">
            {garmentCategories.map((cat) => (
              <button
                key={cat.label}
                className={`category-chip ${activeChip === cat.label ? "chip-active" : ""}`}
                onClick={() => handleCategoryChip(cat.label)}
              >
                <div className="chip-img-ring">
                  <img src={cat.img} alt={cat.label} onError={(e) => e.target.src="/assets/grs.jpeg"} />
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
                    <img src={item.imgSrc} alt={item.companyName} className="product-img" onError={(e) => e.target.src="/assets/grs.jpeg"} />
                    <div className="badge-overlay">
                      <span className="verified-badge">
                        <FontAwesomeIcon icon={faCheckCircle} /> VERIFIED SUPPLIER
                      </span>
                    </div>
                  </div>

                  <div className="card-body">
                    <div className="card-title-row">
                      <h3 className="product-title">{item.mainProducts}</h3>
                    </div>

                    <p className="product-desc">
                      {item.productOrService || "Premium quality garments and textiles."}
                    </p>

                    <div className="supplier-section">
                      <span className="supplier-label">SUPPLIER</span>
                      <div className="supplier-name-row">
                        <h4 className="supplier-name">{item.companyName}</h4>
                        <div className="rating-box">
                          <FontAwesomeIcon icon={faStar} />
                          <span>{item.rating || 5.0}</span>
                        </div>
                      </div>
                      <span className="experience-text">{item.years} in business • {item.location}</span>
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
              <p>Try adjusting your filters or location to find more garment suppliers.</p>
              <button className="btn-primary" onClick={resetFilters}>Clear All Filters</button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default GarmentDealer;
