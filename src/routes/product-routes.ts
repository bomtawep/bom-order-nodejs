import express from 'express'
const products = require('../controllers/product')
const routeAcc = express.Router()

routeAcc.get('/products', function(req: any, res: any) {
    products.getProducts(res)
});
routeAcc.post('/product', function(req: any, res: any) {
    products.createProduct(req, res)
});
routeAcc.delete('/product', function(req: any, res: any) {
    products.deleteProduct(req, res)
});
routeAcc.get('/product/:id', function(req: any, res: any) {
    products.getProduct(req, res)
});
routeAcc.put('/product/:id', function(req: any, res: any) {
    products.updateProduct(req, res)
});

module.exports = routeAcc;