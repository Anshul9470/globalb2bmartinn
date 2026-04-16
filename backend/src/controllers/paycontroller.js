// controllers/payController.js

// const PayForm = require('../models/paymodel');

// exports.submitForm = async (req, res) => {
//     try {
//         const { name, number, email, city, companyName, amount } = req.body;
//         const newForm = new PayForm({ name, number, email, city, companyName, amount });
//         await newForm.save();
//         res.status(201).json({ message: 'Form submitted successfully', data: newForm });
//     } catch (error) {
//         res.status(500).json({ message: 'Error submitting form', error: error.message });
//     }
// };

/////////+++++++++++++++++++++++++++++++++++ Merchant Payment Gateway Integration +++++++++++++++++++++++++++++++++++++++++++++++''////////

// const crypto = require('crypto');
// const axios = require('axios');
// const PayForm = require('../models/paymodel');

// exports.createOrder = async (req, res) => {
//     try {
//         const { name, number, email, city, companyName, amount } = req.body;
//         const transactionId = 'T' + Date.now();
//         const MID = 'MID' + Date.now();

//         // Save data to MongoDB
//         const newPayment = new PayForm({ name, number, email, city, companyName, amount });
//         await newPayment.save();

//         const data = {
//             merchantId: 'M2247YLY1CUQE',  //PGTESTPAYUAT132
//             merchantTransactionId: transactionId,
//             name: name,
//             amount: amount * 100,
//             redirectUrl: `http://localhost:3000/status?id=${transactionId}`,
//             redirectMode: "POST",
//             mobileNumber: number,
//             paymentInstrument: {
//                 type: "PAY_PAGE"
//             }
//         };

//         const payload = JSON.stringify(data);
//         const payloadMain = Buffer.from(payload).toString('base64');
//         console.log("Base64 Encoded Request Payload:", payloadMain);
//         const keyIndex = 1;
//         const string = payloadMain + '/pg/v1/pay' + 'ed94bff0-f743-4c6d-b7c4-dbf37cd608d0';  //'58f62bdc-2b1f-44a1-9da5-1820a35835f3'
//         const sha256 = crypto.createHash('sha256').update(string).digest('hex');
//         const checksum = sha256 + '###' + keyIndex;

//         const options = {
//             method: 'POST',
//             url: "https://api.phonepe.com/apis/hermes/pg/v1/pay", //https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay
//             headers: {
//                 accept: 'application/json',
//                 'Content-Type': 'application/json',
//                 'X-VERIFY': checksum
//             },
//             data: {
//                 request: payloadMain
//             }
//         };
//         // Log the headers and API host
//         console.log("API Host:", options.url);
//         console.log("Headers:", options.headers);

//         const response = await axios(options);
//         res.json(response.data);

//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// };

////////////////////////////////////////// ++++++++++++++++++ Testing Payment Gateway ++++++++++++++++++++++++++++++++++++++++++++++++++

// const crypto = require('crypto');
// const axios = require('axios');
// const PayForm = require('../models/paymodel');

// exports.createOrder = async (req, res) => {
//     try {
//         const { name, number, email, city, companyName, amount } = req.body;
//         const transactionId = 'T' + Date.now();
//         const MID = 'MID' + Date.now();

//         // Save data to MongoDB
//         const newPayment = new PayForm({ name, number, email, city, companyName, amount });
//         await newPayment.save();

//         const data = {
//             merchantId: 'PGTESTPAYUAT132',  //  M2247YLY1CUQE
//             merchantTransactionId: transactionId,
//             name: name,
//             amount: amount * 100,
//             redirectUrl: `http://localhost:3005/status?id=${transactionId}`,
//             redirectMode: "POST",
//             mobileNumber: number,
//             paymentInstrument: {
//                 type: "PAY_PAGE"
//             }
//         };

//         const payload = JSON.stringify(data);
//         const payloadMain = Buffer.from(payload).toString('base64');
//         console.log("Base64 Encoded Request Payload:", payloadMain);
//         const keyIndex = 1;
//         const string = payloadMain + '/pg/v1/pay' + '58f62bdc-2b1f-44a1-9da5-1820a35835f3';  //'' ed94bff0-f743-4c6d-b7c4-dbf37cd608d0
//         const sha256 = crypto.createHash('sha256').update(string).digest('hex');
//         const checksum = sha256 + '###' + keyIndex;

