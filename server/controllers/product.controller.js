// Import our model
const Product = require('../models/product.model');

// Fuction to create a new product
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json(newProduct))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}
module.exports.getAllProducts = (req, res) => {
    Product.find({})
        .then(products => res.json({products}))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}