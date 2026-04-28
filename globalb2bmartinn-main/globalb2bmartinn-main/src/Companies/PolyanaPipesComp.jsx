import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Ensure this import path is correct
import './onioncomp.css'; // Adjust the CSS file path as necessary

const PolyanaPipesComp = () => {
    // Company data for POLYANA PVC PIPES AND PLASTIC PROFILE
    const companyData = {
        name: "Shashikant",
        email: "polyanaplasticprofile@gmail.com",
        mobileNumber: "+91 9823705852",
        companyName: "POLYANA PVC PIPES AND PLASTIC PROFILE",
        productOrService: "PVC Pipes and Plastic Profiles",
        productDescribe: "POLYANA PVC PIPES AND PLASTIC PROFILE specializes in providing high-quality PVC pipes and plastic profiles. Our products are designed for durability and efficiency, suitable for various industrial and domestic applications.",
        businessType: "Manufacturer",
        mainProducts: "PVC Pipes, Plastic Profiles",
        logoUrl: "/assets/poliana.jpeg", // Example path to company logo image
        address: "Gate No. 1403, Pune, Maharashtra, India - 411062",
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
                    {/* Display POLYANA PVC PIPES AND PLASTIC PROFILE information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={companyData.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{companyData.companyName}</h3>
                                <p><strong>Name:</strong> {companyData.name}</p>

                                <p><strong>Description:</strong> {companyData.productDescribe}</p>
                                <p><strong>Address:</strong> {companyData.address}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {companyData.businessType}</p>
                            <p><strong>Main Products:</strong> {companyData.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default PolyanaPipesComp;
