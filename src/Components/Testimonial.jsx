// import React from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// import './tesi.css';

// // import required modules
// import { Pagination } from 'swiper/modules';

// const testimonials = [
//     { id: 1, name: 'Sanjeev', position: 'Owner', review: 'I have been using globalb2bmart for a few months now and I must say, it has been a game changer for my business.' },
//     { id: 2, name: 'Naveen', position: 'Owner', review: 'I appreciate most about globalb2bmart is the wide range of suppliers available on the platform. ' },
//     { id: 3, name: 'Raghav', position: 'Owner', review: 'The user-friendly interface of globalb2bmart makes it easy for me to navigate and search for specific products or suppliers. I can filter my search based on location, product category.' },


//     { id: 4, name: 'Himesh', position: 'Owner', review: 'I love about globalb2bmart is the ease of use. The website is user-friendly and it was very easy for me to set up my profile and start connecting with potential customers.' },

//     // { id: 5, name: 'Neeraj', position: 'Owner', review: 'Great feature of globalb2bmart is the ability to showcase my products and services. The platform allows me to create a detailed profile with images, videos, and descriptions of my offerings. This has not only helped me to attract potential customers, but also to stand out from my competitors.' },
//     { id: 1, name: 'Sanjeev', position: 'Owner', review: 'I have been using globalb2bmart for a few months now and I must say, it has been a game changer for my business.' },
//     { id: 2, name: 'Naveen', position: 'Owner', review: 'I appreciate most about globalb2bmart is the wide range of suppliers available on the platform. ' },
// ];

// export default function Testimonial() {
//     return (
//         <div className="testimonial-container">
//             <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 10px ' }}> Testimonial</h1>
//             <Swiper
//                 slidesPerView={1}
//                 spaceBetween={10}
//                 pagination={{
//                     clickable: true,
//                 }}
//                 breakpoints={{
//                     '@0.00': {
//                         slidesPerView: 1,
//                         spaceBetween: 10,
//                     },
//                     '@0.75': {
//                         slidesPerView: 2,
//                         spaceBetween: 20,
//                     },
//                     '@1.00': {
//                         slidesPerView: 3,
//                         spaceBetween: 40,
//                     },
//                     '@1.50': {
//                         slidesPerView: 4,
//                         spaceBetween: 50,
//                     },
//                 }}
//                 modules={[Pagination]}
//                 className="mySwiper"

//             >

//                 {testimonials.map(testimonial =>

//                 (

//                     <SwiperSlide key={testimonial.id}>

//                         <div className="testimonial-box">
//                             <p className="testimonial-review">{testimonial.review}</p>
//                             <p className="testimonial-name">{testimonial.name}</p>
//                             <p className="testimonial-position">{testimonial.position}</p>
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );
// }


// import React from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// import './tesi.css';

// // import required modules
// import { Pagination } from 'swiper/modules';

// const testimonials = [
//     { id: 1, name: 'Sanjeev', position: 'Owner', review: 'I have been using globalb2bmart for a few months now and I must say, it has been a game changer for my business.' },
//     { id: 2, name: 'Naveen', position: 'Owner', review: 'I appreciate most about globalb2bmart is the wide range of suppliers available on the platform. ' },
//     { id: 3, name: 'Raghav', position: 'Owner', review: 'The user-friendly interface of globalb2bmart makes it easy for me to navigate and search for specific products or suppliers. I can filter my search based on location, product category.' },

//     { id: 4, name: 'Himesh', position: 'Owner', review: 'I love about globalb2bmart is the ease of use. The website is user-friendly and it was very easy for me to set up my profile and start connecting with potential customers.' },

