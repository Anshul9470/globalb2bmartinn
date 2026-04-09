// import React from 'react';
// import './supp.css'; // Import your CSS file for styling
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

// // Card component
// const Card = ({ imageSrc, title, address }) => {
//     return (

//         <div className="cardx">
//             <a href="/">
//                 <img src={imageSrc} alt={title} />
//                 <div className="card-detailsx">
//                     <h3>{title}</h3         >
//                     <p style={{ fontSize: '15px' }}> <FontAwesomeIcon style={{ paddingRight: '10px' }} icon={faLocationDot} />{address}</p>
//                 </div>
//             </a>
//         </div >

//     );
// };

// // App component
// const Supplier = () => {
//     // Sample data for cards
//     const cardsData = [

//         { id: 1, imageSrc: "./assets/leature.jpg", title: "Leather Products", address: "Kanpur,  ,  " },
//         { id: 2, imageSrc: "./assets/buckles.jpeg", title: "Buckles", address: "New Delhi,  " },
//         { id: 3, imageSrc: "./assets/tshirt.jpeg", title: "T-shirts", address: "New Delhi,  " },
//         { id: 4, imageSrc: "./assets/bussness.jpg", title: "Company Documentation", address: "New Delhi,  " },
//         { id: 5, imageSrc: "./assets/vs-7.jpeg", title: "RCC Cover Blocks", address: " New Delhi " },
//         { id: 6, imageSrc: "./assets/vs-1.jpeg", title: "Desi-Ghee", address: "Kanpur,  ,  " },
//         { id: 7, imageSrc: "./assets/vs-2.jpeg", title: "Safforon", address: "New Delhi,  " },

//         { id: 1, imageSrc: "./assets/vs-3.jpeg", title: "Wheat", address: "Kanpur,  ,  " },
//         { id: 2, imageSrc: "./assets/vs-4.jpeg", title: "Maize Dry Rosepe", address: "New Delhi,  " },
//         { id: 3, imageSrc: "./assets/vs-5.jpeg", title: "Wiremesh", address: "New Delhi,  " },
//         { id: 4, imageSrc: "./assets/vs-6.jpeg", title: "Gym Bands", address: "New Delhi,  " },
//         { id: 5, imageSrc: "./assets/bussness.jpg", title: "Company Documentation", address: "New Delhi,  " },
//         { id: 6, imageSrc: "./assets/leature.jpg", title: "Leather Products", address: "Kanpur,  ,  " },
//         { id: 7, imageSrc: "./assets/buckles.jpeg", title: "Buckles", address: "New Delhi,  " },

//     ];

//     return (
//         <>
//             <h2 style={{ padding: '10px 20px' }}>Our Exclusive   <span style={{ color: 'orange' }} > Suppliers</span></h2>
//             <div className="card-containerx">

//                 {cardsData.map(card => (
//                     <Card
//                         key={card.id}
//                         imageSrc={card.imageSrc}
//                         title={card.title}
//                         address={card.address}
//                     />
//                 ))}

//             </div>
//             <div className="itdevice-container">
//                 <div className="itdevice">
//                     <img className='itimg' src="./assets/bannerNew.png" alt="itdevice" />
//                 </div>
//                 <div className="itdevice">
//                     <img className='itimg' src="./assets/bannerNew.png" alt="itdevice" />
//                 </div>
//             </div>
//             {/* <div className="itdevice">
//                 <img className='itimg' src="./assets/catalog.png" alt="itdevice" />
//             </div> */}

//         </>
//     );
// };

// export default Supplier;
// import React from "react";
// import "./supp.css"; // Import your CSS file for styling
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

// // Card component
// const Card = ({ imageSrc, title, address, link }) => {
//   return (
//     <div className="cardx">
//       <Link to={link}>
//         <img src={imageSrc} alt={title} />
//         <div className="card-detailsx">
//           <h3>{title}</h3>
//           <p style={{ fontSize: "15px" }}>
//             <FontAwesomeIcon
//               style={{ paddingRight: "10px" }}
//               icon={faLocationDot}
//             />
//             {address}
//           </p>
//         </div>
//       </Link>
//     </div>
//   );
// };

