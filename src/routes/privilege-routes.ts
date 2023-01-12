import express from 'express'
const points = require('../controllers/privilege')
const routeAcc = express.Router()

routeAcc.get('/privileges', function(req: any, res: any) {
    points.getPrivileges(res)
});
routeAcc.post('/privilege', function(req: any, res: any) {
    points.createPrivilege(req, res)
});
routeAcc.delete('/privilege', function(req: any, res: any) {
    points.deletePrivilege(req, res)
});
routeAcc.get('/privilege/:id', function(req: any, res: any) {
    points.getPrivilege(req, res)
});
routeAcc.put('/privilege/:id', function(req: any, res: any) {
    points.updatePrivilege(req, res)
});

module.exports = routeAcc;