//     // { id: 5, name: 'Neeraj', position: 'Owner', review: 'Great feature of globalb2bmart is the ability to showcase my products and services. The platform allows me to create a detailed profile with images, videos, and descriptions of my offerings. This has not only helped me to attract potential customers, but also to stand out from my competitors.' },
//     { id: 1, name: 'Sanjeev', position: 'Owner', review: 'I have been using globalb2bmart for a few months now and I must say, it has been a game changer for my business.' },
//     { id: 2, name: 'Naveen', position: 'Owner', review: 'I appreciate most about globalb2bmart is the wide range of suppliers available on the platform. ' },
// ];

// export default function Testimonial() {
//     return (
//         <div className="testimonial-container">
//             <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 10px ' }}> Testimonial</h1>
//             <Swiper
//                 slidesPerView={1}
//                 spaceBetween={10}
//                 pagination={{
//                     clickable: true,
//                 }}
//                 breakpoints={{
//                     '@0.00': {
//                         slidesPerView: 1,
//                         spaceBetween: 10,
//                     },
//                     '@0.75': {
//                         slidesPerView: 2,
//                         spaceBetween: 20,
//                     },
//                     '@1.00': {
//                         slidesPerView: 3,
//                         spaceBetween: 40,
//                     },
//                     '@1.50': {
//                         slidesPerView: 4,
//                         spaceBetween: 50,
//                     },
//                 }}
//                 modules={[Pagination]}
//                 className="mySwiper"

//             >

//                 {testimonials.map(testimonial =>

//                 (

//                     <SwiperSlide key={testimonial.id}>

//                         <div className="testimonial-box">
//                             <p className="testimonial-review">{testimonial.review}</p>
//                             <p className="testimonial-name">{testimonial.name}</p>
//                             <p className="testimonial-position">{testimonial.position}</p>
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );
// }
// import React from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// import "./tesi.css";

// // import required modules
// import { Pagination } from "swiper/modules";

// const testimonials = [
//   {
//     id: 1,
//     name: "Sanjeev",
//     position: "Owner",
//     review:
//       "I have been using globalb2bmart for a few months now and I must say, it has been a game changer for my business.",
//   },
//   {
//     id: 2,
//     name: "Naveen",
//     position: "Owner",
//     review:
//       "I appreciate most about globalb2bmart is the wide range of suppliers available on the platform. ",
//   },
//   {
//     id: 3,
//     name: "Raghav",
//     position: "Owner",
//     review:
//       "The user-friendly interface of globalb2bmart makes it easy for me to navigate and search for specific products or suppliers. I can filter my search based on location, product category.",
//   },
//   {
//     id: 4,
//     name: "Himesh",
//     position: "Owner",
//     review:
//       "I love about globalb2bmart is the ease of use. The website is user-friendly and it was very easy for me to set up my profile and start connecting with potential customers.",
//   },
// ];

// const youtubeVideos = [
//   "https://youtu.be/7-He-f1X7tQ",
//   "https://youtu.be/ARYXZnS-h1A",
//   "https://youtu.be/v0Xbf2DJdks?si=KsCWjTzkJSiea5LC",
// ];

// const clients = [
//   { id: 1, name: "Ghena Kitchen", image: "https://via.placeholder.com/150" },
//   { id: 2, name: "Client B", image: "https://via.placeholder.com/150" },
//   { id: 3, name: "Client C", image: "https://via.placeholder.com/150" },
// ];

// export default function Testimonial() {
//   return (
//     <div className="testimonial-container">
//       <h1 className="testimonial-title">Testimonials</h1>

