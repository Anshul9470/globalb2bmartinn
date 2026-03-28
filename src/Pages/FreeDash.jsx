// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGauge, faShieldHalved, faMessage, faBriefcase, faScrewdriverWrench, faGear, faUser, faCartPlus, faBarsProgress, faBook, faPhone, faEnvelope, faCircleQuestion, faLeaf, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
// import './Dashboard.css'

// const FreeDash = () => {
//     const [userData, setUserData] = useState({});
//     const [error, setError] = useState('');
//     const [activeSection, setActiveSection] = useState('dashboard');
//     const [selectedImages, setSelectedImages] = useState([]);
//     const [productTitle, setProductTitle] = useState('');
//     const [productDescription, setProductDescription] = useState('');
//     const [updateMessage, setUpdateMessage] = useState('');
//     const [highlight, setHighlight] = useState(false);
//     const [viewedLeads, setViewedLeads] = useState([]);
//     const [gstNumber, setGSTNumber] = useState('');
//     const [message, setMessage] = useState('');
//     const [products, setProducts] = useState([]);

//     const location = useLocation();



//     useEffect(() => {
//         const fetchViewedLeads = async () => {
//             if (activeSection === 'viewleads' && userData) {
//                 try {
//                     // const response = await fetch (`http://localhost:3005/viewedLeads/${userData._id}`);
//                     const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/viewedLeads/${userData._id}`);

//                     if (!response.ok) {
//                         throw new Error('Failed to fetch viewed leads');
//                     }
//                     const data = await response.json();
//                     setViewedLeads(data.viewedLeads);
//                 } catch (error) {
//                     console.error(error);
//                     // Handle error
//                 }
//             }
//         };
//         fetchViewedLeads();
//     }, [activeSection, userData]);
//     const handleInputGstChange = (event) => {
//         setGSTNumber(event.target.value);
//     };
//     const handleUpdateGST = async () => {
//         try {
//             // const response = await fetch(`http://localhost:3005/update-gst/${userData._id}`, 
//             const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/update-gst/${userData._id}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ gstNumber }),
//             });
//             const data = await response.json();
//             if (!response.ok) {
//                 throw new Error(data.message || 'Failed to update GST number');
//             }
//             setMessage(data.message);
//             setGSTNumber('');
//             alert('GST number updated successfully'); // Alert when GST number is successfully updated
//         } catch (error) {
//             setError(error.message);
//         }
//     };

//     // Fetch products when catalogProduct section is active
//     useEffect(() => {
//         if (activeSection === 'manageProducts') {
//             const fetchProducts = async () => {
//                 try {
//                     // const response = await fetch(`http://localhost:3005/products/${userData._id}`);
//                     const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/products/${userData._id}`);
//                     if (!response.ok) {
//                         throw new Error('Failed to fetch products');
//                     }
//                     const data = await response.json();
//                     setProducts(data.products);
//                 } catch (error) {
//                     console.error(error);
//                     // Handle error
//                 }
//             };
//             fetchProducts();
//         }
//     }, [activeSection, userData]);





//     const handleSectionChange = (section) => {
//         setActiveSection(section);
//         if (section === 'leadSearch') {
//             window.scrollTo(0, 0); // Scroll to top
//             setHighlight(true); // Highlight the content
//             setTimeout(() => setHighlight(false), 10000); // Remove highlight after 10 seconds
//         }
//     };

//     const handleTitleChange = (e) => {
//         setProductTitle(e.target.value);
//     };

//     const handleDescriptionChange = (e) => {
//         setProductDescription(e.target.value);
//     };


//     useEffect(() => {
//         const fetchUserData = async () => {
//             const userId = new URLSearchParams(location.search).get('id');
//             try {
//                 // const response = await fetch(`http://localhost:3005/login?id=${userId}`);
//                 const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/login?id=${userId}`);

//                 if (!response.ok) {
//                     throw new Error('User not found');
//                 }
//                 const data = await response.json();
//                 setUserData(data.user);
//             } catch (error) {
//                 setError(error.message);
//             }
//         };
//         fetchUserData();
//     }, [location.search]);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setUserData({ ...userData, [name]: value });
//     };


//     const handleImageChange = (e) => {
//         const files = Array.from(e.target.files);
//         setSelectedImages((prevImages) => [...prevImages, ...files]);
//     };

//     const handleUpdateUser = async () => {
//         const formData = new FormData();
//         formData.append('name', userData.name);
//         formData.append('email', userData.email);
//         formData.append('mobileNumber', userData.mobileNumber);
//         formData.append('companyName', userData.companyName);
//         formData.append('productOrService', userData.productOrService);
//         formData.append('title', productTitle);
//         formData.append('description', productDescription);
//         selectedImages.forEach((image, index) => {
//             formData.append('images', image);
//         });

//         try {
//             // const response = await fetch(`http://localhost:3005/update/${userData._id}`,
//             const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/update/${userData._id}`, {
//                 method: 'PUT',
//                 body: formData,
//             });

//             if (!response.ok) {
//                 throw new Error('Failed to update user data');
//             }
//             alert('User data updated successfully');
//             setSelectedImages([]);
//         } catch (error) {
//             setError(error.message);
//         }
//     };


