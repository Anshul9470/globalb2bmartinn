import React from "react";
import { Link } from "react-router-dom";
import './onioncomp.css'; // CSS file for styling
import CompanyForm from "./Companyform";
const VmBlissComp = () => {
    // Company data for VM BLISS
    const vmBlissCompany = {
        name: "Gaurav",
        companyName: "Shoolini Saffron pvt ltd",
        productOrService: "Saffron Manufacturers",
        productDescribe: "Shoolini Saffron pvt ltd specializes in high-quality saffron, providing premium saffron products to cater to culinary and medicinal needs.",
        businessType: "Manufacturer  saffron Farming Trainig",
        mainProducts: "Saffron",
        logoUrl: "/assets/vs-2.jpeg" // Example path to company logo image
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
                    {/* Display VM BLISS company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={vmBlissCompany.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{vmBlissCompany.companyName}</h3>
                                <p><strong>Name:</strong> {vmBlissCompany.name}</p>
                                <p><strong>Description:</strong> {vmBlissCompany.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {vmBlissCompany.businessType}</p>
                            <p><strong>Main Products:</strong> {vmBlissCompany.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default VmBlissComp;
