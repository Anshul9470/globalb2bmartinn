import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Adjust the CSS file path as necessary

const MauliAgroFarmComp = () => {
    // Company data for Mauli Agro Farm
    const mauliAgroFarm = {
        name: "vivek Makkar",
        companyName: "Mauli agro farm",
        productOrService: "Poultry Farm",
        productDescribe: "Mauli Agro Farm specializes in poultry farming, providing high-quality poultry products and services.",
        businessType: "Supplier",
        mainProducts: "Poultry Products",
        logoUrl: "/assets/chi.jpg" // Example path to company logo image
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
                    {/* Display Mauli Agro Farm company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={mauliAgroFarm.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{mauliAgroFarm.companyName}</h3>
                                <p><strong>Name:</strong> {mauliAgroFarm.name}</p>
                                <p><strong>Description:</strong> {mauliAgroFarm.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {mauliAgroFarm.businessType}</p>
                            <p><strong>Main Products:</strong> {mauliAgroFarm.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default MauliAgroFarmComp;
