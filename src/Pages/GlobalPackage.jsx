// import React, { useState } from "react";
// import axios from "axios";
// import "./prices.css"; // Ensure you create and import a CSS file for styling

// const Globalb2bPricess = () => {
//   const [showPopup, setShowPopup] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     number: "",
//     email: "",
//     city: "",
//     companyName: "",
//     plan: "standard",
//   });

//   const handleButtonClick = () => {
//     setShowPopup(true);
//   };

//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const formStyle = {
//     display: "flex",
//     flexWrap: "wrap",
//     gap: "20px",
//     padding: "20px",
//     border: "1px solid #ddd",
//     borderRadius: "10px",
//     backgroundColor: "#fff",
//   };

//   const closeButtonStyle = {
//     position: "absolute",
//     top: "10px",
//     right: "10px",
//     background: "transparent",
//     border: "none",
//     fontSize: "20px",
//     cursor: "pointer",
//   };

//   const fieldStyle = {
//     flex: "1 1 45%",
//   };

//   const labelStyle = {
//     display: "block",
//     marginBottom: "10px",
//   };

//   const inputStyle = {
//     width: "100%",
//     padding: "10px",
//     borderRadius: "5px",
//     border: "1px solid #ddd",
//   };

//   const submitButtonContainerStyle = {
//     flex: "1 1 45%",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginTop: "20px",
//   };

//   const submitButtonStyle = {
//     backgroundColor: "#fb743f",
//     color: "white",
//     padding: "10px 20px",
//     borderRadius: "5px",
//     border: "none",
//     cursor: "pointer",
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Make the payment request
//       const paymentResponse = await axios.post(
//         `${process.env.REACT_APP_API_ENDPOINT}/order`,
//         formData
//       );
//       if (
//         paymentResponse.data.success === true &&
//         paymentResponse.data.data.instrumentResponse.redirectInfo
//       ) {
//         window.location.href =
//           paymentResponse.data.data.instrumentResponse.redirectInfo.url;
//         console.log(paymentResponse);
//       }

//       // Submit form data to another API endpoint
//       const formResponse = await axios.post(
//         `${process.env.REACT_APP_API_ENDPOINT}/submit-pay`,
//         formData
//       );
//       console.log("Form submitted successfully:", formResponse.data);
//       console.log(formResponse);
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       // Handle error scenarios as needed
//     }
//   };

//   return (
//     <>
//       <div
//         className="page-banner-area page-banner-height"
//         id="membership-banner"
//       >
//         <div className="container">
//           <div className="row">
//             <div className="col-xl-12">
//               <div className="page-banner-content text-center">
//                 <h4 className="breadcrumb-title">Our Membership Plan</h4>
//                 <div className="breadcrumb-two">
//                   <nav>
//                     <nav className="breadcrumb-trail breadcrumbs">
//                       <ul className="breadcrumb-menu">
//                         <li className="breadcrumb-trail">
//                           <a href="/">
//                             <span>Home</span>
//                           </a>
//                         </li>
//                         <li className="trail-item">
//                           <span>Membership Plan</span>
//                         </li>
//                       </ul>
//                     </nav>
//                   </nav>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="prices-container">
//         <div className="price-card">
//           <h2>Standard</h2>
//           <p className="pricess">₹24999.00 +GST</p>
//           <button onClick={handleButtonClick}>Select This Plan</button>
//           <ul>
//             <li>
//               Business catalogue up to 150 images (like:globalb2bmart/your
//               company name)
//             </li>
//             <li>Classified Listing above Free Members</li>
//             <li>
//               Professional Business Oriented Template Based Website up to 150
//               pages
//             </li>
//             <li>Domain, Hosting & Maintenance</li>
//             <li>
//               Get Unlimited Access of Buyers inquiries received in your
//               GlobalB2Bmart account
//             </li>
//             <li>Search Engine Friendly Web Pages (Website)</li>
//             <li>Live Chat on website</li>
//             <li>Control Panel (website & Catalogue)</li>
//             <li>Customer Support Assistance</li>
//             <li>
//               Verified & Contactable Buyers (25)
//               <span className="pross-title">*</span>
//             </li>
//             <li>Website Security Certificate (SSL)</li>
//             <li>Payment Gateway Integration</li>
//             <li>Link Professional Videos (Up to 2 videos)</li>
//             <li>GMB Listing (Google My Business)</li>
//           </ul>
//         </div>
//         <div className="price-card">
//           <h2>Advanced </h2>
//           <p className="pricess">₹49999.00 +GST</p>
//           <button onClick={handleButtonClick}>Select This Plan</button>
//           <ul>
//             <li>
//               Business catalogue up to 200 images (like:globalb2bmart/your
//               company name)
//             </li>
//             <li>Classified Listing above Standard Members</li>
//             <li>
//               Professional Business Oriented Template Based Website up to 200
//               pages
//             </li>
//             <li>Domain, Hosting & Maintenance</li>
//             <li>
//               Get Unlimited Access of Buyers inquiries received in your
//               GlobalB2Bmart account
//             </li>
//             <li>Search Engine Friendly Web Pages (Website)</li>
//             <li>Live Chat on website</li>
//             <li>Control Panel (Website & Catalogue)</li>
//             <li>Customer Support Assistance</li>
//             <li>
//               Verified & Contactable Buyers (50)
//               <span className="pross-title">*</span>
//             </li>
//             <li>Website Security Certificate (SSL)</li>
//             <li>Payment Gateway Integration</li>
//             <li>Link Professional Videos (Up to 3 Videos)</li>
//             <li>GMB Listing (Google My Business)</li>
//             <li>Trusted Seller Stamp (GBM Verified)</li>
//             <li>Brochure of 10 pages</li>
//           </ul>
//         </div>
//         <div className="price-card">
//           <h2>Premium </h2>
//           <p className="pricess">₹74999.00 +GST</p>
//           <button onClick={handleButtonClick}>Select This Plan</button>
//           <ul>
//             <li>
//               Business catalogue up to 300 images (like:globalb2bmart/your
//               company name)
//             </li>
//             <li>Classified listing Above Advanced members</li>
//             <li>
//               Professional Business Oriented Template Based Website up to 300
//               pages
//             </li>
//             <li>Domain, Hosting & Maintenance</li>
//             <li>
//               Get Unlimited Access of Buyers inquiries received in your
//               GlobalB2Bmart account
//             </li>
//             <li>Search Engine Friendly Web Pages (Website)</li>
//             <li>Live Chat on website</li>
//             <li>Control Panel (Website & Catalogue)</li>
//             <li>Customer Support Assistance</li>
//             <li>
//               Verified & Contactable Buyers (75)
//               <span className="pross-title">*</span>
//             </li>
//             <li>Website Security Certificate (SSL)</li>
//             <li>Payment Gateway Integration</li>
//             <li>Link Professional Videos (Up to 5 Videos)</li>
//             <li>GMB Listing (Google My Business)</li>
//             <li>Trusted Seller Stamp (GBM Verified)</li>
//             <li>Brochure of 15 Pages</li>
//             <li>Banner With 5 Keywords On Search Pages</li>
//             <li>
//               Social Media Marketing <span className="prosss-title">*</span>
//             </li>
//             <li>Professional Logo</li>
//           </ul>
//         </div>
//         <div className="pricesx-card">
//           <ul>
//             <li>
//               <h2 style={{ color: "#fb743f", margin: "5px 0px" }}>
//                 {" "}
//                 <span style={{ color: "black" }}> Call Us</span> Now
//               </h2>
//             </li>
//             <hr />
//             <li>
//               <h2 style={{ color: "#fb743f", marginTop: "10px" }}>
//                 +91 8527116857
//               </h2>
//             </li>
//             <li>
//               <img
//                 style={{ height: "591px", marginTop: "35px" }}
//                 src="./assets/mancropped.png"
//                 alt="man"
//               />
//             </li>
//             <li>
//               <img
//                 style={{ height: "238px", marginTop: "60px" }}
//                 src="./assets/joinUs.jpeg"
//                 alt="joinnow"
//               />
//             </li>
//           </ul>
//         </div>
//       </div>
//       {showPopup && (
//         <div className="popup-overlay">
//           <div style={{ position: "relative" }} className="popup-content">
//             <h2
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 margin: "10px",
//                 color: "blue",
//               }}
//             >
//               Submit Your Payment Information
//             </h2>

