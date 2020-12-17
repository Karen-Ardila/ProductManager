// Import dependencies
const Router = require('express').Router;
const productController = require('../controllers/product.controller');

// Create router for products 
const router = Router();

// Add routes
router.post('/', productController.createProduct);

// Export the router
module.exports = router;