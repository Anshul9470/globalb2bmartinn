// // Burst.js
// import React, { useRef, useEffect } from "react";
// import mojs from "@mojs/core";

// const Burst = () => {
//   const burstYellowRef = useRef(null);
//   const burstGreenRef = useRef(null);
//   const burstRedRef = useRef(null);

//   useEffect(() => {
//     // Initialize the yellow burst
//     burstYellowRef.current = new mojs.Burst({
//       parent: "#burst-container",
//       radius: { 0: 100 },
//       count: 10,
//       children: {
//         shape: "circle",
//         radius: { 10: 0 },
//         fill: "yellow",
//         duration: 2000,
//         easing: "cubic.out",
//         x: { 0: "random(-100, 100)" }, // Random x-offset
//         y: { 0: "random(-100, 100)" }, // Random y-offset
//       },
//     });

//     // Initialize the green burst
//     burstGreenRef.current = new mojs.Burst({
//       parent: "#burst-container",
//       radius: { 0: 100 },
//       count: 10,
//       children: {
//         shape: "circle",
//         radius: { 10: 0 },
//         fill: "green",
//         duration: 2000,
//         easing: "cubic.out",
//         x: { 0: "random(-100, 100)" }, // Random x-offset
//         y: { 0: "random(-100, 100)" }, // Random y-offset
//       },
//     });

//     // Initialize the red burst
//     burstRedRef.current = new mojs.Burst({
//       parent: "#burst-container",
//       radius: { 0: 100 },
//       count: 10,
//       children: {
//         shape: "circle",
//         radius: { 10: 0 },
//         fill: "red",
//         duration: 2000,
//         easing: "cubic.out",
//         x: { 0: "random(-100, 100)" }, // Random x-offset
//         y: { 0: "random(-100, 100)" }, // Random y-offset
//       },
//     });
//   }, []);

//   const triggerBurst = () => {
//     // Set horizontal positions for the bursts
//     burstYellowRef.current.tune({ x: -150 }); // Left burst
//     burstGreenRef.current.tune({ x: 0 }); // Center burst
//     burstRedRef.current.tune({ x: 150 }); // Right burst

//     // Replay each burst at the same time
//     burstYellowRef.current.replay();
//     burstGreenRef.current.replay();
//     burstRedRef.current.replay();
//   };

//   return (
//     <div>
//       <button onClick={triggerBurst}>Show Burst</button>
//       <div
//         id="burst-container"
//         style={{
//           position: "relative",
//           width: "100%",
//           height: "100vh",
//           overflow: "hidden",
//         }}
//       />
//     </div>
//   );
// };

// export default Burst;
// Burst.js
// import React, { useRef, useEffect } from "react";
// import mojs from "@mojs/core";

// const Burst = () => {
//   const burstYellowRef = useRef(null);
//   const burstGreenRef = useRef(null);
//   const burstRedRef = useRef(null);
//   const burstBlueRef = useRef(null);
//   const burstOrangeRef = useRef(null);
//   const burstPurpleRef = useRef(null);
//   const burstPinkRef = useRef(null);
//   const burstGoldenRef = useRef(null);

//   useEffect(() => {
//     // Initialize the yellow burst
//     burstYellowRef.current = new mojs.Burst({
//       parent: "#burst-container",
//       radius: { 0: 100 },
//       count: 10,
//       children: {
//         shape: "circle",
//         radius: { 10: 0 },
//         fill: "yellow",
//         duration: 2000,
//         easing: "cubic.out",
//         x: { 0: "random(-100, 100)" },
//         y: { 0: "random(-100, 100)" },
//       },
//     });

//     // Initialize the green burst
//     burstGreenRef.current = new mojs.Burst({
//       parent: "#burst-container",
//       radius: { 0: 100 },
//       count: 10,
//       children: {
//         shape: "circle",
//         radius: { 10: 0 },
//         fill: "green",
//         duration: 2000,
//         easing: "cubic.out",
//         x: { 0: "random(-100, 100)" },
//         y: { 0: "random(-100, 100)" },
//       },
//     });

//     // Initialize the red burst
//     burstRedRef.current = new mojs.Burst({
//       parent: "#burst-container",
//       radius: { 0: 100 },
//       count: 10,
//       children: {
//         shape: "circle",
//         radius: { 10: 0 },
//         fill: "red",
//         duration: 2000,
//         easing: "cubic.out",
//         x: { 0: "random(-100, 100)" },
//         y: { 0: "random(-100, 100)" },
//       },
//     });

