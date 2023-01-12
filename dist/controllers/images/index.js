"use strict";
const getImagesModel = require('./createImage');
const createImage = (res) => {
    getProductsModel.getProductsPool(res);
};
module.exports = {
    createImage
};
