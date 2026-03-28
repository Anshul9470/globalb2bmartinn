// import React from 'react';
// import './prices.css'; // Ensure you create and import a CSS file for styling


// const Prices = () => {
//     return (
//         <>


//             <div className="page-banner-area page-banner-height" id="membership-banner">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-xl-12">
//                             <div className="page-banner-content text-center">
//                                 <h4 className="breadcrumb-title">Our Membership Plan</h4>
//                                 <div className="breadcrumb-two">
//                                     <nav>
//                                         <nav className="breadcrumb-trail breadcrumbs">
//                                             <ul className="breadcrumb-menu">
//                                                 <li className="breadcrumb-trail">
//                                                     <a href="/">
//                                                         <span>Home</span>
//                                                     </a>
//                                                 </li>
//                                                 <li className="trail-item">
//                                                     <span>Membership Plan</span>
//                                                 </li>
//                                             </ul>
//                                         </nav>
//                                     </nav>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="prices-container">

//                 <div className="price-card">
//                     <h2>Standard</h2>
//                     <p className='pricess'>₹24999.00 +GST</p>
//                     <button>Select This Plan</button>
//                     <ul>
//                         <li>Business catalogue up to 150 images (like:globalb2bmart/your company name)</li>
//                         <li>Classified Listing above Free Members</li>
//                         <li>Professional Business Oriented Template Based Website up to 150 pages</li>
//                         <li>Domain, Hosting & Maintenance</li>
//                         <li>Get Unlimited Access of Buyers inquiries received in your GlobalB2Bmart account</li>
//                         <li>Search Engine Friendly Web Pages (Website)</li>
//                         <li>Live Chat on website</li>
//                         <li>Control Panel (website & Catalogue)</li>
//                         <li>Customer Support Assistance</li>
//                         <li>Verified & Contactable Buyers (25)*</li>
//                         <li>Website Security Certificate (SSL)</li>
//                         <li>Payment Gateway Integration</li>
//                         <li>Link Professional Videos (Up to 2 videos)</li>
//                         <li>GMB Listing (Google My Business)</li>
//                     </ul>

//                 </div>
//                 <div className="price-card">
//                     <h2>Advanced </h2>
//                     <p className='pricess'>₹49999.00 +GST</p>
//                     <button>Select This Plan</button>
//                     <ul>
//                         <li>Business catalogue up to 200 images (like:globalb2bmart/your company name)</li>
//                         <li>Classified Listing above Standard Members</li>
//                         <li>Professional Business Oriented Template Based Website up to 200 pages</li>
//                         <li>Domain, Hosting & Maintenance</li>
//                         <li>Get Unlimited Access of Buyers inquiries received in your GlobalB2Bmart account</li>
//                         <li>Search Engine Friendly Web Pages (Website)</li>
//                         <li>Live Chat on website</li>
//                         <li >Control Panel (Website & Catalogue)</li>
//                         <li>Customer Support Assistance</li>
//                         <li>Verified & Contactable Buyers (50)*</li>
//                         <li>Website Security Certificate (SSL)</li>
//                         <li>Payment Gateway Integration</li>
//                         <li>Link Professional Videos (Up to 3 Videos)</li>
//                         <li>GMB Listing (Google My Business)</li>
//                         <li>Trusted Seller Stamp (GBM Verified)</li>
//                         <li>Brochure of 10 pages</li>
//                     </ul>

//                 </div>
//                 <div className="price-card">
//                     <h2>Premium </h2>
//                     <p className='pricess'>₹74999.00 +GST</p>
//                     <button>Select This Plan</button>
//                     <ul>
//                         <li>Business catalogue up to 300 images (like:globalb2bmart/your company name)</li>
//                         <li>Classified listing Above Advanced members</li>
//                         <li>Professional Business Oriented Template Based Website up to 300 pages</li>
//                         <li>Domain, Hosting & Maintenance</li>
//                         <li>Get Unlimited Access of Buyers inquiries received in your GlobalB2Bmart account</li>
//                         <li>Search Engine Friendly Web Pages (Website)</li>
//                         <li>Live Chat on website</li>
//                         <li>Control Panel (Website & Catalogue)</li>
//                         <li>Customer Support Assistance</li>
//                         <li>Verified & Contactable Buyers (75)*</li>
//                         <li>Website Security Certificate (SSL)</li>
//                         <li>Payment Gateway Integration</li>
//                         <li>Link Professional Videos (Up to 5 Videos)</li>
//                         <li>GMB Listing (Google My Business)</li>
//                         <li>Trusted Seller Stamp (GBM Verified)</li>
//                         <li>Brochure of 15 Pages</li>
//                         <li>Banner With 5 Keywords On Search Pages</li>
//                         <li>Social Media Marketing*</li>
//                         <li>Professional Logo</li>
//                     </ul>

