import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform"; // Corrected import path
import './onioncomp.css'; // Adjust the CSS file path as necessary

const MHHandicraftsComp = () => {
    // Company data for MH Handicraft's
    const mhHandicrafts = {
        name: "abdul hasan",
        email: "abdul123@gmail.com",
        mobileNumber: "9897383666",
        companyName: "MH Handicraft's",
        productOrService: "Furniture Manufacture",
        productDescribe: "MH Handicraft's specializes in crafting high-quality furniture with intricate designs and durable materials, offering a range of options for enhancing your home or office decor.",
        businessType: "Manufacturer",
        mainProducts: "Furniture",
        logoUrl: "/assets/hands.jpg", // Example path to company logo image
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
                    {/* Display MH Handicraft's company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={mhHandicrafts.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{mhHandicrafts.companyName}</h3>
                                <p><strong>Name:</strong> {mhHandicrafts.name}</p>
                                <p><strong>Description:</strong> {mhHandicrafts.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {mhHandicrafts.businessType}</p>
                            <p><strong>Main Products:</strong> {mhHandicrafts.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default MHHandicraftsComp;
