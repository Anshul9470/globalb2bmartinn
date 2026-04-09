import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Ensure to adjust CSS file path as necessary

const AbhinavHodlaComp = () => {
    // Company data for Abhinav Hodla
    const abhinavHodla = {
        name: "Abhinav Hodla",
        companyName: "Abhinav Hodla",
        productOrService: "Sugarcane",
        productDescribe: "Abhinav Hodla specializes in the cultivation and supply of high-quality sugarcane, catering to various industries and ensuring premium quality produce.",
        businessType: "Supplier",
        mainProducts: "Sugarcane",
        logoUrl: "/assets/sugarcane.jpeg" // Example path to company logo image
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
                    {/* Display Abhinav Hodla company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={abhinavHodla.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{abhinavHodla.companyName}</h3>
                                <p><strong>Name:</strong> {abhinavHodla.name}</p>
                                <p><strong>Description:</strong> {abhinavHodla.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {abhinavHodla.businessType}</p>
                            <p><strong>Main Products:</strong> {abhinavHodla.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default AbhinavHodlaComp;
