const mongoose = require('mongoose');

async function searchJewelry() {
    try {
        await mongoose.connect('mongodb://localhost:27017/globalb2bDb');
        const db = mongoose.connection.db;

        const jewelryUsers = await db.collection('users').find({
            role: 'seller',
            $or: [
                { companyName: /Jewel|Jewellery|Jewelry|Ornament|Gold|Silver|Diamond|Artificial|Bangle|Necklace/i },
                { productOrService: /Jewel|Jewellery|Jewelry|Ornament|Gold|Silver|Diamond|Artificial|Bangle|Necklace/i }
            ]
        }).toArray();

        console.log(`Total Jewelry Sellers found: ${jewelryUsers.length}`);
        
        if (jewelryUsers.length > 0) {
            console.log('\nSample Sellers:');
            jewelryUsers.slice(0, 20).forEach((u, i) => {
                console.log(`${i+1}. ${u.companyName} | ${u.productOrService} | ${u.cityname || ''}`);
            });
        }

    } catch (err) {
        console.error(err);
    } finally {
        await mongoose.disconnect();
    }
}

searchJewelry();
