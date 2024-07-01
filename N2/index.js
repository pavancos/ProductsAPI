const express = require('express');
const app = express();

app.use(express.json());

const products = [
    {
        id: 1,
        name: 'Mobile',
        price: 56000,
        quantity: 1
    },
    {
        id: 2,
        name: 'Laptop',
        price: 69000,
        quantity: 1
    },
    {
        id: 3,
        name: 'Bag',
        price: 2000,
        quantity: 2
    }
];

app.post('/product', (req, res) => {
    const product = req.body;
    products.push(product);
    res.send({
        message: 'Product added successfully',
        payload: products
    });
});

app.get('/products', (req, res) => {
    res.send({
        message: 'All products',
        payload: products
    });
});

app.get('/product/:id', (req, res) => {
    let id = req.params.id;
    const product = products.find(p => p.id == id);
    if (!product) {
        res.send({
            message: 'Product not found'
        });
    }
    res.send({
        message: 'Product found',
        payload: product
    });
});

app.put('/product/:id', (req, res) => {
    let id = req.params.id;
    const product = products.find(p => p.id == id);
    if (!product) {
        res.send({
            message: 'Product not found'
        });
    }
    product.name = req.body.name;
    product.price = req.body.price;
    product.quantity = req.body.quantity;
    res.send({
        message: 'Product updated successfully',
        payload: product
    });
});

app.delete('/product/:id', (req, res) => {
    let id = req.params.id;
    const product = products.find(p => p.id == id);
    if (!product) {
        res.send({
            message: 'Product not found'
        });
    }
    const index = products.indexOf(product);
    products.splice(index, 1);
    res.send({
        message: 'Product deleted successfully',
        payload: products
    });
});

app.listen(3500, () => {
    console.log('Server is running on port http://localhost:3500');
});