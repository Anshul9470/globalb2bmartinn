import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Adjust the CSS file path as necessary

const AmbikaBiochemComp = () => {
    // Company data for Ambika Biochem
    const ambikaBiochem = {
        name: "Arun Kumar Kansal",
        email: "AMBIKABIOCHEM@GMAIL.COM",
        mobileNumber: "9636055259",
        companyName: "AMBIKA BIOCHEM",
        productOrService: "Fertilizers and Agri Products",
        productDescribe: "Ambika Biochem specializes in providing high-quality fertilizers and agricultural products, catering to the needs of farmers and agricultural professionals.",
        businessType: "Supplier",
        mainProducts: "Fertilizers and Agri Products",
        logoUrl: "/assets/fer7.jpeg" // Example path to company logo image
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
                    {/* Display Ambika Biochem company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={ambikaBiochem.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{ambikaBiochem.companyName}</h3>
                                <p><strong>Name:</strong> {ambikaBiochem.name}</p>
                                <p><strong>Description:</strong> {ambikaBiochem.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {ambikaBiochem.businessType}</p>
                            <p><strong>Main Products:</strong> {ambikaBiochem.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default AmbikaBiochemComp;
