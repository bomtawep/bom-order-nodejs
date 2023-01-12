"use strict";
const getPointsModel = require('./getPoints');
const createPointModel = require('./createPoint');
const deletePointModel = require('./deletePoint');
const getPointModel = require('./getPoint');
const updatePointModel = require('./updatePoint');
const getPoints = (res) => {
    getPointsModel.getPointsPool(res);
};
const createPoint = (req, res) => {
    createPointModel.createPointPool(req, res);
};
const deletePoint = (req, res) => {
    deletePointModel.deletePointPool(req, res);
};
const getPoint = (req, res) => {
    getPointModel.getPointPool(req, res);
};
const updatePoint = (req, res) => {
    updatePointModel.updatePointPool(req, res);
};
module.exports = {
    getPoints,
    createPoint,
    deletePoint,
    getPoint,
    updatePoint
};
