const mongoose = require('mongoose');
const DATABASE_URL = 'mongodb://ec2-13-127-78-0.ap-south-1.compute.amazonaws.com:27017/globalb2bDb?tls=false';

async function listSpicesSellers() {
    try {
        await mongoose.connect(DATABASE_URL);
        const db = mongoose.connection.db;

        const spicesUsers = await db.collection('users').find({
            $or: [
                { companyName: /Spices/i },
                { productOrService: /Spices/i }
            ]
        }).limit(20).toArray();

        console.log('Sample Spices Sellers:');
        spicesUsers.forEach(u => console.log(`- ${u.companyName} (${u.cityname || 'No City'}, ${u.statename || 'No State'})`));

    } catch (err) {
        console.error(err);
    } finally {
        await mongoose.disconnect();
    }
}

listSpicesSellers();
