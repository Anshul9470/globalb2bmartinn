import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Adjust the import path as necessary
import './onioncomp.css'; // Adjust the CSS file path as necessary

const MokshitDrapesComp = () => {
    // Company data for Mokshit Drapes
    const companyData = {
        name: "Mahendra",
        email: "abc@gmail.com",
        mobileNumber: "9377297791",
        companyName: "Mokshit Drapes",
        productOrService: "Curtains & Ladies Blouse",
        productDescribe: "Mokshit Drapes offers a diverse range of high-quality curtains and ladies' blouses. Our products blend elegance and durability, ensuring customers receive stylish and functional designs for their home decor and fashion needs.",
        businessType: "Manufacturer",
        mainProducts: "Curtains, Ladies Blouse, Home & Fashion Textiles",
        logoUrl: "/assets/blouse1.jpeg", // Placeholder path to company logo image
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
                    {/* Display Mokshit Drapes information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={companyData.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{companyData.companyName}</h3>
                                <p><strong>Description:</strong> {companyData.productDescribe}</p>

                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <p><strong>Business Type:</strong> {companyData.businessType}</p>
                        <p><strong>Main Products:</strong> {companyData.mainProducts}</p>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default MokshitDrapesComp;
