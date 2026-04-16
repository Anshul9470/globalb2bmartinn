// import React, { useEffect, useRef, useState } from "react";

// const VideoPopup = () => {
//     const [showPopup, setShowPopup] = useState(true);
//     const [showText, setShowText] = useState(false);
//     const canvasRef = useRef(null);

//     useEffect(() => {
//         if (!showPopup) return;

//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext("2d");

//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;

//         const particles = [];
//         const colors = ["#FFD700", "#FF4500", "#FF69B4", "#00FFFF", "#ADFF2F"];
//         const random = (min, max) => Math.random() * (max - min) + min;

//         class FireworkParticle {
//             constructor(x, y) {
//                 this.x = x;
//                 this.y = y;
//                 this.size = random(3, 7);
//                 this.speedX = random(-6, 6);
//                 this.speedY = random(-6, 6);
//                 this.color = colors[Math.floor(Math.random() * colors.length)];
//                 this.life = random(60, 100);
//             }
//             update() {
//                 this.x += this.speedX;
//                 this.y += this.speedY;
//                 this.speedY += 0.15;
//                 this.life--;
//                 this.size *= 0.95;
//             }
//             draw() {
//                 ctx.beginPath();
//                 ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//                 ctx.fillStyle = this.color;
//                 ctx.fill();
//             }
//         }

//         const createFirework = () => {
//             const x = random(100, canvas.width - 100);
//             const y = random(50, canvas.height / 2);
//             for (let i = 0; i < 80; i++) {
//                 particles.push(new FireworkParticle(x, y));
//             }
//         };

//         const animate = () => {
//             ctx.clearRect(0, 0, canvas.width, canvas.height);

//             particles.forEach((p, i) => {
//                 p.update();
//                 p.draw();
//                 if (p.life <= 0 || p.size <= 0.5) {
//                     particles.splice(i, 1);
//                 }
//             });

//             if (!showText && Math.random() < 0.07) createFirework();
//             requestAnimationFrame(animate);
//         };

//         animate();

//         // Show text after 4s
//         const textTimer = setTimeout(() => setShowText(true), 4000);
//         // Close popup after 8s (4s of text)
//         const closeTimer = setTimeout(() => setShowPopup(false), 8000);

//         const handleResize = () => {
//             canvas.width = window.innerWidth;
//             canvas.height = window.innerHeight;
//         };
//         window.addEventListener("resize", handleResize);

//         return () => {
//             clearTimeout(textTimer);
//             clearTimeout(closeTimer);
//             window.removeEventListener("resize", handleResize);
//         };
//     }, [showPopup]);

//     if (!showPopup) return null;

//     return (
//         <div
//             style={{
//                 position: "fixed",
//                 inset: 0,
//                 zIndex: 50,
//                 background: "transparent",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 pointerEvents: "none",
//             }}
//         >
//             <canvas
//                 ref={canvasRef}
//                 style={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     width: "100%",
//                     height: "100%",
//                     zIndex: 0,
//                     background: "transparent",
//                 }}
//             ></canvas>

//             {showText && (
//                 <h1
//                     style={{
//                         position: "absolute",
//                         top: "50%",
//                         left: "50%",
//                         transform: "translate(-50%, -50%)",
//                         color: "#FFD700",
//                         fontSize: "80px",
//                         fontWeight: "bold",
//                         textAlign: "center",
//                         textShadow:
//                             "0 0 30px #FFD700, 0 0 60px #FFA500, 0 0 100px #FF4500",
//                         fontFamily: "'Elsie Swash Caps', cursive",
//                         zIndex: 10,
//                     }}
//                 >
//                     🪔 Happy Diwali
//                 </h1>
//             )}
//         </div>
//     );
// };

// export default VideoPopup;

// import React, { useEffect, useRef, useState } from "react";

// const VideoPopup = () => {
//     const [showPopup, setShowPopup] = useState(true);
//     const [showText, setShowText] = useState(false);
//     const canvasRef = useRef(null);

//     useEffect(() => {
//         if (!showPopup) return;

//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext("2d");
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;

//         const colors = ["#FFD700", "#FF4500", "#FF69B4", "#00FFFF", "#ADFF2F"];
//         const random = (min, max) => Math.random() * (max - min) + min;

//         const particles = [];
//         const rockets = [];

