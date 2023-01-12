const getPrivilegesModel = require('./getPrivileges')
const createPrivilegeModel = require('./createPrivilege')
const deletePrivilegeModel = require('./deletePrivilege')
const getPrivilegeModel = require('./getPrivilege')
const updatePrivilegeModel = require('./updatePrivilege')

const getPrivileges = (res: any) =>  {
  getPrivilegesModel.getPrivilegesPool(res)
}
const createPrivilege = (req: any, res: any) =>  {
  createPrivilegeModel.createPrivilegePool(req, res)
}
const deletePrivilege = (req: any, res: any) =>  {
  deletePrivilegeModel.deletePrivilegePool(req, res)
}
const getPrivilege = (req: any, res: any) =>  {
  getPrivilegeModel.getPrivilegePool(req, res)
}
const updatePrivilege = (req: any, res: any) =>  {
  updatePrivilegeModel.updatePrivilegePool(req, res)
}
module.exports = {
  getPrivileges,
  createPrivilege,
  deletePrivilege,
  getPrivilege,
  updatePrivilege
};