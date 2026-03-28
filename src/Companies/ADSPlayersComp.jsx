import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Ensure this import path is correct
import "./onioncomp.css"; // Adjust the CSS file path as necessary

const ADSPlayersComp = () => {
  const companyData = {
    name: "Talwinder Kaur",
    email: "talwinderkaur@gmail.com",
    mobileNumber: "9560120150",
    companyName: "ADS Players",
    productOrService: "Sports Wear",
    productDescribe:
      "ADS Players offers a wide range of high-quality sports wear designed for athletes and fitness enthusiasts. Our products ensure comfort and performance in every activity.",
    businessType: "Supplier",
    mainProducts: "Sports Apparel",
    logoUrl: "/assets/ads_players_logo.jpg", // Example path to company logo/image
    location: "Ludhiana, Punjab",
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

export default ADSPlayersComp;
