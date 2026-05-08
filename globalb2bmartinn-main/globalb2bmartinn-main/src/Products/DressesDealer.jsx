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
  faShoppingBag,
  faCertificate
} from "@fortawesome/free-solid-svg-icons";
import "./MarketplacePremium.css";
import FullPageSkeleton from "../Components/FullPageSkeleton";

const classifiedData = [
  {
    _id: "ethnic-emporium",
    name: "Aman Gupta",
    companyName: "Ethnic Emporium",
    productOrService: "Designer Dresses & Suits",
    imgSrc: "/assets/suits.jpeg",
    mainProducts: "Anarkali Suits, Party Wear Dresses, Salwar Kameez",
    years: "8 YRS",
    location: "Surat, Gujarat",
    rating: "4.9",
    isCatalogActive: true,
    catalogId: "nobaraa-fashion"
  },
  {
    _id: "dress-2",
    name: "Priya Sharma",
    companyName: "Style Mantra",
    productOrService: "Western & Indo-Western",
    imgSrc: "/assets/clothing.jpg",
    mainProducts: "Western Gowns, Evening Dresses, Cocktail Outfits",
    years: "5 YRS",
    location: "Mumbai, Maharashtra",
    rating: "4.7",
    isCatalogActive: false
  },
  {
    _id: "banarasi-heritage",
    name: "Javed Ansari",
    companyName: "Banarasi Heritage",
    productOrService: "Traditional Suits",
    imgSrc: "/assets/suits.jpg",
    mainProducts: "Banarasi Silk Suits, Brocade Dresses, Ethnic Sets",
    years: "12 YRS",
    location: "Varanasi, Uttar Pradesh",
    rating: "4.8",
    isCatalogActive: true,
    catalogId: "cleef-empire"
  },
  {
    _id: "dress-4",
    name: "Soma Sundaram",
    companyName: "Sakthi Tex",
    productOrService: "Cotton & Silk Outfits",
    imgSrc: "/assets/saree1.jpg",
    mainProducts: "Silk Dresses, Cotton Sarees, Readymade Blouses",
    years: "15 YRS",
    location: "Chinnalapatti, Tamil Nadu",
    rating: "4.9",
    isCatalogActive: false
  },
  {
    _id: "dress-5",
    name: "Meera Nair",
    companyName: "Kerala Weaves",
    productOrService: "Traditional South Wear",
    imgSrc: "/assets/saree_cotton.png",
    mainProducts: "Kasavu Dresses, Kerala Cotton Suits, Ethnic Skirts",
    years: "6 YRS",
    location: "Kochi, Kerala",
    rating: "4.6",
    isCatalogActive: false
  },
  {
    _id: "dress-6",
    name: "Rajesh Fashion",
    companyName: "Lucifer Garments",
    productOrService: "Premium Western Wear",
    imgSrc: "/assets/fashion_main.png",
    mainProducts: "Designer Gowns, Maxi Dresses, Summer Collections",
    years: "10 YRS",
    location: "Mumbai, Maharashtra",
    rating: "4.7",
    isCatalogActive: false
  }
];

const INDIAN_STATES = [
  "Gujarat", "Maharashtra", "Uttar Pradesh", "Tamil Nadu", "Delhi", "West Bengal", "Rajasthan", "Punjab"
];

const apiEndpoint = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3005';

