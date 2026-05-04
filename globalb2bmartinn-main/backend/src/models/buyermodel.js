const mongoose = require('mongoose');
const validator = require('validator');

// Define the schema for the Buyer
const buyerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        trim: true // Automatically remove whitespace from both ends of the string
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: validator.isEmail,
            message: 'Invalid email format'
        },
        trim: true,
        lowercase: true
    },
    mobileNumber: {
        type: String,
        validate: {
            validator: function (value) {
                // Validate that the phone number is exactly 10 digits
                // return /^\d{10}$/.test(value);
                return /^\+?\d{10,15}$/.test(value);
            },
            message: 'Invalid phone number. It must be exactly 10 digits.'
        },
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: false,
        trim: true
    },
    statename: {
        type: String,
        required: false,
        trim: true
    },
    productOrService: {
        type: String,
        required: true,
        trim: true
    },
    quantity: {
        type: Number,
        required: true,
        min: [0, 'Quantity must be a positive number']
    },
    unit: {
        type: String,
        required: false,
        enum: ['kg', 'pcs', 'dozen', 'meter', 'ton', 'liter', 'container'], // Enumerate the valid units
        trim: true
    },
    country: {
        type: String,
        default: 'India',
        trim: true
    },
    category: {
        type: String,
        trim: true
    },
    subCategory: {
        type: String,
        trim: true
    },
    approved: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

// Create and export the Buyer model
const Buyer = mongoose.model('Buyer', buyerSchema);

module.exports = Buyer;
