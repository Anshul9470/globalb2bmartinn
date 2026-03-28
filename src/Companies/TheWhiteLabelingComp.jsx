import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import './onioncomp.css';  // Import your CSS file for styling

const TheWhiteLabelingComp = () => {
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

    // Data for The White Labeling
    const theWhiteLabeling = {
        name: "naman",
        companyName: "The White Labeling",
        productOrService: "shirt manufacturers",
        productDescribe: 'The White Labeling specializes in manufacturing high-quality shirts.',
        businessType: "Manufacturer",
        mainProducts: "Shirts, T-shirts, Formal Wear",
        logoUrl: "/assets/the_white_labeling_logo.jpg" // Example path to company logo image
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
                    {/* Display The White Labeling information */}
                    <div className="company-card">
                        <div className="company-header">
                            <div className="company-logo">
                                <img src={theWhiteLabeling.logoUrl} alt="Company Logo" />
                            </div>
                            <div className="company-details">
                                <h3>{theWhiteLabeling.companyName}</h3>
                                <p><strong>Name:</strong> {theWhiteLabeling.name}</p>
                                <p><strong>Description:</strong> {theWhiteLabeling.productDescribe}</p>
                                <div className="imp-btns">
                                    <button style={{ backgroundColor: '#4ee54e' }} className="main-btns">
                                        <Link to={'/register-buyer'}>Connect Now</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="company-description">
                            <p><strong>Business Type:</strong> {theWhiteLabeling.businessType}</p>
                            <p><strong>Main Products:</strong> {theWhiteLabeling.mainProducts}</p>
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
                                <input className="form-input" type="text" required id="name" name="name" value={theWhiteLabeling.name} readOnly />
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
                                <input className="form-input" type="text" required id="company" name="company" value={theWhiteLabeling.companyName} readOnly />
                            </div>
                            <div className="form-group">
                                <label htmlFor="productOrService">Product or Service:</label>
                                <input className="form-input" type="text" required id="productOrService" name="productOrService" value={theWhiteLabeling.productOrService} readOnly />
                            </div>
                            <button type="submit" className="form-submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TheWhiteLabelingComp;
