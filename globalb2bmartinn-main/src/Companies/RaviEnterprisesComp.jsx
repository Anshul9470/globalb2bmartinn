import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Adjust the CSS file path as necessary

const RaaveEnterprisesComp = () => {
    // Company data for Raave Enterprises
    const raaveEnterprises = {
        name: "Sagar Vasoya",
        email: "sagarvasoya85@gmail.com",
        mobileNumber: "8140075907",
        companyName: "Raave Enterprises",
        productOrService: "Brass Gas Valves",
        productDescribe: "Raave Enterprises specializes in manufacturing and supplying high-quality brass gas valves, ensuring safety and reliability in gas systems.",
        businessType: "Manufacturer",
        mainProducts: "Brass Gas Valves",
        logoUrl: "/assets/gasVal.jpeg" // Example path to company logo image
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
                    {/* Display Raave Enterprises company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={raaveEnterprises.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{raaveEnterprises.companyName}</h3>
                                <p><strong>Name:</strong> {raaveEnterprises.name}</p>
                                <p><strong>Description:</strong> {raaveEnterprises.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {raaveEnterprises.businessType}</p>
                            <p><strong>Main Products:</strong> {raaveEnterprises.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default RaaveEnterprisesComp;
