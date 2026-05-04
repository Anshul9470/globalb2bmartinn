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

const tomatoPowderData = [
  {
    name: "Rajesh Kumar",
    companyName: "Vibrant Colortech",
    productOrService: "Tomato Powder",
    imgSrc: "/assets/food1.jpeg",
    mainProducts: "Tomato Powder, Dehydrated Tomato Flakes, Vegetable Powders",
    years: "2 YRS",
    location: "Ahmedabad, Gujarat, India",
    rating: 4.8,
    ratingsCount: 150,
    responseRate: "96%",
    verified: true
  },
  {
    name: "Suresh Mehra",
    companyName: "Mehra Foods Pvt Ltd",
    productOrService: "Dehydrated Tomato Powder",
    imgSrc: "/assets/food2.jpeg",
    mainProducts: "Tomato Powder, Garlic Powder, Onion Powder",
    years: "1 YRS",
    location: "Indore, Madhya Pradesh, India",
    rating: 4.5,
    ratingsCount: 85,
    responseRate: "90%",
    verified: true
  },
  {
    name: "Amit Singh",
    companyName: "Global Agro Exim",
    productOrService: "Spray Dried Tomato Powder",
    imgSrc: "/assets/food3.jpeg",
    mainProducts: "Spray Dried Tomato Powder, Fruit Powders",
    years: "1 YRS",
    location: "Pune, Maharashtra, India",
    rating: 4.6,
    ratingsCount: 60,
    responseRate: "88%",
    verified: true
  }
];

const TomatoPowder = () => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [locationQuery, setLocationQuery] = useState("");
  const [filteredData, setFilteredData] = useState(tomatoPowderData);
  const [searchContext, setSearchContext] = useState("Premium Tomato Powder Suppliers");
  const [activeChip, setActiveChip] = useState("All");
  const [dbProducts, setDbProducts] = useState([]);

  useEffect(() => {
    const fetchTomatoProducts = async () => {
      try {
        const res = await axios.get(`${apiEndpoint}/products/category/Tomato Powder`);
        setDbProducts(res.data);
        setFilteredData([...tomatoPowderData, ...res.data]);
      } catch (err) {
        console.error("Failed to fetch tomato powder products:", err);
        setFilteredData(tomatoPowderData);
      }
    };
    fetchTomatoProducts();
  }, []);

  const handleApplyFilters = () => {
    let result = [...tomatoPowderData, ...dbProducts];

    if (selectedTypes.length > 0) {
      result = result.filter(item => 
        selectedTypes.some(t => {
          const text = [item.mainProducts, item.productOrService, item.title].filter(Boolean).join(' ').toLowerCase();
          return text.includes(t.toLowerCase());
        })
      );
    }

    if (locationQuery) {
      const query = locationQuery.toLowerCase();
      result = result.filter(item => {
        const locText = [item.location, item.state, item.seller?.statename].filter(Boolean).join(' ').toLowerCase();
        return locText.includes(query);
      });
    }

    setFilteredData(result);
  };

  const resetFilters = () => {
    setSelectedTypes([]);
    setLocationQuery("");
    setFilteredData([...tomatoPowderData, ...dbProducts]);
    setActiveChip("All");
  };

  const categories = [
    { label: "All",      img: "/assets/food1.jpeg" },
    { label: "Spray Dried", img: "/assets/food3.jpeg" },
    { label: "Organic",  img: "/assets/food2.jpeg" },
    { label: "Dehydrated", img: "/assets/food1.jpeg" },
  ];

  return (
    <div className="marketplace-container">
      <Helmet>
        <title>Top Tomato Powder Suppliers & Manufacturers in India</title>
        <meta name="description" content="Find reliable suppliers and manufacturers of high-quality tomato powder, spray-dried tomato powder, and dehydrated tomato flakes for industrial use." />
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
                {["Spray Dried", "Sun Dried", "Organic", "Pure Tomato Powder"].map(type => (
                  <label key={type} className="checkbox-item">
                    <input 
                      type="checkbox" 
                      checked={selectedTypes.includes(type)}
                      onChange={() => setSelectedTypes(prev => prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type])}
                    /> <span>{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <label className="filter-label">Location</label>
              <input 
                type="text" 
                placeholder="Search state..." 
                className="filter-search-input" 
                value={locationQuery}
                onChange={(e) => setLocationQuery(e.target.value)}
              />
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
                onClick={() => {
                  setActiveChip(cat.label);
                  if (cat.label === "All") { resetFilters(); return; }
                  const res = [...tomatoPowderData, ...dbProducts].filter(item => 
                    [item.mainProducts, item.title].filter(Boolean).join(' ').toLowerCase().includes(cat.label.toLowerCase())
                  );
                  setFilteredData(res);
                }}
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

          <div className="product-grid">
            {filteredData.map((item, index) => (
              <div className="product-card" key={index}>
                <div className="card-image-wrapper">
                  <img src={item.imgSrc || "/assets/food1.jpeg"} alt={item.companyName} className="product-img" />
                  <div className="badge-overlay">
                    <span className="verified-badge">
                      <FontAwesomeIcon icon={faCheckCircle} /> VERIFIED SUPPLIER
                    </span>
                  </div>
                </div>

                <div className="card-body">
                  <h3 className="product-title">{item.productOrService || item.title}</h3>
                  <div className="supplier-section">
                    <div className="supplier-brand-row">
                      <div className="supplier-logo-placeholder">{(item.companyName || "T").charAt(0)}</div>
                      <div className="supplier-info-stack">
                        <h4 className="supplier-name">{item.companyName}</h4>
                        <div className="rating-box">
                          <FontAwesomeIcon icon={faStar} />
                          <span>{item.rating || 4.5}</span>
                        </div>
                      </div>
                    </div>
                    <div className="supplier-meta-grid">
                      <span className="location-tag"><FontAwesomeIcon icon={faMapMarkerAlt} /> {item.location || "India"}</span>
                      <span className="years-badge"><FontAwesomeIcon icon={faCheckCircle} /> {item.years || "1 YRS"} Exp.</span>
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
        </main>
      </div>
    </div>
  );
};

export default TomatoPowder;
