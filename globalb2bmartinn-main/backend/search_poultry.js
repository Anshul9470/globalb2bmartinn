const mongoose = require('mongoose');
const DATABASE_URL = 'mongodb://ec2-13-127-78-0.ap-south-1.compute.amazonaws.com:27017/globalb2bDb?tls=false';

async function searchPoultry() {
    try {
        await mongoose.connect(DATABASE_URL);
        const users = await mongoose.connection.db.collection('users').find({
            $or: [
                { companyName: /Poultry/i },
                { productOrService: /Poultry/i },
                { companyName: /Hatchery/i },
                { productOrService: /Hatchery/i }
            ]
        }).toArray();
        console.log(JSON.stringify(users, null, 2));
    } catch (err) {
        console.error(err);
    } finally {
        await mongoose.disconnect();
    }
}

searchPoultry();
