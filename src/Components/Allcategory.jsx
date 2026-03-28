// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { Link } from "react-router-dom";
// import "swiper/css/pagination";

// // import required modules
// import "./allcat.css";

// const products = [
//   {
//     id: 1,
//     name: "Rice",
//     image: "./assets/re-re-rice.jpg",
//     link: "/agroproducts?search=rice",
//   },
//   {
//     id: 2,
//     name: "Potatoes",
//     image: "./assets/r-potato.jpg",
//     link: "/potatosupplier?search=potato",
//   },
//   {
//     id: 3,
//     name: "Leather Bags",
//     image: "./assets/rr-leather.jpg",
//     link: "/bagsandbeltdealer?search=Leather%20Bags",
//   },
//   {
//     id: 4,
//     name: "Banana Powder",
//     image: "./assets/banan-re.jpg",
//     link: "/bananapowder?search=banana%20powder",
//   },
//   {
//     id: 5,
//     name: "Cable",
//     image: "./assets/cable-re.jpg",
//     link: "/wiresuppliers?search=wire",
//   },
//   {
//     id: 9,
//     name: "curtains",
//     image: "./assets/re-curt.jpg",
//     link: "/texttiledealer?search=curtains",
//   },
//   {
//     id: 6,
//     name: "Suitcase",
//     image: "./assets/resuit.jpg",
//     link: "/suitcasemanufacturer?search=suitcase",
//   },
//   {
//     id: 7,
//     name: "Dry Fruits",
//     image: "./assets/redry.jpg",
//     link: "/dryfruitsmanu?search=dry",
//   },
//   { id: 8, name: "needles", image: "./assets/reneedle1.jpg", link: "/" },

//   // Add more products as needed
// ];

// const productsx = [
//   {
//     id: 1,
//     name: "Desi-Ghee",
//     image: "./assets/re=ghee.jpg",
//     link: "/ghee-seller",
//   },
//   {
//     id: 2,
//     name: "Safforon",
//     image: "./assets/re-saffron.jpg",
//     link: "saffron-manufacturer?search=saffron",
//   },
//   {
//     id: 3,
//     name: "Wheat",
//     image: "./assets/wheet-re.jpg",
//     link: "/whearsupplier?search=wheat",
//   },
//   {
//     id: 4,
//     name: "Maize Dry Rospe",
//     image: "./assets/remaize1.jpg",
//     link: "maizemanu?search=maize",
//   },
//   {
//     id: 5,
//     name: "Wiremesh",
//     image: "./assets/wiremesh1.jpg",
//     link: "/wiremesh?search=mesh",
//   },
//   {
//     id: 6,
//     name: "Gym Bands",
//     image: "./assets/gym-re.jpg",
//     link: "/gymequipmentsupplier?search=gym%20equipments",
//   },
//   {
//     id: 7,
//     name: "Dresses",
//     image: "./assets/dress-re.jpg",
//     link: "/garmentdedealer?search=garment",
//   },
//   { id: 8, name: "needles", image: "./assets/reneedle1.jpg", link: "/" },
//   {
//     id: 9,
//     name: "curtains",
//     image: "./assets/re-curt.jpg",
//     link: "/texttiledealer?search=curtains",
//   },
//   // Add more products as needed
// ];

// export default function Allcategory() {
//   const [swiperInstance, setSwiperInstance] = useState(null);

//   const handleReachEnd = () => {
//     if (swiperInstance) {
//       const isEnd = swiperInstance.isEnd;
//       const navigationButton = document.querySelector(".swiper-button-next");
//       if (navigationButton) {
//         navigationButton.style.display = isEnd ? "none" : "block";
//       }
//     }
//   };

//   const handleReachStart = () => {
//     if (swiperInstance) {
//       const isBeginning = swiperInstance.isBeginning;
//       const navigationButton = document.querySelector(".swiper-button-prev");
//       if (navigationButton) {
//         navigationButton.style.display = isBeginning ? "none" : "block";
//       }
//     }
//   };

