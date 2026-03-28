import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Adjust the import path as necessary
import './onioncomp.css'; // Adjust the CSS file path as necessary

const ArtiqueCraftComp = () => {
    // Company data for Artique Craft
    const companyData = {
        name: "M D Ashrafi",
        email: "mohddanishashrafi@gmail.com",
        mobileNumber: "9627879286",
        companyName: "Artique Craft",
        productOrService: "Handicrafts",
        productDescribe: "Artique Craft specializes in creating unique and exquisite handicrafts. Our products reflect traditional craftsmanship and are designed to add a touch of elegance and artistry to your home decor.",
        businessType: "Manufacturer",
        mainProducts: "Handicrafts, Decorative Items",
        cityName: "Moradabad",
        stateName: "Uttar Pradesh",
        logoUrl: "/assets/artique-craft-logo.jpeg", // Placeholder path to company logo image
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
                    {/* Display Artique Craft information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={companyData.logoUrl} alt="Company Logo" />
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
                        <p><strong>Location:</strong> {companyData.cityName}, {companyData.stateName}</p>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default ArtiqueCraftComp;
