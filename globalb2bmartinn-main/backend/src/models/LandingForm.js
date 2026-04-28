const mongoose = require("mongoose");

// Define the schema for form submissions
const landingFormSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  productSupplier: { type: String, required: true },
  category: { type: String },
  subCategory: { type: String },
  submittedAt: { type: Date, default: Date.now },
  userType: { type: [String], required: true },
});
//added changes
// Export the model
module.exports = mongoose.model("LandingForm", landingFormSchema);
