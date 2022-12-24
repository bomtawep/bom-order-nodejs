"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_types = require('../controllers/product_type');
const routeAcc = express_1.default.Router();
routeAcc.get('/product-types', function (req, res) {
    product_types.getProductTypes(res);
});
routeAcc.post('/product-type', function (req, res) {
    product_types.createProductType(req, res);
});
routeAcc.delete('/product-type', function (req, res) {
    product_types.deleteProductType(req, res);
});
routeAcc.get('/product-type/:id', function (req, res) {
    product_types.getProductType(req, res);
});
routeAcc.put('/product-type/:id', function (req, res) {
    product_types.updateProductType(req, res);
});
module.exports = routeAcc;
