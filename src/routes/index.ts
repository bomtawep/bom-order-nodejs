import * as express from "express";

const accRouter = require('./account-routes')
const orderRouter = require('./order-routes')
const privilegeRouter = require('./privilege-routes')
const productTypeRouter = require('./product-type-routes')
const productRouter = require('./product-routes')
const imageRouter = require('./image-routes')
const empImageRouter = require('./emp-image-routes')
const orderListRouter = require('./order-list-routes')
const empRouter = require('./emp-routes')
const cusRouter = require('./cus-routes')
const tableRouter = require('./table-routes')
const orderItemRouter = require('./order-item-routes')
const routeAcc = express.Router()

export = (() => {
  routeAcc.use('/acc', accRouter);
  routeAcc.use('/order', orderRouter);
  routeAcc.use('/privilege', privilegeRouter);
  routeAcc.use('/product-type', productTypeRouter);
  routeAcc.use('/product', productRouter);
  routeAcc.use('/image', imageRouter);
  routeAcc.use('/emp-image', empImageRouter);
  routeAcc.use('/order-list', orderListRouter);
  routeAcc.use('/emp', empRouter);
  routeAcc.use('/cus', cusRouter);
  routeAcc.use('/table', tableRouter);
  routeAcc.use('/order-item', orderItemRouter);
  return routeAcc;
})();