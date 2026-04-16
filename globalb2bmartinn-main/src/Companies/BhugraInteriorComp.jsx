import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Adjust the CSS file path as necessary

const BhugraInteriorComp = () => {
    // Company data for Bhugra Interior
    const bhugraInterior = {
        name: "p p singh",
        email: "ppsingh12@gmail.com",
        mobileNumber: "9306290881",
        companyName: "Bhugra Interior",
        productOrService: "Gym Mats",
        productDescribe: "Bhugra Interior specializes in providing high-quality gym mats, suitable for both commercial and residential gym setups.",
        businessType: "Supplier",
        mainProducts: "Gym Mats",
        whatsappConfirmed: true,
        logoUrl: "/assets/gym8.jpeg" // Example path to company logo image
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
                    {/* Display Bhugra Interior company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={bhugraInterior.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{bhugraInterior.companyName}</h3>
                                <p><strong>Name:</strong> {bhugraInterior.name}</p>
                                <p><strong>Description:</strong> {bhugraInterior.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {bhugraInterior.businessType}</p>
                            <p><strong>Main Products:</strong> {bhugraInterior.mainProducts}</p>
                            <p><strong>WhatsApp Confirmed:</strong> {bhugraInterior.whatsappConfirmed ? "Yes" : "No"}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default BhugraInteriorComp;
