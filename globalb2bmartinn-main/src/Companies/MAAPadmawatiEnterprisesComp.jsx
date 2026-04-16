import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Adjust the import path as necessary
import './onioncomp.css'; // Adjust the CSS file path as necessary

const MAAPadmawatiEnterprisesComp = () => {
    // Company data for MAA PADMAWATI ENTERPRISES
    const maaPadmawatiEnterprises = {
        name: "Mr Manoj Jain",
        email: "jainmanojparakh@gmail.com",
        mobileNumber: "8657088657",
        companyName: "MAA PADMAWATI ENTERPRISES",
        productOrService: "HDPE Plastic Barrel Supplier",
        productDescribe: "MAA PADMAWATI ENTERPRISES specializes in supplying high-quality HDPE plastic barrels suitable for various industrial and commercial uses.",
        businessType: "Supplier",
        mainProducts: "HDPE Plastic Barrels",
        logoUrl: "/assets/barel2.jpeg" // Example path to company logo image
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
                    {/* Display MAA PADMAWATI ENTERPRISES company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={maaPadmawatiEnterprises.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{maaPadmawatiEnterprises.companyName}</h3>
                                <p><strong>Name:</strong> {maaPadmawatiEnterprises.name}</p>
                                <p><strong>Description:</strong> {maaPadmawatiEnterprises.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {maaPadmawatiEnterprises.businessType}</p>
                            <p><strong>Main Products:</strong> {maaPadmawatiEnterprises.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default MAAPadmawatiEnterprisesComp;