//         const options = {
//             method: 'POST',
//             url: "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay", //  https://api.phonepe.com/apis/hermes/pg/v1/pay
//             headers: {
//                 accept: 'application/json',
//                 'Content-Type': 'application/json',
//                 'X-VERIFY': checksum
//             },
//             data: {
//                 request: payloadMain
//             }
//         };
//         // Log the headers and API host
//         console.log("API Host:", options.url);
//         console.log("Headers:", options.headers);

//         const response = await axios(options);
//         res.json(response.data);

//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
//     // In your paymentController (paycontroller.js)
//     exports.getPaymentStatus = (req, res) => {
//         try {
//             const paymentResponse = req.body;
//             // Process the payment response
//             console.log('Payment Response:', paymentResponse);

//             // Update payment status in the database or perform other actions
//             // ...

//             res.status(200).send('Payment status received');
//         } catch (err) {
//             console.error(err);
//             res.status(500).json({ message: 'Internal Server Error' });
//         }
//     };

// };

// controllers/paycontroller.js

// const crypto = require('crypto');
// const axios = require('axios');
// const PayForm = require('../models/paymodel');

// // Existing method for creating an order
// exports.createOrder = async (req, res) => {
//     try {
//         const { name, number, email, city, companyName, amount } = req.body;
//         const transactionId = 'T' + Date.now();
//         const MID = 'MID' + Date.now();

//         // Save data to MongoDB
//         const newPayment = new PayForm({ name, number, email, city, companyName, amount });
//         await newPayment.save();

//         const data = {
//             merchantId: 'PGTESTPAYUAT132',
//             merchantTransactionId: transactionId,
//             name: name,
//             amount: amount * 100,
//             redirectUrl: `http://localhost:3000/api/pay/status?id=${transactionId}`,  // http://localhost:3000/status?id=${transactionId}
//             redirectMode: "POST",
//             mobileNumber: number,
//             paymentInstrument: {
//                 type: "PAY_PAGE"
//             }
//         };

//         const payload = JSON.stringify(data);
//         const payloadMain = Buffer.from(payload).toString('base64');
//         console.log("Base64 Encoded Request Payload:", payloadMain);
//         const keyIndex = 1;
//         const string = payloadMain + '/pg/v1/pay' + '58f62bdc-2b1f-44a1-9da5-1820a35835f3';
//         const sha256 = crypto.createHash('sha256').update(string).digest('hex');
//         const checksum = sha256 + '###' + keyIndex;

//         const options = {
//             method: 'POST',
//             url: "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay",
//             headers: {
//                 accept: 'application/json',
//                 'Content-Type': 'application/json',
//                 'X-VERIFY': checksum
//             },
//             data: {
//                 request: payloadMain
//             }
//         };
//         // Log the headers and API host
//         console.log("API Host:", options.url);
//         console.log("Headers:", options.headers);

//         const response = await axios(options);
//         res.json(response.data);

//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// };

// // New method for handling payment status
// exports.getPaymentStatus = async (req, res) => {
//     try {
//         const merchantTransactionId = req.query.id;
//         const merchantId = 'PGTESTPAYUAT132';  // Replace with your actual merchant ID
//         const salt_key = '1';  // Replace with your actual salt key
//         const keyIndex = 1;
//         const string = `/pg/v1/status/${merchantId}/${merchantTransactionId}` + salt_key;
//         const sha256 = crypto.createHash('sha256').update(string).digest('hex');
//         const checksum = sha256 + "###" + keyIndex;

//         const options = {
//             method: 'GET',
//             url: `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${merchantTransactionId}`,
//             headers: {
//                 accept: 'application/json',
//                 'Content-Type': 'application/json',
//                 'X-VERIFY': checksum,
//                 'X-MERCHANT-ID': `${merchantId}`
//             }
//         };

//         // Check payment status
//         const response = await axios.request(options);
//         if (response.data.success === true) {
//             const url = `http://localhost:3000/success`;
//             return res.redirect(url);
//         } else {
//             const url = `http://localhost:3000/failure`;
//             return res.redirect(url);
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// };

