import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Ensure to adjust CSS file path as necessary

const RobustechAlloysComp = () => {
    // Company data for Robustech Alloys (INDIA) Pvt Ltd
    const robustechAlloys = {
        name: "Shubham Rajourh",
        companyName: "Robustech Alloys (INDIA) Pvt Ltd",
        productOrService: "Bush",
        productDescribe: "Robustech Alloys (INDIA) Pvt Ltd specializes in manufacturing high-quality bush components, designed for durability and performance in various industrial applications.",
        businessType: "Manufacturer",
        mainProducts: "Bush",
        logoUrl: "/assets/clay3.jpeg" // Example path to company logo image
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
                    {/* Display Robustech Alloys company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={robustechAlloys.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{robustechAlloys.companyName}</h3>
                                <p><strong>Name:</strong> {robustechAlloys.name}</p>
                                <p><strong>Description:</strong> {robustechAlloys.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {robustechAlloys.businessType}</p>
                            <p><strong>Main Products:</strong> {robustechAlloys.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default RobustechAlloysComp;
