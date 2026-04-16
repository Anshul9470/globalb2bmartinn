const express = require('express');
const router = express.Router();
const callController = require('../controllers/callcontroller');

router.post('/submit-call', callController.submitCall);

module.exports = router;
