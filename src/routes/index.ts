import * as express from "express";

const accRouter = require('./account-routes')
const orderRouter = require('./order-routes')
const pointRouter = require('./point-routes')
const productTypeRouter = require('./product-type-routes')
const routeAcc = express.Router()
export = (() => {
  routeAcc.use('/acc', accRouter);
  routeAcc.use('/order', orderRouter);
  routeAcc.use('/point', pointRouter);
  routeAcc.use('/produc-type', productTypeRouter);
  return routeAcc;
})();