import React from "react";
import { Link } from "react-router-dom";
import './onioncomp.css'; // CSS file for styling
import CompanyForm from "./Companyform";

const VibrantColortechComp = () => {

    const vibrantColortechCompany = {
        name: "mayank",
        companyName: "VIBRANT COLORTECH PRIVATE LIMITED",
        productOrService: "masterbatches",
        productDescribe: "VIBRANT COLORTECH PRIVATE LIMITED specializes in manufacturing masterbatches, offering a wide range of color solutions for plastics and polymers.",
        businessType: "Manufacturer",
        mainProducts: "Masterbatches",
        logoUrl: "/assets/masterbatches.jpeg" // Example path to company logo image
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
                    {/* Display VIBRANT COLORTECH PRIVATE LIMITED company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={vibrantColortechCompany.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{vibrantColortechCompany.companyName}</h3>
                                <p><strong>Name:</strong> {vibrantColortechCompany.name}</p>
                                <p><strong>Description:</strong> {vibrantColortechCompany.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {vibrantColortechCompany.businessType}</p>
                            <p><strong>Main Products:</strong> {vibrantColortechCompany.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default VibrantColortechComp;
