export const CATEGORIES = [
  "FRUITS",
  "RICE",
  "PULSES",
  "SPICES",
  "GRAINS & CEREALS",
  "FLOUR & ATTA",
  "MUSTARD OIL",
  "SAREE",
  "KURTI & ETHNIC WEAR",
  "APPAREL & GARMENTS",
  "MACHINERY",
  "CNC MACHINES",
  "INDUSTRIAL PLANTS",
  "PACKAGING MACHINES",
  "AGRICULTURE EQUIPMENT",
  "SOLAR & RENEWABLE ENERGY",
  "ELECTRONICS & ELECTRICAL",
  "MOBILE & ACCESSORIES",
  "COMPUTERS & PERIPHERALS",
  "PHARMACEUTICALS",
  "AYURVEDIC & HERBAL",
  "HEALTH & MEDICAL",
  "COSMETICS & BEAUTY",
  "BEAUTY",
  "BUILDING & CONSTRUCTION",
  "HARDWARE & TOOLS",
  "CHEMICALS",
  "MINERALS & METALS",
  "STEEL & IRON",
  "PLASTICS & POLYMERS",
  "PACKAGING MATERIALS",
  "FURNITURE & DECOR",
  "HOME & KITCHEN",
  "UTENSILS & CROCKERY",
  "HANDICRAFTS & GIFTS",
  "JEWELLERY",
  "OFFICE & STATIONERY",
  "AUTOMOBILE & PARTS",
  "BAGS & LUGGAGE",
  "SECURITY & PROTECTION",
];

export const SUB_CATEGORIES = {
  FRUITS: ["Apple", "Banana", "Mango", "Orange", "Grapes", "Pomegranate", "Papaya", "Watermelon", "Fresh Fruits", "Fruit Powder"],
  RICE: ["Basmati Rice", "Sona Masoori", "Brown Rice", "Long Grain Rice", "Parboiled Rice", "Broken Rice"],
  PULSES: ["Chickpeas", "Lentils", "Moong Dal", "Toor Dal", "Urad Dal", "Pulses (Daal)"],
  SPICES: ["Turmeric (Haldi)", "Cumin", "Cardamom", "Black Pepper", "Clove", "Saffron", "Ginger", "Garlic", "Red Chilli Powder"],
  "GRAINS & CEREALS": ["Wheat", "Maize (Corn)", "Barley", "Millet", "Sugar"],
  "FLOUR & ATTA": ["Wheat Flour (Atta)", "Maida", "Besan (Gram Flour)", "Rice Flour"],
  "MUSTARD OIL": ["Pure Mustard Oil", "Kachi Ghani", "Cold Pressed", "Refined Oil", "Cooking Oil", "Edible Oil"],
  "SAREE": ["Banarasi Saree", "Silk Saree", "Cotton Saree", "Designer Saree", "Sarees"],
  "KURTI & ETHNIC WEAR": ["Kurtis", "Lehenga Choli", "Salwar Kameez", "Sherwani"],
  "APPAREL & GARMENTS": ["T-shirts", "Shirts", "Wholesale Shirts", "Jeans", "Trousers", "Suits", "Ties", "Wool", "Denim"],
  "MACHINERY": ["CNC Machines", "Injection Molding", "Lathe Machines", "Milling Machines", "Laser Cutting", "Industrial Pumps", "Pumps", "Valves", "Compressors"],
  "INDUSTRIAL": ["Industrial Pumps", "Valves", "Compressors", "Industrial Plants", "Boilers", "Generators"],
  "CNC MACHINES": ["VMC Machine", "CNC Lathe", "CNC Router", "CNC Milling", "Plasma Cutter", "Laser Cutting"],
  "INDUSTRIAL PLANTS": ["Water Treatment Plant", "Oxygen Plant", "Rice Mill Plant"],
  "PACKAGING MACHINES": ["Vacuum Packing", "Pouch Packing Machine", "Shrink Wrapping", "Labeling Machine"],
  "AGRICULTURE EQUIPMENT": ["Tractors", "Threshers", "Harvesters", "Drip Irrigation"],
  "SOLAR & RENEWABLE ENERGY": ["Solar Panels", "Solar Inverters", "Solar Batteries"],
  "ELECTRONICS & ELECTRICAL": ["Transformers", "Generators", "Switchgears", "Cables & Wires", "Wires", "Electric Motors", "PCB Boards", "Resistors", "Transistors"],
  "MOBILE & ACCESSORIES": ["Smartphones", "Phone Cases", "Smart Watches"],
  "COMPUTERS & PERIPHERALS": ["Laptops", "Desktops", "Printers", "Monitors"],
  "PHARMACEUTICALS": ["Generic Medicines", "Antibiotics", "Vitamins"],
  "AYURVEDIC & HERBAL": ["Herbal Extracts", "Ayurvedic Medicines", "Aloe Vera"],
  "HEALTH & MEDICAL": ["Surgical Gloves", "Face Masks", "PPE Kits", "Wheelchairs", "Patient Monitors", "X-ray", "Scalpels", "Eye Drops"],
  "COSMETICS & BEAUTY": ["Lipstick", "Nail Polish", "Beauty Kits"],
  "BEAUTY": ["Perfume", "Skin Care", "Lipstick", "Nail Polish", "Beauty Kits", "Fragrance", "Essential Oils", "Body Care", "Hair Care"],
  "BUILDING & CONSTRUCTION": ["Cement", "TMT Bars (Sariya)", "Tiles", "Granite", "Marble", "Plywood", "Paints", "Wash Basins", "Showers", "Faucets", "Toilets"],
  "HARDWARE & TOOLS": ["Power Drills", "Grinders", "Hand Tools", "Cutting Tools", "Measuring Tapes", "Fasteners"],
  "CHEMICALS": ["Industrial Acids", "Solvents", "Dyes", "Pigments"],
  "MINERALS & METALS": ["Iron Ore", "Quartz", "Talc", "Coal", "Copper"],
  "PLASTICS & POLYMERS": ["PVC Resin", "Plastic Granules (HDPE/LDPE)", "PP Granules"],
  "PACKAGING MATERIALS": ["Corrugated Boxes", "Plastic Pouches", "BOPP Tapes"],
  "FURNITURE & DECOR": ["Office Desks", "Chairs", "Sofas", "Beds", "Dining Tables", "Wallpaper", "Curtains", "Rugs"],
  "HOME & KITCHEN": ["Mixer Grinder", "Gas Stoves", "Water Purifiers", "Home Appliances"],
  "UTENSILS & CROCKERY": ["Stainless Steel Utensils", "Copper Utensils", "Ceramic Crockery"],
  "HANDICRAFTS & GIFTS": ["Wooden Handicrafts", "Metal Artware", "Corporate Gifts"],
  "JEWELLERY": ["Gold Jewellery", "Silver Jewellery", "Diamond Jewellery", "Gemstones"],
  "OFFICE & STATIONERY": ["Stationery", "Notebooks"],
  "AUTOMOBILE & PARTS": ["Engine Components", "Brake Systems", "Tyres & Tubes"],
  "BAGS & LUGGAGE": ["Backpacks", "Travel Bags", "Wallets", "Handbags"],
  "SECURITY & PROTECTION": ["CCTV Cameras", "Access Control", "Fire Extinguishers"],
};

