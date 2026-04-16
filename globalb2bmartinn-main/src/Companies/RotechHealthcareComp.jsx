import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Adjust the import path as necessary
import './onioncomp.css'; // Adjust the CSS file path as necessary

const RotechHealthcareComp = () => {
    // Company data for Rotech Healthcare
    const companyData = {
        _id: "unique-id-rotech-healthcare", // Replace with a unique ID if needed
        name: "neha",
        email: "neha201@gmail.com",
        mobileNumber: "9081788828",
        companyName: "Rotech Healthcare",
        productOrService: "the adult diaper pad for men is a baby diaper that is 3 times enlarged, with the waistline glued together",
        imgSrc: "/assets/diaper2.jpeg",  // Placeholder for image path
        mainProducts: "Diapers, Healthcare Products",
        altText: "Rotech Healthcare - Diapers and Healthcare Products",
        years: "5 YRS",  // Placeholder for years of experience
        location: "Delhi, India",  // Placeholder for location
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
                    {/* Display Rotech Healthcare information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={companyData.imgSrc} alt={companyData.altText} />
                            </div>
                            <div className="company-details">
                                <h3>{companyData.companyName}</h3>
                                <p><strong>Description:</strong> {companyData.productOrService}</p>

                                <p><strong>Location:</strong> {companyData.location}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <p><strong>Main Products:</strong> {companyData.mainProducts}</p>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default RotechHealthcareComp;
