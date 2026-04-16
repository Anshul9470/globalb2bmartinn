import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Corrected import path
import './onioncomp.css'; // Adjust the CSS file path as necessary

const RBTPPrivateLimitedComp = () => {
    // Company data for R.B. Tapes Private Limited
    const rbTapes = {
        name: "Mr Purohit",
        email: "Purohit@gmail.com",
        mobileNumber: "7600229153",
        companyName: "R.B. Tapes Private Limited",
        productOrService: "Birthday Musical Candles",
        productDescribe: "R.B. Tapes Private Limited specializes in providing a wide range of birthday musical candles, designed to add a special touch to your celebrations with melodies and lights.",
        businessType: "Manufacturer",
        mainProducts: "Musical Candles",
        logoUrl: "/assets/rb-tapes-logo.jpeg", // Example path to company logo image
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
                    {/* Display R.B. Tapes Private Limited company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={rbTapes.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{rbTapes.companyName}</h3>
                                <p><strong>Name:</strong> {rbTapes.name}</p>
                                <p><strong>Description:</strong> {rbTapes.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {rbTapes.businessType}</p>
                            <p><strong>Main Products:</strong> {rbTapes.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default RBTPPrivateLimitedComp;
