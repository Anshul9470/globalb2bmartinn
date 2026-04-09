import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Ensure this import path is correct
import './onioncomp.css'; // Adjust the CSS file path as necessary

const ShreeBalajiDhoopTradersComp = () => {
    // Company data for Shree Balaji Dhoop Traders
    const companyData = {
        name: "ashok",
        email: "ashok123@gmail.com",
        mobileNumber: "9971568506",
        companyName: "Shree Balaji Dhoop Traders",
        productOrService: "Dhoop",
        productDescribe: "Shree Balaji Dhoop Traders specializes in a variety of high-quality dhoop products. We offer a range of traditional and aromatic dhoop for spiritual and ceremonial use.",
        businessType: "Supplier",
        mainProducts: "Dhoop",
        logoUrl: "/assets/dhoop.jpeg", // Example path to company logo image
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
                    {/* Display Shree Balaji Dhoop Traders information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={companyData.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{companyData.companyName}</h3>
                                <p><strong>Description:</strong> {companyData.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <p><strong>Business Type:</strong> {companyData.businessType}</p>
                        <p><strong>Main Products:</strong> {companyData.mainProducts}</p>
                        {/* Removed company-description as per your request */}
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default ShreeBalajiDhoopTradersComp;