//     const handleUpdateProduct = async () => {
//         const formData = new FormData();
//         formData.append('title', productTitle);
//         formData.append('description', productDescription);
//         selectedImages.forEach((image, index) => {
//             formData.append('images', image);
//         });

//         try {
//             // const response = await fetch(`http://localhost:3005/products/add/${userData._id}`,
//             const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/products/add/${userData._id}`, {
//                 method: 'POST',
//                 body: formData,
//             });
//             if (!response.ok) {
//                 console.log(error, "Error")
//                 throw new Error('Failed to update product data');
//             }
//             setUpdateMessage('Your update will be done within 24 hours'); // Set the message
//             setTimeout(() => setUpdateMessage(''), 10000); // Clear the message after 5 seconds
//             setSelectedImages([]);
//             setProductTitle('');
//             setProductDescription('');
//         } catch (error) {
//             setError(error.message);
//         }
//     };


//     if (error) {
//         return (
//             <div className="dashboard-container">
//                 <h1>{error}</h1>
//                 <p style={{ marginTop: '30px' }}>
//                     <Link to="/register-company">
//                         Click to <span style={{ color: 'red' }}>register</span> as company
//                     </Link>
//                 </p>
//                 <p style={{ marginTop: '30px' }}>
//                     <Link to="/login">
//                         Click here to <span style={{ color: 'red' }}>login</span>
//                     </Link>
//                 </p>
//             </div>
//         );
//     }

//     if (!userData) {
//         return <div className="dashboard-container">Loading...</div>;
//     }

//     return (
//         <div className="dashboard-container">
//             {/* <header className="dashboard-header"></header> */}
//             {/* <div className="dashboard-content">
//                 <div className="user-info">
//                     <div className="user-info-field">
//                         <label style={{ color: 'black' }} htmlFor="name">Name:</label>
//                         <input
//                             type="text"
//                             id="name"
//                             className="dash-input"
//                             name="name"
//                             value={userData.name || ''}
//                             onChange={handleInputChange}
//                         />
//                     </div>
//                     <div className="user-info-field">
//                         <label style={{ color: 'black' }} htmlFor="email">Email:</label>
//                         <input
//                             type="email"
//                             id="email"
//                             className="dash-input"
//                             name="email"
//                             value={userData.email || ''}
//                             onChange={handleInputChange}
//                         />
//                     </div>
//                     <div className="user-info-field">
//                         <label style={{ color: 'black' }} htmlFor="mobileNumber">Mobile Number:</label>
//                         <input
//                             type="text"
//                             id="mobileNumber"
//                             className="dash-input"
//                             name="mobileNumber"
//                             value={userData.mobileNumber || ''}
//                             onChange={handleInputChange}
//                         />
//                     </div>
//                     <div className="user-info-field">
//                         <label style={{ color: 'black' }} htmlFor="companyName">Company Name:</label>
//                         <input
//                             type="text"
//                             id="companyName"
//                             className="dash-input"
//                             name="companyName"
//                             value={userData.companyName || ''}
//                             onChange={handleInputChange}
//                         />
//                     </div>
//                     <div className="user-info-field">
//                         <label style={{ color: 'black' }} htmlFor="productOrService">Product/Service:</label>
//                         <input
//                             type="text"
//                             id="productOrService"
//                             className="dash-input"
//                             name="productOrService"
//                             value={userData.productOrService || ''}
//                             onChange={handleInputChange}
//                         />
//                     </div>
//                     <button
//                         style={{ padding: '10px 20px' }}
//                         className="update-btn"
//                         onClick={handleUpdateUser}
//                     >
//                         Update
//                     </button>
//                 </div>
//                 <div className="profile-info">
//                     <i className="fas fa-user-circle profile-icon"></i>
//                     <h3>
//                         <FontAwesomeIcon icon={faUser} /> Your Profile
//                     </h3>
//                     <hr style={{ margin: '2px 0px' }} />
//                     <p>Name: {userData.name}</p>
//                     <hr style={{ margin: '2px 0px' }} />
//                     <p>Email: {userData.email}</p>
//                     <hr style={{ margin: '2px 0px' }} />
//                     <p>Mobile Number: {userData.mobileNumber}</p>
//                     <hr style={{ margin: '2px 0px' }} />
//                     <p>Company Name: {userData.companyName}</p>
//                     <hr style={{ margin: '2px 0px' }} />
//                     <p>Product/Service: {userData.productOrService}</p>
//                 </div>
//             </div> */}

//             <div className="Premium-container">
//                 {/* <div className={`Premium-Header ${highlight ? 'highlight' : ''}`}>
//                     <ul>
//                         <li onClick={() => setActiveSection('dashboard')}>
//                             Control Panel<FontAwesomeIcon icon={faGauge} />
//                         </li>
//                         <li>
//                             Product & Services <FontAwesomeIcon icon={faShieldHalved} />
//                             <ul className="dropdown">
//                                 <li>Add New Products</li>
//                                 <li>Manage Product Services</li>
//                                 <li>Bulk Product Update</li>
//                                 <li>Rearrange Product/Services</li>

//                             </ul>
//                         </li>
//                         <li>
//                             My Enquiries <FontAwesomeIcon icon={faMessage} />
//                             <ul className="dropdown">
//                                 <li>Inbox</li>
//                                 <li>Send Box</li>
//                                 <li>Trash</li>

