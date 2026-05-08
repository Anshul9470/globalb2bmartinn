// // app.js

// const express = require('express');
// const cors = require('cors');
// const app = express();
// const buyerRoutes = require('./routes/buyerroutes');
// const formRoutes = require('./routes/formroutes');
// const userRoutes = require('./routes/userroutes');
// const checkPlan = require('./checkplan');
// const productRoutes = require('./routes/productRoutes');
// const path = require('path');
// require('./db/conn');

// app.use('/premium-feature', checkPlan('Premium'), (req, res) => {
//     res.send('This is a Premium feature');
// });

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Static file serving
// app.use('/uploadsprducts', express.static(path.join(__dirname, 'uploadsprducts')));
// // Routes
// app.use(buyerRoutes);
// app.use(formRoutes);
// // Use user routes
// app.use(userRoutes);

// app.use(productRoutes);

// // Start server
// const PORT = process.env.PORT || 3005;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

// const express = require('express');
// const cors = require('cors');
// const path = require('path');
// const app = express();

// const buyerRoutes = require('./routes/buyerroutes');
// const formRoutes = require('./routes/formroutes');
// const userRoutes = require('./routes/userroutes');
// const checkPlan = require('./checkplan');
// const productRoutes = require('./routes/productRoutes');
// require('./db/conn');

// app.use('/premium-feature', checkPlan('Premium'), (req, res) => {
//     res.send('This is a Premium feature');
// });

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Serve static files
// app.use('/uploadsprducts', express.static(path.join(__dirname, 'uploadsprducts')));

// // Routes
// app.use(buyerRoutes);
// app.use(formRoutes);
// app.use(userRoutes);
// app.use(productRoutes);

// // Start server
// const PORT = process.env.PORT || 3005;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

// Error handlers to prevent silent crashes
process.on('uncaughtException', (err) => {
  console.error('[CRITICAL] Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('[CRITICAL] Unhandled Rejection at:', promise, 'reason:', reason);
});

require('dotenv').config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const formRoutesl = require("./routes/formroutesl");
const buyerRoutes = require("./routes/buyerroutes");
const formRoutes = require("./routes/formroutes");
const userRoutes = require("./routes/userroutes");
const checkPlan = require("./checkplan");
const productRoutes = require("./routes/productRoutes");
// const payRoutes = require('./routes/payroute');
const callRoutes = require("./routes/callRoutes");
const amountFormRoutes = require("./routes/amountroutes");
const paymentRoutes = require("./routes/paymentRoutes");
const adminRoutes = require("./routes/adminRoutes");
require("./db/conn");

app.use("/premium-feature", checkPlan("Premium"), (req, res) => {
  res.send("This is a Premium feature");
});

// Middleware
app.use(express.json());
app.use(cors({
  origin: [
    "http://localhost:3000",
    "http://localhost:3001",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:3001",
    "https://www.globalb2bmart.in",    // Production frontend
    "https://globalb2bmart.in",
    "https://globalb2bmart.netlify.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

// Serve static files
app.use(
  "/uploadsprducts",
  express.static(path.join(__dirname, "../uploadsprducts"))
);

// Routes
app.use(buyerRoutes);
app.use(formRoutes);
app.use(formRoutesl);
app.use(userRoutes);
app.use(productRoutes);
app.use(amountFormRoutes);
// app.use(payRoutes);
app.use(callRoutes);
app.use(paymentRoutes);
app.use(adminRoutes);

// Forced test route
app.get('/backend-status', (req, res) => res.json({ status: 'updated', time: new Date() }));

// Health Check with DB status
app.get('/health', (req, res) => {
  const mongoose = require('mongoose');
  res.json({
    status: 'online',
    dbStatus: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected',
    dbStateCode: mongoose.connection.readyState,
    env: {
      hasDbUrl: !!process.env.DATABASE_URL,
      port: process.env.PORT
    }
  });
});

// Start server
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;

// //////// ========== Payment Gatway testing ==============================================

// const crypto = require('crypto');
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// let salt_key = '58f62bdc-2b1f-44a1-9da5-1820a35835f3';
// let merchant_id = 'PGTESTPAYUAT132';

// app.post('/booking', async (req, res) => {
//     try {
//         let merchantTransactionId = req.body.transactionId;

//         const data = {
//             merchantId: merchant_id, // corrected typo here
//             merchantTransactionId: merchantTransactionId,
//             name: req.body.name,
//             amount: req.body.amount * 100,
//             redirectUrl: `http://localhost:8000/status?id=${merchantTransactionId}`,
//             redirectMode: "POST",
//             mobileNumber: req.body.number, // changed from phone to number to match frontend
//             paymentInstrument: {
//                 type: "PAY_PAGE"
//             }
//         };

//         const payload = JSON.stringify(data);
//         const payloadMain = Buffer.from(payload).toString('base64');
//         const keyIndex = 1;
//         const string = payloadMain + '/pg/v1/pay' + salt_key;
//         const sha256 = crypto.createHash('sha256').update(string).digest('hex');
//         const checksum = sha256 + '###' + keyIndex;

//         const prod_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay"; // removed the space

//         const options = {
//             method: 'POST',
//             url: prod_URL,
//             headers: {
//                 accept: 'application/json', // fixed typo here
//                 'Content-Type': 'application/json',
//                 'X-VERIFY': checksum
//             },
//             data: {
//                 request: payloadMain
//             }
//         };

//         await axios(options).then(function (response) {
//             console.log(response.data);
//             return res.json(response.data);
//         }).catch(function (error) {
//             console.log(error);
//             res.status(error.response?.status || 500).json({ message: error.message });
//         });

//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// });

// app.post("/status", async (req, res) => {

//     const merchantTransactionId = req.query.id
//     const merchantId = merchant_id

//     const keyIndex = 1;
//     const string = `/pg/v1/status/${merchantId}/${merchantTransactionId}` + salt_key;
//     const sha256 = crypto.createHash('sha256').update(string).digest('hex');
//     const checksum = sha256 + "###" + keyIndex;

//     const options = {
//         method: 'GET',
//         url: `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${merchantTransactionId}`,
//         headers: {
//             accept: 'application/json',
//             'Content-Type': 'application/json',
//             'X-VERIFY': checksum,
//             'X-MERCHANT-ID': `${merchantId}`
//         }
//     };

//     // CHECK PAYMENT TATUS
//     axios.request(options).then(async (response) => {
//         if (response.data.success === true) {
//             const url = `https://www.globalb2bmart.in/`
//             return res.redirect(url)
//         } else {
//             const url = `http://localhost:3000/failure`
//             return res.redirect(url)
//         }
//     })
//         .catch((error) => {
//             console.error(error);
//         });

// })
