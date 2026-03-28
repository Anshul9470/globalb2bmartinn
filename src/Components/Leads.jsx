// // import React, { useState } from 'react';
// // import axios from 'axios'; // Import Axios
// // import './leads.css';

// // const Leads = () => {
// // const [formSubmitted, setFormSubmitted] = useState(false);

// // const handleSubmit = async (event) => {
// //     event.preventDefault();

// //     const formData = {
// //         name: event.target.name.value,
// //         mobile: event.target.mobile.value,
// //         email: event.target.email.value,
// //         companyName: event.target.company.value,
// //         userType: event.target.userType.value
// //     };

// //     try {
// //         // Make a POST request to the API endpoint
// //         await axios.post('http://localhost:3005/submit-form', formData);
// //         setFormSubmitted(true);

// //         event.target.reset();
// //     } catch (error) {
// //         console.error('Error submitting form:', error);

// //     }
// // };

// //     return (
// //         <div className="leads-container">
// //             <div className="box-round buylead-wrap">
// //                 <div className="sect-head">
// //                     <h2 className="title">Fresh Leads</h2>
// //                 </div>
// //                 <div className="buylead-scroll">
// //                     <div className="buylead-scroll">
// //                         <div className="buylead">
// //                             <div className="item">
// //                                 <div className="buylead-box">
// //                                     <div className="title">
// //                                         <div>
// //                                             <span onclick="/">
// //                                                 Rice{" "}
// //                                             </span>
// //                                         </div>
// //                                     </div>
// //                                     <div className="location">
// //                                         <div className="buylead-country">
// //                                             <figure>
// //                                                 <img
// //                                                     src="./assets/flag.svg"
// //                                                     alt="India"
// //                                                     width={28}
// //                                                     height={21}
// //                                                     loading="lazy"
// //                                                 />
// //                                             </figure>
// //                                             <div className="country">India</div>
// //                                         </div>
// //                                     </div>
// //                                     <div className="action">
// //                                         <span
// //                                             className="btn"
// //                                             onclick="/"
// //                                         >
// //                                             View Details
// //                                         </span>
// //                                         <div className="post-date">2024-05-13</div>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                             <div className="item">
// //                                 <div className="buylead-box">
// //                                     <div className="title">
// //                                         <div>
// //                                             <span onclick="/">
// //                                                 Potatoes{" "}
// //                                             </span>
// //                                         </div>
// //                                     </div>
// //                                     <div className="location">
// //                                         <div className="buylead-country">
// //                                             <figure>
// //                                                 <img
// //                                                     src="./assets/flag.svg"
// //                                                     alt="India"
// //                                                     width={28}
// //                                                     height={21}
// //                                                     loading="lazy"
// //                                                 />
// //                                             </figure>
// //                                             <div className="country">India</div>
// //                                         </div>
// //                                     </div>
// //                                     <div className="action">
// //                                         <span
// //                                             className="btn"
// //                                             onclick="/"
// //                                         >
// //                                             View Details
// //                                         </span>
// //                                         <div className="post-date">2024-05-13</div>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                             <div className="item">
// //                                 <div className="buylead-box">
// //                                     <div className="title">
// //                                         <div>
// //                                             <span onclick="/">
// //                                                 Ghee{" "}
// //                                             </span>
// //                                         </div>
// //                                     </div>
// //                                     <div className="location">
// //                                         <div className="buylead-country">
// //                                             <figure>
// //                                                 <img
// //                                                     src="./assets/flag.svg"
// //                                                     alt="India"
// //                                                     width={28}
// //                                                     height={21}
// //                                                     loading="lazy"
// //                                                 />
// //                                             </figure>
// //                                             <div className="country">India</div>
// //                                         </div>
// //                                     </div>
// //                                     <div className="action">
// //                                         <span
// //                                             className="btn"
// //                                             onclick="/"
// //                                         >
// //                                             View Details
// //                                         </span>
// //                                         <div className="post-date">2024-05-13</div>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                             <div className="item">
// //                                 <div className="buylead-box">
// //                                     <div className="title">
// //                                         <div>
// //                                             <span onclick="/">
// //                                                 Cigarettes{" "}
// //                                             </span>
// //                                         </div>
// //                                     </div>
// //                                     <div className="location">
// //                                         <div className="buylead-country">
// //                                             <figure>
// //                                                 <img
// //                                                     src="./assets/flag.svg"
// //                                                     alt="India"
// //                                                     width={28}
// //                                                     height={21}
// //                                                     loading="lazy"
// //                                                 />
// //                                             </figure>
// //                                             <div className="country">India</div>
// //                                         </div>
// //                                     </div>
// //                                     <div className="action">
// //                                         <span
// //                                             className="btn"
// //                                             onclick="/"
// //                                         >
// //                                             View Details
// //                                         </span>
// //                                         <div className="post-date">2024-05-13</div>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                             <div className="item">
// //                                 <div className="buylead-box">
// //                                     <div className="title">
// //                                         <div>
// //                                             <span onclick="/">
// //                                                 Chemicals{" "}
// //                                             </span>
// //                                         </div>
// //                                     </div>
// //                                     <div className="location">
// //                                         <div className="buylead-country">
// //                                             <figure>
// //                                                 <img
// //                                                     src="./assets/flag.svg"
// //                                                     alt="India"
// //                                                     width={28}
// //                                                     height={21}
// //                                                     loading="lazy"
// //                                                 />
// //                                             </figure>
// //                                             <div className="country">India</div>
// //                                         </div>
// //                                     </div>
// //                                     <div className="action">
// //                                         <span
// //                                             className="btn"
// //                                             onclick="/"
// //                                         >
// //                                             View Details
// //                                         </span>
// //                                         <div className="post-date">2024-05-13</div>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                             <div className="item">
// //                                 <div className="buylead-box">
// //                                     <div className="title">
// //                                         <div>
// //                                             <span onclick="/">
// //                                                 Air Handling Units{" "}
// //                                             </span>
// //                                         </div>
// //                                     </div>
// //                                     <div className="location">
// //                                         <div className="buylead-country">
// //                                             <figure>
// //                                                 <img
// //                                                     src="./assets/flag.svg"
// //                                                     alt="India"
// //                                                     width={28}
// //                                                     height={21}
// //                                                     loading="lazy"
// //                                                 />
// //                                             </figure>
// //                                             <div className="country">India</div>
// //                                         </div>
// //                                     </div>
// //                                     <div className="action">
// //                                         <span
// //                                             className="btn"
// //                                             onclick="/"
// //                                         >
// //                                             View Details
// //                                         </span>
// //                                         <div className="post-date">2024-05-13</div>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                             <div className="item">
// //                                 <div className="buylead-box">
// //                                     <div className="title">
// //                                         <div>
// //                                             <span onclick="/">
// //                                                 Thin Cutting Grinding Whe{" "}
// //                                             </span>
// //                                         </div>
// //                                     </div>
// //                                     <div className="location">
// //                                         <div className="buylead-country">
// //                                             <figure>
// //                                                 <img
// //                                                     src="./assets/flag.svg"
// //                                                     alt="India"
// //                                                     width={28}
// //                                                     height={21}
// //                                                     loading="lazy"
// //                                                 />
// //                                             </figure>
// //                                             <div className="country">India</div>
// //                                         </div>
// //                                     </div>
// //                                     <div className="action">
// //                                         <span
// //                                             className="btn"
// //                                             onclick="/"
// //                                         >
// //                                             View Details
// //                                         </span>
// //                                         <div className="post-date">2024-05-13</div>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                             <div className="item">
// //                                 <div className="buylead-box">
// //                                     <div className="title">
// //                                         <div>
// //                                             <span onclick="/">
// //                                                 Ems 907 Generator Control{" "}
// //                                             </span>
// //                                         </div>
// //                                     </div>
// //                                     <div className="location">
// //                                         <div className="buylead-country">
// //                                             <figure>
// //                                                 <img
// //                                                     src="./assets/flag.svg"
// //                                                     alt="India"
// //                                                     width={28}
// //                                                     height={21}
// //                                                     loading="lazy"
// //                                                 />
// //                                             </figure>
// //                                             <div className="country">India</div>
// //                                         </div>
// //                                     </div>
// //                                     <div className="action">
// //                                         <span
// //                                             className="btn"
// //                                             onclick="/"
// //                                         >
// //                                             View Details
// //                                         </span>
// //                                         <div className="post-date">2024-05-13</div>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //             <div className="form-wrap">

