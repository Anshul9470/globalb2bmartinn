import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Adjust the CSS file path as necessary

const JaiBabaMetalComp = () => {
    // Company data for Jai Baba Metal and Products
    const jaiBabaMetal = {
        name: "VIPIN KUMAR",
        email: "VIPINKUMAR@GMAIL.COM",
        mobileNumber: "9650750191",
        companyName: "jai baba metal and products",
        productOrService: "All kinds of Industrial Scrap",
        productDescribe: "Jai Baba Metal and Products specializes in sourcing and supplying various types of industrial scrap materials.",
        businessType: "Supplier",
        mainProducts: "Industrial Scrap",
        logoUrl: "/assets/jai-baba-metal-logo.jpg" // Example path to company logo image
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
                    {/* Display Jai Baba Metal and Products company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={jaiBabaMetal.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{jaiBabaMetal.companyName}</h3>
                                <p><strong>Name:</strong> {jaiBabaMetal.name}</p>
                                <p><strong>Description:</strong> {jaiBabaMetal.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {jaiBabaMetal.businessType}</p>
                            <p><strong>Main Products:</strong> {jaiBabaMetal.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default JaiBabaMetalComp;
