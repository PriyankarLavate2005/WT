require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const Product=require('../generated_backend/Modals/ProductSchema')
const seedDatabase=require('../generated_backend/Modals/availableproducts')
const connectDB=require('./Modals/DB')

app.use(express.json());
app.use(cors()); // Use the cors middleware
connectDB()
// Function to seed initial data into the database
// Seed the database on server startup
seedDatabase();
const asyncHandler = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
app.get('/api/products', asyncHandler(async (req, res) => {
  const allProducts = await Product.find();
  res.json(allProducts);
}));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
