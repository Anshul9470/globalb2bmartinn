import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Ensure to adjust CSS file path as necessary

const ShriNathDistributorsComp = () => {
    // Company data for Shri Nath Distributors
    const shriNathDistributors = {
        name: "Pulkit Khandelwal",
        companyName: "Shri Nath Distributors",
        productOrService: "Garments",
        productDescribe: "Shri Nath Distributors specializes in a wide range of garments, offering high-quality clothing for various occasions and needs.",
        businessType: "Distributor",
        mainProducts: "Garments",
        logoUrl: "/assets/gr4.jpeg" // Example path to company logo image
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
                    {/* Display Shri Nath Distributors company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={shriNathDistributors.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{shriNathDistributors.companyName}</h3>
                                <p><strong>Name:</strong> {shriNathDistributors.name}</p>
                                <p><strong>Description:</strong> {shriNathDistributors.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {shriNathDistributors.businessType}</p>
                            <p><strong>Main Products:</strong> {shriNathDistributors.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default ShriNathDistributorsComp;
