import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Corrected import path
import './onioncomp.css'; // Adjust the CSS file path as necessary

const PlazaChemicalComp = () => {
    // Company data for Plaza Chemical
    const plazaChemical = {
        name: "ambul akbar",
        email: "ambul123@gmail.com",
        mobileNumber: "7219292265",
        companyName: "Plaza Chemical",
        productOrService: "Chemical",
        productDescribe: "Plaza Chemical specializes in providing high-quality chemicals for various industries. We ensure top-notch products and reliable service for all your chemical needs.",
        businessType: "Manufacturer",
        mainProducts: "Industrial Chemicals",
        logoUrl: "/assets/plaza.jpeg", // Example path to company logo image
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
                    {/* Display Plaza Chemical company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={plazaChemical.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{plazaChemical.companyName}</h3>
                                <p><strong>Name:</strong> {plazaChemical.name}</p>
                                <p><strong>Description:</strong> {plazaChemical.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {plazaChemical.businessType}</p>
                            <p><strong>Main Products:</strong> {plazaChemical.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default PlazaChemicalComp;
