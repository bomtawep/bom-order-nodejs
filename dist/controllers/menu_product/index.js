"use strict";
const getMenuProductsModel = require('./getMenuProducts');
const createMenuProductModel = require('./createMenuProduct');
const deleteMenuProductModel = require('./deleteMenuProduct');
const getMenuProductModel = require('./getMenuProduct');
const updateMenuProductModel = require('./updateMenuProduct');
const getMenuProducts = (res) => {
    getMenuProductsModel.getMenuProductsPool(res);
};
const createMenuProduct = (req, res) => {
    createMenuProductModel.createMenuProductPool(req, res);
};
const deleteMenuProduct = (req, res) => {
    deleteMenuProductModel.deleteMenuProductPool(req, res);
};
const getMenuProduct = (req, res) => {
    getMenuProductModel.getMenuProductPool(req, res);
};
const updateMenuProduct = (req, res) => {
    updateMenuProductModel.updateMenuProductPool(req, res);
};
module.exports = {
    getMenuProducts,
    createMenuProduct,
    deleteMenuProduct,
    getMenuProduct,
    updateMenuProduct
};
