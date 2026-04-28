const mongoose = require('mongoose');
const User = require('./src/models/usermodel');
require('dotenv').config();

const searchJewelrySellers = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/globalb2bDb');
        console.log('Connected to Database');

        const query = {
            role: 'seller',
            $or: [
                { companyName: { $regex: /Jewel|Jewellery|Jewelry/i } },
                { productOrService: { $regex: /Jewel|Jewellery|Jewelry/i } }
            ]
        };

        const sellers = await User.find(query).select('companyName productOrService cityname statename name').lean();

        console.log(`Total Jewelry Sellers found: ${sellers.length}`);
        if (sellers.length > 0) {
            console.log('\nTop Sellers:');
            sellers.slice(0, 20).forEach((s, idx) => {
                console.log(`${idx + 1}. ${s.companyName} | ${s.productOrService} | ${s.cityname || ''}, ${s.statename || ''}`);
            });
        }

        mongoose.connection.close();
    } catch (error) {
        console.error('Error:', error);
    }
};

searchJewelrySellers();
