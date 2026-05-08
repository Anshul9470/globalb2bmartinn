import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Buyers/AuthContext';
import { resolveState } from '../services/stateResolver';
import { registerCompany } from '../services/api';
import { CATEGORIES, getSubCategories } from '../services/categoryData';
import './SearchResults.css';
import '../Products/MarketplacePremium.css';
import '../Components/BuyerPremium.css';

const SearchResults = ({ forcedQuery = null }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userId } = useAuth();
  const { results = [], searchType, searchQuery, noResults, error, category: initialCategory } = location.state || { results: [], searchType: 'all' };
  
  const query = forcedQuery || new URLSearchParams(location.search).get('query');
  const typeParam = new URLSearchParams(location.search).get('type') || searchType;
  const categoryParam = new URLSearchParams(location.search).get('category') || initialCategory;

  // States List
  const INDIAN_STATES = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", 
    "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", 
    "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir", "Ladakh", 
    "Lakshadweep", "Puducherry"
  ];

  const COUNTRIES = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
    "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
    "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
    "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
    "Fiji", "Finland", "France",
    "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guyana",
    "Haiti", "Honduras", "Hungary",
    "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast",
    "Jamaica", "Japan", "Jordan",
    "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
    "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
    "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
    "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway",
    "Oman",
    "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
    "Qatar",
    "Romania", "Russia", "Rwanda",
    "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
    "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
    "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
    "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
    "Yemen",
    "Zambia", "Zimbabwe"
  ];

  // Filter State
  const [selectedState, setSelectedState] = React.useState(null);
  const [selectedCountry, setSelectedCountry] = React.useState(null);
  const [stateSearch, setStateSearch] = React.useState("");
  const [stateSuggestions, setStateSuggestions] = React.useState([]);
  const [showStateSuggestions, setShowStateSuggestions] = React.useState(false);
  
  // Custom dropdown toggle states
  const [isStateDropdownOpen, setIsStateDropdownOpen] = React.useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = React.useState(false);

  // Country Search State
  const [countrySearch, setCountrySearch] = React.useState("");
  const [countrySuggestions, setCountrySuggestions] = React.useState([]);
  const [showCountrySuggestions, setShowCountrySuggestions] = React.useState(false);

  // Category Filter State
  const [selectedCategory, setSelectedCategory] = React.useState(categoryParam || "All");
  const [selectedSubCategory, setSelectedSubCategory] = React.useState("All");

  // Seller Form State
  const [showSellerForm, setShowSellerForm] = React.useState(false);
  const [sellerFormLoading, setSellerFormLoading] = React.useState(false);
  const [sellerFormSuccess, setSellerFormSuccess] = React.useState(false);
  const [sellerFormError, setSellerFormError] = React.useState("");
  const [sellerFormData, setSellerFormData] = React.useState({
    name: '',
    email: '',
    mobileNumber: '',
    companyName: '',
    productOrService: '',
    password: 'password123', // Default password for compact registration
    confirmPassword: 'password123',
    cityname: 'General',
    statename: 'General',
    category: 'All'
  });

  // Proper Image Mapping for Categories
  const getProperImage = (label, type = 'item') => {
    const labelLower = (label || "").toLowerCase();
    
    if (labelLower.includes("rice")) return "/assets/ricemain.png";
    if (labelLower.includes("saree") || labelLower.includes("textile") || labelLower.includes("cloth")) return "/assets/textile1.jpeg";
    if (labelLower.includes("pulse") || labelLower.includes("dal")) return "/assets/ai-pulses.jpg";
    if (labelLower.includes("fruit") || labelLower.includes("powder")) return "/assets/fruitspowder.png";
    if (labelLower.includes("machine") || labelLower.includes("tool")) return "/assets/machine1.jpeg";
    if (labelLower.includes("cable") || labelLower.includes("wire")) return "/assets/ai-cable-tie.jpg";
    if (labelLower.includes("electronic") || labelLower.includes("gadget")) return "/assets/electronic1.jpeg";
    if (labelLower.includes("furniture") || labelLower.includes("chair") || labelLower.includes("table")) return "/assets/furniture-poster.jpg";
    if (labelLower.includes("spice") || labelLower.includes("masala")) return "/assets/spice.jpg";
    if (labelLower.includes("oil") || labelLower.includes("mustard")) return "/assets/oil.jpg";
    if (labelLower.includes("steel") || labelLower.includes("iron")) return "/assets/iron.jpg";
    if (labelLower.includes("pvc") || labelLower.includes("plastic")) return "/assets/pvc.jpg";
    if (labelLower.includes("lock") || labelLower.includes("door")) return "/assets/doorlock.jpg";
    
    return type === 'chip' ? "/assets/agro1.avif" : "/assets/agro2.jpeg";
  };

  // Specialized categories for chips bar based on current query
  const getChipsData = () => {
    const defaultLabels = ["All", "Rice", "Pulses", "Fruits Powder", "Sarees", "Machinery", "Industrial"];
    
    // If we have a category selected, show its sub-categories as chips
    if (selectedCategory !== "All") {
      const subs = getSubCategories(selectedCategory).slice(0, 8);
      return [
        { label: "All", img: getProperImage(selectedCategory, 'chip') },
        ...subs.map(s => ({ label: s, img: getProperImage(s, 'chip') }))
      ];
    }
    
    return defaultLabels.map(label => ({
      label,
      img: getProperImage(label, 'chip')
    }));
  };

  const chips = getChipsData();

  React.useEffect(() => {
    // Show form automatically after 2 seconds
    const initialTimer = setTimeout(() => {
      setShowSellerForm(true);
    }, 2000);

    // Re-show form every 5 minutes if it was closed
    const intervalTimer = setInterval(() => {
      setShowSellerForm(true);
    }, 300000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, []);

  // Handle State Search Input
  const handleStateSearchChange = (value) => {
    setStateSearch(value);
    if (value.trim()) {
      const filtered = INDIAN_STATES.filter(s => 
        s.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 8);
      setStateSuggestions(filtered);
      setShowStateSuggestions(true);
    } else {
      setStateSuggestions([]);
      setShowStateSuggestions(false);
    }
  };

  const selectState = (state) => {
    setSelectedState(state);
    setStateSearch(state);
    setShowStateSuggestions(false);
  };

  const clearStateFilter = () => {
    setSelectedState(null);
    setStateSearch("");
  };

  const handleCountrySearchChange = (value) => {
    setCountrySearch(value);
    if (value.trim()) {
      const filtered = COUNTRIES.filter(c => 
        c.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 8);
      setCountrySuggestions(filtered);
      setShowCountrySuggestions(true);
    } else {
      setCountrySuggestions([]);
      setShowCountrySuggestions(false);
    }
  };

  const selectCountry = (country) => {
    setSelectedCountry(country);
    setCountrySearch(country);
    setShowCountrySuggestions(false);
  };

  const clearCountryFilter = () => {
    setSelectedCountry(null);
    setCountrySearch("");
  };

  const clearAllFilters = () => {
    setSelectedState(null);
    setStateSearch("");
    setSelectedCountry(null);
    setCountrySearch("");
    setSelectedCategory("All");
    setSelectedSubCategory("All");
  };

  // Normalize results to ensure statename is easily accessible
  const processedResults = React.useMemo(() => {
    return results.map(item => ({
      ...item,
      displayState: resolveState(item)
    }));
  }, [results]);

  const stateCounts = React.useMemo(() => {
    const counts = {};
    processedResults.forEach(item => {
      const s = item.displayState;
      if (s) counts[s] = (counts[s] || 0) + 1;
    });
    return Object.entries(counts).sort((a,b) => b[1] - a[1]);
  }, [processedResults]);

  // Apply filters
  const filteredResults = React.useMemo(() => {
    let filtered = processedResults;

    if (selectedState) {
      filtered = filtered.filter(item => {
        const itemState = (item.displayState || '').trim().toLowerCase();
        const filterState = selectedState.trim().toLowerCase();
        return itemState === filterState;
      });
    }

    if (selectedCountry) {
      filtered = filtered.filter(item => {
        const itemCountry = (item.country || 'India').trim().toLowerCase();
        const filterCountry = selectedCountry.trim().toLowerCase();
        return itemCountry === filterCountry;
      });
    }

    if (selectedCategory && selectedCategory !== "All") {
      filtered = filtered.filter(item => 
        item.category && item.category.toUpperCase() === selectedCategory.toUpperCase()
      );
    }

    if (selectedSubCategory && selectedSubCategory !== "All") {
      filtered = filtered.filter(item => 
        item.subCategory && item.subCategory.toUpperCase() === selectedSubCategory.toUpperCase()
      );
    }

    return filtered;
  }, [processedResults, selectedState, selectedCountry, selectedCategory, selectedSubCategory]);

  const maskEmail = (email) => {
    if (!email) return '';
    const [user, domain] = email.split('@');
    return `${user.substring(0, 2)}***@${domain}`;
  };

  const maskPhone = (phone) => {
    if (!phone) return '';
    return `${phone.substring(0, 2)}*******${phone.substring(phone.length - 2)}`;
  };

  const handleSellerFormChange = (e) => {
    setSellerFormData({ ...sellerFormData, [e.target.name]: e.target.value });
  };

  const handleSellerSubmit = async (e) => {
    e.preventDefault();
    setSellerFormLoading(true);
    setSellerFormError("");
    try {
      await registerCompany(sellerFormData);
      setSellerFormSuccess(true);
      setTimeout(() => {
        setShowSellerForm(false);
        setSellerFormSuccess(false);
      }, 3000);
    } catch (err) {
      setSellerFormError(err.message || "Registration failed. Please try again.");
    } finally {
      setSellerFormLoading(false);
    }
  };

  const handleViewMore = () => {
    if (userId) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  const getTitle = () => {
    if (typeParam === 'buyer') {
      return 'Available Buyers';
    } else if (typeParam === 'company') {
      return 'Available Sellers';
    } else if (query) {
      return `Search Results for "${query}"`;
    } else if (selectedCategory && selectedCategory !== "All") {
      return `${selectedCategory} ${isBuyerSearch ? 'Buyers' : 'Sellers'}`;
    } else {
      return 'Search Results';
    }
  };

  const getSubTitle = () => {
    if (typeParam === 'buyer') {
      return 'Connect with verified buyers and explore latest trade opportunities to grow your export business.';
    } else if (typeParam === 'company') {
      return 'Find verified manufacturers, exporters and wholesalers to source quality products for your business.';
    } else {
      return 'Explore global business opportunities and connect with verified trade partners across all sectors.';
    }
  };

  const isBuyerSearch = typeParam === 'buyer';

  return (
    <div className={`search-results-page ${showSellerForm ? 'form-open' : ''}`}>
      <div className="results-hero-wrapper">
        <div className="hero-animation-bg"></div>
        <div className="results-header-container">
          <div className="results-header">
            <div className="header-left">
              <div className="purpose-badge">Verified Marketplace</div>
              <h1 className="hero-title-highlight">{getTitle()}</h1>
              <p className="results-subtitle">{getSubTitle()}</p>
            </div>
            <div className="header-right">
              {/* Button removed as per user request. Form now triggers automatically. */}
            </div>
          </div>

          {showSellerForm && (
            <div className="form-modal-overlay">
              <div className="form-modal-content">
                <button className="form-close-btn" onClick={() => setShowSellerForm(false)} title="Close Form">×</button>
                <form onSubmit={handleSellerSubmit} className="compact-seller-form">
                  <div className="form-header">
                    <h2>Join as a Supplier</h2>
                    <p>Grow your business with verified B2B leads</p>
                  </div>
                  <div className="form-grid">
                    <div className="form-group">
                      <i className="fa fa-user"></i>
                      <input type="text" name="name" placeholder="Full Name" onChange={handleSellerFormChange} required />
                    </div>
                    <div className="form-group">
                      <i className="fa fa-envelope"></i>
                      <input type="email" name="email" placeholder="Email Address" onChange={handleSellerFormChange} required />
                    </div>
                    <div className="form-group">
                      <i className="fa fa-phone"></i>
                      <input type="text" name="mobileNumber" placeholder="Mobile Number" onChange={handleSellerFormChange} required />
                    </div>
                    <div className="form-group">
                      <i className="fa fa-building"></i>
                      <input type="text" name="companyName" placeholder="Company Name" onChange={handleSellerFormChange} required />
                    </div>
                    <div className="form-group">
                      <i className="fa fa-shopping-basket"></i>
                      <input type="text" name="productOrService" placeholder="Products You Sell" onChange={handleSellerFormChange} required />
                    </div>
                    <div className="form-group">
                      <i className="fa fa-th-large"></i>
                      <select name="category" onChange={handleSellerFormChange} required className="form-select-compact">
                        <option value="">Select Category</option>
                        {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="modal-submit-btn" disabled={sellerFormLoading}>
                    {sellerFormLoading ? 'Registering...' : 'Register Now & Get Leads'}
                  </button>
                  {sellerFormSuccess && <p className="form-success">Registration successful!</p>}
                  {sellerFormError && <p className="form-error">{sellerFormError}</p>}
                </form>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="search-results-content-wrapper">

      {error && (
        <div className="error-message">
          <p>Error fetching results. Please try again.</p>
        </div>
      )}
      
      {noResults && results.length === 0 && (
        <div className="no-results-message">
          <p>No {isBuyerSearch ? 'buyers' : 'sellers'} found matching "{query}". Showing all {isBuyerSearch ? 'buyers' : 'sellers'}.</p>
        </div>
      )}

      <div className="marketplace-layout">
        {/* Left Sidebar */}
        <aside className="filters-sidebar">
          <div className="sidebar-header">
            <div className="header-title">
              <i className="fa fa-filter"></i>
              <h2>Filters</h2>
            </div>
            <button className="reset-link" onClick={clearAllFilters}>Reset</button>
          </div>

          <div className="filter-group-container">
            {/* Category Filter */}
            <div className="filter-group">
              <label className="filter-label">Category</label>
              <select 
                className="filter-select"
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setSelectedSubCategory("All");
                }}
              >
                <option value="All">All Categories</option>
                {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>

            {/* Sub-Category Filter */}
            {selectedCategory !== "All" && getSubCategories(selectedCategory).length > 0 && (
              <div className="filter-group">
                <label className="filter-label">Sub Category</label>
                <div className="checkbox-group" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                  <label className="checkbox-item">
                    <input 
                      type="checkbox" 
                      checked={selectedSubCategory === "All"}
                      onChange={() => setSelectedSubCategory("All")}
                    /> <span>All Varieties</span>
                  </label>
                  {getSubCategories(selectedCategory).map(sub => (
                    <label key={sub} className="checkbox-item">
                      <input 
                        type="checkbox" 
                        checked={selectedSubCategory === sub}
                        onChange={() => setSelectedSubCategory(sub)}
                      /> <span>{sub}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Location Filter */}
            <div className="filter-group">
              <label className="filter-label">Supplier Location</label>
              <div className="search-input-wrapper" style={{ position: "relative" }}>
                <i className="fa fa-map-marker-alt search-icon"></i>
                <input 
                  type="text" 
                  placeholder="Search state or city..." 
                  className="filter-search-input" 
                  value={stateSearch}
                  onChange={(e) => handleStateSearchChange(e.target.value)}
                  onFocus={() => stateSearch.trim() && setShowStateSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowStateSuggestions(false), 200)}
                />
                {showStateSuggestions && stateSuggestions.length > 0 && (
                  <ul className="location-suggestions-dropdown">
                    {stateSuggestions.map((s) => (
                      <li
                        key={s}
                        className="location-suggestion-item"
                        onMouseDown={() => selectState(s)}
                      >
                        <i className="fa fa-map-marker-alt sugg-icon"></i>
                        {s}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Country Filter */}
            <div className="filter-group">
              <label className="filter-label">Country</label>
              <select 
                className="filter-select"
                value={selectedCountry || "All"}
                onChange={(e) => selectCountry(e.target.value === "All" ? null : e.target.value)}
              >
                <option value="All">All Countries</option>
                {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <button className="apply-filters-btn" onClick={() => {}}>Apply Filters</button>
          </div>

          <div className="pro-ad-card">
            <div className="pro-badge">PRO MEMBER AD</div>
            <h3>Bulk Sourcing Solutions</h3>
            <p>Connect with verified farmers and wholesale distributors across India.</p>
            <Link to="/packages" className="upgrade-link">View Plans &gt;</Link>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="content-area">
          {/* Category Chips bar */}
          <div className="category-chips-bar">
            {chips.map((cat) => (
              <button
                key={cat.label}
                className={`category-chip ${selectedSubCategory === cat.label || (cat.label === "All" && selectedSubCategory === "All") ? "chip-active" : ""}`}
                onClick={() => setSelectedSubCategory(cat.label)}
              >
                <div className="chip-img-ring">
                  <img src={cat.img} alt={cat.label} onError={(e) => e.target.src="/assets/agro1.avif"} />
                </div>
                <span className="chip-label">{cat.label}</span>
              </button>
            ))}
          </div>

          {filteredResults.length > 0 ? (
            <div className={isBuyerSearch ? "buyer-premium-grid" : "product-grid"}>
              {filteredResults.map((item, index) => {
                const displayName = item.companyName || item.name || 'Verified Supplier';
                const initials = (displayName).split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
                
                if (isBuyerSearch) {
                  // Mock data for premium look
                  const rating = (4.5 + Math.random() * 0.5).toFixed(1);
                  const reviews = Math.floor(Math.random() * 2000) + 100;
                  const transactions = (Math.random() * 15).toFixed(1) + 'k';
                  
                  return (
                    <div key={index} className="buyer-premium-card">
                      {/* 1. Identity Section */}
                      <div className="identity-section">
                        <div className="avatar-container">
                          <div className="avatar-box" style={{ color: `hsl(${index * 45}, 60%, 45%)` }}>
                            {initials}
                          </div>
                          <div className="verified-check"><i className="fas fa-check"></i></div>
                        </div>
                        <div className="identity-details">
                          <h3>{displayName}</h3>
                          <div className="category-rating">
                            <div className="cat-info">
                              <i className="fas fa-microchip"></i> {item.category || query || 'General'}
                            </div>
                            <div className="rating-info">
                              <i className="fas fa-star" style={{ color: '#f59e0b' }}></i> {rating} <span>({reviews.toLocaleString()} reviews)</span>
                            </div>
                          </div>
                          <div className="transaction-count">
                            {transactions} <span>Successful Transactions</span>
                          </div>
                          <div className="verified-label">VERIFIED</div>
                        </div>
                      </div>

                      {/* 2. Requirement Section */}
                      <div className="requirement-section">
                        <div className="req-block">
                          <div className="req-block-label">LOOKING FOR</div>
                          <div className="req-product-name">{item.requirement || item.productOrService || query}</div>
                        </div>
                        <div className="req-block">
                          <div className="req-block-label">QUANTITY REQUIRED</div>
                          <div className="quantity-pill">{item.quantity || 'Negotiable'}</div>
                        </div>
                      </div>

                      {/* 3. Contact Section */}
                      <div className="contact-section">
                        <div className="contact-line">
                          <i className="fas fa-envelope"></i> {maskEmail(item.email)}
                        </div>
                        <div className="contact-line">
                          <i className="fas fa-phone-alt"></i> {maskPhone(item.mobileNumber)}
                        </div>
                        <div className="contact-line">
                          <i className="fas fa-map-marker-alt"></i> {item.displayState}, {item.country || 'India'}
                        </div>
                        <button className="view-details-btn" onClick={handleViewMore}>View More Details</button>
                      </div>
                    </div>
                  );
                }

                const sellerObj = item.userId && typeof item.userId === 'object' ? item.userId : item.seller;
                const hasCatalog = item.isCatalogActive || sellerObj?.isCatalogActive || (sellerObj?.featuredProductIds?.length > 0);
                const sellerTargetId = sellerObj?._id || (item.userId?._id || item.userId) || item._id;

                // Default Seller Card
                return (
                  <div 
                    className={`product-card ${hasCatalog ? 'has-catalog-link' : ''}`} 
                    key={index}
                    onClick={() => {
                      if (hasCatalog && sellerTargetId) {
                        navigate(`/catalog/${sellerTargetId}`);
                      }
                    }}
                    style={{ 
                      cursor: hasCatalog ? 'pointer' : 'default' 
                    }}
                  >
                    <div className="top-right-meta">
                      <div className="rating-pill">
                        <i className="fa fa-star"></i>
                        <span>{item.rating || "4.7"}</span>
                      </div>
                      <span className="expertise-text">{item.yearsInBusiness || "5 YRS"} EXPERTISE</span>
                    </div>

                    <div className="card-image-wrapper">
                      <img 
                        src={item.images?.[0] || getProperImage(item.category || query)} 
                        alt={displayName} 
                        className="product-img" 
                        onError={(e) => e.target.src = getProperImage(item.category || query)}
                      />
                      <div className="verified-badge-top">
                        <i className="fa fa-check-circle"></i> VERIFIED
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
                          <i className="fa fa-th-large" style={{ marginRight: '5px' }}></i> VIEW CATALOG
                        </div>
                      )}
                    </div>

                    <div className="card-body">
                      <h4 className="product-title">{item.requirement || item.productOrService || query}</h4>
                      <div className="supplier-name-olive">{displayName}</div>
                      
                      {/* Price Badge */}
                      {item.price && item.price !== 'Ask for Price' && (
                        <div style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          background: 'rgba(30, 58, 138, 0.06)',
                          color: '#1e3a8a',
                          fontWeight: 800,
                          fontSize: '0.9rem',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          margin: '8px 0'
                        }}>
                          ₹ {item.price} / {item.unit || 'kg'}
                        </div>
                      )}

                      {/* Description Snippet */}
                      <p style={{
                        fontSize: '0.8rem',
                        color: '#64748b',
                        lineHeight: '1.4',
                        marginBottom: '12px',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        {Array.isArray(item.description) ? item.description[0] : (item.description || 'Premium quality product from verified supplier.')}
                      </p>

                      <div className="feature-tags-row">
                        <span className="tag-pill">{item.category || query}</span>
                        <span className="tag-pill">Top Quality</span>
                        <span className="tag-pill">Bulk Supply</span>
                      </div>

                      <div className="card-actions-row">
                        <Link to="/register-buyer" className="btn-outline-olive">Quick Quote</Link>
                        <Link to="/register-buyer" className="btn-solid-maroon">Contact</Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="no-results-premium">
              <i className="fa fa-search fa-3x"></i>
              <h3>No results found</h3>
              <p>Try clearing your filters or searching for something else.</p>
              <button onClick={clearAllFilters} className="btn-primary" style={{ width: 'auto', padding: '12px 30px' }}>Reset Filters</button>
            </div>
          )}
        </main>
      </div>
    </div>
  </div>
);
};

export default SearchResults;