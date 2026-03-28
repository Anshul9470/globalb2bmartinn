import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Adjust the import path as necessary
import './onioncomp.css'; // Adjust the CSS file path as necessary

const MilapCosmeticsComp = () => {
    // Company data for Milap Cosmetics
    const milapCosmetics = {
        name: "Jay",
        email: "jay123@gmail.com",
        mobileNumber: "9773843100",
        companyName: "Milap Cosmetics",
        productOrService: "Cosmetics",
        productDescribe: "Milap Cosmetics offers a diverse range of high-quality cosmetics, including skincare and makeup products designed to enhance natural beauty.",
        businessType: "Retailer",
        mainProducts: "Skincare Products, Makeup Products",
        logoUrl: "/assets/beauty8.jpeg" // Example path to company logo image
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
                    {/* Display Milap Cosmetics company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={milapCosmetics.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{milapCosmetics.companyName}</h3>
                                <p><strong>Name:</strong> {milapCosmetics.name}</p>
                                <p><strong>Description:</strong> {milapCosmetics.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {milapCosmetics.businessType}</p>
                            <p><strong>Main Products:</strong> {milapCosmetics.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default MilapCosmeticsComp;
