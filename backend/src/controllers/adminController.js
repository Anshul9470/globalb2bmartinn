const User = require("../models/usermodel");
const Buyer = require("../models/buyermodel");
const Product = require("../models/product");

const ADMIN_SECRET_KEY = process.env.ADMIN_SECRET_KEY || "GLOBAL@ADMIN2024";

// Admin Signup
exports.adminSignup = async (req, res) => {
  const { name, email, password, secretKey } = req.body;

  try {
    if (secretKey !== ADMIN_SECRET_KEY) {
      return res.status(403).json({ error: "Invalid Secret Admin Key" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const admin = await User.create({
      name,
      email,
      password,
      role: "admin",
    });

    res.status(201).json({ message: "Admin registered successfully", user: admin });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Admin Login
exports.adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await User.findOne({ email, role: "admin" });
    if (!admin || admin.password !== password) {
      return res.status(401).json({ error: "Invalid admin credentials" });
    }

    res.status(200).json({ message: "Admin login successful", user: admin });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get Dashboard Stats (Enhanced with Analysis)
exports.getDashboardStats = async (req, res) => {
  try {
    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);

    // Basic totals
    const totalSellers = await User.countDocuments({ role: "seller" });
    const totalBuyers = await Buyer.countDocuments();
    const totalProducts = await Product.countDocuments();

    // Today's activity
    const todaySellers = await User.countDocuments({ role: "seller", createdAt: { $gte: startOfToday } });
    const todayBuyers = await Buyer.countDocuments({ createdAt: { $gte: startOfToday } });

    // Tier Breakdown
    const premiumSellers = await User.countDocuments({ role: "seller", plan: "Premium" });
    const advancedSellers = await User.countDocuments({ role: "seller", plan: "Advanced" });
    const standardSellers = await User.countDocuments({ role: "seller", plan: "Standard" });
    const freeSellers = await User.countDocuments({ role: "seller", plan: "Free" });

    const recentSellers = await User.find({ role: "seller" }).sort({ _id: -1 }).limit(5);
    const recentBuyers = await Buyer.find().sort({ _id: -1 }).limit(5);

    res.status(200).json({
      stats: {
        totalSellers,
        totalBuyers,
        totalProducts,
        todaySellers,
        todayBuyers,
        breakdown: {
            premium: premiumSellers,
            advanced: advancedSellers,
            standard: standardSellers,
            free: freeSellers
        }
      },
      recentActivity: {
        sellers: recentSellers,
        buyers: recentBuyers,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Monthly Data Analysis Aggregation
exports.getMonthlyAnalysis = async (req, res) => {
    try {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        
        // Aggregate Seller Data by Month and Plan
        const sellerData = await User.aggregate([
            { $match: { role: 'seller' } },
            {
                $group: {
                    _id: { 
                        month: { $month: "$createdAt" }, 
                        year: { $year: "$createdAt" },
                        plan: "$plan" 
                    },
                    count: { $sum: 1 }
                }
            },
            { $sort: { "_id.year": 1, "_id.month": 1 } }
        ]);

        // Aggregate Buyer Data by Month
        const buyerData = await Buyer.aggregate([
            {
                $group: {
                    _id: { 
                        month: { $month: "$createdAt" }, 
                        year: { $year: "$createdAt" }
                    },
                    count: { $sum: 1 }
                }
            }
        ]);

        // Aggregate Seller Data by State
        const sellerStates = await User.aggregate([
            { $match: { role: 'seller' } },
            {
                $group: {
                    _id: { $toLower: "$statename" },
                    count: { $sum: 1 }
                }
            }
        ]);

        // Aggregate Buyer Data by State
        const buyerStates = await Buyer.aggregate([
            {
                $group: {
                    _id: { $toLower: "$statename" },
                    count: { $sum: 1 }
                }
            }
        ]);

        // Merge distributions into a single timeline
        const analysis = {};
        const stateDistribution = {};
        
        // Populate state distribution
        sellerStates.forEach(item => {
            if (!item._id) return;
            stateDistribution[item._id] = { 
                state: item._id, 
                sellers: item.count, 
                buyers: 0 
            };
        });

        buyerStates.forEach(item => {
            if (!item._id) return;
            if (!stateDistribution[item._id]) {
                stateDistribution[item._id] = { state: item._id, sellers: 0, buyers: 0 };
            }
            stateDistribution[item._id].buyers += item.count;
        });

        sellerData.forEach(item => {
            if (!item._id.month) return; // Skip records without date
            const key = `${months[item._id.month - 1]} ${item._id.year}`;
            if (!analysis[key]) {
                analysis[key] = { month: key, free: 0, standard: 0, advanced: 0, premium: 0, buyers: 0 };
            }
            const planKey = (item._id.plan || 'Free').toLowerCase();
            analysis[key][planKey] = (analysis[key][planKey] || 0) + item.count;
        });

        buyerData.forEach(item => {
            if (!item._id.month) return;
            const key = `${months[item._id.month - 1]} ${item._id.year}`;
            if (!analysis[key]) {
                analysis[key] = { month: key, free: 0, standard: 0, advanced: 0, premium: 0, buyers: 0 };
            }
            analysis[key].buyers += item.count;
        });

        // Convert to sorted array
        const sortedAnalysis = Object.values(analysis).sort((a, b) => {
            const [m1, y1] = a.month.split(' ');
            const [m2, y2] = b.month.split(' ');
            const d1 = new Date(y1, months.indexOf(m1));
            const d2 = new Date(y2, months.indexOf(m2));
            return d1 - d2;
        });

        res.status(200).json({ 
            analysis: sortedAnalysis,
            stateDistribution: Object.values(stateDistribution)
        });
    } catch (error) {
        console.error("Analysis Error:", error);
        res.status(500).json({ error: "Analysis aggregation failed" });
    }
};
