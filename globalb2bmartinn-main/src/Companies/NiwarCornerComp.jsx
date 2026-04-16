import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Adjust the CSS file path as necessary

const NiwarCornerComp = () => {
    // Company data for Niwar Corner
    const niwarCorner = {
        name: "Vikas",
        email: "abc@gmail.com",
        password: "vikas@123",
        mobileNumber: "9899995228",
        companyName: "niwar corner",
        productOrService: "All kinds of luggages and garments accessories",
        productDescribe: "Niwar Corner specializes in providing a wide range of luggage and garment accessories, catering to various needs and styles.",
        businessType: "Retailer",
        mainProducts: "Luggages and Garments Accessories",
        logoUrl: "/assets/gr7.jpeg" // Example path to company logo image
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
                    {/* Display Niwar Corner company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={niwarCorner.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{niwarCorner.companyName}</h3>
                                <p><strong>Name:</strong> {niwarCorner.name}</p>
                                <p><strong>Description:</strong> {niwarCorner.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {niwarCorner.businessType}</p>
                            <p><strong>Main Products:</strong> {niwarCorner.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default NiwarCornerComp;
