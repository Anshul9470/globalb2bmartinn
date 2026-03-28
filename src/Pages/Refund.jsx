import React from 'react';

const Refund = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Refund / Money Back Policy</h2>
            <p style={styles.text}> Thank you for using our B2B portal. Please read this policy carefully before opting any services.</p>
            <p style={styles.text}>
                **1. Non-Refundable Services**
                All paid services activated on our B2B portal are non-refundable under any circumstances once the service has been activated. This includes but is not limited to:
                - Subscription fees
                - Advertisement placements
                - Featured listings
                - Any other paid promotional services
            </p>
            <p style={styles.text}>
                If you send us a request (on the basis of reasonable ground) for a refund within 15 Days of the payment date, we may consider refunding your amount only for non-activated services or work as per the company’s policy. The refund process may take 30-45 working days depending on the availability of the information. Please send your mail with details to <a href="mailto:feedback@globalb2bmart.com" style={styles.link}>feedback@globalb2bmart.com</a>. The amount will be refunded through the same form how globalb2bmart.com receives the payment. The amount received in one form will not be refunded in a different form. (For example, the amount received through credit card payment will be refunded only by remittance to the same credit card.)
            </p>
            <p style={styles.text}>
                **2. Refund Eligibility**
                Refunds may be considered only under the following circumstances:
                - Non-activation of paid services due to technical issues or other reasons attributable to our platform.
                - Refund requests must be made within 10 days from the date of payment.
            </p>
            <p style={styles.text}>
                **3. Refund Process**
                To request a refund, please contact our customer support team at Feedback@globalb2bmart.com. Your request must include:
                - Proof of payment
                - Reason for the refund request
                - Any other relevant information
            </p>
            <p style={styles.text}>
                **4. Refund Approval**
                Refunds will be approved at our sole discretion based on the validity of the reason provided. We reserve the right to reject refund requests if:
                - The services have been partially or fully utilized.
                - The request is made after the specified refund period (10 days from payment date).
                - The request does not meet our eligibility criteria.

            </p>
            <p style={styles.text}>
                **5. Refund Method**
                Refunds, if approved, will be processed using the original method of payment. For example:
                - Payments made via credit card will be refunded to the same credit card.
                - Payments made via bank transfer will be refunded to the same bank account.</p>
            <p style={styles.text}>**6. Refund Timeline**
                Once approved, refunds may take 30-45 working days to process, depending on the availability of information and processing time of financial institutions.</p>
            <p style={styles.text}>**7. Contact Us**
                For any questions about our refund policy, please contact our customer support team at Feedback@globalb2bmart.com.
            </p>
            <p style={styles.text}>**8. Changes to This Policy**
                We reserve the right to modify this refund policy at any time. Any changes will be effective immediately upon posting on our website. Please check this page periodically for updates.</p>
            <p style={styles.contact}>
                Need help? Contact us at <a href="mailto:feedback@globalb2bmart.com" style={styles.link}>feedback@globalb2bmart.com</a> for questions related to refunds and returns.
            </p>
        </div>
    );
};

const styles = {
    container: {
        // maxWidth: '800px',
        margin: '0 auto',
        padding: '20px 40px',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
    },
    heading: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
        textAlign: 'center',
        color: '#333'
    },
    text: {
        fontSize: '16px',
        color: '#666',
        marginBottom: '10px'
    },
    contact: {
        fontSize: '16px',
        color: '#666',
        textAlign: 'center',
        marginTop: '20px'
    },
    link: {
        color: '#007BFF',
        textDecoration: 'none'
    }
};

export default Refund;
