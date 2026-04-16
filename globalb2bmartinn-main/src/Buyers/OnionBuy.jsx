// import React, { useState, useEffect } from 'react';
// import './OnionBuy.css';
// import { useAuth } from './AuthContext';
// import { Link } from 'react-router-dom';

// const OnionBuys = [
//     {
//         title: 'Looking for Fresh Red Onion',
//         location: 'Morbi, Gujarat, India - 30 May 2024',
//         buyerName: 'Mehul Patel',
//         mobileNo: '+91-9899899988',
//         quantity: '1 Container (20 Feet)',
//         requirement: 'Urgent',
//         purpose: 'Reselling',
//         frequency: 'Monthly',
//         onionSize: '35 mm and above',
//         packagingSize: '25 kg',
//         paymentMode: 'Bank Transfer',
//     },
//     {
//         title: 'Looking for Fresh Red Onion',
//         location: 'Kolkata, West Bengal, India - 29 May 2024',
//         buyerName: 'Chandan Kumar',
//         mobileNo: '+91-990909099',
//         quantity: '1 Metric Ton',
//         purpose: 'Reselling',
//     },
//     {
//         title: 'Looking for Nashik Onion',
//         location: 'Tiruchirappalli, Tamil Nadu, India - 27 May 2024',
//         buyerName: 'Abdul Malik S',
//         mobileNo: '+91-98909099',
//         quantity: '2000 Kilograms',
//     },
//     {
//         title: 'Looking for Fresh Red Onion',
//         location: 'Kolkata, West Bengal, India - 29 May 2024',
//         buyerName: 'rajan Kumar',
//         mobileNo: '535235535353',
//         quantity: '1 Metric Ton',
//         purpose: 'Reselling',
//     },
//     {
//         title: 'Looking for Nashik Onion',
//         location: 'Tiruchirappalli, Tamil Nadu, India - 27 May 2024',
//         buyerName: 'yash Bhardwaj',
//         mobileNo: '+534235235325',
//         quantity: '2000 Kilograms',
//     },
//     {
//         title: 'Looking for Fresh Red Onion',
//         location: 'Kolkata, West Bengal, India - 29 May 2024',
//         buyerName: 'Rajan Yadav',
//         mobileNo: '5235325235235235',
//         quantity: '1 Metric Ton',
//         purpose: 'Reselling',
//     },
//     {
//         title: 'Looking for Nashik Onion',
//         location: 'Tiruchirappalli, Tamil Nadu, India - 27 May 2024',
//         buyerName: 'kuldeep kumar',
//         mobileNo: '523532523523532',
//         quantity: '2000 Kilograms',
//     },
//     {
//         title: 'Looking for Nashik Onion',
//         location: 'Tiruchirappalli, Tamil Nadu, India - 27 May 2024',
//         buyerName: 'Mohan Rao',
//         mobileNo: '234532565',
//         quantity: '2000 Kilograms',
//     },
// ];

// const OnionBuy = () => {
//     const { userId } = useAuth();
//     const [userIsPremium, setUserIsPremium] = useState(false); // Initialize as false, assuming user is not premium by default
//     const [shownNumbers, setShownNumbers] = useState(
//         new Array(OnionBuys.length).fill(false) // Array of booleans for each buyer
//     );


//     useEffect(() => {
//         if (!userId) return;

//         fetch(`http://localhost:3005/getUserWithPremiumStatus/${userId}`)
//             .then(response => response.json())
//             .then(data => {
//                 setUserIsPremium(data.isPremium);
//                 console.log('Premium Status:', data.isPremium);
//             })
//             .catch(error => {
//                 console.error('Error fetching user information:', error);
//             });
//     }, [userId]);



//     const toggleNumber = (index) => {
//         setShownNumbers((prevShownNumbers) => {
//             const updatedShownNumbers = [...prevShownNumbers];
//             updatedShownNumbers[index] = !prevShownNumbers[index];
//             return updatedShownNumbers;
//         });
//     };

//     // Render contact number based on user's plan
//     return (
//         <div className="containersx">
//             <div className="buyers">
//                 {OnionBuys.map((buyer, index) => (
//                     <div key={index} className="buyer-card">
//                         <h2>{buyer.title}</h2>
//                         <p><strong>Buyer Name:</strong> {buyer.buyerName}</p>
//                         <div style={{ display: 'flex', gap: '10px' }}>
//                             <p>
//                                 <strong>Mobile No.:</strong> {userIsPremium ? (shownNumbers[index] ? buyer.mobileNo : '********') : 'Premium feature'}
//                             </p>
//                             {userIsPremium && (
//                                 <button
//                                     className="detail-btn"
//                                     style={{
//                                         padding: '5px 10px',
//                                         color: '#000',
//                                         background: '#f7f1f1',
//                                         color: 'orange',
//                                         borderRadius: '3px',
//                                         cursor: 'pointer',
//                                     }}
//                                     onClick={() => toggleNumber(index)} // Pass index to toggle function
//                                 >
//                                     {shownNumbers[index] ? 'Hide' : 'Click to see'}
//                                 </button>
//                             )}
//                         </div>
//                         {/* ... rest of your content */}
//                     </div>
//                 ))}
//             </div>
//             <div className="sidebar">
//                 <h3>Browse by State</h3>
//                 <ul>
//                     {/* ... your state list */}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// const OnionBuy = () => {
//     const { userId } = useAuth();
//     const [userIsPremium, setUserIsPremium] = useState(false);
//     const [shownNumbers, setShownNumbers] = useState([]);
//     // const [shownNumbers, setShownNumbers] = useState(new Array(OnionBuys.length).fill(false));
//     const [leadsViewed, setLeadsViewed] = useState(0);