export const getCategorySuggestions = (query) => {
  if (!query || !query.trim()) return CATEGORIES.slice(0, 15);
  
  const q = query.toLowerCase().trim();
  
  // 1. Direct category matches
  const directMatches = CATEGORIES.filter(c => c.toLowerCase().includes(q));
  
  // 2. Sub-category matches (to suggest parent categories)
  const parentMatches = [];
  Object.keys(SUB_CATEGORIES).forEach(cat => {
    if (SUB_CATEGORIES[cat].some(sub => sub.toLowerCase().includes(q))) {
      if (!directMatches.includes(cat)) {
        parentMatches.push(cat);
      }
    }
  });

  // 3. Direct Sub-category matches (add them as suggestions too)
  const subMatches = [];
  Object.values(SUB_CATEGORIES).flat().forEach(sub => {
    if (sub.toLowerCase().includes(q) && !subMatches.includes(sub)) {
      subMatches.push(sub);
    }
  });

  return [...directMatches, ...subMatches, ...parentMatches].slice(0, 15);
};

export const getSubCategorySuggestions = (cat, query) => {
  const pool = cat ? (SUB_CATEGORIES[cat.toUpperCase()] || []) : Object.values(SUB_CATEGORIES).flat();
  if (!query || !query.trim()) return pool.slice(0, 15);
  
  const q = query.toLowerCase().trim();
  return pool.filter(s => s.toLowerCase().includes(q)).slice(0, 15);
};

export const getSubCategories = (cat) => {
  if (!cat) return [];
  return SUB_CATEGORIES[cat.toUpperCase()] || [];
};
