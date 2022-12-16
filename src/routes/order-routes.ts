import express from 'express'
const orders = require('../controllers/order')
const routeAcc = express.Router()

routeAcc.get('/orders', function(req: any, res: any) {
    orders.getOrders(res)
});
routeAcc.post('/order', function(req: any, res: any) {
    orders.createOrder(req, res)
});
routeAcc.delete('/order', function(req: any, res: any) {
    orders.deleteOrder(req, res)
});
routeAcc.get('/order/:id', function(req: any, res: any) {
    orders.getOrder(req, res)
});
routeAcc.put('/order/:id', function(req: any, res: any) {
    orders.updateOrder(req, res)
});

module.exports = routeAcc;