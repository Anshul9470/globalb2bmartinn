import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Adjust the CSS file path as necessary

const PKSportsComp = () => {
    // Company data for P.K sports
    const pkSports = {
        name: "munesh kumar",
        email: "muneshkumar12@gmail.com",
        mobileNumber: "9756906735",
        companyName: "P.K sports",
        productOrService: "Bat",
        productDescribe: "P.K sports specializes in manufacturing high-quality cricket bats suitable for professional and amateur players alike.",
        businessType: "Manufacturer",
        mainProducts: "Cricket Bats",
        logoUrl: "/assets/toy10.jpeg" // Example path to company logo image
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
                    {/* Display P.K sports company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={pkSports.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{pkSports.companyName}</h3>
                                <p><strong>Name:</strong> {pkSports.name}</p>
                                <p><strong>Description:</strong> {pkSports.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {pkSports.businessType}</p>
                            <p><strong>Main Products:</strong> {pkSports.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default PKSportsComp;
