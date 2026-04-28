const mongoose = require('mongoose');
const DATABASE_URL = 'mongodb://ec2-13-127-78-0.ap-south-1.compute.amazonaws.com:27017/globalb2bDb?tls=false';

async function search() {
    await mongoose.connect(DATABASE_URL);
    const users = await mongoose.connection.db.collection('users').find({
        $or: [
            { companyName: /Cable Tie/i },
            { productOrService: /Cable Tie/i }
        ]
    }).toArray();
    
    console.log('--- USERS FOUND ---');
    console.log(JSON.stringify(users.map(u => ({ companyName: u.companyName, productOrService: u.productOrService })), null, 2));
    
    await mongoose.disconnect();
}
search();
