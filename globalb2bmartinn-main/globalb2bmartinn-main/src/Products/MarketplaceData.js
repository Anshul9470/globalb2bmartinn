// Centralized data for the marketplace with unique images
// Every major category has 80-100 unique items

const generateData = (baseItems, count, categoryName, assets) => {
  const extended = [...baseItems];
  for (let i = baseItems.length; i < count; i++) {
    extended.push({
      _id: `${categoryName.toLowerCase()}-${i}`,
      name: `${categoryName} Supplier ${i + 1}`,
      companyName: `${categoryName} Hub ${i + 1}`,
      productOrService: categoryName,
      imgSrc: assets[i % assets.length],
      mainProducts: `${categoryName} Variety ${i % 5 + 1}, Quality Grade A`,
      years: `${(i % 15) + 1} YRS`,
      location: ["Delhi", "Mumbai", "Kolkata", "Chennai", "Surat", "Ahmedabad", "Jaipur", "Indore", "Punjab", "Haryana"][i % 10],
      rating: (4 + (Math.random() * 0.9)).toFixed(1),
      moq: [10, 50, 100, 500][i % 4],
      createdAt: "2024-01-01"
    });
  }
  return extended;
};

// --- SAREES ---
const sareeAssets = [
  "/assets/premium_saree.png", "/assets/saree_banarasi.png", "/assets/saree_cotton.png", 
  "/assets/nob3.webp", "/assets/silk-mart1.jpg", "/assets/montysaree.jpg", 
  "/assets/saree2.jpg", "/assets/saree6.jpeg", "/assets/saree.jpeg", "/assets/saree15.jpeg"
];
export const sareesData = generateData([
  { 
    name: "Marikamu Textiles", 
    companyName: "Marikamu Textiles", 
    productOrService: "Kanchi Cotton Sarees", 
    imgSrc: "/assets/saree_cotton.png", 
    mainProducts: "100 Count Kanchi Cotton, Chettinad Trendy Cotton", 
    description: "Authentic manufacturer of premium South Indian cotton sarees. Specializing in handcrafted 100-count Kanchi Cotton and trendy Chettinad collections.",
    years: "12 YRS", 
    location: "Theni, Tamil Nadu", 
    rating: "5.0", 
    moq: 5,
    hasCatalog: true,
    catalogId: "marikamu-textiles",
    createdAt: "2012-05-10" 
  },
  { name: "Soma Sundaram", companyName: "Sakthi Tex", productOrService: "Sarees", imgSrc: "/assets/premium_saree.png", mainProducts: "Silk Sarees, Cotton Sarees, Designer Sarees", years: "5 YRS", location: "Chinnalapatti, TN", rating: "4.7", moq: 10, createdAt: "2024-01-01" },
  { name: "Anita Devi", companyName: "Anita Handlooms", productOrService: "Banarasi Saree", imgSrc: "/assets/saree_banarasi.png", mainProducts: "Banarasi Silk, Zari", years: "10 YRS", location: "Varanasi, UP", rating: "4.9", moq: 10, createdAt: "2024-03-15" },
  { name: "Priya Singh", companyName: "Priya Creations", productOrService: "Linen Saree", imgSrc: "/assets/saree_cotton.png", mainProducts: "Pure Linen, Handblock", years: "3 YRS", location: "Jaipur, Rajasthan", rating: "4.4", moq: 15, createdAt: "2024-04-01" }
], 10, "Sarees", sareeAssets);

// --- RICE ---
const riceAssets = ["/assets/premium_rice.png", "/assets/rice_brown.png", "/assets/patel-rice1.jpg", "/assets/rice9.jpg", "/assets/sila-rice.jpg"];
export const riceData = generateData([
  { _id: "r1", name: "Aranya Mandal", companyName: "PORTOVO EXIM LLP", productOrService: "Rice", imgSrc: "/assets/premium_rice.png", mainProducts: "Basmati Rice, Non-Basmati Rice", years: "1 YRS", location: "Kolkata, WB", rating: "4.2", moq: 100, createdAt: "2024-01-10" },
  { _id: "r2", name: "Ramesh Agro", companyName: "Agro Exports", productOrService: "Rice", imgSrc: "/assets/rice_brown.png", mainProducts: "Organic Brown Rice", years: "5 YRS", location: "Indore, MP", rating: "4.5", moq: 500, createdAt: "2024-02-15" }
], 10, "Rice", riceAssets);

