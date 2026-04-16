import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Ensure to adjust CSS file path as necessary

const AmirajMetalcraftComp = () => {
    // Company data for Amiraj Metalcraft
    const amirajMetalcraft = {
        name: "Uday Limbani",
        companyName: "Amiraj Metalcraft",
        productOrService: "Connectors",
        productDescribe: "Amiraj Metalcraft specializes in manufacturing high-quality connectors for various industrial applications, ensuring durability and performance.",
        businessType: "Manufacturer",
        mainProducts: "Connectors",
        logoUrl: "/assets/connectors.jpeg" // Example path to company logo image
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
                    {/* Display Amiraj Metalcraft company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={amirajMetalcraft.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{amirajMetalcraft.companyName}</h3>
                                <p><strong>Name:</strong> {amirajMetalcraft.name}</p>
                                <p><strong>Description:</strong> {amirajMetalcraft.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {amirajMetalcraft.businessType}</p>
                            <p><strong>Main Products:</strong> {amirajMetalcraft.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default AmirajMetalcraftComp;
