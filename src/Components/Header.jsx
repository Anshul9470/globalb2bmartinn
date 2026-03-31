import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
import styles from "./Navbar.module.css";

function Header() {
  const [selectedOption, setSelectedOption] = useState("products");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSelectChange = (event) => setSelectedOption(event.target.value);
  const handleInputChange = (event) => setSearchQuery(event.target.value);

  // Search Submit Handler
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const query = searchQuery.toLowerCase();
    
    // Using a simplified mapping but maintaining original logic
    const keywordToPathMapping = {
      products: { acid: "/chemicals", agriculture: "/agriculture", fruits: "/apple-seller" },
      buyer: { furniture: "furniture-buyer" },
      company: { "sagar trading company": "sagartrading-comp" }
    };
    
    let path = `/${selectedOption}`;
    let matched = false;
    const keywordToPath = keywordToPathMapping[selectedOption] || {};
    for (const [keyword, keywordPath] of Object.entries(keywordToPath)) {
      if (query.includes(keyword)) { path = keywordPath; matched = true; break; }
    }
    
    // Fallback if no specific keyword matches
    if (!matched) path = "/register-buyer";
    
    navigate(`${path}?search=${searchQuery}`);
  };

  useEffect(() => {
    // Initial animations for a premium feel
    gsap.fromTo(`.${styles.navbar}`, 
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(`.${styles.hero} > *`, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.3 }
    );

    // Animate Category Cards
    gsap.fromTo(`.${styles.categoryCard}`, 
      { opacity: 0, scale: 0.8, y: 40 },
      { 
        opacity: 1, 
        scale: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.1, 
        ease: "back.out(1.7)",
        delay: 0.8 
      }
    );
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={styles.header}>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className={styles.videoBg}
      >
        <source src="/assets/globevideo.mp4" type="video/mp4" />
      </video>
      <div className={styles.heroOverlay}></div>
      {/* Main Content */}
      <div className={styles.contentWrapper}>
        <nav className={styles.navbar}>
          <Link to="/" className={styles.logo}>
            <img src="/assets/Globalb2bmart.png" alt="Global B2B Mart" />
            <span>GlobalB2BMart</span>
          </Link>

          {/* Nav Links Desktop */}
          <div className={`${styles.navLinks} ${isMenuOpen ? styles.mobileOpen : ""}`}>
            <Link to="/login" onClick={() => setIsMenuOpen(false)}>Log In</Link>
            <Link to="/register-buyer" onClick={() => setIsMenuOpen(false)}>Buyers</Link>
            <Link to="/register-Company" onClick={() => setIsMenuOpen(false)}>Suppliers</Link>
          </div>

          <div 
            className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`} 
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>

        <section className={styles.hero}>
          <h1>Connect Smarter, <span>Trade Faster, Grow Bigger.</span></h1>
          <p>The premium destination for global B2B trade. Find verified suppliers and buyers from around the world.</p>

          <form onSubmit={handleFormSubmit} className={styles.searchContainer}>
            <select className={styles.searchSelect} value={selectedOption} onChange={handleSelectChange}>
              <option value="products">Products</option>
              <option value="buyer">Buyers</option>
              <option value="company">Companies</option>
            </select>
            <input
              type="text"
              placeholder="Search products, suppliers, or requirements..."
              value={searchQuery}
              onChange={handleInputChange}
              className={styles.searchInput}
            />
            <button type="submit" className={styles.searchBtn}>
              <i className="fa fa-search"></i> Search
            </button>
          </form>

          <div className={styles.buttonGroup}>
            <Link to="/globalb2b-prices" className={styles.btnPrimary}>Analyze Growth</Link>
            <Link to="/register-buyer" className={styles.btnOrange}>Post Requirement</Link>
            <Link to="/register-company" className={styles.btnGold}>Join as Supplier</Link>
          </div>
        </section>

        <section className={styles.featuredSection}>
          <h2>Explore Premium Categories</h2>
          <div className={styles.featuredGrid}>
            <Link to="/agriculture-farm-tools-suppliers" className={styles.categoryCard}>
              <i className="fa fa-leaf"></i>
              <h3>Agriculture & Food</h3>
              <p>Verified farm products & tools</p>
            </Link>
            <Link to="/Industrial-Supplies" className={styles.categoryCard}>
              <i className="fa fa-industry"></i>
              <h3>Industrial Supplies</h3>
              <p>Machinery, tools & equipment</p>
            </Link>
            <Link to="/Electronics" className={styles.categoryCard}>
              <i className="fa fa-laptop"></i>
              <h3>Electronics</h3>
              <p>Smart gadgets & components</p>
            </Link>
            <Link to="/Health-Beauty" className={styles.categoryCard}>
              <i className="fa fa-heartbeat"></i>
              <h3>Health & Beauty</h3>
              <p>Wellness & personal care</p>
            </Link>
            <Link to="/clothing-apparel-suppliers" className={styles.categoryCard}>
              <i className="fa fa-tshirt"></i>
              <h3>Textiles & Apparel</h3>
              <p>High-quality garments & fabrics</p>
            </Link>
            <Link to="/best-furnitures-supplier-in-india" className={styles.categoryCard}>
              <i className="fa fa-couch"></i>
              <h3>Furniture</h3>
              <p>Premium home & office supplies</p>
            </Link>
            <Link to="/gifts-items" className={styles.categoryCard}>
              <i className="fa fa-gift"></i>
              <h3>Gifts & Decor</h3>
              <p>Unique items for every occasion</p>
            </Link>
            <Link to="/chemicals" className={styles.categoryCard}>
              <i className="fa fa-flask"></i>
              <h3>Chemicals</h3>
              <p>Industrial chemicals & raw materials</p>
            </Link>
            <Link to="/Construction" className={styles.categoryCard}>
              <i className="fa fa-building"></i>
              <h3>Construction</h3>
              <p>Hardware, building materials & tools</p>
            </Link>
            <Link to="/homeSupplies" className={styles.categoryCard}>
              <i className="fa fa-ellipsis-h"></i>
              <h3>More Categories</h3>
              <p>Browse 100+ categories</p>
            </Link>
          </div>
        </section>
      </div>
    </header>
  );
}

export default Header;
