import React, { useEffect } from 'react';
import './content-shared.css';

const Refund = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="premium-content-root policy-page">
            <header className="page-banner">
                <div className="content-container">
                    <div className="breadcrumb">HOME / LEGAL</div>
                    <h1>Refund <span>Policy</span></h1>
                </div>
            </header>

            <div className="content-container">
                <div className="policy-card">
                    <div className="policy-meta">Last Updated: April 2025</div>
                    <p>Thank you for using our B2B portal. Please read this policy carefully before opting for any paid services. Our mission is to provide high-quality business leads and global visibility.</p>

                    <h2>1. Non-Refundable Services</h2>
                    <p>All paid services activated on our B2B portal are non-refundable under any circumstances once the service has been activated. This includes but is not limited to:</p>
                    <ul>
                        <li>Subscription fees & Membership tiers</li>
                        <li>Advertisement placements & Banner ads</li>
                        <li>Featured products and Top-rank listings</li>
                        <li>Verified Seller Trust Seal activation</li>
                    </ul>

                    <h2>2. Refund Eligibility</h2>
                    <p>Refunds may be considered only under the following specific circumstances:</p>
                    <ul>
                        <li>Non-activation of paid services due to technical issues on our platform.</li>
                        <li>Refund requests must be made within 10 days from the date of payment.</li>
                    </ul>

                    <h2>3. Refund Process</h2>
                    <p>To request a refund, please contact our customer support team at <b>feedback@globalb2bmart.com</b>. Your request must include:</p>
                    <ul>
                        <li>Proof of payment (Invoice/Transaction ID)</li>
                        <li>Detailed reason for the refund request</li>
                        <li>Product or Service name purchased</li>
                    </ul>

                    <h2>4. Refund Approval & Timeline</h2>
                    <p>Refunds will be approved at our sole discretion based on the validity of the reason provided. Once approved, refunds may take <b>30-45 working days</b> to process, depending on the availability of information and the processing time of financial institutions.</p>

                    <h2>5. Changes to This Policy</h2>
                    <p>We reserve the right to modify this refund policy at any time. Any changes will be effective immediately upon posting on our website. Please check this page periodically for updates.</p>
                </div>
            </div>
        </div>
    );
};

export default Refund;
