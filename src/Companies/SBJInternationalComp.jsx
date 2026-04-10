import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Corrected import path
import './onioncomp.css'; // Adjust the CSS file path as necessary

const SBJInternationalComp = () => {
    // Company data for SBJ International
    const sbjInternational = {
        name: "Rakesh",
        email: "rakesh123@gmail.com",
        mobileNumber: "8860665062",
        companyName: "S B J International",
        productOrService: "Cosmetic",
        productDescribe: "S B J International offers a wide range of high-quality cosmetic products, catering to various beauty and skincare needs.",
        businessType: "Supplier",
        mainProducts: "Skincare Products, Makeup, Personal Care Items",
        logoUrl: "/assets/sbj-international-logo.jpeg", // Example path to company logo image
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
                    {/* Display SBJ International company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={sbjInternational.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{sbjInternational.companyName}</h3>
                                <p><strong>Name:</strong> {sbjInternational.name}</p>
                                <p><strong>Description:</strong> {sbjInternational.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {sbjInternational.businessType}</p>
                            <p><strong>Main Products:</strong> {sbjInternational.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default SBJInternationalComp;
