import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Ensure the import path is correct
import './onioncomp.css'; // Adjust the CSS file path as necessary

const TriratnanavyanIntlEximComp = () => {
    // Company data for TRIRATNANAVYAN INTERNATIONAL EXIM PRIVATE LIMITED
    const companyData = {
        name: "Mr. Milind Vithoba Suryawanshi",
        email: "tnavyaniepl2023@gmail.com",
        mobileNumber: "9623009571",
        companyName: "TRIRATNANAVYAN INTERNATIONAL EXIM PRIVATE LIMITED",
        productOrService: "Garlic Supplier",
        productDescribe: "TRIRATNANAVYAN INTERNATIONAL EXIM PRIVATE LIMITED is a trusted supplier of high-quality garlic, catering to both local and international markets with fresh and organic garlic.",
        businessType: "Supplier",
        mainProducts: "Garlic",
        logoUrl: "/assets/garlic1.jpeg", // Placeholder path to company logo image
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
                    {/* Display TRIRATNANAVYAN INTERNATIONAL EXIM PRIVATE LIMITED information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={companyData.logoUrl} alt="Garlic Supplier - TRIRATNANAVYAN INTERNATIONAL EXIM PRIVATE LIMITED" />
                            </div>
                            <div className="company-details">
                                <h3>{companyData.companyName}</h3>
                                <p><strong>Description:</strong> {companyData.productDescribe}</p>

                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <p><strong>Business Type:</strong> {companyData.businessType}</p>
                        <p><strong>Main Products:</strong> {companyData.mainProducts}</p>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default TriratnanavyanIntlEximComp;
