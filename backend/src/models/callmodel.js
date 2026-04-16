const mongoose = require("mongoose");

const callSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  mobileNumber: { type: String, required: true },
  productSupplier: { type: String, required: true },
  userType: { type: [String] }, // Array of strings
});

module.exports = mongoose.model("Call", callSchema);
