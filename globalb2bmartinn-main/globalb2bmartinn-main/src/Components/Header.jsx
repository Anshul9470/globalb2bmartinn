import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";
import styles from "./Navbar.module.css";
import { resolveState } from "../services/stateResolver";
import { useAuth } from "../Buyers/AuthContext";
import { CATEGORIES, SUB_CATEGORIES } from "../services/categoryData";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();
  const { userId, userName, userRole, logout } = useAuth();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Comprehensive list of 500+ keywords for suggestions
  // Comprehensive list of keywords for suggestions
  const FEATURED_PRODUCTS_KEYWORDS = [
    "Pulses", "Saree", "Rice", "Egg Shell Powder", "Cable Tie", "Fruits Powder", "Dry Fruits", "PVC Pipes", "Spices", "Handicrafts", "Desi Ghee", "Herbal Products", "Plastic Product", "Furniture", "Shirts", "Gold Jewelry", "Fresh Fruits", "Mustard Oil"
  ];

  const KEYWORDS = Array.from(new Set([
    ...CATEGORIES,
    ...Object.values(SUB_CATEGORIES).flat(),
    ...FEATURED_PRODUCTS_KEYWORDS,
    "Machinery", "Industrial Machinery", "CNC Machines", "Injection Molding", "Packing Machines",
    "Power Tools", "Solar Energy", "Solar Panels", "Electronics", "Pharmaceuticals",
    "Generic Medicines", "Kurtis", "T-shirts", "Wheat", "Sugar",
    "Construction", "Cement", "Tiles", "Plywood", "Chemicals", "Metals",
    "Limestone", "Gravel", "Sand", "Concrete", "Sanitary", "Faucets", "Wash Basins",
    "Interior", "Laminates", "Paints", "Wallpaper", "Office Supplies", "Printers"
  ]));

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);

    if (value.trim().length > 0) {
      const lowerValue = value.toLowerCase();
      
      // Filter ONLY from the 18 featured products as requested
      const filtered = FEATURED_PRODUCTS_KEYWORDS.filter(k => 
        k.toLowerCase().includes(lowerValue)
      );

      setSuggestions(filtered.slice(0, 12));
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    // Removed auto-search to allow user to choose between Buyer/Seller buttons
  };

  // Specialized mapping for established category pages (For Seller Search)
  const CATEGORY_MAPPING = {
    "pulses": "/agroproducts",
    "saree": "/sareesdealer",
    "rice": "/rice-seller",
    "egg shell powder": "/egg-supplier",
    "cable tie": "/azoliya-cable-tie",
    "fruits powder": "/bananapowder",
    "dry fruits": "/dryfruitsmanu",
    "pvc pipes": "/pipeseller",
    "spices": "/spices-dealers",
    "handicrafts": "/handicraftItems",
    "desi ghee": "/ghee-seller",
    "herbal products": "/hearbal-seller",
    "plastic product": "/plastic",
    "furniture": "/best-furniture-suppliers-in-india",
    "shirts": "/clothing-apparel-suppliers",
    "gold jewelry": "/jewellery-seller",
    "fresh fruits": "/fruitscomponent",
    "mustard oil": "/mustard-oil",
    "wheat": "/wheatsupplier"
  };

  // Specialized mapping for established buyer pages
  const BUYER_PAGE_MAPPING = {
    "rice": "/rice/buyers",
    "wheat": "/wheat/buyers",
    "pulses": "/pulses/buyers",
    "spices": "/spices-buyer",
    "saree": "/saree-buyers",
    "onion": "/buyer/onions",
    "potato": "/buyer/potato",
    "apple": "/applebuy",
    "banana": "/bananabuy",
    "coconut": "/coconut-buyer",
    "cashew": "/cashew-buyer",
    "cardamom": "/cardamombuy",
    "turmeric": "/turmeric/buyers",
    "green chilli": "/green/chilli/buyers",
    "mustard": "/mustured/buyers",
    "flour": "/flourbuyers",
    "maize": "/maize/buyers",
    "moringa": "/moringa/buyers",
    "ghee": "/gheebuy",
    "honey": "/honey-supplier",
    "pickle": "/pickle-buyer",
    "tea": "/tea-buyer",
    "coffee": "/coffeebeanbuyer",
    "dry fruits": "/dryfruit/buyers",
    "clothes": "/clothes-buyer",
    "shirts": "/shirt-buyer",
    "tshirts": "/tshirtbuy",
    "shorts": "/shortsbuyer",
    "leggings": "/leggingbuy",
    "garments": "/garment-buyers",
    "shoes": "/shoes-dealer",
    "furniture": "/furniture-buyer",
    "chairs": "/chair-buyer",
    "sofa": "/sofa-seller",
    "curtains": "/curtains-seller",
    "carpets": "/carpet-buyer",
    "cushion": "/cushion-buyer",
    "bedsheet": "/bedsheet/buyers",
    "door handle": "/door-handle-buyer",
    "door lock": "/door-locks-buyer",
    "sanitaryware": "/sanitary-buyer",
    "tiles": "/ceramicftile/buyers",
    "paints": "/paints-buyer",
    "cement": "/rcc/compounds/buyers",
    "pipes": "/pipe-buyer",
    "machinery": "/buymachines",
    "solar": "/solar-energy",
    "batteries": "/solar-energy",
    "electronics": "/electronic-buyers",
    "mobiles": "/mobile-accessories-buyer",
    "medical": "/healthcare-products-buyer",
    "pharma": "/pharma-buyer",
    "beauty": "/Beauty-products-buyer",
    "toys": "/toy-buyer",
    "sports": "/sports-buyer",
    "stationery": "/stationery"
  };

  const handleSearch = async (type, queryOverride = null) => {
    const query = (queryOverride || searchQuery).trim().toLowerCase();
    
    // Refine Search Logic: If empty, navigate to featured products for sellers
    if (!query) {
      if (type === "company") {
        if (location.pathname === "/") {
          const featuredSection = document.getElementById('featured-products');
          if (featuredSection) {
            featuredSection.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          navigate("/#featured-products");
        }
      } else {
        console.log("Search query is empty. Navigation blocked.");
      }
      return;
    }

    // 1. Redirect for established buyer pages (For Buyer Search)
    if (type === "buyer" && BUYER_PAGE_MAPPING[query]) {
      navigate(BUYER_PAGE_MAPPING[query]);
      return;
    }

    // 2. Redirect for established seller pages (For Seller Search)
    if (type === "company" && CATEGORY_MAPPING[query]) {
      navigate(CATEGORY_MAPPING[query]);
      return;
    }

    // 3. Dynamic Search Fallback (Prevent 404)
    const encodedQuery = encodeURIComponent(query);
    navigate(`/search-results?query=${encodedQuery}&type=${type === "company" ? "seller" : "buyer"}`);
    return;

    try {
      let response, results;

      // Fetch buyers or sellers based on type
      if (type === "buyer") {
        // Fetch all buyers from API with cache busting
        response = await fetch(`http://localhost:3005/buyers?t=${Date.now()}`);
        const data = await response.json();
        results = (data.buyers || []).filter(buyer => {
          const resolvedState = resolveState(buyer).toLowerCase();
          const matchesQuery = (
            buyer.name.toLowerCase().includes(query) ||
            buyer.email.toLowerCase().includes(query) ||
            buyer.productOrService.toLowerCase().includes(query) ||
            buyer.city.toLowerCase().includes(query) ||
            resolvedState.includes(query)
          );
          const matchesCategory = selectedCategory === "All" || (buyer.category && buyer.category.toUpperCase() === selectedCategory.toUpperCase());
          return matchesQuery && matchesCategory;
        });
      } else if (type === "company") {
        // Fetch all sellers from API with cache busting
        response = await fetch(`http://localhost:3005/by-role/seller?t=${Date.now()}`);
        const data = await response.json();
        results = (data.users || []).filter(seller => {
          const resolvedState = resolveState(seller).toLowerCase();
          const matchesQuery = (
            seller.name.toLowerCase().includes(query) ||
            seller.email.toLowerCase().includes(query) ||
            seller.productOrService.toLowerCase().includes(query) ||
            seller.companyName.toLowerCase().includes(query) ||
            resolvedState.includes(query)
          );
          const matchesCategory = selectedCategory === "All" || (seller.category && seller.category.toUpperCase() === selectedCategory.toUpperCase());
          return matchesQuery && matchesCategory;
        });
      }

      if (results && results.length > 0) {
        // Navigate to a search results page with the results
        navigate(`/search-results?query=${encodeURIComponent(query)}&type=${type}&category=${encodeURIComponent(selectedCategory)}`, { 
          state: { results, searchType: type, searchQuery: query, category: selectedCategory } 
        });
      } else {
        // If no results found, redirect to 404/NotFound page as requested
        navigate('/not-found');
      }
    } catch (error) {
      console.error("Search error:", error);
      // Fallback to not-found on error as well
      navigate('/not-found');
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
          <div className={styles.navTopArea}>
            <Link to="/" className={styles.topLogo}>
              <img src="/assets/Globalb2bmart.png" alt="Global B2B Mart" />
            </Link>
            
            {/* Subpage Compact Search Bar - Modern & Responsive */}
            {!isHomePage && (
              <div className={styles.navSearchWrapper}>
                <div className={styles.navSearchContainer}>
                  <input
                    type="text"
                    placeholder="Search products..."
                    className={styles.navSearchInput}
                    value={searchQuery}
                    onChange={handleInputChange}
                    onKeyDown={(e) => e.key === "Enter" && searchQuery.trim() && handleSearch("buyer")}
                    onFocus={() => searchQuery.trim() && setShowSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                  />
                  {showSuggestions && suggestions.length > 0 && (
                    <ul className={`${styles.suggestionsDropdown} ${styles.navSuggestionsDropdown}`}>
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
                    <div className={`${styles.navSearchButtons} ${!searchQuery.trim() ? styles.inactiveButtons : ""}`}>
                      <button
                        className={`${styles.navSearchBtn} ${styles.navBtnOrange}`}
                        onClick={() => handleSearch("buyer")}
                        title="Get Buyers"
                      >
                        <i className="fa fa-users"></i>
                      </button>
                      <button
                        className={`${styles.navSearchBtn} ${styles.navBtnBlue}`}
                        onClick={() => handleSearch("company")}
                        title="Get Sellers"
                      >
                        <i className="fa fa-briefcase"></i>
                      </button>
                    </div>
                </div>
              </div>
            )}

            <div className={styles.topActions}>
              {userId && userName ? (
                <>
                  <Link to={userRole === 'admin' ? "/admin-dashboard" : "/dashboard"} className={styles.welcomeWrapperLink}>
                    <div className={styles.welcomeWrapper}>
                      <div className={styles.userAvatar}>
                        <i className="fa fa-user-circle"></i>
                      </div>
                      <div className={styles.welcomeContainer}>
                        <span className={styles.welcomeLabel}>Welcome back,</span>
                        <span className={styles.userName}>{userName}</span>
                      </div>
                    </div>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login" className={styles.loginBtn}>
                    <i className="fa fa-user"></i> LOGIN
                  </Link>
                  <Link to="/register-company" className={styles.loginBtn}>
                    <i className="fa fa-user-plus"></i> JOIN FREE
                  </Link>
                </>
              )}
              <Link to="/register-buyer" className={styles.loginBtn}>
                <i className="fa fa-paper-plane"></i> POST REQUIREMENT
              </Link>
            </div>
          </div>

          {isHomePage && (
            <div className={styles.hero}>
              <h1>
                Connect Smarter,<br />
                <span>Trade Faster, Grow Bigger.</span>
              </h1>
              {/* Content removed per user request */}

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
                  <div className={`${styles.searchButtons} ${!searchQuery.trim() ? styles.inactiveButtons : ""}`}>
                    <button
                      className={`${styles.searchBtn} ${styles.btnOrange}`}
                      onClick={() => handleSearch("buyer")}
                    >
                      <i className="fa fa-users"></i> BUYERS
                    </button>
                    <div className={styles.separator}></div>
                    <button
                      className={`${styles.searchBtn} ${styles.btnBlue}`}
                      onClick={() => handleSearch("company")}
                    >
                      <i className="fa fa-briefcase"></i> SELLERS
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
