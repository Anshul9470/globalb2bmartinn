import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Adjust the import path as necessary
import './onioncomp.css'; // Adjust the CSS file path as necessary

const JaiShreeKrishnaDecorationComp = () => {
    // Company data for Jai Shree Krishna Decoration Company
    const companyData = {
        _id: "b1234567890abc5678",
        name: "Harshit Gupta",
        email: "hrstgupta1997@gmail.com",
        mobileNumber: "+91 7417 918 221",
        companyName: "Jai Shree Krishna Decoration Company",
        productOrService: " is a leading wholesaler of a diverse range of glassware, including lemon sets, bowl sets, glasses, and bottles. We are renowned for our sturdy, high-quality products at competitive prices, and our long-term client relationships speak to our commitment to satisfaction.",
        imgSrc: "/assets/kris3.webp",  // Placeholder for image path
        mainProducts: "Decorative Glass Items, Home Decor, Glass Art",
        altText: "Jai Shree Krishna Decoration Company - Glass Products",
        years: "10 YRS",  // Placeholder for years of experience
        location: "Firozabad, Uttar Pradesh, India",  // Placeholder for location
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
                    {/* Display Jai Shree Krishna Decoration Company information */}
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

export default JaiShreeKrishnaDecorationComp;
