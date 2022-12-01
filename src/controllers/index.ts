const getUsersModel = require('./getUser')
const createUserModel = require('./createUser')
const deleteUserModel = require('./deleteUser')

const getUsers = (res: any) =>  {
  getUsersModel.getUsersPool(res)
}
const createUser = (req: any, res: any) =>  {
  createUserModel.createUserPool(req, res)
}
const deleteUser = (req: any, res: any) =>  {
  deleteUserModel.deleteUserPool(req, res)
}
module.exports = {
  getUsers,
  createUser,
  deleteUser
};