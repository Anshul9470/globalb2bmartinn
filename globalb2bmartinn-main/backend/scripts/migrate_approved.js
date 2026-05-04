require('dotenv').config({ path: './backend/.env' });
const mongoose = require('mongoose');

const buyerSchema = new mongoose.Schema({
    approved: { type: Boolean, default: false }
}, { strict: false });

const Buyer = mongoose.model('Buyer', buyerSchema);

const migrate = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost:27017/globalb2bmart');
        console.log("Connected to DB for migration...");

        const result = await Buyer.updateMany(
            { approved: { $exists: false } },
            { $set: { approved: true } }
        );

        console.log(`Migration completed. Modified ${result.modifiedCount} buyers.`);
        process.exit(0);
    } catch (err) {
        console.error("Migration failed:", err);
        process.exit(1);
    }
};

migrate();
