const getEmpsModel = require('./getEmps')
const createEmpModel = require('./createEmp')
const deleteEmpModel = require('./deleteEmp')
const getEmpModel = require('./getEmp')
const updateEmpModel = require('./updateEmp')

const getEmps = (res: any) =>  {
  getEmpsModel.getEmpsPool(res)
}
const createEmp = (req: any, res: any) =>  {
  createEmpModel.createEmpPool(req, res)
}
const deleteEmp = (req: any, res: any) =>  {
  deleteEmpModel.deleteEmpPool(req, res)
}
const getEmp = (req: any, res: any) =>  {
  getEmpModel.getEmpPool(req, res)
}
const updateEmp = (req: any, res: any) =>  {
  updateEmpModel.updateEmpPool(req, res)
}
module.exports = {
  getEmps,
  createEmp,
  deleteEmp,
  getEmp,
  updateEmp
};