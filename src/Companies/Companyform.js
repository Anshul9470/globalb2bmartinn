import React, { useState } from 'react';
import axios from 'axios';

const CompanyForm = () => {
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

    return (
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
    );
};

export default CompanyForm;
