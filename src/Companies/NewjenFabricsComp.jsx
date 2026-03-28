import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Corrected import path
import './onioncomp.css'; // Adjust the CSS file path as necessary

const NewjenFabricsComp = () => {
    // Company data for Newjen Fabrics
    const newjenFabrics = {
        name: "Derender Mehta",
        email: "derender123@gmail.com",
        mobileNumber: "8850478918",
        companyName: "Newjen Fabrics",
        productOrService: "Fabrics",
        productDescribe: "Newjen Fabrics specializes in offering a wide range of high-quality fabrics to meet the diverse needs of the textile industry.",
        businessType: "Supplier",
        mainProducts: "Cotton Fabrics, Silk Fabrics, Synthetic Fabrics",
        logoUrl: "/assets/fabric2.jpeg", // Example path to company logo image
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
                    {/* Display Newjen Fabrics company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={newjenFabrics.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{newjenFabrics.companyName}</h3>
                                <p><strong>Name:</strong> {newjenFabrics.name}</p>
                                <p><strong>Description:</strong> {newjenFabrics.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {newjenFabrics.businessType}</p>
                            <p><strong>Main Products:</strong> {newjenFabrics.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default NewjenFabricsComp;
