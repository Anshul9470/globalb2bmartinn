import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Ensure to adjust CSS file path as necessary

const MittiwareIndiaComp = () => {
    // Company data for Mittiware India
    const mittiwareIndia = {
        name: "Mansi Kumari",
        companyName: "Mittiware India",
        productOrService: "Kitchen Equipment",
        productDescribe: "Mittiware India offers a wide range of high-quality kitchen equipment designed to meet various culinary needs and enhance your cooking experience.",
        businessType: "Manufacturer",
        mainProducts: "Kitchen Equipment",
        logoUrl: "/assets/kitchen1.jpeg" // Example path to company logo image
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
                    {/* Display Mittiware India company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={mittiwareIndia.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{mittiwareIndia.companyName}</h3>
                                <p><strong>Name:</strong> {mittiwareIndia.name}</p>
                                <p><strong>Description:</strong> {mittiwareIndia.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {mittiwareIndia.businessType}</p>
                            <p><strong>Main Products:</strong> {mittiwareIndia.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default MittiwareIndiaComp;
