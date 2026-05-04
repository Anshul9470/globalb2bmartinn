const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const UserSchema = new mongoose.Schema({
    name: String,
    plan: String
});

const User = mongoose.model('User', UserSchema);

async function updateVipin() {
    try {
        await mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost:27017/globalb2bDb');
        // Update plan to Standard for vipin
        const result = await User.updateMany({ name: /vipin/i }, { plan: 'Standard' });
        console.log('UPDATE_RESULT:', JSON.stringify(result, null, 2));
        
        // Also check if there's any other user with this name
        const users = await User.find({ name: /vipin/i });
        console.log('UPDATED_USERS:', JSON.stringify(users, null, 2));
        
        await mongoose.disconnect();
    } catch (err) {
        console.error('ERROR:', err);
    }
}

updateVipin();
