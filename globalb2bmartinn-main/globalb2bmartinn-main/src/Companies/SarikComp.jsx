import React from "react";
import { Link } from "react-router-dom";
import './onioncomp.css'; // CSS file for styling
import CompanyForm from "./Companyform";

const SarikGarmentsComp = () => {

    const sarikGarmentsCompany = {
        name: "Sarwan",
        companyName: "Sarik Garments",
        productOrService: "kids garments",
        productDescribe: "Sarik Garments specializes in manufacturing and supplying a variety of kids garments, offering stylish and comfortable clothing for children.",
        businessType: "Manufacturer",
        mainProducts: "Kids Garments",
        logoUrl: "/assets/gr5.jpeg" // Example path to company logo image
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
                    {/* Display Sarik Garments company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={sarikGarmentsCompany.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{sarikGarmentsCompany.companyName}</h3>
                                <p><strong>Name:</strong> {sarikGarmentsCompany.name}</p>
                                <p><strong>Description:</strong> {sarikGarmentsCompany.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {sarikGarmentsCompany.businessType}</p>
                            <p><strong>Main Products:</strong> {sarikGarmentsCompany.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default SarikGarmentsComp;
