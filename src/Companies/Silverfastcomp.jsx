import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Adjust the CSS file path as necessary

const SilverFastenersComp = () => {
    // Company data for Silver Fasteners
    const silverFasteners = {
        name: "kurnal patel",
        email: "kunal@gmail.com",
        mobileNumber: "9979921219",
        companyName: "silver fasteners",
        productOrService: "Fasteners Manufacturing",
        productDescribe: "Silver Fasteners specializes in manufacturing a wide range of fasteners, catering to industrial and commercial sectors.",
        businessType: "Manufacturer",
        mainProducts: "Fasteners",
        logoUrl: "/assets/fas6.jpeg" // Example path to company logo image
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
                    {/* Display Silver Fasteners company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={silverFasteners.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{silverFasteners.companyName}</h3>
                                <p><strong>Name:</strong> {silverFasteners.name}</p>
                                <p><strong>Description:</strong> {silverFasteners.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {silverFasteners.businessType}</p>
                            <p><strong>Main Products:</strong> {silverFasteners.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default SilverFastenersComp;
