import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Adjust the CSS file path as necessary

const MahadevEnterprisesComp = () => {
    // Company data for Mahadev Enterprises
    const mahadevEnterprises = {
        name: "Rajesh Dharaviya",
        email: "mahadeventerprises@gmail.com",
        mobileNumber: "7285852080",
        companyName: "Mahadev Enterprises",
        productOrService: "SS Door Handles",
        productDescribe: "Mahadev Enterprises specializes in high-quality stainless steel (SS) door handles, providing durable and stylish solutions for both residential and commercial properties.",
        businessType: "Supplier",
        mainProducts: "SS Door Handles",
        logoUrl: "/assets/handle1.jpeg" // Example path to company logo image
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
                    {/* Display Mahadev Enterprises company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={mahadevEnterprises.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{mahadevEnterprises.companyName}</h3>
                                <p><strong>Name:</strong> {mahadevEnterprises.name}</p>
                                <p><strong>Description:</strong> {mahadevEnterprises.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {mahadevEnterprises.businessType}</p>
                            <p><strong>Main Products:</strong> {mahadevEnterprises.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default MahadevEnterprisesComp;
