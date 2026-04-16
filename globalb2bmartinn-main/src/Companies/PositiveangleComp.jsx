import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Corrected import path
import './onioncomp.css'; // Adjust the CSS file path as necessary

const PositiveAngleComp = () => {
    // Company data for Positive Angle
    const positiveAngle = {
        name: "Mr. Parvinder Singh",
        email: "Positiveangle14@gmail.com",
        mobileNumber: "9810488785",
        companyName: "Positive Angle",
        productOrService: "Candles",
        productDescribe: "Positive Angle specializes in high-quality candles designed to enhance your home environment with style and warmth.",
        businessType: "Manufacturer",
        mainProducts: "Scented Candles, Decorative Candles",
        logoUrl: "/assets/positive-angle-logo.jpeg", // Example path to company logo image
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
                    {/* Display Positive Angle company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={positiveAngle.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{positiveAngle.companyName}</h3>
                                <p><strong>Name:</strong> {positiveAngle.name}</p>
                                <p><strong>Description:</strong> {positiveAngle.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {positiveAngle.businessType}</p>
                            <p><strong>Main Products:</strong> {positiveAngle.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default PositiveAngleComp;
