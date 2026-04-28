import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './OnionBuy.css'; // Shared styles for the 2-column layout
import '../Products/MarketplacePremium.css'; // Premium clean UI styles
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
                
                // Display name for the category (e.g., "rice-machine" -> "Rice Machine")
                const searchKeyword = categoryName.replace(/-/g, ' ');
                const displayCategory = searchKeyword.charAt(0).toUpperCase() + searchKeyword.slice(1);
                
                const filtered = (data.buyers || []).filter(buyer => 
                    (buyer.productOrService || '').toLowerCase().includes(searchKeyword.toLowerCase())
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

    const displayTitle = categoryName.replace(/-/g, ' ').charAt(0).toUpperCase() + categoryName.replace(/-/g, ' ').slice(1);

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
            
            <div className="marketplace-layout">
                {/* Left Sidebar */}
                <aside className="filters-sidebar">
                    <div className="sidebar-header">
                        <div className="header-title">
                            <i className="fa fa-filter"></i>
                            <h2>Filters</h2>
                        </div>
                        <button className="reset-link" onClick={() => { setSelectedState(null); setSelectedCountry(null); setCountrySearch(""); }}>Reset</button>
                    </div>

                    <div className="filter-group-container">
                        {/* State Filter */}
                        <div className="filter-group">
                            <label className="filter-label">Browse by State</label>
                            <div className="checkbox-group" style={{ maxHeight: '250px', overflowY: 'auto' }}>
                                <label className="checkbox-item">
                                    <input 
                                        type="checkbox" 
                                        checked={!selectedState}
                                        onChange={() => setSelectedState(null)}
                                    /> <span>All India ({processedBuyers.length})</span>
                                </label>
                                {stateCounts.map(([state, count]) => (
                                    <label key={state} className="checkbox-item">
                                        <input 
                                            type="checkbox" 
                                            checked={selectedState === state}
                                            onChange={() => setSelectedState(state)}
                                        /> <span>{state} ({count})</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Country Filter */}
                        <div className="filter-group">
                            <label className="filter-label">Search by Country</label>
                            <div className="search-input-wrapper" style={{ position: "relative" }}>
                                <i className="fa fa-globe-americas search-icon"></i>
                                <input 
                                    type="text" 
                                    placeholder="Search Country..." 
                                    className="filter-search-input" 
                                    value={countrySearch}
                                    onChange={(e) => handleCountrySearchChange(e.target.value)}
                                    onFocus={() => countrySearch.trim() && setShowCountrySuggestions(true)}
                                    onBlur={() => setTimeout(() => setShowCountrySuggestions(false), 200)}
                                />
                                {showCountrySuggestions && countrySuggestions.length > 0 && (
                                    <ul className="location-suggestions-dropdown">
                                        {countrySuggestions.map((c) => (
                                            <li
                                                key={c}
                                                className="location-suggestion-item"
                                                onMouseDown={() => selectCountry(c)}
                                            >
                                                <i className="fa fa-globe-americas sugg-icon"></i>
                                                {c}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
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
                    {/* Category Title Header */}
                    <div className="content-header">
                        <h1>{displayTitle} Buyers</h1>
                        <p>Found {filteredBuyersList.length} verified buying requirements in this category.</p>
                    </div>

                    {filteredBuyersList.length === 0 ? (
                        <div className="no-results-premium">
                            <i className="fa fa-search fa-3x"></i>
                            <h3>No {categoryName} buyers found</h3>
                            <p>Try clearing your filters or searching for something else.</p>
                            <button onClick={() => { setSelectedState(null); setSelectedCountry(null); setCountrySearch(""); }} className="btn-primary" style={{ width: 'auto', padding: '12px 30px' }}>Reset Filters</button>
                        </div>
                    ) : (
                        <div className="product-grid">
                            {filteredBuyersList.map((buyer, index) => {
                                const displayName = buyer.name || "Verified Buyer";
                                return (
                                    <div className="product-card" key={index}>
                                        <div className="card-image-wrapper">
                                            <img 
                                                src={buyer.images?.[0] || "/assets/rice1.jpeg"} 
                                                alt={displayName} 
                                                className="product-img" 
                                                onError={(e) => e.target.src="/assets/agro1.avif"}
                                            />
                                            <div className="badge-overlay">
                                                <span className="verified-badge">
                                                    <i className="fa fa-check-circle"></i> VERIFIED BUYER
                                                </span>
                                            </div>
                                        </div>

                                        <div className="card-body">
                                            <p className="product-desc">Looking For: {buyer.productOrService || displayTitle}</p>
                                            <div className="supplier-info">
                                                <h4 className="supplier-name">{displayName}</h4>
                                                <div className="supplier-meta">
                                                    <div className="rating-stars">
                                                        <i className="fa fa-star"></i>
                                                        <span>4.5</span>
                                                    </div>
                                                    <span className="separator">•</span>
                                                    <span className="years-exp">{buyer.displayState || buyer.city || "India"}</span>
                                                </div>
                                            </div>
                                            <div className="card-actions">
                                                <Link to="/register-buyer" className="btn-primary">View Contact</Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                    <Whyglobal />
                </main>
            </div>
        </>
    );
};

export default CategoryBuyerLeads;
