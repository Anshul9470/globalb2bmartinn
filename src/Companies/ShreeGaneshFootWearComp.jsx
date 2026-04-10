import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform" // Adjust the import path as necessary
import './onioncomp.css'; // Adjust the CSS file path as necessary

const ShreeGaneshFootWearComp = () => {
    // Company data for Shree Ganesh Foot Wear
    const shreeGaneshFootWear = {
        name: "Mayank Sharma",
        email: "abc@gmail.com",
        mobileNumber: "9109172104",
        companyName: "Shree Ganesh Foot Wear",
        productOrService: "Men Footwear",
        productDescribe: "Shree Ganesh Foot Wear specializes in offering a wide range of men’s footwear, including casual shoes, formal shoes, and sports shoes designed for style and comfort.",
        businessType: "Retailer",
        mainProducts: "Men’s Casual Shoes, Formal Shoes, Sports Shoes",
        logoUrl: "/assets/shree-ganesh-footwear-logo.jpeg" // Example path to company logo image
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
                    {/* Display Shree Ganesh Foot Wear company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={shreeGaneshFootWear.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{shreeGaneshFootWear.companyName}</h3>
                                <p><strong>Name:</strong> {shreeGaneshFootWear.name}</p>
                                <p><strong>Description:</strong> {shreeGaneshFootWear.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {shreeGaneshFootWear.businessType}</p>
                            <p><strong>Main Products:</strong> {shreeGaneshFootWear.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default ShreeGaneshFootWearComp;
