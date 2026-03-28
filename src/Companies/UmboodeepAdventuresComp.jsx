import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Ensure the import path is correct
import './onioncomp.css'; // Adjust the CSS file path as necessary

const UmboodeepAdventuresComp = () => {
    // Company data for UMBOODEEP ADVENTURES & TOURS PVT LTD
    const companyData = {
        name: "ASHOK",
        email: "UMBOODEEPDVENTURES14325@gmail.com",
        mobileNumber: "9811945211",
        companyName: "UMBOODEEP ADVENTURES & TOURS PVT LTD",
        productOrService: "Adventures and Tours",
        productDescribe: "UMBOODEEP ADVENTURES & TOURS PVT LTD offers a wide range of adventure tours and travel experiences. Explore our exciting tours and adventure packages designed to provide unforgettable experiences.",
        businessType: "Service Provider",
        mainProducts: "Adventure Tours, Travel Packages",
        logoUrl: "/assets/tour1.jpeg", // Placeholder path to company logo image
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
                    {/* Display UMBOODEEP ADVENTURES & TOURS PVT LTD information */}
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

export default UmboodeepAdventuresComp;