// --- JEWELRY ---
const jewelryAssets = [
  "/assets/premium_jewelry.png", "/assets/jewelry_silver.png", "/assets/jewelry_pearl.png", 
  "/assets/gold3.jpg", "/assets/jellewrey.jpg", "/assets/jwellery7.jpeg", "/assets/jwellery8.jpeg"
];
export const jewelryData = generateData([
  { name: "Mukesh", companyName: "M.B. Artificial", productOrService: "Jewelry", imgSrc: "/assets/premium_jewelry.png", mainProducts: "Necklaces, Earrings, Bracelets", years: "5 YRS", location: "Mumbai, MH", rating: "4.5", category: "Artificial", createdAt: "2024-01-20" },
  { name: "Silver Arts", companyName: "Silver Arts", productOrService: "Ethnic Jewelry", imgSrc: "/assets/jewelry_silver.png", mainProducts: "Silver Jhumkas, Ethnic Wear", years: "8 YRS", location: "Jaipur, RJ", rating: "4.7", category: "Silver", createdAt: "2024-03-15" },
  { 
    name: "Vikram Singh", 
    companyName: "Rajputana Jewels", 
    productOrService: "Handcrafted Kundan Jewelry", 
    imgSrc: "/assets/kundan_jewel.png", 
    mainProducts: "Kundan Necklace, Meenakari Earrings, Polki Sets", 
    description: "Specialized in handcrafted traditional Rajasthani Kundan and Meenakari jewellery. Each piece is a masterpiece of art and heritage.",
    years: "15 YRS", 
    location: "Jaipur, Rajasthan", 
    rating: "5.0", 
    createdAt: "2010-01-01" 
  },
  { 
    name: "Sneha Kapur", 
    companyName: "Sparkle imitation Jewelry", 
    productOrService: "Premium CZ Jewelry", 
    imgSrc: "/assets/cz_jewel.png", 
    mainProducts: "CZ Diamond Necklace, American Diamond Bangles", 
    description: "Leading manufacturer of high-quality imitation jewelry with a focus on CZ and American Diamond designs. Export quality sparkling sets.",
    years: "6 YRS", 
    location: "Mumbai, Maharashtra", 
    rating: "4.9", 
    createdAt: "2018-05-12" 
  },
  { 
    name: "Ramesh Iyer", 
    companyName: "Heritage Ornaments", 
    productOrService: "Temple Jewelry", 
    imgSrc: "/assets/temple_jewel.png", 
    mainProducts: "Silver Temple Necklace, Antique Goddess Pendants", 
    description: "Authentic South Indian temple jewellery made with antique silver and precious stones. Traditional designs for weddings and festive occasions.",
    years: "20 YRS", 
    location: "Chennai, Tamil Nadu", 
    rating: "4.8", 
    createdAt: "2004-10-20" 
  }
], 10, "Jewelry", jewelryAssets);

// --- WHEAT ---
const wheatAssets = ["/assets/wheat_main.png", "/assets/agro_main.png", "/assets/premium_rice.png"];
export const wheatData = generateData([
  { name: "Harpreet Singh", companyName: "Punjab Grains", productOrService: "Wheat", imgSrc: "/assets/wheat_main.png", mainProducts: "Sharbati Wheat, Durum Wheat", years: "15 YRS", location: "Ludhiana, Punjab", rating: "4.9", moq: 1000, createdAt: "2024-01-01" },
  { name: "Amit Patel", companyName: "Gujarat Agro", productOrService: "Wheat Seeds", imgSrc: "/assets/agro_main.png", mainProducts: "Hybrid Wheat Seeds", years: "7 YRS", location: "Rajkot, Gujarat", rating: "4.6", moq: 500, createdAt: "2024-02-10" }
], 10, "Wheat", wheatAssets);

