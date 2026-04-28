import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Corrected import path
import './onioncomp.css'; // Adjust the CSS file path as necessary

const MSBasuTextileComp = () => {
    // Company data for M/S Basu Textile
    const msBasuTextile = {
        name: "Ashish",
        email: "basutextile@gmail.com",
        mobileNumber: "9832155429",
        companyName: "M/S Basu Textile",
        productOrService: "Textile, Sarees",
        productDescribe: "M/S Basu Textile offers a wide range of textiles and sarees, combining traditional craftsmanship with modern designs.",
        businessType: "Manufacturer",
        mainProducts: "Textiles, Sarees, Fabric",
        logoUrl: "/assets/saree.jpeg", // Example path to company logo image
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
                    {/* Display M/S Basu Textile company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={msBasuTextile.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{msBasuTextile.companyName}</h3>
                                <p><strong>Name:</strong> {msBasuTextile.name}</p>
                                <p><strong>Description:</strong> {msBasuTextile.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {msBasuTextile.businessType}</p>
                            <p><strong>Main Products:</strong> {msBasuTextile.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default MSBasuTextileComp;
