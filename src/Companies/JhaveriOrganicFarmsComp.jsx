import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Adjust the import path as necessary
import './onioncomp.css'; // Adjust the CSS file path as necessary

const JhaveriOrganicFarmsComp = () => {
    // Company data for Jhaveri Organic Farms
    const companyData = {
        name: "Rajesh Jhaveri",
        email: "abc@gmail.com",
        mobileNumber: "9825040326",
        companyName: "Jhaveri Organic Farms",
        productOrService: "Organic Food Grains, Cereals, Pulses",
        productDescribe: "Jhaveri Organic Farms is committed to providing high-quality organic food grains, cereals, and pulses. Our products are cultivated sustainably and ethically to ensure the highest standards of nutrition and taste.",
        businessType: "Manufacturer & Supplier",
        mainProducts: "Organic Food Grains, Cereals, Pulses",
        location: "Vadodara, Gujrat, India",
        logoUrl: "/assets/agro18.jpg", // Placeholder path to company logo image
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
                    {/* Display Jhaveri Organic Farms information */}
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
                        <p><strong>Location:</strong> {companyData.location}</p>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default JhaveriOrganicFarmsComp;