// // App component
// const Supplier = () => {
//   // Sample data for cards
//   const cardsData = [
//     {
//       id: 1,
//       imageSrc: "./assets/r-leather.jpg",
//       title: "Leather Products",
//       address: "Kanpur, India",
//       link: "/bagsandbeltdealer?search=Leather%20Bags",
//     },
//     {
//       id: 2,
//       imageSrc: "./assets/re-buckle.jpg",
//       title: "Buckles",
//       address: "New Delhi, India",
//       link: "/bucklemanufacturer?search=buckle",
//     },
//     {
//       id: 3,
//       imageSrc: "./assets/re-tshirt.jpg",
//       title: "T-shirts",
//       address: "New Delhi, India",
//       link: "/garmentdedealer?search=tshirt",
//     },
//     {
//       id: 4,
//       imageSrc: "./assets/re-document.jpg",
//       title: "Company Documentation",
//       address: "New Delhi, India",
//       link: "/businesslicense?search=business",
//     },
//     {
//       id: 5,
//       imageSrc: "./assets/vs-7.jpeg",
//       title: "RCC Cover Blocks",
//       address: "New Delhi, India",
//       link: "/rcccoverblocks?search=rcc",
//     },
//     {
//       id: 6,
//       imageSrc: "./assets/re-ghee.jpg",
//       title: "Desi-Ghee",
//       address: "Kanpur, India",
//       link: "/",
//     },
//     {
//       id: 7,
//       imageSrc: "./assets/re-saffron.jpg",
//       title: "Saffron",
//       address: "New Delhi, India",
//       link: "/saffron-manufacturer?search=saffron",
//     },
//     {
//       id: 8,
//       imageSrc: "./assets/re-wheat.jpg",
//       title: "Wheat",
//       address: "Kanpur, India",
//       link: "/whearsupplier?search=wheat",
//     },
//     {
//       id: 9,
//       imageSrc: "./assets/re-mai.jpg",
//       title: "Maize Dry Rosepe",
//       address: "New Delhi, India",
//       link: "/maizemanu?search=maize",
//     },
//     {
//       id: 10,
//       imageSrc: "./assets/wiremesh1.jpg",
//       title: "Wiremesh",
//       address: "New Delhi, India",
//       link: "/wiremesh?search=mesh",
//     },
//     {
//       id: 11,
//       imageSrc: "./assets/gym-re.jpg",
//       title: "Gym Bands",
//       address: "New Delhi, India",
//       link: "/gymequipmentsupplier?search=gym%20equipments",
//     },
//     {
//       id: 12,
//       imageSrc: "./assets/re-wheat.jpg",
//       title: "Wheat",
//       address: "Kanpur, India",
//       link: "/whearsupplier?search=wheat",
//     },
//     {
//       id: 13,
//       imageSrc: "./assets/redry.jpg",
//       title: " Dry fruits",
//       address: "New Delhi, India",
//       link: "/dryfruitsmanu?search=dry",
//     },
//     {
//       id: 14,
//       imageSrc: "./assets/vs-5.jpeg",
//       title: "Wiremesh",
//       address: "New Delhi, India",
//       link: "/wiresuppliers?search=wire",
//     },
//   ];

//   return (
//     <>
//       <h2 style={{ padding: "10px 20px" }}>
//         Our Exclusive <span style={{ color: "orange" }}>Suppliers</span>
//       </h2>
//       <div className="card-containerx">
//         {cardsData.map((card) => (
//           <Card
//             key={card.id}
//             imageSrc={card.imageSrc}
//             title={card.title}
//             address={card.address}
//             link={card.link}
//           />
//         ))}
//       </div>
//       <div className="itdevice-container">
//         <div className="itdevice">
//           <img
//             width={400}
//             className="itimg"
//             src="./assets/Design1.png"
//             alt="itdevice"
//           />
//         </div>
//         <div className="itdevice">
//           <img
//             width={400}
//             className="itimg"
//             src="./assets/Design1.png"
//             alt="itdevice"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Supplier;
import React from "react";
import "./allcat.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