//     // useEffect(() => {
//     //     if (!userId) return;

//     //     fetch(`http://localhost:3005/getUserWithPremiumStatus/${userId}`)
//     //         .then(response => response.json())
//     //         .then(data => {
//     //             setUserIsPremium(data.isPremium);
//     //             setLeadsViewed(data.leadsViewed);
//     //             console.log('Premium Status:', data.isPremium);
//     //         })
//     //         .catch(error => {
//     //             console.error('Error fetching user information:', error);
//     //         });
//     // }, [userId]);

//     useEffect(() => {
//         if (!userId) return;

//         // Load the viewed leads from local storage
//         const storedViewedLeads = JSON.parse(localStorage.getItem(`viewedLeads_${userId}`)) || [];
//         setShownNumbers(storedViewedLeads);

//         fetch(`http://localhost:3005/getUserWithPremiumStatus/${userId}`)
//             .then(response => response.json())
//             .then(data => {
//                 setUserIsPremium(data.isPremium);
//                 setLeadsViewed(data.leadsViewed);
//                 console.log('Premium Status:', data.isPremium);
//             })
//             .catch(error => {
//                 console.error('Error fetching user information:', error);
//             });
//     }, [userId]);
//     const toggleNumber = async (index) => {
//         if (!userIsPremium) return; // Only premium users can see numbers

//         if (leadsViewed >= 25) {
//             alert('You have reached the limit of 25 leads viewed per month.');
//             return;
//         }

//         if (shownNumbers[index]) return; // If already shown, do nothing

//         setShownNumbers((prevShownNumbers) => {
//             const updatedShownNumbers = [...prevShownNumbers];
//             updatedShownNumbers[index] = true; // Mark as shown
//             return updatedShownNumbers;
//         });

//         try {
//             const response = await fetch(`http://localhost:3005/incrementLeadsViewed/${userId}`, {
//                 method: 'POST'
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 setLeadsViewed(data.leadsViewed);
//             } else {
//                 const errorData = await response.json();
//                 console.error('Error incrementing leads viewed:', errorData.error);
//             }
//         } catch (error) {
//             console.error('Error incrementing leads viewed:', error.message);
//         }
//     };

//     return (
//         <div className="containersx">
//             <div className="buyers">
//                 {OnionBuys.map((buyer, index) => (
//                     <div key={index} className="buyer-card">
//                         <h2>{buyer.title}</h2>
//                         <p><strong>Buyer Name:</strong> {buyer.buyerName}</p>
//                         <div style={{ display: 'flex', gap: '10px' }}>
//                             <p>
//                                 <strong>Mobile No.:</strong> {userIsPremium ? (shownNumbers[index] ? buyer.mobileNo : '********') : 'Premium feature'}
//                             </p>
//                             {userIsPremium && (
//                                 <button
//                                     className="detail-btn"
//                                     style={{
//                                         padding: '5px 10px',
//                                         color: '#000',
//                                         background: '#f7f1f1',
//                                         color: 'orange',
//                                         borderRadius: '3px',
//                                         cursor: 'pointer',
//                                     }}
//                                     onClick={() => toggleNumber(index)}
//                                 >
//                                     Click to see
//                                 </button>
//                             )}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <div className="sidebar">
//                 <h3>Browse by State</h3>
//                 <ul>
//                     {/* ... */}
//                 </ul>
//             </div>
//         </div>
//     );
// };
// // const OnionBuy = () => {
// //     const { userId } = useAuth();
// //     const [userIsPremium, setUserIsPremium] = useState(false);
// //     const [shownNumbers, setShownNumbers] = useState([]);
// //     const [leadsViewed, setLeadsViewed] = useState(0);

// //     useEffect(() => {
// //         if (!userId) return;

// //         // Load the viewed leads from local storage
// //         const storedViewedLeads = JSON.parse(localStorage.getItem(`viewedLeads_${userId}`)) || [];
// //         setShownNumbers(storedViewedLeads);

// //         fetch(`http://localhost:3005/getUserWithPremiumStatus/${userId}`)
// //             .then(response => response.json())
// //             .then(data => {
// //                 setUserIsPremium(data.isPremium);
// //                 setLeadsViewed(data.leadsViewed);
// //                 console.log('Premium Status:', data.isPremium);
// //             })
// //             .catch(error => {
// //                 console.error('Error fetching user information:', error);
// //             });
// //     }, [userId]);

