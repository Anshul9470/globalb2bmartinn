import React from "react";
import { Link } from "react-router-dom";
import './onioncomp.css'; // CSS file for styling
import CompanyForm from "./Companyform";

const BlacksmithMetalCraftsComp = () => {

    const blacksmithCompany = {
        name: "sahid luhar",
        companyName: "Blacksmith Metal Crafts",
        productOrService: "Iron Steel Products",
        productDescribe: "Blacksmith Metal Crafts specializes in crafting and supplying a variety of iron and steel products, including decorative items and functional components.",
        businessType: "Manufacturer",
        mainProducts: "Iron Steel Products",
        logoUrl: "/assets/metal1.jpg" // Example path to company logo image
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
                    {/* Display Blacksmith Metal Crafts company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={blacksmithCompany.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{blacksmithCompany.companyName}</h3>
                                <p><strong>Name:</strong> {blacksmithCompany.name}</p>
                                <p><strong>Description:</strong> {blacksmithCompany.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {blacksmithCompany.businessType}</p>
                            <p><strong>Main Products:</strong> {blacksmithCompany.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default BlacksmithMetalCraftsComp;
