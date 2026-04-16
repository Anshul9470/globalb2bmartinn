import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Corrected import path
import './onioncomp.css'; // Adjust the CSS file path as necessary

const WalavalkarMasaleComp = () => {
    // Company data for Walavalkar Masale
    const walavalkarMasale = {
        name: "Janardhan Walavalkar",
        email: "info@walavalkarmasale.com",
        mobileNumber: "9004144001",
        companyName: "Walavalkar Masale",
        productOrService: "Spices",
        productDescribe: "Walavalkar Masale specializes in providing a wide range of high-quality spices. Our products are crafted to enhance the flavor and aroma of your dishes with authentic and fresh ingredients.",
        businessType: "Supplier",
        mainProducts: "Spices",
        logoUrl: "/assets/walavalkar-masale-logo.jpeg", // Example path to company logo image
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
                    {/* Display Walavalkar Masale company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={walavalkarMasale.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{walavalkarMasale.companyName}</h3>
                                <p><strong>Name:</strong> {walavalkarMasale.name}</p>
                                <p><strong>Description:</strong> {walavalkarMasale.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {walavalkarMasale.businessType}</p>
                            <p><strong>Main Products:</strong> {walavalkarMasale.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default WalavalkarMasaleComp;
