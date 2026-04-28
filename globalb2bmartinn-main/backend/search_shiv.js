const mongoose = require('mongoose');
const DATABASE_URL = 'mongodb://ec2-13-127-78-0.ap-south-1.compute.amazonaws.com:27017/globalb2bDb?tls=false';

async function search() {
    await mongoose.connect(DATABASE_URL);
    const products = await mongoose.connection.db.collection('products').find({
        $or: [
            { 'productDetail.title': { $elemMatch: { $elemMatch: /Shiv/i } } },
            { 'productDetail.title': /Shiv/i }
        ]
    }).toArray();
    
    console.log('--- PRODUCTS FOUND ---');
    products.forEach(p => {
        console.log(`ID: ${p._id}`);
        console.log(`Detail: ${JSON.stringify(p.productDetail, null, 2)}`);
    });
    
    await mongoose.disconnect();
}
search();
