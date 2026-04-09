import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Corrected import path
import './onioncomp.css'; // Adjust the CSS file path as necessary

const BajrangStoneArtsComp = () => {
    // Company data for Bajrang Stone & Art's
    const bajrangStoneArts = {
        name: "Mr. Hemant Kumar",
        email: "hk72609@gmail.com",
        mobileNumber: "9758197207",
        companyName: "BAJRANG STONE & ART'S",
        productOrService: "Statue Manufacturer",
        productDescribe: "BAJRANG STONE & ART'S specializes in the manufacture of high-quality statues and artistic stone carvings, catering to various needs from decorative pieces to religious statues.",
        businessType: "Manufacturer",
        mainProducts: "Statues, Stone Carvings, Decorative Art",
        logoUrl: "/assets/tile7.jpeg", // Example path to company logo image
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
                    {/* Display Bajrang Stone & Art's company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={bajrangStoneArts.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{bajrangStoneArts.companyName}</h3>
                                <p><strong>Name:</strong> {bajrangStoneArts.name}</p>
                                <p><strong>Description:</strong> {bajrangStoneArts.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {bajrangStoneArts.businessType}</p>
                            <p><strong>Main Products:</strong> {bajrangStoneArts.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default BajrangStoneArtsComp;
