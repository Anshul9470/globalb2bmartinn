import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Adjust the CSS file path as necessary

const MagnaMaterComp = () => {
    // Company data for Magna Mater Eco Products Pvt Ltd
    const magnaMater = {
        name: "Shubham Agarwal",
        email: "Shubhamagarwal@gmail.com",
        mobileNumber: "8910808788",
        companyName: "MAGNA MATER ECO PRODUCTS PVT LTD",
        productOrService: "Non Woven Bags",
        productDescribe: "Magna Mater Eco Products Pvt Ltd specializes in manufacturing high-quality non woven bags, promoting eco-friendly alternatives to plastic.",
        businessType: "Manufacturer",
        mainProducts: "Non Woven Bags",
        logoUrl: "/assets/bag5.jpeg" // Example path to company logo image
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
                    {/* Display Magna Mater company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={magnaMater.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{magnaMater.companyName}</h3>
                                <p><strong>Name:</strong> {magnaMater.name}</p>
                                <p><strong>Description:</strong> {magnaMater.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {magnaMater.businessType}</p>
                            <p><strong>Main Products:</strong> {magnaMater.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default MagnaMaterComp;
