const mongoose = require("mongoose");

// mongoose.connect(process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/globalb2bDb', {    //Here line will be added for the database url.
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => {
//     console.log("Connected to MongoDB");
// }).catch((error) => {
//     console.error("Error connecting to MongoDB:", error);
// });


// mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost:27017/globalb2bDb', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => {
//     console.log("Connected to MongoDB");
// }).catch((error) => {
//     console.error("Error connecting to MongoDB:", error);
// });
// Connect to MongoDB with optimized options for remote connections
const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
};

const dbUrl = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/globalb2bDb';
console.log("🔗 Attempting to connect to:", dbUrl.replace(/\/\/.*@/, "//***:***@")); // Mask password if any

mongoose.connect(dbUrl, dbOptions)
    .then(() => {
        console.log("✅ Successfully connected to MongoDB");
    })
    .catch((error) => {
        console.error("❌ MongoDB Connection Error:");
        console.error(error.message);
        if (error.message.includes('ETIMEDOUT')) {
            console.error("👉 ANALYSIS: This is a Network/Firewall issue. Please check if your AWS Security Group allows port 27017 for your IP.");
        }
    });
