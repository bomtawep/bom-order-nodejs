import express from 'express'
const order_lists = require('../controllers/order_list')
const routeAcc = express.Router()

routeAcc.get('/order-lists', function(req: any, res: any) {
    order_lists.getOrderLists(res)
});
routeAcc.post('/order-list', function(req: any, res: any) {
    order_lists.createOrderList(req, res)
});
routeAcc.delete('/order-list', function(req: any, res: any) {
    order_lists.deleteOrderList(req, res)
});
routeAcc.get('/order-list/:id', function(req: any, res: any) {
    order_lists.getOrderList(req, res)
});
routeAcc.put('/order-list/:id', function(req: any, res: any) {
    order_lists.updateOrderList(req, res)
});

module.exports = routeAcc;