//   return (
//     <>
//       <div style={{ padding: "5px 10px" }}>
//         <h2 style={{ padding: "10px 20px" }}>
//           Featured Products from{" "}
//           <span style={{ color: "orange" }}>Verified Suppliers</span>
//         </h2>
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={5}
//           pagination={{ clickable: true }}
//           onSwiper={setSwiperInstance}
//           onReachEnd={handleReachEnd}
//           onReachBeginning={handleReachStart}
//           breakpoints={{
//             640: { slidesPerView: 2, spaceBetween: 20 },
//             768: { slidesPerView: 4, spaceBetween: 40 },
//             1024: { slidesPerView: 7, spaceBetween: 30 },
//           }}
//           className="mySwiper"
//         >
//           {products.map((product) => (
//             <SwiperSlide key={`product-${product.id}`}>
//               <Link to={product.link}>
//                 <div className="card">
//                   <img src={product.image} alt={product.name} />
//                   <p>{product.name}</p>
//                 </div>
//               </Link>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//       <div style={{ padding: "0px 10px" }}>
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={5}
//           pagination={{ clickable: true }}
//           onSwiper={setSwiperInstance}
//           onReachEnd={handleReachEnd}
//           onReachBeginning={handleReachStart}
//           breakpoints={{
//             640: { slidesPerView: 2, spaceBetween: 20 },
//             768: { slidesPerView: 4, spaceBetween: 40 },
//             1024: { slidesPerView: 7, spaceBetween: 30 },
//           }}
//           className="mySwiper"
//         >
//           {productsx.map((product) => (
//             <SwiperSlide key={`product-${product.id}`}>
//               <Link to={product.link}>
//                 <div className="card">
//                   <img src={product.image} alt={product.name} />
//                   <p>{product.name}</p>
//                 </div>
//               </Link>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* <div className="itdevice">
//                     <img className='itimg' src="./assets/itwork.png" alt="itdevice" />
//                 </div> */}
//         <div className="itdevice-container">
//           <div className="itdevice">
//             <img
//               className="itimg"
//               src="./assets/latestban.png"
//               alt="itidevice"
//             />
//           </div>
//           <div className="itdevice">
//             <img
//               className="itimg"
//               src="./assets/latestban.png"
//               alt="itidevice"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// import React from "react";
// import { Link } from "react-router-dom";
// import "./allcat.css";

