import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Ensure to adjust the CSS file path as necessary

const LaborateTechnocracyComp = () => {
    // Company data for Laborate Technocracy
    const laborateTechnocracy = {
        name: "Amit",
        companyName: "Laborate Technocracy",
        productOrService: "Lab equipment manufacturer",
        productDescribe: "Laborate Technocracy specializes in manufacturing high-quality laboratory equipment, providing reliable and innovative solutions for various industries.",
        businessType: "Manufacturer",
        mainProducts: "Lab Equipment",
        logoUrl: "/assets/lab8.jpeg" // Example path to company logo image
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
                    {/* Display Laborate Technocracy company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={laborateTechnocracy.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{laborateTechnocracy.companyName}</h3>
                                <p><strong>Name:</strong> {laborateTechnocracy.name}</p>
                                <p><strong>Description:</strong> {laborateTechnocracy.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {laborateTechnocracy.businessType}</p>
                            <p><strong>Main Products:</strong> {laborateTechnocracy.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default LaborateTechnocracyComp;
