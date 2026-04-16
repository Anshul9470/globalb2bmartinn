import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Adjust the import path as necessary
import './onioncomp.css'; // Adjust the CSS file path as necessary

const GirjeLubricantComp = () => {
    // Company data for Girje Lubricant Private Limited
    const companyData = {
        name: "Laxman",
        email: "laxman@gmail.com",
        mobileNumber: "9850223612",
        companyName: "Girje Lubricant Private Limited",
        productOrService: "Lubricant Oil",
        productDescribe: "Girje Lubricant Private Limited is a trusted name in the lubricant industry, providing high-quality oils for various industrial and automotive applications. Our lubricants are designed to ensure optimal performance and longevity of machinery and vehicles.",
        businessType: "Manufacturer",
        mainProducts: "Lubricant Oil, Automotive Oils",
        location: "Gujarat, India",
        logoUrl: "/assets/lubricant-logo.jpg", // Placeholder path to company logo image
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
                    {/* Display Girje Lubricant Private Limited information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={companyData.logoUrl} alt="Company Logo" />
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
                        <p><strong>Business Type:</strong> {companyData.businessType}</p>
                        <p><strong>Main Products:</strong> {companyData.mainProducts}</p>
                        <p><strong>Location:</strong> {companyData.location}</p>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default GirjeLubricantComp;
