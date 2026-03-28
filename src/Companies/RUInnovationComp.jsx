import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Corrected import path
import './onioncomp.css'; // Adjust the CSS file path as necessary

const RUInnovationComp = () => {
    // Company data for RU Innovation
    const ruInnovation = {
        name: "Abhishek Chaurasia",
        email: "abhishekchaurasia0807@gmail.com",
        mobileNumber: "8354059593",
        companyName: "RU INNOVATION",
        productOrService: "Candles",
        productDescribe: "RU INNOVATION offers a diverse range of high-quality candles, designed to enhance ambiance and provide a soothing experience.",
        businessType: "Supplier",
        mainProducts: "Scented Candles, Decorative Candles, Aromatherapy Candles",
        logoUrl: "/assets/ru-innovation-logo.jpeg", // Example path to company logo image
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
                    {/* Display RU Innovation company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={ruInnovation.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{ruInnovation.companyName}</h3>
                                <p><strong>Name:</strong> {ruInnovation.name}</p>
                                <p><strong>Description:</strong> {ruInnovation.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {ruInnovation.businessType}</p>
                            <p><strong>Main Products:</strong> {ruInnovation.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default RUInnovationComp;
