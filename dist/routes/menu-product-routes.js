"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const menu_products = require('../controllers/menu_product');
const routeAcc = express_1.default.Router();
routeAcc.get('/menu-products', function (req, res) {
    menu_products.getMenuProducts(res);
});
routeAcc.post('/menu-product', function (req, res) {
    menu_products.createMenuProduct(req, res);
});
routeAcc.delete('/menu-product', function (req, res) {
    menu_products.deleteMenuProduct(req, res);
});
routeAcc.get('/menu-product/:id', function (req, res) {
    menu_products.getMenuProduct(req, res);
});
routeAcc.put('/menu-product/:id', function (req, res) {
    menu_products.updateMenuProduct(req, res);
});
module.exports = routeAcc;
