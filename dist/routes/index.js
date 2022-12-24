"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
const express = __importStar(require("express"));
const accRouter = require('./account-routes');
const orderRouter = require('./order-routes');
const privilegeRouter = require('./privilege-routes');
const productTypeRouter = require('./product-type-routes');
const productRouter = require('./product-routes');
const imageRouter = require('./image-routes');
const empImageRouter = require('./emp-image-routes');
const orderListRouter = require('./order-list-routes');
const empRouter = require('./emp-routes');
const cusRouter = require('./cus-routes');
const tableRouter = require('./table-routes');
const orderItemRouter = require('./order-item-routes');
const routeAcc = express.Router();
module.exports = (() => {
    routeAcc.use('/acc', accRouter);
    routeAcc.use('/order', orderRouter);
    routeAcc.use('/privilege', privilegeRouter);
    routeAcc.use('/product-type', productTypeRouter);
    routeAcc.use('/product', productRouter);
    routeAcc.use('/image', imageRouter);
    routeAcc.use('/emp-image', empImageRouter);
    routeAcc.use('/order-list', orderListRouter);
    routeAcc.use('/emp', empRouter);
    routeAcc.use('/cus', cusRouter);
    routeAcc.use('/table', tableRouter);
    routeAcc.use('/order-item', orderItemRouter);
    return routeAcc;
})();
