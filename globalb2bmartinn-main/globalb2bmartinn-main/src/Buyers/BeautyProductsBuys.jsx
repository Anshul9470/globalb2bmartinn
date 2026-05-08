import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faMapMarkerAlt, 
  faCheckCircle, 
  faCalendarAlt, 
  faBoxOpen, 
  faPhone,
  faEye,
  faShieldHalved,
  faFilter,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "./AuthContext";
import Whyglobal from "../Components/Whyglobal";
import FullPageSkeleton from "../Components/FullPageSkeleton";
import "../Products/MarketplacePremium.css"; // Reuse the premium marketplace styles

const BeautyProductsBuysData = [
  {
    _id: "88901a299f2cecbc7cc12345",
    name: "Ayesha Khan",
    email: "ayesha.khan@gmail.com",
    mobileNumber: "9123456789",
    lookingFor: "Bulk Purchase: Organic Skincare Products",
    location: "Mumbai, MH",
    date: "01-11-2024",
    productOrService: "Beauty Products Supplier",
    quantity: 500,
    unit: "units",
  },
  {
    _id: "88901a299f2cecbc7cc12346",
    name: "Rohit Mehta",
    email: "rohit.mehta@gmail.com",
    mobileNumber: "9987654321",
    lookingFor: "Bulk Purchase: Herbal Hair Care Products",
    location: "Delhi, India",
    date: "02-11-2024",
    productOrService: "Beauty Products Supplier",
    quantity: 1000,
    unit: "units",
  },
  {
    _id: "88901a299f2cecbc7cc12347",
    name: "Priya Sharma",
    email: "priya.sharma@gmail.com",
    mobileNumber: "9812345678",
    lookingFor: "Bulk Purchase: Natural Face Masks",
    location: "Bangalore, KA",
    date: "03-11-2024",
    productOrService: "Beauty Products Supplier",
    quantity: 2000,
    unit: "units",
  },
  {
    _id: "88901a299f2cecbc7cc12348",
    name: "Neha Gupta",
    email: "neha.gupta@gmail.com",
    mobileNumber: "9701234567",
    lookingFor: "Bulk Purchase: Lip Balms and Glosses",
    location: "Hyderabad, TS",
    date: "04-11-2024",
    productOrService: "Beauty Products Supplier",
    quantity: 1500,
    unit: "units",
  },
  {
    _id: "88901a299f2cecbc7cc12349",
    name: "Vikram Singh",
    email: "vikram.singh@gmail.com",
    mobileNumber: "9776543210",
    lookingFor: "Bulk Purchase: Perfumes and Fragrances",
    location: "Chennai, TN",
    date: "05-11-2024",
    productOrService: "Beauty Products Supplier",
    quantity: 750,
    unit: "units",
  },
  {
    _id: "88901a299f2cecbc7cc12350",
    name: "Ananya Pillai",
    email: "ananya.pillai@gmail.com",
    mobileNumber: "9865432109",
    lookingFor: "Bulk Purchase: Makeup Kits for Women",
    location: "Kolkata, WB",
    date: "06-11-2024",
    productOrService: "Beauty Products Supplier",
    quantity: 1200,
    unit: "units",
  },
];

const STATES = [
  "Maharashtra", "Delhi", "Karnataka", "Telangana", "Tamil Nadu", "West Bengal", "Gujarat", "Rajasthan", "Punjab"
];

