import React from 'react';

const Disclaimer = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Disclaimer</h2>
            <p style={styles.text}>
                A disclaimer for a business-to-business (B2B) company typically serves to outline the terms and conditions of engagement, limit liability, and clarify the nature of the business relationship. Here’s a template for a B2B disclaimer:
            </p>
            <h3 style={styles.subHeading}>Globalb2bmart.com Disclaimer</h3>
            <div style={styles.section}>
                <h4 style={styles.subHeading}>1. Nature of Business Relationship:</h4>
                <p style={styles.text}>
                    Our company engages in business-to-business transactions, providing services to other businesses. By engaging with us, you acknowledge and agree that you are acting on behalf of a business entity and not as a consumer.
                </p>
            </div>
            <div style={styles.section}>
                <h4 style={styles.subHeading}>2. Terms of Engagement:</h4>
                <p style={styles.text}>
                    All transactions between Globalb2bmart.com and your business are subject to the terms and conditions outlined in our agreements, contracts, or purchase orders. It is important to review and understand these terms before proceeding with any transactions.
                </p>
            </div>
            <div style={styles.section}>
                <h4 style={styles.subHeading}>3. Liability Limitation:</h4>
                <p style={styles.text}>
                    Globalb2bmart.com shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of our products/services or the performance of our obligations under any agreement, contract, or purchase order.
                </p>
            </div>
            <div style={styles.section}>
                <h4 style={styles.subHeading}>4. No Warranty:</h4>
                <p style={styles.text}>
                    We make no warranties, express or implied, regarding the suitability, reliability, or accuracy of our products/services for your business needs. All products/services are provided “as is” without warranty of any kind.
                </p>
            </div>
            <div style={styles.section}>
                <h4 style={styles.subHeading}>5. Intellectual Property:</h4>
                <p style={styles.text}>
                    All intellectual property rights related to our products/services, including but not limited to patents, trademarks, copyrights, and trade secrets, remain the sole property of Globalb2bmart.com.
                </p>
            </div>
            <div style={styles.section}>
                <h4 style={styles.subHeading}>6. Confidentiality:</h4>
                <p style={styles.text}>
                    Any information shared between our companies in the course of business shall be treated as confidential and used only for the purpose of fulfilling our business obligations. Both parties agree to take reasonable measures to protect the confidentiality of such information.
                </p>
            </div>
            <div style={styles.section}>
                <h4 style={styles.subHeading}>7. Governing Law:</h4>
                <p style={styles.text}>
                    These terms and conditions shall be governed by and construed in accordance with the laws of [Jurisdiction]. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of [Jurisdiction].
                </p>
            </div>
            <div style={styles.section}>
                <h4 style={styles.subHeading}>8. Changes to Disclaimer:</h4>
                <p style={styles.text}>
                    Globalb2bmart.com reserves the right to amend or update this disclaimer at any time without prior notice. It is your responsibility to review this disclaimer periodically for any changes.
                </p>
            </div>
            <div style={styles.section}>
                <h4 style={styles.subHeading}>9. Contact Information:</h4>
                <p style={styles.text}>
                    If you have any questions or concerns regarding this disclaimer or our business practices, please contact us at feedback@globalb2bmart.com.
                </p>
            </div>
            <p style={styles.text}>
                By engaging in business with Globalb2bmart.com, you acknowledge that you have read, understood, and agreed to the terms and conditions outlined in this disclaimer.
            </p>
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
    subHeading: {
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: '#555'
    },
    section: {
        marginBottom: '20px'
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

export default Disclaimer;
