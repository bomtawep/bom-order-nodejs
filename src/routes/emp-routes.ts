import express from 'express'
const emp = require('../controllers/emp')
const routeAcc = express.Router()

routeAcc.post('/emp', function(req: any, res: any) {
  emp.createEmp(req, res)
});
routeAcc.get('/emp/:id', function(req: any, res: any) {
  emp.getEmp(req, res)
});
routeAcc.get('/emps', function(req: any, res: any) {
  emp.getEmps(res)
});
routeAcc.delete('/emp', function(req: any, res: any) {
  emp.deleteEmp(req, res)
});
routeAcc.put('/emp/:id', function(req: any, res: any) {
  emp.updateEmp(req, res)
});

module.exports = routeAcc;