import * as express from "express";

const adminRouter = require('./account-routes')
const routeAcc = express.Router()
export = (() => {
  routeAcc.use('/acc', adminRouter);
  return routeAcc;
})();