import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import "./onioncomp.css"; // Ensure to adjust CSS file path as necessary

const ShubhClayArtComp = () => {
  // Company data for Shubh Clay Art
  const shubhClayArt = {
    name: "Amit Dedhiya",
    email: "abc@gmail.com",
    password: "amit@123",
    mobileNumber: "9638936831",
    companyName: "Shubh Clay Art",
    statename: "Gujarat",
    cityname: "Thangarh",
    productOrService: "Sanitary Ware",
    productDescribe:
      "Shubh Clay Art specializes in high-quality sanitary ware, combining traditional craftsmanship with modern designs.",
    businessType: "Manufacturer",
    mainProducts: "Sanitary Ware",
    whatsappConfirmed: true,
    logoUrl: "/assets/shubh-clay-art-logo.jpeg", // Example path to company logo image
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
          {/* Display Shubh Clay Art company information */}
          <div className="company-card">
            <div className="company-header">
              <div className="company-logo">
                <img src={shubhClayArt.logoUrl} alt="Company Logo" />
              </div>
              <div className="company-details">
                <h3>{shubhClayArt.companyName}</h3>
                <p>
                  <strong>Name:</strong> {shubhClayArt.name}
                </p>
                <p>
                  <strong>Email:</strong> {shubhClayArt.email}
                </p>
                <p>
                  <strong>Description:</strong> {shubhClayArt.productDescribe}
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
                <strong>Business Type:</strong> {shubhClayArt.businessType}
              </p>
              <p>
                <strong>Main Products:</strong> {shubhClayArt.mainProducts}
              </p>
              <p>
                <strong>Location:</strong> {shubhClayArt.cityname},{" "}
                {shubhClayArt.statename}
              </p>
              <p>
                <strong>WhatsApp Confirmed:</strong>{" "}
                {shubhClayArt.whatsappConfirmed ? "Yes" : "No"}
              </p>
            </div>
          </div>
        </div>
        <CompanyForm />
      </div>
    </>
  );
};

export default ShubhClayArtComp;
