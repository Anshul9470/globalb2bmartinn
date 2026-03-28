import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Ensure this import path is correct
import './onioncomp.css'; // Adjust the CSS file path as necessary

const VdEnterpriseComp = () => {
    // Company data for VD Enterprise
    const companyData = {
        name: "Manju Nathan",
        email: "manjunathanv20@gmail.com",
        mobileNumber: "7667767872",
        companyName: "VD Enterprise",
        productOrService: "Mobile Accessories",
        productDescribe: "VD Enterprise specializes in a wide range of mobile accessories, offering premium quality products including cases, chargers, and screen protectors. Based in Vellore, Tamil Nadu, we aim to provide affordable and durable solutions for all your mobile needs.",
        businessType: "Supplier",
        mainProducts: "Mobile Accessories",
        statename: "Tamil Nadu",
        cityname: "Vellore",
        logoUrl: "/assets/mobile_accessories.jpg", // Example path to company logo image
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
                    {/* Display VD Enterprise information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={companyData.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{companyData.companyName}</h3>
                                <p><strong>Name:</strong> {companyData.name}</p>
                                <p><strong>Description:</strong> {companyData.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {companyData.businessType}</p>
                            <p><strong>Main Products:</strong> {companyData.mainProducts}</p>
                            <p><strong>State:</strong> {companyData.statename}</p>
                            <p><strong>City:</strong> {companyData.cityname}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default VdEnterpriseComp;