// const products = [
//   {
//     id: 1,
//     title: "Rice",
//     image: "./assets/re-re-rice.jpg",
//     items: [
//       "Basmati Rice",
//       "Non-Basmati Rice",
//       "Golden Sella Rice",
//       "Steam Rice",
//     ],
//     path: "/agroproducts",
//   },
//   {
//     id: 2,
//     title: "Potatoes",
//     image: "./assets/r-potato.jpg",
//     items: ["Fresh Potato", "Red Potato", "Baby Potato", "Frozen Potato"],
//   },
//   {
//     id: 3,
//     title: "Leather Bags",
//     image: "./assets/rr-leather.jpg",
//     items: [
//       "Handmade Leather Bags",
//       "Travel Bags",
//       "Office Leather Bags",
//       "Ladies Leather Bags",
//     ],
//   },
//   {
//     id: 4,
//     title: "Banana Powder",
//     image: "./assets/banan-re.jpg",
//     items: [
//       "Organic Banana Powder",
//       "Dried Banana Chips",
//       "Banana Extract",
//       "Banana Puree",
//     ],
//   },
//   {
//     id: 5,
//     title: "Cable",
//     image: "./assets/cable-re.jpg",
//     items: ["Copper Cable", "Aluminium Cable", "Power Cable", "Flexible Wire"],
//   },
//   {
//     id: 6,
//     title: "Suitcase",
//     image: "./assets/resuit.jpg",
//     items: [
//       "Trolley Suitcase",
//       "Hard Case Suitcase",
//       "Soft Case Suitcase",
//       "Travel Luggage",
//     ],
//   },
//   {
//     id: 7,
//     title: "Dry Fruits",
//     image: "./assets/redry.jpg",
//     items: ["Almonds", "Cashews", "Raisins", "Walnuts"],
//   },
//   {
//     id: 8,
//     title: "Curtains",
//     image: "./assets/re-curt.jpg",
//     items: [
//       "Designer Curtains",
//       "Cotton Curtains",
//       "Blackout Curtains",
//       "Printed Curtains",
//     ],
//   },
//   {
//     id: 9,
//     title: "Needles",
//     image: "./assets/reneedle1.jpg",
//     items: [
//       "Sewing Needles",
//       "Knitting Needles",
//       "Embroidery Needles",
//       "Medical Needles",
//     ],
//   },
//   {
//     id: 10,
//     title: "Desi Ghee",
//     image: "./assets/re=ghee.jpg",
//     items: ["Cow Ghee", "Buffalo Ghee", "Organic Ghee", "A2 Ghee"],
//   },
//   {
//     id: 11,
//     title: "Saffron",
//     image: "./assets/re-saffron.jpg",
//     items: [
//       "Kashmiri Saffron",
//       "Iranian Saffron",
//       "Mongra Saffron",
//       "Lacha Saffron",
//     ],
//   },
//   {
//     id: 12,
//     title: "Wheat",
//     image: "./assets/wheet-re.jpg",
//     items: ["Durum Wheat", "Whole Wheat", "Sharbati Wheat", "Wheat Flour"],
//   },
//   {
//     id: 13,
//     title: "Maize",
//     image: "./assets/remaize1.jpg",
//     items: ["Yellow Maize", "White Maize", "Sweet Corn", "Maize Flour"],
//   },
//   {
//     id: 14,
//     title: "Wiremesh",
//     image: "./assets/wiremesh1.jpg",
//     items: [
//       "Stainless Steel Wiremesh",
//       "Welded Wiremesh",
//       "Hexagonal Wiremesh",
//       "GI Wiremesh",
//     ],
//   },
//   {
//     id: 15,
//     title: "Gym Bands",
//     image: "./assets/gym-re.jpg",
//     items: ["Resistance Bands", "Loop Bands", "Pull-Up Bands", "Yoga Bands"],
//   },
// ];

// export default function Allcategory() {
//   return (
//     <>
//       <h2 style={{ padding: "30px 10px" }}>

//         Featured Products from{" "}
//         <span style={{ color: "orange" }}>Verified Suppliers</span>
//       </h2>
//       <div className="category-container">
//         {products.map((product) => (
//           <div className="category-card" key={product.id}>
//             <div className="image-wrap">
//               <Link to={product.path}>
//                 <img src={product.image} alt={product.title} />
//               </Link>
//             </div>

//             <h3>{product.title}</h3>
//             <ul>
//               {product.items.map((item, idx) => (
//                 <li key={idx}>
//                   <Link to="/">{item}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }
// import React from "react";
// import { Link } from "react-router-dom";
// import "./allcat.css";

