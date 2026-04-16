import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Corrected import path
import './onioncomp.css'; // Adjust the CSS file path as necessary

const MacroFootwearComp = () => {
    // Company data for Macro Footwear
    const macroFootwear = {
        name: "Macro",
        email: "abc@gmail.com",
        mobileNumber: "9870652011",
        companyName: "MACRO FOOTWEAR",
        productOrService: "Footwear Manufacturer",
        productDescribe: "MACRO FOOTWEAR specializes in manufacturing a diverse range of footwear including casual, formal, and sports shoes, catering to various customer needs and preferences.",
        businessType: "Manufacturer",
        mainProducts: "Casual Shoes, Formal Shoes, Sports Shoes",
        logoUrl: "/assets/footwear1.jpeg", // Example path to company logo image
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
                    {/* Display MACRO FOOTWEAR company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={macroFootwear.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{macroFootwear.companyName}</h3>
                                <p><strong>Name:</strong> {macroFootwear.name}</p>
                                <p><strong>Description:</strong> {macroFootwear.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {macroFootwear.businessType}</p>
                            <p><strong>Main Products:</strong> {macroFootwear.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default MacroFootwearComp;