// //                 <h2 style={{ margin: '0px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Post Your Requirement</h2>
// //                 {formSubmitted && (
// //                     <p style={{ textAlign: 'center', color: 'green' }}>Form submitted successfully!</p>
// //                 )}
// //                 <form onSubmit={handleSubmit}>
// //                     <div className="form-group">
// //                         <label htmlFor="name">Name:</label>
// //                         <input className='form-input' type="text" required id="name" name="name" />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="mobile">Mobile Number:</label>
// //                         <input className='form-input' type="tel" required id="mobile" name="mobile" />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="email">Email:</label>
// //                         <input className='form-input' type="email" required id="email" name="email" />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="company">Company Name:</label>
// //                         <input className='form-input' type="text" required id="company" name="company" />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="userType">Select User Type:</label>
// //                         <select id="userType" name="userType" className="form-control" required>
// //                             <option value="">Select User Type</option>
// //                             <option value="seller">Seller</option>
// //                             <option value="buyer">Buyer</option>
// //                         </select>
// //                     </div>
// //                     <button type="submit">Submit</button>
// //                 </form>
// //             </div>
// //         </div>
// //     );
// // }

// // export default Leads;
// // import React, { useState } from 'react';
// // import axios from 'axios'; // Import Axios
// // import './leads.css';

// // const Leads = () => {
// //     const [formSubmitted, setFormSubmitted] = useState(false);

// //     const handleSubmit = async (event) => {
// //         event.preventDefault();

// //         const formData = {
// //             name: event.target.name.value,
// //             mobile: event.target.mobile.value,
// //             email: event.target.email.value,
// //             companyName: event.target.company.value,
// //             userType: event.target.userType.value
// //         };

// //         try {
// //             // Make a POST request to the API endpoint
// //             await axios.post('http://localhost:3005/submit-form', formData);
// //             setFormSubmitted(true);

// //             event.target.reset();
// //         } catch (error) {
// //             console.error('Error submitting form:', error);

// //         }
// //     };

// //     const leadsData = [
// //         {
// //             title: "Rice",
// //             country: "India",
// //             postDate: "2024-05-13"
// //         },
// //         {
// //             title: "Potatoes",
// //             country: "India",
// //             postDate: "2024-05-13"
// //         },
// //         {
// //             title: "Ghee",
// //             country: "India",
// //             postDate: "2024-05-13"
// //         },
// //         {
// //             title: "Cigarettes",
// //             country: "India",
// //             postDate: "2024-05-13"
// //         },
// //         {
// //             title: "Chemicals",
// //             country: "India",
// //             postDate: "2024-05-13"
// //         },
// //         // {
// //         //     title: "Air Handling Units",
// //         //     country: "India",
// //         //     postDate: "2024-05-13"
// //         // },
// //         // {
// //         //     title: "Thin Cutting Grinding Whe",
// //         //     country: "India",
// //         //     postDate: "2024-05-13"
// //         // },
// //         // {
// //         //     title: "Ems 907 Generator Control",
// //         //     country: "India",
// //         //     postDate: "2024-05-13"
// //         // }
// //     ];

// //     return (
// //         <div className="leads-container">
// //             <div className="box-round buylead-wrap">
// //                 <div className="sect-head">
// //                     <h2 className="title">Fresh Leads</h2>
// //                 </div>
// //                 <div className="buylead-scroll">
// //                     <div className="buylead">
// //                         {leadsData.map((lead, index) => (
// //                             <div className="item" key={index}>
// //                                 <div className="buylead-box">
// //                                     <div className="title">
// //                                         <div>
// //                                             <span onClick={() => { window.location.href = '/' }}>
// //                                                 {lead.title}
// //                                             </span>
// //                                         </div>
// //                                     </div>
// //                                     <div className="location">
// //                                         <div className="buylead-country">
// //                                             <figure>
// //                                                 <img
// //                                                     src="./assets/flag.svg"
// //                                                     alt={lead.country}
// //                                                     width={28}
// //                                                     height={21}
// //                                                     loading="lazy"
// //                                                 />
// //                                             </figure>
// //                                             <div className="country">{lead.country}</div>
// //                                         </div>
// //                                     </div>
// //                                     <div className="action">
// //                                         <span
// //                                             className="btn"
// //                                             onClick={() => { window.location.href = '/' }}
// //                                         >
// //                                             View Details
// //                                         </span>
// //                                         <div className="post-date">{lead.postDate}</div>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         ))}
// //                     </div>

// //                 </div>
// //             </div>
// //             <div className="form-wrap">

// //                 <h2 style={{ margin: '0px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Post Your Requirement</h2>
// //                 {formSubmitted && (
// //                     <p style={{ textAlign: 'center', color: 'green' }}>Form submitted successfully!</p>
// //                 )}
// //                 <form onSubmit={handleSubmit}>
// //                     <div className="form-group">
// //                         <label htmlFor="name">Name:</label>
// //                         <input className='form-input' type="text" required id="name" name="name" />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="mobile">Mobile Number:</label>
// //                         <input className='form-input' type="tel" required id="mobile" name="mobile" />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="email">Email:</label>
// //                         <input className='form-input' type="email" required id="email" name="email" />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="company">Company Name:</label>
// //                         <input className='form-input' type="text" required id="company" name="company" />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="userType">Select User Type:</label>
// //                         <select id="userType" name="userType" className="form-control" required>
// //                             <option value="">Select User Type</option>
// //                             <option value="seller">Seller</option>
// //                             <option value="buyer">Buyer</option>
// //                         </select>
// //                     </div>
// //                     <button type="submit">Submit</button>
// //                 </form>
// //             </div>

// //         </div>
// //     );
// // };

// // export default Leads;
// // import React, { useState } from 'react';
// // import axios from 'axios'; // Import Axios
// // import './leads.css';
// // import { Swiper, SwiperSlide } from 'swiper/react';
// // import 'swiper/css';
// // import 'swiper/css/pagination';
// // import 'swiper/css/navigation';
// // import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// // const Leads = () => {
// //     const [formSubmitted, setFormSubmitted] = useState(false);