//             <form style={formStyle} onSubmit={handleSubmit}>
//               <button
//                 type="button"
//                 className="close-button"
//                 onClick={handleClosePopup}
//                 style={closeButtonStyle}
//               >
//                 &times;
//               </button>
//               <div style={fieldStyle}>
//                 <label className="payment-detail" style={labelStyle}>
//                   Name:
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     style={inputStyle}
//                   />
//                 </label>
//               </div>
//               <div style={fieldStyle}>
//                 <label className="payment-detail" style={labelStyle}>
//                   Number:
//                   <input
//                     type="text"
//                     name="number"
//                     value={formData.number}
//                     onChange={handleChange}
//                     style={inputStyle}
//                   />
//                 </label>
//               </div>
//               <div style={fieldStyle}>
//                 <label className="payment-detail" style={labelStyle}>
//                   Email:
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     style={inputStyle}
//                   />
//                 </label>
//               </div>
//               <div style={fieldStyle}>
//                 <label className="payment-detail" style={labelStyle}>
//                   City:
//                   <input
//                     type="text"
//                     name="city"
//                     value={formData.city}
//                     onChange={handleChange}
//                     style={inputStyle}
//                   />
//                 </label>
//               </div>
//               <div style={fieldStyle}>
//                 <label className="payment-detail" style={labelStyle}>
//                   Company Name:
//                   <input
//                     type="text"
//                     name="companyName"
//                     value={formData.inpanyName}
//                     onChange={handleChange}
//                     style={inputStyle}
//                   />
//                 </label>
//               </div>
//               <div style={fieldStyle}>
//                 <label className="payment-detail" style={labelStyle}>
//                   Enter Your Amount:
//                   <input
//                     type="number"
//                     name="amount"
//                     value={formData.amount}
//                     onChange={handleChange}
//                     style={inputStyle}
//                   />
//                 </label>
//               </div>
//               <div style={submitButtonContainerStyle}>
//                 <button
//                   className="detail-subm"
//                   type="submit"
//                   style={submitButtonStyle}
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Globalb2bPricess;
// import React, { useState } from "react";

// const MembershipPlanSelector = () => {
//   const [selectedPlan, setSelectedPlan] = useState("Standard");

//   const plans = [
//     {
//       name: "Standard",
//       price: "₹24,999.00 +GST",
//       features: [
//         "Business catalogue up to 150 images",
//         "Classified Listing above Free Members",
//         "Professional Business Oriented Template Based Website up to 150 pages",
//         "Domain, Hosting & Maintenance",
//         "Get Unlimited Access of Buyers inquiries received in your GlobalB2Bmart account",
//         "Search Engine Friendly Web Pages (Website)",
//         "Live Chat on website",
//         "Control Panel (website & Catalogue)",
//         "Customer Support Assistance",
//         "Verified & Contactable Buyers (25)*",
//         "Website Security Certificate (SSL)",
//         "Payment Gateway Integration",
//         "Link Professional Videos (Up to 2 videos)",
//         "GMB Listing (Google My Business)",
//       ],
//     },
//     {
//       name: "Advanced",
//       price: "₹49,999.00 +GST",
//       features: [
//         "Business catalogue up to 200 images",
//         "Classified Listing above Standard Members",
//         "Professional Business Oriented Template Based Website up to 200 pages",
//         "Domain, Hosting & Maintenance",
//         "Get Unlimited Access of Buyers inquiries received in your GlobalB2Bmart account",
//         "Search Engine Friendly Web Pages (Website)",
//         "Live Chat on website",
//         "Control Panel (Website & Catalogue)",
//         "Customer Support Assistance",
//         "Verified & Contactable Buyers (50)*",
//         "Website Security Certificate (SSL)",
//         "Payment Gateway Integration",
//         "Link Professional Videos (Up to 3 Videos)",
//         "GMB Listing (Google My Business)",
//         "Trusted Seller Stamp (GBM Verified)",
//         "Brochure of 10 pages",
//       ],
//     },
//     {
//       name: "Premium",
//       price: "₹74,999.00 +GST",
//       features: [
//         "Business catalogue up to 300 images",
//         "Classified listing Above Advanced members",
//         "Professional Business Oriented Template Based Website up to 300 pages",
//         "Domain, Hosting & Maintenance",
//         "Get Unlimited Access of Buyers inquiries received in your GlobalB2Bmart account",
//         "Search Engine Friendly Web Pages (Website)",
//         "Live Chat on website",
//         "Control Panel (Website & Catalogue)",
//         "Customer Support Assistance",
//         "Verified & Contactable Buyers (75)*",
//         "Website Security Certificate (SSL)",
//         "Payment Gateway Integration",
//         "Link Professional Videos (Up to 5 Videos)",
//         "GMB Listing (Google My Business)",
//         "Trusted Seller Stamp (GBM Verified)",
//         "Brochure of 15 Pages",
//         "Banner With 5 Keywords On Search Pages",
//         "Social Media Marketing *",
//         "Professional Logo",
//       ],
//     },
//   ];

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h1 className="text-2xl font-bold text-center mb-6">
//         Select Your Membership Plan
//       </h1>
//       <div className="flex flex-col md:flex-row justify-center gap-6">
//         {plans.map((plan) => (
//           <div
//             key={plan.name}
//             className={`border rounded-xl p-6 shadow-md w-full md:w-1/3 bg-white ${
//               selectedPlan === plan.name ? "border-blue-500" : "border-gray-300"
//             }`}
//           >
//             <h2 className="text-xl font-semibold text-center mb-4">
//               {plan.name}
//             </h2>
//             <p className="text-lg font-bold text-center text-gray-700 mb-4">
//               {plan.price}
//             </p>
//             <ul className="text-gray-600 text-sm mb-4 list-disc list-inside">
//               {plan.features.map((feature, index) => (
//                 <li key={index}>{feature}</li>
//               ))}
//             </ul>
//             <div className="text-center">
//               <label className="inline-flex items-center">
//                 <input
//                   type="radio"
//                   name="membership-plan"
//                   value={plan.name}
//                   checked={selectedPlan === plan.name}
//                   onChange={() => setSelectedPlan(plan.name)}
//                   className="form-radio h-5 w-5 text-blue-500"
//                 />
//                 <span className="ml-2 text-gray-700">Select This Plan</span>
//               </label>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-8 p-6 bg-blue-50 rounded-xl">
//         <h2 className="text-lg font-bold text-gray-700 mb-4">
//           Selected Plan Details
//         </h2>
//         <p className="text-gray-800 font-semibold">Plan: {selectedPlan}</p>
//         <ul className="text-gray-600 mt-2 list-disc list-inside">
//           {plans
//             .find((plan) => plan.name === selectedPlan)
//             ?.features.map((feature, index) => (
//               <li key={index}>{feature}</li>
//             ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default MembershipPlanSelector;
// import React, { useState } from "react";
// import "./GlobalPrice.css";

// const MembershipPlanSelector = () => {
//   const [industry, setIndustry] = useState("");
//   const [audience, setAudience] = useState("");
//   const [ranking, setRanking] = useState("");
//   const [seoDone, setSeoDone] = useState("");
//   const [catalogImages, setCatalogImages] = useState("");
//   const [planSuggestion, setPlanSuggestion] = useState("");

