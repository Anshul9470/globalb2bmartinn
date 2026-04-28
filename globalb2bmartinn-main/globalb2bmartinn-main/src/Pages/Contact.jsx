import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faClock, faGlobe, faUserShield, faHeadset, faChartLine, faChevronDown, faChevronUp, faShieldHalved, faRocket, faBuildingCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { CATEGORIES, SUB_CATEGORIES, getCategorySuggestions, getSubCategorySuggestions } from '../services/categoryData';
import contactBanner from '../assets/contact-banner.png';
import './contact.css';

const Contact = () => {
    const [activeFaq, setActiveFaq] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        category: '',
        subCategory: ''
    });
    const [submitted, setSubmitted] = useState(false);
    
    // Suggestion State
    const [categorySuggestions, setCategorySuggestions] = useState([]);
    const [showCategorySuggestions, setShowCategorySuggestions] = useState(false);
    const [subCategorySuggestions, setSubCategorySuggestions] = useState([]);
    const [showSubCategorySuggestions, setShowSubCategorySuggestions] = useState(false);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

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

    const handleSubCategorySearch = (value) => {
        setFormData({ ...formData, subCategory: value });
        const suggestions = getSubCategorySuggestions(formData.category, value);
        setSubCategorySuggestions(suggestions);
        setShowSubCategorySuggestions(true);
    };

    const handleSubCategoryClick = (suggestion) => {
        setFormData({ ...formData, subCategory: suggestion });
        setShowSubCategorySuggestions(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const apiBase = process.env.REACT_APP_API_ENDPOINT || "http://localhost:3005";
            const response = await fetch(`${apiBase}/submit-form`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setSubmitted(true);
                setFormData({ name: '', email: '', phone: '', message: '', category: '', subCategory: '' });
            }
        } catch (error) {
            console.error(error);
        }
    };

    const faqs = [
        {
            q: "How can GlobalB2BMart help my business grow?",
            a: "We provide you with a global platform to showcase your products, connect with verified buyers, and manage inquiries efficiently. Our SEO-optimized catalogs ensure high visibility in international markets."
        },
        {
            q: "Are the buyers on your platform verified?",
            a: "Yes, we have a rigorous verification process for all buyers and sellers to ensure secure and trustworthy business transactions."
        },
        {
            q: "What kind of support do you offer for exporters?",
            a: "We offer end-to-end support including listing optimization, marketing, logistics assistance, and dedicated account managers for premium plans."
        },
        {
            q: "How soon do I get a response after sending an inquiry?",
            a: "Our experts typically get back to you within 24 business hours. You can also reach out via our 24/7 customer care number."
        }
    ];

    return (
        <div id="premium-contact-page-root">
            {/* 1. RESTORED PROFESSIONAL HERO */}
            <section id="contact-hero-section" style={{ backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.6), rgba(10, 25, 47, 0.6)), url('/assets/contact-bgg.jpg')` }}>
                <div className="contact-container">
                    <div className="hero-content-box">
                        <h1>Contact Us</h1>
                        <p>We are here to help you grow your business globally. Reach out to our dedicated support team.</p>
                    </div>
                </div>
            </section>

            {/* 2. INFO CARDS (No negative margins) */}
            <section id="contact-info-grid-section">
                <div className="contact-container">
                    <div className="flex-grid">
                        <div className="info-item-card">
                            <div className="icon-box blue"><FontAwesomeIcon icon={faPhoneAlt} /></div>
                            <h3>Phone Support</h3>
                            <p>Call us for immediate assistance regarding your membership.</p>
                            <div className="link-stack">
                                <a href="tel:011-41029790">011-41029790</a>
                                <a href="tel:+918527116857">+91 8527116857</a>
                            </div>
                        </div>
                        <div className="info-item-card">
                            <div className="icon-box orange"><FontAwesomeIcon icon={faEnvelope} /></div>
                            <h3>Email Inquiries</h3>
                            <p>Send us your feedback or sales queries anytime.</p>
                            <div className="link-stack">
                                <a href="mailto:feedback@globalb2bmart.com">feedback@globalb2bmart.com</a>
                                <a href="mailto:sales@globalb2bmart.com">sales@globalb2bmart.com</a>
                            </div>
                        </div>
                        <div className="info-item-card">
                            <div className="icon-box purple"><FontAwesomeIcon icon={faMapMarkerAlt} /></div>
                            <h3>Head Office</h3>
                            <p>S-21 First Floor, Ajay Enclave, Subhash Nagar, New Delhi - 110018</p>
                            <div className="link-stack">
                                <span className="time"><FontAwesomeIcon icon={faClock} /> 10:00 AM - 6:30 PM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CORE BENEFITS SECTION */}
            <section id="contact-benefits-section">
                <div className="contact-container">
                    <div className="section-header-centered">
                        <h2>Why Partner With <span>GlobalB2BMart</span>?</h2>
                        <div className="accent-bar"></div>
                    </div>
                    <div className="flex-grid-four">
                        <div className="benefit-block">
                            <div className="b-icon"><FontAwesomeIcon icon={faGlobe} /></div>
                            <h4>Global Reach</h4>
                            <p>Connect with buyers from 100+ countries.</p>
                        </div>
                        <div className="benefit-block">
                            <div className="b-icon"><FontAwesomeIcon icon={faShieldHalved} /></div>
                            <h4>Secure Trading</h4>
                            <p>Verified sellers and protected payments.</p>
                        </div>
                        <div className="benefit-block">
                            <div className="b-icon"><FontAwesomeIcon icon={faHeadset} /></div>
                            <h4>24/7 Support</h4>
                            <p>Dedicated account managers for you.</p>
                        </div>
                        <div className="benefit-block">
                            <div className="b-icon"><FontAwesomeIcon icon={faChartLine} /></div>
                            <h4>Growth Focus</h4>
                            <p>Scale your business with SEO-ready listings.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. FORM & FAQ SECTION */}
            <section id="contact-main-interactive-section">
                <div className="contact-container">
                    <div className="split-layout">
                        <div className="form-side">
                            <div className="glass-form-card">
                                <h3>Send us a Message</h3>
                                <p>Fill the form and our experts will reach out within 24 hours.</p>
                                {submitted ? (
                                    <div className="thank-you-message" style={{ color: '#2ecc71', fontWeight: 600, textAlign: 'center', padding: '20px' }}>
                                        Thank you! Your message has been received. Our team will contact you shortly.
                                    </div>
                                ) : (
                                    <form className="premium-compact-form" onSubmit={handleSubmit}>
                                        <div className="form-row-dual">
                                            <div className="f-input-group">
                                                <label>Name</label>
                                                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required />
                                            </div>
                                            <div className="f-input-group">
                                                <label>Phone</label>
                                                <input type="text" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleInputChange} required />
                                            </div>
                                        </div>
                                        <div className="f-input-group">
                                            <label>Email</label>
                                            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required />
                                        </div>
                                        
                                        <div className="form-row-dual">
                                            <div className="f-input-group" style={{ position: 'relative' }}>
                                                <label>Category</label>
                                                <input 
                                                    type="text" 
                                                    placeholder="e.g. MACHINERY" 
                                                    value={formData.category} 
                                                    onChange={(e) => handleCategorySearch(e.target.value)}
                                                    onFocus={() => handleCategorySearch(formData.category)}
                                                    onBlur={() => setTimeout(() => setShowCategorySuggestions(false), 200)}
                                                    required
                                                    autoComplete="off"
                                                />
                                                {showCategorySuggestions && categorySuggestions.length > 0 && (
                                                    <ul className="contact-suggestions" style={{
                                                        position: 'absolute', top: '100%', left: 0, right: 0,
                                                        backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '4px',
                                                        maxHeight: '150px', overflowY: 'auto', zIndex: 1000, listStyle: 'none',
                                                        padding: '5px 0', margin: 0, boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                                                    }}>
                                                        {categorySuggestions.map((cat, idx) => (
                                                            <li key={idx} onMouseDown={() => handleCategoryClick(cat)}
                                                                style={{ padding: '8px 12px', cursor: 'pointer', borderBottom: '1px solid #eee', color: '#333' }}
                                                            >{cat}</li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                            <div className="f-input-group" style={{ position: 'relative' }}>
                                                <label>Sub-Category</label>
                                                <input 
                                                    type="text" 
                                                    placeholder="e.g. CNC Machine" 
                                                    value={formData.subCategory} 
                                                    onChange={(e) => handleSubCategorySearch(e.target.value)}
                                                    onFocus={() => handleSubCategorySearch(formData.subCategory)}
                                                    onBlur={() => setTimeout(() => setShowSubCategorySuggestions(false), 200)}
                                                    required
                                                    autoComplete="off"
                                                />
                                                {showSubCategorySuggestions && subCategorySuggestions.length > 0 && (
                                                    <ul className="contact-suggestions" style={{
                                                        position: 'absolute', top: '100%', left: 0, right: 0,
                                                        backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '4px',
                                                        maxHeight: '150px', overflowY: 'auto', zIndex: 1000, listStyle: 'none',
                                                        padding: '5px 0', margin: 0, boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                                                    }}>
                                                        {subCategorySuggestions.map((sub, idx) => (
                                                            <li key={idx} onMouseDown={() => handleSubCategoryClick(sub)}
                                                                style={{ padding: '8px 12px', cursor: 'pointer', borderBottom: '1px solid #eee', color: '#333' }}
                                                            >{sub}</li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>

                                        <div className="f-input-group">
                                            <label>Message</label>
                                            <textarea rows="4" name="message" placeholder="How can we help?" value={formData.message} onChange={handleInputChange}></textarea>
                                        </div>
                                        <button type="submit" className="grand-submit-btn">Send Message Now</button>
                                    </form>
                                )}
                            </div>
                        </div>
                        <div className="faq-side">
                            <div className="faq-wrapper">
                                <h3>Common <span>Questions</span></h3>
                                <div className="faq-accordion-box">
                                    {faqs.map((faq, index) => (
                                        <div key={index} className={`faq-row ${activeFaq === index ? 'open' : ''}`} onClick={() => toggleFaq(index)}>
                                            <div className="faq-q-area">
                                                <span>{faq.q}</span>
                                                <FontAwesomeIcon icon={activeFaq === index ? faChevronUp : faChevronDown} />
                                            </div>
                                            {activeFaq === index && <div className="faq-a-area fade-in-up">{faq.a}</div>}
                                        </div>
                                    ))}
                                </div>
                                <div className="feedback-cta-box">
                                    <p>Have specific feedback?</p>
                                    <a href="/about/feedback.php">Submit Feedback Request</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. FULL WIDTH MAP */}
            <section id="contact-map-final-section">
                <div className="map-badge">
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> Find Us in Subhash Nagar
                </div>
                <iframe 
                    title="GlobalB2BMart Office Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.626924787868!2d77.10296108210929!3d28.634930289499838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03604e12404f%3A0x88928840582bf570!2sMiraj%20Cinemas%20Subhash%20Nagar!5e0!3m2!1sen!2sin!4v1716545677336!5m2!1sen!2sin" 
                    width="100%" 
                    height="500" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy"
                ></iframe>
            </section>

            {/* 6. TRUST FOOTER BAR */}
            <section id="contact-trust-footer">
                <div className="contact-container flex-between">
                    <div className="t-item"><FontAwesomeIcon icon={faUserShield} /> <span>100% Secure Trade</span></div>
                    <div className="t-item"><FontAwesomeIcon icon={faUserShield} /> <span>Verified Buyers</span></div>
                    <div className="t-item"><FontAwesomeIcon icon={faUserShield} /> <span>24x7 Support</span></div>
                    <div className="t-item"><FontAwesomeIcon icon={faUserShield} /> <span>Global Network</span></div>
                </div>
            </section>
        </div>
    );
};

export default Contact;