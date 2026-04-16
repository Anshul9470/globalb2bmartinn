import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Ensure to adjust CSS file path as necessary

const RnMarketingComp = () => {
    // Company data for RN Marketing
    const rnMarketing = {
        name: "RN marketing",
        companyName: "RN Marketing",
        productOrService: "Pipes & Fittings",
        productDescribe: "RN Marketing specializes in providing high-quality pipes and fittings for various industrial and residential applications.",
        businessType: "Supplier",
        mainProducts: "Pipes & Fittings",
        logoUrl: "/assets/pipe3.jpg" // Example path to company logo image
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
                    {/* Display RN Marketing company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={rnMarketing.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{rnMarketing.companyName}</h3>
                                <p><strong>Name:</strong> {rnMarketing.name}</p>
                                <p><strong>Description:</strong> {rnMarketing.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {rnMarketing.businessType}</p>
                            <p><strong>Main Products:</strong> {rnMarketing.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default RnMarketingComp;
