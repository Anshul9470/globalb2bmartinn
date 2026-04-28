import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Ensure this import path is correct
import "./onioncomp.css"; // Adjust the CSS file path as necessary

const MahirSanitationComp = () => {
  // Company data for Mahir Sanitation Company
  const companyData = {
    name: "Mahir Sanitation Company",
    email: "", // Assuming this is intentionally left blank
    mobileNumber: "", // Assuming this is intentionally left blank
    companyName: "Mahir Sanitation Company",
    productOrService:
      "Bathroom Toilet Paper Holder, Iranian Saffron Threads, Bathroom Grab Bar",
    productDescribe:
      "Mahir Sanitation Company offers a diverse range of bathroom accessories including toilet paper holders and grab bars, along with premium Iranian saffron threads. We are committed to providing quality products for home and commercial use.",
    businessType: "Supplier",
    mainProducts: "Bathroom Accessories",
    years: "1 YRS",
    location: "Gali Number 3, Modi Nagar, Ghaziabad",
    imgSrc: "/assets/mahir2.webp", // Example path to company logo/image
    altText: "Mahir Sanitation Company - Bathroom Accessories",
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
          {/* Display Mahir Sanitation Company information */}
          <div className="company-card">
            <div className="company-header">
              <div className="company-logo">
                <img src={companyData.imgSrc} alt={companyData.altText} />
              </div>
              <div className="company-details">
                <h3>{companyData.companyName}</h3>

                <p>
                  <strong>Products:</strong> {companyData.productOrService}
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

export default MahirSanitationComp;
