import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Adjust the import path as necessary
import './onioncomp.css'; // Adjust the CSS file path as necessary

const ForeverGreenNurseryComp = () => {
    // Company data for Forever Green Nursery
    const foreverGreenNursery = {
        name: "Aamir hashmi",
        email: "Aamir123@gmail.com",
        mobileNumber: "9311174425",
        companyName: "Forever Green Nursery",
        productOrService: "Nursery",
        productDescribe: "Forever Green Nursery offers a wide range of plants, trees, and gardening supplies to help you create and maintain a beautiful garden.",
        businessType: "Nursery",
        mainProducts: "Plants, Trees, Gardening Supplies",
        logoUrl: "/assets/plant6.jpeg" // Example path to company logo image
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
                    {/* Display Forever Green Nursery company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={foreverGreenNursery.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{foreverGreenNursery.companyName}</h3>
                                <p><strong>Name:</strong> {foreverGreenNursery.name}</p>
                                <p><strong>Description:</strong> {foreverGreenNursery.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {foreverGreenNursery.businessType}</p>
                            <p><strong>Main Products:</strong> {foreverGreenNursery.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default ForeverGreenNurseryComp;
