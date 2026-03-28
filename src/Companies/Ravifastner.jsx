import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Adjust the CSS file path as necessary

const RaviFastenersComp = () => {
    // Company data for Ravi Fasteners
    const raviFasteners = {
        name: "jas",
        email: "jas123@gmail.com",
        mobileNumber: "7069381223",
        companyName: "Ravi fastners",
        productOrService: "Critical Fastners",
        productDescribe: "Ravi Fastners specializes in manufacturing critical fasteners essential for various industrial applications.",
        businessType: "Manufacturer",
        mainProducts: "Critical Fastners",
        logoUrl: "/assets/fas1.jpeg" // Example path to company logo image
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
                    {/* Display Ravi Fasteners company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={raviFasteners.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{raviFasteners.companyName}</h3>
                                <p><strong>Name:</strong> {raviFasteners.name}</p>
                                <p><strong>Description:</strong> {raviFasteners.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {raviFasteners.businessType}</p>
                            <p><strong>Main Products:</strong> {raviFasteners.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default RaviFastenersComp;
