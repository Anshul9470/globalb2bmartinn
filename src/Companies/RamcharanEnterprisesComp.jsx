import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Adjust the CSS file path as necessary

const RamcharanEnterprisesComp = () => {
    // Company data for Ramcharan Enterprises
    const ramcharanEnterprises = {
        name: "Sunjeeb Gangwar",
        companyName: "Ramcharan Enterprises",
        productOrService: "Iron Scrap",
        productDescribe: "Ramcharan Enterprises specializes in dealing with high-quality iron scrap, offering recycling and trading services for various industrial needs.",
        businessType: "Supplier",
        mainProducts: "Iron Scrap",
        logoUrl: "/assets/iron-scrap.jpg" // Example path to company logo image
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
                    {/* Display Ramcharan Enterprises company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={ramcharanEnterprises.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{ramcharanEnterprises.companyName}</h3>
                                <p><strong>Name:</strong> {ramcharanEnterprises.name}</p>
                                <p><strong>Description:</strong> {ramcharanEnterprises.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {ramcharanEnterprises.businessType}</p>
                            <p><strong>Main Products:</strong> {ramcharanEnterprises.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default RamcharanEnterprisesComp;
