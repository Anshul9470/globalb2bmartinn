import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Adjust the import path as necessary
import './onioncomp.css'; // Adjust the CSS file path as necessary

const BalkrushnaBiotechComp = () => {
    // Company data for Balkrushna Biotech Pvt Ltd
    const companyData = {
        name: "Sharad Bhange",
        email: "abc@gmail.com",
        mobileNumber: "9890852351",
        companyName: "Balkrushna Biotech Pvt Ltd",
        productOrService: "Jivamrut Slurry",
        productDescribe: "Balkrushna Biotech Pvt Ltd specializes in manufacturing and supplying Jivamrut Slurry, an organic fertilizer used in sustainable farming to enhance soil health and plant growth.",
        businessType: "Manufacturer",
        mainProducts: "Jivamrut Slurry, Organic Fertilizers",
        cityName: "Newasa",
        stateName: "Maharashtra",
        imgSrc: "/assets/slurry.jpg", // Placeholder path to company image
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
                    {/* Display Balkrushna Biotech Pvt Ltd information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={companyData.imgSrc} alt="Company Image" />
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
                        <p><strong>Location:</strong> {companyData.cityName}, {companyData.stateName}</p>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default BalkrushnaBiotechComp;
