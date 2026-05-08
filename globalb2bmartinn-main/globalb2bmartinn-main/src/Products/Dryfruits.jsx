import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faStar, 
  faMapMarkerAlt, 
  faCheckCircle, 
  faSearch, 
  faFilter,
  faBookOpen
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./MarketplacePremium.css";

const classifiedData = [
  {
    name: "Adil Qadri",
    companyName: "LIDDER ENTERPRISES",
    productOrService: "Dry Fruits Manufacturer",
    imgSrc: "/assets/dryfruits.jpeg",
    mainProducts: "Almonds, Walnuts, Cashews, Pistachios",
    years: "1 YRS",
    location: "Srinagar, Jammu & Kashmir",
    rating: "4.8",
    isCatalogActive: true,
    catalogId: "adil-lidder"
  },
  {
    name: "Varad Ramesh Higmire",
    companyName: "Varad Sales Corporation",
    productOrService: "Brown Raisins",
    imgSrc: "/assets/brownraisins1.jpeg",
    mainProducts: "Brown Raisins, Premium Dry Fruits",
    years: "1 YRS",
    location: "Nashik, Maharashtra",
    rating: "4.3",
  },
  {
    name: "Raj Gupta",
    companyName: "Shyam Enterprises",
    productOrService: "Groundnut Specialist",
    imgSrc: "/assets/peanut.jpeg",
    mainProducts: "Groundnut, Peanuts, Nut Kernels",
    years: "1 YRS",
    location: "Rajkot, Gujarat",
    rating: "4.6",
  },
  {
    name: "Tuka Ram More",
    companyName: "Honeybijapur Raisins",
    productOrService: "Raisins Supplier",
    imgSrc: "/assets/groundnut.jpeg",
    mainProducts: "Groundnut, Raisins, Dry Fruits",
    years: "1 YRS",
    location: "Bijapur, Karnataka",
    rating: "4.6",
  },
  {
    name: "Akash Kandula",
    companyName: "Akash Enterprise",
    productOrService: "Nut Wholesaler",
    imgSrc: "/assets/dry5.jpeg",
    mainProducts: "Almonds, Cashews, Pistachios, Raisins, Dates",
    years: "1 YRS",
    location: "Hyderabad, Telangana",
    rating: "4.6",
  },
  {
    name: "Sanjay",
    companyName: "Ashirwad Agro Products",
    productOrService: "Cashew Processor",
    imgSrc: "/assets/cashew.jpeg",
    mainProducts: "Cashew Nuts, Premium Dried Fruits",
    years: "1 YRS",
    location: "Mumbai, Maharashtra",
    rating: "4.2",
  },
  {
    name: "Mr. Selva Kumar Sakthivel",
    companyName: "SSR Cashews",
    productOrService: "Cashew Exporter",
    imgSrc: "/assets/cashew4.jpg",
    mainProducts: "High-Quality Cashew Nuts, W320, W240, Pathai Cashews",
    years: "1 YRS",
    location: "Cuddalore, Tamil Nadu",
    rating: "4.9",
  },
];

const INDIAN_STATES = [
  "Jammu & Kashmir", "Maharashtra", "Gujarat", "Karnataka", "Telangana", "Tamil Nadu",
  "Rajasthan", "Delhi", "Punjab", "West Bengal"
];

