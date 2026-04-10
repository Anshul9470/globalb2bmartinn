import React from 'react';

const Complaint = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Complaint Policy</h2>
            <p style={styles.text}>
                Our company endeavors to provide our best services to our valuable clients. However, if any of our valuable clients feel deprived due to any wrong or misleading information, service, package, deficiency in providing any or all of our services or packages, or misbehavior or misrepresentation by any of our employees, then such person, client, company, or any other entity may report this matter to our official email (feedback@globalb2bmart.com) within 15 days since it comes to their knowledge.
            </p>
            <p style={styles.text}>
                Based on the information or facts provided, your complaint will be assessed by our senior team. A confirmation email will be sent to inform you about the receipt of your complaint. If the complaint is found to be malicious, the company reserves the right to reject it at the very outset of initiating any inquiry, and for this matter, no prior notice or intimation will be sent to the complainant.
            </p>
            <p style={styles.text}>
                If an inquiry is not completed within 60 days since its admission, it will be sent to our senior team of HRs, who will serve as an appellate authority. They will dispose of the concern or complaint within 30 days. An intimation will be shared with the complainant that their complaint has reached our senior team of HR.
            </p>
            <p style={styles.text}>
                The decision taken by our appellate authority will be final and binding.
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

export default Complaint;
