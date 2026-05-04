
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '.env') });

const dbUrl = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/globalb2bDb';

async function checkCountries() {
  try {
    await mongoose.connect(dbUrl);
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('Collections:', collections.map(c => c.name));
    
    const Buyer = mongoose.connection.db.collection('buyers');
    const countries = await Buyer.distinct('country');
    console.log('Existing Countries:', countries);
    
    const states = await Buyer.distinct('statename', { country: 'India' });
    console.log('Existing Indian States:', states);

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

checkCountries();
