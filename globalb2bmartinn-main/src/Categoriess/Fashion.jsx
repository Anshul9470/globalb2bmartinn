import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./category_premium.css";

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

const Fashion = () => {
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

      // Card Stagger Animation
      gsap.fromTo(".l1-box", 
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
          delay: 0.4
        }
      );
    }, mainRef);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={mainRef}>
      <Helmet>
        <title>Best clothing and apparel suppliers in india | globalb2bmart</title>
        <meta
          name="description"
          content="Globalb2bmart is the best b2b portal in india and is ready to connect you with some big clothing and apparel suppliers in india"
        />
      </Helmet>

      <div className="pagetitle">
        <h1>Your Premier Destination for Apparel & Fashion Industry Connections</h1>
      </div>

      <div className="category-nav-bar">
        <div className="category-nav-links">
          <a href="#women">Women's Collection</a>
          <a href="#men-kids">Men & Kids</a>
          <a href="#professional">Professional Wear</a>
          <a href="#accessories">Accessories</a>
        </div>
      </div>

      <div className="l1-section">
        <div className="container">
          
          {/* Section 1: Women's Collection */}
          <section id="women" className="category-section">
            <div className="section-header">
              <h2>Women's Collection</h2>
            </div>
            <div className="l1-box-wrap">
              <div className="l1-box">
                <h2 className="l1-heading"><a href="/clothes">Ethnic & Party Wear</a></h2>
                <div className="content-wrapper">
                  <div className="image-container">
                    <img src="/assets/app2.jpg" alt="Women Ethnic" loading="lazy" />
                  </div>
                  <ul>
                    <li><Link to="/sareesdealer">Banarasi Sarees</Link></li>
                    <li><Link to="/clothes">Evening Gowns</Link></li>
                    <li><Link to="/clothes">Cocktail Dresses</Link></li>
                    <li><Link to="/clothes">Embroidered Blouses</Link></li>
                  </ul>
                </div>
                <Link to="/clothes" className="view-more-link">View More Categories</Link>
              </div>

              <div className="l1-box">
                <h2 className="l1-heading"><a href="/undergarment-seller">Beach & Summer Wear</a></h2>
                <div className="content-wrapper">
                  <div className="image-container">
                    <img src="/assets/app1.jpg" alt="Beachwear" loading="lazy" />
                  </div>
                  <ul>
                    <li><Link to="/undergarment-seller">Swimsuits</Link></li>
                    <li><Link to="/undergarment-seller">Cover-ups</Link></li>
                    <li><Link to="/undergarment-seller">Beach Dresses</Link></li>
                    <li><Link to="/undergarment-seller">Sarongs</Link></li>
                  </ul>
                </div>
                <Link to="/undergarment-seller" className="view-more-link">View More Categories</Link>
              </div>
            </div>
          </section>

          {/* Section 2: Men & Kids Wear */}
          <section id="men-kids" className="category-section">
            <div className="section-header">
              <h2>Men & Kids Wear</h2>
            </div>
            <div className="l1-box-wrap">
              <div className="l1-box">
                <h2 className="l1-heading"><a href="/t-shirt-seller">Men's Casuals</a></h2>
                <div className="content-wrapper">
                  <div className="image-container">
                    <img src="/assets/app5.webp" alt="Men's Wear" loading="lazy" />
                  </div>
                  <ul>
                    <li><Link to="/t-shirt-seller">Designer T-Shirts</Link></li>
                    <li><Link to="/clothes">Cotton Shirts</Link></li>
                    <li><Link to="/clothes">Denim Jeans</Link></li>
                    <li><Link to="/clothes">Blazers</Link></li>
                  </ul>
                </div>
                <Link to="/t-shirt-seller" className="view-more-link">View More Categories</Link>
              </div>

              <div className="l1-box">
                <h2 className="l1-heading"><a href="#">Infant & Toddlers</a></h2>
                <div className="content-wrapper">
                  <div className="image-container">
                    <img src="/assets/app8.jpg" alt="Baby Clothing" loading="lazy" />
                  </div>
                  <ul>
                    <li><a href="#">Baby Onesies</a></li>
                    <li><a href="#">Kids T-Shirts</a></li>
                    <li><a href="#">Kids Dresses</a></li>
                    <li><a href="#">Baby Mittens</a></li>
                  </ul>
                </div>
                <a href="#" className="view-more-link">View More Categories</a>
              </div>
            </div>
          </section>

          {/* Section 3: Professional & Industrial Wear */}
          <section id="professional" className="category-section">
            <div className="section-header">
              <h2>Professional & Industrial Wear</h2>
            </div>
            <div className="l1-box-wrap">
              <div className="l1-box">
                <h2 className="l1-heading"><a href="/uniform-dealers">Work & Uniforms</a></h2>
                <div className="content-wrapper">
                  <div className="image-container">
                    <img src="/assets/app9.jpg" alt="Industrial Wear" loading="lazy" />
                  </div>
                  <ul>
                    <li><Link to="/uniform-dealers">School Uniforms</Link></li>
                    <li><a href="#">High-Vis Vests</a></li>
                    <li><a href="#">Coveralls</a></li>
                    <li><a href="#">Chef Coats</a></li>
                  </ul>
                </div>
                <Link to="/uniform-dealers" className="view-more-link">View More Categories</Link>
              </div>

              <div className="l1-box">
                <h2 className="l1-heading"><a href="#">Protective Gear</a></h2>
                <div className="content-wrapper">
                  <div className="image-container">
                    <img src="/assets/app3.jpg" alt="Gloves" loading="lazy" />
                  </div>
                  <ul>
                    <li><Link to="/undergarment-seller">Hand Gloves</Link></li>
                    <li><a href="#">Surgical Gloves</a></li>
                    <li><a href="#">Industrial Mittens</a></li>
                    <li><a href="#">Leather Work Gloves</a></li>
                  </ul>
                </div>
                <a href="#" className="view-more-link">View More Categories</a>
              </div>
            </div>
          </section>

          {/* Section 4: Fashion Accessories */}
          <section id="accessories" className="category-section">
            <div className="section-header">
              <h2>Fashion Accessories</h2>
            </div>
            <div className="l1-box-wrap">
              <div className="l1-box">
                <h2 className="l1-heading"><a href="/bagsandbeltdealer">Bags & Leather</a></h2>
                <div className="content-wrapper">
                  <div className="image-container">
                    <img src="/assets/app12.avif" alt="Accessories" loading="lazy" />
                  </div>
                  <ul>
                    <li><Link to="/bagsandbeltdealer">Designer Handbags</Link></li>
                    <li><Link to="/leatherproducts">Leather Jackets</Link></li>
                    <li><Link to="/bagsandbeltdealer">Leather Belts</Link></li>
                    <li><Link to="/bagsandbeltdealer">Travel Suitcases</Link></li>
                  </ul>
                </div>
                <Link to="/bagsandbeltdealer" className="view-more-link">View More Categories</Link>
              </div>
            </div>
          </section>

          <div className="content-page">
            <p>
              Explore a wide range of apparel and fashion products including beachwear, 
              women's clothing, hand gloves, fashion garments, and more. GlobalB2BMart 
              connects you with premium suppliers, manufacturers, and wholesalers worldwide 
              ensuring quality and trust in every trade connection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fashion;

