"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const emp = require('../controllers/emp');
const routeAcc = express_1.default.Router();
routeAcc.post('/emp', function (req, res) {
    emp.createEmp(req, res);
});
routeAcc.get('/emp/:id', function (req, res) {
    emp.getEmp(req, res);
});
routeAcc.get('/emps', function (req, res) {
    emp.getEmps(res);
});
routeAcc.delete('/emp', function (req, res) {
    emp.deleteEmp(req, res);
});
routeAcc.put('/emp/:id', function (req, res) {
    emp.updateEmp(req, res);
});
module.exports = routeAcc;
