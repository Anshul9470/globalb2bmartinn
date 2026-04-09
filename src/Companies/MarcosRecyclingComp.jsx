import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Corrected import path
import './onioncomp.css'; // Adjust the CSS file path as necessary

const MarcosRecyclingComp = () => {
    // Company data for Marcos Recycling Pvt Ltd
    const marcosRecycling = {
        name: "Parhalad",
        email: "Marcosrecycling@gmail.com",
        mobileNumber: "8368032860",
        companyName: "Marcos Recycling Pvt Ltd",
        productOrService: "Scrap",
        productDescribe: "Marcos Recycling Pvt Ltd specializes in recycling scrap materials, providing efficient and eco-friendly recycling solutions.",
        businessType: "Recycler",
        mainProducts: "Metal Scrap, Plastic Scrap, Electronic Waste",
        logoUrl: "/assets/scrs.jpeg", // Example path to company logo image
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
                    {/* Display Marcos Recycling Pvt Ltd company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={marcosRecycling.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{marcosRecycling.companyName}</h3>
                                <p><strong>Name:</strong> {marcosRecycling.name}</p>
                                <p><strong>Description:</strong> {marcosRecycling.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {marcosRecycling.businessType}</p>
                            <p><strong>Main Products:</strong> {marcosRecycling.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default MarcosRecyclingComp;
