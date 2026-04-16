import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Ensure this import path is correct
import "./onioncomp.css"; // Adjust the CSS file path as necessary

const ViraniEnterprisesComp = () => {
  // Company data for Virani Enterprises
  const companyData = {
    name: "Jayesh Virani",
    email: "Jayeshvirani@gmail.com",
    mobileNumber: "8000240622",
    companyName: "Virani Enterprises",
    productOrService: "Door Hardware",
    productDescribe:
      "Virani Enterprises specializes in providing high-quality door hardware solutions. We offer a wide range of products designed for both residential and commercial applications, ensuring safety and durability.",
    businessType: "Supplier",
    mainProducts: "Door Hardware",
    logoUrl: "/assets/door1.jpeg", // Example path to company logo/image
    location: "Jamnagar, Gujarat",
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
          {/* Display Virani Enterprises information */}
          <div className="company-card">
            <div className="company-header">
              <div className="company-logo">
                <img src={companyData.logoUrl} alt="Company Logo" />
              </div>
              <div className="company-details">
                <h3>{companyData.companyName}</h3>
                <p>
                  <strong>Name:</strong> {companyData.name}
                </p>
                <p>
                  <strong>Products:</strong> {companyData.productOrService}
                </p>
                <p>
                  <strong>Location:</strong> {companyData.location}
                </p>
                <p>
                  <strong>Description:</strong> {companyData.productDescribe}
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
                <strong>Main Products:</strong> {companyData.mainProducts}
              </p>
            </div>
          </div>
        </div>
        <CompanyForm />
      </div>
    </>
  );
};

export default ViraniEnterprisesComp;
