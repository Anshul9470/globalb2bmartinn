const mongoose = require('mongoose');

const productDetailSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    images: {
        type: [String],
        required: true
    },
    category: {
        type: String,
        default: 'General'
    },
    subCategory: {
        type: String,
        default: 'General'
    },
    country: {
        type: String,
        default: 'India'
    },
    state: {
        type: String,
        default: ''
    },
    city: {
        type: String,
        default: ''
    },
    experience: {
        type: String,
        default: ''
    },
    price: {
        type: String,
        default: ''
    },
    unit: {
        type: String,
        default: 'kg'
    },
    moq: {
        type: String,
        default: ''
    },
    isPublished: {
        type: Boolean,
        default: false
    }
});

const productSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: [productDetailSchema]
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
