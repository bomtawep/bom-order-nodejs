const getProductTypesModel = require('./getProductTypes')
const createProductTypeModel = require('./createProductType')
const deleteProductTypeModel = require('./deleteProductType')
const getProductTypeModel = require('./getProductType')
const updateProductTypeModel = require('./updateProductType')

const getProductTypes = (res: any) =>  {
  getProductTypesModel.getProductTypesPool(res)
}
const createProductType = (req: any, res: any) =>  {
  createProductTypeModel.createProductTypePool(req, res)
}
const deleteProductType = (req: any, res: any) =>  {
  deleteProductTypeModel.deleteProductTypePool(req, res)
}
const getProductType = (req: any, res: any) =>  {
  getProductTypeModel.getProductTypePool(req, res)
}
const updateProductType = (req: any, res: any) =>  {
  updateProductTypeModel.updateProductTypePool(req, res)
}
module.exports = {
  getProductTypes,
  createProductType,
  deleteProductType,
  getProductType,
  updateProductType
};