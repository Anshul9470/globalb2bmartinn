import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerCompany } from '../services/api';
import { CATEGORIES, SUB_CATEGORIES, getCategorySuggestions, getSubCategorySuggestions } from '../services/categoryData';
import './Compani.css';

const CompanyRegi = () => {
    // Comprehensive list of 500+ keywords for suggestions
    const KEYWORDS = [
        // 1. INDUSTRIAL MACHINERY & TOOLS
        "Machinery", "Industrial Machinery", "CNC Machines", "Injection Molding", "Packing Machines", "Lathe Machines", "Milling Machines", "Laser Cutting", "Welding Machine", "Industrial Equipment",
        "Power Tools", "Power Drills", "Grinders", "Impact Wrenches", "Cutting Tools", "Measuring Tapes", "Bearings", "Gears", "Conveyor Belts", "Industrial Chains", "Valves", "Pumps",
        
        // 2. ELECTRICAL & ELECTRONICS
        "Solar Energy", "Solar Panels", "Solar Inverters", "Solar Batteries", "Electronics", "Electric Components", "Microchips", "Resistors", "Capacitors", "PCB Boards", "Transformers",
        "Switchgears", "Electrical Panels", "Electrical Wires", "Copper Cable", "Generators", "Mobile Accessories", "Bluetooth Speakers", "Smart Watches", "Smart Home Devices",
        
        // 3. HEALTHCARE & PHARMACEUTICALS
        "Pharmaceuticals", "Medicines", "Generic Medicines", "API", "Antibiotics", "Herbal Medicines", "Medical Equipment", "MRI Machines", "X-ray", "Patient Monitors", "Hospital Beds", "Wheelchairs",
        "Surgical Gloves", "Masks", "PPE Kits", "Diagnostic Kits", "Surgical Instruments",
        
        // 4. APPAREL, TEXTILES & FASHION
        "Fabric", "Textiles", "Cotton", "Polyester", "Denims", "Silk", "Apparel", "Clothing", "Shirts", "T-shirts", "Saree", "Kurtis", "Bedsheets", "Curtains", "Carpets", "Towels", "Handbags", "Footwear",
        
        // 5. FOOD, AGRICULTURE & SPICES
        "Spices", "Turmeric", "Cumin", "Cardamom", "Saffron", "Black Pepper", "Basmati Rice", "Wheat", "Pulses", "Lentils", "Sugar", "Flour", "Mustard Oil", "Sunflower Oil", "Ghee", "Agri Equipment", "Tractors",
        
        // 6. BUILDING & CONSTRUCTION
        "Building Materials", "Cement", "TMT Bars", "Tiles", "Bricks", "Granite", "Marble", "Sanitary Fittings", "Faucets", "Wash Basins", "Plywood", "Laminates", "Paints", "Wallpaper",
        
        // 7. CHEMICALS, MINERALS & PLASTIC
        "Industrial Chemicals", "Acids", "Solvents", "Plastic Granules", "HDPE", "LDPE", "PVC Resin", "Iron Ore", "Quartz", "Talc", "Gypsum",
        
        // 8. PACKAGING & PRINTING
        "Corrugated Boxes", "Plastic Pouches", "BOPP Tapes", "Bubble Wrap", "Printing Machines", "Labeling Machines", "Vacuum Packing", "Office Supplies", "Office Desks", "Industrial Racks",
        
        // TRENDING
        "Jewellery", "Handicrafts", "Gifts & Decor", "Hardware", "Toys", "Sports Equipment", "Computer Hardware", "Agarbatti", "Event Management", "Solar Panel Installation"
    ];

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
        category: '',
        subCategory: '',
        whatsappConfirmed: false,
    });

    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    
    // Category & Sub-Category State
    const [categorySuggestions, setCategorySuggestions] = useState([]);
    const [showCategorySuggestions, setShowCategorySuggestions] = useState(false);
    const [subCategorySuggestions, setSubCategorySuggestions] = useState([]);
    const [showSubCategorySuggestions, setShowSubCategorySuggestions] = useState(false);

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

        setLoading(true);
        setApiError('');
        try {
            await registerCompany(formData);
            setSubmitted(true);
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
            setTermsAccepted(false);
        } catch (error) {
            setApiError(error.message || 'Registration failed. Please try again.');
            console.error('Registration error:', error);
        } finally {
            setLoading(false);
        }
    };

    // Handle category input
    const handleCategorySearch = (value) => {
        setFormData({ ...formData, category: value, subCategory: '' });
        const suggestions = getCategorySuggestions(value);
        setCategorySuggestions(suggestions);
        setShowCategorySuggestions(true);
    };

    const handleCategoryClick = (category) => {
        setFormData({ ...formData, category: category, subCategory: '' });
        setShowCategorySuggestions(false);
        setSubCategorySuggestions(SUB_CATEGORIES[category] || []);
    };

    // Handle sub-category input
    const handleSubCategorySearch = (value) => {
        setFormData({ ...formData, subCategory: value, productOrService: value });
        const suggestions = getSubCategorySuggestions(formData.category, value);
        setSubCategorySuggestions(suggestions);
        setShowSubCategorySuggestions(true);
    };

    const handleSubCategoryClick = (suggestion) => {
        setFormData({ ...formData, subCategory: suggestion, productOrService: suggestion });
        setShowSubCategorySuggestions(false);
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
                            <div className="form-group" style={{ position: "relative" }}>
                                <label htmlFor="productOrService">Product/Service:</label>
                                <input
                                    type="text"
                                    className='com-txt'
                                    id="productOrService"
                                    name="productOrService"
                                    value={formData.productOrService}
                                    onChange={(e) => handleProductInputChange(e.target.value)}
                                    onFocus={() => formData.productOrService.trim() && setShowSuggestions(true)}
                                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                                />
                                {showSuggestions && suggestions.length > 0 && (
                                    <ul
                                        style={{
                                            position: "absolute",
                                            top: "100%",
                                            left: 0,
                                            right: 0,
                                            backgroundColor: "#fff",
                                            border: "1px solid #ddd",
                                            borderTop: "none",
                                            borderRadius: "0 0 4px 4px",
                                            maxHeight: "150px",
                                            overflowY: "auto",
                                            zIndex: 1000,
                                            listStyle: "none",
                                            margin: 0,
                                            padding: "8px 0",
                                            boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                                        }}
                                    >
                                        {suggestions.map((suggestion, index) => (
                                            <li
                                                key={index}
                                                onMouseDown={() => handleSuggestionClick(suggestion)}
                                                style={{
                                                    padding: "10px 15px",
                                                    cursor: "pointer",
                                                    fontSize: "14px",
                                                    color: "#333",
                                                    transition: "background 0.2s"
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.backgroundColor = "#f0f0f0";
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.backgroundColor = "transparent";
                                                }}
                                            >
                                                <i style={{ marginRight: "8px", color: "#999" }} className="fa fa-search"></i>
                                                {suggestion}
                                            </li>
                                        ))}
                                    </ul>
                                )}
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
                            <div className="form-group" style={{ flex: '1 1 50%', padding: '10px', position: 'relative' }}>
                                <label htmlFor="category">Select Category <sup className="cl-danger">*</sup>:</label>
                                <input 
                                    type="text" 
                                    className='com-txt' 
                                    id="category" 
                                    name="category" 
                                    value={formData.category} 
                                    onChange={(e) => handleCategorySearch(e.target.value)} 
                                    onFocus={() => handleCategorySearch(formData.category)}
                                    onBlur={() => setTimeout(() => setShowCategorySuggestions(false), 200)}
                                    placeholder="e.g. MACHINERY, RICE..."
                                    required
                                    autoComplete="off"
                                />
                                {showCategorySuggestions && categorySuggestions.length > 0 && (
                                    <ul style={{
                                        position: "absolute", top: "100%", left: "10px", right: "10px",
                                        backgroundColor: "rgba(255, 255, 255, 0.95)", backdropFilter: "blur(10px)",
                                        border: "1px solid rgba(0,0,0,0.1)", borderRadius: "0 0 12px 12px",
                                        maxHeight: "200px", overflowY: "auto", zIndex: 1001, listStyle: "none",
                                        margin: 0, padding: "8px 0", boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
                                    }}>
                                        {categorySuggestions.map((cat, idx) => (
                                            <li key={idx} onMouseDown={() => handleCategoryClick(cat)}
                                                style={{ padding: "12px 20px", cursor: "pointer", fontSize: "14px", fontWeight: 500 }}
                                                onMouseEnter={(e) => e.target.style.backgroundColor = "rgba(0,0,0,0.05)"}
                                                onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
                                            >
                                                {cat}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <div className="form-group" style={{ flex: '1 1 50%', padding: '10px', position: 'relative' }}>
                                <label htmlFor="subCategory">Product / Sub-Category <sup className="cl-danger">*</sup>:</label>
                                <input 
                                    type="text" 
                                    className='com-txt' 
                                    id="subCategory" 
                                    name="subCategory" 
                                    value={formData.subCategory} 
                                    onChange={(e) => handleSubCategorySearch(e.target.value)} 
                                    onFocus={() => handleSubCategorySearch(formData.subCategory)}
                                    onBlur={() => setTimeout(() => setShowSubCategorySuggestions(false), 200)}
                                    placeholder={formData.category ? `Search in ${formData.category}...` : "e.g. Basmati Rice, CNC..."}
                                    required
                                    autoComplete="off"
                                />
                                {showSubCategorySuggestions && subCategorySuggestions.length > 0 && (
                                    <ul style={{
                                        position: "absolute", top: "100%", left: "10px", right: "10px",
                                        backgroundColor: "rgba(255, 255, 255, 0.95)", backdropFilter: "blur(10px)",
                                        border: "1px solid rgba(0,0,0,0.1)", borderRadius: "0 0 12px 12px",
                                        maxHeight: "220px", overflowY: "auto", zIndex: 1000, listStyle: "none",
                                        margin: 0, padding: "8px 0", boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
                                    }}>
                                        {subCategorySuggestions.map((sub, idx) => (
                                            <li key={idx} onMouseDown={() => handleSubCategoryClick(sub)}
                                                style={{ padding: "12px 20px", cursor: "pointer", fontSize: "14px", fontWeight: 500, display: "flex", alignItems: "center", gap: "10px" }}
                                                onMouseEnter={(e) => e.target.style.backgroundColor = "rgba(0,0,0,0.05)"}
                                                onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
                                            >
                                                <div style={{ width: "30px", height: "30px", borderRadius: "50%", background: "rgba(0,123,255, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#007bff" }}>
                                                    <i className="fa fa-search" style={{fontSize: "12px"}}></i>
                                                </div>
                                                {sub}
                                            </li>
                                        ))}
                                    </ul>
                                )}
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
                                <button type="submit" disabled={!termsAccepted || loading} style={{ padding: '10px 20px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1 }}>
                                    {loading ? 'Registering...' : 'Submit'}
                                </button>
                            </div>
                            {apiError && <div className="error" style={{ flex: '1 1 100%', textAlign: 'center', color: 'red', padding: '8px' }}>{apiError}</div>}
                            {submitted && <div className="success" style={{ flex: '1 1 100%', textAlign: 'center' }}>✅ Registration successful! <Link to="/login"><span style={{ color: 'red' }}> Login Now</span></Link></div>}
                        </form>
                    </div>
                </div>


            </div>
        </>
    );
};

export default CompanyRegi;
