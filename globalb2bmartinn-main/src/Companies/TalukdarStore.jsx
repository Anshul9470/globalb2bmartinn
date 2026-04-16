import React, { useState } from "react";

import { Link } from "react-router-dom";
import './onioncomp.css'; // CSS file for styling
import CompanyForm from "./Companyform";

const TalukdarStoreComp = () => {

    const talukdarStoreCompany = {
        name: "Hafizur Rahman Talukdar",
        companyName: "Talukdar Store",
        productOrService: "Medicines supplier wholesaler",
        productDescribe: 'Talukdar Store is a trusted supplier and wholesaler of various medicines, ensuring high-quality pharmaceutical products for healthcare needs.',
        businessType: "Wholesaler",
        mainProducts: "Medicines, Pharmaceutical Supplies",
        logoUrl: "/assets/med1.jpg"
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
                    {/* Display Talukdar Store company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={talukdarStoreCompany.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{talukdarStoreCompany.companyName}</h3>
                                <p><strong>Name:</strong> {talukdarStoreCompany.name}</p>
                                <p><strong>Description:</strong> {talukdarStoreCompany.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {talukdarStoreCompany.businessType}</p>
                            <p><strong>Main Products:</strong> {talukdarStoreCompany.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default TalukdarStoreComp;
