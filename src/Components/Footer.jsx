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
  const [barOpen, setBarOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const toggleForm = () => {
    if (!barOpen) {
      setBarOpen(true);
      setTimeout(() => {
        setFormOpen(true);
      }, 200); // Wait for the bar to slide out first
    } else {
      setFormOpen(false);
      setTimeout(() => {
        setBarOpen(false);
      }, 200); // Wait for the form to slide back first
    }
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
    // Create script element
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();
    var s1 = document.createElement("script");
    var s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/6663436a9a809f19fb3b2618/1hvprun7i";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);

    return () => {
      // Optional cleanup function
      s0.parentNode.removeChild(s1);
    };
  }, []);

  return (
    <>
      <div className="footBg footerContan">
        <div className="footLinkWrap row row-cols-1 row-cols-sm-3 row-cols-md-3 row-cols-lg-6">
          <div className="footer-links company-info">
            <img 
              src="/assets/Globalb2bmart.png" 
              alt="GlobalB2BMart Logo" 
              className="footer-logo"
            />
            <p className="footer-desc">
              GlobalB2BMart is the premier and fastest-growing online B2B
              marketplace, connecting small and medium enterprises worldwide for
              seamless international trade. It supports diverse business needs
              with advanced tools and services.
            </p>
          </div>
          {/* Other footer links */}
          <div className="footer-links">
            <span className="linkBold">
              <h2><FontAwesomeIcon icon={faHeadset} className="head-icon" /> Support</h2>
            </span>
            <div className="footer-links">
              <Link className="linkNormal" to="/aboutUs">
                About Us
              </Link>

              <Link className="linkNormal" to="/contact-us">
                Contact Us
              </Link>
              <Link className="linkNormal" to="/contact-us">
                Help Center
              </Link>
              <Link className="linkNormal" to="/privacy-policy">
                Privacy & Policies
              </Link>
            </div>
          </div>
          {/* Other footer links */}

          {/* Other footer links */}
          <div className="footer-links">
            <span className="linkBold">
              <h2><FontAwesomeIcon icon={faUserTag} className="head-icon" /> Sellers</h2>
            </span>
            <div className="footer-links">
              <Link className="linkNormal" to="/register-Company">
                Display New Products
              </Link>
              <Link className="linkNormal" to="/register-buyer">
                Verified buyers
              </Link>
              <Link className="linkNormal" to="/register-Company">
                Buyers Alerts
              </Link>
              <Link className="linkNormal" onClick={scrollUp} to="/">
                Success Stories
              </Link>
            </div>
          </div>
          {/* Other footer links */}
          <div className="footer-links">
            <span className="linkBold">
              <h2><FontAwesomeIcon icon={faShoppingCart} className="head-icon" /> Buyers</h2>
            </span>
            <div className="footer-links">
              <Link className="linkNormal" to="/register-buyer">
                Post Your Requirement
              </Link>
              <Link className="linkNormal" onClick={handleClick} to="/">
                Browse Suppliers
              </Link>
              <Link className="linkNormal" to="/disclaimer">
                Disclaimer
              </Link>
              <Link className="linkNormal" to="/complaint">
                Complaint
              </Link>
            </div>
          </div>
          <div className="footer-links">
            <span className="linkBold">
              <h2><FontAwesomeIcon icon={faBriefcase} className="head-icon" /> Services</h2>
            </span>
            <div className="footer-links">
              <Link className="linkNormal" to="/login">
                Login
              </Link>
              <Link className="linkNormal" to="/register-Company">
                Register
              </Link>
              <Link className="linkNormal" to="/packages">
                Membership Plan
              </Link>
              <Link className="linkNormal" to="/terms-condition">
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
          <div className="footer-links">
            <span className="linkBold">
              <h2><FontAwesomeIcon icon={faGlobe} className="head-icon" /> Connect us</h2>
            </span>
            <div className="footer-links contact-section">
              <div className="contact-item">
                <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                <Link className="linkNormal" to="tel:011-44760532">011-44760532</Link>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                <Link className="linkNormal" to="mailto:sales@globalb2bmart.com">sales@globalb2bmart.com</Link>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faLocationDot} className="contact-icon" />
                <span className="linkNormal address-text">
                  WebWave Business Pvt Ltd, S-21 First Floor, Ajay Enclave,
                  Subhash Nagar, New Delhi - 110018, India
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr />        <div className="tk23-ft-nav">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <ul className="text-center bottom-main-links">
                <li><Link className="text-col" to="/">Home</Link></li>
                <li><Link className="text-col" to="/register-Company">Sell Offers</Link></li>
                <li><Link className="text-col" to="/refund">Refund & Return policy</Link></li>
                <li><Link className="text-col" to="/register-buyer">Buyers</Link></li>
                <li><Link className="text-col" to="/register-Company">Companies</Link></li>
                <li><Link className="text-col" to="/packages">Premium Services</Link></li>
                <li><Link className="text-col" to="/packages" rel="nofollow">Premium Products</Link></li>
                <li><Link className="linkNormal2" to="/buyer-seller-page">Landing Page</Link></li>
                <li><Link className="linkNormal2" to="/what-is-B2B-business">Blogs</Link></li>
              </ul>

              <div className="categories-bar">
                <span className="cat-label">Categories:</span>
                <div className="categories-list">
                  <Link to="/groceries-seller" className="linkNormal2">Foods & Beverage</Link>
                  <Link to="/best-furniture-suppliers-in-india" className="linkNormal2">Furnitures</Link>
                  <Link to="/pvcrresins" className="linkNormal2">Chemicals</Link>
                  <Link to="/jewellery-seller" className="linkNormal2">Jewellery</Link>
                  <Link to="/steel/utensils" className="linkNormal2">Home Supplies</Link>
                  <Link to="/giftsstore" className="linkNormal2">Gifts & Crafts</Link>
                  <Link to="/toolsequipment" className="linkNormal2">Tools & Equipment</Link>
                </div>
              </div>

              <ul className="text-center bottom-sub-links">
                <li><Link className="text-col" to="/aboutUs">About Us</Link></li>
                <li><Link className="text-col" to="/contact-us">Contact Us</Link></li>
                <li><Link className="text-col" to="/packages">Membership Plan</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="lastBar d-flex justify-content-start justify-content-md-center">
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
            className={`fixed-form-bar ${barOpen ? "open" : ""}`}
            onClick={toggleForm}
          >
            <div className="border-animation">
              <span style={{ color: "#000" }} className="call-us-text">
                Book A Call
              </span>
              <i
                className={`fas ${formOpen ? "fa-angle-right" : "fa-angle-left"
                  }`}
              ></i>
            </div>
          </div>

          <div className={`fixed-form-container ${formOpen ? "open" : ""}`}>
            {/* <form onSubmit={handleSubmit}>
                            <img src="./assets/form-logo.png" style={{ width: '190px', display: 'flex', height: '100px', margin: 'auto' }} alt="" />
                            <label style={{ fontSize: '18px', textAlign: 'center', color: 'green' }} className='type-form'>Don't Miss Out on Our Business Resources</label>
                            <label style={{ margin: '5px 0px', fontSize: '18px', textAlign: 'center', color: 'orange' }} className='type-form'>Connect with Verified Buyers</label>
                            <label className='type-form'>
                                Full Name*
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label className='type-form'>
                                Email Address*
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label className='type-form'>
                                Contact Number*
                                <input
                                    type="text"
                                    name="mobileNumber"
                                    value={formData.mobileNumber}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label className='type-form'>
                                Product / Supplier*
                                <input
                                    type="text"
                                    name="productSupplier"
                                    value={formData.productSupplier}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label className='type-form'>
                                I am a*
                                <div>
                                    <label className='type-form' style={{ display: 'inline-block', marginRight: '10px' }}>
                                        <input
                                            type="checkbox"
                                            name="userType"
                                            value="Seller"
                                            checked={formData.userType.includes("Seller")}
                                            onChange={handleCheckboxChange}
                                        />
                                        Seller
                                    </label>
                                    <label className='type-form' style={{ display: 'inline-block' }}>
                                        <input
                                            type="checkbox"
                                            name="userType"
                                            value="Buyer"
                                            checked={formData.userType.includes("Buyer")}
                                            onChange={handleCheckboxChange}
                                        />
                                        Buyer
                                    </label>
                                </div>

                            </label>
                            <button type="submit">Submit</button>
                        </form> */}
            <div>
              {successMessage && (
                <div style={messageContainerStyle}>{successMessage}</div>
              )}
              <form onSubmit={handleSubmit}>
                <img
                  src="./assets/form-logo.png"
                  style={{
                    width: "190px",
                    display: "flex",
                    height: "100px",
                    margin: "auto",
                  }}
                  alt=""
                />
                <label
                  style={{
                    fontSize: "18px",
                    textAlign: "center",
                    color: "green",
                  }}
                  className="type-form"
                >
                  Don't Miss Out on Our Business Resources
                </label>
                <label
                  style={{
                    margin: "5px 0px",
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
                    value={formData.productSupplier}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label className="type-form">
                  I am a*
                  <div>
                    <label
                      className="type-form"
                      style={{ display: "inline-block", marginRight: "10px" }}
                    >
                      <input
                        type="checkbox"
                        name="userType"
                        value="Seller"
                        checked={formData.userType.includes("Seller")}
                        onChange={handleCheckboxChange}
                      />
                      Seller
                    </label>
                    <label
                      className="type-form"
                      style={{ display: "inline-block" }}
                    >
                      <input
                        type="checkbox"
                        name="userType"
                        value="Buyer"
                        checked={formData.userType.includes("Buyer")}
                        onChange={handleCheckboxChange}
                      />
                      Buyer
                    </label>
                  </div>
                </label>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
