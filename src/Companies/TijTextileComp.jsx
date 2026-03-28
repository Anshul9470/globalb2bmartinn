import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css';

const TijTextileComps = () => {
    // Company data for Tij Textile
    const companyData = {
        name: "Tijeshwar",
        email: "tijeshwar@gmail.com",
        mobileNumber: "9501021426",
        companyName: "Tij Textile",
        productOrService: "Fabric",
        productDescribe: "Tij Textile offers high-quality fabric materials, specializing in textile manufacturing for various uses including clothing and upholstery.",
        businessType: "Manufacturer",
        mainProducts: "Fabric, Textiles",
        cityName: "Ludhiana",
        stateName: "Punjab",
        imgSrc: "/assets/feb4.jpeg", // Placeholder path to company image
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
                    {/* Display Tij Textile information */}
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
                        <p><strong>Location:</strong> {companyData.cityName}, {companyData.stateName}</p>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default TijTextileComps;
