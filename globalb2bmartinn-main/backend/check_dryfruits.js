const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://ec2-13-127-78-0.ap-south-1.compute.amazonaws.com:27017/?tls=false';

const productSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    products: [{
        title: mongoose.Schema.Types.Mixed,
        category: mongoose.Schema.Types.Mixed,
        images: [String],
        isPublished: Boolean
    }]
});

const Product = mongoose.model('Product', productSchema);

async function run() {
    try {
        await mongoose.connect(DATABASE_URL);
        console.log('Connected to DB');

        const products = await Product.find({
            'products.category': { $regex: /^Dryfruits$/i }
        }).populate('userId');

        console.log(`Found ${products.length} documents with Dryfruits category`);

        products.forEach(doc => {
            doc.products.forEach(p => {
                if (p.category && p.category.toString().toLowerCase() === 'dryfruits') {
                    console.log('--- PRODUCT ---');
                    console.log('Title:', p.title);
                    console.log('Published:', p.isPublished);
                    console.log('Images:', p.images);
                    console.log('Seller:', doc.userId ? doc.userId.name : 'Unknown');
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
