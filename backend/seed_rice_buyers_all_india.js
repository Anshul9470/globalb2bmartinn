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

const Buyer = mongoose.model('RiceBuyerSeed', buyerSchema, 'buyers');

const riceBuyers = [
  { name: "Suresh P.", email: "suresh.ap@ricebuyer.com", mobileNumber: "9123456780", city: "Vijayawada", statename: "Andhra Pradesh", productOrService: "Basmati Rice", quantity: 50, unit: "ton" },
  { name: "Tashi W.", email: "tashi.ar@ricebuyer.com", mobileNumber: "9123456781", city: "Itanagar", statename: "Arunachal Pradesh", productOrService: "Long Grain Rice", quantity: 15, unit: "ton" },
  { name: "Barua K.", email: "barua.as@ricebuyer.com", mobileNumber: "9123456782", city: "Guwahati", statename: "Assam", productOrService: "Joha Rice", quantity: 20, unit: "ton" },
  { name: "Mishra J.", email: "mishra.br@ricebuyer.com", mobileNumber: "9123456783", city: "Patna", statename: "Bihar", productOrService: "Sella Rice", quantity: 80, unit: "ton" },
  { name: "Sahu L.", email: "sahu.cg@ricebuyer.com", mobileNumber: "9123456784", city: "Raipur", statename: "Chhattisgarh", productOrService: "Dubraj Rice", quantity: 45, unit: "ton" },
  { name: "Fernandes D.", email: "fern.goa@ricebuyer.com", mobileNumber: "9123456785", city: "Panaji", statename: "Goa", productOrService: "Brown Rice", quantity: 10, unit: "ton" },
  { name: "Patel M.", email: "patel.gj@ricebuyer.com", mobileNumber: "9123456786", city: "Ahmedabad", statename: "Gujarat", productOrService: "Basmati Rice", quantity: 120, unit: "ton" },
  { name: "Yadav H.", email: "yadav.hr@ricebuyer.com", mobileNumber: "9123456787", city: "Karnal", statename: "Haryana", productOrService: "Pusa Basmati", quantity: 200, unit: "ton" },
  { name: "Thakur R.", email: "thakur.hp@ricebuyer.com", mobileNumber: "9123456788", city: "Shimla", statename: "Himachal Pradesh", productOrService: "Red Rice", quantity: 5, unit: "ton" },
  { name: "Mahto S.", email: "mahto.jh@ricebuyer.com", mobileNumber: "9123456789", city: "Ranchi", statename: "Jharkhand", productOrService: "Non-Basmati Rice", quantity: 60, unit: "ton" },
  { name: "Gowda N.", email: "gowda.kar@ricebuyer.com", mobileNumber: "9123456790", city: "Bengaluru", statename: "Karnataka", productOrService: "Sona Masoori", quantity: 150, unit: "ton" },
  { name: "Nair V.", email: "nair.kl@ricebuyer.com", mobileNumber: "9123456791", city: "Kochi", statename: "Kerala", productOrService: "Matta Rice", quantity: 30, unit: "ton" },
  { name: "Chouhan P.", email: "chouhan.mp@ricebuyer.com", mobileNumber: "9123456792", city: "Bhopal", statename: "Madhya Pradesh", productOrService: "Sharbati Rice", quantity: 90, unit: "ton" },
  { name: "Deshmukh S.", email: "desh.mh@ricebuyer.com", mobileNumber: "9123456793", city: "Pune", statename: "Maharashtra", productOrService: "Kolam Rice", quantity: 110, unit: "ton" },
  { name: "Meitei K.", email: "meitei.mn@ricebuyer.com", mobileNumber: "9123456794", city: "Imphal", statename: "Manipur", productOrService: "Black Rice", quantity: 2, unit: "ton" },
  { name: "Sangma C.", email: "sangma.ml@ricebuyer.com", mobileNumber: "9123456795", city: "Shillong", statename: "Meghalaya", productOrService: "Hill Rice", quantity: 8, unit: "ton" },
  { name: "Lalram H.", email: "lal.mz@ricebuyer.com", mobileNumber: "9123456796", city: "Aizawl", statename: "Mizoram", productOrService: "Sticky Rice", quantity: 5, unit: "ton" },
  { name: "Angami N.", email: "angami.nl@ricebuyer.com", mobileNumber: "9123456797", city: "Kohima", statename: "Nagaland", productOrService: "Organic Rice", quantity: 3, unit: "ton" },
  { name: "Das A.", email: "das.od@ricebuyer.com", mobileNumber: "9123456798", city: "Bhubaneswar", statename: "Odisha", productOrService: "Non-Basmati", quantity: 70, unit: "ton" },
  { name: "Dhillon G.", email: "dhillon.pb@ricebuyer.com", mobileNumber: "9123456799", city: "Ludhiana", statename: "Punjab", productOrService: "Super Basmati", quantity: 300, unit: "ton" },
  { name: "Rathore B.", email: "rathore.rj@ricebuyer.com", mobileNumber: "9123456800", city: "Jodhpur", statename: "Rajasthan", productOrService: "Long Grain Rice", quantity: 40, unit: "ton" },
  { name: "Sherpa L.", email: "sherpa.sk@ricebuyer.com", mobileNumber: "9123456801", city: "Gangtok", statename: "Sikkim", productOrService: "Hill Rice", quantity: 4, unit: "ton" },
  { name: "Rajan M.", email: "rajan.tn@ricebuyer.com", mobileNumber: "9123456802", city: "Madurai", statename: "Tamil Nadu", productOrService: "Ponni Rice", quantity: 55, unit: "ton" },
  { name: "Reddy K.", email: "reddy.tg@ricebuyer.com", mobileNumber: "9123456803", city: "Hyderabad", statename: "Telangana", productOrService: "HMT Rice", quantity: 95, unit: "ton" },
  { name: "Debnath S.", email: "deb.tr@ricebuyer.com", mobileNumber: "9123456804", city: "Agartala", statename: "Tripura", productOrService: "Short Grain Rice", quantity: 12, unit: "ton" },
  { name: "Varma V.", email: "varma.up@ricebuyer.com", mobileNumber: "9123456805", city: "Noida", statename: "Uttar Pradesh", productOrService: "Basmati Rice", quantity: 180, unit: "ton" },
  { name: "Rawat D.", email: "rawat.uk@ricebuyer.com", mobileNumber: "9123456806", city: "Dehradun", statename: "Uttarakhand", productOrService: "Dehraduni Basmati", quantity: 25, unit: "ton" },
  { name: "Chatterjee R.", email: "chatt.wb@ricebuyer.com", mobileNumber: "9123456807", city: "Kolkata", statename: "West Bengal", productOrService: "Gobindobhog Rice", quantity: 40, unit: "ton" },
  { name: "Sethi R.", email: "sethi.dl@ricebuyer.com", mobileNumber: "9123456808", city: "Delhi", statename: "Delhi", productOrService: "Premium Basmati", quantity: 100, unit: "ton" },
  { name: "Lone A.", email: "lone.jk@ricebuyer.com", mobileNumber: "9123456809", city: "Srinagar", statename: "Jammu and Kashmir", productOrService: "Kashmiri Rice", quantity: 15, unit: "ton" }
];

async function seedRiceBuyers() {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log('Connected to MongoDB');

    for (const buyer of riceBuyers) {
      await Buyer.findOneAndUpdate(
        { email: buyer.email },
        buyer,
        { upsert: true, new: true }
      );
    }
    console.log('Successfully inserted/updated 30 Rice buyers across all India states.');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding data:', err);
    process.exit(1);
  }
}

seedRiceBuyers();
