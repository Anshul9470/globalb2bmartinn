const express = require("express");
const router = express.Router();
const landingFormController = require("../controllers/landingFormController");

// Route to handle landing form submission
router.post("/submit-landing", landingFormController.submitLandingForm);

module.exports = router;
