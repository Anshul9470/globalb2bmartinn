const mongoose = require('mongoose');

const DATABASE_URL = 'mongodb://ec2-13-127-78-0.ap-south-1.compute.amazonaws.com:27017/globalb2bDb?tls=false';

// Define Schemas
const productDetailSchema = new mongoose.Schema({
    title: String,
    description: String,
    images: [String],
    category: String,
    subCategory: String,
    state: String,
    city: String,
    isPublished: Boolean
});

const productSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    products: [productDetailSchema]
});

const userSchema = new mongoose.Schema({
    name: String,
    companyName: String,
    mobile: String,
    email: String,
    statename: String,
    cityname: String,
    isApproved: Boolean
});

const Product = mongoose.model('Product', productSchema);
const User = mongoose.model('User', userSchema, 'users');

async function analyzeRiceSellers() {
    try {
        await mongoose.connect(DATABASE_URL);
        console.log('Connected to database');

        const allProductDocs = await Product.find().populate('userId');
        
        const riceSellers = [];

        for (const doc of allProductDocs) {
            if (!doc.userId) continue;

            const riceProducts = doc.products.filter(p => {
                const titleMatch = p.title && p.title.toLowerCase().includes('rice');
                const catMatch = p.category && p.category.toLowerCase().includes('rice');
                return titleMatch || catMatch;
            });

            if (riceProducts.length > 0) {
                riceSellers.push({
                    user: {
                        name: doc.userId.name,
                        companyName: doc.userId.companyName,
                        mobile: doc.userId.mobile,
                        email: doc.userId.email,
                        state: doc.userId.statename,
                        city: doc.userId.cityname,
                        isApproved: doc.userId.isApproved
                    },
                    products: riceProducts.map(p => ({
                        title: p.title,
                        description: p.description,
                        imagesCount: p.images ? p.images.length : 0,
                        isPublished: p.isPublished,
                        state: p.state,
                        city: p.city
                    }))
                });
            }
        }

        console.log('--- RICE SELLERS ANALYSIS ---');
        console.log('Total Rice Sellers Found:', riceSellers.length);
        console.log('\nDetailed Breakdown:');
        
        riceSellers.forEach((s, i) => {
            console.log(`\n[${i+1}] ${s.user.companyName || 'N/A'} (${s.user.name})`);
            console.log(`   Contact: ${s.user.mobile} | ${s.user.email}`);
            console.log(`   Location (User): ${s.user.city}, ${s.user.state}`);
            console.log(`   Approved: ${s.user.isApproved}`);
            console.log(`   Products:`);
            s.products.forEach(p => {
                console.log(`     - ${p.title} (Published: ${p.isPublished}, Images: ${p.imagesCount})`);
                console.log(`       Desc: ${p.description.substring(0, 50)}...`);
            });
        });

        await mongoose.disconnect();
    } catch (err) {
        console.error('Error:', err);
    }
}

analyzeRiceSellers();
