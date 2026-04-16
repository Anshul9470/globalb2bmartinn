const User = require("../models/usermodel");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const multer = require("multer");
const path = require("path");

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
    if (newPassword == confirmNewPassword) {
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

exports.incrementLeadsViewed = async (req, res) => {
  const { userId } = req.params;
  const { buyerName, mobileNo, email } = req.body; // Assuming these are passed in the request body

  try {
    const user = await User.findById(userId);

    // Check if the reset date is more than a month ago and reset if necessary
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    if (user.leadsResetDate < oneMonthAgo) {
      user.leadsViewed = 0;
      user.leadsResetDate = new Date();
      user.viewedLeads = []; // Clear viewed leads history
    }

    if (!user.isPremium && user.leadsViewed >= 25) {
      return res.status(403).json({ error: "Lead view limit reached" });
    }

    user.leadsViewed += 1;
    user.viewedLeads.push({ buyerName, mobileNo, email });
    await user.save();

    res.status(200).json({ leadsViewed: user.leadsViewed });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage }).array("images");

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
    res.status(500).json({ error: "Internal server error" });
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
// Function to get user information by ID along with premium status
// exports.getUserWithPremiumStatus = async (req, res) => {
//     const userId = req.params.id;
//     try {
//         // Find the user by ID
//         const user = await User.findById(userId);
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         // Return user information along with premium status
//         res.status(200).json({ user, isPremium: user.plan === 'Premium' });
//     } catch (error) {
//         res.status(500).json({ message: 'Internal server error', error });
//     }
// };

exports.getUserWithPremiumStatus = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check and reset leadsViewed if needed
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    if (user.leadsResetDate < oneMonthAgo) {
      user.leadsViewed = 0;
      user.leadsResetDate = new Date();
      await user.save();
    }

    res.status(200).json({
      isPremium: user.plan === "Premium",
      leadsViewed: user.leadsViewed,
    });
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

      const updateData = {
        name: req.body.name,
        email: req.body.email,
        mobileNumber: req.body.mobileNumber,
        companyName: req.body.companyName,
        productOrService: req.body.productOrService,
        gstNumber: req.body.gstNumber,
        // Merge existing images with new ones
        images: [...user.images, ...req.files.map((file) => file.path)],
      };

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

    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    if (!user.leadsResetDate || user.leadsResetDate < oneMonthAgo) {
      user.leadsViewed = 0;
      user.leadsResetDate = new Date();
      user.viewedLeads = [];
      await user.save();
    }

    res.status(200).json({
      isPremium: user.plan?.toLowerCase() === "premium",
      leadsViewed: user.leadsViewed,
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

    const users = await User.find({ role: role }).select('name email mobileNumber companyName cityname statename productOrService role images plan').lean();

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
exports.incrementLeadsViewed = async (req, res) => {
  const { userId } = req.params;
  const { buyerName, mobileNo, email } = req.body;

  try {
    const user = await User.findById(userId);

    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    if (!user.leadsResetDate || user.leadsResetDate < oneMonthAgo) {
      user.leadsViewed = 0;
      user.leadsResetDate = new Date();
      user.viewedLeads = [];
    }

    if (user.plan?.toLowerCase() !== "premium") {
      return res
        .status(403)
        .json({ error: "Upgrade to Premium to view leads" });
    }

    if (user.leadsViewed >= 25) {
      return res.status(403).json({ error: "Lead view limit reached" });
    }

    user.leadsViewed += 1;
    user.viewedLeads.push({ buyerName, mobileNo, email });
    await user.save();

    res.status(200).json({ leadsViewed: user.leadsViewed });
  } catch (error) {
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
