"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tables = require('../controllers/table');
const routeAcc = express_1.default.Router();
routeAcc.get('/tables', function (req, res) {
    tables.getTables(res);
});
routeAcc.post('/table', function (req, res) {
    tables.createTable(req, res);
});
routeAcc.delete('/table', function (req, res) {
    tables.deleteTable(req, res);
});
routeAcc.get('/table/:id', function (req, res) {
    tables.getTable(req, res);
});
routeAcc.put('/table/:id', function (req, res) {
    tables.updateTable(req, res);
});
module.exports = routeAcc;
