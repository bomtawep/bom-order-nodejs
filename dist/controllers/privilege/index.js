"use strict";
const getPrivilegesModel = require('./getPrivileges');
const createPrivilegeModel = require('./createPrivilege');
const deletePrivilegeModel = require('./deletePrivilege');
const getPrivilegeModel = require('./getPrivilege');
const updatePrivilegeModel = require('./updatePrivilege');
const getPrivileges = (res) => {
    getPrivilegesModel.getPrivilegesPool(res);
};
const createPrivilege = (req, res) => {
    createPrivilegeModel.createPrivilegePool(req, res);
};
const deletePrivilege = (req, res) => {
    deletePrivilegeModel.deletePrivilegePool(req, res);
};
const getPrivilege = (req, res) => {
    getPrivilegeModel.getPrivilegePool(req, res);
};
const updatePrivilege = (req, res) => {
    updatePrivilegeModel.updatePrivilegePool(req, res);
};
module.exports = {
    getPrivileges,
    createPrivilege,
    deletePrivilege,
    getPrivilege,
    updatePrivilege
};
