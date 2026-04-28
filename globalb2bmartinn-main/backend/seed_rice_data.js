const mongoose = require('mongoose');

// Database URI
const DATABASE_URL = 'mongodb://127.0.0.1:27017/globalb2bDb';

// Define Schemas
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, default: 'password123' },
  mobileNumber: String,
  companyName: String,
  statename: String,
  cityname: String,
  productOrService: String,
  plan: { type: String, default: "Free" },
  role: { type: String, default: "seller" },
}, { timestamps: true });

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

const User = mongoose.model('UserSeed', userSchema, 'users');
const Buyer = mongoose.model('BuyerSeed', buyerSchema, 'buyers');

const sellers = [
  { name: "Rahul Singh", email: "rahul.punjab@example.com", mobileNumber: "9876543210", companyName: "Punjab Rice Mills", statename: "Punjab", cityname: "Amritsar", productOrService: "Basmati Rice" },
  { name: "Amit Kumar", email: "amit.haryana@example.com", mobileNumber: "9876543211", companyName: "Haryana Agri Exports", statename: "Haryana", cityname: "Karnal", productOrService: "Sella Rice" },
  { name: "Suresh Gupta", email: "suresh.up@example.com", mobileNumber: "9876543212", companyName: "UP Basmati Hub", statename: "Uttar Pradesh", cityname: "Lucknow", productOrService: "Long Grain Rice" },
  { name: "Priya Das", email: "priya.bengal@example.com", mobileNumber: "9876543213", companyName: "Bengal Rice Traders", statename: "West Bengal", cityname: "Kolkata", productOrService: "Gobindobhog Rice" },
  { name: "Venkatesh Rao", email: "venkat.andhra@example.com", mobileNumber: "9876543214", companyName: "Andhra Rice Industries", statename: "Andhra Pradesh", cityname: "Nellore", productOrService: "Sona Masoori Rice" },
  { name: "Rajesh Reddy", email: "rajesh.telangana@example.com", mobileNumber: "9876543215", companyName: "Telangana Grain Supplies", statename: "Telangana", cityname: "Hyderabad", productOrService: "HMT Rice" },
  { name: "Manoj Yadav", email: "manoj.bihar@example.com", mobileNumber: "9876543216", companyName: "Bihar Rice Millers", statename: "Bihar", cityname: "Patna", productOrService: "Katarni Rice" },
  { name: "Deepak Patra", email: "deepak.odisha@example.com", mobileNumber: "9876543217", companyName: "Odisha Rice Exports", statename: "Odisha", cityname: "Bhubaneswar", productOrService: "Non-Basmati Rice" },
  { name: "Sanjay Patil", email: "sanjay.maha@example.com", mobileNumber: "9876543218", companyName: "Maharashtra Rice Hub", statename: "Maharashtra", cityname: "Nagpur", productOrService: "Kolam Rice" },
  { name: "Anil Sahu", email: "anil.cg@example.com", mobileNumber: "9876543219", companyName: "Chhattisgarh Rice Palace", statename: "Chhattisgarh", cityname: "Raipur", productOrService: "Dubraj Rice" },
  { name: "Vikram Sharma", email: "vikram.mp@example.com", mobileNumber: "9876543220", companyName: "MP Sharbati Rice", statename: "Madhya Pradesh", cityname: "Bhopal", productOrService: "Sharbati Rice" },
  { name: "Sunil Negi", email: "sunil.uk@example.com", mobileNumber: "9876543221", companyName: "Uttarakhand Hill Rice", statename: "Uttarakhand", cityname: "Dehradun", productOrService: "Organic Hill Rice" },
  { name: "Harpreet Brar", email: "harpreet.amritsar@example.com", mobileNumber: "9876543222", companyName: "Amritsar Basmati Exporters", statename: "Punjab", cityname: "Tarn Taran", productOrService: "Pusa Basmati Rice" },
  { name: "Anuj Tyagi", email: "anuj.karnal@example.com", mobileNumber: "9876543223", companyName: "Karnal Rice Market", statename: "Haryana", cityname: "Panipat", productOrService: "Sugandha Rice" },
  { name: "Mohit Verma", email: "mohit.lucknow@example.com", mobileNumber: "9876543224", companyName: "Lucknow Rice House", statename: "Uttar Pradesh", cityname: "Kanpur", productOrService: "Broken Rice" }
];

