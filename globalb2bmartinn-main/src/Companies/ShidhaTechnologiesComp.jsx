import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Ensure the import path is correct
import './onioncomp.css'; // Adjust the CSS file path as necessary

const ShidhaTechnologiesComp = () => {
    // Company data for Shidha Technologies
    const companyData = {
        name: "Shidha Technologies",
        email: "abc@gmail.com",
        mobileNumber: "9985361214",
        companyName: "Shidha Technologies",
        productOrService: "Metal Fabrication",
        productDescribe: "Shidha Technologies specializes in high-quality metal fabrication services. Our solutions include custom metal components and structures tailored to client specifications.",
        businessType: "Manufacturer",
        mainProducts: "Metal Components, Fabricated Structures",
        logoUrl: "/assets/me2.jpeg", // Placeholder path to company logo image
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
                    {/* Display Shidha Technologies information */}
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
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default ShidhaTechnologiesComp;
