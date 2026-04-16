import React, { useState } from "react";
import { Link } from "react-router-dom";
import './onioncomp.css'; // CSS file for styling
import CompanyForm from "./Companyform";

const AshaPureHardwareComp = () => {

    const ashaPureHardwareCompany = {
        name: "Deepak",
        companyName: "Asha Pure Hardware",
        productOrService: "Hardware Products",
        productDescribe: "Asha Pure Hardware offers a wide range of high-quality hardware products, providing durable solutions for construction and home improvement needs.",
        businessType: "Supplier",
        mainProducts: "Locks, Hinges, Screws, Nails",
        logoUrl: "/assets/hard1.jpg" // Example path to company logo image
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
                    {/* Display Asha Pure Hardware company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={ashaPureHardwareCompany.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{ashaPureHardwareCompany.companyName}</h3>
                                <p><strong>Name:</strong> {ashaPureHardwareCompany.name}</p>
                                <p><strong>Description:</strong> {ashaPureHardwareCompany.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {ashaPureHardwareCompany.businessType}</p>
                            <p><strong>Main Products:</strong> {ashaPureHardwareCompany.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default AshaPureHardwareComp;
