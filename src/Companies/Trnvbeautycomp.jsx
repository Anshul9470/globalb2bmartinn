import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform" // Adjust the import path as necessary
import './onioncomp.css'; // Adjust the CSS file path as necessary

const TrnatvaBeautyComp = () => {
    // Company data for Trnatva Beauty
    const trnatvaBeauty = {
        name: "Neha",
        email: "neha1234@gmail.com",
        mobileNumber: "8800705292",
        companyName: "Trnatva Beauty",
        productOrService: "Skincare, Haircare, and Plant-Based Makeup",
        productDescribe: "Trnatva Beauty offers a comprehensive range of skincare, haircare, and plant-based makeup products, designed to enhance natural beauty and promote healthy skin and hair.",
        businessType: "Retailer",
        mainProducts: "Skincare Products, Haircare Products, Plant-Based Makeup",
        logoUrl: "/assets/trnatva-beauty-logo.jpeg" // Example path to company logo image
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
                    {/* Display Trnatva Beauty company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={trnatvaBeauty.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{trnatvaBeauty.companyName}</h3>
                                <p><strong>Name:</strong> {trnatvaBeauty.name}</p>
                                <p><strong>Description:</strong> {trnatvaBeauty.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {trnatvaBeauty.businessType}</p>
                            <p><strong>Main Products:</strong> {trnatvaBeauty.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default TrnatvaBeautyComp;
