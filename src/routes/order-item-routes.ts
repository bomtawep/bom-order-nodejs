import express from 'express'
const order_items = require('../controllers/order_item')
const routeAcc = express.Router()

routeAcc.get('/order-items', function(req: any, res: any) {
    order_items.getOrderItems(res)
});
routeAcc.post('/order-item', function(req: any, res: any) {
    order_items.createOrderItem(req, res)
});
routeAcc.delete('/order-item', function(req: any, res: any) {
    order_items.deleteOrderItem(req, res)
});
routeAcc.get('/order-item/:id', function(req: any, res: any) {
    order_items.getOrderItem(req, res)
});
routeAcc.put('/order-item/:id', function(req: any, res: any) {
    order_items.updateOrderItem(req, res)
});

module.exports = routeAcc;