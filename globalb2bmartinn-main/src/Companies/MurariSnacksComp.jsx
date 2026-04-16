import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Adjust the import path as necessary
import './onioncomp.css'; // Adjust the CSS file path as necessary

const MurariSnacksComp = () => {
    // Company data for Murari Snacks
    const companyData = {
        name: "Murari Snacks",
        email: "murarisnacks@gmail.com",
        mobileNumber: "9824846224",
        companyName: "Murari Snacks",
        productOrService: "Namkin",
        productDescribe: "Murari Snacks specializes in a variety of namkin, offering delicious and crispy snacks made from high-quality ingredients. Perfect for your tea-time cravings or as a tasty treat.",
        businessType: "Manufacturer",
        mainProducts: "Namkin, Snacks",
        cityName: "Maharastra", // City name may need correction if it's not a standard city name
        stateName: "", // State name is not provided
        imgSrc: "/assets/snacks1.jpeg", // Placeholder path to company image
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
                    {/* Display Murari Snacks information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={companyData.imgSrc} alt="Company Image" />
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
                        <p><strong>Location:</strong> {companyData.cityName} {companyData.stateName ? `, ${companyData.stateName}` : ''}</p>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default MurariSnacksComp;
