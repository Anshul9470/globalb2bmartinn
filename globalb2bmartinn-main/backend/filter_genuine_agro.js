const mongoose = require('mongoose');
const DATABASE_URL = 'mongodb://ec2-13-127-78-0.ap-south-1.compute.amazonaws.com:27017/globalb2bDb?tls=false';

async function analyzeAgroSellers() {
    try {
        await mongoose.connect(DATABASE_URL);
        const db = mongoose.connection.db;

        const agroUsers = await db.collection('users').find({
            $or: [
                { companyName: /Agro/i },
                { companyName: /Agricultural/i },
                { productOrService: /Agro/i },
                { productOrService: /Agricultural/i }
            ]
        }).toArray();

        const agroProducts = await db.collection('products').find({
            $or: [
                { category: /Agro/i },
                { category: /Agriculture/i },
                { title: /Agro/i }
            ]
        }).toArray();

        const results = agroUsers.map(user => {
            const hasProducts = agroProducts.some(p => p.sellerId && p.sellerId.toString() === user._id.toString());
            const hasLocation = user.cityname && user.statename;
            const hasContact = user.mobile || user.email;
            
            let status = 'Test/Incomplete';
            if (user.companyName && hasLocation && hasContact && user.companyName.length > 5 && !user.companyName.toLowerCase().includes('test')) {
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
        
        console.log('--- GENUINE AGRO SELLERS ---');
        console.log(JSON.stringify(genuineSellers, null, 2));

    } catch (err) {
        console.error(err);
    } finally {
        await mongoose.disconnect();
    }
}

analyzeAgroSellers();