const Dryfruits = () => {
  const [selectedCats, setSelectedCats] = useState([]);
  const [locationQuery, setLocationQuery] = useState("");
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [dynamicProducts, setDynamicProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeChip, setActiveChip] = useState("All");

  const apiEndpoint = process.env.REACT_APP_API_ENDPOINT || "https://globalb2bmart-backend.onrender.com";

  useEffect(() => {
    const fetchDryFruits = async () => {
      try {
        setLoading(true);
        // Fetch both "Dryfruits" and "Dry Fruits" to be safe
        const [res1, res2] = await Promise.all([
          axios.get(`${apiEndpoint}/products/category/Dryfruits`),
          axios.get(`${apiEndpoint}/products/category/Dry Fruits`)
        ]);
        
        const combinedRaw = [
          ...(res1.data?.products || []),
          ...(res2.data?.products || [])
        ];

        // Remove duplicates by _id
        const uniqueRaw = Array.from(new Map(combinedRaw.map(item => [item._id, item])).values());

        const products = uniqueRaw.map(p => {
          const imagePath = p.images && p.images.length > 0 ? p.images[0] : "";
          const fullImgSrc = imagePath 
            ? `${apiEndpoint}${encodeURI(imagePath.replace(/\\/g, '/'))}` 
            : "/assets/dryfruits.jpeg";

          const sellerObj = p.userId && typeof p.userId === 'object' ? p.userId : (p.seller || {});
          const catalogId = p.catalogId || sellerObj._id || (p.userId?._id || p.userId) || p._id;
          const isCatalogActive = p.isCatalogActive || sellerObj.isCatalogActive || (sellerObj.featuredProductIds?.length > 0) || p.hasCatalog || false;

          return {
            _id: p._id,
            name: sellerObj.name || "Verified Seller",
            companyName: sellerObj.companyName || p.title || "Premium Nut Store",
            productOrService: p.description || p.subCategory || "Dry Fruits Supplier",
            imgSrc: fullImgSrc,
            mainProducts: p.title || p.mainProducts || "Premium Dry Fruits",
            years: p.experience || "1 YRS",
            location: p.location || sellerObj.cityname || "India",
            rating: p.rating || (Math.random() * (5 - 4.2) + 4.2).toFixed(1),
            isCatalogActive: isCatalogActive,
            catalogId: catalogId
          };
        });

        setDynamicProducts(products);
      } catch (error) {
        console.error("Error fetching dry fruits:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDryFruits();
  }, [apiEndpoint]);

  const allData = [...dynamicProducts, ...classifiedData];

  const handleCatChange = (cat) => {
    setSelectedCats(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const getFilteredData = () => {
    let result = [...allData];

    if (activeChip !== "All") {
      result = result.filter(item =>
        item.mainProducts.toLowerCase().includes(activeChip.toLowerCase())
      );
    }

    if (selectedCats.length > 0) {
      result = result.filter(item => 
        selectedCats.some(c => 
          item.mainProducts.toLowerCase().includes(c.toLowerCase())
        )
      );
    }

    if (locationQuery) {
      const query = locationQuery.toLowerCase();
      result = result.filter(item => 
        item.location.toLowerCase().includes(query)
      );
    }

    return result;
  };

  const filteredData = getFilteredData();

  const resetFilters = () => {
    setSelectedCats([]);
    setLocationQuery("");
    setActiveChip("All");
  };

  const dryFruitCategories = [
    { label: "All",        img: "/assets/dryfruits.jpeg" },
    { label: "Cashews",    img: "/assets/cashew.jpeg" },
    { label: "Almonds",    img: "/assets/dry1.jpg" },
    { label: "Walnuts",    img: "/assets/dry2.jpg" },
    { label: "Raisins",    img: "/assets/raisins.jpg" },
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
              <label className="filter-label">Nut Type</label>
              <div className="checkbox-group">
                {["Almond", "Cashew", "Walnut", "Pistachio", "Raisin", "Peanut"].map(type => (
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
              <label className="filter-label">Origin / Location</label>
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

            <button className="apply-filters-btn" onClick={() => {}}>Apply Filters</button>
          </div>

          <div className="pro-ad-card">
            <div className="pro-badge">TOP SUPPLIER</div>
            <h3>Kashmir Nuts Co.</h3>
            <p>Direct from the valley. 100% organic walnuts and saffron at wholesale prices.</p>
            <Link to="/packages" className="upgrade-link">View Catalog &gt;</Link>
          </div>
        </aside>

        <main className="content-area">
          <div className="category-chips-bar">
            {dryFruitCategories.map((cat) => (
              <button
                key={cat.label}
                className={`category-chip ${activeChip === cat.label ? "chip-active" : ""}`}
                onClick={() => setActiveChip(cat.label)}
              >
                <div className="chip-img-ring">
                  <img src={cat.img} alt={cat.label} onError={(e) => e.target.src="/assets/dryfruits.jpeg"} />
                </div>
                <span className="chip-label">{cat.label}</span>
              </button>
            ))}
          </div>

          {loading ? (
            <div style={{ textAlign: 'center', padding: '3rem' }}>
              <div className="loader"></div>
              <p>Loading Premium Suppliers...</p>
            </div>
          ) : filteredData.length > 0 ? (
            <div className="product-grid">
              {filteredData.map((item, index) => (
                <div className="product-card" key={index}>
                  <div className="card-image-wrapper">
                    <img src={item.imgSrc} alt={item.companyName} className="product-img" />
                    <div className="badge-overlay">
                      <span className="verified-badge">
                        <FontAwesomeIcon icon={faCheckCircle} /> VERIFIED SOURCE
                      </span>
                      {item.isCatalogActive && (
                        <Link 
                          to={`/catalog/${item.catalogId}`} 
                          className="catalog-badge-link"
                          style={{
                            background: "linear-gradient(135deg, #FFD700, #FFA500)",
                            color: "#001f3f",
                            padding: "6px 12px",
                            borderRadius: "20px",
                            fontSize: "0.7rem",
                            fontWeight: "900",
                            textDecoration: "none",
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            boxShadow: "0 4px 15px rgba(255, 215, 0, 0.3)",
                            border: "1px solid rgba(255,255,255,0.2)"
                          }}
                        >
                          <FontAwesomeIcon icon={faBookOpen} /> VIEW CATALOG
                        </Link>
                      )}
                    </div>
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
              <button className="btn-primary" onClick={resetFilters}>Clear Filters</button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dryfruits;
