import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Corrected import path
import './onioncomp.css'; // Adjust the CSS file path as necessary

const KANAcreationsComp = () => {
    // Company data for KANA Creations
    const kanaCreations = {
        name: "Mr. R K Gupta",
        email: "KANACREATIONS@GMAIL.COM",
        mobileNumber: "9910088965",
        companyName: "KANA Creations",
        productOrService: "Candles",
        productDescribe: "KANA Creations offers a wide range of high-quality candles, designed to add elegance and ambiance to any space.",
        businessType: "Manufacturer",
        mainProducts: "Scented Candles, Decorative Candles",
        logoUrl: "/assets/candles4.jpeg", // Example path to company logo image
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
                    {/* Display KANA Creations company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={kanaCreations.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{kanaCreations.companyName}</h3>
                                <p><strong>Name:</strong> {kanaCreations.name}</p>
                                <p><strong>Description:</strong> {kanaCreations.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {kanaCreations.businessType}</p>
                            <p><strong>Main Products:</strong> {kanaCreations.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default KANAcreationsComp;
