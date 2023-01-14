const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: String,
    price: Number,
    company: String,
    userId: String,
    category: String,
});

module.exports = mongoose.model('products', ProductSchema);