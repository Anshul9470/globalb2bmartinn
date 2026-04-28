import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Adjust the CSS file path as necessary

const RichDecorComp = () => {
    // Company data for Rich Decor
    const richDecor = {
        name: "RD khan",
        email: "RDkhan12@gmail.com",
        mobileNumber: "9029721100",
        companyName: "rich décor",
        productOrService: "Gym Mats, Curtains",
        productDescribe: "Rich Décor specializes in providing high-quality gym mats and curtains, catering to both commercial and residential interior needs.",
        businessType: "Supplier",
        mainProducts: "Gym Mats, Curtains",
        logoUrl: "/assets/gym9.jpeg" // Example path to company logo image
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
                    {/* Display Rich Decor company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={richDecor.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{richDecor.companyName}</h3>
                                <p><strong>Name:</strong> {richDecor.name}</p>
                                <p><strong>Description:</strong> {richDecor.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {richDecor.businessType}</p>
                            <p><strong>Main Products:</strong> {richDecor.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default RichDecorComp;