// Card component
const SupplierCard = ({ imageSrc, title, address, link }) => {
  return (
    <div className="supplier-card">
      <Link to={link} className="supplier-card-link">
        <div className="supplier-card-img-container">
          <img src={imageSrc} alt={title} className="supplier-card-img" />
        </div>
        <div className="supplier-card-details">
          <h3 className="supplier-card-title">{title}</h3>
          <p className="supplier-card-address">
            <FontAwesomeIcon icon={faLocationDot} className="supplier-icon" />
            {address}
          </p>
        </div>
      </Link>
    </div>
  );
};

// Main Supplier Component
const Supplier = () => {
  const cardsData = [
    {
      id: 3,
      imageSrc: "./assets/thisrt.jpg",
      title: "T-shirts",
      address: "New Delhi, India",
      link: "/garmentdedealer?search=tshirt",
    },
    {
      id: 5,
      imageSrc: "./assets/rc-ai.jpg",
      title: "RCC Cover Blocks",
      address: "New Delhi, India",
      link: "/rcccoverblocks?search=rcc",
    },
    {
      id: 6,
      imageSrc: "./assets/ghee99.jpg",
      title: "Desi-Ghee",
      address: "Kanpur, India",
      link: "/ghee-seller?search=ghee",
    },
    {
      id: 4,
      imageSrc: "./assets/docmat.jpg",
      title: "Company Documentation",
      address: "New Delhi, India",
      link: "/businesslicense?search=business",
    },
    {
      id: 10,
      imageSrc: "./assets/wiremesh2.jpg",
      title: "Wiremesh",
      address: "New Delhi, India",
      link: "/wiremesh?search=mesh",
    },
    {
      id: 11,
      imageSrc: "./assets/gym-re.jpg",
      title: "Gym Bands",
      address: "New Delhi, India",
      link: "/gymequipmentsupplier?search=gym%20equipments",
    },

    {
      id: 7,
      imageSrc: "./assets/re-saffron.jpg",
      title: "Saffron",
      address: "New Delhi, India",
      link: "/saffron-manufacturer?search=saffron",
    },
    {
      id: 8,
      imageSrc: "./assets/wheat-ai.jpg",
      title: "Wheat",
      address: "Kanpur, India",
      link: "/whearsupplier?search=wheat",
    },
    {
      id: 1,
      imageSrc: "./assets/leather-ai.jpg",
      title: "Leather Products",
      address: "Kanpur, India",
      link: "/bagsandbeltdealer?search=Leather%20Bags",
    },
    {
      id: 2,
      imageSrc: "./assets/buckele.jpg",
      title: "Buckles",
      address: "New Delhi, India",
      link: "/bucklemanufacturer?search=buckle",
    },
    {
      id: 9,
      imageSrc: "./assets/re-mai.jpg",
      title: "Maize Dry Rosepe",
      address: "New Delhi, India",
      link: "/maizemanu?search=maize",
    },

    {
      id: 13,
      imageSrc: "./assets/Dry-fruit-ai1.jpg",
      title: "Dry fruits",
      address: "New Delhi, India",
      link: "/dryfruitsmanu?search=dry",
    },

    // {
    //   id: 14,
    //   imageSrc: "./assets/vs-5.jpeg",
    //   title: "Wiremesh",
    //   address: "New Delhi, India",
    //   link: "/wiresuppliers?search=wire",
    // },
  ];

  return (
    <div className="supplier-section">
      <h2 className="supplier-title">
        Our Exclusive <span className="supplier-highlight">Suppliers</span>
      </h2>

      <div className="supplier-grid">
        {cardsData.map((card) => (
          <SupplierCard
            key={card.id}
            imageSrc={card.imageSrc}
            title={card.title}
            address={card.address}
            link={card.link}
          />
        ))}
      </div>

      <div className="supplier-itdevice-container">
        <div className="supplier-itdevice">
          <img
            src="./assets/Design1.png"
            alt="device"
            className="supplier-itimg"
          />
        </div>
        {/* <div className="supplier-itdevice">
          <img
            src="./assets/Design1.png"
            alt="device"
            className="supplier-itimg"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Supplier;
