const mongoose = require('mongoose');

async function search() {
  try {
    const url = 'mongodb://ec2-13-127-78-0.ap-south-1.compute.amazonaws.com:27017/globalb2bDb?tls=false';
    await mongoose.connect(url);
    console.log('Connected!');

    const db = mongoose.connection.db;
    
    // Search in all collections for "Wholesale"
    const collections = ['users', 'landingforms', 'buyers', 'forms', 'products'];
    for (const colName of collections) {
        const count = await db.collection(colName).countDocuments({
            $or: [
                { companyName: /Wholesale/i },
                { company: /Wholesale/i },
                { name: /Wholesale/i },
                { sellerName: /Wholesale/i }
            ]
        });
        if (count > 0) {
            const results = await db.collection(colName).find({
                $or: [
                    { companyName: /Wholesale/i },
                    { company: /Wholesale/i },
                    { name: /Wholesale/i },
                    { sellerName: /Wholesale/i }
                ]
            }).limit(5).toArray();
            console.log(`Found ${count} matches in ${colName}. Examples:`, JSON.stringify(results.map(r => r.companyName || r.company || r.name || r.sellerName), null, 2));
        }
    }

    await mongoose.disconnect();
  } catch (err) {
    console.error('Error:', err);
  }
}

search();
