"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users = require('../controllers');
const routeAcc = express_1.default.Router();
routeAcc.get('/users', function (req, res) {
    users.getUsers(res);
});
routeAcc.post('/user', function (req, res) {
    users.createUser(req, res);
});
routeAcc.delete('/user', function (req, res) {
    users.deleteUser(req, res);
});
module.exports = routeAcc;
