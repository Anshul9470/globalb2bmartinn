import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Adjust the import path as necessary
import './onioncomp.css'; // Adjust the CSS file path as necessary

const JiyanshInternationalComp = () => {
    // Company data for Jiyansh International
    const companyData = {
        name: "Yesh",
        email: "yesh@gmail.com",
        mobileNumber: "9687840130",
        companyName: "Jiyansh International",
        productOrService: "Tower Bolt",
        productDescribe: "Jiyansh International is a renowned manufacturer and supplier of high-quality tower bolts. Our products are designed for durability and security, offering a range of sizes and finishes to meet the diverse needs of our clients.",
        businessType: "Manufacturer",
        mainProducts: "Tower Bolts, Door Hardware",
        location: "Gujarat, India", // Adjusted location
        logoUrl: "/assets/bolt1.jpg", // Placeholder path to company logo image
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
                    {/* Display Jiyansh International information */}
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
                        <p><strong>Location:</strong> {companyData.location}</p>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default JiyanshInternationalComp;
