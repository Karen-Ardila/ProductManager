// Import dependencies
const Router = require('express').Router;
const productController = require('../controllers/product.controller');

// Create router for products 
const router = Router();

// Add routes
router.post('/', productController.createProduct);
router.get('/', productController.getAllProducts);

// Export the router
module.exports = router;