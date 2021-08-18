// For web server like "app"
const express = require('express');

// for mongoDB store and retreive data
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const data = require('./data');



const app = express();

// Post request for new products and for post we use two middle ware above
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Using this env process connect with .env file haveing MONGODB_URI
dotenv.config();

// Connect with mongo DB
mongoose.connect(process.env.MONDODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});


// Create a Model (Information about the dominating thing in this case we have Product)
const Product = mongoose.model('Product',
    new mongoose.Schema({
        name: String,
        description: String,
        image: String,
        price: Number,
        calorie: Number,
        category: String,
    })
);

// Make seeder for product / Response
app.get('/api/products/seed', async(req, res) => {
    const products = await Product.insertMany(data.products);
    res.send({ products });
})

// For products based on categories
app.get('/api/products', async(req, res) => {
    const { category } = req.query;
    const products = await Product.find(category ? { category } : {});
    res.send(products);
})

// Post request for new products and for post we use two middle ware above
app.post('/api/products', async(req, res) => {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.send(savedProduct);
})

// Response request
app.get('/api/categories', (req, res) => {
    res.send(data.categories);
})


// port 
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);
})