import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Adjust the CSS file path as necessary

const VerticalSupportsComp = () => {
    // Company data for Vertical Supports
    const verticalSupports = {
        name: "Ayush Raj",
        email: "info@verticalsupports.com",
        mobileNumber: "8076226141",
        companyName: "Vertical Supports",
        productOrService: "Agro Products",
        productDescribe: "Vertical Supports specializes in high-quality agro products, providing a wide range of solutions to support agricultural needs with a focus on sustainability and innovation.",
        businessType: "Manufacturer",
        mainProducts: "Agro Products",
        logoUrl: "/assets/agro_products.jpeg" // Example path to company logo image
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
                    {/* Display Vertical Supports company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={verticalSupports.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{verticalSupports.companyName}</h3>
                                <p><strong>Name:</strong> {verticalSupports.name}</p>
                                <p><strong>Description:</strong> {verticalSupports.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {verticalSupports.businessType}</p>
                            <p><strong>Main Products:</strong> {verticalSupports.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default VerticalSupportsComp;
