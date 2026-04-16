import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import './onioncomp.css';  // Import your CSS file for styling

const TabassumAutomationsComp = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            name: event.target.name.value,
            mobile: event.target.mobile.value,
            email: event.target.email.value,
            companyName: event.target.company.value,
            productOrService: event.target.productOrService.value
        };

        try {
            // Make a POST request to the API endpoint
            await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/submit-form`, formData);

            setFormSubmitted(true);

            event.target.reset();
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    // Data for Tabassum Automations
    const tabassumAutomations = {
        name: "Akbar Malek",
        companyName: "Tabassum Automations",
        productOrService: "Marine Items",
        productDescribe: 'Tabassum Automations specializes in providing marine items.',
        businessType: "Automation",
        mainProducts: "Marine Items", // Adjust this based on actual main products
        logoUrl: "/assets/tabassum_automations_logo.jpg" // Example path to company logo image
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
                    {/* Display Tabassum Automations information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={tabassumAutomations.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{tabassumAutomations.companyName}</h3>
                                <p><strong>Name:</strong> {tabassumAutomations.name}</p>
                                <p><strong>Description:</strong> {tabassumAutomations.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {tabassumAutomations.businessType}</p>
                            <p><strong>Main Products:</strong> {tabassumAutomations.mainProducts}</p>
                        </div>
                    </div>
                </div>
                <div className="sidebar-right">
                    <div className="forms-wrap">
                        <h2 className="form-title">Post Your Requirement</h2>
                        {formSubmitted && (
                            <p className="form-success">Form submitted successfully!</p>
                        )}
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input className="form-input" type="text" required id="name" name="name" value={tabassumAutomations.name} readOnly />
                            </div>
                            <div className="form-group">
                                <label htmlFor="mobile">Mobile Number:</label>
                                <input className="form-input" type="tel" required id="mobile" name="mobile" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input className="form-input" type="email" required id="email" name="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="company">Company Name:</label>
                                <input className="form-input" type="text" required id="company" name="company" value={tabassumAutomations.companyName} readOnly />
                            </div>
                            <div className="form-group">
                                <label htmlFor="productOrService">Product or Service:</label>
                                <input className="form-input" type="text" required id="productOrService" name="productOrService" value={tabassumAutomations.productOrService} readOnly />
                            </div>
                            <button type="submit" className="form-submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TabassumAutomationsComp;
