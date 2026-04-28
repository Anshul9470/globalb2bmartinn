import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CATEGORIES, SUB_CATEGORIES, getCategorySuggestions, getSubCategorySuggestions } from "../services/categoryData";
import "./Landingpage.css"; // Importing the CSS

const LandingPages = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    productSupplier: "",
    category: "",
    subCategory: "",
  });
  const [submitted, setSubmitted] = useState(false);
  
  // Suggestion State
  const [categorySuggestions, setCategorySuggestions] = useState([]);
  const [showCategorySuggestions, setShowCategorySuggestions] = useState(false);
  const [subCategorySuggestions, setSubCategorySuggestions] = useState([]);
  const [showSubCategorySuggestions, setShowSubCategorySuggestions] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCategorySearch = (value) => {
    setFormData({ ...formData, category: value, subCategory: "" });
    const suggestions = getCategorySuggestions(value);
    setCategorySuggestions(suggestions);
    setShowCategorySuggestions(true);
  };

  const handleCategoryClick = (category) => {
    setFormData({ ...formData, category: category, subCategory: "" });
    setShowCategorySuggestions(false);
    setSubCategorySuggestions(SUB_CATEGORIES[category] || []);
  };

  const handleSubCategorySearch = (value) => {
    setFormData({ ...formData, subCategory: value, productSupplier: value });
    const suggestions = getSubCategorySuggestions(formData.category, value);
    setSubCategorySuggestions(suggestions);
    setShowSubCategorySuggestions(true);
  };

  const handleSubCategoryClick = (suggestion) => {
    setFormData({ ...formData, subCategory: suggestion, productSupplier: suggestion });
    setShowSubCategorySuggestions(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_ENDPOINT}/submit-landing`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <>
      <div className="landing-page-container">
        <div className="box">
          <div className="box-left">

            <h3 className="welcome-port">Welcome To GlobalB2B Mart</h3>
            <i>
              <h4 className="b2b-welcome"> World's Best B2B Portal</h4>
            </i>
            <Link to="/register-Company" className="button button-register">
              Register as Company
            </Link>
            <Link to="/register-buyer" className="button button-requirement">
              Post your Requirement
            </Link>
            <Link to="/" className="button button-home">
              Home
            </Link>
          </div>

          <div className="box-right">
            {submitted ? (
              <div className="thank-you-message">
                Thank you! Your submission has been received.
              </div>
            ) : (
              <form className="form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="mobileNumber"
                  placeholder="Mobile Number"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                />
                 <div style={{ position: "relative" }}>
                  <input
                    type="text"
                    name="category"
                    placeholder="Select Category (e.g. RICE, SOLAR...)"
                    value={formData.category}
                    onChange={(e) => handleCategorySearch(e.target.value)}
                    onFocus={() => handleCategorySearch(formData.category)}
                    onBlur={() => setTimeout(() => setShowCategorySuggestions(false), 200)}
                    required
                    autoComplete="off"
                  />
                  {showCategorySuggestions && categorySuggestions.length > 0 && (
                    <ul className="landing-suggestions" style={{
                      position: "absolute", top: "100%", left: 0, right: 0,
                      backgroundColor: "#fff", border: "1px solid #ddd", borderRadius: "4px",
                      maxHeight: "150px", overflowY: "auto", zIndex: 1000, listStyle: "none",
                      padding: "5px 0", margin: 0, textAlign: "left", boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
                    }}>
                      {categorySuggestions.map((cat, idx) => (
                        <li key={idx} onMouseDown={() => handleCategoryClick(cat)}
                          style={{ padding: "8px 12px", cursor: "pointer", borderBottom: "1px solid #eee", color: "#333" }}
                          onMouseEnter={(e) => e.target.style.backgroundColor = "#f0f0f0"}
                          onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
                        >
                          {cat}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div style={{ position: "relative" }}>
                  <input
                    type="text"
                    name="subCategory"
                    placeholder={formData.category ? `Search in ${formData.category}...` : "Products/Services"}
                    value={formData.subCategory}
                    onChange={(e) => handleSubCategorySearch(e.target.value)}
                    onFocus={() => handleSubCategorySearch(formData.subCategory)}
                    onBlur={() => setTimeout(() => setShowSubCategorySuggestions(false), 200)}
                    required
                    autoComplete="off"
                  />
                  {showSubCategorySuggestions && subCategorySuggestions.length > 0 && (
                    <ul className="landing-suggestions" style={{
                      position: "absolute", top: "100%", left: 0, right: 0,
                      backgroundColor: "#fff", border: "1px solid #ddd", borderRadius: "4px",
                      maxHeight: "150px", overflowY: "auto", zIndex: 1000, listStyle: "none",
                      padding: "5px 0", margin: 0, textAlign: "left", boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
                    }}>
                      {subCategorySuggestions.map((sub, idx) => (
                        <li key={idx} onMouseDown={() => handleSubCategoryClick(sub)}
                          style={{ padding: "8px 12px", cursor: "pointer", borderBottom: "1px solid #eee", color: "#333" }}
                          onMouseEnter={(e) => e.target.style.backgroundColor = "#f0f0f0"}
                          onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
                        >
                          {sub}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <button type="submit" className="button-submit">
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPages;