//                             </ul>
//                         </li>
//                         <li>
//                             Verify Buyers <FontAwesomeIcon icon={faShieldHalved} />
//                             <ul className="dropdown">
//                                 <li onClick={() => handleSectionChange('leadSearch')}>Search Buy Leads</li>
//                                 <li>Latest Buy Leads</li>
//                                 <li>Purchased Buy Leads</li>
//                                 <li>Location Preference</li>
//                             </ul>
//                         </li>

//                         <li>
//                             Catalog Control <FontAwesomeIcon icon={faScrewdriverWrench} />
//                             <ul className="dropdown">
//                                 <li onClick={() => setActiveSection('catalog')}>Manage Catalog Panel</li>
//                                 <li onClick={() => setActiveSection('catalogProduct')}> Catalog Photo Gallery</li>
//                                 <li>Testimonial</li>
//                             </ul>
//                         </li>
//                         <li>
//                             Buyers Tool <FontAwesomeIcon icon={faGear} />
//                             <ul className="dropdown">
//                                 <li>Post Buy Requirement</li>
//                                 <li>Manage Buy Requirements</li>
//                             </ul>
//                         </li>
//                     </ul>

//                 </div> */}
//                 <div className="dashboard-body">
//                     <div className={`premium-sidebar ${highlight ? 'highlight' : ''}`}>
//                         <ul className="pre-side">
//                             <li className="pre-item">
//                                 <p onClick={() => setActiveSection('mainDash')} >
//                                     <FontAwesomeIcon icon={faGauge} /> Dashboard
//                                 </p>
//                             </li>
//                             <li className="pre-item">
//                                 <p onClick={() => setActiveSection('profileEdit')}>
//                                     <FontAwesomeIcon icon={faUser} /> Company Profile
//                                 </p>
//                             </li>
//                             <li className="pre-item">
//                                 <p onClick={() => setActiveSection('catalogProduct')}>
//                                     <FontAwesomeIcon icon={faCartPlus} /> Add New Products
//                                 </p>
//                             </li>
//                             <li className="pre-item">
//                                 <p onClick={() => setActiveSection('viewleads')}>
//                                     <FontAwesomeIcon icon={faLeaf} /> Verified Buyers
//                                 </p>
//                             </li>
//                             <li className="pre-item">
//                                 <p onClick={() => setActiveSection('manageProducts')}>
//                                     <FontAwesomeIcon icon={faBarsProgress} /> Manage Products
//                                 </p>
//                             </li>
//                             <li className="pre-item">
//                                 <p onClick={() => setActiveSection('addgst')}>
//                                     <FontAwesomeIcon icon={faBook} /> Add GST
//                                 </p>
//                             </li>
//                             <li className="pre-item">
//                                 <p onClick={() => setActiveSection('needHelp')}>
//                                     <FontAwesomeIcon icon={faCircleQuestion} /> Need Help
//                                 </p>
//                             </li>
//                         </ul>
//                     </div>
//                     <div className="premium-content">
//                         {activeSection === 'dashboard' && (
//                             // <div>
//                             //     <h2>Free Dashboard</h2>
//                             //     <p>Welcome to Dashoard You can create a rough website here.</p>
//                             // </div>
//                             <>
//                                 <div className="itdevice-container">

//                                     {/* <div className="itdevice">
//                                         <img className='itimg' src="./assets/samridhi.png" alt="itdevice" />
//                                     </div> */}
//                                 </div>
//                                 <div className="dashboardContact">
//                                     <div className="personalDetails">
//                                         <div className="contactDetailHeading">Personal Details</div>
//                                         <ul>
//                                             <li>Name: {userData.name}</li>
//                                             <li>
//                                                 <span>Email: {userData.email}</span>
//                                                 {/* <span className="verification verified">Verified</span> */}
//                                             </li>
//                                             <li>
//                                                 <span>Number: {userData.mobileNumber}</span>
//                                                 {/* <span className="verification verified">Verified</span> */}
//                                             </li>
//                                         </ul>
//                                     </div>
//                                     <div className="businessDetails">
//                                         <div className="contactDetailHeading">Business Details</div>
//                                         <ul>
//                                             <li>Company Name: {userData.companyName}</li>
//                                             <li> Product & Servises: {userData.productOrService} </li>
//                                             <li>GSTIN No : {userData.gstNumber}</li>
//                                         </ul>
//                                     </div>
//                                 </div>

//                             </>
//                         )}
//                         {activeSection === 'viewleads' && (
//                             <div className="viewed-leads">
//                                 <h2>Viewed Buyers</h2>
//                                 {viewedLeads.length > 0 ? (
//                                     <ul>
//                                         {viewedLeads.map((lead, index) => (
//                                             <li key={index}>
//                                                 <p><strong>Buyer Name:</strong> {lead.buyerName}</p>
//                                                 <p><strong>Mobile Number:</strong> {lead.mobileNo}</p>
//                                                 <p><strong>Date Viewed:</strong> {new Date(lead.dateViewed).toLocaleDateString()}</p>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 ) : (
//                                     <p>No Buyer's  viewed yet.</p>
//                                 )}
//                             </div>
//                         )}
//                         {activeSection === 'addgst' && (
//                             <div className="user-info-fieldxx">
//                                 <h2>Update GST Number</h2>
//                                 {error && <p className="error-message">{error}</p>}
//                                 {message && <p className="success-message">{message}</p>}
//                                 <div>
//                                     <label className="gst-label">GST Number: {userData.gstNumber}</label>
//                                     <input className="gst-input" type="text" value={gstNumber} onChange={handleInputGstChange} />
//                                 </div>
//                                 <button className="update-gst-button" onClick={handleUpdateGST}>Update GST Number</button>
//                             </div>

