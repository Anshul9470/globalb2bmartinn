import React, { useState } from "react";
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

const beautyData = [
  {
    _id: "adhvik-singh-jaipur-rajasthan",
    name: "Adhvik Singh",
    email: "venushnhc@gmail.com",
    companyName: "Venus Herbal and Healthcare",
    productOrService: "Since 1890, we are working to Promote Health, Beauty & Wellness",
    imgSrc: "/assets/herbal-beauty.jpg",
    mainProducts: "Health, Beauty & Wellness Products",
    years: "1 YRS",
    location: "Jaipur, Rajasthan",
    rating: "4.8",
    ratingsCount: "320",
    responseRate: "92%",
  },
  {
    name: "neha",
    email: "neha1234@gmail.com",
    companyName: "Trnatva Beauty",
    productOrService: "Skincare, Haircare and Plant Based Make",
    imgSrc: "/assets/beauty1.jpeg",
    mainProducts: "Skincare, Haircare, Plant Based Makeup",
    years: "1 YRS",
    location: "Delhi, India",
    rating: "4.8",
    ratingsCount: "120",
    responseRate: "90%",
  },
  {
    name: "Jay",
    email: "jay123@gmail.com",
    companyName: "Milap Cosmetics",
    productOrService: "Cosmetics",
    imgSrc: "/assets/beauty7.jpeg",
    mainProducts: "Lipsticks, Eyeliners, Foundation, Makeup Brushes",
    years: "1 YR",
    location: "Delhi, India",
    rating: "4.7",
    ratingsCount: "150",
    responseRate: "95%",
  },
  {
    name: "Dhiraj",
    email: "Dhiraj123@gmail.com",
    companyName: "Pink Root",
    productOrService: "Cosmetic & Skincare",
    imgSrc: "/assets/beauty8.jpeg",
    mainProducts: "Face Creams, Moisturizers, Serums, Face Masks",
    years: "1 YR",
    location: "Mumbai, India",
    rating: "4.6",
    ratingsCount: "180",
    responseRate: "94%",
  },
  {
    _id: "s345678901abcdef234571",
    name: "Mahesh Patel",
    email: "maheshpatel@gmail.com",
    companyName: "Ranchi Enterprise",
    productOrService: "Coating Powder & Aerosol Spray",
    imgSrc: "/assets/spary.jpg",
    mainProducts: "Coating Powders, Aerosol Sprays",
    years: "1 YRS",
    location: "Ranchi, India",
    rating: "4.3",
    ratingsCount: "34",
    responseRate: "80%",
  },
  {
    name: "Manoj",
    email: "manoj123@gmail.com",
    companyName: "Skin Secrets",
    productOrService: "Cosmetic",
    imgSrc: "/assets/beauty9.jpeg",
    mainProducts: "Skincare Products, Makeup, Beauty Tools",
    years: "1 YR",
    location: "Delhi, India",
    rating: "4.5",
    ratingsCount: "160",
    responseRate: "93%",
  },
  {
    name: "Sandeep",
    email: "sandeep123@gmail.com",
    companyName: "RICH’N’PURE PROFESSIONALS",
    productOrService: "Cosmetic",
    imgSrc: "/assets/beauty3.jpeg",
    mainProducts: "Skincare, Haircare, Beauty Products",
    years: "1 YR",
    location: "Delhi, India",
    rating: "4.2",
    ratingsCount: "110",
    responseRate: "88%",
  },
  {
    name: "Rohit Goyal",
    email: "Rohit123@gmail.com",
    companyName: "PALMIST HEALTHCARE Pvt. Ltd.",
    productOrService: "Cosmetic",
    imgSrc: "/assets/beauty2.jpeg",
    mainProducts: "Skincare Products, Haircare Products, Beauty Supplements",
    years: "1 YR",
    location: "Delhi, India",
    rating: "4.4",
    ratingsCount: "70",
    responseRate: "84%",
  },
  {
    name: "Aditi",
    email: "Aditi123@gmail.com",
    companyName: "Aditi Cosmetics",
    productOrService: "Cosmetic Manufacturer",
    imgSrc: "/assets/beauty10.jpeg",
    mainProducts: "Skincare, Makeup, Haircare",
    years: "1 YRS",
    location: "Mumbai, India",
    rating: "4.6",
    ratingsCount: "120",
    responseRate: "89%",
  },
  {
    name: "Sudheer",
    email: "sudheer123@gmail.com",
    companyName: "Florish Professional Pvt. Ltd.",
    productOrService: "Cosmetic Manufacturer",
    imgSrc: "/assets/cosma.jpeg",
    mainProducts: "Skincare Products, Makeup, Haircare Products",
    years: "1 YRS",
    location: "Bangalore, India",
    rating: "4.5",
    ratingsCount: "55",
    responseRate: "90%",
  },
  {
    name: "Amit",
    email: "amit123@gmail.com",
    companyName: "Natural Aroma",
    productOrService: "Cosmetic Manufacturer",
    imgSrc: "/assets/beauty12.jpeg",
    mainProducts: "Skincare Products, Essential Oils, Body Care",
    years: "1 YRS",
    location: "Delhi, India",
    rating: "4.3",
    ratingsCount: "55",
    responseRate: "81%",
  },
  {
    name: "Hari Om",
    email: "Hariom123@gmail.com",
    companyName: "Captain Biotech - Ayurvedic & Herbal Products",
    productOrService: "Cosmetic Manufacturer",
    imgSrc: "/assets/beauty13.jpeg",
    mainProducts: "Herbal Skincare, Ayurvedic Cosmetics, Natural Remedies",
    years: "1 YRS",
    location: "Bangalore, India",
    rating: "4.4",
    ratingsCount: "50",
    responseRate: "82%",
  },
  {
    _id: "a1234567890wxyz5679",
    name: "Subhash Rashkar",
    companyName: "Perfume Phafcially",
    productOrService: "Perfume",
    imgSrc: "/assets/perfume.jpeg",
    mainProducts: "Fragrances, Perfume Oils, Essential Oils",
    years: "1 YRS",
    location: "Mumbai, India",
    rating: "4.5",
    ratingsCount: "120",
    responseRate: "92%",
  },
  {
    _id: "dsf-kannauj-oil-production",
    name: "Anand Kumar Shrivastava",
    companyName: "DSF Kannauj Oil Production",
    productOrService: "Ittar",
    imgSrc: "/assets/ittar.jpg",
    mainProducts: "Ittar (Fragrance Oil)",
    years: "1 YRS",
    location: "Kannauj, Uttar Pradesh, India",
    rating: "4.7",
    ratingsCount: "50",
    responseRate: "81%",
  },
  {
    _id: "lavistahealthcare-vadodra",
    name: "Ashok Kumar Lakhlani",
    companyName: "lavistahealthcare",
    productOrService: "Beauty and Cosmetics",
    imgSrc: "/assets/beauty14.jpg",
    mainProducts: "Beauty Products, Cosmetics, Skin Care, Hair Care",
    years: "1 YRS",
    location: "Vadodara, Gujarat, India",
    rating: "4.0",
    ratingsCount: "120",
    responseRate: "95%",
  }
];