// const crypto = require('crypto');
// const axios = require('axios');
// const PayForm = require('../models/paymodel');

// exports.createOrder = async (req, res) => {
//     try {
//         const { name, number, email, city, companyName, amount } = req.body;
//         const transactionId = 'T' + Date.now();
//         const MID = 'MID' + Date.now();

//         const newPayment = new PayForm({ name, number, email, city, companyName, amount });
//         await newPayment.save();

//         const data = {
//             merchantId: 'PGTESTPAYUAT132',
//             merchantTransactionId: transactionId,
//             name: name,
//             amount: amount * 100,
//             redirectUrl: `http://localhost:3000/api/pay/status?id=${transactionId}`, // Updated URL
//             redirectMode: "POST",
//             mobileNumber: number,
//             paymentInstrument: {
//                 type: "PAY_PAGE"
//             }
//         };

//         const payload = JSON.stringify(data);
//         const payloadMain = Buffer.from(payload).toString('base64');
//         console.log("Base64 Encoded Request Payload:", payloadMain);
//         const keyIndex = 1;
//         const string = payloadMain + '/pg/v1/pay' + '58f62bdc-2b1f-44a1-9da5-1820a35835f3';
//         const sha256 = crypto.createHash('sha256').update(string).digest('hex');
//         const checksum = sha256 + '###' + keyIndex;

//         const options = {
//             method: 'POST',
//             url: "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay",
//             headers: {
//                 accept: 'application/json',
//                 'Content-Type': 'application/json',
//                 'X-VERIFY': checksum
//             },
//             data: {
//                 request: payloadMain
//             }
//         };

//         const response = await axios(options);
//         res.json(response.data);

//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// };

// exports.getPaymentStatus = async (req, res) => {
//     try {
//         const transactionId = req.query.id;
//         const merchantId = 'PGTESTPAYUAT132';
//         // const salt_key = '1';
//         const keyIndex = 1;
//         const string = `/pg/v1/status/${merchantId}/${transactionId}` + salt_key;
//         const sha256 = crypto.createHash('sha256').update(string).digest('hex');
//         const checksum = sha256 + "###" + keyIndex;

//         const options = {
//             method: 'GET',
//             url: `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${transactionId}`,
//             headers: {
//                 accept: 'application/json',
//                 'Content-Type': 'application/json',
//                 'X-VERIFY': checksum,
//                 'X-MERCHANT-ID': `${merchantId}`
//             }
//         };

//         const response = await axios.request(options);
//         if (response.data.success === true) {
//             const url = `http://localhost:3000/success`;
//             return res.redirect(url);
//         } else {
//             const url = `http://localhost:3000/failure`;
//             return res.redirect(url);
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// };

// const crypto = require('crypto');
// const axios = require('axios');
// const PayForm = require('../models/paymodel');

// exports.createOrder = async (req, res) => {
//     try {
//         const { name, number, email, city, companyName, amount } = req.body;
//         const transactionId = 'T' + Date.now();
//         const MID = 'MID' + Date.now();

//         const newPayment = new PayForm({ name, number, email, city, companyName, amount });
//         await newPayment.save();

//         const data = {
//             merchantId: 'M2247YLY1CUQE',
//             merchantTransactionId: transactionId,
//             name: name,
//             amount: amount * 100,
//             redirectUrl: `http://localhost:3005/status?id=${transactionId}`,// Updated URL
//             redirectMode: "POST",
//             mobileNumber: number,
//             paymentInstrument: {
//                 type: "PAY_PAGE"
//             }
//         };

//         const payload = JSON.stringify(data);
//         const payloadMain = Buffer.from(payload).toString('base64');
//         console.log("Base64 Encoded Request Payload:", payloadMain);
//         const keyIndex = 1;
//         const string = payloadMain + '/pg/v1/pay' + 'ed94bff0-f743-4c6d-b7c4-dbf37cd608d0';
//         const sha256 = crypto.createHash('sha256').update(string).digest('hex');
//         const checksum = sha256 + '###' + keyIndex;

