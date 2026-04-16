import React from "react";
import { Link } from "react-router-dom";
import './onioncomp.css'; // CSS file for styling
import CompanyForm from "./Companyform";

const MSHalaiComp = () => {

    const mshCompany = {
        name: "mustafa halai",
        companyName: "M.S HALAI",
        productOrService: "Garden Pipes",
        productDescribe: "M.S HALAI specializes in high-quality garden pipes, providing durable and efficient solutions for gardening and irrigation needs.",
        businessType: "Supplier",
        mainProducts: "Garden Pipes, Irrigation Solutions",
        logoUrl: "/assets/pipe1.jpg" // Example path to company logo image
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
                    {/* Display M.S HALAI company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={mshCompany.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{mshCompany.companyName}</h3>
                                <p><strong>Name:</strong> {mshCompany.name}</p>
                                <p><strong>Description:</strong> {mshCompany.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {mshCompany.businessType}</p>
                            <p><strong>Main Products:</strong> {mshCompany.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default MSHalaiComp;
