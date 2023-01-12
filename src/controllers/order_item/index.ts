const getOrderItemsModel = require('./getOrderItems')
const createOrderItemModel = require('./createOrderItem')
const deleteOrderItemModel = require('./deleteOrderItem')
const getOrderItemModel = require('./getOrderItem')
const updateOrderItemModel = require('./updateOrderItem')

const getOrderItems = (res: any) =>  {
  getOrderItemsModel.getOrderItemsPool(res)
}
const createOrderItem = (req: any, res: any) =>  {
  createOrderItemModel.createOrderItemPool(req, res)
}
const deleteOrderItem = (req: any, res: any) =>  {
  deleteOrderItemModel.deleteOrderItemPool(req, res)
}
const getOrderItem = (req: any, res: any) =>  {
  getOrderItemModel.getOrderItemPool(req, res)
}
const updateOrderItem = (req: any, res: any) =>  {
  updateOrderItemModel.updateOrderItemPool(req, res)
}
module.exports = {
  getOrderItems,
  createOrderItem,
  deleteOrderItem,
  getOrderItem,
  updateOrderItem
};