//   const handleSubmit = () => {
//     let plan = "";

//     if (catalogImages === "150") {
//       plan = "Standard Plan - ₹24,999.00 + GST";
//     } else if (catalogImages === "200") {
//       plan = "Advanced Plan - ₹49,999.00 + GST";
//     } else if (catalogImages === "300") {
//       plan = "Premium Plan - ₹74,999.00 + GST";
//     }

//     setPlanSuggestion(plan);
//   };

//   return (
//     <div className="membership-plan-selector">
//       <h2>Select Your Membership Plan</h2>

//       <label>
//         Industry
//         <select value={industry} onChange={(e) => setIndustry(e.target.value)}>
//           <option value="">-- Select Your Industry --</option>
//           <option value="manufacturing">Manufacturing</option>
//           <option value="technology">Technology</option>
//           <option value="services">Services</option>
//           {/* Add more options here */}
//         </select>
//       </label>

//       <label>
//         Target Audience
//         <select value={audience} onChange={(e) => setAudience(e.target.value)}>
//           <option value="">-- Select Target Audience --</option>
//           <option value="global">Global</option>
//           <option value="local">Local</option>
//           <option value="niche">Niche</option>
//           {/* Add more options here */}
//         </select>
//       </label>

//       <label>
//         How would you rate your current ranking?
//         <select value={ranking} onChange={(e) => setRanking(e.target.value)}>
//           <option value="">-- Select --</option>
//           <option value="excellent">Excellent</option>
//           <option value="good">Good</option>
//           <option value="average">Average</option>
//           <option value="poor">Poor</option>
//         </select>
//       </label>

//       <label>
//         Any SEO done on your website?
//         <select value={seoDone} onChange={(e) => setSeoDone(e.target.value)}>
//           <option value="">-- Select --</option>
//           <option value="yes">Yes</option>
//           <option value="no">No</option>
//         </select>
//       </label>

//       <label>
//         How many business catalogue pages required?
//         <select
//           value={catalogImages}
//           onChange={(e) => setCatalogImages(e.target.value)}
//         >
//           <option value="">-- Select Catalogue Images --</option>
//           <option value="150">150 Images</option>
//           <option value="200">200 Images</option>
//           <option value="300">300 Images</option>
//         </select>
//       </label>

//       <button onClick={handleSubmit}>Submit</button>

//       {planSuggestion && (
//         <div className="plan-suggestion">
//           <h3>Suggested Plan: {planSuggestion}</h3>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MembershipPlanSelector;
// import React, { useState } from "react";
// import "./GlobalPrice.css";

// const MembershipPlanSelector = () => {
//   const [industry, setIndustry] = useState("");
//   const [audience, setAudience] = useState("");
//   const [ranking, setRanking] = useState("");
//   const [seoDone, setSeoDone] = useState("");
//   const [catalogImages, setCatalogImages] = useState("");
//   const [classifiedListing, setClassifiedListing] = useState("");
//   const [websitePages, setWebsitePages] = useState("");
//   const [buyersInquiries, setBuyersInquiries] = useState("");
//   const [verifiedBuyers, setVerifiedBuyers] = useState("");
//   const [seoFriendly, setSeoFriendly] = useState(false);
//   const [liveChat, setLiveChat] = useState(false);
//   const [sslCertificate, setSslCertificate] = useState(false);
//   const [paymentGateway, setPaymentGateway] = useState(false);
//   const [professionalVideos, setProfessionalVideos] = useState("");
//   const [gmbListing, setGmbListing] = useState(false);
//   const [brochurePages, setBrochurePages] = useState("");
//   const [socialMediaMarketing, setSocialMediaMarketing] = useState(false);
//   const [professionalLogo, setProfessionalLogo] = useState(false);

//   // Add state for plan suggestion
//   const [planSuggestion, setPlanSuggestion] = useState("");

//   const handleSubmit = () => {
//     // Calculating the number of features selected for each plan
//     let standardCount = 0;
//     let advancedCount = 0;
//     let premiumCount = 0;

//     // Standard Plan features
//     if (catalogImages === "150") standardCount++;
//     if (classifiedListing === "aboveFree") standardCount++;
//     if (websitePages === "150") standardCount++;
//     if (buyersInquiries === "unlimited") standardCount++;
//     if (verifiedBuyers === "25") standardCount++;
//     if (seoFriendly) standardCount++;
//     if (liveChat) standardCount++;
//     if (sslCertificate) standardCount++;
//     if (paymentGateway) standardCount++;
//     if (professionalVideos === "2") standardCount++;
//     if (gmbListing) standardCount++;

//     // Advanced Plan features
//     if (catalogImages === "200") advancedCount++;
//     if (classifiedListing === "aboveStandard") advancedCount++;
//     if (websitePages === "200") advancedCount++;
//     if (buyersInquiries === "unlimited") advancedCount++;
//     if (verifiedBuyers === "50") advancedCount++;
//     if (seoFriendly) advancedCount++;
//     if (liveChat) advancedCount++;
//     if (sslCertificate) advancedCount++;
//     if (paymentGateway) advancedCount++;
//     if (professionalVideos === "3") advancedCount++;
//     if (gmbListing) advancedCount++;
//     if (brochurePages === "10") advancedCount++;

//     // Premium Plan features
//     if (catalogImages === "300") premiumCount++;
//     if (classifiedListing === "aboveAdvanced") premiumCount++;
//     if (websitePages === "300") premiumCount++;
//     if (buyersInquiries === "unlimited") premiumCount++;
//     if (verifiedBuyers === "75") premiumCount++;
//     if (seoFriendly) premiumCount++;
//     if (liveChat) premiumCount++;
//     if (sslCertificate) premiumCount++;
//     if (paymentGateway) premiumCount++;
//     if (professionalVideos === "5") premiumCount++;
//     if (gmbListing) premiumCount++;
//     if (brochurePages === "15") premiumCount++;
//     if (socialMediaMarketing) premiumCount++;
//     if (professionalLogo) premiumCount++;

//     // Suggesting the plan based on feature matches
//     let suggestedPlan = "";
//     if (standardCount >= advancedCount && standardCount >= premiumCount) {
//       suggestedPlan = "Standard Plan - ₹24,999.00 + GST";
//     } else if (
//       advancedCount >= standardCount &&
//       advancedCount >= premiumCount
//     ) {
//       suggestedPlan = "Advanced Plan - ₹49,999.00 + GST";
//     } else if (premiumCount >= standardCount && premiumCount >= advancedCount) {
//       suggestedPlan = "Premium Plan - ₹74,999.00 + GST";
//     }

//     // Displaying the plan suggestion
//     setPlanSuggestion(suggestedPlan);
//   };

//   return (
//     <div className="membership-plan-selector">
//       <h2>Select Your Membership Plan</h2>

//       {/* Industry Selection */}
//       <label>
//         Industry
//         <select value={industry} onChange={(e) => setIndustry(e.target.value)}>
//           <option value="">-- Select Your Industry --</option>
//           <option value="manufacturing">Manufacturing</option>
//           <option value="technology">Suppliers</option>
//           <option value="services">Services</option>
//         </select>
//       </label>

//       {/* Target Audience Selection */}
//       <label>
//         Target Audience
//         <select value={audience} onChange={(e) => setAudience(e.target.value)}>
//           <option value="">-- Select Target Audience --</option>
//           <option value="global">World Wide</option>
//           <option value="local">Domestic</option>
//           <option value="niche">Regional</option>
//         </select>
//       </label>

//       {/* Catalogue Images */}
//       <label>
//         How many business catalogue images do you need?
//         <select
//           value={catalogImages}
//           onChange={(e) => setCatalogImages(e.target.value)}
//         >
//           <option value="">-- Select Catalogue Images --</option>
//           <option value="150">150 Images</option>
//           <option value="200">200 Images</option>
//           <option value="300">300 Images</option>
//         </select>
//       </label>

