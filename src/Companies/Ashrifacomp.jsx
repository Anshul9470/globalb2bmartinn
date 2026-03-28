import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import "./onioncomp.css"; // Ensure to adjust CSS file path as necessary

const ArishfaSilkComp = () => {
  // Company data for Arishfa Silk
  const arishfaSilk = {
    name: "Azmat Hamza",
    email: "azmathamza@gmail.com",
    password: "azmat hamza",
    mobileNumber: "6387926027",
    companyName: "Arishfa Silk",
    statename: "Uttar Pradesh",
    cityname: "Varnasi",
    productOrService: "Banarasi Saree",
    productDescribe:
      "Arishfa Silk specializes in exquisite Banarasi sarees, offering a blend of traditional craftsmanship and modern designs.",
    businessType: "Manufacturer",
    mainProducts: "Banarasi Saree",
    logoUrl: "/assets/banarasi-saree-logo.jpeg", // Example path to company logo image
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
          {/* Display Arishfa Silk company information */}
          <div className="company-card">
            <div className="company-header">
              <div className="company-logo">
                <img src={arishfaSilk.logoUrl} alt="Company Logo" />
              </div>
              <div className="company-details">
                <h3>{arishfaSilk.companyName}</h3>
                <p>
                  <strong>Name:</strong> {arishfaSilk.name}
                </p>
                <p>
                  <strong>Email:</strong> {arishfaSilk.email}
                </p>
                <p>
                  <strong>Description:</strong> {arishfaSilk.productDescribe}
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
                <strong>Business Type:</strong> {arishfaSilk.businessType}
              </p>
              <p>
                <strong>Main Products:</strong> {arishfaSilk.mainProducts}
              </p>
              <p>
                <strong>Location:</strong> {arishfaSilk.cityname},{" "}
                {arishfaSilk.statename}
              </p>
            </div>
          </div>
        </div>
        <CompanyForm />
      </div>
    </>
  );
};

export default ArishfaSilkComp;
