import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Adjust the CSS file path as necessary

const StarBrassIndustriesComp = () => {
    // Company data for Star Brass Industries
    const starBrassIndustries = {
        name: "vyom",
        email: "vyom1234@gmail.com",
        mobileNumber: "7069556768",
        companyName: "STAR BRASS INDUSTRIES",
        productOrService: "Brass & Fasteners Manufacture",
        productDescribe: "Star Brass Industries specializes in manufacturing high-quality brass components and fasteners for various industrial and commercial applications.",
        businessType: "Manufacturer",
        mainProducts: "Brass Components, Fasteners",
        logoUrl: "/assets/brs8.jpeg" // Example path to company logo image
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
                    {/* Display Star Brass Industries company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={starBrassIndustries.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{starBrassIndustries.companyName}</h3>
                                <p><strong>Name:</strong> {starBrassIndustries.name}</p>
                                <p><strong>Description:</strong> {starBrassIndustries.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {starBrassIndustries.businessType}</p>
                            <p><strong>Main Products:</strong> {starBrassIndustries.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default StarBrassIndustriesComp;
