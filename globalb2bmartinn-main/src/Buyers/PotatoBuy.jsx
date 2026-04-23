import React, { useState, useEffect } from "react";
import "./OnionBuy.css"; // Assuming a CSS file for potato buyer styles
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";
import Whyglobal from "../Components/Whyglobal";
import { resolveState } from "../services/stateResolver";

const PotatoBuy = () => {
  const { userId } = useAuth();
  const [userIsPremium, setUserIsPremium] = useState(false);
  const [shownNumbers, setShownNumbers] = useState([]);
  const [leadsViewed, setLeadsViewed] = useState(0);
  const [buyers, setBuyers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  // Country Search State
  const [countrySearch, setCountrySearch] = useState("");
  const [countrySuggestions, setCountrySuggestions] = useState([]);
  const [showCountrySuggestions, setShowCountrySuggestions] = useState(false);

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

  useEffect(() => {
    const fetchBuyers = async () => {
      try {
        const response = await fetch(`http://localhost:3005/buyers?t=${Date.now()}`);
        const data = await response.json();
        // Filter for potato-related products
        const potatoBuyers = (data.buyers || []).filter(buyer => 
          (buyer.productOrService || '').toLowerCase().includes('potato')
        );
        setBuyers(potatoBuyers);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching potato buyers:", error);
        setLoading(false);
      }
    };
    fetchBuyers();
  }, []);

  useEffect(() => {
    if (!userId) return;

    const storedViewedLeads =
      JSON.parse(localStorage.getItem(`potatoViewedLeads_${userId}`)) || [];
    setShownNumbers(storedViewedLeads);

    fetch(
      `http://localhost:3005/getUserWithPremiumStatus/${userId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setUserIsPremium(data.isPremium);
        setLeadsViewed(data.leadsViewed);
      })
      .catch((error) => {
        console.error("Error fetching user information:", error);
      });
  }, [userId]);

  // Process buyers and calculate counts
  const processedBuyers = React.useMemo(() => {
    return buyers.map(b => ({
      ...b,
      displayState: resolveState(b)
    }));
  }, [buyers]);

  const stateCounts = React.useMemo(() => {
    const counts = {};
    processedBuyers.forEach(b => {
      const s = b.displayState;
      if (s) counts[s] = (counts[s] || 0) + 1;
    });
    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }, [processedBuyers]);

  const filteredBuyers = React.useMemo(() => {
    let filtered = processedBuyers;
    
    if (selectedState) {
      filtered = filtered.filter(b => b.displayState === selectedState);
    }
    
    if (selectedCountry) {
      filtered = filtered.filter(b => {
        const bCountry = (b.country || 'India').trim().toLowerCase();
        const fCountry = selectedCountry.toLowerCase();
        return bCountry === fCountry;
      });
    }
    
    return filtered;
  }, [processedBuyers, selectedState, selectedCountry]);

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

  useEffect(() => {
    if (!userId) return;

    const storedViewedLeads =
      JSON.parse(localStorage.getItem(`potatoViewedLeads_${userId}`)) || [];
    setShownNumbers(storedViewedLeads);

    fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/getUserWithPremiumStatus/${userId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setUserIsPremium(data.isPremium);
        setLeadsViewed(data.leadsViewed);
      })
      .catch((error) => {
        console.error("Error fetching user information:", error);
      });
  }, [userId]);

  const toggleNumber = async (index) => {
    if (!userIsPremium) return;

    if (leadsViewed >= 25) {
      alert("You have reached the limit of 25 leads viewed per month.");
      return;
    }

    if (shownNumbers.includes(index)) return;

    const updatedShownNumbers = [...shownNumbers, index];
    setShownNumbers(updatedShownNumbers);

    localStorage.setItem(
      `potatoViewedLeads_${userId}`,
      JSON.stringify(updatedShownNumbers)
    );

    const buyer = filteredBuyers[index];

    try {
      const response = await fetch(
        `http://localhost:3005/incrementLeadsViewed/${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            buyerName: buyer.name,
            mobileNo: buyer.mobileNumber,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setLeadsViewed(data.leadsViewed);
      } else {
        const errorData = await response.json();
        console.error("Error incrementing leads viewed:", errorData.error);
      }
    } catch (error) {
      console.error("Error incrementing leads viewed:", error.message);
    }
  };

  if (loading)
    return (
      <div className="container" style={{ padding: "100px", textAlign: "center" }}>
        Loading Potato Leads...
      </div>
    );

  return (
    <>
      <div className="container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="breadcrumb-item active">Potato Buyers</li>
        </ol>
      </div>
      <div className="containersx">
        <div className="browsers">
            <div className="tk23-hkCont_premserv__box" style={{ padding: '15px', background: 'white', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ marginTop: '0', fontSize: '1.2rem', fontWeight: 'bold' }}>Browse by State</h3>
                <ul className="flt-list cust-scroll" id="state-lists">
                    <li className={!selectedState ? 'active-link' : ''}>
                        <button 
                          onClick={() => setSelectedState(null)}
                          style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', padding: '8px 0', fontSize: '14px' }}
                        >
                            All India <span className="count-badge">{processedBuyers.length}</span>
                        </button>
                    </li>
                    {stateCounts.map(([state, count]) => (
                        <li key={state} className={selectedState === state ? 'active-link' : ''}>
                            <button 
                              onClick={() => setSelectedState(state)}
                              style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', padding: '8px 0', fontSize: '14px' }}
                            >
                                {state} <span className="count-badge">{count}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Country Search Filter Moved Here */}
            <div className="tk23-hkCont_premserv__box" style={{ padding: '15px', background: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', marginTop: '20px' }}>
                <h3 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '15px', fontWeight: 'bold' }}>Search by Country</h3>
                <div style={{ position: 'relative' }}>
                  <div style={{ display: 'flex', alignItems: 'center', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '5px 10px' }}>
                    <input
                      type="text"
                      placeholder="Search Country..."
                      value={countrySearch}
                      onChange={(e) => handleCountrySearchChange(e.target.value)}
                      onFocus={() => countrySearch.trim() && setShowCountrySuggestions(true)}
                      onBlur={() => setTimeout(() => setShowCountrySuggestions(false), 200)}
                      style={{ width: '100%', border: 'none', background: 'transparent', padding: '8px', outline: 'none', fontSize: '14px' }}
                    />
                    {countrySearch && (
                      <button onClick={clearCountryFilter} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b', fontSize: '18px' }}>×</button>
                    )}
                  </div>
                  
                  {showCountrySuggestions && countrySuggestions.length > 0 && (
                    <ul style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', marginTop: '5px', listStyle: 'none', padding: 0, zIndex: 100, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                      {countrySuggestions.map((country, index) => (
                        <li 
                          key={index}
                          onMouseDown={() => selectCountry(country)}
                          style={{ padding: '10px 15px', cursor: 'pointer', fontSize: '14px', borderBottom: index < countrySuggestions.length - 1 ? '1px solid #f1f5f9' : 'none' }}
                        >
                          {country}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {selectedCountry && (
                  <div style={{ marginTop: '10px', padding: '8px', background: '#ecfdf5', borderRadius: '8px', border: '1px solid #10b981', color: '#047857', fontSize: '13px' }}>
                    Filtering: <strong>{selectedCountry}</strong>
                  </div>
                )}
            </div>

            {/* Membership Plans Moved Here */}
            <div className="tk23-hkCont_premserv__box" style={{ padding: '15px', background: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', marginTop: '20px' }}>
                <h3 className="tk23-hkCont_premserv__ttl" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Membership Plans</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '15px' }}>
                    <Link to='/packages' className="plan-item">Standard Plan</Link>
                    <Link to='/packages' className="plan-item">Advance Plan</Link>
                    <Link to='/packages' className="plan-item">Premium Plan</Link>
                </div>
                <Link to='/packages' className="call-now-cta">Call Now</Link>
            </div>
        </div>
                <div className="buyers" style={{ flex: 1 }}>
                    {filteredBuyers.length === 0 ? (
                        <div style={{ padding: "20px", textAlign: "center", background: 'white', borderRadius: '10px' }}>
                            <p>No potato buyers found for the selected {selectedState ? 'state' : ''} {selectedState && selectedCountry ? 'and' : ''} {selectedCountry ? 'country' : ''}.</p>
                            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '10px' }}>
                                {(selectedState || selectedCountry) && (
                                    <button 
                                        onClick={() => {
                                            setSelectedState(null);
                                            setSelectedCountry(null);
                                            setCountrySearch("");
                                        }}
                                        style={{ padding: '8px 16px', background: '#0f172a', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                                    >
                                        Clear All Filters
                                    </button>
                                )}
                            </div>
                        </div>
                    ) : (
                        filteredBuyers.map((buyer, index) => (
                            <div key={index} className="buyer-card">
                                <h2 style={{ color: "red" }}> Looking For: {buyer.productOrService || "Potato"}</h2>
                                <p><strong>Buyer Name:</strong> {buyer.name || "Verified Buyer"}</p>
                                <p><strong>Quantity:</strong> {buyer.quantity} {buyer.unit}</p>
                                <p><strong>State:</strong> {buyer.displayState || "India"}</p>
                                <p><strong>Country:</strong> {buyer.country || "India"}</p>
                                <p><strong>Mobile No.:</strong> {userIsPremium ? (shownNumbers.includes(index) ? buyer.mobileNumber : '********') : '********'}</p>
                                <div style={{ display: "flex", gap: "10px" }}>
                                    {userIsPremium && !shownNumbers.includes(index) && (
                                        <button
                                            className="detail-btn"
                                            style={{
                                                padding: "5px 10px",
                                                background: "#f7f1f1",
                                                color: "orange",
                                                borderRadius: "3px",
                                                cursor: "pointer",
                                            }}
                                            onClick={() => toggleNumber(index)}
                                        >
                                            Click to see
                                        </button>
                                    )}
                                </div>
                                <div className="btns-imp">
                                    <Link to={"/login"}><button className="detailing-btn">View More</button></Link>
                                    <Link to={"/register-Company"}><button className="regis-btn">Register Free</button></Link>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>      <Whyglobal />
    </>
  );
};

export default PotatoBuy;
