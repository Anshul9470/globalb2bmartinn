import React from "react";
import { Link } from "react-router-dom";
import './onioncomp.css'; // CSS file for styling
import CompanyForm from "./Companyform";

const JKGroupComp = () => {

    const jkGroupCompany = {
        name: "Suresh",
        companyName: "JK GROUP",
        productOrService: "PVC Products",
        productDescribe: "JK GROUP specializes in manufacturing and supplying a wide range of PVC products, including pipes, fittings, and other related items, ensuring quality and durability.",
        businessType: "Manufacturer",
        mainProducts: "PVC Pipes, PVC Fittings",
        logoUrl: "/assets/pvc-pipe.jpg" // Example path to company logo image
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
                    {/* Display JK GROUP company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={jkGroupCompany.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{jkGroupCompany.companyName}</h3>
                                <p><strong>Name:</strong> {jkGroupCompany.name}</p>
                                <p><strong>Description:</strong> {jkGroupCompany.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {jkGroupCompany.businessType}</p>
                            <p><strong>Main Products:</strong> {jkGroupCompany.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default JKGroupComp;
