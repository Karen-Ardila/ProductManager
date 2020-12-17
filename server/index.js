// Import what we need
const express = require('express');
const cors = require('cors');
const port = 8000;
const productRouter = require('./routers/product.router');

// Create the express app 
const app = express()

// Connect the database
require('./config/mongoose.config');

// Add middleware
app.use(express.json())
app.use(cors())

// Create the routes
app.use('/api/products', productRouter);

// Start the app 
app.listen(port,() => {
    console.log(`listening on port ${port}`)
})