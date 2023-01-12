"use strict";
const getOrderListsModel = require('./getOrderLists');
const createOrderListModel = require('./createOrderList');
const deleteOrderListModel = require('./deleteOrderList');
const getOrderListModel = require('./getOrderList');
const updateOrderListModel = require('./updateOrderList');
const getOrderLists = (res) => {
    getOrderListsModel.getOrderListsPool(res);
};
const createOrderList = (req, res) => {
    createOrderListModel.createOrderListPool(req, res);
};
const deleteOrderList = (req, res) => {
    deleteOrderListModel.deleteOrderListPool(req, res);
};
const getOrderList = (req, res) => {
    getOrderListModel.getOrderListPool(req, res);
};
const updateOrderList = (req, res) => {
    updateOrderListModel.updateOrderListPool(req, res);
};
module.exports = {
    getOrderLists,
    createOrderList,
    deleteOrderList,
    getOrderList,
    updateOrderList
};
