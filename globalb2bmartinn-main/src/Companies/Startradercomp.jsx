import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Adjust the import path as necessary
import './onioncomp.css'; // Adjust the CSS file path as necessary

const StarTradersComp = () => {
    // Company data for STAR TRADERS
    const starTraders = {
        name: "MD Kaleem",
        email: "startraders123@gmail.com",
        mobileNumber: "9030038502",
        companyName: "STAR TRADERS",
        productOrService: "HDPE Barrels Supplier",
        productDescribe: "STAR TRADERS specializes in supplying HDPE barrels that are ideal for a variety of storage and transportation needs.",
        businessType: "Supplier",
        mainProducts: "HDPE Barrels",
        logoUrl: "/assets/star-traders-logo.jpeg" // Example path to company logo image
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
                    {/* Display STAR TRADERS company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={starTraders.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{starTraders.companyName}</h3>
                                <p><strong>Name:</strong> {starTraders.name}</p>
                                <p><strong>Description:</strong> {starTraders.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {starTraders.businessType}</p>
                            <p><strong>Main Products:</strong> {starTraders.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default StarTradersComp;