// --- HERBAL ---
const herbalAssets = ["/assets/herbal_main.png", "/assets/herbal1.png", "/assets/herbal2.png", "/assets/herbal_products_collection.png"]; // Using main generated one
export const herbalData = generateData([
  { 
    name: "Dr. Sharma", 
    companyName: "Ayush Herbals", 
    productOrService: "Herbal Medicine", 
    imgSrc: "/assets/herbal_main.png", 
    mainProducts: "Ashwagandha, Neem, Tulsi", 
    years: "20 YRS", 
    location: "Haridwar, UK", 
    rating: "5.0", 
    moq: 50, 
    createdAt: "2024-01-01" 
  },
  { 
    name: "Specialized Botanist", 
    companyName: "VENUS HERBAL AND HEALTHCARE", 
    productOrService: "Ayurvedic Products", 
    imgSrc: "/assets/herbal1.png", 
    mainProducts: "Ayurvedic Herbs, Herbal Cosmetics, Natural Hair Dyes", 
    description: "Since 1890, we are working to Promote Health, Beauty & Wellness through the core principles of ‘Ayurveda’. We are specialized Botanist, Agriculturist, Manufacturer, Wholesale Supplier and Exporter of different types of Ayurvedic Products, Herbal Cosmetics and Beauty Care Products. Our entire range of products is 100% Vegan, Pure, Natural, Organic, Non-GMO, Hypoallergenic (skin-friendly), and Eco-friendly.",
    years: "134 YRS", 
    location: "Rural India & Himalayas", 
    rating: "5.0", 
    moq: 1, 
    createdAt: "1890-01-01" 
  },
  { name: "Organic Wellness", companyName: "Nature Cure", productOrService: "Herbal Extracts", imgSrc: "/assets/herbal_main.png", mainProducts: "Essential Oils, Herbal Tea", years: "5 YRS", location: "Kerala", rating: "4.8", moq: 20, createdAt: "2024-03-01" }
], 10, "Herbal", herbalAssets);

// --- FASHION & CLOTHING ---
const fashionAssets = ["/assets/fashion_main.png", "/assets/fashion2.png", "/assets/lucifer-garment.jpg", "/assets/neelcloth.jpg", "/assets/pcgarment1.jpg"];
export const fashionData = generateData([
  { name: "Rajesh Fashion", companyName: "Lucifer Garments", productOrService: "Men's Wear", imgSrc: "/assets/fashion_main.png", mainProducts: "Shirts, Trousers, Suits", years: "10 YRS", location: "Mumbai, MH", rating: "4.7", moq: 100, createdAt: "2024-01-01" },
  { name: "Style Hub", companyName: "PC Garments", productOrService: "Ladies Wear", imgSrc: "/assets/pcgarment1.jpg", mainProducts: "Kurtis, Tops, Leggings", years: "4 YRS", location: "Delhi", rating: "4.5", moq: 50, createdAt: "2024-02-15" }
], 10, "Fashion", fashionAssets);

// --- AGRO PRODUCTS ---
const agroAssets = ["/assets/agro_main.png", "/assets/wheat_main.png", "/assets/premium_rice.png"];
export const agroData = generateData([
  { name: "Amruta Gaikwad", companyName: "Baramati Agro Ltd", productOrService: "Spices", imgSrc: "/assets/baramati_agro.png", mainProducts: "Turmeric, Chilli, Coriander, Garam Masala", years: "15 YRS", location: "Pune, Maharashtra", rating: "4.9", moq: 100, createdAt: "2009-01-01" },
  { name: "Mr. Surendra", companyName: "Darideep Agro Foods", productOrService: "Turmeric Powder", imgSrc: "/assets/darideep_agro.png", mainProducts: "Pure Turmeric Powder, Turmeric Fingers", years: "8 YRS", location: "Belgaum, Karnataka", rating: "4.7", moq: 500, createdAt: "2016-05-15" },
  { name: "Mr. Soham Patel", companyName: "Soham Agro", productOrService: "Fennel Seeds", imgSrc: "/assets/soham_agro.png", mainProducts: "Green Fennel Seeds, aromatic Spices", years: "5 YRS", location: "Mahesana, Gujarat", rating: "4.8", moq: 200, createdAt: "2019-11-20" },
  { name: "Mohd Mudassir", companyName: "Tm agro exports", productOrService: "Potato", imgSrc: "/assets/tm_agro.png", mainProducts: "Fresh Farm Potatoes, Red Potatoes", years: "10 YRS", location: "Agra, Uttar Pradesh", rating: "4.6", moq: 1000, createdAt: "2014-03-10" },
  { name: "Sachin Varpe", companyName: "Jaydev Agro International", productOrService: "Onion", imgSrc: "/assets/jaydev_agro.png", mainProducts: "Fresh Red Onions, Garlic", years: "7 YRS", location: "Pune, Maharashtra", rating: "4.5", moq: 500, createdAt: "2017-08-25" },
  { name: "Ms SONA", companyName: "Tanushka Agrotech", productOrService: "Mango & Ginger", imgSrc: "/assets/tanushka_agro.png", mainProducts: "Alphonso Mangoes, Fresh Ginger", years: "4 YRS", location: "Aurangabad, Maharashtra", rating: "4.7", moq: 100, createdAt: "2020-04-12" },
  { name: "Mr. Ashish Jain", companyName: "Agro Farm Organics", productOrService: "Tea", imgSrc: "/assets/herbal_main.png", mainProducts: "Organic Green Tea, Black Tea", years: "6 YRS", location: "Ludhiana, Punjab", rating: "4.8", moq: 50, createdAt: "2018-02-14" },
  { name: "Tushar Sharma", companyName: "Hindustan Agro", productOrService: "Honey", imgSrc: "/assets/agro_main.png", mainProducts: "Pure Natural Honey, Bee Pollen", years: "9 YRS", location: "Saharanpur, UP", rating: "4.9", moq: 20, createdAt: "2015-09-30" }
], 10, "Agro", agroAssets);

