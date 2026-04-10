import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Adjust the CSS file path as necessary

const VaradSalesCorporationComp = () => {
    // Company data for Varad Sales Corporation
    const varadSalesCorporation = {
        name: "Varad Ramesh Higmire",
        email: "varadrh7751@gmail.com",
        mobileNumber: "7276897751",
        companyName: "Varad Sales Corporation",
        productOrService: "Brown Raisins",
        productDescribe: "Varad Sales Corporation specializes in providing high-quality brown raisins, known for their natural sweetness and rich flavor, suitable for a variety of culinary uses.",
        businessType: "Distributor",
        mainProducts: "Brown Raisins",
        logoUrl: "/assets/raisins.jpeg" // Example path to company logo image
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
                    {/* Display Varad Sales Corporation company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={varadSalesCorporation.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{varadSalesCorporation.companyName}</h3>
                                <p><strong>Name:</strong> {varadSalesCorporation.name}</p>
                                <p><strong>Description:</strong> {varadSalesCorporation.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {varadSalesCorporation.businessType}</p>
                            <p><strong>Main Products:</strong> {varadSalesCorporation.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default VaradSalesCorporationComp;