//                 </div>
//                 <div className="pricesx-card">
//                     <ul>
//                         <li ><h2 style={{ color: '#fb743f', margin: '5px 0px' }}> <span style={{ color: 'black' }}> Call Us</span> Now</h2></li>
//                         <hr />
//                         <li ><h2 style={{ color: '#fb743f', marginTop: '10px' }}>+91 8527116857</h2></li>
//                         <li>
//                             <img style={{ height: '591px', marginTop: '35px' }} src="./assets/mancropped.png" alt="man" />
//                         </li>
//                         <li>
//                             <img style={{ height: '238px', marginTop: '60px' }} src="./assets/joinUs.jpeg" alt="joinnow" />
//                         </li>
//                     </ul>
//                 </div>
//             </div >
//         </>
//     );
// }

// export default Prices;
// import React, { useState } from 'react';
// import './prices.css'; // Ensure you create and import a CSS file for styling

// const Prices = () => {
//     const [showPopup, setShowPopup] = useState(false);

//     const handleButtonClick = () => {
//         setShowPopup(true);
//     };

//     const handleClosePopup = () => {
//         setShowPopup(false);
//     };

//     return (
//         <>
//             <div className="page-banner-area page-banner-height" id="membership-banner">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-xl-12">
//                             <div className="page-banner-content text-center">
//                                 <h4 className="breadcrumb-title">Our Membership Plan</h4>
//                                 <div className="breadcrumb-two">
//                                     <nav>
//                                         <nav className="breadcrumb-trail breadcrumbs">
//                                             <ul className="breadcrumb-menu">
//                                                 <li className="breadcrumb-trail">
//                                                     <a href="/">
//                                                         <span>Home</span>
//                                                     </a>
//                                                 </li>
//                                                 <li className="trail-item">
//                                                     <span>Membership Plan</span>
//                                                 </li>
//                                             </ul>
//                                         </nav>
//                                     </nav>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="prices-container">
//                 <div className="price-card">
//                     <h2>Standard</h2>
//                     <p className='pricess'>₹24999.00 +GST</p>
//                     <button onClick={handleButtonClick}>Select This Plan</button>
//                     <ul>
//                         <li>Business catalogue up to 150 images (like:globalb2bmart/your company name)</li>
//                         <li>Classified Listing above Free Members</li>
//                         <li>Professional Business Oriented Template Based Website up to 150 pages</li>
//                         <li>Domain, Hosting & Maintenance</li>
//                         <li>Get Unlimited Access of Buyers inquiries received in your GlobalB2Bmart account</li>
//                         <li>Search Engine Friendly Web Pages (Website)</li>
//                         <li>Live Chat on website</li>
//                         <li>Control Panel (website & Catalogue)</li>
//                         <li>Customer Support Assistance</li>
//                         <li>Verified & Contactable Buyers (25)*</li>
//                         <li>Website Security Certificate (SSL)</li>
//                         <li>Payment Gateway Integration</li>
//                         <li>Link Professional Videos (Up to 2 videos)</li>
//                         <li>GMB Listing (Google My Business)</li>
//                     </ul>
//                 </div>
//                 <div className="price-card">
//                     <h2>Advanced </h2>
//                     <p className='pricess'>₹49999.00 +GST</p>
//                     <button onClick={handleButtonClick}>Select This Plan</button>
//                     <ul>
//                         <li>Business catalogue up to 200 images (like:globalb2bmart/your company name)</li>
//                         <li>Classified Listing above Standard Members</li>
//                         <li>Professional Business Oriented Template Based Website up to 200 pages</li>
//                         <li>Domain, Hosting & Maintenance</li>
//                         <li>Get Unlimited Access of Buyers inquiries received in your GlobalB2Bmart account</li>
//                         <li>Search Engine Friendly Web Pages (Website)</li>
//                         <li>Live Chat on website</li>
//                         <li >Control Panel (Website & Catalogue)</li>
//                         <li>Customer Support Assistance</li>
//                         <li>Verified & Contactable Buyers (50)*</li>
//                         <li>Website Security Certificate (SSL)</li>
//                         <li>Payment Gateway Integration</li>
//                         <li>Link Professional Videos (Up to 3 Videos)</li>
//                         <li>GMB Listing (Google My Business)</li>
//                         <li>Trusted Seller Stamp (GBM Verified)</li>
//                         <li>Brochure of 10 pages</li>
//                     </ul>
//                 </div>
//                 <div className="price-card">
//                     <h2>Premium </h2>
//                     <p className='pricess'>₹74999.00 +GST</p>
//                     <button onClick={handleButtonClick}>Select This Plan</button>
//                     <ul>
//                         <li>Business catalogue up to 300 images (like:globalb2bmart/your company name)</li>
//                         <li>Classified listing Above Advanced members</li>
//                         <li>Professional Business Oriented Template Based Website up to 300 pages</li>
//                         <li>Domain, Hosting & Maintenance</li>
//                         <li>Get Unlimited Access of Buyers inquiries received in your GlobalB2Bmart account</li>
//                         <li>Search Engine Friendly Web Pages (Website)</li>
//                         <li>Live Chat on website</li>
//                         <li>Control Panel (Website & Catalogue)</li>
//                         <li>Customer Support Assistance</li>
//                         <li>Verified & Contactable Buyers (75)*</li>
//                         <li>Website Security Certificate (SSL)</li>
//                         <li>Payment Gateway Integration</li>
//                         <li>Link Professional Videos (Up to 5 Videos)</li>
//                         <li>GMB Listing (Google My Business)</li>
//                         <li>Trusted Seller Stamp (GBM Verified)</li>
//                         <li>Brochure of 15 Pages</li>
//                         <li>Banner With 5 Keywords On Search Pages</li>
//                         <li>Social Media Marketing*</li>
//                         <li>Professional Logo</li>
//                     </ul>
//                 </div>
//                 <div className="pricesx-card">
//                     <ul>
//                         <li ><h2 style={{ color: '#fb743f', margin: '5px 0px' }}> <span style={{ color: 'black' }}> Call Us</span> Now</h2></li>
//                         <hr />
//                         <li ><h2 style={{ color: '#fb743f', marginTop: '10px' }}>+91 8527116857</h2></li>
//                         <li>
//                             <img style={{ height: '591px', marginTop: '35px' }} src="./assets/mancropped.png" alt="man" />
//                         </li>
//                         <li>
//                             <img style={{ height: '238px', marginTop: '60px' }} src="./assets/joinUs.jpeg" alt="joinnow" />
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//             {showPopup && (
//                 <div className="popup-overlay">
//                     <div style={{ position: 'relative', }} className="popup-content">
//                         <h2 style={{ display: 'flex', justifyContent: 'center', margin: '10px', color: 'blue' }}>Submit Your Payment Information</h2>
//                         <form style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '10px', backgroundColor: '#fff' }}>
//                             <button type="button" className="close-button" onClick={handleClosePopup} style={{ position: 'absolute', top: '10px', right: '10px', background: 'transparent', border: 'none', fontSize: '20px', cursor: 'pointer' }}>&times;</button>
//                             <div style={{ flex: '1 1 45%' }}>
//                                 <label className='payment-detail' style={{ display: 'block', marginBottom: '10px' }}>
//                                     Name:
//                                     <input type="text" name="name" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
//                                 </label>
//                             </div>
//                             <div style={{ flex: '1 1 45%' }}>
//                                 <label className='payment-detail' style={{ display: 'block', marginBottom: '10px' }}>
//                                     Number:
//                                     <input type="text" name="number" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
//                                 </label>
//                             </div>
//                             <div style={{ flex: '1 1 45%' }}>
//                                 <label className='payment-detail' style={{ display: 'block', marginBottom: '10px' }}>
//                                     Email:
//                                     <input type="email" name="email" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
//                                 </label>
//                             </div>
//                             <div style={{ flex: '1 1 45%' }}>
//                                 <label className='payment-detail' style={{ display: 'block', marginBottom: '10px' }}>
//                                     City:
//                                     <input type="text" name="city" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
//                                 </label>
//                             </div>
//                             <div style={{ flex: '1 1 45%' }}>
//                                 <label className='payment-detail' style={{ display: 'block', marginBottom: '10px' }}>
//                                     Company Name:
//                                     <input type="text" name="companyName" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
//                                 </label>
//                             </div>
//                             <div style={{ flex: '1 1 45%' }}>
//                                 <label className='payment-detail' style={{ display: 'block', marginBottom: '10px' }}>
//                                     Choose Plan:
//                                     <select name="plan" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}>
//                                         <option value="standard">Standard</option>
//                                         <option value="advanced">Advanced</option>
//                                         <option value="premium">Premium</option>
//                                     </select>
//                                 </label>
//                             </div>
//                             <div style={{ flex: '1 1 45%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
//                                 <button className='detail-subm' type="submit" style={{ backgroundColor: '#fb743f', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Submit</button>
//                             </div>
//                         </form>


