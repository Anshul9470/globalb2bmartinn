// // Inside your Dashboard component

// import React, { useState, useEffect } from 'react';
// import './Dashboard.css';
// import { Link, useLocation } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGauge, faShieldHalved, faMessage, faBriefcase, faScrewdriverWrench, faGear, faUser, faCartPlus, faBarsProgress, faBook, faCircleQuestion, faLeaf, faCircleInfo } from '@fortawesome/free-solid-svg-icons';


// import FreeDash from './FreeDash';


// const Dashboard = () => {
//     const [userData, setUserData] = useState(null);
//     const [error, setError] = useState('');
//     const [activeSection, setActiveSection] = useState('dashboard');
//     const [selectedImages, setSelectedImages] = useState([]);
//     const [productTitle, setProductTitle] = useState('');
//     const [productDescription, setProductDescription] = useState('');
//     const [updateMessage, setUpdateMessage] = useState('');
//     const [highlight, setHighlight] = useState(false);
//     const [products, setProducts] = useState([]);
//     const [viewedLeads, setViewedLeads] = useState([]); // New state variable for viewed leads
//     const location = useLocation();


//     const handleSectionChange = (section) => {
//         setActiveSection(section);
//         if (section === 'leadSearch') {
//             window.scrollTo(0, 0); // Scroll to top
//             setHighlight(true); // Highlight the content
//             setTimeout(() => setHighlight(false), 10000); // Remove highlight after 10 seconds
//         } else if (section === 'viewedLeads') {
//             // Fetch viewed leads when the section is changed to 'viewedLeads'
//             fetchViewedLeads();
//         }
//     };

//     // Function to fetch viewed leads data from the backend
//     const fetchViewedLeads = async () => {
//         try {
//             const response = await fetch(`http://localhost:3005/viewed-leads/${userData._id}`);
//             if (!response.ok) {
//                 throw new Error('Failed to fetch viewed leads');
//             }
//             const data = await response.json();
//             setViewedLeads(data.viewedLeads);
//         } catch (error) {
//             setError(error.message);
//         }
//     };

//     useEffect(() => {
//         const fetchUserData = async () => {
//             const userId = new URLSearchParams(location.search).get('id');
//             try {
//                 const response = await fetch(`http://localhost:3005/login?id=${userId}`);
//                 if (!response.ok) {
//                     throw new Error('User not found');
//                 }
//                 const data = await response.json();
//                 setUserData(data.user);
//             } catch (error) {
//                 setError(error.message);
//             }
//         };
//         fetchUserData();
//     }, [location.search]);

//     // Rest of your component code...

//     // Render viewed leads section
//     const renderViewedLeads = () => {
//         return (
//             <div>
//                 <h2>Viewed Leads</h2>
//                 <ul>
//                     {viewedLeads.map((lead, index) => (
//                         <li key={index}>
//                             <p>Buyer Name: {lead.buyerName}</p>
//                             <p>Mobile No: {lead.mobileNo}</p>
//                             <p>Date Viewed: {new Date(lead.dateViewed).toLocaleString()}</p>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         );
//     };

//     // Rest of your component code...

//     return (
//         <div className={`dashboard-container ${highlight ? 'highlight' : ''}`}>
//             {/* Header and other sections */}
//             {/* Your existing code */}
//             {/* Conditional rendering for viewed leads section */}
//             {activeSection === 'viewedLeads' && renderViewedLeads()}
//         </div>
//     );
// };

// export default Dashboard;
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateGST = () => {
    const { userId } = useParams();
    const [gstNumber, setGSTNumber] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (event) => {
        setGSTNumber(event.target.value);
    };

    const handleUpdateGST = async () => {
        try {
            const response = await fetch(`http://localhost:3005/update-gst/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ gstNumber }),
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Failed to update GST number');
            }
            setMessage(data.message);
            setGSTNumber('');
            alert('GST number updated successfully'); // Alert when GST number is successfully updated
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <h2>Update GST Number</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {message && <p style={{ color: 'green' }}>{message}</p>}
            <div>
                <label>GST Number:</label>
                <input type="text" value={gstNumber} onChange={handleInputChange} />
            </div>
            <button onClick={handleUpdateGST}>Update GST Number</button>
        </div>
    );
};

export default UpdateGST;
