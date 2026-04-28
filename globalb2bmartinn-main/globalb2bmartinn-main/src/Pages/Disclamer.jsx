import React, { useEffect } from 'react';
import './content-shared.css';

const Disclaimer = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="premium-content-root policy-page">
            <header className="page-banner">
                <div className="content-container">
                    <div className="breadcrumb">HOME / LEGAL</div>
                    <h1>Legal <span>Disclaimer</span></h1>
                </div>
            </header>

            <div className="content-container">
                <div className="policy-card">
                    <div className="policy-meta">Last Updated: April 2025</div>
                    <p>This disclaimer serves to outline the terms of engagement, limit liability, and clarify the nature of the business relationship between GlobalB2BMart and its users.</p>

                    <h2>1. Nature of Business Relationship</h2>
                    <p>
                        Our company engages in business-to-business (B2B) transactions, providing services to other businesses. By engaging with us, you acknowledge and agree that you are acting on behalf of a registered business entity and not as a consumer.
                    </p>

                    <h2>2. No Warranty</h2>
                    <p>
                        We make no warranties, express or implied, regarding the suitability, reliability, or accuracy of our products/services for your specific business needs. 
                        <b> All products and services are provided "as is" without warranty of any kind.</b>
                    </p>

                    <h2>3. Liability Limitation</h2>
                    <p>
                        GlobalB2BMart shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of our services or the performance of our obligations under any agreement.
                    </p>

                    <h2>4. Intellectual Property</h2>
                    <p>
                        All intellectual property rights related to our platform, including but not limited to patents, trademarks, copyrights, and trade secrets, remain the sole property of <b>GlobalB2BMart.com.</b> Unauthorized use is strictly prohibited.
                    </p>

                    <h2>5. Confidentiality</h2>
                    <p>
                        Any information shared between companies in the course of business shall be treated as confidential. Both parties agree to take reasonable measures to protect the confidentiality of such information and use it only for the purpose of fulfilling business obligations.
                    </p>

                    <h2>6. Governing Law</h2>
                    <p>
                        These terms and conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of New Delhi.
                    </p>

                    <div style={{ marginTop: '40px', padding: '20px', background: '#f8fafc', borderLeft: '4px solid #fb743f', borderRadius: '8px' }}>
                        <p style={{ margin: 0, fontSize: '0.95rem' }}>
                            By engaging in business with GlobalB2BMart.com, you acknowledge that you have read, understood, and agreed to the terms and conditions outlined in this legal disclaimer.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Disclaimer;
