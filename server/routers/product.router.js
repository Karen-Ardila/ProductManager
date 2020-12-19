// Import dependencies
const Router = require('express').Router;
const productController = require('../controllers/product.controller');

// Create router for products 
const router = Router();

// Add routes all routes here already start with /api/products
router.post('/', productController.createProduct);
router.get('/', productController.getAllProducts);
router.put('/:id', productController.updateProduct);
router.get('/:id', productController.getProductById);
router.delete('/:id', productController.deleteProductById);

// Export the router
module.exports = router;