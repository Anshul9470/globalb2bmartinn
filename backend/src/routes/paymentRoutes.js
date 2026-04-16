// const express = require('express');
// const axios = require('axios');
// const crypto = require('crypto-js');
// const router = express.Router();

// const phonePeConfig = {
//     merchantId: 'M2247YLY1CUQE',
//     apiKey: 'ed94bff0-f743-4c6d-b7c4-dbf37cd608d0',
//     apiKeyIndex: 1,
//     hostURL: 'https://api-preprod.phonepe.com/apis/hermes',
// };

// const generateChecksum = (payload) => {
//     const payloadString = JSON.stringify(payload);
//     const checksum = crypto.SHA256(payloadString + phonePeConfig.apiKey).toString(crypto.enc.Hex);
//     return checksum;
// };

// router.post('/initiate-payment', async (req, res) => {
//     try {
//         const { amount, formData } = req.body;
//         const payload = {
//             merchantId: phonePeConfig.merchantId,
//             transactionId: `TXN${Date.now()}`,
//             amount,
//             merchantOrderId: `ORDER${Date.now()}`,
//             currency: 'INR',
//             redirectUrl: 'http://yourdomain.com/payment-success', // Update with your success URL
//             paymentMode: 'ALL',
//             ...formData,
//         };

//         const checksum = generateChecksum(payload);
//         const response = await axios.post(`${phonePeConfig.hostURL}/v3/initiate`, payload, {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'X-VERIFY': `${checksum}###${phonePeConfig.apiKeyIndex}`,
//             },
//         });

//         res.status(200).json({ paymentUrl: response.data.data.instrumentResponse.redirectUrl });
//     } catch (error) {
//         res.status(500).json({ message: 'Error initiating payment', error: error.message });
//     }
// });

// router.post('/payment-callback', async (req, res) => {
//     // Handle payment callback logic here
//     console.log('Payment callback received:', req.body);
//     res.status(200).send('Callback received');
// });

// module.exports = router;

// const express = require('express');
// const axios = require('axios');
// const crypto = require('crypto-js');
// const router = express.Router();

// const phonePeConfig = {
//     merchantId: 'M2247YLY1CUQE',
//     apiKey: 'ed94bff0-f743-4c6d-b7c4-dbf37cd608d0',
//     apiKeyIndex: 1,
//     hostURL: 'https://api-preprod.phonepe.com/apis/hermes',
// };

// const generateChecksum = (payload) => {
//     const payloadString = JSON.stringify(payload);
//     const checksum = crypto.SHA256(payloadString + phonePeConfig.apiKey).toString(crypto.enc.Hex);
//     return checksum;
// };

// router.post('/initiate-payment', async (req, res) => {
//     try {
//         const { amount, formData } = req.body;
//         const payload = {
//             merchantId: phonePeConfig.merchantId,
//             transactionId: `TXN${Date.now()}`,
//             amount,
//             merchantOrderId: `ORDER${Date.now()}`,
//             currency: 'INR',
//             redirectUrl: 'http://localhost:3000/', // Update with your success URL
//             paymentMode: 'ALL',
//             ...formData,
//         };

//         const checksum = generateChecksum(payload);
//         const response = await axios.post(`${phonePeConfig.hostURL}/v3/initiate`, payload, {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'X-VERIFY': `${checksum}###${phonePeConfig.apiKeyIndex}`,
//             },
//         });

//         console.log('PhonePe response:', response.data);

//         res.status(200).json({ paymentUrl: response.data.data.instrumentResponse.redirectUrl });
//     } catch (error) {
//         console.error('Error initiating payment:', error.message);
//         res.status(500).json({ message: 'Error initiating payment', error: error.message });
//     }
// });

// module.exports = router;
// const express = require('express');
// const axios = require('axios');
// const crypto = require('crypto-js');
// const router = express.Router();

// const phonePeConfig = {
//     merchantId: 'M2247YLY1CUQE',
//     apiKey: 'ed94bff0-f743-4c6d-b7c4-dbf37cd608d0',
//     apiKeyIndex: 1,
//     hostURL: 'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay',
// };

// const generateChecksum = (payload) => {
//     const payloadString = JSON.stringify(payload);
//     const checksum = crypto.SHA256(payloadString + phonePeConfig.apiKey).toString(crypto.enc.Hex);
//     return checksum;
// };

// router.post('/initiate-payment', async (req, res) => {
//     try {
//         const { amount, formData } = req.body;
//         const payload = {
//             merchantId: phonePeConfig.merchantId,
//             transactionId: `TXN${Date.now()}`,
//             amount: amount * 100, // PhonePe API requires the amount in paise
//             merchantOrderId: `ORDER${Date.now()}`,
//             currency: 'INR',
//             redirectUrl: 'http://localhost:3000/', // Update with your success URL
//             paymentMode: 'ALL',
//             ...formData,
//         };

//         const checksum = generateChecksum(payload);
//         console.log('Payload:', payload);
//         console.log('Checksum:', checksum);

//         const response = await axios.post(`${phonePeConfig.hostURL}/v3/initiate`, payload, {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'X-VERIFY': `${checksum}###${phonePeConfig.apiKeyIndex}`,
//             },
//         });

//         console.log('PhonePe response:', response.data);

//         res.status(200).json({ paymentUrl: response.data.data.instrumentResponse.redirectUrl });
//     } catch (error) {
//         console.error('Error initiating payment:', error.response ? error.response.data : error.message);
//         res.status(500).json({ message: 'Error initiating payment', error: error.response ? error.response.data : error.message });
//     }
// });

// module.exports = router;

// const express = require('express');
// const router = express.Router();
// const paymentController = require('../controllers/paycontroller');

// router.post('/order', paymentController.createOrder);

// module.exports = router;
// paymentRoute.js
// const express = require('express');
// const router = express.Router();
// const paymentController = require('../controllers/paycontroller'); // Corrected import

// router.post('/order', paymentController.createOrder);
// // router.get('/status', paymentController.statusCheck);
// // New route for handling payment status
// router.post('/status', paymentController.getPaymentStatus);

// module.exports = router;
// routes/payRoutes.js

const express = require("express");
const { submitForm } = require("../controllers/paycontroller"); // Import the controller
const router = express.Router();

// POST endpoint to submit form
router.post("/submit-pay", submitForm);

module.exports = router;
