import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Corrected import path
import './onioncomp.css'; // Adjust the CSS file path as necessary

const HariTradingCompanyComp = () => {
    // Company data for Hari Trading Company
    const hariTradingCompany = {
        name: "Aashish",
        email: "abc@gmail.com",
        mobileNumber: "8218100030",
        companyName: "Hari Trading Company",
        productOrService: "Footwear",
        productDescribe: "Hari Trading Company specializes in offering a wide range of high-quality footwear, including casual, formal, and sports shoes.",
        businessType: "Supplier",
        mainProducts: "Casual Shoes, Formal Shoes, Sports Shoes",
        logoUrl: "/assets/footwear3.jpeg", // Example path to company logo image
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
                    {/* Display Hari Trading Company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={hariTradingCompany.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{hariTradingCompany.companyName}</h3>
                                <p><strong>Name:</strong> {hariTradingCompany.name}</p>
                                <p><strong>Description:</strong> {hariTradingCompany.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {hariTradingCompany.businessType}</p>
                            <p><strong>Main Products:</strong> {hariTradingCompany.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default HariTradingCompanyComp;