//       {/* Classified Listing */}
//       {/* <label>
//         Classified Listing
//         <select
//           value={classifiedListing}
//           onChange={(e) => setClassifiedListing(e.target.value)}
//         >
//           <option value="">-- Select Listing Type --</option>
//           <option value="aboveFree">Above Free Members</option>
//           <option value="aboveStandard">Above Standard Members</option>
//           <option value="aboveAdvanced">Above Advanced Members</option>
//         </select>
//       </label> */}

//       {/* Website Pages */}
//       <label>
//         Professional Business Oriented Template-Based Website Pages
//         <select
//           value={websitePages}
//           onChange={(e) => setWebsitePages(e.target.value)}
//         >
//           <option value="">-- Select Website Pages --</option>
//           <option value="150">150 Pages</option>
//           <option value="200">200 Pages</option>
//           <option value="300">300 Pages</option>
//         </select>
//       </label>

//       {/* Buyers Inquiries */}
//       {/* <label>
//         Get Unlimited Access to Buyers Inquiries
//         <select
//           value={buyersInquiries}
//           onChange={(e) => setBuyersInquiries(e.target.value)}
//         >
//           <option value="">-- Select Inquiry Type --</option>
//           <option value="unlimited">Unlimited</option>
//           <option value="limited">Limited</option>
//         </select>
//       </label> */}

//       {/* Verified Buyers */}
//       <label>
//         Verified & Contactable Buyers
//         <select
//           value={verifiedBuyers}
//           onChange={(e) => setVerifiedBuyers(e.target.value)}
//         >
//           <option value="">-- Select Verified Buyers --</option>
//           <option value="25">25</option>
//           <option value="50">50</option>
//           <option value="75">75</option>
//         </select>
//       </label>

//       {/* Features Selection */}
//       {/* <label>
//         SEO Friendly Web Pages
//         <input
//           type="checkbox"
//           checked={seoFriendly}
//           onChange={() => setSeoFriendly(!seoFriendly)}
//         />
//       </label> */}

//       <label>
//         Live Chat on Website
//         <input
//           type="checkbox"
//           checked={liveChat}
//           onChange={() => setLiveChat(!liveChat)}
//         />
//       </label>

//       <label>
//         Website Security Certificate (SSL)
//         <input
//           type="checkbox"
//           checked={sslCertificate}
//           onChange={() => setSslCertificate(!sslCertificate)}
//         />
//       </label>

//       <label>
//         Payment Gateway Integration
//         <input
//           type="checkbox"
//           checked={paymentGateway}
//           onChange={() => setPaymentGateway(!paymentGateway)}
//         />
//       </label>

//       {/* <label>
//         Link Professional Videos (Up to 5 videos)
//         <select
//           value={professionalVideos}
//           onChange={(e) => setProfessionalVideos(e.target.value)}
//         >
//           <option value="">-- Select Videos --</option>
//           <option value="2">2 Videos</option>
//           <option value="3">3 Videos</option>
//           <option value="5">5 Videos</option>
//         </select>
//       </label> */}

//       <label>
//         GMB Listing (Google My Business)
//         <input
//           type="checkbox"
//           checked={gmbListing}
//           onChange={() => setGmbListing(!gmbListing)}
//         />
//       </label>

//       <label>
//         Brochure Pages
//         <select
//           value={brochurePages}
//           onChange={(e) => setBrochurePages(e.target.value)}
//         >
//           <option value="">-- Select Brochure Pages --</option>
//           <option value="10">10 Pages</option>
//           <option value="15">15 Pages</option>
//         </select>
//       </label>

//       <label>
//         Social Media Marketing
//         <input
//           type="checkbox"
//           checked={socialMediaMarketing}
//           onChange={() => setSocialMediaMarketing(!socialMediaMarketing)}
//         />
//       </label>

//       {/* <label>
//         Professional Logo
//         <input
//           type="checkbox"
//           checked={professionalLogo}
//           onChange={() => setProfessionalLogo(!professionalLogo)}
//         />
//       </label> */}

//       {/* Submit Button */}
//       <button onClick={handleSubmit}>Submit</button>

//       {/* Plan Suggestion */}
//       {planSuggestion && (
//         <div className="plan-suggestion">
//           <h3>Suggested Plan: {planSuggestion}</h3>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MembershipPlanSelector;
// import React, { useState } from "react";
// import "./GlobalPrice.css";

// const MembershipPlanSelector = () => {
//   const [industry, setIndustry] = useState("");
//   const [audience, setAudience] = useState("");
//   const [catalogImages, setCatalogImages] = useState("");
//   const [websitePages, setWebsitePages] = useState("");
//   const [verifiedBuyers, setVerifiedBuyers] = useState("");
//   const [liveChat, setLiveChat] = useState(false);
//   const [sslCertificate, setSslCertificate] = useState(false);
//   const [paymentGateway, setPaymentGateway] = useState(false);
//   const [gmbListing, setGmbListing] = useState(false);
//   const [brochurePages, setBrochurePages] = useState("");
//   const [socialMediaMarketing, setSocialMediaMarketing] = useState(false);
//   const [planSuggestion, setPlanSuggestion] = useState("");

//   const handleSubmit = () => {
//     let standardCount = 0;
//     let advancedCount = 0;
//     let premiumCount = 0;

//     // Standard Plan features
//     if (catalogImages === "150") standardCount++;
//     if (websitePages === "150") standardCount++;
//     if (verifiedBuyers === "25") standardCount++;
//     if (liveChat) standardCount++;
//     if (sslCertificate) standardCount++;
//     if (paymentGateway) standardCount++;
//     if (gmbListing) standardCount++;

//     // Advanced Plan features
//     if (catalogImages === "200") advancedCount++;
//     if (websitePages === "200") advancedCount++;
//     if (verifiedBuyers === "50") advancedCount++;
//     if (liveChat) advancedCount++;
//     if (sslCertificate) advancedCount++;
//     if (paymentGateway) advancedCount++;
//     if (gmbListing) advancedCount++;
//     if (brochurePages === "10") advancedCount++;

//     // Premium Plan features
//     if (catalogImages === "300") premiumCount++;
//     if (websitePages === "300") premiumCount++;
//     if (verifiedBuyers === "75") premiumCount++;
//     if (liveChat) premiumCount++;
//     if (sslCertificate) premiumCount++;
//     if (paymentGateway) premiumCount++;
//     if (gmbListing) premiumCount++;
//     if (brochurePages === "15") premiumCount++;
//     if (socialMediaMarketing) premiumCount++;

//     // Suggesting the plan based on feature matches
//     let suggestedPlan = "";
//     if (standardCount >= advancedCount && standardCount >= premiumCount) {
//       suggestedPlan = "Standard Plan - ₹24,999.00 + GST";
//     } else if (
//       advancedCount >= standardCount &&
//       advancedCount >= premiumCount
//     ) {
//       suggestedPlan = "Advanced Plan - ₹49,999.00 + GST";
//     } else if (premiumCount >= standardCount && premiumCount >= advancedCount) {
//       suggestedPlan = "Premium Plan - ₹74,999.00 + GST";
//     }

//     setPlanSuggestion(suggestedPlan);
//   };

//   return (
//     <div className="membership-plan-selector">
//       <h2>Select Your Membership Plan</h2>

//       <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
//         {/* Industry Selection */}
//         <div style={{ flex: "1 1 45%" }}>
//           <label>
//             Industry
//             <select
//               value={industry}
//               onChange={(e) => setIndustry(e.target.value)}
//             >
//               <option value="">-- Select Your Industry --</option>
//               <option value="manufacturing">Manufacturing</option>
//               <option value="technology">Suppliers</option>
//               <option value="services">Services</option>
//             </select>
//           </label>
//         </div>