const DressesDealer = () => {
  const [loading, setLoading] = useState(true);
  const [selectedCats, setSelectedCats] = useState([]);
  const [locationQuery, setLocationQuery] = useState("");
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [sortBy, setSortBy] = useState("Most Relevant");
  const [dbProducts, setDbProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [activeChip, setActiveChip] = useState("All");

  useEffect(() => {
    const fetchDresses = async () => {
      try {
        const res = await axios.get(`${apiEndpoint}/products/category/Dresses`);
        // Transform DB products to match classifiedData structure
        const transformedDb = res.data.map(p => {
          const imagePath = p.images?.[0] || p.image;
          const fullImgSrc = imagePath 
            ? `${apiEndpoint}${encodeURI(imagePath.replace(/\\/g, '/'))}`
            : "/assets/clothing.jpg";

          return {
            _id: p._id,
            name: p.seller?.name || "Verified Seller",
            companyName: p.seller?.companyName || p.title || "Elite Fashion",
            productOrService: p.description || p.subCategory || "Premium Dresses",
            imgSrc: fullImgSrc,
            mainProducts: p.title || p.mainProducts || "Designer Garments",
            years: p.experience || "5 YRS",
            location: p.location || p.seller?.cityname || "India",
            rating: p.rating || (Math.random() * (5 - 4.5) + 4.5).toFixed(1),
            isCatalogActive: p.isCatalogActive || p.hasCatalog || false,
            catalogId: p.catalogId || p.seller?._id
          };
        });

        setDbProducts(transformedDb);
        setFilteredData([...classifiedData, ...transformedDb]);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch dresses:", err);
        setFilteredData(classifiedData);
        setLoading(false);
      }
    };
    fetchDresses();
  }, []);

  const handleCatChange = (cat) => {
    setSelectedCats(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const handleApplyFilters = () => {
    let result = [...classifiedData, ...dbProducts];

    if (selectedCats.length > 0) {
      result = result.filter(item => 
        selectedCats.some(c => 
          item.mainProducts.toLowerCase().includes(c.toLowerCase()) || 
          item.productOrService.toLowerCase().includes(c.toLowerCase())
        )
      );
    }

    if (locationQuery) {
      const query = locationQuery.toLowerCase();
      result = result.filter(item => 
        item.location.toLowerCase().includes(query)
      );
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
    const result = [...classifiedData, ...dbProducts].filter(item =>
      item.mainProducts.toLowerCase().includes(cat.toLowerCase()) ||
      item.productOrService.toLowerCase().includes(cat.toLowerCase())
    );
    setFilteredData(result);
  };

  const categories = [
    { label: "All",        img: "/assets/clothing.jpg" },
    { label: "Suits",      img: "/assets/suits.jpeg" },
    { label: "Ethnic",     img: "/assets/saree1.jpg" },
    { label: "Western",    img: "/assets/fashion_main.png" },
    { label: "Designer",   img: "/assets/premium_saree.png" },
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
        {/* SIDEBAR FILTERS */}
        <aside className="filters-sidebar">
          <div className="sidebar-header">
            <div className="header-title">
              <FontAwesomeIcon icon={faFilter} />
              <h2>Refine Search</h2>
            </div>
            <button className="reset-link" onClick={resetFilters}>Clear All</button>
          </div>

          <div className="filter-group-container">
            <div className="filter-group">
              <label className="filter-label">Dress Category</label>
              <div className="checkbox-group">
                {["Suit", "Gown", "Ethnic", "Western", "Cotton", "Silk"].map(type => (
                  <label key={type} className="checkbox-item">
                    <input 
                      type="checkbox" 
                      checked={selectedCats.includes(type)}
                      onChange={() => handleCatChange(type)}
                    /> <span>{type} Wear</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <label className="filter-label">Production Hub</label>
              <div className="search-input-wrapper" style={{ position: "relative" }}>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Search state/city..." 
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
            <div className="pro-badge">PREMIUM TEXTILE HUB</div>
            <div className="pro-icon-ring"><FontAwesomeIcon icon={faShoppingBag} /></div>
            <h3>Fashion Export Pro</h3>
            <p>Direct manufacturer access for global bulk export of dresses and garments.</p>
            <Link to="/packages" className="upgrade-link">View Premium Plans &gt;</Link>
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="content-area">
          <div className="category-chips-bar">
            {categories.map((cat) => (
              <button
                key={cat.label}
                className={`category-chip ${activeChip === cat.label ? "chip-active" : ""}`}
                onClick={() => handleCategoryChip(cat.label)}
              >
                <div className="chip-img-ring">
                  <img src={cat.img} alt={cat.label} onError={(e) => e.target.src="/assets/clothing.jpg"} />
                </div>
                <span className="chip-label">{cat.label}</span>
              </button>
            ))}
          </div>

          <div className="results-header">
            <div className="title-stack">
              <h1>Dresses & Garment Manufacturers</h1>
              <p>{filteredData.length} Verified Suppliers Matching Your Search</p>
            </div>
            <div className="sort-box">
              <span className="sort-label">Sort By:</span>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option>Most Relevant</option>
                <option>Highest Rated</option>
                <option>Experience</option>
              </select>
            </div>
          </div>

          {filteredData.length > 0 ? (
            <div className="product-grid">
              {filteredData.map((item, index) => {
                const hasCatalog = item.isCatalogActive || item.hasCatalog;
                const catalogId = item.catalogId || item._id;

                return (
                  <div className="product-card" key={index}>
                    <div className="card-image-wrapper">
                      <img src={item.imgSrc} alt={item.companyName} className="product-img" onError={(e) => e.target.src="/assets/clothing.jpg"} />
                      <div className="badge-overlay">
                        <span className="verified-badge">
                          <FontAwesomeIcon icon={faCheckCircle} /> VERIFIED SUPPLIER
                        </span>
                        {item.rating > 4.7 && (
                          <span className="top-rated-badge">
                            <FontAwesomeIcon icon={faCertificate} /> TOP RATED
                          </span>
                        )}
                      </div>
                      
                      {hasCatalog && (
                        <Link 
                          to={`/catalog/${catalogId}`}
                          className="catalog-badge-link"
                          style={{
                            position: 'absolute',
                            bottom: '10px',
                            right: '10px',
                            background: 'rgba(255, 165, 0, 0.95)',
                            color: '#fff',
                            padding: '6px 12px',
                            borderRadius: '8px',
                            fontSize: '0.7rem',
                            fontWeight: '900',
                            textDecoration: 'none',
                            zIndex: 10,
                            boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                            border: '1px solid #fff'
                          }}
                        >
                          VIEW CATALOG
                        </Link>
                      )}
                    </div>

                    <div className="card-body">
                      <h3 className="product-title">{item.mainProducts}</h3>
                      <p className="product-desc">{item.productOrService}</p>

                      <div className="supplier-section">
                        <span className="supplier-label">MANUFACTURER</span>
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
                          <span className="experience-badge">
                            {item.years} Experience
                          </span>
                        </div>
                      </div>

                      <div className="card-actions">
                        <Link to="/register-buyer" className="btn-quick-quote">Request Quotes</Link>
                        <Link to="/register-buyer" className="btn-contact">Contact Supplier</Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="no-results">
              <FontAwesomeIcon icon={faSearch} size="3x" />
              <h3>No match found</h3>
              <p>Try clearing filters to see all dress manufacturers.</p>
              <button className="btn-primary" onClick={resetFilters}>Clear All Filters</button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default DressesDealer;