// //     const handleSubmit = async (event) => {
// //         event.preventDefault();
// //         const formData = {
// //             name: event.target.name.value,
// //             mobile: event.target.mobile.value,
// //             email: event.target.email.value,
// //             companyName: event.target.company.value,
// //             userType: event.target.userType.value
// //         };

// //         try {
// //             // Make a POST request to the API endpoint
// //             // await axios.post('http://localhost:3005/submit-form', formData);
// //             await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/submit-form`, formData);
// //             setFormSubmitted(true);
// //             setFormSubmitted(true);
// //             event.target.reset();
// //         } catch (error) {
// //             console.error('Error submitting form:', error);
// //         }
// //     };

// //     const leadsData = [
// //         {
// //             title: "Rice",
// //             country: "India",
// //             postDate: "2024-05-13"
// //         },
// //         {
// //             title: "Potatoes",
// //             country: "India",
// //             postDate: "2024-05-13"
// //         },
// //         {
// //             title: "Ghee",
// //             country: "India",
// //             postDate: "2024-05-13"
// //         },
// //         {
// //             title: "Cigarettes",
// //             country: "India",
// //             postDate: "2024-05-13"
// //         },
// //         {
// //             title: "Chemicals",
// //             country: "India",
// //             postDate: "2024-05-13"
// //         },
// //         {
// //             title: "Air Handling Units",
// //             country: "India",
// //             postDate: "2024-05-13"
// //         },
// //         {
// //             title: "Thin Cutting ",
// //             country: "India",
// //             postDate: "2024-05-13"
// //         },
// //         {
// //             title: "Ems 907 Generator ",
// //             country: "India",
// //             postDate: "2024-05-13"
// //         }, {
// //             title: "Cigarettes",
// //             country: "India",
// //             postDate: "2024-05-13"
// //         },
// //         {
// //             title: "Chemicals",
// //             country: "India",
// //             postDate: "2024-05-13"
// //         },
// //         {
// //             title: "Chemicals",
// //             country: "India",
// //             postDate: "2024-05-13"
// //         },
// //         {
// //             title: "Air Handling Units",
// //             country: "India",
// //             postDate: "2024-05-13"
// //         },
// //         {
// //             title: "Thin Cutting ",
// //             country: "India",
// //             postDate: "2024-05-13"
// //         },
// //         {
// //             title: "Chemicals",
// //             country: "India",
// //             postDate: "2024-05-13"
// //         },
// //         {
// //             title: "Air Handling Units",
// //             country: "India",
// //             postDate: "2024-05-13"
// //         },

// //     ];

// //     // Chunk the leads data into groups of 5
// //     const chunkSize = 5;
// //     const chunkedLeadsData = [];
// //     for (let i = 0; i < leadsData.length; i += chunkSize) {
// //         chunkedLeadsData.push(leadsData.slice(i, i + chunkSize));
// //     }

// //     return (
// //         <div className="leads-container">
// //             <div className="box-round buylead-wrap">
// //                 <div className="sect-head">
// //                     <h2 className="title">Fresh Leads</h2>
// //                 </div>
// //                 <Swiper
// //                     spaceBetween={30}
// //                     centeredSlides={true}
// //                     autoplay={{
// //                         delay: 2500,
// //                         disableOnInteraction: false,
// //                     }}
// //                     pagination={{
// //                         clickable: true,
// //                     }}
// //                     navigation={true}
// //                     modules={[Autoplay, Pagination, Navigation]}
// //                     className="mySwiper"
// //                 >
// //                     {chunkedLeadsData.map((chunk, index) => (
// //                         <SwiperSlide key={index}>

// //                             <div className="buylead-scroll" style={{ width: '100%' }}>
// //                                 <div className="buylead">
// //                                     {chunk.map((lead, leadIndex) => (
// //                                         <div className="item" key={leadIndex}>
// //                                             <div className="buylead-box">
// //                                                 <div className="title">
// //                                                     <div>
// //                                                         <span onClick={() => { window.location.href = '/' }}>
// //                                                             {lead.title}
// //                                                         </span>
// //                                                     </div>
// //                                                 </div>
// //                                                 <div className="location">
// //                                                     <div className="buylead-country">
// //                                                         <figure>
// //                                                             <img
// //                                                                 src="./assets/flag.svg"
// //                                                                 alt={lead.country}
// //                                                                 width={28}
// //                                                                 height={21}
// //                                                                 loading="lazy"
// //                                                             />
// //                                                         </figure>
// //                                                         <div className="country">{lead.country}</div>
// //                                                     </div>
// //                                                 </div>
// //                                                 <div className="action">
// //                                                     <span
// //                                                         className="btn"
// //                                                         onClick={() => { window.location.href = '/' }}
// //                                                     >
// //                                                         View Details
// //                                                     </span>
// //                                                     <div className="post-date">{lead.postDate}</div>
// //                                                 </div>
// //                                             </div>
// //                                         </div>
// //                                     ))}
// //                                 </div>
// //                             </div>
// //                         </SwiperSlide>
// //                     ))}
// //                 </Swiper>
// //             </div>
// //             <div className="form-wrap">
// //                 <h2 style={{ margin: '0px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Post Your Requirement</h2>
// //                 {formSubmitted && (
// //                     <p style={{ textAlign: 'center', color: 'green' }}>Form submitted successfully!</p>
// //                 )}
// //                 <form onSubmit={handleSubmit} style={{ marginTop: '30px' }}>
// //                     <div className="form-group">
// //                         <label htmlFor="name">Name:</label>
// //                         <input className='form-input' type="text" required id="name" name="name" />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="mobile">Mobile Number:</label>
// //                         <input className='form-input' type="tel" required id="mobile" name="mobile" />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="email">Email:</label>
// //                         <input className='form-input' type="email" required id="email" name="email" />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="company">Company Name:</label>
// //                         <input className='form-input' type="text" required id="company" name="company" />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="userType">Select User Type:</label>
// //                         <select id="userType" name="userType" className="form-control" required>
// //                             <option value="">Select User Type</option>
// //                             <option value="seller">Seller</option>
// //                             <option value="buyer">Buyer</option>
// //                         </select>
// //                     </div>
// //                     <button type="submit">Submit</button>
// //                 </form>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Leads;

// import React, { useState } from "react";
// import axios from "axios"; // Import Axios
// import "./leads.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import { Link } from "react-router-dom";

// const Leads = () => {
//   const [formSubmitted, setFormSubmitted] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = {
//       name: event.target.name.value,
//       mobile: event.target.mobile.value,
//       email: event.target.email.value,
//       companyName: event.target.company.value,
//       userType: event.target.userType.value,
//     };

//     try {
//       await axios.post(
//         `${process.env.REACT_APP_API_ENDPOINT}/submit-form`,
//         formData
//       );
//       console.log("API Endpoint:", process.env.REACT_APP_API_ENDPOINT);

//       setFormSubmitted(true);
//       event.target.reset();
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }
//   };

//   const leadsData = [
//     {
//       title: "Solar Energy Plant",
//       country: "India",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },
//     {
//       country: "India",
//       title: "Hydropower Station",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },
//     {
//       title: "Wind Turbines",
//       country: "Romania",
//       postDate: "29-10-2025",
//       imagePath: "/assets/romania.jpeg",
//     },
//     {
//       title: "Fresh potato",
//       country: "India",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },
//     {
//       title: "Organic potato",
//       country: "India",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },
//     {
//       title: "organic snacks",
//       country: "India",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },
//     {
//       title: "Brass door handles",
//       country: "India",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },
//     {
//       title: "Steel door handles ",
//       country: "India",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },
//     {
//       title: "Modern door handles ",
//       country: "India",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },

