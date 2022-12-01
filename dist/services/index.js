"use strict";
const create = require('./createUser');
const createUserModule = create.createUser;
const getUserModule = create.getUser;
module.exports = {
    createUserModule,
    getUserModule
};
