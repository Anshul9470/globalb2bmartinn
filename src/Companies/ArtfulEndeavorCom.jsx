import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import "./onioncomp.css"; // Ensure to adjust CSS file path as necessary

const ArtfulEndeavorComp = () => {
  // Company data for Artful Endeavor
  const artfulEndeavor = {
    name: "Aqsa",
    companyName: "Artful Endeavor",
    productOrService: "Handicraft",
    productDescribe:
      "Artful Endeavor specializes in creating exquisite handicrafts that reflect the rich cultural heritage of Uttar Pradesh, catering to customers in Moradabad and beyond.",
    businessType: "Supplier",
    mainProducts: "Handicrafts",
    logoUrl: "/assets/handicraft11.jpeg", // Example path to company logo image
  };

  return (
    <>
      <div className="container">
        <ol className="breadcrumb">
          <li
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "5px 30px",
            }}
            className="breadcrumb-item"
          >
            <Link to={"/"}>Home</Link>
          </li>
          <li
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "5px -25px",
            }}
          >
            /
          </li>
          <li
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "5px 30px",
            }}
            className="breadcrumb-item active"
          >
            Search
          </li>
        </ol>
      </div>
      <div className="b2b-page">
        <div className="content-left">
          {/* Display Artful Endeavor company information */}
          <div className="company-card">
            <div className="company-header">
              <div className="company-logo">
                <img src={artfulEndeavor.logoUrl} alt="Company Logo" />
              </div>
              <div className="company-details">
                <h3>{artfulEndeavor.companyName}</h3>
                <p>
                  <strong>Name:</strong> {artfulEndeavor.name}
                </p>
                <p>
                  <strong>Description:</strong> {artfulEndeavor.productDescribe}
                </p>
                <div className="imp-btns">
                  <button
                    style={{ backgroundColor: "#4ee54e" }}
                    className="main-btns"
                  >
                    <Link to={"/register-buyer"}>Connect Now</Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="company-description">
              <p>
                <strong>Business Type:</strong> {artfulEndeavor.businessType}
              </p>
              <p>
                <strong>Main Products:</strong> {artfulEndeavor.mainProducts}
              </p>
            </div>
          </div>
        </div>
        <CompanyForm />
      </div>
    </>
  );
};

export default ArtfulEndeavorComp;
