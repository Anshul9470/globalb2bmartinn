import React from "react";
import { Link } from "react-router-dom";
import './onioncomp.css'; // CSS file for styling
import CompanyForm from "./Companyform";

const SandeshDurgawaleComp = () => {

    const sandeshDurgawaleCompany = {
        name: "Sandesh Durgawale",
        companyName: "Sandesh Durgawale",
        productOrService: "Onion Seeds",
        productDescribe: "Sandesh Durgawale specializes in providing high-quality onion seeds, catering to agricultural needs with reliable and tested varieties.",
        businessType: "Supplier",
        mainProducts: "Onion Seeds",
        logoUrl: "/assets/yellowonion.jpeg" // Example path to company logo image
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
                    {/* Display Sandesh Durgawale company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={sandeshDurgawaleCompany.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{sandeshDurgawaleCompany.companyName}</h3>
                                <p><strong>Name:</strong> {sandeshDurgawaleCompany.name}</p>
                                <p><strong>Description:</strong> {sandeshDurgawaleCompany.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {sandeshDurgawaleCompany.businessType}</p>
                            <p><strong>Main Products:</strong> {sandeshDurgawaleCompany.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default SandeshDurgawaleComp;
