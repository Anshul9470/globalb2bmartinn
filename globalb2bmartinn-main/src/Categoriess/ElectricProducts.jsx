import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./category_premium.css";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const ElectricProducts = () => {
    const mainRef = useRef(null);

    useEffect(() => {
        // Ensure Layout is ready
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        const ctx = gsap.context(() => {
            // Hero Title Animation
            gsap.fromTo(".pagetitle h1", 
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
            );

            // Section Animations
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

            // Card Reveal Animation
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
            id: "appliances",
            title: 'Home Appliances',
            imageSrc: './assets/ho1.jpg',
            links: [
                { name: 'Refrigerators', url: '#' },
                { name: 'Washing Machines', url: '#' },
                { name: 'Microwaves', url: '#' },
                { name: 'Air Conditioners', url: '#' },
            ],
        },
        {
            id: "gadgets",
            title: 'Electronics Gadgets',
            imageSrc: './assets/ho2.jpg',
            links: [
                { name: 'Smartphones', url: '#' },
                { name: 'Laptops', url: '#' },
                { name: 'Tablets', url: '#' },
                { name: 'Smart Watches', url: '#' },
            ],
        },
        {
            id: "kitchen",
            title: 'Kitchen Appliances',
            imageSrc: './assets/ho3.jpg',
            links: [
                { name: 'Blenders', url: '#' },
                { name: 'Coffee Makers', url: '#' },
                { name: 'Toasters', url: '#' },
                { name: 'Food Processors', url: '#' },
            ],
        },
        {
            id: "entertainment",
            title: 'Entertainment Systems',
            imageSrc: './assets/ho4.jpg',
            links: [
                { name: 'Televisions', url: '#' },
                { name: 'Home Theaters', url: '#' },
                { name: 'Sound Systems', url: '#' },
                { name: 'Projectors', url: '#' },
            ],
        },
        {
            id: "office",
            title: 'Office Electronics',
            imageSrc: './assets/ho5.jpg',
            links: [
                { name: 'Printers', url: '#' },
                { name: 'Scanners', url: '#' },
                { name: 'Photocopiers', url: '#' },
                { name: 'Fax Machines', url: '#' },
            ],
        },
        {
            id: "personal",
            title: 'Personal Care Appliances',
            imageSrc: './assets/ho6.jpg',
            links: [
                { name: 'Electric Shavers', url: '#' },
                { name: 'Hair Dryers', url: '#' },
                { name: 'Electric Toothbrushes', url: '#' },
                { name: 'Massagers', url: '#' },
            ],
        },
        {
            id: "fitness",
            title: 'Fitness Electronics',
            imageSrc: './assets/ho7.jpg',
            links: [
                { name: 'Treadmills', url: '#' },
                { name: 'Elliptical Trainers', url: '#' },
                { name: 'Exercise Bikes', url: '#' },
                { name: 'Fitness Trackers', url: '#' },
            ],
        },
        {
            id: "smarthome",
            title: 'Smart Home Devices',
            imageSrc: './assets/ho8.jpg',
            links: [
                { name: 'Smart Speakers', url: '#' },
                { name: 'Smart Bulbs', url: '#' },
                { name: 'Smart Thermostats', url: '#' },
                { name: 'Home Security Systems', url: '#' },
            ],
        },
        {
            id: "tools",
            title: 'Power Tools',
            imageSrc: './assets/ho9.jpg',
            links: [
                { name: 'Drills', url: '#' },
                { name: 'Saws', url: '#' },
                { name: 'Sanders', url: '#' },
                { name: 'Grinders', url: '#' },
            ],
        },
        {
            id: "accessories",
            title: 'Electronic Accessories',
            imageSrc: './assets/ho1.jpg',
            links: [
                { name: 'Phone Cases', url: '#' },
                { name: 'Chargers', url: '#' },
                { name: 'Cables', url: '#' },
                { name: 'Headphones', url: '#' },
            ],
        },
        {
            id: "robotics",
            title: 'Robotics',
            imageSrc: './assets/ho10.jpg',
            links: [
                { name: 'Robotic Vacuums', url: '#' },
                { name: 'Robot Kits', url: '#' },
                { name: 'Robot Arms', url: '#' },
                { name: 'Industrial Robots', url: '#' },
            ],
        },
    ];

    return (
        <div ref={mainRef}>
            <div className="pagetitle">
                <h1>Electronics Trade Directory & Networking Platform</h1>
            </div>

            {/* Premium Category Navbar */}
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
                            GlobalB2BMart is the leading Electronics B2B Marketplace. We connect premium suppliers, manufacturers, and traders across the electronics industry, providing a reliable platform for discovering high-quality products, from consumer gadgets to industrial robotics.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ElectricProducts;
