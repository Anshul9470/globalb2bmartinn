import React from "react";
import { Link } from "react-router-dom";
import './onioncomp.css'; // CSS file for styling
import CompanyForm from "./Companyform";

const AdvancePolyPackComp = () => {

    const advancePolyPackCompany = {
        name: "ravi",
        companyName: "Advance Poly Pack",
        productOrService: "Packing Items",
        productDescribe: "Advance Poly Pack specializes in a variety of packing items, offering high-quality packaging solutions for various industries.",
        businessType: "Supplier",
        mainProducts: "Packing Items, Packaging Solutions",
        logoUrl: "/assets/plastic-bag.jpg" // Example path to company logo image
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
                    {/* Display Advance Poly Pack company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={advancePolyPackCompany.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{advancePolyPackCompany.companyName}</h3>
                                <p><strong>Name:</strong> {advancePolyPackCompany.name}</p>
                                <p><strong>Description:</strong> {advancePolyPackCompany.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {advancePolyPackCompany.businessType}</p>
                            <p><strong>Main Products:</strong> {advancePolyPackCompany.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default AdvancePolyPackComp;
