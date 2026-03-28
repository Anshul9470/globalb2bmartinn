import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Adjust the CSS file path as necessary

const SaintexKitchenSinkComp = () => {
    // Company data for Saintex Kitchen Sink
    const saintexKitchenSink = {
        name: "ABISHEK JAISWAL",
        email: "saintexindustries24@gmail.com",
        mobileNumber: "9870582850",
        companyName: "Saintex Kitchen Sink",
        productOrService: "Kitchen Sink",
        productDescribe: "Saintex Kitchen Sink specializes in the manufacturing of premium kitchen sinks, offering a wide variety of styles and finishes to meet all kitchen design needs.",
        businessType: "Manufacturer",
        mainProducts: "Kitchen Sinks",
        logoUrl: "/assets/kitchen_sink.jpeg" // Example path to company logo image
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
                    {/* Display Saintex Kitchen Sink company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={saintexKitchenSink.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{saintexKitchenSink.companyName}</h3>
                                <p><strong>Name:</strong> {saintexKitchenSink.name}</p>
                                <p><strong>Description:</strong> {saintexKitchenSink.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {saintexKitchenSink.businessType}</p>
                            <p><strong>Main Products:</strong> {saintexKitchenSink.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default SaintexKitchenSinkComp;