//         const options = {
//             method: 'POST',
//             // url: "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay",
//             url: "https://api.phonepe.com/apis/hermes/pg/v1/pay",
//             headers: {
//                 accept: 'application/json',
//                 'Content-Type': 'application/json',
//                 'X-VERIFY': checksum
//             },
//             data: {
//                 request: payloadMain
//             }
//         };

//         const response = await axios(options);
//         res.json(response.data);

//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// };

// exports.getPaymentStatus = async (req, res) => {
//     try {
//         const { id: transactionId } = req.body; // Assuming transactionId is passed in the body
//         const merchantId = 'M2247YLY1CUQE';
//         const salt_key = 'ed94bff0-f743-4c6d-b7c4-dbf37cd608d0';
//         const keyIndex = 1;
//         const string = `/pg/v1/status/${merchantId}/${transactionId}` + salt_key;
//         const sha256 = crypto.createHash('sha256').update(string).digest('hex');
//         const checksum = sha256 + "###" + keyIndex;

//         const options = {
//             method: 'GET',
//             url: `https://api.phonepe.com/apis/hermes/pg/v1/pay/${merchantId}/${transactionId}`,
//             headers: {
//                 accept: 'application/json',
//                 'Content-Type': 'application/json',
//                 'X-VERIFY': checksum,
//                 'X-MERCHANT-ID': `${merchantId}`
//             }
//         };

//         const response = await axios.request(options);
//         if (response.data.success === true) {
//             const url = `https://globalb2bmart.com`;
//             return res.redirect(url);
//         } else {
//             const url = `https://globalb2bmart.com`;
//             return res.redirect(url);
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// };

// const crypto = require('crypto');
// const axios = require('axios');
// const PayForm = require('../models/paymodel');

// exports.createOrder = async (req, res) => {
//     try {
//         const { name, number, email, city, companyName, amount } = req.body;
//         const transactionId = 'T' + Date.now();
//         const MID = 'MID' + Date.now();

//         const newPayment = new PayForm({ name, number, email, city, companyName, amount });
//         await newPayment.save();

//         const data = {
//             merchantId: 'M2247YLY1CUQE',
//             merchantTransactionId: transactionId,
//             name: name,
//             amount: amount * 100,
//             redirectUrl: `https://webhook-test.com/payload/7e0c89bf-0287-4a81-9bfb-0d2e93581801/status${transactionId}`, // Updated URL
//             redirectMode: "POST",
//             mobileNumber: number,
//             paymentInstrument: {
//                 type: "PAY_PAGE"
//             }
//         };

//         const payload = JSON.stringify(data);
//         const payloadMain = Buffer.from(payload).toString('base64');
//         console.log("Base64 Encoded Request Payload:", payloadMain);

//         const keyIndex = 1;
//         const string = payloadMain + '/pg/v1/pay' + 'ed94bff0-f743-4c6d-b7c4-dbf37cd608d0';
//         const sha256 = crypto.createHash('sha256').update(string).digest('hex');
//         const checksum = sha256 + '###' + keyIndex;

//         const options = {
//             method: 'POST',
//             // url: "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay",
//             url: "https://api.phonepe.com/apis/hermes/pg/v1/pay",
//             headers: {
//                 accept: 'application/json',
//                 'Content-Type': 'application/json',
//                 'X-VERIFY': checksum
//             },
//             data: {
//                 request: payloadMain
//             }
//         };

//         console.log("API Host:", options.url);
//         console.log("Headers:", options.headers);
//         console.log("Payload:", options.data);

//         const response = await axios(options);
//         res.json(response.data);

//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// };

// exports.getPaymentStatus = async (req, res) => {
//     try {
//         const { id: transactionId } = req.body; // Assuming transactionId is passed in the body
//         const merchantId = 'M2247YLY1CUQE';
//         const salt_key = 'ed94bff0-f743-4c6d-b7c4-dbf37cd608d0';
//         const keyIndex = 1;
//         const string = `/pg/v1/status/${merchantId}/${transactionId}` + salt_key;
//         const sha256 = crypto.createHash('sha256').update(string).digest('hex');
//         const checksum = sha256 + "###" + keyIndex;

//         const options = {
//             method: 'GET',
//             url: `https://api.phonepe.com/apis/hermes/pg/v1/status/${merchantId}/${transactionId}`,
//             headers: {
//                 accept: 'application/json',
//                 'Content-Type': 'application/json',
//                 'X-VERIFY': checksum,
//                 'X-MERCHANT-ID': `${merchantId}`
//             }
//         };