//     {
//       title: "smart locks",
//       country: "India",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },
//     {
//       title: " digital locks ",
//       country: "India",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },
//     {
//       country: "India",
//       title: "Fruit Powder",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },
//     {
//       title: "electronic locks ",
//       country: "Romania",
//       postDate: "29-10-2025",
//       imagePath: "/assets/romania.jpeg",
//     },
//     {
//       title: "Spices",
//       country: "India",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },
//     {
//       title: "salted snacks",
//       country: "India",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },
//     {
//       title: "organic snacks",
//       country: "India",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },

//     {
//       title: "T-shirts",
//       country: "India",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },
//     {
//       title: "Sports equipment ",
//       country: "India",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },
//     {
//       title: "PVC pipes",
//       country: "India",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },

//     {
//       title: "Sports T-shirts",
//       country: "India",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },
//     {
//       title: " Irrigation Pipe ",
//       country: "India",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },
//     {
//       title: "Brass Pipe Fittings",
//       country: "India",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },
//     {
//       title: "detergent powder ",
//       country: "India",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },
//     {
//       title: "liquid detergent",
//       country: "India",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },
//     {
//       title: "organic herbal teas",
//       country: "India",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },
//   ];

//   // Chunk the leads data into groups of 5
//   const chunkSize = 5;
//   const chunkedLeadsData = [];
//   for (let i = 0; i < leadsData.length; i += chunkSize) {
//     chunkedLeadsData.push(leadsData.slice(i, i + chunkSize));
//   }

//   return (
//     <div className="leads-container">
//       <div className="box-round buylead-wrap">
//         <div className="sect-head">
//           <h2 className="title">Fresh Buyers</h2>
//         </div>
//         {/* <Swiper
//           spaceBetween={30}
//           centeredSlides={true}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           pagination={{
//             clickable: true,
//           }}
//           navigation={true}
//           modules={[Autoplay, Pagination, Navigation]}
//           className="mySwiper"
//         >
//           {chunkedLeadsData.map((chunk, index) => (
//             <SwiperSlide key={index}>
//               <div className="buylead-scroll" style={{ width: "100%" }}>
//                 <div className="buylead">
//                   {chunk.map((lead, leadIndex) => (
//                     <div className="item" key={leadIndex}>
//                       <div className="buylead-box">
//                         <div className="title">
//                           <div>
//                             <span>{lead.title}</span>
//                           </div>
//                         </div>
//                         <div className="location">
//                           <div className="buylead-country">
//                             <figure>
//                               <img
//                                 src={lead.imagePath}
//                                 alt={lead.country}
//                                 width={28}
//                                 height={21}
//                                 loading="lazy"
//                               />
//                             </figure>
//                             <div className="country">{lead.country}</div>
//                           </div>
//                         </div>
//                         <div className="action">
//                           <Link to={"/login"}>
//                             <span className="btn">View Details</span>
//                           </Link>
//                           <div className="post-date">{lead.postDate}</div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper> */}

//         <Swiper
//           direction="vertical" // 👈 This makes it slide up-down
//           spaceBetween={30}
//           centeredSlides={true}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           pagination={{
//             clickable: true,
//           }}
//           navigation={true}
//           modules={[Autoplay, Pagination, Navigation]}
//           className="mySwiper"
//         >
//           {chunkedLeadsData.map((chunk, index) => (
//             <SwiperSlide key={index}>
//               <div className="buylead-scroll" style={{ width: "100%", height: "100%" }}>
//                 <div className="buylead">
//                   {chunk.map((lead, leadIndex) => (
//                     <div className="item" key={leadIndex}>
//                       <div className="buylead-box">
//                         <div className="title">
//                           <div>
//                             <span>{lead.title}</span>
//                           </div>
//                         </div>
//                         <div className="location">
//                           <div className="buylead-country">
//                             <figure>
//                               <img
//                                 src={lead.imagePath}
//                                 alt={lead.country}
//                                 width={28}
//                                 height={21}
//                                 loading="lazy"
//                               />
//                             </figure>
//                             <div className="country">{lead.country}</div>
//                           </div>
//                         </div>
//                         <div className="action">
//                           <Link to={"/login"}>
//                             <span className="btn">View Details</span>
//                           </Link>
//                           <div className="post-date">{lead.postDate}</div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//       <div className="form-wrap">
//         <h2
//           style={{
//             margin: "0px",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           Post Your Requirement
//         </h2>
//         {formSubmitted && (
//           <p style={{ textAlign: "center", color: "green" }}>
//             Form submitted successfully!
//           </p>
//         )}
//         <form onSubmit={handleSubmit} style={{ marginTop: "30px" }}>
//           <div className="form-group">
//             <label htmlFor="name">Name:</label>
//             <input
//               className="form-input"
//               type="text"
//               required
//               id="name"
//               name="name"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="mobile">Mobile Number:</label>
//             <input
//               className="form-input"
//               type="tel"
//               required
//               id="mobile"
//               name="mobile"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input
//               className="form-input"
//               type="email"
//               required
//               id="email"
//               name="email"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="company">Company Name:</label>
//             <input
//               className="form-input"
//               type="text"
//               required
//               id="company"
//               name="company"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="userType">Select User Type:</label>
//             <select
//               id="userType"
//               name="userType"
//               className="form-control"
//               required
//             >
//               <option value="">Select User Type</option>
//               <option value="seller">Seller</option>
//               <option value="buyer">Buyer</option>
//             </select>
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Leads;

// import React, { useState } from 'react';
// import axios from 'axios'; // Import Axios
// import './leads.css';

// const Leads = () => {
// const [formSubmitted, setFormSubmitted] = useState(false);

// const handleSubmit = async (event) => {
//     event.preventDefault();

//     const formData = {
//         name: event.target.name.value,
//         mobile: event.target.mobile.value,
//         email: event.target.email.value,
//         companyName: event.target.company.value,
//         userType: event.target.userType.value
//     };

//     try {
//         // Make a POST request to the API endpoint
//         await axios.post('http://localhost:3005/submit-form', formData);
//         setFormSubmitted(true);

//         event.target.reset();
//     } catch (error) {
//         console.error('Error submitting form:', error);

//     }
// };

