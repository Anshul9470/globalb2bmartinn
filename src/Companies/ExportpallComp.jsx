import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Adjust the CSS file path as necessary

const ExportPalletizationComp = () => {
    // Company data for EXPORT PALLETIZATION SPECIALITIES & SOLUTION
    const exportPalletization = {
        name: "Mr. Shaikh Jubairahmed Gulam",
        companyName: "EXPORT PALLETIZATION SPECIALITIES & SOLUTION",
        productOrService: "Wooden Palate",
        productDescribe: "EXPORT PALLETIZATION SPECIALITIES & SOLUTION specializes in manufacturing high-quality wooden pallets, providing reliable solutions for industrial palletization needs.",
        businessType: "Manufacturer",
        mainProducts: "Wooden Pallets",
        logoUrl: "/assets/plate.jpg" // Example path to company logo image
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
                    {/* Display EXPORT PALLETIZATION SPECIALITIES & SOLUTION company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={exportPalletization.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{exportPalletization.companyName}</h3>
                                <p><strong>Name:</strong> {exportPalletization.name}</p>
                                <p><strong>Description:</strong> {exportPalletization.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {exportPalletization.businessType}</p>
                            <p><strong>Main Products:</strong> {exportPalletization.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default ExportPalletizationComp;