// const products = [
//   {
//     id: 1,
//     title: "Rice",
//     image: "./assets/re-re-rice.jpg",
//     items: [
//       "Basmati Rice",
//       "Non-Basmati Rice",
//       "Golden Sella Rice",
//       "Steam Rice",
//     ],
//     path: "/agroproducts",
//   },
//   {
//     id: 2,
//     title: "Potatoes",
//     image: "./assets/r-potato.jpg",
//     items: ["Fresh Potato", "Red Potato", "Baby Potato", "Frozen Potato"],
//   },
//   {
//     id: 3,
//     title: "Leather Bags",
//     image: "./assets/rr-leather.jpg",
//     items: [
//       "Handmade Leather Bags",
//       "Travel Bags",
//       "Office Leather Bags",
//       "Ladies Leather Bags",
//     ],
//   },
//   {
//     id: 4,
//     title: "Banana Powder",
//     image: "./assets/banan-re.jpg",
//     items: [
//       "Organic Banana Powder",
//       "Dried Banana Chips",
//       "Banana Extract",
//       "Banana Puree",
//     ],
//   },
//   {
//     id: 5,
//     title: "Cable",
//     image: "./assets/cable-re.jpg",
//     items: ["Copper Cable", "Aluminium Cable", "Power Cable", "Flexible Wire"],
//   },
//   {
//     id: 6,
//     title: "Suitcase",
//     image: "./assets/resuit.jpg",
//     items: [
//       "Trolley Suitcase",
//       "Hard Case Suitcase",
//       "Soft Case Suitcase",
//       "Travel Luggage",
//     ],
//   },
//   {
//     id: 7,
//     title: "Dry Fruits",
//     image: "./assets/redry.jpg",
//     items: ["Almonds", "Cashews", "Raisins", "Walnuts"],
//   },
//   {
//     id: 8,
//     title: "Curtains",
//     image: "./assets/re-curt.jpg",
//     items: [
//       "Designer Curtains",
//       "Cotton Curtains",
//       "Blackout Curtains",
//       "Printed Curtains",
//     ],
//   },
//   {
//     id: 9,
//     title: "Needles",
//     image: "./assets/reneedle1.jpg",
//     items: [
//       "Sewing Needles",
//       "Knitting Needles",
//       "Embroidery Needles",
//       "Medical Needles",
//     ],
//   },
//   {
//     id: 10,
//     title: "Desi Ghee",
//     image: "./assets/re=ghee.jpg",
//     items: ["Cow Ghee", "Buffalo Ghee", "Organic Ghee", "A2 Ghee"],
//   },
//   {
//     id: 11,
//     title: "Saffron",
//     image: "./assets/re-saffron.jpg",
//     items: [
//       "Kashmiri Saffron",
//       "Iranian Saffron",
//       "Mongra Saffron",
//       "Lacha Saffron",
//     ],
//   },
//   {
//     id: 12,
//     title: "Wheat",
//     image: "./assets/wheet-re.jpg",
//     items: ["Durum Wheat", "Whole Wheat", "Sharbati Wheat", "Wheat Flour"],
//   },
//   {
//     id: 13,
//     title: "Maize",
//     image: "./assets/remaize1.jpg",
//     items: ["Yellow Maize", "White Maize", "Sweet Corn", "Maize Flour"],
//   },
//   {
//     id: 14,
//     title: "Wiremesh",
//     image: "./assets/wiremesh1.jpg",
//     items: [
//       "Stainless Steel Wiremesh",
//       "Welded Wiremesh",
//       "Hexagonal Wiremesh",
//       "GI Wiremesh",
//     ],
//   },
//   {
//     id: 15,
//     title: "Gym Bands",
//     image: "./assets/gym-re.jpg",
//     items: ["Resistance Bands", "Loop Bands", "Pull-Up Bands", "Yoga Bands"],
//   },
// ];

// export default function Allcategory() {
//   return (
//     <section className="allcat-section">
//       <h2 className="main-title">
//         Featured Products from{" "}
//         <span className="highlight">Verified Suppliers</span>
//       </h2>

//       <div className="category-grid">
//         {products.map((product) => (
//           <div className="category-card" key={product.id}>
//             <div className="category-img">
//               <Link to={product.path || "/"}>
//                 <img src={product.image} alt={product.title} />
//               </Link>
//             </div>

//             <div className="card-content">
//               <h3 className="category-title">{product.title}</h3>

//               {/* <ul className="item-list">
//                 {product.items.map((item, idx) => (
//                   <li key={idx}>
//                     <Link to="/">{item}</Link>
//                   </li>
//                 ))}
//               </ul> */}

//               <Link to="/register-Company" className="view-btn">
//                 View Suppliers
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   Globe,
//   CheckSquare,
//   Rocket,
//   Eye,
//   UserPlus,
//   ClipboardList,
//   Users,
// } from "lucide-react";
// import "./allcat.css";

