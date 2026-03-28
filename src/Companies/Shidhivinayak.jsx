import React from "react";
import { Link } from "react-router-dom";
import './onioncomp.css'; // CSS file for styling
import CompanyForm from "./Companyform";

const SidhhiVinayakMetalComp = () => {

    const sidhhiVinayakMetalCompany = {
        name: "Gulab Rajput Surana",
        companyName: "Sidhhi Vinayak Metal",
        productOrService: "Utensils",
        productDescribe: "Sidhhi Vinayak Metal specializes in manufacturing and supplying a wide range of utensils, including kitchenware and household metal products.",
        businessType: "Manufacturer",
        mainProducts: "Utensils",
        logoUrl: "/assets//stes.webp" // Example path to company logo image
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
                    {/* Display Sidhhi Vinayak Metal company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={sidhhiVinayakMetalCompany.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{sidhhiVinayakMetalCompany.companyName}</h3>
                                <p><strong>Name:</strong> {sidhhiVinayakMetalCompany.name}</p>
                                <p><strong>Description:</strong> {sidhhiVinayakMetalCompany.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {sidhhiVinayakMetalCompany.businessType}</p>
                            <p><strong>Main Products:</strong> {sidhhiVinayakMetalCompany.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default SidhhiVinayakMetalComp;
