// ContactCountryForm.jsx
import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import './ContactCountryForm.css';

const KEYWORDS = [
    "Machinery", "Electronics", "Pharmaceuticals", "Solar Panels", "Textiles",
    "CNC Machines", "Industrial Equipment", "Chemicals", "Medical Supplies",
    "Apparel", "Food Products", "Spices", "Construction Materials", "Grains",
    "Packaging", "Office Supplies", "Hardware", "Jewellery", "Handicrafts"
];

const ContactCountryForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        quantity: '',
        unit: '',
        productOrService: '',
        mobileNumber: ''
    });
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleProductInputChange = (value) => {
        setFormData({ ...formData, productOrService: value });
        if (value.trim().length > 0) {
            const filtered = KEYWORDS.filter(k => 
                k.toLowerCase().includes(value.toLowerCase())
            ).slice(0, 10);
            setSuggestions(filtered);
            setShowSuggestions(true);
        } else {
            setSuggestions(["Machinery", "Electronics", "Pharmaceuticals", "Solar Panels", "Textiles"]);
            setShowSuggestions(true);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setFormData({ ...formData, productOrService: suggestion });
        setShowSuggestions(false);
    };

    const handlePhoneChange = (value) => {
        setFormData({ ...formData, mobileNumber: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="contact-country-form">
            <h2>Contact Country Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="quantity">Quantity:</label>
                    <input type="number" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="unit">Unit:</label>
                    <select id="unit" name="unit" value={formData.unit} onChange={handleChange} required>
                        <option value="">Select Unit</option>
                        <option value="kg">kg</option>
                        <option value="meter">meter</option>
                        <option value="pieces">pieces</option>
                        <option value="ton">ton</option>
                    </select>
                </div>
                <div className="form-group" style={{ position: "relative" }}>
                    <label htmlFor="productOrService">Product/Service:</label>
                    <input
                        type="text"
                        id="productOrService"
                        name="productOrService"
                        value={formData.productOrService}
                        onChange={(e) => handleProductInputChange(e.target.value)}
                        onFocus={() => {
                            if (!formData.productOrService.trim()) {
                                setSuggestions(["Machinery", "Electronics", "Pharmaceuticals", "Solar Panels", "Textiles"]);
                            }
                            setShowSuggestions(true);
                        }}
                        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                        required
                        placeholder="Search Products..."
                    />
                    {showSuggestions && suggestions.length > 0 && (
                        <ul className="suggestion-dropdown" style={{
                            position: "absolute",
                            top: "100%",
                            left: 0,
                            right: 0,
                            backgroundColor: "rgba(255, 255, 255, 0.95)",
                            backdropFilter: "blur(10px)",
                            border: "1px solid rgba(0,0,0,0.1)",
                            borderRadius: "0 0 12px 12px",
                            maxHeight: "200px",
                            overflowY: "auto",
                            zIndex: 1000,
                            listStyle: "none",
                            margin: 0,
                            padding: "8px 0",
                            boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                        }}>
                            {suggestions.map((suggestion, index) => (
                                <li
                                    key={index}
                                    onMouseDown={() => handleSuggestionClick(suggestion)}
                                    style={{
                                        padding: "10px 20px",
                                        cursor: "pointer",
                                        fontSize: "14px",
                                        color: "#333",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                        transition: "background 0.2s"
                                    }}
                                    onMouseEnter={(e) => e.target.style.backgroundColor = "rgba(0,0,0,0.05)"}
                                    onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
                                >
                                    <i className="fa fa-search" style={{ color: "#999", fontSize: "12px" }}></i>
                                    {suggestion}
                                </li>
                            ))}
                        </ul>
                    )}
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
