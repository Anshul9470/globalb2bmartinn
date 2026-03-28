import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Adjust the CSS file path as necessary

const BkAgriculturalComp = () => {
    // Company data for BkAgricultural
    const bkAgricultural = {
        name: "Alok Alok",
        email: "Bkagricultural@gmail.com",
        password: "Alok Alok",
        mobileNumber: "9140498214",
        companyName: "Bkagricultural",
        productOrService: "Humic agriculture bio fertilizers",
        productDescribe: "BkAgricultural specializes in providing high-quality humic agriculture bio fertilizers, enhancing crop yields and soil health.",
        businessType: "Supplier",
        mainProducts: "Humic Agriculture Bio Fertilizers",
        logoUrl: "/assets/fer6.jpeg" // Example path to company logo image
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
                    {/* Display BkAgricultural company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={bkAgricultural.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{bkAgricultural.companyName}</h3>
                                <p><strong>Name:</strong> {bkAgricultural.name}</p>
                                <p><strong>Description:</strong> {bkAgricultural.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {bkAgricultural.businessType}</p>
                            <p><strong>Main Products:</strong> {bkAgricultural.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default BkAgriculturalComp;
