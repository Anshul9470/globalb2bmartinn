const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.post("/admin/signup", adminController.adminSignup);
router.post("/admin/login", adminController.adminLogin);
router.get("/admin/stats", adminController.getDashboardStats);
router.get("/admin/analysis", adminController.getMonthlyAnalysis);
router.post("/share-leads", adminController.shareLeads);

// Buyer Approval Routes
router.get("/admin/pending-buyers", adminController.getPendingBuyers);
router.put("/admin/approve-buyer/:buyerId", adminController.approveBuyer);

module.exports = router;
