import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Corrected import path
import './onioncomp.css'; // Adjust the CSS file path as necessary

const ShoeArtIndiaComp = () => {
    // Company data for Shoe Art India
    const shoeArtIndia = {
        name: "atul",
        email: "abc@gmail.com",
        mobileNumber: "9953005454",
        companyName: "Shoe Art India",
        productOrService: "footwear",
        productDescribe: "Shoe Art India specializes in crafting high-quality footwear that blends style, comfort, and durability for every occasion.",
        businessType: "Manufacturer",
        mainProducts: "Casual Shoes, Formal Shoes, Sports Shoes",
        logoUrl: "/assets/shoe-art-india-logo.jpeg", // Example path to company logo image
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
                    {/* Display Shoe Art India company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={shoeArtIndia.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{shoeArtIndia.companyName}</h3>
                                <p><strong>Name:</strong> {shoeArtIndia.name}</p>
                                <p><strong>Description:</strong> {shoeArtIndia.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {shoeArtIndia.businessType}</p>
                            <p><strong>Main Products:</strong> {shoeArtIndia.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default ShoeArtIndiaComp;
