const mongoose = require('mongoose');

async function searchJewelryRemote() {
    const remoteUrl = 'mongodb://ec2-13-127-78-0.ap-south-1.compute.amazonaws.com:27017/globalb2bDb?tls=false';
    try {
        console.log('Connecting to Remote DB...');
        await mongoose.connect(remoteUrl);
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
            console.log('\nTop Sellers:');
            jewelryUsers.slice(0, 50).forEach((u, i) => {
                console.log(`${i+1}. ${u.companyName} | ${u.productOrService} | ${u.cityname || ''}, ${u.statename || ''}`);
            });
        }

    } catch (err) {
        console.error('Connection Error:', err.message);
    } finally {
        await mongoose.disconnect();
    }
}

searchJewelryRemote();
