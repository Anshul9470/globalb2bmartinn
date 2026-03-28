import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Corrected import path
import './onioncomp.css'; // Adjust the CSS file path as necessary

const DhramaGoodsExportsComp = () => {
    // Company data for Dhrama Goods Exports Pvt Ltd
    const dhramaGoodsExports = {
        name: "Mr. Manoj Kumar Yadav",
        email: "dhramagepl@gmail.com",
        mobileNumber: "9646108921",
        companyName: "DHRAMA GOODS EXPORTS PVT LTD",
        productOrService: "Statue Manufacturer",
        productDescribe: "Dhrama Goods Exports Pvt Ltd specializes in manufacturing a wide range of high-quality statues, providing exquisite designs and durable craftsmanship for various needs and preferences.",
        businessType: "Manufacturer",
        mainProducts: "Statues",
        logoUrl: "/assets/art2.jpg", // Example path to company logo image
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
                    {/* Display Dhrama Goods Exports Pvt Ltd company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={dhramaGoodsExports.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{dhramaGoodsExports.companyName}</h3>
                                <p><strong>Name:</strong> {dhramaGoodsExports.name}</p>
                                <p><strong>Description:</strong> {dhramaGoodsExports.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {dhramaGoodsExports.businessType}</p>
                            <p><strong>Main Products:</strong> {dhramaGoodsExports.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default DhramaGoodsExportsComp;
