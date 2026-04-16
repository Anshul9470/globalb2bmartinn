import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Corrected import path
import './onioncomp.css'; // Adjust the CSS file path as necessary

const NarmadaShivlingStoneComp = () => {
    // Company data for Narmada Shivling Stone
    const narmadaShivlingStone = {
        name: "Mr. Naman Kewat",
        email: "namankewat847@gmail.com",
        mobileNumber: "6264363718",
        companyName: "NARMADA SHIVLING STONE",
        productOrService: "Marbles Shivling supplier",
        productDescribe: "NARMADA SHIVLING STONE specializes in supplying high-quality marble Shivlings, ensuring exceptional craftsmanship and devotion in each piece.",
        businessType: "Supplier",
        mainProducts: "Marble Shivlings, Marble Statues, Religious Artifacts",
        logoUrl: "/assets/narmada-shivling-stone-logo.jpeg", // Example path to company logo image
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
                    {/* Display NARMADA SHIVLING STONE company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={narmadaShivlingStone.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{narmadaShivlingStone.companyName}</h3>
                                <p><strong>Name:</strong> {narmadaShivlingStone.name}</p>
                                <p><strong>Description:</strong> {narmadaShivlingStone.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {narmadaShivlingStone.businessType}</p>
                            <p><strong>Main Products:</strong> {narmadaShivlingStone.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default NarmadaShivlingStoneComp;
