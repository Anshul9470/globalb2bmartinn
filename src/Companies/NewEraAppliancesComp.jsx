import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Ensure this import path is correct
import './onioncomp.css'; // Adjust the CSS file path as necessary

const NewEraAppliancesComp = () => {
    // Company data for New Era Appliances
    const companyData = {
        name: "New Era Appliances",
        email: "default@example.com", // Placeholder email
        mobileNumber: "defaultNumber", // Placeholder mobile number
        companyName: "New Era Appliances",
        productOrService: "Kitchen Ware",
        productDescribe: "New Era Appliances offers a wide range of kitchen appliances, cookware, and utensils designed to enhance your cooking experience. Our products are known for their quality and innovation, making them a popular choice for modern kitchens.",
        businessType: "Retailer", // Adjust if necessary
        mainProducts: "Kitchen Appliances, Cookware, Utensils",
        logoUrl: "/assets/footerimgnew.png", // Placeholder path to company logo image
        altText: "Kitchen Ware - New Era Appliances",

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
                    {/* Display New Era Appliances information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={companyData.logoUrl} alt={companyData.altText} />
                            </div>
                            <div className="company-details">
                                <h3>{companyData.companyName}</h3>
                                <p><strong>Description:</strong> {companyData.productDescribe}</p>

                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Additional info */}
                        <p><strong>Business Type:</strong> {companyData.businessType}</p>
                        <p><strong>Main Products:</strong> {companyData.mainProducts}</p>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default NewEraAppliancesComp;
