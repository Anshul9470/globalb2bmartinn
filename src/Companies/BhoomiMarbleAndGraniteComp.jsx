import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Ensure to adjust CSS file path as necessary

const BhoomiMarbleAndGraniteComp = () => {
    // Company data for Bhoomi Marble and Granite
    const bhoomiMarbleAndGranite = {
        name: "Mahesh Choudhary",
        companyName: "Bhoomi Marble and Granite",
        productOrService: "Marble",
        productDescribe: "Bhoomi Marble and Granite specializes in high-quality marble and granite products for various applications, offering a range of colors and finishes.",
        businessType: "Manufacturer",
        mainProducts: "Marble and Granite",
        logoUrl: "/assets/marble_granite.jpeg" // Example path to company logo image
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
                    {/* Display Bhoomi Marble and Granite company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={bhoomiMarbleAndGranite.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{bhoomiMarbleAndGranite.companyName}</h3>
                                <p><strong>Name:</strong> {bhoomiMarbleAndGranite.name}</p>
                                <p><strong>Description:</strong> {bhoomiMarbleAndGranite.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {bhoomiMarbleAndGranite.businessType}</p>
                            <p><strong>Main Products:</strong> {bhoomiMarbleAndGranite.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default BhoomiMarbleAndGraniteComp;
