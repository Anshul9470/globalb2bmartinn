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
    name: "Iqbal",
    companyName: "Iqbal",
    productOrService: "Kesar Mango & Coconut",
    imgSrc: "/assets/mango2.jpg",
    mainProducts: "Kesar Mangoes, Tender Coconut, Fresh Fruits",
    years: "1 YRS",
    location: "Gujarat, India",
    rating: "4.6",
  },
  {
    name: "Vishram S Gadhvi",
    companyName: "Mahalaxmi Fruit Supplier",
    productOrService: "Fresh Fruits",
    imgSrc: "/assets/fruits.jpeg",
    mainProducts: "Apples, Oranges, Bananas, Grapes",
    years: "1 YRS",
    location: "Gujarat, India",
    rating: "4.8",
  },
  {
    name: "KGF",
    companyName: "KGF Vegetable and Fruits",
    productOrService: "Fruits & Veggies",
    imgSrc: "/assets/fruit2.jpeg",
    mainProducts: "Fresh Vegetables, Organic Fruits, Seasonal Produce",
    years: "1 YRS",
    location: "Bangalore, KA, India",
    rating: "4.5",
  },
  {
    name: "Himesh",
    companyName: "The Veg Mart",
    productOrService: "Fruits & Vegetables",
    imgSrc: "/assets/fruit3.jpeg",
    mainProducts: "Fresh Fruits, Organic Vegetables, Seasonal Produce",
    years: "1 YRS",
    location: "Bangalore, India",
    rating: "4.6",
  },
  {
    name: "Javed",
    companyName: "Fruits Plant Nursery",
    productOrService: "Fruit Plants",
    imgSrc: "/assets/fruit4.jpeg",
    mainProducts: "Fruit Plants, Saplings, Grafted Plants",
    years: "1 YRS",
    location: "Lucknow, UP, India",
    rating: "4.5",
  },
  {
    name: "Muhammed Ismail",
    companyName: "Muhammed Ismail",
    productOrService: "Fruit Pulp",
    imgSrc: "/assets/pulp1.jpeg",
    mainProducts: "Mango Pulp, Guava Pulp, Papaya Pulp",
    years: "1 YRS",
    location: "Kerala, India",
    rating: "4.4",
  },
  {
    name: "Ahammed Thottungal",
    companyName: "Hiq Agro",
    productOrService: "Frozen Fruits",
    imgSrc: "/assets/fruit5.jpeg",
    mainProducts: "Frozen Mixed Berries, Tropical Fruit Blends",
    years: "1 YRS",
    location: "Kozhikode, India",
    rating: "4.7",
  },
  {
    name: "Rizwan",
    companyName: "Jahangir Ahmad Bhat",
    productOrService: "Kashmiri Apples",
    imgSrc: "/assets/apple2.jpeg",
    mainProducts: "Apple, Kashmiri Curtains, Abaaya",
    years: "1 YRS",
    location: "Baramula, J&K, India",
    rating: "4.6",
  },
  {
    name: "Tippu",
    companyName: "Tippu Supplies",
    productOrService: "Raw Coconut",
    imgSrc: "/assets/cocout1.jpg",
    mainProducts: "Raw Coconut, Fresh Water Coconut",
    years: "1 YRS",
    location: "Bangalore, KA, India",
    rating: "4.6",
  },
  {
    name: "Ishwar Bongane",
    companyName: "Rajmudra Fruits",
    productOrService: "Bananas",
    imgSrc: "/assets/banana1.jpeg",
    mainProducts: "Fresh Bananas, Organic Produce",
    years: "1 YRS",
    location: "Pune, MH, India",
    rating: "4.7",
  },
  {
    name: "Arun",
    companyName: "New Beginning Global",
    productOrService: "Export Fruits",
    imgSrc: "/assets/fruit6.jpg",
    mainProducts: "Fresh Export Quality Fruits",
    years: "1 YRS",
    location: "Nagercoil, TN, India",
    rating: "4.7",
  },
];

const INDIAN_STATES = [
  "Maharashtra", "Gujarat", "Uttar Pradesh", "Punjab", "Haryana", "Andhra Pradesh",
  "Tamil Nadu", "Karnataka", "West Bengal", "Bihar", "Rajasthan", "Madhya Pradesh",
  "Delhi", "Kolkata", "Mumbai", "Pune", "Nashik", "Ahmedabad", "Surat", "Jaipur",
  "Kerala", "Jammu and Kashmir"
];

