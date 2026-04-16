// routes/payRoutes.js

const express = require('express');
const { submitForm } = require('../controllers/paycontroller');
const router = express.Router();

// POST endpoint to submit form
router.post('/submit-pay', submitForm);

module.exports = router;
