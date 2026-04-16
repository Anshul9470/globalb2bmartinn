// import React from 'react';
// import './footer.css';
// import { Link, useNavigate } from 'react-router-dom';

// const scrollUp = () => {
//     window.scrollBy({
//         top: -500,
//         behavior: 'smooth'
//     });
// };

// const tradeLeads = () => {
//                     </div>
//                 </div>
//                 {/* Other footer links */}
//                 <div className='footer-links'>
//                     <span className="linkBold"><h2>For Buyers</h2></span>
//                     <div className='footer-links'>
//                         <Link className="linkNormal" to="/register-buyer">Post Your Requirement</Link>
//                         <Link className="linkNormal" onClick={handleClick} to="/">Browse Suppliers</Link>
//                         <Link className="linkNormal" to="/">Subscribe Sell Trade Alerts</Link>
//                     </div>
//                 </div>
//             </div>
//             <div className="lastBar d-flex justify-content-start justify-content-md-center">
//                 <p className="trademark">
//                     © Copyright 2025 WebWave Business Pvt Ltd
//                 </p>
//             </div>
//         </div>
//     );
// }

// export default Footer;
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./footer.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faHeadset, faInfoCircle, faGlobe, faUserTag, faShoppingCart, faBriefcase, faHome, faXmark } from '@fortawesome/free-solid-svg-icons';

const scrollUp = () => {
  window.scrollBy({
    top: -2300,
    behavior: "smooth",
  });
};

