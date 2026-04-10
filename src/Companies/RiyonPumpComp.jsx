import React from "react";
import { Link } from "react-router-dom";
import './onioncomp.css'; // CSS file for styling
import CompanyForm from "./Companyform";
const RiyonPumpComp = () => {
    // Company data for Riyon Pump
    const riyonPumpCompany = {
        name: "rishit",
        companyName: "RIYON PUMP",
        productOrService: "Submersible Pump",
        productDescribe: "RIYON PUMP specializes in high-quality submersible pumps suitable for various industrial and residential applications.",
        businessType: "Manufacturer",
        mainProducts: "Submersible Pumps",
        logoUrl: "/assets/Submersible.jpg" // Example path to company logo image
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
                    {/* Display Riyon Pump company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={riyonPumpCompany.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{riyonPumpCompany.companyName}</h3>
                                <p><strong>Name:</strong> {riyonPumpCompany.name}</p>
                                <p><strong>Description:</strong> {riyonPumpCompany.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {riyonPumpCompany.businessType}</p>
                            <p><strong>Main Products:</strong> {riyonPumpCompany.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default RiyonPumpComp;
