const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET endpoint to retrive products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    }catch(error){
        res.status(500).json({ message : error.message });
    }
});

// POST endpoint for posting new products to the database
router.post('/', async (req, res) => {
    const newItem = new Product(req.body); // Replace YourModel with User or Product
    try {
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE endpoint for deleting the products using their _id
router.delete('/:id', async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// PUT endpoint to update an existing product
router.put('/:id', async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;