// controllers/buyerController.js

const Buyer = require('../models/buyermodel');

exports.registerBuyer = async (req, res) => {
    try {
        const buyerForm = new Buyer(req.body);
        await buyerForm.save();
        res.status(201).send(buyerForm);
    } catch (error) {
        console.error('Error saving buyer information:', error);
        res.status(500).json({ 
            message: 'Internal Server Error',
            error: error.message 
        });
    }
};

// Get all buyers
exports.getAllBuyers = async (req, res) => {
    try {
        const buyers = await Buyer.find({ approved: true }).lean();
        if (!buyers || buyers.length === 0) {
            return res.status(200).json({
                message: 'No buyers found',
                buyers: []
            });
        }
        res.status(200).json({
            message: 'Buyers fetched successfully',
            buyers: buyers
        });
    } catch (error) {
        console.error('Error fetching buyers:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get buyer by ID
exports.getBuyerById = async (req, res) => {
    try {
        const buyer = await Buyer.findById(req.params.id);
        if (!buyer) {
            return res.status(404).json({ message: 'Buyer not found' });
        }
        res.status(200).json({
            message: 'Buyer fetched successfully',
            buyer: buyer
        });
    } catch (error) {
        console.error('Error fetching buyer:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
// Delete buyer
exports.deleteBuyer = async (req, res) => {
    try {
        const buyer = await Buyer.findByIdAndDelete(req.params.id);
        if (!buyer) {
            return res.status(404).json({ message: 'Buyer not found' });
        }
        res.status(200).json({ message: 'Buyer deleted successfully' });
    } catch (error) {
        console.error('Error deleting buyer:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
