// import React, { useState, useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// // Make sure to include navigation styles

// // import './country.css';

// const cardData = [
//     { id: 1, title: 'Delhi', imageUrl: './assets/city-delhi.webp' },
//     { id: 2, title: 'Maharashtra', imageUrl: './assets/city-mumbai.webp' },
//     { id: 3, title: 'Tamil Nadu', imageUrl: './assets/city-chennai.webp' },
//     { id: 4, title: 'West-Bengal', imageUrl: './assets/city-kolkata.webp' },
//     { id: 5, title: 'Karnataka', imageUrl: './assets/city-banglore.webp' },
//     { id: 6, title: 'Gujarat', imageUrl: './assets/city-ahmedabad.webp' },
//     { id: 7, title: 'Madhya Pradesh', imageUrl: './assets/city-kanpur.webp' },
//     { id: 8, title: 'Bihar', imageUrl: './assets/city-patna.webp' },
//     { id: 9, title: 'Uttar Pradesh', imageUrl: './assets/city-vizag.webp' },

// ];

// export default function Country() {
//     const appendNumber = useRef(cardData.length + 1);
//     const [slides, setSlides] = useState(cardData);

//     const append = () => {
//         const newCard = { id: appendNumber.current++, title: `Card ${appendNumber.current}`, imageUrl: 'https://via.placeholder.com/150x150?text=Image' };
//         setSlides([...slides, newCard]);
//     };

//     return (<>
//         <h2 style={{ margin: '10px 20px' }}>Find suppliers by State</h2>
//         <a href="/">
//             <button id='view-all' style={{ float: 'right', backgroundColor: 'transparent', color: 'black', border: 'none', marginRight: '29px', cursor: 'pointer' }}>View All <FontAwesomeIcon icon={faArrowRight} /></button>
//         </a>
//         <div className="swiper-container">
//             <div className="swiper-wrapper">
//                 <Swiper
//                     slidesPerView={10} // Default slides per view for larger screens
//                     spaceBetween={10}
//                     pagination={{ clickable: true }}
//                     navigation={true}
//                     className="mySwiper"
//                     breakpoints={{
//                         // Responsive breakpoints
//                         1024: {
//                             slidesPerView: 7, // Render 6 cards per view on tablets
//                         },
//                         768: {
//                             slidesPerView: 4, // Render 4 cards per view on mobile landscape
//                         },
//                         210: {
//                             slidesPerView: 3, // Render 3 cards per view on mobile portrait
//                         },
//                     }}
//                 >
//                     {slides.map((card) => (
//                         <SwiperSlide key={card.id}>
//                             <div className="swiper-slide circle-slide">
//                                 <a href={`#cardxx${card.id}`}>
//                                     <img width={180} height={180} style={{ borderRadius: '50%' }} src={card.imageUrl} alt={card.title} />
//                                     <span>{card.title}</span>
//                                 </a>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>

//         </div>
//     </>
//     );
// }
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/navigation";

// import required modules
import "./allcat.css";

const countrylist = [
  { id: 1, name: "Delhi", image: "./assets/city-delhi.webp", link: "#" },

  { id: 3, name: "Maharashtra", image: "/assets/city-mumbai.webp", link: "#" },

  { id: 5, name: "Tamil Nadu", image: "/assets/city-chennai.webp", link: "#" },
  {
    id: 6,
    name: "West-Bengal",
    image: "./assets/city-kolkata.webp",
    link: "#",
  },
  { id: 4, name: "Karnataka", image: "./assets/city-banglore.webp", link: "#" },

  { id: 8, name: "Gujarat", image: "./assets/city-ahmedabad.webp", link: "#" },
  {
    id: 2,
    name: "Madhya Pradesh",
    image: "./assets/city-kanpur.webp",
    link: "#",
  },
  { id: 9, name: "Bihar", image: "./assets/city-patna.webp", link: "#" },
  // Add more countrylist as needed
];

export default function Country() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleReachEnd = () => {
    if (swiperInstance) {
      const isEnd = swiperInstance.isEnd;
      const navigationButton = document.querySelector(".swiper-button-next");
      if (navigationButton) {
        navigationButton.style.display = isEnd ? "none" : "block";
      }
    }
  };

  const handleReachStart = () => {
    if (swiperInstance) {
      const isBeginning = swiperInstance.isBeginning;
      const navigationButton = document.querySelector(".swiper-button-prev");
      if (navigationButton) {
        navigationButton.style.display = isBeginning ? "none" : "block";
      }
    }
  };

  return (
    <>
      <div className="stateSupplier">
        <h2
          style={{ textAlign: "center", marginTop: "150px", fontSize: "26px" }}
        >
          Find suppliers by <span style={{ color: "orange" }}>State</span>{" "}
        </h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{ clickable: true }}
          onSwiper={setSwiperInstance}
          onReachEnd={handleReachEnd}
          onReachBeginning={handleReachStart}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 4, spaceBetween: 40 },
            1024: { slidesPerView: 7, spaceBetween: 30 },
          }}
          className="mySwiper"
        >
          {countrylist.map((countries) => (
            <SwiperSlide key={`countries-${countries.id}`}>
              <Link to={countries.link}>
                <div className="counteryCard">
                  <div>
                    <img
                      style={{ border: "8px solid white" }}
                      src={countries.image}
                      alt={countries.name}
                    />
                  </div>
                  <p>{countries.name}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
          {/* Explore More slide */}
          <SwiperSlide key="explore-more">
            <Link to="/explore">
              <div className="counteryCard exploreMoreSlide">
                <div className="exploreCircle">Explore More</div>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
