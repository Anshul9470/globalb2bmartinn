const mongoose = require('mongoose');

const productDetailSchema = new mongoose.Schema({
    title: {
        type: [String],
        required: true
    },
    description: {
        type: [String],
        required: true
    },
    images: [{
        type: [String],
        required: true
    }]
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
