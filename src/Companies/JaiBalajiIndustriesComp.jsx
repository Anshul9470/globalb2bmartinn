import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Adjust the import path as necessary
import "./onioncomp.css"; // Adjust the CSS file path as necessary

const JaiBalajiIndustriesComp = () => {
  // Company data for Jai Balaji Industries
  const companyData = {
    name: "Ravi",
    email: "JaiBalajIIndustries@gmail.com",
    mobileNumber: "8383086198",
    companyName: "Jai Balaji Industries",
    productOrService: "Cow Mat",
    productDescribe:
      "Jai Balaji Industries is a prominent manufacturer of high-quality cow mats, designed to provide comfort and support for livestock. Our mats are made from durable materials to ensure longevity and are easy to clean, making them an ideal choice for dairy farms and cattle housing.",
    businessType: "Manufacturer",
    mainProducts: "Cow Mats",
    cityName: "Bhadurgarh",
    stateName: "Delhi",
    logoUrl: "/assets/cowmat.jpeg", // Placeholder path to company logo image
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
          {/* Display Jai Balaji Industries information */}
          <div className="company-card">
            <div className="company-header">
              <div className="company-logo">
                <img src={companyData.logoUrl} alt="Company Logo" />
              </div>
              <div className="company-details">
                <h3>{companyData.companyName}</h3>
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
            <p>
              <strong>Business Type:</strong> {companyData.businessType}
            </p>
            <p>
              <strong>Main Products:</strong> {companyData.mainProducts}
            </p>
            <p>
              <strong>Location:</strong> {companyData.cityName},{" "}
              {companyData.stateName}
            </p>
          </div>
        </div>
        <CompanyForm />
      </div>
    </>
  );
};

export default JaiBalajiIndustriesComp;
