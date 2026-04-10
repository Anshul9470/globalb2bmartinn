import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Adjust the CSS file path as necessary

const SaifuddinEnterpriseComp = () => {
    // Company data for Saifuddin Enterprise
    const saifuddinEnterprise = {
        name: "Mohd Saifuddin",
        email: "sk047932@gmail.com",
        mobileNumber: "9027284481",
        companyName: "SAIFUDDIN ENTERPRISE",
        productOrService: "Iron & Paper Scrap",
        productDescribe: "Saifuddin Enterprise deals in sourcing and supplying iron and paper scrap materials, serving various industrial sectors.",
        businessType: "Supplier",
        mainProducts: "Iron Scrap, Paper Scrap",
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
                    {/* Display Saifuddin Enterprise company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={saifuddinEnterprise.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{saifuddinEnterprise.companyName}</h3>
                                <p><strong>Name:</strong> {saifuddinEnterprise.name}</p>
                                <p><strong>Description:</strong> {saifuddinEnterprise.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {saifuddinEnterprise.businessType}</p>
                            <p><strong>Main Products:</strong> {saifuddinEnterprise.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default SaifuddinEnterpriseComp;
