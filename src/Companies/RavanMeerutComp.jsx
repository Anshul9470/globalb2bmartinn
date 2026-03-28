import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Ensure to adjust CSS file path as necessary

const RavanMeerutComp = () => {
    // Company data for Ravan Meerut
    const ravanMeerut = {
        name: "Himanshu",
        companyName: "Ravan Meerut",
        productOrService: "Sports",
        productDescribe: "Ravan Meerut specializes in a wide range of sports equipment and accessories, offering high-quality products for various sports activities.",
        businessType: "Manufacturer",
        mainProducts: "Sports Equipment and Accessories",
        logoUrl: "/assets/sports.jpeg" // Example path to company logo image
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
                    {/* Display Ravan Meerut company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={ravanMeerut.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{ravanMeerut.companyName}</h3>
                                <p><strong>Name:</strong> {ravanMeerut.name}</p>
                                <p><strong>Description:</strong> {ravanMeerut.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {ravanMeerut.businessType}</p>
                            <p><strong>Main Products:</strong> {ravanMeerut.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default RavanMeerutComp;
