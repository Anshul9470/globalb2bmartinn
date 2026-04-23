const mongoose = require('mongoose');

// Database URI
const DATABASE_URL = 'mongodb://127.0.0.1:27017/globalb2bDb';

const cityToState = {
  "Amritsar": "Punjab",
  "Ludhiana": "Punjab",
  "Karnal": "Haryana",
  "Gurugram": "Haryana",
  "Noida": "Uttar Pradesh",
  "Lucknow": "Uttar Pradesh",
  "Varanasi": "Uttar Pradesh",
  "Kanpur": "Uttar Pradesh",
  "Kolkata": "West Bengal",
  "Siliguri": "West Bengal",
  "Nellore": "Andhra Pradesh",
  "Vijayawada": "Andhra Pradesh",
  "Visakhapatnam": "Andhra Pradesh",
  "Hyderabad": "Telangana",
  "Patna": "Bihar",
  "Gaya": "Bihar",
  "Bhubaneswar": "Odisha",
  "Cuttack": "Odisha",
  "Mumbai": "Maharashtra",
  "Pune": "Maharashtra",
  "Nagpur": "Maharashtra",
  "Raipur": "Chhattisgarh",
  "Bhilai": "Chhattisgarh",
  "Bhopal": "Madhya Pradesh",
  "Indore": "Madhya Pradesh",
  "Ahmedabad": "Gujarat",
  "Surat": "Gujarat",
  "Jaipur": "Rajasthan",
  "Jodhpur": "Rajasthan",
  "Chennai": "Tamil Nadu",
  "Madurai": "Tamil Nadu",
  "Bengaluru": "Karnataka",
  "Kochi": "Kerala",
  "Guwahati": "Assam",
  "Shimla": "Himachal Pradesh",
  "Ranchi": "Jharkhand",
  "Dehradun": "Uttarakhand",
  "New Delhi": "Delhi",
  "Delhi": "Delhi"
};

async function migrateData() {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log('Connected to MongoDB');

    // Define temporary schemas to access data
    const Buyer = mongoose.model('BuyerMigrate', new mongoose.Schema({}, { strict: false }), 'buyers');
    const User = mongoose.model('UserMigrate', new mongoose.Schema({}, { strict: false }), 'users');

    let buyerCount = 0;
    let sellerCount = 0;

    // Migrate Buyers
    const buyers = await Buyer.find({});
    for (const buyer of buyers) {
      if (!buyer.statename || buyer.statename === "") {
        const city = buyer.city || buyer.cityname;
        const state = cityToState[city] || "Other";
        await Buyer.updateOne({ _id: buyer._id }, { $set: { statename: state } });
        buyerCount++;
      }
    }

    // Migrate Sellers (Users)
    const sellers = await User.find({ role: 'seller' });
    for (const seller of sellers) {
      if (!seller.statename || seller.statename === "") {
        const city = seller.cityname || seller.city;
        const state = cityToState[city] || "Other";
        await User.updateOne({ _id: seller._id }, { $set: { statename: state } });
        sellerCount++;
      }
    }

    console.log(`Migration completed: Updated ${buyerCount} buyers and ${sellerCount} sellers.`);
    process.exit(0);
  } catch (err) {
    console.error('Migration failed:', err);
    process.exit(1);
  }
}

migrateData();
