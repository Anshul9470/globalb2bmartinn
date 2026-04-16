import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faRocket, faUsers, faShieldAlt, faCheckCircle, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import Whyglobal from '../Components/Whyglobal';
import './content-shared.css';

const AboutUs = () => {
    return (
        <div className="premium-content-root about-page">
            <header className="page-banner">
                <div className="content-container">
                    <div className="breadcrumb">HOME / ABOUT US</div>
                    <h1>Empowering <span>Global Trade</span></h1>
                </div>
            </header>

            <div className="content-container">
                {/* 1. Introduction Grid */}
                <div className="about-grid">
                    <div className="about-image-premium">
                        <img src="./assets/man-holding-box.jpg" alt="About GlobalB2BMart" 
                             onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800"; }} />
                    </div>
                    <div className="about-info">
                        <h2>Your Gateway to Global Opportunities</h2>
                        <p>
                            Welcome to <strong>GlobalB2BMart</strong>, India's premier B2B marketplace. 
                            We specialize in connecting small and medium enterprises (SMEs) with verified buyers and suppliers worldwide. 
                            Our mission is to simplify the complexities of international trade through technology, 
                            ensuring that every business—no matter its size—can compete on a global stage.
                        </p>
                        <p>
                            With an extensive network spanning across continents, we serve as a dynamic hub where industries converge to 
                            explore new markets, forge valuable partnerships, and drive sustainable growth.
                        </p>
                    </div>
                </div>

                {/* 2. Feature Cards Section */}
                <div className="section-title-premium" style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 900 }}>Why Choose <span>GlobalB2BMart?</span></h2>
                    <div style={{ width: '60px', height: '5px', background: '#fb743f', margin: '15px auto' }}></div>
                </div>

                <div className="feature-cards">
                    <div className="feature-card">
                        <FontAwesomeIcon icon={faGlobe} className="f-icon" />
                        <h3>Global Reach</h3>
                        <p>Connect with a diverse network of businesses from 150+ countries, opening doors to limitless international trade.</p>
                    </div>
                    <div className="feature-card">
                        <FontAwesomeIcon icon={faShieldAlt} className="f-icon" />
                        <h3>Verified Trust</h3>
                        <p>Our rigorous verification process ensures that every supplier and buyer on our platform is legitimate and secure.</p>
                    </div>
                    <div className="feature-card">
                        <FontAwesomeIcon icon={faRocket} className="f-icon" />
                        <h3>Business Growth</h3>
                        <p>Leverage advanced lead management tools and SEO-optimized listings to skyrocket your sales and visibility.</p>
                    </div>
                    <div className="feature-card">
                        <FontAwesomeIcon icon={faUsers} className="f-icon" />
                        <h3>Dedicated Support</h3>
                        <p>Our team of export consultants and account managers provide 24/7 personalized guidance for your success.</p>
                    </div>
                </div>

                <div style={{ marginTop: '80px' }}>
                    <Whyglobal />
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
