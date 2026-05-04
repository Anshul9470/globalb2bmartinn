import React, { useState, useEffect, useMemo } from "react";
import { useAuth } from "../Buyers/AuthContext";
import { Link } from "react-router-dom";
import { resolveState } from "../services/stateResolver";
import "../Pages/SearchResults.css"; 
import "./BuyerPremium.css"; 
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [categorySearch, setCategorySearch] = useState("");
  const [showStateSuggestions, setShowStateSuggestions] = useState(false);
  const [showCountrySuggestions, setShowCountrySuggestions] = useState(false);
  const [userPlan, setUserPlan] = useState("Free");
  const [viewLimit, setViewLimit] = useState(0);
  const [leadsViewedToday, setLeadsViewedToday] = useState(0);
  const [unlockedLeads, setUnlockedLeads] = useState([]);
  const [resetsAt, setResetsAt] = useState(null);

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
    /* if (initialData) {
      setBuyers(initialData);
      setLoading(false);
      return;
    } */

    const fetchBuyers = async () => {
      try {
        const apiBase = process.env.REACT_APP_API_ENDPOINT || "http://localhost:3005";
        const response = await fetch(`${apiBase}/buyers?t=${Date.now()}`);
        const data = await response.json();
        const allBuyers = data.buyers || [];
        setBuyers(allBuyers);
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
    
    const apiBase = process.env.REACT_APP_API_ENDPOINT || "http://localhost:3005";
    
    // Fetch user status using the same reliable endpoint as the Dashboard
    fetch(`${apiBase}/login?id=${userId}`)
        .then(response => response.json())
        .then(data => {
            if (data && data.user) {
                const user = data.user;
                const plan = user.plan || "Free";
                
                // Calculate limit locally for consistency
                let limit = 0;
                const lowerPlan = plan.toLowerCase();
                if (lowerPlan === "premium") limit = 75;
                else if (lowerPlan === "advanced") limit = 50;
                else if (lowerPlan === "standard") limit = 25;

                setUserIsPremium(lowerPlan !== "free");
                setUserPlan(plan);
                setLeadsViewedToday(user.leadsViewed || 0);
                setViewLimit(limit);
            }
        })
        .catch(error => console.error('Error fetching user status:', error));

    // Fetch already viewed leads to unlock them
    fetch(`${apiBase}/viewedLeads/${userId}`)
        .then(response => response.json())
        .then(data => {
            if (data.viewedLeads) {
                const viewedEmails = data.viewedLeads.map(l => (l.email || "").toLowerCase().trim());
                setUnlockedLeads(viewedEmails);
            }
        })
        .catch(error => console.error('Error fetching viewed leads:', error));
  }, [userId]);

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
    if (keyword) {
      filtered = filtered.filter(b => 
        (b.productOrService || '').toLowerCase().includes(keyword.toLowerCase()) ||
        (b.requirement || '').toLowerCase().includes(keyword.toLowerCase())
      );
    }

    if (categorySearch.trim()) {
      filtered = filtered.filter(b => 
        (b.productOrService || '').toLowerCase().includes(categorySearch.toLowerCase()) ||
        (b.buyerName || '').toLowerCase().includes(categorySearch.toLowerCase()) ||
        (b.requirement || '').toLowerCase().includes(categorySearch.toLowerCase())
      );
    }
    return filtered;
  }, [processedBuyers, selectedState, selectedCountry, categorySearch]);

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

  const handleViewMore = async (item) => {
    if (!userId) {
      toast.info("Please login to view details");
      setTimeout(() => {
        window.location.href = '/login';
      }, 2000);
      return;
    }

    const currentEmail = (item.email || "").toLowerCase().trim();

    if (userPlan.toLowerCase() === "free") {
      toast.warn("Upgrade to a membership plan to view buyer details");
      setTimeout(() => {
        window.location.href = '/packages';
      }, 2000);
      return;
    }

    // Check if already unlocked (case-insensitive)
    if (unlockedLeads.some(email => email.toLowerCase().trim() === currentEmail)) {
      toast.info("Contact details already visible");
      return;
    }

    // Check limit
    if (leadsViewedToday >= viewLimit) {
      toast.error(`Monthly limit reached! ${userPlan} plan allows ${viewLimit} views per month.`);
      return;
    }

    try {
      const apiBase = process.env.REACT_APP_API_ENDPOINT || "http://localhost:3005";
      const response = await fetch(`${apiBase}/incrementLeadsViewed/${userId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          buyerName: item.name || item.buyerName,
          mobileNo: item.mobileNumber,
          email: currentEmail
        })
      });

      const data = await response.json();

      if (response.ok) {
        setLeadsViewedToday(data.leadsViewed);
        setUnlockedLeads(prev => [...prev, currentEmail]);
        if (data.resetsAt) setResetsAt(new Date(data.resetsAt));
        toast.success("Contact details unlocked!");
      } else {
        // Show reset time if limit reached
        if (data.resetsAt) {
          const resetTime = new Date(data.resetsAt);
          const timeStr = resetTime.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
          toast.error(`${data.error} Resets at ${timeStr}`);
        } else {
          toast.error(data.error || "Failed to unlock contact");
        }
      }
    } catch (error) {
      console.error("Error unlocking lead:", error);
      toast.error("An error occurred while unlocking. Please try again.");
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

  if (loading) {
    return (
      <div className="search-results-page">
        <div className="results-container" style={{ paddingTop: '20px' }}>
          <aside className="filter-sidebar">
            <div className="skeleton-box" style={{ width: '100%', height: '40px', marginBottom: '20px' }}></div>
            <div className="skeleton-box" style={{ width: '100%', height: '400px' }}></div>
          </aside>
          <main className="results-content">
            <div className="buyer-premium-grid">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="buyer-premium-card" style={{ opacity: 0.6 }}>
                  <div className="identity-section" style={{ display: 'flex', gap: '1.5rem' }}>
                    <div className="skeleton-box" style={{ width: '80px', height: '80px', borderRadius: '24px' }}></div>
                    <div style={{ flex: 1 }}>
                      <div className="skeleton-box" style={{ width: '60%', height: '24px', marginBottom: '10px' }}></div>
                      <div className="skeleton-box" style={{ width: '40%', height: '14px', marginBottom: '10px' }}></div>
                      <div className="skeleton-box" style={{ width: '30%', height: '12px' }}></div>
                    </div>
                  </div>
                  <div className="requirement-section" style={{ marginTop: '2rem' }}>
                    <div className="skeleton-box" style={{ width: '100%', height: '60px', borderRadius: '1.5rem' }}></div>
                  </div>
                  <div className="contact-section" style={{ marginTop: '2rem' }}>
                    <div className="skeleton-box" style={{ width: '80%', height: '14px', marginBottom: '10px' }}></div>
                    <div className="skeleton-box" style={{ width: '70%', height: '14px', marginBottom: '10px' }}></div>
                    <div className="skeleton-box" style={{ width: '100%', height: '45px', borderRadius: '1.2rem', marginTop: '1rem' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </main>
          <aside className="filter-sidebar right-sidebar">
            <div className="skeleton-box" style={{ width: '100%', height: '40px', marginBottom: '20px' }}></div>
            <div className="skeleton-box" style={{ width: '100%', height: '300px' }}></div>
          </aside>
        </div>
      </div>
    );
  }

  return (
    <div className={`search-results-page ${showSellerForm ? 'form-open' : ''}`}>
      <div className="category-header-premium">
        <h1>{title} Buyers</h1>
        <div className="plan-status-banner">
          <span className={`plan-badge plan-${userPlan.toLowerCase()}`}>{userPlan} Plan</span>
          <span className="limit-status">
            Monthly Limit: <strong>{leadsViewedToday}/{viewLimit}</strong> leads viewed
          </span>
          {resetsAt && (
            <span className="reset-timer" style={{ fontSize: '12px', color: '#888', marginLeft: '10px' }}>
              <i className="fas fa-clock" style={{ marginRight: '4px' }}></i>
              Resets at {resetsAt.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
            </span>
          )}
        </div>
      </div>

      {showSellerForm && (
        <div className="form-modal-overlay">
          <div className="form-modal-content">
            <button className="form-close-btn" onClick={() => setShowSellerForm(false)}>
              <i className="fas fa-times"></i>
            </button>
            <form onSubmit={handleSellerSubmit} className="compact-seller-form">
              <div className="form-header">
                <div className="form-header-icon">
                  <i className="fas fa-rocket"></i>
                </div>
                <h2>Join as a Supplier</h2>
                <p>Register to get verified {keyword} leads</p>
              </div>
              
              <div className="form-group icon-input">
                <i className="fas fa-user input-icon"></i>
                <input type="text" placeholder="Full Name" onChange={e => setSellerFormData({...sellerFormData, name: e.target.value})} required />
              </div>
              
              <div className="form-group icon-input">
                <i className="fas fa-envelope input-icon"></i>
                <input type="email" placeholder="Business Email" onChange={e => setSellerFormData({...sellerFormData, email: e.target.value})} required />
              </div>
              
              <div className="form-group icon-input">
                <i className="fas fa-phone-alt input-icon"></i>
                <input type="text" placeholder="Mobile Number" onChange={e => setSellerFormData({...sellerFormData, mobileNumber: e.target.value})} required />
              </div>
              
              <div className="form-group icon-input">
                <i className="fas fa-building input-icon"></i>
                <input type="text" placeholder="Company Name" onChange={e => setSellerFormData({...sellerFormData, companyName: e.target.value})} required />
              </div>
              
              <div className="form-group icon-input">
                <i className="fas fa-box-open input-icon"></i>
                <input type="text" placeholder="Product or Service" onChange={e => setSellerFormData({...sellerFormData, productOrService: e.target.value})} required />
              </div>
              
              <button type="submit" className="modal-submit-btn">
                <span>Register Now</span>
                <i className="fas fa-arrow-right" style={{ marginLeft: '10px' }}></i>
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="results-container" style={{ paddingTop: '20px' }}>
        {/* Left Sidebar - State Only */}
        <aside className="filter-sidebar">
          <div className="filter-section">
            <h3 className="sidebar-title">Browse by State</h3>
            <div style={{ position: 'relative', marginBottom: '20px' }}>
              <select 
                className="state-filter-input" 
                value={selectedState || ''} 
                onChange={(e) => {
                  const val = e.target.value;
                  setSelectedState(val === '' ? null : val);
                  setStateSearch(val);
                }}
                style={{ appearance: 'auto', cursor: 'pointer' }}
              >
                <option value="">All India</option>
                {INDIAN_STATES.sort().map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="filter-scroll-box" style={{ maxHeight: '500px', overflowY: 'auto', paddingRight: '5px' }}>
              <div className="req-block-label" style={{ marginBottom: '10px' }}>All States</div>
              <div className={`filter-list-item ${!selectedState ? 'active' : ''}`} onClick={() => { setSelectedState(null); setStateSearch(''); }}>
                All India
              </div>
              {INDIAN_STATES.sort().map(stateName => {
                const count = processedBuyers.filter(x => x.displayState === stateName).length;
                return (
                  <div key={stateName} className={`filter-list-item ${selectedState === stateName ? 'active' : ''}`} onClick={() => setSelectedState(stateName)}>
                    {stateName}
                  </div>
                );
              })}
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
                      <i className="fas fa-envelope"></i> {unlockedLeads.includes((item.email || "").toLowerCase().trim()) ? item.email : maskEmail(item.email)}
                    </div>
                    <div className="contact-line">
                      <i className="fas fa-phone-alt"></i> {unlockedLeads.includes((item.email || "").toLowerCase().trim()) ? item.mobileNumber : maskPhone(item.mobileNumber)}
                    </div>
                    <div className="contact-line">
                      <i className="fas fa-map-marker-alt"></i> {item.displayState}, {item.country || 'India'}
                    </div>
                    <button 
                      className="view-details-btn" 
                      onClick={() => handleViewMore(item)}
                      style={{ 
                        background: unlockedLeads.includes((item.email || "").toLowerCase().trim()) ? '#10b981' : '',
                        cursor: unlockedLeads.includes((item.email || "").toLowerCase().trim()) ? 'default' : 'pointer'
                      }}
                    >
                      {unlockedLeads.includes((item.email || "").toLowerCase().trim()) ? 'Contact Unlocked' : 'View Contact Details'}
                    </button>
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
            <div style={{ position: 'relative', marginBottom: '20px' }}>
              <select 
                className="state-filter-input" 
                value={selectedCountry || ''} 
                onChange={(e) => {
                  const val = e.target.value;
                  setSelectedCountry(val === '' ? null : val);
                  setCountrySearch(val);
                }}
                style={{ appearance: 'auto', cursor: 'pointer' }}
              >
                <option value="">All Countries</option>
                {COUNTRIES.sort().map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="filter-scroll-box" style={{ maxHeight: '500px', overflowY: 'auto' }}>
              <div className="req-block-label" style={{ marginBottom: '10px' }}>Quick Select</div>
              <div className={`filter-list-item ${!selectedCountry ? 'active' : ''}`} onClick={() => { setSelectedCountry(null); setCountrySearch(''); }}>
                All Countries
              </div>
              {COUNTRIES.slice(0, 15).map(country => (
                <div key={country} className={`filter-list-item ${selectedCountry === country ? 'active' : ''}`} onClick={() => setSelectedCountry(country)}>
                  {country}
                </div>
              ))}
            </div>
          </div>

          {/* <div className="filter-section">
            <h3 className="sidebar-title">Membership Plans</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Link to="/packages" className="plan-item" style={{ padding: '10px', background: '#f8fafc', borderRadius: '8px', textDecoration: 'none', color: '#1e293b', fontWeight: '600' }}>Standard Plan</Link>
              <Link to="/packages" className="plan-item" style={{ padding: '10px', background: '#f8fafc', borderRadius: '8px', textDecoration: 'none', color: '#1e293b', fontWeight: '600' }}>Premium Plan</Link>
            </div>
          </div> */}
        </aside>
      </div>
    </div>
  );
};

export default BuyerPageTemplate;
