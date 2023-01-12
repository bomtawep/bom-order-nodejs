"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_items = require('../controllers/order_item');
const routeAcc = express_1.default.Router();
routeAcc.get('/order-items', function (req, res) {
    order_items.getOrderItems(res);
});
routeAcc.post('/order-item', function (req, res) {
    order_items.createOrderItem(req, res);
});
routeAcc.delete('/order-item', function (req, res) {
    order_items.deleteOrderItem(req, res);
});
routeAcc.get('/order-item/:id', function (req, res) {
    order_items.getOrderItem(req, res);
});
routeAcc.put('/order-item/:id', function (req, res) {
    order_items.updateOrderItem(req, res);
});
module.exports = routeAcc;
