import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";
import styles from "./Navbar.module.css";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Curated list of 100+ keywords for suggestions
  const KEYWORDS = [
    // Agriculture & Food
    "Rice", "Basmati Rice", "Wheat", "Pulses", "Spices", "Dry Fruits", "Tea", "Coffee", "Sugar", "Flour", 
    "Desi Ghee", "Honey", "Pickle", "Turmeric", "Cardamom", "Garlic", "Onion", "Potato", "Tomato", "Mango",
    "Banana", "Apple", "Fresh Fruits", "Mustard Oil", "Saffron", "Seeds", "Agro Products", "Seafood", "Beverages",
    // Fashion & Apparel
    "Saree", "Garment", "T-shirt", "Shirts", "Leggings", "Shorts", "Jeans", "Fabric", "Textile", "Bags", 
    "Jute Bags", "Bags & Belts", "Uniform", "Surgical Gloves", "Tshirt", "Clothing", "Fashion",
    // Jewelry & Beauty
    "Gold Jewelry", "Jewellery", "Necklace", "Gold Ornaments", "Health & Beauty", "Beauty Products",
    "Herbal Products", "Medicine", "Pharma", "Healthcare", "Eye Drops", "Aloe Vera",
    // Industrial & Chemicals
    "Chemicals", "Industrial Chemicals", "Cleaning Chemicals", "Industrial Supplies", "Machinery",
    "Industrial Machinery", "Tools", "Power Tools", "PVC Pipes", "Pipes", "Cables", "Wires", "Copper Cable",
    "Solar Panels", "Solar Energy", "Plastic Products", "Plastic Container", "Granules", "Scrap", "Metal",
    "Brass Components", "Valves", "Pump", "Water Tank", "Masterbatch", "Industrial Tools",
    // Home & Construction
    "Furniture", "Sofa", "Chair", "Bedsheet", "Curtains", "Wallpaper", "Decor", "Handicrafts", 
    "Gifts & Decor", "Ceramic Tiles", "Tiles", "Sanitary Ware", "Bathware", "Hardware", "Door Handle",
    "Door Lock", "Lifts", "Elevator", "RCC Compounds", "Construction", "Interior Designer",
    // Others
    "Toys", "Games", "Trophy", "Sports Equipment", "Bat", "Gym Equipment", "Electronics", "Electronic Goods",
    "Computer", "Stationery", "Agarbatti", "Machine", "Taxi", "Tour and Travel", "Event Planner", "Alarm"
  ];

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);

    if (value.trim().length > 0) {
      const filtered = KEYWORDS.filter(k => 
        k.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 10); // Show more suggestions
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    // Removed automatic search to allow manual button click as requested
  };

  const handleSearch = (type, queryOverride = null) => {
    const query = (queryOverride || searchQuery).trim().toLowerCase();
    
    // Refine Search Logic: Strictly block execution if no query is present
    if (!query) {
      console.log("Search query is empty. Navigation blocked.");
      return;
    }

    // Mapping for 100+ keywords based on App.js routes
    const mapping = {
      "agri": "/agriculture-farm-tools-suppliers", "food": "/agriculture-farm-tools-suppliers",
      "rice": "/rice-seller", "saree": "/sareesdealer", "pulse": "/agroproducts",
      "wheat": "/wheat/buyers", "dryfruit": "/dryfruitsmanu", "cashew": "/cashew-buyer",
      "jewelry": "/jewellery-necklaces-suppliers", "gold": "/gold-ornaments-buyers",
      "fashion": "/clothing-apparel-suppliers", "garment": "/clothing-apparel-suppliers", "t-shirt": "/t-shirt-seller",
      "chemical": "/industrial-chemicals-cleaning-chemicals", "machinery": "/industrial-machinery",
      "furniture": "/best-furnitures-supplier-in-india", "gift": "/gifts-items",
      "electronics": "/electricprodcuts", "electric": "/electricprodcuts",
      "industrial": "/industrySupplies", "industry": "/industrySupplies",
      "tool": "/toolsequipment", "hardware": "/hardwarestore",
      "plastic": "/plastic", "pvc": "/pvcrresins", "pipe": "/pipeseller",
      "spice": "/spices-dealers", "handicraft": "/handicraftItems",
      "toy": "/toy-buyer", "sports": "/sports-buyer", "gym": "/gymequipmentsupplier",
      "shoes": "/shoes-dealer", "footwear": "/footweardealers",
      "medicine": "/medicinestore", "pharma": "/pharma-buyer", "health": "/health-beauty",
      "beauty": "/beautyproductsdealer", "cosmetic": "/beautyproductsdealer",
      "solar": "/solarpanel", "textile": "/texttiledealer", "fabric": "/fabrics",
      "curtain": "/curtains-seller", "bedsheet": "/bedsheet/buyers", "sofa": "/sofa-seller",
      "wallpaper": "/wallpapers-seller", "carpet": "/rugsandcarpets",
      "cleaning": "/industrial-chemicals-cleaning-chemicals", "machine": "/machinemanufacturer",
      "bag": "/bagsandbeltdealer", "shoe": "/shoes-dealer", "belt": "/bagsandbeltdealer",
      "uniform": "/uniform-dealers", "stationery": "/stationery",
      "glass": "/glass-buyer", "bottle": "/bottles-supplier", "taxi": "/rental-taxi",
      "tour": "/tourandtravel", "travel": "/tourandtravel", "event": "/eventplanner",
      "solar": "/solar-energy", "pump": "/pumpsupplier", "valve": "/valveSupplier"
    };

    let path = "";
    for (const [key, val] of Object.entries(mapping)) {
      if (query.includes(key)) {
        path = val;
        break;
      }
    }

    // Strict Check: Only navigate if it matches a keyword or mapping
    const isValidKeyword = KEYWORDS.some(k => 
      k.toLowerCase().includes(query) || query.includes(k.toLowerCase())
    );

    if (path || isValidKeyword) {
      const finalPath = path || (type === "buyer" ? "/register-buyer" : "/agriculture-farm-tools-suppliers");
      setShowSuggestions(false);
      navigate(`${finalPath}?search=${encodeURIComponent(query)}`);
    } else {
      // Strictly do not navigate if no match found as per user request
      console.log("No matching category found for:", query);
    }
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
            <Link to="/register-buyer" className={styles.loginBtn}>
              <i className="fa fa-paper-plane"></i> POST REQUIREMENT
            </Link>
            <Link to="/register-Company" className={styles.loginBtn}>
              <i className="fa fa-user-plus"></i> JOIN FREE
            </Link>
            <Link to="/login" className={styles.loginBtn}>
              <i className="fa fa-user"></i> LOGIN
            </Link>
          </div>

          {isHomePage && (
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
                  onKeyDown={(e) => e.key === "Enter" && searchQuery.trim() && handleSearch("buyer")}
                  onFocus={() => searchQuery.trim() && setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                />
                {showSuggestions && suggestions.length > 0 && (
                  <ul className={styles.suggestionsDropdown}>
                    {suggestions.map((suggestion, index) => (
                      <li 
                        key={index} 
                        onMouseDown={() => handleSuggestionClick(suggestion)}
                        className={styles.suggestionItem}
                      >
                        <i className="fa fa-search"></i> {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
                <div className={styles.searchButtons}>
                  <button
                    className={`${styles.searchBtn} ${styles.btnOrange}`}
                    onClick={() => handleSearch("buyer")}
                    disabled={!searchQuery.trim()}
                  >
                    <i className="fa fa-users"></i> GET BUYERS
                  </button>
                  <div className={styles.separator}></div>
                  <button
                    className={`${styles.searchBtn} ${styles.btnBlue}`}
                    onClick={() => handleSearch("company")}
                    disabled={!searchQuery.trim()}
                  >
                    <i className="fa fa-briefcase"></i> GET SELLERS
                  </button>
                </div>
              </div>
            </div>
          )}
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
                desc: "Verified farm products & tools",
                path: "/agriculture-farm-tools-suppliers"
              },
              {
                title: "Industrial Supplies",
                image: "/assets/industrial_supplies_premium.png",
                desc: "Machinery, tools & equipment",
                path: "/industrySupplies"
              },
              {
                title: "Electronics",
                image: "/assets/electronics_premium.png",
                desc: "Smart gadgets & components",
                path: "/electricprodcuts"
              },
              {
                title: "Health & Beauty",
                image: "/assets/beauty1.jpeg",
                desc: "Wellness & personal care",
                path: "/health-beauty"
              },
              {
                title: "Textiles & Apparel",
                image: "/assets/textile1.jpg",
                desc: "High-quality garments & fabrics",
                path: "/clothing-apparel-suppliers"
              },
              {
                title: "Furniture",
                image: "/assets/furniture1.jpeg",
                desc: "Premium home & office supplies",
                path: "/best-furnitures-supplier-in-india"
              },
              {
                title: "Gifts & Decor",
                image: "/assets/gifts_decor_premium.png",
                desc: "Unique items for every occasion",
                path: "/gifts-items"
              },
              {
                title: "Chemicals",
                image: "/assets/chemicals_premium.png",
                desc: "Industrial chemicals & raw materials",
                path: "/industrial-chemicals-cleaning-chemicals"
              },
              {
                title: "Construction",
                image: "/assets/construction_premium.png",
                desc: "Hardware, building materials & tools",
                path: "/toolsequipment"
              },
              {
                title: "More Categories",
                image: "/assets/exploremore.png",
                desc: "Browse 100+ categories",
                path: "/agriculture-farm-tools-suppliers"
              }
            ].map((cat, idx) => (
              <Link to={cat.path} key={idx} className={styles.categoryCard}>
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