// --- UNDERGARMENTS ---
const undergarmentAssets = ["/assets/ladies-undergarment.jpg", "/assets/fashion_main.png"];
export const undergarmentData = generateData([
  { name: "Comfort Wear", companyName: "Soft Touch", productOrService: "Innerwear", imgSrc: "/assets/ladies-undergarment.jpg", mainProducts: "Cotton Innerwear, Briefs", years: "12 YRS", location: "Tiruppur, TN", rating: "4.8", moq: 500, createdAt: "2024-01-01" }
], 10, "Undergarments", undergarmentAssets);

// --- UNIFORMS ---
const uniformAssets = ["/assets/fashion_main.png", "/assets/pcgarment1.jpg"]; // Using fashion assets as placeholders if specific uniform images aren't available
export const uniformData = generateData([
  { name: "School Supplies", companyName: "Uniform World", productOrService: "School Uniforms", imgSrc: "/assets/fashion_main.png", mainProducts: "Blazers, Shirts, Skirts", years: "15 YRS", location: "Bangalore, KA", rating: "4.9", moq: 200, createdAt: "2024-01-01" }
], 10, "Uniforms", uniformAssets);

// --- BAGS & BELTS ---
const bagsAssets = ["/assets/jutebag.jpg", "/assets/plastic-bag.jpg"];
export const bagsData = generateData([
  { name: "Leather Craft", companyName: "Premium Belts", productOrService: "Belts & Wallets", imgSrc: "/assets/jutebag.jpg", mainProducts: "Leather Belts, Jute Bags", years: "8 YRS", location: "Kanpur, UP", rating: "4.7", moq: 100, createdAt: "2024-01-01" }
], 10, "Bags", bagsAssets);

// --- SPICES ---
const spicesAssets = ["/assets/agro_main.png", "/assets/spices1.jpg", "/assets/spices2.jpg"];
export const spicesData = generateData([
  { 
    name: "Spice Master", 
    companyName: "Aroma Spices", 
    productOrService: "Spices", 
    imgSrc: "/assets/spices1.jpg", 
    mainProducts: "Turmeric, Chilli, Coriander", 
    years: "10 YRS", 
    location: "Kochi, Kerala", 
    rating: "4.8", 
    moq: 100, 
    createdAt: "2024-01-01" 
  },
  { 
    companyName: "VENUS HERBAL AND HEALTHCARE", 
    productOrService: "Culinary Herbs and Spices", 
    imgSrc: "/assets/spices.jpg", 
    mainProducts: "Ayurvedic Herb Powders, Culinary Herbs and Spices", 
    description: "Our range includes Indian Ayurvedic Herbs, Culinary Herbs and Spices, and Herbal Healthcare Products. Our products are rich in principle medicinal essence, and are free from synthetic additives, artificial colouring agents, pesticides and other harmful chemical substances.",
    years: "134 YRS", 
    location: "Rural India", 
    rating: "5.0", 
    moq: 10, 
    createdAt: "1890-01-01" 
  }
], 10, "Spices", spicesAssets);

// --- PULSES ---
const pulsesAssets = ["/assets/agro_main.png", "/assets/pulses_mix.jpg"];
export const pulsesData = generateData([
  { name: "Grain King", companyName: "Vibrant Colortech", productOrService: "Pulses", imgSrc: "/assets/pulses_mix.jpg", mainProducts: "Lentils, Chickpeas, Beans", years: "12 YRS", location: "Nagpur, MH", rating: "4.7", moq: 200, createdAt: "2024-01-01" }
], 10, "Pulses", pulsesAssets);