//         {/* Target Audience Selection */}
//         <div style={{ flex: "1 1 45%" }}>
//           <label>
//             Target Audience
//             <select
//               value={audience}
//               onChange={(e) => setAudience(e.target.value)}
//             >
//               <option value="">-- Select Target Audience --</option>
//               <option value="global">World Wide</option>
//               <option value="local">Domestic</option>
//               <option value="niche">Regional</option>
//             </select>
//           </label>
//         </div>

//         {/* Catalogue Images */}
//         <div style={{ flex: "1 1 45%" }}>
//           <label>
//             How many business catalogue images do you need?
//             <select
//               value={catalogImages}
//               onChange={(e) => setCatalogImages(e.target.value)}
//             >
//               <option value="">-- Select Catalogue Images --</option>
//               <option value="150">150 Images</option>
//               <option value="200">200 Images</option>
//               <option value="300">300 Images</option>
//             </select>
//           </label>
//         </div>

//         {/* Website Pages */}
//         <div style={{ flex: "1 1 45%" }}>
//           <label>
//             Professional Business Oriented Template-Based Website Pages
//             <select
//               value={websitePages}
//               onChange={(e) => setWebsitePages(e.target.value)}
//             >
//               <option value="">-- Select Website Pages --</option>
//               <option value="150">150 Pages</option>
//               <option value="200">200 Pages</option>
//               <option value="300">300 Pages</option>
//             </select>
//           </label>
//         </div>

//         {/* Verified Buyers */}
//         <div style={{ flex: "1 1 45%" }}>
//           <label>
//             Verified & Contactable Buyers
//             <select
//               value={verifiedBuyers}
//               onChange={(e) => setVerifiedBuyers(e.target.value)}
//             >
//               <option value="">-- Select Verified Buyers --</option>
//               <option value="25">25</option>
//               <option value="50">50</option>
//               <option value="75">75</option>
//             </select>
//           </label>
//         </div>

//         {/* Features Selection */}
//         <div style={{ flex: "1 1 45%" }}>
//           <label>
//             Live Chat on Website
//             <input
//               type="checkbox"
//               checked={liveChat}
//               onChange={() => setLiveChat(!liveChat)}
//             />
//           </label>
//         </div>

//         <div style={{ flex: "1 1 45%" }}>
//           <label>
//             Website Security Certificate (SSL)
//             <input
//               type="checkbox"
//               checked={sslCertificate}
//               onChange={() => setSslCertificate(!sslCertificate)}
//             />
//           </label>
//         </div>

//         <div style={{ flex: "1 1 45%" }}>
//           <label>
//             Payment Gateway Integration
//             <input
//               type="checkbox"
//               checked={paymentGateway}
//               onChange={() => setPaymentGateway(!paymentGateway)}
//             />
//           </label>
//         </div>

//         <div style={{ flex: "1 1 45%" }}>
//           <label>
//             GMB Listing (Google My Business)
//             <input
//               type="checkbox"
//               checked={gmbListing}
//               onChange={() => setGmbListing(!gmbListing)}
//             />
//           </label>
//         </div>

//         <div style={{ flex: "1 1 45%" }}>
//           <label>
//             Brochure Pages
//             <select
//               value={brochurePages}
//               onChange={(e) => setBrochurePages(e.target.value)}
//             >
//               <option value="">-- Select Brochure Pages --</option>
//               <option value="10">10 Pages</option>
//               <option value="15">15 Pages</option>
//             </select>
//           </label>
//         </div>

//         <div style={{ flex: "1 1 45%" }}>
//           <label>
//             Social Media Marketing
//             <input
//               type="checkbox"
//               checked={socialMediaMarketing}
//               onChange={() => setSocialMediaMarketing(!socialMediaMarketing)}
//             />
//           </label>
//         </div>
//       </div>

//       {/* Submit Button */}
//       <button onClick={handleSubmit}>Submit</button>

//       {/* Plan Suggestion */}
//       {planSuggestion && (
//         <div className="plan-suggestion">
//           <h3>Suggested Plan: {planSuggestion}</h3>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MembershipPlanSelector;
// import React, { useState } from "react";
// import "./GlobalPrice.css";

// const MembershipPlanSelector = () => {
//   const [industry, setIndustry] = useState("");
//   const [audience, setAudience] = useState("");
//   const [catalogImages, setCatalogImages] = useState("");
//   const [websitePages, setWebsitePages] = useState("");
//   const [verifiedBuyers, setVerifiedBuyers] = useState("");
//   const [liveChat, setLiveChat] = useState(false);
//   const [sslCertificate, setSslCertificate] = useState(false);
//   const [paymentGateway, setPaymentGateway] = useState(false);
//   const [gmbListing, setGmbListing] = useState(false);
//   const [brochurePages, setBrochurePages] = useState("");
//   const [socialMediaMarketing, setSocialMediaMarketing] = useState(false);
//   const [planSuggestion, setPlanSuggestion] = useState("");

//   const handleSubmit = () => {
//     let standardCount = 0;
//     let advancedCount = 0;
//     let premiumCount = 0;

//     // Standard Plan features
//     if (catalogImages === "150") standardCount++;
//     if (websitePages === "150") standardCount++;
//     if (verifiedBuyers === "25") standardCount++;
//     if (liveChat) standardCount++;
//     if (sslCertificate) standardCount++;
//     if (paymentGateway) standardCount++;
//     if (gmbListing) standardCount++;

//     // Advanced Plan features
//     if (catalogImages === "200") advancedCount++;
//     if (websitePages === "200") advancedCount++;
//     if (verifiedBuyers === "50") advancedCount++;
//     if (liveChat) advancedCount++;
//     if (sslCertificate) advancedCount++;
//     if (paymentGateway) advancedCount++;
//     if (gmbListing) advancedCount++;
//     if (brochurePages === "10") advancedCount++;

//     // Premium Plan features
//     if (catalogImages === "300") premiumCount++;
//     if (websitePages === "300") premiumCount++;
//     if (verifiedBuyers === "75") premiumCount++;
//     if (liveChat) premiumCount++;
//     if (sslCertificate) premiumCount++;
//     if (paymentGateway) premiumCount++;
//     if (gmbListing) premiumCount++;
//     if (brochurePages === "15") premiumCount++;
//     if (socialMediaMarketing) premiumCount++;

//     // Suggesting the plan based on feature matches
//     let suggestedPlan = "";
//     if (standardCount >= advancedCount && standardCount >= premiumCount) {
//       suggestedPlan = "Standard Plan - ₹24,999.00 + GST";
//     } else if (
//       advancedCount >= standardCount &&
//       advancedCount >= premiumCount
//     ) {
//       suggestedPlan = "Advanced Plan - ₹49,999.00 + GST";
//     } else if (premiumCount >= standardCount && premiumCount >= advancedCount) {
//       suggestedPlan = "Premium Plan - ₹74,999.00 + GST";
//     }

//     setPlanSuggestion(suggestedPlan);
//   };

//   return (
//     <div className="membership-plan-selector">
//       <h2>Select Your Membership Plan</h2>

//       <div className="form-fields">
//         {/* Industry Selection */}
//         <div>
//           <label>
//             Industry
//             <select
//               value={industry}
//               onChange={(e) => setIndustry(e.target.value)}
//             >
//               <option value="">-- Select Your Industry --</option>
//               <option value="manufacturing">Manufacturing</option>
//               <option value="technology">Suppliers</option>
//               <option value="services">Services</option>
//             </select>
//           </label>
//         </div>

//         {/* Target Audience Selection */}
//         <div>
//           <label>
//             Target Audience
//             <select
//               value={audience}
//               onChange={(e) => setAudience(e.target.value)}
//             >
//               <option value="">-- Select Target Audience --</option>
//               <option value="global">World Wide</option>
//               <option value="local">Domestic</option>
//               <option value="niche">Regional</option>
//             </select>
//           </label>
//         </div>

