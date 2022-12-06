import express from 'express'
const users = require('../controllers/account')
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
routeAcc.get('/user/:id', function(req: any, res: any) {
    users.getUser(req, res)
});
routeAcc.put('/user/:id', function(req: any, res: any) {
    users.updateUser(req, res)
});

module.exports = routeAcc;