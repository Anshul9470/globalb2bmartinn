import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Ensure to adjust CSS file path as necessary

const KanakdharaEnterprisComp = () => {
    // Company data for Kanakdhara Enterpris
    const kanakdharaEnterpris = {
        name: "Manish",
        companyName: "Kanakdhara Enterpris",
        productOrService: "Oil",
        productDescribe: "Kanakdhara Enterpris specializes in high-quality oils for various uses, offering a range of types and packaging options.",
        businessType: "Manufacturer",
        mainProducts: "Oil",
        logoUrl: "/assets/oil3.jpeg" // Example path to company logo image
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
                    {/* Display Kanakdhara Enterpris company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={kanakdharaEnterpris.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{kanakdharaEnterpris.companyName}</h3>
                                <p><strong>Name:</strong> {kanakdharaEnterpris.name}</p>
                                <p><strong>Description:</strong> {kanakdharaEnterpris.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {kanakdharaEnterpris.businessType}</p>
                            <p><strong>Main Products:</strong> {kanakdharaEnterpris.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default KanakdharaEnterprisComp;
