import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Categoriess/category_premium.css";

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

const Agriculture = () => {
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

  return (
    <div ref={mainRef}>
      <Helmet>
        <title>Best suppliers of agriculture and farm tools in India</title>
        <meta
          name="description"
          content="We are GlobalB2BMart best B2B portal in India, providing the best suppliers and buyers of agriculture and farm tools. GlobalB2BMart believes in trust and quality"
        />
      </Helmet>
      
      <div className="pagetitle">
        <h1>Agriculture Trade Directory & Networking Platform</h1>
      </div>

      <div className="category-nav-bar">
        <div className="category-nav-links">
          <a href="#produce">Fresh Produce</a>
          <a href="#grains">Grains & Pulses</a>
          <a href="#machinery">Farm Machinery</a>
          <a href="#supplies">Farm Supplies</a>
          <a href="#services">Farming Services</a>
        </div>
      </div>

      <div className="l1-section">
        <div className="container">
          
          {/* Section 1: Fresh Produce & Livestock (GREEN ACCENT) */}
          <section id="produce" className="category-section">
            <div className="section-header">
              <h2>Fresh Produce & Livestock</h2>
            </div>
            <div className="l1-box-wrap">
              <div className="l1-box">
                <h2 className="l1-heading"><Link to="vegetable-supplier">Vegetables</Link></h2>
                <div className="content-wrapper">
                  <div className="image-container">
                    <img src="./assets/agri1.jpg" alt="Vegetables" loading="lazy" />
                  </div>
                  <ul>
                    <li><Link to="/onion-seeds-dehydrated-onions-white">Onions</Link></li>
                    <li><Link to="/potatosupplier">Potato</Link></li>
                    <li><Link to="/mushroom-supplier">Mushrooms</Link></li>
                    <li><Link to="https://www.globalb2bmart.com/tomato-powder">Tomatoes</Link></li>
                  </ul>
                </div>
                <Link to="/vegetable-supplier" className="view-more-link">View More Categories</Link>
              </div>

              <div className="l1-box">
                <h2 className="l1-heading"><a href="/">Exotic & Juicy Fruits</a></h2>
                <div className="content-wrapper">
                  <div className="image-container">
                    <img src="./assets/agri13.jpg" alt="Exotic & Juicy Fruits" loading="lazy" />
                  </div>
                  <ul>
                    <li><Link to="/apple-seller">Apple</Link></li>
                    <li><Link to="/fruitscomponent">Mangoes</Link></li>
                    <li><Link to="/coconut-selleres">Coconut</Link></li>
                    <li><Link to="/fruitscomponent">Seasonal Fruits</Link></li>
                  </ul>
                </div>
                <Link to="/fruitscomponent" className="view-more-link">View More Categories</Link>
              </div>

              <div className="l1-box">
                <h2 className="l1-heading"><a href="#">Chicken & Eggs</a></h2>
                <div className="content-wrapper">
                  <div className="image-container">
                    <img src="./assets/agri3.avif" alt="Eggs & Chicken" loading="lazy" />
                  </div>
                  <ul>
                    <li><Link to="/egg-supplier">Farm Eggs</Link></li>
                    <li><Link to="/egg-supplier">Quail Eggs</Link></li>
                    <li><Link to="/poulitryfarmstore">Chicken & Poultry</Link></li>
                    <li><Link to="/poulitryfarmstore">Mutton & Meat</Link></li>
                  </ul>
                </div>
                <a href="/poulitryfarmstore" className="view-more-link">View More Categories</a>
              </div>
            </div>
          </section>

          {/* Section 2: Grains, Seeds & Pulses (LIME ACCENT) */}
          <section id="grains" className="category-section">
            <div className="section-header">
              <h2>Grains, Seeds & Pulses</h2>
            </div>
            <div className="l1-box-wrap">
              <div className="l1-box">
                <h2 className="l1-heading"><a href="/">Legumes & Beans</a></h2>
                <div className="content-wrapper">
                  <div className="image-container">
                    <img src="./assets/agri4.webp" alt="Legumes" loading="lazy" />
                  </div>
                  <ul>
                    <li><Link to="/pulses">Soyabeans</Link></li>
                    <li><a href="/pulses">Lentils & Dals</a></li>
                    <li><a href="/pulses">Kidney Beans</a></li>
                    <li><a href="/pulses">Black-eyed Peas</a></li>
                  </ul>
                </div>
                <a href="/pulses" className="view-more-link">View More Categories</a>
              </div>

              <div className="l1-box">
                <h2 className="l1-heading"><a href="#">Cereals & Pulses</a></h2>
                <div className="content-wrapper">
                  <div className="image-container">
                    <img src="./assets/agri8.jpg" alt="Cereals & Pulses" loading="lazy" />
                  </div>
                  <ul>
                    <li><Link to="/maizemanu">Corn & Maize</Link></li>
                    <li><Link to="/maizemanu">Barley & Grains</Link></li>
                    <li><Link to="/pulses">Whole Pulses</Link></li>
                    <li><Link to="/pulses">Split Pulses</Link></li>
                  </ul>
                </div>
                <Link to="/pulses" className="view-more-link">View More Categories</Link>
              </div>
            </div>
          </section>

          {/* Section 3: Farm Machinery & Engineering (ORANGE ACCENT) */}
          <section id="machinery" className="category-section">
            <div className="section-header">
              <h2>Farm Machinery & Engineering</h2>
            </div>
            <div className="l1-box-wrap">
              <div className="l1-box">
                <h2 className="l1-heading"><a href="#">Tractors & Power Units</a></h2>
                <div className="content-wrapper">
                  <div className="image-container">
                    <img src="./assets/agri2.webp" alt="Tractor & Tractor Parts" loading="lazy" />
                  </div>
                  <ul>
                    <li><a href="#">Tractor Engines</a></li>
                    <li><a href="#">Tractor Seats</a></li>
                    <li><a href="#">Tractor Radiators</a></li>
                    <li><a href="#">Tractor Axles</a></li>
                  </ul>
                </div>
                <a href="#" className="view-more-link">View More Categories</a>
              </div>

              <div className="l1-box">
                <h2 className="l1-heading"><a href="/">Agricultural Implements</a></h2>
                <div className="content-wrapper">
                  <div className="image-container">
                    <img src="./assets/agri6.webp" alt="Agricultural Implements & Machinery" loading="lazy" />
                  </div>
                  <ul>
                    <li><a href="/">Seed Drills</a></li>
                    <li><a href="/">Rotavators</a></li>
                    <li><a href="/">Power Sprayers</a></li>
                    <li><a href="/">Combine Harvesters</a></li>
                  </ul>
                </div>
                <a href="/" className="view-more-link">View More Categories</a>
              </div>

              <div className="l1-box">
                <h2 className="l1-heading"><a href="#">Irrigation Solutions</a></h2>
                <div className="content-wrapper">
                  <div className="image-container">
                    <img src="./assets/agri11.jpg" alt="Water Management & Irrigation Solutions" loading="lazy" />
                  </div>
                  <ul>
                    <li><a href="#">Submersible Pumps</a></li>
                    <li><a href="#">Drip Irrigation Systems</a></li>
                    <li><a href="#">Sprinkler Heads</a></li>
                    <li><a href="#">PVC Pipe Fittings</a></li>
                  </ul>
                </div>
                <a href="#" className="view-more-link">View More Categories</a>
              </div>
            </div>
          </section>

          {/* Section 4: Farm Supplies & Horticulture (BLUE ACCENT) */}
          <section id="supplies" className="category-section">
            <div className="section-header">
              <h2>Farm Supplies & Horticulture</h2>
            </div>
            <div className="l1-box-wrap">
              <div className="l1-box">
                <h2 className="l1-heading"><a href="/">Plant Nutrition</a></h2>
                <div className="content-wrapper">
                  <div className="image-container">
                    <img src="./assets/agri7.jpg" alt="Plant Nutrition & Soil Enhancers" loading="lazy" />
                  </div>
                  <ul>
                    <li><Link to="/fertilizermanufacturer">Nitrogen Fertilizers</Link></li>
                    <li><Link to="/fertilizermanufacturer">Organic Compost</Link></li>
                    <li><Link to="/fertilizermanufacturer">Growth Stimulants</Link></li>
                    <li><Link to="/fertilizermanufacturer">Soil Conditioners</Link></li>
                  </ul>
                </div>
                <Link to="/fertilizermanufacturer" className="view-more-link">View More Categories</Link>
              </div>

              <div className="l1-box">
                <h2 className="l1-heading"><a href="#">Gardening Essentials</a></h2>
                <div className="content-wrapper">
                  <div className="image-container">
                    <img src="./assets/agri10.jpg" alt="Gardening Essentials" loading="lazy" />
                  </div>
                  <ul>
                    <li><a href="#">Grass Shears</a></li>
                    <li><a href="#">Plant Containers</a></li>
                    <li><a href="#">Hand Rakes</a></li>
                    <li><a href="#">Pruning Tools</a></li>
                  </ul>
                </div>
                <a href="#" className="view-more-link">View More Categories</a>
              </div>

              <div className="l1-box">
                <h2 className="l1-heading"><a href="/">Floral & Greenery</a></h2>
                <div className="content-wrapper">
                  <div className="image-container">
                    <img src="./assets/agri9.jpg" alt="Floral Arrangements & Greenery" loading="lazy" />
                  </div>
                  <ul>
                    <li><a href="#">Orchids</a></li>
                    <li><a href="#">Floral Bouquets</a></li>
                    <li><a href="#">Roses</a></li>
                    <li><a href="#">Indoor Plants</a></li>
                  </ul>
                </div>
                <a href="#" className="view-more-link">View More Categories</a>
              </div>
            </div>
          </section>

          {/* Section 5: Professional Farming Services (NAVY ACCENT) */}
          <section id="services" className="category-section">
            <div className="section-header">
              <h2>Professional Farming Services</h2>
            </div>
            <div className="l1-box-wrap">
              <div className="l1-box">
                <h2 className="l1-heading"><a href="/">Farming Solutions</a></h2>
                <div className="content-wrapper">
                  <div className="image-container">
                    <img src="./assets/agri5.jpg" alt="Farming Solutions & Services" loading="lazy" />
                  </div>
                  <ul>
                    <li><a href="/">Crop Protection</a></li>
                    <li><a href="/">Soil Testing Services</a></li>
                    <li><a href="/">Irrigation Consultancy</a></li>
                    <li><a href="/">Precision Farming</a></li>
                  </ul>
                </div>
                <a href="/" className="view-more-link">View More Categories</a>
              </div>
            </div>
          </section>

          <div className="content-page">
            <p>
              GlobalB2BMart is the leading Agriculture B2B Marketplace and
              Agriculture Business Directory, offering comprehensive business
              listings of Agriculture Suppliers, Manufacturers, Exporters,
              Wholesalers, and Traders worldwide. Our extensive and verified
              database includes detailed information about Agriculture
              Companies, a diverse catalog of Agriculture Products, and
              up-to-date Agriculture Price Lists and Quotations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agriculture;

