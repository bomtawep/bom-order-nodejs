"use strict";
const getOrderItemsModel = require('./getOrderItems');
const createOrderItemModel = require('./createOrderItem');
const deleteOrderItemModel = require('./deleteOrderItem');
const getOrderItemModel = require('./getOrderItem');
const updateOrderItemModel = require('./updateOrderItem');
const getOrderItems = (res) => {
    getOrderItemsModel.getOrderItemsPool(res);
};
const createOrderItem = (req, res) => {
    createOrderItemModel.createOrderItemPool(req, res);
};
const deleteOrderItem = (req, res) => {
    deleteOrderItemModel.deleteOrderItemPool(req, res);
};
const getOrderItem = (req, res) => {
    getOrderItemModel.getOrderItemPool(req, res);
};
const updateOrderItem = (req, res) => {
    updateOrderItemModel.updateOrderItemPool(req, res);
};
module.exports = {
    getOrderItems,
    createOrderItem,
    deleteOrderItem,
    getOrderItem,
    updateOrderItem
};
