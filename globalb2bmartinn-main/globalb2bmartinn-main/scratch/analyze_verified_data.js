const mongoose = require('mongoose');

const mongoUri = "mongodb://ec2-13-127-78-0.ap-south-1.compute.amazonaws.com:27017/globalb2bDb";

const userSchema = new mongoose.Schema({
  companyName: String,
  productOrService: String,
  cityname: String,
  statename: String,
  isApproved: { type: Boolean, default: false }
}, { collection: 'users' });

async function analyzeSellers() {
  try {
    await mongoose.connect(mongoUri);
    const User = mongoose.model('User', userSchema);

    // Total sellers
    const totalSellers = await User.countDocuments();
    
    // Key categories
    const categories = [
      { name: "Spices", regex: /spice|masala|turmeric|chilli/i },
      { name: "Jewelry", regex: /jewel|ornament|neckl|gold|silver|diamond|bangle/i },
      { name: "Agro", regex: /agro|farm|wheat|rice|onion|potato|maize|pulse/i },
      { name: "Eggs", regex: /egg/i },
      { name: "Furniture", regex: /furniture|chair|sofa|table/i },
      { name: "Industrial", regex: /industrial|machine|cable|wire|plastic|steel/i },
      { name: "Fashion", regex: /fashion|garment|clothing|t-shirt|wear/i }
    ];

    console.log("--- Verified Supplier Data Summary ---");
    console.log(`Total Sellers in DB: ${totalSellers}`);
    console.log("\nCounts by Major Category:");
    
    for (const cat of categories) {
      const count = await User.countDocuments({
        $or: [
          { companyName: cat.regex },
          { productOrService: cat.regex }
        ]
      });
      console.log(`- ${cat.name}: ${count}`);
    }

    // List some top categories found in productOrService
    const topProducts = await User.aggregate([
      { $group: { _id: "$productOrService", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 20 }
    ]);

    console.log("\nTop Registered Product Categories:");
    topProducts.forEach(p => {
      if (p._id) console.log(`- ${p._id}: ${p.count}`);
    });

    await mongoose.disconnect();
  } catch (err) {
    console.error("Error:", err);
  }
}

analyzeSellers();
