import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Adjust the CSS file path as necessary

const FlonexLubricantComp = () => {
    // Company data for Flonex Lubricant
    const flonexLubricant = {
        name: "piyush",
        email: "piyushgoyalflonexgroup@gmail.com",
        mobileNumber: "7424904301",
        companyName: "flonex lubricant",
        productOrService: "Lubricant",
        productDescribe: "Flonex Lubricant specializes in manufacturing and distributing high-quality lubricant products for various industrial and automotive applications.",
        businessType: "Manufacturer",
        mainProducts: "Lubricants",
        logoUrl: "/assets/flonex-lubricant-logo.jpg" // Example path to company logo image
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
                    {/* Display Flonex Lubricant company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={flonexLubricant.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{flonexLubricant.companyName}</h3>
                                <p><strong>Name:</strong> {flonexLubricant.name}</p>
                                <p><strong>Description:</strong> {flonexLubricant.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {flonexLubricant.businessType}</p>
                            <p><strong>Main Products:</strong> {flonexLubricant.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default FlonexLubricantComp;
