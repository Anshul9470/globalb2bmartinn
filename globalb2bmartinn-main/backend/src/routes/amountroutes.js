// routes/amountFormRoutes.js

const express = require('express');
const router = express.Router();
const amountFormController = require('../controllers/amountcontroller');

// Route for form submission
router.post('/amount-pay', amountFormController.submitForm);

module.exports = router;
