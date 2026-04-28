// const express = require('express');
// const router = express.Router();
// const UserController = require('../controllers/usercontroller');

// router.post('/register', UserController.registerUser);
// router.post('/login', UserController.loginUser);
// router.post('/find', UserController.findUserByEmailAndPassword);


// module.exports = router;
// const express = require('express');
// const router = express.Router();
// const UserController = require('../controllers/usercontroller');

// router.post('/register', UserController.registerUser);
// router.post('/login', UserController.loginUser);
// router.post('/find', UserController.findUserByEmailAndPassword);
// router.get('/login', UserController.getUserById); // New route for fetching user details by ID

// module.exports = router;
// const express = require('express');
// const router = express.Router();
// const UserController = require('../controllers/usercontroller');

// router.post('/register', UserController.registerUser);
// router.post('/login', UserController.loginUser);
// router.post('/find', UserController.findUserByEmailAndPassword);
// router.get('/login', UserController.getUserById); // Route for fetching user details by ID
// router.put('/update/:id', UserController.updateUserById); // Route for updating user details by ID

// router.put('/update-plan', UserController.updateUserPlan);


// module.exports = router;
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/usercontroller');

router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);
router.post('/find', UserController.findUserByEmailAndPassword);
router.get('/login', UserController.getUserById); // Route for fetching user details by ID
router.put('/update/:id', UserController.updateUserById); // Route for updating user details by ID
router.put('/update-plan', UserController.updateUserPlan);
router.get('/getUserWithPremiumStatus/:id', UserController.getUserWithPremiumStatus);
// router.put('/update-product/:id', UserController.updateUserProduct);
router.post('/incrementLeadsViewed/:userId', UserController.incrementLeadsViewed);

// New route to get viewed leads
router.get('/viewedLeads/:userId', UserController.getViewedLeads);

// In userrouter.js
router.put('/update-gst/:id', UserController.updateUserGST);

router.post('/send-otp', UserController.sendOTP); // Route to send OTP to user's email
router.post('/reset-password', UserController.resetPassword); // Route to reset password using OTP

// Route to get users by role
router.get('/by-role/:role', UserController.getUsersByRole);
router.get('/by-category/:category', UserController.getSellersByCategory);
router.delete('/delete-user/:id', UserController.deleteUser);
router.post('/share-leads', UserController.shareLeads);
router.get('/test-route', (req, res) => res.send('Backend is updated!'));

module.exports = router;




