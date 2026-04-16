import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import "./onioncomp.css"; // Ensure to adjust CSS file path as necessary

const NeelkanthExportAndImportComp = () => {
  // Company data for Neelkanth Export and Import
  const neelkanthExportAndImport = {
    name: "Rajkumar Kalia",
    email: "neelkanthexportandimport@gmail.com",
    password: "dham@12345",
    mobileNumber: "9974465536",
    companyName: "NEELKANTH EXPORT AND IMPORT",
    statename: "GUJARAT",
    cityname: "AHMEDABAD",
    productOrService: "ALL KIND OF T-SHIRT MANUFACTURER",
    productDescribe:
      "NEELKANTH EXPORT AND IMPORT specializes in high-quality T-shirts of various kinds, catering to both local and international markets.",
    businessType: "Manufacturer",
    mainProducts: "T-shirts",
    logoUrl: "/assets/neelkanth.jpg", // Example path to company logo image
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
          {/* Display Neelkanth Export and Import company information */}
          <div className="company-card">
            <div className="company-header">
              <div className="company-logo">
                <img
                  src={neelkanthExportAndImport.logoUrl}
                  alt="Company Logo"
                />
              </div>
              <div className="company-details">
                <h3>{neelkanthExportAndImport.companyName}</h3>
                <p>
                  <strong>Name:</strong> {neelkanthExportAndImport.name}
                </p>
                <p>
                  <strong>Email:</strong> {neelkanthExportAndImport.email}
                </p>
                <p>
                  <strong>Description:</strong>{" "}
                  {neelkanthExportAndImport.productDescribe}
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
                {neelkanthExportAndImport.businessType}
              </p>
              <p>
                <strong>Main Products:</strong>{" "}
                {neelkanthExportAndImport.mainProducts}
              </p>
              <p>
                <strong>Location:</strong> {neelkanthExportAndImport.cityname},{" "}
                {neelkanthExportAndImport.statename}
              </p>
            </div>
          </div>
        </div>
        <CompanyForm />
      </div>
    </>
  );
};

export default NeelkanthExportAndImportComp;
