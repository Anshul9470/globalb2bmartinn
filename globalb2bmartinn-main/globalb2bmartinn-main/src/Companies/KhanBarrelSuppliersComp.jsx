import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Adjust the CSS file path as necessary

const KhanBarrelSuppliersComp = () => {
    // Company data for Khan Barrel Suppliers
    const khanBarrelSuppliers = {
        name: "Rafik khan",
        email: "rafik@123gmail.com",
        mobileNumber: "9321785376",
        companyName: "Khan Barrel Suppliers",
        productOrService: "HDPE Plastic Barrel Supplier",
        productDescribe: "Khan Barrel Suppliers specializes in supplying high-density polyethylene (HDPE) plastic barrels for various industrial and commercial uses.",
        businessType: "Supplier",
        mainProducts: "HDPE Plastic Barrels",
        logoUrl: "/assets/barel1.jpeg"
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
                    {/* Display Khan Barrel Suppliers company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={khanBarrelSuppliers.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{khanBarrelSuppliers.companyName}</h3>
                                <p><strong>Name:</strong> {khanBarrelSuppliers.name}</p>
                                <p><strong>Description:</strong> {khanBarrelSuppliers.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {khanBarrelSuppliers.businessType}</p>
                            <p><strong>Main Products:</strong> {khanBarrelSuppliers.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default KhanBarrelSuppliersComp;
