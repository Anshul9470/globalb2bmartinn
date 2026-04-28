const mongoose = require('mongoose');

// Database URI
const DATABASE_URL = 'mongodb://127.0.0.1:27017/globalb2bDb';

const buyerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    city: { type: String, required: true },
    statename: { type: String, required: true },
    productOrService: { type: String, required: true },
    quantity: { type: Number, required: true },
    unit: { type: String, default: 'ton' }
}, { timestamps: true });

const Buyer = mongoose.model('BuyerSeedMore', buyerSchema, 'buyers');

const additionalBuyers = [
  { name: "Arjun Mehta", email: "arjun.gujarat@example.com", mobileNumber: "7776543210", city: "Ahmedabad", statename: "Gujarat", productOrService: "Basmati Rice", quantity: 120, unit: "ton" },
  { name: "Siddharth Jain", email: "sid.rj@example.com", mobileNumber: "7776543211", city: "Jaipur", statename: "Rajasthan", productOrService: "Spices", quantity: 5, unit: "ton" },
  { name: "Anjali Nair", email: "anjali.kerala@example.com", mobileNumber: "7776543212", city: "Kochi", statename: "Kerala", productOrService: "Black Pepper", quantity: 10, unit: "ton" },
  { name: "Karthik Swamy", email: "karthik.tn@example.com", mobileNumber: "7776543213", city: "Chennai", statename: "Tamil Nadu", productOrService: "Turmeric", quantity: 25, unit: "ton" },
  { name: "Sneha Patil", email: "sneha.kar@example.com", mobileNumber: "7776543214", city: "Bengaluru", statename: "Karnataka", productOrService: "Sugar", quantity: 500, unit: "ton" },
  { name: "Rohan Chatterjee", email: "rohan.wb@example.com", mobileNumber: "7776543215", city: "Siliguri", statename: "West Bengal", productOrService: "Tea Leaves", quantity: 2, unit: "ton" },
  { name: "Pooja Mishra", email: "pooja.as@example.com", mobileNumber: "7776543216", city: "Guwahati", statename: "Assam", productOrService: "Mugha Silk", quantity: 50, unit: "pcs" },
  { name: "Sandeep Kumar", email: "sandeep.hr@example.com", mobileNumber: "7776543217", city: "Rohtak", statename: "Haryana", productOrService: "Wheat", quantity: 1000, unit: "ton" },
  { name: "Meera Bai", email: "meera.mp@example.com", mobileNumber: "7776543218", city: "Gwalior", statename: "Madhya Pradesh", productOrService: "Soybean", quantity: 300, unit: "ton" },
  { name: "Nitin Gadkari", email: "nitin.mh@example.com", mobileNumber: "7776543219", city: "Nagpur", statename: "Maharashtra", productOrService: "Cotton", quantity: 80, unit: "ton" },
  { name: "Abhishek Singh", email: "abhi.jh@example.com", mobileNumber: "7776543220", city: "Ranchi", statename: "Jharkhand", productOrService: "Steel Rods", quantity: 40, unit: "ton" },
  { name: "Divya Reddy", email: "divya.tg@example.com", mobileNumber: "7776543221", city: "Warangal", statename: "Telangana", productOrService: "Red Chillies", quantity: 15, unit: "ton" },
  { name: "Prashant Bhatt", email: "prashant.uk@example.com", mobileNumber: "7776543222", city: "Rishikesh", statename: "Uttarakhand", productOrService: "Honey", quantity: 500, unit: "kg" },
  { name: "Jyoti Sharma", email: "jyoti.hp@example.com", mobileNumber: "7776543223", city: "Shimla", statename: "Himachal Pradesh", productOrService: "Apples", quantity: 5, unit: "ton" },
  { name: "Kunal Ghosh", email: "kunal.od@example.com", mobileNumber: "7776543224", city: "Puri", statename: "Odisha", productOrService: "Cashew Nuts", quantity: 8, unit: "ton" },
  { name: "Sonia Gandhi", email: "sonia.dl@example.com", mobileNumber: "7776543225", city: "New Delhi", statename: "Delhi", productOrService: "Solar Panels", quantity: 50, unit: "pcs" },
  { name: "Amit Shah", email: "amit.gj@example.com", mobileNumber: "7776543226", city: "Surat", statename: "Gujarat", productOrService: "Textiles", quantity: 2000, unit: "meter" },
  { name: "Mamata B", email: "mamata.wb@example.com", mobileNumber: "7776543227", city: "Durgapur", statename: "West Bengal", productOrService: "Jute Bags", quantity: 10000, unit: "pcs" },
  { name: "Yogi A", email: "yogi.up@example.com", mobileNumber: "7776543228", city: "Noida", statename: "Uttar Pradesh", productOrService: "Industrial Tools", quantity: 100, unit: "pcs" },
  { name: "Stalin M", email: "stalin.tn@example.com", mobileNumber: "7776543229", city: "Madurai", statename: "Tamil Nadu", productOrService: "Leather Goods", quantity: 500, unit: "pcs" },
  { name: "Pinarayi V", email: "pinarayi.kl@example.com", mobileNumber: "7776543230", city: "Thrissur", statename: "Kerala", productOrService: "Coconut Oil", quantity: 2, unit: "ton" },
  { name: "Navin P", email: "navin.od@example.com", mobileNumber: "7776543231", city: "Sambalpur", statename: "Odisha", productOrService: "Handloom Sarees", quantity: 100, unit: "pcs" },
  { name: "Bhupesh B", email: "bhupesh.cg@example.com", mobileNumber: "7776543232", city: "Bhilai", statename: "Chhattisgarh", productOrService: "Iron Ore", quantity: 500, unit: "ton" },
  { name: "Hemant S", email: "hemant.jh@example.com", mobileNumber: "7776543233", city: "Jamshedpur", statename: "Jharkhand", productOrService: "Coal", quantity: 1000, unit: "ton" },
  { name: "Zoramthanga M", email: "zoram.mz@example.com", mobileNumber: "7776543234", city: "Aizawl", statename: "Mizoram", productOrService: "Bamboo Products", quantity: 200, unit: "pcs" },
  { name: "Neiphiu R", email: "neiphiu.nl@example.com", mobileNumber: "7776543235", city: "Kohima", statename: "Nagaland", productOrService: "Handicrafts", quantity: 50, unit: "pcs" },
  { name: "Conrad S", email: "conrad.ml@example.com", mobileNumber: "7776543236", city: "Shillong", statename: "Meghalaya", productOrService: "Organic Spices", quantity: 1, unit: "ton" },
  { name: "Prem Singh T", email: "prem.sk@example.com", mobileNumber: "7776543237", city: "Gangtok", statename: "Sikkim", productOrService: "Cardamom", quantity: 2, unit: "ton" },
  { name: "Biren Singh N", email: "biren.mn@example.com", mobileNumber: "7776543238", city: "Imphal", statename: "Manipur", productOrService: "Handwoven Fabrics", quantity: 300, unit: "meter" },
  { name: "Pema Khandu A", email: "pema.ar@example.com", mobileNumber: "7776543239", city: "Itanagar", statename: "Arunachal Pradesh", productOrService: "Carpets", quantity: 20, unit: "pcs" }
];

async function seedAdditionalBuyers() {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log('Connected to MongoDB');

    for (const buyer of additionalBuyers) {
      await Buyer.findOneAndUpdate(
        { email: buyer.email },
        buyer,
        { upsert: true, new: true }
      );
    }
    console.log('Successfully inserted/updated 30 additional buyers across various states.');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding data:', err);
    process.exit(1);
  }
}

seedAdditionalBuyers();
