"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const points = require('../controllers/point');
const routeAcc = express_1.default.Router();
routeAcc.get('/points', function (req, res) {
    points.getPoints(res);
});
routeAcc.post('/point', function (req, res) {
    points.createPoint(req, res);
});
routeAcc.delete('/point', function (req, res) {
    points.deletePoint(req, res);
});
routeAcc.get('/point/:id', function (req, res) {
    points.getPoint(req, res);
});
routeAcc.put('/point/:id', function (req, res) {
    points.updatePoint(req, res);
});
module.exports = routeAcc;
