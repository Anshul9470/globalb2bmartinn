import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // CSS file for styling

const JayDadaEnterpriseComp = () => {
    // Company data for JAY DADA ENTERPRISE
    const jayDadaEnterprise = {
        name: "Shailesh",
        companyName: "JAY DADA ENTERPRISE",
        productOrService: "Manufacturer of RCC Cover Blocks",
        productDescribe: "JAY DADA ENTERPRISE specializes in manufacturing high-quality RCC Cover Blocks, ensuring durability and strength for construction purposes.",
        businessType: "Manufacturer",
        mainProducts: "RCC Cover Blocks",
        logoUrl: "/assets/vs-7.jpeg." // Example path to company logo image
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
                    {/* Display JAY DADA ENTERPRISE company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={jayDadaEnterprise.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{jayDadaEnterprise.companyName}</h3>
                                <p><strong>Name:</strong> {jayDadaEnterprise.name}</p>
                                <p><strong>Description:</strong> {jayDadaEnterprise.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {jayDadaEnterprise.businessType}</p>
                            <p><strong>Main Products:</strong> {jayDadaEnterprise.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default JayDadaEnterpriseComp;
