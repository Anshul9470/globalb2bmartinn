import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark, faPhoneVolume, faCrown, faRocket, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import './prices.css';

const Prices = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        city: '',
        companyName: '',
        amount: '',
        plan: ''
    });

    const handleMouseMove = (e) => {
        const x = (e.clientX - window.innerWidth / 2) / 25;
        const y = (e.clientY - window.innerHeight / 2) / 25;
        setMousePosition({ x, y });
    };

    const handleButtonClick = (planName, amount) => {
        setFormData({ ...formData, plan: planName, amount: amount });
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const paymentResponse = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/order`, formData);
            if (paymentResponse.data.success === true && paymentResponse.data.data.instrumentResponse.redirectInfo) {
                window.location.href = paymentResponse.data.data.instrumentResponse.redirectInfo.url;
            }
            const formResponse = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/submit-pay`, formData);
            console.log('Form submitted successfully:', formResponse.data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const plans = [
        {
            name: "Standard",
            price: "24999",
            gst: "+GST",
            icon: faRocket,
            color: "#007bff",
            features: [
                { text: "Business catalogue up to 150 images (like:globalb2bmart/your company name)", included: true },
                { text: "Classified Listing above Free Members", included: true },
                { text: "Professional Business Oriented Template Based Website up to 150 pages", included: true },
                { text: "Domain, Hosting & Maintenance", included: true },
                { text: "Get Unlimited Access of Buyers inquiries received in your GlobalB2Bmart account", included: true },
                { text: "Search Engine Friendly Web Pages (Website)", included: true },
                { text: "Live Chat on website", included: true },
                { text: "Control Panel (website & Catalogue)", included: true },
                { text: "Customer Support Assistance", included: true },
                { text: "Verified & Contactable Buyers (25)*", included: true },
                { text: "Website Security Certificate (SSL)", included: true },
                { text: "Payment Gateway Integration", included: true },
                { text: "Link Professional Videos (Up to 2 videos)", included: true },
                { text: "GMB Listing (Google My Business)", included: true },
                { text: "Trusted Seller Stamp (GBM Verified)", included: false },
                { text: "Brochure Design", included: false },
                { text: "Social Media Marketing*", included: false },
                { text: "Professional Logo", included: false },
            ]
        },
        {
            name: "Advanced",
            price: "49999",
            gst: "+GST",
            icon: faShieldHalved,
            color: "#fb743f",
            popular: true,
            features: [
                { text: "Business catalogue up to 200 images (like:globalb2bmart/your company name)", included: true },
                { text: "Classified Listing above Standard Members", included: true },
                { text: "Professional Business Oriented Template Based Website up to 200 pages", included: true },
                { text: "Domain, Hosting & Maintenance", included: true },
                { text: "Get Unlimited Access of Buyers inquiries received in your GlobalB2Bmart account", included: true },
                { text: "Search Engine Friendly Web Pages (Website)", included: true },
                { text: "Live Chat on website", included: true },
                { text: "Control Panel (Website & Catalogue)", included: true },
                { text: "Customer Support Assistance", included: true },
                { text: "Verified & Contactable Buyers (50)*", included: true },
                { text: "Website Security Certificate (SSL)", included: true },
                { text: "Payment Gateway Integration", included: true },
                { text: "Link Professional Videos (Up to 3 Videos)", included: true },
                { text: "GMB Listing (Google My Business)", included: true },
                { text: "Trusted Seller Stamp (GBM Verified)", included: true },
                { text: "Brochure of 10 pages", included: true },
                { text: "Banner With 5 Keywords", included: false },
                { text: "Social Media Marketing*", included: false },
                { text: "Professional Logo", included: false },
            ]
        },
        {
            name: "Premium",
            price: "74999",
            gst: "+GST",
            icon: faCrown,
            color: "#ffc107",
            features: [
                { text: "Business catalogue up to 300 images (like:globalb2bmart/your company name)", included: true },
                { text: "Classified listing Above Advanced members", included: true },
                { text: "Professional Business Oriented Template Based Website up to 300 pages", included: true },
                { text: "Domain, Hosting & Maintenance", included: true },
                { text: "Get Unlimited Access of Buyers inquiries received in your GlobalB2Bmart account", included: true },
                { text: "Search Engine Friendly Web Pages (Website)", included: true },
                { text: "Live Chat on website", included: true },
                { text: "Control Panel (Website & Catalogue)", included: true },
                { text: "Customer Support Assistance", included: true },
                { text: "Verified & Contactable Buyers (75)*", included: true },
                { text: "Website Security Certificate (SSL)", included: true },
                { text: "Payment Gateway Integration", included: true },
                { text: "Link Professional Videos (Up to 5 Videos)", included: true },
                { text: "GMB Listing (Google My Business)", included: true },
                { text: "Trusted Seller Stamp (GBM Verified)", included: true },
                { text: "Brochure of 15 Pages", included: true },
                { text: "Banner With 5 Keywords On Search Pages", included: true },
                { text: "Social Media Marketing*", included: true },
                { text: "Professional Logo", included: true },
            ]
        }
    ];

    return (
        <div className="memberships-page" onMouseMove={handleMouseMove}>
            <div className="bg-decorations">
                <div className="blob blob-1" style={{ transform: `translate3d(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px, 0)` }}></div>
                <div className="blob blob-2" style={{ transform: `translate3d(${mousePosition.x * -1}px, ${mousePosition.y * -1}px, 0)` }}></div>
                <div className="blob blob-3" style={{ transform: `translate3d(${mousePosition.x * 0.8}px, ${mousePosition.y * -0.5}px, 0)` }}></div>
            </div>


            <div className="pricing-section-container">
                <div className="pricing-header-text">
                    <h2>Choose Your <span>Success Plan</span></h2>
                    <p>Unlock premium features and scale your business globally with GlobalB2BMart</p>
                </div>

                <div className="pricing-grid-wrapper">
                    {plans.map((plan, index) => (
                        <div key={index} className={`pricing-new-card ${plan.popular ? 'is-popular' : ''}`}>
                            {plan.popular && <span className="popular-badge">Most Popular</span>}
                            <div className="card-top-accent" style={{ background: plan.color }}></div>
                            <div className="card-head">
                                <div className="plan-icon" style={{ color: plan.color }}>
                                    <FontAwesomeIcon icon={plan.icon} />
                                </div>
                                <h3 className="plan-name">{plan.name}</h3>
                                <div className="plan-price">
                                    <span className="currency">₹</span>
                                    <span className="amount">{plan.price}</span>
                                    <span className="gst">{plan.gst}</span>
                                </div>
                            </div>
                            <div className="card-body-features">
                                <ul className="feature-list-modern">
                                    {plan.features.map((feature, fIndex) => (
                                        <li key={fIndex} className={feature.included ? 'inc' : 'exc'}>
                                            <span className="feat-icon">
                                                <FontAwesomeIcon icon={feature.included ? faCheck : faXmark} />
                                            </span>
                                            <span className="feat-text">{feature.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="card-footer-action">
                                <button className="select-plan-btn" style={{ backgroundColor: plan.color }} onClick={() => handleButtonClick(plan.name, plan.price)}>Select This Plan</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="pricing-contact-full-width">
                    <div className="contact-full-inner">
                        <div className="contact-text-content">
                            <div className="pulse-icon"><FontAwesomeIcon icon={faPhoneVolume} /></div>
                            <h3>Call Us Now</h3>
                            <p className="phone-num-large">+91 8527116857</p>
                            <div className="join-tag-modern"><p>Join 1000+ Verified Sellers Today!</p></div>
                        </div>
                    </div>
                </div>
            </div>

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content-v2">
                        <button className="close-popup-btn" onClick={handleClosePopup}>&times;</button>
                        <div className="popup-header-v2"><h3>Complete Registration</h3><p>You've selected the <strong>{formData.plan}</strong> plan (₹{formData.amount})</p></div>
                        <form className="modern-pricing-form" onSubmit={handleSubmit}>
                            <div className="form-grid">
                                <div className="f-group"><label>Full Name</label><input type="text" name="name" placeholder="Enter name" value={formData.name} onChange={handleChange} required /></div>
                                <div className="f-group"><label>Phone Number</label><input type="text" name="number" placeholder="Enter number" value={formData.number} onChange={handleChange} required /></div>
                                <div className="f-group"><label>Email Address</label><input type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} required /></div>
                                <div className="f-group"><label>City</label><input type="text" name="city" placeholder="Enter city" value={formData.city} onChange={handleChange} required /></div>
                                <div className="f-group full"><label>Company Name</label><input type="text" name="companyName" placeholder="Enter company name" value={formData.companyName} onChange={handleChange} required /></div>
                            </div>
                            <button type="submit" className="form-submit-btn">Proceed to Payment</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Prices;