// //     const toggleNumber = async (index) => {
// //         if (!userIsPremium) return; // Only premium users can see numbers

// //         if (leadsViewed >= 25) {
// //             alert('You have reached the limit of 25 leads viewed per month.');
// //             return;
// //         }

// //         if (shownNumbers.includes(index)) return; // If already shown, do nothing

// //         const updatedShownNumbers = [...shownNumbers, index];
// //         setShownNumbers(updatedShownNumbers);

// //         // Update local storage
// //         localStorage.setItem(`viewedLeads_${userId}`, JSON.stringify(updatedShownNumbers));

// //         const buyer = OnionBuys[index]; // Get the buyer information

// //         try {
// //             const response = await fetch(`http://localhost:3005/incrementLeadsViewed/${userId}`, {
// //                 method: 'POST',
// //                 headers: {
// //                     'Content-Type': 'application/json'
// //                 },
// //                 body: JSON.stringify({ buyerName: buyer.buyerName, mobileNo: buyer.mobileNo })
// //             });

// //             if (response.ok) {
// //                 const data = await response.json();
// //                 setLeadsViewed(data.leadsViewed);
// //             } else {
// //                 const errorData = await response.json();
// //                 console.error('Error incrementing leads viewed:', errorData.error);
// //             }
// //         } catch (error) {
// //             console.error('Error incrementing leads viewed:', error.message);
// //         }
// //     };

// //     return (
// //         <div className="containersx">
// //             <div className="buyers">
// //                 {OnionBuys.map((buyer, index) => (
// //                     <div key={index} className="buyer-card">
// //                         <h2>{buyer.title}</h2>
// //                         <p><strong>Buyer Name:</strong> {buyer.buyerName}</p>
// //                         <div style={{ display: 'flex', gap: '10px' }}>
// //                             <p>
// //                                 <strong>Mobile No.:</strong> {userIsPremium ? (shownNumbers.includes(index) ? buyer.mobileNo : '********') : 'Premium feature'}
// //                             </p>
// //                             {userIsPremium && (
// //                                 <button
// //                                     className="detail-btn"
// //                                     style={{
// //                                         padding: '5px 10px',
// //                                         color: '#000',
// //                                         background: '#f7f1f1',
// //                                         color: 'orange',
// //                                         borderRadius: '3px',
// //                                         cursor: 'pointer',
// //                                     }}
// //                                     onClick={() => toggleNumber(index)}
// //                                 >
// //                                     Click to see
// //                                 </button>
// //                             )}
// //                         </div>
// //                     </div>
// //                 ))}
// //             </div>
// //             <div className="sidebar">
// //                 <h3>Browse by State</h3>
// //                 <ul>
// //                     {/* ... */}
// //                 </ul>
// //             </div>
// //         </div>
// //     );
// // };


// export default OnionBuy;
// import React, { useState, useEffect } from 'react';
// import './OnionBuy.css';
// import { useAuth } from './AuthContext';
// import { Link } from 'react-router-dom';
// import Whyglobal from '../Components/Whyglobal';

// const OnionBuys = [
//     {
//         "buyerName": "Jagdish Ashok Kamble",
//         "email": "jagdishkamble55@gmail.com",
//         "mobileNumber": "8369474981",
//         "location": "29-06-2024",
//         "lookingFor": " Reselling Purpose onion required",
//         "productOrService": "onion",
//         "quantity": 10,
//         "unit": "Ton"
//     },
//     {
//         "buyerName": "Rajesh Kumar",
//         "email": "smartyruhan1437@gmail.com",
//         "mobileNumber": "7283030060",
//         "location": "29-06-2024",
//         "lookingFor": " Urgently required onion",
//         "productOrService": "onion",
//         "quantity": 100,
//         "unit": "kg"
//     },
//     {
//         "buyerName": "Amit Sharma",
//         "email": "amit10sharma1986@gmail.com",
//         "mobileNumber": "9015005102",
//         "location": "29-06-2024",
//         "lookingFor": " Fresh onion",
//         "productOrService": "onion",
//         "quantity": 200,
//         "unit": "kg"
//     },

