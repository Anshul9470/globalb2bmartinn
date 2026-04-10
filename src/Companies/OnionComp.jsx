import React, { useState } from "react";
import axios from 'axios';
import './onioncomp.css'; // CSS file for styling

const OnionComp = () => {
    // Sample data for companies

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            name: event.target.name.value,
            mobile: event.target.mobile.value,
            email: event.target.email.value,
            companyName: event.target.company.value,
            userType: event.target.userType.value
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

    const companies = [
        {
            name: "SPM Traders Gorkahpur Onion Mandi",
            dealsIn: "Fresh Ginger, Fresh Garlic, Fresh Red Onion, Fresh Tomato, Fresh Potato",
            businessType: "Supplier",
            Membership: "Premium Member",
            address: "Govt. Hospital Near Bus Stop Main Road, Dharmapuri, Tamil Nadu India",
            website: "https://www.spttradersnashiddkonionmandi.co.in",
            contactNo: "0000090"
        },
        {
            name: " yashRajbir Pvt Ltd",
            dealsIn: "Surti Wada Kolam Rice, Fresh Onion, Zeeba Premium Basmati Rice, Fresh Garlic, Dubar Basmati Rice, A Grade Onion, Premium Basmati Rice, White Basmati Rice, Red Onion",
            businessType: "Manufacturer / Supplier",
            Membership: " Free Member",
            address: "724, Bhuigaon, Ranpati pada Road, Vasai Virar, Mumbai, Maharashtra India",
            website: "https://www.yaddshaswigarlicandonionsupplier.in",
            contactNo: "089898999"
        },
        // Add more company objects as needed
    ];

    return (
        <div className="b2b-page">
            <div className="content-left">
                {companies.map((company, index) => (
                    <div className="company-card" key={index}>
                        <h3>{company.name}</h3>
                        <p><strong>Deals in:</strong> {company.dealsIn}</p>
                        <p><strong>Business Type:</strong> {company.businessType}</p>
                        <p><strong>Membership</strong> <span style={{ color: 'red' }}>{company.Membership}</span></p>
                        <p><strong>Address:</strong> {company.address}</p>
                        <p><strong>Website:</strong> <a href={company.website}>{company.website}</a></p>
                        <p><strong>Contact No.:</strong> {company.contactNo}</p>
                    </div>
                ))}
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
                            <input className="form-input" type="text" required id="name" name="name" />
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
                            <input className="form-input" type="text" required id="company" name="company" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="userType">Select User Type:</label>
                            <select id="userType" name="userType" className="form-input" required>
                                <option value="">Select User Type</option>
                                <option value="seller">Seller</option>
                                <option value="buyer">Buyer</option>
                            </select>
                        </div>
                        <button type="submit" className="form-submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default OnionComp;