//     // Initialize the blue burst
//     burstBlueRef.current = new mojs.Burst({
//       parent: "#burst-container",
//       radius: { 0: 100 },
//       count: 10,
//       children: {
//         shape: "circle",
//         radius: { 10: 0 },
//         fill: "blue",
//         duration: 2000,
//         easing: "cubic.out",
//         x: { 0: "random(-100, 100)" },
//         y: { 0: "random(-100, 100)" },
//       },
//     });

//     // Initialize the orange burst
//     burstOrangeRef.current = new mojs.Burst({
//       parent: "#burst-container",
//       radius: { 0: 100 },
//       count: 10,
//       children: {
//         shape: "circle",
//         radius: { 10: 0 },
//         fill: "orange",
//         duration: 2000,
//         easing: "cubic.out",
//         x: { 0: "random(-100, 100)" },
//         y: { 0: "random(-100, 100)" },
//       },
//     });

//     // Initialize the purple burst
//     burstPurpleRef.current = new mojs.Burst({
//       parent: "#burst-container",
//       radius: { 0: 100 },
//       count: 10,
//       children: {
//         shape: "circle",
//         radius: { 10: 0 },
//         fill: "purple",
//         duration: 2000,
//         easing: "cubic.out",
//         x: { 0: "random(-100, 100)" },
//         y: { 0: "random(-100, 100)" },
//       },
//     });

//     // Initialize the pink burst
//     burstPinkRef.current = new mojs.Burst({
//       parent: "#burst-container",
//       radius: { 0: 100 },
//       count: 10,
//       children: {
//         shape: "circle",
//         radius: { 10: 0 },
//         fill: "pink",
//         duration: 2000,
//         easing: "cubic.out",
//         x: { 0: "random(-100, 100)" },
//         y: { 0: "random(-100, 100)" },
//       },
//     });

//     // Initialize the golden burst
//     burstGoldenRef.current = new mojs.Burst({
//       parent: "#burst-container",
//       radius: { 0: 100 },
//       count: 10,
//       children: {
//         shape: "circle",
//         radius: { 10: 0 },
//         fill: "gold",
//         duration: 2000,
//         easing: "cubic.out",
//         x: { 0: "random(-100, 100)" },
//         y: { 0: "random(-100, 100)" },
//       },
//     });
//   }, []);

//   const triggerBurst = () => {
//     // Set horizontal positions for the bursts
//     burstYellowRef.current.tune({ x: -510 }); // Left burst
//     burstGreenRef.current.tune({ x: -350 }); // Next burst
//     burstRedRef.current.tune({ x: -100 }); // Center burst
//     burstBlueRef.current.tune({ x: -30 }); // Next burst
//     burstOrangeRef.current.tune({ x: 30 }); // Next burst
//     burstPurpleRef.current.tune({ x: 100 }); // Next burst
//     burstPinkRef.current.tune({ x: 350 }); // Next burst
//     burstGoldenRef.current.tune({ x: 510 }); // Right burst

//     // Replay each burst at the same time
//     burstYellowRef.current.replay();
//     burstGreenRef.current.replay();
//     burstRedRef.current.replay();
//     burstBlueRef.current.replay();
//     burstOrangeRef.current.replay();
//     burstPurpleRef.current.replay();
//     burstPinkRef.current.replay();
//     burstGoldenRef.current.replay();
//   };

//   return (
//     <div>
//       <button onClick={triggerBurst}>Show Burst</button>
//       <div
//         id="burst-container"
//         style={{
//           position: "absolute",
//           width: "100%",
//           //   height: "100vh",
//           //   overflow: "hidden",
//         }}
//       />
//     </div>
//   );
// };

// export default Burst;

//+++++++++++++++++++++++++++++ Make This +++++++++++++++++++++++++++++++++++++++++

// // Burst.js
// import React, { useRef, useEffect } from "react";
// import mojs from "@mojs/core";

// const Burst = () => {
//   const burstYellowRef = useRef(null);
//   const burstGreenRef = useRef(null);
//   const burstRedRef = useRef(null);
//   const burstBlueRef = useRef(null);
//   const burstOrangeRef = useRef(null);
//   const burstPurpleRef = useRef(null);
//   const burstPinkRef = useRef(null);
//   const burstGoldenRef = useRef(null);