//     {
//         title: 'Looking for Fresh Onions',
//         location: 'Morbi, Gujarat, India - 21 june 2024',
//         buyerName: 'zack',
//         mobileNo: '+91-9899899988',
//         quantity: '1 Container (20 Feet)',
//         requirement: 'Urgent',
//         purpose: 'Reselling',
//         frequency: 'Monthly',
//         onionSize: '35 mm and above',
//         packagingSize: '25 kg',
//         paymentMode: 'Bank Transfer',
//     },
//     {
//         title: 'Looking for Fresh Red Onions',
//         location: 'Kolkata, West Bengal, India -  22 june 2024',
//         buyerName: "cyan",
//         mobileNo: '+91-990909099',
//         quantity: '1 Metric Ton',
//         purpose: 'Reselling',
//         requirement: 'Urgent',
//         purpose: 'Reselling',
//     },
//     {
//         title: 'Looking for Nashik Onions',
//         location: 'Tiruchirappalli, Tamil Nadu, India -  23 june 2024',
//         buyerName: 'Kaushik',
//         mobileNo: '+91-98909099',
//         quantity: '200 Kilograms',
//         requirement: 'Urgent',
//         purpose: 'Reselling',
//     },
//     {
//         title: 'Looking for Nashik Onions',
//         location: 'Tiruchirappalli, Tamil Nadu, India -  22 june 2024',
//         buyerName: 'Raghav',
//         mobileNo: '+91-5453539099',
//         quantity: '2000 Kilograms',
//         requirement: 'Urgent',
//         purpose: 'Reselling',
//     },
//     {
//         title: 'Looking for Nashik Onions',
//         location: 'Tiruchirappalli, Tamil Nadu, India -  23 june 2024',
//         buyerName: 'Pimal',
//         mobileNo: '+91-3535353539',
//         quantity: '2000 Kilograms',
//         requirement: 'Urgent',
//         purpose: 'Reselling',
//     },
// ];

// const OnionBuy = () => {
//     const { userId } = useAuth();
//     const [userIsPremium, setUserIsPremium] = useState(false);
//     const [shownNumbers, setShownNumbers] = useState([]);
//     const [leadsViewed, setLeadsViewed] = useState(0);

//     useEffect(() => {
//         if (!userId) return;

//         // Load the viewed leads from local storage
//         const storedViewedLeads = JSON.parse(localStorage.getItem(`onionViewedLeads_${userId}`)) || [];
//         setShownNumbers(storedViewedLeads);


//         fetch(`${process.env.REACT_APP_API_ENDPOINT}/getUserWithPremiumStatus/${userId}`)
//             .then(response => response.json())
//             .then(data => {
//                 setUserIsPremium(data.isPremium);
//                 setLeadsViewed(data.leadsViewed);
//                 console.log('Premium Status:', data.isPremium);
//             })
//             .catch(error => {
//                 console.error('Error fetching user information:', error);
//             });
//     }, [userId]);

//     const toggleNumber = async (index) => {
//         if (!userIsPremium) return; // Only premium users can see numbers

//         if (leadsViewed >= 25) {
//             alert('You have reached the limit of 25 leads viewed per month.');
//             return;
//         }

//         if (shownNumbers.includes(index)) return; // If already shown, do nothing

//         const updatedShownNumbers = [...shownNumbers, index];
//         setShownNumbers(updatedShownNumbers);

//         // Update local storage
//         localStorage.setItem(`onionViewedLeads_${userId}`, JSON.stringify(updatedShownNumbers));

//         const buyer = OnionBuys[index]; // Get the buyer information

//         try {

//             const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/incrementLeadsViewed/${userId}`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ buyerName: buyer.buyerName, mobileNo: buyer.mobileNo })
//             });


//             if (response.ok) {
//                 const data = await response.json();
//                 setLeadsViewed(data.leadsViewed);
//             } else {
//                 const errorData = await response.json();
//                 console.error('Error incrementing leads viewed:', errorData.error);
//             }
//         } catch (error) {
//             console.error('Error incrementing leads viewed:', error.message);
//         }
//     };

//     return (
//         <>
//             <div className="container">
//                 <ol className="breadcrumb">

//                     <li style={{ display: 'flex', justifyContent: 'center', margin: '5px 30px' }} className="breadcrumb-item">
//                         <Link to={'/'}>Home</Link>
//                     </li>
//                     <li style={{ display: 'flex', justifyContent: 'center', margin: '5px -25px' }}>/</li>
//                     <li style={{ display: 'flex', justifyContent: 'center', margin: '5px 30px' }} className="breadcrumb-item active">Fresh Leads</li>
//                 </ol>
//             </div>
//             <div className="containersx">
//                 <div style={{ width: '200px', padding: '10px' }} className="browsers">
//                     <h3 style={{ marginTop: '30px' }}>Browse by State</h3>
//                     <ul className="flt-list cust-scroll" id="state-lists">
//                         <li><Link to="#">All India</Link></li>
//                         <li><Link to="#">Delhi</Link></li>
//                         <li><Link to="#">Maharashtra</Link></li>
//                         <li><Link to="#">Karnataka</Link></li>
//                         <li><Link to="#">West Bengal</Link></li>
//                         <li><Link to="#">Tamil Nadu</Link></li>
//                     </ul>




//                     <ul style={{ marginTop: '20px' }} className="flt-list cust-scroll">
//                         <h3>All Category</h3>
//                         <li><Link to="#">Fresh Onion</Link></li>
//                         <li><Link to="#">Red Onion</Link></li>
//                         <li><Link to="#">Yellow Onion</Link></li>
//                         <li><Link to="#">Green Onion</Link></li>

