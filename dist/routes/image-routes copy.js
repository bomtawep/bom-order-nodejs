"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const image = require('../controllers/image');
const routeAcc = express_1.default.Router();
const multer = require('multer');
const imageUpload = multer({
    dest: 'images',
});
routeAcc.post('/image', imageUpload.single('image'), function (req, res) {
    image.createImage(req, res);
});
routeAcc.get('/image/:id', function (req, res) {
    image.getImage(req, res);
});
routeAcc.get('/images', function (req, res) {
    image.getImages(res);
});
routeAcc.delete('/image', function (req, res) {
    image.deleteImage(req, res);
});
routeAcc.put('/image/:id', imageUpload.single('image'), function (req, res) {
    image.updateImage(req, res);
});
module.exports = routeAcc;