//         {/* Catalogue Images */}
//         <div>
//           <label>
//             How many business catalogue images do you need?
//             <select
//               value={catalogImages}
//               onChange={(e) => setCatalogImages(e.target.value)}
//             >
//               <option value="">-- Select Catalogue Images --</option>
//               <option value="150">150 Images</option>
//               <option value="200">200 Images</option>
//               <option value="300">300 Images</option>
//             </select>
//           </label>
//         </div>

//         {/* Website Pages */}
//         <div>
//           <label>
//             Professional Business Oriented Template-Based Website Pages
//             <select
//               value={websitePages}
//               onChange={(e) => setWebsitePages(e.target.value)}
//             >
//               <option value="">-- Select Website Pages --</option>
//               <option value="150">150 Pages</option>
//               <option value="200">200 Pages</option>
//               <option value="300">300 Pages</option>
//             </select>
//           </label>
//         </div>

//         {/* Verified Buyers */}
//         <div>
//           <label>
//             Verified & Contactable Buyers
//             <select
//               value={verifiedBuyers}
//               onChange={(e) => setVerifiedBuyers(e.target.value)}
//             >
//               <option value="">-- Select Verified Buyers --</option>
//               <option value="25">25</option>
//               <option value="50">50</option>
//               <option value="75">75</option>
//             </select>
//           </label>
//         </div>

//         {/* Features Selection */}
//         <div>
//           <label>
//             Live Chat on Website
//             <input
//               type="checkbox"
//               checked={liveChat}
//               onChange={() => setLiveChat(!liveChat)}
//             />
//           </label>
//         </div>

//         <div>
//           <label>
//             Website Security Certificate (SSL)
//             <input
//               type="checkbox"
//               checked={sslCertificate}
//               onChange={() => setSslCertificate(!sslCertificate)}
//             />
//           </label>
//         </div>

//         <div>
//           <label>
//             Payment Gateway Integration
//             <input
//               type="checkbox"
//               checked={paymentGateway}
//               onChange={() => setPaymentGateway(!paymentGateway)}
//             />
//           </label>
//         </div>

//         <div>
//           <label>
//             GMB Listing (Google My Business)
//             <input
//               type="checkbox"
//               checked={gmbListing}
//               onChange={() => setGmbListing(!gmbListing)}
//             />
//           </label>
//         </div>

//         <div>
//           <label>
//             Brochure Pages
//             <select
//               value={brochurePages}
//               onChange={(e) => setBrochurePages(e.target.value)}
//             >
//               <option value="">-- Select Brochure Pages --</option>
//               <option value="10">10 Pages</option>
//               <option value="15">15 Pages</option>
//             </select>
//           </label>
//         </div>

//         <div>
//           <label>
//             Social Media Marketing
//             <input
//               type="checkbox"
//               checked={socialMediaMarketing}
//               onChange={() => setSocialMediaMarketing(!socialMediaMarketing)}
//             />
//           </label>
//         </div>
//       </div>

//       {/* Submit Button */}
//       <button onClick={handleSubmit}>Submit</button>

//       {/* Plan Suggestion */}
//       {planSuggestion && (
//         <div className="plan-suggestion">
//           <h3>Suggested Plan: {planSuggestion}</h3>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MembershipPlanSelector;
// import React, { useState } from "react";
// import "./GlobalPrice.css";

// const MembershipPlanSelector = () => {
//   const [industry, setIndustry] = useState("");
//   const [audience, setAudience] = useState("");
//   const [catalogImages, setCatalogImages] = useState("");
//   const [websitePages, setWebsitePages] = useState("");
//   const [verifiedBuyers, setVerifiedBuyers] = useState("");
//   const [liveChat, setLiveChat] = useState(false);
//   const [sslCertificate, setSslCertificate] = useState(false);
//   const [paymentGateway, setPaymentGateway] = useState(false);
//   const [gmbListing, setGmbListing] = useState(false);
//   const [brochurePages, setBrochurePages] = useState("");
//   const [socialMediaMarketing, setSocialMediaMarketing] = useState(false);
//   const [planSuggestion, setPlanSuggestion] = useState("");
//   const [couponCode, setCouponCode] = useState("");
//   const [discountedPrice, setDiscountedPrice] = useState(null);
//   const [couponValid, setCouponValid] = useState(true);
//   const [couponApplied, setCouponApplied] = useState(false);
//   const [couponError, setCouponError] = useState("");
//   const [couponTimeRemaining, setCouponTimeRemaining] = useState(0);

//   const validCoupons = [
//     "X#2hL!",
//     "3rN@wK",
//     "iF7z*G",
//     "R9*eTn",
//     "@pQ3bL",
//     "Y1^vZ8",
//     "s3B&zL",
//     "G1z!tQ",
//     "kT#9gR",
//     "Q7n#Bf",
//     "@pX2Lz",
//     "4mJ!gN",
//     "V5^cF7",
//     "x2Tz#L",
//     "rY8!sP",
//     "D9^cTx",
//     "6XwQ*L",
//     "hC8z@J",
//     "pM2!zX",
//     "L3^kT1",
//   ];

//   const handleSubmit = () => {
//     let standardCount = 0;
//     let advancedCount = 0;
//     let premiumCount = 0;

//     // Standard Plan features
//     if (catalogImages === "150") standardCount++;
//     if (websitePages === "150") standardCount++;
//     if (verifiedBuyers === "25") standardCount++;
//     if (liveChat) standardCount++;
//     if (sslCertificate) standardCount++;
//     if (paymentGateway) standardCount++;
//     if (gmbListing) standardCount++;

//     // Advanced Plan features
//     if (catalogImages === "200") advancedCount++;
//     if (websitePages === "200") advancedCount++;
//     if (verifiedBuyers === "50") advancedCount++;
//     if (liveChat) advancedCount++;
//     if (sslCertificate) advancedCount++;
//     if (paymentGateway) advancedCount++;
//     if (gmbListing) advancedCount++;
//     if (brochurePages === "10") advancedCount++;

//     // Premium Plan features
//     if (catalogImages === "300") premiumCount++;
//     if (websitePages === "300") premiumCount++;
//     if (verifiedBuyers === "75") premiumCount++;
//     if (liveChat) premiumCount++;
//     if (sslCertificate) premiumCount++;
//     if (paymentGateway) premiumCount++;
//     if (gmbListing) premiumCount++;
//     if (brochurePages === "15") premiumCount++;
//     if (socialMediaMarketing) premiumCount++;

//     // Suggesting the plan based on feature matches
//     let suggestedPlan = "";
//     let price = 0;
//     if (standardCount >= advancedCount && standardCount >= premiumCount) {
//       suggestedPlan = "Standard Plan - ₹24,999.00 + GST";
//       price = 24999;
//     } else if (
//       advancedCount >= standardCount &&
//       advancedCount >= premiumCount
//     ) {
//       suggestedPlan = "Advanced Plan - ₹49,999.00 + GST";
//       price = 49999;
//     } else if (premiumCount >= standardCount && premiumCount >= advancedCount) {
//       suggestedPlan = "Premium Plan - ₹74,999.00 + GST";
//       price = 74999;
//     }

//     setPlanSuggestion(suggestedPlan);

//     if (couponApplied && couponValid) {
//       const discount = 0.3;
//       const newPrice = price * (1 - discount);
//       setDiscountedPrice(newPrice);
//     } else {
//       setDiscountedPrice(null);
//     }
//   };

//   const handleCouponChange = (e) => {
//     setCouponCode(e.target.value);
//   };

