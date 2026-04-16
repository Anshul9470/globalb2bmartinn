import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Adjust the CSS file path as necessary

const HariTextileComp = () => {
    // Company data for Hari Textile
    const hariTextile = {
        name: "Mr. Ankit Garg",
        companyName: "Hari Textile",
        productOrService: "Bed Sheet",
        productDescribe: "Hari Textile specializes in manufacturing high-quality bed sheets, offering a variety of designs and sizes.",
        businessType: "Manufacturer",
        mainProducts: "Bed Sheet",
        logoUrl: "/assets/haritex.jpeg" // Example path to company logo image
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
                    {/* Display Hari Textile company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={hariTextile.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{hariTextile.companyName}</h3>
                                <p><strong>Name:</strong> {hariTextile.name}</p>
                                <p><strong>Description:</strong> {hariTextile.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {hariTextile.businessType}</p>
                            <p><strong>Main Products:</strong> {hariTextile.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default HariTextileComp;
