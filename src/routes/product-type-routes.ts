import express from 'express'
const product_types = require('../controllers/product_type')
const routeAcc = express.Router()

routeAcc.get('/product-types', function(req: any, res: any) {
    product_types.getProductTypes(res)
});
routeAcc.post('/product-type', function(req: any, res: any) {
    product_types.createProductType(req, res)
});
routeAcc.delete('/product-type', function(req: any, res: any) {
    product_types.deleteProductType(req, res)
});
routeAcc.get('/product-type/:id', function(req: any, res: any) {
    product_types.getProductType(req, res)
});
routeAcc.put('/product-type/:id', function(req: any, res: any) {
    product_types.updateProductType(req, res)
});

module.exports = routeAcc;