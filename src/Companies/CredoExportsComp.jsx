import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Adjust the CSS file path as necessary

const CredoExportsComp = () => {
    // Company data for Credo Exports
    const credoExports = {
        name: "Sahil Tyagi",
        email: "SahilTyagi12@gmail.com",
        mobileNumber: "8527469908",
        companyName: "credo exports",
        productOrService: "Fabric",
        productDescribe: "Credo Exports specializes in exporting a variety of high-quality fabrics, catering to global textile markets.",
        businessType: "Exporter",
        mainProducts: "Fabric",
        logoUrl: "/assets/fab7.jpeg" // Example path to company logo image
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
                    {/* Display Credo Exports company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={credoExports.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{credoExports.companyName}</h3>
                                <p><strong>Name:</strong> {credoExports.name}</p>
                                <p><strong>Description:</strong> {credoExports.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {credoExports.businessType}</p>
                            <p><strong>Main Products:</strong> {credoExports.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default CredoExportsComp;
