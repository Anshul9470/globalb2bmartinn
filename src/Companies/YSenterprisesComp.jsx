import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Ensure this import path is correct
import './onioncomp.css'; // Adjust the CSS file path as necessary

const YSEnterprisesComp = () => {
    // Company data for Y S Enterprises
    const companyData = {
        name: "M Taufeeq Ahmed",
        email: "ysenterprises@gmail.com",
        mobileNumber: "6309028166",
        companyName: "Y S Enterprises",
        productOrService: "Rectangular Panel Light",
        productDescribe: "Y S Enterprises specializes in providing high-quality rectangular panel lights. Our products are designed to offer superior illumination, energy efficiency, and durability for various lighting applications.",
        businessType: "Manufacturer",
        mainProducts: "Rectangular Panel Lights",
        logoUrl: "/assets/light7.jpeg", // Example path to company logo image
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
                    {/* Display Y S Enterprises information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={companyData.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{companyData.companyName}</h3>
                                <p><strong>Name:</strong> {companyData.name}</p>
                                <p><strong>Description:</strong> {companyData.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {companyData.businessType}</p>
                            <p><strong>Main Products:</strong> {companyData.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default YSEnterprisesComp;
