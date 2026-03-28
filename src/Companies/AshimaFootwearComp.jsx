import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Corrected import path
import './onioncomp.css'; // Adjust the CSS file path as necessary

const AshimaFootwearComp = () => {
    // Company data for Ashima Footwear
    const ashimiaFootwear = {
        name: "aashima",
        email: "abc@gmail.com",
        mobileNumber: "9910566594",
        companyName: "Ashima Footwear",
        productOrService: "ladies footwear",
        productDescribe: "Ashima Footwear specializes in elegant and comfortable ladies' footwear, offering a variety of styles for every occasion.",
        businessType: "Manufacturer",
        mainProducts: "Casual Shoes, Formal Shoes, Sandals",
        logoUrl: "/assets/footwear2.jpeg", // Example path to company logo image
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
                    {/* Display Ashima Footwear company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={ashimiaFootwear.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{ashimiaFootwear.companyName}</h3>
                                <p><strong>Name:</strong> {ashimiaFootwear.name}</p>
                                <p><strong>Description:</strong> {ashimiaFootwear.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {ashimiaFootwear.businessType}</p>
                            <p><strong>Main Products:</strong> {ashimiaFootwear.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default AshimaFootwearComp;
