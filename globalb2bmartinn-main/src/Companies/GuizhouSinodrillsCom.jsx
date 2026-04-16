import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import "./onioncomp.css"; // Ensure to adjust CSS file path as necessary

const GuizhouSinodrillsComp = () => {
  // Company data for Guizhou Sinodrills Equipment Co., Ltd
  const guizhouSinodrills = {
    name: "Summer Yang",
    companyName: "Guizhou Sinodrills Equipment Co.,Ltd",
    productOrService: "Guizhou",
    productDescribe:
      "Guizhou Sinodrills Equipment Co.,Ltd specializes in providing high-quality drilling equipment and solutions, serving the needs of various industries in Guiyang and beyond.",
    businessType: "Supplier",
    mainProducts: "Drilling Equipment",
    logoUrl: "/assets/sandal-drill1.jpg", // Example path to company logo image
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
          {/* Display Guizhou Sinodrills Equipment Co., Ltd information */}
          <div className="company-card">
            <div className="company-header">
              <div className="company-logo">
                <img src={guizhouSinodrills.logoUrl} alt="Company Logo" />
              </div>
              <div className="company-details">
                <h3>{guizhouSinodrills.companyName}</h3>
                <p>
                  <strong>Name:</strong> {guizhouSinodrills.name}
                </p>
                <p>
                  <strong>Description:</strong>{" "}
                  {guizhouSinodrills.productDescribe}
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
                <strong>Business Type:</strong> {guizhouSinodrills.businessType}
              </p>
              <p>
                <strong>Main Products:</strong> {guizhouSinodrills.mainProducts}
              </p>
            </div>
          </div>
        </div>
        <CompanyForm />
      </div>
    </>
  );
};

export default GuizhouSinodrillsComp;
