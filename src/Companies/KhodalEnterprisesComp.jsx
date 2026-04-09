import React, { useState } from "react";
import { Link } from "react-router-dom";
import './onioncomp.css'; // CSS file for styling
import CompanyForm from "./Companyform";

const KhodalEnterprisesComp = () => {

    const khodalEnterprisesCompany = {
        name: "Kurvesh",
        companyName: "Khodal Enterprises",
        productOrService: "Banana Powder",
        productDescribe: "Khodal Enterprises specializes in producing high-quality banana powder, offering nutritious and natural products for various culinary and health needs.",
        businessType: "Manufacturer",
        mainProducts: "Banana Powder",
        logoUrl: "/assets/banapowder.jpeg" // Example path to company logo image
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
                    {/* Display Khodal Enterprises company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={khodalEnterprisesCompany.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{khodalEnterprisesCompany.companyName}</h3>
                                <p><strong>Name:</strong> {khodalEnterprisesCompany.name}</p>
                                <p><strong>Description:</strong> {khodalEnterprisesCompany.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {khodalEnterprisesCompany.businessType}</p>
                            <p><strong>Main Products:</strong> {khodalEnterprisesCompany.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default KhodalEnterprisesComp;