//                     </div>
//                 </div>
//             )}
//         </>
//     );
// }

// export default Prices;


// ===================== Phone Pay Gateway Integration Code Here -=============================================



import React, { useState } from 'react';
import axios from 'axios';
import './prices.css'; // Ensure you create and import a CSS file for styling

const Prices = () => {
    const [showPopup, setShowPopup] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        city: '',
        companyName: '',
        plan: 'standard'
    });

    const handleButtonClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const formStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        backgroundColor: '#fff'
    };

    const closeButtonStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'transparent',
        border: 'none',
        fontSize: '20px',
        cursor: 'pointer'
    };

    const fieldStyle = {
        flex: '1 1 45%'
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '10px'
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ddd'
    };

    const submitButtonContainerStyle = {
        flex: '1 1 45%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '20px'
    };

    const submitButtonStyle = {
        backgroundColor: '#fb743f',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer'
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Make the payment request
            const paymentResponse = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/order`, formData);
            if (paymentResponse.data.success === true && paymentResponse.data.data.instrumentResponse.redirectInfo) {
                window.location.href = paymentResponse.data.data.instrumentResponse.redirectInfo.url;
                console.log(paymentResponse)
            }

            // Submit form data to another API endpoint
            const formResponse = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/submit-pay`, formData);
            console.log('Form submitted successfully:', formResponse.data);
            console.log(formResponse)

        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error scenarios as needed
        }
    };


    return (
        <>
            <div className="page-banner-area page-banner-height" id="membership-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="page-banner-content text-center">
                                <h4 className="breadcrumb-title">Our Membership Plan</h4>
                                <div className="breadcrumb-two">
                                    <nav>
                                        <nav className="breadcrumb-trail breadcrumbs">
                                            <ul className="breadcrumb-menu">
                                                <li className="breadcrumb-trail">
                                                    <a href="/">
                                                        <span>Home</span>
                                                    </a>
                                                </li>
                                                <li className="trail-item">
                                                    <span>Membership Plan</span>
                                                </li>
                                            </ul>
                                        </nav>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="prices-container">
                <div className="price-card">
                    <h2>Standard</h2>
                    <p className='pricess'>₹24999.00 +GST</p>
                    <button onClick={handleButtonClick}>Select This Plan</button>
                    <ul>
                        <li>Business catalogue up to 150 images (like:globalb2bmart/your company name)</li>
                        <li>Classified Listing above Free Members</li>
                        <li>Professional Business Oriented Template Based Website up to 150 pages</li>
                        <li>Domain, Hosting & Maintenance</li>
                        <li>Get Unlimited Access of Buyers inquiries received in your GlobalB2Bmart account</li>
                        <li>Search Engine Friendly Web Pages (Website)</li>
                        <li>Live Chat on website</li>
                        <li>Control Panel (website & Catalogue)</li>
                        <li>Customer Support Assistance</li>
                        <li>Verified & Contactable Buyers (25)<span className="pross-title">*</span></li>
                        <li>Website Security Certificate (SSL)</li>
                        <li>Payment Gateway Integration</li>
                        <li>Link Professional Videos (Up to 2 videos)</li>
                        <li>GMB Listing (Google My Business)</li>
                    </ul>

                </div>
                <div className="price-card">
                    <h2>Advanced </h2>
                    <p className='pricess'>₹49999.00 +GST</p>
                    <button onClick={handleButtonClick}>Select This Plan</button>
                    <ul>
                        <li>Business catalogue up to 200 images (like:globalb2bmart/your company name)</li>
                        <li>Classified Listing above Standard Members</li>
                        <li>Professional Business Oriented Template Based Website up to 200 pages</li>
                        <li>Domain, Hosting & Maintenance</li>
                        <li>Get Unlimited Access of Buyers inquiries received in your GlobalB2Bmart account</li>
                        <li>Search Engine Friendly Web Pages (Website)</li>
                        <li>Live Chat on website</li>
                        <li>Control Panel (Website & Catalogue)</li>
                        <li>Customer Support Assistance</li>
                        <li>Verified & Contactable Buyers (50)<span className="pross-title">*</span></li>
                        <li>Website Security Certificate (SSL)</li>
                        <li>Payment Gateway Integration</li>
                        <li>Link Professional Videos (Up to 3 Videos)</li>
                        <li>GMB Listing (Google My Business)</li>
                        <li>Trusted Seller Stamp (GBM Verified)</li>
                        <li>Brochure of 10 pages</li>
                    </ul>

                </div>
                <div className="price-card">
                    <h2>Premium </h2>
                    <p className='pricess'>₹74999.00 +GST</p>
                    <button onClick={handleButtonClick}>Select This Plan</button>
                    <ul>
                        <li>Business catalogue up to 300 images (like:globalb2bmart/your company name)</li>
                        <li>Classified listing Above Advanced members</li>
                        <li>Professional Business Oriented Template Based Website up to 300 pages</li>
                        <li>Domain, Hosting & Maintenance</li>
                        <li>Get Unlimited Access of Buyers inquiries received in your GlobalB2Bmart account</li>
                        <li>Search Engine Friendly Web Pages (Website)</li>
                        <li>Live Chat on website</li>
                        <li>Control Panel (Website & Catalogue)</li>
                        <li>Customer Support Assistance</li>
                        <li>Verified & Contactable Buyers (75)<span className="pross-title">*</span></li>
                        <li>Website Security Certificate (SSL)</li>
                        <li>Payment Gateway Integration</li>
                        <li>Link Professional Videos (Up to 5 Videos)</li>
                        <li>GMB Listing (Google My Business)</li>
                        <li>Trusted Seller Stamp (GBM Verified)</li>
                        <li>Brochure of 15 Pages</li>
                        <li>Banner With 5 Keywords On Search Pages</li>
                        <li>Social Media Marketing <span className='prosss-title'>*</span></li>
                        <li>Professional Logo</li>
                    </ul>

                </div>
                <div className="pricesx-card">
                    <ul>
                        <li ><h2 style={{ color: '#fb743f', margin: '5px 0px' }}> <span style={{ color: 'black' }}> Call Us</span> Now</h2></li>
                        <hr />
                        <li ><h2 style={{ color: '#fb743f', marginTop: '10px' }}>+91 8527116857</h2></li>
                        <li>
                            <img style={{ height: '591px', marginTop: '35px' }} src="./assets/mancropped.png" alt="man" />
                        </li>
                        <li>
                            <img style={{ height: '238px', marginTop: '60px' }} src="./assets/joinUs.jpeg" alt="joinnow" />
                        </li>
                    </ul>
                </div>
            </div>
            {showPopup && (
                <div className="popup-overlay">
                    <div style={{ position: 'relative' }} className="popup-content">
                        <h2 style={{ display: 'flex', justifyContent: 'center', margin: '10px', color: 'blue' }}>Submit Your Payment Information</h2>
                        {/* <form style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '10px', backgroundColor: '#fff' }} onSubmit={handleSubmit}>
                            <button type="button" className="close-button" onClick={handleClosePopup} style={{ position: 'absolute', top: '10px', right: '10px', background: 'transparent', border: 'none', fontSize: '20px', cursor: 'pointer' }}>&times;</button>
                            <div style={{ flex: '1 1 45%' }}>
                                <label className='payment-detail' style={{ display: 'block', marginBottom: '10px' }}>
                                    Name:
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
                                </label>
                            </div>
                            <div style={{ flex: '1 1 45%' }}>
                                <label className='payment-detail' style={{ display: 'block', marginBottom: '10px' }}>
                                    Number:
                                    <input type="text" name="number" value={formData.number} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
                                </label>
                            </div>
                            <div style={{ flex: '1 1 45%' }}>
                                <label className='payment-detail' style={{ display: 'block', marginBottom: '10px' }}>
                                    Email:
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
                                </label>
                            </div>
                            <div style={{ flex: '1 1 45%' }}>
                                <label className='payment-detail' style={{ display: 'block', marginBottom: '10px' }}>
                                    City:
                                    <input type="text" name="city" value={formData.city} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
                                </label>
                            </div>
                            <div style={{ flex: '1 1 45%' }}>
                                <label className='payment-detail' style={{ display: 'block', marginBottom: '10px' }}>
                                    Company Name:
                                    <input type="text" name="companyName" value={formData.inpanyName} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
                                </label>
                            </div>
                            <div style={{ flex: '1 1 45%' }}>

                                <label className='payment-detail' style={{ display: 'block', marginBottom: '10px' }}>
                                    Enter Your Amount:
                                    <input type="number" name="amount" value={formData.amount} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
                                </label>

                            </div>
                            <div style={{ flex: '1 1 45%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>

                                <button
                                    className='detail-subm'
                                    type="submit"
                                    style={{
                                        backgroundColor: '#fb743f',
                                        color: 'white',
                                        padding: '10px 20px',
                                        borderRadius: '5px',
                                        border: 'none',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Submit
                                </button>

                            </div>
                        </form> */}
                        <form style={formStyle} onSubmit={handleSubmit}>
                            <button type="button" className="close-button" onClick={handleClosePopup} style={closeButtonStyle}>&times;</button>
                            <div style={fieldStyle}>
                                <label className='payment-detail' style={labelStyle}>
                                    Name:
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} style={inputStyle} />
                                </label>
                            </div>
                            <div style={fieldStyle}>
                                <label className='payment-detail' style={labelStyle}>
                                    Number:
                                    <input type="text" name="number" value={formData.number} onChange={handleChange} style={inputStyle} />
                                </label>
                            </div>
                            <div style={fieldStyle}>
                                <label className='payment-detail' style={labelStyle}>
                                    Email:
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle} />
                                </label>
                            </div>
                            <div style={fieldStyle}>
                                <label className='payment-detail' style={labelStyle}>
                                    City:
                                    <input type="text" name="city" value={formData.city} onChange={handleChange} style={inputStyle} />
                                </label>
                            </div>
                            <div style={fieldStyle}>
                                <label className='payment-detail' style={labelStyle}>
                                    Company Name:
                                    <input type="text" name="companyName" value={formData.inpanyName} onChange={handleChange} style={inputStyle} />
                                </label>
                            </div>
                            <div style={fieldStyle}>
                                <label className='payment-detail' style={labelStyle}>
                                    Enter Your Amount:
                                    <input type="number" name="amount" value={formData.amount} onChange={handleChange} style={inputStyle} />
                                </label>
                            </div>
                            <div style={submitButtonContainerStyle}>
                                <button className='detail-subm' type="submit" style={submitButtonStyle}>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div >
                </div >
            )}
        </>
    );
}