//   useEffect(() => {
//     // Initialize the bursts
//     burstYellowRef.current = new mojs.Burst({
//       parent: "#burst-container",
//       radius: { 0: 100 },
//       count: 10,
//       children: {
//         shape: "circle",
//         radius: { 10: 0 },
//         fill: "yellow",
//         duration: 2000,
//         easing: "cubic.out",
//         x: { 0: "random(-100, 100)" },
//         y: { 0: "random(-100, 100)" },
//       },
//     });

//     burstGreenRef.current = new mojs.Burst({
//       parent: "#burst-container",
//       radius: { 0: 100 },
//       count: 10,
//       children: {
//         shape: "circle",
//         radius: { 10: 0 },
//         fill: "green",
//         duration: 2000,
//         easing: "cubic.out",
//         x: { 0: "random(-100, 100)" },
//         y: { 0: "random(-100, 100)" },
//       },
//     });

//     burstRedRef.current = new mojs.Burst({
//       parent: "#burst-container",
//       radius: { 0: 100 },
//       count: 10,
//       children: {
//         shape: "circle",
//         radius: { 10: 0 },
//         fill: "red",
//         duration: 2000,
//         easing: "cubic.out",
//         x: { 0: "random(-100, 100)" },
//         y: { 0: "random(-100, 100)" },
//       },
//     });

//     burstBlueRef.current = new mojs.Burst({
//       parent: "#burst-container",
//       radius: { 0: 100 },
//       count: 10,
//       children: {
//         shape: "circle",
//         radius: { 10: 0 },
//         fill: "blue",
//         duration: 2000,
//         easing: "cubic.out",
//         x: { 0: "random(-100, 100)" },
//         y: { 0: "random(-100, 100)" },
//       },
//     });

//     burstOrangeRef.current = new mojs.Burst({
//       parent: "#burst-container",
//       radius: { 0: 100 },
//       count: 10,
//       children: {
//         shape: "circle",
//         radius: { 10: 0 },
//         fill: "orange",
//         duration: 2000,
//         easing: "cubic.out",
//         x: { 0: "random(-100, 100)" },
//         y: { 0: "random(-100, 100)" },
//       },
//     });

//     burstPurpleRef.current = new mojs.Burst({
//       parent: "#burst-container",
//       radius: { 0: 100 },
//       count: 10,
//       children: {
//         shape: "circle",
//         radius: { 10: 0 },
//         fill: "purple",
//         duration: 2000,
//         easing: "cubic.out",
//         x: { 0: "random(-100, 100)" },
//         y: { 0: "random(-100, 100)" },
//       },
//     });

//     burstPinkRef.current = new mojs.Burst({
//       parent: "#burst-container",
//       radius: { 0: 100 },
//       count: 10,
//       children: {
//         shape: "circle",
//         radius: { 10: 0 },
//         fill: "pink",
//         duration: 2000,
//         easing: "cubic.out",
//         x: { 0: "random(-100, 100)" },
//         y: { 0: "random(-100, 100)" },
//       },
//     });

//     burstGoldenRef.current = new mojs.Burst({
//       parent: "#burst-container",
//       radius: { 0: 100 },
//       count: 10,
//       children: {
//         shape: "circle",
//         radius: { 10: 0 },
//         fill: "gold",
//         duration: 2000,
//         easing: "cubic.out",
//         x: { 0: "random(-100, 100)" },
//         y: { 0: "random(-100, 100)" },
//       },
//     });

//     // Function to trigger bursts automatically
//     const bursts = [
//       burstYellowRef.current,
//       burstGreenRef.current,
//       burstRedRef.current,
//       burstBlueRef.current,
//       burstOrangeRef.current,
//       burstPurpleRef.current,
//       burstPinkRef.current,
//       burstGoldenRef.current,
//     ];

//     let currentBurstIndex = 0;

//     // Set interval to trigger bursts every 5 seconds
//     const intervalId = setInterval(() => {
//       const burst = bursts[currentBurstIndex];
//       burst.tune({ x: (currentBurstIndex - 4) * 100 }); // Adjust the position based on index
//       burst.replay();
//       currentBurstIndex = (currentBurstIndex + 1) % bursts.length; // Cycle through bursts
//     }, 5000);

//     // Cleanup interval on component unmount
//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div>
//       <div
//         id="burst-container"
//         style={{
//           position: "absolute",
//           width: "100%",
//           height: "100vh",
//           overflow: "hidden",
//         }}
//       />
//     </div>
//   );
// };

// export default Burst;