//                         )}
//                         {activeSection === 'mainDash' && (
//                             <>

//                                 <div className="dashboardContact">
//                                     <div className="personalDetails">
//                                         <div className="contactDetailHeading">Personal Details</div>
//                                         <ul>
//                                             <li>Name: {userData.name}</li>
//                                             <li>
//                                                 <span>Email: {userData.email}</span>
//                                                 {/* <span className="verification verified">Verified</span> */}
//                                             </li>
//                                             <li>
//                                                 <span>Number: {userData.mobileNumber}</span>
//                                                 {/* <span className="verification verified">Verified</span> */}
//                                             </li>
//                                         </ul>
//                                     </div>
//                                     <div className="businessDetails">
//                                         <div className="contactDetailHeading">Business Details</div>
//                                         <ul>
//                                             <li>Company Name: {userData.companyName}</li>
//                                             <li> Product & Servises: {userData.productOrService} </li>
//                                             <li>GSTIN No : </li>
//                                         </ul>
//                                     </div>
//                                 </div>

//                             </>
//                         )}
//                         {activeSection === 'needHelp' && (
//                             <div className="help-section">

//                                 <div className="contact-infoxx">
//                                     <p style={{ color: 'green' }}>
//                                         <FontAwesomeIcon icon={faPhone} /> For any query: 011-41029790 (Customer Care)
//                                     </p>
//                                     <p style={{ color: 'green' }}>
//                                         <FontAwesomeIcon icon={faEnvelope} /> feedback@globalb2bmart.com
//                                     </p>
//                                     <p style={{ color: 'grey' }}>Share Your Feedback</p>
//                                 </div>
//                             </div>
//                         )}
//                         {activeSection === 'profileEdit' && (
//                             <div className="user-info">
//                                 <div className="user-info-field">
//                                     <label style={{ color: 'black' }} htmlFor="name">
//                                         Name:
//                                     </label>
//                                     <input
//                                         type="name"
//                                         id="name"
//                                         className="dash-input"
//                                         name="name"
//                                         value={userData.name}
//                                         onChange={handleInputChange}
//                                     />
//                                 </div>
//                                 <div className="user-info-field">
//                                     <label style={{ color: 'black' }} htmlFor="email">
//                                         Email:
//                                     </label>
//                                     <input
//                                         type="email"
//                                         id="email"
//                                         className="dash-input"
//                                         name="email"
//                                         value={userData.email}
//                                         onChange={handleInputChange}
//                                     />
//                                 </div>
//                                 <div className="user-info-field">
//                                     <label style={{ color: 'black' }} htmlFor="mobileNumber">
//                                         Mobile Number:
//                                     </label>
//                                     <input
//                                         type="text"
//                                         id="mobileNumber"
//                                         className="dash-input"
//                                         name="mobileNumber"
//                                         value={userData.mobileNumber}
//                                         onChange={handleInputChange}
//                                     />
//                                 </div>
//                                 <div className="user-info-field">
//                                     <label style={{ color: 'black' }} htmlFor="companyName">
//                                         Company Name:
//                                     </label>
//                                     <input
//                                         type="text"
//                                         id="companyName"
//                                         className="dash-input"
//                                         name="companyName"
//                                         value={userData.companyName}
//                                         onChange={handleInputChange}
//                                     />
//                                 </div>
//                                 <div className="user-info-field">
//                                     <label style={{ color: 'black' }} htmlFor="productOrService">
//                                         Product/Service:
//                                     </label>
//                                     <input
//                                         type="text"
//                                         id="productOrService"
//                                         className="dash-input"
//                                         name="productOrService"
//                                         value={userData.productOrService}
//                                         onChange={handleInputChange}
//                                     />
//                                 </div>
//                                 <button
//                                     style={{ padding: '10px 20px' }}
//                                     className="update-btn"
//                                     onClick={handleUpdateUser}
//                                 >
//                                     Update
//                                 </button>
//                             </div>
//                         )}
//                         {activeSection === 'catalog' && (
//                             <div className="catalog-options">
//                                 <h2 style={{ padding: '10px 0px', margin: '10px 12px', color: 'red' }}>Choose a Template</h2>
//                                 <div className="template-options">
//                                     <div className="template-option">Template 1</div>
//                                 </div>
//                                 <h3 style={{ marginLeft: '12px', color: 'red', marginBottom: '20px' }}>Add Slider Images</h3>
//                                 <p style={{ marginLeft: '12px' }}>Here you can choose the theme you want, customize it, or create a totally new one!</p>
//                                 <div className="upload-section">
//                                     <label htmlFor="headerSlider">Header Slider Image</label>
//                                     <small>1300x450 Size Recommended</small>
//                                     <input
//                                         type="file"
//                                         id="headerSlider"
//                                         name="headerSlider"
//                                         accept="image/*"
//                                         multiple
//                                         onChange={handleImageChange}
//                                     />
//                                 </div>
//                                 <div className="preview-section">
//                                     {/* <h3 style={{ marginLeft: '12px' }}>Image Preview</h3> */}
//                                     <div className="image-preview-container">
//                                         {selectedImages.map((image, index) => (
//                                             <div key={index} className="image-preview">
//                                                 <img
//                                                     src={URL.createObjectURL(image)}
//                                                     alt={`preview ${index}`}
//                                                     className="preview-image"
//                                                 />
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                                 {selectedImages.length > 0 && (
//                                     <button type="button" className='save-btn' style={{ padding: '10px 12px', marginTop: '10px' }} onClick={handleUpdateUser}>
//                                         Save
//                                     </button>
//                                 )}
//                             </div>
//                         )}

//                         {activeSection === 'manageProducts' && (
//                             <div className="catalog-product-optionsxx">
//                                 {products.map((product, index) => (
//                                     <div key={index} className="productx">
//                                         <h2>{product.title[0]}</h2>
//                                         <p>{product.description[0]}</p>
//                                         <div className="image-preview-container">
//                                             {product.images[0].map((image, imgIndex) => (
//                                                 // <img key={imgIndex} src={`http://localhost:3005${image}`} alt={`Product ${index} Image ${imgIndex}`} className="preview-image" />
//                                                 <img
//                                                     key={imgIndex}
//                                                     src={`${process.env.REACT_APP_API_ENDPOINT}${image}`}
//                                                     alt={`Product Image ${imgIndex}`}
//                                                     className="preview-image"
//                                                 />
//                                             ))}
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         )}