//       {/* Testimonials */}
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={10}
//         pagination={{ clickable: true }}
//         breakpoints={{
//           "@0.00": { slidesPerView: 1, spaceBetween: 10 },
//           "@0.75": { slidesPerView: 2, spaceBetween: 20 },
//           "@1.00": { slidesPerView: 3, spaceBetween: 40 },
//           "@1.50": { slidesPerView: 4, spaceBetween: 50 },
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         {testimonials.map((testimonial) => (
//           <SwiperSlide key={testimonial.id}>
//             <div className="testimonial-box">
//               <p className="testimonial-review">{testimonial.review}</p>
//               <p className="testimonial-name">{testimonial.name}</p>
//               <p className="testimonial-position">{testimonial.position}</p>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* YouTube Videos */}
//       <div className="youtube-videos">
//         {youtubeVideos.map((video, index) => (
//           <div className="video-container" key={index}>
//             <iframe
//               src={video}
//               title={`YouTube Video ${index + 1}`}
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </div>
//         ))}
//       </div>

//       {/* Client Section */}
//       <div className="client-section">
//         {clients.map((client) => (
//           <div className="client-box" key={client.id}>
//             <img
//               src={client.image}
//               alt={client.name}
//               className="client-image"
//             />
//             <p className="client-name">{client.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// import React from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// import "./tesi.css";

// // import required modules
// import { Pagination } from "swiper/modules";

// const testimonials = [
//   {
//     id: 1,
//     name: "Sanjeev",
//     position: "Owner",
//     review:
//       "I have been using globalb2bmart for a few months now and I must say, it has been a game changer for my business.",
//   },
//   {
//     id: 2,
//     name: "Naveen",
//     position: "Owner",
//     review:
//       "I appreciate most about globalb2bmart is the wide range of suppliers available on the platform. ",
//   },
//   {
//     id: 3,
//     name: "Raghav",
//     position: "Owner",
//     review:
//       "The user-friendly interface of globalb2bmart makes it easy for me to navigate and search for specific products or suppliers. I can filter my search based on location, product category.",
//   },
//   {
//     id: 4,
//     name: "Himesh",
//     position: "Owner",
//     review:
//       "I love about globalb2bmart is the ease of use. The website is user-friendly and it was very easy for me to set up my profile and start connecting with potential customers.",
//   },
// ];

// const youtubeVideos = [
//   "https://www.youtube.com/embed/v0Xbf2DJdks?si=fWV4MN93Zmz2SAqX",
//   "https://www.youtube.com/embed/7-He-f1X7tQ",
//   "https://www.youtube.com/embed/ARYXZnS-h1A",
// ];

// const clients = [
//   { id: 1, name: "Ghena Kitchen", image: "https://via.placeholder.com/150" },
//   { id: 2, name: "Client B", image: "https://via.placeholder.com/150" },
//   { id: 3, name: "Client C", image: "https://via.placeholder.com/150" },
// ];

// export default function Testimonial() {
//   return (
//     <div className="testimonial-container">
//       <h1 className="testimonial-title">Testimonials</h1>

//       {/* Testimonials */}
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={10}
//         pagination={{ clickable: true }}
//         breakpoints={{
//           "@0.00": { slidesPerView: 1, spaceBetween: 10 },
//           "@0.75": { slidesPerView: 2, spaceBetween: 20 },
//           "@1.00": { slidesPerView: 3, spaceBetween: 40 },
//           "@1.50": { slidesPerView: 4, spaceBetween: 50 },
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         {testimonials.map((testimonial) => (
//           <SwiperSlide key={testimonial.id}>
//             <div className="testimonial-box">
//               <p className="testimonial-review">{testimonial.review}</p>
//               <p className="testimonial-name">{testimonial.name}</p>
//               <p className="testimonial-position">{testimonial.position}</p>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* YouTube Videos */}
//       <div className="youtube-videos">
//         {youtubeVideos.map((video, index) => (
//           <div className="video-container" key={index}>
//             <iframe
//               width="560"
//               height="315"
//               src={video}
//               title={`YouTube Video ${index + 1}`}
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//               referrerPolicy="strict-origin-when-cross-origin"
//               allowFullScreen
//             ></iframe>
//           </div>
//         ))}
//       </div>

//       {/* Client Section */}
//       {/* <div className="client-section">
//         {clients.map((client) => (
//           <div className="client-box" key={client.id}>
//             <img
//               src={client.image}
//               alt={client.name}
//               className="client-image"
//             />
//             <p className="client-name">{client.name}</p>
//           </div>
//         ))}
//       </div> */}
//     </div>
//   );
// }
// import React from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";

// import "./tesi.css";

// // Import required modules
// import { Pagination, Autoplay } from "swiper/modules";

// const youtubeVideos = [
//   "https://www.youtube.com/embed/v0Xbf2DJdks?si=fWV4MN93Zmz2SAqX",
//   "https://www.youtube.com/embed/7-He-f1X7tQ",
//   "https://www.youtube.com/embed/ARYXZnS-h1A",
// ];

// export default function Testimonial() {
//   return (
//     <>
//       <div className="testimonial-container">
//         <h1 className="testimonial-title">Testimonials</h1>
//         {/* YouTube Videos in Swiper */}
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={20}
//           autoplay={{
//             delay: 3000, // Auto-slide delay in milliseconds
//             disableOnInteraction: false,
//           }}
//           pagination={{ clickable: true }}
//           breakpoints={{
//             "@0.00": { slidesPerView: 1, spaceBetween: 20 },
//             "@0.75": { slidesPerView: 2, spaceBetween: 30 },
//             "@1.00": { slidesPerView: 3, spaceBetween: 40 },
//           }}
//           modules={[Pagination, Autoplay]}
//           className="mySwiper"
//         >
//           {youtubeVideos.map((video, index) => (
//             <SwiperSlide key={index}>
//               <div className={`video-container video-${index}`}>
//                 <iframe
//                   width="720"
//                   height="405"
//                   src={video}
//                   title={`YouTube Video ${index + 1}`}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                   referrerPolicy="strict-origin-when-cross-origin"
//                   allowFullScreen
//                   className="video-frame"
//                 ></iframe>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </>
//   );
// }
// import React, { useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";

// import "./tesi.css";

// // Import required modules
// import { Pagination, Autoplay } from "swiper/modules";

// const youtubeVideos = [
//   {
//     videoId: "v0Xbf2DJdks",
//     thumbnail: "/assets/plastic-itemsb2b.jpeg",
//   },
//   {
//     videoId: "7-He-f1X7tQ",
//     thumbnail: "/assets/ghena-kitchenss.jpeg",
//   },
//   {
//     videoId: "ARYXZnS-h1A",
//     thumbnail: "/assets/alovera-gel.jpeg",
//   },
// ];

// export default function Testimonial() {
//   const [playing, setPlaying] = useState(null); // Track which video is playing

//   const handlePlay = (index) => {
//     setPlaying(index); // Set the index of the video to play
//   };

//   return (
//     <div className="testimonial-container">
//       <h1 className="testimonial-title">Testimonials</h1>
//       {/* YouTube Videos in Swiper */}
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={20}
//         autoplay={{
//           delay: 3000, // Auto-slide delay in milliseconds
//           disableOnInteraction: false,
//         }}
//         pagination={{ clickable: true }}
//         breakpoints={{
//           "@0.00": { slidesPerView: 1, spaceBetween: 20 },
//           "@0.75": { slidesPerView: 2, spaceBetween: 30 },
//           "@1.00": { slidesPerView: 3, spaceBetween: 40 },
//         }}
//         modules={[Pagination, Autoplay]}
//         className="mySwiper"
//       >
//         {youtubeVideos.map((video, index) => (
//           <SwiperSlide key={index}>
//             <div className={`video-container video-${index}`}>
//               {/* Show thumbnail image if the video is not playing */}
//               {playing !== index ? (
//                 <div
//                   className="video-thumbnail"
//                   onClick={() => handlePlay(index)} // On click, start playing the video
//                 >
//                   <img
//                     src={video.thumbnail}
//                     alt={`Thumbnail for video ${index + 1}`}
//                     className="thumbnail-image"
//                   />
//                 </div>
//               ) : (
//                 <iframe
//                   width="720"
//                   height="405"
//                   src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
//                   title={`YouTube Video ${index + 1}`}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                   referrerPolicy="strict-origin-when-cross-origin"
//                   allowFullScreen
//                   className="video-frame"
//                 ></iframe>
//               )}
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }
// import React, { useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";

// import "./tesi.css";

// // Import required modules
// import { Pagination, Autoplay } from "swiper/modules";

// const youtubeVideos = [
//   {
//     videoId: "v0Xbf2DJdks",
//     thumbnail: "/assets/plastic-itemsb2b.jpeg",
//   },
//   {
//     videoId: "7-He-f1X7tQ",
//     thumbnail: "/assets/ghena-kitchenss.jpeg",
//   },
//   {
//     videoId: "ARYXZnS-h1A",
//     thumbnail: "/assets/alovera-gel.jpeg",
//   },
// ];

// export default function Testimonial() {
//   const [playing, setPlaying] = useState(null); // Track which video is playing

//   const handlePlay = (index) => {
//     setPlaying(index); // Set the index of the video to play
//   };

//   const handleVideoEnd = () => {
//     setPlaying(null); // Reset the playing state when video ends
//   };

//   return (
//     <div className="testimonial-container">
//       <h1 className="testimonial-title">Testimonials</h1>
//       {/* YouTube Videos in Swiper */}
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={20}
//         autoplay={{
//           delay: 3000, // Auto-slide delay in milliseconds
//           disableOnInteraction: false,
//           enabled: playing === null, // Disable autoplay when video is playing
//         }}
//         pagination={{ clickable: true }}
//         breakpoints={{
//           "@0.00": { slidesPerView: 1, spaceBetween: 20 },
//           "@0.75": { slidesPerView: 2, spaceBetween: 30 },
//           "@1.00": { slidesPerView: 3, spaceBetween: 40 },
//         }}
//         modules={[Pagination, Autoplay]}
//         className="mySwiper"
//       >
//         {youtubeVideos.map((video, index) => (
//           <SwiperSlide key={index}>
//             <div className={`video-container video-${index}`}>
//               {/* Show thumbnail image if the video is not playing */}
//               {playing !== index ? (
//                 <div
//                   className="video-thumbnail"
//                   onClick={() => handlePlay(index)} // On click, start playing the video
//                 >
//                   <img
//                     style={{ marginTop: "20px" }}
//                     src={video.thumbnail}
//                     alt={`Thumbnail for video ${index + 1}`}
//                     className="thumbnail-image"
//                   />
//                 </div>
//               ) : (
//                 <iframe
//                   width="720"
//                   height="405"
//                   src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
//                   title={`YouTube Video ${index + 1}`}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                   referrerPolicy="strict-origin-when-cross-origin"
//                   allowFullScreen
//                   className="video-frame"
//                   onEnded={handleVideoEnd} // Handle video end to reset the playing state
//                 ></iframe>
//               )}
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }
// import React, { useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";

// import "./tesi.css";

// // Import required modules
// import { Pagination, Autoplay } from "swiper/modules";

// const youtubeVideos = [
//   {
//     videoId: "v0Xbf2DJdks",
//     thumbnail: "/assets/plastic-itemsb2b.jpeg",
//     feedbackText: "Join Now", // Add your text here
//   },
//   {
//     videoId: "7-He-f1X7tQ",
//     thumbnail: "/assets/ghena-kitchenss.jpeg",
//     feedbackText: "Join Now", // Add your text here
//   },
//   {
//     videoId: "ARYXZnS-h1A",
//     thumbnail: "/assets/alovera-gel.jpeg",
//     feedbackText: "Join Now", // Add your text here
//   },
//   {
//     videoId: "ARYXZnS-h1A",
//     thumbnail: "/assets/alovera-gel.jpeg",
//     feedbackText: "Join Now", // Add your text here
//   },
// ];

// export default function Testimonial() {
//   const [playing, setPlaying] = useState(null); // Track which video is playing

//   const handlePlay = (index) => {
//     setPlaying(index); // Set the index of the video to play
//   };

//   const handleVideoEnd = () => {
//     setPlaying(null); // Reset the playing state when video ends
//   };

//   return (
//     <div className="testimonial-container">
//       <h1 className="testimonial-title">Testimonials</h1>
//       {/* YouTube Videos in Swiper */}
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={20}
//         autoplay={{
//           delay: 3000, // Auto-slide delay in milliseconds
//           disableOnInteraction: false,
//           enabled: playing === null, // Disable autoplay when video is playing
//         }}
//         pagination={{ clickable: true }}
//         breakpoints={{
//           "@0.00": { slidesPerView: 1, spaceBetween: 20 },
//           "@0.75": { slidesPerView: 2, spaceBetween: 30 },
//           "@1.00": { slidesPerView: 3, spaceBetween: 40 },
//         }}
//         modules={[Pagination, Autoplay]}
//         className="mySwiper"
//       >
//         {youtubeVideos.map((video, index) => (
//           <SwiperSlide key={index}>
//             <div className={`video-container video-${index}`}>
//               {/* Show thumbnail image if the video is not playing */}
//               {playing !== index ? (
//                 <div
//                   className="video-thumbnail"
//                   onClick={() => handlePlay(index)} // On click, start playing the video
//                 >
//                   <img
//                     style={{ marginTop: "20px" }}
//                     src={video.thumbnail}
//                     alt={`Thumbnail for video ${index + 1}`}
//                     className="thumbnail-image"
//                   />
//                 </div>
//               ) : (
//                 <iframe
//                   width="720"
//                   height="405"
//                   src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
//                   title={`YouTube Video ${index + 1}`}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                   referrerPolicy="strict-origin-when-cross-origin"
//                   allowFullScreen
//                   className="video-frame"
//                   onEnded={handleVideoEnd} // Handle video end to reset the playing state
//                 ></iframe>
//               )}

//               {/* Add the feedback text with animation */}
//               <div className="video-feedback-text">{video.feedbackText}</div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }
// import React, { useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";

// import "./tesi.css";

// // Import required modules
// import { Pagination, Autoplay } from "swiper/modules";

// const youtubeVideos = [
//   {
//     videoId: "v0Xbf2DJdks",
//     thumbnail: "/assets/plastic-itemsb2b.jpeg",
//     feedbackText: "Join Now", // Add your text here
//   },
//   {
//     videoId: "7-He-f1X7tQ",
//     thumbnail: "/assets/ghena-kitchenss.jpeg",
//     feedbackText: "Join Now", // Add your text here
//   },
//   {
//     videoId: "ARYXZnS-h1A",
//     thumbnail: "/assets/alovera-gel.jpeg",
//     feedbackText: "Join Now", // Add your text here
//   },
//   {
//     videoId: "1T8ynVW2ZbI", // The new video ID
//     thumbnail: "/assets/saffron-buyer.jpeg", // Add appropriate thumbnail for this video
//     feedbackText: "Join Now!", // Optional feedback text
//   },
// ];

// export default function Testimonial() {
//   const [playing, setPlaying] = useState(null); // Track which video is playing

//   const handlePlay = (index) => {
//     setPlaying(index); // Set the index of the video to play
//   };

//   const handleVideoEnd = () => {
//     setPlaying(null); // Reset the playing state when video ends
//   };

//   return (
//     <div className="testimonial-container">
//       <h1 className="testimonial-title">Testimonials</h1>
//       {/* YouTube Videos in Swiper */}
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={20}
//         autoplay={{
//           delay: 3000, // Auto-slide delay in milliseconds
//           disableOnInteraction: false,
//           enabled: playing === null, // Disable autoplay when video is playing
//         }}
//         pagination={{ clickable: true }}
//         breakpoints={{
//           "@0.00": { slidesPerView: 1, spaceBetween: 20 },
//           "@0.75": { slidesPerView: 2, spaceBetween: 30 },
//           "@1.00": { slidesPerView: 3, spaceBetween: 40 },
//         }}
//         modules={[Pagination, Autoplay]}
//         className="mySwiper"
//       >
//         {youtubeVideos.map((video, index) => (
//           <SwiperSlide key={index}>
//             <div className={`video-container video-${index}`}>
//               {/* Show thumbnail image if the video is not playing */}
//               {playing !== index ? (
//                 <div
//                   className="video-thumbnail"
//                   onClick={() => handlePlay(index)} // On click, start playing the video
//                 >
//                   <img
//                     style={{ marginTop: "20px" }}
//                     src={video.thumbnail}
//                     alt={`Thumbnail for video ${index + 1}`}
//                     className="thumbnail-image"
//                   />
//                 </div>
//               ) : (
//                 <iframe
//                   width="720"
//                   height="405"
//                   src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
//                   title={`YouTube Video ${index + 1}`}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                   referrerPolicy="strict-origin-when-cross-origin"
//                   allowFullScreen
//                   className="video-frame"
//                   onEnded={handleVideoEnd} // Handle video end to reset the playing state
//                 ></iframe>
//               )}

//               {/* Add the feedback text with animation */}
//               <div className="video-feedback-text">{video.feedbackText}</div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./tesi.css";

// Import required modules
import { Pagination, Navigation } from "swiper/modules";

const youtubeVideos = [
    {
        videoId: "1T8ynVW2ZbI", // The new video ID
        thumbnail: "/assets/saffron-buyer.jpeg", // Add appropriate thumbnail for this video
        feedbackText: "Join Now!", // Optional feedback text
    },
    {
        videoId: "v0Xbf2DJdks",
        thumbnail: "/assets/plastic-itemsb2b.jpeg",
        feedbackText: "Join Now", // Add your text here
    },
    {
        videoId: "7-He-f1X7tQ",
        thumbnail: "/assets/ghena-kitchenss.jpeg",
        feedbackText: "Join Now", // Add your text here
    },
    {
        videoId: "ARYXZnS-h1A",
        thumbnail: "/assets/alovera-gel.jpeg",
        feedbackText: "Join Now", // Add your text here
    },
];

export default function Testimonial() {
    const [playing, setPlaying] = useState(null); // Track which video is playing

    const handlePlay = (index) => {
        setPlaying(index); // Set the index of the video to play
    };

    const handleVideoEnd = () => {
        setPlaying(null); // Reset the playing state when video ends
    };

    return (
        <div className="testimonial-container">
            <h1 className="testimonial-title">Testimonials</h1>
            {/* YouTube Videos in Swiper */}
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                pagination={{ clickable: true }}
                navigation={true} // Enable navigation arrows
                breakpoints={{
                    "@0.00": { slidesPerView: 1, spaceBetween: 20 },
                    "@0.75": { slidesPerView: 2, spaceBetween: 30 },
                    "@1.00": { slidesPerView: 3, spaceBetween: 40 },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {youtubeVideos.map((video, index) => (
                    <SwiperSlide key={index}>
                        <div className={`video-container video-${index}`}>
                            {/* Show thumbnail image if the video is not playing */}
                            {playing !== index ? (
                                <div
                                    className="video-thumbnail"
                                    onClick={() => handlePlay(index)} // On click, start playing the video
                                >
                                    <img
                                        style={{ marginTop: "20px" }}
                                        src={video.thumbnail}
                                        alt={`Thumbnail for video ${index + 1}`}
                                        className="thumbnail-image"
                                    />
                                </div>
                            ) : (
                                <iframe
                                    width="720"
                                    height="405"
                                    src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
                                    title={`YouTube Video ${index + 1}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    className="video-frame"
                                    onEnded={handleVideoEnd} // Handle video end to reset the playing state
                                ></iframe>
                            )}

                            {/* Add the feedback text with animation */}
                            <div className="video-feedback-text">{video.feedbackText}</div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
