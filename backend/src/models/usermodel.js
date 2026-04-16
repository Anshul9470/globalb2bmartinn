const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  // email: String,
  email: { type: String, required: true, unique: true },
  password: String,
  mobileNumber: String,
  companyName: String,
  statename: String,
  cityname: String,
  productOrService: String,
  whatsappConfirmed: Boolean,
  productTitle: String,
  productDescription: String,
  gstNumber: String, // Add GST number field
  resetPasswordOTP: String, // Add this field to store OTP temporarily
  leadsViewed: {
    type: Number,
    default: 0,
  },
  leadsResetDate: {
    type: Date,
    default: Date.now,
  },
  viewedLeads: [
    {
      buyerName: String,
      mobileNo: String,
      email: String,
      dateViewed: {
        type: Date,
        default: Date.now,
      },
    },
  ],

  images: [String], // Add this field
  plan: { type: String, enum: ["Free", "Standard", "Advanced", "Premium"], default: "Free" },
  role: { type: String, enum: ["buyer", "seller", "admin"], default: "seller" }, // Add role field
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
