import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import "./onioncomp.css"; // Ensure to adjust CSS file path as necessary

const YasaGeyserComp = () => {
  // Company data for Yasa Geyser
  const yasaGeyser = {
    name: "Sandeep Yadav",
    email: "yasageyser@gmail.com",
    password: "sandeep yadav",
    mobileNumber: "7895457503",
    companyName: "Yasa Geyser",
    statename: "Uttar Pradesh",
    cityname: "Agra",
    productOrService: "Geyser",
    productDescribe:
      "Yasa Geyser specializes in high-quality geysers, offering efficient and reliable heating solutions for your home.",
    businessType: "Manufacturer",
    mainProducts: "Geyser",
    logoUrl: "/assets/gyser1.jpg", // Example path to company logo image
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
          {/* Display Yasa Geyser company information */}
          <div className="company-card">
            <div className="company-header">
              <div className="company-logo">
                <img src={yasaGeyser.logoUrl} alt="Company Logo" />
              </div>
              <div className="company-details">
                <h3>{yasaGeyser.companyName}</h3>
                <p>
                  <strong>Name:</strong> {yasaGeyser.name}
                </p>
                <p>
                  <strong>Email:</strong> {yasaGeyser.email}
                </p>
                <p>
                  <strong>Description:</strong> {yasaGeyser.productDescribe}
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
                <strong>Business Type:</strong> {yasaGeyser.businessType}
              </p>
              <p>
                <strong>Main Products:</strong> {yasaGeyser.mainProducts}
              </p>
              <p>
                <strong>Location:</strong> {yasaGeyser.cityname},{" "}
                {yasaGeyser.statename}
              </p>
            </div>
          </div>
        </div>
        <CompanyForm />
      </div>
    </>
  );
};

export default YasaGeyserComp;