//         console.log("API Host:", options.url);
//         console.log("Headers:", options.headers);

//         const response = await axios.request(options);
//         if (response.data.success === true) {
//             const url = `https://globalb2bmart.com`;
//             return res.redirect(url);
//         } else {
//             const url = `https://globalb2bmart.com`;
//             return res.redirect(url);
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// };

// const crypto = require('crypto');
// const axios = require('axios');
// const PayForm = require('../models/paymodel');

// exports.createOrder = async (req, res) => {
//     try {
//         const { name, number, email, city, companyName, amount } = req.body;
//         const transactionId = 'T' + Date.now();
//         const MID = 'MID' + Date.now();

//         const newPayment = new PayForm({ name, number, email, city, companyName, amount });
//         await newPayment.save();

//         const data = {
//             merchantId: 'M2247YLY1CUQE',
//             merchantTransactionId: transactionId,
//             name: name,
//             amount: amount * 100,
//             redirectUrl: `https://webhook-test.com/payload/7e0c89bf-0287-4a81-9bfb-0d2e93581801/status${transactionId}`, // Updated URL
//             redirectMode: "POST",
//             mobileNumber: number,
//             paymentInstrument: {
//                 type: "PAY_PAGE"
//             }
//         };

//         const payload = JSON.stringify(data);
//         const payloadMain = Buffer.from(payload).toString('base64');
//         console.log("Base64 Encoded Request Payload:", payloadMain);

//         const keyIndex = 1;
//         const string = payloadMain + '/pg/v1/pay' + 'ed94bff0-f743-4c6d-b7c4-dbf37cd608d0';
//         const sha256 = crypto.createHash('sha256').update(string).digest('hex');
//         const checksum = sha256 + '###' + keyIndex;

//         const options = {
//             method: 'POST',
//             // url: "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay",
//             url: "https://api.phonepe.com/apis/hermes/pg/v1/pay",
//             headers: {
//                 accept: 'application/json',
//                 'Content-Type': 'application/json',
//                 'X-VERIFY': checksum
//             },
//             data: {
//                 request: payloadMain
//             }
//         };

//         console.log("API Host:", options.url);
//         console.log("Headers:", options.headers);
//         console.log("Payload:", options.data);

//         const response = await axios(options);
//         console.log("Payment Gateway Response:", response.data);

//         res.json(response.data);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// };

// exports.getPaymentStatus = async (req, res) => {
//     try {
//         const { id: transactionId } = req.body; // Assuming transactionId is passed in the body
//         const merchantId = 'M2247YLY1CUQE';
//         const salt_key = 'ed94bff0-f743-4c6d-b7c4-dbf37cd608d0';
//         const keyIndex = 1;
//         const string = `/pg/v1/status/${merchantId}/${transactionId}` + salt_key;
//         const sha256 = crypto.createHash('sha256').update(string).digest('hex');
//         const checksum = sha256 + "###" + keyIndex;

//         const options = {
//             method: 'GET',
//             url: `https://api.phonepe.com/apis/hermes/pg/v1/status/${merchantId}/${transactionId}`,
//             headers: {
//                 accept: 'application/json',
//                 'Content-Type': 'application/json',
//                 'X-VERIFY': checksum,
//                 'X-MERCHANT-ID': `${merchantId}`
//             }
//         };

//         console.log("API Host:", options.url);
//         console.log("Headers:", options.headers);

//         const response = await axios.request(options);
//         console.log("Payment Status Response:", response.data);

//         if (response.data.success === true) {
//             const url = `https://globalb2bmart.com/success?transactionId=${transactionId}`;
//             return res.redirect(url);
//         } else {
//             const url = `https://globalb2bmart.com/failure?transactionId=${transactionId}`;
//             return res.redirect(url);
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// };

// const crypto = require("crypto");
// const axios = require("axios");
// const PayForm = require("../models/paymodel");

// exports.createOrder = async (req, res) => {
//   try {
//     const { name, number, email, city, companyName, amount } = req.body;
//     const transactionId = "T" + Date.now();
//     const MID = "MID" + Date.now();

