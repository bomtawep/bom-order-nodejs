const getProductsModel = require('./getProducts')
const createProductModel = require('./createProduct')
const deleteProductModel = require('./deleteProduct')
const getProductModel = require('./getProduct')
const updateProductModel = require('./updateProduct')

const getProducts = (res: any) =>  {
  getProductsModel.getProductsPool(res)
}
const createProduct = (req: any, res: any) =>  {
  createProductModel.createProductPool(req, res)
}
const deleteProduct = (req: any, res: any) =>  {
  deleteProductModel.deleteProductPool(req, res)
}
const getProduct = (req: any, res: any) =>  {
  getProductModel.getProductPool(req, res)
}
const updateProduct = (req: any, res: any) =>  {
  updateProductModel.updateProductPool(req, res)
}
module.exports = {
  getProducts,
  createProduct,
  deleteProduct,
  getProduct,
  updateProduct
};