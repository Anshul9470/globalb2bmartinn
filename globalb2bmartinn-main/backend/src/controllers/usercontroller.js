const User = require("../models/usermodel");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// In usercontroller.js
// Update User GST Number
// In usercontroller.js

// Function to generate OTP
const generateOTP = () => {
  return Math.floor(1000 + Math.random() * 9000); // Generate a 4-digit OTP
};

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Will read your Email from .env
    pass: process.env.EMAIL_PASS, // Will read your App Password from .env
  },
});

// Function to send OTP to user's email
exports.sendOTP = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const OTP = generateOTP();

    // Store OTP in user document (for verification later)
    user.resetPasswordOTP = OTP;
    await user.save();

    // Send OTP to user's email
    const mailOptions = {
      from: "your-email@gmail.com",
      to: email,
      subject: "Password Reset OTP",
      text: `Your OTP for password reset is: ${OTP}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ error: "Failed to send OTP" });
      }
      console.log("Email sent: " + info.response);
      res.status(200).json({ message: "OTP sent to your email" });
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Function to reset password
exports.resetPassword = async (req, res) => {
  const { email, otp, newPassword, confirmNewPassword } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if OTP matches
    if (user.resetPasswordOTP !== otp) {
      return res.status(400).json({ error: "Invalid OTP" });
    }

    // Check if new password and confirm new password match
    if (newPassword !== confirmNewPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    // Update user password
    user.password = newPassword;
    user.resetPasswordOTP = undefined; // Clear OTP after reset

    await user.save();

    res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.updateUserGST = async (req, res) => {
  const { id } = req.params;
  const { gstNumber } = req.body;

  try {
    const user = await User.findByIdAndUpdate(id, { gstNumber }, { new: true });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "GST number updated successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};
// Added changes
// Added new here
// exports.incrementLeadsViewed = async (req, res) => {
//     const { userId } = req.params;
//     try {
//         const user = await User.findById(userId);

//         // Check if the reset date is more than a month ago and reset if necessary
//         const oneMonthAgo = new Date();
//         oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

//         if (user.leadsResetDate < oneMonthAgo) {
//             user.leadsViewed = 0;
//             user.leadsResetDate = new Date();
//         }

//         if (!user.isPremium && user.leadsViewed >= 25) {
//             return res.status(403).json({ error: 'Lead view limit reached' });
//         }

//         user.leadsViewed += 1;
//         await user.save();

//         res.status(200).json({ leadsViewed: user.leadsViewed });
//     } catch (error) {
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };

exports.getViewedLeads = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ viewedLeads: user.viewedLeads });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// incrementLeadsViewed is defined below with full plan support (Standard/Advanced/Premium)


// Configure multer storage
const uploadDir = path.join(__dirname, "../../uploadsprducts");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage }).any();

// Register User
exports.registerUser = async (req, res) => {
  try {
    const userData = { ...req.body, plan: "Free" }; // Always default to Free plan for new users
    const newUser = await User.create(userData);
    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(400).json({ error: "Registration failed" });
  }
};

// Login User
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error("LOGIN_ERROR:", error);
    res.status(500).json({ error: "Internal server error", details: error.message });
  }
};

// Find User by Email and Password
exports.findUserByEmailAndPassword = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ message: "User found", user });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get User by ID
exports.getUserById = async (req, res) => {
  const userId = req.query.id;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

// Update User by ID
// exports.updateUserById = async (req, res) => {
//     const userId = req.params.id;

//     upload(req, res, async (err) => {
//         if (err) {
//             return res.status(400).json({ message: 'Failed to upload images', error: err });
//         }

//         const updateData = {
//             name: req.body.name,
//             email: req.body.email,
//             mobileNumber: req.body.mobileNumber,
//             companyName: req.body.companyName,
//             productOrService: req.body.productOrService,
//             images: req.files.map(file => file.path)
//         };

//         try {
//             const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });
//             if (!updatedUser) {
//                 return res.status(404).json({ message: 'User not found' });
//             }
//             res.status(200).json({ message: 'User updated successfully', user: updatedUser });
//         } catch (error) {
//             res.status(500).json({ message: 'Internal server error', error });
//         }
//     });
// };

exports.updateUserById = async (req, res) => {
  const userId = req.params.id;

  upload(req, res, async (err) => {
    if (err) {
      return res
        .status(400)
        .json({ message: "Failed to upload images", error: err });
    }

    try {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Only update fields that are present in the request body
      const updateData = { ...user.toObject() };
      
      const fields = [
        'name', 'email', 'mobileNumber', 'companyName', 'productOrService', 'gstNumber',
        'catalogSubtitle', 'aboutUs', 'catalogHeroTitle', 'catalogHeroDescription',
        'catalogContactEmail', 'catalogContactPhone', 'catalogContactAddress',
        'verificationStatus', 'yearsInBusiness', 'responseRate', 'responseTime',
        'isCatalogActive'
      ];

      fields.forEach(field => {
        if (req.body[field] !== undefined) {
          updateData[field] = req.body[field];
        }
      });

      if (req.body.certifications) {
        updateData.certifications = typeof req.body.certifications === 'string' ? JSON.parse(req.body.certifications) : req.body.certifications;
      }
      if (req.body.featuredProductIds) {
        updateData.featuredProductIds = typeof req.body.featuredProductIds === 'string' ? JSON.parse(req.body.featuredProductIds) : req.body.featuredProductIds;
      }

      // Handle specific uploaded files
      if (req.files && req.files.length > 0) {
        const heroFile = req.files.find(f => f.fieldname === 'heroImage');
        const aboutFile = req.files.find(f => f.fieldname === 'aboutImage');
        const logoFile = req.files.find(f => f.fieldname === 'sellerLogo');
        const generalImages = req.files.filter(f => f.fieldname === 'images');

        if (heroFile) updateData.catalogHeroImage = `/uploadsprducts/${heroFile.filename}`;
        if (aboutFile) updateData.aboutUsImage = `/uploadsprducts/${aboutFile.filename}`;
        if (logoFile) updateData.sellerLogo = `/uploadsprducts/${logoFile.filename}`;
        if (generalImages.length > 0) {
          updateData.images = [...user.images, ...generalImages.map(f => `/uploadsprducts/${f.filename}`)];
        }
      }

      const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
        new: true,
      });
      res
        .status(200)
        .json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  });
};

// Update User Plan
exports.updateUserPlan = async (req, res) => {
  const { userId, plan } = req.body;

  try {
    const user = await User.findByIdAndUpdate(userId, { plan }, { new: true });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "Plan updated successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};
exports.getUserWithPremiumStatus = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const resetDate = user.leadsResetDate ? new Date(user.leadsResetDate) : null;
    const resetDay = resetDate ? new Date(resetDate.getFullYear(), resetDate.getMonth(), resetDate.getDate()) : null;

    if (!resetDay || resetDay < today) {
      user.leadsViewed = 0;
      user.leadsResetDate = now;
      // user.viewedLeads = []; // REMOVED: Keep lead history forever
      await user.save();
    }

    const plan = (user.plan || "Free").toLowerCase();
    let limit = 0;
    if (plan === "premium") limit = 75;
    else if (plan === "advanced") limit = 50;
    else if (plan === "standard") limit = 25;

    res.status(200).json({
      isPremium: plan === "premium" || plan === "advanced" || plan === "standard",
      leadsViewed: user.leadsViewed,
      plan: user.plan || "Free",
      limit: limit
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

// Get users by role (buyers or sellers)
exports.getUsersByRole = async (req, res) => {
  const { role } = req.params;

  try {
    // Validate role
    if (!['buyer', 'seller'].includes(role)) {
      return res.status(400).json({ message: "Invalid role. Role must be 'buyer' or 'seller'" });
    }

    const users = await User.find({ role: role })
      .select('name email mobileNumber companyName cityname statename productOrService role images plan city state viewedLeads isCatalogActive featuredProductIds')
      .lean();

    if (!users || users.length === 0) {
      return res.status(200).json({
        message: `No ${role}s found`,
        users: []
      });
    }

    res.status(200).json({
      message: `${role}s fetched successfully`,
      users: users
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

// Get sellers by product/service category
exports.getSellersByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const users = await User.find({
      role: 'seller',
      $or: [
        { productOrService: { $regex: category, $options: 'i' } },
        { companyName: { $regex: category, $options: 'i' } }
      ]
    })
    .select('name email mobileNumber companyName cityname statename productOrService role images plan city state isCatalogActive featuredProductIds')
    .lean();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};
exports.incrementLeadsViewed = async (req, res) => {
  const { userId } = req.params;
  const { buyerName, mobileNo, email } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const now = new Date();
    const resetDate = user.leadsResetDate ? new Date(user.leadsResetDate) : null;

    // ✅ MONTHLY RESET LOGIC (30 DAYS)
    const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000; 
    const timeSinceReset = resetDate ? (now - resetDate) : THIRTY_DAYS + 1;

    if (!resetDate || timeSinceReset >= THIRTY_DAYS) {
      user.leadsViewed = 0;
      user.leadsResetDate = now; // Start 30-day window from NOW
      // user.viewedLeads = [];    // Keep history forever
    }

    const userPlanRaw = (user.plan || "Free").toLowerCase().trim();
    let limit = 0;

    if (userPlanRaw === "premium") limit = 75; 
    else if (userPlanRaw === "advanced") limit = 50;
    else if (userPlanRaw === "standard") limit = 25;
    else {
      return res.status(403).json({ error: "Upgrade to a membership plan to view leads" });
    }

    if (user.leadsViewed >= limit) {
      // Calculate when reset will happen
      const resetAt = new Date(user.leadsResetDate.getTime() + THIRTY_DAYS);
      return res.status(403).json({
        error: `Monthly lead view limit (${limit}) reached for your ${user.plan} plan.`,
        resetsAt: resetAt
      });
    }

    user.leadsViewed += 1;
    if (!user.viewedLeads) user.viewedLeads = [];
    user.viewedLeads.push({ buyerName, mobileNo, email, dateViewed: now });
    await user.save();

    // Calculate when the 30-day window resets
    const resetsAt = new Date(user.leadsResetDate.getTime() + THIRTY_DAYS);

    res.status(200).json({
      leadsViewed: user.leadsViewed,
      limit,
      resetsAt  // Frontend can use this to show "Resets at HH:MM"
    });
  } catch (error) {
    console.error("INCREMENT_LEADS_ERROR:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete User (Seller/Buyer/Admin)
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

// Share Leads with multiple users
exports.shareLeads = async (req, res) => {
    const { targetUserId, leads } = req.body;
    try {
        const user = await User.findById(targetUserId);
        if (!user) {
            return res.status(404).json({ error: "Target user not found" });
        }

        // Add leads to the user's viewedLeads array
        // We assume leads is an array of objects: [{ buyerName, mobileNo, email, ... }]
        if (!user.viewedLeads) {
            user.viewedLeads = [];
        }

        // Ensure leads follow the schema
        const sanitizedLeads = leads.map(l => ({
            buyerName: l.buyerName || "N/A",
            mobileNo: l.mobileNo || "N/A",
            email: l.email || "N/A",
            dateViewed: new Date()
        }));

        user.viewedLeads.push(...sanitizedLeads);
        
        await user.save();
        res.status(200).json({ message: "Leads shared successfully", sharedCount: leads.length });
    } catch (error) {
        console.error("Share Leads Error Details:", error);
        res.status(500).json({ error: error.message || "Internal server error" });
    }
};
