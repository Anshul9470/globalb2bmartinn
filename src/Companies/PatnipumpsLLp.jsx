import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Ensure this import path is correct
import './onioncomp.css'; // Adjust the CSS file path as necessary

const PatniPumpsLLPComp = () => {
    // Company data for PATNI PUMPS LLP
    const companyData = {
        name: "Mr. Upendra Mani Tripathi",
        email: "info@patnipump.com",
        mobileNumber: "9811778912",
        companyName: "PATNI PUMPS LLP",
        productOrService: "Water Pump Manufacturer",
        productDescribe: "PATNI PUMPS LLP specializes in manufacturing high-quality water pumps. Our pumps are designed for durability and efficiency, catering to a variety of needs including agricultural, industrial, and domestic applications. We offer customized solutions to ensure optimal performance and reliability.",
        businessType: "Manufacturer",
        mainProducts: "Water Pumps",
        logoUrl: "/assets/waterpump.jpeg", // Example path to company logo image
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
                    {/* Display PATNI PUMPS LLP information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={companyData.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{companyData.companyName}</h3>
                                <p><strong>Name:</strong> {companyData.name}</p>
                                <p><strong>Description:</strong> {companyData.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {companyData.businessType}</p>
                            <p><strong>Main Products:</strong> {companyData.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default PatniPumpsLLPComp;
