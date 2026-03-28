import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Compani.css';

const CompanyRegi = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        mobileNumber: '',
        companyName: '',
        statename: '',
        cityname: '',
        productOrService: '',
        whatsappConfirmed: false,
    });

    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const [termsAccepted, setTermsAccepted] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name) {
            newErrors.name = 'Name is required';
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!formData.email || !emailPattern.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        if (!formData.password || formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters long';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        const phonePattern = /^\d{10}$/;
        if (!formData.mobileNumber || !phonePattern.test(formData.mobileNumber)) {
            newErrors.mobileNumber = 'Mobile number must be exactly 10 digits';
        }

        if (!formData.companyName) {
            newErrors.companyName = 'Company Name is required';
        }
        if (!formData.cityname) {
            newErrors.cityname = 'City Name is required';
        }

        // if (!formData.productOrService) {
        //     newErrors.productOrService = 'Product or Service is required';
        // }

        if (!termsAccepted) {
            newErrors.terms = 'Please accept the terms and conditions';
        }

        return newErrors;


    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });


            if (!response.ok) {
                throw new Error('Failed to register');
            }

            console.log('Registration successful');
            setSubmitted(true);
        } catch (error) {
            console.error('Error:', error.message);
            // Handle error (e.g., display error message)
        }
        // Reset form data and errors
        setFormData({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            mobileNumber: '',
            companyName: '',
            statename: '',
            cityname: '',
            productOrService: '',
            whatsappConfirmed: false,
        });
        setErrors({});
        setTermsAccepted(false); // Reset terms acceptance

    };


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === 'checkbox' ? checked : value;
        setFormData({
            ...formData,
            [name]: val,
        });
    };

    return (
        <>
            <div className="company-regi-container">
                {/* <div className="compani-regi">
                    <div className="glass-container">
                        <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Company Registration</h3>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">
                                    Name <sup class="cl-danger">*</sup>:
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className='com-txt'
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.name && <div className="error">{errors.name}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">
                                    Email <sup class="cl-danger">*</sup>:
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className='com-txt'
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.email && <div className="error">{errors.email}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">
                                    Password <sup class="cl-danger">*</sup>:
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className='com-txt'
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.password && <div className="error">{errors.password}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmPassword">
                                    Confirm Password <sup class="cl-danger">*</sup>:
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    className='com-txt'
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="mobileNumber">Mobile Number <sup class="cl-danger">*</sup>:</label>
                                <input
                                    type="text"
                                    id="mobileNumber"
                                    className='com-txt'
                                    name="mobileNumber"
                                    value={formData.mobileNumber}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.mobileNumber && <div className="error">{errors.mobileNumber}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="companyName">
                                    Company Name <sup class="cl-danger">*</sup>:
                                </label>
                                <input
                                    type="text"
                                    id="companyName"
                                    className='com-txt'
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.companyName && <div className="error">{errors.companyName}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="productOrService">Product/Service:</label>
                                <input
                                    type="text"
                                    className='com-txt'
                                    id="productOrService"
                                    name="productOrService"
                                    value={formData.productOrService}
                                    onChange={handleChange}
                                // required
                                />
                                {errors.productOrService && <div className="error">{errors.productOrService}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="whatsappConfirmed">Is this Number on WhatsApp:</label>
                                <input
                                    type="checkbox"
                                    id="whatsappConfirmed"
                                    className='com-txt'
                                    name="whatsappConfirmed"
                                    checked={formData.whatsappConfirmed}
                                    onChange={handleChange}
                                />
                                <label htmlFor="whatsappConfirmed" className="whatsapp-icon">

                                </label>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }} className="form-group">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    name="terms"
                                    className='com-txt'
                                    checked={termsAccepted}
                                    onChange={() => setTermsAccepted(!termsAccepted)}
                                    required

                                />
                                <label htmlFor="terms">
                                    I accept the <a href="#">terms and conditions</a><sup class="cl-danger">*</sup>
                                </label>
                                {errors.terms && <div className="error">{errors.terms}</div>}
                            </div>
                            <button type="submit" disabled={!termsAccepted}>
                                Submit
                            </button>
                            {submitted && <div className="success">Thank you for registering! <Link to="/login"><span style={{ color: 'red' }}> Login Now</span></Link></div>}

                        </form>
                    </div>
                </div> */}
                <div className="compani-regi" style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                    <div className="glass-container" style={{ padding: '20px', borderRadius: '8px', maxWidth: '800px', width: '100%' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Company Registration</h3>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexWrap: 'wrap' }}>
                            <div className="form-group" style={{ flex: '1 1 50%', padding: '10px' }}>
                                <label htmlFor="name">Name <sup className="cl-danger">*</sup>:</label>
                                <input type="text" id="name" className='com-txt' name="name" value={formData.name} onChange={handleChange} required />
                                {errors.name && <div className="error">{errors.name}</div>}
                            </div>
                            <div className="form-group" style={{ flex: '1 1 50%', padding: '10px' }}>
                                <label htmlFor="email">Email <sup className="cl-danger">*</sup>:</label>
                                <input type="email" id="email" className='com-txt' name="email" value={formData.email} onChange={handleChange} required />
                                {errors.email && <div className="error">{errors.email}</div>}
                            </div>
                            <div className="form-group" style={{ flex: '1 1 50%', padding: '10px' }}>
                                <label htmlFor="password">Password <sup className="cl-danger">*</sup>:</label>
                                <input type="password" id="password" className='com-txt' name="password" value={formData.password} onChange={handleChange} required />
                                {errors.password && <div className="error">{errors.password}</div>}
                            </div>
                            <div className="form-group" style={{ flex: '1 1 50%', padding: '10px' }}>
                                <label htmlFor="confirmPassword">Confirm Password <sup className="cl-danger">*</sup>:</label>
                                <input type="password" id="confirmPassword" className='com-txt' name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                                {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
                            </div>
                            <div className="form-group" style={{ flex: '1 1 50%', padding: '10px' }}>
                                <label htmlFor="mobileNumber">Mobile Number <sup className="cl-danger">*</sup>:</label>
                                <input type="text" id="mobileNumber" className='com-txt' name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
                                {errors.mobileNumber && <div className="error">{errors.mobileNumber}</div>}
                            </div>
                            <div className="form-group" style={{ flex: '1 1 50%', padding: '10px' }}>
                                <label htmlFor="companyName">Company Name <sup className="cl-danger">*</sup>:</label>
                                <input type="text" id="companyName" className='com-txt' name="companyName" value={formData.companyName} onChange={handleChange} required />
                                {errors.companyName && <div className="error">{errors.companyName}</div>}
                            </div>
                            <div className="form-group" style={{ flex: '1 1 50%', padding: '10px' }}>
                                <label htmlFor="statename">State Name</label>
                                <input type="text" id="statename" className='com-txt' name="statename" value={formData.statename} onChange={handleChange} />
                                {/* {errors.statename && <div className="error">{errors.statename}</div>} */}
                            </div>
                            <div className="form-group" style={{ flex: '1 1 50%', padding: '10px' }}>
                                <label htmlFor="cityname">City Name <sup className="cl-danger">*</sup>:</label>
                                <input type="text" id="cityname" className='com-txt' name="cityname" value={formData.cityname} onChange={handleChange} required />
                                {errors.cityname && <div className="error">{errors.cityname}</div>}
                            </div>
                            <div className="form-group" style={{ flex: '1 1 50%', padding: '10px' }}>
                                <label htmlFor="productOrService">Product/Service:</label>
                                <input type="text" className='com-txt' id="productOrService" name="productOrService" value={formData.productOrService} onChange={handleChange} />
                                {errors.productOrService && <div className="error">{errors.productOrService}</div>}
                            </div>
                            <div className="form-group" style={{ flex: '1 1 50%', padding: '10px' }}>
                                <label htmlFor="whatsappConfirmed">Is this Number on WhatsApp:</label>
                                <input type="checkbox" id="whatsappConfirmed" className='com-txt' name="whatsappConfirmed" checked={formData.whatsappConfirmed} onChange={handleChange} />
                                <label htmlFor="whatsappConfirmed" className="whatsapp-icon"></label>
                            </div>
                            <div className="form-group" style={{ flex: '1 1 50%', padding: '10px', display: 'flex', alignItems: 'center' }}>
                                <input type="checkbox" id="terms" name="terms" className='com-txt' checked={termsAccepted} onChange={() => setTermsAccepted(!termsAccepted)} required />
                                <label htmlFor="terms" style={{ marginLeft: '8px' }}>I accept the <a href="#">terms and conditions</a><sup className="cl-danger">*</sup></label>
                                {errors.terms && <div className="error">{errors.terms}</div>}
                            </div>
                            <div style={{ flex: '1 1 100%', padding: '10px', display: 'flex', justifyContent: 'center' }}>
                                <button type="submit" disabled={!termsAccepted} style={{ padding: '10px 20px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}>
                                    Submit
                                </button>
                            </div>
                            {submitted && <div className="success" style={{ flex: '1 1 100%', textAlign: 'center' }}>Thank you for registering! <Link to="/login"><span style={{ color: 'red' }}> Login Now</span></Link></div>}
                        </form>
                    </div>
                </div>


            </div>
        </>
    );
};

export default CompanyRegi;
