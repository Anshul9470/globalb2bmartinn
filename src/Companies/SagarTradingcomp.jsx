import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import "./onioncomp.css"; // Ensure to adjust CSS file path as necessary

const SagarTradingCompanyComp = () => {
  // Company data for Sagar Trading Company
  const sagarTradingCompany = {
    name: "Sagar",
    companyName: "Sagar Trading Company",
    productOrService: "Copper",
    productDescribe:
      "Sagar Trading Company is a trusted supplier of high-quality copper materials, serving clients in Kolkata and ensuring top-grade products for various industries.",
    businessType: "Supplier",
    mainProducts: "Copper",
    logoUrl: "/assets/copper.jpeg", // Example path to company logo image
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
          {/* Display Sagar Trading Company information */}
          <div className="company-card">
            <div className="company-header">
              <div className="company-logo">
                <img src={sagarTradingCompany.logoUrl} alt="Company Logo" />
              </div>
              <div className="company-details">
                <h3>{sagarTradingCompany.companyName}</h3>
                <p>
                  <strong>Name:</strong> {sagarTradingCompany.name}
                </p>
                <p>
                  <strong>Description:</strong>{" "}
                  {sagarTradingCompany.productDescribe}
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
                <strong>Business Type:</strong>{" "}
                {sagarTradingCompany.businessType}
              </p>
              <p>
                <strong>Main Products:</strong>{" "}
                {sagarTradingCompany.mainProducts}
              </p>
            </div>
          </div>
        </div>
        <CompanyForm />
      </div>
    </>
  );
};

export default SagarTradingCompanyComp;
