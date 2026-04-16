import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Corrected import path
import './onioncomp.css'; // Adjust the CSS file path as necessary

const ViraniRadiantComp = () => {
    // Company data for Virani Radiant
    const viraniRadiant = {
        name: "Virani",
        email: "Viraniradiant@gmail.com",
        mobileNumber: "9601987387",
        companyName: "Virani Radiant",
        productOrService: "LED Candles",
        productDescribe: "Virani Radiant specializes in LED candles that combine elegance with functionality, offering a safe and stylish alternative to traditional candles for any occasion.",
        businessType: "Manufacturer",
        mainProducts: "LED Candles",
        logoUrl: "/assets/virani-radiant-logo.jpeg", // Example path to company logo image
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
                    {/* Display Virani Radiant company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={viraniRadiant.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{viraniRadiant.companyName}</h3>
                                <p><strong>Name:</strong> {viraniRadiant.name}</p>
                                <p><strong>Description:</strong> {viraniRadiant.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {viraniRadiant.businessType}</p>
                            <p><strong>Main Products:</strong> {viraniRadiant.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default ViraniRadiantComp;
