"use strict";
const getCussModel = require('./getCuss');
const createCusModel = require('./createCus');
const deleteCusModel = require('./deleteCus');
const getCusModel = require('./getCus');
const updateCusModel = require('./updateCus');
const getCuss = (res) => {
    getCussModel.getCussPool(res);
};
const createCus = (req, res) => {
    createCusModel.createCusPool(req, res);
};
const deleteCus = (req, res) => {
    deleteCusModel.deleteCusPool(req, res);
};
const getCus = (req, res) => {
    getCusModel.getCusPool(req, res);
};
const updateCus = (req, res) => {
    updateCusModel.updateCusPool(req, res);
};
module.exports = {
    getCuss,
    createCus,
    deleteCus,
    getCus,
    updateCus
};
