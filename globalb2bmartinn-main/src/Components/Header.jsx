import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";
import styles from "./Navbar.module.css";
import { resolveState } from "../services/stateResolver";
import { useAuth } from "../Buyers/AuthContext";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const { userId, logout } = useAuth();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Comprehensive list of 500+ keywords for suggestions
  const KEYWORDS = [
    // 1. INDUSTRIAL MACHINERY & TOOLS
    // Machinery Main
    "Machinery", "Industrial Machinery", "CNC Machines", "CNC Machine", "Injection Molding", "Plastic Injection",
    "Packing Machines", "Packing Machine", "Lathe Machines", "Lathe Machine", "Milling Machines", "Milling Machine",
    "Laser Cutting", "Laser Machine", "Welding Machine", "Industrial Equipment",
    // Tools
    "Tools", "Power Tools", "Power Drills", "Drills", "Grinders", "Impact Wrenches", "Cutting Tools",
    "Measuring Tapes", "Hammer", "Screwdrivers", "Wrenches", "Pliers", "Saws",
    // Parts & Components
    "Bearings", "Gears", "Conveyor Belts", "Industrial Chains", "Chains", "Valves", "Pumps",
    "Industrial Pumps", "Mechanical Parts", "Machine Parts", "Fasteners", "Nuts & Bolts",
    
    // 2. ELECTRICAL & ELECTRONICS
    // Solar Energy
    "Solar Energy", "Solar Panels", "Solar Inverters", "Inverters", "Solar Batteries", "Mounting Structures",
    "Solar Equipment", "Solar Accessories", "Panel Installation",
    // Components
    "Electronics", "Electric Components", "Microchips", "Resistors", "Capacitors", "PCB Boards",
    "Transistors", "Diodes", "Electronic Parts", "Semiconductors", "Circuits",
    // Power & Electrical
    "Electrical", "Transformers", "Switchgears", "Electrical Panels", "Electrical Wires", "Cables",
    "Copper Cable", "Electrical Cables", "Wires", "Generators", "Power Supply", "Electrical Equipment",
    "Switchboards", "Circuit Breakers", "Fuses", "Insulators",
    // Consumer Electronics
    "Mobile Accessories", "Phone Chargers", "USB Cables", "Bluetooth Speakers", "Smart Watches", 
    "Smart Home Devices", "Smart Devices", "Electronics Gadgets", "Tech Accessories", "Headphones",
    "Mobile Phones", "Tablets", "Laptops", "Computer Accessories",
    
    // 3. HEALTHCARE & PHARMACEUTICALS
    // Pharma
    "Pharma", "Pharmaceuticals", "Medicines", "Generic Medicines", "API", "Antibiotics",
    "Herbal Medicines", "Ayurvedic", "Ayurvedic Medicines", "Homeopathy", "Drug Manufacturing",
    // Medical Equipment
    "Medical Equipment", "MRI Machines", "X-ray", "X-ray Machine", "Patient Monitors", "Hospital Beds",
    "Wheelchairs", "Medical Devices", "Diagnostic Equipment", "Hospital Equipment", "ICU Equipment",
    "Ventilators", "Oxygen Equipment", "Medical Supplies",
    // Surgical & PPE
    "Surgical", "Scalpels", "Forceps", "Surgical Gloves", "Masks", "PPE Kits", "Diagnostic Kits",
    "Syringes", "Needles", "Surgical Instruments", "Medical Instruments", "Healthcare Products",
    "Bandages", "First Aid Kit", "Medical Tapes", "Gauze", "Thermometers",
    
    // 4. APPAREL, TEXTILES & FASHION
    // Fabrics
    "Fabric", "Fabrics", "Textile", "Textiles", "Cotton Fabric", "Cotton", "Polyester", "Denims", 
    "Silk", "Rayon", "Wool", "Linen", "Knit Fabric", "Printed Fabric", "Woven Fabric",
    // Readymade
    "Apparel", "Clothing", "Fashion", "Shirts", "T-shirts", "Saree", "Sarees", "Kurtis", "Kurta",
    "Suits", "Trousers", "Pants", "Dresses", "Kids Wear", "Children Wear", "Frock", "Shorts",
    "Leggings", "Jeans", "Tops", "Tunics", "Dupattas", "Shawls", "Stoles",
    // Home Textiles
    "Bedsheet", "Bedsheets", "Bed Sheets", "Curtains", "Carpets", "Rugs", "Towels", "Bath Towels",
    "Pillows", "Cushions", "Blankets", "Quilts", "Home Textiles", "Table Cloth", "Table Linen",
    "Bath Mats", "Door Mats", "Upholstery", "Furnishing Fabric",
    // Accessories
    "Handbags", "Bags", "Belts", "Wallets", "Ties", "Cufflinks", "Footwear", "Shoes",
    "Sandals", "Slippers", "Formal Shoes", "Casual Shoes", "Sports Shoes", "Sneakers",
    "Scarves", "Shawls", "Fashion Accessories", "Costume Jewelry", "Pendants", "Bracelets",
    
    // 5. FOOD, AGRICULTURE & SPICES
    // Spices
    "Spices", "Turmeric", "Cumin", "Jeera", "Cardamom", "Saffron", "Black Pepper", "Pepper",
    "Chili Powder", "Cinnamon", "Clove", "Nutmeg", "Bay Leaves", "Fenugreek", "Coriander",
    "Mustard Seeds", "Fennel", "Asafoetida", "Ginger Powder", "Garlic Powder", "Spice Powder",
    // Grains
    "Grains", "Rice", "Basmati Rice", "White Rice", "Brown Rice", "Wheat", "Pulses", "Lentils",
    "Dal", "Moong", "Chana", "Arhar", "Sugar", "Jaggery", "Flour", "Maida", "Semolina",
    "Rice Flour", "Gram Flour", "Besan", "Corn", "Maize", "Barley", "Oats",
    // Oils & Ghee
    "Oil", "Oils", "Ghee", "Desi Ghee", "Mustard Oil", "Sunflower Oil", "Soyabean Oil", "Coconut Oil",
    "Olive Oil", "Vegetable Oil", "Palm Oil", "Sesame Oil", "Almond Oil", "Butter", "Margarine",
    // Agri Equipment
    "Agriculture", "Agri Equipment", "Tractors", "Threshers", "Irrigation Pipes", "Fertilizer Spreaders",
    "Farmland Equipment", "Farm Machinery", "Agricultural Tools", "Seeds", "Fertilizers", "Pesticides",
    "Agro Products", "Farm Products", "Vegetables", "Fruits", "Fresh Produce",
    
    // 6. BUILDING & CONSTRUCTION
    // Materials
    "Construction", "Building Materials", "Cement", "TMT Bars", "Sariya", "Tiles", "Floor Tiles",
    "Ceramic Tiles", "Vitrified Tiles", "Bricks", "Red Bricks", "Facing Bricks", "Granite", "Marble",
    "Limestone", "Gravel", "Sand", "Concrete", "Ready Mix Concrete",
    // Sanitary
    "Sanitary", "Sanitary Fittings", "Faucets", "Taps", "Wash Basins", "Basins", "Toilets", "WC Seats",
    "Showers", "Shower Heads", "Bath Fittings", "Bathroom Fixtures", "Pipes", "PVC Pipes", "Plumbing",
    "Plumbing Supplies", "Drainage System", "Fittings",
    // Interior
    "Interior", "Plywood", "Plywood Sheets", "Laminates", "Laminate Flooring", "Paints", "Wall Paint",
    "Wood Paint", "Varnish", "Distemper", "Wallpaper", "Wall Paper", "False Ceiling", "Ceiling Materials",
    "Wood Flooring", "Flooring Materials", "Carpet Flooring", "Tiles Flooring",
    
    // 7. CHEMICALS, MINERALS & PLASTIC
    // Chemicals
    "Chemicals", "Chemical", "Industrial Chemicals", "Cleaning Chemicals", "Acids", "Solvents", 
    "Dyes", "Pigments", "Flavoring Agents", "Additives", "Preservatives", "Water Treatment Chemicals",
    "Disinfectants", "Detergents", "Surfactants", "Polymers", "Resins",
    // Plastics
    "Plastic", "Plastics", "Plastic Granules", "HDPE", "LDPE", "PVC", "PVC Resin", "Masterbatches",
    "Plastic Pellets", "Polymer Granules", "Plastic Raw Material", "Plastic Compounds",
    "Plastic Molding", "Plastic Products", "Plastic Containers", "Plastic Bags", "Plastic Films",
    // Minerals
    "Minerals", "Iron Ore", "Marble Dust", "Quartz", "Talc", "Gypsum", "Mica", "Feldspar",
    "Bentonite", "Kaolin", "Limestone Powder", "Dolomite", "Soda Ash", "Salt", "Rock Salt",
    
    // 8. PACKAGING & PRINTING
    // Packaging
    "Packaging", "Corrugated Boxes", "Boxes", "Plastic Pouches", "Pouches", "BOPP Tapes", "Packaging Tape",
    "Bubble Wrap", "Plastic Wrap", "Stretch Film", "Shrink Film", "Foam Packaging", "Paper Packaging",
    "Kraft Paper", "Cardboard", "Paper Boxes", "Wooden Crates", "Pallets", "Wooden Pallets",
    "Packaging Materials", "Packing Materials",
    // Printing Machines
    "Printing", "Printing Machines", "Labeling Machines", "Labeling", "Vacuum Packing", "Shrink Wrapping",
    "Sealing Machines", "Binding Machines", "Laminating Machines", "Folding Machines", "Cutting Machines",
    // Office & Warehouse
    "Office", "Stationery", "Office Supplies", "Office Desks", "Desk", "Desks", "Chairs", "Office Chairs",
    "Industrial Racks", "Racks", "Warehouse Shelving", "Shelving", "Storage Solutions", "Filing Cabinets",
    "Printers", "Printer", "Scanners", "Photocopiers", "Office Equipment", "Whiteboards",
    
    // EXISTING POPULAR CATEGORIES (Kept from before)
    "Jewelry", "Gold Jewelry", "Jewellery", "Necklace", "Gold Ornaments", "Health & Beauty", "Beauty Products",
    "Herbal Products", "Medicine", "Pharma", "Healthcare", "Eye Drops", "Aloe Vera", "Furniture",
    "Sofa", "Chair", "Handicrafts", "Gifts & Decor", "Gifts", "Decor", "Hardware", "Door Handle",
    "Door Lock", "Lifts", "Elevator", "RCC Compounds", "Toys", "Games", "Trophy", "Sports Equipment",
    "Bat", "Gym Equipment", "Electronic Goods", "Computer", "Electronics Goods", "Agarbatti",
    "Machine", "Taxi", "Tour and Travel", "Travel", "Event Planner", "Event Management", "Alarm",
    "Dry Fruits", "Tea", "Coffee", "Honey", "Pickle", "Peanuts", "Seafood", "Beverages",
    "Garlic", "Onion", "Potato", "Tomato", "Mango", "Banana", "Apple", "Fresh Fruits",
    "Saffron", "Seeds", "Agro Products", "Uniform", "Clothing", "Jute Bags", "Bags & Belts",
    "Sofa", "Ceramic Tiles", "Sanitary Ware", "Bathware", "Cup", "Glass", "Bottle",
    "Metal", "Brass Components", "Water Tank", "Industrial Tools", "Copper Cable", "Generator"
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
    // Removed auto-search to allow user to choose between Buyer/Seller buttons
  };

  const handleSearch = async (type, queryOverride = null) => {
    const query = (queryOverride || searchQuery).trim().toLowerCase();
    
    // Refine Search Logic: Strictly block execution if no query is present
    if (!query) {
      console.log("Search query is empty. Navigation blocked.");
      return;
    }

    // Strict Keyword Validation: Only allow searches for items in our KEYWORDS list
    const isValideKeyword = KEYWORDS.some(k => k.toLowerCase() === query);

    if (!isValideKeyword) {
      console.log("Not a suggested keyword. Redirecting to 404.");
      navigate('/not-found');
      return;
    }

    try {
      let response, results;

      // Fetch buyers or sellers based on type
      if (type === "buyer") {
        // Fetch all buyers from API with cache busting
        response = await fetch(`http://localhost:3005/buyers?t=${Date.now()}`);
        const data = await response.json();
        results = (data.buyers || []).filter(buyer => {
          const resolvedState = resolveState(buyer).toLowerCase();
          return (
            buyer.name.toLowerCase().includes(query) ||
            buyer.email.toLowerCase().includes(query) ||
            buyer.productOrService.toLowerCase().includes(query) ||
            buyer.city.toLowerCase().includes(query) ||
            resolvedState.includes(query)
          );
        });
      } else if (type === "company") {
        // Fetch all sellers from API with cache busting
        response = await fetch(`http://localhost:3005/by-role/seller?t=${Date.now()}`);
        const data = await response.json();
        results = (data.users || []).filter(seller => {
          const resolvedState = resolveState(seller).toLowerCase();
          return (
            seller.name.toLowerCase().includes(query) ||
            seller.email.toLowerCase().includes(query) ||
            seller.productOrService.toLowerCase().includes(query) ||
            seller.companyName.toLowerCase().includes(query) ||
            resolvedState.includes(query)
          );
        });
      }

      if (results && results.length > 0) {
        // Navigate to a search results page with the results
        navigate(`/search-results?query=${encodeURIComponent(query)}&type=${type}`, { 
          state: { results, searchType: type, searchQuery: query } 
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
                  <div className={styles.navSearchButtons}>
                    <button
                      className={`${styles.navSearchBtn} ${styles.navBtnOrange}`}
                      onClick={() => handleSearch("buyer")}
                      disabled={!searchQuery.trim()}
                      title="Get Buyers"
                    >
                      <i className="fa fa-users"></i>
                    </button>
                    <button
                      className={`${styles.navSearchBtn} ${styles.navBtnBlue}`}
                      onClick={() => handleSearch("company")}
                      disabled={!searchQuery.trim()}
                      title="Get Sellers"
                    >
                      <i className="fa fa-briefcase"></i>
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className={styles.topActions}>
              <Link to="/register-buyer" className={styles.loginBtn}>
                <i className="fa fa-paper-plane"></i> POST REQUIREMENT
              </Link>
              {userId ? (
                <>
                  <Link to="/dashboard" className={styles.loginBtn}>
                    <i className="fa fa-gauge"></i> DASHBOARD
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/register-Company" className={styles.loginBtn}>
                    <i className="fa fa-user-plus"></i> JOIN FREE
                  </Link>
                  <Link to="/login" className={styles.loginBtn}>
                    <i className="fa fa-user"></i> LOGIN
                  </Link>
                </>
              )}
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
                <div className={styles.searchButtons}>
                  <button
                    className={`${styles.searchBtn} ${styles.btnOrange}`}
                    onClick={() => handleSearch("buyer")}
                    disabled={!searchQuery.trim()}
                  >
                    <i className="fa fa-users"></i> BUYERS
                  </button>
                  <div className={styles.separator}></div>
                  <button
                    className={`${styles.searchBtn} ${styles.btnBlue}`}
                    onClick={() => handleSearch("company")}
                    disabled={!searchQuery.trim()}
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
