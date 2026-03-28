import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Adjust the CSS file path as necessary

const UmangBadiFactoryTextileComp = () => {
    // Company data for Umang & Badi Factory Textile
    const umangBadiFactoryTextile = {
        name: "Nilesh Aggarwal",
        email: "nileshaggarwal@gmail.com",
        mobileNumber: "9898176440",
        companyName: "Umang & Badi Factory Textile",
        productOrService: "Jeans Manufacturing",
        productDescribe: "Umang & Badi Factory Textile specializes in high-quality jeans manufacturing, offering a range of stylish and durable jeans for various fashion needs.",
        businessType: "Manufacturer",
        mainProducts: "Jeans",
        logoUrl: "/assets/jeans1.jpeg" // Example path to company logo image
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
                    {/* Display Umang & Badi Factory Textile company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={umangBadiFactoryTextile.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{umangBadiFactoryTextile.companyName}</h3>
                                <p><strong>Name:</strong> {umangBadiFactoryTextile.name}</p>
                                <p><strong>Description:</strong> {umangBadiFactoryTextile.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {umangBadiFactoryTextile.businessType}</p>
                            <p><strong>Main Products:</strong> {umangBadiFactoryTextile.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default UmangBadiFactoryTextileComp;
