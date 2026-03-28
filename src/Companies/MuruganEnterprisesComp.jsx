import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Ensure to adjust CSS file path as necessary

const MuruganEnterprisesComp = () => {
    // Company data for Murugan Enterprises
    const muruganEnterprises = {
        name: "Murugan Enterprises",
        companyName: "Murugan Enterprises",
        productOrService: "Natural Stone Supplier",
        productDescribe: "Murugan Enterprises specializes in supplying high-quality natural stones, including marble, granite, and other stone materials for various construction and decorative purposes.",
        businessType: "Supplier",
        mainProducts: "Natural Stones",
        logoUrl: "/assets/stone2.jpeg" // Example path to company logo image
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
                    {/* Display Murugan Enterprises company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={muruganEnterprises.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{muruganEnterprises.companyName}</h3>
                                <p><strong>Name:</strong> {muruganEnterprises.name}</p>
                                <p><strong>Description:</strong> {muruganEnterprises.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {muruganEnterprises.businessType}</p>
                            <p><strong>Main Products:</strong> {muruganEnterprises.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default MuruganEnterprisesComp;
