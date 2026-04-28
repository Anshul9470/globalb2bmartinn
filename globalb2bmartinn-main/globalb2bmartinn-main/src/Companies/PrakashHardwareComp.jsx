import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Adjust the CSS file path as necessary

const PrakashHardwareComp = () => {
    // Company data for Prakash Hardware
    const prakashHardware = {
        name: "GAGAN",
        email: "prakashhardware@gmail.com",
        mobileNumber: "9123422679",
        companyName: "Prakash Hardware",
        productOrService: "Sanitary Hardware",
        productDescribe: "Prakash Hardware specializes in a wide range of sanitary hardware products, providing high-quality and durable solutions for all your sanitary needs.",
        businessType: "Distributor",
        mainProducts: "Sanitary Hardware",
        logoUrl: "/assets/sanitaryware1.jpeg" // Example path to company logo image
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
                    {/* Display Prakash Hardware company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={prakashHardware.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{prakashHardware.companyName}</h3>
                                <p><strong>Name:</strong> {prakashHardware.name}</p>
                                <p><strong>Description:</strong> {prakashHardware.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {prakashHardware.businessType}</p>
                            <p><strong>Main Products:</strong> {prakashHardware.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default PrakashHardwareComp;