const FruitComponents = () => {
  const [selectedCats, setSelectedCats] = useState([]);
  const [locationQuery, setLocationQuery] = useState("");
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);
  const [activeChip, setActiveChip] = useState("All");
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const fetchFruitProducts = async () => {
      try {
        const res = await axios.get(`${apiEndpoint}/products/category/Fruits`);
        setDbProducts(res.data);
        setFilteredData([...classifiedData, ...res.data]);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch Fruit products:", err);
        setFilteredData(classifiedData);
        setLoading(false);
      }
    };
    fetchFruitProducts();
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
          item.title
        ].filter(Boolean).join(' ').toLowerCase();
        return selectedCats.some(c => text.includes(c.toLowerCase()));
      });
    }

    if (locationQuery) {
      const query = locationQuery.toLowerCase();
      result = result.filter(item => {
        const locText = [
          item.location, 
          item.city, 
          item.state,
          item.seller?.cityname,
          item.seller?.statename
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
        item.title,
        item.category
      ].filter(Boolean).join(' ').toLowerCase();
      return text.includes(cat.toLowerCase());
    });
    setFilteredData(result);
  };

  const fruitCategories = [
    { label: "All",        img: "/assets/fruits.jpeg" },
    { label: "Apples",     img: "/assets/apple1.jpeg" },
    { label: "Mangoes",    img: "/assets/mango.jpeg" },
    { label: "Bananas",    img: "/assets/banana.jpeg" },
    { label: "Coconut",    img: "/assets/cocout1.jpg" },
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
              <label className="filter-label">Fruit Categories</label>
              <div className="checkbox-group">
                {["Apple", "Mango", "Banana", "Coconut", "Pulp", "Plants"].map(type => (
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
            <h3>Premium Exports</h3>
            <p>Connect with global buyers seeking A-grade seasonal fruits.</p>
            <Link to="/packages" className="upgrade-link">Upgrade Now &gt;</Link>
          </div>
        </aside>

        <main className="content-area">
          <div className="category-chips-bar">
            {fruitCategories.map((cat) => (
              <button
                key={cat.label}
                className={`category-chip ${activeChip === cat.label ? "chip-active" : ""}`}
                onClick={() => handleCategoryChip(cat.label)}
              >
                <div className="chip-img-ring">
                  <img src={cat.img} alt={cat.label} onError={(e) => e.target.src="/assets/fruits.jpeg"} />
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

                const cardContent = (
                  <>
                    <div className="card-image-wrapper">
                      {item.images?.[0] ? (
                        <img src={item.images[0].startsWith('http') ? item.images[0] : `${apiEndpoint}${item.images[0].startsWith('/') ? '' : '/'}${item.images[0]}`} alt={item.title} className="product-img" onError={(e) => e.target.src="/assets/fruits.jpeg"} />
                      ) : (
                        <img src={item.imgSrc} alt={item.companyName} className="product-img" onError={(e) => e.target.src="/assets/fruits.jpeg"} />
                      )}
                      <div className="badge-overlay">
                        <span className="verified-badge">
                          <FontAwesomeIcon icon={faCheckCircle} /> VERIFIED SUPPLIER
                        </span>
                      </div>
                      {hasCatalog && (
                        <div className="catalog-badge-overlay" style={{
                          position: 'absolute',
                          bottom: '10px',
                          left: '10px',
                          background: 'rgba(255, 140, 0, 0.9)',
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
                      <div className="card-title-row">
                        <h3 className="product-title">{item.title || item.mainProducts}</h3>
                      </div>

                      <p className="product-desc">
                        {item.productOrService || item.description || "Fresh and organic fruits sourced directly from verified farms."}
                      </p>

                      <div className="supplier-section">
                        <span className="supplier-label">SUPPLIER</span>
                        <div className="supplier-name-row">
                          <h4 className="supplier-name">{item.companyName || sellerObj.companyName || sellerObj.name}</h4>
                          <div className="rating-box">
                            <FontAwesomeIcon icon={faStar} />
                            <span>{item.rating || 5.0}</span>
                          </div>
                        </div>
                        <span className="experience-text">{item.years || '1 YRS'} in business • {item.location || sellerObj.cityname || 'India'}</span>
                      </div>

                      <div className="card-actions">
                        <Link to="/register-buyer" className="btn-quick-quote" onClick={(e) => e.stopPropagation()}>Quick Quote</Link>
                        <Link to="/register-buyer" className="btn-contact" onClick={(e) => e.stopPropagation()}>Contact</Link>
                      </div>
                    </div>
                  </>
                );

                if (hasCatalog) {
                  return (
                    <Link 
                      to={`/catalog/${catalogId}`} 
                      className="product-card" 
                      key={index}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      {cardContent}
                    </Link>
                  );
                }

                return (
                  <div className="product-card" key={index}>
                    {cardContent}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="no-results">
              <FontAwesomeIcon icon={faSearch} size="3x" />
              <h3>No results found</h3>
              <p>Try adjusting your filters or location to find more fruit suppliers.</p>
              <button className="btn-primary" onClick={resetFilters}>Clear All Filters</button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default FruitComponents;
