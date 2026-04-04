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
import { faPhone, faEnvelope, faLocationDot, faHeadset, faInfoCircle, faGlobe, faUserTag, faShoppingCart, faBriefcase } from '@fortawesome/free-solid-svg-icons';

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
              <Link className="linkNormal" to="/contact-us">Help Center</Link>
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
        <div>
          {/* <div className={`fixed-form-bar ${barOpen ? 'open' : ''}`} onClick={toggleForm}>
                        <span className="call-us-text">Book A Call</span>
                        <i className={`fas ${formOpen ? 'fa-angle-right' : 'fa-angle-left'}`}></i>
                    </div> */}
          <div
            className={`fixed-form-bar ${formOpen ? "active" : ""}`}
            onClick={toggleForm}
          >
            <i className="fas fa-phone-alt"></i>
            <span className="call-us-text">Book A Call</span>
            <i className={`fas ${formOpen ? "fa-times" : "fa-chevron-left"}`}></i>
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
      </div>
    </>
  );
};

export default Footer;
