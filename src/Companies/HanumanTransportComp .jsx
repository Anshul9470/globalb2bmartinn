import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Ensure this import path is correct
import './onioncomp.css'; // Adjust the CSS file path as necessary

const HanumanTransportComp = () => {
    // Company data for Hanuman Transport
    const companyData = {
        name: "Rushikesh Kale",
        email: "rkale4776@gmail.com",
        mobileNumber: "7045813022",
        companyName: "Hanuman Transport",
        productOrService: "Transportation",
        productDescribe: "Hanuman Transport is dedicated to providing reliable and efficient transportation services across Maharashtra. We ensure timely deliveries and a smooth experience for all your logistics needs.",
        businessType: "Service Provider",
        mainProducts: "Transportation Services",
        statename: "Maharashtra",
        cityname: "Mumbai",
        logoUrl: "/assets/transport.jpg", // Example path to company logo image
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
                    {/* Display Hanuman Transport information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={companyData.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{companyData.companyName}</h3>
                                <p><strong>Name:</strong> {companyData.name}</p>
                                <p><strong>Description:</strong> {companyData.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {companyData.businessType}</p>
                            <p><strong>Main Products:</strong> {companyData.mainProducts}</p>
                            <p><strong>State:</strong> {companyData.statename}</p>
                            <p><strong>City:</strong> {companyData.cityname}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default HanumanTransportComp;
