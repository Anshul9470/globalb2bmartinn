import React from "react";
import { Link } from "react-router-dom";
import './onioncomp.css'; // CSS file for styling
import CompanyForm from "./Companyform";

const JindalPlasticIndustriesComp = () => {
    // Company data for JINDAL PLASTIC INDUSTRIES
    const jindalPlasticIndustries = {
        name: "Sunil Jindal",
        companyName: "JINDAL PLASTIC INDUSTRIES",
        productOrService: "Suitcase Manufacturer",
        productDescribe: "JINDAL PLASTIC INDUSTRIES specializes in manufacturing high-quality suitcases, offering a range of durable and stylish travel solutions.",
        businessType: "Manufacturer",
        mainProducts: "Suitcases",
        logoUrl: "/assets/suitcase.jpeg" // Example path to company logo image
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
                    {/* Display JINDAL PLASTIC INDUSTRIES company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={jindalPlasticIndustries.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{jindalPlasticIndustries.companyName}</h3>
                                <p><strong>Name:</strong> {jindalPlasticIndustries.name}</p>
                                <p><strong>Description:</strong> {jindalPlasticIndustries.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {jindalPlasticIndustries.businessType}</p>
                            <p><strong>Main Products:</strong> {jindalPlasticIndustries.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default JindalPlasticIndustriesComp;