//     return (
//         <div className="leads-container">
//             <div className="box-round buylead-wrap">
//                 <div className="sect-head">
//                     <h2 className="title">Fresh Leads</h2>
//                 </div>
//                 <div className="buylead-scroll">
//                     <div className="buylead-scroll">
//                         <div className="buylead">
//                             <div className="item">
//                                 <div className="buylead-box">
//                                     <div className="title">
//                                         <div>
//                                             <span onclick="/">
//                                                 Rice{" "}
//                                             </span>
//                                         </div>
//                                     </div>
//                                     <div className="location">
//                                         <div className="buylead-country">
//                                             <figure>
//                                                 <img
//                                                     src="./assets/flag.svg"
//                                                     alt="India"
//                                                     width={28}
//                                                     height={21}
//                                                     loading="lazy"
//                                                 />
//                                             </figure>
//                                             <div className="country">India</div>
//                                         </div>
//                                     </div>
//                                     <div className="action">
//                                         <span
//                                             className="btn"
//                                             onclick="/"
//                                         >
//                                             View Details
//                                         </span>
//                                         <div className="post-date">2024-05-13</div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="item">
//                                 <div className="buylead-box">
//                                     <div className="title">
//                                         <div>
//                                             <span onclick="/">
//                                                 Potatoes{" "}
//                                             </span>
//                                         </div>
//                                     </div>
//                                     <div className="location">
//                                         <div className="buylead-country">
//                                             <figure>
//                                                 <img
//                                                     src="./assets/flag.svg"
//                                                     alt="India"
//                                                     width={28}
//                                                     height={21}
//                                                     loading="lazy"
//                                                 />
//                                             </figure>
//                                             <div className="country">India</div>
//                                         </div>
//                                     </div>
//                                     <div className="action">
//                                         <span
//                                             className="btn"
//                                             onclick="/"
//                                         >
//                                             View Details
//                                         </span>
//                                         <div className="post-date">2024-05-13</div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="item">
//                                 <div className="buylead-box">
//                                     <div className="title">
//                                         <div>
//                                             <span onclick="/">
//                                                 Ghee{" "}
//                                             </span>
//                                         </div>
//                                     </div>
//                                     <div className="location">
//                                         <div className="buylead-country">
//                                             <figure>
//                                                 <img
//                                                     src="./assets/flag.svg"
//                                                     alt="India"
//                                                     width={28}
//                                                     height={21}
//                                                     loading="lazy"
//                                                 />
//                                             </figure>
//                                             <div className="country">India</div>
//                                         </div>
//                                     </div>
//                                     <div className="action">
//                                         <span
//                                             className="btn"
//                                             onclick="/"
//                                         >
//                                             View Details
//                                         </span>
//                                         <div className="post-date">2024-05-13</div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="item">
//                                 <div className="buylead-box">
//                                     <div className="title">
//                                         <div>
//                                             <span onclick="/">
//                                                 Cigarettes{" "}
//                                             </span>
//                                         </div>
//                                     </div>
//                                     <div className="location">
//                                         <div className="buylead-country">
//                                             <figure>
//                                                 <img
//                                                     src="./assets/flag.svg"
//                                                     alt="India"
//                                                     width={28}
//                                                     height={21}
//                                                     loading="lazy"
//                                                 />
//                                             </figure>
//                                             <div className="country">India</div>
//                                         </div>
//                                     </div>
//                                     <div className="action">
//                                         <span
//                                             className="btn"
//                                             onclick="/"
//                                         >
//                                             View Details
//                                         </span>
//                                         <div className="post-date">2024-05-13</div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="item">
//                                 <div className="buylead-box">
//                                     <div className="title">
//                                         <div>
//                                             <span onclick="/">
//                                                 Chemicals{" "}
//                                             </span>
//                                         </div>
//                                     </div>
//                                     <div className="location">
//                                         <div className="buylead-country">
//                                             <figure>
//                                                 <img
//                                                     src="./assets/flag.svg"
//                                                     alt="India"
//                                                     width={28}
//                                                     height={21}
//                                                     loading="lazy"
//                                                 />
//                                             </figure>
//                                             <div className="country">India</div>
//                                         </div>
//                                     </div>
//                                     <div className="action">
//                                         <span
//                                             className="btn"
//                                             onclick="/"
//                                         >
//                                             View Details
//                                         </span>
//                                         <div className="post-date">2024-05-13</div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="item">
//                                 <div className="buylead-box">
//                                     <div className="title">
//                                         <div>
//                                             <span onclick="/">
//                                                 Air Handling Units{" "}
//                                             </span>
//                                         </div>
//                                     </div>
//                                     <div className="location">
//                                         <div className="buylead-country">
//                                             <figure>
//                                                 <img
//                                                     src="./assets/flag.svg"
//                                                     alt="India"
//                                                     width={28}
//                                                     height={21}
//                                                     loading="lazy"
//                                                 />
//                                             </figure>
//                                             <div className="country">India</div>
//                                         </div>
//                                     </div>
//                                     <div className="action">
//                                         <span
//                                             className="btn"
//                                             onclick="/"
//                                         >
//                                             View Details
//                                         </span>
//                                         <div className="post-date">2024-05-13</div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="item">
//                                 <div className="buylead-box">
//                                     <div className="title">
//                                         <div>
//                                             <span onclick="/">
//                                                 Thin Cutting Grinding Whe{" "}
//                                             </span>
//                                         </div>
//                                     </div>
//                                     <div className="location">
//                                         <div className="buylead-country">
//                                             <figure>
//                                                 <img
//                                                     src="./assets/flag.svg"
//                                                     alt="India"
//                                                     width={28}
//                                                     height={21}
//                                                     loading="lazy"
//                                                 />
//                                             </figure>
//                                             <div className="country">India</div>
//                                         </div>
//                                     </div>
//                                     <div className="action">
//                                         <span
//                                             className="btn"
//                                             onclick="/"
//                                         >
//                                             View Details
//                                         </span>
//                                         <div className="post-date">2024-05-13</div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="item">
//                                 <div className="buylead-box">
//                                     <div className="title">
//                                         <div>
//                                             <span onclick="/">
//                                                 Ems 907 Generator Control{" "}
//                                             </span>
//                                         </div>
//                                     </div>
//                                     <div className="location">
//                                         <div className="buylead-country">
//                                             <figure>
//                                                 <img
//                                                     src="./assets/flag.svg"
//                                                     alt="India"
//                                                     width={28}
//                                                     height={21}
//                                                     loading="lazy"
//                                                 />
//                                             </figure>
//                                             <div className="country">India</div>
//                                         </div>
//                                     </div>
//                                     <div className="action">
//                                         <span
//                                             className="btn"
//                                             onclick="/"
//                                         >
//                                             View Details
//                                         </span>
//                                         <div className="post-date">2024-05-13</div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="form-wrap">

//                 <h2 style={{ margin: '0px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Post Your Requirement</h2>
//                 {formSubmitted && (
//                     <p style={{ textAlign: 'center', color: 'green' }}>Form submitted successfully!</p>
//                 )}
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group">
//                         <label htmlFor="name">Name:</label>
//                         <input className='form-input' type="text" required id="name" name="name" />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="mobile">Mobile Number:</label>
//                         <input className='form-input' type="tel" required id="mobile" name="mobile" />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="email">Email:</label>
//                         <input className='form-input' type="email" required id="email" name="email" />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="company">Company Name:</label>
//                         <input className='form-input' type="text" required id="company" name="company" />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="userType">Select User Type:</label>
//                         <select id="userType" name="userType" className="form-control" required>
//                             <option value="">Select User Type</option>
//                             <option value="seller">Seller</option>
//                             <option value="buyer">Buyer</option>
//                         </select>
//                     </div>
//                     <button type="submit">Submit</button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Leads;
// import React, { useState } from 'react';
// import axios from 'axios'; // Import Axios
// import './leads.css';