//         class Particle {
//             constructor(x, y, color) {
//                 this.x = x;
//                 this.y = y;
//                 this.size = random(3, 6);
//                 this.speedX = random(-6, 6);
//                 this.speedY = random(-6, 6);
//                 this.gravity = 0.15;
//                 this.color = color;
//                 this.life = random(60, 100);
//             }
//             update() {
//                 this.x += this.speedX;
//                 this.y += this.speedY;
//                 this.speedY += this.gravity;
//                 this.life--;
//                 this.size *= 0.95;
//             }
//             draw() {
//                 ctx.beginPath();
//                 ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//                 ctx.fillStyle = this.color;
//                 ctx.fill();
//             }
//         }

//         class Rocket {
//             constructor() {
//                 this.x = random(50, canvas.width - 50);
//                 this.y = canvas.height;
//                 this.speedY = random(-8, -12);
//                 this.color = colors[Math.floor(Math.random() * colors.length)];
//                 this.exploded = false;
//                 this.width = 6;
//                 this.height = 20;
//             }
//             update() {
//                 if (!this.exploded) {
//                     this.y += this.speedY;
//                     this.speedY += 0.15; // gravity
//                     if (this.speedY >= 0) {
//                         this.explode();
//                     }
//                 }
//             }
//             explode() {
//                 for (let i = 0; i < 50; i++) {
//                     particles.push(new Particle(this.x, this.y, this.color));
//                 }
//                 this.exploded = true;
//             }
//             draw() {
//                 if (!this.exploded) {
//                     // Draw rocket body
//                     ctx.fillStyle = this.color;
//                     ctx.beginPath();
//                     ctx.moveTo(this.x, this.y); // tip
//                     ctx.lineTo(this.x - this.width / 2, this.y + this.height); // left base
//                     ctx.lineTo(this.x + this.width / 2, this.y + this.height); // right base
//                     ctx.closePath();
//                     ctx.fill();

//                     // Draw flame trail
//                     ctx.beginPath();
//                     ctx.moveTo(this.x, this.y + this.height);
//                     ctx.lineTo(this.x - this.width / 2, this.y + this.height + random(10, 20));
//                     ctx.lineTo(this.x + this.width / 2, this.y + this.height + random(10, 20));
//                     ctx.closePath();
//                     ctx.fillStyle = "orange";
//                     ctx.fill();
//                 }
//             }
//         }

//         const animate = () => {
//             ctx.clearRect(0, 0, canvas.width, canvas.height);

//             rockets.forEach((r, i) => {
//                 r.update();
//                 r.draw();
//                 if (r.exploded) rockets.splice(i, 1);
//             });

//             particles.forEach((p, i) => {
//                 p.update();
//                 p.draw();
//                 if (p.life <= 0 || p.size <= 0.5) {
//                     particles.splice(i, 1);
//                 }
//             });

//             if (!showText && Math.random() < 0.05) rockets.push(new Rocket());

//             requestAnimationFrame(animate);
//         };

//         animate();

//         const textTimer = setTimeout(() => setShowText(true), 4000);
//         const closeTimer = setTimeout(() => setShowPopup(false), 8000);

//         const handleResize = () => {
//             canvas.width = window.innerWidth;
//             canvas.height = window.innerHeight;
//         };
//         window.addEventListener("resize", handleResize);

//         return () => {
//             clearTimeout(textTimer);
//             clearTimeout(closeTimer);
//             window.removeEventListener("resize", handleResize);
//         };
//     }, [showPopup]);

//     if (!showPopup) return null;

//     return (
//         <div
//             style={{
//                 position: "fixed",
//                 inset: 0,
//                 zIndex: 50,
//                 background: "transparent",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 pointerEvents: "none",
//             }}
//         >
//             <canvas
//                 ref={canvasRef}
//                 style={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     width: "100%",
//                     height: "100%",
//                     zIndex: 0,
//                     background: "transparent",
//                 }}
//             ></canvas>

//             {showText && (
//                 <h1
//                     style={{
//                         position: "absolute",
//                         top: "50%",
//                         left: "50%",
//                         transform: "translate(-50%, -50%)",
//                         color: "#FFD700",
//                         fontSize: "80px",
//                         fontWeight: "bold",
//                         textAlign: "center",
//                         textShadow:
//                             "0 0 30px #FFD700, 0 0 60px #FFA500, 0 0 100px #FF4500",
//                         fontFamily: "'Elsie Swash Caps', cursive",
//                         zIndex: 10,
//                     }}
//                 >
//                     🪔 Happy Diwali
//                 </h1>
//             )}
//         </div>
//     );
// };

// export default VideoPopup;
// import React, { useEffect, useRef, useState } from "react";

