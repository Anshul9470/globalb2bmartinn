import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Adjust the CSS file path as necessary

const KunalEngineeringWorksComp = () => {
    // Company data for Kunal Engineering Works
    const kunalEngineeringWorks = {
        name: "MK Singh",
        email: "kunalengineering97@gmail.com",
        mobileNumber: "9971304385",
        companyName: "KUNAL ENGINEERING WORKS",
        productOrService: "Machine Manufacturer",
        productDescribe: "Kunal Engineering Works specializes in manufacturing a wide range of machines, catering to various industrial needs.",
        businessType: "Manufacturer",
        mainProducts: "Machines",
        logoUrl: "/assets/machine5.jpeg" // Example path to company logo image
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
                    {/* Display Kunal Engineering Works company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={kunalEngineeringWorks.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{kunalEngineeringWorks.companyName}</h3>
                                <p><strong>Name:</strong> {kunalEngineeringWorks.name}</p>
                                <p><strong>Description:</strong> {kunalEngineeringWorks.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {kunalEngineeringWorks.businessType}</p>
                            <p><strong>Main Products:</strong> {kunalEngineeringWorks.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default KunalEngineeringWorksComp;
