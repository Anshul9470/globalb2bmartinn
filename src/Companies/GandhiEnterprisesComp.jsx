import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Adjust the import path as necessary
import './onioncomp.css'; // Adjust the CSS file path as necessary

const GandhiEnterprisesComp = () => {
    // Company data for Gandhi Enterprises
    const companyData = {
        name: "Sourabh Gandhi",
        email: "SourabhGandhi@gmail.com",
        mobileNumber: "9422447618",
        companyName: "Gandhi Enterprises",
        productOrService: "Sugar",
        productDescribe: "Gandhi Enterprises specializes in the production and supply of high-quality sugar, catering to both wholesale and retail markets.",
        businessType: "Supplier",
        mainProducts: "Sugar",
        cityName: "Maharashtra",
        stateName: "", // Assuming no state name is provided, you might want to update this if needed
        imgSrc: "/assets/sugar.jpg", // Placeholder path to company image
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
                    {/* Display Gandhi Enterprises information */}
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
                        <p><strong>Location:</strong> {companyData.cityName}, {companyData.stateName || "N/A"}</p>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default GandhiEnterprisesComp;