const tradeLeads = () => {
  window.scrollBy({
    top: -1500,
    behavior: "smooth",
  });
};

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    setTimeout(() => {
      window.scrollTo({
        top: -2300,
        behavior: "smooth",
      });
    }, 100);
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    productSupplier: "",
    userType: [], // Initialize as an empty array for multiple selections
  });
  const [formOpen, setFormOpen] = useState(false);
  const [barOpen, setBarOpen] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");

  // Draggable FAB State (Book a Call)
  const [fabY, setFabY] = useState(window.innerHeight - 150);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);

  // Draggable Chat FAB State (Tawk.to)
  const [chatFabY, setChatFabY] = useState(window.innerHeight - 240);
  const [isDraggingChat, setIsDraggingChat] = useState(false);
  const [dragStartChatY, setDragStartChatY] = useState(0);

  const startDragging = (e) => {
    setIsDragging(true);
    const clientY = e.type === "mousedown" ? e.clientY : e.touches[0].clientY;
    setDragStartY(clientY - fabY);
  };

  const startDraggingChat = (e) => {
    setIsDraggingChat(true);
    const clientY = e.type === "mousedown" ? e.clientY : e.touches[0].clientY;
    setDragStartChatY(clientY - chatFabY);
  };

  const onDrag = (e) => {
    if (isDragging) {
      const clientY = e.type === "mousemove" ? e.clientY : e.touches[0].clientY;
      let newY = clientY - dragStartY;
      const minY = 80;
      const maxY = window.innerHeight - 150;
      if (newY < minY) newY = minY;
      if (newY > maxY) newY = maxY;
      setFabY(newY);
    }
    
    if (isDraggingChat) {
      const clientY = e.type === "mousemove" ? e.clientY : e.touches[0].clientY;
      let newY = clientY - dragStartChatY;
      const minY = 80;
      const maxY = window.innerHeight - 150;
      if (newY < minY) newY = minY;
      if (newY > maxY) newY = maxY;
      setChatFabY(newY);
    }
  };

  const stopDragging = () => {
    setIsDragging(false);
    setIsDraggingChat(false);
  };

  useEffect(() => {
    // Show/Hide Tawk.to widget based on screen size
    const handleResize = () => {
      if (window.Tawk_API && window.Tawk_API.hideWidget && window.Tawk_API.showWidget) {
        if (window.innerWidth <= 768) {
          window.Tawk_API.hideWidget();
        } else {
          window.Tawk_API.showWidget();
        }
      }
    };

    window.addEventListener("resize", handleResize);

    if (window.Tawk_API) {
      window.Tawk_API.onLoad = function() {
        handleResize();
      };
      // Initial check
      handleResize();
    }

    if (isDragging || isDraggingChat) {
      window.addEventListener("mousemove", onDrag);
      window.addEventListener("mouseup", stopDragging);
      window.addEventListener("touchmove", onDrag, { passive: false });
      window.addEventListener("touchend", stopDragging);
    } else {
      window.removeEventListener("mousemove", onDrag);
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchmove", onDrag);
      window.removeEventListener("touchend", stopDragging);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onDrag);
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchmove", onDrag);
      window.removeEventListener("touchend", stopDragging);
    };
  }, [isDragging, isDraggingChat]);

  const toggleForm = () => {
    setFormOpen(!formOpen);
  };
  const messageContainerStyle = {
    position: "fixed",
    top: "15%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    backgroundColor: "rgba(0, 128, 0, 0.8)",
    color: "white",
    borderRadius: "8px",
    textAlign: "center",
    zIndex: 1000,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_ENDPOINT}/submit-call`,
        formData
      );
      console.log(response.data);
      setSuccessMessage("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        mobileNumber: "",
        productSupplier: "",
        userType: [],
      });
      // Clear the success message after a few seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000); // Adjust the time as needed
    } catch (error) {
      console.error("Error submitting call:", error);
      // Handle error (e.g., display an error message)
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    setFormData((prevState) => {
      if (prevState.userType.includes(value)) {
        return {
          ...prevState,
          userType: prevState.userType.filter((type) => type !== value),
        };
      } else {
        return {
          ...prevState,
          userType: [...prevState.userType, value],
        };
      }
    });
  };

  useEffect(() => {
    // Tawk.to initialization
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Initialize Tawk.to and control visibility
    if (window.Tawk_API) {
      window.Tawk_API.onLoad = function() {
        if (window.innerWidth <= 768) {
          try {
            window.Tawk_API.hideWidget();
          } catch (e) {
            console.log("Tawk.to hideWidget error:", e);
          }
        }
      };
      
      // Also check on window resize/init
      if (window.innerWidth <= 768 && window.Tawk_API.hideWidget) {
        try {
          window.Tawk_API.hideWidget();
        } catch (e) {}
      }
    }

    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/6663436a9a809f19fb3b2618/1hvprun7i";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");

    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    } else {
      document.head.appendChild(s1);
    }

    return () => {
      if (s1.parentNode) {
        s1.parentNode.removeChild(s1);
      }
    };
  }, []);

  const toggleChat = () => {
    if (window.Tawk_API && window.Tawk_API.toggle) {
      window.Tawk_API.toggle();
    }
  };


  return (
    <>
      <div className="footBg footerContan">
        {/* TOP INFO SECTION - Centered per image */}
        <div className="footer-top-info">

          <p className="footer-description-main">
            GlobalB2BMart is the premier and fastest-growing online B2B marketplace, 
            connecting small and medium enterprises worldwide for seamless international trade. 
            It supports diverse business needs with advanced tools and services.
          </p>
        </div>

        {/* 5-COLUMN GRID - As per image */}
        <div className="footLinkWrap row row-cols-1 row-cols-md-3 row-cols-lg-5">
          {/* SUPPORT */}
          <div className="footer-links">
            <h2 className="footer-column-title title-blue">SUPPORT</h2>
            <div className="footer-link-group">
              <Link className="linkNormal" to="/aboutUs">About Us</Link>
              <Link className="linkNormal" to="/contact-us">Contact Us</Link>
              <Link className="linkNormal" to="/help-center">Help Center</Link>
              <Link className="linkNormal" to="/privacy-policy">Privacy & Policies</Link>
            </div>
          </div>

          {/* SELLERS */}
          <div className="footer-links">
            <h2 className="footer-column-title title-orange">SELLERS</h2>
            <div className="footer-link-group">
              <Link className="linkNormal" to="/register-Company">Display New Products</Link>
              <Link className="linkNormal" to="/register-buyer">Verified buyers</Link>
              <Link className="linkNormal" to="/register-Company">Buyers Alerts</Link>
              <Link className="linkNormal" onClick={scrollUp} to="/">Success Stories</Link>
            </div>
          </div>

          {/* BUYERS */}
          <div className="footer-links">
            <h2 className="footer-column-title title-orange">BUYERS</h2>
            <div className="footer-link-group">
              <Link className="linkNormal" to="/register-buyer">Post Your Requirement</Link>
              <Link className="linkNormal" onClick={handleClick} to="/">Browse Suppliers</Link>
              <Link className="linkNormal" to="/disclaimer">Disclaimer</Link>
              <Link className="linkNormal" to="/complaint">Complaint</Link>
            </div>
          </div>

          {/* SERVICES */}
          <div className="footer-links">
            <h2 className="footer-column-title title-blue">SERVICES</h2>
            <div className="footer-link-group">
              <Link className="linkNormal" to="/login">Login</Link>
              <Link className="linkNormal" to="/register-Company">Register</Link>
              <Link className="linkNormal" to="/packages">Membership Plan</Link>
              <Link className="linkNormal" to="/terms-condition">Terms &amp; Conditions</Link>
            </div>
          </div>

          {/* CONNECT US */}
          <div className="footer-links">
            <h2 className="footer-column-title title-orange">CONNECT US</h2>
            <div className="footer-link-group contact-column">
              <div className="footer-contact-item">
                <FontAwesomeIcon icon={faPhone} className="contact-icon-blue" />
                <a href="tel:011-44760532" className="linkNormal">011-44760532</a>
              </div>
              <div className="footer-contact-item">
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon-blue" />
                <a href="mailto:sales@globalb2bmart.com" className="linkNormal">sales@globalb2bmart.com</a>
              </div>
              <div className="footer-contact-item company-name-row">
                <span className="linkNormal">WebWave Business Pvt</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-spacer"></div>

        {/* RESTORED BOTTOM NAVIGATION SECTION */}
        <div className="footer-bottom-nav">
          {/* Main Links Row */}
          <div className="footer-links-row">
            <Link to="/">Home</Link>
            <Link to="/register-Company">Sell Offers</Link>
            <Link to="/refund">Refund & Return policy</Link>
            <Link to="/register-buyer">Buyers</Link>
            <Link to="/register-Company">Companies</Link>
            <Link to="/packages">Premium Services</Link>
            <Link to="/packages">Premium Products</Link>
            <Link to="/buyer-seller-page">Landing Page</Link>
            <Link to="/what-is-B2B-business">Blogs</Link>
          </div>

          {/* Categories Pill Bar */}
          <div className="footer-categories-pill">
            <span className="pill-title">CATEGORIES:</span>
            <div className="pill-links-container">
              <Link to="/groceries-seller">Foods & Beverage</Link>
              <Link to="/best-furniture-suppliers-in-india">Furnitures</Link>
              <Link to="/pvcrresins">Chemicals</Link>
              <Link to="/jewellery-seller">Jewellery</Link>
              <Link to="/steel/utensils">Home Supplies</Link>
              <Link to="/giftsstore">Gifts & Crafts</Link>
              <Link to="/toolsequipment">Tools & Equipment</Link>
            </div>
          </div>

          {/* Sub Links Row */}
          <div className="footer-links-row sub-links">
            <Link to="/aboutUs">About Us</Link>
            <Link to="/contact-us">Contact Us</Link>
            <Link to="/packages">Membership Plan</Link>
          </div>
        </div>

        <div className="lastBar d-flex justify-content-center">
          <p className="trademark">
            <Link to={"https://webwavebusiness.com/"}>
              <p className="text-col">
                © Copyright 2025 WebWave Business Pvt Ltd
              </p>
            </Link>
          </p>
        </div>
        {/* MOBILE BOTTOM NAVIGATION BAR */}
        <div className="mobile-bottom-nav">
          <Link to="/" className="nav-item">
            <FontAwesomeIcon icon={faHome || "home"} />
            <span>Home</span>
          </Link>
          <Link to="/register-buyer" className="nav-item">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Post Req</span>
          </Link>
          <Link to="/" onClick={handleClick} className="nav-item">
            <FontAwesomeIcon icon={faBriefcase} />
            <span>Suppliers</span>
          </Link>
          <Link to="/login" className="nav-item">
            <FontAwesomeIcon icon={faUserTag} />
            <span>Join</span>
          </Link>
        </div>

        {/* DRAGGABLE FLOATING CALL BUTTON (FAB) */}
        <div 
          className={`draggable-fab ${formOpen ? "active" : ""} ${isDragging ? "dragging" : ""}`}
          style={{ top: `${fabY}px` }}
          onMouseDown={startDragging}
          onTouchStart={startDragging}
          onClick={(e) => { if(!isDragging) toggleForm(); }}
        >
          <div className="fab-content">
            <div className="fab-icon-wrap">
              <FontAwesomeIcon icon={formOpen ? faXmark : faHeadset} />
            </div>
            <span className="fab-label">{formOpen ? "Close" : "Book a Call"}</span>
          </div>
          {/* Draggable Handle Indicator */}
          <div className="drag-handle">
            <span></span>
            <span></span>
          </div>
        </div>

        {/* DRAGGABLE CHAT FAB (Tawk.to) */}
        <div 
          className={`draggable-chat-fab ${isDraggingChat ? "dragging" : ""}`}
          style={{ top: `${chatFabY}px` }}
          onMouseDown={startDraggingChat}
          onTouchStart={startDraggingChat}
        >
          <div className="chat-fab-content" onClick={(e) => { if(!isDraggingChat) toggleChat(); }}>
            <div className="chat-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.4876 3.36032 14.8911 4 16.1272L3 21L7.87279 20C9.10888 20.6397 10.5124 21 12 21Z" fill="white"/>
                <path d="M8 11H16M8 14H13" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          <div className="chat-drag-handle">
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={`fixed-form-container ${formOpen ? "open" : ""}`}>
          <div className="form-body">
            {successMessage && (
              <div className="success-banner">{successMessage}</div>
            )}
            <form onSubmit={handleSubmit}>
              <label
                style={{
                  fontSize: "18px",
                  textAlign: "center",
                  color: "green",
                  marginBottom: "5px",
                }}
                className="type-form"
              >
                Don't Miss Out on Our Business Resources
              </label>
              <label
                style={{
                  margin: "5px 0px 15px 0px",
                  fontSize: "18px",
                  textAlign: "center",
                  color: "orange",
                }}
                className="type-form"
              >
                Connect with Verified Buyers
              </label>

              <label className="type-form">
                Full Name*
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className="type-form">
                Email Address*
                <input
                  type="email"
                  name="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className="type-form">
                Contact Number*
                <input
                  type="text"
                  name="mobileNumber"
                  placeholder="+1 (555) 000-0000"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className="type-form">
                Product / Supplier*
                <input
                  type="text"
                  name="productSupplier"
                  placeholder="What are you looking for?"
                  value={formData.productSupplier}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className="type-form">
                I am a*
                <div style={{ marginTop: "5px" }}>
                  <label
                    className="type-form"
                    style={{ display: "inline-block", marginRight: "20px" }}
                  >
                    <input
                      type="checkbox"
                      value="Seller"
                      checked={formData.userType.includes("Seller")}
                      onChange={handleCheckboxChange}
                      style={{ width: "auto", marginRight: "8px" }}
                    />
                    Seller
                  </label>
                  <label
                    className="type-form"
                    style={{ display: "inline-block" }}
                  >
                    <input
                      type="checkbox"
                      value="Buyer"
                      checked={formData.userType.includes("Buyer")}
                      onChange={handleCheckboxChange}
                      style={{ width: "auto", marginRight: "8px" }}
                    />
                    Buyer
                  </label>
                </div>
              </label>

              <button type="submit" className="submit-btn text-white">
                Submit
              </button>
            </form>
            <div className="form-footer" style={{ marginTop: "15px" }}>
              <p style={{ fontSize: "12px", color: "#666" }}>
                By submitting, you agree to our Terms & Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default Footer;
