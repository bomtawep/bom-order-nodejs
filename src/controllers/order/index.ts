const getOrdersModel = require('./getOrders')
const createOrderModel = require('./createOrder')
const deleteOrderModel = require('./deleteOrder')
const getOrderModel = require('./getOrder')
const updateOrderModel = require('./updateOrder')

const getOrders = (res: any) =>  {
  getOrdersModel.getOrdersPool(res)
}
const createOrder = (req: any, res: any) =>  {
  createOrderModel.createOrderPool(req, res)
}
const deleteOrder = (req: any, res: any) =>  {
  deleteOrderModel.deleteOrderPool(req, res)
}
const getOrder = (req: any, res: any) =>  {
  getOrderModel.getOrderPool(req, res)
}
const updateOrder = (req: any, res: any) =>  {
  updateOrderModel.updateOrderPool(req, res)
}
module.exports = {
  getOrders,
  createOrder,
  deleteOrder,
  getOrder,
  updateOrder
};