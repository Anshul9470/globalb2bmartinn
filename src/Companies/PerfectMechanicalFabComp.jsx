import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Corrected import path
import './onioncomp.css'; // Adjust the CSS file path as necessary

const PerfectMechanicalFabComp = () => {
    // Company data for PERFECT MECHANICAL & FABRICATION WORK
    const perfectMechanicalFab = {
        name: "Mr. Monish.K Malek",
        email: "perfectfabwork@gmail.com",
        mobileNumber: "9723108082",
        companyName: "PERFECT MECHANICAL & FABRICATION WORK",
        productOrService: "Industrial lift & crane manufacturer",
        productDescribe: "PERFECT MECHANICAL & FABRICATION WORK specializes in manufacturing high-quality industrial lifts and cranes. We ensure reliability and efficiency in all our products.",
        businessType: "Manufacturer",
        mainProducts: "Industrial Lifts, Cranes",
        logoUrl: "/assets/cranes.jpeg", // Example path to company logo image
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
                    {/* Display PERFECT MECHANICAL & FABRICATION WORK company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={perfectMechanicalFab.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{perfectMechanicalFab.companyName}</h3>
                                <p><strong>Name:</strong> {perfectMechanicalFab.name}</p>
                                <p><strong>Description:</strong> {perfectMechanicalFab.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {perfectMechanicalFab.businessType}</p>
                            <p><strong>Main Products:</strong> {perfectMechanicalFab.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default PerfectMechanicalFabComp;