// const VideoPopup = () => {
//   const [showPopup, setShowPopup] = useState(true);
//   const [showText, setShowText] = useState(false);
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     if (!showPopup) return;

//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const colors = ["#FFD700", "#FF4500", "#FF69B4", "#00FFFF", "#ADFF2F"];
//     const random = (min, max) => Math.random() * (max - min) + min;

//     const particles = [];
//     const rockets = [];

//     class Particle {
//       constructor(x, y, color) {
//         const angle = Math.random() * Math.PI * 2;
//         const speed = random(3, 10);
//         this.x = x;
//         this.y = y;
//         this.size = random(2, 5);
//         this.speedX = Math.cos(angle) * speed;
//         this.speedY = Math.sin(angle) * speed;
//         this.gravity = 0.12;
//         this.friction = 0.98;
//         this.color = color;
//         this.life = random(70, 130);
//         this.alpha = 1;
//       }
//       update() {
//         this.x += this.speedX;
//         this.y += this.speedY;
//         this.speedX *= this.friction;
//         this.speedY *= this.friction;
//         this.speedY += this.gravity;
//         this.life--;
//         this.alpha -= 0.01;
//         this.size *= 0.98;
//       }
//       draw() {
//         ctx.save();
//         ctx.globalAlpha = this.alpha;
//         const gradient = ctx.createRadialGradient(
//           this.x,
//           this.y,
//           0,
//           this.x,
//           this.y,
//           this.size
//         );
//         gradient.addColorStop(0, "#fff");
//         gradient.addColorStop(0.2, this.color);
//         gradient.addColorStop(1, "transparent");

//         ctx.fillStyle = gradient;
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fill();
//         ctx.restore();
//       }
//     }

//     class Rocket {
//       constructor() {
//         this.x = random(50, canvas.width - 50);
//         this.y = canvas.height;
//         this.speedY = random(-11, -15);
//         this.color = colors[Math.floor(Math.random() * colors.length)];
//         this.exploded = false;
//         this.width = 6;
//         this.height = 20;
//       }
//       update() {
//         if (!this.exploded) {
//           this.y += this.speedY;
//           this.speedY += 0.2;
//           if (this.speedY >= 0) {
//             this.explode();
//           }
//         }
//       }
//       explode() {
//         const particleCount = 100 + Math.floor(Math.random() * 80);
//         for (let i = 0; i < particleCount; i++) {
//           particles.push(new Particle(this.x, this.y, this.color));
//         }
//         this.exploded = true;
//       }
//       draw() {
//         if (!this.exploded) {
//           ctx.fillStyle = this.color;
//           ctx.beginPath();
//           ctx.moveTo(this.x, this.y);
//           ctx.lineTo(this.x - this.width / 2, this.y + this.height);
//           ctx.lineTo(this.x + this.width / 2, this.y + this.height);
//           ctx.closePath();
//           ctx.fill();

//           ctx.beginPath();
//           ctx.moveTo(this.x, this.y + this.height);
//           ctx.lineTo(
//             this.x - this.width / 2,
//             this.y + this.height + random(15, 25)
//           );
//           ctx.lineTo(
//             this.x + this.width / 2,
//             this.y + this.height + random(15, 25)
//           );
//           ctx.closePath();
//           ctx.fillStyle = "orange";
//           ctx.fill();
//         }
//       }
//     }

//     const animate = () => {
//       ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       rockets.forEach((r, i) => {
//         r.update();
//         r.draw();
//         if (r.exploded) rockets.splice(i, 1);
//       });

//       particles.forEach((p, i) => {
//         p.update();
//         p.draw();
//         if (p.life <= 0 || p.size <= 0.5) {
//           particles.splice(i, 1);
//         }
//       });

//       if (!showText && Math.random() < 0.06) rockets.push(new Rocket());

//       requestAnimationFrame(animate);
//     };

//     animate();

//     const textTimer = setTimeout(() => setShowText(true), 4000);
//     const closeTimer = setTimeout(() => setShowPopup(false), 8000);

//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     window.addEventListener("resize", handleResize);

//     return () => {
//       clearTimeout(textTimer);
//       clearTimeout(closeTimer);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [showPopup]);

//   if (!showPopup) return null;

//   return (
//     <div
//       style={{
//         position: "fixed",
//         inset: 0,
//         zIndex: 50,
//         background: "transparent",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         pointerEvents: "none",
//       }}
//     >
//       <canvas
//         ref={canvasRef}
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           zIndex: 0,
//           background: "transparent",
//         }}
//       ></canvas>

