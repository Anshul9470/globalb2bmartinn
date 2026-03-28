import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Ensure the import path is correct
import './onioncomp.css'; // Adjust the CSS file path as necessary

const Navkar = () => {
    // Company data for NAVKAR FORGE INDUSTRIES
    const companyData = {
        name: "HITESH",
        email: "navkarforge23@gmail.com",
        mobileNumber: "9969259019",
        companyName: "NAVKAR FORGE INDUSTRIES",
        productOrService: "Manufacturing and Stockiest of Fitting and Flanges",
        productDescribe: "NAVKAR FORGE INDUSTRIES is a leading manufacturer and stockiest of high-quality fittings and flanges, catering to the needs of various industries with precision engineering.",
        businessType: "Manufacturer & Stockiest",
        mainProducts: "Fittings, Flanges",
        logoUrl: "/assets/carpet1.jpeg", // Placeholder path to company logo image
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
                    {/* Display NAVKAR FORGE INDUSTRIES information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={companyData.logoUrl} alt="Fittings and Flanges - NAVKAR FORGE INDUSTRIES" />
                            </div>
                            <div className="company-details">
                                <h3>{companyData.companyName}</h3>
                                <p><strong>Description:</strong> {companyData.productDescribe}</p>

                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <p><strong>Business Type:</strong> {companyData.businessType}</p>
                        <p><strong>Main Products:</strong> {companyData.mainProducts}</p>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default Navkar;
