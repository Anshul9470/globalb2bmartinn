const mongoose = require('mongoose');
const User = require('./src/models/usermodel');

const checkUsers = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/globalb2bDb');
        const users = await User.find({ role: 'seller' }).limit(10).lean();
        console.log('Sample Sellers:', JSON.stringify(users, null, 2));
        mongoose.connection.close();
    } catch (error) {
        console.error(error);
    }
};
checkUsers();
