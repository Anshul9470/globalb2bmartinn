// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Link } from "react-router-dom";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/css/navigation";

// // import required modules
// import "./allcat.css";

// const products = [
//   {
//     id: 1,
//     name: "Ac,Cooler & Fans",
//     image: "./assets/re-home.jpg",
//     link: "/electricprodcuts",
//   },

//   {
//     id: 3,
//     name: "Machines",
//     image: "./assets/re-machine.jpg",
//     link: "/industrySupplies",
//   },

//   {
//     id: 5,
//     name: "Foods & Products",
//     image: "./assets/re-food.jpg",
//     link: "/seafood-spices-beverages-dairy-products-snacks-confectionery-nuts-seeds-suppliers",
//   },
//   {
//     id: 6,
//     name: "Clothes",
//     image: "./assets/clothres-re.jpg",
//     link: "fashion-apprarels",
//   },
//   {
//     id: 4,
//     name: "Gifts & Crafts",
//     image: "./assets/re-gift.jpg",
//     link: "/gifts-items",
//   },

//   {
//     id: 8,
//     name: "Medicines",
//     image: "./assets/re-medicine.jpg",
//     link: "/medicinestore?search=medicine",
//   },
//   {
//     id: 2,
//     name: "Foot wears",
//     image: "./assets/foot-re.jpg",
//     link: "/footwear",
//   },
//   {
//     id: 9,
//     name: "Dresses",
//     image: "./assets/clothres-re.jpg",
//     link: "fashion-apprarels",
//   },
//   // Add more products as needed
// ];

// export default function FeaturedProduct() {
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
//     <div style={{ padding: "5px 10px" }}>
//       <h2 style={{ padding: "10px 20px" }}>
//         Browse Our <span style={{ color: "orange" }}>Categories</span>{" "}
//       </h2>
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={10}
//         pagination={{ clickable: true }}
//         onSwiper={setSwiperInstance}
//         onReachEnd={handleReachEnd}
//         onReachBeginning={handleReachStart}
//         breakpoints={{
//           640: { slidesPerView: 2, spaceBetween: 20 },
//           768: { slidesPerView: 4, spaceBetween: 40 },
//           1024: { slidesPerView: 7, spaceBetween: 30 },
//         }}
//         className="mySwiper"
//       >
//         {products.map((product) => (
//           <SwiperSlide key={`product-${product.id}`}>
//             <Link to={product.link}>
//               <div className="card">
//                 <img src={product.image} alt={product.name} />
//                 <p>{product.name}</p>
//               </div>
//             </Link>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       {/* <div className="itdevice">
//                 <img className='itimg' src="./assets/samridhi.png" alt="itdevice" />
//             </div> */}
//       <div className="itdevice-container">
//         <div className="itdevice">
//           <img className="itimg" src="./assets/samridhi.png" alt="itdevice" />
//         </div>
//         <div className="itdevice">
//           <img className="itimg" src="./assets/samridhi.png" alt="itdevice" />
//         </div>
//       </div>
//     </div>
//   );
// }
// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Link } from "react-router-dom";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Pagination, Navigation } from "swiper/modules";
// import "./allcat.css";

// const products = [
//   {
//     id: 1,
//     name: "Ac, Cooler & Fans",
//     image: "./assets/re-home.jpg",
//     link: "/electricprodcuts",
//   },
//   {
//     id: 2,
//     name: "Footwears",
//     image: "./assets/foot-re.jpg",
//     link: "/footwear",
//   },
//   {
//     id: 3,
//     name: "Machines",
//     image: "./assets/re-machine.jpg",
//     link: "/industrySupplies",
//   },
//   {
//     id: 4,
//     name: "Gifts & Crafts",
//     image: "./assets/re-gift.jpg",
//     link: "/gifts-items",
//   },
//   {
//     id: 5,
//     name: "Foods & Products",
//     image: "./assets/re-food.jpg",
//     link: "/seafood-spices-beverages-dairy-products-snacks-confectionery-nuts-seeds-suppliers",
//   },
//   {
//     id: 6,
//     name: "Clothes",
//     image: "./assets/clothres-re.jpg",
//     link: "/fashion-apprarels",
//   },
//   {
//     id: 8,
//     name: "Medicines",
//     image: "./assets/re-medicine.jpg",
//     link: "/medicinestore?search=medicine",
//   },
//   {
//     id: 9,
//     name: "Dresses",
//     image: "./assets/clothres-re.jpg",
//     link: "/fashion-apprarels",
//   },
// ];

// export default function FeaturedProduct() {
//   const [swiperInstance, setSwiperInstance] = useState(null);

//   const handleReachEnd = () => {
//     if (swiperInstance) {
//       const navigationButton = document.querySelector(
//         ".supp-swiper-button-next"
//       );
//       if (navigationButton)
//         navigationButton.style.display = swiperInstance.isEnd
//           ? "none"
//           : "block";
//     }
//   };

