import React from "react";
import { Link } from "react-router-dom";
import './onioncomp.css'; // CSS file for styling
import CompanyForm from "./Companyform";

const SwanTextilesComp = () => {

    const swanTextilesCompany = {
        name: "MOHIT",
        companyName: "Swan Textiles",
        productOrService: "HOSIERY GARMENTS",
        productDescribe: "Swan Textiles specializes in manufacturing and supplying hosiery garments, offering a wide range of comfortable and stylish clothing.",
        businessType: "Manufacturer",
        mainProducts: "Hosiery Garments",
        logoUrl: "/assets/pil.webp" // Example path to company logo image
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
                    {/* Display Swan Textiles company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={swanTextilesCompany.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{swanTextilesCompany.companyName}</h3>
                                <p><strong>Name:</strong> {swanTextilesCompany.name}</p>
                                <p><strong>Description:</strong> {swanTextilesCompany.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {swanTextilesCompany.businessType}</p>
                            <p><strong>Main Products:</strong> {swanTextilesCompany.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default SwanTextilesComp;
