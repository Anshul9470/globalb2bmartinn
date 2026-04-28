// models/formModel.js

const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    subCategory: {
        type: String
    },
    userType: {
        type: String,
        enum: ['seller', 'buyer'],
        required: true
    }
});

module.exports = mongoose.models.Form || mongoose.model('Form', formSchema);
