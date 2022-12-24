"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const emp_image = require('../controllers/emp_image');
const routeAcc = express_1.default.Router();
const multer = require('multer');
const imageUpload = multer({
    dest: 'images',
});
routeAcc.post('/emp-image', imageUpload.single('image'), function (req, res) {
    emp_image.createEmpImage(req, res);
});
routeAcc.get('/emp-image/:id', function (req, res) {
    emp_image.getEmpImage(req, res);
});
routeAcc.get('/emp-images', function (req, res) {
    emp_image.getEmpImages(res);
});
routeAcc.delete('/emp-image', function (req, res) {
    emp_image.deleteEmpImage(req, res);
});
routeAcc.put('/emp-image/:id', imageUpload.single('image'), function (req, res) {
    emp_image.updateEmpImage(req, res);
});
module.exports = routeAcc;