// const products = [
//   {
//     id: 1,
//     title: "Rice",
//     image: "./assets/re-re-rice.jpg",
//     path: "/agroproducts",
//   },
//   {
//     id: 2,
//     title: "Potatoes",
//     image: "./assets/r-potato.jpg",
//   },
//   {
//     id: 3,
//     title: "Leather Bags",
//     image: "./assets/rr-leather.jpg",
//   },
//   {
//     id: 4,
//     title: "Banana Powder",
//     image: "./assets/banan-re.jpg",
//   },
//   {
//     id: 5,
//     title: "Cable",
//     image: "./assets/cable-re.jpg",
//   },
//   {
//     id: 6,
//     title: "Suitcase",
//     image: "./assets/resuit.jpg",
//   },
//   {
//     id: 7,
//     title: "Dry Fruits",
//     image: "./assets/redry.jpg",
//   },
//   {
//     id: 8,
//     title: "Curtains",
//     image: "./assets/re-curt.jpg",
//   },
//   {
//     id: 9,
//     title: "Needles",
//     image: "./assets/reneedle1.jpg",
//   },
//   {
//     id: 10,
//     title: "Desi Ghee",
//     image: "./assets/re=ghee.jpg",
//   },
//   {
//     id: 11,
//     title: "Saffron",
//     image: "./assets/re-saffron.jpg",
//   },
//   {
//     id: 12,
//     title: "Wheat",
//     image: "./assets/wheet-re.jpg",
//   },
//   {
//     id: 13,
//     title: "Maize",
//     image: "./assets/remaize1.jpg",
//   },
//   {
//     id: 14,
//     title: "Wiremesh",
//     image: "./assets/wiremesh1.jpg",
//   },
//   {
//     id: 15,
//     title: "Gym Bands",
//     image: "./assets/gym-re.jpg",
//   },
// ];

// export default function Allcategory() {
//   return (
//     <section className="allcat-section">
//       {/* ===== Why Partner Section ===== */}
//       <div className="why-partner">
//         <h2>
//           Why Partner with <span>GlobalB2BMart?</span>
//         </h2>
//         <div className="partner-grid">
//           <div className="partner-card">
//             <Globe className="icon" />
//             <h4>Global Reach</h4>
//             <p>Look for better exposure to international buyers and sellers.</p>
//           </div>
//           <div className="partner-card">
//             <CheckSquare className="icon" />
//             <h4>Verified Listings</h4>
//             <p>Only authenticated and verified business profiles.</p>
//           </div>
//           <div className="partner-card">
//             <Rocket className="icon" />
//             <h4>Lead Generation</h4>
//             <p>Get targeted leads and inquiries instantly.</p>
//           </div>
//           <div className="partner-card">
//             <Eye className="icon" />
//             <h4>Brand Visibility</h4>
//             <p>Promote your brand to thousands of buyers globally.</p>
//           </div>
//         </div>
//       </div>

//       {/* ===== Category Grid ===== */}
//       <h2 className="main-title">
//         Featured Products from{" "}
//         <span className="highlight">Verified Suppliers</span>
//       </h2>

//       <div className="category-grid">
//         {products.map((product) => (
//           <div className="category-card" key={product.id}>
//             <div className="category-img">
//               <Link to={product.path || "/"}>
//                 <img src={product.image} alt={product.title} />
//               </Link>
//             </div>
//             <h3 className="category-title">{product.title}</h3>
//             <Link to="/register-Company" className="view-btn">
//               View Suppliers
//             </Link>
//           </div>
//         ))}
//       </div>

