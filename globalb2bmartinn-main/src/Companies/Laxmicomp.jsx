import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // CSS file for styling

const LaxminarainAndCompanyComp = () => {
    // Company data for LAXMINARAIN AND COMPANY
    const laxminarainCompany = {
        name: "Puneet Agrawal",
        companyName: "LAXMINARAIN AND COMPANY",
        productOrService: "Manufacturer of Yellow Maize",
        productDescribe: "LAXMINARAIN AND COMPANY specializes in the production of high-quality yellow maize, ensuring top-grade agricultural produce for various applications.",
        businessType: "Manufacturer",
        mainProducts: "Yellow Maize",
        logoUrl: "/assets/vs-4.jpeg" // Example path to company logo image
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
                    {/* Display LAXMINARAIN AND COMPANY company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={laxminarainCompany.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{laxminarainCompany.companyName}</h3>
                                <p><strong>Name:</strong> {laxminarainCompany.name}</p>
                                <p><strong>Description:</strong> {laxminarainCompany.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {laxminarainCompany.businessType}</p>
                            <p><strong>Main Products:</strong> {laxminarainCompany.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default LaxminarainAndCompanyComp;
