import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Corrected import path
import './onioncomp.css'; // Adjust the CSS file path as necessary

const RJOldIronAndOldTayerComp = () => {
    // Company data for R.J. Old Iron and Old Tayer
    const rjOldIronAndOldTayer = {
        name: "Shadab Khan",
        email: "shadab123@gmail.com",
        mobileNumber: "8302459881",
        companyName: "R.J. Old Iron and Old Tayer",
        productOrService: "Tayer",
        productDescribe: "R.J. Old Iron and Old Tayer specializes in providing quality used tyres for various vehicles. We ensure reliability and affordability for all our products.",
        businessType: "Supplier",
        mainProducts: "Used Tyres",
        logoUrl: "/assets/rj-old-iron-logo.jpeg", // Example path to company logo image
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
                    {/* Display R.J. Old Iron and Old Tayer company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={rjOldIronAndOldTayer.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{rjOldIronAndOldTayer.companyName}</h3>
                                <p><strong>Name:</strong> {rjOldIronAndOldTayer.name}</p>
                                <p><strong>Description:</strong> {rjOldIronAndOldTayer.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {rjOldIronAndOldTayer.businessType}</p>
                            <p><strong>Main Products:</strong> {rjOldIronAndOldTayer.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default RJOldIronAndOldTayerComp;