//       {/* ===== Simple Steps Section ===== */}
//       <div className="simple-steps">
//         <div className="steps-header">
//           <h2>Simple Steps to Start Your B2B Journey</h2>
//           <Link to="/register-Company" className="join-btn">
//             Join GlobalB2BMart Today
//           </Link>
//         </div>
//         <div className="steps-grid">
//           <div className="step-card">
//             <div className="step-icon">
//               <UserPlus />
//             </div>
//             <h4>1. Register for Free</h4>
//             <p>Fast & easy business registration process.</p>
//           </div>
//           <div className="step-card">
//             <div className="step-icon">
//               <ClipboardList />
//             </div>
//             <h4>2. List or Post</h4>
//             <p>Showcase your products or services easily.</p>
//           </div>
//           <div className="step-card">
//             <div className="step-icon">
//               <Users />
//             </div>
//             <h4>3. Connect & Grow</h4>
//             <p>Build global business relationships.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import { Link } from "react-router-dom";
import "./allcat.css";

const products = [
  {
    id: 1,
    title: "Pulses",
    image: "./assets/ai-pulses.jpg",

    path: "/agroproducts",
  },
  {
    id: 2,
    title: "Saree",
    image: "./assets/sareesii.png",
    items: ["Fresh Potato", "Red Potato", "Baby Potato", "Frozen Potato"],
    path: "/sareesdealer",
  },
  {
    id: 3,
    title: "Rice",
    image: "./assets/ricemain.png",
    items: [
      "Handmade Leather Bags",
      "Travel Bags",
      "Office Leather Bags",
      "Ladies Leather Bags",
    ],
    path: "/rice-seller",
  },
  {
    id: 4,
    title: "Egg Shell Powder",
    image: "./assets/eggshellpowder.png",
    items: [
      "Organic Banana Powder",
      "Dried Banana Chips",
      "Banana Extract",
      "Banana Puree",
    ],
  },
  {
    id: 5,
    title: "Cable Tie",
    image: "./assets/ai-cable-tie.jpg",
    items: ["Copper Cable", "Aluminium Cable", "Power Cable", "Flexible Wire"],
    path: "/wiresuppliers",
  },
  {
    id: 6,
    title: "Fruits Powder",
    image: "./assets/fruitspowder.png",
    items: [
      "Trolley Suitcase",
      "Hard Case Suitcase",
      "Soft Case Suitcase",
      "Travel Luggage",
    ],
    path: "/fruitscomponent",
  },
  {
    id: 7,
    title: "Dry Fruits",
    image: "./assets/dry-fruit-ai.jpg",
    items: ["Almonds", "Cashews", "Raisins", "Walnuts"],
    path: "/dryfruitsmanu",
  },
  {
    id: 8,
    title: "PVC Pipes",
    image: "./assets/pvcpipes.png",
    items: [
      "Designer Curtains",
      "Cotton Curtains",
      "Blackout Curtains",
      "Printed Curtains",
    ],
    path: "/pipeseller",
  },
  {
    id: 7,
    title: "Spices",
    image: "./assets/ai-spices.jpg",
    items: ["Almonds", "Cashews", "Raisins", "Walnuts"],
    path: "/spices-dealers",
  },
  {
    id: 9,
    title: "Handicrafts",
    image: "./assets/handicraft.png",
    items: [
      "Sewing Needles",
      "Knitting Needles",
      "Embroidery Needles",
      "Medical Needles",
    ],
    path: "/handicraftItems",
  },
  {
    id: 10,
    title: "Desi Ghee",
    image: "./assets/ghee-ai.jpg",
    items: ["Cow Ghee", "Buffalo Ghee", "Organic Ghee", "A2 Ghee"],
    path: "/ghee-seller",
  },
  {
    id: 11,
    title: " Herbal Products",
    image: "./assets/herbalproducts.png",
    items: [
      "Kashmiri Saffron",
      "Iranian Saffron",
      "Mongra Saffron",
      "Lacha Saffron",
    ],
    path: "/hearbal-seller",
  },
  {
    id: 12,
    title: "Plastic Product",
    image: "./assets/plasticproduct.png",
    items: ["Durum Wheat", "Whole Wheat", "Sharbati Wheat", "Wheat Flour"],
    path: "/plastic",
  },
  {
    id: 13,
    title: "Furniture",
    image: "./assets/furniture.png",
    items: ["Yellow Maize", "White Maize", "Sweet Corn", "Maize Flour"],
    path: "/best-furniture-suppliers-in-india",
  },
  {
    id: 14,
    title: "Shirts",
    image: "./assets/shirts.png",
    items: [
      "Stainless Steel Wiremesh",
      "Welded Wiremesh",
      "Hexagonal Wiremesh",
      "GI Wiremesh",
    ],
    path: "/garmentdedealer",
  },
  {
    id: 15,
    title: "Gold Jewelry",
    image: "./assets/goldjellerw.png",
    items: ["Resistance Bands", "Loop Bands", "Pull-Up Bands", "Yoga Bands"],
    path: "/jewellery-seller",
  },
];

