import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Adjust the CSS file path as necessary

const SumerClothCompanyComp = () => {
    // Company data for Sumer Cloth Company
    const sumerClothCompany = {
        name: "Kamal Sing",
        email: "kamalsing@gmail.com",
        mobileNumber: "8209613079",
        companyName: "Sumer Cloth Company",
        productOrService: "Ladies Paticot",
        productDescribe: "Sumer Cloth Company specializes in providing a wide range of stylish and comfortable ladies paticots, catering to fashion and comfort needs.",
        businessType: "Manufacturer",
        mainProducts: "Ladies Paticot",
        logoUrl: "/assets/patticoat1.jpeg" // Example path to company logo image
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
                    {/* Display Sumer Cloth Company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={sumerClothCompany.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{sumerClothCompany.companyName}</h3>
                                <p><strong>Name:</strong> {sumerClothCompany.name}</p>
                                <p><strong>Description:</strong> {sumerClothCompany.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {sumerClothCompany.businessType}</p>
                            <p><strong>Main Products:</strong> {sumerClothCompany.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default SumerClothCompanyComp;
