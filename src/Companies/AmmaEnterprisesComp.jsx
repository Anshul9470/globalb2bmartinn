import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Corrected import path
import './onioncomp.css'; // Adjust the CSS file path as necessary

const AmmaEnterprisesComp = () => {
    // Company data for Amma Enterprises
    const ammaEnterprises = {
        name: "sajjad",
        email: "sajjad12345@gmail.com",
        mobileNumber: "8169391382",
        companyName: "Amma Enterprises",
        productOrService: "Furniture",
        productDescribe: "Amma Enterprises specializes in high-quality furniture, offering a diverse range of products to enhance your living and working spaces.",
        businessType: "Manufacturer",
        mainProducts: "Living Room Furniture, Office Furniture, Bedroom Furniture",
        logoUrl: "/assets/furniture4.jpeg", // Example path to company logo image
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
                    {/* Display Amma Enterprises company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={ammaEnterprises.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{ammaEnterprises.companyName}</h3>
                                <p><strong>Name:</strong> {ammaEnterprises.name}</p>
                                <p><strong>Description:</strong> {ammaEnterprises.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {ammaEnterprises.businessType}</p>
                            <p><strong>Main Products:</strong> {ammaEnterprises.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default AmmaEnterprisesComp;