//   const applyCoupon = () => {
//     if (validCoupons.includes(couponCode) && couponValid) {
//       setCouponApplied(true);
//       setCouponError("");
//       startCouponTimer();
//     } else {
//       setCouponError("Invalid or expired coupon.");
//     }
//   };

//   const startCouponTimer = () => {
//     setCouponTimeRemaining(30); // Set 30 minutes validity
//     const timer = setInterval(() => {
//       setCouponTimeRemaining((prevTime) => {
//         if (prevTime === 1) {
//           clearInterval(timer);
//           setCouponValid(false); // Invalidate coupon after 30 minutes
//         }
//         return prevTime - 1;
//       });
//     }, 60000);
//   };

//   return (
//     <div className="membership-plan-selector">
//       <h2>Select Your Membership Plan</h2>

//       <div className="form-fields">
//         {/* Industry Selection */}
//         <div>
//           <label>
//             Industry
//             <select
//               value={industry}
//               onChange={(e) => setIndustry(e.target.value)}
//             >
//               <option value="">-- Select Your Industry --</option>
//               <option value="manufacturing">Manufacturing</option>
//               <option value="technology">Suppliers</option>
//               <option value="services">Services</option>
//             </select>
//           </label>
//         </div>

//         {/* Target Audience Selection */}
//         <div>
//           <label>
//             Target Audience
//             <select
//               value={audience}
//               onChange={(e) => setAudience(e.target.value)}
//             >
//               <option value="">-- Select Target Audience --</option>
//               <option value="global">World Wide</option>
//               <option value="local">Domestic</option>
//               <option value="niche">Regional</option>
//             </select>
//           </label>
//         </div>

//         {/* Catalogue Images */}
//         <div>
//           <label>
//             How many business catalogue images do you need?
//             <select
//               value={catalogImages}
//               onChange={(e) => setCatalogImages(e.target.value)}
//             >
//               <option value="">-- Select Catalogue Images --</option>
//               <option value="150">150 Images</option>
//               <option value="200">200 Images</option>
//               <option value="300">300 Images</option>
//             </select>
//           </label>
//         </div>

//         {/* Website Pages */}
//         <div>
//           <label>
//             Professional Business Oriented Template-Based Website Pages
//             <select
//               value={websitePages}
//               onChange={(e) => setWebsitePages(e.target.value)}
//             >
//               <option value="">-- Select Website Pages --</option>
//               <option value="150">150 Pages</option>
//               <option value="200">200 Pages</option>
//               <option value="300">300 Pages</option>
//             </select>
//           </label>
//         </div>

//         {/* Verified Buyers */}
//         <div>
//           <label>
//             Verified & Contactable Buyers
//             <select
//               value={verifiedBuyers}
//               onChange={(e) => setVerifiedBuyers(e.target.value)}
//             >
//               <option value="">-- Select Verified Buyers --</option>
//               <option value="25">25</option>
//               <option value="50">50</option>
//               <option value="75">75</option>
//             </select>
//           </label>
//         </div>

//         {/* Features Selection */}
//         <div>
//           <label>
//             Live Chat on Website
//             <input
//               type="checkbox"
//               checked={liveChat}
//               onChange={() => setLiveChat(!liveChat)}
//             />
//           </label>
//         </div>

//         <div>
//           <label>
//             Website Security Certificate (SSL)
//             <input
//               type="checkbox"
//               checked={sslCertificate}
//               onChange={() => setSslCertificate(!sslCertificate)}
//             />
//           </label>
//         </div>

//         <div>
//           <label>
//             Payment Gateway Integration
//             <input
//               type="checkbox"
//               checked={paymentGateway}
//               onChange={() => setPaymentGateway(!paymentGateway)}
//             />
//           </label>
//         </div>

//         <div>
//           <label>
//             GMB Listing (Google My Business)
//             <input
//               type="checkbox"
//               checked={gmbListing}
//               onChange={() => setGmbListing(!gmbListing)}
//             />
//           </label>
//         </div>

//         <div>
//           <label>
//             Brochure Pages
//             <select
//               value={brochurePages}
//               onChange={(e) => setBrochurePages(e.target.value)}
//             >
//               <option value="">-- Select Brochure Pages --</option>
//               <option value="10">10 Pages</option>
//               <option value="15">15 Pages</option>
//             </select>
//           </label>
//         </div>

//         <div>
//           <label>
//             Social Media Marketing
//             <input
//               type="checkbox"
//               checked={socialMediaMarketing}
//               onChange={() => setSocialMediaMarketing(!socialMediaMarketing)}
//             />
//           </label>
//         </div>
//       </div>

//       {/* Submit Button */}
//       <button onClick={handleSubmit}>Submit</button>

//       {/* Plan Suggestion */}
//       {planSuggestion && (
//         <div className="plan-suggestion">
//           <h3>Suggested Plan: {planSuggestion}</h3>
//           {discountedPrice && (
//             <p>
//               Discounted Price (30% off): ₹{discountedPrice.toFixed(2)} + GST
//             </p>
//           )}
//         </div>
//       )}

//       {/* Coupon Input */}
//       <div>
//         <label>Enter Coupon Code:</label>
//         <input
//           type="text"
//           value={couponCode}
//           onChange={handleCouponChange}
//           disabled={couponApplied}
//         />
//         <button onClick={applyCoupon} disabled={couponApplied}>
//           Apply Coupon
//         </button>
//         {couponError && <p className="error">{couponError}</p>}
//         {couponApplied && couponTimeRemaining > 0 && (
//           <p>Coupon valid for: {couponTimeRemaining} minutes</p>
//         )}
//         {!couponValid && <p>Coupon expired.</p>}
//       </div>
//     </div>
//   );
// };

// export default MembershipPlanSelector;
import React, { useState, useEffect } from "react";
import "./GlobalPrice.css";

