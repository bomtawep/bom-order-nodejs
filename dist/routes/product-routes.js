"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const orders = require('../controllers/order');
const routeAcc = express_1.default.Router();
routeAcc.get('/orders', function (req, res) {
    orders.getOrders(res);
});
routeAcc.post('/order', function (req, res) {
    orders.createOrder(req, res);
});
routeAcc.delete('/order', function (req, res) {
    orders.deleteOrder(req, res);
});
routeAcc.get('/order/:id', function (req, res) {
    orders.getOrder(req, res);
});
routeAcc.put('/order/:id', function (req, res) {
    orders.updateOrder(req, res);
});
module.exports = routeAcc;
