"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const conn_1 = __importDefault(require("./conn"));
const conPool = conn_1.default;
module.exports = conPool;
