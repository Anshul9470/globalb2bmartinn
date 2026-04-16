// routes/buyerRoutes.js

const express = require('express');
const router = express.Router();
const buyerController = require('../controllers/buyercontroller');


router.post('/register-buyer', buyerController.registerBuyer);
router.get('/buyers', buyerController.getAllBuyers);
router.get('/buyer/:id', buyerController.getBuyerById);
router.delete('/delete-buyer/:id', buyerController.deleteBuyer);




module.exports = router;
