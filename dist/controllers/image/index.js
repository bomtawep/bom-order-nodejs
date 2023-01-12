"use strict";
const createImageModel = require('./createImage');
const getImageModel = require('./getImage');
const getImagesModel = require('./getImages');
const deleteImageModel = require('./deleteImage');
const updateImageModel = require('./updateImage');
const createImage = (req, res) => {
    createImageModel.createImagePool(req, res);
};
const getImage = (req, res) => {
    getImageModel.getImagePool(req, res);
};
const getImages = (res) => {
    getImagesModel.getImagesPool(res);
};
const deleteImage = (req, res) => {
    deleteImageModel.deleteImagePool(req, res);
};
const updateImage = (req, res) => {
    updateImageModel.updateImagePool(req, res);
};
module.exports = {
    createImage,
    getImage,
    getImages,
    deleteImage,
    updateImage
};
