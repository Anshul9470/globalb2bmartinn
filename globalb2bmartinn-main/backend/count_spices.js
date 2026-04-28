const mongoose = require('mongoose');
const DATABASE_URL = 'mongodb://ec2-13-127-78-0.ap-south-1.compute.amazonaws.com:27017/globalb2bDb?tls=false';

async function countSpicesSellers() {
    try {
        await mongoose.connect(DATABASE_URL);
        const db = mongoose.connection.db;

        const spicesUsers = await db.collection('users').find({
            $or: [
                { companyName: /Spices/i },
                { productOrService: /Spices/i },
                { productOrService: /Turmeric/i },
                { productOrService: /Chilli/i },
                { productOrService: /Pepper/i },
                { productOrService: /Masala/i }
            ]
        }).toArray();

        const spicesProducts = await db.collection('products').find({
            $or: [
                { category: /Spices/i },
                { title: /Spices/i }
            ]
        }).toArray();

        console.log(`Total Spices Sellers (Users): ${spicesUsers.length}`);
        console.log(`Total Spices Products: ${spicesProducts.length}`);

        const genuineSellers = spicesUsers.filter(user => 
            user.companyName && 
            user.mobile && 
            user.cityname && 
            !user.companyName.toLowerCase().includes('test')
        );

        console.log(`Genuine Spices Sellers: ${genuineSellers.length}`);

    } catch (err) {
        console.error(err);
    } finally {
        await mongoose.disconnect();
    }
}

countSpicesSellers();
