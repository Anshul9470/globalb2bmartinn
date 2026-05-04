
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '.env') });

const dbUrl = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/globalb2bDb';

const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", 
  "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", 
  "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir", "Ladakh", 
  "Lakshadweep", "Puducherry"
];

const GLOBAL_COUNTRIES = [
  "USA", "United Kingdom", "Canada", "Australia", "Germany", "France", "Italy", "Spain", "Japan", 
  "China", "Brazil", "Mexico", "Russia", "South Africa", "UAE", "Saudi Arabia", "Singapore", 
  "Malaysia", "Indonesia", "Thailand", "Vietnam", "Turkey", "Egypt", "Nigeria", "Kenya", 
  "Netherlands", "Switzerland", "Sweden", "Norway", "Denmark", "Poland", "Greece", "Israel", 
  "South Korea", "Argentina", "Chile", "Colombia", "Peru", "New Zealand", "Portugal", "Belgium",
  "Austria", "Finland", "Ireland", "Czech Republic", "Hungary", "Romania", "Ukraine", "Kazakhstan",
  "Pakistan", "Bangladesh", "Sri Lanka", "Philippines", "Iran", "Iraq", "Qatar", "Kuwait", "Oman",
  "Jordan", "Lebanon", "Morocco", "Algeria", "Tunisia", "Ghana", "Ethiopia", "Tanzania", "Uganda",
  "Zambia", "Zimbabwe", "Angola", "Mozambique", "Sudan", "Libya", "Venezuela", "Ecuador", "Bolivia",
  "Paraguay", "Uruguay", "Costa Rica", "Panama", "Guatemala", "Cuba", "Jamaica", "Haiti", "Dominican Republic"
];

const PRODUCTS = [
  "CNC Machines", "Injection Molding", "Packing Machines", "Lathe Machines", "Milling Machines", 
  "Laser Cutting", "Power Drills", "Grinders", "Impact Wrenches", "Cutting Tools", "Measuring Tapes", 
  "Bearings", "Gears", "Conveyor Belts", "Industrial Chains", "Valves", "Pumps", "Solar Panels", 
  "Inverters", "Solar Batteries", "Mounting Structures", "Microchips", "Resistors", "Capacitors", 
  "PCB Boards", "Transistors", "Transformers", "Switchgears", "Electrical Panels", "Wires", "Cables", 
  "Generators", "Mobile Accessories", "Bluetooth Speakers", "Smart Watches", "Smart Home Devices", 
  "Generic Medicines", "API (Raw material)", "Ayurvedic medicines", "Antibiotics", "MRI Machines", 
  "X-ray", "Patient Monitors", "Hospital Beds", "Wheelchairs", "Scalpels", "Forceps", "Surgical Gloves", 
  "Masks", "PPE Kits", "Leather Jackets", "Industrial Pipes", "PVC Fittings", "Banana Powder", 
  "Spices Powder", "Rice", "Sugar", "Copper Wire", "Aluminum Sheets", "Steel Rods"
];

const NAMES = [
  "Vinod", "Sanjay", "Suresh", "Kiran", "Vikram", "Rajesh", "Rahul", "Sandip", "Amit", "Prakash", 
  "Vijay", "Sudhir", "Sunil", "Manoj", "Anil", "Dinesh", "Ramesh", "Arun", "Pradeep", "Ashok",
  "John", "Maria", "Ahmed", "Li", "Elena", "David", "Sophie", "Hiroshi", "Carlos", "Anna",
  "Robert", "Linda", "Michael", "Sarah", "James", "Karen", "Thomas", "Nancy", "Steven", "Betty"
];

const SURNAME = [
  "Industries", "Group", "Enterprises", "Corporation", "Exports", "Solutions", "Mart", "Hub", 
  "Overseas", "Global", "Manufacturing", "Traders", "Pvt Ltd", "Systems", "Limited"
];

const UNITS = ["kg", "pcs", "dozen", "meter", "ton", "liter", "container"];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateLead(location, type) {
  const namePrefix = getRandom(NAMES);
  const nameSuffix = getRandom(SURNAME);
  const fullName = `${namePrefix} ${nameSuffix}`;
  const product = getRandom(PRODUCTS);
  const quantity = Math.floor(Math.random() * 950) + 50;
  const unit = getRandom(UNITS);
  const mobile = "9" + Math.floor(Math.random() * 900000000 + 100000000); // 10 digit
  const email = `${namePrefix.toLowerCase()}.${Math.floor(Math.random() * 1000)}@example.com`;
  
  const lead = {
    name: fullName,
    email: email,
    mobileNumber: mobile,
    productOrService: product,
    quantity: quantity,
    unit: unit,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  if (type === 'state') {
    lead.statename = location;
    lead.country = 'India';
    lead.city = location + " City"; // Generic
  } else {
    lead.country = location;
    lead.statename = "";
    lead.city = location + " Capital"; // Generic
  }

  return lead;
}

async function seed() {
  try {
    await mongoose.connect(dbUrl);
    console.log('Connected to MongoDB');
    
    const Buyer = mongoose.connection.db.collection('buyers');
    let totalAdded = 0;

    console.log('--- Seeding Indian States ---');
    for (const state of INDIAN_STATES) {
      const count = await Buyer.countDocuments({ statename: state, country: { $in: ['India', null, ''] } });
      if (count < 5) {
        const toAdd = Math.floor(Math.random() * 6) + 5; // 5 to 10
        const leads = [];
        for (let i = 0; i < toAdd; i++) {
          leads.push(generateLead(state, 'state'));
        }
        await Buyer.insertMany(leads);
        console.log(`Added ${toAdd} leads for ${state}`);
        totalAdded += toAdd;
      } else {
        console.log(`Skipping ${state}, already has ${count} leads`);
      }
    }

    console.log('--- Seeding Global Countries ---');
    for (const country of GLOBAL_COUNTRIES) {
      const count = await Buyer.countDocuments({ country: country });
      if (count < 5) {
        const toAdd = Math.floor(Math.random() * 6) + 5; // 5 to 10
        const leads = [];
        for (let i = 0; i < toAdd; i++) {
          leads.push(generateLead(country, 'country'));
        }
        await Buyer.insertMany(leads);
        console.log(`Added ${toAdd} leads for ${country}`);
        totalAdded += toAdd;
      } else {
        console.log(`Skipping ${country}, already has ${count} leads`);
      }
    }

    console.log(`DONE! Total leads added: ${totalAdded}`);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
