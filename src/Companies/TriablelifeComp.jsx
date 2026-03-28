import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Corrected import path
import './onioncomp.css'; // Adjust the CSS file path as necessary

const TribalikaLifestyleComp = () => {
    // Company data for Tribalika Lifestyle
    const tribalikaLifestyle = {
        name: "Mr. Om Prakash Chandan",
        email: "TRIBALIKALIFESTYLE@GMAIL.COM",
        mobileNumber: "6284832166",
        companyName: "TRIBALIKA LIFESTYLE",
        productOrService: "Candles",
        productDescribe: "TRIBALIKA LIFESTYLE offers a diverse range of high-quality candles, designed to create a warm and inviting atmosphere.",
        businessType: "Supplier",
        mainProducts: "Scented Candles, Decorative Candles, Aromatherapy Candles",
        logoUrl: "/assets/tribalika-lifestyle-logo.jpeg", // Example path to company logo image
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
                    {/* Display Tribalika Lifestyle company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={tribalikaLifestyle.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{tribalikaLifestyle.companyName}</h3>
                                <p><strong>Name:</strong> {tribalikaLifestyle.name}</p>
                                <p><strong>Description:</strong> {tribalikaLifestyle.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {tribalikaLifestyle.businessType}</p>
                            <p><strong>Main Products:</strong> {tribalikaLifestyle.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default TribalikaLifestyleComp;
