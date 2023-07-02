const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "is required"]
    },
    description: {
        type: String,
        required: [true, "is required"]
    },
    price: {
        type: String,
        required: [true, "is required"]
    },
    quantity: {
        type: Number,
        required: [true, "is required"]
    },
    category: {
        type: String,
        required: [true, "name is required"]
    },
    pictures: {
        type: Array,
        required: true
    },
}, {minimize: false}
);

const Product = mongoose.model('Product',ProductSchema);

module.exports = Product;