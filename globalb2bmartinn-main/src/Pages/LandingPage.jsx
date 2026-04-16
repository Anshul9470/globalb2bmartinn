import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Landingpage.css"; // Importing the CSS

const LandingPages = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    productSupplier: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
                <input
                  type="text"
                  name="productSupplier"
                  placeholder="Products/Services"
                  value={formData.productSupplier}
                  onChange={handleChange}
                  required
                />
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
