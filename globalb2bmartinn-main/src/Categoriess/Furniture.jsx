import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./category_premium.css";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Furniture = () => {
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
          stagger: 0.05,
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
      id: "living-room",
      title: "Living Room Furniture",
      imageSrc: "./assets/fu1.jpeg",
      links: [
        { name: "Sofas", url: "/best-furnitures-supplier-in-india" },
        { name: "Coffee Tables", url: "/best-furnitures-supplier-in-india" },
        { name: "TV Stands", url: "/best-furnitures-supplier-in-india" },
        { name: "Bookshelves", url: "/best-furnitures-supplier-in-india" },
      ],
    },
    {
      id: "office",
      title: "Office Furniture",
      imageSrc: "./assets/fu2.jpeg",
      links: [
        { name: "Office Desks", url: "/best-furnitures-supplier-in-india" },
        { name: "Office Chairs", url: "/best-furnitures-supplier-in-india" },
        {
          name: "Conference Tables",
          url: "/best-furnitures-supplier-in-india",
        },
        { name: "Filing Cabinets", url: "/best-furnitures-supplier-in-india" },
      ],
    },
    {
      id: "outdoor",
      title: "Outdoor Furniture",
      imageSrc: "./assets/fu3.jpeg",
      links: [
        { name: "Patio Sets", url: "/best-furnitures-supplier-in-india" },
        { name: "Outdoor Benches", url: "/best-furnitures-supplier-in-india" },
        { name: "Hammocks", url: "/best-furnitures-supplier-in-india" },
        { name: "Garden Chairs", url: "/best-furnitures-supplier-in-india" },
      ],
    },
    {
      id: "kitchen",
      title: "Kitchen Furniture",
      imageSrc: "./assets/fu4.jpeg",
      links: [
        { name: "Kitchen Islands", url: "/best-furnitures-supplier-in-india" },
        { name: "Bar Stools", url: "/best-furnitures-supplier-in-india" },
        { name: "Pantry Cabinets", url: "/best-furnitures-supplier-in-india" },
        { name: "Dining Tables", url: "/best-furnitures-supplier-in-india" },
      ],
    },
    {
      id: "dining",
      title: "Dining Room Furniture",
      imageSrc: "./assets/fu5.jpeg",
      links: [
        { name: "Dining Tables", url: "/best-furnitures-supplier-in-india" },
        { name: "Dining Chairs", url: "/best-furnitures-supplier-in-india" },
        { name: "Buffets", url: "/best-furnitures-supplier-in-india" },
        { name: "Dining Sets", url: "/best-furnitures-supplier-in-india" },
      ],
    },
    {
      id: "home-office",
      title: "Home Office Furniture",
      imageSrc: "./assets/fu6.jpeg",
      links: [
        { name: "Computer Desks", url: "/best-furnitures-supplier-in-india" },
        { name: "Ergonomic Chairs", url: "/best-furnitures-supplier-in-india" },
        { name: "Bookcases", url: "/best-furnitures-supplier-in-india" },
        { name: "Desk Lamps", url: "/best-furnitures-supplier-in-india" },
      ],
    },
    {
      id: "home-theater",
      title: "Home Theater Furniture",
      imageSrc: "./assets/fu7.jpeg",
      links: [
        {
          name: "Entertainment Centers",
          url: "/best-furnitures-supplier-in-india",
        },
        { name: "Media Storage", url: "/best-furnitures-supplier-in-india" },
        { name: "Recliners", url: "/best-furnitures-supplier-in-india" },
        { name: "Speaker Stands", url: "/best-furnitures-supplier-in-india" },
      ],
    },
    {
      id: "entryway",
      title: "Entryway Furniture",
      imageSrc: "./assets/fu8.jpeg",
      links: [
        { name: "Console Tables", url: "/best-furnitures-supplier-in-india" },
        { name: "Coat Racks", url: "/best-furnitures-supplier-in-india" },
        { name: "Shoe Storage", url: "/best-furnitures-supplier-in-india" },
        { name: "Entryway Benches", url: "/best-furnitures-supplier-in-india" },
      ],
    },
    {
      id: "nursery",
      title: "Nursery Furniture",
      imageSrc: "./assets/fu9.jpeg",
      links: [
        { name: "Cribs", url: "/best-furnitures-supplier-in-india" },
        { name: "Changing Tables", url: "/best-furnitures-supplier-in-india" },
        {
          name: "Nursery Rocking Chairs",
          url: "/best-furnitures-supplier-in-india",
        },
        { name: "Storage Baskets", url: "/best-furnitures-supplier-in-india" },
      ],
    },
    {
      id: "library",
      title: "Library Furniture",
      imageSrc: "./assets/fu10.jpeg",
      links: [
        { name: "Bookshelves", url: "/best-furnitures-supplier-in-india" },
        { name: "Reading Chairs", url: "/best-furnitures-supplier-in-india" },
        { name: "Library Tables", url: "/best-furnitures-supplier-in-india" },
        { name: "Magazine Racks", url: "/best-furnitures-supplier-in-india" },
      ],
    },
    {
      id: "reception",
      title: "Reception Furniture",
      imageSrc: "./assets/fu11.jpeg",
      links: [
        { name: "Reception Desks", url: "/best-furnitures-supplier-in-india" },
        {
          name: "Waiting Room Chairs",
          url: "/best-furnitures-supplier-in-india",
        },
        { name: "Coffee Tables", url: "/best-furnitures-supplier-in-india" },
        { name: "Guest Sofas", url: "/best-furnitures-supplier-in-india" },
      ],
    },
    {
      id: "garage",
      title: "Garage Furniture",
      imageSrc: "./assets/fu12.jpeg",
      links: [
        { name: "Workbenches", url: "/best-furnitures-supplier-in-india" },
        { name: "Storage Cabinets", url: "/best-furnitures-supplier-in-india" },
        { name: "Tool Racks", url: "/best-furnitures-supplier-in-india" },
        { name: "Utility Shelves", url: "/best-furnitures-supplier-in-india" },
      ],
    },
  ];

  return (
    <div ref={mainRef}>
      <div className="pagetitle">
        <h1>Furniture Trade Directory & Networking Platform</h1>
      </div>

      <nav className="category-nav-bar">
        <div className="category-nav-pill">
            {products.slice(0, 6).map((p) => (
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
                                {product.links.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                    <a href={link.url}>{link.name}</a>
                                </li>
                                ))}
                                <li className="view-more-li">
                                    <a href="/best-furnitures-supplier-in-india">View More</a>
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
                GlobalB2BMart is the premier gateway to the furniture industry. We connect businesses with high-quality manufacturers and wholesalers, offering everything from bespoke living room pieces to ergonomic office solutions.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Furniture;
