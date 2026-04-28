import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Ensure to adjust CSS file path as necessary

const ShreeShivShaktiComp = () => {
    // Company data for Shree Shiv Shakti Trading Co
    const shreeShivShakti = {
        name: "Mahesh Panday",
        companyName: "SHREE SHIV SHAKTI TRADING CO",
        productOrService: "Iron Scrap Trader",
        productDescribe: "Shree Shiv Shakti Trading Co specializes in trading high-quality iron scrap, providing reliable sourcing and delivery services.",
        businessType: "Trader",
        mainProducts: "Iron Scrap",
        logoUrl: "/assets/scr1.jpg" // Example path to company logo image
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
                    {/* Display Shree Shiv Shakti Trading Co company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={shreeShivShakti.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{shreeShivShakti.companyName}</h3>
                                <p><strong>Name:</strong> {shreeShivShakti.name}</p>
                                <p><strong>Description:</strong> {shreeShivShakti.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {shreeShivShakti.businessType}</p>
                            <p><strong>Main Products:</strong> {shreeShivShakti.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default ShreeShivShaktiComp;