//       {showText && (
//         <h1
//           style={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             color: "#FFD700",
//             fontSize: "80px",
//             fontWeight: "bold",
//             textAlign: "center",
//             textShadow: "0 0 30px #FFD700, 0 0 60px #FFA500, 0 0 100px #FF4500",
//             fontFamily: "'Elsie Swash Caps', cursive",
//             zIndex: 10,
//           }}
//         >
//           Happy Diwali
//         </h1>
//       )}
//     </div>
//   );
// };

// export default VideoPopup;

import React, { useEffect, useRef, useState } from "react";

const VideoPopup = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [showText, setShowText] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!showPopup) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ["#FFD700", "#C0C0C0"]; // GOLD and SILVER only
    const random = (min, max) => Math.random() * (max - min) + min;

    const particles = [];
    const rockets = [];

    class Particle {
      constructor(x, y, color) {
        const angle = Math.random() * Math.PI * 2;
        const speed = random(4, 14); // wider area burst
        this.x = x;
        this.y = y;
        this.size = random(2, 6);
        this.speedX = Math.cos(angle) * speed;
        this.speedY = Math.sin(angle) * speed;
        this.gravity = 0.1;
        this.friction = 0.97;
        this.color = color;
        this.life = random(80, 150);
        this.alpha = 1;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.speedX *= this.friction;
        this.speedY *= this.friction;
        this.speedY += this.gravity;
        this.life--;
        this.alpha -= 0.007;
        this.size *= 0.985;
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.size * 2
        );
        gradient.addColorStop(0, "#fff");
        gradient.addColorStop(0.2, this.color);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    class Rocket {
      constructor() {
        this.x = random(100, canvas.width - 100);
        this.y = canvas.height;
        this.speedY = random(-12, -17);
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.exploded = false;
        this.width = 6;
        this.height = 20;
      }
      update() {
        if (!this.exploded) {
          this.y += this.speedY;
          this.speedY += 0.25;
          if (this.speedY >= 0) {
            this.explode();
          }
        }
      }
      explode() {
        const particleCount = 200 + Math.floor(Math.random() * 100); // Bigger burst
        for (let i = 0; i < particleCount; i++) {
          particles.push(new Particle(this.x, this.y, this.color));
        }
        this.exploded = true;
      }
      draw() {
        if (!this.exploded) {
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(this.x - this.width / 2, this.y + this.height);
          ctx.lineTo(this.x + this.width / 2, this.y + this.height);
          ctx.closePath();
          ctx.fill();

          // glowing tail
          const tailGradient = ctx.createLinearGradient(
            this.x,
            this.y + this.height,
            this.x,
            this.y + this.height + 50
          );
          tailGradient.addColorStop(0, this.color);
          tailGradient.addColorStop(1, "transparent");
          ctx.fillStyle = tailGradient;
          ctx.beginPath();
          ctx.rect(
            this.x - this.width / 3,
            this.y + this.height,
            this.width / 1.5,
            50
          );
          ctx.fill();
        }
      }
    }

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      rockets.forEach((r, i) => {
        r.update();
        r.draw();
        if (r.exploded) rockets.splice(i, 1);
      });

      particles.forEach((p, i) => {
        p.update();
        p.draw();
        if (p.life <= 0 || p.size <= 0.5) {
          particles.splice(i, 1);
        }
      });

      if (!showText && Math.random() < 0.08) rockets.push(new Rocket());

      requestAnimationFrame(animate);
    };

    animate();

    const textTimer = setTimeout(() => setShowText(true), 4000);
    const closeTimer = setTimeout(() => setShowPopup(false), 9000);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(closeTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, [showPopup]);

  if (!showPopup) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        background: "transparent",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pointerEvents: "none",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          background: "transparent",
        }}
      ></canvas>

      {showText && (
        <h1
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) rotate(0deg)",
            color: "#FFD700",
            fontSize: "90px",
            fontWeight: "bold",
            textAlign: "center",
            textShadow: "0 0 30px #FFD700, 0 0 60px #C0C0C0, 0 0 100px #FFA500",
            fontFamily: "'Elsie Swash Caps', cursive",
            animation: "rotateIn 3s ease-in-out forwards",
            zIndex: 10,
          }}
        >
          Happy Diwali
        </h1>
      )}

      <style>{`
        @keyframes rotateIn {
          0% {
            transform: translate(-50%, -50%) rotate(-360deg) scale(0);
            opacity: 0;
          }
          60% {
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) rotate(0deg) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default VideoPopup;
