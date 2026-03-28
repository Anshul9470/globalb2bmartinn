import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Corrected import path
import './onioncomp.css'; // Adjust the CSS file path as necessary

const SlipoverPvtLtdComp = () => {
    // Company data for Slipover Pvt. Ltd.
    const slipoverPvtLtd = {
        name: "sandeep kumar",
        email: "abc@gmail.com",
        mobileNumber: "9540432228",
        companyName: "Slipover Pvt. Ltd.",
        productOrService: "footwear",
        productDescribe: "Slipover Pvt. Ltd. offers a wide range of high-quality footwear, combining style and comfort for various occasions.",
        businessType: "Manufacturer",
        mainProducts: "Casual Shoes, Formal Shoes, Sports Shoes",
        logoUrl: "/assets/slipover-pvt-ltd-logo.jpeg", // Example path to company logo image
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
                    {/* Display Slipover Pvt. Ltd. company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={slipoverPvtLtd.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{slipoverPvtLtd.companyName}</h3>
                                <p><strong>Name:</strong> {slipoverPvtLtd.name}</p>
                                <p><strong>Description:</strong> {slipoverPvtLtd.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {slipoverPvtLtd.businessType}</p>
                            <p><strong>Main Products:</strong> {slipoverPvtLtd.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default SlipoverPvtLtdComp;
