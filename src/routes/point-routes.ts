import express from 'express'
const points = require('../controllers/point')
const routeAcc = express.Router()

routeAcc.get('/points', function(req: any, res: any) {
    points.getPoints(res)
});
routeAcc.post('/point', function(req: any, res: any) {
    points.createPoint(req, res)
});
routeAcc.delete('/point', function(req: any, res: any) {
    points.deletePoint(req, res)
});
routeAcc.get('/point/:id', function(req: any, res: any) {
    points.getPoint(req, res)
});
routeAcc.put('/point/:id', function(req: any, res: any) {
    points.updatePoint(req, res)
});

module.exports = routeAcc;