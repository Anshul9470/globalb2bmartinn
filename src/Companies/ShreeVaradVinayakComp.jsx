import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Adjust the import path as necessary
import './onioncomp.css'; // Adjust the CSS file path as necessary

const ShreeVaradVinayakComp = () => {
    // Company data for Shree Varad Vinayak Traders
    const companyData = {
        name: "Shonan Pagare",
        email: "ShonanPagare@gmail.com",
        mobileNumber: "9773816972",
        companyName: "Shree Varad Vinayak Traders",
        productOrService: "Raisins",
        productDescribe: "Shree Varad Vinayak Traders is a leading supplier of premium-quality raisins, providing a wide range of raisin varieties to suit all your culinary needs.",
        businessType: "Supplier",
        mainProducts: "Raisins, Dry Fruits, Nuts",
        cityName: "Pune",
        stateName: "Maharashtra",
        imgSrc: "/assets/resins1.jpeg", // Placeholder path to company image
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
                    {/* Display Shree Varad Vinayak Traders information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={companyData.imgSrc} alt="Company Image" />
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
                        <p><strong>Location:</strong> {companyData.cityName}, {companyData.stateName || "Maharashtra"}</p>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default ShreeVaradVinayakComp;
