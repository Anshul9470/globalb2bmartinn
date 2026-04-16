import React, { useEffect } from 'react';
import './content-shared.css';

const Complaint = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="premium-content-root policy-page">
            <header className="page-banner">
                <div className="content-container">
                    <div className="breadcrumb">HOME / SUPPORT</div>
                    <h1>Complaint <span>Policy</span></h1>
                </div>
            </header>

            <div className="content-container">
                <div className="policy-card">
                    <div className="policy-meta">Last Updated: April 2025</div>
                    <p>Our company endeavors to provide the best possible services to our valuable clients. However, if you feel deprived of service quality or encounter misleading information, we encourage you to report it immediately.</p>

                    <h2>1. Reporting a Concern</h2>
                    <p>
                        Any person, client, or company may report matters related to deficiency in services, packages, or misbehavior by employees to our official email: 
                        <b> feedback@globalb2bmart.com</b> within 15 days of the incident coming to your knowledge.
                    </p>

                    <h2>2. Assessment Process</h2>
                    <p>
                        Based on the facts provided, your complaint will be assessed by our senior management team. A confirmation email will be sent to acknowledge the receipt of your complaint. 
                    </p>
                    <blockquote>
                        <b>Note:</b> If the complaint is found to be malicious or without reasonable grounds, the company reserves the right to reject it at the outset without prior notice.
                    </blockquote>

                    <h2>3. Inquiry Timeline</h2>
                    <p>
                        If an inquiry is not completed within <b>60 days</b> of admission, it will be escalated to our Senior HR Team, who serve as the appellate authority. 
                        They will dispose of the concern within an additional 30 days.
                    </p>

                    <h2>4. Final Decision</h2>
                    <p>
                        The decision taken by our appellate authority (Senior HR Team) will be final and binding for all parties involved.
                    </p>

                    <div style={{ marginTop: '40px', padding: '20px', background: '#f8fafc', borderRadius: '16px', textAlign: 'center' }}>
                        <p style={{ margin: 0 }}>Need help? Reach out at <b>feedback@globalb2bmart.com</b> for dedicated support.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Complaint;