const BeautyProductsBuy = () => {
  const { userId } = useAuth();
  const [userIsPremium, setUserIsPremium] = useState(false);
  const [shownNumbers, setShownNumbers] = useState([]);
  const [leadsViewed, setLeadsViewed] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedState, setSelectedState] = useState("All");
  const [filteredLeads, setFilteredLeads] = useState(BeautyProductsBuysData);

  useEffect(() => {
    if (!userId) {
        setLoading(false);
        return;
    }

    const fetchData = async () => {
      try {
        const storedViewedLeads = JSON.parse(localStorage.getItem(`beautyViewedLeads_${userId}`)) || [];
        setShownNumbers(storedViewedLeads);

        const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/getUserWithPremiumStatus/${userId}`);
        const data = await res.json();
        setUserIsPremium(data.isPremium);
        setLeadsViewed(data.leadsViewed);
      } catch (error) {
        console.error("Error fetching user info:", error);
      } finally {
        setTimeout(() => setLoading(false), 1500);
      }
    };
    fetchData();
  }, [userId]);

  const handleStateFilter = (state) => {
    setSelectedState(state);
    if (state === "All") {
      setFilteredLeads(BeautyProductsBuysData);
    } else {
      setFilteredLeads(BeautyProductsBuysData.filter(lead => lead.location.toLowerCase().includes(state.toLowerCase())));
    }
  };

  const toggleNumber = async (index, leadId) => {
    if (!userIsPremium) {
        alert("Premium membership required to view buyer contact details.");
        return;
    }

    if (leadsViewed >= 25) {
      alert("Monthly limit of 25 leads reached.");
      return;
    }

    if (shownNumbers.includes(leadId)) return;

    const updatedShownNumbers = [...shownNumbers, leadId];
    setShownNumbers(updatedShownNumbers);
    localStorage.setItem(`beautyViewedLeads_${userId}`, JSON.stringify(updatedShownNumbers));

    const lead = BeautyProductsBuysData.find(l => l._id === leadId);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/incrementLeadsViewed/${userId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ buyerName: lead.name, mobileNo: lead.mobileNumber }),
      });

      if (response.ok) {
        const data = await response.json();
        setLeadsViewed(data.leadsViewed);
      }
    } catch (error) {
      console.error("Error incrementing leads:", error);
    }
  };

  if (loading) return <FullPageSkeleton />;

  return (
    <div className="marketplace-container">
      <div className="marketplace-layout">
        <aside className="filters-sidebar">
          <div className="sidebar-header">
            <div className="header-title">
              <FontAwesomeIcon icon={faFilter} />
              <h2>Filters</h2>
            </div>
            <button className="reset-link" onClick={() => handleStateFilter("All")}>Reset</button>
          </div>

          <div className="filter-group-container">
            <div className="filter-group">
              <label className="filter-label">Browse by Region</label>
              <div className="checkbox-group">
                <label className="checkbox-item">
                  <input 
                    type="radio" 
                    name="state"
                    checked={selectedState === "All"}
                    onChange={() => handleStateFilter("All")}
                  /> <span>All India</span>
                </label>
                {STATES.map(state => (
                  <label key={state} className="checkbox-item">
                    <input 
                      type="radio" 
                      name="state"
                      checked={selectedState === state}
                      onChange={() => handleStateFilter(state)}
                    /> <span>{state}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pro-ad-card" style={{ marginTop: '2rem', background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)' }}>
              <div className="pro-badge" style={{ color: '#ea580c' }}>GOLD PLAN</div>
              <h3 style={{ color: '#fff' }}>Get Verified Leads</h3>
              <p style={{ color: 'rgba(255,255,255,0.9)' }}>Unlock direct buyer contact numbers and emails immediately.</p>
              <Link to="/packages" className="upgrade-link" style={{ color: '#fff', borderBottom: '1px solid #fff' }}>View Plans &gt;</Link>
            </div>
          </div>
        </aside>

        <main className="content-area">
          <div className="page-header" style={{ marginBottom: '2rem' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#1e293b' }}>Beauty Products Buying Leads</h1>
            <p style={{ color: '#64748b' }}>Connect with active buyers looking for perfumes, skincare, and cosmetics.</p>
          </div>

          <div className="product-grid">
            {filteredLeads.map((lead) => (
              <div key={lead._id} className="product-card buyer-lead-card">
                <div className="card-body">
                  <div className="lead-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div className="lead-tag" style={{ background: '#fef3c7', color: '#92400e', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700 }}>
                      <FontAwesomeIcon icon={faShieldHalved} style={{ marginRight: '0.4rem' }} /> VERIFIED BUYER
                    </div>
                    <span className="lead-date" style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                      <FontAwesomeIcon icon={faCalendarAlt} /> {lead.date}
                    </span>
                  </div>

                  <h3 className="product-title" style={{ fontSize: '1.25rem', marginBottom: '0.8rem', color: '#1e293b' }}>{lead.lookingFor}</h3>
                  
                  <div className="lead-specs-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem', background: '#f8fafc', padding: '1rem', borderRadius: '12px' }}>
                    <div className="spec-item">
                      <span style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>QUANTITY</span>
                      <span style={{ fontWeight: 800, color: '#1e293b' }}>{lead.quantity} {lead.unit}</span>
                    </div>
                    <div className="spec-item">
                      <span style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>LOCATION</span>
                      <span style={{ fontWeight: 700, color: '#1e293b' }}>{lead.location}</span>
                    </div>
                  </div>

                  <div className="supplier-section" style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1rem', marginBottom: '1.5rem' }}>
                    <div className="supplier-brand-row">
                      <div className="supplier-logo-placeholder" style={{ background: '#3b82f6', color: '#fff' }}>
                        {lead.name.charAt(0)}
                      </div>
                      <div className="supplier-info-stack">
                        <h4 className="supplier-name" style={{ fontSize: '0.95rem' }}>{lead.name}</h4>
                        <div className="contact-status" style={{ fontSize: '0.8rem', color: '#64748b' }}>
                          <FontAwesomeIcon icon={faPhone} style={{ marginRight: '0.5rem', color: '#10b981' }} />
                          {userIsPremium && shownNumbers.includes(lead._id) ? lead.mobileNumber : "XXXXXXXXXX"}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-actions" style={{ marginTop: 'auto' }}>
                    {userIsPremium ? (
                      <button 
                        className="btn-quick-quote" 
                        style={{ width: '100%', justifyContent: 'center' }}
                        onClick={() => toggleNumber(lead._id, lead._id)}
                      >
                        <FontAwesomeIcon icon={faEye} style={{ marginRight: '0.6rem' }} /> 
                        {shownNumbers.includes(lead._id) ? "Number Visible" : "Show Contact Details"}
                      </button>
                    ) : (
                      <Link to="/packages" className="btn-quick-quote" style={{ width: '100%', justifyContent: 'center', background: '#1e293b' }}>
                        Upgrade to View Number
                      </Link>
                    )}
                    <Link to="/register-buyer" className="btn-contact" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
                      Register to Connect
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Whyglobal />
    </div>
  );
};

export default BeautyProductsBuy;
