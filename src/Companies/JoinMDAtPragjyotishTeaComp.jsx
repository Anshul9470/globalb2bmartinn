import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Adjust the CSS file path as necessary

const JoinMDAtPragjyotishTeaComp = () => {
    // Company data for Join MD at Pragjyotish Tea
    const joinMDAtPragjyotishTea = {
        name: "Jayanta Madhab",
        email: "Jayanta123@gmail.com",
        mobileNumber: "8471806497",
        companyName: "Join MD at Pragjyotish Tea",
        productOrService: "Tea Products",
        productDescribe: "Join MD at Pragjyotish Tea specializes in a range of premium tea products, offering high-quality tea for various tastes and preferences.",
        businessType: "Supplier",
        mainProducts: "Tea Products",
        logoUrl: "/assets/tea3.jpeg" // Example path to company logo image
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
                    {/* Display Join MD at Pragjyotish Tea company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={joinMDAtPragjyotishTea.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{joinMDAtPragjyotishTea.companyName}</h3>
                                <p><strong>Name:</strong> {joinMDAtPragjyotishTea.name}</p>
                                <p><strong>Description:</strong> {joinMDAtPragjyotishTea.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {joinMDAtPragjyotishTea.businessType}</p>
                            <p><strong>Main Products:</strong> {joinMDAtPragjyotishTea.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default JoinMDAtPragjyotishTeaComp;
