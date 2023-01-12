"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const points = require('../controllers/privilege');
const routeAcc = express_1.default.Router();
routeAcc.get('/privileges', function (req, res) {
    points.getPrivileges(res);
});
routeAcc.post('/privilege', function (req, res) {
    points.createPrivilege(req, res);
});
routeAcc.delete('/privilege', function (req, res) {
    points.deletePrivilege(req, res);
});
routeAcc.get('/privilege/:id', function (req, res) {
    points.getPrivilege(req, res);
});
routeAcc.put('/privilege/:id', function (req, res) {
    points.updatePrivilege(req, res);
});
module.exports = routeAcc;
