import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./category_premium.css";

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

const IndustrialSupplies = () => {
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

  return (
    <div ref={mainRef}>
      <Helmet>
        <title>Industrial Supplies Trade Directory & Networking Platform | GlobalB2BMart</title>
        <meta
          name="description"
          content="Connect with top industrial machinery, tools, and electrical equipment suppliers worldwide on GlobalB2BMart."
        />
      </Helmet>

      <div className="pagetitle">
        <h1>Industrial Supplies Trade Directory & Networking Platform</h1>
      </div>

      <div className="category-nav-bar">
        <div className="category-nav-links">
          <a href="#machinery">Machinery & Tools</a>
          <a href="#electrical">Electrical & Solar</a>
          <a href="#plastic">Plastic & Polymers</a>
          <a href="#hardware">Hardware & Components</a>
        </div>
      </div>

      <div className="l1-section">
        <div className="container">
          
          {/* Section 1: Industrial Machinery & Tools */}
          <section id="machinery" className="category-section">
            <div className="section-header">
              <h2>Industrial Machinery & Tools</h2>
            </div>
            <div className="l1-box-wrap">
              <div className="l1-box">
                <h2 className="l1-heading"><a href="/industrial-machinery">Heavy Machinery</a></h2>
                <div className="content-wrapper">
                  <div className="image-container">
                    <img src="/assets/indus5.webp" alt="Heavy Machinery" loading="lazy" />
                  </div>
                  <ul>
                    <li><Link to="/industrial-machinery">CNC Machines</Link></li>
                    <li><Link to="/machinemanufacturer">Lathe Machines</Link></li>
                    <li><Link to="/machinemanufacturer">Drilling Equipment</Link></li>
                    <li><Link to="/machinemanufacturer">Milling Machines</Link></li>
                  </ul>
                </div>
                <Link to="/industrial-machinery" className="view-more-link">Explore Machinery</Link>
              </div>

              <div className="l1-box">
                <h2 className="l1-heading"><a href="/toolsequipment">Precision Tools</a></h2>
                <div className="content-wrapper">
                  <div className="image-container">
                    <img src="/assets/indus3.jpg" alt="Industrial Tools" loading="lazy" />
                  </div>
                  <ul>
                    <li><Link to="/toolsequipment">Power Tools</Link></li>
                    <li><Link to="/hardwarestore">Hand Tools</Link></li>
                    <li><Link to="/toolsequipment">Cutting Tools</Link></li>
                    <li><Link to="/toolsequipment">Measuring Instruments</Link></li>
                  </ul>
                </div>
                <Link to="/toolsequipment" className="view-more-link">Explore Tools</Link>
              </div>
            </div>
          </section>

          {/* Section 2: Electrical & Solar */}
          <section id="electrical" className="category-section">
            <div className="section-header">
              <h2>Electrical & Solar Energy</h2>
            </div>
            <div className="l1-box-wrap">
              <div className="l1-box">
                <h2 className="l1-heading"><a href="/electricprodcuts">Electrical Equipment</a></h2>
                <div className="content-wrapper">
                  <div className="image-container">
                    <img src="/assets/indus4.jpg" alt="Electrical" loading="lazy" />
                  </div>
                  <ul>
                    <li><Link to="/electricprodcuts">Industrial Switches</Link></li>
                    <li><Link to="/electricprodcuts">Circuit Breakers</Link></li>
                    <li><Link to="/electricprodcuts">Power Transformers</Link></li>
                    <li><Link to="/electricprodcuts">Electric Motors</Link></li>
                  </ul>
                </div>
                <Link to="/electricprodcuts" className="view-more-link">View All Electrical</Link>
              </div>

              <div className="l1-box">
                <h2 className="l1-heading"><a href="/solarpanel">Solar & Renewable</a></h2>
                <div className="content-wrapper">
                  <div className="image-container">
                    <img src="/assets/indus2.jpg" alt="Solar Energy" loading="lazy" />
                  </div>
                  <ul>
                    <li><Link to="/solarpanel">Solar Panels</Link></li>
                    <li><Link to="/solar-energy">Solar Inverters</Link></li>
                    <li><Link to="/solarpanel">Solar Batteries</Link></li>
                    <li><Link to="/solar-energy">Mounting Systems</Link></li>
                  </ul>
                </div>
                <Link to="/solarpanel" className="view-more-link">Go Solar</Link>
              </div>
            </div>
          </section>

          {/* Section 3: Plastic & Polymers */}
          <section id="plastic" className="category-section">
            <div className="section-header">
              <h2>Plastic & Polymers</h2>
            </div>
            <div className="l1-box-wrap">
              <div className="l1-box">
                <h2 className="l1-heading"><a href="/plastic">Industrial Plastics</a></h2>
                <div className="content-wrapper">
                  <div className="image-container">
                    <img src="/assets/indus.jpg" alt="Plastics" loading="lazy" />
                  </div>
                  <ul>
                    <li><Link to="/pvcrresins">PVC Resins</Link></li>
                    <li><Link to="/plastic">Plastic Granules</Link></li>
                    <li><Link to="/plastic">Polymer Sheets</Link></li>
                    <li><Link to="/plastic">Industrial Pellets</Link></li>
                  </ul>
                </div>
                <Link to="/plastic" className="view-more-link">Explore Plastics</Link>
              </div>

              <div className="l1-box">
                <h2 className="l1-heading"><a href="/bottles-supplier">Plastic Packaging</a></h2>
                <div className="content-wrapper">
                  <div className="image-container">
                    <img src="/assets/app12.avif" alt="Packaging" loading="lazy" />
                  </div>
                  <ul>
                    <li><Link to="/bottles-supplier">Industrial Bottles</Link></li>
                    <li><Link to="/plastic">Storage Containers</Link></li>
                    <li><Link to="/plastic">Packing Clips</Link></li>
                    <li><Link to="/bottles-supplier">HDPE Drums</Link></li>
                  </ul>
                </div>
                <Link to="/bottles-supplier" className="view-more-link">Explore Packaging</Link>
              </div>
            </div>
          </section>

          {/* Section 4: Hardware & Components */}
          <section id="hardware" className="category-section">
            <div className="section-header">
              <h2>Hardware & Components</h2>
            </div>
            <div className="l1-box-wrap">
              <div className="l1-box">
                <h2 className="l1-heading"><a href="/hardwarestore">Fasteners & Bearings</a></h2>
                <div className="content-wrapper">
                  <div className="image-container">
                    <img src="/assets/indus1.jpg" alt="Hardware" loading="lazy" />
                  </div>
                  <ul>
                    <li><Link to="/hardwarestore">Ball Bearings</Link></li>
                    <li><Link to="/hardwarestore">Industrial Bolts</Link></li>
                    <li><Link to="/hardwarestore">Nuts & Screws</Link></li>
                    <li><Link to="/hardwarestore">Spring Washers</Link></li>
                  </ul>
                </div>
                <Link to="/hardwarestore" className="view-more-link">View Hardware</Link>
              </div>

              <div className="l1-box">
                <h2 className="l1-heading"><a href="/pumpsupplier">Fluid Control</a></h2>
                <div className="content-wrapper">
                  <div className="image-container">
                    <img src="/assets/is5.webp" alt="Pumps" loading="lazy" />
                  </div>
                  <ul>
                    <li><Link to="/pumpsupplier">Centrifugal Pumps</Link></li>
                    <li><Link to="/valveSupplier">Industrial Valves</Link></li>
                    <li><Link to="/pipeseller">Steel Pipes</Link></li>
                    <li><Link to="/pumpsupplier">Submersible Pumps</Link></li>
                  </ul>
                </div>
                <Link to="/pumpsupplier" className="view-more-link">Explore Control</Link>
              </div>
            </div>
          </section>

          <div className="content-page">
            <p>
              Explore a wide range of industrial supplies including bearings, fasteners, 
              gears, and more. GlobalB2BMart provides a massive networking platform for 
              suppliers, manufacturers, and wholesalers to connect and trade high-quality 
              industrial equipment across the globe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrialSupplies;

