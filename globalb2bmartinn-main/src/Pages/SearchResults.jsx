import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Buyers/AuthContext';
import { resolveState } from '../services/stateResolver';
import { registerCompany } from '../services/api';
import './SearchResults.css';

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userId } = useAuth();
  const { results = [], searchType, searchQuery, noResults, error } = location.state || { results: [], searchType: 'all' };
  const query = new URLSearchParams(location.search).get('query');
  const typeParam = new URLSearchParams(location.search).get('type') || searchType;

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

  // Country Search State
  const [countrySearch, setCountrySearch] = React.useState("");
  const [countrySuggestions, setCountrySuggestions] = React.useState([]);
  const [showCountrySuggestions, setShowCountrySuggestions] = React.useState(false);

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
    statename: 'General'
  });

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

    return filtered;
  }, [processedResults, selectedState, selectedCountry]);

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
    <div className="search-results-page">
      <div className="results-hero-wrapper">
        <div className="hero-animation-bg"></div>
        <div className="results-header-container">
          <div className="results-header">
            <div className="header-left">
              <div className="purpose-badge">Verified Marketplace</div>
              <h1>{getTitle()}</h1>
              <div className="trust-badges-row">
                <span className="trust-badge available"><i className="fa fa-check-circle"></i> Available Buyers</span>
                <span className="trust-badge verified"><i className="fa fa-shield-alt"></i> Verified Buyers</span>
              </div>
              <p className="results-subtitle">{getSubTitle()}</p>
            </div>
            <div className="header-right">
              <button 
                className={`seller-cta-btn ${showSellerForm ? 'active' : ''}`}
                onClick={() => setShowSellerForm(!showSellerForm)}
              >
                {showSellerForm ? 'Close Form' : 'For Seller'}
              </button>
            </div>
          </div>

          {showSellerForm && (
            <div className="compact-seller-form-area">
              <form onSubmit={handleSellerSubmit} className="compact-seller-form">
                <h2>Join as a Supplier</h2>
                <div className="form-grid">
                  <input type="text" name="name" placeholder="Full Name" onChange={handleSellerFormChange} required />
                  <input type="email" name="email" placeholder="Email Address" onChange={handleSellerFormChange} required />
                  <input type="text" name="mobileNumber" placeholder="Mobile Number" onChange={handleSellerFormChange} required />
                  <input type="text" name="companyName" placeholder="Company Name" onChange={handleSellerFormChange} required />
                  <input type="text" name="productOrService" placeholder="Products You Sell" onChange={handleSellerFormChange} required />
                </div>
                <button type="submit" disabled={sellerFormLoading}>
                  {sellerFormLoading ? 'Registering...' : 'Register Now'}
                </button>
                {sellerFormSuccess && <p className="form-success">Registration successful!</p>}
                {sellerFormError && <p className="form-error">{sellerFormError}</p>}
              </form>
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

      <div className="results-container">
        {/* Sidebar Filter */}
        <aside className="filter-sidebar">
          <div className="filter-section">
            <h3 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '15px' }}>Search by State</h3>
            <div className="state-search-box">
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="Search State..."
                  className="state-filter-input"
                  value={stateSearch}
                  onChange={(e) => handleStateSearchChange(e.target.value)}
                  onFocus={() => stateSearch.trim() && setShowStateSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowStateSuggestions(false), 200)}
                />
                {stateSearch && (
                  <button className="clear-search-btn" onClick={clearStateFilter}>×</button>
                )}
              </div>
              
              {showStateSuggestions && stateSuggestions.length > 0 && (
                <ul className="state-suggestions">
                  {stateSuggestions.map((state, index) => (
                    <li 
                      key={index}
                      onMouseDown={() => selectState(state)}
                      className="state-suggestion-item"
                    >
                      {state}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          
          {selectedState && (
            <div className="active-filter-badge" style={{ marginTop: '20px', padding: '10px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              Filtering: <strong>{selectedState}</strong>
            </div>
          )}
        </aside>

        {/* Results Content */}
        <main className="results-content">
          {filteredResults.length > 0 ? (
            <div className="results-grid">
              {filteredResults.map((item, index) => {
                const displayName = isBuyerSearch ? item.name : (item.companyName || item.name);
                const initials = displayName ? displayName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() : 'B';
                const avatarColors = ['#2563eb', '#7c3aed', '#db2777', '#ea580c', '#16a34a', '#0891b2'];
                const avatarBg = avatarColors[index % avatarColors.length];

                return (
                  <div key={index} className="directory-card">
                    {/* Left Section: Company/Buyer Info */}
                    <div className="card-column info-column">
                      <div className="avatar-wrapper">
                        <div className="initials-avatar" style={{ backgroundColor: avatarBg }}>
                          {initials}
                        </div>
                        <div className="verified-badge-small">
                          <i className="fa fa-check"></i>
                        </div>
                      </div>
                      <div className="entity-main-info">
                        <h3>{displayName}</h3>
                        <div className="rating-row">
                          <div className="stars">
                            {[1, 2, 3, 4, 5].map(s => <i key={s} className="fa fa-star active"></i>)}
                          </div>
                          <span className="review-count">(150+ Reviews)</span>
                        </div>
                        <div className="status-row">
                          <span className="status-pill verified">VERIFIED</span>
                          <span className="success-transaction">8.2k Successful Deals</span>
                        </div>
                      </div>
                    </div>

                    {/* Middle Section: Requirement/Offering */}
                    <div className="card-column requirement-column">
                      <div className="requirement-label">LOOKING FOR</div>
                      <h4 className="requirement-title">{item.productOrService}</h4>
                      
                      <div className="quantity-box">
                        <div className="box-label">QUANTITY REQUIRED</div>
                        <div className="box-value">{item.quantity} {item.unit || 'Units'}</div>
                      </div>
                      
                      <div className="category-meta">
                        <i className="fa fa-tag"></i> {isBuyerSearch ? 'Import Requirement' : 'Service Offering'}
                      </div>
                    </div>

                    {/* Right Section: Contact & Actions */}
                    <div className="card-column contact-column">
                      <div className="contact-info-list">
                        <div className="contact-item">
                          <i className="fa fa-envelope"></i>
                          <span>{maskEmail(item.email)}</span>
                        </div>
                        <div className="contact-item">
                          <i className="fa fa-phone-alt"></i>
                          <span>{maskPhone(item.mobileNumber)}</span>
                        </div>
                        <div className="contact-item">
                          <i className="fa fa-map-marker-alt"></i>
                          <span>{item.displayState || 'India'}, {item.country || 'Global'}</span>
                        </div>
                      </div>
                      <button 
                        onClick={handleViewMore}
                        className="premium-view-btn"
                      >
                        View More Details
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="no-results">
              <p>No {isBuyerSearch ? 'buyers' : 'sellers'} found for the selected {selectedState ? 'state' : ''} {selectedState && selectedCountry ? 'and' : ''} {selectedCountry ? 'country' : ''}.</p>
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '15px' }}>
                {selectedState && (
                  <button onClick={clearStateFilter} className="clear-filter-btn" style={{ padding: '8px 16px', background: '#f1f5f9', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
                    Clear State
                  </button>
                )}
                {selectedCountry && (
                  <button onClick={clearCountryFilter} className="clear-filter-btn" style={{ padding: '8px 16px', background: '#f1f5f9', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
                    Clear Country
                  </button>
                )}
                {(selectedState || selectedCountry) && (
                  <button onClick={clearAllFilters} className="clear-filter-btn" style={{ padding: '8px 16px', background: '#0f172a', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
                    Clear All
                  </button>
                )}
              </div>
            </div>
          )}
        </main>

        {/* Right Sidebar - Country Search */}
        <aside className="filter-sidebar right-sidebar">
          <div className="filter-section">
            <h3 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '15px' }}>Search by Country</h3>
            <div className="state-search-box">
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="Search Country..."
                  className="state-filter-input"
                  value={countrySearch}
                  onChange={(e) => handleCountrySearchChange(e.target.value)}
                  onFocus={() => countrySearch.trim() && setShowCountrySuggestions(true)}
                  onBlur={() => setTimeout(() => setShowCountrySuggestions(false), 200)}
                />
                {countrySearch && (
                  <button className="clear-search-btn" onClick={clearCountryFilter}>×</button>
                )}
              </div>
              
              {showCountrySuggestions && countrySuggestions.length > 0 && (
                <ul className="state-suggestions">
                  {countrySuggestions.map((country, index) => (
                    <li 
                      key={index}
                      onMouseDown={() => selectCountry(country)}
                      className="state-suggestion-item"
                    >
                      {country}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          
          {selectedCountry && (
            <div className="active-filter-badge" style={{ marginTop: '20px', padding: '10px', background: '#ecfdf5', borderRadius: '8px', border: '1px solid #10b981', color: '#047857' }}>
              Country: <strong>{selectedCountry}</strong>
            </div>
          )}

          <div className="filter-instructions" style={{ marginTop: '30px', fontSize: '0.9rem', color: '#64748b', background: '#f8fafc', padding: '15px', borderRadius: '12px' }}>
            <p style={{ fontWeight: 600, marginBottom: '8px', color: '#475569' }}>Filter Tips:</p>
            <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
              <li>Select <strong>India</strong> to use state filters.</li>
              <li>Search global leads by selecting other countries.</li>
              <li>Use clear buttons to reset filters.</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
    </div>
  );
};



export default SearchResults;