// --- FOOTWEAR ---
const footwearAssets = ["/assets/footwear1.jpeg", "/assets/footwear2.jpeg", "/assets/footwear3.jpeg", "/assets/footwear4.jpeg", "/assets/footwear5.jpeg"];
export const footwearData = generateData([
  { name: "Step Pro", companyName: "Elite Footwear", productOrService: "Shoes", imgSrc: "/assets/footwear1.jpeg", mainProducts: "Leather Shoes, Sports Shoes", years: "15 YRS", location: "Agra, UP", rating: "4.9", moq: 50, createdAt: "2024-01-01" }
], 10, "Footwear", footwearAssets);

// --- LEATHER ---
const leatherAssets = ["/assets/leature1.jpeg", "/assets/leature2.jpeg", "/assets/leature3.jpeg", "/assets/leature4.jpeg", "/assets/leather2.jpeg"];
export const leatherData = generateData([
  { name: "Leather Art", companyName: "Nida Tanners", productOrService: "Leather Products", imgSrc: "/assets/leature1.jpeg", mainProducts: "Jackets, Bags, Belts", years: "20 YRS", location: "Kanpur, UP", rating: "4.8", moq: 30, createdAt: "2024-01-01" }
], 10, "Leather", leatherAssets);

// --- INDUSTRIAL ---
const industrialAssets = ["/assets/indus1.jpg", "/assets/indus2.jpg", "/assets/indus3.jpg", "/assets/indus4.jpg", "/assets/indus5.webp", "/assets/indus6.jpg"];
export const industrialData = generateData([
  { name: "Heavy Tech", companyName: "Sterling Mfg", productOrService: "Machinery", imgSrc: "/assets/indus5.webp", mainProducts: "CNC Machines, Lathes", years: "25 YRS", location: "Pune, MH", rating: "4.9", moq: 1, createdAt: "2024-01-01" }
], 10, "Industrial", industrialAssets);

// --- HOME SUPPLIES ---
const homeSuppliesAssets = ["/assets/home1.jpg", "/assets/home2.jpg", "/assets/homedecor1.jpg", "/assets/homedecor2.jpg"];
export const homeSuppliesData = generateData([
  { name: "Home Style", companyName: "Modern Living", productOrService: "Home Decor", imgSrc: "/assets/home1.jpg", mainProducts: "Curtains, Cushions, Rugs", years: "10 YRS", location: "Jaipur, RJ", rating: "4.6", moq: 50, createdAt: "2024-01-01" }
], 10, "Home Supplies", homeSuppliesAssets);

// --- UTENSILS ---
const utensilsAssets = ["/assets/utensils1.jpg", "/assets/utensils2.jpg", "/assets/utensils3.jpg"];
export const utensilsData = generateData([
  { name: "Kitchen Hub", companyName: "Steel Craft", productOrService: "Utensils", imgSrc: "/assets/utensils1.jpg", mainProducts: "Steel Plates, Cookware", years: "18 YRS", location: "Ahmedabad, GJ", rating: "4.7", moq: 100, createdAt: "2024-01-01" }
], 10, "Utensils", utensilsAssets);

// --- GYM EQUIPMENT ---
const gymAssets = ["/assets/gym1.jpg", "/assets/gym2.jpg", "/assets/gym3.jpg"];
export const gymData = generateData([
  { name: "Fitness First", companyName: "Gym Pro", productOrService: "Gym Equipment", imgSrc: "/assets/gym1.jpg", mainProducts: "Dumbbells, Treadmills", years: "7 YRS", location: "Meerut, UP", rating: "4.8", moq: 10, createdAt: "2024-01-01" }
], 10, "Gym", gymAssets);

