import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Corrected import path
import './onioncomp.css'; // Adjust the CSS file path as necessary

const InanulEnterprisesComp = () => {
    // Company data for Inanul Enterprises
    const inanulEnterprises = {
        name: "inanul",
        email: "inanul123@gmail.com",
        mobileNumber: "9007891737",
        companyName: "Inanul Enterprises",
        productOrService: "Electronic items",
        productDescribe: "Inanul Enterprises offers a diverse range of electronic items designed to meet your needs. From the latest gadgets to essential electronics, we provide quality products to enhance your lifestyle.",
        businessType: "Supplier",
        mainProducts: "Electronic Items",
        logoUrl: "/assets/elec8.jpeg", // Example path to company logo image
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
                    {/* Display Inanul Enterprises company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={inanulEnterprises.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{inanulEnterprises.companyName}</h3>
                                <p><strong>Name:</strong> {inanulEnterprises.name}</p>
                                <p><strong>Description:</strong> {inanulEnterprises.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {inanulEnterprises.businessType}</p>
                            <p><strong>Main Products:</strong> {inanulEnterprises.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default InanulEnterprisesComp;