const MembershipPlanSelector = () => {
  const [industry, setIndustry] = useState("");
  const [audience, setAudience] = useState("");
  const [catalogImages, setCatalogImages] = useState("");
  const [websitePages, setWebsitePages] = useState("");
  const [verifiedBuyers, setVerifiedBuyers] = useState("");
  const [liveChat, setLiveChat] = useState(false);
  const [sslCertificate, setSslCertificate] = useState(false);
  const [paymentGateway, setPaymentGateway] = useState(false);
  const [gmbListing, setGmbListing] = useState(false);
  const [brochurePages, setBrochurePages] = useState("");
  const [socialMediaMarketing, setSocialMediaMarketing] = useState(false);
  const [planSuggestion, setPlanSuggestion] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState(null);
  const [couponValid, setCouponValid] = useState(true);
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState("");
  const [couponTimeRemaining, setCouponTimeRemaining] = useState(0);

  const validCoupons = [
    "X#2hL!",
    "3rN@wK",
    "iF7z*G",
    "R9*eTn",
    "@pQ3bL",
    "Y1^vZ8",
    "s3B&zL",
    "G1z!tQ",
    "kT#9gR",
    "Q7n#Bf",
    "@pX2Lz",
    "4mJ!gN",
    "V5^cF7",
    "x2Tz#L",
    "rY8!sP",
    "D9^cTx",
    "6XwQ*L",
    "hC8z@J",
    "pM2!zX",
    "L3^kT1",
  ];

  // Check if a coupon has been applied previously and if it's still valid
  useEffect(() => {
    const storedCoupon = localStorage.getItem("appliedCoupon");
    const storedTimestamp = localStorage.getItem("couponTimestamp");

    if (storedCoupon && storedTimestamp) {
      const couponTimestamp = parseInt(storedTimestamp);
      const currentTime = Date.now();
      const couponExpiryTime = 1 * 60 * 1000; // 30 minutes in milliseconds

      if (currentTime - couponTimestamp <= couponExpiryTime) {
        setCouponApplied(true);
        setCouponValid(true);
      } else {
        setCouponValid(false);
        localStorage.removeItem("appliedCoupon");
        localStorage.removeItem("couponTimestamp");
      }
    }
  }, []);

  const handleSubmit = () => {
    let standardCount = 0;
    let advancedCount = 0;
    let premiumCount = 0;

    // Standard Plan features
    if (catalogImages === "150") standardCount++;
    if (websitePages === "150") standardCount++;
    if (verifiedBuyers === "25") standardCount++;
    if (liveChat) standardCount++;
    if (sslCertificate) standardCount++;
    if (paymentGateway) standardCount++;
    if (gmbListing) standardCount++;

    // Advanced Plan features
    if (catalogImages === "200") advancedCount++;
    if (websitePages === "200") advancedCount++;
    if (verifiedBuyers === "50") advancedCount++;
    if (liveChat) advancedCount++;
    if (sslCertificate) advancedCount++;
    if (paymentGateway) advancedCount++;
    if (gmbListing) advancedCount++;
    if (brochurePages === "10") advancedCount++;

    // Premium Plan features
    if (catalogImages === "300") premiumCount++;
    if (websitePages === "300") premiumCount++;
    if (verifiedBuyers === "75") premiumCount++;
    if (liveChat) premiumCount++;
    if (sslCertificate) premiumCount++;
    if (paymentGateway) premiumCount++;
    if (gmbListing) premiumCount++;
    if (brochurePages === "15") premiumCount++;
    if (socialMediaMarketing) premiumCount++;

    // Suggesting the plan based on feature matches
    let suggestedPlan = "";
    let price = 0;
    if (standardCount >= advancedCount && standardCount >= premiumCount) {
      suggestedPlan = "Standard Plan - ₹24,999.00 + GST";
      price = 24999;
    } else if (
      advancedCount >= standardCount &&
      advancedCount >= premiumCount
    ) {
      suggestedPlan = "Advanced Plan - ₹49,999.00 + GST";
      price = 49999;
    } else if (premiumCount >= standardCount && premiumCount >= advancedCount) {
      suggestedPlan = "Premium Plan - ₹74,999.00 + GST";
      price = 74999;
    }

    setPlanSuggestion(suggestedPlan);

    if (couponApplied && couponValid) {
      const discount = 0.3;
      const newPrice = price * (1 - discount);
      setDiscountedPrice(newPrice);
    } else {
      setDiscountedPrice(null);
    }
  };

  const handleCouponChange = (e) => {
    setCouponCode(e.target.value);
  };

  const applyCoupon = () => {
    if (validCoupons.includes(couponCode) && couponValid) {
      setCouponApplied(true);
      setCouponError("");
      localStorage.setItem("appliedCoupon", couponCode);
      localStorage.setItem("couponTimestamp", Date.now().toString());
      startCouponTimer();
    } else {
      setCouponError("Invalid or expired coupon.");
    }
  };

  const startCouponTimer = () => {
    setCouponTimeRemaining(30); // Set 30 minutes validity
    const timer = setInterval(() => {
      setCouponTimeRemaining((prevTime) => {
        if (prevTime === 1) {
          clearInterval(timer);
          setCouponValid(false); // Invalidate coupon after 30 minutes
          localStorage.removeItem("appliedCoupon");
          localStorage.removeItem("couponTimestamp");
        }
        return prevTime - 1;
      });
    }, 60000);
  };

  return (
    <div className="membership-plan-selector">
      <h2>Select Your Membership Plan</h2>

      <div className="form-fields">
        {/* Industry Selection */}
        <div>
          <label>
            Industry
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            >
              <option value="">-- Select Your Industry --</option>
              <option value="manufacturing">Manufacturer </option>
              <option value="technology">Trader</option>
              <option value="services">Service provider </option>
              <option value="wholesaler">Wholesaler </option>
            </select>
          </label>
        </div>

        {/* Target Audience Selection */}
        <div>
          <label>
            Target Audience
            <select
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
            >
              <option value="">-- Select Target Audience --</option>
              <option value="global">World Wide</option>
              <option value="local">Domestic</option>
              <option value="niche">Regional</option>
            </select>
          </label>
        </div>

        {/* Catalogue Images */}
        <div>
          <label>
            How many business catalogue images do you need?
            <select
              value={catalogImages}
              onChange={(e) => setCatalogImages(e.target.value)}
            >
              <option value="">-- Select Catalogue Images --</option>
              <option value="150">150 Images</option>
              <option value="200">200 Images</option>
              <option value="300">300 Images</option>
            </select>
          </label>
        </div>

        {/* Website Pages */}
        <div>
          <label>
            Professional Business Oriented Template-Based Website Pages
            <select
              value={websitePages}
              onChange={(e) => setWebsitePages(e.target.value)}
            >
              <option value="">-- Select Website Pages --</option>
              <option value="150">150 Pages</option>
              <option value="200">200 Pages</option>
              <option value="300">300 Pages</option>
            </select>
          </label>
        </div>

        {/* Verified Buyers */}
        <div>
          <label>
            Verified & Contactable Buyers
            <select
              value={verifiedBuyers}
              onChange={(e) => setVerifiedBuyers(e.target.value)}
            >
              <option value="">-- Select Verified Buyers --</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="75">75</option>
            </select>
          </label>
        </div>

        {/* Features Selection */}
        <div>
          <label>
            Live Chat on Website
            <input
              type="checkbox"
              checked={liveChat}
              onChange={() => setLiveChat(!liveChat)}
            />
          </label>
        </div>

        <div>
          <label>
            Website Security Certificate (SSL)
            <input
              type="checkbox"
              checked={sslCertificate}
              onChange={() => setSslCertificate(!sslCertificate)}
            />
          </label>
        </div>

        <div>
          <label>
            Payment Gateway Integration
            <input
              type="checkbox"
              checked={paymentGateway}
              onChange={() => setPaymentGateway(!paymentGateway)}
            />
          </label>
        </div>

        <div>
          <label>
            GMB Listing (Google My Business)
            <input
              type="checkbox"
              checked={gmbListing}
              onChange={() => setGmbListing(!gmbListing)}
            />
          </label>
        </div>

        <div>
          <label>
            Brochure Pages
            <select
              value={brochurePages}
              onChange={(e) => setBrochurePages(e.target.value)}
            >
              <option value="">-- Select Brochure Pages --</option>
              <option value="10">10 Pages</option>
              <option value="15">15 Pages</option>
            </select>
          </label>
        </div>

        <div>
          <label>
            Social Media Marketing
            <input
              type="checkbox"
              checked={socialMediaMarketing}
              onChange={() => setSocialMediaMarketing(!socialMediaMarketing)}
            />
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <button onClick={handleSubmit}>Submit</button>

      {/* Plan Suggestion */}
      {planSuggestion && (
        <div className="plan-suggestion">
          <h3>Suggested Plan: {planSuggestion}</h3>
          {discountedPrice && (
            <p>
              Discounted Price (30% off): ₹{discountedPrice.toFixed(2)} + GST
            </p>
          )}
          <button
            className="pay-button"
            onClick={() =>
              window.open(
                "https://payu.in/pay/1773964251EBD1D94D24CFC8F39F1B78",
                "_blank"
              )
            }
          >
            Proceed to Payment
          </button>
        </div>
      )}

      {/* Coupon Input */}
      <div>
        <label>Enter Coupon Code:</label>
        <input
          type="text"
          value={couponCode}
          onChange={handleCouponChange}
          disabled={couponApplied}
        />
        <button onClick={applyCoupon} disabled={couponApplied}>
          Apply Coupon
        </button>
        {couponError && <p className="error">{couponError}</p>}
        {couponApplied && couponTimeRemaining > 0 && (
          <p>Coupon valid for: {couponTimeRemaining} minutes</p>
        )}
        {!couponValid && <p>Coupon expired.</p>}
      </div>
    </div>
  );
};

export default MembershipPlanSelector;
