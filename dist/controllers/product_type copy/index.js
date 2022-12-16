"use strict";
const getProductTypesModel = require('./getProductTypes');
const createProductTypeModel = require('./createProductType');
const deleteProductTypeModel = require('./deleteProductType');
const getProductTypeModel = require('./getProductType');
const updateProductTypeModel = require('./updateProductType');
const getProductTypes = (res) => {
    getProductTypesModel.getProductTypesPool(res);
};
const createProductType = (req, res) => {
    createProductTypeModel.createProductTypePool(req, res);
};
const deleteProductType = (req, res) => {
    deleteProductTypeModel.deleteProductTypePool(req, res);
};
const getProductType = (req, res) => {
    getProductTypeModel.getProductTypePool(req, res);
};
const updateProductType = (req, res) => {
    updateProductTypeModel.updateProductTypePool(req, res);
};
module.exports = {
    getProductTypes,
    createProductType,
    deleteProductType,
    getProductType,
    updateProductType
};
