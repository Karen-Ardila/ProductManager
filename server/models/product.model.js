// Import mongoose
const mongoose = require("mongoose");

// Create the schema for product
const ProductSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
});

// Create the model for product using mongoose
const Product = mongoose.model("product", ProductSchema);

// Export model
module.exports = Product;