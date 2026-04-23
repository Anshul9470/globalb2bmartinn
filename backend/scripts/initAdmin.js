require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../src/models/usermodel');

const dbUrl = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/globalb2bDb';

async function initAdmin() {
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected successfully.');

        const adminEmail = 'admin@globalb2bmart.in'; // Default Admin Email
        const adminPassword = 'Admin@Password2024';  // Default Admin Password
        const adminName = 'Global Admin';

        console.log(`Checking for existing user with email: ${adminEmail}`);
        let user = await User.findOne({ email: adminEmail });

        if (user) {
            console.log('User found. Promoting to Admin...');
            user.role = 'admin';
            user.password = adminPassword; // Reset to default for test
            await user.save();
            console.log('Successfully promoted existing user to ADMIN.');
        } else {
            console.log('No user found. Creating new ADMIN account...');
            user = await User.create({
                name: adminName,
                email: adminEmail,
                password: adminPassword,
                role: 'admin'
            });
            console.log('Successfully created new ADMIN account.');
        }

        console.log('-------------------------------------------');
        console.log('ADMIN SESSION INFO:');
        console.log(`Email:    ${adminEmail}`);
        console.log(`Password: ${adminPassword}`);
        console.log('-------------------------------------------');
        process.exit(0);
    } catch (error) {
        console.error('FAILED to initialize Admin:', error);
        process.exit(1);
    }
}

initAdmin();
