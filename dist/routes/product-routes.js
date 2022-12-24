"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products = require('../controllers/product');
const routeAcc = express_1.default.Router();
routeAcc.get('/products', function (req, res) {
    products.getProducts(res);
});
routeAcc.post('/product', function (req, res) {
    products.createProduct(req, res);
});
routeAcc.delete('/product', function (req, res) {
    products.deleteProduct(req, res);
});
routeAcc.get('/product/:id', function (req, res) {
    products.getProduct(req, res);
});
routeAcc.put('/product/:id', function (req, res) {
    products.updateProduct(req, res);
});
module.exports = routeAcc;
