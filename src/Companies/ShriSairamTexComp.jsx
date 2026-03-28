import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Ensure this import path is correct
import './onioncomp.css'; // Adjust the CSS file path as necessary

const ShriSairamTexComp = () => {
    // Company data for SHRI SAIRAM TEX
    const companyData = {
        name: "Perumal C",
        email: "shrisairam96@gmail.com",
        mobileNumber: "8807048548",
        companyName: "SHRI SAIRAM TEX",
        productOrService: "Clothings and Apparel (T-shirt, Trackpant)",
        productDescribe: "SHRI SAIRAM TEX is a prominent manufacturer and supplier of high-quality clothing and apparel, specializing in T-shirts and trackpants. Based in Tirupur, Tamil Nadu, we deliver durable and stylish products that cater to both fashion and comfort.",
        businessType: "Manufacturer",
        mainProducts: "T-shirt, Trackpant",
        statename: "Tamil Nadu",
        cityname: "Tirupur",
        logoUrl: "/assets/apparel1.jpg", // Example path to company logo image
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
                    {/* Display SHRI SAIRAM TEX information */}
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

export default ShriSairamTexComp;