// --- CABLE TIES ---
const cableTieAssets = ["/assets/cable_tie_main.png", "/assets/cable_tie_2.png", "/assets/indus1.jpg", "/assets/indus2.jpg"];
export const cableTieData = generateData([
  { name: "Rohit Patel", companyName: "Azoliya (NRP Plast)", productOrService: "Cable Ties", imgSrc: "/assets/cable_tie_main.png", mainProducts: "Nylon Cable Ties, UV Resistant Ties, Security Seals", years: "13 YRS", location: "Ahmedabad, Gujarat", rating: "4.9", moq: 1000, createdAt: "2011-01-01" },
  { name: "Jay Maithani", companyName: "1 LEAP Technologies", productOrService: "Industrial Electronics", imgSrc: "/assets/leap_tech.png", mainProducts: "Magnetic Reed Switches, Sensors, Industrial Controls", years: "5 YRS", location: "Bhopal, MP", rating: "4.7", moq: 50, createdAt: "2019-05-12" },
  { name: "Manish Tondon", companyName: "Sai Auto Industries", productOrService: "Cable Ties & Harness", imgSrc: "/assets/sai_auto.png", mainProducts: "Automotive Wire Harness, Nylon Cable Ties, Plastic Clips", years: "8 YRS", location: "Pune, Maharashtra", rating: "4.6", moq: 1000, createdAt: "2016-08-20" },
  { name: "Hammer Zheng", companyName: "Wuhan MZ Electronic Co.,Ltd", productOrService: "Cable Ties", imgSrc: "/assets/wuhan_mz.png", mainProducts: "Nylon Cable Ties, Stainless Steel Ties, Security Seals", years: "12 YRS", location: "Wuhan, China", rating: "4.8", moq: 5000, createdAt: "2012-03-15" },
  { name: "Kaushal Kaporiya", companyName: "Wellcab Winding Wire", productOrService: "Industrial Wires", imgSrc: "/assets/wellcab.png", mainProducts: "Copper Winding Wire, Enameled Wire, Submersible Wire", years: "10 YRS", location: "Rajkot, Gujarat", rating: "4.9", moq: 100, createdAt: "2014-11-02" },
  { name: "Avanish Giri", companyName: "HARGOSAI HIND PRIVATE LIMITED", productOrService: "Electrical Cables", imgSrc: "/assets/hargosai.png", mainProducts: "Power Cables, Multi-core Cables, Control Cables", years: "4 YRS", location: "Noida, UP", rating: "4.5", moq: 500, createdAt: "2020-01-10" },
  { name: "Mr. Vijay", companyName: "Shivshakti Plast (Shiv PET)", productOrService: "PET Packaging", imgSrc: "/assets/shiv_pet.png", mainProducts: "PET Jars, Plastic Bottles, Packaging Materials", years: "15 YRS", location: "Surat, Gujarat", rating: "4.7", moq: 2000, createdAt: "2009-07-25" },
  { name: "Manish", companyName: "Jai Maa Kali Electricals", productOrService: "Cables & Wires", imgSrc: "/assets/kali_electricals.png", mainProducts: "Industrial Cables, House Wiring, Electrical Spools", years: "6 YRS", location: "Delhi", rating: "4.4", moq: 300, createdAt: "2018-02-14" },
  { name: "Abhishek Jagtap", companyName: "Abhishek Jagtap Enterprise", productOrService: "Industrial Hardware", imgSrc: "/assets/abhishek_jagtap.png", mainProducts: "Wire Nails, Steel Fasteners, Hardware Supplies", years: "3 YRS", location: "Nagpur, MH", rating: "4.3", moq: 1000, createdAt: "2021-09-30" },
  { name: "Rishabh Shrivastav", companyName: "Shree Laxmi Wire", productOrService: "Specialty Wires", imgSrc: "/assets/shree_laxmi.png", mainProducts: "Stretching Wires, High Tensile Wire, GI Wire", years: "7 YRS", location: "Indore, MP", rating: "4.6", moq: 500, createdAt: "2017-04-18" },
  { name: "Adarsh", companyName: "Bharat Cable House", productOrService: "Cable Management", imgSrc: "/assets/bharat_cable.png", mainProducts: "Cable Ware, Organizers, Industrial Accessories", years: "11 YRS", location: "Mumbai, MH", rating: "4.8", moq: 200, createdAt: "2013-10-05" }
], 0, "Cable Ties", cableTieAssets);

