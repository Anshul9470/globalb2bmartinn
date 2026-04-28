// routes/FormRoutes.js

const express = require('express');
const router = express.Router();
const formController = require('../controllers/formcontroller');

// Route to submit form data
router.post('/submit-form', formController.submitForm);

module.exports = router;


