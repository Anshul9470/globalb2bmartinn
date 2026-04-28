const mongoose = require('mongoose');

async function searchAll() {
    try {
        await mongoose.connect('mongodb://localhost:27017/globalb2bDb');
        const db = mongoose.connection.db;

        const users = await db.collection('users').find({}).toArray();
        console.log(`Total users in DB: ${users.length}`);

        const jewelUsers = users.filter(u => {
            const str = JSON.stringify(u).toLowerCase();
            return str.includes('jewel') || str.includes('jewellery') || str.includes('jewelry');
        });

        console.log(`Jewelry related users: ${jewelUsers.length}`);
        if (jewelUsers.length > 0) {
            console.log(jewelUsers.map(u => u.companyName || u.name));
        }

        const allProducts = await db.collection('products').find({}).toArray();
        console.log(`Total products in DB: ${allProducts.length}`);
        
        const jewelProds = allProducts.filter(p => {
            const str = JSON.stringify(p).toLowerCase();
            return str.includes('jewel') || str.includes('jewellery') || str.includes('jewelry');
        });
        console.log(`Jewelry related products: ${jewelProds.length}`);

    } catch (err) {
        console.error(err);
    } finally {
        await mongoose.disconnect();
    }
}

searchAll();
