import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./category_premium.css";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Chemicals = () => {
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
            id: "polymer-chemicals",
            title: 'Polymer Chemicals',
            imageSrc: 'https://cdn.d4tcdn.com/staticdt/images/catg-imgs/chemical/polymer.jpg',
            links: [
                { name: 'Polyethylene', url: '#' },
                { name: 'Polypropylene', url: '#' },
                { name: 'PVC', url: '#' },
                { name: 'Polystyrene', url: '#' },
            ],
        },
        {
            id: "acids",
            title: 'Acids',
            imageSrc: 'https://cdn.d4tcdn.com/staticdt/images/catg-imgs/chemical/acids.jpg',
            links: [
                { name: 'Hydrochloric Acid', url: '#' },
                { name: 'Sulfuric Acid', url: '#' },
                { name: 'Nitric Acid', url: '#' },
                { name: 'Citric Acid', url: '#' },
            ],
        },
        {
            id: "agrochemicals",
            title: 'Agrochemicals',
            imageSrc: 'https://cdn.d4tcdn.com/staticdt/images/catg-imgs/chemical/agro.jpg',
            links: [
                { name: 'Fertilizers', url: '#' },
                { name: 'Pesticides', url: '#' },
                { name: 'Herbicides', url: '#' },
                { name: 'Fungicides', url: '#' },
            ],
        },
        {
            id: "organic-chemicals",
            title: 'Organic Chemicals',
            imageSrc: 'https://cdn.d4tcdn.com/staticdt/images/catg-imgs/chemical/organic.jpg',
            links: [
                { name: 'Alcohols', url: '#' },
                { name: 'Amines', url: '#' },
                { name: 'Esters', url: '#' },
                { name: 'Ketones', url: '#' },
            ],
        },
        {
            id: "inorganic-chemicals",
            title: 'Inorganic Chemicals',
            imageSrc: 'https://cdn.d4tcdn.com/staticdt/images/catg-imgs/chemical/inorganic.jpg',
            links: [
                { name: 'Salts', url: '#' },
                { name: 'Oxides', url: '#' },
                { name: 'Hydroxides', url: '#' },
                { name: 'Peroxides', url: '#' },
            ],
        },
        {
            id: "specialty-chemicals",
            title: 'Specialty Chemicals',
            imageSrc: 'https://cdn.d4tcdn.com/staticdt/images/catg-imgs/chemical/specialty.jpg',
            links: [
                { name: 'Adhesives', url: '#' },
                { name: 'Catalysts', url: '#' },
                { name: 'Dyes & Pigments', url: '#' },
                { name: 'Surfactants', url: '#' },
            ],
        },
    ];

    return (
        <div ref={mainRef}>
            <div className="pagetitle">
                <h1>Chemicals Trade Directory & Networking Platform</h1>
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
                                                    {product.imageSrc ? (
                                                        <img
                                                            src={product.imageSrc}
                                                            alt={product.title}
                                                            width={95}
                                                            height={95}
                                                            loading="lazy"
                                                            onError={(e) => {
                                                                e.target.style.display = 'none';
                                                            }}
                                                        />
                                                    ) : (
                                                        <div className="placeholder-image">img</div>
                                                    )}
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
                            GlobalB2BMart is the leading Chemicals B2B Marketplace and
                            Business Directory, offering comprehensive business
                            listings of Chemicals Suppliers, Manufacturers, Exporters,
                            Wholesalers, and Traders worldwide. Our extensive and verified
                            database includes detailed information about Chemical
                            Companies, a diverse catalog of Chemical Products, and
                            up-to-date Price Lists and Quotations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chemicals;
