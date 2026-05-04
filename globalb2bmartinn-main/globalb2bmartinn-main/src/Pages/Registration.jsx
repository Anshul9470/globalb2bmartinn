// import React, { useState } from 'react';
// import axios from 'axios';
// import './registration.css';
// import Whyglobal from '../Components/Whyglobal';

// const Registration = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [city, setCity] = useState('');
//     const [mobileNumber, setMobileNumber] = useState('');
//     const [productOrService, setProductOrService] = useState('');
//     const [quantity, setQuantity] = useState('');
//     const [unit, setUnit] = useState('kg'); // New state variable for unit
//     const [submitted, setSubmitted] = useState(false);
//     const [showLoginLink, setShowLoginLink] = useState(false);
//     const [mobileError, setMobileError] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const formData = {
//             name: name,
//             email: email,
//             city: city,
//             mobileNumber: mobileNumber,
//             productOrService: productOrService,
//             quantity: Number(quantity), // Ensure quantity is a number
//             unit: unit // Send unit as a separate field
//         };

//         try {
//             // ${process.env.REACT_APP_API_ENDPOINT}/submit-form
//             const response = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/register-buyer`, formData);

//             console.log('Form data:', response.data);

//             setName('');
//             setEmail('');
//             setMobileNumber('');
//             setCity('');
//             setProductOrService('');
//             setQuantity('');
//             setUnit('kg'); // Reset unit to default value

//             setShowLoginLink(true);
//             setSubmitted(true);
//         } catch (error) {
//             console.error('Error submitting form:', error);
//         }
//     };

//     const handleMobileChange = (e) => {
//         const value = e.target.value.replace(/\D/, '').slice(0, 10);
//         setMobileNumber(value);
//         if (value.length < 10) {
//             setMobileError('Please enter a correct mobile number.');
//         } else {
//             setMobileError('');
//         }
//     };

//     return (
//         <>
//             <div className="registration-container">
//                 <div className="regi-container">
//                     <div className="glass-container">
//                         <h3 style={{ color: '#000' }} >Post your Buy Requirements</h3>
//                         <form onSubmit={handleSubmit}>
//                             <div className="form-group">
//                                 <label htmlFor="name">Name:</label>
//                                 <input
//                                     type="text"
//                                     className='reb-text'
//                                     id="name"
//                                     value={name}
//                                     onChange={(e) => setName(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="email">Email:</label>
//                                 <input
//                                     type="email"
//                                     className='reb-email'
//                                     id="email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="mobileNumber">City:</label>
//                                 <input
//                                     style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px' }}
//                                     type="text"
//                                     className='reb-text'
//                                     id="mobileNumber"
//                                     value={mobileNumber}
//                                     onChange={handleMobileChange}
//                                     required
//                                 />
//                                 {mobileError && <div style={{ color: 'red', marginTop: '5px' }}>{mobileError}</div>}
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="mobileNumber">Mobile Number:</label>
//                                 <input
//                                     style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px' }}
//                                     type="text"
//                                     className='reb-text'
//                                     id="mobileNumber"
//                                     value={mobileNumber}
//                                     onChange={handleMobileChange}
//                                     required
//                                 />
//                                 {mobileError && <div style={{ color: 'red', marginTop: '5px' }}>{mobileError}</div>}
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="productOrService">Product/Service:</label>
//                                 <input
//                                     type="text"
//                                     className='reb-text'
//                                     id="productOrService"
//                                     value={productOrService}
//                                     onChange={(e) => setProductOrService(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="quantity">Quantity:</label>
//                                 <div style={{ display: 'flex', gap: '10px' }}>
//                                     <input
//                                         type="number"
//                                         className='reb-number'
//                                         id="quantity"
//                                         value={quantity}
//                                         onChange={(e) => setQuantity(e.target.value)}
//                                         required
//                                         min="0"
//                                     />
//                                     <select
//                                         value={unit}
//                                         onChange={(e) => setUnit(e.target.value)}
//                                         required
//                                         className='reb-unit'
//                                     >
//                                         <option value="kg">kg</option>
//                                         <option value="pcs">pcs</option>
//                                         <option value="dozen">dozen</option>
//                                         <option value="meter">meter</option>
//                                         <option value="ton">ton</option>
//                                     </select>
//                                 </div>
//                             </div>
//                             <button className='buyer-submit' type="submit">Submit</button>
//                             {submitted && <div style={{ color: 'green', marginTop: '10px' }}>Form submitted successfully!</div>}
//                         </form>
//                         {showLoginLink && <p style={{ marginTop: '10px' }}>Registed With Us As Company <a href="/register-company"> <span style={{ color: 'red' }}>Register Now</span></a></p>}
//                     </div>
//                 </div>
//                 {/* <div className="login-image">
//                     <img src="./assets/register-us.png" alt="Login" />
//                 </div> */}

