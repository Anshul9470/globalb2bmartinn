// ContactCountryForm.jsx
import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import './ContactCountryForm.css'; // Import the CSS file

const ContactCountryForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        quantity: '',
        unit: '',
        productOrService: '',
        mobileNumber: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePhoneChange = (value) => {
        setFormData({ ...formData, mobileNumber: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Handle form submission here
    };

    return (
        <div className="contact-country-form">
            <h2>Contact Country Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="quantity">Quantity:</label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="unit">Unit:</label>
                    <select
                        id="unit"
                        name="unit"
                        value={formData.unit}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Unit</option>
                        <option value="kg">kg</option>
                        <option value="meter">meter</option>
                        <option value="pieces">pieces</option>
                        <option value="ton">ton</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="productOrService">Product/Service:</label>
                    <input
                        type="text"
                        id="productOrService"
                        name="productOrService"
                        value={formData.productOrService}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="mobileNumber">Mobile Number:</label>
                    <PhoneInput
                        id="mobileNumber"
                        international
                        value={formData.mobileNumber}
                        onChange={handlePhoneChange}
                        placeholder="Enter phone number"
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactCountryForm;