// import React, { useRef, useEffect } from "react";
// import mojs from "@mojs/core";

// const Burst = () => {
//   const burstYellowRef = useRef(null);
//   const burstGreenRef = useRef(null);
//   const burstRedRef = useRef(null);
//   const burstBlueRef = useRef(null);
//   const burstOrangeRef = useRef(null);
//   const burstPurpleRef = useRef(null);
//   const burstPinkRef = useRef(null);
//   const burstGoldenRef = useRef(null);

//   useEffect(() => {
//     // Initialize the bursts
//     burstYellowRef.current = createBurst("yellow");
//     burstGreenRef.current = createBurst("green");
//     burstRedRef.current = createBurst("red");
//     burstBlueRef.current = createBurst("blue");
//     burstOrangeRef.current = createBurst("orange");
//     burstPurpleRef.current = createBurst("purple");
//     burstPinkRef.current = createBurst("pink");
//     burstGoldenRef.current = createBurst("gold");

//     // Function to trigger all bursts
//     const triggerAllBursts = () => {
//       burstYellowRef.current.tune({ x: -510 }).replay();
//       burstGreenRef.current.tune({ x: -350 }).replay();
//       burstRedRef.current.tune({ x: -100 }).replay();
//       burstBlueRef.current.tune({ x: -30 }).replay();
//       burstOrangeRef.current.tune({ x: 30 }).replay();
//       burstPurpleRef.current.tune({ x: 100 }).replay();
//       burstPinkRef.current.tune({ x: 350 }).replay();
//       burstGoldenRef.current.tune({ x: 510 }).replay();
//     };

//     // Set interval to trigger bursts every 5 seconds
//     const intervalId = setInterval(triggerAllBursts, 5000);

//     // Cleanup the interval on component unmount
//     return () => clearInterval(intervalId);
//   }, []);

//   const createBurst = (color) => {
//     return new mojs.Burst({
//       parent: "#burst-container",
//       radius: { 0: 100 },
//       count: 10,
//       children: {
//         shape: "circle",
//         radius: { 10: 0 },
//         fill: color,
//         duration: 2000,
//         easing: "cubic.out",
//         x: { 0: "random(-100, 100)" },
//         y: { 0: "random(-100, 100)" },
//       },
//     });
//   };

//   return (
//     <div>
//       <div
//         id="burst-container"
//         style={{
//           position: "relative",
//           width: "100%",
//         }}
//       />
//     </div>
//   );
// };

// export default Burst;
// import React, { useRef, useEffect } from "react";
// import mojs from "@mojs/core";

// const Burst = () => {
//   const burstRef = useRef([]);

//   useEffect(() => {
//     // Initialize the bursts
//     const colors = [
//       "#FFD700",
//       "#FF4500",
//       "#FF6347",
//       "#FF8C00",
//       "#FFA500",
//       "#FF69B4",
//       "#FF1493",
//       "#FFD700",
//     ];

//     colors.forEach((color, index) => {
//       burstRef.current[index] = createBurst(color);
//     });

//     // Function to trigger all bursts
//     const triggerAllBursts = () => {
//       burstRef.current.forEach((burst, index) => {
//         burst.tune({ x: (index - 4) * 100 }).replay();
//       });
//     };

//     // Set interval to trigger bursts every 5 seconds
//     const intervalId = setInterval(triggerAllBursts, 5000);

//     // Cleanup the interval on component unmount
//     return () => clearInterval(intervalId);
//   }, []);

//   const createBurst = (color) => {
//     return new mojs.Burst({
//       parent: "#burst-container",
//       radius: { 0: 100 },
//       count: 10,
//       children: {
//         shape: "rect", // Change shape to represent firecrackers
//         radius: { 5: 0 }, // Adjust radius for firecracker effect
//         fill: color,
//         duration: 2000,
//         easing: "cubic.out",
//         x: { 0: "random(-100, 100)" },
//         y: { 0: "random(-100, 100)" },
//       },
//     });
//   };

//   return (
//     <div>
//       <div
//         id="burst-container"
//         style={{
//           position: "relative",
//           width: "100%",
//         }}
//       />
//     </div>
//   );
// };

// export default Burst;

//  Coin  Rainig
// import React, { useEffect } from "react";

// const Burst = () => {
//   useEffect(() => {
//     const container = document.getElementById("coin-container");
//     const totalCoins = 25;

//     for (let i = 0; i < totalCoins; i++) {
//       const coin = document.createElement("div");
//       coin.classList.add("coin");

