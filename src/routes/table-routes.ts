import express from 'express'
const tables = require('../controllers/table')
const routeAcc = express.Router()

routeAcc.get('/tables', function(req: any, res: any) {
    tables.getTables(res)
});
routeAcc.post('/table', function(req: any, res: any) {
    tables.createTable(req, res)
});
routeAcc.delete('/table', function(req: any, res: any) {
    tables.deleteTable(req, res)
});
routeAcc.get('/table/:id', function(req: any, res: any) {
    tables.getTable(req, res)
});
routeAcc.put('/table/:id', function(req: any, res: any) {
    tables.updateTable(req, res)
});

module.exports = routeAcc;