"use strict";
const getUsersModel = require('./getUsers');
const createUserModel = require('./createUser');
const deleteUserModel = require('./deleteUser');
const getUserModel = require('./getUser');
const updateUserModel = require('./updateUser');
const getUsers = (res) => {
    getUsersModel.getUsersPool(res);
};
const createUser = (req, res) => {
    createUserModel.createUserPool(req, res);
};
const deleteUser = (req, res) => {
    deleteUserModel.deleteUserPool(req, res);
};
const getUser = (req, res) => {
    getUserModel.getUserPool(req, res);
};
const updateUser = (req, res) => {
    updateUserModel.updateUserPool(req, res);
};
module.exports = {
    getUsers,
    createUser,
    deleteUser,
    getUser,
    updateUser
};
