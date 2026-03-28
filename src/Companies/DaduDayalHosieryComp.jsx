import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Adjust the import path as necessary
import './onioncomp.css'; // Adjust the CSS file path as necessary

const DaduDayalHosieryComp = () => {
    // Company data for Dadu Dayal Hosiery
    const companyData = {
        name: "Gagan",
        email: "gagan@gmail.com",
        mobileNumber: "9779955972",
        companyName: "Dadu Dayal Hosiery",
        productOrService: "Hosiery",
        productDescribe: "Dadu Dayal Hosiery specializes in high-quality hosiery products. Our range includes various types of hosiery designed for comfort and durability, catering to diverse fashion and functional needs.",
        businessType: "Manufacturer",
        mainProducts: "Hosiery Products",
        logoUrl: "/assets/hosiry.jpeg", // Placeholder path to company logo image
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
                    {/* Display Dadu Dayal Hosiery information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={companyData.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{companyData.companyName}</h3>
                                <p><strong>Description:</strong> {companyData.productDescribe}</p>

                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <p><strong>Business Type:</strong> {companyData.businessType}</p>
                        <p><strong>Main Products:</strong> {companyData.mainProducts}</p>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default DaduDayalHosieryComp;
