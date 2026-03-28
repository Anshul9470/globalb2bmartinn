import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Corrected import path
import './onioncomp.css'; // Adjust the CSS file path as necessary

const NoxbeatComp = () => {
    // Company data for Noxbeat
    const noxbeat = {
        name: "Ramiz",
        email: "Ramiz123@gmail.com",
        mobileNumber: "8084479185",
        companyName: "Noxbeat",
        productOrService: "Car stereo",
        productDescribe: "Noxbeat specializes in high-quality car stereo systems. Our products deliver superior audio performance and modern features to enhance your driving experience.",
        businessType: "Supplier",
        mainProducts: "Car Stereo Systems",
        logoUrl: "/assets/car12.jpeg", // Example path to company logo image
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
                    {/* Display Noxbeat company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={noxbeat.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{noxbeat.companyName}</h3>
                                <p><strong>Name:</strong> {noxbeat.name}</p>
                                <p><strong>Description:</strong> {noxbeat.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {noxbeat.businessType}</p>
                            <p><strong>Main Products:</strong> {noxbeat.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default NoxbeatComp;
