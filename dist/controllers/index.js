"use strict";
const getUsersModel = require('./getUser');
const createUserModel = require('./createUser');
const deleteUserModel = require('./deleteUser');
const getUsers = (res) => {
    getUsersModel.getUsersPool(res);
};
const createUser = (req, res) => {
    createUserModel.createUserPool(req, res);
};
const deleteUser = (req, res) => {
    deleteUserModel.deleteUserPool(req, res);
};
module.exports = {
    getUsers,
    createUser,
    deleteUser
};
