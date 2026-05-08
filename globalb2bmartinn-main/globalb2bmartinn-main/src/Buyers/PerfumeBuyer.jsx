import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faMapMarkerAlt, 
  faCheckCircle, 
  faCalendarAlt, 
  faPhone,
  faEye,
  faShieldHalved,
  faFilter,
  faSearch,
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "./AuthContext";
import Whyglobal from "../Components/Whyglobal";
import FullPageSkeleton from "../Components/FullPageSkeleton";
import "../Products/MarketplacePremium.css";

const PerfumeBuysData = [
  {
    _id: "77123c299f2cecbc7aa11411",
    name: "Sneha Sharma",
    email: "snehasharma@gmail.com",
    mobileNumber: "+919876543111",
    productOrService: "Looking to import luxury perfumes for a high-end retail store.",
    location: "Mumbai, MH",
    date: "18-10-2024",
    quantity: 200,
    unit: "bottles",
  },
  {
    _id: "77123c299f2cecbc7aa11412",
    name: "Aarav Jain",
    email: "aaravjain@gmail.com",
    mobileNumber: "+919876543222",
    productOrService: "Urgently need bulk supply of perfumes for an upcoming promotional event.",
    location: "Delhi, DL",
    date: "19-10-2024",
    quantity: 1000,
    unit: "bottles",
  },
  {
    _id: "77123c299f2cecbc7aa11413",
    name: "Rohit Mehta",
    email: "rohitmehta@gmail.com",
    mobileNumber: "+919876543333",
    productOrService: "Seeking to buy perfumes for distribution in the local market.",
    location: "Bangalore, KA",
    date: "20-10-2024",
    quantity: 500,
    unit: "bottles",
  },
  {
    _id: "77123c299f2cecbc7aa11414",
    name: "Priya Kapoor",
    email: "priyak@gmail.com",
    mobileNumber: "+919876543444",
    productOrService: "Interested in purchasing artisanal perfumes for a boutique store.",
    location: "Pune, MH",
    date: "21-10-2024",
    quantity: 300,
    unit: "bottles",
  },
];

const PerfumeBuyer = () => {
  const { userId } = useAuth();
  const [userIsPremium, setUserIsPremium] = useState(false);
  const [shownNumbers, setShownNumbers] = useState([]);
  const [leadsViewed, setLeadsViewed] = useState(0);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    if (!userId) {
        setLoading(false);
        return;
    }

    const fetchData = async () => {
      try {
        const storedViewedLeads = JSON.parse(localStorage.getItem(`perfumeViewedLeads_${userId}`)) || [];
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

  const toggleNumber = async (leadId) => {
    if (!userIsPremium) {
        alert("Premium membership required to view contact details.");
        return;
    }

    if (leadsViewed >= 25) {
      alert("Monthly limit of 25 leads reached.");
      return;
    }

    if (shownNumbers.includes(leadId)) return;

    const updatedShownNumbers = [...shownNumbers, leadId];
    setShownNumbers(updatedShownNumbers);
    localStorage.setItem(`perfumeViewedLeads_${userId}`, JSON.stringify(updatedShownNumbers));

    const lead = PerfumeBuysData.find(l => l._id === leadId);

    try {
      await fetch(`${process.env.REACT_APP_API_ENDPOINT}/incrementLeadsViewed/${userId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ buyerName: lead.name, mobileNo: lead.mobileNumber }),
      });
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
              <h2>Category</h2>
            </div>
          </div>

          <div className="filter-group-container">
            <div className="filter-group">
              <div className="checkbox-group">
                {["All Perfumes", "Luxury Perfumes", "Artisanal Perfumes", "Designer Fragrances"].map(cat => (
                  <label key={cat} className="checkbox-item">
                    <input 
                        type="radio" 
                        name="perfume-cat" 
                        checked={activeTab === cat}
                        onChange={() => setActiveTab(cat)}
                    /> <span>{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pro-ad-card" style={{ marginTop: '2rem', background: 'linear-gradient(135deg, #6366f1 0%, #4338ca 100%)' }}>
                <div className="pro-badge" style={{ color: '#4338ca' }}>PLATINUM</div>
                <h3 style={{ color: '#fff' }}>Global Perfume Network</h3>
                <p style={{ color: 'rgba(255,255,255,0.9)' }}>Access premium buyers from Dubai, France, and UK markets.</p>
                <Link to="/packages" className="upgrade-link" style={{ color: '#fff' }}>Upgrade Now &gt;</Link>
            </div>
          </div>
        </aside>

        <main className="content-area">
          <div className="page-header" style={{ marginBottom: '2rem' }}>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#0f172a', letterSpacing: '-1px' }}>Premium Perfume Leads</h1>
            <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Direct connections to verified bulk perfume importers and distributors.</p>
          </div>

          <div className="product-grid">
            {PerfumeBuysData.map((lead) => (
              <div key={lead._id} className="product-card">
                <div className="card-body">
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <span className="verified-badge" style={{ background: '#dcfce7', color: '#166534', padding: '0.3rem 0.7rem', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 700 }}>
                        <FontAwesomeIcon icon={faCheckCircle} /> VERIFIED BUYER
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                        <FontAwesomeIcon icon={faCalendarAlt} /> {lead.date}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1e293b', lineHeight: '1.4', marginBottom: '1rem' }}>{lead.productOrService}</h3>
                  
                  <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '1rem', display: 'flex', gap: '2rem', marginBottom: '1.5rem' }}>
                    <div>
                        <span style={{ fontSize: '0.65rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', display: 'block' }}>REQD QUANTITY</span>
                        <span style={{ fontWeight: 800, color: '#0f172a' }}>{lead.quantity} {lead.unit}</span>
                    </div>
                    <div>
                        <span style={{ fontSize: '0.65rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', display: 'block' }}>REGION</span>
                        <span style={{ fontWeight: 800, color: '#0f172a' }}>{lead.location}</span>
                    </div>
                  </div>

                  <div className="supplier-brand-row" style={{ marginBottom: '1.5rem' }}>
                    <div className="supplier-logo-placeholder" style={{ background: '#6366f1' }}>{lead.name.charAt(0)}</div>
                    <div className="supplier-info-stack">
                        <h4 className="supplier-name">{lead.name}</h4>
                        <div className="contact-status" style={{ fontSize: '0.8rem', color: '#64748b' }}>
                            <FontAwesomeIcon icon={faPhone} style={{ color: '#10b981', marginRight: '0.5rem' }} />
                            {userIsPremium && shownNumbers.includes(lead._id) ? lead.mobileNumber : "XXXXXXXXXX"}
                        </div>
                    </div>
                  </div>

                  <div className="card-actions">
                    <button 
                        className="btn-quick-quote" 
                        style={{ width: '100%', justifyContent: 'center' }}
                        onClick={() => toggleNumber(lead._id)}
                    >
                        <FontAwesomeIcon icon={faEye} style={{ marginRight: '0.6rem' }} /> 
                        {shownNumbers.includes(lead._id) ? "Contact Visible" : "View Contact Details"}
                    </button>
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

export default PerfumeBuyer;
