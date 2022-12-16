"use strict";
const getProductsModel = require('./getProducts');
const createProductModel = require('./createProduct');
const deleteProductModel = require('./deleteProduct');
const getProductModel = require('./getProduct');
const updateProductModel = require('./updateProduct');
const getProducts = (res) => {
    getProductsModel.getProductsPool(res);
};
const createProduct = (req, res) => {
    createProductModel.createProductPool(req, res);
};
const deleteProduct = (req, res) => {
    deleteProductModel.deleteProductPool(req, res);
};
const getProduct = (req, res) => {
    getProductModel.getProductPool(req, res);
};
const updateProduct = (req, res) => {
    updateProductModel.updateProductPool(req, res);
};
module.exports = {
    getProducts,
    createProduct,
    deleteProduct,
    getProduct,
    updateProduct
};
