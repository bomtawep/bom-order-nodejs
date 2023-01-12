"use strict";
const getEmpsModel = require('./getEmps');
const createEmpModel = require('./createEmp');
const deleteEmpModel = require('./deleteEmp');
const getEmpModel = require('./getEmp');
const updateEmpModel = require('./updateEmp');
const getEmps = (res) => {
    getEmpsModel.getEmpsPool(res);
};
const createEmp = (req, res) => {
    createEmpModel.createEmpPool(req, res);
};
const deleteEmp = (req, res) => {
    deleteEmpModel.deleteEmpPool(req, res);
};
const getEmp = (req, res) => {
    getEmpModel.getEmpPool(req, res);
};
const updateEmp = (req, res) => {
    updateEmpModel.updateEmpPool(req, res);
};
module.exports = {
    getEmps,
    createEmp,
    deleteEmp,
    getEmp,
    updateEmp
};
