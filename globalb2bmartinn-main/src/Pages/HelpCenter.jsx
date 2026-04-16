import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faSearch, 
    faBook, 
    faUserShield, 
    faCreditCard, 
    faTruck, 
    faChevronDown,
    faPaperPlane,
    faStore,
    faCartShopping,
    faLifeRing,
    faCircleQuestion
} from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './helpcenter.css';

gsap.registerPlugin(ScrollTrigger);

const HelpCenter = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const heroRef = useRef(null);
    const blob1Ref = useRef(null);
    const blob2Ref = useRef(null);
    const blob3Ref = useRef(null);

    const faqs = [
        {
            question: "How do I register as a seller on GlobalB2BMart?",
            answer: "To register as a seller, click on 'Register' in the top menu and choose 'Company Registration'. Fill in your business details, verify your identity, and your profile will be live once approved by our verification team."
        },
        {
            question: "How can I post my sourcing requirement as a buyer?",
            answer: "Simply use the 'Post Your Requirement' form on the homepage or buyer dashboard. Describe the products, quantity, and delivery terms. We'll automatically match you with verified global suppliers."
        },
        {
            question: "What are the benefits of a Premium Membership?",
            answer: "Premium members enjoy top-tier listing placement, early access to verified buyer leads, a 'Verified' trust seal, and dedicated support from a Personal Trade Consultant."
        },
        {
            question: "Is international trade safe on your portal?",
            answer: "Yes, we prioritize security. We verify every company profile and provide tools like 'Verified Supplier' status to help you trade with confidence. We also recommend using secure payment methods."
        },
        {
            question: "How do I contact customer support for technical help?",
            answer: "Our support team is available 24/7. You can use the 'Contact Us' form, email us at sales@globalb2bmart.com, or reach us via the live chat icon at the bottom right."
        }
    ];

    const categories = [
        { icon: faBook, title: "Getting Started", desc: "Step-by-step guides for new buyers and sellers to maximize their trade." },
        { icon: faStore, title: "Seller Guide", desc: "Master product visibility, keyword optimization, and buyer engagement." },
        { icon: faCartShopping, title: "Buyer Guide", desc: "How to source quality products and verify international suppliers safely." },
        { icon: faUserShield, title: "Privacy & Security", desc: "Everything you need to know about account safety and data protection." },
        { icon: faCreditCard, title: "Payments & Plans", desc: "Manage your premium memberships, billing history, and payment methods." },
        { icon: faTruck, title: "Trade & Logistics", desc: "Guidance on shipping, customs, and international trade regulations." }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax Blobs
            gsap.to(blob1Ref.current, { y: 100, x: 50, duration: 15, repeat: -1, yoyo: true, ease: 'sine.inOut' });
            gsap.to(blob2Ref.current, { y: -80, x: -60, duration: 18, repeat: -1, yoyo: true, ease: 'sine.inOut' });
            gsap.to(blob3Ref.current, { y: 50, x: 100, duration: 12, repeat: -1, yoyo: true, ease: 'sine.inOut' });

            // Hero entrance
            gsap.from(heroRef.current.children, {
                y: 50,
                opacity: 0,
                duration: 1.5,
                stagger: 0.3,
                ease: 'expo.out'
            });

            // Card Reveal
            gsap.from(".card-sahi", {
                scrollTrigger: {
                    trigger: ".category-grid-sahi",
                    start: 'top 85%',
                },
                y: 80,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power4.out'
            });

            // Sections Reveal
            gsap.from(".faq-section-sahi, .cta-sahi", {
                scrollTrigger: {
                    trigger: ".faq-section-sahi",
                    start: 'top 90%',
                },
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.3,
                ease: 'power3.out'
            });
        });

        return () => ctx.revert();
    }, []);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="help-page-bg">
            <div className="mesh-gradient-bg"></div>
            <div className="blob blob-1" ref={blob1Ref}></div>
            <div className="blob blob-2" ref={blob2Ref}></div>
            <div className="blob blob-3" ref={blob3Ref}></div>

            <div className="help-center-wrapper">
                <header className="help-center-hero-sahi" ref={heroRef}>
                    <div className="support-badge-premium">
                        <FontAwesomeIcon icon={faLifeRing} style={{ marginRight: '10px' }} />
                        Partner Support Center
                    </div>
                    <h1>How can we <span>help you?</span></h1>
                    <div className="search-box-sahi">
                        <FontAwesomeIcon icon={faSearch} style={{ color: '#94a3b8' }} />
                        <input type="text" placeholder="Search for articles, guides, or questions..." />
                        <button className="search-btn-sahi">Search</button>
                    </div>
                </header>

                <div className="category-grid-sahi">
                    {categories.map((cat, i) => (
                        <div key={i} className="card-sahi">
                            <div className="icon-pill-sahi">
                                <FontAwesomeIcon icon={cat.icon} />
                            </div>
                            <h3>{cat.title}</h3>
                            <p>{cat.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="faq-section-sahi">
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <h2 style={{ fontSize: '3.2rem', fontWeight: 900, color: '#0f172a' }}>
                            Frequently Asked <span>Questions</span>
                        </h2>
                        <div style={{ width: '80px', height: '6px', background: '#fb743f', margin: '20px auto', borderRadius: '10px' }}></div>
                    </div>

                    <div className="faq-container-sahi">
                        {faqs.map((faq, index) => (
                            <div 
                                key={index} 
                                className={`faq-item-sahi ${activeIndex === index ? 'active' : ''}`}
                            >
                                <div className="faq-header-sahi" onClick={() => toggleAccordion(index)}>
                                    <h4>{faq.question}</h4>
                                    <FontAwesomeIcon icon={faChevronDown} className="faq-icon-sahi" />
                                </div>
                                <div className="faq-content-sahi">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="cta-sahi">
                    <div style={{ marginBottom: '40px', color: '#fb743f', fontSize: '4rem' }}>
                        <FontAwesomeIcon icon={faCircleQuestion} />
                    </div>
                    <h2>Still Have Questions?</h2>
                    <p>
                        Our dedicated support team is ready to assist you with any inquiries regarding your business growth on GlobalB2BMart.
                    </p>
                    <div style={{ display: 'flex', gap: '25px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/contact-us" className="btn-white-sahi">Contact Support</Link>
                        <a href="mailto:sales@globalb2bmart.com" className="btn-white-sahi" style={{ background: '#fb743f', color: 'white' }}>
                            <FontAwesomeIcon icon={faPaperPlane} style={{ marginRight: '10px' }} />
                            Email Support
                        </a>
                    </div>
                </div>
                <div style={{ height: '120px' }}></div>
            </div>
        </div>
    );
};

export default HelpCenter;
