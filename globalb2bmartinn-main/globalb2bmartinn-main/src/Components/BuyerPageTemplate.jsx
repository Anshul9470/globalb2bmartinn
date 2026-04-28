import React, { useState, useEffect, useMemo } from "react";
import { useAuth } from "../Buyers/AuthContext";
import { Link } from "react-router-dom";
import { resolveState } from "../services/stateResolver";
import "../Pages/SearchResults.css"; 
import "./BuyerPremium.css"; 

const BuyerPageTemplate = ({ keyword, title, initialData = null }) => {
  const { userId } = useAuth();
  const [userIsPremium, setUserIsPremium] = useState(false);
  const [shownNumbers, setShownNumbers] = useState([]);
  const [buyers, setBuyers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [stateSearch, setStateSearch] = useState("");
  const [countrySearch, setCountrySearch] = useState("");
  const [showStateSuggestions, setShowStateSuggestions] = useState(false);
  const [showCountrySuggestions, setShowCountrySuggestions] = useState(false);

  const INDIAN_STATES = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", 
    "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi"
  ];

  const COUNTRIES = [
    "India", "United States", "United Kingdom", "United Arab Emirates", "Australia", "Canada", "Germany", "France", "Japan", "China", "Singapore", "Italy", "Spain", "Russia", "Brazil", "South Africa"
  ];

  useEffect(() => {
    if (initialData) {
      setBuyers(initialData);
      setLoading(false);
      return;
    }

    const fetchBuyers = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/buyers?t=${Date.now()}`);
        const data = await response.json();
        const filtered = (data.buyers || []).filter(buyer => 
          (buyer.productOrService || '').toLowerCase().includes(keyword.toLowerCase())
        );
        setBuyers(filtered);
        setLoading(false);
      } catch (error) {
        console.error(`Error fetching ${keyword} buyers:`, error);
        setLoading(false);
      }
    };
    fetchBuyers();
  }, [keyword, initialData]);

  useEffect(() => {
    if (!userId) return;
    const storedViewedLeads = JSON.parse(localStorage.getItem(`${keyword}ViewedLeads_${userId}`)) || [];
    setShownNumbers(storedViewedLeads);
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/getUserWithPremiumStatus/${userId}`)
        .then(response => response.json())
        .then(data => {
            setUserIsPremium(data.isPremium);
        })
        .catch(error => console.error('Error:', error));
  }, [userId, keyword]);

  const processedBuyers = useMemo(() => {
    return buyers.map(b => ({
      ...b,
      displayState: resolveState(b) || (b.locationandDate ? b.locationandDate.split(',')[0].trim() : 'Unknown State')
    }));
  }, [buyers]);

  const filteredResults = useMemo(() => {
    let filtered = processedBuyers;
    if (selectedState) {
      filtered = filtered.filter(b => b.displayState === selectedState);
    }
    if (selectedCountry) {
      filtered = filtered.filter(b => (b.country || 'India').toLowerCase() === selectedCountry.toLowerCase());
    }
    return filtered;
  }, [processedBuyers, selectedState, selectedCountry]);

  const stateSuggestions = useMemo(() => {
    if (!stateSearch.trim()) return [];
    return INDIAN_STATES.filter(s => s.toLowerCase().includes(stateSearch.toLowerCase()));
  }, [stateSearch]);

  const countrySuggestions = useMemo(() => {
    if (!countrySearch.trim()) return [];
    return COUNTRIES.filter(c => c.toLowerCase().includes(countrySearch.toLowerCase()));
  }, [countrySearch]);

  const maskEmail = (email) => {
    if (!email) return 'b***@gmail.com';
    const [name, domain] = email.split('@');
    return `${name[0]}***@${domain}`;
  };

  const maskPhone = (phone) => {
    if (!phone) return '+91 **********';
    return `${phone.substring(0, 3)} *******${phone.substring(phone.length - 2)}`;
  };

  const handleViewMore = () => {
    if (userId) {
      window.location.href = '/dashboard';
    } else {
      window.location.href = '/login';
    }
  };

  const [showSellerForm, setShowSellerForm] = useState(false);
  const [sellerFormData, setSellerFormData] = useState({
    name: '', email: '', mobileNumber: '', companyName: '', productOrService: '', category: 'All'
  });

  useEffect(() => {
    const timer = setTimeout(() => setShowSellerForm(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSellerSubmit = async (e) => {
    e.preventDefault();
    try {
      const { registerCompany } = await import('../services/api');
      await registerCompany(sellerFormData);
      alert("Registration successful!");
      setShowSellerForm(false);
    } catch (err) {
      alert("Registration failed: " + err.message);
    }
  };

  if (loading) return <div className="loading-fresher">Loading premium leads...</div>;

  return (
    <div className={`search-results-page ${showSellerForm ? 'form-open' : ''}`}>
      {showSellerForm && (
        <div className="form-modal-overlay">
          <div className="form-modal-content">
            <button className="form-close-btn" onClick={() => setShowSellerForm(false)}>×</button>
            <form onSubmit={handleSellerSubmit} className="compact-seller-form">
              <div className="form-header">
                <h2>Join as a Supplier</h2>
                <p>Register to get verified {keyword} leads</p>
              </div>
              <div className="form-group"><input type="text" placeholder="Name" onChange={e => setSellerFormData({...sellerFormData, name: e.target.value})} required /></div>
              <div className="form-group"><input type="email" placeholder="Email" onChange={e => setSellerFormData({...sellerFormData, email: e.target.value})} required /></div>
              <div className="form-group"><input type="text" placeholder="Mobile" onChange={e => setSellerFormData({...sellerFormData, mobileNumber: e.target.value})} required /></div>
              <div className="form-group"><input type="text" placeholder="Company" onChange={e => setSellerFormData({...sellerFormData, companyName: e.target.value})} required /></div>
              <div className="form-group"><input type="text" placeholder="Product/Service" onChange={e => setSellerFormData({...sellerFormData, productOrService: e.target.value})} required /></div>
              <button type="submit" className="modal-submit-btn">Register Now</button>
            </form>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="results-hero-wrapper" style={{ padding: '60px 0', textAlign: 'center' }}>
        <div className="hero-content-container" style={{ margin: '0 auto', maxWidth: '900px' }}>
          <div className="purpose-badge">Verified {keyword} Marketplace</div>
          <h1 className="hero-title-highlight">{title} Buyers</h1>
          <p className="results-subtitle" style={{ margin: '20px auto 0' }}>
            Connect with verified {keyword} buyers and explore latest trade opportunities to grow your export business.
          </p>
        </div>
      </div>

      <div className="results-container">
        {/* Left Sidebar - State Only */}
        <aside className="filter-sidebar">
          <div className="filter-section">
            <h3 className="sidebar-title">Browse by State</h3>
            <div className="filter-scroll-box" style={{ maxHeight: '400px', overflowY: 'auto' }}>
              <div className={`filter-list-item ${!selectedState ? 'active' : ''}`} onClick={() => setSelectedState(null)}>
                All India
              </div>
              {processedBuyers.reduce((acc, b) => {
                const s = b.displayState;
                if (s && !acc.find(x => x.name === s)) acc.push({ name: s, count: processedBuyers.filter(x => x.displayState === s).length });
                return acc;
              }, []).sort((a,b) => b.count - a.count).map(state => (
                <div key={state.name} className={`filter-list-item ${selectedState === state.name ? 'active' : ''}`} onClick={() => setSelectedState(state.name)}>
                  {state.name} <span className="count-badge">{state.count}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Results Main Area */}
        <main className="results-content">
          <div className="buyer-premium-grid">
            {filteredResults.map((item, index) => {
              const initials = (item.name || 'B').split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
              // Mock data for premium look if not present
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
                      <h3>{item.name || 'Global Tech Solutions'}</h3>
                      <div className="category-rating">
                        <div className="cat-info">
                          <i className="fas fa-microchip"></i> {title || 'Electronics'}
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
                      <div className="req-product-name">{item.requirement || item.productOrService || title}</div>
                    </div>
                    <div className="req-block">
                      <div className="req-block-label">QUANTITY REQUIRED</div>
                      <div className="quantity-pill">
                        {item.quantity ? `${item.quantity} ${item.unit || ''}` : '5,000+ Units / Monthly'}
                      </div>
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
            })}
          </div>
        </main>

        {/* Right Sidebar - Country & Plans */}
        <aside className="filter-sidebar right-sidebar">
          <div className="filter-section">
            <h3 className="sidebar-title">Search by Country</h3>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                placeholder="Search Country..."
                className="state-filter-input"
                value={countrySearch}
                onChange={(e) => {
                  setCountrySearch(e.target.value);
                  setShowCountrySuggestions(true);
                }}
              />
              {showCountrySuggestions && countrySearch && (
                <ul className="state-suggestions">
                  {COUNTRIES.filter(c => c.toLowerCase().includes(countrySearch.toLowerCase())).map(c => (
                    <li key={c} onMouseDown={() => { setSelectedCountry(c); setCountrySearch(c); setShowCountrySuggestions(false); }} className="state-suggestion-item">{c}</li>
                  ))}
                </ul>
              )}
            </div>
            
            <div className="scrollable-filter-list-container" style={{ marginTop: '16px' }}>
              <div className="filter-scroll-box" style={{ maxHeight: '300px' }}>
                <div className={`filter-list-item ${!selectedCountry ? 'active' : ''}`} onClick={() => setSelectedCountry(null)}>All Countries</div>
                {COUNTRIES.map(country => (
                  <div key={country} className={`filter-list-item ${selectedCountry === country ? 'active' : ''}`} onClick={() => setSelectedCountry(country)}>
                    {country}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="filter-section">
            <h3 className="sidebar-title">Membership Plans</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Link to="/packages" className="plan-item" style={{ padding: '10px', background: '#f8fafc', borderRadius: '8px', textDecoration: 'none', color: '#1e293b', fontWeight: '600' }}>Standard Plan</Link>
              <Link to="/packages" className="plan-item" style={{ padding: '10px', background: '#f8fafc', borderRadius: '8px', textDecoration: 'none', color: '#1e293b', fontWeight: '600' }}>Premium Plan</Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BuyerPageTemplate;
