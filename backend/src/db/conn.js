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
// Here 1 line
mongoose.connect(process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/globalb2bDb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});
