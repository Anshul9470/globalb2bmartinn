import React, { useEffect } from 'react';
import './content-shared.css';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="premium-content-root policy-page">
            <header className="page-banner">
                <div className="content-container">
                    <div className="breadcrumb">HOME / LEGAL</div>
                    <h1>Privacy <span>Policy</span></h1>
                </div>
            </header>

            <div className="content-container">
                <div className="policy-card">
                    <div className="policy-meta">Last Updated: April 2025</div>
                    <p>At Global B2B Mart, accessible from www.globalb2bmart.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Global B2B Mart and how we use it.</p>

                    <h2>1. Consent</h2>
                    <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>

                    <h2>2. Information we collect</h2>
                    <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
                    <p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>

                    <h2>3. How we use your information</h2>
                    <p>We use the information we collect in various ways, including to:</p>
                    <ul>
                        <li>Provide, operate, and maintain our website</li>
                        <li>Improve, personalize, and expand our website</li>
                        <li>Understand and analyze how you use our website</li>
                        <li>Develop new products, services, features, and functionality</li>
                        <li>Communicate with you, either directly or through one of our partners, including for customer service</li>
                    </ul>

                    <h2>4. Log Files</h2>
                    <p>Global B2B Mart follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.</p>

                    <h2>5. Advertising Partners Privacy Policies</h2>
                    <p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Global B2B Mart, which are sent directly to users' browser.</p>

                    <h2>6. GDPR Data Protection Rights</h2>
                    <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
                    <ul>
                        <li><b>The right to access</b> – You have the right to request copies of your personal data.</li>
                        <li><b>The right to rectification</b> – You have the right to request that we correct any information you believe is inaccurate.</li>
                        <li><b>The right to erasure</b> – You have the right to request that we erase your personal data, under certain conditions.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