//     // Create new payment entry in the database
//     const newPayment = new PayForm({
//       name,
//       number,
//       email,
//       city,
//       companyName,
//       amount,
//     });
//     await newPayment.save();

//     // Payment request data
//     const data = {
//       merchantId: "M2247YLY1CUQE",
//       merchantTransactionId: transactionId,
//       name: name,
//       amount: amount * 100, // amount in paisa
//       // Ensure this URL matches what is configured with your payment gateway
//       redirectUrl: `http://localhost:3005/status?id=${transactionId}`,
//       redirectMode: "POST",
//       mobileNumber: number,
//       paymentInstrument: {
//         type: "PAY_PAGE",
//       },
//     };

//     // Encode request payload
//     const payload = JSON.stringify(data);
//     const payloadMain = Buffer.from(payload).toString("base64");
//     console.log("Base64 Encoded Request Payload:", payloadMain);

//     // Checksum generation
//     const keyIndex = 1;
//     const string =
//       payloadMain + "/pg/v1/pay" + "ed94bff0-f743-4c6d-b7c4-dbf37cd608d0";
//     const sha256 = crypto.createHash("sha256").update(string).digest("hex");
//     const checksum = sha256 + "###" + keyIndex;

//     // Request options
//     const options = {
//       method: "POST",
//       url: "https://api.phonepe.com/apis/hermes/pg/v1/pay",
//       headers: {
//         accept: "application/json",
//         "Content-Type": "application/json",
//         "X-VERIFY": checksum,
//       },
//       data: {
//         request: payloadMain,
//       },
//     };

//     console.log("API Host:", options.url);
//     console.log("Headers:", options.headers);
//     console.log("Payload:", options.data);

//     // Sending request to payment gateway
//     const response = await axios(options);
//     console.log("Payment Gateway Response:", response.data);

//     res.json(response.data);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };
// exports.getPaymentStatus = async (req, res) => {
//   try {
//     const { id: transactionId } = req.body; // Assuming transactionId is passed in the body
//     const merchantId = "M2247YLY1CUQE";
//     const salt_key = "ed94bff0-f743-4c6d-b7c4-dbf37cd608d0";
//     const keyIndex = 1;
//     const string = `/pg/v1/status/${merchantId}/${transactionId}` + salt_key;
//     const sha256 = crypto.createHash("sha256").update(string).digest("hex");
//     const checksum = sha256 + "###" + keyIndex;

//     // Request options
//     const options = {
//       method: "GET",
//       url: `https://api.phonepe.com/apis/hermes/pg/v1/status/${merchantId}/${transactionId}`,
//       headers: {
//         accept: "application/json",
//         "Content-Type": "application/json",
//         "X-VERIFY": checksum,
//         "X-MERCHANT-ID": `${merchantId}`,
//       },
//     };

//     console.log("API Host:", options.url);
//     console.log("Headers:", options.headers);

//     // Sending request to check payment status
//     const response = await axios.request(options);
//     console.log("Payment Status Response:", response.data);

//     // Log the payment status response
//     console.log(
//       "Full Payment Status Response:",
//       JSON.stringify(response.data, null, 2)
//     );

//     // Redirecting based on payment status
//     if (response.data.success === true) {
//       const url = `https://globalb2bmart.com`;
//       // const url = `https://globalb2bmart.com/success?transactionId=${transactionId}`;
//       return res.redirect(url);
//     } else {
//       const url = `https://globalb2bmart.com`;
//       // const url = `https://globalb2bmart.com/failure?transactionId=${transactionId}`;
//       return res.redirect(url);
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };
// controllers/paycontroller.js

const PayForm = require("../models/paymodel"); // Import the PayForm model

// Controller function to handle form submission
exports.submitForm = async (req, res) => {
  try {
    const { name, number, email, city, companyName, amount } = req.body;

    // Create a new PayForm document
    const newPayment = new PayForm({
      name,
      number,
      email,
      city,
      companyName,
      amount,
    });

    // Save the form data to the database here
    //i have added data
    //updated data here
    //updated data here
    await newPayment.save();

    // Respond with success and the saved form data
    res.json({
      success: true,
      message: "Payment details successfully submitted.",
      data: newPayment,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
