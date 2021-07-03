const express = require('express');
// const products = require('../products.json');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');

const app = express();
const PORT = 5000;


app.get('/api/products', getProducts);
app.get('/api/products/:id', getProduct)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));