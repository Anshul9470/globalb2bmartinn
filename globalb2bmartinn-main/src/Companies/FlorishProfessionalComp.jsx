import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Corrected import path
import './onioncomp.css'; // Adjust the CSS file path as necessary

const FlorishProfessionalComp = () => {
    // Company data for Florish Professional Pvt. Ltd.
    const florishProfessional = {
        name: "Sudheer",
        email: "sudheer123@gmail.com",
        mobileNumber: "7530966614",
        companyName: "Florish Professional Pvt. Ltd.",
        productOrService: "Cosmetics",
        productDescribe: "Florish Professional Pvt. Ltd. specializes in high-quality cosmetics and beauty products, including skincare, makeup, and personal care items.",
        businessType: "Manufacturer",
        mainProducts: "Skincare Products, Makeup Products, Personal Care Items",
        logoUrl: "/assets/cosma.jpeg", // Example path to company logo image
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
                    {/* Display Florish Professional Pvt. Ltd. company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={florishProfessional.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{florishProfessional.companyName}</h3>
                                <p><strong>Name:</strong> {florishProfessional.name}</p>
                                <p><strong>Description:</strong> {florishProfessional.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {florishProfessional.businessType}</p>
                            <p><strong>Main Products:</strong> {florishProfessional.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default FlorishProfessionalComp;
