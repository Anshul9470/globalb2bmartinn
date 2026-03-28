import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Ensure to adjust CSS file path as necessary

const HvEnterprisesComp = () => {
    // Company data for HV Enterprises
    const hvEnterprises = {
        name: "Sanjay Verma",
        companyName: "HV Enterprises",
        productOrService: "Manufacturers of Buckles",
        productDescribe: "HV Enterprises specializes in manufacturing high-quality buckles, offering a variety of designs and materials.",
        businessType: "Manufacturer",
        mainProducts: "Buckles",
        logoUrl: "/assets/buckles.jpeg" // Example path to company logo image
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
                    {/* Display HV Enterprises company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={hvEnterprises.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{hvEnterprises.companyName}</h3>
                                <p><strong>Name:</strong> {hvEnterprises.name}</p>
                                <p><strong>Description:</strong> {hvEnterprises.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {hvEnterprises.businessType}</p>
                            <p><strong>Main Products:</strong> {hvEnterprises.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default HvEnterprisesComp;
