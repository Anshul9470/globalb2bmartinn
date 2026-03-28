import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Adjust the CSS file path as necessary

const BhagyalaxmiProductsComp = () => {
    // Company data for Bhagyalaxmi Products
    const bhagyalaxmiProducts = {
        name: "Ashish Patel",
        email: "bhagyalaxmiproducts@gmail.com",
        mobileNumber: "9898889083",
        companyName: "Bhagyalaxmi Products",
        productOrService: "Sanitary Ware",
        productDescribe: "Bhagyalaxmi Products specializes in providing a wide range of high-quality sanitary ware, ensuring durability and style for residential and commercial projects.",
        businessType: "Supplier",
        mainProducts: "Sanitary Ware",
        logoUrl: "/assets/bhagyalaxmi-products-logo.jpeg" // Example path to company logo image
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
                    {/* Display Bhagyalaxmi Products company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={bhagyalaxmiProducts.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{bhagyalaxmiProducts.companyName}</h3>
                                <p><strong>Name:</strong> {bhagyalaxmiProducts.name}</p>
                                <p><strong>Description:</strong> {bhagyalaxmiProducts.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {bhagyalaxmiProducts.businessType}</p>
                            <p><strong>Main Products:</strong> {bhagyalaxmiProducts.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default BhagyalaxmiProductsComp;
