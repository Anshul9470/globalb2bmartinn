import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Adjust the CSS file path as necessary

const OceanVidyaComp = () => {
    // Company data for Ocean Vidya Pipe Udyog
    const oceanVidya = {
        name: "Ocean Vidya",
        companyName: "Ocean Vidya Pipe Udyog",
        productOrService: "Pipes & Fittings",
        productDescribe: "Ocean Vidya Pipe Udyog specializes in manufacturing high-quality pipes and fittings, providing reliable solutions for various industrial and construction needs.",
        businessType: "Manufacturer",
        mainProducts: "Pipes, Fittings",
        logoUrl: "/assets/pipe1.jpeg" // Example path to company logo image
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
                    {/* Display Ocean Vidya Pipe Udyog company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={oceanVidya.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{oceanVidya.companyName}</h3>
                                <p><strong>Name:</strong> {oceanVidya.name}</p>
                                <p><strong>Description:</strong> {oceanVidya.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {oceanVidya.businessType}</p>
                            <p><strong>Main Products:</strong> {oceanVidya.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default OceanVidyaComp;
