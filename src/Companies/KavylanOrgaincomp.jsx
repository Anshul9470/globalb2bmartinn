import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Adjust the CSS file path as necessary

const KaivalyaOrganicsComp = () => {
    // Company data for KAIVALYA ORGANICS PVT.LTD.
    const kaivalyaOrganics = {
        _id: "a1234567890bcdef012347",
        name: "ASHWINI SINDE",
        email: "kaivalyaorganics@gmail.com",
        mobileNumber: "9552533026",
        companyName: "KAIVALYA ORGANICS PVT.LTD.",
        productOrService: "Pulses and Agro Products",
        productDescribe: "KAIVALYA ORGANICS PVT.LTD. specializes in high-quality pulses, lentils, and grains. Our agro products are known for their freshness, quality, and nutritional value, catering to both domestic and international markets.",
        businessType: "Manufacturer",
        mainProducts: "Pulses, Lentils, Grains",
        imgSrc: "/assets/pulses1.jpeg",
        altText: "Pulses and Agro Products - KAIVALYA ORGANICS PVT.LTD.",
        years: "1 YRS",
        location: "Mumbai, India",
        tooltipText: "Sector 12, Agro Market, Mumbai, India",
        rating: "4.8",
        ratingPercent: "96%",
        ratingsCount: "75",
        responseRate: "89%",
        whatsappConfirmed: true
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
                    {/* Display KAIVALYA ORGANICS PVT.LTD. company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={kaivalyaOrganics.imgSrc} alt={kaivalyaOrganics.altText} />
                            </div>
                            <div className="company-details">
                                <h3>{kaivalyaOrganics.companyName}</h3>
                                <p><strong>Name:</strong> {kaivalyaOrganics.name}</p>
                                <p><strong>Description:</strong> {kaivalyaOrganics.productDescribe}</p>
                                <div className="company-info">
                                    <p><strong>Location:</strong> {kaivalyaOrganics.location}</p>



                                </div>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {kaivalyaOrganics.businessType}</p>
                            <p><strong>Main Products:</strong> {kaivalyaOrganics.mainProducts}</p>
                            <p><strong>Tooltip:</strong> {kaivalyaOrganics.tooltipText}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default KaivalyaOrganicsComp;