//                         {activeSection === 'catalogProduct' && (
//                             <div className="catalog-product-options">
//                                 <h2 style={{ padding: '10px 0px', margin: '10px 12px', color: 'red' }}>Add Product Details</h2>
//                                 <div className="product-info">
//                                     <label style={{ color: 'black' }} htmlFor="productTitle">Product Title
//                                         <span className='pro-title'>
//                                             <FontAwesomeIcon icon={faCircleInfo} />
//                                         </span>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         id="productTitle"
//                                         value={productTitle}
//                                         onChange={handleTitleChange}
//                                     />
//                                     <label style={{ color: 'black' }} htmlFor="productDescription"> Product Description
//                                         <span className='pro-des'>
//                                             <FontAwesomeIcon icon={faCircleInfo} />
//                                         </span>
//                                     </label>
//                                     <textarea
//                                         id="productDescription"
//                                         value={productDescription}
//                                         onChange={handleDescriptionChange}
//                                     />
//                                 </div>
//                                 <h3 style={{ marginLeft: '12px', color: 'red', marginBottom: '20px' }}>Add Product Images</h3>
//                                 <p style={{ marginLeft: '12px' }}>You can select up to 200 images for Your products.</p>
//                                 <div className="upload-section">
//                                     <label htmlFor="productImages">Product Images:</label>
//                                     <small>Maximum 200 images</small>
//                                     <input
//                                         type="file"
//                                         id="productImages"
//                                         name="productImages"
//                                         accept="image/*"
//                                         multiple
//                                         onChange={handleImageChange}
//                                     />
//                                 </div>
//                                 <div className="preview-section">
//                                     <h3 style={{ marginLeft: '12px' }}>Selected Images Preview</h3>
//                                     <div className="image-preview-container">
//                                         {selectedImages.map((image, index) => (
//                                             <div key={index} className="image-preview">
//                                                 <img
//                                                     src={URL.createObjectURL(image)}
//                                                     alt={`preview ${index}`}
//                                                     className="preview-image"
//                                                 />
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                                 {selectedImages.length > 0 && (
//                                     <button type="button" className='save-btn' style={{ padding: '10px 12px', marginTop: '10px' }} onClick={handleUpdateProduct}>
//                                         Save Product
//                                     </button>
//                                 )}
//                                 {updateMessage && (
//                                     <div className="update-message">
//                                         {updateMessage}
//                                     </div>
//                                 )}
//                             </div>
//                         )}

//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// }

// export default FreeDash;






//  New Code ================================================

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGauge, faShieldHalved, faMessage, faBriefcase, faScrewdriverWrench, faGear, faUser, faCartPlus, faBarsProgress, faBook, faPhone, faEnvelope, faCircleQuestion, faLeaf, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import './Dashboard.css'

const FreeDash = () => {
    const [userData, setUserData] = useState({});
    const [error, setError] = useState('');
    const [activeSection, setActiveSection] = useState('dashboard');
    const [selectedImages, setSelectedImages] = useState([]);
    const [productTitle, setProductTitle] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [updateMessage, setUpdateMessage] = useState('');
    const [highlight, setHighlight] = useState(false);
    const [viewedLeads, setViewedLeads] = useState([]);
    const [gstNumber, setGSTNumber] = useState('');
    const [message, setMessage] = useState('');
    const [products, setProducts] = useState([]);

    const location = useLocation();

    useEffect(() => {
        const fetchViewedLeads = async () => {
            if (activeSection === 'viewleads' && userData) {
                try {
                    // const response = await fetch (`http://localhost:3005/viewedLeads/${userData._id}`);
                    const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/viewedLeads/${userData._id}`);

                    if (!response.ok) {
                        throw new Error('Failed to fetch viewed leads');
                    }
                    const data = await response.json();
                    setViewedLeads(data.viewedLeads);
                } catch (error) {
                    console.error(error);
                    // Handle error
                }
            }
        };
        fetchViewedLeads();
    }, [activeSection, userData]);
    const handleInputGstChange = (event) => {
        setGSTNumber(event.target.value);
    };
    const handleUpdateGST = async () => {
        try {
            // const response = await fetch(`http://localhost:3005/update-gst/${userData._id}`, 
            const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/update-gst/${userData._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ gstNumber }),
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Failed to update GST number');
            }
            setMessage(data.message);
            setGSTNumber('');
            alert('GST number updated successfully'); // Alert when GST number is successfully updated
        } catch (error) {
            setError(error.message);
        }
    };

    // Fetch products when catalogProduct section is active
    useEffect(() => {
        if (activeSection === 'manageProducts') {
            const fetchProducts = async () => {
                try {

                    const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/products/${userData._id}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch products');
                    }
                    const data = await response.json();
                    setProducts(data.products);
                } catch (error) {
                    console.error(error);
                    // Handle error
                }
            };
            fetchProducts();
        }
    }, [activeSection, userData]);


    const handleSectionChange = (section) => {
        setActiveSection(section);
        if (section === 'leadSearch') {
            window.scrollTo(0, 0); // Scroll to top
            setHighlight(true); // Highlight the content
            setTimeout(() => setHighlight(false), 10000); // Remove highlight after 10 seconds
        }
    };

    const handleTitleChange = (e) => {
        setProductTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setProductDescription(e.target.value);
    };


    useEffect(() => {
        const fetchUserData = async () => {
            const userId = new URLSearchParams(location.search).get('id');
            try {
                // const response = await fetch(`http://localhost:3005/login?id=${userId}`);
                const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/login?id=${userId}`);

                if (!response.ok) {
                    throw new Error('User not found');
                }
                const data = await response.json();
                setUserData(data.user);
            } catch (error) {
                setError(error.message);
            }
        };
        fetchUserData();
    }, [location.search]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };


    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setSelectedImages((prevImages) => [...prevImages, ...files]);
    };

    const handleUpdateUser = async () => {
        const formData = new FormData();
        formData.append('name', userData.name);
        formData.append('email', userData.email);
        formData.append('mobileNumber', userData.mobileNumber);
        formData.append('companyName', userData.companyName);
        formData.append('productOrService', userData.productOrService);
        formData.append('title', productTitle);
        formData.append('description', productDescription);
        selectedImages.forEach((image, index) => {
            formData.append('images', image);
        });

        try {
            // const response = await fetch(`http://localhost:3005/update/${userData._id}`,
            const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/update/${userData._id}`, {
                method: 'PUT',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to update user data');
            }
            alert('User data updated successfully');
            setSelectedImages([]);
        } catch (error) {
            setError(error.message);
        }
    };


    const handleUpdateProduct = async () => {
        const formData = new FormData();
        formData.append('title', productTitle);
        formData.append('description', productDescription);
        selectedImages.forEach((image, index) => {
            formData.append('images', image);
        });

        try {
            // const response = await fetch(`http://localhost:3005/products/add/${userData._id}`,
            const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/products/add/${userData._id}`, {
                method: 'POST',
                body: formData,
            });
            if (!response.ok) {
                console.log(error, "Error")
                throw new Error('Failed to update product data');
            }
            setUpdateMessage('Your update will be done within 24 hours'); // Set the message
            setTimeout(() => setUpdateMessage(''), 10000); // Clear the message after 5 seconds
            setSelectedImages([]);
            setProductTitle('');
            setProductDescription('');
        } catch (error) {
            setError(error.message);
        }
    };


    if (error) {
        return (
            <div className="dashboard-container">
                <h1>{error}</h1>
                <p style={{ marginTop: '30px' }}>
                    <Link to="/register-company">
                        Click to <span style={{ color: 'red' }}>register</span> as company
                    </Link>
                </p>
                <p style={{ marginTop: '30px' }}>
                    <Link to="/login">
                        Click here to <span style={{ color: 'red' }}>login</span>
                    </Link>
                </p>
            </div>
        );
    }

    if (!userData) {
        return <div className="dashboard-container">Loading...</div>;
    }

    return (
        <div className="dashboard-container">


            <div className="Premium-container">

                <div className="dashboard-body">
                    <div className={`premium-sidebar ${highlight ? 'highlight' : ''}`}>
                        <ul className="pre-side">
                            <li className="pre-item">
                                <p onClick={() => setActiveSection('mainDash')} >
                                    <FontAwesomeIcon icon={faGauge} /> Dashboard
                                </p>
                            </li>
                            <li className="pre-item">
                                <p onClick={() => setActiveSection('profileEdit')}>
                                    <FontAwesomeIcon icon={faUser} /> Company Profile
                                </p>
                            </li>
                            <li className="pre-item">
                                <p onClick={() => setActiveSection('catalogProduct')}>
                                    <FontAwesomeIcon icon={faCartPlus} /> Add New Products
                                </p>
                            </li>
                            <li className="pre-item">
                                <p onClick={() => setActiveSection('viewleads')}>
                                    <FontAwesomeIcon icon={faLeaf} /> Verified Buyers
                                </p>
                            </li>
                            <li className="pre-item">
                                <p onClick={() => setActiveSection('manageProducts')}>
                                    <FontAwesomeIcon icon={faBarsProgress} /> Manage Products
                                </p>
                            </li>
                            <li className="pre-item">
                                <p onClick={() => setActiveSection('addgst')}>
                                    <FontAwesomeIcon icon={faBook} /> Add GST
                                </p>
                            </li>
                            <li className="pre-item">
                                <p onClick={() => setActiveSection('needHelp')}>
                                    <FontAwesomeIcon icon={faCircleQuestion} /> Need Help
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="premium-content">
                        {activeSection === 'dashboard' && (
                            // <div>
                            //     <h2>Free Dashboard</h2>
                            //     <p>Welcome to Dashoard You can create a rough website here.</p>
                            // </div>
                            <>
                                <div className="itdevice-container">

                                    {/* <div className="itdevice">
                                        <img className='itimg' src="./assets/samridhi.png" alt="itdevice" />
                                    </div> */}
                                </div>
                                <div className="dashboardContact">
                                    <div className="personalDetails">
                                        <div className="contactDetailHeading">Personal Details</div>
                                        <ul>
                                            <li>Name: {userData.name}</li>
                                            <li>
                                                <span>Email: {userData.email}</span>
                                                {/* <span className="verification verified">Verified</span> */}
                                            </li>
                                            <li>
                                                <span>Number: {userData.mobileNumber}</span>
                                                {/* <span className="verification verified">Verified</span> */}
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="businessDetails">
                                        <div className="contactDetailHeading">Business Details</div>
                                        <ul>
                                            <li>Company Name: {userData.companyName}</li>
                                            <li> Product & Servises: {userData.productOrService} </li>
                                            <li>GSTIN No : {userData.gstNumber}</li>
                                        </ul>
                                    </div>
                                </div>

                            </>
                        )}
                        {activeSection === 'viewleads' && (
                            <div className="viewed-leads">
                                <h2>Viewed Buyers</h2>
                                {viewedLeads.length > 0 ? (
                                    <ul>
                                        {viewedLeads.map((lead, index) => (
                                            <li key={index}>
                                                <p><strong>Buyer Name:</strong> {lead.buyerName}</p>
                                                <p><strong>Mobile Number:</strong> {lead.mobileNo}</p>
                                                <p><strong>Date Viewed:</strong> {new Date(lead.dateViewed).toLocaleDateString()}</p>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>No Buyer's  viewed yet.</p>
                                )}
                            </div>
                        )}
                        {activeSection === 'addgst' && (
                            <div className="user-info-fieldxx">
                                <h2>Update GST Number</h2>
                                {error && <p className="error-message">{error}</p>}
                                {message && <p className="success-message">{message}</p>}
                                <div>
                                    <label className="gst-label">GST Number: {userData.gstNumber}</label>
                                    <input className="gst-input" type="text" value={gstNumber} onChange={handleInputGstChange} />
                                </div>
                                <button className="update-gst-button" onClick={handleUpdateGST}>Update GST Number</button>
                            </div>

                        )}
                        {activeSection === 'mainDash' && (
                            <>

                                <div className="dashboardContact">
                                    <div className="personalDetails">
                                        <div className="contactDetailHeading">Personal Details</div>
                                        <ul>
                                            <li>Name: {userData.name}</li>
                                            <li>
                                                <span>Email: {userData.email}</span>
                                                {/* <span className="verification verified">Verified</span> */}
                                            </li>
                                            <li>
                                                <span>Number: {userData.mobileNumber}</span>
                                                {/* <span className="verification verified">Verified</span> */}
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="businessDetails">
                                        <div className="contactDetailHeading">Business Details</div>
                                        <ul>
                                            <li>Company Name: {userData.companyName}</li>
                                            <li> Product & Servises: {userData.productOrService} </li>
                                            <li>GSTIN No : </li>
                                        </ul>
                                    </div>
                                </div>

                            </>
                        )}
                        {activeSection === 'needHelp' && (
                            <div className="help-section">

                                <div className="contact-infoxx">
                                    <p style={{ color: 'green' }}>
                                        <FontAwesomeIcon icon={faPhone} /> For any query: 011-41029790 (Customer Care)
                                    </p>
                                    <p style={{ color: 'green' }}>
                                        <FontAwesomeIcon icon={faEnvelope} /> feedback@globalb2bmart.com
                                    </p>
                                    <p style={{ color: 'grey' }}>Share Your Feedback</p>
                                </div>
                            </div>
                        )}
                        {activeSection === 'profileEdit' && (
                            <div className="user-info">
                                <div className="user-info-field">
                                    <label style={{ color: 'black' }} htmlFor="name">
                                        Name:
                                    </label>
                                    <input
                                        type="name"
                                        id="name"
                                        className="dash-input"
                                        name="name"
                                        value={userData.name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="user-info-field">
                                    <label style={{ color: 'black' }} htmlFor="email">
                                        Email:
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="dash-input"
                                        name="email"
                                        value={userData.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="user-info-field">
                                    <label style={{ color: 'black' }} htmlFor="mobileNumber">
                                        Mobile Number:
                                    </label>
                                    <input
                                        type="text"
                                        id="mobileNumber"
                                        className="dash-input"
                                        name="mobileNumber"
                                        value={userData.mobileNumber}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="user-info-field">
                                    <label style={{ color: 'black' }} htmlFor="companyName">
                                        Company Name:
                                    </label>
                                    <input
                                        type="text"
                                        id="companyName"
                                        className="dash-input"
                                        name="companyName"
                                        value={userData.companyName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="user-info-field">
                                    <label style={{ color: 'black' }} htmlFor="productOrService">
                                        Product/Service:
                                    </label>
                                    <input
                                        type="text"
                                        id="productOrService"
                                        className="dash-input"
                                        name="productOrService"
                                        value={userData.productOrService}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <button
                                    style={{ padding: '10px 20px' }}
                                    className="update-btn"
                                    onClick={handleUpdateUser}
                                >
                                    Update
                                </button>
                            </div>
                        )}
                        {activeSection === 'catalog' && (
                            <div className="catalog-options">
                                <h2 style={{ padding: '10px 0px', margin: '10px 12px', color: 'red' }}>Choose a Template</h2>
                                <div className="template-options">
                                    <div className="template-option">Template 1</div>
                                </div>
                                <h3 style={{ marginLeft: '12px', color: 'red', marginBottom: '20px' }}>Add Slider Images</h3>
                                <p style={{ marginLeft: '12px' }}>Here you can choose the theme you want, customize it, or create a totally new one!</p>
                                <div className="upload-section">
                                    <label htmlFor="headerSlider">Header Slider Image</label>
                                    <small>1300x450 Size Recommended</small>
                                    <input
                                        type="file"
                                        id="headerSlider"
                                        name="headerSlider"
                                        accept="image/*"
                                        multiple
                                        onChange={handleImageChange}
                                    />
                                </div>
                                <div className="preview-section">
                                    {/* <h3 style={{ marginLeft: '12px' }}>Image Preview</h3> */}
                                    <div className="image-preview-container">
                                        {selectedImages.map((image, index) => (
                                            <div key={index} className="image-preview">
                                                <img
                                                    src={URL.createObjectURL(image)}
                                                    alt={`preview ${index}`}
                                                    className="preview-image"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {selectedImages.length > 0 && (
                                    <button type="button" className='save-btn' style={{ padding: '10px 12px', marginTop: '10px' }} onClick={handleUpdateUser}>
                                        Save
                                    </button>
                                )}
                            </div>
                        )}

                        {activeSection === 'manageProducts' && (
                            <div className="catalog-product-optionsxx">
                                {products.map((product, index) => (
                                    <div key={index} className="productx">
                                        <h2>{product.title[0]}</h2>
                                        <p>{product.description[0]}</p>
                                        <div className="image-preview-container">
                                            {product.images[0].map((image, imgIndex) => (
                                                // <img key={imgIndex} src={`http://localhost:3005${image}`} alt={`Product ${index} Image ${imgIndex}`} className="preview-image" />
                                                <img
                                                    key={imgIndex}
                                                    src={`${process.env.REACT_APP_API_ENDPOINT}${image}`}
                                                    alt={`Product Image ${imgIndex}`}
                                                    className="preview-image"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}


                        {activeSection === 'catalogProduct' && (
                            <div className="catalog-product-options">
                                <h2 style={{ padding: '10px 0px', margin: '10px 12px', color: 'red' }}>Add Product Details</h2>
                                <div className="product-info">
                                    <label style={{ color: 'black' }} htmlFor="productTitle">Product Title
                                        <span className='pro-title'>
                                            <FontAwesomeIcon icon={faCircleInfo} />
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        id="productTitle"
                                        value={productTitle}
                                        onChange={handleTitleChange}
                                    />
                                    <label style={{ color: 'black' }} htmlFor="productDescription"> Product Description
                                        <span className='pro-des'>
                                            <FontAwesomeIcon icon={faCircleInfo} />
                                        </span>
                                    </label>
                                    <textarea
                                        id="productDescription"
                                        value={productDescription}
                                        onChange={handleDescriptionChange}
                                    />
                                </div>
                                <h3 style={{ marginLeft: '12px', color: 'red', marginBottom: '20px' }}>Add Product Images</h3>
                                <p style={{ marginLeft: '12px' }}>You can select up to 200 images for Your products.</p>
                                <div className="upload-section">
                                    <label htmlFor="productImages">Product Images:</label>
                                    <small>Maximum 200 images</small>
                                    <input
                                        type="file"
                                        id="productImages"
                                        name="productImages"
                                        accept="image/*"
                                        multiple
                                        onChange={handleImageChange}
                                    />
                                </div>
                                <div className="preview-section">
                                    <h3 style={{ marginLeft: '12px' }}>Selected Images Preview</h3>
                                    <div className="image-preview-container">
                                        {selectedImages.map((image, index) => (
                                            <div key={index} className="image-preview">
                                                <img
                                                    src={URL.createObjectURL(image)}
                                                    alt={`preview ${index}`}
                                                    className="preview-image"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {selectedImages.length > 0 && (
                                    <button type="button" className='save-btn' style={{ padding: '10px 12px', marginTop: '10px' }} onClick={handleUpdateProduct}>
                                        Save Product
                                    </button>
                                )}
                                {updateMessage && (
                                    <div className="update-message">
                                        {updateMessage}
                                    </div>
                                )}
                            </div>
                        )}

                    </div>
                </div>

            </div>
        </div>
    );
}

export default FreeDash;





