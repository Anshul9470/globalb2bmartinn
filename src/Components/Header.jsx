import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";
import styles from "./Navbar.module.css";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleInputChange = (event) => setSearchQuery(event.target.value);
  const handleSearch = (type) => {
    // ... search logic remains same ...
    const query = searchQuery.toLowerCase();
    const keywordToPathMapping = {
      buyer: { furniture: "furniture-buyer" },
      company: { "sagar trading company": "sagartrading-comp" }
    };

    let path = `/${type === "company" ? "company" : "buyer"}`;
    let matched = false;
    const keywordPathMap = keywordToPathMapping[type] || {};

    for (const [keyword, keywordPath] of Object.entries(keywordPathMap)) {
      if (query.includes(keyword)) {
        path = keywordPath;
        matched = true;
        break;
      }
    }

    if (!matched) path = (type === "buyer" ? "/register-buyer" : "/company-profile");
    navigate(`${path}?search=${searchQuery}`);
  };

  useEffect(() => {
    if (isHomePage) {
      // Direct hero animation to ensure visibility
      gsap.fromTo(`.${styles.hero}`,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      );

      gsap.fromTo(`.${styles.hero} > *`,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.2
        }
      );
    }
  }, [isHomePage]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className={`${styles.header} ${!isHomePage ? styles.subHeader : ""}`}>
        {isHomePage && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className={styles.videoBg}
            poster="/assets/mainbackground.jpeg"
          >
            <source src="/assets/mainvideoo.mp4" type="video/mp4" />
          </video>
        )}
        <div className={styles.heroOverlay}></div>
        <div className={styles.contentWrapper}>
          <Link to="/" className={styles.topLogo}>
            <img src="/assets/Globalb2bmart.png" alt="Global B2B Mart" />
          </Link>

          <div className={styles.topActions}>
            <Link to="/post-requirement" className={styles.loginBtn}>
              <i className="fa fa-paper-plane"></i> POST REQUIREMENT
            </Link>
            <Link to="/register-buyer" className={styles.loginBtn}>
              <i className="fa fa-user-plus"></i> JOIN FREE
            </Link>
            <Link to="/login" className={styles.loginBtn}>
              <i className="fa fa-user"></i> LOGIN
            </Link>
          </div>

          <div className={styles.hero}>
            <h1>
              Connect Smarter,<br />
              <span>Trade Faster, Grow Bigger.</span>
            </h1>
            <p>
              The premium destination for global B2B trade. Find verified suppliers and
              buyers from around the world.
            </p>

            {/* Trust Badges Section */}
            <div className={styles.uspSection}>
              <div className={styles.uspItem}>
                <div className={styles.uspIcon}><i className="fa fa-check-circle"></i></div>
                <span>Verified Suppliers</span>
              </div>
              <div className={styles.uspItem}>
                <div className={styles.uspIcon}><i className="fa fa-shield-alt"></i></div>
                <span>Secure Trade</span>
              </div>
              <div className={styles.uspItem}>
                <div className={styles.uspIcon}><i className="fa fa-globe"></i></div>
                <span>Global Reach</span>
              </div>
              <div className={styles.uspItem}>
                <div className={styles.uspIcon}><i className="fa fa-bolt"></i></div>
                <span>Instant Leads</span>
              </div>
            </div>
            {/* Search Bar */}
            <div className={styles.searchContainer}>
              <input
                type="text"
                placeholder="Search products, suppliers, or requirements..."
                className={styles.searchInput}
                value={searchQuery}
                onChange={handleInputChange}
                onKeyDown={(e) => e.key === "Enter" && handleSearch("buyer")}
              />
              <div className={styles.searchButtons}>
                <button
                  className={`${styles.searchBtn} ${styles.btnOrange}`}
                  onClick={() => handleSearch("buyer")}
                >
                  <i className="fa fa-users"></i> GET BUYERS
                </button>
                <div className={styles.separator}></div>
                <button
                  className={`${styles.searchBtn} ${styles.btnBlue}`}
                  onClick={() => handleSearch("company")}
                >
                  <i className="fa fa-briefcase"></i> GET SELLERS
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Categories (Only on Home Page) */}
      {isHomePage && (
        <section className={styles.featuredSection}>
          <div className={styles.sectionHeader}>
            <h2>Explore Premium Categories</h2>
            <div className={styles.titleUnderline}></div>
          </div>
          <div className={styles.categoryGrid}>
            {[
              {
                title: "Agriculture & Food",
                image: "/assets/agriculture1.jpg",
                desc: "Verified farm products & tools"
              },
              {
                title: "Industrial Supplies",
                image: "/assets/industrial_supplies_premium.png",
                desc: "Machinery, tools & equipment"
              },
              {
                title: "Electronics",
                image: "/assets/electronics_premium.png",
                desc: "Smart gadgets & components"
              },
              {
                title: "Health & Beauty",
                image: "/assets/beauty1.jpeg",
                desc: "Wellness & personal care"
              },
              {
                title: "Textiles & Apparel",
                image: "/assets/textile1.jpg",
                desc: "High-quality garments & fabrics"
              },
              {
                title: "Furniture",
                image: "/assets/furniture1.jpeg",
                desc: "Premium home & office supplies"
              },
              {
                title: "Gifts & Decor",
                image: "/assets/gifts_decor_premium.png",
                desc: "Unique items for every occasion"
              },
              {
                title: "Chemicals",
                image: "/assets/chemicals_premium.png",
                desc: "Industrial chemicals & raw materials"
              },
              {
                title: "Construction",
                image: "/assets/construction_premium.png",
                desc: "Hardware, building materials & tools"
              },
              {
                title: "More Categories",
                image: "/assets/exploremore.png",
                desc: "Browse 100+ categories"
              }
            ].map((cat, idx) => (
              <Link to="/categories" key={idx} className={styles.categoryCard}>
                <div className={styles.cardContent}>
                  <img src={cat.image} alt={cat.title} className={styles.categoryImg} />
                  <div className={styles.cardOverlay}>
                    <h3>{cat.title}</h3>
                    <p>{cat.desc}</p>
                    <span className={styles.viewMore}>View Suppliers</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default Header;