//   const handleReachStart = () => {
//     if (swiperInstance) {
//       const navigationButton = document.querySelector(
//         ".supp-swiper-button-prev"
//       );
//       if (navigationButton)
//         navigationButton.style.display = swiperInstance.isBeginning
//           ? "none"
//           : "block";
//     }
//   };

//   return (
//     <div className="supp-featured-container">
//       <h2 className="supp-featured-title">
//         Browse Our <span className="supp-highlight">Categories</span>
//       </h2>

//       <Swiper
//         slidesPerView={1}
//         spaceBetween={15}
//         pagination={{ clickable: true }}
//         navigation={{
//           nextEl: ".supp-swiper-button-next",
//           prevEl: ".supp-swiper-button-prev",
//         }}
//         modules={[Pagination, Navigation]}
//         onSwiper={setSwiperInstance}
//         onReachEnd={handleReachEnd}
//         onReachBeginning={handleReachStart}
//         breakpoints={{
//           640: { slidesPerView: 2, spaceBetween: 20 },
//           768: { slidesPerView: 4, spaceBetween: 25 },
//           1024: { slidesPerView: 6, spaceBetween: 30 },
//         }}
//         className="supp-swiper"
//       >
//         {products.map((product) => (
//           <SwiperSlide key={product.id}>
//             <Link to={product.link} className="supp-card-link">
//               <div className="supp-card">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="supp-card-img"
//                 />
//                 <p className="supp-card-name">{product.name}</p>
//               </div>
//             </Link>
//           </SwiperSlide>
//         ))}

//         <div className="supp-swiper-button-prev"></div>
//         <div className="supp-swiper-button-next"></div>
//       </Swiper>

//       {/* <div className="supp-itdevice-container">
//         <div className="supp-itdevice">
//           <img
//             className="supp-itimg"
//             src="./assets/samridhi.png"
//             alt="device"
//           />
//         </div>
//         <div className="supp-itdevice">
//           <img
//             className="supp-itimg"
//             src="./assets/samridhi.png"
//             alt="device"
//           />
//         </div>
//       </div> */}
//     </div>
//   );
// }
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "./allcat.css";

const products = [
  {
    id: 1,
    name: "Ac, Cooler & Fans",
    image: "./assets/re-home.jpg",
    link: "/electricprodcuts",
  },
  {
    id: 2,
    name: "Footwears",
    image: "./assets/foot-re.jpg",
    link: "/footwear",
  },
  {
    id: 3,
    name: "Machines",
    image: "./assets/re-machine.jpg",
    link: "/industrySupplies",
  },
  {
    id: 4,
    name: "Gifts & Crafts",
    image: "./assets/re-gift.jpg",
    link: "/gifts-items",
  },
  {
    id: 5,
    name: "Foods & Products",
    image: "./assets/re-food.jpg",
    link: "/seafood-spices-beverages-dairy-products-snacks-confectionery-nuts-seeds-suppliers",
  },
  {
    id: 6,
    name: "Clothes",
    image: "./assets/clothres-re.jpg",
    link: "/fashion-apprarels",
  },
  {
    id: 8,
    name: "Medicines",
    image: "./assets/re-medicine.jpg",
    link: "/medicinestore?search=medicine",
  },
  {
    id: 9,
    name: "Dresses",
    image: "./assets/clothres-re.jpg",
    link: "/fashion-apprarels",
  },
];

export default function FeaturedProduct() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleReachEnd = () => {
    if (swiperInstance) {
      const navigationButton = document.querySelector(
        ".supp-swiper-button-next"
      );
      if (navigationButton)
        navigationButton.style.display = swiperInstance.isEnd
          ? "none"
          : "block";
    }
  };

  const handleReachStart = () => {
    if (swiperInstance) {
      const navigationButton = document.querySelector(
        ".supp-swiper-button-prev"
      );
      if (navigationButton)
        navigationButton.style.display = swiperInstance.isBeginning
          ? "none"
          : "block";
    }
  };

  return (
    <div className="supp-featured-container">
      <h2 className="supp-featured-title">
        Discover Your <span className="supp-highlight"> Interests</span>
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".supp-swiper-button-next",
          prevEl: ".supp-swiper-button-prev",
        }}
        autoplay={{
          delay: 1000, // 5000ms = 5 seconds
          disableOnInteraction: false, // continue autoplay after user interaction
        }}
        modules={[Pagination, Navigation, Autoplay]}
        onSwiper={setSwiperInstance}
        onReachEnd={handleReachEnd}
        onReachBeginning={handleReachStart}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 4, spaceBetween: 25 },
          1024: { slidesPerView: 6, spaceBetween: 30 },
        }}
        className="supp-swiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Link to={product.link} className="supp-card-link">
              <div className="supp-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="supp-card-img"
                />
                <p className="supp-card-name">{product.name}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}

        <div className="supp-swiper-button-prev"></div>
        <div className="supp-swiper-button-next"></div>
      </Swiper>
    </div>
  );
}