export default Prices;


// import React, { useState } from 'react';
// import axios from 'axios';
// import './prices.css'; // Ensure you create and import a CSS file for styling

// const Prices = () => {
//     const [showPopup, setShowPopup] = useState(false);
//     const [showBankDetails, setShowBankDetails] = useState(false);
//     const [formData, setFormData] = useState({
//         name: '',
//         number: '',
//         email: '',
//         city: '',
//         companyName: '',
//         amount: ''
//     });

//     const handleButtonClick = () => {
//         setShowPopup(true);
//     };

//     const handleClosePopup = () => {
//         setShowPopup(false);
//         setShowBankDetails(false);
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const formStyle = {
//         display: 'flex',
//         flexWrap: 'wrap',
//         gap: '20px',
//         padding: '20px',
//         border: '1px solid #ddd',
//         borderRadius: '10px',
//         backgroundColor: '#fff',
//         color: '#000'
//     };

//     const closeButtonStyle = {
//         position: 'absolute',
//         top: '10px',
//         right: '10px',
//         background: 'transparent',
//         border: 'none',
//         fontSize: '20px',
//         cursor: 'pointer'
//     };

//     const fieldStyle = {
//         flex: '1 1 45%'
//     };

//     const labelStyle = {
//         display: 'block',
//         marginBottom: '10px',
//         color: 'black'
//     };

//     const inputStyle = {
//         width: '100%',
//         padding: '10px',
//         borderRadius: '5px',
//         border: '1px solid #ddd'
//     };

//     const submitButtonContainerStyle = {
//         flex: '1 1 45%',
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginTop: '20px'
//     };

//     const submitButtonStyle = {
//         backgroundColor: '#fb743f',
//         color: 'white',
//         padding: '10px 20px',
//         borderRadius: '5px',
//         border: 'none',
//         cursor: 'pointer'
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             // Show the popup to enter account details
//             setShowPopup(true);
//         } catch (error) {
//             console.error('Error showing account details:', error);
//         }
//     };

//     const handleAccountDetailsSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             // Submit form data to another API endpoint
//             const formResponse = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/amount-pay`, formData);
//             console.log('Form submitted successfully:', formResponse.data);
//             // Hide the account details popup and show the bank details popup
//             setShowPopup(false);
//             setShowBankDetails(true);
//         } catch (error) {
//             console.error('Error submitting form:', error);
//             // Handle error scenarios as needed
//         }
//     };

//     return (
//         <>
//             <div className="page-banner-area page-banner-height" id="membership-banner">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-xl-12">
//                             <div className="page-banner-content text-center">
//                                 <h4 className="breadcrumb-title">Our Membership Plan</h4>
//                                 <div className="breadcrumb-two">
//                                     <nav>
//                                         <nav className="breadcrumb-trail breadcrumbs">
//                                             <ul className="breadcrumb-menu">
//                                                 <li className="breadcrumb-trail">
//                                                     <a href="/">
//                                                         <span>Home</span>
//                                                     </a>
//                                                 </li>
//                                                 <li className="trail-item">
//                                                     <span>Membership Plan</span>
//                                                 </li>
//                                             </ul>
//                                         </nav>
//                                     </nav>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="prices-container">
//                 <div className="price-card">
//                     <h2>Standard</h2>
//                     <p className='pricess'>₹24999.00 +GST</p>
//                     <button onClick={handleButtonClick}>Select This Plan</button>
//                     <ul>
//                         <li>Business catalogue up to 150 images (like:globalb2bmart/your company name)</li>
//                         <li>Classified Listing above Free Members</li>
//                         <li>Professional Business Oriented Template Based Website up to 150 pages</li>
//                         <li>Domain, Hosting & Maintenance</li>
//                         <li>Get Unlimited Access of Buyers inquiries received in your GlobalB2Bmart account</li>
//                         <li>Search Engine Friendly Web Pages (Website)</li>
//                         <li>Live Chat on website</li>
//                         <li>Control Panel (website & Catalogue)</li>
//                         <li>Customer Support Assistance</li>
//                         <li>Verified & Contactable Buyers (25)*</li>
//                         <li>Website Security Certificate (SSL)</li>
//                         <li>Payment Gateway Integration</li>
//                         <li>Link Professional Videos (Up to 2 videos)</li>
//                         <li>GMB Listing (Google My Business)</li>
//                     </ul>
//                 </div>
//                 <div className="price-card">
//                     <h2>Advanced </h2>
//                     <p className='pricess'>₹49999.00 +GST</p>
//                     <button onClick={handleButtonClick}>Select This Plan</button>
//                     <ul>
//                         <li>Business catalogue up to 200 images (like:globalb2bmart/your company name)</li>
//                         <li>Classified Listing above Standard Members</li>
//                         <li>Professional Business Oriented Template Based Website up to 200 pages</li>
//                         <li>Domain, Hosting & Maintenance</li>
//                         <li>Get Unlimited Access of Buyers inquiries received in your GlobalB2Bmart account</li>
//                         <li>Search Engine Friendly Web Pages (Website)</li>
//                         <li>Live Chat on website</li>
//                         <li>Control Panel (Website & Catalogue)</li>
//                         <li>Customer Support Assistance</li>
//                         <li>Verified & Contactable Buyers (50)*</li>
//                         <li>Website Security Certificate (SSL)</li>
//                         <li>Payment Gateway Integration</li>
//                         <li>Link Professional Videos (Up to 3 Videos)</li>
//                         <li>GMB Listing (Google My Business)</li>
//                         <li>Trusted Seller Stamp (GBM Verified)</li>
//                         <li>Brochure of 10 pages</li>
//                     </ul>
//                 </div>
//                 <div className="price-card">
//                     <h2>Premium </h2>
//                     <p className='pricess'>₹74999.00 +GST</p>
//                     <button onClick={handleButtonClick}>Select This Plan</button>
//                     <ul>
//                         <li>Business catalogue up to 300 images (like:globalb2bmart/your company name)</li>
//                         <li>Classified listing Above Advanced members</li>
//                         <li>Professional Business Oriented Template Based Website up to 300 pages</li>
//                         <li>Domain, Hosting & Maintenance</li>
//                         <li>Get Unlimited Access of Buyers inquiries received in your GlobalB2Bmart account</li>
//                         <li>Search Engine Friendly Web Pages (Website)</li>
//                         <li>Live Chat on website</li>
//                         <li>Control Panel (Website & Catalogue)</li>
//                         <li>Customer Support Assistance</li>
//                         <li>Verified & Contactable Buyers (75)*</li>
//                         <li>Website Security Certificate (SSL)</li>
//                         <li>Payment Gateway Integration</li>
//                         <li>Link Professional Videos (Up to 5 Videos)</li>
//                         <li>GMB Listing (Google My Business)</li>
//                         <li>Trusted Seller Stamp (GBM Verified)</li>
//                         <li>Brochure of 15 Pages</li>
//                         <li>Banner With 5 Keywords On Search Pages</li>
//                         <li>Social Media Marketing*</li>
//                         <li>Professional Logo</li>
//                     </ul>
//                 </div>
//                 <div className="pricesx-card">
//                     <ul>
//                         <li ><h2 style={{ color: '#fb743f', margin: '5px 0px' }}> <span style={{ color: 'black' }}> Call Us</span> Now</h2></li>
//                         <hr />
//                         <li ><h2 style={{ color: '#fb743f', marginTop: '10px' }}>+91 8527116857</h2></li>
//                         <li>
//                             <img style={{ height: '591px', marginTop: '35px' }} src="./assets/mancropped.png" alt="man" />
//                         </li>
//                         <li>
//                             <img style={{ height: '238px', marginTop: '60px' }} src="./assets/joinUs.jpeg" alt="joinnow" />
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//             {showPopup && (
//                 <div className="popup-overlay">
//                     <div style={{ position: 'relative' }} className="popup-content">
//                         <h2 style={{ display: 'flex', justifyContent: 'center', margin: '10px', color: 'blue' }}>Fill Details for This Plan</h2>
//                         <form onSubmit={handleAccountDetailsSubmit} style={formStyle}>
//                             {['name', 'number', 'email', 'city', 'companyName', 'amount'].map((field) => (
//                                 <div key={field} style={fieldStyle}>
//                                     <label htmlFor={field} style={labelStyle}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
//                                     <input
//                                         type="text"
//                                         id={field}
//                                         name={field}
//                                         value={formData[field]}
//                                         onChange={handleChange}
//                                         required
//                                         style={inputStyle}
//                                     />
//                                 </div>
//                             ))}
//                             <div style={submitButtonContainerStyle}>
//                                 <button type="submit" style={submitButtonStyle}>Submit</button>
//                             </div>
//                         </form>
//                         <button style={closeButtonStyle} onClick={handleClosePopup}>&times;</button>
//                     </div>
//                 </div>
//             )}
//             {/* Bank details popup */}
//             {showBankDetails && (
//                 <div className="popup-overlay">
//                     <div style={{ position: 'relative' }} className="popup-content">
//                         <h2 style={{ display: 'flex', justifyContent: 'center', margin: '10px', color: 'blue' }}>Bank Details</h2>
//                         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'left', flexDirection: 'column' }}>
//                             <p><span style={{ color: 'blue' }}>Account Name:</span> Webwave Business Pvt Ltd</p>


//                             <p><span style={{ color: 'blue' }}>Account Number:</span> 923020060598477</p>
//                             <p><span style={{ color: 'blue' }}>IFSC Code:</span> UTIB0004098</p>
//                             <p><span style={{ color: 'blue' }}>Branch Name:</span> Ajay Enclave</p>
//                             <p > <span style={{ color: 'blue' }}>Bank Name</span>: Axis Bank</p>
//                             <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
//                                 <img width={250} height={250} src="./assets/scanner.jpeg" alt="scanner" />
//                                 <button style={closeButtonStyle} onClick={handleClosePopup}>&times;</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>


//             )}
//         </>
//     );
// };

// export default Prices;
