const mongoose = require('mongoose');
const DATABASE_URL = 'mongodb://ec2-13-127-78-0.ap-south-1.compute.amazonaws.com:27017/globalb2bDb?tls=false';
const userSchema = new mongoose.Schema({ name: String, companyName: String });
const User = mongoose.model('User', userSchema, 'users');

async function search() {
    await mongoose.connect(DATABASE_URL);
    const results = await User.find({
        $or: [
            { companyName: /Azoliya/i },
            { companyName: /Shiv/i }
        ]
    });
    console.log(JSON.stringify(results, null, 2));
    await mongoose.disconnect();
}
search();
