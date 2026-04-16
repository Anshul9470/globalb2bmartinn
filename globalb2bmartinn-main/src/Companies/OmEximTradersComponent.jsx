import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Ensure to adjust CSS file path as necessary

const OmEximTradersComp = () => {
    // Company data for Om Exim Traders
    const omEximTraders = {
        name: "Bimal Agarwal",
        companyName: "Om Exim Traders",
        productOrService: "Food Products",
        productDescribe: "Om Exim Traders offers a diverse range of high-quality food products, catering to various culinary needs and preferences.",
        businessType: "Supplier",
        mainProducts: "Food Products",
        logoUrl: "/assets/food1.jpeg" // Example path to company logo image
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
                    {/* Display Om Exim Traders company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={omEximTraders.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{omEximTraders.companyName}</h3>
                                <p><strong>Name:</strong> {omEximTraders.name}</p>
                                <p><strong>Description:</strong> {omEximTraders.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {omEximTraders.businessType}</p>
                            <p><strong>Main Products:</strong> {omEximTraders.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default OmEximTradersComp;
