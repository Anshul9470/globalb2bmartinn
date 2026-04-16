import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Ensure to adjust CSS file path as necessary

const ShardaIndustriesComp = () => {
    // Company data for Sharda Industries
    const shardaIndustries = {
        name: "Arpit Sarode",
        companyName: "Sharda Industries",
        productOrService: "Welding Electrodes",
        productDescribe: "Sharda Industries specializes in high-quality welding electrodes, providing reliable and efficient solutions for various welding applications.",
        businessType: "Manufacturer",
        mainProducts: "Welding Electrodes",
        logoUrl: "/assets/welding_electrodes.jpeg" // Example path to company logo image
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
                    {/* Display Sharda Industries company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={shardaIndustries.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{shardaIndustries.companyName}</h3>
                                <p><strong>Name:</strong> {shardaIndustries.name}</p>
                                <p><strong>Description:</strong> {shardaIndustries.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {shardaIndustries.businessType}</p>
                            <p><strong>Main Products:</strong> {shardaIndustries.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default ShardaIndustriesComp;
