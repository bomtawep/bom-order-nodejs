"use strict";
const getOrdersModel = require('./getOrders');
const createOrderModel = require('./createOrder');
const deleteOrderModel = require('./deleteOrder');
const getOrderModel = require('./getOrder');
const updateOrderModel = require('./updateOrder');
const getOrders = (res) => {
    getOrdersModel.getOrdersPool(res);
};
const createOrder = (req, res) => {
    createOrderModel.createOrderPool(req, res);
};
const deleteOrder = (req, res) => {
    deleteOrderModel.deleteOrderPool(req, res);
};
const getOrder = (req, res) => {
    getOrderModel.getOrderPool(req, res);
};
const updateOrder = (req, res) => {
    updateOrderModel.updateOrderPool(req, res);
};
module.exports = {
    getOrders,
    createOrder,
    deleteOrder,
    getOrder,
    updateOrder
};