// const Leads = () => {
//     const [formSubmitted, setFormSubmitted] = useState(false);

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         const formData = {
//             name: event.target.name.value,
//             mobile: event.target.mobile.value,
//             email: event.target.email.value,
//             companyName: event.target.company.value,
//             userType: event.target.userType.value
//         };

//         try {
//             // Make a POST request to the API endpoint
//             await axios.post('http://localhost:3005/submit-form', formData);
//             setFormSubmitted(true);

//             event.target.reset();
//         } catch (error) {
//             console.error('Error submitting form:', error);

//         }
//     };

//     const leadsData = [
//         {
//             title: "Rice",
//             country: "India",
//             postDate: "2024-05-13"
//         },
//         {
//             title: "Potatoes",
//             country: "India",
//             postDate: "2024-05-13"
//         },
//         {
//             title: "Ghee",
//             country: "India",
//             postDate: "2024-05-13"
//         },
//         {
//             title: "Cigarettes",
//             country: "India",
//             postDate: "2024-05-13"
//         },
//         {
//             title: "Chemicals",
//             country: "India",
//             postDate: "2024-05-13"
//         },
//         // {
//         //     title: "Air Handling Units",
//         //     country: "India",
//         //     postDate: "2024-05-13"
//         // },
//         // {
//         //     title: "Thin Cutting Grinding Whe",
//         //     country: "India",
//         //     postDate: "2024-05-13"
//         // },
//         // {
//         //     title: "Ems 907 Generator Control",
//         //     country: "India",
//         //     postDate: "2024-05-13"
//         // }
//     ];

//     return (
//         <div className="leads-container">
//             <div className="box-round buylead-wrap">
//                 <div className="sect-head">
//                     <h2 className="title">Fresh Leads</h2>
//                 </div>
//                 <div className="buylead-scroll">
//                     <div className="buylead">
//                         {leadsData.map((lead, index) => (
//                             <div className="item" key={index}>
//                                 <div className="buylead-box">
//                                     <div className="title">
//                                         <div>
//                                             <span onClick={() => { window.location.href = '/' }}>
//                                                 {lead.title}
//                                             </span>
//                                         </div>
//                                     </div>
//                                     <div className="location">
//                                         <div className="buylead-country">
//                                             <figure>
//                                                 <img
//                                                     src="./assets/flag.svg"
//                                                     alt={lead.country}
//                                                     width={28}
//                                                     height={21}
//                                                     loading="lazy"
//                                                 />
//                                             </figure>
//                                             <div className="country">{lead.country}</div>
//                                         </div>
//                                     </div>
//                                     <div className="action">
//                                         <span
//                                             className="btn"
//                                             onClick={() => { window.location.href = '/' }}
//                                         >
//                                             View Details
//                                         </span>
//                                         <div className="post-date">{lead.postDate}</div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                 </div>
//             </div>
//             <div className="form-wrap">

//                 <h2 style={{ margin: '0px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Post Your Requirement</h2>
//                 {formSubmitted && (
//                     <p style={{ textAlign: 'center', color: 'green' }}>Form submitted successfully!</p>
//                 )}
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group">
//                         <label htmlFor="name">Name:</label>
//                         <input className='form-input' type="text" required id="name" name="name" />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="mobile">Mobile Number:</label>
//                         <input className='form-input' type="tel" required id="mobile" name="mobile" />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="email">Email:</label>
//                         <input className='form-input' type="email" required id="email" name="email" />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="company">Company Name:</label>
//                         <input className='form-input' type="text" required id="company" name="company" />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="userType">Select User Type:</label>
//                         <select id="userType" name="userType" className="form-control" required>
//                             <option value="">Select User Type</option>
//                             <option value="seller">Seller</option>
//                             <option value="buyer">Buyer</option>
//                         </select>
//                     </div>
//                     <button type="submit">Submit</button>
//                 </form>
//             </div>

//         </div>
//     );
// };

// export default Leads;
// import React, { useState } from 'react';
// import axios from 'axios'; // Import Axios
// import './leads.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// const Leads = () => {
//     const [formSubmitted, setFormSubmitted] = useState(false);

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const formData = {
//             name: event.target.name.value,
//             mobile: event.target.mobile.value,
//             email: event.target.email.value,
//             companyName: event.target.company.value,
//             userType: event.target.userType.value
//         };

//         try {
//             // Make a POST request to the API endpoint
//             // await axios.post('http://localhost:3005/submit-form', formData);
//             await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/submit-form`, formData);
//             setFormSubmitted(true);
//             setFormSubmitted(true);
//             event.target.reset();
//         } catch (error) {
//             console.error('Error submitting form:', error);
//         }
//     };

//     const leadsData = [
//         {
//             title: "Rice",
//             country: "India",
//             postDate: "2024-05-13"
//         },
//         {
//             title: "Potatoes",
//             country: "India",
//             postDate: "2024-05-13"
//         },
//         {
//             title: "Ghee",
//             country: "India",
//             postDate: "2024-05-13"
//         },
//         {
//             title: "Cigarettes",
//             country: "India",
//             postDate: "2024-05-13"
//         },
//         {
//             title: "Chemicals",
//             country: "India",
//             postDate: "2024-05-13"
//         },
//         {
//             title: "Air Handling Units",
//             country: "India",
//             postDate: "2024-05-13"
//         },
//         {
//             title: "Thin Cutting ",
//             country: "India",
//             postDate: "2024-05-13"
//         },
//         {
//             title: "Ems 907 Generator ",
//             country: "India",
//             postDate: "2024-05-13"
//         }, {
//             title: "Cigarettes",
//             country: "India",
//             postDate: "2024-05-13"
//         },
//         {
//             title: "Chemicals",
//             country: "India",
//             postDate: "2024-05-13"
//         },
//         {
//             title: "Chemicals",
//             country: "India",
//             postDate: "2024-05-13"
//         },
//         {
//             title: "Air Handling Units",
//             country: "India",
//             postDate: "2024-05-13"
//         },
//         {
//             title: "Thin Cutting ",
//             country: "India",
//             postDate: "2024-05-13"
//         },
//         {
//             title: "Chemicals",
//             country: "India",
//             postDate: "2024-05-13"
//         },
//         {
//             title: "Air Handling Units",
//             country: "India",
//             postDate: "2024-05-13"
//         },

//     ];

//     // Chunk the leads data into groups of 5
//     const chunkSize = 5;
//     const chunkedLeadsData = [];
//     for (let i = 0; i < leadsData.length; i += chunkSize) {
//         chunkedLeadsData.push(leadsData.slice(i, i + chunkSize));
//     }

//     return (
//         <div className="leads-container">
//             <div className="box-round buylead-wrap">
//                 <div className="sect-head">
//                     <h2 className="title">Fresh Leads</h2>
//                 </div>
//                 <Swiper
//                     spaceBetween={30}
//                     centeredSlides={true}
//                     autoplay={{
//                         delay: 2500,
//                         disableOnInteraction: false,
//                     }}
//                     pagination={{
//                         clickable: true,
//                     }}
//                     navigation={true}
//                     modules={[Autoplay, Pagination, Navigation]}
//                     className="mySwiper"
//                 >
//                     {chunkedLeadsData.map((chunk, index) => (
//                         <SwiperSlide key={index}>

//                             <div className="buylead-scroll" style={{ width: '100%' }}>
//                                 <div className="buylead">
//                                     {chunk.map((lead, leadIndex) => (
//                                         <div className="item" key={leadIndex}>
//                                             <div className="buylead-box">
//                                                 <div className="title">
//                                                     <div>
//                                                         <span onClick={() => { window.location.href = '/' }}>
//                                                             {lead.title}
//                                                         </span>
//                                                     </div>
//                                                 </div>
//                                                 <div className="location">
//                                                     <div className="buylead-country">
//                                                         <figure>
//                                                             <img
//                                                                 src="./assets/flag.svg"
//                                                                 alt={lead.country}
//                                                                 width={28}
//                                                                 height={21}
//                                                                 loading="lazy"
//                                                             />
//                                                         </figure>
//                                                         <div className="country">{lead.country}</div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="action">
//                                                     <span
//                                                         className="btn"
//                                                         onClick={() => { window.location.href = '/' }}
//                                                     >
//                                                         View Details
//                                                     </span>
//                                                     <div className="post-date">{lead.postDate}</div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>
//             <div className="form-wrap">
//                 <h2 style={{ margin: '0px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Post Your Requirement</h2>
//                 {formSubmitted && (
//                     <p style={{ textAlign: 'center', color: 'green' }}>Form submitted successfully!</p>
//                 )}
//                 <form onSubmit={handleSubmit} style={{ marginTop: '30px' }}>
//                     <div className="form-group">
//                         <label htmlFor="name">Name:</label>
//                         <input className='form-input' type="text" required id="name" name="name" />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="mobile">Mobile Number:</label>
//                         <input className='form-input' type="tel" required id="mobile" name="mobile" />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="email">Email:</label>
//                         <input className='form-input' type="email" required id="email" name="email" />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="company">Company Name:</label>
//                         <input className='form-input' type="text" required id="company" name="company" />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="userType">Select User Type:</label>
//                         <select id="userType" name="userType" className="form-control" required>
//                             <option value="">Select User Type</option>
//                             <option value="seller">Seller</option>
//                             <option value="buyer">Buyer</option>
//                         </select>
//                     </div>
//                     <button type="submit">Submit</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Leads;

// import React, { useState } from "react";
// import axios from "axios"; // Import Axios
// import "./leads.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import { Link } from "react-router-dom";

// const Leads = () => {
//   const [formSubmitted, setFormSubmitted] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = {
//       name: event.target.name.value,
//       mobile: event.target.mobile.value,
//       email: event.target.email.value,
//       companyName: event.target.company.value,
//       userType: event.target.userType.value,
//     };

//     try {
//       await axios.post(
//         `${process.env.REACT_APP_API_ENDPOINT}/submit-form`,
//         formData
//       );
//       console.log("API Endpoint:", process.env.REACT_APP_API_ENDPOINT);

//       setFormSubmitted(true);
//       event.target.reset();
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }
//   };

//   const leadsData = [
//     {
//       title: "Solar Energy Plant",
//       country: "India",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },
//     {
//       country: "India",
//       title: "Hydropower Station",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },
//     {
//       title: "Wind Turbines",
//       country: "Romania",
//       postDate: "29-10-2025",
//       imagePath: "/assets/romania.jpeg",
//     },
//     {
//       title: "Fresh potato",
//       country: "India",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },
//     {
//       title: "Organic potato",
//       country: "India",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },
//     {
//       title: "organic snacks",
//       country: "India",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },
//     {
//       title: "Brass door handles",
//       country: "India",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },
//     {
//       title: "Steel door handles ",
//       country: "India",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },
//     {
//       title: "Modern door handles ",
//       country: "India",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },

//     {
//       title: "smart locks",
//       country: "India",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },
//     {
//       title: " digital locks ",
//       country: "India",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },
//     {
//       country: "India",
//       title: "Fruit Powder",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },
//     {
//       title: "electronic locks ",
//       country: "Romania",
//       postDate: "29-10-2025",
//       imagePath: "/assets/romania.jpeg",
//     },
//     {
//       title: "Spices",
//       country: "India",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },
//     {
//       title: "salted snacks",
//       country: "India",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },
//     {
//       title: "organic snacks",
//       country: "India",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },

//     {
//       title: "T-shirts",
//       country: "India",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },
//     {
//       title: "Sports equipment ",
//       country: "India",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },
//     {
//       title: "PVC pipes",
//       country: "India",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },

//     {
//       title: "Sports T-shirts",
//       country: "India",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },
//     {
//       title: " Irrigation Pipe ",
//       country: "India",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },
//     {
//       title: "Brass Pipe Fittings",
//       country: "India",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },
//     {
//       title: "detergent powder ",
//       country: "India",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },
//     {
//       title: "liquid detergent",
//       country: "India",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },
//     {
//       title: "organic herbal teas",
//       country: "India",
//       postDate: "29-10-2025",
//       imagePath: "/assets/flag.svg",
//     },
//   ];

//   // Chunk the leads data into groups of 5
//   const chunkSize = 5;
//   const chunkedLeadsData = [];
//   for (let i = 0; i < leadsData.length; i += chunkSize) {
//     chunkedLeadsData.push(leadsData.slice(i, i + chunkSize));
//   }

//   return (
//     <div className="leads-container">
//       <div className="box-round buylead-wrap">
//         <div className="sect-head">
//           <h2 className="title">Fresh Buyers</h2>
//         </div>
//         {/* <Swiper
//           spaceBetween={30}
//           centeredSlides={true}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           pagination={{
//             clickable: true,
//           }}
//           navigation={true}
//           modules={[Autoplay, Pagination, Navigation]}
//           className="mySwiper"
//         >
//           {chunkedLeadsData.map((chunk, index) => (
//             <SwiperSlide key={index}>
//               <div className="buylead-scroll" style={{ width: "100%" }}>
//                 <div className="buylead">
//                   {chunk.map((lead, leadIndex) => (
//                     <div className="item" key={leadIndex}>
//                       <div className="buylead-box">
//                         <div className="title">
//                           <div>
//                             <span>{lead.title}</span>
//                           </div>
//                         </div>
//                         <div className="location">
//                           <div className="buylead-country">
//                             <figure>
//                               <img
//                                 src={lead.imagePath}
//                                 alt={lead.country}
//                                 width={28}
//                                 height={21}
//                                 loading="lazy"
//                               />
//                             </figure>
//                             <div className="country">{lead.country}</div>
//                           </div>
//                         </div>
//                         <div className="action">
//                           <Link to={"/login"}>
//                             <span className="btn">View Details</span>
//                           </Link>
//                           <div className="post-date">{lead.postDate}</div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper> */}

//         <Swiper
//           direction="vertical" // 👈 This makes it slide up-down
//           spaceBetween={30}
//           centeredSlides={true}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           pagination={{
//             clickable: true,
//           }}
//           navigation={true}
//           modules={[Autoplay, Pagination, Navigation]}
//           className="mySwiper"
//         >
//           {chunkedLeadsData.map((chunk, index) => (
//             <SwiperSlide key={index}>
//               <div className="buylead-scroll" style={{ width: "100%", height: "100%" }}>
//                 <div className="buylead">
//                   {chunk.map((lead, leadIndex) => (
//                     <div className="item" key={leadIndex}>
//                       <div className="buylead-box">
//                         <div className="title">
//                           <div>
//                             <span>{lead.title}</span>
//                           </div>
//                         </div>
//                         <div className="location">
//                           <div className="buylead-country">
//                             <figure>
//                               <img
//                                 src={lead.imagePath}
//                                 alt={lead.country}
//                                 width={28}
//                                 height={21}
//                                 loading="lazy"
//                               />
//                             </figure>
//                             <div className="country">{lead.country}</div>
//                           </div>
//                         </div>
//                         <div className="action">
//                           <Link to={"/login"}>
//                             <span className="btn">View Details</span>
//                           </Link>
//                           <div className="post-date">{lead.postDate}</div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//       <div className="form-wrap">
//         <h2
//           style={{
//             margin: "0px",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           Post Your Requirement
//         </h2>
//         {formSubmitted && (
//           <p style={{ textAlign: "center", color: "green" }}>
//             Form submitted successfully!
//           </p>
//         )}
//         <form onSubmit={handleSubmit} style={{ marginTop: "30px" }}>
//           <div className="form-group">
//             <label htmlFor="name">Name:</label>
//             <input
//               className="form-input"
//               type="text"
//               required
//               id="name"
//               name="name"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="mobile">Mobile Number:</label>
//             <input
//               className="form-input"
//               type="tel"
//               required
//               id="mobile"
//               name="mobile"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input
//               className="form-input"
//               type="email"
//               required
//               id="email"
//               name="email"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="company">Company Name:</label>
//             <input
//               className="form-input"
//               type="text"
//               required
//               id="company"
//               name="company"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="userType">Select User Type:</label>
//             <select
//               id="userType"
//               name="userType"
//               className="form-control"
//               required
//             >
//               <option value="">Select User Type</option>
//               <option value="seller">Seller</option>
//               <option value="buyer">Buyer</option>
//             </select>
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Leads;


import React, { useState } from "react";
import axios from "axios";
import "./leads.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Leads = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      name: event.target.name.value,
      mobile: event.target.mobile.value,
      email: event.target.email.value,
      companyName: event.target.company.value,
      userType: event.target.userType.value,
    };

    try {
      await axios.post(
        `${process.env.REACT_APP_API_ENDPOINT}/submit-form`,
        formData
      );
      setFormSubmitted(true);
      event.target.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const leadsData = [
    {
      title: "Solar Energy Plant",
      country: "India",
      postDate: "29-10-2025",
      imagePath: "/assets/flag.svg",
      category: "Energy"
    },
    {
      country: "India",
      title: "Hydropower Station",
      postDate: "29-10-2025",
      imagePath: "/assets/flag.svg",
      category: "Energy"
    },
    {
      title: "Wind Turbines",
      country: "Romania",
      postDate: "29-10-2025",
      imagePath: "/assets/romania.jpeg",
      category: "Energy"
    },
    {
      title: "Fresh potato",
      country: "India",
      postDate: "29-10-2025",
      imagePath: "/assets/flag.svg",
      category: "Agriculture"
    },
    {
      title: "Organic potato",
      country: "India",
      postDate: "29-10-2025",
      imagePath: "/assets/flag.svg",
      category: "Agriculture"
    },
    {
      title: "Organic snacks",
      country: "India",
      postDate: "29-10-2025",
      imagePath: "/assets/flag.svg",
      category: "Food & Beverage"
    },
    {
      title: "Brass door handles",
      country: "India",
      postDate: "29-10-2025",
      imagePath: "/assets/flag.svg",
      category: "Hardware"
    },
    {
      title: "Smart locks",
      country: "India",
      postDate: "29-10-2025",
      imagePath: "/assets/flag.svg",
      category: "Electronics"
    },
  ];

  // Chunk the leads data into groups of 4 for better layout
  const chunkSize = 4;
  const chunkedLeadsData = [];
  for (let i = 0; i < leadsData.length; i += chunkSize) {
    chunkedLeadsData.push(leadsData.slice(i, i + chunkSize));
  }

  return (
    <div className="leads-container-new">
      {/* Header Section */}
      <div className="leads-header">
        <h1 className="main-title">Global Business Opportunities</h1>
        {/* <p className="subtitle">Connect with buyers and sellers worldwide</p> */}
      </div>

      <div className="leads-content">
        {/* Fresh Leads Section */}
        <div className="leads-section">
          <div className="section-header">
            <div className="title-section">
              <h2 className="section-title">Fresh Buying Leads</h2>
              <p className="section-description">
                Latest requirements from verified buyers across the globe
              </p>
            </div>
            {/* <div className="stats-badge">
              <span className="stats-count">{leadsData.length}+</span>
              <span className="stats-label">Active Leads</span>
            </div> */}
          </div>

          <div className="leads-carousel-container">
            <Swiper
              direction="vertical"
              spaceBetween={20}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="leads-swiper"
            >
              {chunkedLeadsData.map((chunk, index) => (
                <SwiperSlide key={index}>
                  <div className="leads-grid">  
                    {chunk.map((lead, leadIndex) => (
                      <div className="lead-card" key={leadIndex}>
                        <div className="card-header">
                          <div className="category-tag">{lead.category}</div>
                          <div className="urgency-badge">URGENT</div>
                        </div>
                        <div className="card-body">
                          <h3 className="lead-title">{lead.title}</h3>
                          <div className="lead-meta">
                            <div className="location-info">
                              <div className="country-flag">
                                <img
                                  src={lead.imagePath}
                                  alt={lead.country}
                                  width={24}
                                  height={18}
                                  loading="lazy"
                                />
                                <span className="country-name">{lead.country}</span>
                              </div>
                              <div className="post-date">
                                <i className="calendar-icon">📅</i>
                                {lead.postDate}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-footer">
                          <Link to="/login" className="view-details-btn">
                            <span>View Details</span>
                            <i className="arrow-icon">→</i>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Requirement Form Section */}
        <div className="form-section">
          <div className="form-container">
            <div className="form-header">
              <h2 className="form-title">Post Your Requirement</h2>
              <p className="form-subtitle">
                Get quotes from verified suppliers worldwide
              </p>
            </div>

            {formSubmitted && (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <p>Form submitted successfully!</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="requirement-form">
              <div className="form-row">
                <div className="form-group-new">
                  <label htmlFor="name" className="form-label">
                    Full Name *
                  </label>
                  <input
                    className="form-input-new"
                    type="text"
                    required
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group-new">
                  <label htmlFor="mobile" className="form-label">
                    Mobile Number *
                  </label>
                  <input
                    className="form-input-new"
                    type="tel"
                    required
                    id="mobile"
                    name="mobile"
                    placeholder="+91 1234567890"
                  />
                </div>
              </div>

              <div className="form-group-new">
                <label htmlFor="email" className="form-label">
                  Email Address *
                </label>
                <input
                  className="form-input-new"
                  type="email"
                  required
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group-new">
                <label htmlFor="company" className="form-label">
                  Company Name *
                </label>
                <input
                  className="form-input-new"
                  type="text"
                  required
                  id="company"
                  name="company"
                  placeholder="Your company name"
                />
              </div>

              <div className="form-group-new">
                <label htmlFor="userType" className="form-label">
                  I am a *
                </label>
                <div className="user-type-selector">
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="userType"
                      value="buyer"
                      required
                    />
                    <span className="radio-label">Buyer</span>
                  </label>
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="userType"
                      value="seller"
                      required
                    />
                    <span className="radio-label">Seller</span>
                  </label>
                </div>
              </div>

              <button type="submit" className="submit-btn2">
                Submit Requirement
              </button>
            </form>

            {/* <div className="form-footer">
              <p className="privacy-note">
                Your information is secure and will never be shared with third parties.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leads;