const mongoose = require('mongoose');
const DATABASE_URL = 'mongodb://ec2-13-127-78-0.ap-south-1.compute.amazonaws.com:27017/globalb2bDb?tls=false';
const productSchema = new mongoose.Schema({
    productDetail: {
        productName: String,
        companyName: String
    }
});
const Product = mongoose.model('Product', productSchema, 'products');

async function search() {
    await mongoose.connect(DATABASE_URL);
    const results = await Product.find({
        $or: [
            { 'productDetail.companyName': /Azoliya/i },
            { 'productDetail.productName': /Azoliya/i },
            { 'productDetail.companyName': /Shiv/i }
        ]
    });
    console.log(JSON.stringify(results, null, 2));
    await mongoose.disconnect();
}
search();
