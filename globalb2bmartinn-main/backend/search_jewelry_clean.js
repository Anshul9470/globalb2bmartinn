const mongoose = require('mongoose');

async function countJewelryRemote() {
    const remoteUrl = 'mongodb://ec2-13-127-78-0.ap-south-1.compute.amazonaws.com:27017/globalb2bDb?tls=false';
    try {
        await mongoose.connect(remoteUrl);
        const db = mongoose.connection.db;

        const jewelryUsers = await db.collection('users').find({
            role: 'seller',
            $or: [
                { companyName: /Jewel|Jewellery|Jewelry|Ornament|Gold|Silver|Diamond|Artificial|Bangle|Necklace/i },
                { productOrService: /Jewel|Jewellery|Jewelry|Ornament|Gold|Silver|Diamond|Artificial|Bangle|Necklace/i }
            ],
            // Filter out non-jewelry (like rice or polish)
            $and: [
                { companyName: { $not: /Rice|Polish|Flooring/i } },
                { productOrService: { $not: /Rice|Polish|Flooring/i } }
            ]
        }).toArray();

        console.log(`Genuine Jewelry Sellers found: ${jewelryUsers.length}`);
        
        if (jewelryUsers.length > 0) {
            jewelryUsers.slice(0, 30).forEach((u, i) => {
                console.log(`${i+1}. ${u.companyName} | ${u.productOrService} | ${u.cityname || ''}`);
            });
        }

    } catch (err) {
        console.error(err);
    } finally {
        await mongoose.disconnect();
    }
}

countJewelryRemote();