export default function Allcategory() {
  return (
    <>
      <section className="why-partner-section">
        <h2 className="section-title">
          Why Partner with <span>GlobalB2BMart?</span>
        </h2>

        <div className="partner-grid">
          <div className="partner-card">
            <img src="./assets/global-reach.png" alt="Global Reach" />
            <h3>Global Reach</h3>
            <p>Expand your business to international markets effortlessly.</p>
          </div>

          <div className="partner-card">
            <img src="./assets/verified-lead.jpg" alt="Verified Listings" />
            <h3>Verified Listings</h3>
            <p>
              Get authentic and verified supplier listings for trusted deals.
            </p>
          </div>

          <div className="partner-card">
            <img src="./assets/lead-genration.jpg" alt="Lead Generation" />
            <h3>Lead Generation</h3>
            <p>Generate high-quality leads and grow your business network.</p>
          </div>

          <div className="partner-card">
            <img src="./assets/brand-visility.jpeg" alt="Brand Visibility" />
            <h3>Brand Visibility</h3>
            <p>Boost your brand’s visibility across global B2B audiences.</p>
          </div>
        </div>
      </section>
      <section className="allcat-section">
        <h2 className="main-title2">
          Featured Products from{" "}
          <span className="highlight">Verified Suppliers</span>
        </h2>

        <div className="category-grid">
          {products.map((product) => (
            <div className="category-card" key={product.id}>
              <div className="category-img">
                <Link to={product.path || "/"}>
                  <img src={product.image} alt={product.title} />
                </Link>
              </div>

              <div className="card-content">
                <h3 className="category-title">{product.title}</h3>

                {/* <ul className="item-list">
                {product.items.map((item, idx) => (
                  <li key={idx}>
                    <Link to="/">{item}</Link>
                  </li>
                ))}
              </ul> */}

                {/* <Link to="/register-Company" className="view-btn"> */}
                <Link className="view-btn" to={product.path || "/"}>
                  View Suppliers
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* <section className="Simple-steps">
        <h2>Simple Steps to Start Your B2B Journey</h2>

        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Register for Free</h3>
            <p>Easy-to-Use Dashboard</p>
          </div>

          <div className="step">
            <div className="step-number">2</div>
            <h3>List or Post</h3>
            <p>Wide Product Categories</p>
          </div>

          <div className="step">
            <div className="step-number">3</div>
            <h3>Connect & Grow</h3>
            <p>Direct Business Leads</p>
          </div>
        </div>

        <Link to="/packages">
          <button style={{ width: "50%" }} className="join-btn">
            Join GlobalB2BMart Today
          </button>
        </Link>
      </section> */}

      <section className="Simple-steps">
        <video controls autoPlay muted loop playsInline className="bg-video">
          <source src="/assets/mainvideo.mp4" type="video/mp4" />
        </video>

        <div className="overlay"></div>

        <div className="content">
          <h2>Simple Steps to Start Your B2B Journey</h2>

          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Register for Free</h3>
              <p>Easy-to-Use Dashboard</p>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <h3>List or Post</h3>
              <p>Wide Product Categories</p>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <h3>Connect & Grow</h3>
              <p>Direct Business Leads</p>
            </div>
          </div>

          <Link to="/packages">
            <button style={{ width: "50%" }} className="join-btn">
              Join GlobalB2BMart Today
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
