import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Ensure this import path is correct
import './onioncomp.css'; // Adjust the CSS file path as necessary

const ShreeMahalakshmiProductsComp = () => {
    // Company data for Shree Mahalakshmi Products
    const companyData = {
        name: "Vighanesh Ojha",
        email: "shreemahalakshmiproducts1@gmail.com",
        mobileNumber: "9818526177",
        companyName: "Shree Mahalakshmi Products",
        productOrService: "Ghee",
        productDescribe: "Shree Mahalakshmi Products is renowned for producing high-quality ghee, made from the finest dairy sources in Rajasthan. Our ghee is pure, natural, and enriched with essential nutrients, perfect for culinary and dietary use.",
        businessType: "Supplier",
        mainProducts: "Ghee",
        statename: "Rajasthan",
        cityname: "Bikaner",
        logoUrl: "/assets/ghee.webp", // Example path to company logo image
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
                    {/* Display Shree Mahalakshmi Products information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={companyData.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{companyData.companyName}</h3>
                                <p><strong>Name:</strong> {companyData.name}</p>
                                <p><strong>Description:</strong> {companyData.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {companyData.businessType}</p>
                            <p><strong>Main Products:</strong> {companyData.mainProducts}</p>
                            <p><strong>State:</strong> {companyData.statename}</p>
                            <p><strong>City:</strong> {companyData.cityname}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default ShreeMahalakshmiProductsComp;