//                     </ul>
//                 </div>
//                 <div className="buyers">
//                     {OnionBuys.map((buyer, index) => (
//                         <div key={index} className="buyer-card">
//                             <h2 style={{ color: 'red' }}> {buyer.lookingFor}</h2>
//                             <p><strong>Buyer Name:</strong> {buyer.buyerName}</p>
//                             <p><strong>Requrement:</strong> {buyer.unit}</p>
//                             <p><strong>Location & Date:</strong> {buyer.location}</p>
//                             <div style={{ display: 'flex', gap: '10px' }}>
//                                 <p>
//                                     <strong>Mobile No.:</strong> {userIsPremium ? (shownNumbers.includes(index) ? buyer.mobileNo : '********') : '********'}
//                                 </p>


//                                 {userIsPremium && (
//                                     <button
//                                         className="detail-btn"
//                                         style={{
//                                             padding: '5px 10px',
//                                             color: '#000',
//                                             background: '#f7f1f1',
//                                             color: 'orange',
//                                             borderRadius: '3px',
//                                             cursor: 'pointer',
//                                         }}
//                                         onClick={() => toggleNumber(index)}
//                                     >
//                                         Click to see
//                                     </button>
//                                 )}
//                             </div>
//                             <div className='btns-imp'>
//                                 <Link to={'/login'}>
//                                     <button
//                                         className="detailing-btn"


//                                     >
//                                         View More
//                                     </button>
//                                 </Link>
//                                 <Link to={'/register-Company'}>
//                                     <button
//                                         className="regis-btn"


//                                     >
//                                         Register Now
//                                     </button>
//                                 </Link>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="sidebar">
//                     <div className="mains-slide">
//                         <div className="tk23-hkCont_onergt">
//                             <div className="tk23-hkCont_premserv__box">
//                                 <h1 className="tk23-hkCont_premserv__ttl">Our Membership Plans</h1>
//                                 <div className="tk23-hkCont_premserv__list">
//                                     <Link to={'/packages'}>
//                                         <div className="tk23-hkCont_premservs">
//                                             <span className='fontss' style={{ backgroundColor: '#fff' }}>Standard Plan</span>
//                                         </div>
//                                     </Link>
//                                 </div>
//                                 <div className="tk23-hkCont_premserv__list">
//                                     <Link to={'/packages'}>
//                                         <div className="tk23-hkCont_premservs">
//                                             <span className='fontss' style={{ backgroundColor: '#fff' }}>Advance Plan</span>
//                                         </div>
//                                     </Link>
//                                 </div>
//                                 <div className="tk23-hkCont_premserv__list">
//                                     <Link to={'/packages'}>
//                                         <div className="tk23-hkCont_premservs">
//                                             <span className='fontss' style={{ backgroundColor: '#fff' }}>Premium Plan</span>
//                                         </div>
//                                     </Link>
//                                     <Link to={'/packages'}>
//                                         <div className="reach">
//                                             <span className="reahhere">Call Now</span>
//                                         </div>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 </div>

//                 <Whyglobal />
//             </div>

//         </>
//     );
// };

// export default OnionBuy;


// import React, { useState, useEffect } from 'react';
// import './OnionBuy.css'; // Assuming the same CSS file can be used, otherwise create a new CSS file.
// import { useAuth } from './AuthContext';
// import { Link } from 'react-router-dom';
// import Whyglobal from '../Components/Whyglobal';

// const OnionBuys = [
//     {
//         "buyerName": "Jagdish Ashok Kamble",
//         "email": "jagdishkamble55@gmail.com",
//         "mobileNumber": "8369474981",
//         "locationandDate": "29-06-2024",
//         "lookingFor": "Reselling Purpose onion required",
//         "productOrService": "green onion",
//         "quantity": 10,
//         "unit": "Ton"
//     },
//     {
//         "buyerName": "Rajesh Kumar",
//         "email": "smartyruhan1437@gmail.com",
//         "mobileNumber": "7283030060",
//         "locationandDate": "29-06-2024",
//         "lookingFor": "Urgently required onion",
//         "productOrService": "red onion",
//         "quantity": 100,
//         "unit": "kg"
//     },
//     {
//         "buyerName": "Amit Sharma",
//         "email": "amit10sharma1986@gmail.com",
//         "mobileNumber": "9015005102",
//         "locationandDate": "29-06-2024",
//         "lookingFor": "Fresh onion",
//         "productOrService": "green onion",
//         "quantity": 200,
//         "unit": "kg"
//     },
//     {
//         "title": "Looking for Fresh Onions",
//         "locationandDate": "21-06-2024",
//         "buyerName": "Zack",
//         "mobileNo": "+91-9899899988",
//         "quantity": "1 Container (20 Feet)",
//         "requirement": "Urgent",
//         "purpose": "Reselling",
//         "onionType": "green onion",
//         "packagingSize": "25 kg",
//         "paymentMode": "Bank Transfer"
//     },
//     {
//         "title": "Looking for Fresh Red Onions",
//         "locationandDate": "22-06-2024",
//         "buyerName": "Cyan",
//         "mobileNo": "+91-990909099",
//         "quantity": "1 Metric Ton",
//         "requirement": "Urgent",
//         "purpose": "Reselling",
//         "onionType": "red onion"
//     },
//     {
//         "title": "Looking for Nashik Onions",
//         "locationandDate": "23-06-2024",
//         "buyerName": "Kaushik",
//         "mobileNo": "+91-98909099",
//         "quantity": "200 Kilograms",
//         "requirement": "Urgent",
//         "purpose": "Reselling",
//         "onionType": "green onion"
//     },
//     {
//         "title": "Looking for Nashik Onions",
//         "locationandDate": "22-06-2024",
//         "buyerName": "Raghav",
//         "mobileNo": "+91-5453539099",
//         "quantity": "2000 Kilograms",
//         "requirement": "Urgent",
//         "purpose": "Reselling",
//         "onionType": "red onion"
//     },
//     {
//         "title": "Looking for Nashik Onions",
//         "locationandDate": "23-06-2024",
//         "buyerName": "Pimal",
//         "mobileNo": "+91-3535353539",
//         "quantity": "2000 Kilograms",
//         "requirement": "Urgent",
//         "purpose": "Reselling",
//         "onionType": "green onion"
//     }
// ];

