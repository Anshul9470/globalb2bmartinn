const mongoose = require('mongoose');
const DATABASE_URL = 'mongodb://ec2-13-127-78-0.ap-south-1.compute.amazonaws.com:27017/globalb2bDb?tls=false';

async function analyzeAgroSellers() {
    try {
        await mongoose.connect(DATABASE_URL);
        const db = mongoose.connection.db;

        // Search in users collection
        const agroUsers = await db.collection('users').find({
            $or: [
                { companyName: /Agro/i },
                { companyName: /Agricultural/i },
                { companyName: /Farm/i },
                { productOrService: /Agro/i },
                { productOrService: /Agricultural/i },
                { productOrService: /Farm/i }
            ]
        }).toArray();

        // Search in products collection
        const agroProducts = await db.collection('products').find({
            $or: [
                { category: /Agro/i },
                { category: /Agriculture/i },
                { subCategory: /Agro/i },
                { subCategory: /Agriculture/i },
                { title: /Agro/i },
                { title: /Agricultural/i }
            ]
        }).toArray();

        console.log(`Found ${agroUsers.length} users and ${agroProducts.length} products related to Agro.`);

        const analysis = agroUsers.map(user => {
            const products = agroProducts.filter(p => p.sellerId && p.sellerId.toString() === user._id.toString());
            const isGenuine = user.companyName && user.mobile && user.cityname && user.companyName.length > 3 && !user.companyName.toLowerCase().includes('test');
            
            return {
                companyName: user.companyName,
                userName: user.name,
                mobile: user.mobile,
                location: `${user.cityname || ''}, ${user.statename || ''}`,
                productCount: products.length,
                isGenuine: isGenuine ? 'Genuine' : 'Likely Test/Incomplete',
                productOrService: user.productOrService
            };
        });

        console.log('--- AGRO SELLER ANALYSIS ---');
        console.log(JSON.stringify(analysis, null, 2));

    } catch (err) {
        console.error(err);
    } finally {
        await mongoose.disconnect();
    }
}

analyzeAgroSellers();
