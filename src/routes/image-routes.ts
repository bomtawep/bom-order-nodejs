import express from 'express'
const image = require('../controllers/image')
const routeAcc = express.Router()
const multer = require('multer');

const imageUpload = multer({
    dest: 'images',
  });

routeAcc.post('/image', imageUpload.single('image'), function(req: any, res: any) {
    image.createImage(req, res)
});
routeAcc.get('/image/:id', function(req: any, res: any) {
  image.getImage(req, res)
});
routeAcc.get('/images', function(req: any, res: any) {
  image.getImages(res)
});
routeAcc.delete('/image', function(req: any, res: any) {
  image.deleteImage(req, res)
});
routeAcc.put('/image/:id', imageUpload.single('image'), function(req: any, res: any) {
  image.updateImage(req, res)
});

module.exports = routeAcc;