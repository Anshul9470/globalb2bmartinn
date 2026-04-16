import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // CSS file for styling

const LidderEnterprisesComp = () => {
    // Company data for LIDDER ENTERPRISES
    const lidderEnterprises = {
        name: "Adil Qadri",
        companyName: "LIDDER ENTERPRISES",
        productOrService: "Dry Fruits Manufacturers",
        productDescribe: "LIDDER ENTERPRISES specializes in manufacturing high-quality dry fruits, offering a variety of nutritious and flavorful products.",
        businessType: "Manufacturer",
        mainProducts: "Dry Fruits",
        logoUrl: "/assets/dryfruits.jpeg" // Example path to company logo image
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
                    {/* Display LIDDER ENTERPRISES company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={lidderEnterprises.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{lidderEnterprises.companyName}</h3>
                                <p><strong>Name:</strong> {lidderEnterprises.name}</p>
                                <p><strong>Description:</strong> {lidderEnterprises.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {lidderEnterprises.businessType}</p>
                            <p><strong>Main Products:</strong> {lidderEnterprises.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default LidderEnterprisesComp;