const buyers = [
  { name: "Gursharan Singh", email: "hotel.punjab@example.com", mobileNumber: "8876543210", city: "Ludhiana", statename: "Punjab", productOrService: "Basmati Rice", quantity: 50, unit: "ton" },
  { name: "Kunal Sharma", email: "haryana.cater@example.com", mobileNumber: "8876543211", city: "Gurugram", statename: "Haryana", productOrService: "Sella Rice", quantity: 20, unit: "ton" },
  { name: "Ravi Shankar", email: "up.wholesale@example.com", mobileNumber: "8876543212", city: "Varanasi", statename: "Uttar Pradesh", productOrService: "Long Grain Rice", quantity: 100, unit: "ton" },
  { name: "Aparna Sen", email: "kolkata.rest@example.com", mobileNumber: "8876543213", city: "Kolkata", statename: "West Bengal", productOrService: "Gobindobhog Rice", quantity: 15, unit: "ton" },
  { name: "Kiran Kumar", email: "vizag.export@example.com", mobileNumber: "8876543214", city: "Visakhapatnam", statename: "Andhra Pradesh", productOrService: "Sona Masoori Rice", quantity: 200, unit: "ton" },
  { name: "Ibrahim Ali", email: "hyderabad.bir@example.com", mobileNumber: "8876543215", city: "Hyderabad", statename: "Telangana", productOrService: "HMT Rice", quantity: 40, unit: "ton" },
  { name: "Sita Ram", email: "patna.rice@example.com", mobileNumber: "8876543216", city: "Gaya", statename: "Bihar", productOrService: "Katarni Rice", quantity: 30, unit: "ton" },
  { name: "Ashok Jena", email: "odisha.food@example.com", mobileNumber: "8876543217", city: "Cuttack", statename: "Odisha", productOrService: "Non-Basmati Rice", quantity: 60, unit: "ton" },
  { name: "Vijay Deshmukh", email: "mumbai.retail@example.com", mobileNumber: "8876543218", city: "Mumbai", statename: "Maharashtra", productOrService: "Kolam Rice", quantity: 25, unit: "ton" },
  { name: "Gopal Chand", email: "raipur.grain@example.com", mobileNumber: "8876543219", city: "Bilaspur", statename: "Chhattisgarh", productOrService: "Dubraj Rice", quantity: 45, unit: "ton" },
  { name: "Preeti Malviya", email: "bhopal.agency@example.com", mobileNumber: "8876543220", city: "Indore", statename: "Madhya Pradesh", productOrService: "Sharbati Rice", quantity: 35, unit: "ton" },
  { name: "Deepak Rawat", email: "uk.rice@example.com", mobileNumber: "8876543221", city: "Haridwar", statename: "Uttarakhand", productOrService: "Hill Rice", quantity: 10, unit: "ton" }
];

async function seedData() {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log('Connected to MongoDB');

    // Insert Sellers
    for (const seller of sellers) {
      await User.findOneAndUpdate(
        { email: seller.email },
        { ...seller, role: 'seller' },
        { upsert: true, new: true }
      );
    }
    console.log('Inserted/Updated 15 Sellers');

    // Insert Buyers
    for (const buyer of buyers) {
      await Buyer.findOneAndUpdate(
        { email: buyer.email },
        buyer,
        { upsert: true, new: true }
      );
    }
    console.log('Inserted/Updated 12 Buyers');

    console.log('Seeding completed successfully! Total 27 records.');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding data:', err);
    process.exit(1);
  }
}

seedData();
