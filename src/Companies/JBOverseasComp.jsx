import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Corrected import path
import './onioncomp.css'; // Adjust the CSS file path as necessary

const JBOverseasComp = () => {
    // Company data for JB Overseas
    const jbOverseas = {
        name: "Vivek Jitenderbhai Jivani",
        email: "viviek@gmail.com",
        mobileNumber: "9313706005",
        companyName: "JB Overseas",
        productOrService: "Designer Tshirts",
        productDescribe: "JB Overseas specializes in providing high-quality designer T-shirts. We ensure stylish and comfortable clothing that suits your fashion needs.",
        businessType: "Manufacturer",
        mainProducts: "Designer T-shirts",
        logoUrl: "/assets/ts.jpeg", // Example path to company logo image
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
                    {/* Display JB Overseas company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={jbOverseas.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{jbOverseas.companyName}</h3>
                                <p><strong>Name:</strong> {jbOverseas.name}</p>
                                <p><strong>Description:</strong> {jbOverseas.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {jbOverseas.businessType}</p>
                            <p><strong>Main Products:</strong> {jbOverseas.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default JBOverseasComp;
