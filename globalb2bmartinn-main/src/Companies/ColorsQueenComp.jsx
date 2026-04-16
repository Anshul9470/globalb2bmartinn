import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Corrected import path
import './onioncomp.css'; // Adjust the CSS file path as necessary

const ColorsQueenComp = () => {
    // Company data for Colors Queen
    const colorsQueen = {
        name: "Dilip",
        email: "Dilip123@gmail.com",
        mobileNumber: "9599038858",
        companyName: "Colors Queen",
        productOrService: "cosmetic",
        productDescribe: "Colors Queen offers a wide range of high-quality cosmetics that enhance beauty and provide a flawless look.",
        businessType: "Supplier",
        mainProducts: "Face Makeup, Lip Care, Skin Care Products",
        logoUrl: "/assets/beauty7.jpeg", // Example path to company logo image
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
                    {/* Display Colors Queen company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={colorsQueen.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{colorsQueen.companyName}</h3>
                                <p><strong>Name:</strong> {colorsQueen.name}</p>
                                <p><strong>Description:</strong> {colorsQueen.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {colorsQueen.businessType}</p>
                            <p><strong>Main Products:</strong> {colorsQueen.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default ColorsQueenComp;
