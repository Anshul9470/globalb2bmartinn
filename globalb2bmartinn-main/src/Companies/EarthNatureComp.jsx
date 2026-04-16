import React, { useState } from "react";
import { Link } from "react-router-dom";
import './onioncomp.css'; // CSS file for styling
import CompanyForm from "./Companyform";

const EarthsNatureComp = () => {

    const earthsNatureCompany = {
        name: "Praveen Kumar",
        companyName: "Earth's Nature",
        productOrService: "Fruits and vegetable powder",
        productDescribe: "Earth's Nature specializes in high-quality fruit and vegetable powders, offering natural and nutritious products for various culinary and health needs.",
        businessType: "Manufacturer",
        mainProducts: "Fruit Powders, Vegetable Powders",
        logoUrl: "/assets/fruit1.jpg" // Example path to company logo image
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
                    {/* Display Earth's Nature company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={earthsNatureCompany.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{earthsNatureCompany.companyName}</h3>
                                <p><strong>Name:</strong> {earthsNatureCompany.name}</p>
                                <p><strong>Description:</strong> {earthsNatureCompany.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {earthsNatureCompany.businessType}</p>
                            <p><strong>Main Products:</strong> {earthsNatureCompany.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default EarthsNatureComp;
