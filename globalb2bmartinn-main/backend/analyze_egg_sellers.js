const mongoose = require('mongoose');
const DATABASE_URL = 'mongodb://ec2-13-127-78-0.ap-south-1.compute.amazonaws.com:27017/globalb2bDb?tls=false';

async function analyzeEggSellers() {
    try {
        await mongoose.connect(DATABASE_URL);
        const db = mongoose.connection.db;

        const eggUsers = await db.collection('users').find({
            $or: [
                { companyName: /Egg/i },
                { companyName: /Poultry/i },
                { productOrService: /Egg/i },
                { productOrService: /Poultry/i },
                { productOrService: /Shell/i }
            ]
        }).toArray();

        const eggProducts = await db.collection('products').find({
            $or: [
                { category: /Egg/i },
                { category: /Poultry/i },
                { title: /Egg/i },
                { title: /Shell/i }
            ]
        }).toArray();

        const results = eggUsers.map(user => {
            const hasProducts = eggProducts.some(p => p.sellerId && p.sellerId.toString() === user._id.toString());
            const hasLocation = user.cityname && user.statename;
            
            let status = 'Incomplete';
            if (user.companyName && hasLocation && user.companyName.length > 3 && !user.companyName.toLowerCase().includes('test')) {
                status = 'Genuine';
            }

            return {
                companyName: user.companyName,
                userName: user.name,
                location: `${user.cityname || ''}, ${user.statename || ''}`,
                productOrService: user.productOrService,
                status: status,
                hasProducts: hasProducts
            };
        });

        const genuineSellers = results.filter(r => r.status === 'Genuine');
        
        console.log('--- GENUINE EGG SELLERS ---');
        console.log(JSON.stringify(genuineSellers, null, 2));

    } catch (err) {
        console.error(err);
    } finally {
        await mongoose.disconnect();
    }
}

analyzeEggSellers();
