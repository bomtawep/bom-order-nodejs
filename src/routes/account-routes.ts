import express from 'express'
const users = require('../controllers')
const routeAcc = express.Router()

routeAcc.get('/users', function(req: any, res: any) {
    users.getUsers(res)
});
routeAcc.post('/user', function(req: any, res: any) {
    users.createUser(req, res)
});
routeAcc.delete('/user', function(req: any, res: any) {
    users.deleteUser(req, res)
});

module.exports = routeAcc;