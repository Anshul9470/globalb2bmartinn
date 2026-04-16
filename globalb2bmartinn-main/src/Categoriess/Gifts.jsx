import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./category_premium.css";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Gifts = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    const ctx = gsap.context(() => {
      gsap.fromTo(".pagetitle h1", 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
      );

      const sections = gsap.utils.toArray(".category-section");
      sections.forEach((section) => {
        gsap.fromTo(section, 
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              toggleActions: "play none none none"
            }
          }
        );
      });

      gsap.fromTo(".l1-box", 
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.3
        }
      );
    }, mainRef);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  const products = [
    {
      id: "wooden-crafts",
      title: "Wooden Handicrafts",
      imageSrc: "./assets/gi2.jpeg",
      links: [
        { name: "Wooden Storage Boxes", url: "/decorativeItems" },
        { name: "Wooden Miniatures", url: "/decorativeItems" },
        { name: "Wooden Sculptures", url: "/decorativeItems" },
        { name: "Decorative Wooden Artifacts", url: "/decorativeItems" },
      ],
    },
    {
      id: "religious-statues",
      title: "Religious Statue",
      imageSrc: "./assets/gi3.jpeg",
      links: [
        { name: "Radha Krishna Sculpture", url: "/arts" },
        { name: "Buddha Figurine", url: "/arts" },
        { name: "Lord Shiva Statue", url: "/arts" },
        { name: "God Father Statue", url: "/arts" },
      ],
    },
    {
      id: "metal-crafts",
      title: "Metal Handicrafts",
      imageSrc: "./assets/gi4.jpeg",
      links: [
        { name: "Metallic Table Lamps", url: "/handicraftItems" },
        { name: "Metal Storage Boxes", url: "/handicraftItems" },
        { name: "Metallic Gifts", url: "/handicraftItems" },
        { name: "Metal Decorative Balls", url: "/handicraftItems" },
      ],
    },
    {
      id: "acrylic-crafts",
      title: "Acrylic Crafts",
      imageSrc: "./assets/gi1.jpeg",
      links: [
        { name: "Transparent Board", url: "/arts" },
        { name: "Acrylic Letters", url: "/arts" },
        { name: "Clear Acrylic Boxes", url: "/arts" },
        { name: "Acrylic Photo Frame", url: "/arts" },
      ],
    },
    {
      id: "greeting-cards",
      title: "Greeting Cards",
      imageSrc: "./assets/gi5.jpeg",
      links: [
        { name: "Anniversary Card", url: "//businesslicense" },
        { name: "Thank You Card", url: "//businesslicense" },
        { name: "Holiday Greeting Card", url: "//businesslicense" },
        { name: "Custom Greeting Cards", url: "//businesslicense" },
      ],
    },
    {
      id: "gift-hampers",
      title: "Gifts",
      imageSrc: "./assets/gi6.jpeg",
      links: [
        { name: "Gift Hampers", url: "/giftsstore" },
        { name: "Personalized Gifts", url: "/giftsstore" },
        { name: "Gift Vouchers", url: "/giftsstore" },
        { name: "Luxury Gifts", url: "/giftsstore" },
      ],
    },
    {
      id: "clocks",
      title: "Clocks",
      imageSrc: "./assets/gi7.jpeg",
      links: [
        { name: "Digital Clock", url: "#" },
        { name: "Desk Clocks", url: "#" },
        { name: "Grandfather Clocks", url: "#" },
        { name: "Mantel Clocks", url: "#" },
      ],
    },
    {
      id: "candle-crafts",
      title: "Candles Crafts",
      imageSrc: "./assets/gi8.jpeg",
      links: [
        { name: "Tealight Candles", url: "/candledealers" },
        { name: "Scented Candles", url: "/candledealers" },
        { name: "Decorative Candles", url: "/candledealers" },
        { name: "Taper Candles", url: "/candledealers" },
      ],
    },
    {
      id: "bead-crafts",
      title: "Bead Crafts",
      imageSrc: "./assets/gi9.jpeg",
      links: [
        { name: "Glass Beads", url: "#" },
        { name: "Seed Beads", url: "#" },
        { name: "Crystal Beads", url: "#" },
        { name: "Wooden Beads", url: "#" },
      ],
    },
    {
      id: "antiques",
      title: "Antiques & Collectibles",
      imageSrc: "./assets/gi10.jpeg",
      links: [
        {
          name: "Vintage Watches",
          url: "/https://www.globalb2bmart.com/best-furniture-suppliers-in-india",
        },
        {
          name: "Antique Furniture",
          url: "/https://www.globalb2bmart.com/best-furniture-suppliers-in-india",
        },
        {
          name: "Rare Stamps",
          url: "/https://www.globalb2bmart.com/best-furniture-suppliers-in-india",
        },
        {
          name: "Old Paintings",
          url: "/https://www.globalb2bmart.com/best-furniture-suppliers-in-india",
        },
      ],
    },
  ];

  return (
    <div ref={mainRef}>
      <div className="pagetitle">
        <h1>Gifts & Crafts Trade Directory & Networking Platform</h1>
      </div>

      <nav className="category-nav-bar">
        <div className="category-nav-pill">
            {products.slice(0, 5).map((p) => (
                <a key={p.id} href={`#${p.id}`}>{p.title.split(' ')[0]}</a>
            ))}
        </div>
      </nav>

      <div className="l1-section">
        <div className="container">
          <section className="category-section">
            <div className="row l1-box-wrap">
                {products.map((product, index) => (
                <div key={index} id={product.id} className="col-4">
                    <div className="l1-box">
                    <h2 className="l1-heading">
                        <a href="#">{product.title}</a>
                    </h2>
                    <div className="l1-content-flex">
                        <div className="l1-image-area">
                            <figure className="glass-image-container">
                                <img
                                src={product.imageSrc}
                                alt={product.title}
                                width={95}
                                height={95}
                                loading="lazy"
                                />
                            </figure>
                        </div>
                        <div className="l1-links-area">
                            <ul>
                                {product.links.map((link, idx) => (
                                <li key={idx}>
                                    <a href={link.url}>{link.name}</a>
                                </li>
                                ))}
                                <li className="view-more-li">
                                    <a href="#">View More</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
                ))}
            </div>
          </section>
        </div>
      </div>

      <div className="content-page-premium">
        <div className="container">
            <div className="glass-info-card">
                <p>
                GlobalB2BMart is the leading destination for Gifts & Crafts. Discover unique handicrafts, antiques, and personalized gifts from verified suppliers and skilled artisans worldwide.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Gifts;
