import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Adjust the import path as necessary
import './onioncomp.css'; // Adjust the CSS file path as necessary

const SSPackagingComp = () => {
    // Company data for SS Packaging
    const companyData = {
        name: "Ravi",
        email: "sspackaging@gmail.com",
        mobileNumber: "9156387479",
        companyName: "SS Packaging",
        productOrService: "Corrugated Box Manufacturer",
        productDescribe: "SS Packaging specializes in the manufacturing of high-quality corrugated boxes suitable for various packaging needs. Our boxes are designed to provide durability and protection for your products during transportation and storage.",
        businessType: "Manufacturer",
        mainProducts: "Corrugated Boxes, Packaging Solutions",
        cityName: "Pune",
        stateName: "Maharashtra",
        whatsappConfirmed: true,
        logoUrl: "/assets/ss-packaging-logo.jpeg", // Placeholder path to company logo image
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
                    {/* Display SS Packaging information */}
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
                        <p><strong>Location:</strong> {companyData.cityName}, {companyData.stateName}</p>
                        <p><strong>WhatsApp Confirmed:</strong> {companyData.whatsappConfirmed ? "Yes" : "No"}</p>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default SSPackagingComp;
