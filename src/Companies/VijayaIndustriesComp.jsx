import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // CSS file for styling

const VijayaIndustriesComp = () => {
    // Company data for VIJAYA INDUSTRIES
    const vijayaIndustries = {
        name: "DVNN Kishore",
        companyName: "VIJAYA INDUSTRIES",
        productOrService: "Manufacturer of Wire Mesh",
        productDescribe: "VIJAYA INDUSTRIES is known for manufacturing high-quality wire mesh products, catering to industrial and commercial needs with precision-engineered solutions.",
        businessType: "Manufacturer",
        mainProducts: "Wire Mesh",
        logoUrl: "/assets/vs-5.jpeg" // Example path to company logo image
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
                    {/* Display VIJAYA INDUSTRIES company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={vijayaIndustries.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{vijayaIndustries.companyName}</h3>
                                <p><strong>Name:</strong> {vijayaIndustries.name}</p>
                                <p><strong>Description:</strong> {vijayaIndustries.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {vijayaIndustries.businessType}</p>
                            <p><strong>Main Products:</strong> {vijayaIndustries.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default VijayaIndustriesComp;
