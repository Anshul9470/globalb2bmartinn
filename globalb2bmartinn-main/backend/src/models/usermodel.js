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
  category: String,
  subCategory: String,
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
  catalogSubtitle: String,
  aboutUs: String,
  catalogHeroTitle: String,
  catalogHeroDescription: String,
  catalogContactEmail: String,
  catalogContactPhone: String,
  catalogContactAddress: String,
  catalogHeroImage: String,
  sellerLogo: String,
  verificationStatus: { type: String, default: 'Verified' },
  yearsInBusiness: String,
  responseRate: String,
  responseTime: String,
  certifications: [String],
  aboutUsImage: String,
  featuredProductIds: [String],
  isCatalogActive: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