//             </div>

//             <div style={{ marginBottom: '50px' }}>
//                 <Whyglobal />
//             </div>
//         </>
//     );
// };

// export default Registration;

// import React, { useState } from 'react';
// import axios from 'axios';
// import './registration.css';
// import Whyglobal from '../Components/Whyglobal';

// const Registration = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [city, setCity] = useState('');
//     const [mobileNumber, setMobileNumber] = useState('');
//     const [productOrService, setProductOrService] = useState('');
//     const [quantity, setQuantity] = useState('');
//     const [unit, setUnit] = useState('kg');
//     const [submitted, setSubmitted] = useState(false);
//     const [showLoginLink, setShowLoginLink] = useState(false);
//     const [mobileError, setMobileError] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const formData = {
//             name: name,
//             email: email,
//             city: city,
//             mobileNumber: mobileNumber,
//             productOrService: productOrService,
//             quantity: Number(quantity),
//             unit: unit
//         };

//         try {
//             const response = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/register-buyer`, formData);
//             console.log('Form data:', response.data);

//             setName('');
//             setEmail('');
//             setCity('');
//             setMobileNumber('');
//             setProductOrService('');
//             setQuantity('');
//             setUnit('kg');
//             setShowLoginLink(true);
//             setSubmitted(true);
//         } catch (error) {
//             console.error('Error submitting form:', error);
//         }
//     };

//     const handleMobileChange = (e) => {
//         const value = e.target.value.replace(/\D/g, '').slice(0, 10);
//         setMobileNumber(value);
//         if (value.length < 10) {
//             setMobileError('Please enter a correct mobile number.');
//         } else {
//             setMobileError('');
//         }
//     };

