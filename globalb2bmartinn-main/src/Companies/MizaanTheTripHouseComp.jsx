import React from "react";
import { Link } from "react-router-dom";
import './onioncomp.css'; // CSS file for styling
import CompanyForm from "./Companyform";

const MizaanTheTripHouseComp = () => {

    const mizaanTheTripHouseCompany = {
        name: "sahid",
        companyName: "Mizaan The Trip House",
        productOrService: "Tours & Travel",
        productDescribe: "Mizaan The Trip House offers comprehensive tours and travel services, specializing in personalized travel itineraries and unique travel experiences.",
        businessType: "Service Provider",
        mainProducts: "Travel Packages, Tour Planning",
        logoUrl: "/assets/tr2.jpg" // Example path to company logo image
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
                    {/* Display Mizaan The Trip House company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={mizaanTheTripHouseCompany.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{mizaanTheTripHouseCompany.companyName}</h3>
                                <p><strong>Name:</strong> {mizaanTheTripHouseCompany.name}</p>
                                <p><strong>Description:</strong> {mizaanTheTripHouseCompany.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {mizaanTheTripHouseCompany.businessType}</p>
                            <p><strong>Main Products:</strong> {mizaanTheTripHouseCompany.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default MizaanTheTripHouseComp;
