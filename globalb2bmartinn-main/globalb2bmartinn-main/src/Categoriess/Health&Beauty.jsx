import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./category_premium.css";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const HealthAndBeauty = () => {
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
            id: "animal-care",
            title: 'Animal Medicines & Health Care',
            imageSrc: '/assets/he2.webp',
            links: [
                { name: 'Pcd Pharma Franchise', url: '#' },
                { name: 'Anthelmintics', url: '#' },
                { name: 'Veterinary Drugs', url: '#' },
                { name: 'Veterinary Instruments', url: '#' },
            ],
        },
        {
            id: "baby-care",
            title: 'Baby Care Products',
            imageSrc: '/assets/he1.webp',
            links: [
                { name: 'Diaper', url: '#' },
                { name: 'Baby Diapers', url: '#' },
                { name: 'Cradle', url: '#' },
                { name: 'Baby Oil', url: '#' },
            ],
        },
        {
            id: "bath-products",
            title: 'Bath Products',
            imageSrc: '/assets/he3.webp',
            links: [
                { name: 'Toilet Paper', url: '#' },
                { name: 'Bath Soaps', url: '#' },
                { name: 'Toilet Paper Roll', url: '#' },
                { name: 'Bath Oil', url: '#' },
            ],
        },
        {
            id: "beauty-equip",
            title: 'Beauty Equipment',
            imageSrc: '/assets/he4.jpg',
            links: [
                { name: 'Ultrasonic Machines', url: '#' },
                { name: 'Shaving Cream', url: '#' },
                { name: 'Shaving Brushes', url: '#' },
                { name: 'Salon Chair', url: '#' },
            ],
        },
        {
            id: "body-care",
            title: 'Body Care Products',
            imageSrc: '/assets/he5.jpg',
            links: [
                { name: 'Body Lotion', url: '#' },
                { name: 'Talcum Powder', url: '#' },
                { name: 'Body Oils', url: '#' },
                { name: 'Body Washes', url: '#' },
            ],
        },
        {
            id: "fragrances",
            title: 'Body Fragrances',
            imageSrc: '/assets/he7.jpg',
            links: [
                { name: 'Perfumes', url: '#' },
                { name: 'Attar', url: '#' },
                { name: 'Deodorants', url: '#' },
                { name: 'Perfume Bottles', url: '#' },
            ],
        },
    ];

    return (
        <div ref={mainRef}>
            <div className="pagetitle">
                <h1>Health & Beauty Trade Directory & Networking Platform</h1>
            </div>

            <nav className="category-nav-bar">
                <div className="category-nav-pill">
                    {products.map((p) => (
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
                            GlobalB2BMart connects you with the leading Health and Beauty suppliers worldwide. Discover quality pharmaceuticals, personal care products, and high-end beauty equipment through our premium networking platform.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HealthAndBeauty;
