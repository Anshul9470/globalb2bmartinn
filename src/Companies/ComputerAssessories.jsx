import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Adjust the CSS file path as necessary

const ComputerAccessoriesComp = () => {
    // Company data for Computer Accessories
    const computerAccessories = {
        name: "heersh",
        email: "heersh123@gmail.com",
        mobileNumber: "7022799690",
        companyName: "Computer Accessories",
        productOrService: "Computer Accessories",
        productDescribe: "Computer Accessories specializes in providing a wide range of accessories for computers, including peripherals, cables, and storage solutions.",
        businessType: "Supplier",
        mainProducts: "Computer Accessories",
        logoUrl: "/assets/comp1.jpeg" // Example path to company logo image
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
                    {/* Display Computer Accessories company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={computerAccessories.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{computerAccessories.companyName}</h3>
                                <p><strong>Name:</strong> {computerAccessories.name}</p>
                                <p><strong>Description:</strong> {computerAccessories.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {computerAccessories.businessType}</p>
                            <p><strong>Main Products:</strong> {computerAccessories.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default ComputerAccessoriesComp;
