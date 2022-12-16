const getPointsModel = require('./getPoints')
const createPointModel = require('./createPoint')
const deletePointModel = require('./deletePoint')
const getPointModel = require('./getPoint')
const updatePointModel = require('./updatePoint')

const getPoints = (res: any) =>  {
  getPointsModel.getPointsPool(res)
}
const createPoint = (req: any, res: any) =>  {
  createPointModel.createPointPool(req, res)
}
const deletePoint = (req: any, res: any) =>  {
  deletePointModel.deletePointPool(req, res)
}
const getPoint = (req: any, res: any) =>  {
  getPointModel.getPointPool(req, res)
}
const updatePoint = (req: any, res: any) =>  {
  updatePointModel.updatePointPool(req, res)
}
module.exports = {
  getPoints,
  createPoint,
  deletePoint,
  getPoint,
  updatePoint
};