//     return (
//         <>
//             <div className="registration-container">
//                 <div className="regi-container">
//                     <div className="glass-container">
//                         <h3 style={{ color: '#000' }}>Post your Buy Requirements</h3>
//                         <form onSubmit={handleSubmit}>
//                             <div className="form-group">
//                                 <label htmlFor="name">Name:</label>
//                                 <input
//                                     type="text"
//                                     className="reb-text"
//                                     id="name"
//                                     value={name}
//                                     onChange={(e) => setName(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="email">Email:</label>
//                                 <input
//                                     type="email"
//                                     className="reb-email"
//                                     id="email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="city">City:</label>
//                                 <input
//                                     type="text"
//                                     className="reb-text"
//                                     id="city"
//                                     value={city}
//                                     onChange={(e) => setCity(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="mobileNumber">Mobile Number:</label>
//                                 <input
//                                     type="text"
//                                     className="reb-text"
//                                     id="mobileNumber"
//                                     value={mobileNumber}
//                                     onChange={handleMobileChange}
//                                     required
//                                 />
//                                 {mobileError && <div style={{ color: 'red', marginTop: '5px' }}>{mobileError}</div>}
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="productOrService">Product/Service:</label>
//                                 <input
//                                     type="text"
//                                     className="reb-text"
//                                     id="productOrService"
//                                     value={productOrService}
//                                     onChange={(e) => setProductOrService(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="quantity">Quantity:</label>
//                                 <div style={{ display: 'flex', gap: '10px' }}>
//                                     <input
//                                         type="number"
//                                         className="reb-number"
//                                         id="quantity"
//                                         value={quantity}
//                                         onChange={(e) => setQuantity(e.target.value)}
//                                         required
//                                         min="0"
//                                     />
//                                     <select
//                                         value={unit}
//                                         onChange={(e) => setUnit(e.target.value)}
//                                         required
//                                         className="reb-unit"
//                                     >
//                                         <option value="kg">kg</option>
//                                         <option value="pcs">pcs</option>
//                                         <option value="dozen">dozen</option>
//                                         <option value="meter">meter</option>
//                                         <option value="ton">ton</option>
//                                     </select>
//                                 </div>
//                             </div>
//                             <button className="buyer-submit" type="submit">Submit</button>
//                             {submitted && <div style={{ color: 'green', marginTop: '10px' }}>Form submitted successfully!</div>}
//                         </form>
//                         {showLoginLink && (
//                             <p style={{ marginTop: '10px' }}>
//                                 Registered With Us As Company <a href="/register-company"><span style={{ color: 'red' }}>Register Now</span></a>
//                             </p>
//                         )}
//                     </div>
//                 </div>
//             </div>
//             <div style={{ marginBottom: '50px' }}>
//                 <Whyglobal />
//             </div>
//         </>
//     );
// };

// export default Registration;
import React, { useState } from "react";
import 'react-phone-number-input/style.css';
import PhoneInput from "react-phone-number-input";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBriefcase, faIndustry, faHandshake, faCheckCircle, faBuilding, faUser, faPhone, faEnvelope, faMapMarkerAlt, faLock, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { CATEGORIES, SUB_CATEGORIES, getCategorySuggestions, getSubCategorySuggestions } from '../services/categoryData';
import './registration.css';
import Whyglobal from "../Components/Whyglobal";
import { registerBuyer } from "../services/api";

