import React, { useState } from "react";
import { Link } from "react-router-dom";
import './onioncomp.css'; // CSS file for styling
import CompanyForm from "./Companyform";

const RupaliBengalTextileComp = () => {

    const rupaliBengalTextileCompany = {
        name: "Arun Bera",
        companyName: "Rupali Bengal Textile",
        productOrService: "Ladies Saree",
        productDescribe: "Rupali Bengal Textile specializes in a wide range of high-quality ladies sarees, offering elegant and traditional attire for various occasions.",
        businessType: "Manufacturer",
        mainProducts: "Silk Sarees, Cotton Sarees, Designer Sarees",
        logoUrl: "/assets/saree.jpeg" // Example path to company logo image
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
                    {/* Display Rupali Bengal Textile company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={rupaliBengalTextileCompany.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{rupaliBengalTextileCompany.companyName}</h3>
                                <p><strong>Name:</strong> {rupaliBengalTextileCompany.name}</p>
                                <p><strong>Description:</strong> {rupaliBengalTextileCompany.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {rupaliBengalTextileCompany.businessType}</p>
                            <p><strong>Main Products:</strong> {rupaliBengalTextileCompany.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default RupaliBengalTextileComp;