// const OnionBuy = () => {
//     const { userId } = useAuth();
//     const [userIsPremium, setUserIsPremium] = useState(false);
//     const [shownNumbers, setShownNumbers] = useState([]);
//     const [leadsViewed, setLeadsViewed] = useState(0);

//     useEffect(() => {
//         if (!userId) return;

//         // Load the viewed leads from local storage
//         const storedViewedLeads = JSON.parse(localStorage.getItem(`onionViewedLeads_${userId}`)) || [];
//         setShownNumbers(storedViewedLeads);

//         fetch(`${process.env.REACT_APP_API_ENDPOINT}/getUserWithPremiumStatus/${userId}`)
//             .then(response => response.json())
//             .then(data => {
//                 setUserIsPremium(data.isPremium);
//                 setLeadsViewed(data.leadsViewed);
//                 console.log('Premium Status:', data.isPremium);
//             })
//             .catch(error => {
//                 console.error('Error fetching user information:', error);
//             });
//     }, [userId]);

//     const toggleNumber = async (index) => {
//         if (!userIsPremium) return; // Only premium users can see numbers

//         if (leadsViewed >= 25) {
//             alert('You have reached the limit of 25 leads viewed per month.');
//             return;
//         }

//         if (shownNumbers.includes(index)) return; // If already shown, do nothing

//         const updatedShownNumbers = [...shownNumbers, index];
//         setShownNumbers(updatedShownNumbers);

//         // Update local storage
//         localStorage.setItem(`onionViewedLeads_${userId}`, JSON.stringify(updatedShownNumbers));

//         const buyer = OnionBuys[index]; // Get the buyer information

//         try {
//             const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/incrementLeadsViewed/${userId}`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ buyerName: buyer.buyerName, mobileNo: buyer.mobileNumber })
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 setLeadsViewed(data.leadsViewed);
//             } else {
//                 const errorData = await response.json();
//                 console.error('Error incrementing leads viewed:', errorData.error);
//             }
//         } catch (error) {
//             console.error('Error incrementing leads viewed:', error.message);
//         }
//     };

//     return (
//         <>
//             <div className="container">
//                 <ol className="breadcrumb">
//                     <li style={{ display: 'flex', justifyContent: 'center', margin: '5px 30px' }} className="breadcrumb-item">
//                         <Link to={'/'}>Home</Link>
//                     </li>
//                     <li style={{ display: 'flex', justifyContent: 'center', margin: '5px -25px' }}>/</li>
//                     <li style={{ display: 'flex', justifyContent: 'center', margin: '5px 30px' }} className="breadcrumb-item active">Fresh Leads</li>
//                 </ol>
//             </div>
//             <div className="containersx">
//                 <div style={{ width: '200px', padding: '10px' }} className="browsers">
//                     <h3 style={{ marginTop: '30px' }}>Browse by State</h3>
//                     <ul className="flt-list cust-scroll" id="state-lists">
//                         <li><Link to="#">All India</Link></li>
//                         <li><Link to="#">Delhi</Link></li>
//                         <li><Link to="#">Maharashtra</Link></li>
//                         <li><Link to="#">Karnataka</Link></li>
//                         <li><Link to="#">West Bengal</Link></li>
//                         <li><Link to="#">Tamil Nadu</Link></li>
//                     </ul>

