const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    plan: String,
    leadsViewed: Number
});

const User = mongoose.model('User', UserSchema);

async function checkVipin() {
    try {
        await mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost:27017/globalb2bDb');
        const user = await User.findOne({ name: /vipin/i });
        if (user) {
            console.log('USER_FOUND:', JSON.stringify(user, null, 2));
        } else {
            console.log('USER_NOT_FOUND');
        }
        await mongoose.disconnect();
    } catch (err) {
        console.error('ERROR:', err);
    }
}

checkVipin();
