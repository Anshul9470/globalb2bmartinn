import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Adjust the import path as necessary
import './onioncomp.css'; // Adjust the CSS file path as necessary

const FebrolElevatorEscalatorComp = () => {
    // Company data for Febrol Elevator & Escalator LLP
    const companyData = {
        _id: "unique-id-febrol-elevator", // Replace with a unique ID if needed
        name: "cx",
        email: "EscalatorLLP1542@gmail.com",
        mobileNumber: "9999885117",
        companyName: "Febrol Elevator & Escalator LLP",
        productOrService: "Febrol Elevator & Escalator LLP",
        imgSrc: "/assets/lift2.jpeg",  // Placeholder for image path
        mainProducts: "Elevators, Escalators, Lift Systems",
        altText: "Febrol Elevator & Escalator LLP - Elevators and Escalators",
        years: "15 YRS",  // Placeholder for years of experience
        location: "Mumbai, Maharashtra, India",  // Placeholder for location
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
                    {/* Display Febrol Elevator & Escalator LLP information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={companyData.imgSrc} alt={companyData.altText} />
                            </div>
                            <div className="company-details">
                                <h3>{companyData.companyName}</h3>
                                <p><strong>Description:</strong> {companyData.productOrService}</p>

                                <p><strong>Location:</strong> {companyData.location}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <p><strong>Main Products:</strong> {companyData.mainProducts}</p>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default FebrolElevatorEscalatorComp;
