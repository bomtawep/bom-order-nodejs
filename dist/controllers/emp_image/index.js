"use strict";
const createEmpImageModel = require('./createEmpImage');
const getEmpImageModel = require('./getEmpImage');
const getEmpImagesModel = require('./getEmpImages');
const deleteEmpImageModel = require('./deleteEmpImage');
const updateEmpImageModel = require('./updateEmpImage');
const createEmpImage = (req, res) => {
    createEmpImageModel.createEmpImagePool(req, res);
};
const getEmpImage = (req, res) => {
    getEmpImageModel.getEmpImagePool(req, res);
};
const getEmpImages = (res) => {
    getEmpImagesModel.getEmpImagesPool(res);
};
const deleteEmpImage = (req, res) => {
    deleteEmpImageModel.deleteEmpImagePool(req, res);
};
const updateEmpImage = (req, res) => {
    updateEmpImageModel.updateEmpImagePool(req, res);
};
module.exports = {
    createEmpImage,
    getEmpImage,
    getEmpImages,
    deleteEmpImage,
    updateEmpImage
};