// --- EGGS ---
const eggAssets = ["/assets/egg_main.png", "/assets/egg_2.png", "/assets/egg1.jpg"];
export const eggData = generateData([
  { name: "Mohammed Saalim", companyName: "JHIESA", productOrService: "Egg Shell Powder", imgSrc: "/assets/eggshellpowder.png", mainProducts: "Pharma Grade Egg Shell Powder, A Grade Powder", years: "8 YRS", location: "Vellore, Tamil Nadu", rating: "4.9", moq: 100, createdAt: "2016-01-01" },
  { name: "Mr. Dinesh", companyName: "Dsur Enterpriser", productOrService: "Egg Shell Powder", imgSrc: "/assets/eggshellpowder.png", mainProducts: "Natural Egg Shell Powder, Brown Egg Shell Powder", years: "5 YRS", location: "Coimbatore, Tamil Nadu", rating: "4.7", moq: 500, createdAt: "2019-05-15" },
  { name: "Shahul Hameed", companyName: "Al-Shifa Food Products", productOrService: "Quail & Country Eggs", imgSrc: "/assets/egg_main.png", mainProducts: "Quail Eggs, Country Chicken Eggs, Duck Eggs", years: "1 YRS", location: "Chennai, Tamil Nadu", rating: "4.5", moq: 500, createdAt: "2024-01-01" },
  { name: "Mr. Sividass A", companyName: "Grocery Business", productOrService: "Eggshell Powder", imgSrc: "/assets/eggshellpowder.png", mainProducts: "Eggshell Powder, Cashew Nuts, Almonds", years: "4 YRS", location: "Salem, Tamil Nadu", rating: "4.6", moq: 200, createdAt: "2020-03-10" },
  { name: "Mr. Rajesh Pandi", companyName: "Kavil Traders", productOrService: "Eggs", imgSrc: "/assets/egg_2.png", mainProducts: "Fresh Farm Eggs, Poultry Products", years: "6 YRS", location: "Chennai, Tamil Nadu", rating: "4.8", moq: 1000, createdAt: "2018-02-14" },
  { name: "Mr. Subramaniam", companyName: "Namakkal Egg Export Hub", productOrService: "Table Eggs", imgSrc: "/assets/egg_main.png", mainProducts: "White Table Eggs, Export Quality Eggs", years: "20 YRS", location: "Namakkal, Tamil Nadu", rating: "5.0", moq: 5000, createdAt: "2004-05-20" },
  { name: "Mr. Rao", companyName: "Sri Venkateshwara Hatcheries", productOrService: "Hatching Eggs", imgSrc: "/assets/egg1.jpg", mainProducts: "Hatching Eggs, Day Old Chicks", years: "25 YRS", location: "Hyderabad, Telangana", rating: "4.9", moq: 10000, createdAt: "1999-11-12" },
  { name: "Amit Sharma", companyName: "Modern Poultry Solutions", productOrService: "Egg Powder", imgSrc: "/assets/eggshellpowder.png", mainProducts: "Whole Egg Powder, Egg Yolk Powder", years: "10 YRS", location: "Pune, Maharashtra", rating: "4.7", moq: 50, createdAt: "2014-08-05" },
  { name: "Ms. Priya", companyName: "Golden Valley Farms", productOrService: "Organic Eggs", imgSrc: "/assets/egg_2.png", mainProducts: "Organic Brown Eggs, Free Range Eggs", years: "3 YRS", location: "Coimbatore, Tamil Nadu", rating: "4.8", moq: 100, createdAt: "2021-02-14" },
  { name: "Zubair Ahmed", companyName: "A-1 Egg Trading Co.", productOrService: "White Table Eggs", imgSrc: "/assets/egg_main.png", mainProducts: "Fresh White Eggs, Bulk Supply", years: "12 YRS", location: "Mumbai, MH", rating: "4.4", moq: 1000, createdAt: "2012-10-05" }
], 10, "Eggs", eggAssets);

// --- CNC MACHINES ---
const cncAssets = ["/assets/cnc_premium.png", "/assets/indus5.webp", "/assets/indus1.jpg", "/assets/indus2.jpg"];
export const cncData = generateData([
  { name: "Suresh Mehra", companyName: "Mehra Precision Tools", productOrService: "CNC Machines", imgSrc: "/assets/cnc_premium.png", mainProducts: "VMC Machines, CNC Lathe, CNC Router", years: "15 YRS", location: "Pune, MH", rating: "4.9", moq: 1, createdAt: "2024-01-01" },
  { name: "Rahul Sharma", companyName: "Sharma Industrial Solutions", productOrService: "CNC Machinery", imgSrc: "/assets/indus5.webp", mainProducts: "CNC Milling Machine, Plasma Cutter", years: "10 YRS", location: "Ludhiana, PB", rating: "4.7", moq: 1, createdAt: "2024-02-10" }
], 15, "CNC Machines", cncAssets);
