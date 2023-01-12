const getOrderListsModel = require('./getOrderLists')
const createOrderListModel = require('./createOrderList')
const deleteOrderListModel = require('./deleteOrderList')
const getOrderListModel = require('./getOrderList')
const updateOrderListModel = require('./updateOrderList')

const getOrderLists = (res: any) =>  {
  getOrderListsModel.getOrderListsPool(res)
}
const createOrderList = (req: any, res: any) =>  {
  createOrderListModel.createOrderListPool(req, res)
}
const deleteOrderList = (req: any, res: any) =>  {
  deleteOrderListModel.deleteOrderListPool(req, res)
}
const getOrderList = (req: any, res: any) =>  {
  getOrderListModel.getOrderListPool(req, res)
}
const updateOrderList = (req: any, res: any) =>  {
  updateOrderListModel.updateOrderListPool(req, res)
}
module.exports = {
  getOrderLists,
  createOrderList,
  deleteOrderList,
  getOrderList,
  updateOrderList
};