import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Corrected import path
import './onioncomp.css'; // Adjust the CSS file path as necessary

const NaturalAromaComp = () => {
    // Company data for Natural Aroma
    const naturalAroma = {
        name: "Amit",
        email: "amit123@gmail.com",
        mobileNumber: "9810443032",
        companyName: "Natural Aroma",
        productOrService: "Cosmetics",
        productDescribe: "Natural Aroma specializes in a wide range of cosmetics including skincare products, makeup items, and beauty essentials, all made with natural ingredients to enhance your beauty regimen.",
        businessType: "Manufacturer",
        mainProducts: "Skincare Products, Makeup Items, Beauty Essentials",
        logoUrl: "/assets/aroma1.jpeg", // Example path to company logo image
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
                    {/* Display Natural Aroma company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={naturalAroma.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{naturalAroma.companyName}</h3>
                                <p><strong>Name:</strong> {naturalAroma.name}</p>
                                <p><strong>Description:</strong> {naturalAroma.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {naturalAroma.businessType}</p>
                            <p><strong>Main Products:</strong> {naturalAroma.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default NaturalAromaComp;
