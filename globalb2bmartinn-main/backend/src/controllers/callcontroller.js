const Call = require('../models/callmodel');

exports.submitCall = async (req, res) => {
    try {
        const callData = req.body;
        const call = new Call(callData);
        await call.save();
        res.status(201).json({ message: 'Call submitted successfully', data: call });
    } catch (error) {
        res.status(400).json({ message: 'Error submitting call', error });
    }
};
