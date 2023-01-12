import express from 'express'
const emp_image = require('../controllers/emp_image')
const routeAcc = express.Router()
const multer = require('multer');

const imageUpload = multer({
    dest: 'images',
  });

routeAcc.post('/emp-image', imageUpload.single('image'), function(req: any, res: any) {
  emp_image.createEmpImage(req, res)
});
routeAcc.get('/emp-image/:id', function(req: any, res: any) {
  emp_image.getEmpImage(req, res)
});
routeAcc.get('/emp-images', function(req: any, res: any) {
  emp_image.getEmpImages(res)
});
routeAcc.delete('/emp-image', function(req: any, res: any) {
  emp_image.deleteEmpImage(req, res)
});
routeAcc.put('/emp-image/:id', imageUpload.single('image'), function(req: any, res: any) {
  emp_image.updateEmpImage(req, res)
});

module.exports = routeAcc;