const Registration = () => {
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

  const COUNTRIES = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
    "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
    "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
    "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
    "Fiji", "Finland", "France",
    "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guyana",
    "Haiti", "Honduras", "Hungary",
    "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast",
    "Jamaica", "Japan", "Jordan",
    "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
    "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
    "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
    "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway",
    "Oman",
    "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
    "Qatar",
    "Romania", "Russia", "Rwanda",
    "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
    "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
    "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzpendistan",
    "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
    "Yemen",
    "Zambia", "Zimbabwe"
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [countryName, setCountryName] = useState("India");
  const [countrySuggestions, setCountrySuggestions] = useState([]);
  const [showCountrySuggestions, setShowCountrySuggestions] = useState(false);
  const [stateName, setStateName] = useState(""); // Added stateName
  const [phoneNumber, setPhoneNumber] = useState(""); 
  const [productOrService, setProductOrService] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("kg");
  const [submitted, setSubmitted] = useState(false);
  const [showLoginLink, setShowLoginLink] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  
  // Category & Sub-Category State
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [categorySuggestions, setCategorySuggestions] = useState([]);
  const [showCategorySuggestions, setShowCategorySuggestions] = useState(false);
  const [subCategorySuggestions, setSubCategorySuggestions] = useState([]);
  const [showSubCategorySuggestions, setShowSubCategorySuggestions] = useState(false);

  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Indian States List
  const INDIAN_STATES = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", 
    "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", 
    "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir", "Ladakh", 
    "Lakshadweep", "Puducherry"
  ];

  // Handle country input with suggestions
  const handleCountrySearch = (value) => {
    setCountryName(value);
    if (value.trim().length > 0) {
      const filtered = COUNTRIES.filter(c => 
        c.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 10);
      setCountrySuggestions(filtered);
      setShowCountrySuggestions(true);
    } else {
      setCountrySuggestions([]);
      setShowCountrySuggestions(false);
    }
  };

  const handleCountrySuggestionClick = (suggestion) => {
    setCountryName(suggestion);
    setShowCountrySuggestions(false);
  };

  // Handle category input
  const handleCategorySearch = (value) => {
    setSelectedCategory(value);
    setSubCategory('');
    const suggestions = getCategorySuggestions(value);
    setCategorySuggestions(suggestions);
    setShowCategorySuggestions(true);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowCategorySuggestions(false);
    // Pre-populate sub-category suggestions
    setSubCategorySuggestions(SUB_CATEGORIES[category] || []);
  };

  // Handle sub-category input
  const handleSubCategorySearch = (value) => {
    setSubCategory(value);
    const suggestions = getSubCategorySuggestions(selectedCategory, value);
    setSubCategorySuggestions(suggestions);
    setShowSubCategorySuggestions(true);
  };

  const handleSubCategoryClick = (suggestion) => {
    setSubCategory(suggestion);
    setProductOrService(suggestion);
    setShowSubCategorySuggestions(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");

    if (!phoneNumber) {
      setPhoneError("Please enter a valid phone number.");
      return;
    }

    const formData = {
      name,
      email,
      country: countryName,
      city: "", // Optional now
      statename: stateName, // Added statename
      mobileNumber: phoneNumber,
      productOrService: subCategory || productOrService,
      category: selectedCategory,
      subCategory: subCategory,
      quantity: Number(quantity),
      unit,
    };

    setLoading(true);
    try {
      await registerBuyer(formData);
      setName("");
      setEmail("");
      setCountryName("India");
      setPhoneNumber("");
      setProductOrService("");
      setSelectedCategory("");
      setSubCategory("");
      setQuantity("");
      setUnit("kg");
      setShowLoginLink(true);
      setSubmitted(true);
    } catch (error) {
      setApiError(error.message || "Submission failed. Please try again.");
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="registration-container">
        <div className="regi-container">
          <div className="glass-container">
            <h3 style={{ color: "#000" }}>Post your Buy Requirements</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  className="reb-text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="reb-email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group" style={{ position: "relative" }}>
                <label htmlFor="country">Country:</label>
                <input
                  type="text"
                  className="reb-text"
                  id="country"
                  value={countryName}
                  onChange={(e) => handleCountrySearch(e.target.value)}
                  onFocus={() => {
                    if (countryName.trim()) {
                      handleCountrySearch(countryName);
                    }
                  }}
                  onBlur={() => setTimeout(() => setShowCountrySuggestions(false), 200)}
                  required
                  autoComplete="off"
                />
                {showCountrySuggestions && countrySuggestions.length > 0 && (
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
                      maxHeight: "200px",
                      overflowY: "auto",
                      zIndex: 1001,
                      listStyle: "none",
                      margin: 0,
                      padding: "5px 0",
                      boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
                    }}
                  >
                    {countrySuggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        onMouseDown={() => handleCountrySuggestionClick(suggestion)}
                        style={{
                          padding: "10px 15px",
                          cursor: "pointer",
                          fontSize: "14px",
                          color: "#333",
                          borderBottom: "1px solid #f9f9f9"
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = "#f0f0f0"}
                        onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="state">State:</label>
                <select
                  id="state"
                  className="reb-text"
                  value={stateName}
                  onChange={(e) => setStateName(e.target.value)}
                  required={countryName === "India"}
                  style={{ width: "100%", padding: "10px" }}
                >
                  <option value="">Select State</option>
                  {INDIAN_STATES.map((state, index) => (
                    <option key={index} value={state}>{state}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Mobile Number:</label>
                <PhoneInput
                  international
                  defaultCountry="IN"
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  required
                />
                {phoneError && (
                  <div style={{ color: "red", marginTop: "5px" }}>
                    {phoneError}
                  </div>
                )}
              </div>
              <div className="form-group" style={{ position: "relative" }}>
                <label htmlFor="category">Select Category <sup className="cl-danger">*</sup>:</label>
                <input
                  type="text"
                  className="reb-text"
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => handleCategorySearch(e.target.value)}
                  onFocus={() => handleCategorySearch(selectedCategory)}
                  onBlur={() => setTimeout(() => setShowCategorySuggestions(false), 200)}
                  required
                  placeholder="e.g. RICE, MACHINERY..."
                  autoComplete="off"
                />
                {showCategorySuggestions && categorySuggestions.length > 0 && (
                  <ul style={{
                    position: "absolute", top: "100%", left: 0, right: 0,
                    backgroundColor: "#fff", border: "1px solid #ddd", borderRadius: "0 0 4px 4px",
                    maxHeight: "200px", overflowY: "auto", zIndex: 1001, listStyle: "none",
                    margin: 0, padding: "5px 0", boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
                  }}>
                    {categorySuggestions.map((cat, idx) => (
                      <li key={idx} onMouseDown={() => handleCategoryClick(cat)}
                        style={{ padding: "10px 15px", cursor: "pointer", fontSize: "14px" }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = "#f0f0f0"}
                        onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
                      >
                        {cat}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="form-group" style={{ position: "relative" }}>
                <label htmlFor="productOrService">Product / Sub-Category <sup className="cl-danger">*</sup>:</label>
                <input
                  type="text"
                  className="reb-text"
                  id="productOrService"
                  value={subCategory}
                  onChange={(e) => handleSubCategorySearch(e.target.value)}
                  onFocus={() => handleSubCategorySearch(subCategory)}
                  onBlur={() => setTimeout(() => setShowSubCategorySuggestions(false), 200)}
                  required
                  placeholder={selectedCategory ? `Search in ${selectedCategory}...` : "e.g. Basmati Rice, CNC..."}
                  autoComplete="off"
                />
                {showSubCategorySuggestions && subCategorySuggestions.length > 0 && (
                  <ul style={{
                    position: "absolute", top: "100%", left: 0, right: 0,
                    backgroundColor: "#fff", border: "1px solid #ddd", borderRadius: "0 0 4px 4px",
                    maxHeight: "200px", overflowY: "auto", zIndex: 1000, listStyle: "none",
                    margin: 0, padding: "5px 0", boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
                  }}>
                    {subCategorySuggestions.map((sub, idx) => (
                      <li key={idx} onMouseDown={() => handleSubCategoryClick(sub)}
                        style={{ padding: "10px 15px", cursor: "pointer", fontSize: "14px", display: "flex", alignItems: "center", gap: "10px" }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = "#f0f0f0"}
                        onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
                      >
                        <i className="fa fa-search" style={{ color: "#999", fontSize: "12px" }}></i>
                        {sub}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="quantity">Quantity:</label>
                <div style={{ display: "flex", gap: "10px" }}>
                  <input
                    type="number"
                    className="reb-number"
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                    min="0"
                  />
                  <select
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    required
                    className="reb-unit"
                  >
                    <option value="kg">kg</option>
                    <option value="pcs">pcs</option>
                    <option value="dozen">dozen</option>
                    <option value="meter">meter</option>
                    <option value="ton">ton</option>
                    <option value="liter">liter</option>
                    <option value="container">container</option>
                  </select>
                </div>
              </div>
              <button className="buyer-submit" type="submit" disabled={loading} style={{ opacity: loading ? 0.7 : 1 }}>
                {loading ? "Submitting..." : "Submit"}
              </button>
              {apiError && <div style={{ color: "red", marginTop: "8px" }}>{apiError}</div>}
              {submitted && (
                <div style={{ color: "green", marginTop: "10px", fontWeight: "600" }}>
                  ✅ Requirement submitted successfully! It will be live on the marketplace after admin approval.
                </div>
              )}
            </form>
            {showLoginLink && (
              <p style={{ marginTop: "10px" }}>
                Registered With Us As Company{" "}
                <a href="/register-company">
                  <span style={{ color: "red" }}>Register Now</span>
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
