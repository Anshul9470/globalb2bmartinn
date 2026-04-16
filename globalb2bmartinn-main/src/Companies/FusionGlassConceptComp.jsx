import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Adjust the CSS file path as necessary

const FusionGlassConceptComp = () => {
    // Company data for Fusion Glass Concept
    const fusionGlassConcept = {
        name: "Mehul Gori",
        email: "go4fusion@gmail.com",
        password: "mehul@123",
        mobileNumber: "8866028619",
        companyName: "FUSION GLASS CONCEPT",
        productOrService: "Bath Fitting Products",
        productDescribe: "Fusion Glass Concept specializes in modern bath fitting products, offering a wide range of stylish and functional solutions.",
        businessType: "Manufacturer",
        mainProducts: "Bath Fittings",
        logoUrl: "/assets/bath8.jpeg" // Example path to company logo image
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
                    {/* Display Fusion Glass Concept company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={fusionGlassConcept.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{fusionGlassConcept.companyName}</h3>
                                <p><strong>Name:</strong> {fusionGlassConcept.name}</p>
                                <p><strong>Description:</strong> {fusionGlassConcept.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {fusionGlassConcept.businessType}</p>
                            <p><strong>Main Products:</strong> {fusionGlassConcept.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default FusionGlassConceptComp;
