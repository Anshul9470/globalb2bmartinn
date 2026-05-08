const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://ec2-13-127-78-0.ap-south-1.compute.amazonaws.com:27017/?tls=false';

const productSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    products: [{
        title: mongoose.Schema.Types.Mixed,
        category: mongoose.Schema.Types.Mixed,
        isPublished: Boolean
    }]
});

const Product = mongoose.model('Product', productSchema);

async function run() {
    try {
        await mongoose.connect(DATABASE_URL);
        console.log('Connected to DB');

        const allDocs = await Product.find({});
        console.log(`Checking ${allDocs.length} documents...`);

        allDocs.forEach(doc => {
            doc.products.forEach(p => {
                if (p.isPublished) {
                    console.log(`[PUBLISHED] Title: ${p.title} | Category: ${p.category}`);
                }
            });
        });

        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

run();
