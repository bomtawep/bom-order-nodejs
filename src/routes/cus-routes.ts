import express from 'express'
const emp = require('../controllers/cus')
const routeAcc = express.Router()

routeAcc.post('/cus', function(req: any, res: any) {
  emp.createCus(req, res)
});
routeAcc.get('/cus/:id', function(req: any, res: any) {
  emp.getCus(req, res)
});
routeAcc.get('/cuss', function(req: any, res: any) {
  emp.getCuss(res)
});
routeAcc.delete('/cus', function(req: any, res: any) {
  emp.deleteCus(req, res)
});
routeAcc.put('/cus/:id', function(req: any, res: any) {
  emp.updateCus(req, res)
});

module.exports = routeAcc;