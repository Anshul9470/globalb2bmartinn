import React from "react";
import { Link } from "react-router-dom";
import CompanyForm from "./Companyform";
import './onioncomp.css'; // Ensure to adjust CSS file path as necessary

const DollarEquipmentsComp = () => {
    // Company data for Dollar Equipments
    const dollarEquipments = {
        name: "Sufiyan Malik",
        companyName: "Dollar Equipments",
        productOrService: "Kitchen Equipments",
        productDescribe: "Dollar Equipments specializes in high-quality kitchen equipment, offering a range of products to meet various culinary needs.",
        businessType: "Manufacturer",
        mainProducts: "Kitchen Equipments",
        logoUrl: "/assets/kitchen3.jpeg" // Example path to company logo image
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
                    {/* Display Dollar Equipments company information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={dollarEquipments.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{dollarEquipments.companyName}</h3>
                                <p><strong>Name:</strong> {dollarEquipments.name}</p>
                                <p><strong>Description:</strong> {dollarEquipments.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {dollarEquipments.businessType}</p>
                            <p><strong>Main Products:</strong> {dollarEquipments.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <CompanyForm />
            </div>
        </>
    );
}

export default DollarEquipmentsComp;
