import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Ensure to adjust CSS file path as necessary

const FaizanZippersComp = () => {
    // Company data for Faizan Zippers
    const faizanZippers = {
        name: "Zishan Alam",
        companyName: "Faizan Zippers",
        productOrService: "Zipper",
        productDescribe: "Faizan Zippers specializes in high-quality zippers for various applications, offering a range of sizes and types.",
        businessType: "Manufacturer",
        mainProducts: "Zippers",
        logoUrl: "/assets/zipper2.jpeg" // Example path to company logo image
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
                    {/* Display Faizan Zippers company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={faizanZippers.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{faizanZippers.companyName}</h3>
                                <p><strong>Name:</strong> {faizanZippers.name}</p>
                                <p><strong>Description:</strong> {faizanZippers.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {faizanZippers.businessType}</p>
                            <p><strong>Main Products:</strong> {faizanZippers.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default FaizanZippersComp;
