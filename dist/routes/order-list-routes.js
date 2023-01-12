"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_lists = require('../controllers/order_list');
const routeAcc = express_1.default.Router();
routeAcc.get('/order-lists', function (req, res) {
    order_lists.getOrderLists(res);
});
routeAcc.post('/order-list', function (req, res) {
    order_lists.createOrderList(req, res);
});
routeAcc.delete('/order-list', function (req, res) {
    order_lists.deleteOrderList(req, res);
});
routeAcc.get('/order-list/:id', function (req, res) {
    order_lists.getOrderList(req, res);
});
routeAcc.put('/order-list/:id', function (req, res) {
    order_lists.updateOrderList(req, res);
});
module.exports = routeAcc;