//       coin.style.left = `${Math.random() * 100}%`;

//       const size = 20 + Math.random() * 30;
//       coin.style.width = `${size}px`;
//       coin.style.height = `${size}px`;

//       coin.style.animationDelay = `${Math.random() * 5}s`;
//       coin.style.animationDuration = `${4 + Math.random() * 4}s`;

//       container.appendChild(coin);
//     }
//   }, []);

//   return (
//     <>
//       <div id="coin-container"></div>

//       <style>{`
//         #coin-container {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           overflow: hidden;
//           z-index: 9999;
//           pointer-events: none;
//         }

//         .coin {
//           position: absolute;
//           top: -50px;
//           background: radial-gradient(circle, #ffd700 30%, #daa520 90%);
//           border-radius: 50%;
//           box-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
//           opacity: 0.9;
//           animation-name: fall;
//           animation-timing-function: linear;
//           animation-iteration-count: infinite;
//         }

//         @keyframes fall {
//           0% {
//             transform: translateY(-50px) rotate(0deg);
//             opacity: 1;
//           }
//           100% {
//             transform: translateY(110vh) rotate(360deg);
//             opacity: 0;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Burst;
// import React, { useEffect } from "react";

// const Burst = () => {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       const container = document.getElementById("coin-container");
//       const totalCoins = 25;

//       for (let i = 0; i < totalCoins; i++) {
//         const coin = document.createElement("div");
//         coin.classList.add("coin");

//         coin.style.left = `${Math.random() * 100}%`;

//         const size = 20 + Math.random() * 30;
//         coin.style.width = `${size}px`;
//         coin.style.height = `${size}px`;

//         coin.style.animationDelay = `${Math.random() * 5}s`;
//         coin.style.animationDuration = `${4 + Math.random() * 4}s`;

//         container.appendChild(coin);
//       }
//     }, 8000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       <div id="coin-container"></div>

//       <style>{`
//         #coin-container {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           overflow: hidden;
//           z-index: 9999;
//           pointer-events: none;
//         }

//         .coin {
//           position: absolute;
//           top: -50px;
//           background: radial-gradient(circle, #ffd700 30%, #daa520 90%);
//           border-radius: 50%;
//           box-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
//           opacity: 0.9;
//           animation-name: fall;
//           animation-timing-function: linear;
//           animation-iteration-count: infinite;
//         }

//         @keyframes fall {
//           0% {
//             transform: translateY(-50px) rotate(0deg);
//             opacity: 1;
//           }
//           100% {
//             transform: translateY(110vh) rotate(360deg);
//             opacity: 0;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Burst;

// Currency

import React, { useEffect } from "react";

const Burst = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const container = document.getElementById("coin-container");
      const totalCoins = 25; // Number of coins to fall

      for (let i = 0; i < totalCoins; i++) {
        const coin = document.createElement("div");
        coin.classList.add("coin");

        // Add the ₹ symbol
        const symbol = document.createElement("span");
        symbol.innerText = "₹";
        symbol.classList.add("coin-symbol");
        coin.appendChild(symbol);

        // Random horizontal position
        coin.style.left = `${Math.random() * 100}%`;

        // Random size
        const size = 40 + Math.random() * 30;
        coin.style.width = `${size}px`;
        coin.style.height = `${size}px`;

        // Random animation timing
        coin.style.animationDelay = `${Math.random() * 5}s`;
        coin.style.animationDuration = `${4 + Math.random() * 4}s`;

        container.appendChild(coin);
      }
    }, 8000); // Start after 15 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div id="coin-container"></div>

      <style>{`
        #coin-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 9999;
          pointer-events: none;
        }

        .coin {
          position: absolute;
          top: -50px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: radial-gradient(circle at 30% 30%, #ffd700, #daa520 70%);
          border-radius: 50%;
          box-shadow:
            inset 0 0 8px rgba(255, 255, 255, 0.6),
            inset 0 0 12px rgba(255, 215, 0, 0.8),
            0 0 15px rgba(255, 215, 0, 0.8);
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          transform: rotateY(0deg);
        }

        .coin-symbol {
          font-size: 1.5em;
          font-weight: bold;
          color: #fff;
          text-shadow: 0 0 5px #000, 0 0 10px rgba(255, 255, 255, 0.8);
          pointer-events: none;
          user-select: none;
        }

        @keyframes fall {
          0% {
            transform: translateY(-50px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Burst;
