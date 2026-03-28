import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Corrected import path
import './onioncomp.css'; // Adjust the CSS file path as necessary

const PinkRootComp = () => {
    // Company data for Pink Root
    const pinkRoot = {
        name: "Dhiraj",
        email: "Dhiraj123@gmail.com",
        mobileNumber: "9911555691",
        companyName: "Pink Root",
        productOrService: "Cosmetic & Skincare",
        productDescribe: "Pink Root specializes in premium cosmetic and skincare products designed to enhance natural beauty and provide effective skincare solutions.",
        businessType: "Retailer",
        mainProducts: "Skincare Products, Makeup Products",
        logoUrl: "/assets/cos.jpeg", // Example path to company logo image
        whatsappConfirmed: true,
        leadsViewed: 0
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
                    {/* Display Pink Root company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={pinkRoot.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{pinkRoot.companyName}</h3>
                                <p><strong>Name:</strong> {pinkRoot.name}</p>
                                <p><strong>Description:</strong> {pinkRoot.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {pinkRoot.businessType}</p>
                            <p><strong>Main Products:</strong> {pinkRoot.mainProducts}</p>

                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default PinkRootComp;