const INDIAN_STATES = [
  "Maharashtra", "Gujarat", "Uttar Pradesh", "Punjab", "Haryana", "Andhra Pradesh",
  "Tamil Nadu", "Karnataka", "West Bengal", "Bihar", "Rajasthan", "Madhya Pradesh",
  "Delhi", "Kolkata", "Mumbai", "Pune", "Nashik", "Ahmedabad", "Surat", "Jaipur"
];

const BeautyDealer = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [locationQuery, setLocationQuery] = useState("");
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);
  const [activeChip, setActiveChip] = useState("All");
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const fetchBeautyProducts = async () => {
      try {
        setLoading(true);
        // Try fetching from database if endpoint exists
        const res = await axios.get(`${apiEndpoint}/products/category/Beauty`);
        setDbProducts(res.data);
        setFilteredData([...beautyData, ...res.data]);
      } catch (err) {
        console.error("Failed to fetch beauty products:", err);
        setFilteredData(beautyData);
      } finally {
        setTimeout(() => setLoading(false), 2000);
      }
    };
    fetchBeautyProducts();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  const handleApplyFilters = () => {
    let result = [...beautyData, ...dbProducts];

    if (selectedCategories.length > 0) {
      result = result.filter(item => 
        selectedCategories.some(cat => {
            const text = [
                item.mainProducts, 
                item.productOrService, 
                item.companyName,
                item.category
            ].filter(Boolean).join(' ').toLowerCase();
            return text.includes(cat.toLowerCase());
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
        
        const compText = [
            item.companyName, 
            item.seller?.companyName, 
            item.seller?.name
        ].filter(Boolean).join(' ').toLowerCase();
        
        return locText.includes(query) || compText.includes(query);
      });
    }

    setFilteredData(result);
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setLocationQuery("");
    setFilteredData([...beautyData, ...dbProducts]);
    setActiveChip("All");
  };

  const handleCategoryChip = (cat) => {
    setActiveChip(cat);
    if (cat === "All") { resetFilters(); return; }
    const result = [...beautyData, ...dbProducts].filter(item => {
        const text = [
            item.mainProducts, 
            item.productOrService, 
            item.companyName,
            item.category
        ].filter(Boolean).join(' ').toLowerCase();
        return text.includes(cat.toLowerCase());
    });
    setFilteredData(result);
  };

  const beautyCategories = [
    { label: "All",        img: "/assets/beauty1.jpeg" },
    { label: "Perfume",    img: "/assets/perfume.jpeg" },
    { label: "Skincare",   img: "/assets/beauty2.jpeg" },
    { label: "Makeup",     img: "/assets/beauty7.jpeg" },
    { label: "Cosmetic",   img: "/assets/beauty9.jpeg" },
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
              <label className="filter-label">Beauty Categories</label>
              <div className="checkbox-group">
                {["Perfume", "Skincare", "Makeup", "Cosmetic", "Haircare", "Herbal"].map(cat => (
                  <label key={cat} className="checkbox-item">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes(cat)}
                      onChange={() => handleCategoryChange(cat)}
                    /> <span>{cat}</span>
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
            <div className="pro-badge">BEAUTY PRO</div>
            <h3>Premium Beauty Brands</h3>
            <p>Get exclusive access to top-tier cosmetic manufacturers and perfume houses.</p>
            <Link to="/packages" className="upgrade-link">Upgrade Now &gt;</Link>
          </div>
        </aside>

        <main className="content-area">
          <div className="category-chips-bar">
            {beautyCategories.map((cat) => (
              <button
                key={cat.label}
                className={`category-chip ${activeChip === cat.label ? "chip-active" : ""}`}
                onClick={() => handleCategoryChip(cat.label)}
              >
                <div className="chip-img-ring">
                  <img src={cat.img} alt={cat.label} onError={(e) => e.target.src="/assets/beauty1.jpeg"} />
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

                const CardContent = (
                  <>
                    <div className="card-image-wrapper">
                      <img src={item.imgSrc || (item.images && item.images[0]) || "/assets/beauty1.jpeg"} alt={item.companyName || item.title} className="product-img" />
                      <div className="badge-overlay">
                        <span className="verified-badge">
                          <FontAwesomeIcon icon={faCheckCircle} /> VERIFIED
                        </span>
                      </div>
                      {hasCatalog && (
                        <div className="catalog-badge-overlay" style={{
                          position: 'absolute',
                          bottom: '10px',
                          left: '10px',
                          background: 'rgba(21, 21, 125, 0.9)',
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
                      <h3 className="product-title">{item.mainProducts || item.title}</h3>
                      
                      <div className="supplier-section">
                        <span className="supplier-label">SUPPLIED BY</span>
                        
                        <div className="supplier-brand-row">
                          <div className="supplier-logo-placeholder">
                            {(item.companyName || item.seller?.companyName || item.seller?.name || "B").charAt(0)}
                          </div>
                          <div className="supplier-info-stack">
                            <h4 className="supplier-name">{item.companyName || item.seller?.companyName || item.seller?.name}</h4>
                            <div className="rating-box">
                              <FontAwesomeIcon icon={faStar} />
                              <span>{item.rating || (4.5 + (index % 5) * 0.1).toFixed(1)}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="supplier-meta-grid">
                          <span className="location-tag">
                            <FontAwesomeIcon icon={faMapMarkerAlt} /> {item.location || `${item.seller?.cityname || item.city || ''}, ${item.seller?.statename || item.state || ''}`}
                          </span>
                          <span className="years-badge">
                            <FontAwesomeIcon icon={faCheckCircle} /> {item.years || "1 YRS"} Experience
                          </span>
                        </div>
                      </div>

                      <div className="card-actions">
                        <button className="btn-quick-quote" onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.location.href='/register-buyer'; }}>Quick Quote <FontAwesomeIcon icon={faAngleRight} /></button>
                        <button className="btn-contact" onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.location.href='/register-buyer'; }}>Contact</button>
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
                      style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
                    >
                      {CardContent}
                    </Link>
                  );
                }

                return (
                  <div className="product-card" key={index}>
                    {CardContent}
                  </div>
                );
              })}
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

export default BeautyDealer;
