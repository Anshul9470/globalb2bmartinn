import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Ensure the import path is correct
import './onioncomp.css'; // Adjust the CSS file path as necessary

const OmWoodsComp = () => {
    // Company data for Om Woods
    const companyData = {
        name: "Om Woods",
        email: "dhp.mumbai@gmail.com",
        mobileNumber: "9172829917",
        companyName: "Om Woods",
        productOrService: "Chair Manufacturer",
        productDescribe: "Om Woods specializes in crafting high-quality chairs for various purposes. Our range includes ergonomic office chairs, comfortable dining chairs, and stylish outdoor seating solutions.",
        businessType: "Manufacturer",
        mainProducts: "Chairs",
        logoUrl: "/assets/furniture13.jpeg", // Placeholder path to company logo image
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
                    {/* Display Om Woods information */}
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
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default OmWoodsComp;
