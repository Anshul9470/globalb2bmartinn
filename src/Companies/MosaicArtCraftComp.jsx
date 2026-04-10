import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Adjust the import path as necessary
import './onioncomp.css'; // Adjust the CSS file path as necessary

const MosaicArtCraftComp = () => {
    // Company data for Mosaic Art Craft
    const companyData = {
        name: "RavatRavi",
        email: "raviravat933@gmail.com",
        mobileNumber: "6359719635",
        companyName: "Mosaic Art Craft",
        productOrService: "Mosaic Tiles Supplier",
        productDescribe: "Mosaic Art Craft specializes in supplying a wide range of mosaic tiles, offering various designs and colors to suit different decor needs. We focus on providing high-quality materials and exceptional customer service.",
        businessType: "Supplier",
        mainProducts: "Mosaic Tiles, Decorative Tiles",
        cityName: "Ahmedabad",
        stateName: "Gujarat",
        imgSrc: "/assets/tile4.jpeg", // Placeholder path to company image
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
                    {/* Display Mosaic Art Craft information */}
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

export default MosaicArtCraftComp;
