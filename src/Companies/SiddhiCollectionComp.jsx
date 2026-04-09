import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Adjust the CSS file path as necessary

const SiddhiCollectionComp = () => {
    // Company data for Siddhi Collection
    const siddhiCollection = {
        name: "Mrs. Sadhana",
        email: "sadhana241054@gmail.com",
        password: "sadhana@123",
        mobileNumber: "7011860634",
        companyName: "SIDDHI COLLECTION",
        productOrService: "Chanderi saree",
        productDescribe: "Siddhi Collection specializes in elegant Chanderi sarees, showcasing traditional Indian craftsmanship.",
        businessType: "Retailer",
        mainProducts: "Chanderi Sarees",
        logoUrl: "/assets/saree4.jpeg" // Example path to company logo image
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
                    {/* Display Siddhi Collection company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={siddhiCollection.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{siddhiCollection.companyName}</h3>
                                <p><strong>Name:</strong> {siddhiCollection.name}</p>
                                <p><strong>Description:</strong> {siddhiCollection.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {siddhiCollection.businessType}</p>
                            <p><strong>Main Products:</strong> {siddhiCollection.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default SiddhiCollectionComp;
