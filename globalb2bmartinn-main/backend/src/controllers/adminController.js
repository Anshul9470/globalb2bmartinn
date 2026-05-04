const User = require("../models/usermodel");
const Buyer = require("../models/buyermodel");
const Product = require("../models/product");

const ADMIN_SECRET_KEY = process.env.ADMIN_SECRET_KEY || "GLOBAL@ADMIN2024";

// Admin Signup
exports.adminSignup = async (req, res) => {
  const { name, password, secretKey } = req.body;
  const email = req.body.email?.toLowerCase().trim();
  const trimmedPassword = password?.trim();

  console.log(`[AdminSignup] Attempting registration for: ${email}`);

  try {
    if (secretKey?.trim() !== ADMIN_SECRET_KEY) {
      console.log(`[AdminSignup] Invalid secret key provided for: ${email}`);
      return res.status(403).json({ error: "Invalid Secret Admin Key" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const admin = await User.create({
      name,
      email,
      password: trimmedPassword,
      role: "admin",
    });

    res.status(201).json({ message: "Admin registered successfully", user: admin });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Admin Login
exports.adminLogin = async (req, res) => {
  const email = req.body.email?.toLowerCase().trim();
  const password = req.body.password?.trim();

  console.log(`[AdminLogin] DEBUG: Attempting login for email: "${email}"`);

  try {
    // First, find ANY user with this email to see if they exist
    const user = await User.findOne({ email });
    
    if (!user) {
      console.log(`[AdminLogin] DIAGNOSTIC: No account found for email "${email}"`);
      return res.status(401).json({ error: "Invalid Admin Credentials (User Not Found)" });
    }

    console.log(`[AdminLogin] DIAGNOSTIC: Account found. Role: "${user.role}"`);

    if (user.role !== "admin") {
      console.log(`[AdminLogin] DIAGNOSTIC: Role mismatch! This user is a "${user.role}", not an "admin".`);
      return res.status(401).json({ error: "Invalid Admin Credentials (Account exists but is not an Admin)" });
    }

    if (user.password !== password) {
      console.log(`[AdminLogin] DIAGNOSTIC: Password mismatch for user "${email}"`);
      // For security, don't tell the user which one is wrong, but log it for us
      return res.status(401).json({ error: "Invalid Admin Credentials (Incorrect Password)" });
    }

    console.log(`[AdminLogin] Success for admin: "${email}"`);
    
    // Create a safe user object to avoid circular references/large data
    const safeUser = {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      plan: user.plan
    };

    res.status(200).json({ 
      message: "Admin login successful", 
      user: safeUser 
    });
  } catch (error) {
    console.error(`[AdminLogin] EXCEPTION:`, error);
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

// Share Leads with Supplier
exports.shareLeads = async (req, res) => {
  try {
    const { targetUserId, leads } = req.body;

    if (!targetUserId || !leads || leads.length === 0) {
      return res.status(400).json({ error: "Target user ID and leads are required" });
    }

    // Find target user
    const targetUser = await User.findById(targetUserId);
    if (!targetUser) {
      return res.status(404).json({ error: "Target user not found" });
    }

    // Log the shared leads
    console.log(`[ShareLeads] Leads shared with user: ${targetUser.email}`);
    console.log(`[ShareLeads] Number of leads: ${leads.length}`);
    console.log(`[ShareLeads] Leads data:`, JSON.stringify(leads, null, 2));

    // Persist the leads to the target user's viewedLeads array
    const leadsWithDate = leads.map(l => ({
      ...l,
      dateViewed: new Date()
    }));

    await User.findByIdAndUpdate(targetUserId, {
      $push: { viewedLeads: { $each: leadsWithDate } }
    });

    res.status(200).json({ 
      message: `Successfully shared ${leads.length} leads with ${targetUser.companyName || targetUser.name}`,
      success: true,
      sharedWith: targetUser.name,
      leadsCount: leads.length
    });
  } catch (error) {
    console.error("[ShareLeads] Error:", error);
    res.status(500).json({ error: "Failed to share leads: " + error.message });
  }
};

// Get Pending Buyers
exports.getPendingBuyers = async (req, res) => {
  try {
    const pendingBuyers = await Buyer.find({ approved: false }).sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      buyers: pendingBuyers
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch pending buyers" });
  }
};

// Approve Buyer
exports.approveBuyer = async (req, res) => {
  try {
    const { buyerId } = req.params;
    const buyer = await Buyer.findByIdAndUpdate(buyerId, { approved: true }, { new: true });
    if (!buyer) {
      return res.status(404).json({ error: "Buyer not found" });
    }
    res.status(200).json({
      message: "Buyer approved successfully",
      success: true,
      buyer
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to approve buyer" });
  }
};
