import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Ensure to adjust CSS file path as necessary

const OptimalSurgicalsComp = () => {
    // Company data for Optimal Surgicals
    const optimalSurgicals = {
        name: "Syed Sajid Nawaz Razvi",
        companyName: "Optimal Surgicals",
        productOrService: "Surgicals and Medical Equipment",
        productDescribe: "Optimal Surgicals specializes in providing a wide range of high-quality surgical and medical equipment, designed to meet the needs of healthcare professionals and institutions.",
        businessType: "Supplier",
        mainProducts: "Surgical Instruments, Medical Equipment",
        logoUrl: "/assets/lab8.jpeg" // Example path to company logo image
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
                    {/* Display Optimal Surgicals company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={optimalSurgicals.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{optimalSurgicals.companyName}</h3>
                                <p><strong>Name:</strong> {optimalSurgicals.name}</p>
                                <p><strong>Description:</strong> {optimalSurgicals.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {optimalSurgicals.businessType}</p>
                            <p><strong>Main Products:</strong> {optimalSurgicals.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default OptimalSurgicalsComp;
