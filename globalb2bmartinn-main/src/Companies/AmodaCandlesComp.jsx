import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Corrected import path
import './onioncomp.css'; // Adjust the CSS file path as necessary

const AmodaCandlesComp = () => {
    // Company data for Amoda Candles
    const amodaCandles = {
        name: "Mrs. Sachi Goyal",
        email: "candleamoda@gmail.com",
        mobileNumber: "9319775090",
        companyName: "Amoda Candles",
        productOrService: "Candles",
        productDescribe: "Amoda Candles specializes in a wide range of high-quality candles, perfect for creating a warm and inviting atmosphere in any space.",
        businessType: "Manufacturer",
        mainProducts: "Scented Candles, Decorative Candles, Aromatherapy Candles",
        logoUrl: "/assets/candle2.jpeg" // Example path to company logo image
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
                    {/* Display Amoda Candles company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={amodaCandles.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{amodaCandles.companyName}</h3>
                                <p><strong>Name:</strong> {amodaCandles.name}</p>
                                <p><strong>Description:</strong> {amodaCandles.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {amodaCandles.businessType}</p>
                            <p><strong>Main Products:</strong> {amodaCandles.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default AmodaCandlesComp;