//                     <ul style={{ marginTop: '20px' }} className="flt-list cust-scroll">
//                         <h3>All Category</h3>
//                         <li><Link to="#">Green Onion</Link></li>
//                         <li><Link to="#">Red Onion</Link></li>
//                         {/* Add more categories here as needed */}
//                     </ul>
//                 </div>
//                 <div className="buyers">
//                     {OnionBuys.map((buyer, index) => (
//                         <div key={index} className="buyer-card">
//                             <h2 style={{ color: 'red' }}>{buyer.lookingFor}</h2>
//                             {/* <p>{buyer.productOrService}</p> */}
//                             <p><strong>Buyer Name:</strong> {buyer.buyerName}</p>
//                             <p><strong>Quantity:</strong> {buyer.quantity} {buyer.unit}</p>
//                             <p><strong>Date:</strong> {buyer.locationandDate}</p>
//                             <p><strong>Mobile No.:</strong> {userIsPremium ? (shownNumbers.includes(index) ? buyer.mobileNumber : '********') : '********'}</p>
//                             <div style={{ display: 'flex', gap: '10px' }}>
//                                 {userIsPremium && (
//                                     <button
//                                         className="detail-btn"
//                                         style={{
//                                             padding: '5px 10px',
//                                             background: '#f7f1f1',
//                                             color: 'orange',
//                                             borderRadius: '3px',
//                                             cursor: 'pointer',
//                                         }}
//                                         onClick={() => toggleNumber(index)}
//                                     >
//                                         Click to see
//                                     </button>
//                                 )}
//                             </div>
//                             <div className='btns-imp'>
//                                 <Link to={'/login'}>
//                                     <button className="detailing-btn">View More</button>
//                                 </Link>
//                                 <Link to={'/register-Company'}>
//                                     <button className="regis-btn">Register Now</button>
//                                 </Link>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div style={{ clear: 'both' }}></div>
//             <Whyglobal />
//         </>
//     );
// };

// export default OnionBuy;

import React, { useState, useEffect } from 'react';
import './OnionBuy.css'; // Assuming the same CSS file can be used, otherwise create a new CSS file.
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';
import Whyglobal from '../Components/Whyglobal';

const OnionBuys = [
    {
        "name": "VISHAL KUMAR",
        "email": "vishalbubu0000@gmail.com",
        "mobileNumber": "8936813450",
        "locationandDate": "Gopalganj, Bihar, 23-08-2024",
        "lookingFor": "Looking for high-quality Onion suppliers!",
        "productOrService": "Onion",
        "quantity": 4,
        "unit": "tons",
        "_id": "unique_id_for_onion_buyer"
    },

    {
        "name": "POKAR MEHULKUMAR PRAVINBHAI",
        "email": "pokarmehul2011@gmail.com",
        "mobileNumber": "9904038124",
        "lookingFor": "Required for bulk supply",
        "locationandDate": "ahmedabad 12-07-2024",
        "productOrService": "onion",
        "quantity": 25,
        "unit": "ton",
        "__v": 0
    }
    ,
    {
        "name": "Basha",
        "email": "indiamarketing24@gmail.com",
        "mobileNumber": "9846020989",
        "lookingFor": "Need onion in bulk.",
        "locationandDate": "Palakkad 12-07-2024",
        "productOrService": "ONION",
        "quantity": 25,
        "unit": "ton",
        "__v": 0
    },

    {
        "name": "Jagdish Ashok Kamble",
        "email": "jagdishkamble55@gmail.com",
        "mobileNumber": "8369474981",
        "lookingFor": "Reselling Purpose onion required",
        "locationandDate": "29-06-2024",
        "productOrService": "green onion",
        "quantity": 10,
        "unit": "Ton",
        "__v": 0
    },
    {
        "name": "Rajesh Kumar",
        "email": "smartyruhan1437@gmail.com",
        "mobileNumber": "7283030060",
        "lookingFor": "Urgently required onion",
        "locationandDate": "29-06-2024",
        "productOrService": "red onion",
        "quantity": 100,
        "unit": "kg",
        "__v": 0
    },
    {
        "name": "Amit Sharma",
        "email": "amit10sharma1986@gmail.com",
        "mobileNumber": "9015005102",
        "lookingFor": "Fresh onion",
        "locationandDate": "29-06-2024",
        "productOrService": "green onion",
        "quantity": 200,
        "unit": "kg",
        "__v": 0
    }

];

