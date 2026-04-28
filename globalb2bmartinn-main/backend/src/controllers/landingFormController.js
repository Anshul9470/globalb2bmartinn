const LandingForm = require("../models/LandingForm");

// Handle form submission
exports.submitLandingForm = async (req, res) => {
  try {
    const { name, mobileNumber, productSupplier, userType } = req.body;

    // Create a new landing form entry
    const newForm = new LandingForm({
      name,
      mobileNumber,
      productSupplier,
      userType,
    });

    // Save the form entry to the database cnahges
    await newForm.save();
    res.status(200).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error saving form submission:", error);
    res.status(500).json({ message: "Failed to submit the form" });
  }
};
