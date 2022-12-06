const getUsersModel = require('./getUsers')
const createUserModel = require('./createUser')
const deleteUserModel = require('./deleteUser')
const getUserModel = require('./getUser')
const updateUserModel = require('./updateUser')

const getUsers = (res: any) =>  {
  getUsersModel.getUsersPool(res)
}
const createUser = (req: any, res: any) =>  {
  createUserModel.createUserPool(req, res)
}
const deleteUser = (req: any, res: any) =>  {
  deleteUserModel.deleteUserPool(req, res)
}
const getUser = (req: any, res: any) =>  {
  getUserModel.getUserPool(req, res)
}
const updateUser = (req: any, res: any) =>  {
  updateUserModel.updateUserPool(req, res)
}
module.exports = {
  getUsers,
  createUser,
  deleteUser,
  getUser,
  updateUser
};