const OnionBuy = () => {
    const { userId } = useAuth();
    const [userIsPremium, setUserIsPremium] = useState(false);
    const [shownNumbers, setShownNumbers] = useState([]);
    const [leadsViewed, setLeadsViewed] = useState(0);

    useEffect(() => {
        if (!userId) return;

        // Load the viewed leads from local storage
        const storedViewedLeads = JSON.parse(localStorage.getItem(`onionViewedLeads_${userId}`)) || [];
        setShownNumbers(storedViewedLeads);

        fetch(`${process.env.REACT_APP_API_ENDPOINT}/getUserWithPremiumStatus/${userId}`)
            .then(response => response.json())
            .then(data => {
                setUserIsPremium(data.isPremium);
                setLeadsViewed(data.leadsViewed);
                console.log('Premium Status:', data.isPremium);
            })
            .catch(error => {
                console.error('Error fetching user information:', error);
            });
    }, [userId]);

    const toggleNumber = async (index) => {
        if (!userIsPremium) return; // Only premium users can see numbers

        if (leadsViewed >= 25) {
            alert('You have reached the limit of 25 leads viewed per month.');
            return;
        }

        if (shownNumbers.includes(index)) return; // If already shown, do nothing

        const updatedShownNumbers = [...shownNumbers, index];
        setShownNumbers(updatedShownNumbers);

        // Update local storage
        localStorage.setItem(`onionViewedLeads_${userId}`, JSON.stringify(updatedShownNumbers));

        const buyer = OnionBuys[index]; // Get the buyer information

        try {
            const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/incrementLeadsViewed/${userId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ buyerName: buyer.name, mobileNo: buyer.mobileNumber })
            });

            if (response.ok) {
                const data = await response.json();
                setLeadsViewed(data.leadsViewed);
            } else {
                const errorData = await response.json();
                console.error('Error incrementing leads viewed:', errorData.error);
            }
        } catch (error) {
            console.error('Error incrementing leads viewed:', error.message);
        }
    };

    return (
        <>
            <div className="container">
                <ol className="breadcrumb">
                    <li style={{ display: 'flex', justifyContent: 'center', margin: '5px 30px' }} className="breadcrumb-item">
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li style={{ display: 'flex', justifyContent: 'center', margin: '5px -25px' }}>/</li>
                    <li style={{ display: 'flex', justifyContent: 'center', margin: '5px 30px' }} className="breadcrumb-item active">Fresh Leads</li>
                </ol>
            </div>
            <div className="containersx">
                <div style={{ width: '200px', padding: '10px' }} className="browsers">
                    <h3 style={{ marginTop: '30px' }}>Browse by State</h3>
                    <ul className="flt-list cust-scroll" id="state-lists">
                        <li><Link to="#">All India</Link></li>
                        <li><Link to="#">Delhi</Link></li>
                        <li><Link to="#">Maharashtra</Link></li>
                        <li><Link to="#">Karnataka</Link></li>
                        <li><Link to="#">West Bengal</Link></li>
                        <li><Link to="#">Tamil Nadu</Link></li>
                    </ul>

                    <ul style={{ marginTop: '20px' }} className="flt-list cust-scroll">
                        <h3>All Category</h3>
                        <li><Link to="#">Peanuts</Link></li>
                        <li><Link to="#">Rice</Link></li>
                        <li><Link to="#">Wheat</Link></li>
                        <li><Link to="#">Barley</Link></li>
                        <li><Link to="#">Soybean</Link></li>
                    </ul>
                </div>
                <div className="buyers">
                    {OnionBuys.map((buyer, index) => (
                        <div key={index} className="buyer-card">
                            <h2 style={{ color: 'green' }}>{buyer.lookingFor}</h2>
                            <p><strong>Buyer Name:</strong> {buyer.name}</p>
                            <p><strong>Quantity:</strong> {buyer.quantity} {buyer.unit}</p>
                            <p><strong>Location & Date:</strong> {buyer.locationandDate}</p>
                            <p><strong>Mobile No.:</strong> {userIsPremium ? (shownNumbers.includes(index) ? buyer.mobileNumber : '********') : '********'}</p>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                {userIsPremium && (
                                    <button
                                        className="detail-btn"
                                        style={{
                                            padding: '5px 10px',
                                            background: '#f7f1f1',
                                            color: 'orange',
                                            borderRadius: '3px',
                                            cursor: 'pointer',
                                        }}
                                        onClick={() => toggleNumber(index)}
                                    >
                                        Click to see
                                    </button>
                                )}
                            </div>
                            <div className='btns-imp'>
                                <Link to={'/login'}>
                                    <button className="detailing-btn">View More</button>
                                </Link>
                                <Link to={'/register-Company'}>
                                    <button className="regis-btn">Register Now</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="sidebar">
                    <div className="mains-slide">
                        <div className="tk23-hkCont_onergt">
                            <div className="tk23-hkCont_premserv__box">
                                <h1 className="tk23-hkCont_premserv__ttl">Our Membership Plans</h1>
                                <div className="tk23-hkCont_premserv__list">
                                    <Link to={'/packages'}>
                                        <div className="tk23-hkCont_premservs">
                                            <span className='fontss' style={{ backgroundColor: '#fff' }}>Standard Plan</span>
                                        </div>
                                    </Link>
                                </div>
                                <div className="tk23-hkCont_premserv__list">
                                    <Link to={'/packages'}>
                                        <div className="tk23-hkCont_premservs">
                                            <span className='fontss' style={{ backgroundColor: '#fff' }}>Advance Plan</span>
                                        </div>
                                    </Link>
                                </div>
                                <div className="tk23-hkCont_premserv__list">
                                    <Link to={'/packages'}>
                                        <div className="tk23-hkCont_premservs">
                                            <span className='fontss' style={{ backgroundColor: '#fff' }}>Premium Plan</span>
                                        </div>
                                    </Link>
                                    <Link to={'/packages'}>
                                        <div className="reach">
                                            <span className="reahhere">Call Now</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Whyglobal />
            </div>
        </>
    );
};

export default OnionBuy;
