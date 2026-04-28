import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Corrected import path
import './onioncomp.css'; // Adjust the CSS file path as necessary

const PharmaCityComp = () => {
    // Company data for Pharma City
    const pharmaCity = {
        name: "Deepka",
        email: "deepka123@gmail.com",
        mobileNumber: "9960122020",
        companyName: "Pharma City",
        productOrService: "Pharma",
        productDescribe: "Pharma City specializes in a wide range of pharmaceutical products, ensuring quality and compliance with industry standards.",
        businessType: "Supplier",
        mainProducts: "Pharmaceuticals, Medicines",
        logoUrl: "/assets/ph.jpeg", // Example path to company logo image
    };

    return (
        <>
            <div className="container">
                <ol className="breadcrumb">
                    <li style={{ display: 'flex', justifyContent: 'center', margin: '5px 30px' }} className="breadcrumb-item">
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li style={{ display: 'flex', justifyContent: 'center', margin: '5px -25px' }} >/</li>
                    <li style={{ display: 'flex', justifyContent: 'center', margin: '5px 30px' }} className="breadcrumb-item active">Search</li>
                </ol>
            </div>
            <div className="b2b-page">
                <div className="content-left">
                    {/* Display Pharma City company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={pharmaCity.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{pharmaCity.companyName}</h3>
                                <p><strong>Name:</strong> {pharmaCity.name}</p>
                                <p><strong>Description:</strong> {pharmaCity.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {pharmaCity.businessType}</p>
                            <p><strong>Main Products:</strong> {pharmaCity.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default PharmaCityComp;
