import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Corrected import path
import './onioncomp.css'; // Adjust the CSS file path as necessary

const HeeraCollectionsComp = () => {
    // Company data for Heera Collections
    const heeraCollections = {
        name: "moksh",
        email: "moksh1234@gmail.com",
        mobileNumber: "7026388889",
        companyName: "Heera Collections",
        productOrService: "Laptop accessories and computer",
        productDescribe: "Heera Collections specializes in providing high-quality laptop accessories and computer products, ensuring top-notch performance and reliability.",
        businessType: "Supplier",
        mainProducts: "Laptop Bags, Keyboards, Mice, External Hard Drives, USB Hubs",
        logoUrl: "/assets/electric.jpeg", // Example path to company logo image
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
                    {/* Display Heera Collections company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={heeraCollections.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{heeraCollections.companyName}</h3>
                                <p><strong>Name:</strong> {heeraCollections.name}</p>
                                <p><strong>Description:</strong> {heeraCollections.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {heeraCollections.businessType}</p>
                            <p><strong>Main Products:</strong> {heeraCollections.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default HeeraCollectionsComp;
