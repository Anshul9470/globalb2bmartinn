import React, { useState } from "react";
import { Link } from "react-router-dom";
import './onioncomp.css'; // CSS file for styling
import CompanyForm from "./Companyform";

const RatanHandloomComp = () => {

    const ratanHandloomCompany = {
        name: "Ratan",
        companyName: "Ratan Handloom",
        productOrService: "Door Mat",
        productDescribe: "Ratan Handloom specializes in manufacturing high-quality door mats, offering durable and stylish products for home and commercial use.",
        businessType: "Manufacturer",
        mainProducts: "Door Mats",
        logoUrl: "/assets/doormate.jpg" // Example path to company logo image
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
                    {/* Display Ratan Handloom company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={ratanHandloomCompany.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{ratanHandloomCompany.companyName}</h3>
                                <p><strong>Name:</strong> {ratanHandloomCompany.name}</p>
                                <p><strong>Description:</strong> {ratanHandloomCompany.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {ratanHandloomCompany.businessType}</p>
                            <p><strong>Main Products:</strong> {ratanHandloomCompany.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default RatanHandloomComp;
