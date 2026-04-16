// models/payodel.js

const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('PayForm', formSchema);
