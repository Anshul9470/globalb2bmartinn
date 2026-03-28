import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Ensure to adjust CSS file path as necessary

const ABKGlobalImpexComp = () => {
    // Company data for ABK Global Impex Pvt Ltd
    const abkGlobalImpex = {
        name: "Bageswari",
        companyName: "ABK Global Impex Pvt Ltd",
        productOrService: "Grocery",
        productDescribe: "ABK Global Impex Pvt Ltd offers a wide range of high-quality grocery products, ensuring freshness and value for all your household and commercial needs.",
        businessType: "Supplier",
        mainProducts: "Grocery",
        logoUrl: "/assets/grocery.jpeg" // Example path to company logo image
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
                    {/* Display ABK Global Impex Pvt Ltd company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={abkGlobalImpex.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{abkGlobalImpex.companyName}</h3>
                                <p><strong>Name:</strong> {abkGlobalImpex.name}</p>
                                <p><strong>Description:</strong> {abkGlobalImpex.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {abkGlobalImpex.businessType}</p>
                            <p><strong>Main Products:</strong> {abkGlobalImpex.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default ABKGlobalImpexComp;
