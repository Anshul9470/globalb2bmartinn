import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './OnionBuy.css'; // Shared styles for the 2-column layout
import { useAuth } from './AuthContext';
import Whyglobal from '../Components/Whyglobal';
import { resolveState } from "../services/stateResolver";

const CategoryBuyerLeads = () => {
    const { categoryName } = useParams(); // URL parameter: /buyer/:categoryName
    const { userId } = useAuth();
    
    // UI State
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

    // Fetch buyers and filter by dynamic category name
    useEffect(() => {
        const fetchBuyers = async () => {
            setLoading(true);
            try {
                const response = await fetch(`http://localhost:3005/buyers?t=${Date.now()}`);
                const data = await response.json();
                
                // Display name for the category (e.g., "rice" -> "Rice")
                const displayCategory = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
                
                const filtered = (data.buyers || []).filter(buyer => 
                    (buyer.productOrService || '').toLowerCase().includes(categoryName.toLowerCase())
                );
                
                setBuyers(filtered);
                setLoading(false);
            } catch (error) {
                console.error(`Error fetching ${categoryName} buyers:`, error);
                setLoading(false);
            }
        };
        fetchBuyers();
    }, [categoryName]);

    // Update Viewed Leads count and Premium status
    useEffect(() => {
        if (!userId) return;
        const storedViewedLeads = JSON.parse(localStorage.getItem(`viewedLeads_${categoryName}_${userId}`)) || [];
        setShownNumbers(storedViewedLeads);
        fetch(`http://localhost:3005/getUserWithPremiumStatus/${userId}`)
            .then(response => response.json())
            .then(data => {
                setUserIsPremium(data.isPremium);
                setLeadsViewed(data.leadsViewed);
            })
            .catch(error => console.error('Error fetching user status:', error));
    }, [userId, categoryName]);

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

    const filteredBuyersList = React.useMemo(() => {
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

    const toggleNumber = async (index) => {
        if (!userIsPremium) return; 

        if (leadsViewed >= 25) {
            alert('You have reached the limit of 25 leads viewed per month.');
            return;
        }

        if (shownNumbers.includes(index)) return; 

        const updatedShownNumbers = [...shownNumbers, index];
        setShownNumbers(updatedShownNumbers);
        localStorage.setItem(`viewedLeads_${categoryName}_${userId}`, JSON.stringify(updatedShownNumbers));

        const buyer = filteredBuyersList[index];

        try {
            const response = await fetch(`http://localhost:3005/incrementLeadsViewed/${userId}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ buyerName: buyer.name, mobileNo: buyer.mobileNumber })
            });

            if (response.ok) {
                const data = await response.json();
                setLeadsViewed(data.leadsViewed);
            }
        } catch (error) {
            console.error('Error incrementing leads viewed:', error.message);
        }
    };

    const displayTitle = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

    if (loading)
        return (
            <div className="container" style={{ padding: "100px", textAlign: "center" }}>
                Loading {displayTitle} Leads...
            </div>
        );

    return (
        <>
            <div className="container">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                    <li className="breadcrumb-separator">/</li>
                    <li className="breadcrumb-item active">{displayTitle} Buyers</li>
                </ol>
            </div>
            
            <div className="containersx">
                {/* Unified Sidebar */}
                <div className="browsers">
                    <div className="tk23-hkCont_premserv__box filter-box">
                        <h3 className="sidebar-title">Browse by State</h3>
                        <ul className="flt-list cust-scroll">
                            <li className={!selectedState ? 'active-link' : ''}>
                                <button onClick={() => setSelectedState(null)}>
                                    All India <span className="count-badge">{processedBuyers.length}</span>
                                </button>
                            </li>
                            {stateCounts.map(([state, count]) => (
                                <li key={state} className={selectedState === state ? 'active-link' : ''}>
                                    <button onClick={() => setSelectedState(state)}>
                                        {state} <span className="count-badge">{count}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="tk23-hkCont_premserv__box search-box" style={{ marginTop: '20px' }}>
                        <h3 className="sidebar-title">Search by Country</h3>
                        <div className="search-input-wrapper">
                            <input
                                type="text"
                                placeholder="Search Country..."
                                value={countrySearch}
                                onChange={(e) => handleCountrySearchChange(e.target.value)}
                                onFocus={() => countrySearch.trim() && setShowCountrySuggestions(true)}
                                onBlur={() => setTimeout(() => setShowCountrySuggestions(false), 200)}
                            />
                            {countrySearch && <button onClick={clearCountryFilter} className="clear-btn">×</button>}
                            
                            {showCountrySuggestions && countrySuggestions.length > 0 && (
                                <ul className="suggestions-list">
                                    {countrySuggestions.map((country, idx) => (
                                        <li key={idx} onMouseDown={() => selectCountry(country)}>{country}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        {selectedCountry && (
                            <div className="filter-badge">Filtering: <strong>{selectedCountry}</strong></div>
                        )}
                    </div>

                    <div className="tk23-hkCont_premserv__box membership-box" style={{ marginTop: '20px' }}>
                        <h3 className="sidebar-title">Membership Plans</h3>
                        <div className="plan-links">
                            <Link to='/packages' className="plan-item">Standard Plan</Link>
                            <Link to='/packages' className="plan-item">Advance Plan</Link>
                            <Link to='/packages' className="plan-item">Premium Plan</Link>
                        </div>
                        <Link to='/packages' className="call-now-cta">Call Now</Link>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="buyers">
                    {filteredBuyersList.length === 0 ? (
                        <div className="no-leads-found">
                            <p>No {categoryName} buyers found for the selected area.</p>
                            <button onClick={() => { setSelectedState(null); setSelectedCountry(null); setCountrySearch(""); }}>
                                Clear All Filters
                            </button>
                        </div>
                    ) : (
                        filteredBuyersList.map((buyer, index) => {
                            const displayName = buyer.name || "Verified Buyer";
                            const initials = displayName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
                            const avatarColors = ['#2563eb', '#7c3aed', '#db2777', '#ea580c', '#16a34a', '#0891b2'];
                            const avatarBg = avatarColors[index % avatarColors.length];

                            return (
                                <div key={index} className="directory-card">
                                    {/* Left Section: Buyer Info */}
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
                                                <span className="review-count">(200+ Reviews)</span>
                                            </div>
                                            <div className="status-row">
                                                <span className="status-pill verified">VERIFIED BUYER</span>
                                                <span className="success-transaction">9.5k Successful Deals</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Middle Section: Requirement */}
                                    <div className="card-column requirement-column">
                                        <div className="requirement-label">BUYING REQUIREMENT</div>
                                        <h4 className="requirement-title">Looking For: {buyer.productOrService || displayTitle}</h4>
                                        
                                        <div className="quantity-box">
                                            <div className="box-label">QUANTITY REQUIRED</div>
                                            <div className="box-value">{buyer.quantity} {buyer.unit || 'Units'}</div>
                                        </div>
                                        
                                        <div className="category-meta">
                                            <i className="fa fa-clock"></i> Posted 2 days ago
                                        </div>
                                    </div>

                                    {/* Right Section: Contact & Actions */}
                                    <div className="card-column contact-column">
                                        <div className="contact-info-list">
                                            <div className="contact-item">
                                                <i className="fa fa-phone-alt"></i>
                                                <span>
                                                    {userIsPremium ? (shownNumbers.includes(index) ? buyer.mobileNumber : '********') : '********'}
                                                </span>
                                            </div>
                                            <div className="contact-item">
                                                <i className="fa fa-map-marker-alt"></i>
                                                <span>{buyer.displayState || buyer.city || "India"}, {buyer.country || "India"}</span>
                                            </div>
                                            {buyer.companyName && (
                                                <div className="contact-item">
                                                    <i className="fa fa-building"></i>
                                                    <span>{buyer.companyName}</span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="directory-actions">
                                            {userIsPremium && !shownNumbers.includes(index) && (
                                                <button className="premium-reveal-btn" onClick={() => toggleNumber(index)}>
                                                    Show Contact
                                                </button>
                                            )}
                                            <div className="directory-btn-row">
                                                <Link to="/login" className="dir-btn view">View Detail</Link>
                                                <Link to="/register-Company" className="dir-btn free">Register Free</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
                <Whyglobal />
            </div>
        </>
    );
};

export default CategoryBuyerLeads;
