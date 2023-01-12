const getCussModel = require('./getCuss')
const createCusModel = require('./createCus')
const deleteCusModel = require('./deleteCus')
const getCusModel = require('./getCus')
const updateCusModel = require('./updateCus')

const getCuss = (res: any) =>  {
  getCussModel.getCussPool(res)
}
const createCus = (req: any, res: any) =>  {
  createCusModel.createCusPool(req, res)
}
const deleteCus = (req: any, res: any) =>  {
  deleteCusModel.deleteCusPool(req, res)
}
const getCus = (req: any, res: any) =>  {
  getCusModel.getCusPool(req, res)
}
const updateCus = (req: any, res: any) =>  {
  updateCusModel.updateCusPool(req, res)
}
module.exports = {
  getCuss,
  createCus,
  deleteCus,
  getCus,
  updateCus
};