const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const Buyer = require('./src/models/buyermodel'); // Ensure this path is correct

async function seedDatabase() {
    try {
        // Connect to MongoDB
        const dbUrl = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/globalb2bDb';
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB for seeding...");

        // Read mock data
        const dataPath = path.join(__dirname, 'mock_buyers.json');
        const buyers = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

        // Insert data
        console.log(`Starting insertion of ${buyers.length} buyers...`);
        
        // Optional: Uncomment the next line if you want to clear the collection first
        // await Buyer.deleteMany({});
        // console.log("Cleared existing buyers.");

        await Buyer.insertMany(buyers);
        console.log("Successfully seeded database with mock buyers!");

    } catch (error) {
        console.error("Error seeding database:", error);
    } finally {
        mongoose.connection.close();
    }
}

seedDatabase();
