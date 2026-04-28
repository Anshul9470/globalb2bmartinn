const mongoose = require('mongoose');

const DATABASE_URL = 'mongodb://ec2-13-127-78-0.ap-south-1.compute.amazonaws.com:27017/globalb2bDb?tls=false';

const userSchema = new mongoose.Schema({
    name: String,
    companyName: String,
    mobile: String,
    email: String,
    statename: String,
    cityname: String,
    isApproved: Boolean
});

const User = mongoose.model('User', userSchema, 'users');

async function searchCompanies() {
    try {
        await mongoose.connect(DATABASE_URL);
        console.log('Connected to database');

        const companyNames = [
            "1 LEAP Technologies",
            "Azoliya Cable Tie",
            "Sai Auto Industries",
            "Wuhan MZ Electronic Co.,Ltd",
            "Wellcab Winding Wire",
            "HARGOSAI HIND PRIVATE LIMITED",
            "Shiv PET",
            "Jai Maa Kali Electricals",
            "Abhishek Jagtap",
            "Shree Laxmi Wire",
            "Bharat Cable House"
        ];

        console.log('--- SEARCH RESULTS ---');
        for (const name of companyNames) {
            const user = await User.findOne({
                $or: [
                    { companyName: new RegExp(name, 'i') },
                    { name: new RegExp(name, 'i') }
                ]
            });

            if (user) {
                console.log(`[FOUND] ${name}:`);
                console.log(`   User Name: ${user.name}`);
                console.log(`   Company: ${user.companyName}`);
                console.log(`   Contact: ${user.mobile} | ${user.email}`);
                console.log(`   Location: ${user.cityname}, ${user.statename}`);
                console.log(`   Approved: ${user.isApproved}`);
            } else {
                console.log(`[NOT FOUND] ${name}`);
            }
        }

        await mongoose.disconnect();
    } catch (err) {
        console.error('Error:', err);
    }
}

searchCompanies();
