import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Adjust the CSS file path as necessary

const ShadabCricketSportComp = () => {
    // Company data for Shadab Cricket Sport
    const shadabCricketSport = {
        name: "shadab",
        email: "shadabcricketsport12@gmail.com",
        mobileNumber: "7668257015",
        companyName: "Shadab Cricket Sport",
        productOrService: "Bat",
        productDescribe: "Shadab Cricket Sport specializes in manufacturing high-quality cricket bats suitable for professional and amateur players.",
        businessType: "Manufacturer",
        mainProducts: "Cricket Bats",
        logoUrl: "/assets/shadab-cricket-sport-logo.jpg" // Example path to company logo image
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
                    {/* Display Shadab Cricket Sport company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={shadabCricketSport.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{shadabCricketSport.companyName}</h3>
                                <p><strong>Name:</strong> {shadabCricketSport.name}</p>
                                <p><strong>Description:</strong> {shadabCricketSport.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {shadabCricketSport.businessType}</p>
                            <p><strong>Main Products:</strong> {shadabCricketSport.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default ShadabCricketSportComp;
