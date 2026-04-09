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
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import axios from "axios";
import "./registration.css";
import Whyglobal from "../Components/Whyglobal";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(""); // Updated state for phone number
  const [productOrService, setProductOrService] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("kg");
  const [submitted, setSubmitted] = useState(false);
  const [showLoginLink, setShowLoginLink] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate phone number
    if (!phoneNumber) {
      setPhoneError("Please enter a valid phone number.");
      return;
    }

    const formData = {
      name,
      email,
      city,
      mobileNumber: phoneNumber, // Use phone number with country code
      productOrService,
      quantity: Number(quantity),
      unit,
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_ENDPOINT}/register-buyer`,
        formData
      );
      console.log("Form data:", response.data);

      // Clear form fields
      setName("");
      setEmail("");
      setCity("");
      setPhoneNumber(""); // Clear phone number
      setProductOrService("");
      setQuantity("");
      setUnit("kg");
      setShowLoginLink(true);
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
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
              <div className="form-group">
                <label htmlFor="city">City:</label>
                <input
                  type="text"
                  className="reb-text"
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Mobile Number:</label>
                <PhoneInput
                  className="reb-text"
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
              <div className="form-group">
                <label htmlFor="productOrService">Product/Service:</label>
                <input
                  type="text"
                  className="reb-text"
                  id="productOrService"
                  value={productOrService}
                  onChange={(e) => setProductOrService(e.target.value)}
                  required
                />
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
              <button className="buyer-submit" type="submit">
                Submit
              </button>
              {submitted && (
                <div style={{ color: "green", marginTop: "10px" }}>
                  Form submitted successfully!
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
