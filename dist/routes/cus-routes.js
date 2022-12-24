"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const emp = require('../controllers/cus');
const routeAcc = express_1.default.Router();
routeAcc.post('/cus', function (req, res) {
    emp.createCus(req, res);
});
routeAcc.get('/cus/:id', function (req, res) {
    emp.getCus(req, res);
});
routeAcc.get('/cuss', function (req, res) {
    emp.getCuss(res);
});
routeAcc.delete('/cus', function (req, res) {
    emp.deleteCus(req, res);
});
routeAcc.put('/cus/:id', function (req, res) {
    emp.updateCus(req, res);
});
module.exports = routeAcc;
