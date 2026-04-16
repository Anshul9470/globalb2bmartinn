import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Corrected import path
import './onioncomp.css'; // Adjust the CSS file path as necessary

const VarshaFabricationComp = () => {
    // Company data for Varsha Fabrication
    const varshaFabrication = {
        name: "gansyam agarwal",
        email: "agarwal123@gmail.com",
        mobileNumber: "9425850043",
        companyName: "Varsha Fabrication",
        productOrService: "Fabrication Services",
        productDescribe: "Varsha Fabrication specializes in high-quality fabrication services, offering custom solutions to meet your specific needs. Our skilled team ensures precision and excellence in every project.",
        businessType: "Service Provider",
        mainProducts: "Fabrication Services",
        logoUrl: "/assets/varsha-fabrication-logo.jpeg", // Example path to company logo image
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
                    {/* Display Varsha Fabrication company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={varshaFabrication.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{varshaFabrication.companyName}</h3>
                                <p><strong>Name:</strong> {varshaFabrication.name}</p>
                                <p><strong>Description:</strong> {varshaFabrication.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {varshaFabrication.businessType}</p>
                            <p><strong>Main Products:</strong> {varshaFabrication.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default VarshaFabricationComp;
