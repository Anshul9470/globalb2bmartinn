import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Adjust the CSS file path as necessary

const SRMSportsComp = () => {
    // Company data for SRM sports
    const srmSports = {
        name: "uday sharam",
        email: "udaysharam12@gmail.com",
        mobileNumber: "9045752154",
        companyName: "SRM sports",
        productOrService: "Bat",
        productDescribe: "SRM sports specializes in manufacturing high-quality cricket bats suitable for professional and amateur players alike.",
        businessType: "Manufacturer",
        mainProducts: "Cricket Bats",
        logoUrl: "/assets/toy4.jpg" // Example path to company logo image
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
                    {/* Display SRM sports company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={srmSports.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{srmSports.companyName}</h3>
                                <p><strong>Name:</strong> {srmSports.name}</p>
                                <p><strong>Description:</strong> {srmSports.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {srmSports.businessType}</p>
                            <p><strong>Main Products:</strong> {srmSports.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default SRMSportsComp;
