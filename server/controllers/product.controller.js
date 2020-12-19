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
        .then(products => res.json({ products }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}
module.exports.updateProduct = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body)
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}
module.exports.getProductById = (req, res) => {
    Product.findById(req.params.id)
        .then(product => res.json(product))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}
module.exports.deleteProductById = (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(deletedProduct => res.json(deletedProduct))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}